# GitHub Actions queries for CodeQL analysis

CodeQL includes many queries for analyzing GitHub Actions workflows. All queries in the `default` query suite are run by default. If you choose to use the `security-extended` query suite, additional queries are run. For more information, see [Codeql Query Suites](https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-query-suites).


## Built-in queries for GitHub Actions analysis

This table lists the queries available with the latest release of the CodeQL action and CodeQL CLI. For more information, see [CodeQL change logs](https://codeql.github.com/docs/codeql-overview/codeql-changelog/) in the CodeQL documentation site.



> [!NOTE]
> The initial release of GitHub Enterprise Server {{ allVersions[currentVersion].currentRelease }} included CodeQL action and CodeQL CLI 2.20.7{% elsif ghes < 3.19 %}2.21.4{% elsif ghes < 3.20 %}2.22.4{% elsif ghes < 3.21 %}2.23.9{% elsif ghes < 3.22 %}2.24.3{% elsif ghes < 3.23 %}2.25.6, which may not include all of these queries. Your site administrator can update your CodeQL version to a newer release. For more information, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance).




{% rowheaders %}

| Query name | Related CWEs | Default | Extended | Copilot Autofix |
| --- | --- | --- | --- | --- |
| [Artifact poisoning](https://codeql.github.com/codeql-query-help/actions/actions-artifact-poisoning-critical/) | 829 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Cache Poisoning via caching of untrusted files](https://codeql.github.com/codeql-query-help/actions/actions-cache-poisoning-direct-cache/) | 349 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Cache Poisoning via code injection](https://codeql.github.com/codeql-query-help/actions/actions-cache-poisoning-code-injection/) | 349, 094 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Cache Poisoning via execution of untrusted code](https://codeql.github.com/codeql-query-help/actions/actions-cache-poisoning-poisonable-step/) | 349 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Checkout of untrusted code in a privileged context](https://codeql.github.com/codeql-query-help/actions/actions-untrusted-checkout-high/) | 829 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |
| [Checkout of untrusted code in a privileged context](https://codeql.github.com/codeql-query-help/actions/actions-untrusted-checkout-critical/) | 829 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |
| [Code injection](https://codeql.github.com/codeql-query-help/actions/actions-code-injection-critical/) | 094, 095, 116 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Environment variable built from user-controlled sources](https://codeql.github.com/codeql-query-help/actions/actions-envvar-injection-critical/) | 077, 020 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Excessive Secrets Exposure](https://codeql.github.com/codeql-query-help/actions/actions-excessive-secrets-exposure/) | 312 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Improper Access Control](https://codeql.github.com/codeql-query-help/actions/actions-improper-access-control/) | 285 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [PATH environment variable built from user-controlled sources](https://codeql.github.com/codeql-query-help/actions/actions-envpath-injection-critical/) | 077, 020 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Storage of sensitive information in GitHub Actions artifact](https://codeql.github.com/codeql-query-help/actions/actions-secrets-in-artifacts/) | 312 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Unmasked Secret Exposure](https://codeql.github.com/codeql-query-help/actions/actions-unmasked-secret-exposure/) | 312 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Untrusted Checkout TOCTOU](https://codeql.github.com/codeql-query-help/actions/actions-untrusted-checkout-toctou-high/) | 367 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Untrusted Checkout TOCTOU](https://codeql.github.com/codeql-query-help/actions/actions-untrusted-checkout-toctou-critical/) | 367 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Use of a known vulnerable action](https://codeql.github.com/codeql-query-help/actions/actions-vulnerable-action/) | 1395 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Workflow does not contain permissions](https://codeql.github.com/codeql-query-help/actions/actions-missing-workflow-permissions/) | 275 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Artifact poisoning](https://codeql.github.com/codeql-query-help/actions/actions-artifact-poisoning-medium/) | 829 | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Checkout of untrusted code in a non-privileged context](https://codeql.github.com/codeql-query-help/actions/actions-untrusted-checkout-medium/) | 829 | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Code injection](https://codeql.github.com/codeql-query-help/actions/actions-code-injection-medium/) | 094, 095, 116 | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Environment variable built from user-controlled sources](https://codeql.github.com/codeql-query-help/actions/actions-envvar-injection-medium/) | 077, 020 | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [PATH environment variable built from user-controlled sources](https://codeql.github.com/codeql-query-help/actions/actions-envpath-injection-medium/) | 077, 020 | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Unpinned tag for a non-immutable Action in workflow or composite action](https://codeql.github.com/codeql-query-help/actions/actions-unpinned-tag/) | 829 | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |

{% endrowheaders %}
