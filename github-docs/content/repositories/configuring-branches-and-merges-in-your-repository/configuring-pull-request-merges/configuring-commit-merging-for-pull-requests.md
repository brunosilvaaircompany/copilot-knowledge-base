# Configuring commit merging for pull requests

You can configure pull request merge options to meet your workflow needs and preferences for managing Git history. For more information, see [Configuring Pull Request Merges](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges).


1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. Under "Pull Requests", select **Allow merge commits**. This allows contributors to merge a pull request with a full history of commits.
1. Optionally, under **Allow merge commits**, select the dropdown menu, then click the format of the commit message presented to contributors when merging.

   The default message includes the pull request number and title. For example, `Merge pull request #123 from patch-1`. You can also choose to use just the pull request title, or the pull request title and description.

If you select more than one merge method, collaborators can choose which type of merge commit to use when they merge a pull request. If there is a protected branch rule in your repository that requires a linear commit history, you must allow squash merging, rebase merging, or both. For more information, see [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-pull-request-reviews-before-merging).


## Further reading

* [About Pull Request Merges](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)
* [Merging A Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)
