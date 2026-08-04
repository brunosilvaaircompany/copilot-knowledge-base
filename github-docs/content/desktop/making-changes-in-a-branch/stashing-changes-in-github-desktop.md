# Stashing changes in GitHub Desktop

## About stashed changes

To apply your changes to your repository, you must save the files and then commit the changes to a branch. If you have saved changes that you are not ready to commit yet, you can stash the changes for later. When you stash changes, the changes are temporarily removed from the files and you can choose to restore or discard the changes later. You can only stash one set of changes at a time with GitHub Desktop. If you use GitHub Desktop to stash changes, all unsaved changes will be stashed. After you stash changes on a branch, you can safely change branches or make other changes to your current branch.

If you use GitHub Desktop to switch branches while you have saved, but not committed, changes, GitHub Desktop will prompt you to stash the changes or bring them to the other branch. For more information, see [Managing Branches In GitHub Desktop](https://docs.github.com/en/desktop/making-changes-in-a-branch/managing-branches-in-github-desktop#switching-between-branches).

## Stashing changes

1. Right click the **changed files** header.

1. Click **Stash All Changes**.

   ![Screenshot of the "Changes" tab. The header shows "1 changed file" and is outlined in orange. "Stash All Changes" is highlighted in a context menu.](/assets/images/help/desktop/mac-stash-all-changes.png)


## Restoring stashed changes

1. If you are not already on the branch where the changes are stashed, in the repository bar, click **{% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} Current Branch**, then click the branch with stashed changes.

   ![Screenshot of the "Current Branch" dropdown view. Under "Recent Branches", a branch, named "my-feature", is highlighted with an orange outline.](/assets/images/help/desktop/select-branch-from-dropdown.png)

1. In the left sidebar, in the "Changes" tab, click **Stashed Changes**.

   ![Screenshot of the "Changes" tab. Above the "Summary" field, the text "Stashed Changes" is outlined in orange next to a dropdown icon.](/assets/images/help/desktop/stashed-changes-sidebar.png)

1. To the right of the sidebar, under "Stashed changes", click **Restore**.


## Discarding stashed changes

1. If you are not already on the branch where the changes are stashed, in the repository bar, click **{% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} Current Branch**, then click the branch with stashed changes.

   ![Screenshot of the "Current Branch" dropdown view. Under "Recent Branches", a branch, named "my-feature", is highlighted with an orange outline.](/assets/images/help/desktop/select-branch-from-dropdown.png)

1. In the left sidebar, in the "Changes" tab, click **Stashed Changes**.

   ![Screenshot of the "Changes" tab. Above the "Summary" field, the text "Stashed Changes" is outlined in orange next to a dropdown icon.](/assets/images/help/desktop/stashed-changes-sidebar.png)

1. To the right of the sidebar, under "Stashed changes", click **Discard**.
