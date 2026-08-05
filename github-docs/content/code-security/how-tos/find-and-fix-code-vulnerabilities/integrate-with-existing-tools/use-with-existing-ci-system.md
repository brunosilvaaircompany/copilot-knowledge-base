# Using code scanning with your existing CI system

> [!NOTE]
> Your site administrator must enable code scanning before you can use this feature. For more information, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance).
>
> You may not be able to enable or disable code scanning if an enterprise owner has set a GitHub Code Security policy at the enterprise level. For more information, see [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).




As an alternative to running code scanning within GitHub using GitHub Actions, you can analyze code in an external continuous integration or continuous delivery/deployment (CI/CD) system, then upload the results to GitHub.

> [!NOTE]
> Uploading SARIF data to display as code scanning results in GitHub is supported for organization-owned repositories with GitHub Code Security enabled, and public repositories on GitHub.com. For more information, see [Managing Security And Analysis Settings For Your Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository).


## Setting up your analysis tool

You will first need to download your analysis tool of choice and set it up with your CI system.

If you are using the CodeQL CLI, you need to make the full contents of the CodeQL CLI bundle available to every CI server that you want to run CodeQL code scanning analysis on. For more information, see [Set Up Codeql CLI](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-the-command-line/set-up-codeql-cli).

Once you've made your analysis tool available to servers in your CI system, you're ready to generate data.

## Analyzing code

To analyze code with the CodeQL CLI or another analysis tool, you will want to check out the code you want to analyze and set up the codebase environment, making sure that any dependencies are available. You may also want to find the build command for the codebase, typically available in your CI system's configuration file.

You can then complete the steps to analyze your codebase and produce results, which will differ based on the static analysis tool you are using.

If you are using the CodeQL CLI, you will first need to create a CodeQL database from your code, then analyze the database to produce SARIF results. For more information, see [Prepare Code For Analysis](https://docs.github.com/en/code-security/tutorials/customize-code-scanning/prepare-code-for-analysis) and [Analyze Code](https://docs.github.com/en/code-security/tutorials/customize-code-scanning/analyze-code).

## Generating a token for authentication with GitHub

Each CI server needs a GitHub App or personal access token to use to upload results to GitHub, whether you are using the CodeQL CLI, the REST API, or another method. You must use an access token or a GitHub App with the `security_events` write permission. If CI servers already use a token with this scope to checkout repositories from GitHub, you could potentially use the same token. Otherwise, you should create a new token with the `security_events` write permission and add this to the CI system's secret store. For information, see [About Creating GitHub Apps](https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps) and [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

For more information on the different methods for uploading results to GitHub, see [Upload Sarif File](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/upload-sarif-file).

## Uploading your results to GitHub

Once you have analyzed your code, produced SARIF results, and ensured you can authenticate with GitHub, you can upload the results to GitHub. For more information on the different methods you can use to upload your results, see [Upload Sarif File](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/upload-sarif-file).

For specific details on uploading your results to GitHub using the CodeQL CLI, see [Upload Results](https://docs.github.com/en/code-security/tutorials/customize-code-scanning/upload-results).

By default, code scanning expects one SARIF results file per analysis for a repository. Consequently, when you upload a second SARIF results file for a commit, it is treated as a replacement for the original set of data. You may want to upload two different SARIF files for one analysis if, for example, your analysis tool generates a different SARIF file for each language it analyzes or each set of rules it uses. If you want to upload more than one set of results for a commit in a repository, you must identify each set of results as a unique set. The way to specify a category for a SARIF upload varies according to the analysis method.
