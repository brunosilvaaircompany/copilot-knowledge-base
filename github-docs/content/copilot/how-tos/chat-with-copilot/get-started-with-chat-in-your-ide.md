# Getting started with prompts for GitHub Copilot Chat in your IDE

You can ask Copilot Chat specific questions about your project or general software questions. You can also ask Copilot Chat to write code, fix errors, write tests, and document code.

Use the tabs above to select the environment where you are using Copilot Chat.

{% vscode %}

<a href="vscode://GitHub.Copilot-Chat?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 mb-3 no-underline">
    <span>Open Copilot Chat in Visual Studio Code</span> {% octicon "link-external" height:16 aria-label="link-external" %}
</a>

Some of the following example prompts use chat participants (preceded by `@`), slash commands (preceded by `/`), or chat variables (preceded by `#`). For more information on keywords in prompts, see [Chat In Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide#using-keywords-in-your-prompt).

## Ask general software questions

You can ask Copilot Chat general software questions. For example:

* `tell me about nodejs web server frameworks`
* `how can I create an Express app`
* `@terminal how to update an npm package`

## Ask questions about your project

You can ask Copilot Chat questions about your project.

* `what sorting algorithm does this function use`
* `@workspace how are notifications scheduled`
* `#file:gameReducer.js #file:gameInit.js how are these files related`

To give Copilot the correct context, try some of these strategies:

* Highlight relevant lines of code.
* Use chat variables like `#selection`, `#file`, `#editor`, `#codebase`, or `#git`.
* Use the `@workspace` chat participant.

## Write code

You can ask Copilot to write code for you. For example:

* `write a function to sum all numbers in a list`
* `add error handling to this function`
* `@workspace add form validation, similar to the newsletter page`

When Copilot returns a code block, the response includes options to copy the code, or to insert the code at your cursor, into a new file, or into the terminal.

## Ask questions about alerts from GitHub Advanced Security features

You can ask Copilot about security alerts in repositories in your organization from GitHub Advanced Security features (code scanning, secret scanning, and Dependabot alerts). For example:

* `How would I fix this alert?`
* `How many alerts do I have on this pull request?`
* `Which line of code is this code scanning alert referencing?`
* `What library is affected by this Dependabot alert?`

## Set up a new project

Use the `/new` slash command to set up a new project. For example:

* `/new react app with typescript`
* `/new python django web application`
* `/new node.js express server`

Copilot will suggest a directory structure and provide a button to create the suggested files and contents. To preview a suggested file, select the file name in the suggested directory structure.

Use the `/newNotebook` slash command to set up a new Jupyter notebook. For example:

* `/newNotebook retrieve the titanic dataset and use Seaborn to plot the data`

## Fix, improve, and refactor code

If your active file contains an error, use the `/fix` slash command to ask Copilot to fix the error.

You can also make general requests to improve or refactor your code.

* `how would you improve this code?`
* `translate this code to C#`
* `add error handling to this function`

## Write tests

Use the `/tests` slash command to ask Copilot to write tests for the active file or selected code. For example:

* `/tests`
* `/tests using the Jest framework`
* `/tests ensure the function rejects an empty list`

The `/tests` slash command writes tests for existing code. If you prefer to write tests before writing code (test driven development), omit the `/tests` command. For example:

* `Add tests for a JavaScript function that should sum a list of integers`

## Ask questions about Visual Studio Code

Use the `@vscode` chat participant to ask specific questions about Visual Studio Code. For example:

* `@vscode tell me how to debug a node.js app`
* `@vscode how do I change my Visual Studio Code colors`
* `@vscode how can I change key bindings`

## Ask questions about the command line

Use the `@terminal` chat participant to ask specific questions about the command line. For example:

* `@terminal find the largest file in the src directory`
* `@terminal #terminalLastCommand` to explain the last command and any errors

{% endvscode %}

{% visualstudio %}

## Ask general software questions

You can ask Copilot Chat general software questions. For example:

* `tell me about nodejs web server frameworks`
* `how can I create an Express app`
* `what's the process for updating an npm package`

## Ask questions about your project

You can ask Copilot Chat questions about your project. To give Copilot the correct context, try some of these strategies:

* Highlight relevant lines of code.
* Open the relevant file.
* Use `#file` to tell Copilot to reference specific files.
* Use `#solution` to tell Copilot to reference the active file.

For example:

* `what sorting algorithm does this function use`
* `#file:gameReducer.js what happens when a new game is requested`

## Write code

You can ask Copilot to write code for you. For example:

* `write a function to sum all numbers in a list`
* `add error handling to this function`

When Copilot returns a code block, the response includes options to copy the code, insert the code into a new file, or preview the code output.

## Ask questions about alerts from GitHub Advanced Security features

You can ask Copilot about security alerts in repositories in your organization from GitHub Advanced Security features (code scanning, secret scanning, and Dependabot alerts). For example:

* `How would I fix this alert?`
* `How many alerts do I have on this pull request?`
* `Which line of code is this code scanning alert referencing?`
* `What library is affected by this Dependabot alert?`

## Fix, improve, and refactor code

If your active file contains an error, use the `/fix` slash command to ask Copilot to fix the error.

You can also make general requests to improve or refactor your code.

* `how would you improve this code?`
* `translate this code to C#`
* `add error handling to this function`

## Write tests

Use the `/tests` slash command to ask Copilot to write tests for the active file or selected code. For example:

* `/tests`
* `/tests using the Jest framework`
* `/tests ensure the function rejects an empty list`

The `/tests` slash command writes tests for existing code. If you prefer to write tests before writing code (test driven development), omit the `/tests` command. For example:

* `Add tests for a JavaScript function that should sum a list of integers`

{% endvisualstudio %}

{% jetbrains %}

## Ask general software questions

You can ask Copilot Chat general software questions. For example:

* `tell me about nodejs web server frameworks`
* `how can I create an Express app`
* `what's the process for updating an npm package`

## Ask questions about your project

You can ask Copilot Chat questions about your project. To give Copilot the correct context, try some of these strategies:

* Highlight relevant lines of code.
* Open the relevant file.
* Add the file as a reference. For information about how to use file references, see [Chat In Ide?Tool=Jetbrains](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide?tool=jetbrains#file-references).
* Use the `@project` chat participant.

For example:

* `what sorting algorithm does this function use`
* `how are these files related` (with references to the files in question)
* `@project how are notifications scheduled`

## Write code

You can ask Copilot to write code for you. For example:

* `write a function to sum all numbers in a list`
* `add error handling to this function`

When Copilot returns a code block, the response includes options to copy the code or to insert the code at your cursor.

## Fix, improve, and refactor code

If your active file contains an error, use the `/fix` slash command to ask Copilot to fix the error.

You can also make general requests to improve or refactor your code.

* `how would you improve this code?`
* `translate this code to C#`
* `add error handling to this function`

## Write tests

Use the `/tests` slash command to ask Copilot to write tests for the active file or selected code. For example:

* `/tests`
* `/tests using the Jest framework`
* `/tests ensure the function rejects an empty list`

The `/tests` slash command writes tests for existing code. If you prefer to write tests before writing code (test driven development), omit the `/tests` command. For example:

* `Add tests for a JavaScript function that should sum a list of integers`

{% endjetbrains %}

{% eclipse %}

## Ask general software questions

You can ask Copilot Chat general software questions. For example:

* `tell me about nodejs web server frameworks`
* `how can I create an Express app`
* `what's the process for updating an npm package`

## Ask questions about files your project

You can ask Copilot Chat questions about the file that's currently displayed in the editor, or about files you have attached to your conversation in the Copilot Chat panel. To give Copilot the correct context:

* Open the relevant file in the editor.
* Click the paperclip icon in the Copilot Chat panel, then search for and select files you want to attach to the conversation.

For example:

* `how can I make this file run faster`
* `how are these files related` (with two or more attached files)
* `explain the getSearchReplaceRules function`

## Write code

You can ask Copilot to write code for you. For example:

* `write a TypeScript function to sum all numbers in a list`
* `using the comments in this file, create appropriate Node JavaScript`

When Copilot returns a code block, the response includes options to copy the code.

## Fix, improve, and refactor code

If your active file contains an error, use the `/fix` slash command to ask Copilot to fix the error.

You can also make general requests to improve or refactor your code.

* `how would you improve the code in this file`
* `translate this code to C#`
* `add error handling to the main function`

## Write tests

Use the `/tests` slash command to ask Copilot to write tests for the active file or selected code. For example:

* `/tests`
* `/tests using the Jest framework`
* `/tests ensure the function rejects an empty list`

The `/tests` slash command writes tests for existing code. If you prefer to write tests before writing code (test driven development), omit the `/tests` command. For example:

* `Add tests for a JavaScript function that should sum a list of integers`

{% endeclipse %}
