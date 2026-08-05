# Exploring the dependencies of a repository

## Viewing the dependency graph

The dependency graph shows the dependencies and dependents of your repository.  For each dependency, you can see the version, license information, the manifest file which included it, and whether it has known vulnerabilities. For package ecosystems supporting transitive dependencies, the relationship status will be displayed and you can click "{% octicon "kebab-horizontal" aria-label="Show dependency options" %}", then "Show paths", to see the transitive path which brought in the dependency.

You can also search for a specific dependency using the search bar. Dependencies are sorted automatically with vulnerable packages at the top.
 For information about the detection of dependencies and which ecosystems are supported, see [Dependency Graph Supported Package Ecosystems](https://docs.github.com/en/code-security/reference/supply-chain-security/dependency-graph-supported-package-ecosystems).

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "graph" aria-hidden="true" aria-label="graph" %} Insights**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled with a graph icon and "Insights," is outlined in orange.](/assets/images/help/repository/repo-nav-insights-tab.png)

1. In the left sidebar, click **Dependency graph**.
![Screenshot of the "Dependency graph" tab. The tab is highlighted with an orange outline.](/assets/images/help/graphs/graphs-sidebar-dependency-graph.png)

1. Optionally, use the search bar to find a specific dependency or set of dependencies. You can use the keywords `ecosystem:` to show only packages of a certain type, or `relationship:` to show only direct or transitive dependencies (if the ecosystem supports transitivity). Plain words in search bar will only match package names.



1. Optionally, to view the repositories and packages that depend on your repository, under "Dependency graph", click **Dependents**.

   ![Screenshot of the "Dependency graph" page. The "Dependents" tab is highlighted with an orange outline.](/assets/images/help/graphs/dependency-graph-dependents-tab.png)

   >[!NOTE] GitHub currently only determines dependents for public repositories.




Enterprise owners can configure the dependency graph at an enterprise level. For more information, see [Enable Dependency Graph](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/enable-dependency-graph).


### Dependencies view


For each dependency, you can see its ecosystem, the manifest file in which it was found, and its license (where detected).

* Dependencies for private repositories, private packages, or unrecognized files are shown in plain text.
* If the package manager for the dependency is in a public repository, you can hover on the dependency name to display a pop-up with the associated repository information.
* You can sort and filter dependencies by typing filters as `key:value` pairs into the search bar.

    * Use `ecosystem: <ecosystem-name>` to display dependencies for the selected ecosystem.{% ifversion transitive-dependency-labeling-npm %}
    * Use `relationship:` to filter the list by relationship status. Possible values are `direct`, `transitive`, and `inconclusive`. Alternatively, you can click the relationship label adjacent to a dependency name to only show dependencies of the same relationship status. This filter is only available for ecosystems with transitive dependency support. See [Dependency Graph Supported Package Ecosystems](https://docs.github.com/en/code-security/reference/supply-chain-security/dependency-graph-supported-package-ecosystems) for more information.

{% endif %}


Any direct and indirect dependencies that are specified in the repository's manifest or lock files are listed.


Dependencies submitted to a project using the dependency submission API will show which detector was used for their submission and when they were submitted. For more information on using the dependency submission API, see [Use Dependency Submission API](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/use-dependency-submission-api).

If vulnerabilities have been detected in the repository, these are shown at the top of the view for users with access to Dependabot alerts.



> [!NOTE]
> GitHub Enterprise Server does not populate the **Dependents** view.





### Dependents view

For public repositories, the dependents view shows how the repository is used by other repositories. To show only the repositories that contain a library in a package manager, click **NUMBER Packages** immediately above the list of dependent repositories. The dependent counts are approximate and may not always match the dependents listed.



## Further reading

* [Dependency Graph Errors](https://docs.github.com/en/code-security/reference/supply-chain-security/troubleshoot-dependabot/dependency-graph-errors)
* [Dependency Graph](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph)
* [View Dependabot Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/view-dependabot-alerts)
* [Viewing Insights For Dependencies In Your Organization](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-dependencies-in-your-organization)
* [Archiving Your GitHub Personal Account And Public Repositories](https://docs.github.com/en/get-started/archiving-your-github-personal-account-and-public-repositories)
