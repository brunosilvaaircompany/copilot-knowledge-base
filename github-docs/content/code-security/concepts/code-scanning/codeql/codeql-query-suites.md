# CodeQL query suites

## What are query suites?

Query suites allow you to pass multiple queries to CodeQL without having to specify the path to each query file individually. They provide a way of selecting queries based on their filename, metadata properties, or location on disk or in a CodeQL pack.

You should use query suites for the queries that you want to frequently use in your CodeQL analyses. You can use a built-in query suite available through GitHub, or you can create your own.

## Built-in CodeQL query suites

The built-in CodeQL query suites, `default` and `security-extended`, are created and maintained by GitHub. Both of these query suites are available with default setup for every CodeQL-supported language.

Organization owners and security managers can recommend a query suite for use with default setup throughout their organization. For more information, see [Code Scanning At Scale](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/code-scanning-at-scale).

For a complete list of queries included in each query suite for every language, see [Codeql Queries](https://docs.github.com/en/code-security/reference/code-scanning/codeql/codeql-queries).

### `default` query suite

* The `default` query suite is the group of queries run by default in CodeQL code scanning on GitHub.
* The queries in the `default` query suite are highly precise and return few false positive code scanning results. Relative to the `security-extended` query suite, the `default` suite returns fewer low-confidence code scanning results.
* This query suite is available for use with default setup for code scanning.

### `security-extended` query suite

* The `security-extended` query suite consists of all the queries in the `default` query suite, plus additional queries with slightly lower precision and severity.
* Relative to the `default` query suite, the `security-extended` suite may return a greater number of false positive code scanning results.
* This query suite is available for use with default setup for code scanning, and is referred to as the "Extended" query suite on GitHub.

## Custom query suites

To use a custom query suite, you must configure advanced setup for CodeQL code scanning. For more information, see [Configuring Advanced Setup For Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configuring-advanced-setup-for-code-scanning).

Query suite definitions are stored in YAML files with the extension `.qls`. A suite definition is a sequence of instructions, where each instruction is a YAML mapping with (usually) a single key. The instructions are executed in the order they appear in the query suite definition. After all the instructions in the suite definition have been executed, the result is a set of selected queries. For more information, see [Create Query Suites](https://docs.github.com/en/code-security/tutorials/customize-code-scanning/create-query-suites).

## Further reading

* [Create Query Suites](https://docs.github.com/en/code-security/tutorials/customize-code-scanning/create-query-suites)
