# Setting base permissions for an organization

## About base permissions for an organization

You can set base permissions that apply to all members of an organization when accessing any of the organization's repositories. Base permissions do not apply to outside collaborators.

By default, members of an organization will have **Read** permissions to the organization's public repositories.

If someone with admin access to an organization's repository grants a member a higher level of access for the repository, the higher level of access overrides the base permission.


If you've created a custom repository role with an inherited role that is lower access than your organization's base permissions, any members assigned to that role will default to the organization's base permissions rather than the inherited role. For more information, see [Managing Custom Repository Roles For An Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-custom-repository-roles-for-an-organization).


> [!NOTE]
> * All changes to base permissions will affect both new and existing members.
> * When you change base permissions for an organization, permissions for private forks are not automatically updated.

> * Internal repositories have a minimum visibility level of read, even if the base permission has been set to none.

## Setting base permissions

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Access" section of the sidebar, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Member privileges**.

1. Under "Base permissions", select the dropdown menu and click a permissions level.
1. Review the changes. To confirm, click **Change default permission to PERMISSION**.

## Further reading

* [Repository Roles For An Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)
* [Adding Outside Collaborators To Repositories In Your Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization)
