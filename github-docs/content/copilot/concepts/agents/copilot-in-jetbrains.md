# Using GitHub Copilot in JetBrains IDEs

## Introduction

There are three ways to use GitHub Copilot in JetBrains IDEs: the GitHub Copilot plugin, GitHub Copilot as an agent in JetBrains AI Assistant, and GitHub Copilot CLI in the integrated terminal. Each entry point provides a different set of capabilities depending on how you prefer to work.

## Comparing entry points

| | GitHub Copilot plugin | GitHub Copilot in AI Assistant | Copilot CLI |
|---|---|---|---|
| **Best for** | Comprehensive AI coding workflow | Quick Copilot access without a separate plugin | Terminal-first workflows |
| **Entry point** | Chat panel, inline chat, code suggestions, code review, commit message | Default agent picker, ACP Registry | Terminal or shell |
| **Code completion** | Yes | Not included | Not included |
| **Next edit suggestions** | Yes | Coming soon | Not included |
| **Agentic experience** | Multiple agent harnesses | Copilot as agent via ACP, Default agent picker | Copilot CLI |
| **IDE tools** | Yes | Yes | Not included |
| **Model selection** | Yes | Yes | Yes |
| **Inline chat** | Yes | Not included | Not included |
| **Code review** | Yes | Not included | Not included |
| **Commit message generation** | Yes | Not included | Not included |
| **Subscription** | GitHub Copilot | GitHub Copilot | GitHub Copilot |

## GitHub Copilot plugin

The GitHub Copilot plugin for JetBrains IDEs is the most comprehensive way to use Copilot and is the recommended choice. 

The plugin is transitioning from its local agent harness to Copilot CLI as the default agent harness, which brings faster feature parity and higher-quality results. For more information, see [Copilot CLI is becoming the default agent harness in GitHub Copilot for JetBrains](https://devblogs.microsoft.com/java/github-copilot-for-jetbrains-is-moving-to-copilot-cli-as-the-default-agent-harness/). For installation instructions, see [Install Copilot Extension](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension).

* **Code completion and next edit suggestions**: Copilot suggests completions as you type and proactively predicts your next intended edit.
* **Multiple agent harnesses**: The plugin ships its own agent experience and partners with other agent providers, giving you multiple interaction modes.
* **Full model and feature support**: All Copilot Chat models, code completion modes, and bring-your-own-key features are available as they are released.
* **Inline chat**: Explain, refactor, document, or generate code directly in the editor gutter, without switching to a separate panel.
* **Code review**: Copilot analyzes your changes and surfaces actionable feedback, flagging potential bugs, style violations, and logic issues.
* **Commit message generation**: Copilot inspects your staged changes and generates a clear, conventional commit message.

## GitHub Copilot in JetBrains AI Assistant

> [!NOTE]
> GitHub Copilot in AI Assistant provides chat and agent capabilities only. It does not include code completion, next edit suggestions, inline chat, code review, or commit message generation.

GitHub Copilot is available as a native agent in JetBrains AI Assistant through the Agent Client Protocol (ACP). The ACP is an open standard for connecting AI agents to the IDE. If you have a valid Copilot subscription, Copilot appears in the AI Assistant agent picker automatically.

This integration is designed for developers who prefer to work inside the AI Assistant chat panel or who want Copilot available without installing an additional plugin.

* **No updates required**: The Copilot agent is bundled directly with AI Assistant and kept current automatically. No separate plugin to install, update, or maintain.
* **Chat-centric workflow**: Ideal for multi-step reasoning tasks—describe a goal, let Copilot plan and propose changes, and iterate conversationally.
* **Model selection**: Switch Copilot models or adjust reasoning depth without leaving the chat panel.

### Using GitHub Copilot in AI Assistant

1. Open JetBrains AI Assistant by pressing <kbd>Alt</kbd>+<kbd>A</kbd> (Windows/Linux) or <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd> (macOS), or click the AI Assistant icon in the right tool window.
1. In the agent picker dropdown at the top of the chat panel, select **GitHub Copilot**.
1. Enter a prompt and start chatting.

### The ACP Registry

The ACP Registry is the catalog of agents that AI Assistant knows about. When the IDE starts, it consults the registry to discover which agents are available. GitHub Copilot's ACP entry is part of the default registry, so Copilot appears in your agent list automatically when you have a valid subscription and the required credentials in place.

For more information about ACP, see the [ACP documentation](https://agentclientprotocol.com/get-started/introduction). For technical details on running Copilot CLI as an ACP server, see [Acp Server](https://docs.github.com/en/copilot/reference/copilot-cli-reference/acp-server).

## GitHub Copilot CLI in the integrated terminal

GitHub Copilot CLI brings Copilot's capabilities directly to the terminal. It is optimized for command-line workflows and can run on macOS, Linux, or Windows.

## Further reading

* [Chat In Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide)
* [Install Copilot Extension](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension)
* [Change The Chat Model](https://docs.github.com/en/copilot/how-tos/use-ai-models/change-the-chat-model)
