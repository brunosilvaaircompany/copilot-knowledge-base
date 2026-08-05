# Reverting a pull request

## About reverting a pull request

Reverting a merged pull request creates a new pull request that reverts the original merge commit. You must have [write permissions](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization) in the repository.

## Reverting a pull request

> [!NOTE]
> You may need to revert individual commits if reverting the pull request causes merge conflicts or if the original pull request was not merged on GitHub. See [Git revert](https://git-scm.com/docs/git-revert.html) in the Git documentation.

1. Under your repository name, click **{% octicon "git-pull-request" aria-hidden="true" aria-label="git-pull-request" %} Pull requests**.

1. In the "Pull Requests" list, click the pull request you want to revert.
1. Near the bottom of the pull request, click **Revert**. If the **Revert** option isn't displayed, you need to ask the repository administrator for write permissions.

   ![Screenshot of a pull request's timeline. The "Revert" button is outlined in dark orange.](/assets/images/help/pull_requests/revert-pull-request-link.png)

1. Merge the resulting pull request. See [Merging A Pull Request](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/merging-a-pull-request).
