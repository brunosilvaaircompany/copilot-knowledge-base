# About remote control of GitHub Copilot CLI sessions

This article explains the concepts around remote control of Copilot CLI sessions. For instructions on how to enable remote control, see [Steer Remotely](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/steer-remotely).

## When remote control helps

By default, GitHub Copilot CLI sessions are only steerable from your local machine. However, you can enable remote control of the session. Remote control is useful when you want to view progress or respond to prompts and permission requests, without having to remain at the machine where the session is running. For example:

* **You step away from your workstation**: Keep interacting with Copilot from your phone or another device, without returning to the machine where the session is running.
* **A long-running task needs your input**: Approve permission requests and answer questions as they come up, so the task isn't blocked while you're away.
* **You want a quick status check**: Glance at session progress from GitHub Mobile while you work on something else.

## Prerequisites

Remote control requires:

* **Policy enablement**: If your Copilot seat comes from an organization, an enterprise or organization owner must set the "Store local sessions in the Cloud" policy to "View and control" (unconfigured by default). See [Administering remote control](#administering-remote-control) later in this article.
* **The machine must be online**: The CLI session must be actively running in a terminal on a machine with an internet connection. If the machine goes to sleep or loses its connection, remote control is unavailable until the machine is back online. See [Reconnection](#reconnection) later in this article.
* **An interactive session**: Remote access is only available for interactive sessions. It is not available when you use the CLI programmatically with the `--prompt` command-line option, for example when you use the CLI in a script.

Remote control does not require the working directory to contain a Git repository hosted on GitHub.com. For users whose Copilot seat comes from an enterprise or organization, the applicable enterprise or organization policy, not repository hosting, determines whether remote control is available. See [Administering remote control](#administering-remote-control) later in this article.

## Accessing a session remotely

When you enable remote control for a Copilot CLI session, you can go to GitHub.com or GitHub Mobile and find the session in the list of your recent agent sessions. The remote interface is updated in real time, allowing you to monitor ongoing output from the session and respond to prompts and permission requests as they come in.

Both the local terminal and the remote interface are active at the same time. You can enter commands in either interface. Copilot CLI uses the first response it receives to any prompt or permission request.

Your session continues to run on your local machine. The remote interface provides a way to interact with the session, but the CLI itself (and all the tools, shell commands, and file operations it runs) remains on the machine where you started the session.

## What you can do remotely

When connected to a session remotely from GitHub.com or GitHub Mobile, you can:

* **Respond to permission requests**: Approve or deny tool, file path, and URL permission requests.
* **Respond to questions**: Answer when Copilot asks you to supply more information or make a decision.
* **Approve or reject plans**: Respond to plan approval prompts when Copilot is in plan mode.
* **Submit new prompts**: Enter questions or instructions, just as you would in the terminal.
* **Switch modes**: Change the session mode—for example, between interactive and plan mode.
* **End the current operation**: Cancel the agent's current work.

> [!NOTE]
> Slash commands—such as `/allow-all`—are not currently available from the remote interface.


## Reconnection

If the connection between your local machine and GitHub is temporarily lost—for example, due to a network interruption—you can continue using the session remotely as soon as the connection is restored.

You can use the `/keep-alive` slash command to prevent your machine from going to sleep. See [Preventing your machine from going to sleep](/copilot/how-tos/copilot-cli/use-copilot-cli/steer-remotely#preventing-your-machine-from-going-to-sleep).

When you use `copilot --continue` or `copilot --resume` to resume a CLI session for which remote control was enabled, remote control is automatically re-enabled.


## Security and privacy

Remote control is only available to the person signed in to GitHub with the same account that started the CLI session. No one else can view or interact with your sessions remotely.

When remote control is enabled:

* Session events (conversation messages, tool execution events, and permission requests) are sent from your local machine to GitHub.
* Remote commands are polled by Copilot CLI from GitHub and injected into your local session.
* The CLI continues to run locally. All shell commands, file operations, and tool executions happen on your machine. Remote control does not grant direct access to your machine beyond what the CLI agent can do within the session.

## Administering remote control

Enterprise and organization owners control whether users can enable remote control using the "Store local sessions in the Cloud" policy.

* **Organization-level policy** (unconfigured by default): Organization owners can set this policy to "View from cloud" (syncing only) or "View and control" (syncing plus remote control). If the policy is disabled or unconfigured, neither session syncing nor remote control is available for the organization's users.
* **Enterprise-level policy**: Enterprise owners can enforce a setting across all organizations, or select "Let organizations decide" to let each organization choose its own level. If the enterprise enforces "View and control," all organizations under it receive that setting.

For remote control to be available, the applicable policy (enterprise-enforced or organization-level) must be set to "View and control."

Enterprise owners can further restrict remote control using the `remoteControl` enterprise managed setting, which applies on top of the "Store local sessions in the Cloud" policy. This setting is applied per device and controls whether a session **hosted on that device** can be remotely controlled: it can require that the controlling client is SSO-authorized for specific organizations, or disable remote control of sessions hosted on that device entirely. It doesn't affect the same user's ability to remotely control sessions hosted on other devices. See [Enterprise Managed Settings](https://docs.github.com/en/copilot/reference/enterprise-administrators/enterprise-managed-settings).

For more information, see [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies) and [Administer Copilot CLI For Your Enterprise](https://docs.github.com/en/copilot/how-tos/copilot-cli/administer-copilot-cli-for-your-enterprise).
