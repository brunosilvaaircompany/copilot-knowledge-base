# Allowing repository admins to rename branches with organization rulesets

Organization owners control whether repository administrators can rename branches that are targeted by one or more branch rulesets. For existing organizations, this setting is disabled by default. For newly created organizations, this setting is enabled by default.

When this setting is enabled, repository administrators can rename these branches, provided the new branch name is still targeted by all the same organization rulesets as the current branch name, or the repository administrator has permission to bypass any which are no longer targeted. This ensures that rulesets cannot be circumvented through branch renaming.

Organization administrators can rename branches targeted by organization rulesets without restriction.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Access" section of the sidebar, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Member privileges**.

1. Under "Branch renames", select **Allow repository administrators to rename branches protected by organization rules**.
1. Click **Save**.

## Further reading

* [Renaming A Branch](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/renaming-a-branch)
* [Enforcing Repository Management Policies In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-renaming-protected-branches)
