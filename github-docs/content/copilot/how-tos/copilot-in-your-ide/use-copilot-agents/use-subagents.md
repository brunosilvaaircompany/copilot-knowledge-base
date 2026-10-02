# Using subagents in your IDE

## Introduction

You can use subagents to delegate tasks to an isolated agent with its own context window within your chat session. The subagent operates independently without pausing for user feedback and returns the final result to the main chat session. 

Subagents are best suited for situations where:
* You want to delegate complex, multi-step tasks like research or analysis without interrupting your main session.
* You need to process large amounts of information or multiple documents that would clutter your primary context window.
* You want to explore different approaches or perspectives independently without mixing contexts together.

Subagents use the same tools and AI model as the main session, but they cannot create other subagents. 

Subagents are available in Visual Studio Code, JetBrains IDEs, Xcode, and Eclipse. They are not currently available in Visual Studio. The steps to enable and invoke them differ by editor, so click the tabs above for instructions for your IDE.

For the agent session that subagents are delegated from, see [Use Agent Mode](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode).





{% vscode %}

## Enabling subagents

1. In the Copilot Chat window, click the tools icon.
1. Enable the `runSubagent` tool.

If you use custom prompt files or custom agents, ensure you specify the `runSubagent` tool in the `tools` frontmatter property. See [Create Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents#configuring-an-agent-profile), and [Use prompt files in VS Code](https://code.visualstudio.com/docs/copilot/customization/prompt-files) in the Visual Studio Code documentation.

## Invoking subagents

Subagents can be invoked in different ways:

* **Automatic delegation**. Copilot will analyze the description of your request, the description field of your configured custom agents, and the current context and available tools to automatically choose a subagent. For example, this prompt would automatically delegate the task to a **refactor-specialist** custom agent:

   ```text
   Suggest ways to refactor this legacy code.
   ```

* **Direct invocation**. You can directly call the subagent in your prompt:

   ```text
   Use the testing subagent to write unit tests for the authentication module.
   ```
* **Calling the #runSubagent tool.**

   ```text
   Evaluate the #file:databaseSchema using #runSubagent and generate an optimized data-migration plan.
   ```

When the subagent completes its task, its results appear back in the main chat session, ready for follow-up questions or next steps.

## Further reading

* [Use Agent Mode](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode)
* [Customization Cheat Sheet](https://docs.github.com/en/copilot/reference/customization-cheat-sheet)

{% endvscode %}





{% jetbrains %}

To use subagents, you **must have custom agents configured in your environment**. See [Use Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-custom-agents).

## Enabling subagents

1. Click **Tools** in the menu bar, then click **GitHub Copilot**, then **Edit Settings**.
1. In the popup menu, click **Chat**, then click the **Enable Subagent** checkbox.

## Invoking subagents

Subagents can be invoked in different ways:

* **Automatic delegation**. Copilot will analyze the description of your request, the description field of your configured custom agents, and the current context and available tools to automatically choose a subagent. For example, this prompt would automatically delegate the task to a **refactor-specialist** custom agent:

   ```text
   Suggest ways to refactor this legacy code.
   ```

* **Direct invocation**. You can directly call the subagent in your prompt:

   ```text
   Use the testing subagent to write unit tests for the authentication module.
   ```

When the subagent completes its task, its results appear back in the main chat session, ready for follow-up questions or next steps.

## Further reading

* [Use Agent Mode](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode)
* [Customization Cheat Sheet](https://docs.github.com/en/copilot/reference/customization-cheat-sheet)

{% endjetbrains %}





{% xcode %}

To use subagents, you **must have custom agents configured in your environment**. See [Use Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-custom-agents).

## Enabling subagents

1. Click **Editor** in the menu bar, then click **GitHub Copilot** then **Open GitHub Copilot for Xcode Settings**.
1. Click **Advanced** in the chat panel, then under **Chat Settings** click the **Enable Subagents** toggle.

## Invoking subagents

Subagents can be invoked in different ways:

* **Automatic delegation**. Copilot will analyze the description of your request, the description field of your configured custom agents, and the current context and available tools to automatically choose a subagent. For example, this prompt would automatically delegate the task to a **refactor-specialist** custom agent:

   ```text
   Suggest ways to refactor this legacy code.
   ```

* **Direct invocation**. You can directly call the subagent in your prompt:

   ```text
   Use the testing subagent to write unit tests for the authentication module.
   ```

When the subagent completes its task, its results appear back in the main chat session, ready for follow-up questions or next steps.

## Further reading

* [Use Agent Mode](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode)
* [Customization Cheat Sheet](https://docs.github.com/en/copilot/reference/customization-cheat-sheet)

{% endxcode %}





{% eclipse %}

To use subagents, you **must have custom agents configured in your environment**. See [Use Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-custom-agents).

## Enabling subagents

1. Click the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}** icon in the status bar.
1. In the popup menu, click **Edit Preferences**.
1. Under **Chat**, click the **Enable sub-agent** check box.

## Invoking subagents

Subagents can be invoked in different ways:

* **Automatic delegation**. Copilot will analyze the description of your request, the description field of your configured custom agents, and the current context and available tools to automatically choose a subagent. For example, this prompt would automatically delegate the task to a **refactor-specialist** custom agent:

   ```text
   Suggest ways to refactor this legacy code.
   ```

* **Direct invocation**. You can directly call the subagent in your prompt:

   ```text
   Use the testing subagent to write unit tests for the authentication module.
   ```

When the subagent completes its task, its results appear back in the main chat session, ready for follow-up questions or next steps.

## Further reading

* [Use Agent Mode](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode)
* [Customization Cheat Sheet](https://docs.github.com/en/copilot/reference/customization-cheat-sheet)

{% endeclipse %}
