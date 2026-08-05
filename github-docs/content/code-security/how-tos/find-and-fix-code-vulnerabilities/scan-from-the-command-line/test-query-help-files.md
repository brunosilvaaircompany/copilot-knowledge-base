# Testing query help files

## Prerequisites

* The query help (`.qhelp`) files must have accompanying query (`.ql`) files with identical base names.
* The query help files should follow the standard structure and style for query help documentation. For more information, see the [Query help style guide](https://github.com/github/codeql/blob/main/docs/query-help-style-guide.md) in the CodeQL repository.

## Previewing your query help files

1. To render your query help files as Markdown, run the following command:

    ```shell copy
    codeql generate query-help <qhelp|query|dir|suite> --format=markdown [--output=<dir|file>]
    ```

    For information on the options available for this command, see [Generate Query Help](https://docs.github.com/en/code-security/reference/code-scanning/codeql/codeql-cli-manual/generate-query-help).

1. If you receive any warning messages, review and fix them, then rerun the command. By default, the CodeQL CLI will print a warning message if:
    * Any of the query help is invalid
    * Any `.qhelp` files specified in the command don’t have the same base name as an accompanying `.ql` file
    * Any `.ql` files specified in the command don’t have the same base name as an accompanying `.qhelp` file
1. Review the rendered Markdown in your output directory, file, or terminal to check that your files appear as expected.

## Further reading

* [Query help files](https://codeql.github.com/docs/writing-codeql-queries/query-help-files/#query-help-files)
* [Generate Query Help](https://docs.github.com/en/code-security/reference/code-scanning/codeql/codeql-cli-manual/generate-query-help)
