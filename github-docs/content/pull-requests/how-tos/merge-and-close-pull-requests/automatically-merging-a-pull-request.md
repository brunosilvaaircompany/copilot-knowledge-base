# Automatically merging a pull request

## About auto-merge

Auto-merge merges a pull request automatically after all required reviews and status checks pass. Before you use auto-merge, it must be enabled for the repository. See [Managing Auto Merge For Pull Requests In Your Repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-auto-merge-for-pull-requests-in-your-repository).

Auto-merge is disabled if someone without write permissions pushes new changes to the head branch or switches the base branch.

## Enabling auto-merge

> [!NOTE]
> The option to enable auto-merge is shown only on pull requests that cannot be merged immediately. For example, when a branch protection rule enforces "Require pull request reviews before merging" or "Require status checks to pass before merging" and these conditions are not yet met. For more information, see [Managing A Branch Protection Rule](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule).


People with write permissions to a repository can enable auto-merge for a pull request.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "git-pull-request" aria-hidden="true" aria-label="git-pull-request" %} Pull requests**.

1. In the "Pull Requests" list, click the pull request you want to auto-merge.
1. Optionally, select the {% octicon "triangle-down" aria-label="Select the merge method" %} dropdown menu, then click a merge method. See [Pull Request Merges](https://docs.github.com/en/pull-requests/reference/pull-request-merges).

   ![Screenshot of the merge box of a pull request. A dropdown menu, labeled with a downward-facing triangle, is outlined in dark orange.](/assets/images/help/pull_requests/enable-auto-merge-drop-down.png)

1. Click **Enable auto-merge**.
   
1. If you chose the merge or squash and merge methods, type a commit message and description and choose the email address you want to author the merge commit.

   > [!NOTE]
   > The email dropdown menu is not available if you have email privacy enabled or if you only have one verified and visible email associated with your GitHub account.

   
   
1. If you chose the merge or squash and merge methods, type a commit message and description.
   
1. Click **Confirm auto-merge**.

## Disabling auto-merge

People with write permissions to a repository and pull request authors can disable auto-merge for a pull request.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "git-pull-request" aria-hidden="true" aria-label="git-pull-request" %} Pull requests**.

1. In the "Pull Requests" list, click the pull request for which you want to disable auto-merge.
1. In the merge box, click **Disable auto-merge**.
