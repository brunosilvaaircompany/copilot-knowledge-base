# Managing custom organization roles

## About custom organization roles

You can have more granular control over the access you grant to your organization and repository's settings by creating custom organization roles. Organization roles are a way to grant an organization member the ability to administer certain subsets of settings without granting full administrative control of the organization and its repositories. For example, you could create a role that contains the "View organization audit log" permission.
 For more information, see [Permissions Of Custom Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles).

If you are an organization owner or have a custom role with the "View organization roles" or "Manage custom organization roles" permissions, you can view custom roles for the organization. If your enterprise owner has created organization roles, these roles can be seen and assigned as well, but not edited or deleted.

To find the "Custom roles" page, you can follow the first steps in [Creating a custom role](#creating-a-custom-role). The exact steps will vary depending on which other settings page you have access to.

To view organization role permissions and manage organization role assignments, see [Using Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles).

## Creating a custom role

Enterprise owners, organization owners, and users with the "Manage custom organization roles" permission can create up to 20 custom organization roles.



### In an organization



1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Access" section of the sidebar, click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organization roles**, then click **Role management**.

1. Click **Create a role**.
1. Type a name and description for the custom role.
1. Under "Add permissions", click the **Organization** or **Repository** tab to select the type of permissions you want to add to the custom role.

   * To add permissions for the organization, click the **Organization** tab, then select the dropdown menu and click the permissions you want your custom role to include.
   * To choose a base repository role to inherit, click the **Repository** tab, then select the dropdown menu and click the base role you want to include in the custom role. For more information about the available base repository roles, see [Base roles for repository access](/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles#base-roles-for-repository-access).

      Once you've selected a base repository role, you can add additional permissions to the custom role. For more information about the available permissions, see [Additional permissions for repository access](/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles#additional-permissions-for-repository-access).

      >[!NOTE] Adding a repository role and permissions to a custom organization role is currently in public preview and subject to change.


1. Click **Create role**.




### In an enterprise

Enterprise owners can define standard custom organization roles for their organization owners to assign. See [Create Custom Roles](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/create-custom-roles).



## Editing a custom role

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Access" section of the sidebar, click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organization roles**, then click **Role management**.

1. Next to the role you want to edit, select {% octicon "kebab-horizontal" aria-label="Show custom role actions" %}, then click **Edit role**.
1. Change the role as required, then click **Update role**.


## Deleting a custom role

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Access" section of the sidebar, click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organization roles**, then click **Role management**.

1. Next to the role you want to edit, select {% octicon "kebab-horizontal" aria-label="Show custom role actions" %}, then click **Delete role**.
1. Read the details in the dialog to confirm you want to delete the role, then click **Delete role**.
