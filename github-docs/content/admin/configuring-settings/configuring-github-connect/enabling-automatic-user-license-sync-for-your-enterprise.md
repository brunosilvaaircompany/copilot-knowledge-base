# Enabling automatic user license sync for your enterprise

## About automatic license synchronization

GitHub uses a unique-user licensing model. With the GitHub Enterprise plan, you're entitled to use both GitHub Enterprise Cloud and GitHub Enterprise Server. Your GitHub Enterprise Cloud allowance includes **one** deployment, on either GitHub.com or GHE.com.

GitHub determines how many licenses you're consuming based on the number of unique users across your deployments. Each user only consumes one license, no matter how many GitHub Enterprise Server instances the user uses, or how many organizations the user is a member of on your GitHub Enterprise Cloud deployment. This model allows each person to use multiple GitHub Enterprise deployments without incurring extra costs.


For a person using multiple GitHub Enterprise environments to only consume a single license, you must synchronize license usage between environments. Then, GitHub will deduplicate users based on the email addresses associated with their user accounts. GitHub deduplicates licenses for the GitHub Enterprise plan itself, and if you use GitHub Enterprise Server version 3.12 or later, for GitHub Advanced Security products. See [Sync License Usage](https://docs.github.com/en/billing/how-tos/manage-server-licenses/sync-license-usage).
 For more information, see [About GitHub Connect](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/about-github-connect#data-transmission).

If you enable automatic user license sync for your enterprise, every week, GitHub Connect will automatically synchronize license usage between GitHub Enterprise Server and your enterprise on GitHub.com or GHE.com. You can also synchronize your license data at any time outside of the automatic weekly sync, by manually triggering a license sync job. For more information, see [Sync License Usage](https://docs.github.com/en/billing/how-tos/manage-server-licenses/sync-license-usage#triggering-a-license-sync-job).

If you use multiple GitHub Enterprise Server instances, you can enable automatic license sync between each of your instances and the same enterprise account on GitHub Enterprise Cloud.

After you synchronize license usage, you can see a report of consumed licenses across all your environments in the enterprise settings on GitHub Enterprise Cloud. For more information, see [View Enterprise Usage](https://docs.github.com/en/enterprise-cloud@latest/billing/how-tos/manage-plan-and-licenses/view-enterprise-usage).


You can also manually upload GitHub Enterprise Server user license information to GitHub Enterprise Cloud. For more information, see [Sync License Usage](https://docs.github.com/en/billing/how-tos/manage-server-licenses/sync-license-usage).

> [!NOTE] To make troubleshooting easier, if you synchronize license usage and do not use Enterprise Managed Users, we highly recommend enabling verified domains for your enterprise account on GitHub Enterprise Cloud. See [Verifying Or Approving A Domain For Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/configuring-settings/configuring-user-applications-for-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise) in the GitHub Enterprise Cloud documentation.


## Enabling license synchronization

Before enabling license synchronization on your GitHub Enterprise Server instance, you must enable GitHub Connect. See [Enabling GitHub Connect For Ghecom](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-ghecom) or [Enabling GitHub Connect For Githubcom](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-githubcom).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "plug" aria-hidden="true" aria-label="plug" %} GitHub Connect**.

1. To the right of "License sync", click **Enable**.

   ![Screenshot of the "License sync" option on the GitHub Connect page. The "Enable" button is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)

> [!NOTE]
> If SAML with SCIM is enabled, the `scim-admin` setup user will not consume a license. For more information, see [Configuring Scim Provisioning For Users](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users#1-create-a-built-in-setup-user).
