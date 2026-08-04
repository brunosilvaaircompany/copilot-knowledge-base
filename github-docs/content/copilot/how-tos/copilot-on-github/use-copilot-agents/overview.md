# Get started with Copilot agents on GitHub

## Prerequisite

You need a repository where Copilot cloud agent is enabled. For Copilot Business and Copilot Enterprise subscribers, an administrator must enable the agent before you can use it. See [Access Management](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/access-management).

## Step 1: Assign an issue to Copilot

Pick a repository where Copilot cloud agent is enabled and find an open issue—or create a small one, such as "Add a CONTRIBUTING.md file."

1. In the right sidebar, click **Assignees**, then select **Copilot**.
1. Optionally, add instructions in the **Optional prompt** field.

    For example: `Keep the file short and include a code of conduct section.`
1. Click **Assign**.

Copilot starts a session and begins working on a pull request.

## Step 2: Start a research task at the same time

While Copilot works on the issue, start a second, non-coding task to see two sessions running in parallel.

1. In the same repository, click the **{% octicon "agent" aria-hidden="true" aria-label="agent" %} Agents** tab.
1. Type a research prompt.

    For example: `Investigate which dependencies in this repo are outdated and summarize what upgrading would involve.`
1. Click **{% octicon "paper-airplane" aria-label="Start task" %}** or press <kbd>Enter</kbd>.

A second session appears in the panel alongside the first.

## Step 3: Watch both sessions

Both sessions update in real time. Click either session to view the agent's reasoning, the files it reads, and the changes it makes.

While a session is running, type in the prompt box below the log to steer the agent.

For example: `Focus on security-related dependencies first.`

For more details on monitoring, steering, and stopping sessions, see [Manage And Track Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents).

## Step 4: Request a Copilot code review on the pull request

When the coding task finishes, Copilot opens a pull request and adds you as a reviewer.

1. Open the pull request from the notification or from the session log.
1. Under "Reviewers" in the right sidebar, next to **Copilot**, click **Request**.
1. Wait for Copilot code review to leave comments—usually under 30 seconds.

Read through the review comments. Copilot may suggest changes you can apply directly with a click.

For the full set of code-review options, see [Copilot Code Review](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/copilot-code-review).

## Step 5: Review the output and iterate

Now review the code changes yourself, just as you would for any contributor's pull request.

* **Request changes from Copilot** — mention `@copilot` in a comment describing what to fix. Copilot pushes new commits to the same branch.
* **Make changes yourself** — check out the branch and push your own commits.
* **Approve and merge** — when you're satisfied, merge the pull request.

For more on reviewing Copilot's work, see [Review Copilot Output](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/review-copilot-output).

## Next steps

* [Get The Best Results](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results) — Write effective prompts and get the most out of agents.
