# Dependency graph



## About the dependency graph

The dependency graph is a summary of the manifest and lock files stored in a repository and any dependencies that are submitted for the repository using the dependency submission API. For each repository, it shows:

* Dependencies, the ecosystems and packages it depends on
* Dependents, the repositories and packages that depend on it

For each dependency, you can see the version, license information, the manifest file which included it, and whether it has known vulnerabilities. For package ecosystems supporting transitive dependencies, the relationship status will be displayed and you can click "{% octicon "kebab-horizontal" aria-label="Show dependency options" %}", then "Show paths", to see the transitive path which brought in the dependency.

You can also search for a specific dependency using the search bar. Dependencies are sorted automatically with vulnerable packages at the top.



GitHub does not retrieve license information for dependencies, and does not calculate information about dependents, the repositories and packages that depend on a repository.


For information on the supported ecosystems and manifest files, see [Dependency Graph Supported Package Ecosystems](https://docs.github.com/en/code-security/reference/supply-chain-security/dependency-graph-supported-package-ecosystems#supported-package-ecosystems).

When you create a pull request containing changes to dependencies that targets the default branch, GitHub uses the dependency graph to add dependency reviews to the pull request. These indicate whether the dependencies contain vulnerabilities and, if so, the version of the dependency in which the vulnerability was fixed. For more information, see [Dependency Review](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review).

## How the dependency graph is built

The dependency graph automatically parses dependencies by analyzing manifests and lock files in your repository. You can also submit data yourself. For more information, see [Dependency Graph Data](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph-data).

## Dependency graph availability


Repository administrators can enable or disable the dependency graph for repositories.
 For more information, see [Managing Security And Analysis Settings For Your Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository).

Repository administrators can enable or disable the dependency graph for repositories.
 See [Enable Dependency Graph](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/enable-dependency-graph).




Enterprise owners can configure the dependency graph and Dependabot alerts for an enterprise. For more information, see [Enable Dependency Graph](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/enable-dependency-graph) and [Enabling Dependabot For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise).



For more information about configuration of the dependency graph, see [Enable Dependency Graph](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/enable-dependency-graph).



## Dependents and "used by" data

For public repositories, the dependency graph lists dependents. These are other public repositories that depend on the repository or on packages that it publishes. This information is not reported for private repositories.

Some repositories have a "Used by" section in the sidebar of the **Code** tab. This section shows the number of public references to a package that were found, and displays the avatars of some of the owners of the dependent projects.
 Clicking any item in this section takes you to the **Dependents** tab of the dependency graph.

Your repository will have a "Used by" section if:
* The dependency graph is enabled for the repository.
* Your repository contains a package that is published on a supported package ecosystem. See [Dependency Graph Supported Package Ecosystems](https://docs.github.com/en/code-security/reference/supply-chain-security/dependency-graph-supported-package-ecosystems#supported-package-ecosystems).
* Within the ecosystem, your package has a link to a _public_ repository where the source is stored.
* More than 100 repositories depend on your package.

![Screenshot of the "Used by" section for a repository showing the summary of "13.4m" with details of 8 avatars and "+13,435,819."](/assets/images/help/repository/used-by-section.png)

The "Used by" section represents a single package from the repository. If you have admin permissions to a repository that contains multiple packages, you can choose which package the "Used by" section represents. See [Change Used By Data](https://docs.github.com/en/code-security/how-tos/view-and-interpret-data/change-used-by-data).



## What you can do with the dependency graph

You can use the dependency graph to:

* Explore the repositories your code depends on, and those that depend on it. For more information, see [Explore Dependencies](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/explore-dependencies). 
* View a summary of the dependencies used in your organization's repositories in a single dashboard. For more information, see [Viewing Insights For Dependencies In Your Organization](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-dependencies-in-your-organization#viewing-organization-dependency-insights).
* View and update vulnerable dependencies for your repository. For more information, see [Dependabot Alerts](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts).
* See information about vulnerable dependencies in pull requests. For more information, see [Reviewing Dependency Changes In A Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request).
* Export a software bill of materials (SBOM) for audit or compliance purposes. This is a formal, machine-readable inventory of a project's dependencies. See [Export Dependencies As Sbom](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/export-dependencies-as-sbom).

## Further reading

* [Dependency graph](https://en.wikipedia.org/wiki/Dependency_graph) on Wikipedia
* [Explore Dependencies](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/explore-dependencies)
* [View Dependabot Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/view-dependabot-alerts)
* [Vulnerability Detection](https://docs.github.com/en/code-security/reference/supply-chain-security/troubleshoot-dependabot/vulnerability-detection)
