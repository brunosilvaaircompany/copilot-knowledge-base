# Managing branches within your repository

## Creating a branch

Create a branch for a separate place to work on changes before opening a pull request.

> [!NOTE]
> You can only create a branch in a repository to which you have write access.

### Creating a branch via the branches overview

1. On GitHub, navigate to the main page of the repository.

1. From the file tree view on the left, select the {% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} branch dropdown menu, then click **View all branches**. You can also find the branch dropdown menu at the top of the integrated file editor.

   ![Screenshot of the file tree view for a repository. A dropdown menu for branches is expanded and outlined in dark orange.](/assets/images/help/repository/file-tree-view-branch-dropdown-expanded.png)

1. Click **New branch**.

   ![Screenshot of the "Branches" page for a repository. A green button, labeled "New branch", is highlighted with an orange outline.](/assets/images/help/branches/new-branch-button.png)
1. Under "Branch name", type a name for the branch.
1. Under "Branch source", choose the repository and branch to base your new branch on.
1. Click **Create branch**.

### Creating a branch using the branch dropdown

1. On GitHub, navigate to the main page of the repository.

1. Select the {% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} branch dropdown menu, in the file tree view or at the top of the integrated file editor.

   ![Screenshot of the file tree view for a repository. A dropdown menu for branches is outlined in dark orange.](/assets/images/help/branches/file-tree-view-branch-dropdown.png)

1. Optionally, to create the new branch from a branch other than the default branch of the repository, click another branch. Then, select the branch dropdown menu again.
1. In the "Find or create a branch..." text field, type a unique name for your new branch, then click **Create branch**.

   ![Screenshot of the branch selector dropdown menu. "Create branch: new-branch" is highlighted with an orange outline.](/assets/images/help/branches/create-branch-text.png)

### Creating a branch for an issue

You can create a branch to work on an issue directly from the issue page. See [Creating A Branch For An Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-a-branch-for-an-issue).

## Deleting a branch

Delete branches that you no longer need, such as branches for merged or closed work.

You can have head branches automatically deleted after pull requests are merged in your repository. See [Managing The Automatic Deletion Of Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches).


> [!NOTE]
> If the branch you want to delete is the repository's default branch, choose a new default branch first. See [Changing The Default Branch](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch).

If the branch is associated with an open pull request, merge or close the pull request before deleting the branch.

1. On GitHub, navigate to the main page of the repository.

1. From the file tree view on the left, select the {% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} branch dropdown menu, then click **View all branches**. You can also find the branch dropdown menu at the top of the integrated file editor.

   ![Screenshot of the file tree view for a repository. A dropdown menu for branches is expanded and outlined in dark orange.](/assets/images/help/repository/file-tree-view-branch-dropdown-expanded.png)

1. Next to the branch that you want to delete, click {% octicon "trash" aria-label="The trash icon" %} .

   ![Screenshot of a branch in the branch list. A trash icon is highlighted with an orange outline.](/assets/images/help/branches/branches-delete.png)
1. If the branch is associated with at least one open pull request, deleting the branch closes the pull requests. Read the warning, then click **Delete**.

If you delete a head branch after its pull request has been merged, GitHub checks for any open pull requests in the same repository that specify the deleted branch as their base branch. GitHub automatically updates any such pull requests, changing their base branch to the merged pull request's base branch.

See [Branches](https://docs.github.com/en/pull-requests/reference/branches).

## Further reading

* [Branches](https://docs.github.com/en/pull-requests/reference/branches)
* [Viewing Branches In Your Repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository)
* [Deleting And Restoring Branches In A Pull Request](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request)
