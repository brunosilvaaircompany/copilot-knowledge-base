# Enabling automatic update checks

## About automatic update checks

When an upgrade package is automatically downloaded for your GitHub Enterprise Server instance, you'll receive a message letting you know you can upgrade GitHub Enterprise Server. Packages download to the `/var/lib/ghe-updates` directory on your GitHub Enterprise Server instance. For more information about the recommendations and requirements for upgrades, see [Overview Of The Upgrade Process](https://docs.github.com/en/admin/upgrading-your-instance/preparing-to-upgrade/overview-of-the-upgrade-process).

If a hotpatch is available for an upgrade, the `.hpkg` will download automatically. In the management console you can choose to install the hotpatch immediately or schedule installation for a later time. For more information, see [Upgrading With A Hotpatch](https://docs.github.com/en/admin/upgrading-your-instance/performing-an-upgrade/upgrading-with-a-hotpatch).

## Enabling automatic update checks

> [!TIP]
> To enable automatic update checks, your GitHub Enterprise Server instance must be able to connect to `https://github-enterprise.s3.amazonaws.com`.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the top navigation bar, click **Updates**.

   ![Screenshot of the header of the Management Console. A tab, labeled "Updates", is highlighted with an orange outline.](/assets/images/enterprise/management-console/updates-tab.png)

1. Click **Yes, automatically check for updates**.
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



## Viewing whether an update is available

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the top navigation bar, click **Updates**.

   ![Screenshot of the header of the Management Console. A tab, labeled "Updates", is highlighted with an orange outline.](/assets/images/enterprise/management-console/updates-tab.png)

1. At the top of the page, view whether your instance is up-to-date, or whether an update is available.

## Viewing the status of the most recent update check

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the top navigation bar, click **Updates**.

   ![Screenshot of the header of the Management Console. A tab, labeled "Updates", is highlighted with an orange outline.](/assets/images/enterprise/management-console/updates-tab.png)

1. Under "Logs," view status of the most recent update check.
