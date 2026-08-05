# GitHub Codespaces logs

Information on GitHub Codespaces is output to various logs:

{% webui %}

* Codespace logs
* Creation logs
* Browser console logs (for the VS Code web client)

Extension logs are available if you are using GitHub Codespaces in VS Code. Click the "Visual Studio Code" tab above for details.

{% endwebui %}

{% vscode %}

* Codespace logs
* Creation logs
* Extension logs (for the VS Code desktop application)

Browser logs are available if you are using GitHub Codespaces in your browser. Click the "Web browser" tab above for details.

{% endvscode %}

{% cli %}

* Codespace logs
* Creation logs

Other logs are available if you are using GitHub Codespaces in VS Code or in your web browser. Click the tabs above for details.

{% endcli %}

{% webui %}

## Codespace logs

These logs contain detailed information about the codespace, the container, the session, and the VS Code environment. They are useful for diagnosing connection issues and other unexpected behavior. For example, the codespace freezes but the "Reload Windows" option unfreezes it for a few minutes, or you are randomly disconnected from the codespace but able to reconnect immediately.


1. If you are using GitHub Codespaces in the browser, ensure that you are connected to the codespace you want to debug.
1. Open the VS Code Command Palette (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)) and type `export logs`. Select **Codespaces: Export Logs** from the list to download the logs.
1. Define where to save the zip archive of logs then click **Save** (desktop) or click **OK** (web).
1. If you are using GitHub Codespaces in the browser, right-click on the zip archive of logs from the Explorer view and select **Download…** to download them to your local machine.

{% endwebui %}

{% vscode %}

## Codespace logs

These logs contain detailed information about the codespace, the container, the session, and the VS Code environment. They are useful for diagnosing connection issues and other unexpected behavior. For example, the codespace freezes but the "Reload Windows" option unfreezes it for a few minutes, or you are randomly disconnected from the codespace but able to reconnect immediately.


1. Open the VS Code Command Palette (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)) and type `export log`. Select **Codespaces: Export Logs** from the list to download the logs.
1. Define where to save the zip archive of logs then click **Save** (desktop) or click **OK** (web).

{% endvscode %}

{% cli %}

## Codespace logs

These logs contain detailed information about the codespace, the container, the session, and the VS Code environment. They are useful for diagnosing connection issues and other unexpected behavior. For example, the codespace freezes but the "Reload Windows" option unfreezes it for a few minutes, or you are randomly disconnected from the codespace but able to reconnect immediately.


Currently you can't use GitHub CLI to access these logs. To access them, open your codespace in VS Code or in a browser.

{% endcli %}

## Creation logs

These logs contain information about the container, dev container, and their configuration. They are useful for debugging configuration and setup problems.

{% webui %}

1. Connect to the codespace you want to debug.
1. Open the VS Code Command Palette (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)) and type `creation log`. Select **Codespaces: View Creation Log** from the list to open the `creation.log` file.

If you want to share the log with support, you can copy the text from the creation log into a text editor and save the file locally.

{% endwebui %}

{% vscode %}

Open the VS Code Command Palette (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)) and type `creation log`. Select **Codespaces: View Creation Log** from the list to open the `creation.log` file.

If you want to share the log with support, you can copy the text from the creation log into a text editor and save the file locally.

{% endvscode %}

{% cli %}

> [!NOTE]
> To learn more about GitHub CLI, see [About GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli).


To see the creation log use the `gh codespace logs` subcommand. After entering the command choose from the list of codespaces that's displayed.

```shell
gh codespace logs
```

For more information about this command, see [the GitHub CLI manual](https://cli.github.com/manual/gh_codespace_logs).

If you want to share the log with support, you can save the output to a file:

```shell
gh codespace logs -c <CODESPACE-NAME> > /path/to/logs.txt
```

{% endcli %}

{% vscode %}

## Extension logs

These logs are available for VS Code desktop users only. They are useful if it seems like the GitHub Codespaces extension or VS Code editor are having issues that prevent creation or connection.

1. In VS Code, open the Command Palette.
1. Type `logs` and select **Developer: Open Extension Logs Folder**.
1. Your system's file explorer is displayed showing various log files and folders. Open the folder `output_logging_DATETIME`.

From this view, you can access logs generated by extensions you use in VS Code, including GitHub Codespaces.

{% endvscode %}

{% webui %}

## Browser console logs

These logs are useful only if you want to debug problems with using GitHub Codespaces in the browser. They are useful for debugging problems creating and connecting to GitHub Codespaces.

The following instructions are for Chrome. The steps for other browsers are similar.

1. In the browser window for the codespace you want to debug, open the developer tools window.
1. Click the **Console** tab.
1. Show the console sidebar, if it is not already displayed. For more information, see [Console features reference](https://developer.chrome.com/docs/devtools/console/reference#sidebar) in the Chrome for Developers documentation.
1. In the sidebar, click **NUMBER errors** to show only the errors.
1. In the log area on the right, right-click and select **Save as** to save a copy of the errors to your local machine.

   ![Screenshot of the developer tools panel in the Chrome browser. The right-click menu is displayed, showing the option "Save as."](/assets/images/help/codespaces/browser-console-log-save.png)

{% endwebui %}

## Further reading

* [Reviewing Your Organizations Audit Logs For GitHub Codespaces](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/reviewing-your-organizations-audit-logs-for-github-codespaces)
* [Reviewing Your Security Logs For GitHub Codespaces](https://docs.github.com/en/codespaces/managing-your-codespaces/reviewing-your-security-logs-for-github-codespaces)
