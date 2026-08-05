# Configuring remote archives for backups

If you are running GitHub Enterprise Server on a cloud platform or virtualization platform that supports disk snapshots, we recommend that you use snapshots to archive your backup disk, and recreate a new backup disk for testing, restoring, or disaster recovery purposes. However, if your infrastructure does not support disk snapshots or similar solutions, you can setup a GitHub Enterprise Server backup archive on a remote GitHub Enterprise Server appliance for data replication and restoration purposes.

## Set up a remote archive destination

Remote archives are required to be saved on a backup disk of a GitHub Enterprise Server appliance, which is used as a staging or testing GitHub Enterprise Server appliance. Follow these steps to configure remote backup archives.

1. Set up a backup disk on a remote GitHub Enterprise Server appliance. See [Configuring The Backup Service](https://docs.github.com/en/admin/backing-up-and-restoring-your-instance/configuring-the-backup-service).
1. From the production appliance, run the following command to initiate configuration and display the SSH public key that needs to be added to the remote GitHub Enterprise Server appliance:

   ```bash
   ghe-backup-remote-add <hostname-or-ip-of-remote-appliance>
   ```

   This command will print a public SSH key that you need to add to the remote GitHub Enterprise Server environment through the management console.
1. After the SSH key has been added to the remote GitHub Enterprise Server appliance, run the same command again to complete the configuration:

   ```bash
   ghe-backup-remote-add <hostname-or-ip-of-remote-appliance>
   ```

   It will display "Done: Configured remote backup archive destination host to <hostname-or-ip-of-remote-appliance>." A GitHub Enterprise Server configuration `ghe-config backup.remote-archive-destination-host` will be set.
1. After that, any successful invocation of `ghe-backup` will sync the latest backup to this remote archive destination in the background, displaying a message like "Uploading backup data to remote host <hostname-or-ip-of-remote-appliance> in background...".

### Manually sync a snapshot

To push the current snapshot immediately without taking a new backup, you can manually run: `/usr/local/share/github-backup/ghe-backup-remote-archive`.

### Limitations

GitHub Enterprise Server remote backup archives are archived via SSH and are limited by your network and I/O. We recommend using disk snapshots whenever your infrastructure allows, instead of remote archives.
