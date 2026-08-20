# Granting users access to GitHub Copilot in your enterprise

There are two main ways to grant access to Copilot in an enterprise:

* **Assign licenses directly to users or teams** in the enterprise. This approach simplifies license management at scale and provides the option of granting Copilot licenses to users who don't consume a GitHub Enterprise license. This approach is currently only available for **Copilot Business** licenses.
* **Enable Copilot for organizations**. This approach allows you to choose Copilot Business or Copilot Enterprise for individual organizations and give organization owners control to grant licenses to the users who need them most.


## Assigning licenses to users or teams

You can assign Copilot Business licenses directly to users or enterprise teams.

When you assign licenses to an enterprise team, users receive or lose access to Copilot when they are added or removed from the team. If you use Enterprise Managed Users, you can sync the team with an identity provider (IdP) group and manage licensing from your IdP.

### Prerequisites

* Set the **Policies for enterprise-assigned users** policy to define a default setting for these users when other enterprise policies are set to "No policy". See [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies#defining-policies-for-your-enterprise).
* If you want to assign licenses to users who are not already in your enterprise, you must first invite the users (personal accounts) or provision them from your identity provider (Enterprise Managed Users). For personal accounts, see [Add Users](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/add-users).
* If you want to assign a license to an enterprise team, you must create the team first. See [Create Enterprise Teams](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams).

### Assigning licenses


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.

1. In the left sidebar, click **Licensing**.
1. Next to "Copilot", click **Manage**.

   ![Screenshot of the Licensing page, with the "Manage" button highlighted in orange.](/assets/images/help/copilot/manage-licenses.png)

1. Click the **All members** or **Enterprise Teams** tab.
1. Click **Assign licenses**.
1. Search for users or teams, then click **Add licenses**.
1. Optionally, disable Copilot for organizations to prevent organization owners from assigning licenses. See [Disable For Organizations](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/disable-for-organizations).

## Enabling Copilot for organizations

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
