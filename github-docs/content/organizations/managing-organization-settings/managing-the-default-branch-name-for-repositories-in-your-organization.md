# Managing the default branch name for repositories in your organization

## About management of the default branch name

When a member of your organization creates a new repository in your organization, the repository contains one branch, which is the default branch. You can change the name that GitHub uses for the default branch in new repositories that members of your organization create. For more information about the default branch, see [About Branches](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches#about-the-default-branch).

You can change the default branch for an existing repository. For more information, see [Changing The Default Branch](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch).


If an enterprise owner has enforced a policy for the default branch name for your enterprise, you cannot set a default branch name for your organization. Instead, you can change the default branch for individual repositories. For more information, see [Enforcing Repository Management Policies In Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-the-default-branch-name) and [Changing The Default Branch](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch).

## Setting the default branch name

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 select **{% octicon "repo" aria-hidden="true" aria-label="repo" %} Repository**, then click **Repository defaults**.

1. Under "Repository default branch", click **Change default branch name now**.
1. In the text field, type the default name that you would like to use for new branches.
1. Click **Update**.

## Further reading

* [Managing The Default Branch Name For Your Repositories](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-default-branch-name-for-your-repositories)
