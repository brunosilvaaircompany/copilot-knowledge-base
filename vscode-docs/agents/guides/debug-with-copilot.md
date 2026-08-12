# Debug with GitHub Copilot

GitHub Copilot can help improve your debugging workflow in Visual Studio Code. Copilot can assist with the setup of the debug configuration for your project and provide suggestions for fixing issues discovered during debugging. This article gives an overview of how to use Copilot for debugging applications in VS Code.

Copilot can help with the following debugging tasks:

* **Configure debug settings**: generate and customize launch configurations for your project.
* **Start a debugging session**: use `copilot-debug` to start a debugging session from the terminal.
* **Fix issues**: receive suggestions for fixing issues discovered during debugging.

**TIP:** If you don't yet have a Copilot subscription, you can use Copilot for free by signing up for the [Copilot Free plan](https://github.com/github-copilot/signup) and get a monthly allowance of inline suggestions and AI credits.

## Set up debug configuration with Copilot

VS Code uses the `launch.json` file to store [debug configuration](https://code.visualstudio.com/docs/debugtest/debugging-configuration). Copilot can help you create and customize this file to set up debugging for your project.

1. Open the Chat view (`kb(workbench.action.chat.open)`).
1. Enter the `/startDebugging` command.
1. Follow Copilot's guidance to set up debugging for your project.

Alternatively, you can use a natural language prompt like:

* "Create a debug configuration for a Django app"
* "Set up debugging for a React Native app"
* "Configure debugging for a Flask application"

## Start debugging with Copilot

The `copilot-debug` terminal command simplifies the process of configuring and starting a debugging session. Prefix the command you'd use for starting your application with `copilot-debug` to have Copilot automatically configure and start a debugging session.

1. Open the integrated terminal (`kb(workbench.action.terminal.toggleTerminal)`).

1. Enter `copilot-debug` followed by your application's start command. For example:

    ```bash
    copilot-debug node app.js
    ```

    or

    ```bash
    copilot-debug python manage.py
    ```

1. Copilot launches a debugging session for your application. You can now use the built-in debugging features in VS Code.

Learn more about [debugging in VS Code](https://code.visualstudio.com/docs/debugtest/debugging).

## Fix coding issues with Copilot

You can use Copilot Chat to help you fix coding issues or improve your code.

### Use chat prompts

1. Open your application code file.

1. Open one of these views:
    * Chat view (`kb(workbench.action.chat.open)`)
    * Inline Chat (`kb(inlineChat.start)`)

1. Enter a prompt like:
    * "/fix"
    * "Fix this #selection"
    * "Validate input for this function"
    * "Refactor this code"
    * "Improve the performance of this code"

Learn more about using [Copilot Chat](../../chat/chat-overview.md) in VS Code.

### Use editor smart actions

To fix coding issues for your application code without writing a prompt, you can use the editor smart actions.

1. Open your application code file.
1. Select the code you want to fix.
1. Right-click and select **Generate Code** > **Fix**.

    VS Code provides a code suggestion to fix the code.

1. Optionally, refine the generated code by providing additional context in the chat prompt.

## Next steps

* Explore [general debugging features in VS Code](https://code.visualstudio.com/docs/debugtest/debugging).
* Learn more about [Copilot in VS Code](https://code.visualstudio.com/docs/agent-native/overview).
