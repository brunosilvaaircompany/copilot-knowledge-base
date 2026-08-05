# Uploading a SARIF file to GitHub

> [!NOTE]
> Your site administrator must enable code scanning before you can use this feature. For more information, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance).
>
> You may not be able to enable or disable code scanning if an enterprise owner has set a GitHub Code Security policy at the enterprise level. For more information, see [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).




If you use a third-party analysis tool or CI/CD system to scan code for vulnerabilities, you can generate SARIF file and upload it to GitHub. The best upload method depends on how you generate the SARIF file.

For example, if you use:

* GitHub Actions to run the CodeQL action, there is no further action required. The CodeQL action uploads the SARIF file automatically when it completes analysis.
* GitHub Actions to run a SARIF-compatible analysis tool, you could update the workflow to include a final step that uploads the results. See [Uploading a code scanning analysis with GitHub Actions](#uploading-a-code-scanning-analysis-with-github-actions).
* The CodeQL CLI to run code scanning in your CI system, you can use the CLI to upload results to GitHub. See [Use With Existing Ci System](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/use-with-existing-ci-system).
* A tool that generates results as an artifact outside of your repository, you can use the code scanning API to upload the file. See [Code Scanning](https://docs.github.com/en/rest/code-scanning/code-scanning#upload-an-analysis-as-sarif-data).

By default, code scanning expects one SARIF results file per analysis for a repository. If you want to upload more than one set of results for a commit in a repository, you must identify each set of results as a unique set.



> [!NOTE]
> For private and internal repositories, code scanning is available when GitHub Code Security features are enabled for the repository. If you see the error `GitHub Code Security or GitHub Advanced Security must be enabled for this repository to use code scanning`, check that GitHub Code Security is enabled. For more information, see [Managing Security And Analysis Settings For Your Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository).



## Uploading a code scanning analysis with GitHub Actions

To use GitHub Actions to upload a third-party SARIF file to a repository, you'll need a workflow. For more information, see [Write Workflows](https://docs.github.com/en/actions/how-tos/write-workflows).

Your workflow will need to use the `upload-sarif` action, which is part of the `github/codeql-action` repository. It has input parameters that you can use to configure the upload. The main input parameters you'll use are:

* `sarif_file`, which configures the file or directory of SARIF files to be uploaded. The directory or file path is relative to the root of the repository.
* `category` (optional), which assigns a category for results in the SARIF file. This enables you to analyze the same commit in multiple ways and review the results using the code scanning views in GitHub. For example, you can analyze using multiple tools, and in mono-repos, you can analyze different slices of the repository based on the subset of changed files.

For more information, see the [`upload-sarif` action](https://github.com/github/codeql-action/tree/v4/upload-sarif).

The `upload-sarif` action can be configured to run when the `push` and `scheduled` event occur. For more information about GitHub Actions events, see [Events That Trigger Workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows).

If your SARIF file doesn't include `partialFingerprints`, the `upload-sarif` action will calculate the `partialFingerprints` field for you and attempt to prevent duplicate alerts. GitHub can only create `partialFingerprints` when the repository contains both the SARIF file and the source code used in the static analysis. For more information about preventing duplicate alerts, see [Sarif Support](https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/sarif-support#data-for-preventing-duplicated-alerts).

Check that the SARIF properties have the supported size for upload and that the file is compatible with code scanning. For more information, see [Sarif Support](https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/sarif-support#file-compatibility).


### Example workflow for SARIF files generated outside of a repository

You can create a new workflow that uploads SARIF files after you commit them to your repository. This is useful when the SARIF file is generated as an artifact outside of your repository.

This example workflow runs anytime commits are pushed to the repository. The action uses the `partialFingerprints` property to determine if changes have occurred. In addition to running when commits are pushed, the workflow is scheduled to run once per week. For more information, see [Events That Trigger Workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows).

This workflow uploads the `results.sarif` file located in the root of the repository. For more information about creating a workflow file, see [Write Workflows](https://docs.github.com/en/actions/how-tos/write-workflows).

Alternatively, you could modify this workflow to upload a directory of SARIF files. For example, you could place all SARIF files in a directory in the root of your repository called `sarif-output` and set the action's input parameter `sarif_file` to `sarif-output`. Note that if you upload a directory, each SARIF file must include a unique `runAutomationDetails.id` to define the category for the results. For more information, see [Sarif Support](https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/sarif-support#runautomationdetails-object).

```yaml
name: "Upload SARIF"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Thursday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 4'

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      # required for all workflows
      security-events: write
      # only required for workflows in private repositories
      actions: read
      contents: read
    steps:
      # This step checks out a copy of your repository.
      - name: Checkout repository
        uses: actions/checkout@v6

      - name: Upload SARIF file
        uses: github/codeql-action/upload-sarif@v4

        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
          # Optional category for the results
          # Used to differentiate multiple results for one commit
          category: my-analysis-tool
```

### Example workflow that runs the ESLint analysis tool

If you generate your third-party SARIF file as part of a continuous integration (CI) workflow, you can add the `upload-sarif` action as a step after running your CI tests. If you don't already have a CI workflow, you can create one using a GitHub Actions template. For more information, see the [Quickstart](https://docs.github.com/en/actions/get-started/quickstart).

This example workflow runs anytime commits are pushed to the repository. The action uses the `partialFingerprints` property to determine if changes have occurred. In addition to running when commits are pushed, the workflow is scheduled to run once per week. For more information, see [Events That Trigger Workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows).

The workflow shows an example of running the ESLint static analysis tool as a step in a workflow. The `Run ESLint` step runs the ESLint tool and outputs the `results.sarif` file. The workflow then uploads the `results.sarif` file to GitHub using the `upload-sarif` action. For more information about creating a workflow file, see [Understand GitHub Actions](https://docs.github.com/en/actions/get-started/understand-github-actions).

```yaml
name: "ESLint analysis"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Wednesday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 3'

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      # required for all workflows
      security-events: write
      # only required for workflows in private repositories
      actions: read
      contents: read
    steps:
      - uses: actions/checkout@v6

      - name: Run npm install
        run: npm install
      # Runs the ESlint code analysis
      - name: Run ESLint
        # eslint exits 1 if it finds anything to report
        run: node_modules/.bin/eslint build docs lib script spec-main -f node_modules/@microsoft/eslint-formatter-sarif/sarif.js -o results.sarif || true
      # Uploads results.sarif to GitHub repository using the upload-sarif action
      - uses: github/codeql-action/upload-sarif@v4

        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
```

## Uploading more than one SARIF file for a commit

By default, code scanning expects one SARIF results file per analysis for a repository. Consequently, when you upload a second SARIF results file for a commit, it is treated as a replacement for the original set of data. You may want to upload two different SARIF files for one analysis if, for example, your analysis tool generates a different SARIF file for each language it analyzes or each set of rules it uses. If you want to upload more than one set of results for a commit in a repository, you must identify each set of results as a unique set.

When you upload multiple SARIF files for a commit, you must indicate a "category" for each analysis. The way to specify a category varies according to the analysis method:
* Using the CodeQL CLI directly, pass the `--sarif-category` argument to the `codeql database analyze` command when you generate SARIF files. For more information, see [Codeql CLI](https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-cli#about-generating-code-scanning-results-with-the-codeql-cli).
* Using GitHub Actions with `codeql-action/analyze`, the category is set automatically from the workflow name and any matrix variables (typically, `language`). You can override this by specifying a `category` input for the action, which is useful when you analyze different sections of a monorepo in a single workflow.
* Using GitHub Actions to upload results from other static analysis tools, then you must specify a `category` input if you upload more than one file of results for the same tool in one workflow. For more information, see [Upload Sarif File](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/upload-sarif-file#uploading-a-code-scanning-analysis-with-github-actions).
* If you are not using either of these approaches, you must specify a unique `runAutomationDetails.id` in each SARIF file to upload. For more information about this property, see [Sarif Support](https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/sarif-support#runautomationdetails-object).

If you upload a second SARIF file for a commit with the same category and from the same tool, the earlier results are overwritten. However, if you try to upload multiple SARIF files for the same tool and category in a single GitHub Actions workflow run, the misconfiguration is detected and the run will fail.

## Further reading

* [Troubleshoot Sarif Uploads](https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/troubleshoot-sarif-uploads)
* [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax)
* [View Workflow Run History](https://docs.github.com/en/actions/how-tos/monitor-workflows/view-workflow-run-history)
* [Use With Existing Ci System](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/use-with-existing-ci-system)
* [Code Scanning](https://docs.github.com/en/rest/code-scanning/code-scanning#upload-an-analysis-as-sarif-data)
