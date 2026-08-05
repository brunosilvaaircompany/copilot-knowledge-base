# Changing the default branch

## About changing the default branch

You can choose the default branch for a repository. The default branch is the base branch for pull requests and code commits. For more information about the default branch, see [About Branches](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches#about-the-default-branch).

You can also rename the default branch. For more information, see [Renaming A Branch](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/renaming-a-branch).

You can set the name of the default branch for new repositories. For more information, see [Managing The Default Branch Name For Your Repositories](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-default-branch-name-for-your-repositories), [Managing The Default Branch Name For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization), and [Enforcing Repository Management Policies In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-the-default-branch-name).


## Prerequisites

To change the default branch, your repository must have more than one branch. For more information, see [Creating And Deleting Branches Within Your Repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch).



If organizational or enterprise rulesets target branches in your repository, changing the default branch requires an organization or enterprise administrator. Whether repository administrators can rename other targeted branches depends on the branch-rename setting or policy configured by your organization or enterprise. For more information, see [Allowing Repository Admins To Rename Branches With Organization Rulesets](https://docs.github.com/en/organizations/managing-organization-settings/allowing-repository-admins-to-rename-branches-with-organization-rulesets).



Additionally, you need to have admin access to a repository to change the default branch.

## Changing the default branch

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. Under "Default branch", to the right of the default branch name, click {% octicon "arrow-switch" aria-label="Switch to another branch" %}.
1. Select the branch dropdown menu and click a branch name.
1. Click **Update**.
1. Read the warning, then click **I understand, update the default branch.**
