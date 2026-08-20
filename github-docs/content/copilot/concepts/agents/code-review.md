# About GitHub Copilot code review

## Introduction

Copilot code review reviews code written in any language, and provides feedback. It reviews your code from multiple angles to identify issues and suggest fixes. You can apply suggested changes with a couple of clicks.

This article provides an overview of Copilot code review. To learn how to request a code review from Copilot, see [Use Code Review](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review).

## Availability

Copilot code review is supported in:

* GitHub.com
* GitHub CLI
* GitHub Mobile
* VS Code
* Visual Studio
* Xcode
* JetBrains IDEs
* Azure DevOps (public preview)

> [!NOTE]
> If you receive Copilot from an organization, your organization must enable the **Copilot code review** option in the Copilot policy settings. This applies to reviews on GitHub.com or in GitHub Mobile. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).

## Copilot code review without a Copilot license

Organization members **without a Copilot license** can use Copilot code review on GitHub.com. An enterprise administrator or organization owner must enable it. This capability is available to organizations on **Copilot Business** and **Copilot Enterprise** plans.

### Enabling code review for users without a license

To allow organization members without a Copilot license to use Copilot code review, you must enable two policies:

1. **AI credits paid usage**. Enable this policy first. It allows the enterprise or organization to incur charges for Copilot code review AI credits usage.
1. **Allow members without a Copilot license to use Copilot code review in GitHub.com**. This sub-policy enables Copilot code review for users without a license.

The second policy has these characteristics:

* It is disabled by default.
* Once this policy is set at the enterprise level, it becomes **visible, but not editable** at the organization level.
* The policy is **most restrictive**. Copilot code review is only available in repositories under an organization where you have explicitly enabled the policy.

### How it works for users without a license

When both policies are enabled, users without a Copilot license can request a review from Copilot code review on their pull requests in the organization's repositories.

In repositories where automatic code review is enabled, Copilot automatically reviews all pull requests. This happens regardless of whether the author has a Copilot license. For more information about how to configure automatic code review, see [Configure Automatic Review](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-automatic-review).


Copilot code review for users without a license is not available in IDEs.

## Excluded files

Some file types are excluded from Copilot code review:

* Dependency management files, such as package.json and Gemfile.lock
* Log files
* SVG files

If you include these file types in a pull request, Copilot code review will not review the file.

For more information, see [Review Excluded Files](https://docs.github.com/en/copilot/reference/review-excluded-files).

## Agentic capabilities for Copilot code review

Copilot code review utilizes agentic capabilities to extend its functionality.

* **Full project context gathering**. This provides more specific, accurate, and contextually aware code reviews. This capability analyzes your entire repository to better understand the context of code changes.
* **The ability to pass suggestions to Copilot cloud agent**. This automates creating a new pull request against your branch with the suggested fixes applied. Passing suggestions to Copilot cloud agent is in public preview and subject to change.

These capabilities are enabled automatically for all plans that include Copilot code review. See [Review effort level](#review-effort-level) later in this article for information about choosing between Lite and Balanced analysis levels.

If GitHub Actions is unavailable or if Actions workflows used by Copilot code review fail, reviews will still be generated. However, they will not include the additional features provided by the agentic capabilities.

### Usage of GitHub Actions runners for agentic capabilities in code review

Copilot code review uses GitHub Actions to run the agentic capabilities, including full project context gathering and passing suggestions to Copilot cloud agent. By default, Copilot code review uses standard GitHub-hosted runners. You can also upgrade to larger GitHub-hosted runners for better performance, or use self-hosted runners.

> [!NOTE]
> Usage of larger GitHub-hosted runners is billed at a higher per-minute rate. Self-hosted runners do not consume GitHub Actions minutes.

You do not need to have GitHub Actions enabled in your organization or enterprise to use the agentic capabilities in code review.

If your organization has disabled GitHub-hosted runners, the agentic capabilities will not be available. In this case, code reviews will fall back to a more limited review. Organizations in this situation can use self-hosted runners.

For more information on configuring runners, see [Configure Runners](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-runners).

You can view the GitHub Actions minutes associated with Copilot code review runs. For more information, see [GitHub Actions minutes for code review](/copilot/reference/copilot-billing/models-and-pricing#pricing-and-usage-cost-considerations-for-copilot-code-review).

## Review effort level

Copilot code review supports multiple review effort levels, so you can choose the level of thoroughness that matches the criticality of your code.

* **Lite**: Standard review. Provides fast, targeted feedback on common issues such as bugs, security vulnerabilities, and style inconsistencies (default).
* **Balanced**: Routes pull requests to a higher-reasoning model for longer analysis of complex logic, security-sensitive code, and cross-service changes. Balanced reviews use more AI credits, and may consume marginally more GitHub Actions minutes, than Lite reviews.

Use Balanced for security-sensitive code, multi-service pull requests, or repositories with strict quality standards. Use Lite for routine changes where fast feedback is more important than exhaustive analysis.

You can select the review effort level when requesting a review in the pull request, under the **Reviewers** section where Copilot appears as a reviewer. Organization owners can set a default review effort level for automatic code reviews in their organization. Repository administrators can override the organization default for a specific repository.

After Copilot code review reviews a pull request, the pull request overview comment shows the effort level used for each review run.

### Estimated consumption

A review typically consumes an estimated $0.05 USD to $1 USD worth of AI credits with "Lite" effort, and $0.25 USD to $5 USD worth of AI credits with "Balanced" effort.

Consumption generally increases with pull request size and repository custom instructions, and the ranges may change as models evolve. These estimates do not include GitHub Actions minutes.

Repository and organization administrators can set the default review effort level for automatic code reviews. For configuration steps, see [Configure Automatic Review](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-automatic-review#configuring-review-effort-level-for-an-organization).

## Code review usage

Each time Copilot reviews a pull request or reviews code in your IDE, the interaction consumes AI credits. The amount depends on the model used and the number of tokens processed.

Code reviews have two cost components: AI credits for the model interaction (the review itself), and GitHub Actions minutes for the agentic capabilities (context gathering and tool use). For more information on GitHub Actions usage, see [Usage of GitHub Actions runners for agentic capabilities in code review](#usage-of-github-actions-runners-for-agentic-capabilities-in-code-review).

If a repository is configured to automatically request a code review from Copilot for all new pull requests, the AI credits consumption is attributed to the pull request author. If a review is manually requested by another user, the consumption is attributed to that user instead.

If a pull request is created by GitHub Actions or by a bot, the usage will apply to:

* The user who triggered the workflow, if that user can be identified.
* A designated billing owner.

### What happens when a budget is reached

For Copilot Business and Copilot Enterprise, code review access is governed by budget controls. If a user reaches their user-level budget, or if the enterprise or cost center spending limit is exhausted, code reviews are blocked along with other AI credits-consuming features. See [Budgets For Usage Based Billing](https://docs.github.com/en/copilot/concepts/billing/budgets-for-usage-based-billing#what-happens-when-a-user-is-blocked).

### Users without a Copilot license or plan that includes Copilot code review

Users without access to Copilot code review do not have a monthly allowance of AI credits for it. This includes users who have no Copilot license and users on the Copilot Free plan, which does not include Copilot code review.

When Copilot code review is enabled for these users, any AI credits they consume are billed directly to the organization or enterprise as paid additional usage. This applies to both manually requested reviews and automatic code reviews.

AI credits consumed by these users are not attributed to any individual user's budget. They appear as additional usage in billing reports. Users with a Copilot license that includes code review consume AI credits from the shared pool, subject to any user-level budgets configured by their administrator.

## Model usage

Copilot code review is a purpose-built product that uses a carefully tuned mix of models, prompts, and system behaviors to deliver consistent, high-quality feedback across a wide range of codebases. Model switching is not supported, as changing the model is likely to compromise reliability, user experience, and the quality of review comments.


> [!NOTE]
> Copilot code review may use models that are not enabled on your organization's "Models" settings page. The "Models" settings page only controls Copilot Chat.
>
> Since Copilot code review is generally available, all model usage will be subject to the generally available terms. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).


## MCP servers and agent skills for code review

Copilot code review can use repository-level agent skills and MCP servers when they are relevant to the review.

Copilot code review is more likely to use skills and MCP context when your repository or pull request gives clear signals, including review-focused skill directory names, custom instructions that reference MCP context, and pull request descriptions that include identifiers referencing configured MCP servers such as issue keys or incident IDs.

### Agent skills

If your repository includes agent skills, Copilot code review can automatically use relevant skills when reviewing a pull request, extending Copilot beyond its built-in analysis.

When reviewing a pull request, Copilot reads repository custom instructions, agent instructions, and agent skills from the head branch (the branch with your changes), not the base branch. For example, when merging `my-feature-branch` into `main`, Copilot uses the instructions and skills in `my-feature-branch`, so you can test changes to them in the same pull request without merging them first.


For setup details, see [Add Skills](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills).

### MCP servers

Copilot code review can use MCP servers to pull context directly into the review from the third-party platforms and internal systems your team uses, including issue tracking, documentation, service catalogs, and incident tooling.

The GitHub MCP server and Playwright MCP server are enabled by default.

You can configure MCP servers in your repository settings. Repository MCP configuration on GitHub applies to both Copilot cloud agent and Copilot code review. Changes you make to repository MCP settings affect both features. For setup details, see [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers).

In repository settings, **Allow Copilot to use MCP tools when reviewing pull requests** is enabled by default. Disable this setting if you want MCP servers available only for Copilot cloud agent, and not for Copilot code review. For step-by-step instructions, see [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers#disabling-mcp-tools-for-code-review).

## Validating Copilot code reviews

Copilot is not guaranteed to spot all problems or issues in a pull request. Sometimes it will make mistakes. Always validate Copilot's feedback carefully. Supplement Copilot's feedback with a human review.

For more information, see [Agents](https://docs.github.com/en/copilot/responsible-use/agents).

## Enhancing Copilot's knowledge of a repository

The more Copilot knows about the code in your repository, the tools you use, and your coding standards and practices, the more accurate and useful its reviews will become. You can enhance Copilot's knowledge of your repositories in two ways.

### Custom instructions

These are short, natural-language statements that you write and store as one or more files in a repository. If you are the owner of an organization on GitHub, you can also define custom instructions in the settings for your organization. For more information, see [Response Customization?Tool=Webui](https://docs.github.com/en/copilot/concepts/prompting/response-customization?tool=webui#about-repository-custom-instructions).

### Choosing between custom instructions, AGENTS.md, and skills

Copilot code review can draw on several sources of customization, and each serves a different purpose. Use `.github/copilot-instructions.md` for repository-wide rules specific to Copilot, use path-specific `*.instructions.md` files under `.github/instructions/` for rules that apply only to certain files or directories, use `AGENTS.md` for standing rules you want to share across AI tools and agents, and use skills for task-specific workflows that Copilot runs on demand. The following table summarizes when to use each and how to provide rules.

| Use | `copilot-instructions.md` | Path-specific `*.instructions.md` | `AGENTS.md` | Skills |
| --- | --- | --- | --- | --- |
| Best for | Repository-wide, always-on rules for Copilot | Always-on rules for specific paths, file types, or directories | Always-on rules shared across AI agents | Task-specific review workflows |
| Stored in | `.github/copilot-instructions.md` | `.github/instructions/**/*.instructions.md` | Repository root (`AGENTS.md`) | `.github/skills/...` |
| Examples | Coding standards, architecture defaults, test expectations | `content/**` writing rules, `src/**` coding conventions, language-specific guidance | Shared repository conventions that should apply beyond Copilot | Reviews, releases, migrations, analysis |
| Activation | Automatic | Automatic when the changed files match the instruction scope | Automatic (read from repository root) | Automatic when relevant (e.g. review-focused skills such as `code-review`), or on demand |
| Scope | Repository-wide and Copilot-specific | Repository sub-paths and Copilot-specific | Cross-tool / agent-agnostic | Invoked per task |
| Rule | "Copilot, always know this for this repository" | "Copilot, always know this when working in these paths" | "Any agent, always know this" | "Do this when needed" |

For more information, see [Add Skills](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills) and [Add Repository Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).

### Copilot Memory (public preview)

If you have a Copilot Pro, Copilot Pro+, or Copilot Max plan, you can enable Copilot Memory. This allows Copilot to store useful details it has learned about a repository. Copilot can then use this information when it reviews pull requests in that repository. For more information, see [Copilot Memory](https://docs.github.com/en/copilot/concepts/agents/copilot-memory).

## About automatic pull request reviews

By default, Copilot only reviews a pull request if you assign it to the pull request. However, you can configure automatic reviews.

* **Individual users** on the Copilot Pro or Copilot Pro+ plan can configure Copilot to automatically review all pull requests they create.
* **Repository owners** can configure Copilot to automatically review all pull requests in the repository that are created by people with access to Copilot.
* **Organization owners** can configure Copilot to automatically review all pull requests in some or all of the repositories in the organization where the pull request is created by a Copilot user.

If your organization has enabled Copilot code review without a Copilot license, automatic reviews also apply to pull requests created by organization members without a license. This applies to repositories covered by a policy where automatic reviews are enabled. For more information, see [Copilot code review without a Copilot license](#copilot-code-review-without-a-copilot-license).


### Triggering an automatic pull request review

The triggers for automatic code review depend on the configuration settings.

* Basic setting:
  * When you create a pull request as an "Open" pull request.
  * The first time you switch a "Draft" pull request to "Open".
* Review new pushes:
  * Every time you push a new commit to the pull request.
* Review draft pull requests:
  * Pull requests are automatically reviewed while they are still drafts, before you switch them to "Open".

For full instructions, see [Configure Automatic Review](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-automatic-review).

> [!NOTE]
> Unless Copilot has been configured to review each push to a pull request, it will only review a pull request once. If you make changes to the pull request after it has been automatically reviewed and you want Copilot to re-review it, you can request this manually. Click the {% octicon "sync" aria-label="Re-request review" %} button next to Copilot's name in the **Reviewers** menu.

## Getting detailed code quality feedback across your repository

GitHub Copilot code review reviews the changes in a pull request and suggests fixes. To add systematic feedback on the reliability and maintainability of your code, on pull requests and across your default branch, enable GitHub Code Quality.

GitHub Code Quality complements Copilot code review by adding:

* **Rules-based  CodeQL-powered analysis** on pull requests and on your default branch.
* **Test-coverage metrics** on pull requests, so you can see whether a change maintains or reduces coverage.
* **One-click, Copilot-powered fixes**, including delegating remediation to Copilot cloud agent.
* **Optional merge gating** with rulesets, so pull requests with unresolved rules-based findings (or that miss a coverage threshold) can be blocked from merging.

For more information, see [Code Quality](https://docs.github.com/en/code-security/concepts/code-quality/code-quality).

## Further reading

* [Use Code Review](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review)
