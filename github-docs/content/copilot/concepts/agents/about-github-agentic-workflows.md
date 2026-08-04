# About GitHub Agentic Workflows

> [!NOTE]
> GitHub Agentic Workflows are in public preview and subject to change.


## About agentic workflows

GitHub Agentic Workflows are AI-powered repository automations that you define in markdown and run as GitHub Actions workflows. Unlike traditional automation with fixed if-then rules, agentic workflows use coding agents to understand context, make decisions, and take meaningful actions—all from natural language instructions.

In practice, compared with traditional workflows that execute predefined steps:

* Agentic workflows execute natural language instructions with contextual reasoning.
* You still define guardrails in frontmatter, such as triggers, permissions, and safe outputs.

With agentic workflows, you can automate tasks like:

* Triaging incoming issues and labeling them by type and priority
* Investigating CI failures and suggesting fixes
* Generating daily or weekly repository status reports
* Keeping documentation up to date with code changes
* Improving test coverage

## Benefits of using agentic workflows

* **Automate repetitive repository work**. Define issue triage, CI investigation, documentation updates, and reporting in natural language.
* **Reduce workflow complexity**. Write markdown instructions instead of building complex procedural scripts for every scenario.
* **Keep human review in the loop**. Agentic workflows can generate ready-to-review outputs, such as issues, comments, and pull requests, while you control approvals and merges.
* **Run agents with layered security**. Agents run in firewalled containers with read-only tokens by default. Write actions are limited to declared "safe outputs" that you have defined, and checked by agentic threat detection.

## Requirements

To create and use agentic workflows, you need:

* GitHub Actions enabled for your repository.
* An account with an AI engine (agent), such as GitHub Copilot, Anthropic Claude, OpenAI Codex, or Google Gemini.
* GitHub CLI installed and authenticated

## How agentic workflows work

Each workflow markdown file has two parts:

* **Frontmatter** (YAML between `---` markers): Configures when the workflow runs, what permissions it has, and what write operations are allowed.
* **Markdown body**: Contains your natural language instructions that the AI agent follows.

At a high level, the process to create and use agentic workflows is:

1. Define the agentic workflow `.md` file, including YAML frontmatter and markdown instructions.
1. Compile the markdown workflow file into a hardened `.lock.yml` GitHub Actions workflow file.
1. Commit and push both files to the default branch of your repository.
1. Run the workflow like any other GitHub Actions workflow, on a trigger or in the GitHub web interface for your repository. You can also run it from the GitHub CLI.

Here's an example of a workflow to create a daily status report issue for a repository:

```markdown
---
on: daily

permissions:
  contents: read
  issues: read
  pull-requests: read
  copilot-requests: write

network: defaults

tools:
  github:
    toolsets: [default]

safe-outputs:
  create-issue:

---

# Daily Repo Status Report

Review recent activity in the repository, including issues, pull requests, discussions, and code changes.

Create a GitHub issue summarizing what changed in the last 24 hours (merged pull requests, closed issues, and new discussions), any blockers or open questions mentioned in comments, progress toward visible goals, and recommended next steps for maintainers.

Keep the summary concise. Adjust the level of detail based on how much activity occurred.
```

For detailed steps on creating and updating agentic workflows, see [Creating GitHub Agentic Workflows](https://docs.github.com/en/copilot/how-tos/github-agentic-workflows/creating-github-agentic-workflows).

## Supported coding agents

GitHub Agentic Workflows support multiple coding agents, including:

* GitHub Copilot (requires a GitHub Copilot plan)
* Anthropic Claude
* OpenAI Codex
* Google Gemini

You specify which agent to use in the workflow frontmatter property `engine`. Each engine requires its own authentication secret configured in your repository. GitHub Copilot is the default engine if none is specified.

For more information, see the [engine reference](https://github.github.com/gh-aw/reference/engines/).

## Security guardrails

GitHub Agentic Workflows are designed with security as a priority:

* **Read-only by default**: Workflows have read-only repository permissions unless you explicitly grant more.
* **Safe outputs**: Write operations (such as creating issues, adding comments, or opening pull requests) are only allowed through validated `safe-outputs` declared in the frontmatter.
* **Secrets stay outside the agent runtime**: Sensitive credentials are kept in isolated downstream jobs instead of being exposed directly to the agent.
* **Threat detection**: Proposed outputs are scanned for suspicious or unsafe changes before write actions are applied.
* **Firewalled execution**: Agents run in isolated GitHub Actions environments.
* **Role-based access**: You can restrict who can trigger or modify agentic workflows using role-based access controls.

For a full architecture walkthrough, see the [security documentation](https://github.github.com/gh-aw/introduction/architecture/).

## Usage and billing

The total cost of agentic workflows has two parts:

* GitHub Actions minutes consumed by workflow jobs.
* Inference costs from the configured AI engine.

For inference, GitHub Agentic Workflows use AI Credits (AIC) as a general metric for monitoring and budgeting across engines. `1 AIC = $0.01 USD`.

How billing applies depends on the engine:

* Default GitHub Copilot engine: AIC usage maps to AI credits in GitHub Copilot billing.
* Third-party engine: Inference is billed by that provider.

You can use the GitHub CLI to review usage and estimated cost for agentic workflows. Use `gh aw logs` to view recent workflow runs, including duration, token usage, and AIC estimates across runs. Use `gh aw audit RUN-ID` to inspect a single run in more detail, including token usage and estimated inference cost. AIC values are best-effort estimates and may not exactly match provider invoices, so verify final charges in your provider's billing dashboard.

You can also set `max-ai-credits` in workflow frontmatter to cap inference usage for a single run. The default cap is 1,000 AIC per run.

For an overview of billing for GitHub Agentic Workflows and cost optimization guidance, see [Cost management](https://github.github.com/gh-aw/reference/cost-management/) on the GitHub Agentic Workflows documentation site.

### Enabling organization billing for GitHub Agentic Workflows

For GitHub Copilot agentic workflows in organization-owned repositories, if the organization has a GitHub Copilot plan, we strongly recommend using GitHub Actions' built-in `GITHUB_TOKEN`. This approach bills to the organization and avoids using a personal access token.

To bill to the organization, you need:

1. An organization administrator to enable "Copilot CLI" and "Allow use of Copilot CLI billed to the organization" in GitHub Copilot policy settings. If "Copilot CLI" is already enabled, the billing policy is enabled by default.
1. In each workflow frontmatter, include `copilot-requests: write` under the `permissions` object.

When `copilot-requests: write` is set in workflow frontmatter permissions, the GitHub Actions' token is used for Copilot requests, so you don't need a `COPILOT_GITHUB_TOKEN`. If the GitHub Actions token does not have GitHub Copilot access from the organization, the workflow fails when it sends Copilot requests, and you should configure `COPILOT_GITHUB_TOKEN` instead.

For detailed setup instructions, see [Using the built-in `GITHUB_TOKEN`](/copilot/how-tos/github-agentic-workflows/creating-github-agentic-workflows#using-the-built-in-github_token).

## Next steps

* To add your first agentic workflow, see [Quickstart](https://docs.github.com/en/copilot/how-tos/github-agentic-workflows/quickstart).
* For more information on creating and using agentic workflows, see [Creating GitHub Agentic Workflows](https://docs.github.com/en/copilot/how-tos/github-agentic-workflows/creating-github-agentic-workflows).
* For the full reference documentation, including advanced patterns and examples, see the [GitHub Agentic Workflows documentation site](https://github.github.com/gh-aw/).
