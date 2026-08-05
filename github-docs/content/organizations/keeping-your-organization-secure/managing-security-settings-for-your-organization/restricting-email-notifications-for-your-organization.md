# Restricting email notifications for your organization

## About email restrictions

When restricted email notifications are enabled in an organization, members can only use an email address associated with a verified or approved domain to receive email notifications about organization activity. For more information, see [Verifying Or Approving A Domain For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization).



> [!NOTE]
> To restrict email notifications, your organization must use GitHub Enterprise Cloud. For more information about how you can try GitHub Enterprise Cloud for free, see [Setting up a trial of GitHub Enterprise Cloud](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).




To continue receiving email notifications after you enable restrictions, members must verify any email addresses within domains that you verify or approve. For more information, see [Verifying Your Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/verifying-your-email-address).


Outside collaborators are not subject to restrictions on email notifications for verified or approved domains. For more information about outside collaborators, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators).

If your organization is owned by an enterprise account, organization members will be able to receive notifications from any domains verified or approved for the enterprise account, in addition to any domains verified or approved for the organization. For more information, see [Verifying Or Approving A Domain For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-user-applications-for-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).

## Restricting email notifications

Before you can restrict email notifications for your organization, you must verify or approve at least one domain for the organization, or an enterprise owner must have verified or approved at least one domain for the enterprise account. For more information about verifying and approving domains for an organization, see [Verifying Or Approving A Domain For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization).

Users will not be notified when you enable email restrictions. It is your responsibility to inform users that, in the future, they will only receive email notifications related to your organization if they've added an email address belonging to a verified or approved domain to their account settings.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "verified" aria-hidden="true" aria-label="verified" %} Verified and approved domains**.

1. Under "Notification preferences", select **Restrict email notifications to only approved or verified domains**.

1. Click **Save**.
