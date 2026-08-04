# Viewing code scanning logs from GitHub Actions

> [!NOTE]
> Your site administrator must enable code scanning before you can use this feature. If you want to use GitHub Actions to scan your code, the site administrator must also enable GitHub Actions and set up the infrastructure required. For more information, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance).




After configuring code scanning using default setup or a custom GitHub Actions workflow, you can watch the output of the actions as they run. For information about logs for other code scanning setups, see [Code Scanning Logs](https://docs.github.com/en/code-security/reference/code-scanning/code-scanning-logs).

1. Under your repository name, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**.

   ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](/assets/images/help/repository/actions-tab-global-nav-update.png)


   You'll see a list that includes an entry for running the code scanning workflow. The text of the entry is the title you gave your commit message.

   ![Screenshot of the "All workflows" page. In the list of workflow runs is a run labeled "Create .github/workflows/codeql.yml."](/assets/images/help/repository/code-scanning-actions-list.png)

1. Click the entry for the code scanning workflow.

   > [!NOTE]
   > If you are looking for the CodeQL workflow run triggered by enabling default setup, the text of the entry is "CodeQL."

1. Click the job name on the left. For example, **Analyze (LANGUAGE)**.

   ![Screenshot of the log output for the "Analyze (go)" job. In the left sidebar, under the "Jobs" heading, "Analyze (go)" is listed.](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Review the logging output from the actions in this workflow as they run.

1. Optionally, to see more detail about the commit that triggered the workflow run, click the short commit hash. The short commit hash is 7 lowercase characters immediately following the commit author's username.

1. Once all jobs are complete, you can view the details of any code scanning alerts that were identified. For more information, see [Assess Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/assess-alerts#viewing-the-alerts-for-a-repository).

## Further reading

If you're looking for diagnostic information about whether code scanning accessed any private registries, see [Code Scanning Logs](https://docs.github.com/en/code-security/reference/code-scanning/code-scanning-logs#diagnostic-information-for-private-package-registries).
