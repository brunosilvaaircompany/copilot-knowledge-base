# Resolving a merge conflict on GitHub

You can resolve simple competing line change conflicts on GitHub. For other conflicts, use the command line. See [Resolving A Merge Conflict Using The Command Line](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/resolving-a-merge-conflict-using-the-command-line).


If Copilot cloud agent is enabled for the repository, you can click **Fix with Copilot** in the merge box to have Copilot resolve conflicts automatically. See [Use Cloud Agent On GitHub](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/use-cloud-agent-on-github#resolving-merge-conflicts).



If a site administrator disables the merge conflict editor for pull requests between repositories, resolve merge conflicts on the command line.


> [!WARNING]
> Resolving conflicts on GitHub merges the entire [base branch](/get-started/learning-about-github/github-glossary#base-branch) into the [head branch](/get-started/learning-about-github/github-glossary#head-branch). If the head branch is the default or protected branch, you may be prompted to create a new head branch. See [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

1. Under your repository name, click **{% octicon "git-pull-request" aria-hidden="true" aria-label="git-pull-request" %} Pull requests**.

1. In the "Pull Requests" list, click the pull request with a merge conflict that you want to resolve.
1. Near the bottom of your pull request, click **Resolve conflicts**.

   ![Screenshot of a warning that a pull request has a merge conflict. The "Resolve merge conflicts" button is outlined in dark orange.](/assets/images/help/pull_requests/resolve-merge-conflicts-button.png)

   > [!NOTE]
   > If **Resolve conflicts** is deactivated, resolve the conflict using another Git client or the command line. See [Resolving A Merge Conflict Using The Command Line](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/resolving-a-merge-conflict-using-the-command-line).

1. Decide if you want to keep only your branch's changes, keep only the other branch's changes, or make a brand new change, which may incorporate changes from both branches. Delete the conflict markers `<<<<<<<`, `=======`, `>>>>>>>` and make the changes you want in the final merge.

1. If your file has more than one merge conflict, scroll down to the next set of conflict markers and repeat steps four and five to resolve the conflict.
1. After you've resolved all the conflicts in the file, click **Mark as resolved**.

   ![Screenshot of the editor to resolve a merge conflict in a pull request. The "Mark as resolved" button is outlined in dark orange.](/assets/images/help/pull_requests/mark-as-resolved-button.png)

1. If more than one file has a conflict, select the next file you want to edit on the left side of the page under "conflicting files" and repeat steps four through seven until you've resolved all merge conflicts in your pull request.
1. After you've resolved all your merge conflicts, click **Commit merge**. This merges the entire base branch into your head branch.

   ![Screenshot of the editor to resolve a merge conflict in a pull request. The "Commit merge" button is outlined in dark orange.](/assets/images/help/pull_requests/merge-conflict-commit-changes.png)

1. If prompted, review the branch that you are committing to. You can update the head branch or, if available, create a new branch for the pull request. If the head branch is protected, you must create a new branch.

   Click **Create branch and update my pull request** or **I understand, continue updating BRANCH**.
1. To merge your pull request, click **Merge pull request**. See [Merging A Pull Request](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/merging-a-pull-request).

## Further reading

* [Pull Request Merges](https://docs.github.com/en/pull-requests/reference/pull-request-merges)
