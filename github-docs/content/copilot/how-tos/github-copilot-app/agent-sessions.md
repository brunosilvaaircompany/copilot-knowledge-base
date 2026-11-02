# Working with agent sessions in the GitHub Copilot app

You can start a session from a repository to tackle work in that repository, or start a project to give Copilot a goal and let it coordinate the work. Projects can span one or more repositories or focus on tasks that don't require a repository. See [Working With Projects](https://docs.github.com/en/copilot/how-tos/github-copilot-app/working-with-projects).

## Starting a session

You can run sessions in separate worktrees to make progress on several tasks in parallel, or work in an existing checkout.

1. In the sidebar, next to **Sessions**, click {% octicon "plus" aria-label="New" %}.
1. Under "Start session in," select a connected repository or folder. To connect one first, choose **Add GitHub repository**, **Clone repository**, or **Open local folder**.
1. Below the prompt box, open the "Environment" dropdown menu and select **This computer** or **Cloud**. Cloud sessions run in isolated sandboxes hosted by GitHub. See [Using cloud and local sandboxes](#using-cloud-and-local-sandboxes).
1. Below the prompt box, open the "Workspace" dropdown menu and select **New worktree** to use a separate working copy of the repository, or **Current checkout** to work in the existing checkout. You can also choose the base branch.
1. Select a session mode, model, and reasoning effort from the dropdowns below the prompt field. If you choose **Copilot Fusion** and an effort level, Copilot analyzes each task and selects a model to complete it, orchestrating multiple models through the available execution patterns when needed.
1. Describe the task in the prompt field. You can reference issues with `#`, add files with `@`, or use `/` for commands.

The agent starts working. Your active sessions appear in the sidebar grouped by repository—click any session to switch to it.

For a list of commands you can use in the prompt box, see [Slash Commands](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands).

## Choosing a session mode

The session mode controls how the agent works with you. It is separate from tool permissions, which control when the agent asks before running a tool. You can set the mode from the dropdown below the prompt field and change it at any time.

* **Interactive**: You and the agent work together. The agent suggests changes and waits for your input before proceeding.
* **Plan**: The agent creates a plan first. You review and approve the plan before the agent executes it.
* **Autopilot**: The agent works fully autonomously—writing code, running tests, and iterating without waiting for input.

## Choosing tool permissions

In an app session, Copilot uses tools to complete tasks, such as running terminal commands, reading and editing files, searching your codebase, fetching web content, and delegating work to specialized agents. Some tools can modify your system or access external resources, so tool permissions control when Copilot asks for your approval before using them.

You can choose between three options that determine how much you want to be involved in approving the tools Copilot uses.

* **Manual approval (Ask every time)**: Ask for your approval before running tools. This gives you the most oversight but requires you to respond to the most prompts.
* **Assisted**: Use a model to assess each request, automatically approving requests it judges to be safe and prompting you to approve potentially unsafe requests. Assisted permissions reduces prompts while maintaining oversight of potentially risky actions.
* **Unconditional approval (Approve all)**: Run tools without asking for your approval. This is the most convenient option but removes your oversight of individual actions.

For more information about using assisted permissions, see [Allowing Safe Commands](https://docs.github.com/en/copilot/concepts/agents/allowing-safe-commands).

To choose the permission level for an individual session:

1. In the session, click the mode below the prompt field.
1. Hover over **Tool permissions**.
1. Select **Ask every time**, **Assisted**, or **Approve all**.

To set the default permission level for future local sessions:

1. Open the app settings.
1. Click **Sessions**.
1. Under **Tool permissions**, select **Ask every time**, **Assisted**, or **Approve all**.

## Choosing a model

You can select a model and reasoning effort from the dropdowns below the prompt field. Higher reasoning effort gives the agent more time to think through complex problems but may take longer. You can change both settings at any time during a session.

If you choose **Fusion** in the model picker and then an effort level, the app automatically selects the models and execution patterns for your task. While Copilot Fusion works, you can follow the progress of each step and the model being used. When the response is provided, you can hover over the effort level name below the response to see a list of models used. For more information, see [Copilot Fusion](https://docs.github.com/en/copilot/concepts/models/copilot-fusion).

If you configured your own model provider in the app, those models also appear in the picker. For setup steps, see [Add Llm Models](https://docs.github.com/en/copilot/how-tos/github-copilot-app/add-llm-models).

Hover over the {% octicon "info" aria-label="the info icon" %} icon in the model picker to see model details.

## Using chats

The **Chats** section in the sidebar opens a conversation mode without creating a dedicated branch or worktree. Use it for brainstorming, asking questions, or exploring ideas before starting a session. Your chat history is saved and listed by conversation name.

To archive a chat without losing its history, right-click the chat in the sidebar to open its menu, then click **Archive chat**.

## Managing sessions and chats

Use **Manage sessions** to view, search, and filter sessions and chats, including archived chats. You can select multiple items to archive or delete, and restore chats that you previously archived. The view also shows separate, sortable columns for the disk space used by working files and chat history.

1. Open the app settings, then select **Sessions**.
1. Click **Manage sessions**.
1. Search or filter to find the sessions or chats you want to manage.
1. Select one or more sessions or chats, then archive or delete them. To restore an archived chat, find the chat, then restore it.

## Using cloud and local sandboxes

Cloud and local sandboxes protect sessions in different ways:

* **Cloud sandbox**: Runs the entire session in an isolated environment hosted by GitHub. Use a cloud sandbox when you want to keep the session off your machine or run several resource-intensive tasks in parallel. Select **Cloud** from the **Environment** dropdown menu when starting a session. You can then follow and steer the session from any Copilot client.
* **Local sandbox**: Runs the session on your machine, but restricts the filesystem, network, and credential access available to agent-run tools. Use local sandboxing when the agent needs your local tools or development services, but you want to limit its access to the rest of your machine. Configure the default for new local repository and working tree sessions in the project settings, or use `/sandbox on` or `/sandbox off` to change an active local session.

> [!NOTE]
> Cloud sandboxes and local sandboxing are separate technologies. A cloud sandbox is a GitHub-hosted environment that runs the whole session. Local sandboxing is a set of operating system restrictions on your own machine. Settings, policies, and commands for one don't apply to the other.


Local sandboxing does not apply to cloud sandbox sessions or sessions that run on a remote host. For more information about how both types of sandbox work, see [About Cloud And Local Sandboxes](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes) and [About Cloud Sandboxes](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes). To enable local sandboxing, see [Using Local Sandboxing](https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing).

## Running sessions in WSL

On Windows, you can use the app to run agent sessions in a Windows Subsystem for Linux (WSL) 2 distribution. Before you begin, sign in to the app with your GitHub account and make sure WSL 2 is installed with a repository or folder available in the distribution.

1. Open a terminal in your WSL distribution and run `gh auth login` to authenticate with GitHub. Authentication inside WSL is separate from signing in to the app on Windows.
1. Open the app settings, then select **Environments** in the sidebar. The app automatically discovers installed WSL distributions.
1. Click **Connect** for your WSL distribution.
1. Open the distribution's details. Under **Repositories and folders**, click **Add repository or folder**.
1. Select or type the Linux path to your repository or folder, then click **Add repository** or **Add folder**.
1. Start a session for the repository or folder. From the **Environment** dropdown menu under the prompt box, select your distribution under **Environments**.

If **Environments** is not visible, select **Experimental** in app settings and make sure **WSL hosts** is enabled.

## Using `/security-review` in app sessions

> [!NOTE]
> The `/security-review` slash command is currently in public preview and subject to change.

You can run the `/security-review` slash command in an active agent session to review your current workstream changes for high-confidence vulnerabilities. The command returns prioritized findings with severity and confidence scores, plus suggested fixes you can apply and verify in the same session.

1. Open an active session that has in-progress code changes.
1. In the prompt box, type `/security-review` and press <kbd>Enter</kbd>.
1. Review the findings, then update your code changes as needed.

This lightweight, on-demand review complements GitHub code scanning, Dependabot, and secret scanning by giving you an initial check on your local changes before opening a pull request.

To work with local review findings and existing code scanning alerts alongside your session, install the GitHub security extension. See [View And Fix Security Alerts](https://docs.github.com/en/copilot/how-tos/github-copilot-app/view-and-fix-security-alerts).

## Using the rubber duck agent

The rubber duck agent is a built-in agent that acts as a constructive critic, reviewing your current plan, implementation, or tests and returning concrete feedback. The agent runs on a different model from the one driving your current session.

When rubber duck is enabled, Copilot can consult it automatically at key points while it works. The main session agent passes work to the rubber duck agent, receives the critique, then decides how to apply that feedback before continuing.

You can also manually ask Copilot to get a review from the rubber duck agent.

1. Open an active session.
1. In the prompt box, type `/rubber-duck` and ask for a critique of your current plan, implementation, or tests.

For more information on the rubber duck agent, see [Getting A Second Opinion](https://docs.github.com/en/copilot/concepts/agent-capabilities/choosing-and-delegating-agent-work/getting-a-second-opinion).

## Using `/chronicle` with app sessions

Because the GitHub Copilot app is built on GitHub Copilot CLI, you can use Copilot CLI session history features such as `/chronicle` to get insights from work you did in the app and in other Copilot CLI sessions.

For example, you can use `/chronicle standup` to summarize recent work. For more information, see [Chronicle](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/chronicle).

## Using voice dictation

You can use voice dictation to speak prompts in a session instead of typing them.

Before you can use voice dictation, you need to configure it in the app settings.

1. Open the app settings, then select the **Voice dictation** tab.
1. Choose a keyboard shortcut.
1. Allow microphone access in your operating system settings.
1. Download a local transcription model.

After setup, use your shortcut to start and stop voice transcription. The app inserts transcribed text into the prompt box so you can review or edit it before sending.

## Keyboard shortcuts

The GitHub Copilot app supports keyboard shortcuts to help you navigate sessions, switch between workspaces, and perform common actions. To see available shortcuts, open the app, go to **Help**, then **Keyboard Shortcuts**.

You can also start a session directly in the app using deep links from markdown files, third-party tools, or scripts. For more information, see [Open With Deep Links](https://docs.github.com/en/copilot/how-tos/github-copilot-app/open-with-deep-links).
