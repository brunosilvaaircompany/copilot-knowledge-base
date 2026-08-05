# Asking GitHub Copilot questions in your IDE

## Introduction

This guide describes how to use Copilot Chat and agents to automate coding tasks by breaking them into steps, using tools to read files, edit code, and run commands, and self-correcting when something goes wrong. You can also ask general questions about software development, or specific questions about the code in your project. For more information, see [Chat](https://docs.github.com/en/copilot/concepts/chat).

To learn how to use Copilot for agent-driven workflows in a desktop app, see [Getting Started](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started).





{% vscode %}

## Prerequisites

* **Access to GitHub Copilot**. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

* **Latest version of Visual Studio Code**. See the [Visual Studio Code download page](https://code.visualstudio.com/Download?ref_product=copilot&ref_type=engagement&ref_style=text).
* **Sign in to GitHub in Visual Studio Code**. If you experience authentication issues, see [Troubleshoot Common Issues](https://docs.github.com/en/copilot/how-tos/troubleshoot-copilot/troubleshoot-common-issues#authentication-problems-in-visual-studio-code).


If you have access to GitHub Copilot via your organization or enterprise, you won't be able to use GitHub Copilot Chat if your organization owner or enterprise administrator has disabled chat. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).


> [!NOTE]
> If you don’t see the **Agent** option in the mode selector, your enterprise or organization administrator may have disabled agent mode for your IDE.

## Copilot Chat agents

You can use Copilot Chat in the following modes:

* [Agent mode](#agent-mode): to get Copilot to autonomously accomplish a set task.
* [Plan mode](#plan-mode): to get Copilot to create detailed implementation plans to ensure all requirements are met.
* [Ask mode](#ask-mode): to get answers to coding questions and get Copilot to provide code suggestions.

To switch between modes, use the agents dropdown at the bottom of the chat view.

### Agent mode

Use agent mode when you have a specific task in mind and want to enable Copilot to autonomously edit your code. In agent mode, Copilot determines which files to make changes to, offers code changes and terminal commands to complete the task, and iterates to remediate issues until the original task is complete.

Agent mode is best suited to use cases where:
* Your task is complex, and involves multiple steps, iterations, and error handling.
* You want Copilot to determine the necessary steps to take to complete the task.
* The task requires Copilot to integrate with external applications, such as an MCP server.


#### Using agents

1. If the chat view is not already displayed, select **Open Chat** from the Copilot Chat menu.
1. At the bottom of the chat view, ensure **Agent** is selected from the agents dropdown.
1. Submit a prompt. In response to your prompt, Copilot streams the edits in the editor, updates the working set, and if necessary, runs terminal commands, if necessary.
1. Review and iterate on changes or run a code review.

You can also [click this link](vscode://GitHub.Copilot-Chat/chat?mode=agent&ref_product=copilot&ref_type=engagement&ref_style=text) to go directly to agent mode in VS Code. 

For more information, see [Chat overview](https://aka.ms/vscode-copilot-agent) in the Visual Studio Code documentation.

When you use agent mode, each prompt you enter consumes GitHub AI Credits.


#### Using subagents

You can use subagents to delegate tasks to an isolated agent with its own context window within your chat session. The subagent operates independently without pausing for user feedback and returns the final result to the main chat session. 

Subagents are best suited for situations where:
* You want to delegate complex, multi-step tasks like research or analysis without interrupting your main session.
* You need to process large amounts of information or multiple documents that would clutter your primary context window.
* You want to explore different approaches or perspectives independently without mixing contexts together.

Subagents use the same tools and AI model as the main session, but they cannot create other subagents. 

#### Enabling subagents

1. In the Copilot Chat window, click the tools icon.
1. Enable the `runSubagent` tool.

If you use custom prompt files or custom agents, ensure you specify the `runSubagent` tool in the `tools` frontmatter property. See [Create Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents#configuring-an-agent-profile), and [Use prompt files in VS Code](https://code.visualstudio.com/docs/copilot/customization/prompt-files) in the Visual Studio Code documentation.

#### Invoking subagents

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

### Plan mode

Plan mode helps you to create detailed implementation plans before executing them. This ensures that all requirements are considered and addressed before any code changes are made. The plan agent does not make any code changes until the plan is reviewed and approved by you. Once approved, you can hand off the plan to the default agent or save it for further refinement, review, or team discussions.

The plan agent is designed to:

* Research the task comprehensively using read-only tools and codebase analysis to identify requirements and constraints.
* Break down the task into manageable, actionable steps and include open questions about ambiguous requirements.
* Present a concise plan draft, based on a standardized plan format, for user review and iteration.

#### Using the plan agent

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

### Ask mode

Ask mode is optimized for answering questions about your codebase, coding, and general technology concepts. Use ask mode when you want to understand how something works, explore ideas, or get help with coding tasks.

#### Using the ask agent

1. If the chat view is not already displayed, select **Open Chat** from the Copilot Chat menu.
1. At the bottom of the chat view, select **Ask** from the agents dropdown.
1. Type a prompt in the prompt box and press <kbd>Enter</kbd>.

## Submitting prompts

You can give the agent a high-level description of what you want to build and it gets to work. Each task runs inside an agent session, a persistent conversation you can track, pause, resume, or hand off to another agent.

1. To open the chat view, click the chat icon in the title bar of Visual Studio Code. If the chat icon is not displayed, right-click the title bar and make sure that **Command Center** is selected.

   ![Screenshot of the 'Copilot Chat' button, highlighted with a dark orange outline.](/assets/images/help/copilot/vsc-copilot-chat-icon.png)

1. Enter a prompt in the prompt box. For an introduction to the kinds of prompts you can use, see [Get Started With Chat In Your Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/get-started-with-chat-in-your-ide).

1. Evaluate Copilot's response, and make a follow-up request if needed.

   The response may contain text, code blocks, buttons, images, URIs, and file trees. The response often includes interactive elements. For example, the response may include a menu to insert a code block, or a button to invoke a Visual Studio Code command.

   To see the files that Copilot Chat used to generate the response, select the **Used _n_ references** dropdown at the top of the response. The references may include a link to a custom instructions file for your repository. This file contains additional information that is automatically added to all of your chat questions to improve the quality of the responses. For more information, see [Add Repository Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).

## Using keywords in your prompt

You can use special keywords to help Copilot understand your prompt. For examples, see [Get Started With Chat In Your Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/get-started-with-chat-in-your-ide).

### Chat participants

Chat participants are like domain experts who have a specialty that they can help you with.

Copilot Chat can infer relevant chat participants based on your natural language prompt, improving discovery of advanced capabilities without you having to explicitly specify the participant you want to use in your prompt.

> [!NOTE] Automatic inference for chat participants is currently in public preview and is subject to change.

Alternatively, you can manually specify a chat participant to scope your prompt to a specific domain. To do this, type `@` in the chat prompt box, followed by a chat participant name.

For a list of available chat participants, type `@` in the chat prompt box. See also [Chat Cheat Sheet?Tool=Vscode](https://docs.github.com/en/copilot/reference/chat-cheat-sheet?tool=vscode#chat-participants) or [Chat participants](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-participants) in the Visual Studio Code documentation.

### Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by a command.

To see all available slash commands, type `/` in the chat prompt box. See also [Chat Cheat Sheet?Tool=Vscode](https://docs.github.com/en/copilot/reference/chat-cheat-sheet?tool=vscode#slash-commands) or [Slash commands](https://code.visualstudio.com/docs/copilot/reference/copilot-vscode-features#_slash-commands) in the Visual Studio Code documentation.

### Chat variables

Use chat variables to include specific context in your prompt. To use a chat variable, type `#` in the chat prompt box, followed by a chat variable.

To see all available chat variables, type `#` in the chat prompt box. See also [Chat Cheat Sheet?Tool=Vscode](https://docs.github.com/en/copilot/reference/chat-cheat-sheet?tool=vscode#chat-variables).

## Using GitHub skills for Copilot

Copilot's GitHub-specific skills expand the type of information Copilot can provide. To access these skills in Copilot Chat, include `@github` in your question.

When you add `@github` to a question, Copilot dynamically selects an appropriate skill, based on the content of your question. You can also explicitly ask Copilot Chat to use a particular skill. You can do this in two ways:
* Use natural language to ask Copilot Chat to use a skill. For example, `@github Search the web to find the latest GPT model from OpenAI.`
* To specifically invoke a web search you can include the `#web` variable in your question. For example, `@github #web What is the latest LTS of Node.js?`

You can generate a list of currently available skills by asking Copilot: `@github What skills are available?`


## Using Model Context Protocol (MCP) servers

You can use MCP to extend the capabilities of Copilot Chat by integrating it with a wide range of existing tools and services. For additional information, see [MCP](https://docs.github.com/en/copilot/concepts/context/mcp).


## AI models for Copilot Chat

You can change the model Copilot uses to generate responses. You may find that different models perform better, or provide more useful responses, depending on the type of questions you ask. Options include premium models with advanced capabilities.  

## Additional ways to access Copilot Chat

In addition to submitting prompts through the chat view, you can submit prompts in other ways:

* **Quick chat:** To open the quick chat dropdown, enter <kbd>Shift</kbd>+<kbd>Optin</kbd>+<kbd>Command</kbd>+<kbd>L</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>L</kbd> (Windows/Linux).
* **Inline:** To start an inline chat directly in the editor or integrated terminal, enter <kbd>Command</kbd>+<kbd>i</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>i</kbd> (Windows/Linux).
* **Smart actions:** To submit prompts via the context menu, right click in your editor, select **Copilot** in the menu that appears, then select one of the actions. Smart actions can also be accessed via the sparkle icon that sometimes appears when you select a line of code.

See [inline chat](https://code.visualstudio.com/docs/copilot/copilot-chat#_inline-chat), [quick chat](https://code.visualstudio.com/docs/copilot/copilot-chat#_quick-chat), and [chat smart actions](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-smart-actions) in the Visual Studio Code documentation for more details.

## Using images in Copilot Chat

You can attach images and PDFs to your prompts when using a model that supports image input.

Copilot supports the following file types:

* JPEG (`.jpg`, `.jpeg`)
* PNG (`.png`)
* GIF (`.gif`)
* WEBP (`.webp`)
* PDF (`.pdf`)
* HEIC (`.heic`)
* HEIF (`.heif`)


For example, you can attach:

* A screenshot of a code snippet and ask Copilot to explain the code.
* A mockup of the user interface for an application and ask Copilot to generate the code.
* A flowchart and ask Copilot to describe the processes shown in the image.
* A screenshot of a web page and ask Copilot to generate HTML for a similar page.


Image and PDF attachments are available on all Copilot plans and are enabled by default, with no policy required to turn the feature on or off.



### Attaching images to your chat prompt

1. Do one of the following:

   * Copy an image and paste it into the chat view.
   * Drag and drop one or more image file from your operating system's file explorer—or from the Explorer in VS Code—into the chat view.
   * Right-click an image file in the VS Code Explorer and click **Copilot** then **Add File to Chat**.

1. Type your prompt into the chat view to accompany the image. For example, `explain this diagram`, `describe each of these images in detail`, `what does this error message mean`.


## Sharing feedback

To indicate whether a response was helpful, use the thumbs up and thumbs down icons that appear next to the response.

To leave feedback about the GitHub Copilot Chat extension, open an issue in the [microsoft/vscode-copilot-release](https://github.com/microsoft/vscode-copilot-release/issues) repository.

## Further reading

* [Prompt Engineering](https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering)
* [Using Copilot Chat in VS Code](https://code.visualstudio.com/docs/copilot/copilot-chat) in the Visual Studio Code documentation
* [Manage And Track Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents)
* [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github)
* [Chat](https://docs.github.com/en/copilot/responsible-use/chat)
* [GitHub Terms For Additional Products And Features](https://docs.github.com/en/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)
* [GitHub Copilot Trust Center](https://copilot.github.trust.page)
* [GitHub Copilot FAQ](https://github.com/features/copilot#faq)

{% endvscode %}





{% visualstudio %}

## Prerequisites

* **Access to GitHub Copilot**. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

* **Visual Studio 2022 version 17.8 or later**. See [Install Visual Studio](https://learn.microsoft.com/visualstudio/install/install-visual-studio) in the Visual Studio documentation.
  * _For Visual Studio 17.8 and 17.9:_
    * **GitHub Copilot extension**. See [Install GitHub Copilot in Visual Studio](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-install-and-states?ref_product=copilot&ref_type=engagement&ref_style=text) in the Visual Studio documentation.
    * **GitHub Copilot Chat extension**. See [Install GitHub Copilot in Visual Studio](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-install-and-states?ref_product=copilot&ref_type=engagement&ref_style=text) in the Visual Studio documentation.

   _Visual Studio 17.10 and later have the GitHub Copilot and GitHub Copilot Chat extensions built in. You don't need to install them separately._
* **Sign in to GitHub in Visual Studio**. If you experience authentication issues, see [Troubleshoot Common Issues](https://docs.github.com/en/copilot/how-tos/troubleshoot-copilot/troubleshoot-common-issues#authentication-problems-in-visual-studio).

If you have access to GitHub Copilot via your organization or enterprise, you won't be able to use GitHub Copilot Chat if your organization owner or enterprise administrator has disabled chat. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).


## Submitting prompts

You can ask Copilot Chat to give you code suggestions, explain code, generate unit tests, and suggest code fixes.

1. In the Visual Studio menu bar, click **View**, then click **GitHub Copilot Chat**.
1. In the Copilot Chat window, enter a prompt, then press **Enter**. For example prompts, see [Get Started With Chat In Your Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/get-started-with-chat-in-your-ide).
1. Evaluate Copilot's response, and submit a follow up prompt if needed.

   The response often includes interactive elements. For example, the response may include buttons to copy, insert, or preview the result of a code block.

   To see the files that Copilot Chat used to generate the response, click the **References** link below the response. The references may include a link to a custom instructions file for your repository. This file contains additional information that is automatically added to all of your chat questions to improve the quality of the responses. For more information, see [Add Repository Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).

## Using keywords in your prompt

You can use special keywords to help Copilot understand your prompt.

### Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by a command.

To see all available slash commands, type `/` in the chat prompt box. See also [Chat Cheat Sheet?Tool=Vscode](https://docs.github.com/en/copilot/reference/chat-cheat-sheet?tool=vscode#slash-commands) or [Slash commands](https://learn.microsoft.com/visualstudio/ide/copilot-chat-context#slash-commands) in the Visual Studio documentation.

### References

By default, Copilot Chat will reference the file that you have open or the code that you have selected. You can also use `#` followed by a file name, file name and line numbers, or `solution` to reference a specific file, lines, or solution.

See also [Chat Cheat Sheet?Tool=Visualstudio](https://docs.github.com/en/copilot/reference/chat-cheat-sheet?tool=visualstudio#references) or [Reference](https://learn.microsoft.com/visualstudio/ide/copilot-chat-context#reference) in the Visual Studio documentation.

## Using GitHub skills for Copilot (preview)

> [!NOTE]
> The `@github` chat participant is currently in preview, and only available in [Visual Studio 2022 Preview 2](https://visualstudio.microsoft.com/vs/preview/) onwards.

Copilot's GitHub-specific skills expand the type of information Copilot can provide. To access these skills in Copilot Chat in Visual Studio, include `@github` in your question.

When you add `@github` to a question, Copilot dynamically selects an appropriate skill, based on the content of your question. You can also explicitly ask Copilot Chat to use a particular skill. For example, `@github Search the web to find the latest GPT4 model from OpenAI.`

You can generate a list of currently available skills by asking Copilot: `@github What skills are available?`

## Using Model Context Protocol (MCP) servers

You can use MCP to extend the capabilities of Copilot Chat by integrating it with a wide range of existing tools and services. For additional information, see [MCP](https://docs.github.com/en/copilot/concepts/context/mcp).


## AI models for Copilot Chat

You can change the model Copilot uses to generate responses. You may find that different models perform better, or provide more useful responses, depending on the type of questions you ask. Options include premium models with advanced capabilities.  

## Additional ways to access Copilot Chat

In addition to submitting prompts through the chat window, you can submit prompts inline. To start an inline chat, right click in your editor window and select **Ask Copilot**.

See [Ask questions in the inline chat view](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-chat#ask-questions-in-the-inline-chat-view) in the Visual Studio documentation for more details.

## Copilot Edits

> [!NOTE]
> * This feature is currently in public preview and subject to change.
> * Available in Visual Studio 17.14 and later.

Copilot Edits lets you make changes across multiple files from a single Copilot Chat prompt

Use agent mode when you have a specific task in mind and want to enable Copilot to autonomously edit your code. In agent mode, Copilot determines which files to make changes to, offers code changes and terminal commands to complete the task, and iterates to remediate issues until the original task is complete.

### Using agent mode

1. In the Visual Studio menu bar, click **View**, then click **GitHub Copilot Chat**.
1. At the bottom of the chat panel, select **Agent** from the agents dropdown.
1. Submit a prompt. In response to your prompt, Copilot streams the edits in the editor, updates the working set, and if necessary, suggests terminal commands to run.
1. Review the changes. If Copilot suggested terminal commands, confirm whether or not Copilot can run them. In response, Copilot iterates and performs additional actions to complete the task in your original prompt.

When you use Copilot agent mode, each prompt you enter consumes GitHub AI Credits.

## Using images in Copilot Chat

You can attach images and PDFs to your prompts when using a model that supports image input.

Copilot supports the following file types:

* JPEG (`.jpg`, `.jpeg`)
* PNG (`.png`)
* GIF (`.gif`)
* WEBP (`.webp`)
* PDF (`.pdf`)
* HEIC (`.heic`)
* HEIF (`.heif`)


For example, you can attach:

* A screenshot of a code snippet and ask Copilot to explain the code.
* A mockup of the user interface for an application and ask Copilot to generate the code.
* A flowchart and ask Copilot to describe the processes shown in the image.
* A screenshot of a web page and ask Copilot to generate HTML for a similar page.


Image and PDF attachments are available on all Copilot plans and are enabled by default, with no policy required to turn the feature on or off.



### Attaching images to your chat prompt

1. If you see the AI model picker at the bottom right of the chat view, select one of the models that supports adding images to prompts:

1. Do one of the following:

   * Copy an image and paste it into the chat view.
   * Click the paperclip icon at the bottom right of the chat view, click **Upload Image**, browse to the image file you want to attach, select it and click **Open**.

   You can add multiple images if required.

1. Type your prompt into the chat view to accompany the image. For example, `explain this image`, or `describe each of these images in detail`.

## Sharing feedback

To share feedback about Copilot Chat, you can use the **Send feedback** button in Visual Studio. For more information on providing feedback for Visual Studio, see the [Visual Studio Feedback](https://learn.microsoft.com/en-us/visualstudio/ide/how-to-report-a-problem-with-visual-studio?view=vs-2022) documentation.

1. In the top right corner of the Visual Studio window, click the **Send feedback** button.

    ![Screenshot of the share feedback button in Visual Studio.](/assets/images/help/copilot/vs-share-feedback-button.png)

1. Choose the option that best describes your feedback.
    * To report a bug, click **Report a problem**.
    * To request a feature, click **Suggest a feature**.

## Further reading

* [Prompt Engineering](https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering)
* [Using GitHub Copilot Chat in Visual Studio in the Microsoft Learn documentation](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-chat?view=vs-2022#use-copilot-chat-in-visual-studio)
* [Tips to improve GitHub Copilot Chat results in the Microsoft Learn documentation](https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=vs-2022)
* [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github)
* [Chat](https://docs.github.com/en/copilot/responsible-use/chat)
* [GitHub Terms For Additional Products And Features](https://docs.github.com/en/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)
* [GitHub Copilot Trust Center](https://copilot.github.trust.page)
* [GitHub Copilot FAQ](https://github.com/features/copilot#faq)

{% endvisualstudio %}





{% jetbrains %}

## Prerequisites

* **Access to GitHub Copilot**. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

* **Compatible JetBrains IDE**. GitHub Copilot is compatible with the following IDEs:

  * IntelliJ IDEA (Ultimate, Community, Educational)
* Android Studio
* CLion
* Code With Me Guest
* DataGrip
* DataSpell
* GoLand
* JetBrains Client
* MPS
* PhpStorm
* PyCharm (Professional, Community, Educational)
* Rider
* RubyMine
* RustRover
* WebStorm

See the [JetBrains IDEs](https://www.jetbrains.com/products/?ref_product=copilot&ref_type=engagement&ref_style=button) tool finder to download.

* **Latest version of the GitHub Copilot extension**. See the [GitHub Copilot plugin](https://plugins.jetbrains.com/plugin/17718-github-copilot?ref_product=copilot&ref_type=engagement&ref_style=text) in the JetBrains Marketplace. For installation instructions, see [Install Copilot Extension?Tool=Jetbrains](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=jetbrains).
* **Sign in to GitHub in your JetBrains IDE**. For authentication instructions, see [Install Copilot Extension?Tool=Jetbrains](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=jetbrains#installing-the-github-copilot-plugin-in-your-jetbrains-ide).


If you have access to GitHub Copilot via your organization or enterprise, you won't be able to use GitHub Copilot Chat if your organization owner or enterprise administrator has disabled chat. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).


## Copilot Chat agents

The agent picker in the Copilot Chat panel lets you choose which agent drives your conversation. To switch agents, use the Agents dropdown at the bottom of the chat panel.

The following agents are available:

* **Agent mode** (default): Full agentic experience with autonomous task execution.
* **Ask mode**: Get quick answers and assistance without making code changes.
* **Plan mode**: Collaborate on planning before implementation—Copilot analyzes your request and builds a structured plan for your review.
* **Copilot CLI**: Runs Copilot through Copilot CLI, providing a terminal-first agentic experience with support for multiple isolation modes, live session progress, and tool call visibility. For more information, see [About Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli).
* **Custom agents**: Use personalized agents tailored to your specific needs. For more information, see [About Custom Agents](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-custom-agents).

> [!TIP]
> You can also access Copilot from JetBrains AI Assistant without installing the Copilot plugin. For more information, see [Copilot In Jetbrains](https://docs.github.com/en/copilot/concepts/agents/copilot-in-jetbrains).

## Submitting prompts

You can ask Copilot Chat to give you code suggestions, explain code, generate unit tests, and suggest code fixes.

1. Open the Copilot Chat window by clicking the **GitHub Copilot Chat** icon at the right side of the JetBrains IDE window.

   ![Screenshot of the GitHub Copilot Chat icon in the Activity Bar.](/assets/images/help/copilot/jetbrains-copilot-chat-icon.png)

1. Enter a prompt in the prompt box. For example prompts, see [Get Started With Chat In Your Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/get-started-with-chat-in-your-ide).

1. Evaluate Copilot's response, and submit a follow up prompt if needed.

   The response often includes interactive elements. For example, the response may include buttons to copy or insert a code block.

   To see the files that Copilot Chat used to generate the response, click the **References** link below the response. The references may include a link to a custom instructions file for your repository. This file contains additional information that is automatically added to all of your chat questions to improve the quality of the responses. For more information, see [Add Repository Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).

## Supplementing your prompt

You can use slash commands and file references to help Copilot understand your what you are asking it to do.

### Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by a command.

To see all available slash commands, type `/` in the chat prompt box. See also [Chat Cheat Sheet?Tool=Jetbrains](https://docs.github.com/en/copilot/reference/chat-cheat-sheet?tool=jetbrains#slash-commands-2).

### File references

By default, Copilot Chat will reference the file that you have open or the code that you have selected. You can also tell Copilot Chat which files to reference by dragging a file into the chat prompt box. Alternatively, you can right click on a file, select **GitHub Copilot**, then select **Reference File in Chat**.

## Using GitHub skills for Copilot

Copilot's GitHub-specific skills expand the type of information Copilot can provide. To access these skills in Copilot Chat, include `@github` in your question.

When you add `@github` to a question, Copilot dynamically selects an appropriate skill, based on the content of your question. You can also explicitly ask Copilot Chat to use a particular skill. You can do this in two ways:
* Use natural language to ask Copilot Chat to use a skill. For example, `@github Search the web to find the latest GPT model from OpenAI.`
* To specifically invoke a web search you can include the `#web` variable in your question. For example, `@github #web What is the latest LTS of Node.js?`

You can generate a list of currently available skills by asking Copilot: `@github What skills are available?`


## Using Model Context Protocol (MCP) servers

You can use MCP to extend the capabilities of Copilot Chat by integrating it with a wide range of existing tools and services. For additional information, see [MCP](https://docs.github.com/en/copilot/concepts/context/mcp).


## AI models for Copilot Chat

You can change the model Copilot uses to generate responses. You may find that different models perform better, or provide more useful responses, depending on the type of questions you ask. Options include premium models with advanced capabilities.  

## Additional ways to access Copilot Chat

* **Built-in requests**. In addition to submitting prompts through the chat window, you can submit built-in requests by right clicking in a file, selecting **GitHub Copilot**, then selecting one of the options.
* **Inline**. You can submit a chat prompt inline, and scope it to a highlighted code block or your current file.
   * To start an inline chat, right click on a code block or anywhere in your current file, hover over **GitHub Copilot**, then select **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Copilot: Inline Chat**, or enter <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd>.

## Copilot Edits

Use Copilot Edits to make changes across multiple files directly from a single Copilot Chat prompt. Copilot Edits has the following modes:

* [Edit mode](#edit-mode-1) lets Copilot make controlled edits to multiple files.
* [Agent mode](#agent-mode-1) lets Copilot autonomously accomplish a set task.

### Edit mode

Edit mode is only available in Visual Studio Code and JetBrains IDEs.

Use edit mode when you want more granular control over the edits that Copilot proposes. In edit mode, you choose which files Copilot can make changes to, provide context to Copilot with each iteration, and decide whether or not to accept the suggested edits after each turn.

Edit mode is best suited to use cases where:
* You want to make a quick, specific update to a defined set of files.
* You want full control over the number of LLM requests Copilot uses.


#### Using edit mode

1. To start an edit session, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot** in the menu bar, then select **Open GitHub Copilot Chat**.
1. At the top of the chat panel, click **Copilot Edits**.
1. Add relevant files to the _working set_ to indicate to GitHub Copilot which files you want to work on. You can add all open files by clicking **Add all open files** or individually search for single files.
1. Submit a prompt. In response to your prompt, Copilot Edits determines which files in your _working set_ to change and adds a short description of the change.
1. Review the changes and **Accept** or **Discard** the edits for each file.

### Agent mode

Use agent mode when you have a specific task in mind and want to enable Copilot to autonomously edit your code. In agent mode, Copilot determines which files to make changes to, offers code changes and terminal commands to complete the task, and iterates to remediate issues until the original task is complete.

Agent mode is best suited to use cases where:
* Your task is complex, and involves multiple steps, iterations, and error handling.
* You want Copilot to determine the necessary steps to take to complete the task.
* The task requires Copilot to integrate with external applications, such as an MCP server.


#### Using agent mode

1. To start an edit session using agent mode, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot** in the menu bar, then select **Open GitHub Copilot Chat**.
1. At the top of the chat panel, click the **Agent** tab.
1. Submit a prompt. In response to your prompt, Copilot streams the edits in the editor, updates the working set, and if necessary, suggests terminal commands to run.
1. Review the changes. If Copilot suggested terminal commands, confirm whether or not Copilot can run them. In response, Copilot iterates and performs additional actions to complete the task in your original prompt.

When you use agent mode, each prompt you enter consumes GitHub AI Credits.


### Using subagents

You can use subagents to delegate tasks to an isolated agent with its own context window within your chat session. The subagent operates independently without pausing for user feedback and returns the final result to the main chat session. 

Subagents are best suited for situations where:
* You want to delegate complex, multi-step tasks like research or analysis without interrupting your main session.
* You need to process large amounts of information or multiple documents that would clutter your primary context window.
* You want to explore different approaches or perspectives independently without mixing contexts together.

Subagents use the same tools and AI model as the main session, but they cannot create other subagents. 

To use subagents, you **must have custom agents configured in your environment**. See [Create Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents).

#### Enabling subagents

To enable subagents:

1. Click **Tools** in the menu bar, then click **GitHub Copilot**, then **Edit Settings**.
1. In the popup menu, click **Chat**, then click the **Enable Subagent** checkbox.

#### Invoking subagents

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

## Using plan mode

Plan mode helps you to create detailed implementation plans before executing them. This ensures that all requirements are considered and addressed before any code changes are made. The plan agent does not make any code changes until the plan is reviewed and approved by you. Once approved, you can hand off the plan to the default agent or save it for further refinement, review, or team discussions.

The plan agent is designed to:

* Research the task comprehensively using read-only tools and codebase analysis to identify requirements and constraints.
* Break down the task into manageable, actionable steps and include open questions about ambiguous requirements.
* Present a concise plan draft, based on a standardized plan format, for user review and iteration.


To use plan mode:

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


## Sharing feedback

To share feedback about Copilot Chat, you can use the **share feedback** link in JetBrains.

1. At the right side of the JetBrains IDE window, click the **Copilot Chat** icon to open the Copilot Chat window.

    ![Screenshot of the Copilot Chat icon in the Activity Bar.](/assets/images/help/copilot/jetbrains-copilot-chat-icon.png)

1. At the top of the Copilot Chat window, click the **share feedback** link.

    ![Screenshot of the share feedback link in the Copilot Chat window.](/assets/images/help/copilot/jetbrains-share-feedback.png)

## Further reading

* [Prompt Engineering](https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering)
* [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github)
* [Chat](https://docs.github.com/en/copilot/responsible-use/chat)
* [GitHub Pre Release License Terms](https://docs.github.com/en/free-pro-team@latest/site-policy/github-terms/github-pre-release-license-terms)
* [GitHub Terms For Additional Products And Features](https://docs.github.com/en/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)
* [GitHub Copilot Trust Center](https://copilot.github.trust.page)
* [GitHub Copilot FAQ](https://github.com/features/copilot#faq)

{% endjetbrains %}





{% xcode %}

## Prerequisites

* **Access to GitHub Copilot**. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

* **Latest version of the GitHub Copilot extension**. For installation instructions, see [Install Copilot Extension](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension).
* **Sign in to GitHub in Xcode**.

If you have access to GitHub Copilot via your organization or enterprise, you won't be able to use GitHub Copilot Chat if your organization owner or enterprise administrator has disabled chat. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).


## Submitting prompts

You can ask Copilot Chat to give you code suggestions, explain code, generate unit tests, and suggest code fixes.

1. To open the chat window, click **Editor** in the menu bar, then click **GitHub Copilot** then **Open Chat**. Copilot Chat opens in a new window.

1. Enter a prompt in the prompt box. For example prompts, see [Get Started With Chat In Your Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/get-started-with-chat-in-your-ide).

1. Evaluate Copilot's response, and submit a follow up prompt if needed.

   The response often includes interactive elements. For example, the response may include buttons to copy or insert a code block.

   To see the files that Copilot Chat used to generate the response, click the **References** link below the response. The references may include a link to a custom instructions file for your repository. This file contains additional information that is automatically added to all of your chat questions to improve the quality of the responses. For more information, see [Add Repository Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).

## Using Model Context Protocol (MCP) servers

You can use MCP to extend the capabilities of Copilot Chat by integrating it with a wide range of existing tools and services. For additional information, see [MCP](https://docs.github.com/en/copilot/concepts/context/mcp).


## AI models for Copilot Chat

You can change the model Copilot uses to generate responses. You may find that different models perform better, or provide more useful responses, depending on the type of questions you ask. Options include premium models with advanced capabilities.  

## Using keywords in your prompt

You can use special keywords to help Copilot understand your prompt.

### Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by a command.

To see all available slash commands, type `/` in the chat prompt box. For more information, see [Chat Cheat Sheet?Tool=Xcode](https://docs.github.com/en/copilot/reference/chat-cheat-sheet?tool=xcode#slash-commands).

## Using plan mode

> [!NOTE]
> Plan mode is currently in public preview and subject to change.

Plan mode helps you to create detailed implementation plans before executing them. This ensures that all requirements are considered and addressed before any code changes are made. The plan agent does not make any code changes until the plan is reviewed and approved by you. Once approved, you can hand off the plan to the default agent or save it for further refinement, review, or team discussions.

The plan agent is designed to:

* Research the task comprehensively using read-only tools and codebase analysis to identify requirements and constraints.
* Break down the task into manageable, actionable steps and include open questions about ambiguous requirements.
* Present a concise plan draft, based on a standardized plan format, for user review and iteration.


To use plan mode:

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


## Using Copilot agent mode

Use agent mode when you have a specific task in mind and want to enable Copilot to autonomously edit your code. In agent mode, Copilot determines which files to make changes to, offers code changes and terminal commands to complete the task, and iterates to remediate issues until the original task is complete.

Agent mode is best suited to use cases where:
* Your task is complex, and involves multiple steps, iterations, and error handling.
* You want Copilot to determine the necessary steps to take to complete the task.
* The task requires Copilot to integrate with external applications, such as an MCP server.


### Using agent mode

1. If it is not already displayed, open the Copilot Chat window by clicking **Editor** in the menu bar, then clicking **GitHub Copilot** then **Open Chat**.
1. At the bottom of the chat panel, select **Agent** from the agents dropdown.
1. Optionally, add relevant files to the _working set_ view to indicate to Copilot which files you want to work on.
1. Submit a prompt. In response to your prompt, Copilot streams the edits in the editor, updates the working set, and if necessary, suggests terminal commands to run.
1. Review the changes. If Copilot suggested terminal commands, confirm whether or not Copilot can run them. In response, Copilot iterates and performs additional actions to complete the task in your original prompt.

When you use agent mode, each prompt you enter consumes GitHub AI Credits.


### Using subagents

You can use subagents to delegate tasks to an isolated agent with its own context window within your chat session. The subagent operates independently without pausing for user feedback and returns the final result to the main chat session. 

Subagents are best suited for situations where:
* You want to delegate complex, multi-step tasks like research or analysis without interrupting your main session.
* You need to process large amounts of information or multiple documents that would clutter your primary context window.
* You want to explore different approaches or perspectives independently without mixing contexts together.

Subagents use the same tools and AI model as the main session, but they cannot create other subagents. 

To use subagents, you **must have custom agents configured in your environment**. See [Create Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents).

#### Enabling subagents

1. Click **Editor** in the menu bar, then click **GitHub Copilot** then **Open GitHub Copilot for Xcode Settings**.
1. Click **Advanced** in the chat panel, then under **Chat Settings** click the **Enable Subagents** toggle.

#### Invoking subagents

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

## File references

By default, Copilot Chat will reference the file that you have open or the code that you have selected. To attach a specific file as reference, click {% octicon "paperclip" aria-label="Add attachments" %} in the chat prompt box.

## Chat management

You can open a conversation thread for each Xcode IDE to keep discussions organized across different contexts. You can also revisit previous conversations and reference past suggestions through the chat history.

## Sharing feedback

To indicate whether a response was helpful, use {% octicon "thumbsup" aria-label="Thumbs up" %} or {% octicon "thumbsdown" aria-label="Thumbs down" %} that appear next to the response.

## Further reading

* [Prompt Engineering](https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering)
* [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github)
* [Chat](https://docs.github.com/en/copilot/responsible-use/chat)
* [GitHub Pre Release License Terms](https://docs.github.com/en/free-pro-team@latest/site-policy/github-terms/github-pre-release-license-terms)
* [GitHub Terms For Additional Products And Features](https://docs.github.com/en/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)
* [GitHub Copilot Trust Center](https://copilot.github.trust.page)
* [GitHub Copilot FAQ](https://github.com/features/copilot#faq)

{% endxcode %}





{% eclipse %}

## Prerequisites

* **Access to Copilot**. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

* **Compatible version of Eclipse**. To use the GitHub Copilot extension, you must have Eclipse version 2024-09 or above. See the [Eclipse download page](https://www.eclipse.org/downloads/packages/).
* If you are a member of an organization or enterprise with a Copilot Business or Copilot Enterprise plan, the "MCP servers in Copilot" policy must be enabled in order to use MCP with Copilot.

* **Latest version of the GitHub Copilot extension**. Download this from the [Eclipse Marketplace](https://aka.ms/copiloteclipse?ref_product=copilot&ref_type=engagement&ref_style=text). For more information, see [Install Copilot Extension?Tool=Eclipse](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=eclipse).
* **Sign in to GitHub in Eclipse**.

If you have access to GitHub Copilot via your organization or enterprise, you won't be able to use GitHub Copilot Chat if your organization owner or enterprise administrator has disabled chat. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).


## Submitting prompts

You can ask Copilot Chat to give you code suggestions, explain code, generate unit tests, and suggest code fixes.

1. To open the Copilot Chat panel, click the Copilot icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the status bar at the bottom of Eclipse, then click **Open Chat**.

1. Enter a prompt in the prompt box, then press <kbd>Enter</kbd>.

   For an introduction to the kinds of prompts you can use, see [Get Started With Chat In Your Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/get-started-with-chat-in-your-ide).

1. Evaluate Copilot's response, and make a follow up request if needed.

## Using keywords in your prompt

You can use special keywords to help Copilot understand your prompt. For examples, see [Get Started With Chat In Your Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/get-started-with-chat-in-your-ide).

### Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by a command. For example, use `/explain` to ask Copilot to explain the code in the file currently displayed in the editor.

To see all available slash commands, type `/` in the chat prompt box.

## Using Model Context Protocol (MCP) servers

You can use MCP to extend the capabilities of Copilot Chat by integrating it with a wide range of existing tools and services. For additional information, see [MCP](https://docs.github.com/en/copilot/concepts/context/mcp).


## AI models for Copilot Chat

You can change the model Copilot uses to generate responses. You may find that different models perform better, or provide more useful responses, depending on the type of questions you ask. Options include premium models with advanced capabilities.  

## Using plan mode

> [!NOTE]
> Plan mode is currently in public preview and subject to change.

Plan mode helps you to create detailed implementation plans before executing them. This ensures that all requirements are considered and addressed before any code changes are made. The plan agent does not make any code changes until the plan is reviewed and approved by you. Once approved, you can hand off the plan to the default agent or save it for further refinement, review, or team discussions.

The plan agent is designed to:

* Research the task comprehensively using read-only tools and codebase analysis to identify requirements and constraints.
* Break down the task into manageable, actionable steps and include open questions about ambiguous requirements.
* Present a concise plan draft, based on a standardized plan format, for user review and iteration.


To use plan mode:

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


## Using Copilot agent mode

Use agent mode when you have a specific task in mind and want to enable Copilot to autonomously edit your code. In agent mode, Copilot determines which files to make changes to, offers code changes and terminal commands to complete the task, and iterates to remediate issues until the original task is complete.

Agent mode is best suited to use cases where:
* Your task is complex, and involves multiple steps, iterations, and error handling.
* You want Copilot to determine the necessary steps to take to complete the task.
* The task requires Copilot to integrate with external applications, such as an MCP server.


To use agent mode:

1. Open the Copilot Chat panel by clicking the Copilot icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the status bar at the bottom of Eclipse, then clicking **Open Chat**.
1. At the bottom of the chat panel, select **Agent** from the agents dropdown.
1. Submit a prompt. In response to your prompt, Copilot streams the edits in the editor, updates the working set, and if necessary, suggests terminal commands to run.
1. Review the changes. If Copilot suggested terminal commands, confirm whether or not Copilot can run them. In response, Copilot iterates and performs additional actions to complete the task in your original prompt.

When you use agent mode, each prompt you enter consumes GitHub AI Credits.


### Using subagents

You can use subagents to delegate tasks to an isolated agent with its own context window within your chat session. The subagent operates independently without pausing for user feedback and returns the final result to the main chat session. 

Subagents are best suited for situations where:
* You want to delegate complex, multi-step tasks like research or analysis without interrupting your main session.
* You need to process large amounts of information or multiple documents that would clutter your primary context window.
* You want to explore different approaches or perspectives independently without mixing contexts together.

Subagents use the same tools and AI model as the main session, but they cannot create other subagents. 

To use subagents, you **must have custom agents configured in your environment**. See [Create Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents).

#### Enabling subagents

1. Click the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}** icon in the status bar.
1. In the popup menu, click **Edit Preferences**.
1. Under **Chat**, click the **Enable sub-agent** check box

#### Invoking subagents

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

* [Prompt Engineering](https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering)
* [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github)
* [Chat](https://docs.github.com/en/copilot/responsible-use/chat)
* [GitHub Terms For Additional Products And Features](https://docs.github.com/en/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)
* [GitHub Copilot Trust Center](https://copilot.github.trust.page)
* [GitHub Copilot FAQ](https://github.com/features/copilot#faq)

{% endeclipse %}
