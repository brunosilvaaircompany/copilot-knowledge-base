# Uploading CodeQL analysis results to GitHub

After analyzing a CodeQL database using the CodeQL CLI, you will have a SARIF file that contains the results. You can then use the CodeQL CLI to upload results to GitHub.

If you used a method other than the CodeQL CLI to generate results, you can use other upload methods. For more information, see [Upload Sarif File](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/upload-sarif-file).

## Generating a token for authentication with GitHub

Before you can upload your results to GitHub, you will first need to generate a personal access token. See [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

* **Personal access token (classic)** requires "Code scanning alerts" **Read and write** access for the required repositories.
* **Fine-grained personal access token** requires "repo" **security_events** access.

If you have installed the CodeQL CLI in a third-party CI system, you can also use a GitHub App to upload results to GitHub. See [Use With Existing Ci System](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/use-with-existing-ci-system#generating-a-token-for-authentication-with-github).

## Uploading results to GitHub

1. Check that the SARIF properties have the supported size for upload and that the file is compatible with code scanning. For more information, see [Sarif Support](https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/sarif-support#file-compatibility).

1. Determine the best way to pass the GitHub App or personal access token you created in the previous section to the CodeQL CLI. We recommend that you review your CI system's guidance on the secure use of a secret store. The CodeQL CLI supports:

   * Interfacing with a secret store using the `--github-auth-stdin` option (recommended).
   * Saving the secret in the environment variable `GITHUB_TOKEN` and running the CLI without including the `--github-auth-stdin` option.
   * For testing purposes you can pass the `--github-auth-stdin` command-line option and supply a temporary token via standard input.

1. When you have decided on the most secure and reliable method for your configuration, run `codeql github upload-results` on each SARIF results file and include `--github-auth-stdin` unless the token is available in the environment variable `GITHUB_TOKEN`.

   ```shell
   # GitHub App or personal access token available from a secret store
   <call-to-retrieve-secret> | codeql github upload-results \
       --repository=<repository-name> \
       --ref=<ref> --commit=<commit> \
       --sarif=<file> --github-url=<URL> \
       --github-auth-stdin

   # GitHub App or personal access token available in GITHUB_TOKEN
   codeql github upload-results \
       --repository=<repository-name> \
       --ref=<ref> --commit=<commit> \
       --sarif=<file> --github-url=<URL> \
       
   ```

| Option | Required | Usage |
| ------ | :------: | ----- |
| <code><span style="white-space: nowrap;">--repository</span></code> | {% octicon "check" aria-label="Required" %} | Specify the _OWNER/NAME_ of the repository to upload data to. The owner must be an organization within an enterprise, or on a GitHub Team plan, with GitHub Code Security enabled for the repository, unless the repository is public. For more information, see [Managing Security And Analysis Settings For Your Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository). |
| <code><span style="white-space: nowrap;">--ref</span></code> | {% octicon "check" aria-label="Required" %} | Specify the name of the `ref` you checked out and analyzed so that the results can be matched to the correct code. For a branch use: `refs/heads/BRANCH-NAME`, for the head commit of a pull request use `refs/pull/NUMBER/head`, or for the GitHub-generated merge commit of a pull request use `refs/pull/NUMBER/merge`. |
| <code><span style="white-space: nowrap;">--commit</span></code> | {% octicon "check" aria-label="Required" %} | Specify the full SHA of the commit you analyzed. |
| <code><span style="white-space: nowrap;">--sarif</span></code> | {% octicon "check" aria-label="Required" %} | Specify the SARIF file to load. |
|   |
| <code><span style="white-space: nowrap;">--github-url</span></code> | {% octicon "check" aria-label="Required" %} | Specify the URL for your GitHub Enterprise Server instance. |
|   |
| <code><span style="white-space: nowrap;">--github-auth-stdin</span></code> | {% octicon "x" aria-label="Optional" %}  | Pass the CLI the GitHub App or personal access token created for authentication with GitHub's REST API from your secret store via standard input. This is not needed if the command has access to a `GITHUB_TOKEN` environment variable set with this token. |

For more information, see [GitHub Upload Results](https://docs.github.com/en/code-security/reference/code-scanning/codeql/codeql-cli-manual/github-upload-results).

> [!NOTE]
> If you analyzed more than one CodeQL database for a single commit, you must have specified a SARIF category for each set of results generated by this command. When you upload the results to GitHub, code scanning uses this category to store the results for each language separately. If you forget to do this, each upload overwrites the previous results. For more information, see [Analyze Code](https://docs.github.com/en/code-security/tutorials/customize-code-scanning/analyze-code#running-codeql-database-analyze).

### Basic example of uploading results to GitHub

The following example uploads results from the SARIF file `temp/example-repo-js.sarif` to the repository `my-org/example-repo`. It tells the code scanning API that the results are for the commit `deb275d2d5fe9a522a0b7bd8b6b6a1c939552718` on the `main` branch. The example assumes that the GitHub App or personal access token created for authentication with GitHub's REST API uses the `GITHUB_TOKEN` environment variable.

```shell
codeql github upload-results \
    --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif --github-url=https://HOSTNAME \
    
```

There is no output from this command unless the upload was unsuccessful. The command prompt returns when the upload is complete and data processing has begun. On smaller codebases, you should be able to explore the code scanning alerts in GitHub shortly afterward. You can see alerts directly in the pull request or on the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab for branches, depending on the code you checked out. 

## Uploading diagnostic information to GitHub if the analysis fails

When CodeQL CLI finishes analyzing a database successfully, it gathers diagnostic information such as file coverage, warnings, and errors, and includes it in the SARIF file with the results. When you upload the SARIF file to GitHub the diagnostic information is displayed on the code scanning tool status page for the repository to make it easy to see how well CodeQL is working and debug any problems. For more information, see [Use The Tools Status Page For Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/use-the-tools-status-page-for-code-scanning).

However, if `codeql database analyze` fails for any reason there is no SARIF file to upload to GitHub and no diagnostic information to show on the code scanning tool status page for the repository. This makes it difficult for users to troubleshoot analysis unless they have access to log files in your CI system.

We recommend that you configure your CI workflow to export and upload diagnostic information to GitHub when an analysis fails. You can do this using the following simple commands to export diagnostic information and upload it to GitHub.

### Exporting diagnostic information if the analysis fails

You can create a SARIF file for the failed analysis using [Database Export Diagnostics](https://docs.github.com/en/code-security/reference/code-scanning/codeql/codeql-cli-manual/database-export-diagnostics), for example:

```shell
$ codeql database export-diagnostics codeql-dbs/example-repo \
    --sarif-category=javascript-typescript --format=sarif-latest \
    --output=/temp/example-repo-js.sarif
```

This SARIF file will contain diagnostic information for the failed analysis, including any file coverage information, warnings, and errors generated during the analysis.

### Uploading diagnostic information if the analysis fails

You can make this diagnostic information available on the tool status page by uploading the SARIF file to GitHub using [GitHub Upload Results](https://docs.github.com/en/code-security/reference/code-scanning/codeql/codeql-cli-manual/github-upload-results), for example:

```shell
codeql github upload-results \
    --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif --github-url=https://HOSTNAME \
    
```

This is the same as the process for uploading SARIF files from successful analyses.
