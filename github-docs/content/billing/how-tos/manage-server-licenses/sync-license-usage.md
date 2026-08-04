# Syncing license usage from GitHub Enterprise Server to Cloud

A GitHub Enterprise license allows a user to use both GitHub Enterprise Cloud and GitHub Enterprise Server. See [Combined Enterprise Use](https://docs.github.com/en/billing/concepts/enterprise-billing/combined-enterprise-use).

To view combined license details on GitHub Enterprise Cloud and ensure users only consume one license, you must sync licenses between deployments. You can do this:

* Automatically, using GitHub Connect.
* Manually, by uploading a license file from from GitHub Enterprise Server to GitHub.

When you synchronize license usage, only the user ID and email addresses for each user account on GitHub Enterprise Server are transmitted to GitHub Enterprise Cloud.

## Automatically syncing license usage

You can use GitHub Connect to automatically synchronize user license count and usage between GitHub Enterprise Server and GitHub Enterprise Cloud weekly.

After you enable GitHub Connect, license data will be automatically synchronized weekly. You can also manually synchronize your license data at any time, by triggering a license sync job.

### Enabling automatic license sync

To enable license sync, you must:

1. Enable GitHub Connect. See [Enabling GitHub Connect For Githubcom](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-githubcom) or [Enabling GitHub Connect For Ghecom](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-ghecom).
1. Enable license sync. See [Enabling Automatic User License Sync For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise).

### Triggering a license sync job

1. Sign in to your GitHub Enterprise Server instance.
1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.

1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Licensing{% elsif ghes %}License**.

1. Under "License sync", click **{% octicon "sync" aria-hidden="true" aria-label="sync" %} Sync now**.

## Manually uploading GitHub Enterprise Server license usage

You can download a JSON file from GitHub Enterprise Server and upload the file to GitHub Enterprise Cloud to manually sync user license usage between the two deployments.

1. Sign in to your GitHub Enterprise Server instance.
1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.

1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Licensing{% elsif ghes %}License**.

1. In the "User licenses" section, under "Quick links", to download a file containing your current license usage on GitHub Enterprise Server, click **Export license usage**.

   ![Screenshot of the "User licenses" section of the "License" page. A link, labeled "Export license usage", is outlined in dark orange.](/assets/images/enterprise/management-console/export-license-usage-link.png)
1. Navigate to GitHub Enterprise Cloud.
1. In the top-right corner of GitHub, click your profile picture.
1. Depending on your environment, click **Enterprise**, or click **Enterprises** then click the enterprise you want to view.

1. At the top of the page, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.
1. Click **Licensing** to show detailed information on license use.

1. Next to "Enterprise Server instances", click **Add server usage**.
1. Upload the JSON file you downloaded from GitHub Enterprise Server.

## Next steps

After you synchronize license usage, you can see a report of consumed licenses across all your environments in the enterprise settings on GitHub Enterprise Cloud. For more information, see [View Enterprise Usage](https://docs.github.com/en/enterprise-cloud@latest/billing/how-tos/manage-plan-and-licenses/view-enterprise-usage).


To make troubleshooting easier, if you synchronize license usage and do not use Enterprise Managed Users, we highly recommend enabling verified domains for your enterprise account on GitHub Enterprise Cloud. See [Verifying Or Approving A Domain For Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/configuring-settings/configuring-user-applications-for-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise) in the GitHub Enterprise Cloud documentation.
