# Managing agent sessions

Use the agents panel on GitHub to monitor and manage agent sessions across your repositories.

## Monitor agent activity

Track sessions from the agents panel (available from any page on GitHub) or from the [agents page](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text). Sessions that you started, or that another user prompted Copilot to work on, appear in your sessions list.

Click a session to open the session log and overview, where you can monitor the agent's progress, token usage, and session length.

## Review session logs

Session logs show Copilot's internal reasoning and the tools it used to understand your repository, make changes, and validate its work. Copilot has its own ephemeral development environment, so it can run automated tests and linters to validate changes before pushing.

## Trace commits to session logs

Commits from Copilot cloud agent are authored by Copilot, with the person who started the task listed as co-author. Each commit message includes a link to the session logs, so you can trace why a change was made during code review or an audit. Commits are signed and appear as "Verified" on GitHub.

## Steer an agent session

If Copilot is heading in the wrong direction, or you realize your original prompt needs adjusting, you can redirect it without stopping the session.

1. Open the [agents page](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text) and select the session.
1. In the prompt box below the session log, type your follow-up. For example:

   ```text
   Use our existing ErrorHandler utility class instead of writing custom try-catch blocks for each endpoint.
   ```

1. Press <kbd>Enter</kbd>. Copilot implements your input after it finishes its current tool call.

Each steering message consumes AI credits. Steering is not available for third-party coding agents.

## Stop a session

If the task no longer needs to be done, or you want to start over with a new prompt, click **Stop session** in the session log viewer. Stopping a session ends the GitHub Actions run and preserves any commits already pushed.

## Archive sessions

Archive stopped sessions to remove them from your sessions list.

1. Open the stopped session.
1. Click **{% octicon "kebab-horizontal" aria-label="More actions" %}**, then click **{% octicon "inbox" aria-hidden="true" aria-label="inbox" %} Archive session**.
1. In the dialog, click **Yes, archive**.

Copilot cloud agent sessions can be archived but not deleted. Only local sessions (from GitHub Copilot CLI, VS Code, JetBrains, or the GitHub Copilot app) can be deleted. For more information about deleting sessions, see [Chronicle](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/chronicle#managing-your-session-data).

## Share a session

Copilot cloud agent sessions are **shared** by default. They appear in the "All sessions" view on the "Agents" tab of your repository, visible to anyone with access to the repository.

Local sessions (from GitHub Copilot CLI, VS Code, JetBrains, or the GitHub Copilot app) are **unshared** by default. You can choose to share a local session from the "Agents" tab of your repository, giving view-only access to repository collaborators. To share or unshare a local session, use the sharing controls in the session's menu.

Recipients can view the session's prompts, responses, and file changes, but cannot steer or modify the session. Shared local sessions appear in the "All sessions" view but are not indexed for other users' session queries (they will not appear in another user's `/chronicle` results).

For more information about session syncing, see [Chronicle](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/chronicle#session-syncing).

## Query past sessions

You can search your session history by asking natural language questions in Copilot Chat in VS Code, JetBrains, the GitHub Copilot app, or GitHub.com. Copilot searches across your synced sessions from Copilot CLI, Copilot cloud agent, and Copilot code review to provide answers.

You can only query sessions that you started. Your session data is private by default, but you can choose to share individual sessions for view-only access. See [Share a session](#share-a-session) earlier in this article.

### Prerequisites

Your sessions must be synced to your GitHub account. By default, session data is synced automatically. If you have opted out of syncing (by setting `"remoteExport": false` in your CLI settings JSON), or if your organization has not enabled the "Store local sessions in the Cloud" policy, session querying is not available. For more information, see [Chronicle](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/chronicle#session-syncing).

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

For CLI-specific session querying and `/chronicle` commands, see [Chronicle](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/chronicle). For conceptual information about how session data is stored and synced, see [Chronicle](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/chronicle).

## Continue a session's work in GitHub Copilot Chat

You can pass context between Copilot Chat and your Copilot cloud agent sessions on GitHub.

When you start a session from Copilot Chat, it incorporates the context of your conversation, and while the session runs, Copilot Chat reflects its status so you can ask follow-up questions.

When a session is complete, or when you are viewing a pull request Copilot created, you can ask what changed, what was validated, and why, and Copilot will answer by drawing on the session logs. You can also start another session directly from Copilot Chat.

For more information, see [Chat](https://docs.github.com/en/copilot/concepts/chat) and [Explore Pull Requests](https://docs.github.com/en/copilot/tutorials/explore-pull-requests).

## Further reading

* [Get The Best Results](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results)
