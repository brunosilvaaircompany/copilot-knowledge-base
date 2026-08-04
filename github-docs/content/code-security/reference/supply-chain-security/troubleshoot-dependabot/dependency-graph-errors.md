# Troubleshooting the dependency graph

The results of dependency detection reported by GitHub may be different from the results returned by other tools. There are good reasons for this and it's helpful to understand how GitHub determines dependencies for your project.


## Does the dependency graph only find dependencies in manifests and lockfiles?

The dependency graph automatically includes information on dependencies that are explicitly declared in your environment. That is, dependencies that are specified in a manifest or a lockfile. The dependency graph generally also includes transitive dependencies, even when they aren't specified in a lockfile, by looking at the dependencies of the dependencies in a manifest file.

The dependency graph doesn't automatically include "loose" dependencies. "Loose" dependencies are individual files that are copied from another source and checked into the repository directly or within an archive (such as a ZIP or JAR file), rather than being referenced by in a package manager’s manifest or lockfile.

However, you can use the dependency submission API to add dependencies to a project's dependency graph, even if the dependencies are not declared in a manifest or lock file, such as dependencies resolved when a project is built. Dependencies submitted to a project using the dependency submission API will show which detector was used for their submission and when they were submitted.
 For more information on the dependency submission API, see [Use Dependency Submission API](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/use-dependency-submission-api).

**Check:** Is the missing dependency for a component that's not specified in the repository's manifest or lockfile?

## Does the dependency graph detect dependencies specified using variables?

The dependency graph analyzes manifests as they’re pushed to GitHub. The dependency graph doesn't, therefore, have access to the build environment of the project, so it can't resolve variables used within manifests. If you use variables within a manifest to specify the name, or more commonly the version of a dependency, then that dependency will not automatically be included in the dependency graph.

However, you can use the dependency submission API to add dependencies to a project's dependency graph, even if the dependencies are only resolved when a project is built. For more information on the dependency submission API, see [Use Dependency Submission API](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/use-dependency-submission-api).

**Check:** Is the missing dependency declared in the manifest by using a variable for its name or version?

## Are there limits which affect the dependency graph data?

Yes, the dependency graph has limits on the size, number, and location of manifest files that it will process.

The processing limits affect the dependency graph displayed within GitHub and also prevent Dependabot alerts being created.

Manifests over 10 MB in size are ignored and will not generate Dependabot alerts.

By default, GitHub will not process more than 150 manifests per repository. Dependabot doesn't generate Dependabot alerts for manifests beyond this limit, and Dependabot alerts may behave unpredictably if this limit is exceeded.

Manifest files stored in directories with names that are typically used for vendored dependencies will not be processed. A directory whose name matches the following regular expressions is considered a vendored dependencies directory:
  
  * <code>(3rd|[Tt]hird)[-_]?[Pp]arty/</code>
  * <code>(^|/)vendors?/</code>
  * <code>(^|/)[Ee]xtern(als?)?/</code>
  * <code>(^|/)[Vv]+endor/</code>
  

  Examples:
  * third-party/dependencies/dependency1
  * vendors/dependency1
  * /externals/vendor1/dependency1

## My dependencies don't look right, what can I do?

If the table of dependencies for your project doesn't accurately represent your repository's manifests, you can trigger a rebuild of its dependency graph.

From the repository's Dependabot tab, click {% octicon "gear" aria-label="settings" %} at the top of the alert list. Select **Refresh Dependabot alerts** from the dropdown menu. This will enqueue a background task to process the repository's manifests, detect any new or changed dependencies, and update the alerts.

>[!NOTE] You need to have permission to manage security alerts in order to refresh a repository's dependency graph. See [Managing Security And Analysis Settings For Your Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) for information on configuring this access. To further reduce the potential for abuse, the **Refresh Dependabot alerts** option can only be triggered once an hour per repository.

Clicking **Refresh Dependabot alerts** will only scan manifest files. If your dependency graph also includes build-time dependency information submitted using the dependency submission API, rerunning the Action or external process which generates and submits the dependency information will also trigger a rebuild of the repository's dependency graph. For more information about the dependency submission API, see [Use Dependency Submission API](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/use-dependency-submission-api).

If you are using automatic dependency submission, pushing a commit that updates the repository's manifest file will trigger the automatic submission action to run.

In all cases, the timestamp at the top of the list of alerts indicates the last time the dependency graph was built.

## Further reading

* [Dependency Graph](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph)
* [Managing Security And Analysis Settings For Your Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)
* [Vulnerability Detection](https://docs.github.com/en/code-security/reference/supply-chain-security/troubleshoot-dependabot/vulnerability-detection)
* [Dependabot Errors](https://docs.github.com/en/code-security/reference/supply-chain-security/troubleshoot-dependabot/dependabot-errors)
