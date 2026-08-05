# Setting up a staging instance

## About staging instances

GitHub recommends that you set up a separate environment to test backups, updates, or changes to the configuration for your GitHub Enterprise Server instance. This environment, which you should isolate from your production systems, is called a staging environment.

For example, to protect against loss of data, you can regularly validate the backup of your production instance. You can regularly restore the backup of your production data to a separate GitHub Enterprise Server instance in a staging environment. On this staging instance, you could also test the upgrade to the latest feature release of GitHub Enterprise Server.

> [!TIP]
> You may reuse your existing GitHub Enterprise license file as long as the staging instance is not used in a production capacity.

## Considerations for a staging environment

To thoroughly test GitHub Enterprise Server and recreate an environment that's as similar to your production environment as possible, consider the external systems that interact with your instance. For example, you may want to test the following in your staging environment.

* Authentication, especially if you use an external authentication provider like SAML
* Integration with an external ticketing system
* Integration with a continuous integration server
* External scripts or software that use the GitHub Enterprise Server APIs
* External SMTP server for email notifications

## Setting up a staging instance

You can set up a staging instance from scratch and configure the instance however you like. For more information, see [Setting Up A GitHub Enterprise Server Instance](https://docs.github.com/en/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance) and [Configuring Settings](https://docs.github.com/en/admin/configuring-settings).

Alternatively, you can create a staging instance that reflects your production configuration by restoring a backup of your production instance to the staging instance.

1. [Back up your production instance](#1-back-up-your-production-instance).
1. [Set up a staging instance](#2-set-up-a-staging-instance).
1. [Configure GitHub Actions](#3-configure-github-actions).
1. [Configure GitHub Packages](#4-configure-github-packages).
1. [Restore your production backup](#5-restore-your-production-backup).
1. [Review the instance's configuration](#6-review-the-instances-configuration).
1. [Apply the instance's configuration](#7-apply-the-instances-configuration).

### 1. Back up your production instance

If you want to test changes on an instance that contains the same data and configuration as your production instance, back up the data and configuration from the production instance using GitHub Enterprise Server Backup Utilities. For more information, see [Configuring Backups On Your Instance](https://docs.github.com/en/admin/backing-up-and-restoring-your-instance/configuring-backups-on-your-instance).

> [!WARNING]
> If you use GitHub Actions or GitHub Packages in production, your backup will include your production configuration for external storage. To avoid potential loss of data by writing to your production storage from your staging instance, you must configure each feature in steps 3 and 4 before you restore your backup.

### 2. Set up a staging instance

Set up a new instance to act as your staging environment. When following the setup process, be sure to select the **New Install** option. This will ensure your staging environment is initialized properly and is ready for restoring a backup if needed.

You can use the same guides for provisioning and installing your staging instance as you did for your production instance. For more information, see [Setting Up A GitHub Enterprise Server Instance](https://docs.github.com/en/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance).

If you plan to restore a backup of your production instance, continue to the next step. Alternatively, you can configure the instance manually and skip the following steps.

> [!WARNING]
> Restoring backups with GitHub Actions will not succeed on a non-configured instance. To enable GitHub Actions, an instance with a hostname configured is required. For more information, see [Configuring The Hostname For Your Instance](https://docs.github.com/en/admin/configuring-settings/configuring-network-settings/configuring-the-hostname-for-your-instance).

### 3. Configure GitHub Actions

Optionally, if you use GitHub Actions on your production instance, configure the feature on the staging instance before restoring your production backup. If you don't use GitHub Actions, skip to [Configure GitHub Packages](#4-configure-github-packages).

To configure GitHub Actions on your staging instance, use the Management Console.

The Management Console provides a secure, browser-based interface for low-level configuration of your GitHub Enterprise Server instance, including GitHub Actions. All configuration changes are audited, and access is protected via dedicated credentials and network controls.

> [!WARNING]
> If you don't configure GitHub Actions on the staging instance before restoring your production backup, your staging instance will use your production instance's external storage, which could result in loss of data. We strongly recommend that you use different external storage for your staging instance. For more information, see [Using A Staging Environment](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/advanced-configuration-and-troubleshooting/using-a-staging-environment).

1. Access the Management Console. See [Accessing The Management Console](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-web-ui/accessing-the-management-console).

1. In the sidebar, open the **Actions** tab.
1. Enable GitHub Actions by checking **Enable GitHub Actions**.
1. Select your external storage provider for artifact and log storage.
1. Enter the required storage and authentication details for your chosen provider.
1. Test your configuration by clicking **Test storage settings**, then click **Save settings**.

Once you've configured and enabled GitHub Actions, proceed to the next step.

### 4. Configure GitHub Packages

Optionally, if you use GitHub Packages on your production instance, configure the feature on the staging instance before restoring your production backup. If you don't use GitHub Packages, skip to [Restore your production backup](#5-restore-your-production-backup).

> [!WARNING]
> If you don't configure GitHub Packages on the staging instance before restoring your production backup, your staging instance will use your production instance's external storage, which could result in loss of data. We strongly recommend that you use different external storage for your staging instance. For more information, see [Using A Staging Environment](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/advanced-configuration-and-troubleshooting/using-a-staging-environment).

To configure GitHub Packages for your staging instance:

1. Access the Management Console. See [Accessing the Management Console](/admin/administering-your-instance/administering-your-instance-from-the-web-ui/accessing-the-management-console).
1. In the sidebar, open the **Packages** tab.
1. Enable GitHub Packages by checking the **Enable GitHub Packages** box.
1. Under **Packages Storage Settings**, select your external storage provider.
1. Test your storage configuration by clicking **Test storage settings**.
1. Click **Save settings** to apply your configuration.

> [!NOTE]
> You can use ecosystem toggles to enable, disable, or set individual package types to read-only for your instance as needed.

### 5. Restore your production backup

Use the `ghe-restore` command to restore the rest of the data from the backup. For more information, see [Configuring Backups On Your Instance](https://docs.github.com/en/admin/backing-up-and-restoring-your-instance/configuring-backups-on-your-instance#restoring-a-backup).

If the staging instance is already configured and you want to overwrite settings, certificate, and license data, add the `-c` option to the command. For more information about the option, see [Using the backup and restore commands](https://github.com/github/backup-utils/blob/master/docs/usage.md#restoring-settings-tls-certificate-and-license) in the GitHub Enterprise Server Backup Utilities documentation.

### 6. Review the instance's configuration

To access the staging instance using the same hostname, update your local hosts file to resolve the staging instance's hostname by IP address by editing the `/etc/hosts` file in macOS or Linux, or the `C:\Windows\system32\drivers\etc` file in Windows.

> [!NOTE]
> Your staging instance must be accessible from the same hostname as your production instance. Changing the hostname for your GitHub Enterprise Server instance is not supported. For more information, see [Configuring The Hostname For Your Instance](https://docs.github.com/en/admin/configuring-settings/configuring-network-settings/configuring-the-hostname-for-your-instance).

Then, review the staging instance's configuration in the Management Console. For more information, see [Administering Your Instance From The Web UI](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-web-ui).

> [!WARNING]
> If you configured GitHub Actions or GitHub Packages for the staging instance, to avoid overwriting production data, ensure that the external storage configuration in the Management Console does not match your production instance.

### 7. Apply the instance's configuration

To apply the configuration from the Management Console, click **Save settings**.

## Bringing a staging instance back online

You may want to power off a staging instance to save costs and power it back on when needed.

An instance can stay offline for 60 days.

If you bring the instance back online within the allowed offline time period, GitHub Enterprise Server instantiates successfully. If the instance stays offline for longer than the allowed period, GitHub Enterprise Server fails to instantiate successfully, and an error message with the text `server has been offline for more than the configured server_rejoin_age_max` may appear in the system logs. See [About System Logs](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-system-logs).

If the instance is stuck in the error state, you can run these commands to recover.

```shell
sudo mv /data/user/consul/server_metadata.json /data/user/consul/server_metadata.json.bak
ghe-config-apply
```

## Further reading

* [About Upgrades To New Releases](https://docs.github.com/en/admin/overview/about-upgrades-to-new-releases)
