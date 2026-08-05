# Viewing Dependabot job logs

When Dependabot updates fail or behave unexpectedly, job logs show you exactly what happened. Access job logs from the dependency graph to debug issues quickly. For background on what job logs contain and the types of jobs GitHub records, see [Dependabot Job Logs](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-job-logs).

## Viewing Dependabot job logs

The Dependabot job logs list is accessible from the dependency graph tab in your repository.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "graph" aria-hidden="true" aria-label="graph" %} Insights**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled with a graph icon and "Insights," is outlined in orange.](/assets/images/help/repository/repo-nav-insights-tab.png)

1. In the left sidebar, click **Dependency graph**.
![Screenshot of the "Dependency graph" tab. The tab is highlighted with an orange outline.](/assets/images/help/graphs/graphs-sidebar-dependency-graph.png)

1. Under "Dependency graph", click **Dependabot**.

1. To the right of the name of manifest file that you're interested in, click **Recent update jobs**.
1. Optionally, to see the full logs files for a particular job, click **view logs**.

   ![Screenshot of a Dependabot job log entry for the Gemfile package manager. A button, called "View logs", is highlighted in a dark orange outline.](/assets/images/help/dependabot/dependabot-job-logs.png)
