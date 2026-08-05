# Managing CodeQL databases

## About CodeQL databases

To analyze a project, you need to select a CodeQL database for that project. You can select a database locally (from a ZIP archive or an unarchived folder), from a public URL, or from a project's URL on GitHub. Alternatively, you can create a database using the CodeQL CLI, see [Prepare Code For Analysis](https://docs.github.com/en/code-security/tutorials/customize-code-scanning/prepare-code-for-analysis).

### Downloading a database from GitHub

GitHub.com stores CodeQL databases for over 200,000 open source repositories that you can use to test your analysis on. You can also access databases for repositories hosted on GitHub Enterprise Cloud with data residency by editing your settings and defining the URL for your system, see [Changing the GitHub URL used by the extension](/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-vs-code/customize-settings#changing-the-github-url-used-by-the-extension).


You can check if a repository has any CodeQL databases available for download, and if so download it, using the REST API. For more information, see [List CodeQL databases for a repository](/rest/code-scanning/code-scanning#list-codeql-databases-for-a-repository) and [Get a CodeQL database for a repository](/rest/code-scanning/code-scanning#get-a-codeql-database-for-a-repository) in the GitHub REST API documentation.


## Choosing a database to analyze

1. Hover over the title bar of the "Databases" view and choose the appropriate icon to select your database. You can select a local database (from a ZIP archive or an unarchived folder), from a public URL, or from a project's URL on GitHub.

1. Once you've chosen a database, it will be displayed in the "Databases" view. To see the menu options for interacting with a database, right-click an entry in the list. You can select multiple databases at once.

> [!NOTE]
> You can also analyze test databases. Test databases (folders with a `.testproj` extension) are generated when you run regression tests on custom queries using the CodeQL CLI. If a query fails a regression test, you may want to import the test database into Visual Studio Code to debug the failure. For more information about running query tests, see [Test Custom Queries](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-the-command-line/test-custom-queries).

## Filtering databases and queries by language

Optionally, to see databases containing a specific language and queries written for that language, you can apply a language filter using the language selector.

1. To see available language filters, in the sidebar, open the "Language" view.

1. Hover over the language filter you would like to apply, then click **Select**.

## Next steps

To learn how to use the extension to analyze your projects by running queries on CodeQL databases, see [Running Codeql Queries](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-vs-code/running-codeql-queries).
