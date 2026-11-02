# Building a secure cloud environment for agents in your enterprise

This tutorial is for enterprise owners and AI managers preparing to enable **Copilot in the cloud** for their teams.

Enabling Copilot in the cloud allows users to start agent sessions in the cloud and assign work to Copilot on GitHub. Before you do this, it is good practice to set up your enterprise so you can be confident Copilot will operate within secure, predictable guardrails.

## Learn about built-in protections

Copilot in the cloud has a strong base of built-in security protections designed to protect against common risk points of AI agents. See [Risks And Mitigations](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/risks-and-mitigations).

## Plan policy settings

Plan your policies for Copilot in the cloud in advance. Policies allow you to set a baseline for restrictions at the enterprise level, which organization owners can restrict further if needed.

Some questions to ask are:

* Which organizations and repositories will **Copilot in the cloud** be enabled in?
* Which MCP servers will you configure to give Copilot access to external tools? See [MCP Management](https://docs.github.com/en/copilot/concepts/enterprise/mcp-management).
* Which other policies and managed settings will you use to govern the Copilot in the cloud experience? See [Supported Surfaces For Policies](https://docs.github.com/en/copilot/reference/supported-surfaces-for-policies) and [Enterprise Managed Settings](https://docs.github.com/en/copilot/reference/enterprise-administrators/enterprise-managed-settings#supported-keys).

## Adapt rulesets

Copilot is already restricted from actions like pushing to a default branch or merging pull requests. You can build on these default protections in branch rulesets. Copilot is subject to rulesets just like human developers.

To adapt your rulesets for Copilot agents:

* **Consider whether additional rules are required** in repositories where agents will operate, such as requiring results from code scanning or Code Quality. If you have identified the organizations or repositories where Copilot in the cloud will be enabled, you can apply a custom property to them so they're easy to target in a ruleset.
* **Consider whether Copilot will be blocked** by any of your existing rulesets. Copilot _can_ sign its commits, but it may not be able to follow other rules that restrict commit metadata.
* **Protect important Copilot and MCP configuration files** with a `CODEOWNERS` file, and enable the "Require review from Code Owners" rule, so that edits to these files must be approved by specific teams. For filepaths to target, see [Customization Cheat Sheet](https://docs.github.com/en/copilot/reference/customization-cheat-sheet).

## Store variables and secrets

Provide variables and secrets that Copilot needs to access during setup, task execution, and connection to MCP servers. You can configure Agents secrets and variables at the organization or repository level. For more information, see [Configure Secrets And Variables](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/configure-secrets-and-variables).

Copilot will be able to access these secrets and variables in sessions running on GitHub Actions. For sessions running in cloud sandboxes, only secrets will be available.

## (Optional) Configure your GitHub Actions environment

Agent sessions on GitHub can run in a cloud sandbox or on GitHub Actions. Compute costs from both environments draw on the same monthly allowance.

* A cloud sandbox is a faster, lightweight environment that allows users to resume sessions in GitHub's chat interface or in other clients.
* GitHub Actions gives you more control over the environment, such as secrets and variables, setup steps to install dependencies, and access to self-hosted runners or private networking.

For a detailed comparison, see [Copilot On GitHub](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github#comparison-of-the-two-experiences).


If users will run agents on GitHub Actions, set up your runners and policies so that Copilot operates securely.

### Keep secrets and variables

You can continue to store data and tokens that you _don't_ want Copilot to access as **GitHub Actions variables or secrets**. Copilot won't be able to access these in its sessions or environment setup steps.

### Configure runners

Decide which runners you will use for Copilot cloud agent. We recommend using **GitHub-hosted runners**, so that each Copilot cloud agent runs on a fresh virtual machine. If you use self-hosted runners, we recommend using ephemeral runners.

Organization owners can restrict the Copilot cloud agent's runners to a specific runner label, to be used automatically in all repositories. See [Configure Runner For Coding Agent](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/configure-runner-for-coding-agent).

### Configure workflow policies

Decide whether **GitHub Actions workflows should be blocked from running** in pull requests that Copilot creates. See [Configuring Agent Settings](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/configuring-agent-settings#allowing-github-actions-workflows-to-run-automatically-when-copilot-pushes).

By default, workflows are blocked from running until someone with write access approves them. Repository administrators will be able to disable this feature, so communicate with them in advance about your preferred setting.

### Review default permissions

Review the default permissions for the `GITHUB_TOKEN` in your enterprise. See [Enforcing Policies For GitHub Actions In Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#workflow-permissions).

This policy does **not** affect the token that Copilot will receive for its sessions, but the `GITHUB_TOKEN` _is_ used in environment setup steps defined in `copilot-setup-steps.yml` workflow files.

Bear in mind that developers will be able to set their own `permissions` in these workflow files, and you should encourage them to use the minimum required permissions in all workflows.
