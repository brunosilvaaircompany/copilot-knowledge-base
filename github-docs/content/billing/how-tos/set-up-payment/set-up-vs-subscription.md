# Setting up Visual Studio subscriptions with GitHub Enterprise

> [!NOTE] Customers with a Visual Studio bundle can **switch to usage-based billing** for GitHub Enterprise licenses. This allows you to pay for licenses on a flexible monthly cycle for users who are not part of your Visual Studio subscription. See [Usage Based Licenses](https://docs.github.com/en/billing/concepts/enterprise-billing/usage-based-licenses).

Visual Studio subscriptions with GitHub Enterprise is a combined offering from Microsoft that allows a subscriber to use both Visual Studio and GitHub Enterprise.
 See [Visual Studio Subs](https://docs.github.com/en/billing/concepts/enterprise-billing/visual-studio-subs).

## Prerequisites

* Your team's Visual Studio subscription must include GitHub Enterprise. For more information, see:
   * [Visual Studio Subscriptions and Benefits](https://visualstudio.microsoft.com/subscriptions/) on the Visual Studio website
   * [Overview of admin responsibilities](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities) in Microsoft Docs.

* Your team must have an enterprise on GitHub, see [Enterprise Accounts](https://docs.github.com/en/admin/concepts/enterprise-fundamentals/enterprise-accounts).
   * If you're not sure whether your team has an enterprise, contact your GitHub administrator.
   * If you're not sure who on your team is responsible for GitHub services, contact [GitHub's Sales team](https://github.com/enterprise/contact).

## Setting up Visual Studio subscriptions with GitHub Enterprise

To set up Visual Studio subscriptions with GitHub Enterprise, members of your team must complete the following tasks.

One person may be able to complete the tasks because the person has all of the roles, but you may need to coordinate the tasks with multiple people. For more information, see [Roles For Visual Studio](https://docs.github.com/en/billing/reference/roles-for-visual-studio).

1. A GitHub enterprise owner must create at least one organization in your enterprise. For more information, see [Adding Organizations To Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise) in the GitHub Enterprise Cloud documentation.

1. The Visual Studio subscription admin must assign a license for Visual Studio to a subscriber in the [administrator portal for Visual Studio subscriptions](https://visualstudio.microsoft.com/subscriptions-administration/). For more information, see [Overview of the Visual Studio Subscriptions Administrator Portal](https://docs.microsoft.com/en-us/visualstudio/subscriptions/using-admin-portal) and [Assign Visual Studio Licenses in the Visual Studio Subscriptions Administration Portal](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-license) in Microsoft Docs.

1. Optionally, if the Visual Studio subscription admin assigned licenses to subscribers in Visual Studio before adding GitHub Enterprise to the subscription, the subscription admin can move the subscribers to the combined offering in the Visual Studio administration portal. For more information, see [Manage Visual Studio subscriptions with GitHub Enterprise](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-github#moving-to-visual-studio-with-github-enterprise) in Microsoft Docs.

1. If the Visual Studio subscription admin has not disabled email notifications, the subscriber will receive two confirmation emails. For more information, see [Visual Studio subscriptions with GitHub Enterprise](https://docs.microsoft.com/en-us/visualstudio/subscriptions/access-github#what-is-the-visual-studio-subscription-with-github-enterprise-setup-process) in Microsoft Docs.

1. A GitHub organization owner must invite the subscriber to the organization created in step 1. The subscriber can accept the invitation with an existing personal account or create a new account. After the subscriber joins the organization, the subscriber becomes an enterprise member. For more information, see [Inviting Users To Join Your Organization](https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization) in the GitHub Enterprise Cloud documentation.

   > [!TIP]
   > * While not required, we recommend that the organization owner sends an invitation to the same email address used for the subscriber's User Primary Name (UPN). When the email address on GitHub matches the subscriber's UPN, you can ensure that another enterprise does not claim the subscriber's license.
   > * If the subscriber accepts the invitation to the organization with an existing personal account on GitHub, we recommend that the subscriber add the email address they use for Visual Studio to their personal account on GitHub. For more information, see [Adding An Email Address To Your GitHub Account](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/adding-an-email-address-to-your-github-account).
   > * If the organization owner must invite a large number of subscribers, a script may make the process faster. For more information, see [the sample PowerShell script](https://github.com/github/platform-samples/blob/master/api/powershell/invite_members_to_org.ps1) in the `github/platform-samples` repository.

1. If any enterprise members aren't automatically matched to their Visual Studio account, an enterprise owner can match the accounts manually on GitHub. See [Reconciling users across Visual Studio and GitHub](#reconciling-users-across-visual-studio-and-github).

After Visual Studio subscriptions with GitHub Enterprise is set up for subscribers on your team, enterprise owners can review licensing information on GitHub. For more information, see [View Enterprise Usage](https://docs.github.com/en/billing/how-tos/manage-plan-and-licenses/view-enterprise-usage).

## Reconciling users across Visual Studio and GitHub

To stay compliant with the terms of use, a GitHub **enterprise owner** should ensure all user accounts are correctly matched across GitHub and Visual Studio.

Most users are automatically matched across GitHub and Visual Studio. If a user has different email addresses in GitHub and Visual Studio, you may need to match the accounts manually.

Under the terms of use, the GitHub account and Visual Studio account for a single license must belong to the same person.

### 1. Audit user mappings

To audit your user mappings, download a summary of assigned users from the Visual Studio portal, and compare it against the verified emails of users in your GitHub enterprise. See [Viewing People In Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-email-addresses).

### 2. Match users to Visual Studio

When you've identified GitHub users who aren't correctly matched to their Visual Studio account, you can update the mappings on GitHub. You can't update mappings for users who have been automatically matched.

1. Go to your enterprise on GitHub and click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.
1. In the left sidebar, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Licensing**.
1. On the Licensing page, next to "Enterprise Cloud", click **Manage**.
1. In the list of users, look for users with an "Enterprise" license type. These are enterprise members that aren't matched to a user in your Visual Studio subscription.
1. To match a user to their Visual Studio account, click {% octicon "kebab-horizontal" aria-label="More options" %}, then click **Change to Visual Studio license**.
1. Select the user's Visual Studio login email, then click **Confirm change**.

## Viewing available licenses

You can view the number of GitHub Enterprise licenses available to your enterprise on your GitHub Enterprise Server instance. The list of pending invitations includes subscribers who are not yet members of at least one organization in your enterprise. For more information, see [View Enterprise Usage](https://docs.github.com/en/billing/how-tos/manage-plan-and-licenses/view-enterprise-usage) and [Viewing People In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-and-outside-collaborators).

> [!TIP] If you download a CSV file with your enterprise's license usage in step 6 of [View Enterprise Usage](https://docs.github.com/en/billing/how-tos/manage-plan-and-licenses/view-enterprise-usage#viewing-the-subscription-and-usage-for-your-enterprise-account), any members with a missing value for the "Name" or "Profile" columns have not yet accepted an invitation to join an organization within the enterprise.

You can also see pending GitHub Enterprise invitations to subscribers in the [administrator portal for Visual Studio subscriptions](https://visualstudio.microsoft.com/subscriptions-administration/).

## Further reading

* [Getting Started With GitHub Enterprise Cloud](https://docs.github.com/en/enterprise-cloud@latest/get-started/onboarding/getting-started-with-github-enterprise-cloud) in the GitHub Enterprise Cloud documentation
