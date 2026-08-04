# Managing custom repository roles for an organization

> [!NOTE]
> Only organizations that use GitHub Enterprise Cloud can create custom repository roles.For more information about how you can try GitHub Enterprise Cloud for free, see [Setting up a trial of GitHub Enterprise Cloud](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).





## About custom repository roles

A custom repository role is a configurable set of permissions with a custom name you choose.
 For more information, see [About Custom Repository Roles](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/about-custom-repository-roles).

## Creating a repository role

To create a new repository role, you add permissions to an inherited role and give the custom role a name.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Under "Organizations", next to the name of your organization, click **Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "id-badge" aria-hidden="true" aria-label="id-badge" %} Repository roles**.

1. Scroll to the "Custom roles" section, then click **Create a Role**.
1. Under "Name", type the name of your repository role.
1. Under "Description", type a description of your repository role.
1. Under "Choose a role to inherit", select the role you want to inherit.
1. Under "Add Permissions", select the dropdown menu and click the permissions you want your custom role to include.
1. Click **Create role**.

## Editing a repository role

1. In the top right corner of GitHub, click your profile picture, then click **Your profile**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your profile" is outlined in dark orange.](/assets/images/help/profile/profile-button-avatar-menu-global-nav-update.png)

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. Under "Organizations", next to the name of your organization, click **Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "id-badge" aria-hidden="true" aria-label="id-badge" %} Repository roles**.

1. To the right of the role you want to edit, click {% octicon "kebab-horizontal" aria-label="Show custom role actions" %}, then click **Edit**.

   ![Screenshot of the list of custom roles for an organization. To the right of a role, a kebab icon is outlined in dark orange.](/assets/images/help/organizations/repository-role-edit-setting.png)
1. Edit, then click **Update role**.

## Deleting a repository role

If you delete an existing repository role, all pending invitations, teams, and users with the custom role will be reassigned to the organization's base permissions.

1. In the top right corner of GitHub, click your profile picture, then click **Your profile**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your profile" is outlined in dark orange.](/assets/images/help/profile/profile-button-avatar-menu-global-nav-update.png)

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. Under "Organizations", next to the name of your organization, click **Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "id-badge" aria-hidden="true" aria-label="id-badge" %} Repository roles**.

1. To the right of the role you want to delete, click {% octicon "kebab-horizontal" aria-label="Show custom role actions" %}, then click **Delete**.

   ![Screenshot of the list of custom roles for an organization. To the right of a role, a kebab icon is outlined in dark orange.](/assets/images/help/organizations/repository-role-edit-setting.png)
1. Review changes for the role you want to remove, then click **Delete role**.
