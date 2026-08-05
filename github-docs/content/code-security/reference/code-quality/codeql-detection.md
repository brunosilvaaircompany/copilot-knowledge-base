# CodeQL-powered analysis for Code Quality

## CodeQL-powered analysis

Code Quality uses CodeQL to perform rule-based analysis of pull requests and your default branch.

* Findings for your **default branch** appear under the "Standard findings" dashboard under your repository's **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

* Findings **on pull requests** appear as comments made by `github-code-quality[bot]`.

Copilot Autofix suggestions are provided for findings where possible.

### Scan information

Each CodeQL analysis will use GitHub Actions minutes and can be seen on the **Actions** tab of the repository. These runs use the workflow name CodeQL, the same name code scanning uses, so you can't reliably tell Code Quality and code scanning runs apart by workflow name. Identify Code Quality runs by their GitHub Actions label instead, for example "Code Quality: push on main"

### Query lists for supported languages

Each Code Quality rule is written as a query in CodeQL and then run using GitHub Actions.

The rules are continually refined by both GitHub and open source developers.

* [Csharp Queries](https://docs.github.com/en/code-security/reference/code-quality/codeql-queries/csharp-queries)
* [Go Queries](https://docs.github.com/en/code-security/reference/code-quality/codeql-queries/go-queries)
* [Java Queries](https://docs.github.com/en/code-security/reference/code-quality/codeql-queries/java-queries)
* [JavaScript Queries](https://docs.github.com/en/code-security/reference/code-quality/codeql-queries/javascript-queries)
* [Python Queries](https://docs.github.com/en/code-security/reference/code-quality/codeql-queries/python-queries)
* [Ruby Queries](https://docs.github.com/en/code-security/reference/code-quality/codeql-queries/ruby-queries)

For more information about the CodeQL project, see [https://codeql.github.com/](https://codeql.github.com).

## Workflow used for code quality analysis

You can see all the workflow runs for Code Quality on the **Actions** tab for your repository. You can identify Code Quality runs by their GitHub Actions label, for example "Code Quality: push on main"

By default, the Code Quality workflow runs on standard GitHub runners but you can configure Code Quality to use runners with a specific label. These may be hosted by GitHub or self-hosted.

If your organization has configured caching of private registries, these will be available for code quality analysis to use to resolve dependencies.

For more information, see:

* [Enable Code Quality](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/enable-code-quality)
* [Giving Org Access Private Registries](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/manage-usage-and-access/giving-org-access-private-registries#code-quality-access-to-private-registries)

## Pull request status checks

When code quality analysis runs on a pull request, the "CodeQL - Code Quality / Analyze" check is shown in the "Checks" section at the bottom of the pull request.

Any code problems identified by the scan are reported in comments on the pull request. The comment is made by the `github-code-quality[bot]` and includes a Copilot Autofix suggestion.

### Status check failures

The workflow failed to run. For example, your budget for actions minutes is exhausted. See [Viewing logs to diagnose failures](/actions/how-tos/monitor-workflows/use-workflow-run-logs#viewing-logs-to-diagnose-failures).

### Merging is blocked: Code quality findings were detected

The scan found problems in the code that exceed the quality gate set by a code quality branch rule for the repository. You need to resolve these problems before you can merge the pull request. See [Unblock Your Pr](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/unblock-your-pr).
