# Swift queries for CodeQL analysis

CodeQL includes many queries for analyzing Swift code. All queries in the `default` query suite are run by default. If you choose to use the `security-extended` query suite, additional queries are run. For more information, see [Codeql Query Suites](https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-query-suites).


## Built-in queries for Swift analysis

This table lists the queries available with the latest release of the CodeQL action and CodeQL CLI. For more information, see [CodeQL change logs](https://codeql.github.com/docs/codeql-overview/codeql-changelog/) in the CodeQL documentation site.



> [!NOTE]
> The initial release of GitHub Enterprise Server {{ allVersions[currentVersion].currentRelease }} included CodeQL action and CodeQL CLI 2.20.7{% elsif ghes < 3.19 %}2.21.4{% elsif ghes < 3.20 %}2.22.4{% elsif ghes < 3.21 %}2.23.9{% elsif ghes < 3.22 %}2.24.3, which may not include all of these queries. Your site administrator can update your CodeQL version to a newer release. For more information, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance).




{% rowheaders %}

| Query name | Related CWEs | Default | Extended | Copilot Autofix |
| --- | --- | --- | --- | --- |
| [Bad HTML filtering regexp](https://codeql.github.com/codeql-query-help/swift/swift-bad-tag-filter/) | 116, 020, 185, 186 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Cleartext logging of sensitive information](https://codeql.github.com/codeql-query-help/swift/swift-cleartext-logging/) | 312, 359, 532 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Cleartext storage of sensitive information in a local database](https://codeql.github.com/codeql-query-help/swift/swift-cleartext-storage-database/) | 312 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Cleartext storage of sensitive information in an application preference store](https://codeql.github.com/codeql-query-help/swift/swift-cleartext-storage-preferences/) | 312 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Cleartext transmission of sensitive information](https://codeql.github.com/codeql-query-help/swift/swift-cleartext-transmission/) | 319 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |
| [Database query built from user-controlled sources](https://codeql.github.com/codeql-query-help/swift/swift-sql-injection/) | 089 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Encryption using ECB](https://codeql.github.com/codeql-query-help/swift/swift-ecb-encryption/) | 327 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Incomplete regular expression for hostnames](https://codeql.github.com/codeql-query-help/swift/swift-incomplete-hostname-regexp/) | 020 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Inefficient regular expression](https://codeql.github.com/codeql-query-help/swift/swift-redos/) | 1333, 730, 400 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "x" aria-label="Not included" %} |
| [Insecure TLS configuration](https://codeql.github.com/codeql-query-help/swift/swift-insecure-tls/) | 757 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Insufficient hash iterations](https://codeql.github.com/codeql-query-help/swift/swift-insufficient-hash-iterations/) | 916 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Missing regular expression anchor](https://codeql.github.com/codeql-query-help/swift/swift-missing-regexp-anchor/) | 020 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Predicate built from user-controlled sources](https://codeql.github.com/codeql-query-help/swift/swift-predicate-injection/) | 943 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Regular expression injection](https://codeql.github.com/codeql-query-help/swift/swift-regex-injection/) | 730, 400 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Resolving XML external entity in user-controlled data](https://codeql.github.com/codeql-query-help/swift/swift-xxe/) | 611, 776, 827 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Static initialization vector for encryption](https://codeql.github.com/codeql-query-help/swift/swift-static-initialization-vector/) | 329, 1204 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [String length conflation](https://codeql.github.com/codeql-query-help/swift/swift-string-length-conflation/) | 135 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [System command built from user-controlled sources](https://codeql.github.com/codeql-query-help/swift/swift-command-line-injection/) | 078, 088 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Uncontrolled data used in path expression](https://codeql.github.com/codeql-query-help/swift/swift-path-injection/) | 022, 023, 036, 073, 099 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Uncontrolled format string](https://codeql.github.com/codeql-query-help/swift/swift-uncontrolled-format-string/) | 134 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Unsafe WebView fetch](https://codeql.github.com/codeql-query-help/swift/swift-unsafe-webview-fetch/) | 079, 095, 749 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Use of a broken or weak cryptographic hashing algorithm on sensitive data](https://codeql.github.com/codeql-query-help/swift/swift-weak-sensitive-data-hashing/) | 327, 328 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Use of an inappropriate cryptographic hashing algorithm on passwords](https://codeql.github.com/codeql-query-help/swift/swift-weak-password-hashing/) | 327, 328, 916 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [Use of constant salts](https://codeql.github.com/codeql-query-help/swift/swift-constant-salt/) | 760 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| [JavaScript Injection](https://codeql.github.com/codeql-query-help/swift/swift-unsafe-js-eval/) | 094, 095, 749 | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |

{% endrowheaders %}
