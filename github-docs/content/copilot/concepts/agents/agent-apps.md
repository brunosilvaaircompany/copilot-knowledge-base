# About agent apps

> [!NOTE] Agent apps are currently in public preview and subject to change.


## Introduction

Agent apps are GitHub Apps that expose agents on GitHub. GitHub partners build agent apps to bring their tools and services into your development workflow. These agent apps are agents you can delegate work to alongside Copilot cloud agent and other third-party agents. Agent apps are powered by Copilot cloud agent. To learn more, see [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent).

For example, an agent app could analyze your product analytics, scan your application for security vulnerabilities, or add feature flags to a pull request, then connect back to the partner's systems to complete the task.

## Where you can use agent apps

You can start an agent app's agent from the following entry points on GitHub.com and GitHub Mobile:

* **Issue assignment**: Assign the agent app to an issue in a repository.
* **Pull request comment**: Mention `@AGENT-NAME` in a comment on a pull request to ask the agent to make changes.
* **Agents UI**: Select the agent app under the prompt box in the Agents tab or panel, then start a task with a prompt.


You can use these entry points in the same way as you use Copilot cloud agent and other third-party coding agents. For more information, see [Use Agent Apps](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/use-agent-apps).

## How agent apps work

An agent app is a GitHub App that a partner has configured to act as an agent. Each agent app can define a custom agent with its own prompt, model, tools, and Model Context Protocol (MCP) servers. To learn more about custom agents and MCP, see [About Custom Agents](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-custom-agents) and [MCP And Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/mcp-and-cloud-agent).

Agent apps can connect to the partner's own systems through MCP servers. These MCP servers authorize the agent app using a JWT assertion issued by GitHub, so the partner can securely identify your account and their agent app without you managing additional credentials.

The first time you use an agent app, you are asked to authorize the app through an OAuth flow before the agent runs. This lets the agent app act on your behalf and access the partner's functionality. For more information about authorizing apps, see [Authorizing GitHub Apps](https://docs.github.com/en/apps/using-github-apps/authorizing-github-apps).

## Installing and enabling agent apps

To use an agent app, the GitHub App must be installed on your account or organization, and agent features must be enabled for the app. If the app is installed in an organization owned by an enterprise, the "Agent apps" Copilot policy must also be enabled in your enterprise Copilot settings.

* When you install an agent app, GitHub highlights that the app includes agent features and asks you if you want to enable them. For more information, see [About Using GitHub Apps](https://docs.github.com/en/apps/using-github-apps/about-using-github-apps).
* If the app is installed in an organization owned by an enterprise, an administrator must also enable the "agent apps" Copilot policy before the agent features become available. For more information, see the "Next steps" section.

## Billing

Agent apps are powered by Copilot cloud agent. When you use an agent app, the AI usage is billed to your Copilot subscription, and sessions consume AI credits in the same way as Copilot cloud agent. See [GitHub Copilot Billing](https://docs.github.com/en/billing/concepts/product-billing/github-copilot-billing).


## Next steps

* To learn about using an agent app, see [Use Agent Apps](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/use-agent-apps).
* To install an agent app and opt in to its agent features, see [About Using GitHub Apps](https://docs.github.com/en/apps/using-github-apps/about-using-github-apps).
* To enable using agent apps in an organization owned by an enterprise, an administrator must enable the "agent apps" policy at the enterprise level before you can use it. See [Enable Copilot Cloud Agent](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/enable-copilot-cloud-agent#enabling-agent-apps-and-third-party-agents).
