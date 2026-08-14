# Viewing a project's contributors

## About contributors



> [!NOTE]
> Certain contributor, commit, and code frequency insights are only available for repositories that have fewer than 10,000 commits.




You can view the top 100 contributors to a repository, including commit co-authors, in the contributors graph. Merge commits and empty commits aren't counted as contributions for this graph.


To access the list of community contributors, visit `https://github.com/REPO-OWNER/REPO-NAME/graphs/contributors`.


## Accessing the contributors graph

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "graph" aria-hidden="true" aria-label="graph" %} Insights**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled with a graph icon and "Insights," is outlined in orange.](/assets/images/help/repository/repo-nav-insights-tab.png)

1. In the left sidebar, click **Contributors**.
1. Optionally, to view contributors during a specific time period, to the right of "Contributors," click **Period: All**. Then select a time period.
1. Optionally, to view the graph as a table, in the top-right corner of the graph, click {% octicon "kebab-horizontal" aria-label="Chart options" %}. Then click **View as table**.
1. Optionally, to download a CSV or PNG, in the top-right corner of the graph, click {% octicon "kebab-horizontal" aria-label="Chart options" %}. Then click **Download CSV** or **Download PNG**.


## Troubleshooting contributors

If you don't appear in a repository's contributors graph, it may be because:
* You aren't one of the top 100 contributors.
* Your commits haven't been merged into the default branch.
* The email address you used to author the commits isn't connected to your GitHub account.

> [!TIP]
> To list all commit contributors in a repository, see [Repos](https://docs.github.com/en/rest/repos/repos#list-repository-contributors).

If all your commits in the repository are on non-default branches, you won't be in the contributors graph. For example, commits on the `gh-pages` branch aren't included in the graph unless `gh-pages` is the repository's default branch. To have your commits merged into the default branch, you can create a pull request. For more information, see [Pull Requests](https://docs.github.com/en/pull-requests/reference/pull-requests).

If the email address you used to author the commits is not connected to your GitHub account, your commits won't be linked to your account, and you won't appear in the contributors graph. For more information, see [Setting Your Commit Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address) and [Adding An Email Address To Your GitHub Account](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/adding-an-email-address-to-your-github-account).

### Contributor data is stale after history changes

After force-pushing, rewriting history, or deleting commits, repository contributor displays and statistics can take about 24 hours to refresh.

If you're a repository owner and contributor data is still incorrect after waiting about 24 hours, contact GitHub Support. For more information about creating a support ticket, see [Creating A Support Ticket](https://docs.github.com/en/support/contacting-github-support/creating-a-support-ticket).
