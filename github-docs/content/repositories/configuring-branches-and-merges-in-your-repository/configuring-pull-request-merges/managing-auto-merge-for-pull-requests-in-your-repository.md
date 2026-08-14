# Managing auto-merge for pull requests in your repository

## About auto-merge

If you allow auto-merge for pull requests in your repository, people with write permissions can configure individual pull requests in the repository to merge automatically when all merge requirements are met. If someone who does not have write permissions pushes changes to a pull request that has auto-merge enabled, auto-merge will be disabled for that pull request. For more information, see [Automatically Merging A Pull Request](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/automatically-merging-a-pull-request).

## Managing auto-merge

> [!NOTE]
> The option to enable auto-merge is shown only on pull requests that cannot be merged immediately. For example, when a branch protection rule enforces "Require pull request reviews before merging" or "Require status checks to pass before merging" and these conditions are not yet met. For more information, see [Managing A Branch Protection Rule](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule).


1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. On the left side of the page in the navigation bar, click **General**
1. Toward the bottom of the page under "Pull Requests", select or deselect **Allow auto-merge**.

![Screenshot of a repository settings showing the auto merge.](/assets/images/help/repository/repo-action-auto-merge.png)
