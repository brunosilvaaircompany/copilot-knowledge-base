# Building guardrails for GitHub Copilot cloud agent

Before you enable Copilot cloud agent, it is good practice to set up your enterprise so you can be confident Copilot will operate within secure, predictable guardrails.

## Learn about built-in protections

Copilot cloud agent has a strong base of built-in security protections designed to protect against common risk points of AI agents. See [Risks And Mitigations](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/risks-and-mitigations).

## Plan policy settings

Plan your policies for Copilot cloud agent in advance. Policies allow you to set a baseline for restrictions at the enterprise level, which organization owners can restrict further if needed.

Some questions to ask are:

* Which organizations and repositories will Copilot cloud agent be enabled in? See [Access Management](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/access-management).
* Which MCP servers will you configure to give Copilot cloud agent access to external tools? See [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers).

### Which policies don't apply?

The following Copilot policies don't apply to Copilot cloud agent:

* Custom models (providing your own LLM API keys)
* Private MCP registries

## Adapt rulesets

Copilot cloud agent is already restricted from actions like pushing to a default branch or merging pull requests. You can build on these default protections in branch rulesets. Copilot cloud agent is subject to rulesets just like human developers.

To adapt your rulesets for Copilot cloud agent:

* **Consider whether additional rules are required** in repositories where agents will operate, such as requiring results from code scanning or Code Quality. If you have identified the organizations or repositories where Copilot cloud agent will be enabled, you can apply a custom property to them so they're easy to target in a ruleset.
* **Consider whether Copilot cloud agent will be blocked** by any of your existing rulesets. Copilot _can_ sign its commits, but it may not be able to follow other rules that restrict commit metadata.
* **Protect important Copilot and MCP configuration files** with a `CODEOWNERS` file, and enable the "Require review from Code Owners" rule, so that edits to these files must be approved by specific teams. For filepaths to target, see [Customization Cheat Sheet](https://docs.github.com/en/copilot/reference/customization-cheat-sheet).

## Set up your GitHub Actions environment

Copilot cloud agent operates on GitHub Actions runners. Set up your runners and policies so that Copilot operates securely.

### Store data and secrets

Continue to store data and tokens that you _don't_ want Copilot to access as **GitHub Actions variables or secrets**. Copilot won't be able to access these in its sessions or environment setup steps.

If you need to provide data and secrets that Copilot cloud agent _does_ need, you'll be able to do this by configuring Agents secrets and variables at the organization or repository level. For more information, see [Configure Secrets And Variables](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/configure-secrets-and-variables).

### Configure runners

Decide which runners you will use for Copilot cloud agent. We recommend using **GitHub-hosted runners**, so that each Copilot cloud agent runs on a fresh virtual machine. If you use self-hosted runners, we recommend using ephemeral runners.

Organization owners can restrict the Copilot cloud agent's runners to a specific runner label, to be used automatically in all repositories. See [Configure Runner For Coding Agent](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/configure-runner-for-coding-agent).

### Configure workflow policies

Decide whether **GitHub Actions workflows should be blocked from running** in pull requests that Copilot cloud agent creates. See [Configuring Agent Settings](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/configuring-agent-settings#allowing-github-actions-workflows-to-run-automatically-when-copilot-pushes).

By default, workflows are blocked from running until someone with write access approves them. Repository administrators will be able to disable this feature, so communicate with them in advance about your preferred setting.

### Review default permissions

Review the default permissions for the `GITHUB_TOKEN` in your enterprise. See [Enforcing Policies For GitHub Actions In Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#workflow-permissions).

This policy does **not** affect the token that Copilot will receive for its sessions, but the `GITHUB_TOKEN` _is_ used in environment setup steps defined in `copilot-setup-steps.yml` workflow files.

Bear in mind that developers will be able to set their own `permissions` in these workflow files, and you should encourage them to use the minimum required permissions in all workflows.
