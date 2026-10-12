# GitHub Copilot in IDEs

GitHub Copilot integrates with supported IDEs to help you throughout the development process. Copilot can explain concepts, complete code, propose edits, and validate files with agent mode.

The available features and entry points vary by IDE. For a detailed comparison, see [Copilot Feature Matrix](https://docs.github.com/en/copilot/reference/copilot-feature-matrix).

## How Copilot helps in your IDE

You can work with Copilot in three main ways:

* **Code suggestions** help you write and edit code without leaving the editor.
* **Chat** lets you ask questions, explain or refactor code, generate tests, and explore possible solutions.
* **Agentic experiences** can plan and complete multi-step tasks by reading files, editing code, and running commands in your local development environment.

These experiences complement each other. For example, you might use chat to understand an unfamiliar codebase, ask an agent to implement a change across several files, and use inline suggestions to refine the result.

## Code suggestions

Copilot can suggest code directly in the editor as you work. Depending on your IDE, these suggestions can include inline suggestions and next edit suggestions.

### Inline suggestions

Inline suggestions appear as dimmed text at your cursor position. Copilot uses the code around your cursor and other available context to predict what you are likely to write next.

Suggestions can complete part of a line, an entire line, or a larger block of code. You can also write a natural-language comment describing the code you want, then let Copilot suggest an implementation.

You remain responsible for reviewing and testing suggested code before using it.

### Next edit suggestions

Next edit suggestions predict both where you are likely to make your next change and what that change could be. They are based on the edits you are currently making and can help you apply related changes elsewhere in a file.

For example, after you rename a method or change a data structure, Copilot might suggest updating another location affected by that change.

Availability and configuration vary by IDE. For instructions on using inline and next edit suggestions, see [Get Ide Code Suggestions](https://docs.github.com/en/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions).

GitHub Copilot provides suggestions for numerous languages and a wide variety of frameworks, but works especially well for Python, JavaScript, TypeScript, Ruby, Go, C# and C++. GitHub Copilot can also assist in query generation for databases, generating suggestions for APIs and frameworks, and can help with infrastructure as code development.


## Chat and agentic experiences

GitHub Copilot Chat provides a conversational interface in your IDE. Because chat can use context from your project, you can ask questions about selected code, open files, or your wider codebase.

You can use chat to:

* Explain unfamiliar code.
* Suggest fixes for bugs.
* Refactor or document code.
* Generate tests.
* Compare implementation approaches.
* Answer questions about programming languages and development tools.

For larger tasks, an agentic experience can break your request into steps and use tools to complete the work. Depending on your IDE and configuration, an agent can inspect your project, edit multiple files, run terminal commands, and respond to errors encountered while working.

Agentic changes are made in your local development environment. Review the proposed changes and the output of any commands before accepting the result.

For instructions on using chat and agents, see [Chat In Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide).

## Choosing an entry point

For most IDEs, the **GitHub Copilot extension or plugin** is the primary entry point. It connects Copilot directly to your editor and provides the features supported by that IDE. You can install the appropriate integration by following [Install Copilot Extension](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension).

You can also run **GitHub Copilot CLI** in an IDE's integrated terminal if the terminal environment meets the requirements for Copilot CLI. Integration between CLI sessions and the IDE varies.

### Entry points in JetBrains IDEs

In JetBrains IDEs, there are three primary entry points for accessing Copilot to choose from: the GitHub Copilot plugin, the JetBrains AI Assistant, or GitHub Copilot CLI in the integrated terminal.

| Entry point | Best for | Main capabilities |
| --- | --- | --- |
| **GitHub Copilot plugin** | A complete AI-assisted development workflow | Inline and next edit suggestions, chat, agentic features, inline chat, code review, and commit message generation |
| **Copilot in JetBrains AI Assistant** | Using chat and an agent without installing a separate Copilot plugin | Chat, agentic tasks, and model selection |
| **Copilot CLI** | Terminal-first development workflows | Agentic assistance and model selection in the integrated terminal |

The GitHub Copilot plugin also supports
multiple agent harnesses and OpenTelemetry monitoring. Enterprise administrators can use managed settings to control plugin marketplaces, MCP servers, OpenTelemetry configuration, and whether users can bypass permission checks. For more information, see [Opentelemetry](https://docs.github.com/en/copilot/concepts/enterprise/opentelemetry) and [Get Started](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started).

The GitHub Copilot plugin provides the broadest integration with the editor and is the recommended entry point when you want code suggestions and the full set of IDE features.

Copilot is also available as an agent in JetBrains AI Assistant through the Agent Client Protocol (ACP). For more information about ACP, see the [ACP documentation](https://agentclientprotocol.com/get-started/introduction). For technical details on running Copilot CLI as an ACP server, see [Acp Server](https://docs.github.com/en/copilot/reference/copilot-cli-reference/acp-server).

## References to matching public code

GitHub Copilot checks suggestions for matches with code in public repositories on GitHub.com. Depending on the policy that applies to your account or organization, matching suggestions can be blocked or shown with information about the matching code.

For inline suggestions, code referencing compares a potential suggestion and approximately 150 characters of surrounding code with an index of public repositories. Code from private repositories and code hosted outside GitHub are not included in the search.

When you accept an inline suggestion that matches public code, Copilot records details such as the matching file URLs and any detected licenses. Only accepted, unchanged suggestions are checked in this way.

When a Copilot Chat response contains code that matches code in a public repository, the response includes a link to information about the match. See [Copilot On GitHub](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github#references-to-matching-public-code).

Typically, matches to public code occur in less than one percent of Copilot suggestions, so you should not expect to see code references for many suggestions.

The public-code index is refreshed periodically, so it may not include recently added code and may contain references to code that has since moved or been deleted.

Code references help you review the source and licensing of matching code so you can decide whether to use, attribute, or remove it. For instructions on viewing references, see [Find Matching Code](https://docs.github.com/en/copilot/how-tos/get-code-suggestions/find-matching-code).
