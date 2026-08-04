# Restoring with GitHub Actions enabled

>[!IMPORTANT] Data stored in your configured external storage for GitHub Actions—such as logs, artifacts, and other blobs—is not included in GitHub Enterprise Server Backup Service snapshots. You must back up this data separately using your storage provider's tools and best practices.

When restoring an instance with GitHub Actions enabled, follow these steps to preserve compatibility with existing Actions data:

1. Provision the target instance.
1. Preconfigure Actions storage:

   1. In the Management Console, enable GitHub Actions.
   1. Enter the exact same external storage provider and credentials used in the original instance.
   1. Click **Save**.

      This step ensures the restored Actions metadata correctly references your existing external data.

1. Enable maintenance mode on the target instance.
1. Restore the backup:

   1. Run the ghe-restore command as described in Starting the restore operation.
   1. The restoration process includes Actions metadata but assumes external storage is already accessible and configured.

1. Finalize settings in the Management Console.
1. Re-register self-hosted runners:

   All runners must be re-registered with the restored instance, as previous registration tokens are invalid after a restore.

For more information, see [Backing Up And Restoring GitHub Enterprise Server With GitHub Actions Enabled](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/advanced-configuration-and-troubleshooting/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled).
