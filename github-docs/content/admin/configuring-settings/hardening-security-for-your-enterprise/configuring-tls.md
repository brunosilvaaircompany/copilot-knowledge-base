# Configuring TLS

## About Transport Layer Security

TLS, which replaced SSL, is enabled and configured with a self-signed certificate when GitHub Enterprise Server is started for the first time. As self-signed certificates are not trusted by web browsers and Git clients, these clients will report certificate warnings until you disable TLS or upload a certificate signed by a trusted authority, such as Let's Encrypt.

The GitHub Enterprise Server appliance will send HTTP Strict Transport Security headers when SSL is enabled. Disabling TLS will cause users to lose access to the appliance, because their browsers will not allow a protocol downgrade to HTTP. For more information, see [HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) on Wikipedia.

> [!WARNING]
> When terminating HTTPS connections on a load balancer, the requests from the load balancer to GitHub Enterprise Server also need to use HTTPS. Downgrading the connection to HTTP is not supported.


To allow users to use FIDO U2F for two-factor authentication or deploy GitHub Pages sites with GitHub Actions, you must enable TLS for your instance. For more information, see [Configuring Two Factor Authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication).

## Prerequisites

To use TLS in production, you must have a certificate in an unencrypted PEM format signed by a trusted certificate authority. To use a certificate signed by an internal certificate authority, you must install the root certificate and any intermediate certificates. For more information, see [Troubleshooting Tls Errors](https://docs.github.com/en/admin/configuring-settings/hardening-security-for-your-enterprise/troubleshooting-tls-errors#installing-self-signed-or-untrusted-certificate-authority-ca-root-certificates).

Your certificate will also need Subject Alternative Names configured for the subdomains listed in [Enabling Subdomain Isolation](https://docs.github.com/en/admin/configuring-settings/hardening-security-for-your-enterprise/enabling-subdomain-isolation#about-subdomain-isolation) and will need to include the full certificate chain if it has been signed by an intermediate certificate authority. For more information, see [Subject Alternative Name](https://en.wikipedia.org/wiki/SubjectAltName) on Wikipedia.

You can generate a certificate signing request (CSR) for your instance using the `ghe-ssl-generate-csr` command. For more information, see [Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-ssl-generate-csr).

Your key must be an RSA key and must not have a passphrase. For more information, see [Troubleshooting Tls Errors](https://docs.github.com/en/admin/configuring-settings/hardening-security-for-your-enterprise/troubleshooting-tls-errors#removing-the-passphrase-from-your-key-file).

## Uploading a custom TLS certificate

> [!WARNING]
> Configuring TLS causes a small amount of downtime for your GitHub Enterprise Server instance.


1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings" sidebar, click **Privacy** and uncheck **Private mode**.

1. Select **TLS only (recommended)**.

1. Under "TLS Protocol support", select the protocols you want to allow.
1. Under "Certificate", click **Choose File**, then choose a TLS certificate or certificate chain (in PEM format) to install. This file will usually have a _.pem_, _.crt_, or _.cer_ extension.
1. Under "Unencrypted key", click **Choose File**, then choose an RSA key (in PEM format) to install. This file will usually have a _.key_ extension.

1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



## About Let's Encrypt support

Let's Encrypt is a public certificate authority that issues free, automated TLS certificates that are trusted by browsers using the ACME protocol. You can automatically obtain and renew Let's Encrypt certificates on your appliance without any required manual maintenance.

To use Let's Encrypt automation, your appliance must be configured with a hostname that is publicly accessible over HTTP. The appliance must also be allowed to make outbound HTTPS connections.


When you enable automation of TLS certificate management using Let's Encrypt, your GitHub Enterprise Server instance will contact the Let's Encrypt servers to obtain a certificate. To renew a certificate, Let's Encrypt servers must validate control of the configured domain name with inbound HTTP requests.

You can also use the `ghe-ssl-acme` command line utility on your GitHub Enterprise Server instance to automatically generate a Let's Encrypt certificate. For more information, see [Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-ssl-acme).

## Configuring TLS using Let's Encrypt

To use Let's Encrypt automation, your appliance must be configured with a hostname that is publicly accessible over HTTP. The appliance must also be allowed to make outbound HTTPS connections.


> [!WARNING]
> Configuring TLS causes a small amount of downtime for your GitHub Enterprise Server instance.


1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings" sidebar, click **Privacy** and uncheck **Private mode**.

1. Select **TLS only (recommended)**.

1. Select **Enable automation of TLS certificate management using Let's Encrypt**.
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.


1. In the "Settings" sidebar, click **Privacy** and uncheck **Private mode**.

1. Click **Request TLS certificate**.
1. Wait for the "Status" to change from "STARTED" to "DONE".

   ![Screenshot of the "Requesting TLS Certificate" dialog. At the top of the dialog, "STATUS: DONE" is highlighted with an orange outline.](/assets/images/enterprise/management-console/lets-encrypt-status.png)
1. Click **Save configuration**.

### Troubleshooting TLS with Let's Encrypt

You can troubleshoot issues that affect your TLS certificate from Let's Encrypt.

#### Error: "Security error prevented the resource from being loaded"

In some cases, end users may report that pages for services on your GitHub Enterprise Server instance respond with the following error in a browser's developer tools.

```text
Security error prevented the resource from being loaded
```

To resolve these errors, you must update the Subject Alternative Names (SANs) your Let's Encrypt certificate by reissuing the certificate. Replacement of an instance's certificate requires user-facing downtime.

1. Communicate the upcoming downtime to your users, and consider enabling maintenance mode. For more information, see the following articles.

   * [Customizing User Messages For Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/communicating-information-to-users-in-your-enterprise/customizing-user-messages-for-your-enterprise#creating-a-mandatory-message)
   * [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode)
1. SSH into your GitHub Enterprise Server instance. If your instance comprises multiple nodes, for example if high availability or geo-replication are configured, SSH into the primary node. If you use a cluster, you can SSH into any node. Replace HOSTNAME with the hostname for your instance, or the hostname or IP address of a node. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

   ```shell copy
   ssh -p 122 admin@HOSTNAME
   ```

1. To disable Let's Encrypt, run the following command.

   ```shell copy
   ghe-ssl-acme -d
   ```

1. To clear the existing settings for Let's Encrypt, run the following command.

   ```shell copy
   ghe-ssl-acme -x
   ```

1. To request and install a new certificate from Let's Encrypt, run the following command.

   ```shell copy
   ghe-ssl-acme -e
   ```

1. To apply the configuration, run the following command.

   > [!NOTE]
   > During a configuration run, services on your GitHub Enterprise Server instance may restart, which can cause brief downtime for users.

    ```shell copy
    ghe-config-apply
    ```

1. Wait for the configuration run to complete.


1. If you configured a user message or maintenance mode, remove the message and disable maintenance mode.



## Configuring cipher suites and cryptographic algorithms

You can configure the cipher suites and cryptographic algorithms that GitHub Enterprise Server uses for TLS and SSH connections. For more information, see [Configuring Tls And SSH Ciphers](https://docs.github.com/en/admin/configuring-settings/hardening-security-for-your-enterprise/configuring-tls-and-ssh-ciphers).
