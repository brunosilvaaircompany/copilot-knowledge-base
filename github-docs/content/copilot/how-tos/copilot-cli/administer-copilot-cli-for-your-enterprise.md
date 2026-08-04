# Administering Copilot CLI for your enterprise

Copilot CLI brings agentic capabilities to developers' command line. When Copilot CLI is enabled, developers can use it to ask Copilot to work on tasks locally or delegate work to Copilot cloud agent.

## Enabling or disabling Copilot CLI

You can control the use of Copilot CLI by configuring a policy.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} AI controls**.

1. To manage policies for **Copilot**, in the sidebar, click {% octicon "copilot" aria-hidden="true" aria-label="copilot" %} **Copilot**.
1. In the "Copilot Clients" section, for Copilot CLI, select your preferred policy.

> [!NOTE]
> Disabling Copilot CLI does not disable the GitHub Copilot app. The app is governed by its own policy. For more information, see [GitHub Copilot App](https://docs.github.com/en/copilot/concepts/agents/github-copilot-app).

## How do other AI controls affect Copilot CLI?

Not all enterprise-level AI controls and policies apply to Copilot CLI. These are the controls that **do apply**:

### Copilot CLI enablement

You can enable or disable Copilot CLI at the enterprise or organization level.

### Model selection

Users can only access AI models that are enabled at the enterprise level. When you enable or disable models in your enterprise settings, those changes are reflected in Copilot CLI. Users can view which models are available to them using the `/model` command.

Enterprise and organization owners can provide keys for custom models. Users can select these like any other model: with the Copilot CLI model selector, the `--model` flag, or environment variables. See [Use Your Own API Keys](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-your-own-api-keys).

Separately, users can also provide their own LLM keys locally. This is not controlled by enterprise policies. See [Use Byok Models](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/use-byok-models).

### Custom agents

Enterprise-configured custom agents are available to use with Copilot CLI.

### MCP server policies

Enterprise and organization MCP policies apply to Copilot CLI. You can configure an MCP registry URL so developers can discover approved servers, and set an allowlist policy to restrict which MCP servers can run. For more information, see [Configure MCP Server Access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-mcp-server-access).

### Copilot cloud agent enablement

Both the Copilot CLI policy and the Copilot cloud agent policy must be enabled for users to be able to use the `/delegate` command in Copilot CLI.

### Audit logging

Updates to enterprise policies that affect Copilot CLI are recorded as events in the enterprise audit log.

### Seat assignment

Users must have an assigned GitHub Copilot seat to access Copilot CLI.

### Controls that do not apply

All other controls do **not** affect Copilot CLI, notably:

* **IDE-specific policies**: Policies configured for specific IDEs or editor extensions
* **Content exclusions**: File path-based content exclusions

## Why can't my developers access Copilot CLI?

If you expect a user to have access to Copilot CLI and they don't:

1. Ensure the user has a valid GitHub Copilot seat assignment from an organization in your enterprise.
1. Verify the **enterprise-level policy.** If you set the policy to "Enabled everywhere" or "Disabled everywhere," this overrides all organization-level settings.
1. If the enterprise policy is set to "Let organizations decide," check the organizations where the user receives their GitHub Copilot license. Copilot CLI must be enabled in **at least one** of the organization granting them a GitHub Copilot license.

One way to ensure consistent access across all organizations is to set the policy to **Enabled everywhere** at the enterprise level.

## Further reading

* [CLI Best Practices](https://docs.github.com/en/copilot/how-tos/copilot-cli/cli-best-practices)
