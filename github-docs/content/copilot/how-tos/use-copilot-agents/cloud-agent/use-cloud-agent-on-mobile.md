# Using Copilot in the cloud on GitHub Mobile

## Starting a Copilot in the cloud session

1. In GitHub Mobile, tap the **{% octicon "copilot" aria-hidden="true" aria-label="Copilot" %}** icon in the bottom right corner of the screen, then tap **{% octicon "plus" aria-label="The plus icon" %} New Session**.

   You can also start a new agent session from a pull request or repository, or assign an agent directly from an issue.
1. Optionally, to choose where Copilot runs the session, tap the environment picker, then select an environment. By default, Copilot runs the session in a cloud sandbox. For more information, see [About Cloud Sandboxes](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes#choosing-where-copilot-runs).
1. Using the scope and owner pickers, select the scope or a repository for your session.
1. Using the **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Attach** menu in the prompt field, give Copilot references for your request.
1. Optionally and if you selected a repository above, click **{% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %}** to select a base branch for Copilot's changes. Copilot will create a new branch based on this branch.
1. Optionally, you can use the dropdown menu to select the model that Copilot will use. If the selected model supports configurable reasoning, you can also use the dropdown menu to select the reasoning level. For more information, see [Changing The Ai Model](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/changing-the-ai-model).
1. Optionally, select a custom agent with specialized behavior and tools from the dropdown menu. For more information, see [Create Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents).

1. Enter a prompt describing your request, or if available, tap the microphone icon to dictate the context.
1. Press **Enter** or click the submit button.

    Copilot will start a new session, work on the task, and push any code changes. If requested, Copilot will generate a list of files changed, a pull request, artifacts it generated (such as a research plan), and any other relevant outputs.

## Starting a session with Copilot cloud agent

1. In GitHub Mobile, tap the **{% octicon "copilot" aria-hidden="true" aria-label="Copilot" %}** icon in the bottom right corner of the screen, then tap **{% octicon "agent" aria-label="The Agents icon" %} New Session**.
1. Using the dropdown menu in the prompt field, select the repository you want Copilot to work in.
1. Optionally, to choose where Copilot runs the session, tap the environment picker, then select an environment. By default, Copilot runs the session in a cloud sandbox. For more information, see [About Cloud Sandboxes](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes#choosing-where-copilot-runs).

   You can't change the environment after the session starts. To use a different environment, start a new session.

1. Enter a prompt describing your request.

   For example: `Implement a user friendly message for common errors.`

   If you want Copilot to open a pull request, you can ask in your prompt, for example `Open a pull request to implement a user friendly message for common errors.`
1. Optionally, select a base branch for Copilot's changes. Copilot will create a new branch based on this branch.
1. Optionally, select a custom agent with specialized behavior and tools from the dropdown menu. For more information, see [Create Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents).

1. Optionally, you can use the dropdown menu to select the model that Copilot will use. If the selected model supports configurable reasoning, you can also use the dropdown menu to select the reasoning level. For more information, see [Changing The Ai Model](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/changing-the-ai-model).
1. Click the submit button.

    Copilot will start a new session, work on the task, and push any code changes.

## Assigning an issue to Copilot

1. In GitHub Mobile, navigate to the repository that contains the issue you want to assign to Copilot.
1. Click **Issues**.
1. Open the issue that you want to assign to Copilot.
1. Tap the **{% octicon "info" aria-label="information" %}** icon.
1. Beside "Assignees", tap **Edit**.
1. Beside "Copilot", click the plus sign.
1. Click **Done**.

## Tracking your sessions

You can see a list of your running and past agents sessions in GitHub Mobile.

1. In GitHub Mobile, tap the **{% octicon "copilot" aria-hidden="true" aria-label="Copilot" %}** icon in the bottom right corner of the screen.

   A list of your recent chat and agents sessions with Copilot is displayed.

1. Use the **{% octicon "search" aria-hidden="true" aria-label="Search" %} Search** or **{% octicon "filter" aria-hidden="true" aria-label="Filter" %}** buttons at the top of the list to filter the list of sessions.

   For example, to show only merged tasks, tap **Open** and then, in the dropdown, tap **Merged**.

## Further reading

* [Manage And Track Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents)
* [Get The Best Results](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results)
