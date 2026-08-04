# Viewing logs for GitHub Copilot in your environment

{% jetbrains %}

## Collecting log files

The location of the log files depends on the JetBrains IDE you are using. For more information, see [Configure In Ide?Tool=Jetbrains](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/configure-in-ide?tool=jetbrains).

These steps describe how to view and collect the log files for the following JetBrains IDEs:

* IntelliJ IDEA
* Android Studio
* GoLand
* PhpStorm
* PyCharm
* RubyMine
* WebStorm

The GitHub Copilot extension logs to the IDEA log location for IntelliJ plugins.
1. In your JetBrains IDE, open the **Help** menu.
1. Go to **Show Log in Finder**.
1. Open the `idea.log` in your preferred editor and look for any errors related to GitHub or GitHub Copilot.

For more information, see the [Locating IDE log files](https://intellij-support.jetbrains.com/hc/en-us/articles/207241085-Locating-IDE-log-files) in the IntelliJ documentation.

### Collect log files from Rider

1. In Rider, open the **Help** menu.
1. Go to **Diagnostic Tools**.
1. Go to **Show Log in**.
1. Open the `idea.log` in your preferred editor and look for any errors related to GitHub or GitHub Copilot.

## Enabling debug mode

If you find the log file doesn't contain enough information to resolve an issue, it may help to enable debug logging temporarily. This can be especially helpful for debugging network-related issues.

1. In the menu bar, click **Help**, select **Diagnostic Tools**, and click **Debug Log Settings...**.

   ![Screenshot of the menu bar in a JetBrains IDE. The "Help" menu and "Diagnostic Tools" submenu are expanded and "Debug Log Settings" is highlighted.](/assets/images/help/copilot/jetbrains-debug-log.png)

1. In the "Custom Debug Log Configuration" window, add a new line with the following content, then click **OK**.

   ```text copy
   #com.github.copilot:trace
   ```

1. Keep using your IDE until you encounter the issue again, then collect the log file as described in [Collecting log files](#collecting-log-files).
1. When you have the information you need, disable debug mode by removing `#com.github.copilot:trace` from the "Custom Debug Log Configuration" window.

## Using the Agent Debug Panel

> [!NOTE]
> This feature is in public preview and subject to change.

The Agent Debug Panel shows a chronological event log of agent interactions during a Copilot CLI session. Use the panel to debug custom agents and subagent workflows.

1. Open Copilot Chat in your JetBrains IDE.
1. In the agent picker, select Copilot CLI.
1. In the top-right corner of the chat panel, click the settings icon, then click **Agent Debug Panel**.
1. For full support across current and historical sessions, enable debug file logging.
   1. Open **Settings**.
   1. In the sidebar, click **Tools**, then **Copilot**, then **Chat**.
   1. Select **Enable Agent debug File Logging**.

If you use Copilot Business or Copilot Enterprise, ask your administrator to enable the Editor preview features policy before you use this feature.

## Viewing network connectivity diagnostics logs

If you encounter problems connecting to GitHub Copilot due to network restrictions, firewalls, or your proxy setup, use the following troubleshooting steps.

1. In the menu bar, click **Tools**, select **GitHub Copilot**, and click **Log Diagnostics**.
1. The `idea.log` file should open in the JetBrains IDE with the diagnostics output. Alternatively, you can open the `idea.log` file in your preferred editor.
1. Check the section on **Reachability** to determine if GitHub Copilot can access the necessary services.

## Troubleshooting certificate-related errors

If you're using a custom certificate, ensure the certificate is installed correctly in the operating system, see [Troubleshoot Network Errors](https://docs.github.com/en/copilot/how-tos/troubleshoot-copilot/troubleshoot-network-errors). Then use the following troubleshooting steps.

1. In the menu bar, click **Tools**, select **GitHub Copilot**, and click **Log CA Certificates**.
1. The `idea.log` file should open in the JetBrains IDE with the trusted CA certificates logged in PEM format. You may need to refresh the `idea.log` file to view all of the output. Alternatively, you can open the `idea.log` file in your preferred editor.
1. Check to see if the expected custom certificate is included in the certificate list output.

{% endjetbrains %}

{% visualstudio %}

## Viewing logs in Visual Studio

The log files for the GitHub Copilot extension are stored in the standard log location for Visual Studio extensions.
1. Open the **View** menu in Visual Studio.
1. Click **Output**.
1. On the right of the Output view pane, select **GitHub Copilot** from the dropdown menu.

## Further reading

* [Log all activity to the log file for troubleshooting](https://learn.microsoft.com/en-us/visualstudio/ide/reference/log-devenv-exe?view=vs-2022) in the Visual Studio documentation

{% endvisualstudio %}

{% vscode %}

## Viewing and collecting log files

The log files for the GitHub Copilot extension are stored in the standard log location for Visual Studio Code extensions. The log files are useful for diagnosing connection issues.
1. Open the **View** menu in Visual Studio Code.
1. Click **Output**.
1. On the right of the Output view pane, select **GitHub Copilot** from the dropdown menu.

Alternatively, you can open the log folder for Visual Studio Code extensions in your system's file explorer. This is useful if you need to forward the log files to the support team.

1. Open the VS Code Command Palette
   * For Mac:
      * Use: <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd>
   * For Windows or Linux:
      * Use: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>
1. Type "Logs", and then select **Developer: Open Extension Logs Folder** from the list.

## Enabling debug mode

If you find the log file doesn't contain enough information to resolve an issue, it may help to enable debug logging temporarily. This can be especially helpful for debugging network-related issues.

1. Open the VS Code Command Palette
   * For Mac:
      * Use: <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd>
   * For Windows or Linux:
      * Use: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>
1. Type "Developer", then select **Developer: Set Log Level**.
1. Type "GitHub", then select the GitHub extension you're troubleshooting:
    * **GitHub Copilot Chat** for the Copilot Chat extension.
    * **GitHub** for the GitHub Copilot Extension.
1. Select **Trace** from the dropdown list.
1. When you have the information you need, disable debug mode by repeating steps 1 through 4 and returning the logging level to **Info**.

## Viewing network connectivity diagnostics logs

If you encounter problems connecting to GitHub Copilot due to network restrictions, firewalls, or your proxy setup, use the following troubleshooting steps.

1. Open the VS Code Command Palette
   * For Mac:
      * Use: <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd>
   * For Windows or Linux:
      * Use: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>
1. Type "Diagnostics", and then select **Developer: Chat Diagnostics** from the list. This opens a new editor with the relevant information that you can inspect yourself or share with the support team.
1. Check the section on **Reachability** to determine if GitHub Copilot can actually access the necessary services.

## Viewing Electron logs

In rare cases, errors might not be propagated to the corresponding error handlers and are not logged in the regular locations. If you encounter errors and there is nothing in the logs, you may try to see the logs from the process running VS Code and the extension.

1. Open the VS Code Command Palette
   * For Mac:
      * Use: <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd>
   * For Windows or Linux:
      * Use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>
1. Type "Toggle", and then select **Developer: Toggle Developer Tools** from the list.
1. In the Developer Tools window, select the **Console** tab to see any errors or warnings.

   ![Screenshot of the Developer Tools window in Visual Studio Code. The console tab is outlined in dark orange.](/assets/images/help/copilot/vsc-electron-logs.png)

## Further reading

* [Troubleshoot Network Errors](https://docs.github.com/en/copilot/how-tos/troubleshoot-copilot/troubleshoot-network-errors)
* [Network Connections in Visual Studio Code](https://code.visualstudio.com/docs/setup/network) in the Visual Studio Code documentation

{% endvscode %}

{% vimneovim %}

## Checking if GitHub Copilot is operational

To check if GitHub Copilot is operational, run the following command in Vim/Neovim:

    :Copilot status

{% endvimneovim %}

{% xcode %}

## Collecting log files

The log files for the GitHub Copilot extension for Xcode are stored in `~/Library/Logs/GitHubCopilot/`. The most recent file is named `github-copilot-for-xcode.log`.

1. Open the GitHub Copilot for Xcode application.
1. At the top of the application window, click **Advanced**.
1. In the "Logging" section, click **Open Copilot Log Folder**.

## Enabling verbose logs

You can enable verbose logging to help troubleshoot issues with the GitHub Copilot extension for Xcode.

1. Open the GitHub Copilot for Xcode application.
1. At the top of the application window, click **Advanced**.
1. In the "Logging" section, next to "Verbose Logging", toggle the switch to the right.

{% endxcode %}
