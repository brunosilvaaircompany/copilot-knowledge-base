# Increasing storage capacity

The process for allocating new system resources varies by virtualization platform and resource type. You should always configure the monitoring and alerting of key system resources. For more information, see [Monitoring Your Instance](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance).


As more users join your GitHub Enterprise Server instance, you may need to resize your storage volume. Refer to the documentation for your virtualization platform for information on resizing storage.

## Requirements and recommendations

> [!NOTE]
> Before resizing any storage volume, put your instance in maintenance mode. You can validate changes by configuring an IP exception list to allow access from specified IP addresses. For more information, see [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode).

> [!WARNING]
> Changing the disk cache setting of an Azure disk detaches and reattaches the target disk. If the disk is in use, this can disrupt running services and may lead to data corruption. If you intend to change disk caching settings while increasing storage capacity, make sure to shutdown your appliance.

### Minimum recommended requirements

| User licenses | x86-64 vCPUs | Memory | Root storage | Attached (data) storage | IOPS |
| :- | -: | -: | -: | -: | -: |
| Trial, demo, or 10 light users | 4 | 32 GB | 400 GB | 500 GB | 600 |
| Up to 1,000  | 8 | 48 GB | 400 GB | 500 GB | 3000 |
| 1,000 to 3,000  | 16 | 64 GB | 400 GB | 1000 GB | 6000|
| 3,000 to 5,000 | 32 | 128 GB | 400 GB | 1500 GB | 9000 |
| 5,000 to 8,000 | 48 | 256 GB | 400 GB | 3000 GB | 12000|
| 8,000 to 10,000+ | 64 | 512 GB | 400 GB | 5000 GB | 15000 |


Root storage refers to the total size of your instance's root disk. The available space on the root filesystem is 50% of the total storage available on the root disk. For more information, see [System Overview](https://docs.github.com/en/admin/overview/system-overview#storage-architecture).

## Increasing the data partition size

1. Resize the existing user volume disk using your virtualization platform's tools.
1. SSH into your GitHub Enterprise Server instance. If your instance comprises multiple nodes, for example if high availability or geo-replication are configured, SSH into the primary node. If you use a cluster, you can SSH into any node. Replace HOSTNAME with the hostname for your instance, or the hostname or IP address of a node. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

   ```shell copy
   ssh -p 122 admin@HOSTNAME
   ```

1. Put the appliance in maintenance mode. For more information, see [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode).
1. Reboot the appliance to detect the new storage allocation:

   ```shell
   sudo reboot
   ```

1. Run the `ghe-storage-extend` command to expand the `/data/user` filesystem:

   ```shell
   ghe-storage-extend
   ```

1. Ensure system services are functioning correctly, then release maintenance mode. For more information, see [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode).

> [!WARNING]
> If the `ghe-storage-extend` command (or a prior automatic check) reports: `ghe_user_data contains a file system with errors`, you must repair the filesystem before retrying the resize. Do not rerun `ghe-storage-extend` until the check completes cleanly. For recovery instructions, see [Repairing filesystem errors](#repairing-filesystem-errors).

### Repairing filesystem errors

If the filesystem check fails during `ghe-storage-extend`, follow these steps to repair it.

Ensure the appliance is in maintenance mode and no background jobs are running:

   ```shell copy
   ghe-maintenance -s
   ghe-resque-info
   ```

1. Stop and activate the user volume, then run a forced filesystem check (auto‑answer yes):

   ```shell copy
   sudo systemctl stop ghe-user-disk
   VGNAME=$(sudo lvs --noheadings -o vg_name | grep ghe_storage_ | awk '{ print $1 }')
   sudo vgchange -ay "$VGNAME"
   sudo vgscan --mknodes
   sudo fsck -fy /dev/mapper/${VGNAME}-ghe_user_data
   ```

1. Retry the resize:

   ```shell copy
   ghe-storage-extend
   ```

1. Remount and verify new size:

   ```shell copy
   sudo systemctl start ghe-user-disk
   df -h /data/user
   ```

1. Reboot and verify:

   ```shell copy
   sudo reboot
   df -h /data/user
   ```

## Increasing the root partition size using a new appliance

1. Set up a new GitHub Enterprise Server instance with a larger root disk using the same version as your current appliance. For more information, see [Setting Up A GitHub Enterprise Server Instance](https://docs.github.com/en/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance).
1. Shut down the current appliance:

   ```shell
   sudo poweroff
   ```

1. Detach the data disk from the current appliance using your virtualization platform's tools.
1. Attach the data disk to the new appliance with the larger root disk.

## Increasing the root partition size using an existing appliance

> [!WARNING]
> Before increasing the root partition size, you must put your instance in maintenance mode. For more information, see [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode).

Before resizing the root partition, determine whether the appliance has a GUID partition table.

On instances created from GHES releases 3.14 and later, follow the instructions for [Increasing the root partition size on a GUID partition table](#increasing-the-root-partition-size-on-a-guid-partition-table).

On instances created from GHES releases prior to 3.14, follow the instructions for [Increasing the root partition size on a legacy partition table](#increasing-the-root-partition-size-on-a-legacy-partition-table).

To verify the partition table type, run the following command. The result should be either `gpt` or `msdos`.

   ```shell
   sudo lsblk -no pttype $(findmnt -no source /)
   ```

1. Attach a new disk to your GitHub Enterprise Server appliance.
1. Run the `lsblk` command to identify the new disk's device name.

### Increasing the root partition size on a GUID partition table

1. Back up your existing EFI boot partition:

   ```shell
   sudo dd if=/dev/disk/by-label/EFIBOOT of=EFIBOOT.bak bs=1M
   ```

1. Run the `parted` command to format the disk, substituting your device name for `/dev/xvdg`:

   ```shell
   sudo parted /dev/xvdg mklabel gpt
   sudo parted -a optimal /dev/xvdg mkpart bios fat32 1MiB 2MiB
   sudo parted /dev/xvdg set 1 bios_grub on
   sudo parted -a optimal /dev/xvdg mkpart efi fat32 2MiB 512MiB
   sudo parted /dev/xvdg set 2 esp on
   sudo parted -a optimal /dev/xvdg mkpart primary 512MiB 50%
   sudo parted /dev/xvdg set 3 boot off
   sudo parted /dev/xvdg set 3 esp off
   sudo parted -a optimal /dev/xvdg mkpart primary 50% 100%
   ```

1. If your appliance is configured for high-availability or geo-replication, to stop replication run the `ghe-repl-stop` command on each replica node:

   ```shell
   ghe-repl-stop
   ```

1. To install the GitHub Enterprise Server software on the newly partitioned disk, run the `ghe-upgrade` command. You must replace **PACKAGE-NAME.pkg** with the path to a platform-specific upgrade package that matches the version of GitHub Enterprise Server already running on the appliance. You cannot use a universal hotpatch upgrade package, such as `github-enterprise-2.11.9.hpkg`. After the `ghe-upgrade` command completes, application services will automatically terminate.

   ```shell
   ghe-upgrade PACKAGE-NAME.pkg -s -t /dev/xvdg3
   ```

1. Run these commands on the secondary partitions of the newly added disk:

   ```shell
   sudo dd if=/dev/disk/by-label/EFIBOOT of=/dev/xvdg2 bs=1M
   sudo mkfs.ext4 -L fallback /dev/xvdg4
   ```

1. Shut down the appliance:

   ```shell
   sudo poweroff
   ```

1. In the hypervisor, remove the old root disk and attach the new root disk at the same location as the old root disk.
1. Start the appliance.
1. Ensure system services are functioning correctly, then release maintenance mode. For more information, see [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode).

If your appliance is configured for high-availability or geo-replication, remember to start replication on each replica node using `ghe-repl-start` after the storage on all nodes has been upgraded.

### Increasing the root partition size on a legacy partition table

1. Run the `parted` command to format the disk, substituting your device name for `/dev/xvdg`:

   ```shell
   sudo parted /dev/xvdg mklabel msdos
   sudo parted /dev/xvdg mkpart primary ext4 0% 50%
   sudo parted /dev/xvdg mkpart primary ext4 50% 100%
   ```

1. If your appliance is configured for high-availability or geo-replication, to stop replication run the `ghe-repl-stop` command on each replica node:

   ```shell
   ghe-repl-stop
   ```

1. To install the GitHub Enterprise Server software on the newly partitioned disk, run the `ghe-upgrade` command. You must replace **PACKAGE-NAME.pkg** with the path to a platform-specific upgrade package that matches the version of GitHub Enterprise Server already running on the appliance. You cannot use a universal hotpatch upgrade package, such as `github-enterprise-2.11.9.hpkg`. After the `ghe-upgrade` command completes, application services will automatically terminate.

   ```shell
   ghe-upgrade PACKAGE-NAME.pkg -s -t /dev/xvdg1
   ```

1. Run the command on the secondary partition of the newly added disk:

   ```shell
   sudo mkfs.ext4 -L fallback /dev/xvdg2
   ```

1. Shut down the appliance:

   ```shell
   sudo poweroff
   ```

1. In the hypervisor, remove the old root disk and attach the new root disk at the same location as the old root disk.
1. Start the appliance.
1. Ensure system services are functioning correctly, then release maintenance mode. For more information, see [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode).

If your appliance is configured for high-availability or geo-replication, remember to start replication on each replica node using `ghe-repl-start` after the storage on all nodes has been upgraded.
