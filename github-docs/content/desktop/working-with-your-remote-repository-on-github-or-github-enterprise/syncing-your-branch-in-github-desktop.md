# Syncing your branch in GitHub Desktop

## About branch synchronization

You can sync your local branch with the remote repository by pulling any commits that have been added to the branch on GitHub since the last time you synced. If you make commits from another device or if multiple people contribute to a project, you will need to sync your local branch to keep the branch updated.

When you pull to your local branch, you only update your local copy of the repository. To update your branch on GitHub, you must push your changes. For more information, see [Pushing Changes To GitHub From GitHub Desktop](https://docs.github.com/en/desktop/making-changes-in-a-branch/pushing-changes-to-github-from-github-desktop).

To add changes from one branch to another branch, you can merge the branches. To apply changes to your branch from another branch in the same repository, you can merge the other branch into your branch on GitHub Desktop. To request that changes from your branch are merged into another branch, in the same repository or in another repository in the network, you can create a pull request on GitHub Desktop. For more information, see [Merging another branch into your project branch](#merging-another-branch-into-your-project-branch) and [About Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

Some workflows require or benefit from rebasing instead of merging. By rebasing you can reorder, edit, or squash commits together. For more information, see [About Git Rebase](https://docs.github.com/en/get-started/using-git/about-git-rebase) and [Rebasing your project branch onto another branch](#rebasing-your-project-branch-onto-another-branch).

## Pulling to your local branch from the remote

1. In GitHub Desktop, use the **{% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} Current Branch** drop-down, and select the local branch you want to update.
1. To check for commits on the remote branch, click **Fetch origin**

   ![Screenshot of the repository bar. The "Fetch origin" button, displayed with an icon of two arrows forming a circle, is outlined in orange.](/assets/images/help/desktop/fetch-button.png)

1. To pull any commits from the remote branch, click **Pull origin** or **Pull origin with rebase**.

   ![Screenshot of the repository bar. The "Pull origin" button, displayed with an icon of a downward-facing arrow, is outlined in orange.](/assets/images/help/desktop/pull-button.png)

1. Resolve any merge conflicts in your preferred way, using a text editor, the command line, or another tool. For more information, see [Addressing Merge Conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts).


## Merging another branch into your project branch

1. In GitHub Desktop, click **{% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} Current Branch**.

   ![Screenshot of the repository bar. A button, labeled "Current Branch" with a downward arrow indicating a dropdown menu, is outlined in orange.](/assets/images/help/desktop/current-branch-menu.png)

1. Click **Choose a branch to merge into BRANCH**.

   ![Screenshot of the "Current Branch" dropdown view. Below a list of branches, a "Choose a branch to merge into my-feature" button is outlined in orange.](/assets/images/help/desktop/merge-branch-button-list.png)

1. Click the branch you want to merge into the current branch, then click **Merge BRANCH into BRANCH**.


   > [!NOTE]
   > If there are merge conflicts, GitHub Desktop will warn you above the **Merge BRANCH into BRANCH** button. You will not be able to merge the branches until you have resolved all conflicts.

1. To push your local changes to the remote repository, in the repository bar, click **Push origin**.

   ![Screenshot of the repository bar. A button, labeled "Push origin", is highlighted with an orange outline.](/assets/images/help/desktop/push-to-origin.png)


## Rebasing your project branch onto another branch

1. In the menu bar, select **Branch**, then click **Rebase Current Branch**.

   {% mac %}

   ![Screenshot of the menu bar on a Mac. On the expanded "Branch" dropdown menu, the cursor overs over an option labeled "Rebase Current Branch".](/assets/images/help/desktop/mac-rebase-current-branch.png)

   {% endmac %}

   {% windows %}

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. In the "Branch" dropdown menu, the "Rebase Current Branch" option is outlined in orange.](/assets/images/help/desktop/windows-rebase-current-branch.png)

   {% endwindows %}

1. Click the branch you want to rebase into the current branch, then click **Rebase**.
1. If you're sure you want to rebase, click **Begin Rebase**.
1. Resolve any merge conflicts in your preferred way, using a text editor, the command line, or another tool. For more information, see [Addressing Merge Conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts).

1. To push your local changes, click **Force push origin**.

   ![Screenshot of the repository bar. A button, labeled "Force push origin" and displayed with an icon of a double upward arrow, is outlined in orange.](/assets/images/help/desktop/force-push-origin.png)

## Squashing and merging another branch into your project branch

1. In the menu bar, select **Branch**, then click **Squash and Merge into Current Branch**.

   {% mac %}

   ![Screenshot of the menu bar on a Mac. On the expanded "Branch" dropdown menu, the cursor hovers over the "Squash and Merge into Current Branch" option.](/assets/images/help/desktop/squash-and-merge-menu.png)

   {% endmac %}

   {% windows %}

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. In the "Branch" dropdown menu, the "Squash and merge into curre..." option is outlined.](/assets/images/help/desktop/windows-squash-and-merge-menu.png)

   {% endwindows %}

1. In the "Squash and merge" window, click the branch you want to merge into the current branch, then click **Squash and merge**.

   > [!NOTE]
   > If there are merge conflicts, GitHub Desktop will warn you above the **Squash and merge** button. You will not be able to squash and merge the branch until you have resolved all conflicts.

1. To push your local changes to the remote repository, in the repository bar, click **Push origin**.

   ![Screenshot of the repository bar. A button, labeled "Push origin", is highlighted with an orange outline.](/assets/images/help/desktop/push-to-origin.png)


## Further Reading

* [GitHub Glossary](https://docs.github.com/en/get-started/learning-about-github/github-glossary#pull) in the GitHub glossary
* [GitHub Glossary](https://docs.github.com/en/get-started/learning-about-github/github-glossary#merge) in the GitHub glossary
* [GitHub Glossary](https://docs.github.com/en/get-started/learning-about-github/github-glossary#rebase) in the GitHub glossary
