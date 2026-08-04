# Code scanning alerts

> [!NOTE]
> Your site administrator must enable code scanning before you can use this feature. For more information, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance).
>
> You may not be able to enable or disable code scanning if an enterprise owner has set a GitHub Code Security policy at the enterprise level. For more information, see [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).




## About alerts from code scanning

You can configure code scanning to check the code in a repository using the default CodeQL analysis, a third-party analysis, or multiple types of analysis. When the analysis is complete, the resulting alerts are displayed alongside each other in the security view of the repository. Results from third-party tools or from custom queries may not include all of the properties that you see for alerts detected by GitHub's default CodeQL analysis. For more information, see [Configure Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning) and [Configuring Advanced Setup For Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configuring-advanced-setup-for-code-scanning).

By default, code scanning analyzes your code periodically on the default branch and during pull requests. For information about managing alerts on a pull request, see [Triage Alerts In Pull Requests](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/triage-alerts-in-pull-requests).



You can use GitHub Copilot Autofix to generate fixes automatically for code scanning alerts, including CodeQL alerts. For more information, see [Resolve Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts#generating-a-suggested-fix).





With a GitHub Copilot Enterprise license, you can also ask GitHub Copilot Chat for help to better understand code scanning alerts in repositories in your organization. For more information, see [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github#asking-questions-about-alerts-from-github-advanced-security-features).



For code scanning alerts from CodeQL analysis, you can use security overview to see how CodeQL is performing in pull requests in repositories across your organization, and to identify repositories where you may need to take action. For more information, see [Pull Request Alert Metrics](https://docs.github.com/en/code-security/concepts/code-scanning/pull-request-alert-metrics).

You can audit the actions taken in response to code scanning alerts using GitHub tools. For more information, see [Audit Security Alerts](https://docs.github.com/en/code-security/concepts/security-at-scale/audit-security-alerts).


## About alert details

Each alert highlights a problem with the code and the name of the tool that identified it. You can see the line of code that triggered the alert, as well as properties of the alert, such as the alert severity, security severity, and the nature of the problem. Alerts also tell you when the issue was first introduced. For alerts identified by CodeQL analysis, you will also see information on how to fix the problem.

The status and details on the alert page only reflect the state of the alert on the default branch of the repository, even if the alert exists in other branches. You can see the status of the alert on non-default branches in the **Affected branches** section on the right-hand side of the alert page. If an alert doesn't exist in the default branch, the status of the alert will display as "in pull request" or "in branch" and will be colored grey. The **Development** section shows linked branches and pull requests that will fix the alert.




![Screenshot of a code scanning alert, includes the alert title, relevant lines of code at the left, metadata at the right.](/assets/images/help/repository/code-scanning-alert.png)

You can also view affected branches, as well as fixes and associated pull requests for an alert. This helps you and your team stay informed about the progress of fixing alerts.

![Screenshot of the "Development" section of a code scanning alert, includes a title of a pull request that could fix the alert.](/assets/images/help/repository/code-scanning-alert-development-section.png)



If you configure code scanning using CodeQL, you can also find data-flow problems in your code. Data-flow analysis finds potential security issues in code, such as: using data insecurely, passing dangerous arguments to functions, and leaking sensitive information.

When code scanning reports data-flow alerts, GitHub shows you how data moves through the code. Code scanning allows you to identify the areas of your code that leak sensitive information, and that could be the entry point for attacks by malicious users.

In some cases, the same vulnerability can be reached through multiple code paths, for example, when several different functions pass user input to the same unsafe operation. Code scanning groups these related paths under a single alert rather than creating separate alerts for each path, so you can see the full scope of the vulnerability in one place.



To track remediation work in your team's workflow without leaving GitHub, you can link alerts to issues. See [Track Alerts In Issues](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/track-alerts-in-issues).




### About alerts from multiple configurations

You can run multiple configurations of code analysis on a repository, using different tools and targeting different languages or areas of the code. Each configuration of code scanning generates a unique set of alerts. For example, an alert generated using the default CodeQL analysis with GitHub Actions comes from a different configuration than an alert generated externally and uploaded via the code scanning API.

If you use multiple configurations to analyze a file, any problems detected by the same query are reported as alerts generated by multiple configurations. If an alert exists in more than one configuration, the number of configurations appears next to the branch name in the "Affected branches" section on the right-hand side of the alert page. To view the configurations for an alert, in the "Affected branches" section, click a branch. A "Configurations analyzing" modal appears with the names of each configuration generating the alert for that branch. Below each configuration, you can see when that configuration's alert was last updated.

An alert may display different statuses from different configurations. To update the alert statuses, re-run each out-of-date configuration. Alternatively, you can delete stale configurations from a branch to remove outdated alerts. For more information on deleting stale configurations and alerts, see [Resolve Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts#removing-stale-configurations-and-alerts-from-a-branch).

### About labels for alerts that are not found in application code

GitHub assigns a category label to alerts that are not found in application code. The label relates to the location of the alert.

* Generated: Code generated by the build process
* Test: Test code
* Library: Library or third-party code
* Documentation: Documentation

Code scanning categorizes files by file path. You cannot manually categorize source files.

In this example, an alert is marked as in "Test" code in the code scanning alert list.

![Screenshot of an alert in the code scanning list. To the right of the title, a "Test" label is highlighted with a dark orange outline.](/assets/images/help/repository/code-scanning-library-alert-index.png)

When you click through to see details for the alert, you can see that the file path is marked as "Test" code.

![Screenshot showing the details of an alert. The file path and "Test" label are highlighted with a dark orange outline.](/assets/images/help/repository/code-scanning-library-alert-show.png)



> [!NOTE]
> Experimental alerts for code scanning were available a public preview release for JavaScript using experimental technology in the CodeQL action. This feature was retired. For more information, see [CodeQL code scanning deprecates ML-powered alerts](https://github.blog/changelog/2023-09-29-codeql-code-scanning-deprecates-ml-powered-alerts/).



## About alert severity and security severity levels

The severity level for a code scanning alert indicates how much risk the problem adds to your codebase.

* **Severity.** All code scanning alerts have a level of `Error`, `Warning`, or `Note`.
* **Security severity.** Each security alert found using CodeQL also has a security severity level of `Critical`, `High`, `Medium`, or `Low`.

When an alert has a security severity level, code scanning displays and uses this level in preference to the `severity`. Security severity levels follow the industry-standard Common Vulnerability Scoring System (CVSS) that is also used for advisories in the GitHub Advisory Database. For more information, see [CVSS: Qualitative Severity Rating Scale](https://www.first.org/cvss/v3.1/specification-document#Qualitative-Severity-Rating-Scale).

### Calculation of security severity levels

When a security query is added to the CodeQL Default or Extended query suite, the CodeQL engineering team calculates the security severity as follows.

1. Search for all CVEs that are assigned one or more of the CWE tags associated with the new security query.
1. Calculate the 75th percentile of the CVSS score for those CVEs.
1. Define that score as the security severity for the query.
1. When displaying alerts found by the query, translate the numerical scores to `Critical`, `High`, `Medium`, or `Low` using the CVSS definitions.

For more information, see [CodeQL CWE coverage](https://codeql.github.com/codeql-query-help/codeql-cwe-coverage/) on the CodeQL documentation site.

## About alerts in pull requests

Code scanning alerts can appear on pull requests as check results and annotations. This happens in repositories where code scanning either:

* Is configured as a pull request check (by default, this is limited to pull requests that target the default branch)
* Is configured to scan each time code is pushed (the results are mapped to any open pull requests)

You will only see an alert in a pull request if **all** the lines of code identified by the alert exist in the pull request diff.

Depending on branch protection rules, the "Code scanning results" check may be a required check that prevents pull requests from being merged until it passes.
