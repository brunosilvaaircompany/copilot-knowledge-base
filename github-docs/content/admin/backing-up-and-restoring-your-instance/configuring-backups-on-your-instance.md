# Configuring backups on your instance with Backup Utilities

>[!IMPORTANT] [GitHub Enterprise Server Backup Service](/admin/backing-up-and-restoring-your-instance/about-the-backup-service-for-github-enterprise-server) is now the preferred solution for backing up a GitHub Enterprise Server appliance. GitHub Enterprise Server Backup Utilities is scheduled for removal in GitHub Enterprise Server version 3.22

## About GitHub Enterprise Server Backup Utilities

GitHub Enterprise Server Backup Utilities is a backup system you install on a separate host, which takes backup snapshots of your GitHub Enterprise Server instance at regular intervals over a secure SSH network connection. You can use a snapshot to restore an existing GitHub Enterprise Server instance to a previous state from the backup host.

Only data added since the last snapshot will transfer over the network and occupy additional physical storage space. To minimize performance impact, backups are performed online under the lowest CPU/IO priority. You do not need to schedule a maintenance window to perform a backup.

Major releases and version numbers for GitHub Enterprise Server Backup Utilities align with feature releases of GitHub Enterprise Server. We support the four most recent versions of both products. For more information, see [All Releases](https://docs.github.com/en/admin/all-releases).

For more detailed information on features, requirements, and advanced usage, see the [GitHub Enterprise Server Backup Utilities README](https://github.com/github/backup-utils#readme) in the GitHub Enterprise Server Backup Utilities project documentation.

## Prerequisites

To use GitHub Enterprise Server Backup Utilities, you must have a host system separate from your GitHub Enterprise Server instance. For details about how the system should be configured, see [Requirements](https://github.com/github/backup-utils/blob/master/docs/requirements.md) in the github/backup-utils repository.

You can also integrate GitHub Enterprise Server Backup Utilities into an existing environment for long-term permanent storage of critical data.

We recommend that the backup host and your GitHub Enterprise Server instance be geographically distant from each other. This ensures that backups are available for recovery in the event of a major disaster or network outage at the primary site.

Physical storage requirements will vary based on Git repository disk usage and expected growth patterns:

| Hardware | Recommendation |
| -------- | --------- |
| **vCPUs** | 4 |
| **Memory** | 8 GB |
| **Storage** | Five times the primary instance's allocated storage |

More resources may be required depending on your usage, such as user activity and selected integrations.

For more information, see [GitHub Enterprise Server Backup Utilities requirements](https://github.com/github/backup-utils/blob/master/docs/requirements.md) in the GitHub Enterprise Server Backup Utilities project documentation.

## Installing GitHub Enterprise Server Backup Utilities

To install GitHub Enterprise Server Backup Utilities on your backup host, download the latest version of GitHub Enterprise Server Backup Utilities from the [github/backup-utils repository](https://github.com/github/backup-utils/releases) that is compatible with your version of GitHub Enterprise Server. For example, if you are running version 3.8.4 of GitHub Enterprise Server, then download the latest version of GitHub Enterprise Server Backup Utilities in the 3.10 series. This is possible because all versions of GitHub Enterprise Server Backup Utilities are backwards compatible for 2 versions, meaning the GitHub Enterprise Server Backup Utilities 3.10 series can be used to backup and restore GitHub Enterprise Server instances running versions 3.8, 3.9, or 3.10.

After you download a compressed archive, you can extract and install the contents. For more information, see [Getting started](https://github.com/github/backup-utils/blob/master/docs/getting-started.md) in the github/backup-utils repository.

If you have an existing backup configuration file, `backup.config`, ensure you copy the file to the location of the newly extracted and installed version of GitHub Enterprise Server Backup Utilities.

Backup snapshots created by GitHub Enterprise Server Backup Utilities are written to the disk path set by the `GHE_DATA_DIR` data directory variable in your `backup.config` file. These snapshots need to be stored on a filesystem which supports symbolic and hard links.

> [!NOTE]
> We recommend ensuring your snapshots are not kept in a subdirectory of the GitHub Enterprise Server Backup Utilities installation directory, to avoid inadvertently overwriting your data directory when upgrading GitHub Enterprise Server Backup Utilities versions.

1. Download the relevant GitHub Enterprise Server Backup Utilities release from the [Releases](https://github.com/github/backup-utils/releases) page of the github/backup-utils repository.

1. To extract the repository using tar, run the following command.

   ```shell
   tar -xzvf /path/to/github-backup-utils-vMAJOR.MINOR.PATCH.tar.gz
   ```

1. To change into the local repository directory, run the following command.

   ```shell
   cd backup-utils
   ```

1. To copy the included `backup.config-example` file to `backup.config`, run the following command.

   ```shell
   cp backup.config-example backup.config
   ```

1. To customize your configuration, edit `backup.config` in a text editor.

   1. If you previously upgraded GitHub Enterprise Server Backup Utilities using Git, ensure that you copy your existing configuration from `backup.config` into the new file. For more information, see [Upgrading GitHub Enterprise Server Backup Utilities](#upgrading-github-enterprise-server-backup-utilities).
   1. Set the `GHE_HOSTNAME` value to your primary GitHub Enterprise Server instance's hostname or IP address.

      > [!NOTE]
      > If your GitHub Enterprise Server instance is deployed as a cluster or in a high availability configuration using a load balancer, the `GHE_HOSTNAME` can be the load balancer hostname, as long as the load balancer allows SSH access over port 122 to your GitHub Enterprise Server instance.
      >
      > To ensure a recovered instance is immediately available, perform backups targeting the primary instance even in a geo-replication configuration.

   1. Set the `GHE_DATA_DIR` value to the filesystem location where you want to store backup snapshots. We recommend choosing a location on the same filesystem as your backup host.
1. To grant your backup host access to your instance, open your primary instance's settings page at `http(s)://HOSTNAME/setup/settings` and add the backup host's SSH key to the list of authorized SSH keys. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh).
1. On your backup host, verify SSH connectivity with your GitHub Enterprise Server instance with the `ghe-host-check` command.

   ```shell
   ./bin/ghe-host-check
   ```

1. To create an initial full backup, run the following command.

   ```shell
   ./bin/ghe-backup
   ```

For more information on advanced usage, see the [GitHub Enterprise Server Backup Utilities README](https://github.com/github/backup-utils#readme) in the GitHub Enterprise Server Backup Utilities project documentation.

## Upgrading GitHub Enterprise Server Backup Utilities

When upgrading GitHub Enterprise Server Backup Utilities, you must choose a version that will work with your current version of GitHub Enterprise Server. Your installation of GitHub Enterprise Server Backup Utilities must be at least the same version as your GitHub Enterprise Server instance, and cannot be more than two versions ahead. For more information, see [GitHub Enterprise Server version requirements](https://github.com/github/backup-utils/blob/master/docs/requirements.md#github-enterprise-server-version-requirements) in the GitHub Enterprise Server Backup Utilities project documentation.

1. Verify the installation method for GitHub Enterprise Server Backup Utilities. Previous versions of GitHub Enterprise Server Backup Utilities supported installation and updates in a local Git repository, but this method is no longer supported.

   1. On your backup host, navigate to your GitHub Enterprise Server Backup Utilities directory, usually `backup-utils`.

   1. To check if a valid working directory exists inside a Git repository, run the following command.

      ```shell
      git rev-parse --is-inside-work-tree
      ```

1. To determine how to upgrade GitHub Enterprise Server Backup Utilities, review the output from `git rev-parse --is-inside-work-tree`.

   * If the output is `true`, GitHub Enterprise Server Backup Utilities was installed by cloning the project's Git repository. To upgrade, copy your existing configuration in `backup.config`, then follow the instructions in [Installing GitHub Enterprise Server Backup Utilities](#installing-github-enterprise-server-backup-utilities).
   * If the output includes `fatal: not a git repository (or any of the parent directories)`, GitHub Enterprise Server Backup Utilities was extracted from a compressed archive file. To upgrade, follow the instructions in [Installing GitHub Enterprise Server Backup Utilities](#installing-github-enterprise-server-backup-utilities).

## Scheduling a backup

You can schedule regular backups on the backup host using the `cron(8)` command or a similar command scheduling service. The configured backup frequency will dictate the worst case recovery point objective (RPO) in your recovery plan. For example, if you have scheduled the backup to run every day at midnight, you could lose up to 24 hours of data in a disaster scenario. We recommend starting with an hourly backup schedule, guaranteeing a worst case maximum of one hour of data loss if the primary site data is destroyed.

If backup attempts overlap, the `ghe-backup` command will abort with an error message, indicating the existence of a simultaneous backup. If this occurs, we recommended decreasing the frequency of your scheduled backups. For more information, see the "Scheduling backups" section of the [GitHub Enterprise Server Backup Utilities README](https://github.com/github/backup-utils#scheduling-backups) in the GitHub Enterprise Server Backup Utilities project documentation.

## Restoring a backup

In the event of prolonged outage or catastrophic event at the primary site, you can restore your GitHub Enterprise Server instance by provisioning another instance and performing a restore from the backup host. You must add the backup host's SSH key to the target GitHub Enterprise instance as an authorized SSH key before restoring an instance.

When performing backup restores to your GitHub Enterprise Server instance, you can only restore data from at most two feature releases behind. For example, if you take a backup from GitHub Enterprise Server 3.0.x, you can restore the backup to an instance running GitHub Enterprise Server 3.2.x. You cannot restore data from a backup of GitHub Enterprise Server 2.22.x to an instance running 3.2.x, because that would be three jumps between versions (2.22 to 3.0 to 3.1 to 3.2). You would first need to restore to an instance running 3.1.x, and then upgrade to 3.2.x.

Network settings are excluded from the backup snapshot. After restoration, you must manually configure networking on the target GitHub Enterprise Server instance.

### Prerequisites

1. Ensure maintenance mode is enabled on the primary instance and all active processes have completed. For more information, see [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode).
1. Stop replication on all replica nodes in a high-availability configuration. For more information, see [About High Availability Configuration](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/configuring-high-availability/about-high-availability-configuration#ghe-repl-stop).
1. Provision a new GitHub Enterprise Server instance to use as a target for the restoration of your backup. For more information, see [Setting Up A GitHub Enterprise Server Instance](https://docs.github.com/en/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance).
1. If your GitHub Enterprise Server instance has GitHub Actions enabled, you must configure the external storage provider for GitHub Actions on the replacement instance. For more information, see [Backing Up And Restoring GitHub Enterprise Server With GitHub Actions Enabled](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/advanced-configuration-and-troubleshooting/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled).

### Starting the restore operation

To restore your GitHub Enterprise Server instance from your backup host using the last successful snapshot, use the `ghe-restore` command. You can use the following additional options with `ghe-restore`.

* The `-c` flag overwrites the settings, certificate, and license data on the target host even if it is already configured. Omit this flag if you are setting up a staging instance for testing purposes and you wish to retain the existing configuration on the target. For more information, see the "Using backup and restore commands" section of the [GitHub Enterprise Server Backup Utilities README](https://github.com/github/backup-utils#using-the-backup-and-restore-commands) in the github/backup-utils repository.
* The `-s` flag allows you to select a different backup snapshot.

After you run `ghe-restore`, the command confirms the restoration, then outputs details and status during the operation.

```shell
$ ghe-restore -c 169.154.1.1
> Checking for leaked keys in the backup snapshot that is being restored ...
> * No leaked keys found
> Connect 169.154.1.1:122 OK (v2.9.0)

> WARNING: All data on GitHub Enterprise appliance 169.154.1.1 (v2.9.0)
>          will be overwritten with data from snapshot 20170329T150710.
> Please verify that this is the correct restore host before continuing.
> Type 'yes' to continue: yes

> Starting restore of 169.154.1.1:122 from snapshot 20170329T150710
# ...output truncated
> Completed restore of 169.154.1.1:122 from snapshot 20170329T150710
> Visit https://169.154.1.1/setup/settings to review appliance configuration.
```

Optionally, to validate the restore, configure an IP exception list to allow access to a specified list of IP addresses. For more information, see [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list).

On an instance in a high-availability configuration, after you restore to new disks on an existing or empty instance, `ghe-repl-status` may report that Git or Alambic replication is out of sync due to stale server UUIDs. These stale UUIDs can be the result of a retired node in a high-availability configuration still being present in the application database, but not in the restored replication configuration.

To remediate after the restoration completes and before starting replication, you can tear down stale UUIDs using `ghe-repl-teardown`. If you need further assistance, visit [GitHub Enterprise Support](https://support.github.com).

## Monitoring backup or restoration progress

During a backup or restoration operation, you can use the `ghe-backup-progress` utility on your backup host to monitor the operation's progress. The utility prints the progress of each job sequentially.

To monitor progress on the backup host, from the directory containing GitHub Enterprise Server Backup Utilities, run the following command.

```shell copy
bin/ghe-backup-progress
```

By default, the utility prints progress continuously until the operation is complete. You can press any key to return to the prompt.

Optionally, you can run the following command to print the current progress, the last completed job, and then immediately exit.

```shell copy
bin/ghe-backup-progress --once
```
