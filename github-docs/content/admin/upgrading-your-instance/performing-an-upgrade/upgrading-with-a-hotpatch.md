# Upgrading with a hotpatch

You can upgrade GitHub Enterprise Server to the latest patch release using a hotpatch.

You can use hotpatching to upgrade to a newer patch release, but not a feature release. For example, you can upgrade from 2.10.1 to 2.10.5 because they are in the same feature series, but not from 2.10.9 to 2.11.0 because they are in a different feature series.

Hotpatches do not always require a reboot. When you install the hotpatch, you'll see a message in the terminal if any of the packages need a reboot to complete the update. You can schedule this reboot at a convenient time but we recommend rebooting as soon as practical, especially if there are any security fixes.

Hotpatches require a configuration run, which can cause a brief period of errors or unresponsiveness for some or all services on your GitHub Enterprise Server instance. You are not required to enable maintenance mode during installation of a hotpatch, but doing so will guarantee that users see a maintenance page instead of errors or timeouts. See [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode).


Using the Management Console, you can install a hotpatch immediately or schedule it for later installation. You can use the administrative shell to install a hotpatch with the `ghe-upgrade` utility. See [Overview Of The Upgrade Process](https://docs.github.com/en/admin/upgrading-your-instance/preparing-to-upgrade/overview-of-the-upgrade-process) and [Upgrade Requirements](https://docs.github.com/en/admin/upgrading-your-instance/preparing-to-upgrade/upgrade-requirements).

## Upgrading a standalone instance using a hotpatch

If you're upgrading an instance with one node using a hotpatch, and your target is a patch release, you can upgrade using Management Console. To upgrade to a feature release, you must use the administrative shell.

* [Installing a hotpatch using the Management Console](#installing-a-hotpatch-using-the-management-console)
* [Installing a hotpatch using the administrative shell](#installing-a-hotpatch-using-the-administrative-shell)

### Installing a hotpatch using the Management Console

You can use the Management Console to upgrade with a hotpatch by enabling automatic updates. You will then be presented with the latest available version of GitHub Enterprise Server that you can upgrade to.

If the upgrade target you're presented with is a feature release instead of a patch release, you cannot use the Management Console to install a hotpatch. You must install the hotpatch using the administrative shell instead.

1. Enable automatic updates. For more information, see [Enabling Automatic Update Checks](https://docs.github.com/en/admin/upgrading-your-instance/preparing-to-upgrade/enabling-automatic-update-checks).
1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the top navigation bar, click **Updates**.

   ![Screenshot of the header of the Management Console. A tab, labeled "Updates", is highlighted with an orange outline.](/assets/images/enterprise/management-console/updates-tab.png)

1. When a new hotpatch has been downloaded, select the **Install package** dropdown menu.
    * To install immediately, click **Now**.
    * To install later, select a later date.
1. Click **Install**.

### Installing a hotpatch using the administrative shell

> [!NOTE] If you've enabled automatic update checks, you don't need to download the upgrade package and can use the file that was automatically downloaded. For more information, see [Enabling Automatic Update Checks](https://docs.github.com/en/admin/upgrading-your-instance/preparing-to-upgrade/enabling-automatic-update-checks).


1. SSH into your GitHub Enterprise Server instance. If your instance comprises multiple nodes, for example if high availability or geo-replication are configured, SSH into the primary node. If you use a cluster, you can SSH into any node. Replace HOSTNAME with the hostname for your instance, or the hostname or IP address of a node. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

   ```shell copy
   ssh -p 122 admin@HOSTNAME
   ```

1. Browse to the [GitHub Enterprise Server Releases page](https://enterprise.github.com/releases). Next to the release you are upgrading to, click **Download**, then click the **Upgrading** tab.
 Copy the URL for the upgrade hotpackage (_.hpkg_ file).
1. Download the upgrade package to your GitHub Enterprise Server instance using `curl`:

   ```shell
   admin@HOSTNAME:~$ curl -L -O UPGRADE-PKG-URL
   ```

1. Run the `ghe-upgrade` command using the package file name:

   ```shell
   admin@HOSTNAME:~$ ghe-upgrade GITHUB-UPGRADE.hpkg
   *** verifying upgrade package signature...
   ```

1. If at least one service or system component requires a reboot, the hotpatch upgrade script notifies you. For example, updates to the kernel, MySQL, or Elasticsearch may require a reboot.

## Upgrading an instance with multiple nodes using a hotpatch

If you are installing a hotpatch, you do not need to enter maintenance mode or stop replication.

* [Upgrading the primary node using a hotpatch](#upgrading-the-primary-node-using-a-hotpatch)
* [Upgrading additional nodes using a hotpatch](#upgrading-additional-nodes-using-a-hotpatch)

### Upgrading the primary node using a hotpatch

For instructions to upgrade the primary node, see [Installing a hotpatch using the administrative shell](#installing-a-hotpatch-using-the-administrative-shell).

### Upgrading additional nodes using a hotpatch

To upgrade an instance that comprises multiple nodes, such as a high-availability or geo-replication configuration, you must repeat the following procedure on each replica node, one at a time.


1. To upgrade the node, follow the instructions in [Installing a hotpatch using the administrative shell](#installing-a-hotpatch-using-the-administrative-shell).
1. Connect to the replica node over SSH as the `admin` user on port 122:

   ```shell
   ssh -p 122 admin@REPLICA_HOST
   ```

1. Verify the upgrade by running:

   ```shell
   ghe-version
   ```

1. Repeat the steps above for each additional node.
