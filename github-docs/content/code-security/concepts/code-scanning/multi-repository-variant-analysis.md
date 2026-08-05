# Multi-repository variant analysis

## About MRVA

With multi-repository variant analysis (MRVA), you can run CodeQL queries on a list of up to 1,000 repositories on GitHub from Visual Studio Code.

When you run MRVA against a list of repositories, your query is run against each repository that has a CodeQL database available to analyze. GitHub creates and stores the latest CodeQL database for the default branch of thousands of public repositories, including every repository that runs code scanning using CodeQL.

## How MRVA runs queries

When you run MRVA, the analysis is run entirely using GitHub Actions. You don't need to create any workflows, but you must specify which repository the CodeQL for Visual Studio Code extension should use as a controller repository. As the analysis of each repository completes, the results are sent to VS Code for you to view.

The CodeQL extension builds a CodeQL pack with your library and any library dependencies. The CodeQL pack and your selected repository list are posted to an API endpoint on GitHub, which triggers a GitHub Actions dynamic workflow in your controller repository. The workflow spins up multiple parallel jobs to execute the CodeQL query against the repositories in the list, optimizing query execution. As each repository is analyzed, the results are processed and displayed in VS Code.

## Next steps

To get started, see [Run Queries At Scale](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-vs-code/run-queries-at-scale).
