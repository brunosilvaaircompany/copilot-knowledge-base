# Listing dependencies configured for version updates

> [!NOTE]
> Your site administrator must set up Dependabot updates for your GitHub Enterprise Server instance before you can use this feature. For more information, see [Enabling Dependabot For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise).
>
> You may not be able to enable or disable Dependabot updates if an enterprise owner has set a policy at the enterprise level. For more information, see [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).





## Viewing dependencies monitored by Dependabot

After you've enabled version updates, you can confirm that your configuration is correct using the **Dependabot** tab in the dependency graph for the repository. For more information, see [Configure Version Updates](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-version-updates).

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "graph" aria-hidden="true" aria-label="graph" %} Insights**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled with a graph icon and "Insights," is outlined in orange.](/assets/images/help/repository/repo-nav-insights-tab.png)

1. In the left sidebar, click **Dependency graph**.
![Screenshot of the "Dependency graph" tab. The tab is highlighted with an orange outline.](/assets/images/help/graphs/graphs-sidebar-dependency-graph.png)

1. Under "Dependency graph", click **Dependabot**.

1. Optionally, to view the files monitored for a package manager, to the right of the package manager, click {% octicon "kebab-horizontal" aria-label="Show monitored" %}.

   ![Screenshot of the Dependabot tab under "Insights". A dropdown menu, labeled with a kebab icon, is highlighted with an orange outline.](/assets/images/help/dependabot/monitored-dependency-files.png)

If any dependencies are missing, check the log files for errors. If any package managers are missing, review the configuration file.

For information about Dependabot job logs, see [View Dependabot Logs](https://docs.github.com/en/code-security/how-tos/view-and-interpret-data/view-dependabot-logs).
