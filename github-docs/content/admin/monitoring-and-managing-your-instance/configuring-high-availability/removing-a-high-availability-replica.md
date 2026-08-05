# Removing a high availability replica

## Stopping replication temporarily

1. If necessary, stop a geo-replication replica from serving user traffic by removing the Geo DNS entries for the replica.
1. On the replica where you wish to temporarily stop replication, run ghe-repl-stop.

   ```shell
   ghe-repl-stop
   ```

1. To start replication again, run `ghe-repl-start`.

   ```shell
   ghe-repl-start
   ```

## Removing replication permanently

1. If necessary, stop a geo-replication replica from serving user traffic by removing the Geo DNS entries for the replica.
1. On the replica you wish to remove replication from, run `ghe-repl-stop`.

   ```shell
   ghe-repl-stop
   ```

1. On the replica, to tear down the replication state, run `ghe-repl-teardown`.

   ```shell
   ghe-repl-teardown
   ```

  > [!NOTE]
  > If you have GitHub Actions enabled, you should decommission the former replica server or update its GitHub Actions configuration to use different external storage. For more information, see [High Availability For GitHub Actions](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/advanced-configuration-and-troubleshooting/high-availability-for-github-actions#high-availability-replicas).
