# Fixing lint errors

It's good practice to use a linter to check your code for potential errors, style violations, or deviations from best practices. Linters can help you to catch bugs early, improve the readability of your code, and ensure that your code is consistent and maintainable.

## Example scenario

You have run a linter on your code and it has identified some issues that need to be fixed. Rather than fixing these manually, you can ask Copilot Chat to fix them for you.

## Example prompts

* Select all of the code in the editor, then type:

  ```copilot copy
  Fix the lint errors
  ```

* You can specify a particular set of coding guidelines for a language, such as PEP8 for Python:

  ```copilot copy
  Use PEP8 to fix the lint errors
  ```

* If you have a local file that defines your coding conventions and rules, you can drag the file into the chat window to add it as an attachment, then type:

    ```copilot copy
    Use the attached style guide to fix the lint errors
    ```

* Alternatively, you can ask Copilot Chat to fix only a specific type of lint error:

    ```copilot copy
    Make sure all functions use snake_case naming style
    ```

## Example response

Copilot tells you what needs to be changed, and then gives you the corrected code. You should review the suggested code thoroughly before using it. The code that Copilot suggests may not fix all of the issues identified by your linter, so you should always run the linter again if you choose to use the suggested code.

Linting issues that Copilot can help you fix include:

* Adding necessary imports that are missing.
* Removing imports that are not used in the code.
* Splitting import statements into separate lines.
* Using method and function names that follow style guidelines.
* Adding spaces around operators.
* Ensuring consistent indentation.
* Removing trailing whitespace.
* Splitting multiple statements that are on a single line into separate lines.
* Breaking long line into multiple lines.
* Removing unused variables.
* Adding or removing blank lines to adhere to style guidelines.
* Adding docstrings to functions, classes, and modules.
* Removing code that will never be executed.
* Ensuring that all return statements in a function either return a value or none.
* Reducing or eliminating the use of global variables.
* Ensuring that functions are called with the correct number and type of arguments.
* Ensuring that comments are placed correctly and are meaningful.
* Replacing print statements with proper logging.

## Further reading

* [Prompt Engineering](https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering)
* [Best Practices](https://docs.github.com/en/copilot/get-started/best-practices)
