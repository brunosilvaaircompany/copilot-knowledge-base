# Configuring default setup for code scanning

We recommend that you start using code scanning with default setup. After you've initially configured default setup, you can evaluate code scanning to see how it's working for you and customize it to better meet your needs. For more information, see [Setup Types](https://docs.github.com/en/code-security/concepts/code-scanning/setup-types).

## Prerequisites

Your repository is eligible for default setup for code scanning if:

* GitHub Actions is enabled.
* It is publicly visible, or GitHub Code Security is enabled.{%- elsif ghes %}
* GitHub Code Security is enabled.


## Configuring default setup for a repository

> [!NOTE]
> If the analyses fail for all CodeQL-supported languages in a repository, default setup will still be enabled, but it will not run any scans or use any GitHub Actions minutes until another CodeQL-supported language is added to the repository or default setup is manually reconfigured, and the analysis of a CodeQL-supported language succeeds.

1. On GitHub, navigate to the main page of the repository.


   > [!NOTE]
   > If you are configuring default setup on a fork, you must first enable GitHub Actions. To enable GitHub Actions, under your repository name, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **I understand my workflows, go ahead and enable them**. Be aware that this will enable all existing workflows on your fork.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Under "Code Security", to the right of "CodeQL analysis", select **Set up** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %}, then click **Default**.


   ![Screenshot of the "Code scanning" section of "Advanced Security" settings. The "Default setup" button is highlighted with an orange outline.](/assets/images/help/security/default-code-scanning-setup-ghas.png)

   You will then see a "CodeQL default configuration" dialog summarizing the code scanning configuration automatically created by default setup.

1. Optionally, to customize your code scanning setup, click **{% octicon "pencil" aria-hidden="true" aria-label="pencil" %} Edit**.
   * To add or remove a language from the analysis performed by default setup, select or deselect that language in the "Languages" section.
   * To specify the CodeQL query suite you would like to use, select your preferred query suite in the "Query suites" section.

1. Review the settings for default setup on your repository, then click **Enable CodeQL**. This will trigger a workflow that tests the new, automatically generated configuration.

   > [!NOTE]
   > If you are switching to default setup from advanced setup, you will see a warning informing you that default setup will override existing code scanning configurations. This warning means default setup will disable the existing workflow file and block any CodeQL analysis API uploads.



1. If projects in your repository depend on dependencies in private package registries, you can grant code scanning access to them. This can improve the outcomes and quality of analyses. See [Giving Org Access Private Registries](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/manage-usage-and-access/giving-org-access-private-registries).




1. Optionally, adjust other configuration options which affect default setup. See [Repository Properties](https://docs.github.com/en/code-security/concepts/code-scanning/repository-properties).



1. Optionally, to view your default setup configuration after enablement, select {% octicon "kebab-horizontal" aria-label="Menu" %}, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} View CodeQL configuration**.

> [!NOTE]
> If no pushes and pull requests have occurred in a repository with default setup enabled for 6 months, the weekly schedule will be disabled to save your GitHub Actions minutes. Organization owners can enable monthly scans of inactive repositories. For more information, see [Configure Global Settings](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/configure-global-settings#continuing-scans-on-inactive-repositories).



## Running default setup on self-hosted or larger runners

You can use default setup for all CodeQL-supported languages on self-hosted runners or GitHub-hosted runners.



>[!NOTE]Code scanning sees assigned runners when default setup is enabled. If a runner is assigned to a repository that is already running default setup, you must disable and re-enable default setup to start using the runner. If you add a runner and want to start using it, you can change the configuration manually without needing to disable and re-enable default setup.

### Assigning labels to self-hosted runners

To assign a self-hosted runner for default setup, you can use the default `code-scanning` label, or you can optionally give them custom labels so that individual repositories can use different runners. For information about assigning labels to self-hosted runners, see [Apply Labels](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/apply-labels).

Once you've assigned custom labels to self-hosted runners, your repositories can use those runners for code scanning default setup.

You can also use security configurations to assign labels to self-hosted runners for code scanning. See [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration).



### Assigning larger runners

To assign a larger runner, name the runner `code-scanning`. This will automatically add the `code-scanning` label to the larger runner. An organization can only have one larger runner with the `code-scanning` label, and that runner will handle all code scanning jobs from repositories within your organization with access to the runner's group. See [Configure Larger Runners](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/configure-larger-runners#provisioning-organization-level-larger-runners-for-default-setup).



### Ensuring build support

Default setup uses the `none` build mode for C/C++, C#, Java and Rust and uses the `autobuild` build mode for other compiled languages. You should configure your self-hosted runners to make sure they can run all the necessary commands for C/C++, C#, and Swift analysis. Analysis of JavaScript/TypeScript, Go, Ruby, Python, and Kotlin code does not currently require special configuration.

## Next steps

After your configuration runs successfully at least once, you can start examining and resolving code scanning alerts. For more information on code scanning alerts, see [Code Scanning Alerts](https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts) and [Assess Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/assess-alerts).

After you've configured default setup for code scanning, you can read about evaluating how it's working for you and the next steps you can take to customize it. For more information, see [Evaluate Default Setup](https://docs.github.com/en/code-security/tutorials/customize-code-scanning/evaluate-default-setup).

You can find detailed information about your code scanning configuration, including timestamps for each scan and the percentage of files scanned, on the tool status page. For more information, see [Use The Tools Status Page For Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/use-the-tools-status-page-for-code-scanning).

When you configure default setup, you may encounter an error. For information on troubleshooting specific errors, see [Troubleshoot Analysis Errors](https://docs.github.com/en/code-security/reference/code-scanning/troubleshoot-analysis-errors).
