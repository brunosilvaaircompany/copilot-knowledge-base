# Managing the Replication Controller

## About the Replication Controller

The Replication Controller is a service that manages replication configuration on your GitHub Enterprise Server instance. The `app.replication-controller.enabled` setting controls the service, which is enabled by default.


The Replication Controller manages replication for Git repositories, storage (such as Git LFS objects and file attachments), GitHub Pages, pre-receive hooks, MySQL, Redis, and Elasticsearch. The services it manages on your instance depend on your topology and enabled features.


## Checking whether the Replication Controller is enabled

On the primary node, run the following command.

```shell
ghe-config app.replication-controller.enabled
```

If the command returns `true` or no value, the Replication Controller is enabled. If the command returns `false`, the Replication Controller is disabled.

## Disabling the Replication Controller

> [!WARNING]
> Only disable the Replication Controller if GitHub Support recommends it during troubleshooting. Applying this change stops the Replication Controller and can interrupt an operation that's in progress. If you're unsure whether it's safe to proceed, contact [GitHub Enterprise Support](https://support.github.com).


1. On each node that hosts a MySQL replica, such as a high availability replica, confirm that the Replication Controller isn't cloning or reseeding MySQL.

   ```shell
   ghe-rc-ctl status mysql
   ```

   Continue only when the output on every node shows `"running": false`. If the output shows `"running": true`, wait and run the command again.

1. On the primary node, set `app.replication-controller.enabled` to `false`.

   ```shell
   ghe-config app.replication-controller.enabled false
   ```

1. Apply the configuration.

   ```shell
   ghe-config-apply
   ```

## Re-enabling the Replication Controller

1. On the primary node, set `app.replication-controller.enabled` to `true`.

   ```shell
   ghe-config app.replication-controller.enabled true
   ```

1. Apply the configuration.

   ```shell
   ghe-config-apply
   ```
