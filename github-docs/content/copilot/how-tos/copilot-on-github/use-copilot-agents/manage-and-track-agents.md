# Managing agent sessions

Use the agents panel on GitHub to monitor and manage agent sessions across your repositories.

## Monitor agent activity

Track sessions from the agents panel (available from any page on GitHub) or from your [Copilot home page](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=managing-agent-sessions-article-product-cta&utm_medium=docs&utm_campaign=universe-2026). Sessions that you started, or that another user prompted Copilot to work on, appear in your sessions list.

Click a session to open the session log and overview, where you can monitor the agent's progress, token usage, and session length.

## Review session logs

Session logs show Copilot's internal reasoning and the tools it used to understand your repository, make changes, and validate its work. Copilot has its own ephemeral development environment, so it can run automated tests and linters to validate changes before pushing.

## Trace commits to session logs

Commits from Copilot cloud agent are authored by Copilot, with the person who started the task listed as co-author. Each commit message includes a link to the session logs, so you can trace why a change was made during code review or an audit. Commits are signed and appear as "Verified" on GitHub.

## Steer an agent session

If Copilot is heading in the wrong direction, or you realize your original prompt needs adjusting, you can redirect it without stopping the session.

1. Open your [Copilot home page](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=manage-track-agents-home-1&utm_medium=docs&utm_campaign=universe-2026) and select the session.
1. In the prompt box below the session log, type your follow-up. For example:

   ```text
   Use our existing ErrorHandler utility class instead of writing custom try-catch blocks for each endpoint.
   ```

1. Press <kbd>Enter</kbd>. Copilot implements your input after it finishes its current tool call.

Each steering message consumes AI credits. Steering is not available for third-party coding agents.

## Continue a session from another client

Sessions that run in a cloud sandbox aren't tied to the device or client where you started them. The session, its files, and its in-progress work live in GitHub-hosted infrastructure. So you can move between clients as your day changes, without copying files, reinstalling dependencies, or explaining the task again. For more information, see [About Cloud Sandboxes](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes#continue-sessions-across-clients).

Here's how a single session might move with you from your desk to your phone and back.

1. **Start in the GitHub Copilot app.** At your desk, you start a session in a cloud sandbox and describe the task. Copilot starts working in the cloud, so you can close your laptop and the session keeps running.

1. **Steer from GitHub Mobile.** On the go, you open the session on your phone to check Copilot's progress. If it's heading in the wrong direction, you send a follow-up prompt to redirect it.

1. **Review on GitHub.com.** Later, from any browser, you open the session to read the session log and check the changes Copilot made after your follow-up.

1. **Finish in Copilot CLI.** Back in your terminal, you resume the same session, with its full history and work intact, and keep working until you're ready to open a pull request.

At each step, you work with the same session. Copilot keeps the conversation and the work so far, so each client picks up where the last one left off.

### Find your sessions in each client

* **GitHub.com**: Go to [github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=manage-track-agents-home-2&utm_medium=docs&utm_campaign=universe-2026). Your most recent sessions are listed under "Pick up where you left off." To see all your sessions, click **View all**.
* **GitHub Mobile**: Tap **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot** in the bottom-right corner. Your sessions are listed under "Agent sessions."
* **Copilot CLI**: Open the **Sessions** tab, or enter `/resume` in an interactive session. Cloud sessions appear alongside your local sessions. For more information, see [Work With Multiple Sessions](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/work-with-multiple-sessions).
* **GitHub Copilot app**: Your sessions appear in the sidebar. Click a session to open it.

## Stop a session

If the task no longer needs to be done, or you want to start over with a new prompt, click **Stop session** in the session log viewer. Stopping a session ends the GitHub Actions run and preserves any commits already pushed.

## Archive sessions

Archive stopped sessions to remove them from your sessions list.

1. Open the stopped session.
1. Click **{% octicon "kebab-horizontal" aria-label="More actions" %}**, then click **{% octicon "inbox" aria-hidden="true" aria-label="inbox" %} Archive session**.
1. In the dialog, click **Yes, archive**.

Copilot cloud agent sessions can be archived but not deleted. Only local sessions (from GitHub Copilot CLI, VS Code, JetBrains, or the GitHub Copilot app) can be deleted. For more information about deleting sessions, see [Session Data](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/session-data#deleting-session-data).

## Share a session

Copilot cloud agent sessions are **shared** by default. They appear in the "All sessions" view on the "Agents" tab of your repository, visible to anyone with access to the repository.

Local sessions (from GitHub Copilot CLI, VS Code, JetBrains, or the GitHub Copilot app) are **unshared** by default. You can choose to share a local session from the "Agents" tab of your repository, giving view-only access to repository collaborators. To share or unshare a local session, use the sharing controls in the session's menu.

Recipients can view the session's prompts, responses, and file changes, but cannot steer or modify the session. Shared local sessions appear in the "All sessions" view but are not indexed for other users' session queries (they will not appear in another user's `/chronicle` results).

For more information about session syncing, see [Session Data](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/session-data#session-syncing).

## Query past sessions

You can search your session history by asking natural language questions in Copilot Chat in VS Code, JetBrains, the GitHub Copilot app, or GitHub.com. Copilot searches across your synced sessions from Copilot CLI, Copilot cloud agent, and Copilot code review to provide answers.

You can only query sessions that you started. Your session data is private by default, but you can choose to share individual sessions for view-only access. See [Share a session](#share-a-session) earlier in this article.

### Prerequisites

Your sessions must be synced to your GitHub account. By default, session data is synced automatically. If you have opted out of syncing (by setting `"remoteExport": false` in your CLI settings JSON), or if your organization has not enabled the "Store local sessions in the Cloud" policy, session querying is not available. For more information, see [Session Data](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/session-data#session-syncing).

### Example queries

```text
What agent tasks did I run last week?
```

```text
Find the session where I refactored authentication.
```

```text
Have I worked on anything related to the payments API?
```

```text
Show me sessions where the agent struggled or I had to correct it multiple times.
```

Copilot can search across your prompts, responses, file changes, and other context from your synced sessions.

For CLI-specific session querying and `/chronicle` commands, see [Chronicle](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/chronicle). For conceptual information about how session data is stored and synced, see [Session Data](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/session-data).

## Further reading

* [Get The Best Results](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results)
