# Giving users GitHub Copilot in your enterprise

## Prerequisites

Confirm which Copilot plan or billing model your enterprise uses. For a comparison of the enterprise options, see [Plans](https://docs.github.com/en/copilot/get-started/plans#organization-and-enterprise-plans).

Before assigning seats, configure policies, budgets, and network requirements. See [Set Up For Enterprise](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-enterprise).

## Options for assigning GitHub Copilot

Users must receive an assigned Copilot seat, regardless of billing model.

The available assignment methods depend on your enterprise's plan or billing model.

## Assigning seats directly

With Copilot access or Copilot Business, enterprise owners can assign seats directly to individual members or enterprise teams. With Copilot access, you can also assign seats to all members of an organization. For guidance on organizing members before assignment, see [Organize Work](https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/enterprise-best-practices/organize-work).

When you assign seats to an enterprise team, each member receives a seat. Users receive or lose access when they are added or removed from the team. If you use Enterprise Managed Users, you can sync the team with an identity provider (IdP) group and manage licensing from your IdP.

### Prerequisites

* Set **Policies for enterprise-assigned users** to define whether policies set to "Let organizations decide" default to enabled or disabled for directly assigned users. See [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies#defining-policies-for-your-enterprise).
* If you want to assign seats to users who are not already in your enterprise, first invite the users (personal accounts) or provision them from your IdP (Enterprise Managed Users). For personal accounts, see [Add Users](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/add-users).
* If you want to assign seats to an enterprise team, create the team first. See [Create Enterprise Teams](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams).

### Assigning seats

With Copilot access, members without a GitHub Enterprise Cloud license receive Copilot Standalone at $10 USD per month. Review the access charges before confirming an assignment.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.

1. In the left sidebar, click **Licensing**.
1. Open seat management for your billing model:

   * With Copilot access, click **Manage** in the "Copilot access" section.
   * With Copilot Business, click **Manage** next to "Copilot".

1. Start an assignment:

   * With Copilot access, on the **All members** tab, click **Assign access**.
   * With Copilot Business, click the **All members** or **Enterprise Teams** tab, then click **Assign licenses**.

1. Select the recipients and confirm the assignment:

   * With Copilot access, search for and select the members, then click **Review access**. Review the selected members, any Copilot Standalone charges, and the total monthly access cost. Usage is metered and billed separately. To confirm, click **Assign access**.
   * With Copilot Business, search for users or teams, then click **Add licenses**.

With Copilot Business, you can also prevent organization owners from assigning licenses by disabling access for organizations. See [Disable For Organizations](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/disable-for-organizations).

## Enabling Copilot for organizations

With Copilot Business or Copilot Enterprise, enterprise owners can enable access for organizations so organization owners can assign seats to their members.

If your enterprise has a Copilot Enterprise plan, you can assign licenses for either Copilot Enterprise or Copilot Business.

1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.
1. In the "Billing and licensing" sidebar, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Licensing**.
1. In the "Copilot" section, click **Manage**.

1. Next to "Organization access", choose whether to enable Copilot for all organizations or allow for specific organizations.

   ![Screenshot of the "Organization access" section, with the dropdown menu highlighted.](/assets/images/help/copilot/organization-access-menu.png)

1. If you selected **Allow for specific organizations**:
    1. Click the **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations** tab.
    1. Locate the organization for which you want to enable Copilot.
    1. To the right of the organization name, select the **Copilot** dropdown menu.
       * If your enterprise has a Copilot Business plan, click **Enabled**.
       * If your enterprise has a Copilot Enterprise plan, click either **Copilot: Enterprise** or **Copilot: Business** to assign a specific Copilot plan to the organization.

After you've enabled Copilot for an organization in your enterprise, owners of the organization can grant access to some or all members of the organization. See [Grant Access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-access/grant-access).

## Removing member seats

With Copilot access, the member-level **Remove access** action removes a member's seat, including assignments inherited from default, enterprise team, or organization settings. You do not need to remove the member from those teams or organizations. The member can still use Copilot until the end of the billing cycle.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.

1. In the left sidebar, click **Licensing**.
1. In the "Copilot access" section, click **Manage**.
1. On the **All members** tab, find the member whose seat you want to remove.
1. For that member, use **Remove access**.

For billing and access effects, see [License Changes](https://docs.github.com/en/copilot/reference/copilot-billing/license-changes#copilot-access).

## Next steps

After assigning access, ask developers to sign in with the account that has their enterprise-provided license. See [Quickstart For Using GitHub Copilot In Your Ide](https://docs.github.com/en/copilot/get-started/quickstart-for-using-github-copilot-in-your-ide).
