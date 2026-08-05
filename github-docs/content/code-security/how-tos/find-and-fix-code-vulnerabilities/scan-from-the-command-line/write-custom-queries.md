# Writing custom queries for the CodeQL CLI

This article is specifically about writing queries to use with the [Database Analyze](https://docs.github.com/en/code-security/reference/code-scanning/codeql/codeql-cli-manual/database-analyze) command to produce [interpreted results](https://codeql.github.com/docs/codeql-overview/about-codeql/#interpret-query-results). For conceptual information about custom queries, see [Custom Queries](https://docs.github.com/en/code-security/concepts/code-scanning/codeql/custom-queries).

## Writing a valid query

Before running a custom analysis you need to write a valid query, and save it in a file with a `.ql` extension. There is extensive documentation available to help you write queries. For more information, see [CodeQL queries](https://codeql.github.com/docs/writing-codeql-queries/codeql-queries/#codeql-queries).

## Including query metadata

When running queries with the `database analyze` command, you must include the following two properties to ensure that the results are interpreted correctly:

* Query identifier (`@id`): a sequence of words composed of lowercase letters or digits, delimited by `/` or `-`, identifying and classifying the query.

* Query type (`@kind`): identifies the query as a simple alert (`@kind problem`), an alert documented by a sequence of code locations (`@kind path-problem`), for extractor troubleshooting (`@kind diagnostic`), or a summary metric (`@kind metric` and `@tags summary`).

For more information about these metadata properties, see [Metadata for CodeQL queries](https://codeql.github.com/docs/writing-codeql-queries/metadata-for-codeql-queries/#metadata-for-codeql-queries) and the [Query metadata style guide](https://github.com/github/codeql/blob/main/docs/query-metadata-style-guide.md).

## Including query help for custom CodeQL queries in SARIF files

For information about query help and documentation formats, see [Custom Queries](https://docs.github.com/en/code-security/concepts/code-scanning/codeql/custom-queries#query-documentation).

To include query help in SARIF files when running code scanning analyses:

1. Write your query help in one of the following formats:
   * **Markdown file**: Save a Markdown file alongside your query with the same name (for example, `my-query.md` for `my-query.ql`)
   * **`.qhelp` file**: Write query help in `.qhelp` format, then convert it to Markdown before running the analysis. For more information, see [Query help files](https://codeql.github.com/docs/writing-codeql-queries/query-help-files/#query-help-files) and [Test Query Help Files](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-the-command-line/test-query-help-files).
1. Run `codeql database analyze` with the `--sarif-add-query-help` option:

   ```shell
   codeql database analyze <database> --format=sarif-latest --output=results.sarif --sarif-add-query-help
   ```

   > [!NOTE]
	 > The `--sarif-add-query-help` option is available from CodeQL CLI v2.7.1 onwards.
1. Upload the SARIF file to GitHub.

## Next steps

To share and use your custom queries, see [Publish And Use Packs](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-the-command-line/publish-and-use-packs).
