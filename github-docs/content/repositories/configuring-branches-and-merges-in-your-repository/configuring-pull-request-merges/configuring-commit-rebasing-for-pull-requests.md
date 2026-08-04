# Configuring commit rebasing for pull requests

You can configure pull request merge options to meet your workflow needs and preferences for managing Git history. For more information, see [Configuring Pull Request Merges](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges).


1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. Under "Pull Requests", select **Allow rebase merging**. This allows contributors to merge a pull request by rebasing their individual commits onto the base branch.

If you also select another merge method, collaborators will be able to choose the type of merge commit when merging a pull request. If there is a protected branch rule in your repository that requires a linear commit history, you must allow squash merging, rebase merging, or both. For more information, see [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-pull-request-reviews-before-merging).
