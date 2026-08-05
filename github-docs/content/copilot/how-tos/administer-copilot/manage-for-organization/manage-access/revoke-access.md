# Revoking access to GitHub Copilot for members of your organization

## About organization-level revocation

Revoking access at the organization level only removes access for people who receive Copilot through the organization. If a person also has access through an enterprise team or as an individual, they will retain it.

To remove access for those users, an enterprise owner must remove them from the enterprise team or unassign their license in the enterprise settings, which revokes access immediately. For more information, see [Grant Access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access#assigning-licenses-to-users-or-teams).

For people whose access is revoked through organization-level revocation, the removal takes effect from the start of the next billing cycle. If you remove a seat during a cycle, the user will have access to Copilot for the remainder of the billing cycle. For more information, see [GitHub Copilot Licenses](https://docs.github.com/en/billing/concepts/product-billing/github-copilot-licenses).

## Revoking access to Copilot for your whole organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Access" section of the sidebar, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & licensing** and then **Licensing** (new platform). Alternatively, in the "Code planning, and automation" section of the sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, and then click **Access** (original platform).

   >[!IMPORTANT] If you have not configured all policies for Copilot, you will not be able to complete the following steps. If that is the case, click **Go to policies** and ensure all policies are configured before proceeding.

1. Under "Copilot Enterprise is active in your organization" or "Copilot Business is active in your organization," to revoke GitHub Copilot access for all users in your organization, select **Disabled**.
1. In the "Remove Copilot access" dialog, click **Confirm and remove seats**.


## Revoking access to Copilot for specific users in your organization

Removing a user from the organization(s) that had granted them Copilot access will automatically revoke their Copilot access. Alternatively, you can revoke Copilot access while preserving their organization membership.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, and then click **Access**.

1. Under "Copilot Enterprise is active in your organization" or "Copilot Business is active in your organization," select **Enabled For: selected members**.

    * In the "Confirm policy update" dialog, click **Renew seats**.

1. Under "Access management," in the search bar, type the member's username or full name.
1. To remove the member from the list of users who have access to Copilot, select the checkbox to the left of their username, then click **Cancel seat**.

   ![Screenshot of the Access management section, with a user selected and the 'Cancel seat' button highlighted.](/assets/images/help/copilot/cancel-copilot-seat.png)

1. In the "Confirm seat removal" dialog, click **Remove seats**.

## Using the API to revoke access to Copilot

You can use GitHub's REST API to revoke access to Copilot for teams, or specific users, in your organization. For example, you might want to write a script to automatically revoke seats for organization members who have not been using Copilot. See [Remove teams from the Copilot subscription for an organization](/rest/copilot/copilot-user-management?apiVersion=2022-11-28#remove-teams-from-the-copilot-subscription-for-an-organization) and [Remove users from the Copilot subscription for an organization](/rest/copilot/copilot-user-management?apiVersion=2022-11-28#remove-users-from-the-copilot-subscription-for-an-organization).

## Further reading

* [GitHub Copilot Trust Center](https://copilot.github.trust.page)
* [Grant Access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-access/grant-access).
* [Review User Activity Data](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/review-activity/review-user-activity-data)
