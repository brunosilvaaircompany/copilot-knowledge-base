# Backup from replica in high availability

## Configuring backups from a replica node

For high availability, you can designate a replica node as your backup server. To minimize latency, GitHub recommends picking a replica node in the same region or datacenter as your primary node.

> [!IMPORTANT]
> Backups from cache replica nodes or active geo replica nodes are not supported.

To configure your backup server on a replica, run the following commands. See [Configuring The Backup Service](https://docs.github.com/en/admin/backing-up-and-restoring-your-instance/configuring-the-backup-service).

```shell
ghe-storage-init-backup /dev/YOUR_DEVICE_NAME

ghe-config-apply
```

You can now run `ghe-backup` directly on your replica node.

> [!WARNING]
> Due to the latency between primary and replica nodes, you may lose data when backing up from a replica node.
