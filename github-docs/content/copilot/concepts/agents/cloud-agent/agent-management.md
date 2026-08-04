# About agent management

## About agents

AI agents are autonomous systems that can evaluate their environment, make decisions, and take actions to complete tasks. Agents can break down complex tasks into steps, use various tools and resources, plan their approach, and adapt based on human feedback until they accomplish their assigned objective.

Agents bring automation and assistance to every stage of the software development process on GitHub. You can run multiple agent sessions concurrently, allowing you to efficiently delegate work items. 

Alongside Copilot, you can use Anthropic Claude and OpenAI Codex, giving you more flexibility and choice to find the right agent for a task. See [About Third Party Coding Agents](https://docs.github.com/en/copilot/concepts/agents/about-third-party-coding-agents).

GitHub partners can also offer their own agents as agent apps, which you install as GitHub Apps and trigger from issues, pull requests, and the Agents UI. See [Agent Apps](https://docs.github.com/en/copilot/concepts/agents/agent-apps).

Utilizing custom agents you can build out a team of task-specific agents with customized system prompts to handle simpler tasks like writing tests and refactoring, giving you bandwidth to prioritize problem-solving and collaboration. See [About Custom Agents](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-custom-agents). 

Model choice allows you to choose from a selection of AI models to use with your agents, each with its own particular strengths. See [Supported Models](https://docs.github.com/en/copilot/reference/ai-models/supported-models).

To learn more about Copilot cloud agent, see [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent).

## Managing agents

When utilizing GitHub's agentic features, you can use the **Agents** tab within a repository that has Copilot cloud agent enabled to initiate, monitor, and manage agent sessions without leaving your workflow. You can also use the [Agents page](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text) to view and start agent sessions. To learn how to enable Copilot cloud agent, see [Access Management](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/access-management).


From the Agents tab, you can:

* **Kick off new agent tasks**: Select an AI model of your choice, and optionally choose from third-party agents or custom agents best suited for the task. See [Start Copilot Sessions](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/start-copilot-sessions).
* **Monitor live session logs**: Once the agent starts working, you can click any agent session to open the session log and follow its progress and thought process in real time.
* **Track active sessions**: You can view all active agent sessions that have been started in the repository.
* **Steer agents mid-session**: If you realize you didn't scope a request correctly, or want the agent to use a specific tool or service, you can step in and provide **steering input** without stopping the run. Steering consumes AI credits per message. See [Manage And Track Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents#steer-an-agent-session).
* **Open a session in VS Code or GitHub Copilot CLI**: When you want to start working on changes to an agent session in your local development environment, click **{% octicon "vscode" aria-label="VS Code" %} Open in VS Code** or **{% octicon "agent" aria-label="Agent" %} Continue in GitHub Copilot CLI** to bring the session to your local machine.
    > [!NOTE]
> Opening a session in VS Code requires the latest versions of VS Code, the GitHub Copilot extension, and the GitHub Pull Requests extension.

* **Review and merge agent code**: Once the agent completes a session, you can jump to the pull request to review the changes, request further improvements, or approve and merge. See [Review Copilot Output](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/review-copilot-output).
* **Set up automations**: Run Copilot cloud agent automatically, on a schedule or in response to events such as an issue being opened. See [About Automations](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-automations).
* **Query your past sessions**: You can search and reference your past agent sessions using natural language from Copilot CLI or VS Code. See [Chronicle](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/chronicle).

## Next steps

To start managing agents, see [Manage And Track Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents).
