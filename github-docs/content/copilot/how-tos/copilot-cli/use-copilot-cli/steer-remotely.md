# Steering a GitHub Copilot CLI session from another device

Remote control lets you connect to a running Copilot CLI session from any browser or from GitHub Mobile. You can view session output, respond to permission requests, and continue working in the session without being at the machine where the session is running.

This article explains how to enable and use remote control. For more conceptual information, see [About Remote Control](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-remote-control).

Remote access is different from session syncing. Your Copilot CLI sessions are synced to your GitHub account by default, and synced sessions appear as view-only on GitHub.com and GitHub Mobile. These sessions are not steerable. To steer a session remotely, you must enable remote control. For more information about session syncing, see [Chronicle](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/chronicle#session-syncing).


## Prerequisites

* The machine where the CLI session is running must be online, with the session actively running in a terminal.

  > [!TIP]
  > Use the `/keep-alive` slash command to prevent your machine from going to sleep while you're away. See [Preventing your machine from going to sleep](#preventing-your-machine-from-going-to-sleep).

* Remote control does not require a Git repository hosted on GitHub.com. You can enable remote control from directories that are not themselves Git repositories, including parent directories containing multiple repositories, and from repositories hosted somewhere other than GitHub.com. Sessions started outside of a GitHub repository appear unassociated with any repository ("no repository") and are only listed on your agents page at [github.com/copilot/agents](https://github.com/copilot/agents). Sessions started inside a GitHub repository also appear on that repository's **Agents** tab.

  In some cases, the CLI may still be unable to resolve the working directory's repository—for example, if a Git remote is configured but inaccessible. When this happens, remote control is disabled and the CLI displays a "Remote session disabled" message.

## Enabling remote control for a session

You can enable remote control in several ways:

* With a slash command during an interactive session.
* With a command-line option when you start Copilot CLI.
* By configuring the CLI to enable remote control by default for all interactive sessions.
* From JetBrains IDE settings before you start a session.

### Using the `/remote` slash command

If you are already in an interactive session and want to enable remote control, enter:

```copilot copy
/remote on
```

The CLI connects to GitHub.com and displays details for accessing the session remotely—see [Accessing a session from GitHub.com](#accessing-a-session-from-githubcom) and [Accessing a session from GitHub Mobile](#accessing-a-session-from-github-mobile) later in this article.

You can use the `/remote` slash command without an argument to check the current remote control status, or to redisplay the remote access details if remote control is currently enabled. If you want to end the remote connection for the current session, enter `/remote off`.

### Using the `--remote` command-line option

If you think you may want to access a session remotely, you can start the CLI with the `--remote` command-line option. This avoids the need to remember to use the `/remote` slash command during the session.

```bash copy
copilot --remote
```

Details for accessing the session remotely are displayed when the interactive session starts and can be displayed again at any time by using the `/remote` slash command.

### Configuring remote control to always be enabled

If you always want your interactive CLI sessions to be remotely accessible, add the following to your Copilot settings file (typically located at `~/.copilot/settings.json`):

```json copy
{
  "remoteSessions": true
}
```

To override this setting for a particular session, use the `--no-remote` option when you start the session:

```bash copy
copilot --no-remote
```

> [!NOTE]
> The command-line options `--remote` and `--no-remote` always take precedence over the `remote` setting in the settings file.

### Using JetBrains IDE settings

If you use Copilot CLI from a JetBrains IDE, you can enable remote control from the IDE before you start a session.

1. In your JetBrains IDE, click the **File** menu (Windows), or the name of the application in the menu bar (macOS), then click **Settings**.

1. In the left sidebar click **Tools**, click **GitHub Copilot**
, then click **Chat**.
1. Select **Enable Copilot CLI Remote**.
1. Start an interactive Copilot CLI session from the IDE.

When this setting is enabled, you can use `/remote` in the session at any time to view the current remote control status or redisplay the links and QR code for accessing the session remotely.

## Accessing a session from GitHub.com

When you enable remote control, the CLI displays a link to the session on GitHub.com.

Use the link to access the session in your default web browser. You must be signed in to GitHub with the same account that started the CLI session.

You can also access the session without the link:

1. Log on to GitHub.com on any computer.
1. In the top-left corner of GitHub, click {% octicon "three-bars" aria-label="Open menu" %}.
1. Click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**.

   Your CLI session is listed under "Recent agent sessions."

1. Optionally, use the **Type** filter at the top right of the list to show only Copilot CLI sessions.
1. Click your Copilot CLI session to open it.

If you started the session from a local copy of a GitHub repository, you can also access the session from the **Agents** tab of that repository on GitHub.com.

> [!IMPORTANT]
> Remotely accessible sessions are user-specific: you can only access your own Copilot CLI sessions. Other GitHub users cannot access your sessions.

## Accessing a session from GitHub Mobile

A Copilot CLI session is available in GitHub Mobile as soon as you enable remote control. To find your session in GitHub Mobile:

1. Tap the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot** button in the bottom right corner of the screen.

   The session is listed under "Agent sessions."

1. Tap the session to open it.

### Use a QR code to quickly open a session on your phone

1. In an interactive session, enter the `/remote` slash command to redisplay the remote session details.
1. Press <kbd>Ctrl</kbd>+<kbd>E</kbd> to toggle on/off display of a QR code.

   > [!NOTE]
   > This keyboard shortcut expands/collapses all details in the session conversation, not just the QR code. It only works if the input field is currently empty.

1. Scan the QR code with your phone to go directly to the session in GitHub Mobile.

## Preventing your machine from going to sleep

You can use the `/keep-alive` slash command to prevent your machine from going to sleep. This allows you to maintain the remote connection and continue interacting with the session from GitHub.com or GitHub Mobile.

In an interactive session, enter `/keep-alive OPTION`, where `OPTION` is one of:

* `on`: Prevents the machine from going to sleep while the CLI session is active.
* `off`: Allows the machine to go to sleep as normal.
* `busy`: Prevents the machine from going to sleep only while Copilot is working on a task. Once the agent completes a task the machine can go to sleep as normal. The machine will not go to sleep if Copilot is waiting for you to respond to a request for input from you.
* `NUMBERm`, `NUMBERh`, or `NUMBERd` (for example, `30m`, `8h`, `1d`): Prevents the machine from going to sleep for a specific number of minutes, hours, or days. If a bare number is provided without a suffix, it is treated as minutes.

Without passing an `OPTION`, the `/keep-alive` command displays the current keep-alive status.

## Reviewing previous sessions

You can view old Copilot CLI sessions on GitHub.com or in GitHub Mobile.

1. Go to your list of recent agent sessions on GitHub.com or in GitHub Mobile. See [Accessing a session from github.com](#accessing-a-session-from-githubcom) and [Accessing a session from GitHub Mobile](#accessing-a-session-from-github-mobile) earlier in this article.
1. Click or tap the session you want to review.

On GitHub.com, a message tells you the `copilot --resume` command to use if you want to resume the session. Enter this command in your terminal on the machine where you ran that session.

## Resuming a session

When you use `copilot --continue` or `copilot --resume` to resume a CLI session for which remote control was enabled, remote control is automatically re-enabled.


## Preventing remote control

Remote control is disabled by default, but may be enabled in your Copilot settings file (typically `~/.copilot/settings.json`). You can ensure a session is not remotely controllable by:

* **For a single session**: Start the CLI with `--no-remote` to prevent remote control for that session, regardless of your settings file value.
* **Permanently**: Remove the `"remoteSessions": true` setting from `~/.copilot/settings.json`, or set it to `false`.

Enterprise owners can also restrict remote control of sessions hosted on your device using enterprise managed settings, regardless of your personal settings. Depending on the configured policy, remote control of sessions on your device may be disabled entirely, or only available to a controlling client that is SSO-authorized for specific organizations. This doesn't affect your ability to remotely control your own sessions hosted on other devices. See [Enterprise Managed Settings](https://docs.github.com/en/copilot/reference/enterprise-administrators/enterprise-managed-settings).

## Further reading

* [Copilot CLI sessions in Visual Studio Code](https://code.visualstudio.com/docs/copilot/agents/copilot-cli) in the VS Code documentation.
