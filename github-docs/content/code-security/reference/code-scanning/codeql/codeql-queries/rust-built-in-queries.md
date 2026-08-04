# Rust queries for CodeQL analysis

CodeQL includes many queries for analyzing Rust code. All queries in the `default` query suite are run by default. If you choose to use the `security-extended` query suite, additional queries are run. For more information, see [Codeql Query Suites](https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-query-suites).


## Built-in queries for Rust analysis

This table lists the queries available with the latest release of the CodeQL action and CodeQL CLI. For more information, see [CodeQL change logs](https://codeql.github.com/docs/codeql-overview/codeql-changelog/) in the CodeQL documentation site.



> [!NOTE]
> The initial release of GitHub Enterprise Server {{ allVersions[currentVersion].currentRelease }} included CodeQL action and CodeQL CLI 2.20.7{% elsif ghes < 3.19 %}2.21.4{% elsif ghes < 3.20 %}2.22.4{% elsif ghes < 3.21 %}2.23.9{% elsif ghes < 3.22 %}2.24.3, which may not include all of these queries. Your site administrator can update your CodeQL version to a newer release. For more information, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance).




{% rowheaders %}

| Query name | Related CWEs | Default | Extended | Copilot Autofix |
| --- | --- | --- | --- | --- |
| ['Secure' attribute is not set to true](https://codeql.github.com/codeql-query-help/rust/rust-insecure-cookie/) | 319, 614 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |
| [Access of invalid pointer](https://codeql.github.com/codeql-query-help/rust/rust-access-invalid-pointer/) | 476, 825 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |
| [Cleartext logging of sensitive information](https://codeql.github.com/codeql-query-help/rust/rust-cleartext-logging/) | 312, 359, 532 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |
| [Cleartext storage of sensitive information in a database](https://codeql.github.com/codeql-query-help/rust/rust-cleartext-storage-database/) | 312 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |
| [Cleartext transmission of sensitive information](https://codeql.github.com/codeql-query-help/rust/rust-cleartext-transmission/) | 319 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |
| [Cross-site scripting](https://codeql.github.com/codeql-query-help/rust/rust-xss/) | 079, 116 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |
| [Database query built from user-controlled sources](https://codeql.github.com/codeql-query-help/rust/rust-sql-injection/) | 089 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |
| [Disabled TLS certificate check](https://codeql.github.com/codeql-query-help/rust/rust-disabled-certificate-check/) | 295 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |
| [Failure to use HTTPS URLs](https://codeql.github.com/codeql-query-help/rust/rust-non-https-url/) | 319, 345 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |
| [Hard-coded cryptographic value](https://codeql.github.com/codeql-query-help/rust/rust-hard-coded-cryptographic-value/) | 259, 321, 798, 1204 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |
| [Regular expression injection](https://codeql.github.com/codeql-query-help/rust/rust-regex-injection/) | 020, 074 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |
| [Server-side request forgery](https://codeql.github.com/codeql-query-help/rust/rust-request-forgery/) | 918 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |
| [Uncontrolled allocation size](https://codeql.github.com/codeql-query-help/rust/rust-uncontrolled-allocation-size/) | 770, 789 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |
| [Uncontrolled data used in path expression](https://codeql.github.com/codeql-query-help/rust/rust-path-injection/) | 022, 023, 036, 073, 099 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |
| [Use of a broken or weak cryptographic algorithm](https://codeql.github.com/codeql-query-help/rust/rust-weak-cryptographic-algorithm/) | 327 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |
| [Use of a broken or weak cryptographic hashing algorithm on sensitive data](https://codeql.github.com/codeql-query-help/rust/rust-weak-sensitive-data-hashing/) | 327, 328, 916 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |
| [Access of a pointer after its lifetime has ended](https://codeql.github.com/codeql-query-help/rust/rust-access-after-lifetime-ended/) | 825 | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |
| [Log injection](https://codeql.github.com/codeql-query-help/rust/rust-log-injection/) | 117 | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |

{% endrowheaders %}
