# Configuring built-in firewall rules

## About your GitHub Enterprise Server instance's firewall

GitHub Enterprise Server uses Ubuntu's Uncomplicated Firewall (UFW) on the virtual appliance. For more information see [Firewall](https://documentation.ubuntu.com/server/how-to/security/firewalls/#ufw-uncomplicated-firewall) in the Ubuntu documentation. GitHub Enterprise Server automatically updates the firewall allowlist of allowed services with each release.

After you install GitHub Enterprise Server, all required network ports are automatically opened to accept connections. Every non-required port is automatically configured as `deny`, and the default outgoing policy is configured as `allow`. Stateful tracking is enabled for any new connections; these are typically network packets with the `SYN` bit set. For more information, see [Network Ports](https://docs.github.com/en/admin/configuring-settings/configuring-network-settings/network-ports).

The UFW firewall also opens several other ports that are required for GitHub Enterprise Server to operate properly. For more information on the UFW rule set, see [the UFW README](https://github.com/jbq/ufw/blob/master/README#L213).

We do not recommend customizing UFW as it can complicate some troubleshooting issues.

## Viewing the default firewall rules

1. SSH into your GitHub Enterprise Server instance. If your instance comprises multiple nodes, for example if high availability or geo-replication are configured, SSH into the primary node. If you use a cluster, you can SSH into any node. Replace HOSTNAME with the hostname for your instance, or the hostname or IP address of a node. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

   ```shell copy
   ssh -p 122 admin@HOSTNAME
   ```


1. To view the default firewall rules, use the `sudo ufw status` command. You should see output similar to this:

   ```shell
   $ sudo ufw status
   > Status: active
   > To                         Action      From
   > --                         ------      ----
   > ghe-1194                   ALLOW       Anywhere
   > ghe-122                    ALLOW       Anywhere
   > ghe-161                    ALLOW       Anywhere
   > ghe-22                     ALLOW       Anywhere
   > ghe-25                     ALLOW       Anywhere
   > ghe-443                    ALLOW       Anywhere
   > ghe-80                     ALLOW       Anywhere
   > ghe-8080                   ALLOW       Anywhere
   > ghe-8443                   ALLOW       Anywhere
   > ghe-9418                   ALLOW       Anywhere
   > ghe-1194 (v6)              ALLOW       Anywhere (v6)
   > ghe-122 (v6)               ALLOW       Anywhere (v6)
   > ghe-161 (v6)               ALLOW       Anywhere (v6)
   > ghe-22 (v6)                ALLOW       Anywhere (v6)
   > ghe-25 (v6)                ALLOW       Anywhere (v6)
   > ghe-443 (v6)               ALLOW       Anywhere (v6)
   > ghe-80 (v6)                ALLOW       Anywhere (v6)
   > ghe-8080 (v6)              ALLOW       Anywhere (v6)
   > ghe-8443 (v6)              ALLOW       Anywhere (v6)
   > ghe-9418 (v6)              ALLOW       Anywhere (v6)
   ```

## Adding custom firewall rules

> [!WARNING]
> Before you add custom firewall rules, back up your current rules in case you need to reset to a known working state. If you're locked out of your server, visit [GitHub Enterprise Support](https://support.github.com) and contact us to reconfigure the original firewall rules. Restoring the original firewall rules involves downtime for your server.

1. Configure a custom firewall rule.
1. Check the status of each new rule with the `status numbered` command.

   ```shell
   sudo ufw status numbered
   ```

1. To back up your custom firewall rules, use the `cp`command to move the rules to a new file.

   ```shell
   sudo cp -r /etc/ufw ~/ufw.backup
   ```

> [!WARNING]
> If you're upgrading your server with an upgrade package you will need to back up your firewall rules to a remote location before installing the upgrade. When using an upgrade package, the root partition is replaced and any custom files that were created will be lost. This doesn’t happen when you upgrade your server using a hotpatch.

After you upgrade your GitHub Enterprise Server instance, you must reapply your custom firewall rules. We recommend that you create a script to reapply your firewall custom rules.

## Restoring the default firewall rules

If something goes wrong after you change the firewall rules, you can reset the rules from your original backup.

> [!WARNING]
> If you didn't back up the original rules before making changes to the firewall, visit [GitHub Enterprise Support](https://support.github.com) and contact us for further assistance.
>
> If you backed up your original rules to a remote location prior to an upgrade, they will need to be transferred back to your server before they can be restored.

1. SSH into your GitHub Enterprise Server instance. If your instance comprises multiple nodes, for example if high availability or geo-replication are configured, SSH into the primary node. If you use a cluster, you can SSH into any node. Replace HOSTNAME with the hostname for your instance, or the hostname or IP address of a node. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

   ```shell copy
   ssh -p 122 admin@HOSTNAME
   ```


1. To restore the previous backup rules, copy them back to the firewall with the `cp` command.

   ```shell
   sudo cp -f ~/ufw.backup/*rules /etc/ufw
   ```

1. Restart the firewall with the `systemctl` command.

   ```shell
   sudo systemctl restart ufw
   ```

1. Confirm that the rules are back to their defaults with the `ufw status` command.

   ```shell
   $ sudo ufw status
   > Status: active
   > To                         Action      From
   > --                         ------      ----
   > ghe-1194                   ALLOW       Anywhere
   > ghe-122                    ALLOW       Anywhere
   > ghe-161                    ALLOW       Anywhere
   > ghe-22                     ALLOW       Anywhere
   > ghe-25                     ALLOW       Anywhere
   > ghe-443                    ALLOW       Anywhere
   > ghe-80                     ALLOW       Anywhere
   > ghe-8080                   ALLOW       Anywhere
   > ghe-8443                   ALLOW       Anywhere
   > ghe-9418                   ALLOW       Anywhere
   > ghe-1194 (v6)              ALLOW       Anywhere (v6)
   > ghe-122 (v6)               ALLOW       Anywhere (v6)
   > ghe-161 (v6)               ALLOW       Anywhere (v6)
   > ghe-22 (v6)                ALLOW       Anywhere (v6)
   > ghe-25 (v6)                ALLOW       Anywhere (v6)
   > ghe-443 (v6)               ALLOW       Anywhere (v6)
   > ghe-80 (v6)                ALLOW       Anywhere (v6)
   > ghe-8080 (v6)              ALLOW       Anywhere (v6)
   > ghe-8443 (v6)              ALLOW       Anywhere (v6)
   > ghe-9418 (v6)              ALLOW       Anywhere (v6)
   ```
