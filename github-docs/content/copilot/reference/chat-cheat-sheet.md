# GitHub Copilot Chat cheat sheet

{% webui %}

This version of this article is for Copilot on the GitHub website. For other versions of this article, click the tabs above.

## About GitHub Copilot enhancements

You can enhance your experience of Copilot Chat with a variety of commands and options. Finding the right command or option for the task you are working on can help you achieve your goals more efficiently. This cheat sheet provides a quick reference to the most common commands and options for using Copilot Chat.


For information about how to get started with Copilot Chat in the GitHub website, see [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github).

## Mentions

Use `@` mentions in to attach relevant context directly to your conversations. Type `@` in the chat prompt box to display a list of items you can attach, such as:

* Discussions
* Extensions
* Files
* Issues
* Pull requests
* Repositories

## Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by the command name.

Available slash commands may vary, depending on your environment and the context of your chat. To view a list of currently available slash commands, type `/` in the chat prompt box of your current environment. Below is a list of some of the most common slash commands for using Copilot Chat.

| Command | Description |
| --- | --- |
| `/clear` | Clear conversation. |
| `/delete` | Delete a conversation. |
| `/new` | Start a new conversation |
| `/rename` | Rename a conversation. |

## MCP skills

Below is a list of the MCP skills that are currently available in Copilot Chat in GitHub, and example prompts you can use to invoke them. You do not need to use the MCP skill name in your prompt; you can simply ask Copilot Chat to perform the task.

| Skill | Example prompt |
| --- | --- |
| `create_branch`             | Create a new branch called [BRANCH-NAME] in the repository [USERNAME/REPO-NAME].                                                                 |
| `create_or_update_file`     | Add a new file named `hello-world.md` to my [BRANCH-NAME] of [USERNAME/REPO-NAME] with the content: "Hello, world! This file was created from Copilot Chat in GitHub!"         |
| `push_files`                | Push the files `test.md` with the content "This is a test file" and `test-again.md` with the content "This is another test file" to the [BRANCH-NAME] in [USERNAME/REPO-NAME] |
| `update_pull_request_branch`| Update the branch for pull request [PR-number] in [USERNAME/REPO-NAME] with the latest changes from the base branch.                                          |
| `merge_pull_request`        | Merge pull request [PR-Number] in [USERNAME/REPO-NAME]                                                                                                                      |
| `get_me`                    | Tell me about myself.                                                                                                                                 |
| `search_users`              | Search for users with the name "Mona Octocat"                                                                                       |

For more information about using MCP skills in Copilot Chat, see [Use The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/use-the-github-mcp-server).

{% endwebui %}

{% vscode %}

This version of this article is for Copilot in Visual Studio Code. For other versions of this article, click the tabs above.

## About GitHub Copilot enhancements

You can enhance your experience of Copilot Chat with a variety of commands and options. Finding the right command or option for the task you are working on can help you achieve your goals more efficiently. This cheat sheet provides a quick reference to the most common commands and options for using Copilot Chat.


For information about how to get started with Copilot Chat in Visual Studio Code, see [Chat In Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide).

## Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by the command name.

Available slash commands may vary, depending on your environment and the context of your chat. To view a list of currently available slash commands, type `/` in the chat prompt box of your current environment. Below is a list of some of the most common slash commands for using Copilot Chat.

| Command | Description |
| --- | --- |
| `/clear` | Start a new chat session. |
| `/explain` | Explain how the code in your active editor works. |
| `/fix` | Propose a fix for problems in the selected code. |
| `/fixTestFailure` | Find and fix a failing test. |
| `/help` | Quick reference and basics of using GitHub Copilot. |
| `/new` | Create a new project. |
| `/tests` | Generate unit tests for the selected code. |

## Chat variables

Use chat variables to include specific context in your prompt. To use a chat variable, type `#` in the chat prompt box, followed by a chat variable.

| Variable | Description |
| --- | --- |
| `#block` | Includes the current block of code in the prompt. |
| `#class` | Includes the current class in the prompt. |
| `#comment` | Includes the current comment in the prompt. |
| `#file` | Includes the current file's content in the prompt. |
| `#function` | Includes the current function or method in the prompt. |
| `#line` | Includes the current line of code in the prompt. |
| `#path` | Includes the file path in the prompt. |
| `#project` | Includes the project context in the prompt. |
| `#selection` | Includes the currently selected text in the prompt. |
| `#sym` | Includes the current symbol in the prompt. |

## Chat participants

Chat participants are like domain experts who have a specialty that they can help you with. You can specify a chat participant by typing `@` in the chat prompt box, followed by a chat participant name. To see all available chat participants, type `@` in the chat prompt box.

Below is a list of some of the most common chat participants for using Copilot Chat.

| Variable    | Description |
|--------------|----------------------------------------------------------------------------------------------|
| `@azure`     | Has context about Azure services and how to use, deploy and manage them. Use `@azure` when you want help with Azure. The `@azure` chat participant is currently in public preview and is subject to change. |
| `@github`    | Allows you to use GitHub-specific Copilot skills. See [Chat In Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide#using-github-skills-for-copilot). |
| `@terminal`  | Has context about the Visual Studio Code terminal shell and its contents. Use `@terminal` when you want help creating or debugging terminal commands. |
| `@vscode`    | Has context about Visual Studio Code commands and features. Use `@vscode` when you want help with Visual Studio Code. |

{% endvscode %}

{% visualstudio %}

This version of this article is for Copilot in Visual Studio. For other versions of this article, click the tabs above.

## About GitHub Copilot enhancements

You can enhance your experience of Copilot Chat with a variety of commands and options. Finding the right command or option for the task you are working on can help you achieve your goals more efficiently. This cheat sheet provides a quick reference to the most common commands and options for using Copilot Chat.


For information about how to get started with Copilot Chat in Visual Studio, see [Chat In Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide).

## Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by the command name.

Available slash commands may vary, depending on your environment and the context of your chat. To view a list of currently available slash commands, type `/` in the chat prompt box of your current environment. Below is a list of some of the most common slash commands for using Copilot Chat.

| Command | Description |
| --- | --- |
| `/doc` | Add documentation comment for this symbol. |
| `/explain` | Explain how the code in your active editor works. |
| `/fix` | Propose a fix for problems in the selected code. |
| `/help` | Quick reference and basics of using GitHub Copilot. |
| `/optimize` | Analyze and improve running time of the selected code. |
| `/tests` | Generate unit tests for the selected code. |

## References

By default, Copilot Chat will reference the file that you have open or the code that you have selected. You can also use # followed by a file name, file name and line numbers, or solution to reference a specific file, lines, or solution.

| Example | Description |
| --- | --- |
| `Where are the tests in #MyFile.cs?` | References a specific file |
| `How are these files related #MyFile.cs #MyFile2.cs` | References multiple files |
| `Explain this function #MyFile.cs: 66-72?` | References specific lines in a file |
| `Is there a delete method in this #solution?` | References the current file |

{% endvisualstudio %}

{% jetbrains %}

This version of this article is for Copilot in JetBrains. For other versions of this article, click the tabs above.

## About GitHub Copilot enhancements

You can enhance your experience of Copilot Chat with a variety of commands and options. Finding the right command or option for the task you are working on can help you achieve your goals more efficiently. This cheat sheet provides a quick reference to the most common commands and options for using Copilot Chat.


For information about how to get started with Copilot Chat in JetBrains, see [Chat In Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide).

## Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by the command name.

Available slash commands may vary, depending on your environment and the context of your chat. To view a list of currently available slash commands, type `/` in the chat prompt box of your current environment. Below is a list of some of the most common slash commands for using Copilot Chat.

If you run interactive Copilot CLI sessions in JetBrains, you can also use CLI-specific slash commands from that session.

| Command | Description |
| --- | --- |
| `/chronicle` | Review and analyze your session history. Available subcommands: `standup`, `tips`, `search`, and `improve`. For more details on these subcommands, see [Chronicle](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/chronicle). |
| `/compact` | Manually compress the current Copilot CLI session context to keep a long-running session manageable. |
| `/explain` | Explain how the code in your active editor works. |
| `/fix` | Propose a fix for problems in the selected code. |
| `/help` | Quick reference and basics of using GitHub Copilot. |
| `/remote` | (Copilot CLI session only) Enable or manage remote control for the current session so you can access it from GitHub.com or GitHub Mobile. |
| `/tests` | Generate unit tests for the selected code. |

{% endjetbrains %}

{% xcode %}

This version of this article is for Copilot in Xcode. For other versions of this article, click the tabs above.

## About GitHub Copilot enhancements

You can enhance your experience of Copilot Chat with a variety of commands and options. Finding the right command or option for the task you are working on can help you achieve your goals more efficiently. This cheat sheet provides a quick reference to the most common commands and options for using Copilot Chat.


For information about how to get started with Copilot Chat in Xcode, see [Chat In Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide).

## Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by the command name.

Available slash commands may vary, depending on your environment and the context of your chat. To view a list of currently available slash commands, type `/` in the chat prompt box of your current environment. Below is a list of the slash commands for using Copilot Chat.

| Command     | Description                                        |
|-------------|----------------------------------------------------|
| `/doc`      | Generate documentation for this symbol.            |
| `/explain`  | Provide an explanation for the selected code.      |
| `/fix`      | Suggest fixes for code errors and typos.           |
| `/simplify` | Simplify the current code selection.               |
| `/tests`    | Create a unit test for the current code selection. |

{% endxcode %}
