# Using plan mode in your IDE

## Introduction

Plan mode helps you to create detailed implementation plans before executing them. This ensures that all requirements are considered and addressed before any code changes are made. The plan agent does not make any code changes until the plan is reviewed and approved by you. Once approved, you can hand off the plan to the default agent or save it for further refinement, review, or team discussions.

The plan agent is designed to:

* Research the task comprehensively using read-only tools and codebase analysis to identify requirements and constraints.
* Break down the task into manageable, actionable steps and include open questions about ambiguous requirements.
* Present a concise plan draft, based on a standardized plan format, for user review and iteration.


Plan mode is available in Visual Studio Code, JetBrains IDEs, Xcode, and Eclipse. It is not currently available in Visual Studio. Click the tabs above for instructions for your editor.

To run a task without planning it first, see [Use Agent Mode](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode).





{% vscode %}

## Using the plan agent

1. If the chat view is not already displayed, select **Open Chat** from the Copilot Chat menu.
1. At the bottom of the chat view, select **Plan** from the agents dropdown.
1. Type a prompt that describes a task, such as adding a feature to an existing application, refactoring code, fixing a bug, or creating an initial version of a new application.

   For example: `Create a simple to-do web app with HTML, CSS, and JS files.`

   After a few moments, the plan agent outputs a plan in the chat view. The plan provides a high-level summary and a breakdown of steps, including any open questions for clarification.

1. Review the plan and answer any questions the agent has asked.

   You can iterate multiple times to clarify requirements, adjust scope, or answer questions.

1. Once the plan is complete you can:

   * Click **Start Implementation** to switch Copilot Chat to agent mode and start an agent session to implement the required changes, based on the implementation plan.
   * Click **Open in Editor** to switch Copilot Chat to agent mode and start an agent session that generates Markdown, in a tab of your editor, with the details of the implementation plan. You can start to work through the plan yourself, or save the plan as a Markdown file for later use.


For more information, see [Planning with agents in VS Code](https://code.visualstudio.com/docs/copilot/agents/planning) in the Visual Studio Code documentation.

## Further reading

* [Use Agent Mode](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode)
* [Chat In Ide](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-in-ide)

{% endvscode %}





{% jetbrains %}

## Using plan mode

1. If it is not already displayed, open the Copilot Chat panel by clicking the **GitHub Copilot Chat** icon at the right side of the JetBrains IDE window.
1. At the bottom of the Copilot Chat panel, select **Plan** from the agents dropdown.
1. Type a prompt that describes a task, such as adding a feature to an existing application, refactoring code, fixing a bug, or creating an initial version of a new application.

   For example: `Create a simple to-do web app with HTML, CSS, and JS files.`

1. Submit the prompt.

   After a few moments, the plan agent outputs a plan in the chat panel. The plan provides a high-level summary and a breakdown of steps, including any open questions for clarification.

1. Review the plan and answer any questions the agent has asked.

   You can iterate multiple times to clarify requirements, adjust scope, or answer questions.

1. Once the plan is complete you can:

   * Click **Start Implementation** to switch Copilot Chat to agent mode and start an agent session to implement the required changes, based on the implementation plan.
   * Click **Open in Editor** to switch Copilot Chat to agent mode and start an agent session that generates Markdown, in a tab of your editor, with the details of the implementation plan. You can start to work through the plan yourself, or save the plan as a Markdown file for later use.


## Further reading

* [Use Agent Mode](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode)
* [Chat In Ide](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-in-ide)

{% endjetbrains %}





{% xcode %}

> [!NOTE]
> Plan mode is currently in public preview and subject to change.

## Using plan mode

1. If it is not already displayed, open the Copilot Chat window by clicking **Editor** in the menu bar, then clicking **GitHub Copilot** then **Open Chat**.
1. At the bottom of the Copilot Chat window, select **Plan** from the agents dropdown.
1. Type a prompt that describes a task, such as adding a feature to an existing application, refactoring code, fixing a bug, or creating an initial version of a new application.

   For example: `Create a simple to-do app with Swift files.`

1. Submit the prompt.

   After a few moments, the plan agent outputs a plan in the chat panel. The plan provides a high-level summary and a breakdown of steps, including any open questions for clarification.

1. Review the plan and answer any questions the agent has asked.

   You can iterate multiple times to clarify requirements, adjust scope, or answer questions.

1. Once the plan is complete you can:

   * Click **Start Implementation** to switch Copilot Chat to agent mode and start an agent session to implement the required changes, based on the implementation plan.
   * Click **Open in Editor** to switch Copilot Chat to agent mode and start an agent session that generates Markdown, in a tab of your editor, with the details of the implementation plan. You can start to work through the plan yourself, or save the plan as a Markdown file for later use.


## Further reading

* [Use Agent Mode](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode)
* [Chat In Ide](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-in-ide)

{% endxcode %}





{% eclipse %}

> [!NOTE]
> Plan mode is currently in public preview and subject to change.

## Using plan mode

1. If it is not already displayed, open the Copilot Chat panel by clicking the Copilot icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the status bar at the bottom of Eclipse, then clicking **Open Chat**.
1. At the bottom of the chat panel, select **Plan** from the agents dropdown.
1. Type a prompt that describes a task, such as adding a feature to an existing application, refactoring code, fixing a bug, or creating an initial version of a new application.

   For example: `Create a simple to-do app using JavaFX.`

1. Submit the prompt.

   After a few moments, the plan agent outputs a plan in the chat panel. The plan provides a high-level summary and a breakdown of steps, including any open questions for clarification.

1. Review the plan and answer any questions the agent has asked.

   You can iterate multiple times to clarify requirements, adjust scope, or answer questions.

1. Once the plan is complete you can:

   * Click **Start Implementation** to switch Copilot Chat to agent mode and start an agent session to implement the required changes, based on the implementation plan.
   * Click **Open in Editor** to switch Copilot Chat to agent mode and start an agent session that generates Markdown, in a tab of your editor, with the details of the implementation plan. You can start to work through the plan yourself, or save the plan as a Markdown file for later use.


## Further reading

* [Use Agent Mode](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode)
* [Chat In Ide](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-in-ide)

{% endeclipse %}
