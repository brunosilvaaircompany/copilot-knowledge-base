# Quickstart for GitHub Copilot

This quickstart covers using Copilot on the GitHub website, in IDEs, and in Windows Terminal. To try an agent-driven workflow in the GitHub Copilot app, see [Getting Started](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started).

## Introduction





{% webui %}

You can use Copilot to get answers to coding-related questions, such as how best to code something, how to fix a bug, or how someone else's code works. For full details of what Copilot can do, see [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot).

Instructions for using Copilot differ depending on where you are using it. This version of the quickstart is for using Copilot on the GitHub website. Click the tabs above for instructions on using Copilot in other environments.




## Sign up for GitHub Copilot

<a href="https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=button&ref_plan=free" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Get started for free</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

To use Copilot, you’ll need a personal GitHub account with access to a Copilot plan. You can:

* Start with Copilot Free to explore limited features without subscribing to a plan.
* Upgrade to Copilot Pro, Copilot Pro+, or Copilot Max to unlock more features, models, and request limits.

  > [!IMPORTANT] **Starting April 22, 2026**, new self-serve sign-ups for Copilot Business for organizations on GitHub Free and GitHub Team plans are temporarily paused.

For more information about the different plans for GitHub Copilot, see [Plans](https://docs.github.com/en/copilot/get-started/plans).

{% elsif ghec %}

## Prerequisites

To use GitHub Copilot you must have been assigned a seat by your organization as part of a GitHub Copilot Business or GitHub Copilot Enterprise subscription, or you must have signed up for GitHub Copilot Pro on your personal GitHub account.







## Prerequisite

To use Copilot on the GitHub website, you must have an active Copilot plan. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).



## Asking your first question

1. On GitHub, navigate to a repository and open a file.
1. Click the Copilot icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) at the top right of the file view.

   ![Screenshot of the Copilot button, highlighted with a dark orange outline, at the top of the file view.](/assets/images/help/copilot/copilot-button-for-file.png)

1. Type a question in the "Ask Copilot" box at the bottom of the chat panel and press <kbd>Enter</kbd>.

   For example, you could enter:

   * `Explain this file.`
   * `How could I improve this code?`
   * `How can I test this code?`

   Copilot responds to your request in the panel.

1. You can continue the conversation by asking a follow-up question. For example, you could type "tell me more" to get Copilot to expand on its last comment.

## Other questions you can ask

There are many more things you can do with GitHub Copilot Chat in GitHub. For example:

* Ask a general question about software development
* Ask exploratory questions about a repository
* Find out about the changes in a pull request
* Ask a question about a specific issue or commit

For more information, see [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github).

## Next steps

* **Find out more about GitHub Copilot Chat** - See [Chat In Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide). and [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github).
* **Get Copilot inline suggestions in an IDE** - See [Get Ide Code Suggestions](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions).
* **Learn how to write effective prompts** - See [Prompt Engineering](https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering).
* **Use Copilot on your mobile device** - See [Chat In Mobile](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-mobile).
* **Use Copilot on the command line** - See [Use Copilot In The CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-for-common-tasks/use-copilot-in-the-cli).

{% endwebui %}





{% windowsterminal %}

GitHub Copilot provides coding suggestions as you type in your editor. You can also ask Copilot coding-related questions, such as how best to code something, how to fix a bug, or how someone else's code works. For full details of what Copilot can do, see [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot).


Instructions for using Copilot differ depending on where you are using it. This version of the quickstart is for Windows Terminal. Click the tabs above for instructions on using Copilot in other environments.




## Sign up for GitHub Copilot

<a href="https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=button&ref_plan=free" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Get started for free</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

To use Copilot, you’ll need a personal GitHub account with access to a Copilot plan. You can:

* Start with Copilot Free to explore limited features without subscribing to a plan.
* Upgrade to Copilot Pro, Copilot Pro+, or Copilot Max to unlock more features, models, and request limits.

  > [!IMPORTANT] **Starting April 22, 2026**, new self-serve sign-ups for Copilot Business for organizations on GitHub Free and GitHub Team plans are temporarily paused.

For more information about the different plans for GitHub Copilot, see [Plans](https://docs.github.com/en/copilot/get-started/plans).

{% elsif ghec %}

## Prerequisites

To use GitHub Copilot you must have been assigned a seat by your organization as part of a GitHub Copilot Business or GitHub Copilot Enterprise subscription, or you must have signed up for GitHub Copilot Pro on your personal GitHub account.





## Prerequisites

* **Subscription to Copilot**. To use GitHub Copilot in Windows Terminal, you must have an active GitHub Copilot subscription. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

* **Windows Terminal Canary**. Terminal Chat is only available in [Windows Terminal Canary](https://github.com/microsoft/terminal?tab=readme-ov-file#installing-windows-terminal-canary).

## Use Copilot in Terminal Chat

After you've installed Windows Terminal Canary, you can use Copilot in [Terminal Chat](https://learn.microsoft.com/windows/terminal/terminal-chat) to ask command line-related questions.

1. Open **Settings** from the dropdown menu.

   ![Screenshot of the dropdown menu in the Windows Terminal with the Settings item highlighted.](/assets/images/help/copilot/windows-terminal-dropdown.png)

1. Go to the **Terminal Chat (Experimental)** setting.

   ![Screenshot of the Settings menu in the Windows Terminal with the Terminal Chat (Experimental) item highlighted.](/assets/images/help/copilot/windows-terminal-settings.png)

1. Under **Service Providers**, select **GitHub Copilot** and **Authenticate via GitHub** to sign in.

## Chat with GitHub Copilot

> [!NOTE] If you have access to GitHub Copilot via your organization or enterprise, you won't be able to use GitHub Copilot in Windows Terminal if your organization owner or enterprise administrator has disabled GitHub Copilot CLI. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).


1. Open **Terminal Chat (Experimental)** in the dropdown menu.

1. In the Terminal Chat chat window, type `how do i list all markdown files in my directory` then press <kbd>Enter</kbd>.

   Copilot's answer is displayed below your question.

1. Click on an answer to insert it to the command line.

## Next steps

* **Find out more about Copilot inline suggestions** - See [Get Ide Code Suggestions](https://docs.github.com/en/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions).
* **Find out more about GitHub Copilot Chat** - See [Chat In Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide). and [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github).
* **Learn how to write effective prompts** - See [Prompt Engineering](https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering).

* **Use Copilot on your mobile device** - See [Chat In Mobile](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-mobile).
* **Use Copilot on the command line** - See [About Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli).
* **Configure Copilot in your editor** - You can enable or disable GitHub Copilot from within your editor, and create your own preferred keyboard shortcuts for Copilot. See [Configure In Ide](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/configure-in-ide).


{% endwindowsterminal %}





{% vscode %}

GitHub Copilot provides coding suggestions as you type in your editor. You can also ask Copilot coding-related questions, such as how best to code something, how to fix a bug, or how someone else's code works. For full details of what Copilot can do, see [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot).


Instructions for using Copilot differ depending on where you are using it. This version of the quickstart is for Visual Studio Code. Click the tabs above for instructions on using Copilot in other environments.




## Sign up for GitHub Copilot

<a href="https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=button&ref_plan=free" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Get started for free</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

To use Copilot, you’ll need a personal GitHub account with access to a Copilot plan. You can:

* Start with Copilot Free to explore limited features without subscribing to a plan.
* Upgrade to Copilot Pro, Copilot Pro+, or Copilot Max to unlock more features, models, and request limits.

  > [!IMPORTANT] **Starting April 22, 2026**, new self-serve sign-ups for Copilot Business for organizations on GitHub Free and GitHub Team plans are temporarily paused.

For more information about the different plans for GitHub Copilot, see [Plans](https://docs.github.com/en/copilot/get-started/plans).

{% elsif ghec %}

## Prerequisites

To use GitHub Copilot you must have been assigned a seat by your organization as part of a GitHub Copilot Business or GitHub Copilot Enterprise subscription, or you must have signed up for GitHub Copilot Pro on your personal GitHub account.





## Prerequisites

* **Copilot subscription** - To use GitHub Copilot in VS Code, you must have an active GitHub Copilot subscription. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

* **Latest version of Visual Studio Code**. See the [Visual Studio Code download page](https://code.visualstudio.com/Download?ref_product=copilot&ref_type=engagement&ref_style=text).
* **Sign in to GitHub in Visual Studio Code**. If you experience authentication issues, see [Troubleshoot Common Issues](https://docs.github.com/en/copilot/how-tos/troubleshoot-copilot/troubleshoot-common-issues#authentication-problems-in-visual-studio-code).


## Chat with GitHub Copilot

After you've installed the GitHub Copilot Chat extension, you can ask Copilot coding-related questions.

> [!NOTE] If you have access to GitHub Copilot via your organization or enterprise, you won't be able to use GitHub Copilot Chat if your organization owner or enterprise administrator has disabled chat. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).


1. Create a new folder for your project and open it in VS Code.
1. Open the Chat view by pressing <kbd>Control</kbd>+<kbd>Command</kbd>+<kbd>i</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>i</kbd> (Windows/Linux) or by selecting the chat icon in the VS Code title bar.
1. At the bottom of the chat view, in the chat input field, type: `Create a complete task manager web application with the ability to add, delete, and mark tasks as completed. Include modern CSS styling and make it responsive. Use semantic HTML and ensure it's accessible. Separate markup, styles, and scripts into their own files.`
1. Press <kbd>Enter</kbd>. Watch as the agent generates the necessary files and code to implement your request. You should see it update the `index.html` file, create a `styles.css` file for styling, and a `script.js` file for functionality.
1. Review the generated files and select Keep to accept all the changes.

## Get your first inline suggestion

The following example uses JavaScript, however other languages will work similarly. GitHub Copilot provides suggestions for numerous languages and a wide variety of frameworks, but works especially well for Python, JavaScript, TypeScript, Ruby, Go, C# and C++. GitHub Copilot can also assist in query generation for databases, generating suggestions for APIs and frameworks, and can help with infrastructure as code development.


1. Open Visual Studio Code.
1. In Visual Studio Code, create a new JavaScript (_*.js_) file.

1. In the JavaScript file, type the following function header.

    ```javascript copy
    function calculateDaysBetweenDates(begin, end) {
    ```

   GitHub Copilot will automatically suggest an entire function body in grayed text. The exact suggestion may vary.
1. To accept the suggestion, press <kbd>Tab</kbd>.


## Next steps

* **Find out more about Copilot inline suggestions** - See [Get Ide Code Suggestions](https://docs.github.com/en/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions).
* **Find out more about GitHub Copilot Chat** - See [Chat In Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide). and [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github).
* **Learn how to write effective prompts** - See [Prompt Engineering](https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering).

* **Use Copilot like a pro** - Learn how to write effective prompts for GitHub Copilot. For more information, see [Best practices for using GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/prompt-crafting) in the Visual Studio Code documentation.
* **Get familiar with next edit suggestions** - See [Navigating and accepting next edit suggestions](/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions#navigating-and-accepting-next-edit-suggestions-1).
* **Use Copilot on your mobile device** - See [Chat In Mobile](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-mobile).
* **Use Copilot on the command line** - See [About Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli).
* **Configure Copilot in your editor** - You can enable or disable GitHub Copilot from within your editor, and create your own preferred keyboard shortcuts for Copilot. See [Configure In Ide](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/configure-in-ide).


{% endvscode %}





{% visualstudio %}

GitHub Copilot provides coding suggestions as you type in your editor. You can also ask Copilot coding-related questions, such as how best to code something, how to fix a bug, or how someone else's code works. For full details of what Copilot can do, see [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot).


Instructions for using Copilot differ depending on where you are using it. This version of the quickstart is for Visual Studio. Click the tabs above for instructions on using Copilot in other environments.




## Sign up for GitHub Copilot

<a href="https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=button&ref_plan=free" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Get started for free</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

To use Copilot, you’ll need a personal GitHub account with access to a Copilot plan. You can:

* Start with Copilot Free to explore limited features without subscribing to a plan.
* Upgrade to Copilot Pro, Copilot Pro+, or Copilot Max to unlock more features, models, and request limits.

  > [!IMPORTANT] **Starting April 22, 2026**, new self-serve sign-ups for Copilot Business for organizations on GitHub Free and GitHub Team plans are temporarily paused.

For more information about the different plans for GitHub Copilot, see [Plans](https://docs.github.com/en/copilot/get-started/plans).

{% elsif ghec %}

## Prerequisites

To use GitHub Copilot you must have been assigned a seat by your organization as part of a GitHub Copilot Business or GitHub Copilot Enterprise subscription, or you must have signed up for GitHub Copilot Pro on your personal GitHub account.





## Prerequisites

* **Subscription to Copilot**. To use GitHub Copilot in Visual Studio, you must have an active GitHub Copilot subscription. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

* **Compatible version of Visual Studio**. To use GitHub Copilot in Visual Studio, you must have version 2022 17.8 or later of Visual Studio for Windows installed. For more information, see [Install Visual Studio](https://learn.microsoft.com/en-us/visualstudio/install/install-visual-studio?ref_product=copilot&ref_type=engagement&ref_style=text) in the Microsoft documentation.

* **GitHub Copilot extension for Visual Studio**. For instructions on how to install the Copilot extension, see [Install GitHub Copilot in Visual Studio](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-install-and-states?ref_product=copilot&ref_type=engagement&ref_style=text) in the Microsoft documentation.

* **Add your GitHub account to Visual Studio**. See [Add your GitHub accounts to your Visual Studio keychain](https://learn.microsoft.com/en-us/visualstudio/ide/work-with-github-accounts?ref_product=copilot&ref_type=engagement&ref_style=text) in the Microsoft documentation.


## Chat with GitHub Copilot

After you've installed the GitHub Copilot extension, you can ask Copilot coding-related questions.

> [!NOTE] If you have access to GitHub Copilot via your organization or enterprise, you won't be able to use GitHub Copilot Chat if your organization owner or enterprise administrator has disabled chat. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).


1. Open an existing code file.
1. In the Visual Studio menu bar, click **View**, then click **GitHub Copilot Chat**.
1. In the Copilot Chat window, type `what does this file do` then press <kbd>Enter</kbd>.

   Copilot's answer is displayed below your question.

1. Select a line of code in the editor.
1. In the Copilot Chat window, type `explain this line` then press <kbd>Enter</kbd>.

## Get your first inline suggestion

The following example uses JavaScript, however other languages will work similarly. GitHub Copilot provides suggestions for numerous languages and a wide variety of frameworks, but works especially well for Python, JavaScript, TypeScript, Ruby, Go, C# and C++. GitHub Copilot can also assist in query generation for databases, generating suggestions for APIs and frameworks, and can help with infrastructure as code development.


1. Open Visual Studio.
1. In Visual Studio, create a new JavaScript (_*.js_) file.
1. In the JavaScript file, type the following function header.

    ```javascript copy
    function calculateDaysBetweenDates(begin, end) {
    ```

   GitHub Copilot will automatically suggest an entire function body in grayed text. The exact suggestion may vary.
1. To accept the suggestion, press <kbd>Tab</kbd>.


## Next steps

* **Find out more about Copilot inline suggestions** - See [Get Ide Code Suggestions](https://docs.github.com/en/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions).
* **Find out more about GitHub Copilot Chat** - See [Chat In Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide). and [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github).
* **Learn how to write effective prompts** - See [Prompt Engineering](https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering).

* **Prompt like a pro** - Watch [Visual Studio Prompt Engineering with GitHub Copilot](https://www.youtube.com/watch?v=9hZsOeIINg8&list=PLReL099Y5nRckZDdcQ21UigO9pKa14yxC) on YouTube.
* **Use Copilot on your mobile device** - See [Chat In Mobile](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-mobile).
* **Use Copilot on the command line** - See [About Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli).
* **Configure Copilot in your editor** - You can enable or disable GitHub Copilot from within your editor, and create your own preferred keyboard shortcuts for Copilot. See [Configure In Ide](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/configure-in-ide).


{% endvisualstudio %}





{% jetbrains %}

GitHub Copilot provides coding suggestions as you type in your editor. You can also ask Copilot coding-related questions, such as how best to code something, how to fix a bug, or how someone else's code works. For full details of what Copilot can do, see [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot).


Instructions for using Copilot differ depending on where you are using it. This version of the quickstart is for JetBrains IDEs. Click the tabs above for instructions on using Copilot in other environments.




## Sign up for GitHub Copilot

<a href="https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=button&ref_plan=free" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Get started for free</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

To use Copilot, you’ll need a personal GitHub account with access to a Copilot plan. You can:

* Start with Copilot Free to explore limited features without subscribing to a plan.
* Upgrade to Copilot Pro, Copilot Pro+, or Copilot Max to unlock more features, models, and request limits.

  > [!IMPORTANT] **Starting April 22, 2026**, new self-serve sign-ups for Copilot Business for organizations on GitHub Free and GitHub Team plans are temporarily paused.

For more information about the different plans for GitHub Copilot, see [Plans](https://docs.github.com/en/copilot/get-started/plans).

{% elsif ghec %}

## Prerequisites

To use GitHub Copilot you must have been assigned a seat by your organization as part of a GitHub Copilot Business or GitHub Copilot Enterprise subscription, or you must have signed up for GitHub Copilot Pro on your personal GitHub account.





## Prerequisites

* **Subscription to Copilot**. To use GitHub Copilot in a JetBrains IDE, you must have an active GitHub Copilot subscription. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

* **A compatible JetBrains IDE**. Copilot is supported in a large number of JetBrains IDEs. For a full list, see [Chat In Ide?Tool=Jetbrains](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide?tool=jetbrains).
* **Latest version of the GitHub Copilot extension**. See the [GitHub Copilot plugin](https://plugins.jetbrains.com/plugin/17718-github-copilot?ref_product=copilot&ref_type=engagement&ref_style=text) in the JetBrains Marketplace. For installation instructions, see [Install Copilot Extension?Tool=Jetbrains](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=jetbrains).
* **Sign in to GitHub in your JetBrains IDE**. For authentication instructions, see [Install Copilot Extension?Tool=Jetbrains](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=jetbrains#installing-the-github-copilot-plugin-in-your-jetbrains-ide).


## Chat with GitHub Copilot

After you've installed the GitHub Copilot plugin, you can ask Copilot coding-related questions.

> [!NOTE] If you have access to GitHub Copilot via your organization or enterprise, you won't be able to use GitHub Copilot Chat if your organization owner or enterprise administrator has disabled chat. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).


1. Open an existing code file.
1. Open the Copilot Chat window by clicking the **Copilot Chat** icon at the right side of the JetBrains IDE window.

   ![Screenshot of the Copilot Chat icon in the Activity Bar.](/assets/images/help/copilot/jetbrains-copilot-chat-icon.png)

1. In the Copilot Chat window, type `what does this file do` then press <kbd>Enter</kbd>.

   Copilot's answer is displayed below your question.

1. Select a line of code in the editor.
1. In the Copilot Chat window, type `explain this line` then press <kbd>Enter</kbd>.

## Get your first inline suggestion

The following example uses JavaScript, however other languages will work similarly. GitHub Copilot provides suggestions for numerous languages and a wide variety of frameworks, but works especially well for Python, JavaScript, TypeScript, Ruby, Go, C# and C++. GitHub Copilot can also assist in query generation for databases, generating suggestions for APIs and frameworks, and can help with infrastructure as code development.


1. In your JetBrains editor, create a new JavaScript (_*.js_) file.
1. In the JavaScript file, type the following function header.

    ```javascript copy
    function calculateDaysBetweenDates(begin, end) {
    ```

   GitHub Copilot will automatically suggest an entire function body in grayed text. The exact suggestion may vary.
1. To accept the suggestion, press <kbd>Tab</kbd>.


## Next steps

* **Find out more about Copilot inline suggestions** - See [Get Ide Code Suggestions](https://docs.github.com/en/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions).
* **Find out more about GitHub Copilot Chat** - See [Chat In Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide). and [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github).
* **Learn how to write effective prompts** - See [Prompt Engineering](https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering).

* **Use Copilot on your mobile device** - See [Chat In Mobile](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-mobile).
* **Use Copilot on the command line** - See [About Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli).
* **Configure Copilot in your editor** - You can enable or disable GitHub Copilot from within your editor, and create your own preferred keyboard shortcuts for Copilot. See [Configure In Ide](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/configure-in-ide).


{% endjetbrains %}





{% xcode %}

GitHub Copilot provides coding suggestions as you type in your editor. You can also ask Copilot coding-related questions, such as how best to code something, how to fix a bug, or how someone else's code works. For full details of what Copilot can do, see [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot).


Instructions for using Copilot differ depending on where you are using it. This version of the quickstart is for XCode in MacOS. Click the tabs above for instructions on using Copilot in other environments.




## Sign up for GitHub Copilot

<a href="https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=button&ref_plan=free" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Get started for free</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

To use Copilot, you’ll need a personal GitHub account with access to a Copilot plan. You can:

* Start with Copilot Free to explore limited features without subscribing to a plan.
* Upgrade to Copilot Pro, Copilot Pro+, or Copilot Max to unlock more features, models, and request limits.

  > [!IMPORTANT] **Starting April 22, 2026**, new self-serve sign-ups for Copilot Business for organizations on GitHub Free and GitHub Team plans are temporarily paused.

For more information about the different plans for GitHub Copilot, see [Plans](https://docs.github.com/en/copilot/get-started/plans).

{% elsif ghec %}

## Prerequisites

To use GitHub Copilot you must have been assigned a seat by your organization as part of a GitHub Copilot Business or GitHub Copilot Enterprise subscription, or you must have signed up for GitHub Copilot Pro on your personal GitHub account.





## Prerequisites

* **Subscription to Copilot**. To use GitHub Copilot in Xcode, you must have an active GitHub Copilot subscription. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

* **Latest version of the GitHub Copilot extension**. For installation instructions, see [Install Copilot Extension?Tool=Xcode](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=xcode).
* **Sign in to GitHub in Xcode**. If you experience authentication issues, see [Troubleshoot Common Issues](https://docs.github.com/en/copilot/how-tos/troubleshoot-copilot/troubleshoot-common-issues).

## Chat with GitHub Copilot

After you've installed the GitHub Copilot plugin, you can ask Copilot coding-related questions.

> [!NOTE] If you have access to GitHub Copilot via your organization or enterprise, you won't be able to use GitHub Copilot Chat if your organization owner or enterprise administrator has disabled chat. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).


1. Open an existing code file.
1. Click **Editor** in the menu bar, then click **GitHub Copilot** then **Open Chat**.

   Copilot Chat opens in a new window.

1. In the Copilot Chat window, select the file to indicate that you want to chat about this file.

   ![Screenshot of a file selected in the Chat window. The file is highlighted with a dark orange outline.](/assets/images/help/copilot/xcode-chat-about-file.png)

1. Type `what does this file do` then press <kbd>Enter</kbd>.

   Copilot's answer is displayed below your question.

1. Select a line of code in the editor.
1. In the Copilot Chat window, type `explain this line` then press <kbd>Enter</kbd>.

## Get your first inline suggestion

The following example uses Swift, however other languages will work similarly.

1. Create a new file called `CalculateDays.swift`.
1. Type the following code in the new file:

   ```swift copy
   import Foundation

   func calculateDaysBetweenDates(_ start: Date, _ end: Date)
   ```

   GitHub Copilot adds a suggestion of code that continues this function. Suggestions are displayed in grayed text.
1. To accept the suggestion, press <kbd>Tab</kbd>.

1. Copilot will continue to make suggestions, each of which you can accept by pressing <kbd>Tab</kbd>.

## Next steps

* **Find out more about Copilot inline suggestions** - See [Get Ide Code Suggestions](https://docs.github.com/en/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions).
* **Find out more about GitHub Copilot Chat** - See [Chat In Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide). and [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github).
* **Learn how to write effective prompts** - See [Prompt Engineering](https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering).

* **Get familiar with next edit suggestions** - See [Navigating and accepting next edit suggestions](/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions?tool=xcode#navigating-and-accepting-next-edit-suggestions-2).
* **Use Copilot on your mobile device** - See [Chat In Mobile](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-mobile).
* **Use Copilot on the command line** - See [About Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli).
* **Configure Copilot in your editor** - You can enable or disable GitHub Copilot from within your editor, and create your own preferred keyboard shortcuts for Copilot. See [Configure In Ide](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/configure-in-ide).


{% endxcode %}





{% eclipse %}

GitHub Copilot provides coding suggestions as you type in your editor. You can also ask Copilot coding-related questions, such as how best to code something, how to fix a bug, or how someone else's code works. For full details of what Copilot can do, see [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot).


Instructions for using Copilot differ depending on where you are using it. This version of the quickstart is for Eclipse. Click the tabs above for instructions on using Copilot in other environments.




## Sign up for GitHub Copilot

<a href="https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=button&ref_plan=free" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Get started for free</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

To use Copilot, you’ll need a personal GitHub account with access to a Copilot plan. You can:

* Start with Copilot Free to explore limited features without subscribing to a plan.
* Upgrade to Copilot Pro, Copilot Pro+, or Copilot Max to unlock more features, models, and request limits.

  > [!IMPORTANT] **Starting April 22, 2026**, new self-serve sign-ups for Copilot Business for organizations on GitHub Free and GitHub Team plans are temporarily paused.

For more information about the different plans for GitHub Copilot, see [Plans](https://docs.github.com/en/copilot/get-started/plans).

{% elsif ghec %}

## Prerequisites

To use GitHub Copilot you must have been assigned a seat by your organization as part of a GitHub Copilot Business or GitHub Copilot Enterprise subscription, or you must have signed up for GitHub Copilot Pro on your personal GitHub account.





## Prerequisites

* **Subscription to Copilot**. To use GitHub Copilot in Eclipse, you must have an active GitHub Copilot subscription. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

* **Latest version of the GitHub Copilot extension**. For installation instructions, see [Install Copilot Extension?Tool=Eclipse](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=eclipse).
* **Sign in to GitHub in Eclipse**. If you experience authentication issues, see [Troubleshoot Common Issues](https://docs.github.com/en/copilot/how-tos/troubleshoot-copilot/troubleshoot-common-issues).

## Chat with GitHub Copilot

After you've installed the GitHub Copilot plugin, you can ask Copilot coding-related questions.

> [!NOTE] If you have access to GitHub Copilot via your organization or enterprise, you won't be able to use GitHub Copilot Chat if your organization owner or enterprise administrator has disabled chat. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).


1. Open an existing code file.
1. In the menu bar of Eclipse, click **Copilot**, then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Open Chat**.
1. In the Copilot Chat window, type `what does this file do` then press <kbd>Enter</kbd>.

   Copilot's answer is displayed below your question.

1. Select a line of code in the editor.
1. In the Copilot Chat window, type `explain this line` then press <kbd>Enter</kbd>.

## Get your first inline suggestion

The following example uses Java, however other languages will work similarly.

1. Create a new Java class called `CalculateDaysBetween`.
1. Within the class add the following comment:

   ```java copy
   // Take 2 dates and return the number of days between them
   ```

   GitHub Copilot adds a suggestion of code to use for this class. Suggestions are displayed in grayed text.
1. To accept the suggestion, press <kbd>Tab</kbd>.


## Next steps

* **Find out more about Copilot inline suggestions** - See [Get Ide Code Suggestions](https://docs.github.com/en/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions).
* **Find out more about GitHub Copilot Chat** - See [Chat In Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide). and [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github).
* **Learn how to write effective prompts** - See [Prompt Engineering](https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering).

* **Get familiar with next edit suggestions** - See [Navigating and accepting next edit suggestions](/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions?tool=eclipse#navigating-and-accepting-next-edit-suggestions-3).
* **Use Copilot on your mobile device** - See [Chat In Mobile](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-mobile).
* **Use Copilot on the command line** - See [About Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli).
* **Configure Copilot in your editor** - You can enable or disable GitHub Copilot from within your editor, and create your own preferred keyboard shortcuts for Copilot. See [Configure In Ide](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/configure-in-ide).


{% endeclipse %}
