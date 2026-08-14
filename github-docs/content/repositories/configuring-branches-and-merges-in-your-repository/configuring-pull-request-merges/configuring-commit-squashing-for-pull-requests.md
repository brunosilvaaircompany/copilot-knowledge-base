# Configuring commit squashing for pull requests

You can configure pull request merge options to meet your workflow needs and preferences for managing Git history. For more information, see [Configuring Pull Request Merges](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges).


For information about the default commit messages for squash merges, see [Pull Request Merges](https://docs.github.com/en/pull-requests/reference/pull-request-merges#merge-message-for-a-squash-merge).


1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. On the "General" settings page (which is selected by default), scroll down to the section marked "Pull Requests".
1. Under "Pull Requests", select **Allow squash merging**. This allows contributors to merge a pull request by squashing all commits into a single commit. The default commit message presented to contributors when merging is the commit title and message if the pull request contains only 1 commit, or the pull request title and list of commits if the pull request contains 2 or more commits.
1. Optionally, under **Allow squash merging**, select the dropdown menu, then click the format of the default squash commit message presented to contributors when merging.

   The default message uses the commit title and message if the pull request contains only 1 commit, or the pull request title and list of commits if the pull request contains 2 or more commits. You can also choose to use just the pull request title, the pull request title and commit details, or the pull request title and description.

If you select more than one merge method, collaborators can choose which type of merge commit to use when they merge a pull request. If there is a protected branch rule in your repository that requires a linear commit history, you must allow squash merging, rebase merging, or both. For more information, see [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-pull-request-reviews-before-merging).


## Further reading

* [Pull Request Merges](https://docs.github.com/en/pull-requests/reference/pull-request-merges)
* [Merging A Pull Request](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/merging-a-pull-request)
