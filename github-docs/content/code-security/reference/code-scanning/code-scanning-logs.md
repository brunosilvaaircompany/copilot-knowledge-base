# Code scanning logs

The log and diagnostic information available to you depends on the method you use for code scanning in your repository. You can check the type of code scanning you're using in the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab of your repository, by using the **Tool** drop-down menu in the alert list. To access this page, see [Assess Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/assess-alerts#viewing-the-alerts-for-a-repository).

## Logs on GitHub

You can see analysis and diagnostic information for code scanning run using CodeQL analysis on GitHub.

* Analysis information is shown for the most recent analysis in a header at the top of the list of alerts. See [Assess Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/assess-alerts#viewing-the-alerts-for-a-repository).
* Diagnostic information is displayed in the GitHub Actions workflow logs and consists of summary metrics and extractor diagnostics. To access these logs, see [View Code Scanning Logs](https://docs.github.com/en/code-security/how-tos/view-and-interpret-data/view-code-scanning-logs).

### Summary metrics

Summary metrics include:

* Lines of code in the codebase (used as a baseline), before creation and extraction of the CodeQL database
* Lines of code in the CodeQL database extracted from the code, including external libraries and auto-generated files
* Lines of code in the CodeQL database excluding auto-generated files and external libraries


### Source code extraction diagnostics

Extractor diagnostics only cover files that were seen during the analysis, metrics include:
* Number of files successfully analyzed
* Number of files that generated extractor errors during database creation
* Number of files that generated extractor warnings during database creation


You can see more detailed information about CodeQL extractor errors and warnings that occurred during database creation by enabling debug logging. See [Logs Not Detailed Enough](https://docs.github.com/en/code-security/reference/code-scanning/troubleshoot-analysis-errors/logs-not-detailed-enough#re-running-jobs-with-debug-logging-enabled).



### Diagnostic information for private package registries

Code scanning default setup workflows include a `Setup proxy for registries` step. When you are looking at a workflow run for default setup, you can expand this step to view the corresponding log. This contains information about which private package registry configurations were available to the analysis. Additionally, the log contains some diagnostic information which may help with troubleshooting if the private package registries are not successfully used by code scanning default setup. Look for the following messages:

* `Using registries_credentials input.` At least one private registry is configured for the organization. This includes configurations for private registry types which are not supported by code scanning default setup. For more details about supported registry types, see [Giving Org Access Private Registries](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/manage-usage-and-access/giving-org-access-private-registries#code-scanning-default-setup-access-to-private-registries).

* `Credentials loaded for the following registries:`
  * If no list of configurations follows, then no private registry configurations supported by code scanning default setup were found.
  * Otherwise, one line for each supported configuration that was successfully loaded is shown. For example, a line containing `Type: nuget_feed; Host: undefined; Url: https://nuget.pkg.github.com/; Username: undefined; Password: true; Token: false` indicates that a private NuGet Feed configuration was loaded.
  * The information about the configuration in the log may not match exactly what is configured for the organization in the UI. For example, the log may indicate that a `Password` is set, even though a `Token` is configured in the UI.

* `Proxy started on 127.0.0.1:49152` The authentication proxy that is used by code scanning default setup to authenticate to the configured private package registries was started successfully.

* Following this, there may be messages about the outcomes of connection tests which try to reach the configured private package registries through the authentication proxy. This is a best-effort process. If these checks are not successful for some registries, it does not necessarily mean that the relevant configurations are not working. However, if you find that code scanning default setup is unable to successfully access dependencies in the private registries during the analysis, then this may provide some information to help troubleshoot the issue.

If the output from the `Setup proxy for registries` step is as expected, but code scanning default setup is unable to successfully access dependencies in the private registries, you can obtain additional troubleshooting information. See [Logs Not Detailed Enough](https://docs.github.com/en/code-security/reference/code-scanning/troubleshoot-analysis-errors/logs-not-detailed-enough#creating-codeql-debugging-artifacts-for-codeql-default-setup).

For more information about giving code scanning default setup access to private registries, see [Giving Org Access Private Registries](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/manage-usage-and-access/giving-org-access-private-registries).



## Logs for the CodeQL CLI

If you're using the CodeQL CLI outside GitHub, you'll see diagnostic information in the output generated during database analysis. This information is also included in the SARIF results file.

## Logs in VS Code

Progress and error messages are displayed as notifications in the bottom right corner of the Visual Studio Code workspace. These link to more detailed logs and error messages in the "Output" window.

You can access separate logs for the CodeQL extension, language server, query Server, or tests. The Language Server log contains more advanced debug logs for CodeQL language maintainers. You should only need these to provide details in a bug report.

To access these logs, see [Accessing Logs](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-vs-code/accessing-logs).
