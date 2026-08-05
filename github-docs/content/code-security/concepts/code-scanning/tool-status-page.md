# About the tool status page

> [!NOTE]
> Your site administrator must enable code scanning before you can use this feature. For more information, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance).
>
> You may not be able to enable or disable code scanning if an enterprise owner has set a GitHub Code Security policy at the enterprise level. For more information, see [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).




## What is the tool status page?

The tool status page shows information about all of your code scanning tools and is a good starting point for debugging problems when code scanning isn't working as expected.

> [!NOTE]
> The tool status page shows tool status at the repository level for the default branch only, not at the organization level.

## Tool status indicators

The tool status page displays one of three statuses:

* **All configurations are working**: All tools are operating as expected
* **Some configurations need attention**: Some tools have warnings or non-critical issues
* **Some configurations are not working**: One or more tools have critical errors

## What information is available

### For all code scanning tools

* Configuration status and health
* Scan scheduling
* First and most recent scan times
* Rules used in scans

### For integrated tools like CodeQL

In addition to the information listed above, the tool status page for integrated tools provides the following details:

* File coverage percentages by programming language
* Configuration details for each setup type
* Specific error messages
* Downloadable CSV reports of analyzed files
* Downloadable lists of rules used and alert counts

## How CodeQL defines scanned files

CodeQL reports a file as scanned if some lines of code in that file were processed.

### Interpreted languages

* **Default setup**: Scanned files include all source code files for languages CodeQL can analyze
* **Advanced setup**: You can use `paths` and `paths-ignore` to define which files to scan. See [Codeql Code Scanning](https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning).

### Compiled languages

The tool status page reports files present before running autobuild or manual build steps. Files generated during the build process are not shown. See [Codeql For Compiled Languages](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/codeql-for-compiled-languages#use-autobuild-for-codeql).

### Coverage calculation

File coverage percentages respect any files excluded by `paths` and `paths-ignore` configuration properties.

## Understanding file coverage percentages

Use file coverage percentages to debug and improve your analysis:

* **High percentage**: Code scanning is working as expected for that language
* **Low percentage**: Investigate diagnostic output. See [Fewer Lines Scanned Than Expected](https://docs.github.com/en/code-security/reference/code-scanning/troubleshoot-analysis-errors/fewer-lines-scanned-than-expected)
* **Zero percentage**: You may have code in languages not currently being analyzed. Update your setup to include these languages. See [Workflow Configuration Options](https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options)

> [!NOTE]
> If you set up both advanced setup and default setup, the tool status page only shows default setup.

## Troubleshooting features

The tool status page helps you troubleshoot issues through:

* **Error messages**: Explains why tools aren't performing as expected with suggested actions
* **File coverage data**: Shows which files and languages are being analyzed
* **Configuration details**: Displays information about each analysis run
* **Downloadable reports**: Provides CSV reports with detailed file and rule information

## Further reading

* [Use The Tools Status Page For Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/use-the-tools-status-page-for-code-scanning)
