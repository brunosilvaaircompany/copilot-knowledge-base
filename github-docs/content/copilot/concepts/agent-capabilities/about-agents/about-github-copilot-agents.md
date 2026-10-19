# About GitHub Copilot agents

## What is an agent?

An agent is an AI system that can complete a goal on your behalf. Unlike an assistant that only returns a response, an agent can plan a task, use tools to take action, inspect the results, and adjust its approach.

For example, when you ask an agent to fix a bug, it can search a repository, identify the relevant files, edit the code, run tests, and revise its changes in response to test failures. The tools and environments available to an agent depend on where you use it.

Agents can work with different levels of autonomy:

* In a collaborative session, you can guide the agent, approve actions, and provide feedback as it works.
* In an asynchronous session, you can delegate a task, work on something else, and review the result later.
* In an automated workflow, an event or schedule can start an agent without you initiating each individual task.

In every case, you remain responsible for defining the goal and constraints, granting appropriate access, and reviewing the agent's work.

## Agents, chat, and automation

Chat, agents, and automation are related concepts, but each describes a different part of an AI-assisted workflow.

| Concept | Primary purpose | Key distinction |
| --- | --- | --- |
| Chat | Explore ideas, ask questions, and provide direction through a conversation | Chat is a back-and-forth exchange of questions and responses. Some chat experiences can also use tools or invoke an agent. |
| Agent | Complete a goal by reasoning, using tools, and adapting to results | An agent can decide which steps to take instead of only producing a response. |
| Automation | Start repeatable work from an event, schedule, or other trigger | An automation can run fixed steps or invoke an agent. Not every automation is agentic. |

For example, you might use chat to explore why a test is failing, then ask an agent to update the code and run the test suite. If the same type of failure needs regular attention, you could create an automation that starts an agent whenever the failure occurs.

## Where you can work with agents

You can work with agents in several Copilot experiences. Choose an experience based on where you want the work to run, how closely you want to guide it, and how you want to review the result.

### GitHub Copilot app

The GitHub Copilot app is a desktop application for directing agent-driven development. You can run multiple agent sessions in parallel, use local or cloud environments, and manage work from an initial task through pull request review. See [GitHub Copilot App](https://docs.github.com/en/copilot/concepts/agents/github-copilot-app).

### Copilot CLI

GitHub Copilot CLI lets you work with an agent from your terminal. The agent can answer questions, modify files, run commands, and complete multi-step tasks in local or sandboxed environments. See [About Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli).

### Copilot in IDEs

Agent mode in supported IDEs provides a collaborative experience in your local development environment. The agent can identify files to change, propose edits, run commands, and respond to your feedback while you work. See [Chat In Ide](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide).

### GitHub

On GitHub, you can delegate asynchronous work to Copilot cloud agent from entry points such as the Agents view, issues, pull requests, and Copilot Chat. The agent works in a cloud environment and can research a repository, create a plan, make changes on a branch, and open a pull request for review. See [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent).

You can also delegate tasks to supported third-party coding agents. These agents work alongside Copilot cloud agent and return their changes through the same pull request workflow. See [About Third Party Coding Agents](https://docs.github.com/en/copilot/concepts/agent-capabilities/about-agents/about-third-party-coding-agents).

### Agent apps

Agent apps are partner-built agents that you can use through GitHub. They can specialize in particular domains and connect to a partner's systems and tools. An agent app is installed as a GitHub App. See [Agent Apps](https://docs.github.com/en/copilot/concepts/agent-capabilities/about-agents/agent-apps).

### Automated workflows

You can configure agents to perform recurring or event-driven work. For example, an agent can triage new issues, investigate continuous integration failures, or prepare a scheduled report. See [Agent Powered Workflows And Operations](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations).

### Copilot integrations

You can integrate Copilot cloud agent with various tools and platforms to enhance its functionality and streamline your development workflow. With integrations, you can work with and trigger Copilot cloud agent from within your existing tools, such as Microsoft Teams, Slack, Linear, Azure Boards, and Jira, providing the cloud agent with the context it needs to assist you. See [About Copilot Integrations](https://docs.github.com/en/copilot/concepts/agent-capabilities/choosing-and-delegating-agent-work/about-copilot-integrations).

## Choosing an agent experience

Start with the level of control and delegation that fits your task. Use the GitHub Copilot app, Copilot CLI or a collaborative IDE session when you want to guide work closely. Use a cloud agent when you want to delegate a well-scoped task and review the result later. Use an automated workflow when the same kind of work should run repeatedly from a defined trigger.

For help matching GitHub's AI tools to your task, see [Ai Tools](https://docs.github.com/en/copilot/concepts/agent-capabilities/choosing-and-delegating-agent-work/ai-tools).
