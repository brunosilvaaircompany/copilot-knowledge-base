# Troubleshooting license usage for GitHub Enterprise

## About unexpected license usage

If the number of consumed licenses for your enterprise is unexpected, you can review your consumed license report to audit your license usage across all your enterprise deployments and subscriptions. For more information, see [View Enterprise Usage](https://docs.github.com/en/billing/how-tos/manage-plan-and-licenses/view-enterprise-usage) and [Enterprise License Troubleshooting](https://docs.github.com/en/enterprise-cloud@latest/billing/reference/enterprise-license-troubleshooting).

> [!NOTE] For privacy reasons, enterprise owners cannot directly access the details of user accounts unless you use Enterprise Managed Users.

If you find errors, you can try the troubleshooting steps below.

## Troubleshooting consumed licenses

To ensure that each user is only consuming a single license for different deployments and subscriptions, try the following troubleshooting steps.

1. To help identify users that are consuming multiple licenses, if your enterprise uses verified domains for GitHub Enterprise Cloud, review the list of enterprise members who do not have an email address from a verified domain associated with their account on GitHub Enterprise Cloud.

   Often, these are the users who erroneously consume more than one license. For more information, see [Viewing People In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain).

   > [!NOTE]
   > To make troubleshooting easier, we recommend using verified domains with your enterprise account on GitHub Enterprise Cloud. For more information, see [Verifying Or Approving A Domain For Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/configuring-settings/configuring-user-applications-for-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).

1. After you identify users who are consuming multiple licenses, make sure that the same email address is associated with all of the user's accounts. For more information about which email addresses must match, see [Enterprise License Troubleshooting](https://docs.github.com/en/enterprise-cloud@latest/billing/reference/enterprise-license-troubleshooting).
1. If an email address was recently updated or verified to correct a mismatch, view the timestamp of the last license sync job. If a job hasn't run since the correction was made, manually trigger a new job. For more information, see [Sync License Usage](https://docs.github.com/en/enterprise-cloud@latest/billing/how-tos/manage-server-licenses/sync-license-usage).

If you still have questions about your consumed licenses after reviewing the troubleshooting information above, you can contact GitHub Support through the [GitHub Support portal](https://support.github.com).
