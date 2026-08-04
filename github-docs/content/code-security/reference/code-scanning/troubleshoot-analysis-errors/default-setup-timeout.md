# Enabling default setup takes too long

When you enable default setup, a workflow is triggered with the automatically generated configuration. This run is used to test whether default setup works for all CodeQL-supported languages in the repository.

You can check on the progress of the test run for default setup on the **Actions** tab. If the run is taking too long, try canceling the workflow run and restarting the configuration process.

To restart your configuration, navigate to the main page of your repository, then click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**. Click the **CodeQL** workflow run that's in progress, then click **Cancel workflow**. Once {% octicon "stop" aria-label="cancelled" %} appears beside the workflow run name, navigate back to the **Advanced Security** settings and re-enable default setup. If default setup continues to stall, please contact us through the [GitHub Support portal](https://support.github.com){% elsif ghes %}your site administrator or try enabling advanced setup. For more information, see [Configuring Advanced Setup For Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configuring-advanced-setup-for-code-scanning).
