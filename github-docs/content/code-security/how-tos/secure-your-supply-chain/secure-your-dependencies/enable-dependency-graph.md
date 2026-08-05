# Enabling the dependency graph

The dependency graph is a summary of the manifest and lock files stored in a repository and any dependencies that are submitted for the repository using the dependency submission API. For more information, see [Dependency Graph](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph).

When the dependency graph is first enabled, any manifest and lock files for supported ecosystems are parsed immediately. The graph is usually populated within minutes but this may take longer for repositories with many dependencies. Once enabled, the graph is automatically updated with every push to the repository and every push to other repositories in the graph.



## Enabling the dependency graph for a GitHub Enterprise Server instance

If the dependency graph is not available on your GitHub Enterprise Server instance, ask an enterprise owner to enable it. For more information, see [Enable Dependency Graph](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/enable-dependency-graph).




## Next steps

You can use the dependency submission API to submit dependencies from the package manager or ecosystem of your choice, even if the ecosystem is not supported by dependency graph for manifest or lock file analysis.
Dependencies submitted to a project using the dependency submission API will show which detector was used for their submission and when they were submitted. For more information on the dependency submission API, see [Use Dependency Submission API](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/use-dependency-submission-api).


For more information on viewing the dependency graph, see [Explore Dependencies](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/explore-dependencies).

## Further reading


* [Submit Dependencies Automatically](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/submit-dependencies-automatically)

* [Viewing Insights For Dependencies In Your Organization](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-dependencies-in-your-organization)
* [View Dependabot Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/view-dependabot-alerts)
* [Vulnerability Detection](https://docs.github.com/en/code-security/reference/supply-chain-security/troubleshoot-dependabot/vulnerability-detection)
