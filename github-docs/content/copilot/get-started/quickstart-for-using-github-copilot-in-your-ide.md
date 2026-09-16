# Quickstart for using GitHub Copilot in your IDE

GitHub Copilot is available in supported IDEs: Visual Studio Code, Visual Studio, JetBrains IDEs, Eclipse, and XCode. It can answer questions and explain concepts, and suggest or complete code as you work. In IDEs that support agent mode, it can also propose edits and validate files.

This quickstart shows you how to use these capabilities. It takes about ten minutes.

## Prerequisites

* **An active Copilot plan.** See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).
* **The Copilot extension for your IDE.** See [Install Copilot Extension](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension).
* **Signed in to GitHub in your IDE.** If you have authentication problems, see [Troubleshoot Common Issues](https://docs.github.com/en/copilot/how-tos/troubleshoot-copilot/troubleshoot-common-issues).

## Ask a question about your code

1. Open an existing code file in your editor.
1. Open the Copilot Chat window.

   The way you do this depends on your IDE.
   * In Visual Studio Code, press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>I</kbd> (Windows/Linux) or <kbd>Control</kbd>+<kbd>Command</kbd>+<kbd>I</kbd> (macOS).
   * In other IDEs, look for Copilot Chat in the menu bar or sidebar. See [Chat In Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide).

1. Type `what does this file do`, then press <kbd>Enter</kbd>.

   Copilot's answer displays below your question.

1. Select a line of code in the editor, then type `explain this line` in the chat window.

Copilot can see the file you have open, so you can ask about your code instead of describing it first.

## Let Copilot work through a task

Most IDEs support **agent mode**. In agent mode, you describe what you want, and Copilot decides which files to change, makes the edits, and runs commands with your approval.

To check whether your IDE supports agent mode, see [Copilot Feature Matrix?Tool=Ides](https://docs.github.com/en/copilot/reference/copilot-feature-matrix?tool=ides).

1. In the chat window, select **Agent**, then describe a task. For example, `Create a task manager web app with the ability to add, delete, and mark tasks as completed`.
1. Press <kbd>Enter</kbd>.

   Copilot generates the files and code needed.

1. Review the changes, then use your IDE's controls to accept them.

When you're ready, save your changes, and commit when everything looks good.

## Get your first inline suggestion

GitHub Copilot can suggest code as you work and supports many programming languages. This example uses JavaScript, but you can follow along in your preferred language.

1. In your IDE, create a new JavaScript (_*.js_) file.
1. In the JavaScript file, type the following function header.

    ```javascript copy
    function calculateDaysBetweenDates(begin, end) {
    ```

   Copilot will automatically suggest an entire function body in grayed text. The exact suggestion may vary.
1. To accept the suggestion, press <kbd>Tab</kbd>.


When you're ready, save your changes, and commit when everything looks good.

## Next steps

* Customize Copilot in your IDE with custom instructions. See [Add Repository Instructions In Your Ide](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions-in-your-ide/add-repository-instructions-in-your-ide#further-reading).
* Try the GitHub Copilot app. See [Quickstart Copilot App](https://docs.github.com/en/copilot/get-started/quickstart-copilot-app).
