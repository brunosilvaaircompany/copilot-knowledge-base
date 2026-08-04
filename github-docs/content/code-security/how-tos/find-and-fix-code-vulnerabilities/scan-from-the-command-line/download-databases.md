# Downloading CodeQL databases from GitHub

GitHub stores CodeQL databases for over 200,000 repositories on GitHub.com, which you can download using the REST API. The list of repositories is constantly growing and evolving to make sure that it includes the most interesting codebases for security research.

## Searching for databases

You can check if a repository has any CodeQL databases available for download using the `/repos/OWNER/REPOSITORY/code-scanning/codeql/databases` endpoint. To check for CodeQL databases using the [GitHub CLI](https://cli.github.com/manual/gh_api), run:

```shell
gh api /repos/OWNER/REPOSITORY/code-scanning/codeql/databases
```

This command returns information about any CodeQL databases that are available for a repository, including the language the database represents, and when the database was last updated. If no CodeQL databases are available, the response is empty.

## Downloading a database

When you have confirmed that a CodeQL database exists for the language you are interested in, you can download it using the following command:

```shell
gh api /repos/OWNER/REPOSITORY/code-scanning/codeql/databases/LANGUAGE -H 'Accept: application/zip' > LOCAL-DATABASE-FILE.zip
```

For more information, see the documentation for the [Get CodeQL database endpoint](/rest/code-scanning/code-scanning#get-a-codeql-database-for-a-repository).

Before running an analysis with the CodeQL CLI, you must unzip the databases.

## Further reading

You can also analyze databases from GitHub.com using the CodeQL for VS Code extension. For more information, see [Running Codeql Queries](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-vs-code/running-codeql-queries).
