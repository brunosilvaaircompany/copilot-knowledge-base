# Managing the automatic deletion of branches

Anyone with admin permissions to a repository can enable or disable the automatic deletion of branches. Branch protection rules and repository rules can also prevent branches being automatically deleted. For more information, see [About Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets) and [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

For a pull request opened from a fork, GitHub uses the **Automatically delete head branches** setting on the head repository (the fork), not the base repository where the pull request is merged. Automatic deletion requires both of the following:

* The setting is enabled on the fork.
* The user merging the pull request has write access to the fork.

If either requirement isn't met, the head branch isn't deleted automatically. A user with write access to the fork can manually delete the branch from the merged pull request. For more information, see [Deleting And Restoring Branches In A Pull Request](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request).

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. On the "General" settings page, you can find a section called "Pull Requests". Under "Pull Requests", select or deselect **Automatically delete head branches**.

## Further reading

* [Merging A Pull Request](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/merging-a-pull-request)
* [Managing Branches Within Your Repository](https://docs.github.com/en/pull-requests/how-tos/commit-changes/managing-branches-within-your-repository)
* [Deleting And Restoring Branches In A Pull Request](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request)
