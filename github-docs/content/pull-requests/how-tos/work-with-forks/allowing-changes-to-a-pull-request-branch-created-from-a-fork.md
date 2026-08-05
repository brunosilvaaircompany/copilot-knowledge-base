# Allowing changes to a pull request branch created from a fork

When someone creates a pull request from their fork, they usually decide whether other people can commit to the pull request's compare branch. For greater collaboration, the author can give maintainers of the upstream repository—that is, anyone with push access to the upstream repository—permission to commit to the compare branch. See [Forks](https://docs.github.com/en/pull-requests/reference/forks).

Pull request authors can set these permissions when they create a pull request from a fork in a personal account. They can also update an existing pull request to let repository maintainers commit to the branch. See [Creating A Pull Request From A Fork](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request-from-a-fork).

## Enabling repository maintainer permissions on existing pull requests

1. On GitHub, navigate to the main page of the upstream repository of your pull request.
1. Under the upstream repository name, click **{% octicon "git-pull-request" aria-hidden="true" aria-label="git-pull-request" %} Pull requests**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled "Pull requests," is outlined in dark orange.](/assets/images/help/repository/repo-tabs-pull-requests-global-nav-update.png)

1. In the list of pull requests, navigate to the pull request that you'd like to allow commits on.
1. On user-owned forks, if you want to allow anyone with push access to the upstream repository to make changes to your pull request, select **Allow edits from maintainers**.

    > [!WARNING]
    > If your fork contains GitHub Actions workflows, the option is **Allow edits and access to secrets by maintainers**. Allowing edits on a fork's branch that contains GitHub Actions workflows also allows a maintainer to edit the forked repository's workflows, which can potentially reveal values of secrets and grant access to other branches.


   ![Screenshot of a pull request. On the bottom right, the "Allow edits and access to secrets by maintainers" checkbox is enabled and outlined in orange.](/assets/images/help/pull_requests/allow-edits-and-access-by-maintainers.png)

## Further reading

* [Committing Changes To A Pull Request Branch Created From A Fork](https://docs.github.com/en/pull-requests/how-tos/commit-changes/committing-changes-to-a-pull-request-branch-created-from-a-fork)
