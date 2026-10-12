# GitHub Copilot on GitHub.com

GitHub Copilot on GitHub.com can answer questions about your repositories, plan and make changes, review pull requests, and automate repository tasks. You can ask questions and delegate work from the same prompt box, or use Copilot directly in your issue and pull request workflows.

To compare where you can use Copilot, see [Where To Use GitHub Copilot](https://docs.github.com/en/copilot/get-started/where-to-use-github-copilot).

## How Copilot helps on GitHub.com

You can work with Copilot in several ways:

* **Chat** lets you ask questions about your repositories, understand code, and explore possible solutions.
* **Agentic experiences** can research a repository, plan changes, and complete multi-step tasks by reading files, editing code, and running tests in a cloud development environment.
* **Code review** provides feedback on pull requests and suggests fixes.
* **Automations** run repository tasks on a schedule or in response to events, rather than requiring a new prompt each time.

For example, you might use chat to understand how a repository handles authentication, then ask an agent to plan and add missing tests. Once the changes are in a pull request, you can request a review from Copilot. To maintain test coverage over time, you could set up an automation to check for missing tests each week and propose additions for you to review.

## Chat and agentic experiences

On GitHub.com, you can move from asking questions to delegating work in the same conversation.

### Asking questions

Chat can explain unfamiliar code, suggest fixes, generate tests, or compare approaches. Follow-up questions let you refine your request without starting a new conversation.

Chat is preconfigured with tools for tasks such as creating branches, updating files, and creating or updating issues. It also supports semantic code search.

### Delegating work

Copilot cloud agent can research a repository, plan changes, and implement them in the background. It can edit files and run tests and linters in an ephemeral cloud development environment, rather than your local IDE. See [Copilot In Ides](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-in-ides).

You can start work from the agents panel, a conversation, or an issue or pull request on GitHub.com.

From security campaigns, you can assign code scanning alerts to Copilot for fixes. See [Fixing Alerts In Security Campaign](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/fixing-alerts-in-security-campaign#assigning-alerts-to-copilot-cloud-agent).


When implementing changes, Copilot handles branch creation, commit messages, and pushing changes. You can review changes and request refinements before creating a pull request, or request a pull request in your initial prompt. You can also continue the work yourself. See [Research Plan Iterate](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/research-plan-iterate).

### Session context

On GitHub.com, Copilot Chat and Copilot cloud agent can share context. When you start an agent session from a chat, the session incorporates the context of your conversation. While the session runs, you can continue chatting with Copilot about its progress and steer the work.

Copilot Chat can also answer questions about pull requests created by Copilot by pulling in the relevant agent session logs. You can ask what changed, what was validated, and why, without leaving the conversation.

This context passing is scoped to the Copilot Chat and cloud agent sessions you are actively working with. It is distinct from Copilot Memory, which builds a longer-term, persistent understanding of your repositories and preferences across sessions. For more information, see [Copilot Memory](https://docs.github.com/en/copilot/concepts/agents/copilot-memory).

On GitHub.com, session logs show the work and tools used. Shared sessions and pull requests let teammates with repository access follow the work and review changes. Logs do not replace your own review and testing. See [Manage And Track Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents).

### Sessions across surfaces

With remote control enabled, you can monitor and steer a GitHub Copilot CLI session from GitHub.com. It continues running on your original machine, which must stay online. See [About Remote Control](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-remote-control).

On GitHub.com, you can ask about your synced session history across Copilot surfaces. This includes Copilot cloud agent and Copilot code review sessions, and sessions from GitHub Copilot CLI, VS Code, JetBrains IDEs, and the GitHub Copilot app.

You can only query sessions you started. Syncing must be enabled and permitted by your organization's policies. See [Query past sessions](/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents#query-past-sessions).

## Code review

On GitHub.com, Copilot code review reviews pull request changes, identifies potential issues, and suggests fixes. It uses agentic capabilities to gather context from your repository. You can request a review or configure automatic reviews, then review and apply the suggested changes. See [Code Review](https://docs.github.com/en/copilot/concepts/agents/code-review).

Copilot can also generate a summary of your changes directly in a pull request description or comment. This helps reviewers understand the changes, but is separate from reviewing the code. See [Create A Pr Summary](https://docs.github.com/en/copilot/how-tos/copilot-on-github/copilot-for-github-tasks/create-a-pr-summary).

## Automations and agentic workflows

Automations let you define a task once and have Copilot cloud agent run it on a schedule or in response to repository events. For example, an automation can triage incoming issues or prepare weekly release notes. You create and manage automations from the **Agents** tab in a repository on GitHub.com. Automations are available in eligible private and internal repositories. See [About Automations](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-automations).

GitHub Agentic Workflows provide another way to automate tasks in your repositories on GitHub.com. You define tasks in natural language in Markdown files, and they run as GitHub Actions workflows. These workflows can use Copilot or another supported coding agent. See [About GitHub Agentic Workflows](https://docs.github.com/en/copilot/concepts/agents/about-github-agentic-workflows).

## Customizations

On GitHub.com, custom instructions let you save personal preferences for chat, repository conventions, and organization guidance. Copilot Spaces organize shared context for questions. For delegated work, custom agents and agent skills provide task-specific instructions and resources. Model Context Protocol (MCP) servers connect agents to additional tools and data. Hooks can run commands during agent work for validation or logging. For setup guidance, see [Customize Copilot](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot).

## AI models

You can change the model Copilot uses to generate responses. You may find that different models perform better, or provide more useful responses, depending on the type of questions you ask. Options include premium models with advanced capabilities. To change the model in your IDE, see [Change The Chat Model](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/change-the-chat-model). To change or compare models on GitHub, see [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github#changing-and-comparing-ai-models).

On GitHub.com, available models depend on your plan and account policies. See [Supported Models](https://docs.github.com/en/copilot/reference/ai-models/supported-models).

For Copilot cloud agent, the ability to select a model also depends on how you start the task. See [Changing The Ai Model](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/changing-the-ai-model).

## References to matching public code

In chat responses and agent sessions on GitHub.com, Copilot can generate code that matches code in public repositories. Code references help you review the matching code and its licensing information so you can decide whether to use it, provide attribution, or remove it.

Matches appear in the context where you are reviewing the output:

* **Chat responses**: If you or your organization allow suggestions matching public code, matching code in a response includes a reference beneath the suggestion. The reference identifies public repositories containing matching code and licensing information, if found.
* **Agent session logs**: When Copilot generates matching code during a delegated task, the session logs include a link to details of the matched code.

Matches occur infrequently, so most responses do not contain code references. The search covers an index of public repositories on GitHub.com, not private repositories or code hosted elsewhere. The index is refreshed periodically, so it may omit recently added code or refer to code that has since moved or been deleted.

For instructions on viewing references, see [Find Matching Code?Tool=Webui](https://docs.github.com/en/copilot/how-tos/get-code-suggestions/find-matching-code?tool=webui).

## Access and availability

Available features depend on your plan and organization policies. For setup guidance, see [Set Up Copilot](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot). For usage allowances and costs, see [Billing And Usage](https://docs.github.com/en/copilot/concepts/billing-and-usage).

Repository owners and administrators can disable Copilot cloud agent for particular repositories, even when your plan and policies otherwise allow you to use it. See [Cloud Agent Access](https://docs.github.com/en/copilot/concepts/enterprise/cloud-agent-access).

## Limitations and compatibility

Both chat and agentic experiences on GitHub.com can produce incorrect or suboptimal code, including code that contains security vulnerabilities. Review and test the output before using it in production. See [Agents](https://docs.github.com/en/copilot/responsible-use/agents).

For information about built-in security protections, see [Risks And Mitigations](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/risks-and-mitigations).

### Agentic work

Copilot cloud agent has the following workflow limitations:

* **Repository scope**: Copilot can only make changes in the repository specified when you start a task. It cannot make changes across multiple repositories in one run.
* **Context access**: By default, the GitHub MCP server only provides access to context in the repository where the agent is working, such as issues and previous pull requests. You can configure broader access through repository MCP settings. See [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers).
* **Branches and pull requests**: Copilot can only work on one branch at a time and can open one pull request per task.
* **Session duration**: Each Copilot cloud agent session has a maximum execution time of 59 minutes. This limit cannot be extended or bypassed. If a task exceeds the limit, the session times out and stops.

  Break complex tasks into smaller, focused tasks. You can configure a shorter timeout using the `timeout-minutes` setting in your `copilot-setup-steps.yml` file. See [Customize The Agent Environment](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment).

<a id="limitations-in-copilot-cloud-agents-compatibility-with-other-features"></a>

### Repository compatibility

* **Repository rules**: If a ruleset or branch protection rule is incompatible with Copilot cloud agent, access to the agent is blocked. For example, a rule that only allows specific commit authors can prevent Copilot from creating or updating pull requests. If the rule is configured using rulesets, repository administrators can add Copilot as a bypass actor to enable access. See [Creating Rulesets For A Repository](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#granting-bypass-permissions-for-your-branch-or-tag-ruleset).
* **Repository hosting**: Copilot cloud agent only works with repositories hosted on GitHub. It cannot work on repositories stored on other code hosting platforms.

## Further reading

* [Copilot On GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github)
* [Cloud Agent](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent) how-to guides
* [Copilot Cookbook](https://docs.github.com/en/copilot/tutorials/copilot-cookbook)
* For delegating work from tools such as Microsoft Teams and Slack, see [About Copilot Integrations](https://docs.github.com/en/copilot/concepts/tools/about-copilot-integrations).
* For organization and enterprise metrics on pull request creation, merges, and time to merge, see [Copilot Metrics](https://docs.github.com/en/copilot/concepts/billing-and-usage/copilot-usage-metrics/copilot-metrics).
