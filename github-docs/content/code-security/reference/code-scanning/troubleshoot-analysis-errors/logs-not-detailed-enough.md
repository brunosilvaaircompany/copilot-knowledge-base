# Logs are not detailed enough

If your logs are not detailed enough to troubleshoot a problem, there are several steps you can take to obtain extra information and make logs more useful.

## Enabling step debug logging

Step debug logging increases the verbosity of a job’s logs during and after execution.

To enable step debug logging:

1. In the repository that contains the workflow, set the following secret or variable: `ACTIONS_STEP_DEBUG` to `true`. If both the secret and variable are set, the value of the secret takes precedence over the variable.
1. Re-run the workflow or trigger a new run.

After setting the secret or variable, more debug events are shown in the step logs. See [Use Workflow Run Logs](https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs#viewing-logs-to-diagnose-failures).

You can also use the `runner.debug` context to conditionally run steps only when debug logging is enabled. See [Contexts](https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#runner-context).

## Creating CodeQL debugging artifacts

> [!WARNING]
> CodeQL debugging artifacts contain a copy of the source code being analyzed by CodeQL, therefore we suggest sharing these bundles only with people who are authorized to access that source code.

You can obtain artifacts to help you debug CodeQL.
The debug artifacts will be uploaded to the workflow run as artifacts with names starting with `debug-artifacts`. If CodeQL analyzes multiple languages concurrently as part of the workflow run, there will be one such artifact for every language. The data contains the CodeQL logs, CodeQL databases, extracted source code files, and any SARIF files produced by the workflow. For more information about downloading CodeQL artifacts, see [Download Workflow Artifacts](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/download-workflow-artifacts).

These artifacts will help you debug problems with CodeQL code scanning. If you contact GitHub Support, they might ask for this data.

### Creating CodeQL debugging artifacts for CodeQL default setup

You can create CodeQL debugging artifacts by enabling step debug logging (see [Enabling step debug logging](#enabling-step-debug-logging)) and triggering a new CodeQL analysis, for example, by pushing a new commit to a pull request branch.



If you have given CodeQL access to private registries, additional artifacts whose names start with `proxy-log-file` will be available. These contain logs of the authentication proxy that is used by CodeQL default setup to authenticate requests to private registries and may be used to troubleshoot private registry configurations. To learn more, see [Giving Org Access Private Registries](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/manage-usage-and-access/giving-org-access-private-registries).



### Creating CodeQL debugging artifacts for CodeQL advanced setup

Debugging artifacts for CodeQL advanced setup can be obtained in several different ways.

#### Re-running jobs with debug logging enabled

The easiest option to create debugging artifacts for CodeQL advanced setup is by re-running jobs with debug logging enabled. For more information about re-running GitHub Actions workflows and jobs, see [Re Run Workflows And Jobs](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs).

You need to ensure that you select **Enable debug logging**. This option enables runner diagnostic logging and step debug logging for the run. You'll then be able to download CodeQL debugging artifacts to investigate further. You do not need to modify the workflow file when creating CodeQL debugging artifacts by re-running jobs.

#### Using a workflow flag

You can create CodeQL debugging artifacts by using a flag in your workflow. For this, you need to modify the `init` step of your CodeQL analysis workflow file and set `debug: true`.

```yaml
- name: Initialize CodeQL
  uses: github/codeql-action/init@v4

  with:
    debug: true
```

#### Using GitHub Actions step debug logging

If you enable GitHub Actions step debug logging, CodeQL will also produce debugging artifacts and upload them as part of the workflow run. For instructions, see [Enabling step debug logging](#enabling-step-debug-logging).
