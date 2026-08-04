# Squashing commits in GitHub Desktop

## About squashing a commit

Squashing allows you to combine multiple commits in your branch's history into a single commit. This can help keep your repository's history more readable and understandable.

## Squashing a commit

1. In GitHub Desktop, click **{% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} Current Branch**.

   ![Screenshot of the repository bar. A button, labeled "Current Branch" with a downward arrow indicating a dropdown menu, is outlined in orange.](/assets/images/help/desktop/current-branch-menu.png)

1. In the list of branches, select the branch that has the commits that you want to squash.
1. In the left sidebar, click **History**.

   ![Screenshot of the "History" tab in the sidebar. Above a list of commits, the tab button, labeled "History", is highlighted with an orange outline.](/assets/images/help/desktop/history-tab-in-commit-sidebar.png)

1. Select the commits to squash and drop them on the commit you want to combine them with.

   {% mac %}

   You can select one commit or select multiple commits using <kbd>Command</kbd> or <kbd>Shift</kbd>.

   {% endmac %}

   {% windows %}

   You can select one commit or select multiple commits using <kbd>Ctrl</kbd> or <kbd>Shift</kbd>.

   {% endwindows %}

   ![Screenshot of a list of commits in the "History" tab. The cursor hovers over a commit, highlighted in blue. A hover-over box shows "Squash 2 commits".](/assets/images/help/desktop/squash-drag-and-drop.png)

1. Modify the commit message of your new commit. The commit messages of the selected commits you want to squash are pre-filled into the **Summary** and **Description** fields.
1. Click **Squash Commits**.

## Error messages when squashing commits

When you squash commits, you may see one of the following notifications or error messages.

* A notification states that the requested change to the branch will require a force push to update the remote branch. Force pushing alters the commit history of the branch and will affect other collaborators who are working in that branch. Select **Begin Squash** to start the squash, and then click **Force push origin** to push your changes.
* An error states that the squash failed because there is a merge commit among the squashed commits.
* A notification is shown indicating that there are uncommitted changes present on your current branch. Select **Stash Changes and Continue** to store the changes and proceed, or select **Close** to dismiss the message and commit the changes. When there are no longer any uncommitted changes you can squash your commits.

## Further reading

* [Options For Managing Commits In GitHub Desktop](https://docs.github.com/en/desktop/managing-commits/options-for-managing-commits-in-github-desktop)
