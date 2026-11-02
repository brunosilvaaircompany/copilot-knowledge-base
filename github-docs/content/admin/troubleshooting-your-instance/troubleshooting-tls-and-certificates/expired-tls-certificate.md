# Expired TLS certificate

## Symptoms

* Users cannot access the instance.
* Pull requests do not update with new pushes.
* Webhooks are not delivered, and GitHub Actions workflows are not triggered.
* `/var/log/github/exceptions.log` contains `certificate verify failed` errors.

## Causes

Every certificate is only valid between its `notBefore` and `notAfter` dates. If the certificate for your instance, or any intermediate or root certificate in its chain, has expired, validation fails.

Custom certificate authority (CA) certificates installed on the instance can expire in the same way.

## Confirming the problem

1. SSH into the administrative shell. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
1. Check the validity dates of the certificate the instance is using.

   ```shell
   openssl x509 -in /etc/haproxy/ssl.crt -noout -subject -dates
   ```

   If the `notAfter` date has passed, the certificate has expired.

1. If you have installed custom CA certificates, list them.

   ```shell
   ghe-ssl-ca-certificate-install -l
   ```

1. Check the validity dates of each one, replacing CERTIFICATE with a file name from the list.

   ```shell
   openssl x509 -in /usr/local/share/ca-certificates/CERTIFICATE -noout -subject -dates
   ```

## Resolving the problem

> [!WARNING]
> Replacing a certificate starts a configuration run, which restarts services. Enable maintenance mode first to reduce the impact on users. For more information, see [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode).

1. Upload a valid certificate, or enable Let's Encrypt to manage the certificate for you. For more information, see [Configuring Tls](https://docs.github.com/en/admin/configuring-settings/hardening-security-for-your-enterprise/configuring-tls).

   Include the full certificate chain in the file you upload. For more information, see [Troubleshooting Tls Errors](https://docs.github.com/en/admin/configuring-settings/hardening-security-for-your-enterprise/troubleshooting-tls-errors#certificate-validity-errors).

1. For each expired custom CA certificate, remove it with `ghe-ssl-ca-certificate-install -r` if it is no longer needed. If the instance still needs to trust that CA, install a valid replacement with `ghe-ssl-ca-certificate-install -c` instead. Then apply the configuration. For more information, see [Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-ssl-ca-certificate-install).
1. If you enabled maintenance mode, disable it once the configuration run has finished.

## Contacting GitHub Support

If your certificate is in date but you see the symptoms above, an intermediate or root certificate in the chain may have expired. If you cannot confirm this, or the problems continue after you replace the certificate, contact GitHub Support. For more information, see [Creating A Support Ticket](https://docs.github.com/en/support/contacting-github-support/creating-a-support-ticket).

Do not send your private key to GitHub Support.

If you have already opened a ticket, attaching a support bundle helps GitHub Support diagnose the problem faster. For more information, see [Providing Data To GitHub Support](https://docs.github.com/en/support/contacting-github-support/providing-data-to-github-support).

## Further reading

* [About System Logs](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-system-logs)
