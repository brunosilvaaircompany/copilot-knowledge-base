# Changing the base branch of a pull request

> [!WARNING]
> When you change the base branch of your pull request, some commits may be removed from the timeline. Review comments may also become outdated because the line of code that the comment referenced may no longer be part of the changes in the pull request.

1. Under your repository name, click **{% octicon "git-pull-request" aria-hidden="true" aria-label="git-pull-request" %} Pull requests**.

1. In the "Pull Requests" list, click the pull request you want to modify.
1. Next to the pull request title, click **Edit title** {% octicon "pencil" aria-label="Edit title" %}.

1. In the base branch drop-down menu, select the base branch you'd like to [compare changes against](/pull-requests/how-tos/commit-changes/comparing-commits#comparing-branches).

   ![Screenshot of a pull request title. The dropdown to change the base branch is outlined in dark orange.](/assets/images/help/pull_requests/pull-request-edit-base-branch.png)

1. Read the information about changing the base branch and click **Change base**.

> [!TIP]
> When you open a pull request, GitHub sets the base to the commit that branch references. If the branch is updated in the future, GitHub does not update the base branch's commit.

## Further reading

* [Creating A Pull Request](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request)
* [Pull Requests](https://docs.github.com/en/pull-requests/reference/pull-requests)
* [Reviewing Proposed Changes In A Pull Request](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request)
