# Using agent mode in your IDE

## Introduction

In agent mode, Copilot takes a high-level task, decides which files to change, makes the edits, and runs commands as needed, iterating until the task is done. You stay in control: you review the changes, and by default you approve commands before they run. Your administrator, or your own editor settings, may allow some commands to run automatically.

Agent mode is available in Visual Studio Code, Visual Studio, JetBrains IDEs, Xcode, and Eclipse. The steps differ by editor, so click the tabs above for instructions for your IDE.

For how to open Copilot Chat and choose between the available modes, see [Chat In Ide](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-in-ide).





{% vscode %}

Use agent mode when you have a specific task in mind and want to enable Copilot to autonomously edit your code. In agent mode, Copilot determines which files to make changes to, offers code changes and terminal commands to complete the task, and iterates to remediate issues until the original task is complete.

Agent mode is best suited to use cases where:
* Your task is complex, and involves multiple steps, iterations, and error handling.
* You want Copilot to determine the necessary steps to take to complete the task.
* The task requires Copilot to integrate with external applications, such as an MCP server.


## Using agents

1. If the chat view is not already displayed, select **Open Chat** from the Copilot Chat menu.
1. At the bottom of the chat view, ensure **Agent** is selected from the agents dropdown.
1. Submit a prompt. In response to your prompt, Copilot streams the edits in the editor, updates the working set, and runs terminal commands if necessary.
1. Review and iterate on changes or run a code review.

You can also [click this link](vscode://GitHub.Copilot-Chat/chat?mode=agent&ref_product=copilot&ref_type=engagement&ref_style=text) to go directly to agent mode in VS Code. 

> [!NOTE]
> If you don’t see the **Agent** option in the mode selector, your enterprise or organization administrator may have disabled agent mode for your IDE.

For more information, see [Chat overview](https://aka.ms/vscode-copilot-agent) in the Visual Studio Code documentation.

When you use agent mode, each prompt you enter consumes GitHub AI Credits.


## Steering an agent while it works

Agent mode is interactive. While Copilot is working, you can:

* Submit a follow-up prompt to redirect the agent before it finishes.
* Confirm or reject each terminal command the agent proposes, unless it has been configured to run automatically.
* Review streamed edits as they appear and undo any you do not want.

If a task is large or ambiguous, consider drafting an implementation plan first. See [Use Plan Mode](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-plan-mode).

## Choosing a model or a custom agent

Before you submit a task, you can change which AI model the agent uses, or select a custom agent tailored to a specific kind of work.

* To change the model, see [Change The Chat Model](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/change-the-chat-model).
* To select a custom agent, see [Use Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-custom-agents).

## Extending agent mode with tools

Much of agent mode's capability comes from the tools it can call. You can extend the agent with Model Context Protocol (MCP) servers, which add tools for working with external systems and with GitHub itself.

* To set up MCP servers in your IDE, see [Extend Copilot Chat With MCP](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/extend-copilot-chat-with-mcp).
* To work with GitHub from your editor, see [Use The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/copilot-for-common-tasks/use-the-github-mcp-server).
* For a worked example, see [Enhance Agent Mode With MCP](https://docs.github.com/en/copilot/tutorials/enhance-agent-mode-with-mcp).

To hand a self-contained subtask to a separate agent with its own context, see [Use Subagents](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-subagents).

## Further reading

* [Chat In Ide](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-in-ide)
* [Chat](https://docs.github.com/en/copilot/concepts/chat)

{% endvscode %}





{% visualstudio %}

Use agent mode when you have a specific task in mind and want to enable Copilot to autonomously edit your code. In agent mode, Copilot determines which files to make changes to, offers code changes and terminal commands to complete the task, and iterates to remediate issues until the original task is complete.

Agent mode is available in Visual Studio 17.14 and later.

## Using agent mode

1. In the Visual Studio menu bar, click **View**, then click **GitHub Copilot Chat**.
1. At the bottom of the chat panel, select **Agent** from the mode dropdown.
1. Submit a prompt. In response to your prompt, Copilot streams the edits in the editor, updates the working set, and if necessary, suggests terminal commands to run.
1. Review the changes. If Copilot suggested terminal commands, confirm whether or not Copilot can run them. In response, Copilot iterates and performs additional actions to complete the task in your original prompt.

When you use Copilot agent mode, each prompt you enter consumes GitHub AI Credits.

## Choosing a model

Before you submit a task, you can change which AI model the agent uses. See [Change The Chat Model](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/change-the-chat-model).

## Extending agent mode with tools

You can extend the agent with Model Context Protocol (MCP) servers, which add tools for working with external systems and with GitHub itself.

* To set up MCP servers in your IDE, see [Extend Copilot Chat With MCP](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/extend-copilot-chat-with-mcp).
* To work with GitHub from your editor, see [Use The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/copilot-for-common-tasks/use-the-github-mcp-server).

## Further reading

* [Chat In Ide](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-in-ide)
* [Chat](https://docs.github.com/en/copilot/concepts/chat)

{% endvisualstudio %}





{% jetbrains %}

Use agent mode when you have a specific task in mind and want to enable Copilot to autonomously edit your code. In agent mode, Copilot determines which files to make changes to, offers code changes and terminal commands to complete the task, and iterates to remediate issues until the original task is complete.

Agent mode is best suited to use cases where:
* Your task is complex, and involves multiple steps, iterations, and error handling.
* You want Copilot to determine the necessary steps to take to complete the task.
* The task requires Copilot to integrate with external applications, such as an MCP server.


## Using agent mode

1. To start an edit session using agent mode, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot** in the menu bar, then select **Open GitHub Copilot Chat**.
1. At the top of the chat panel, click the **Agent** tab.
1. Submit a prompt. In response to your prompt, Copilot streams the edits in the editor, updates the working set, and if necessary, suggests terminal commands to run.
1. Review the changes. If Copilot suggested terminal commands, confirm whether or not Copilot can run them. In response, Copilot iterates and performs additional actions to complete the task in your original prompt.

When you use agent mode, each prompt you enter consumes GitHub AI Credits.


## Steering an agent while it works

Agent mode is interactive. While Copilot is working, you can submit a follow-up prompt to redirect the agent, and confirm or reject each terminal command it proposes.

If a task is large or ambiguous, consider drafting an implementation plan first. See [Use Plan Mode](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-plan-mode).

## Choosing a model or a custom agent

Before you submit a task, you can change which AI model the agent uses, or select a custom agent tailored to a specific kind of work.

* To change the model, see [Change The Chat Model](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/change-the-chat-model).
* To select a custom agent, see [Use Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-custom-agents).

## Extending agent mode with tools

You can extend the agent with Model Context Protocol (MCP) servers, which add tools for working with external systems and with GitHub itself.

* To set up MCP servers in your IDE, see [Extend Copilot Chat With MCP](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/extend-copilot-chat-with-mcp).
* To work with GitHub from your editor, see [Use The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/copilot-for-common-tasks/use-the-github-mcp-server).

To hand a self-contained subtask to a separate agent with its own context, see [Use Subagents](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-subagents).

## Further reading

* [Chat In Ide](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-in-ide)
* [Chat](https://docs.github.com/en/copilot/concepts/chat)

{% endjetbrains %}





{% xcode %}

Use agent mode when you have a specific task in mind and want to enable Copilot to autonomously edit your code. In agent mode, Copilot determines which files to make changes to, offers code changes and terminal commands to complete the task, and iterates to remediate issues until the original task is complete.

Agent mode is best suited to use cases where:
* Your task is complex, and involves multiple steps, iterations, and error handling.
* You want Copilot to determine the necessary steps to take to complete the task.
* The task requires Copilot to integrate with external applications, such as an MCP server.


## Using agent mode

1. If it is not already displayed, open the Copilot Chat window by clicking **Editor** in the menu bar, then clicking **GitHub Copilot** then **Open Chat**.
1. At the bottom of the chat panel, select **Agent** from the agents dropdown.
1. Optionally, add relevant files to the _working set_ view to indicate to Copilot which files you want to work on.
1. Submit a prompt. In response to your prompt, Copilot streams the edits in the editor, updates the working set, and if necessary, suggests terminal commands to run.
1. Review the changes. If Copilot suggested terminal commands, confirm whether or not Copilot can run them. In response, Copilot iterates and performs additional actions to complete the task in your original prompt.

When you use agent mode, each prompt you enter consumes GitHub AI Credits.


## Steering an agent while it works

Agent mode is interactive. While Copilot is working, you can submit a follow-up prompt to redirect the agent, and confirm or reject each terminal command it proposes.

If a task is large or ambiguous, consider drafting an implementation plan first. See [Use Plan Mode](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-plan-mode).

## Choosing a model

Before you submit a task, you can change which AI model the agent uses. See [Change The Chat Model](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/change-the-chat-model).

To hand a self-contained subtask to a separate agent with its own context, see [Use Subagents](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-subagents).

## Further reading

* [Chat In Ide](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-in-ide)
* [Chat](https://docs.github.com/en/copilot/concepts/chat)

{% endxcode %}





{% eclipse %}

Use agent mode when you have a specific task in mind and want to enable Copilot to autonomously edit your code. In agent mode, Copilot determines which files to make changes to, offers code changes and terminal commands to complete the task, and iterates to remediate issues until the original task is complete.

Agent mode is best suited to use cases where:
* Your task is complex, and involves multiple steps, iterations, and error handling.
* You want Copilot to determine the necessary steps to take to complete the task.
* The task requires Copilot to integrate with external applications, such as an MCP server.


## Using agent mode

1. Open the Copilot Chat panel by clicking the Copilot icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the status bar at the bottom of Eclipse, then clicking **Open Chat**.
1. At the bottom of the chat panel, select **Agent** from the agents dropdown.
1. Submit a prompt. In response to your prompt, Copilot streams the edits in the editor, updates the working set, and if necessary, suggests terminal commands to run.
1. Review the changes. If Copilot suggested terminal commands, confirm whether or not Copilot can run them. In response, Copilot iterates and performs additional actions to complete the task in your original prompt.

When you use agent mode, each prompt you enter consumes GitHub AI Credits.


## Steering an agent while it works

Agent mode is interactive. While Copilot is working, you can submit a follow-up prompt to redirect the agent, and confirm or reject each terminal command it proposes.

If a task is large or ambiguous, consider drafting an implementation plan first. See [Use Plan Mode](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-plan-mode).

## Choosing a model

Before you submit a task, you can change which AI model the agent uses. See [Change The Chat Model](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/change-the-chat-model).

To hand a self-contained subtask to a separate agent with its own context, see [Use Subagents](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-subagents).

## Further reading

* [Chat In Ide](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-in-ide)
* [Chat](https://docs.github.com/en/copilot/concepts/chat)

{% endeclipse %}
