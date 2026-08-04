# Research, plan, and iterate on code changes with Copilot cloud agent

Copilot cloud agent lets you:

* **Research** a repository by asking Copilot questions.
* **Plan** and refine an approach before Copilot makes changes.
* **Iterate** on code changes, review a diff, and **create a pull request when you're ready**.

Sessions do not create pull requests automatically. To create one immediately, include that in your prompt—for example, "Create a pull request to ...".

> [!NOTE] These capabilities are only available with Copilot cloud agent on GitHub.com. Cloud agent integrations (such as Azure Boards, JIRA, Linear, Slack, or Teams) only support creating a pull request directly.

## Perform deep research

Ask Copilot cloud agent questions about a repository to understand how it works, find where to make a change, or confirm assumptions before planning.

1. Start a task from the agents tab, panel, dashboard, or Copilot Chat. See [Kick Off A Task](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/kick-off-a-task).
1. Ask a question about the repository.

   For example: `Investigate performance issues in this app and suggest improvements.`

   > [!TIP] You can also open Copilot Chat and attach the relevant repository as context. Copilot prompts you to approve a deep research session.
1. Optionally, send follow-up prompts while Copilot is working to steer the session.
1. Review the response and ask follow-up questions.

## Create a plan

Ask Copilot cloud agent to propose a plan before making changes.

1. Describe the plan you want.

   For example: `Create a plan to implement the most impactful performance improvements for this app.`
1. Review the plan and iterate with Copilot until it matches your intent.

## Iterate on code changes

After research and planning, make changes on a branch, review the diff, and decide whether to iterate more or create a pull request.

1. Describe the changes you want in your prompt.

   For example, reference the plan from earlier: `Implement the plan we agreed upon.`
1. Wait for Copilot to finish the session.
1. Click **Diff** to review the changes.
1. Optionally, open the branch (`copilot/BRANCH-NAME`) to inspect the changes in context.
1. To request refinements, continue the conversation. For example: `Rename this to match our existing conventions.`
1. When the session is complete and you're satisfied, click **Create pull request**.

## Provide visual context

Cloud agent processes images—such as screenshots, sketches, or designs—as part of your task description. Drag and drop an image into an issue body or a Copilot Chat prompt, then describe what Copilot should do with it.

## Further reading

* [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent)
