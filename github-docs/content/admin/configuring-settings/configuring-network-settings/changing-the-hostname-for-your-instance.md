# Changing the hostname for your instance

## About changes to the hostname for GitHub Enterprise Server

If you need to use a new hostname for your GitHub Enterprise Server instance, you must back up the existing instance's settings and data, configure a new instance, restore the backup to the new instance, and then adjust your DNS configuration to send traffic to the new instance.

Migration to a new instance requires downtime. The amount of downtime required depends on how much data you need to back up, as well as the speed of the network connection between the backup host and the instances.

The new instance cannot directly replace an existing instance in a high availability configuration. Ensuring the new instance is configured with a different IP address to the instance with the old hostname is strongly recommended, and can simplify roll back. In high availability environments, once the restore is complete and the state of the new instance has been validated, you can then proceed with using a fresh appliance, or reconfiguring an existing replica. See [Creating A High Availability Replica](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/configuring-high-availability/creating-a-high-availability-replica).

In this article, the term "source instance" refers to the instance with the old hostname, and "destination instance" refers to the instance with the new hostname.

> [!WARNING]
> Do not change the hostname for GitHub Enterprise Server after initial setup. Changing the hostname will cause unexpected behavior, up to and including instance outages and invalidation of users' security keys. If you have changed the hostname for your instance and are experiencing problems, contact GitHub Enterprise Support or GitHub Premium Support.


## Migrating to an instance with a new hostname

1. Configure a destination instance of GitHub Enterprise Server with the new hostname you'd like to use. For more information, see the following documentation.

   * [Setting Up A GitHub Enterprise Server Instance](https://docs.github.com/en/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance)
   * [Configuring The Hostname For Your Instance](https://docs.github.com/en/admin/configuring-settings/configuring-network-settings/configuring-the-hostname-for-your-instance)
1. Inform the instance's users of the scheduled downtime. Optionally, you can create a mandatory message that will appear for all users who sign in. For more information, see [Customizing user messages for your enterprise](/admin/managing-accounts-and-repositories/communicating-information-to-users-in-your-enterprise/customizing-user-messages-for-your-enterprise#creating-a-mandatory-message).
1. On the source instance, enable maintenance mode to prevent deltas from occurring. For more information, see [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode#enabling-maintenance-mode-immediately-or-scheduling-a-maintenance-window-for-a-later-time).
1. Back up the source instance's data and settings using GitHub Enterprise Server Backup Service. For more information, see [About The Backup Service For GitHub Enterprise Server](https://docs.github.com/en/admin/backing-up-and-restoring-your-instance/about-the-backup-service-for-github-enterprise-server). (This step may take up to several hours to complete.)
1. Copy the backup snapshot to the destination instance. This can be achieved by locating the snapshot on the backup disk (typically mounted at `/data/backup/data`) and copying it to the same directory on the destination appliance via `scp` or `rsync`.
1. If your source instance has GitHub Actions enabled, you must configure the external storage provider for GitHub Actions on the destination instance. See [Backing Up And Restoring GitHub Enterprise Server With GitHub Actions Enabled](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/advanced-configuration-and-troubleshooting/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled).
1. On the destination instance, enable maintenance mode to allow restoration of the backup taken from the source instance.
1. Restore the backup to the destination instance with the desired hostname. Run the `ghe-restore` utility without the `-c` option to prevent overwriting the destination instance's configuration. See [Restoring From A Backup](https://docs.github.com/en/admin/backing-up-and-restoring-your-instance/restoring-from-a-backup).
1. Finalize configuration of the destination instance. For more information, see [Configuring Settings](https://docs.github.com/en/admin/configuring-settings).
1. Optionally, while the destination instance is in maintenance mode, validate the instance's configuration and configuration run log (`/data/user/common/ghe-config.log`) and verify that user data is intact. For more information, see [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list).
1. To direct traffic to the destination instance, update the DNS `CNAME` record with the source instance's hostname to resolve to the IP address of the destination instance.

   > [!NOTE]
   > Restored user-generated content in the instance's web application will likely contain URLs that reference the source instance's old hostname. Optionally, to ensure that these links continue to resolve to the destination instance, you can configure a redirect using DNS. In addition to the `CNAME` record that resolves to the new instance's hostname, configure a second DNS `CNAME` record that directs traffic from the original hostname to the new hostname. For more information, see the documentation for your DNS provider.

1. On the destination instance, disable maintenance mode.
