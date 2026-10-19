# GitHub Copilot in IDEs

GitHub Copilot integrates with supported IDEs to help you throughout the development process. You can work alongside Copilot in your editor, or delegate tasks to agents and review their results.

The available features and entry points vary by IDE. For a detailed comparison, see [Copilot Feature Matrix](https://docs.github.com/en/copilot/reference/copilot-feature-matrix).

## Copilot in VS Code

Copilot in VS Code brings AI assistance and agent-driven development into the environment where you write, run, debug, and review code.

### Benefits of using Copilot in VS Code

* **Stay in your development environment.** Work with agents alongside your editor, terminal, tests, source control, and debugger, so you can inspect and validate results with the tools you already use.
* **Choose how much work to delegate.** Move between code suggestions, focused edits, interactive chat, planning, and autonomous agent work as your task evolves.
* **Work on multiple tasks.** Run isolated agent sessions in parallel and use the Agents window to follow progress across projects.
* **Use the environment your project needs.** Run agents where your code and tools live, whether on your machine or in a connected remote environment, so they work with the right operating system, runtimes, and dependencies.
* **Choose your models and tools.** Use models provided with Copilot, bring your own API key, or add models and tools through VS Code extensions.

### What you can do with Copilot in VS Code

Choose the most appropriate workflow for your task, from getting focused assistance in the editor to delegating work to agents.

* **Code suggestions:** Get suggestions directly in the editor as you work. See [Get Ide Code Suggestions](https://docs.github.com/en/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions).
* **Chat:** Ask questions about your codebase, compare approaches, and plan complex changes using context from your open files and workspace. Use inline chat for quick help within your code. See [Chat In Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide).
* **Agent mode:** Ask an agent to find relevant code, edit files, run commands, and validate its work, while you review changes and redirect it as it works. See [Use Agent Mode](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode).
* **Parallel agent sessions:** Start, monitor, and review multiple agent sessions across projects from the Agents window. See [Agents window](https://code.visualstudio.com/docs/agents/run/agents-window) in the VS Code documentation.
* **Cloud agent sessions:** Manage Copilot cloud agent sessions directly from your IDE. See [Use Cloud Agent In Your Ide](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-cloud-agent-in-your-ide).
* **Models and agent harnesses:** Choose a model based on the speed, reasoning, and cost your task needs. Use models included with Copilot, bring your own key (BYOK), or install an extension that provides more models. You can also choose an agent harness. See [Bring Your Own Key](https://docs.github.com/en/copilot/concepts/models/bring-your-own-key) and [Agent harnesses](https://code.visualstudio.com/docs/agents/run/agent-harnesses) in the VS Code documentation.
* **Local, remote, and containerized environments:** Run agents on your machine, in a Dev Container (Experimental), or on a remote machine over SSH or a dev tunnel. You can check progress from the Agents window, including in a browser on another device.
* **Customizations:** Add project-specific context and capabilities with custom instructions, agent skills, hooks, Model Context Protocol (MCP) servers, and extensions.
* **Terminal:** Run GitHub Copilot CLI in the integrated terminal for a terminal-first agent experience.

For a full overview, see [Build with AI in VS Code](https://code.visualstudio.com/docs/agents/overview) in the VS Code documentation.

## Using Copilot in other IDEs

For most supported IDEs, the **GitHub Copilot extension or plugin** is the primary entry point. It connects Copilot to your editor and provides the features supported by that IDE. To install the appropriate integration, see [Install Copilot Extension](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension).

You can also run GitHub Copilot CLI in an IDE's integrated terminal if the terminal environment meets the requirements for Copilot CLI. Integration between CLI sessions and the IDE varies.

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
