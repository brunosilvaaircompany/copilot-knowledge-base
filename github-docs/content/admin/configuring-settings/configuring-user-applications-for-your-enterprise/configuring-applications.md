# Configuring applications

## Adjusting image caching

You can choose the amount of time that your GitHub Enterprise Server instance caches avatars. When you increase the cache time, you increase the amount of time a user's avatar will take to load. Configuring the cache time with too low a value can overload your GitHub Enterprise Server instance work processes.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings" sidebar, click **Applications**.
1. Under "Avatar image cache time (seconds)", type the number of seconds that you would like your GitHub Enterprise Server instance to cache avatar images.
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



## Enabling retention policy for checks

You can enable a retention policy for checks, actions, and associated data by setting thresholds for archival and deletion. For more information about configuring actions, see [About GitHub Actions For Enterprises](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises).

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings" sidebar, click **Checks**.
1. Select **Enable archiving of Checks-related data**.
1. Under "Archive threshold (days)", type the number of days for the archival threshold. Checks older than this number of days will be archived before being permanently deleted.
1. Under "Delete threshold (days)", type the number of days for the deletion threshold. An archived check exists in an archived state for the number of days specified here. After this threshold, the check will be permanently deleted.
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.
