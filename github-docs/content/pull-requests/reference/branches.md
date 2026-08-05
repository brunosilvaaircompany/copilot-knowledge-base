# Branches

## About branches

Branches let you develop features, fix bugs, or safely experiment with new ideas in a contained area of your repository.

You always create a branch from an existing branch. Typically, you might create a new branch from the default branch of your repository. You can then work on this new branch in isolation from changes that other people are making to the repository.

A branch you create to build a feature is commonly called a feature branch or topic branch. See [Managing Branches Within Your Repository](https://docs.github.com/en/pull-requests/how-tos/commit-changes/managing-branches-within-your-repository).

You can also use a branch to publish a GitHub Pages site. See [What Is GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

You must have write access to a repository to create a branch, open a pull request, or delete and restore branches in a pull request. See [Access Permissions On GitHub](https://docs.github.com/en/get-started/learning-about-github/access-permissions-on-github).

## About the default branch

When you create a repository with content on GitHub, GitHub creates the repository with a single branch. This first branch in the repository is the default branch.
 The default branch is the branch that GitHub displays when anyone visits your repository. The default branch is also the initial branch that Git checks out locally when someone clones the repository. Unless you specify a different branch, the default branch in a repository is the base branch for new pull requests and code commits.


By default, GitHub names the default branch `main` in any new repository.

You can change the default branch for an existing repository. For more information, see [Changing The Default Branch](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch).


You can set the name of the default branch for new repositories. For more information, see [Managing The Default Branch Name For Your Repositories](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-default-branch-name-for-your-repositories), [Managing The Default Branch Name For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization), and [Enforcing Repository Management Policies In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-the-default-branch-name).


## Working with protected branches

Protected branches help maintainers enforce rules on important branches. A protected branch can block force pushes or deletion, require status checks, require reviews, require code owner approval, or require signed commits before changes can merge.

These protections help teams keep important branches stable and make expectations clear before a pull request is merged. To see whether your pull request can be merged, check the merge box at the bottom of the pull request's **Conversation** tab. See [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

> [!NOTE]
> If you're a repository administrator, you can merge pull requests on branches with branch protections enabled even if the pull request does not meet the requirements, unless branch protections have been set to "Include administrators."

## Comparing branches in pull requests

A pull request compares the proposed changes on the head branch with the base branch. When you create your pull request, you can change the base branch that you're comparing your changes against. The **Files changed** tab shows what would change if the pull request merged.

Diff views help reviewers understand the changes without reading every commit. You can view a unified diff, split diff, rich diff, or source diff; ignore whitespace changes; or filter files to focus on the most relevant changes. 

![Screenshot of the "Files changed" tab for a pull request. The "Diff view" menu is outlined in dark orange.](/assets/images/help/pull_requests/diff-settings-menu.png)

Diffs may not display if a pull request exceeds repository diff limits or if a file is hidden by a rule in the repository's _.gitattributes_ file. See [Repository Limits](https://docs.github.com/en/repositories/creating-and-managing-repositories/repository-limits#diff-limits) and [Customizing How Changed Files Appear On GitHub](https://docs.github.com/en/repositories/working-with-files/managing-files/customizing-how-changed-files-appear-on-github).

### Three-dot and two-dot Git diff comparisons

The `git diff` command supports two comparison methods. Pull requests on GitHub show a three-dot diff.

| Method | Command | What it compares |
| --- | --- | --- |
| Three-dot | `git diff A...B` | The most recent common commit of both branches (merge base) and the most recent version of the topic branch. |
| Two-dot | `git diff A..B` | The most recent state of the base branch (for example, `main`) and the most recent version of the topic branch. |

A two-dot diff compares two Git committish references, such as SHAs or OIDs (Object IDs), directly with each other. On GitHub, the Git committish references in a two-dot diff comparison must be pushed to the same repository or its forks.

See [Git diff options](https://git-scm.com/docs/git-diff#git-diff-emgitdiffemltoptionsgtltcommitgtltcommitgt--ltpathgt82308203) from the _Pro Git_ book site.

### About three-dot comparison on GitHub

Because the three-dot comparison uses the merge base, it focuses on "what a pull request introduces."

When you use a two-dot comparison, the diff changes when the base branch is updated, even if you haven't made any changes to the topic branch. A two-dot comparison also focuses on the base branch, which can make the changes introduced by the topic branch harder to understand.

In contrast, a three-dot comparison keeps showing the changes introduced by the topic branch since the branches diverged.

### Merging often

To avoid confusion, merge the base branch (for example, `main`) into your topic branch frequently. When you merge the base branch, the diffs shown by two-dot and three-dot comparisons are the same. We recommend merging a pull request as soon as possible. This encourages contributors to make pull requests smaller, which we recommend in general.

## Further reading

* [Pull Requests](https://docs.github.com/en/pull-requests/reference/pull-requests)
* [GitHub Glossary](https://docs.github.com/en/get-started/learning-about-github/github-glossary#branch) in the GitHub glossary
* [Branches in a Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) in the Git documentation
* [Forks](https://docs.github.com/en/pull-requests/reference/forks)
