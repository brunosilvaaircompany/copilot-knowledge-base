# Backup in clustering mode

## Configuring backups from a cluster node

For clustering, you can designate a node as your backup server. To minimize latency, GitHub recommends picking a data node (for example, a `mysql-server` node or a `git-server` node) instead of a frontend node.

> [!IMPORTANT]
> Only one node can be specified as a `backup-server` node.

1. To configure your backup server, run the following commands to set up a backup disk on one of the cluster nodes of your choice. See [Configuring The Backup Service](https://docs.github.com/en/admin/backing-up-and-restoring-your-instance/configuring-the-backup-service).

```shell
ghe-storage-init-backup /dev/YOUR_DEVICE_NAME

ghe-config-apply
```

1. After `ghe-config-apply` is executed, the `backup-server` role will be set on this cluster node. You can now run `ghe-backup` directly on this node, or use the management console to schedule backups.
