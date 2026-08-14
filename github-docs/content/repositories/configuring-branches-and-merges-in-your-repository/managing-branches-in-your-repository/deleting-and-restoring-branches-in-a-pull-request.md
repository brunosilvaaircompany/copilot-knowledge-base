# Deleting and restoring branches in a pull request

## Deleting a branch used for a pull request

You can delete a branch that is associated with a pull request if the pull request has been merged or closed and there are no other open pull requests referencing the branch. For information on closing branches that are not associated with pull requests, see [Managing Branches Within Your Repository](https://docs.github.com/en/pull-requests/how-tos/commit-changes/managing-branches-within-your-repository#deleting-a-branch).

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "git-pull-request" aria-hidden="true" aria-label="git-pull-request" %} Pull requests**.

1. To see a list of closed pull requests, click **Closed**.

   ![Screenshot of the "Pull requests" page for a repository. The "Closed" filter shows a checkmark icon and "31 closed". It is outlined in orange.](/assets/images/help/branches/branches-closed.png)

1. In the list of pull requests, click the pull request that's associated with the branch that you want to delete.
1. Near the bottom of the pull request, click **Delete branch**.

   This button isn't displayed if there's currently an open pull request for this branch.

## Restoring a deleted branch

You can restore the head branch of a closed pull request.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "git-pull-request" aria-hidden="true" aria-label="git-pull-request" %} Pull requests**.

1. To see a list of closed pull requests, click **Closed**.

   ![Screenshot of the "Pull requests" page for a repository. The "Closed" filter shows a checkmark icon and "31 closed". It is outlined in orange.](/assets/images/help/branches/branches-closed.png)

1. In the list of pull requests, click the pull request that's associated with the branch that you want to restore.
1. Near the bottom of the pull request, click **Restore branch**.

## Further reading

* [Managing Branches Within Your Repository](https://docs.github.com/en/pull-requests/how-tos/commit-changes/managing-branches-within-your-repository)
* [Managing The Automatic Deletion Of Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches)
