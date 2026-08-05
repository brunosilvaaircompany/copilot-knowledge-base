# Upgrade requirements

> [!NOTE]
> * Upgrade packages are available at [enterprise.github.com](https://enterprise.github.com/releases) for supported versions. Verify the availability of the upgrade packages you will need to complete the upgrade. If a package is not available, visit [GitHub Enterprise Support](https://support.github.com) and contact us for assistance.
> * If you're using GitHub Enterprise Server Clustering, see [Upgrading A Cluster](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/configuring-clustering/upgrading-a-cluster) in the GitHub Enterprise Server Clustering Guide for specific instructions unique to clustering.
> * The release notes for GitHub Enterprise Server provide a comprehensive list of new features for every version of GitHub Enterprise Server. For more information, see the [releases page](https://enterprise.github.com/releases).

## Recommendations

* Include as few upgrades as possible in your upgrade process. For example, instead of upgrading from GitHub Enterprise {{ enterpriseServerReleases.supported[2] }} to {{ enterpriseServerReleases.supported[1] }} to {{ enterpriseServerReleases.latest }}, you could upgrade from GitHub Enterprise {{ enterpriseServerReleases.supported[2] }} to {{ enterpriseServerReleases.latest }}. Use the [Upgrade assistant](https://support.github.com/enterprise/server-upgrade) to find the upgrade path from your current release version.
* If you’re several versions behind, upgrade your GitHub Enterprise Server instance as far forward as possible with each step of your upgrade process. Using the latest version possible on each upgrade allows you to take advantage of performance improvements and bug fixes. For example, you could upgrade from GitHub Enterprise 2.7 to 2.8 to 2.10, but upgrading from GitHub Enterprise 2.7 to 2.9 to 2.10 uses a later version in the second step.
* Use the latest patch release when upgrading. Browse to the [GitHub Enterprise Server Releases page](https://enterprise.github.com/releases). Next to the release you are upgrading to, click **Download**, then click the **Upgrading** tab.

* Use a staging instance to test the upgrade steps. For more information, see [Setting Up A Staging Instance](https://docs.github.com/en/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance).
* When running multiple upgrades, ensure data migrations and upgrade tasks running in the background are fully complete before proceeding to the next feature upgrade. To check the status of these processes, you can use the `ghe-migrations` and `ghe-check-background-upgrade-jobs` command-line utilities. For more information, see [Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#upgrading-github-enterprise-server).
* Take a snapshot before upgrading your virtual machine. For more information, see [Taking A Snapshot](https://docs.github.com/en/admin/upgrading-your-instance/preparing-to-upgrade/taking-a-snapshot). After the snapshot is taken, turn off automatic snapshots to avoid possible performance impacts during upgrade.
* Ensure you have a recent, successful backup of your instance. For more information, see the [GitHub Enterprise Server Backup Utilities README.md file](https://github.com/github/backup-utils#readme).

## Requirements

* You must perform a capacity check. For more information, see [Check System Capacity Before Upgrading](https://docs.github.com/en/admin/upgrading-your-instance/preparing-to-upgrade/check-system-capacity-before-upgrading).
* You must upgrade from a feature release that's **at most** two releases behind. For example, to upgrade to GitHub Enterprise {{ enterpriseServerReleases.latest }}, you must be on GitHub Enterprise {{ enterpriseServerReleases.supported[1] }} or {{ enterpriseServerReleases.supported[2] }}.
* When upgrading using an upgrade package, schedule a maintenance window for GitHub Enterprise Server end users.
* You can upgrade GitHub Enterprise Server to the latest patch release using a hotpatch.

You can use hotpatching to upgrade to a newer patch release, but not a feature release. For example, you can upgrade from 2.10.1 to 2.10.5 because they are in the same feature series, but not from 2.10.9 to 2.11.0 because they are in a different feature series.

Hotpatches do not always require a reboot. When you install the hotpatch, you'll see a message in the terminal if any of the packages need a reboot to complete the update. You can schedule this reboot at a convenient time but we recommend rebooting as soon as practical, especially if there are any security fixes.

Hotpatches require a configuration run, which can cause a brief period of errors or unresponsiveness for some or all services on your GitHub Enterprise Server instance. You are not required to enable maintenance mode during installation of a hotpatch, but doing so will guarantee that users see a maintenance page instead of errors or timeouts. See [Enabling And Scheduling Maintenance Mode](https://docs.github.com/en/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode).

* A hotpatch may require downtime if the affected services (like kernel, MySQL, or Elasticsearch) require a VM reboot or a service restart. You'll be notified when a reboot or restart is required. You can complete the reboot or restart at a later time.
* Additional root storage must be available when upgrading through hotpatching, as it installs multiple versions of certain services until the upgrade is complete. Pre-flight checks will notify you if you don't have enough root disk storage.
* When upgrading through hotpatching, your instance cannot be too heavily loaded, as it may impact the hotpatching process.
* Upgrading to GitHub Enterprise Server 2.17 migrates your audit logs from Elasticsearch to MySQL. This migration also increases the amount of time and disk space it takes to restore a snapshot. Before migrating, check the number of bytes in your Elasticsearch audit log indices with this command:

``` shell
curl -s http://localhost:9201/audit_log/_stats/store | jq ._all.primaries.store.size_in_bytes
```

Use the number to estimate the amount of disk space the MySQL audit logs will need. The script also monitors your free disk space while the import is in progress. Monitoring this number is especially useful if your free disk space is close to the amount of disk space necessary for migration.

When upgrading, pre-flight checks evaluate if the minimum requirements for system hardware resources, such as memory, CPU cores, and user and root disk storage, are available to your instance. If pre-flight checks determine there are insufficient resources, or otherwise fail, you are notified and the upgrade is aborted.


## Next steps

After reviewing these recommendations and requirements, you can upgrade GitHub Enterprise Server. For more information, see [Overview Of The Upgrade Process](https://docs.github.com/en/admin/upgrading-your-instance/preparing-to-upgrade/overview-of-the-upgrade-process).
