# Configuring SSH connections to your instance

## About SSH connections to your instance

Each GitHub Enterprise Server instance accepts SSH connections over two ports. Site administrators can access the administrative shell via SSH, then run command-line utilities, troubleshoot, and perform maintenance. Users can connect via SSH to access and write Git data in the instance's repositories. Users do not have shell access to your instance. For more information, see the following articles.

* [Network Ports](https://docs.github.com/en/admin/configuring-settings/configuring-network-settings/network-ports)
* [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh)
* [About SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh)


To accommodate the SSH clients in your environment, you can configure the types of connections that your GitHub Enterprise Server instance will accept.



You can also configure the cryptographic algorithms (ciphers, MAC algorithms, key exchange algorithms, and signature types) that {% ifversion ghes %}your GitHub Enterprise Server instance uses for SSH connections. For more information, see [Configuring Tls And SSH Ciphers](https://docs.github.com/en/admin/configuring-settings/hardening-security-for-your-enterprise/configuring-tls-and-ssh-ciphers).

{% endif %}

## Configuring SSH connections with RSA keys

When users perform Git operations on your GitHub Enterprise Server instance via SSH over port 22, the client can authenticate with an RSA key. The client may sign the attempt using the SHA-1 hash function. In this context, the SHA-1 hash function is no longer secure. For more information, see [SHA-1](https://en.wikipedia.org/wiki/SHA-1) on Wikipedia.

By default, SSH connections that satisfy **both** of the following conditions will fail.

* The RSA key was added to a user account on your GitHub Enterprise Server instance after the cutoff date of midnight UTC on August 1, 2022.
* The SSH client signs the connection attempt with the SHA-1 hash function.


You can adjust the cutoff date. If the user uploaded the RSA key before the cutoff date, the client can continue to connect successfully using SHA-1 as long as the key remains valid. Alternatively, you can reject all SSH connections authenticated with an RSA key if the client signs the connection using the SHA-1 hash function.

Regardless of the setting you choose for your instance, clients can continue to connect using any RSA key signed with a SHA-2 hash function.

If you use an SSH certificate authority, connections will fail if the certificate's `valid_after` date is after the cutoff date. For more information, see [About SSH Certificate Authorities](https://docs.github.com/en/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities).

For more information, see [the GitHub Blog](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server).

1. SSH into your GitHub Enterprise Server instance. If your instance comprises multiple nodes, for example if high availability or geo-replication are configured, SSH into the primary node. If you use a cluster, you can SSH into any node. Replace HOSTNAME with the hostname for your instance, or the hostname or IP address of a node. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

   ```shell copy
   ssh -p 122 admin@HOSTNAME
   ```

1. Audit your instance's logs for connections that use unsecure algorithms or hash functions using the `ghe-find-insecure-git-operations` utility. For more information, see [Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-find-insecure-git-operations).
1. To configure a cutoff date after which your GitHub Enterprise Server instance will deny connections from clients that use an RSA key uploaded after the date if the connection is signed by the SHA-1 hash function, enter the following command. Replace _**RFC-3399-UTC-TIMESTAMP**_ with a valid RFC 3399 UTC timestamp. For example, the default value, August 1, 2022, would be represented as `2022-08-01T00:00:00Z`. For more information, see [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) on the IETF website.

   <pre>
   $ ghe-config app.gitauth.rsa-sha1 RFC-3339-UTC-TIMESTAMP
   </pre>
1. Alternatively, to completely disable SSH connections using RSA keys that are signed with the SHA-1 hash function, enter the following command.

   ```shell
   ghe-config app.gitauth.rsa-sha1 false
   ```

1. To apply the configuration, run the following command.

   > [!NOTE]
   > During a configuration run, services on your GitHub Enterprise Server instance may restart, which can cause brief downtime for users.

    ```shell copy
    ghe-config-apply
    ```

1. Wait for the configuration run to complete.
