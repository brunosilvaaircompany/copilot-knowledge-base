# Adding a billing manager to your organization

Members of your organization's Owners team can give _billing manager_ permissions to people. Once a person accepts their invitation to become a billing manager for your organization, they can invite additional people to be billing managers.

> [!NOTE]
> Billing managers do not use paid licenses in your organization's subscription.

## Permissions for billing managers

Billing managers can:

* View all metered usage for your organization and its repositories.
* View organization-level budgets.
* Download CSV usage reports.
* View payment history and download receipts.
* Add, update, or remove payment methods.
* Upgrade or downgrade between GitHub Free and GitHub Team plans.
* View, invite, and remove billing managers.
* Start, modify, or cancel sponsorships.


In addition, all billing managers will receive billing receipts by email on the organization's billing date.

Billing managers **are not** able to:

* Upgrade to GitHub Enterprise or downgrade an enterprise account
* Create or access repositories in your organizations
* See private members of your organization
* Be seen in the list of organization members
* Purchase, edit, or cancel subscriptions for GitHub Marketplace apps
* Purchase, edit, or cancel subscriptions for GitHub Copilot Business or GitHub Copilot Enterprise

> [!TIP]
> If your organization [requires members, billing managers, and outside collaborators to use two-factor authentication](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization), the user must enable two-factor authentication before they can accept your invitation to become a billing manager for the organization.

## Inviting a billing manager

>[!NOTE] If your organization is owned by an enterprise account, you cannot invite billing managers at the organization level. For more information, see [Inviting People To Manage Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise).

The invited person will receive an invitation email asking them to become a billing manager for your organization. Once the invited person clicks the accept link in their invitation email, they will automatically be added to the organization as a billing manager. If they don't already have a GitHub account, they will be directed to sign up for one, and they will be automatically added to the organization as a billing manager after they create an account.

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the sidebar, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**, then click **Additional billing details**.
1. Next to "Billing managers", click **Invite**.

## Further reading

* [Inviting People To Manage Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise) in the GitHub Enterprise Cloud documentation
