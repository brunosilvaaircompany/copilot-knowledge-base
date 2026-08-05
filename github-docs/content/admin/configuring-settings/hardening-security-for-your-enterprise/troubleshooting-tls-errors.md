# Troubleshooting TLS errors

## Removing the passphrase from your key file

If you have a Linux machine with OpenSSL installed, you can remove your passphrase.

1. Rename your original key file.

   ```shell
   mv yourdomain.key yourdomain.key.orig
   ```

1. Generate a new key without a passphrase.

   ```shell
   openssl rsa -in yourdomain.key.orig -out yourdomain.key
   ```

You'll be prompted for the key's passphrase when you run this command.

For more information about OpenSSL, see [OpenSSL's documentation](https://www.openssl.org/docs/).

## Converting your TLS certificate or key into PEM format

If you have OpenSSL installed, you can convert your key into PEM format by using the `openssl` command. For example, you can convert a key from DER format into PEM format.

```shell
openssl rsa -in yourdomain.der -inform DER -out yourdomain.key -outform PEM
```

Otherwise, you can use the SSL Converter tool to convert your certificate into the PEM format. For more information, see the [SSL Converter tool's documentation](https://www.sslshopper.com/ssl-converter.html).

## Unresponsive installation after uploading a key

If your GitHub Enterprise Server instance is unresponsive after uploading an TLS key, please [contact GitHub Enterprise Support](https://enterprise.github.com/support) with specific details, including a copy of your TLS certificate. Ensure that your private key **is not** included.

## Certificate validity errors

Clients such as web browsers and command-line Git will display an error message if they cannot verify the validity of an TLS certificate. This often occurs with self-signed certificates as well as "chained root" certificates issued from an intermediate root certificate that is not recognized by the client.

If you are using a certificate signed by a certificate authority (CA), the certificate file that you upload to GitHub Enterprise Server must include a certificate chain with that CA's root certificate. To create such a file, concatenate your entire certificate chain (or "certificate bundle") onto the end of your certificate, ensuring that the principal certificate with your hostname comes first. On most systems you can do this with a command similar to:

```shell
cat yourdomain.com.crt bundle-certificates.crt > yourdomain.combined.crt
```

You should be able to download a certificate bundle (for example, `bundle-certificates.crt`) from your certificate authority or TLS vendor.

## Installing self-signed or untrusted certificate authority (CA) root certificates

If your GitHub Enterprise Server appliance interacts with other machines on your network that use a self-signed or untrusted certificate, you will need to import the signing CA's root certificate into the system-wide certificate store in order to access those systems over HTTPS. If you want to use a certificate signed by an internal certificate authority, you must install the root certificate and any intermediate certificates.

1. Obtain the CA's root certificate from your local certificate authority and ensure it is in PEM format.
1. Copy the file to your GitHub Enterprise Server appliance over SSH as the "admin" user on port 122.

   ```shell
   scp -P 122 rootCA.crt admin@HOSTNAME:/home/admin
   ```

1. Connect to the GitHub Enterprise Server administrative shell over SSH as the "admin" user on port 122.

   ```shell
   ssh -p 122 admin@HOSTNAME
   ```

1. Import the certificate into the system-wide certificate store.

   ```shell
   ghe-ssl-ca-certificate-install -c rootCA.crt
   ```

1. To apply the configuration, run the following command.

   > [!NOTE]
   > During a configuration run, services on your GitHub Enterprise Server instance may restart, which can cause brief downtime for users.

    ```shell copy
    ghe-config-apply
    ```

1. Wait for the configuration run to complete.


## Updating a TLS certificate

You can generate a new self-signed certificate or update an existing TLS certificate for your GitHub Enterprise Server instance with the `ghe-ssl-certificate-setup` command line utility. For more information, see [Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-ssl-certificate-setup).

### Troubleshooting problems with server communications after updating a TLS certificate

If you encounter issues with communication or other problems on your server after updating a certificate, there may be missing files or symlinks in the install. Check your web log output for the following message.

```text
 certificate verify failed (unable to get issuer certificate)
```

If you see this message, it is likely there are missing or misconfigured certificates. This may prevent the application's services from communicating with each other.

To remediate this issue:

1. Back up your current TLS certificates directory.
1. To refresh certificates and content that may be missing in the`/etc/ssl/certs` directory, run the following command.

   ```shell copy
   sudo update-ca-certificates --verbose --fresh
   ```

If you are still having problems, please contact [GitHub Enterprise Support](https://support.github.com).
