# Pull request merges

Pull requests can be merged in different ways. The best strategy depends on how your team wants the repository history to look and how much detail you want to preserve from the pull request branch.

| Strategy | Result | Choose when |
| --- | --- | --- |
| Merge commit | Preserves every commit from the pull request branch and adds an explicit merge point. | Your team values complete history, or the individual commits are meaningful on their own. |
| Squash and merge | Combines all commits in the pull request into a single commit on the base branch. | A pull request represents one logical change, especially with many small fixup commits. |
| Rebase and merge | Adds each commit onto the base branch without a merge commit, for a linear history. | Your team wants a linear history and the commits are already organized clearly. |

## Merge your commits

When you click the default **Merge pull request** option on a pull request, all commits from the feature branch are added to the base branch in a merge commit. The pull request is merged using [the `--no-ff` option](https://git-scm.com/docs/git-merge#_fast_forward_merge).

To merge pull requests, you must have [write permissions](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization) in the repository.

![Diagram of a standard merge and commit flow, where commits from a feature branch and an additional merge commit are both added to `main`.](/assets/images/help/pull_requests/standard-merge-commit-diagram.png)


A merge commit preserves the full commit history from the pull request branch. This makes it easier to see every commit that led to the final change, including review fixes and intermediate work. It also creates an explicit merge point in the base branch history.

Choose this strategy when your team values complete history or when the individual commits in a pull request are meaningful on their own.

## Squash and merge your commits

When you select the **Squash and merge** option on a pull request, the pull request's commits are squashed into a single commit. Instead of seeing all of a contributor's individual commits from a topic branch, the commits are combined into one commit and merged into the default branch. Pull requests with squashed commits are merged using the [fast-forward option](https://git-scm.com/docs/git-merge#_fast_forward_merge).

To squash and merge pull requests, you must have [write permissions](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization) in the repository, and the repository must [allow squash merging](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests).

![Diagram of commit squashing, where multiple commits from a feature branch are combined into only one commit that is added to `main`.](/assets/images/help/pull_requests/commit-squashing-diagram.png)

You can use squash and merge to create a more streamlined Git history in your repository. Work-in-progress commits are helpful when working on a feature branch, but they aren’t necessarily important to retain in the Git history. If you squash these commits into one commit when merging to the default branch, the changes are consolidated, leading to a clear Git history.


Squashing turns all commits in the pull request into one commit on the base branch. This keeps the default branch history concise and can make it easier to scan later. The tradeoff is that intermediate commits from the pull request are not preserved as separate commits on the base branch.

Choose this strategy when a pull request represents one logical change, especially if the branch includes many small fixup commits.

### Merge message for a squash merge

When you squash and merge, GitHub generates a default commit message that you can edit. The default message can include the pull request title, pull request description, or commit information, depending on repository settings and the number of commits in the pull request.

Maintainers and administrators can configure the default message for squashed commits. See [Configuring Commit Squashing For Pull Requests](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests).

### Squashing and merging a long-running branch

Squash merging works best for short-lived branches. If you keep working on the same head branch after a squash merge, later pull requests can include commits that were already squashed into the base branch. This can make merge conflicts more likely and can force you to resolve the same conflicts more than once.

For long-running branches, consider using a merge commit or rebasing the branch before opening the next pull request.

## Rebase and merge your commits

When you select the **Rebase and merge** option on a pull request, all commits from the topic branch (or head branch) are added onto the base branch individually without a merge commit. In that way, the rebase and merge behavior resembles a [fast-forward merge](https://git-scm.com/docs/git-merge#_fast_forward_merge) by maintaining a linear project history. However, rebasing achieves this by re-writing the commit history on the base branch with new commits.

The rebase and merge behavior on GitHub deviates slightly from `git rebase` outside of GitHub. Rebase and merge on GitHub:

* Always updates the committer information and creates new commit SHAs, whereas `git rebase` does not change the committer information when the rebase happens on top of an ancestor commit.
* Drops commits that were empty to begin with, such as those created with `git commit --allow-empty`, whereas `git rebase` keeps originally-empty commits by default.

For more information about `git rebase`, see [git-rebase](https://git-scm.com/docs/git-rebase) in the Git documentation.

To rebase and merge pull requests, you must have [write permissions](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization) in the repository, and the repository must [allow rebase merging](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-rebasing-for-pull-requests).

For a visual representation of `git rebase`, see [The "Git Branching - Rebasing" chapter from the _Pro Git_ book](https://git-scm.com/book/en/v2/Git-Branching-Rebasing).


Rebasing adds each commit from the pull request branch onto the base branch without creating a merge commit. This produces a linear history while preserving the individual commits from the pull request.

Choose this strategy when your team wants a linear history and the pull request commits are already organized clearly. If GitHub cannot safely rebase the pull request automatically, you can rebase locally, resolve conflicts, and push the updated branch. See [Resolving A Merge Conflict Using The Command Line](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/resolving-a-merge-conflict-using-the-command-line) and [Merging A Pull Request](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/merging-a-pull-request).

## Indirect merges

A pull request can be marked as merged if its head branch commits become reachable from the base branch outside that pull request. This can happen when the same commits are merged through another pull request or pushed directly to the default branch.

Indirect merges are uncommon, but they can affect automation and branch protection expectations. Pull requests merged indirectly are marked as `merged` even if branch protection rules on that pull request were not satisfied.

## Further reading

* [Pull Requests](https://docs.github.com/en/pull-requests/reference/pull-requests)
* [Merge And Close Pull Requests](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests)
