# About third-party coding agents

> [!NOTE] Third-party coding agents are currently in public preview.

## Introduction

You can use third-party coding agents alongside Copilot cloud agent to work asynchronously on your development tasks. You can assign an existing issue or give a prompt to an agent, which will work on the required changes and create a pull request. When the agent finishes, it will request a review from you, and you can leave pull request comments to ask the agent to iterate.

Coding agents are subject to the same security protections, mitigations, and limitations as Copilot cloud agent. To learn more about how you can use coding agents, see [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent).

### Where you can use coding agents

You can kick off tasks with coding agents in the following locations:

* **The Agents tab**: Select an agent under the prompt box in the [Agents tab](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=docs-3p-agents-tab-cta&utm_medium=docs&utm_campaign=agent-3p-platform-feb-2026), then kick off a new task and watch the agent get to work on a pull request.
* **Issues**: Assign the agent to an existing issue in a repository.
* **Pull requests**: Mention `@AGENT_NAME` in a comment on an existing pull request to ask it to make changes.
* On [**GitHub Mobile**](/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-mobile): From the **Home** view, click {% octicon "plus" aria-hidden="true" aria-label="plus" %} to start a new agent session.
* In [**Visual Studio Code**](https://code.visualstudio.com/docs/copilot/agents/overview#_create-an-agent-session): Start a new session in the chat view, or delegate an existing session to a different agent.

### Making coding agents available

Before you can assign tasks to coding agents on GitHub, they must be enabled in your account policies.

* For **GitHub Copilot Pro, GitHub Copilot Pro+, and GitHub Copilot Max subscribers**, see [Manage Policies](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#enabling-or-disabling-third-party-coding-agents-in-your-repositories).
* For **GitHub Copilot Business and GitHub Copilot Enterprise subscribers**, see [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies) or [Manage Enterprise Policies](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).

These policies do not apply to **local** agents in Visual Studio Code. To configure agent settings in Visual Studio Code, see [Types of agents](https://code.visualstudio.com/docs/copilot/agents/overview#_types-of-agents) in the Visual Studio Code documentation. To adjust enterprise agent settings in Visual Studio Code, see [Enable or disable the use of agents](https://code.visualstudio.com/docs/enterprise/ai-settings#_enable-or-disable-the-use-of-agents) in the Visual Studio Code documentation.

## Supported coding agents

The following third-party agents are supported on GitHub:

* [Anthropic Claude](/copilot/concepts/agents/anthropic-claude)
* [OpenAI Codex](/copilot/concepts/agents/openai-codex)

## AI models for third-party agents

When starting a task with a third-party agent, you can select the AI model used by the agent. You may find that different models perform better, or provide more useful responses, depending on the type of task. For help deciding which model to use, see [Model Comparison](https://docs.github.com/en/copilot/reference/ai-models/model-comparison).

You can also select **Auto**, which allows Copilot auto model selection to choose the best available model on your behalf. See [Auto Model Selection](https://docs.github.com/en/copilot/concepts/models/auto-model-selection).

The following models are available for each agent:

### OpenAI Codex

* Auto
* GPT-5.3-Codex
* GPT-5.4
* GPT-5.4 nano


### Anthropic Claude

* Auto
* Claude Opus 4.5
* Claude Opus 4.6
* Claude Opus 4.7
* Claude Sonnet 4.5
* Claude Sonnet 4.6


## Security validation

When a third-party coding agent creates or modifies code, GitHub automatically scans the generated code for security issues and attempts to resolve them before the pull request is finalized. This reduces the likelihood of the agent introducing problems such as hardcoded secrets, insecure dependencies, and other vulnerabilities.

The following tools and processes scan for security issues:

* **CodeQL code scanning** identifies code security issues.
* **Secret scanning** detects sensitive information such as API keys, tokens, and other secrets.
* Newly introduced dependencies are checked against the **GitHub Advisory Database** for malware advisories and CVSS-rated High or Critical vulnerabilities.

Security validation does not require a GitHub Advanced Security license.

## Usage costs

Coding agents consume **GitHub Actions minutes** and **AI credits**. Each agent session consumes AI credits based on the model used and the number of tokens processed.

Within your included GitHub Actions minutes and AI credits, you can use agents without incurring additional costs. See [Usage Based Billing For Organizations And Enterprises](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

## Partner agents

When enabling partner agents in your user or organization Copilot cloud agent settings, a GitHub App will be installed for the corresponding agent.

* **Allow Claude coding agent** will install `anthropic code agent`
* **Allow Codex coding agent** will install `openai code agent`

Actions taken by these GitHub Apps will be visible in your audit log, but the GitHub Apps themselves will not be visible in your account's list of GitHub App installations.

## Next steps

* To start managing agents, see [Manage And Track Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents).
* To learn how AI models are hosted and served, see [Model Hosting](https://docs.github.com/en/copilot/reference/ai-models/model-hosting).
