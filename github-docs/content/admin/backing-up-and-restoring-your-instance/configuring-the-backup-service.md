# Configuring the backup service

Before configuring the backup service, ensure you have:

* A GitHub Enterprise Server instance running version 3.17 or later.
* A dedicated storage volume provisioned and managed for use as the backup target.

## Storage requirements

To ensure reliable and performant backups, your storage must meet the following requirements:

* **Capacity:** Allocate at least five times the amount of storage used by your primary GitHub appliance data disk. This accounts for historical snapshots and future growth.
* **Filesystem support:** The backup service uses hard links for efficient storage, and your GitHub instance uses symbolic links. The backup target must support both symbolic and hard links, and it must use a case-sensitive filesystem to prevent conflicts.

  You can test whether your filesystem supports hardlinking symbolic links by running:

    ```shell
    cd /data/backup
    sudo touch file
    sudo ln -s file symlink
    sudo ln symlink hardlink
    ls -la
    ```

    If the `ln symlink hardlink` command completes successfully, the filesystem is supported.

* **Performance:** Use high-performance storage with low latency and high IOPS to avoid slow backups and restores.
* **NFS:** Avoid using an NFS mount for the backup directory (typically `/data/backup`), as this can lead to timeouts and degraded performance.

## Configuring the backup service

You can configure GitHub Enterprise Server Backup Service through the Management Console.

### Setting up the backup target

Before configuring the service, you must prepare the storage volume where backups will be stored.

#### Using a new block device

If you're using a dedicated block device as your backup target, you need to initialize it via SSH before proceeding in the Management Console. This process will **format the device and erase all existing data**.

1. Connect to your instance via SSH as the `admin` user. See [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
1. Attach your backup block device to the instance.
1. Identify the device name using `lsblk` to list available block devices. Make sure you select the correct device to avoid data loss.

    ```shell
    lsblk
    ```

1. Run the initialization command, replacing `YOUR_DEVICE_NAME` with the actual device name identified in the previous step.

    >[!WARNING] This command will permanently erase all data on the specified device. Double-check the device name and back up any important data before proceeding.

    

    ```shell
    ghe-storage-init-backup /dev/YOUR_DEVICE_NAME
    ```

    

    This command:
    * Formats the device (erases all data).
    * Prepares it for use by the backup service.
    * Sets it to mount automatically at `/data/backup` on boot.
    * If in a clustered environment, configures the node in `cluster.conf` with the `backup-server` role.

    
    From GitHub Enterprise Server 3.17.4 onward, the script is installed in PATH so you can run it directly using: `ghe-storage-init-backup /dev/YOUR_DEVICE_NAME`.
    

#### Detach a backup disk

> [!WARNING]
> Before detaching a backup disk, ensure that no backups or restores are currently in progress. Detaching a disk while it is in use can result in data loss or service interruption.

In case you need to detach backup disk from GitHub Enterprise Server, please use following steps

1. List block devices and unmount `/data/backup`.

    ```bash
    sudo lsblk
    sudo umount /data/backup
    ```

1. List logical volumes and deactivate logical volume.

    ```bash
    sudo lvs
    sudo lvchange -an <backup_VG>/<backup_LV>
    ```

1. Detach disk using console or CLI provided by cloud provider or hypervisor.
1. Remove mount point.

    ```bash
    sudo rmdir /data/backup
    ```

#### Reusing a previously initialized disk

If the device was already initialized using `ghe-storage-init-backup`, you can reuse it without reformatting:

1. Connect to your instance via SSH as the `admin` user.
1. Attach the disk to the instance.
1. Create the mount point, if it doesn't exist.

   ```shell
   sudo mkdir -p /data/backup
   ```

1. Enable and start the mount service.

   ```shell
   sudo systemctl enable ghe-backup-disk.service
   sudo systemctl start ghe-backup-disk.service
   ```

   This will mount the device at `/data/backup` and ensures it's mounted automatically in the future.

### Configuring backup settings

After the backup target is mounted, the Backup Service page will become available in the Management Console in the "Backup" section.  If your instance is part of a clustered environment, the Backup Service page will be available after `ghe-config-apply`. 

>[!NOTE] The settings page won’t appear until the backup storage is mounted at `/data/backup` by completing the initialization or mount steps above.

If you're migrating from GitHub Enterprise Server Backup Utilities, you can transfer your configuration in one of two ways:

1. **Manual configuration**: Recreate your settings directly in the Management Console.
1. **Command-line migration**: SSH into your instance, copy your `backup.config` file from backup-utils, and run:

   ```shell
   ghe-migrate-backup-config /path/to/your/backup.config
   ```

   Use the `--dry-run` flag to preview changes without applying them.


#### Take a backup

Once the service is configured, you can take a backup manually using the following steps:

1. In the Management Console, open the "Backups" tab from the top menu.
1. Click **Backup Now**.

A GitHub Enterprise Server backup will be taken, and displayed in a list.



#### Scheduling automated backups

Once the service is configured, you can define a backup schedule.


1. In the Management Console, open the "Settings" tab from the top menu.
1. In the "Backup" section, choose a predefined schedule (e.g., Daily) or enter a custom cron expression.
1. Click **Save settings** to apply the changes.


The first run will be a full backup. Future runs will be incremental. If a new backup attempt starts while a previous one is still running, it may be skipped or fail. In that case, adjust the schedule to avoid overlap.
