# Restricting email notifications for your enterprise

## About email restrictions for your enterprise

When you restrict email notifications, enterprise members can only use an email address in a verified or approved domain to receive email notifications about activity in organizations owned by your enterprise.

> [!NOTE]
> The ability to approve a domain not owned by your organization or enterprise is currently in public preview and subject to change.


The domains can be inherited from the enterprise or configured for the specific organization. For more information, see [Verifying Or Approving A Domain For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-user-applications-for-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise) and [Restricting Email Notifications For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization).

To continue receiving email notifications after you enable restrictions, members must verify any email addresses within domains that you verify or approve. For more information, see [Verifying Your Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/verifying-your-email-address).


If email restrictions are enabled for an enterprise, organization owners cannot disable email restrictions for any organization owned by the enterprise. If changes occur that result in an organization having no verified or approved domains, either inherited from an enterprise that owns the organization or for the specific organization, email restrictions will be disabled for the organization.

## Restricting email notifications for your enterprise

Before you can restrict email notifications for your enterprise, you must verify or approve at least one domain for the enterprise.  For more information, see [Verifying Or Approving A Domain For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-user-applications-for-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).

Users will not be notified when you enable email restrictions. It is your responsibility to inform users that, in the future, they will only receive email notifications related to your enterprise if they've added an email address belonging to a verified or approved domain to their account settings.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Verified & approved domains**.

1. Under "Notification preferences", select **Restrict email notifications to only approved or verified domains**.

1. Click **Save**.
