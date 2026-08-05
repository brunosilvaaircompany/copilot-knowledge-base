# Managing the forking policy for your organization

By default, new organizations are configured to disallow the forking of private and internal repositories.

If you allow forking of private and internal repositories at the organization level, you can also configure the ability to fork a specific private or internal repository. For more information, see [Managing The Forking Policy For Your Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository).


{% ifversion ghec %}If your organization is owned by an enterprise account, you may not be able to configure this setting for your organization, if an enterprise owner has set a policy at the enterprise level. For more information, see [Enforcing Repository Management Policies In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories).{% endif %}

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Access" section of the sidebar, click **Member privileges**.

1. Under "Repository forking", select **Allow forking of private and internal repositories**.

1. Optionally, if your organization is owned by an enterprise account, select a policy for where users are allowed to fork repositories.

   If repository forking policy is configured at the enterprise level, you won't be able to select a more permissive policy in your organization settings.

1. Click **Save**.

## Further reading

* [About Forks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)
* [Repository Roles For An Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)
