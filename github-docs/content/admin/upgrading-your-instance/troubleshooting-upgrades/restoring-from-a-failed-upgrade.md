# Restoring from a failed upgrade

If an upgrade fails or is interrupted, you should revert your instance back to its previous state. The process for completing this depends on the type of upgrade.

If your instance is configured for high availability and your primary node upgrade fails, you can promote the (not upgraded) replica to be the primary. You will also need to update your DNS to point to the new primary node. Once you have a working primary node, you can then consider creating a new replica node. See [About High Availability Configuration](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/configuring-high-availability/about-high-availability-configuration#network-traffic-failover-strategies) and [Recovering A High Availability Configuration](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/configuring-high-availability/recovering-a-high-availability-configuration).

## Rolling back a patch release

To roll back a patch release, use the `ghe-upgrade` command with the `--allow-patch-rollback` switch. Before rolling back, replication must be temporarily stopped by running `ghe-repl-stop` on all replica nodes, or `ghe-repl-stop-all` on the primary node. When rolling back an upgrade, you must use an upgrade package file with the _.pkg_ extension. Hotpatch package files with the _.hpkg_ extension are not supported.

```shell
ghe-upgrade --allow-patch-rollback EARLIER-RELEASE-UPGRADE-PACKAGE.pkg
```

A reboot is required after running the command. Rolling back does not affect the data partition, as migrations are not run on patch releases.


After the rollback is complete, restart replication by running `ghe-repl-start` on all nodes, or `ghe-repl-start-all` on the primary node. See [Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-upgrade).

## Rolling back a feature release

To roll back from a feature release, restore from a virtual machine snapshot to ensure that root and data partitions are in a consistent state. See [Taking A Snapshot](https://docs.github.com/en/admin/upgrading-your-instance/preparing-to-upgrade/taking-a-snapshot).
