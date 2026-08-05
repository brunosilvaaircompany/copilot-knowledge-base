# Recovering a high availability configuration

## About recovery for a high availability configuration

You can use the former primary appliance as the new replica appliance if the failover was planned or was not related to the health of the appliance. If the failover was related to an issue with the primary appliance, you may prefer to create a new replica appliance. For more information, see [Creating A High Availability Replica](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/configuring-high-availability/creating-a-high-availability-replica).

> [!WARNING]
> You must enable maintenance mode before configuring a former primary appliance as a new replica. If you do not enable maintenance mode, you will cause a production outage.

## Configuring a former primary appliance as a new replica

1. Connect to the former primary appliance's IP address using SSH.

   ```shell
   ssh -p 122 admin@ FORMER_PRIMARY_IP
   ```

1. Enable maintenance mode on the former primary appliance. For more information, see [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode).
1. On the former primary appliance, run `ghe-repl-setup` with the IP address of the former replica. You may need to use the `--force` option to replace the existing configuration.

   ```shell
   ghe-repl-setup --force FORMER_REPLICA_IP
   ```

1. To add the public key to the list of authorized keys on the primary appliance, browse to `https://PRIMARY-HOSTNAME/setup/settings` and add the key you copied from the replica to the list.

1. To verify the connection to the new primary and enable replica mode for the new replica, run `ghe-repl-setup` again.

   ```shell
   ghe-repl-setup FORMER_REPLICA_IP
   ```

1. To start replication of the datastores, use the `ghe-repl-start` command.

   ```shell
   ghe-repl-start
   ```

   
   > [!WARNING]
   > `ghe-repl-start` causes a brief outage on the primary server, during which users may see internal server errors. To provide a friendlier message, run `ghe-maintenance -s` on the primary node before running `ghe-repl-start` on the replica node to put the appliance in maintenance mode. Once replication starts, disable maintenance mode with `ghe-maintenance -u`. Git replication will not progress while the primary node is in maintenance mode.
   > If you are running version 3.14.20, 3.15.15, 3.16.11, 3.17.8, 3.18.2, or a later version including future releases like 3.19, you no longer need to put the primary in maintenance mode prior to running `ghe-repl-start`. This command is no longer expected to cause an outage on the primary server. However, when setting up a new replica, `ghe-repl-start` won't cause an outage as long as you run `ghe-config-apply` between `ghe-repl-setup` and `ghe-repl-start`. Skipping `ghe-config-apply` and going straight from `ghe-repl-setup` to `ghe-repl-start` will still result in an outage.
