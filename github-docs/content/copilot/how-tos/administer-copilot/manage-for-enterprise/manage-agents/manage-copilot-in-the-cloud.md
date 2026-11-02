# Managing GitHub Copilot in the cloud for your enterprise or organization

Copilot in the cloud is a connected experience that lets users start and resume cloud sessions across the GitHub website, GitHub Mobile, Copilot CLI, and the Copilot app. See [Copilot On GitHub](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github).

The **Copilot in the cloud** policy determines:

* Whether users can access the chat interface or assign work to Copilot on the GitHub website and GitHub Mobile
* Whether users can start sessions in cloud sandboxes from local clients (Copilot CLI and the Copilot app)

This feature is enabled by default. To ensure data security, chat sessions are scoped by default to either a single organization or the user's personal repositories. If you have enabled single sign-on (SSO), users will need to authenticate with SSO to access session data from a repository associated with that organization.


## What if I already set policies for Copilot cloud agent and Copilot Chat in GitHub?

The individual policies for Copilot cloud agent, Copilot Chat in GitHub, and Copilot Chat in GitHub Mobile have been replaced by the **Copilot in the cloud** policy. If you previously opted a repository out of Copilot cloud agent, that repository exclusion is carried over to the new experience.

Be aware that coverage of other policies and enterprise managed settings is different for the unified surface. Check that your governance settings still meet your needs. See [Supported Surfaces For Policies](https://docs.github.com/en/copilot/reference/supported-surfaces-for-policies) and [Enterprise Managed Settings](https://docs.github.com/en/copilot/reference/enterprise-administrators/enterprise-managed-settings#supported-keys).

## Prerequisites

Before enabling Copilot in the cloud, you may want to review your enterprise policies, repository protections, and runner settings to ensure agents will operate in a secure environment. See [Build Guardrails](https://docs.github.com/en/copilot/tutorials/cloud-agent/build-guardrails).

## Managing the Copilot in the cloud policy


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} AI controls**.

1. In the sidebar, click {% octicon "copilot" aria-hidden="true" aria-label="copilot" %} **Copilot**.
1. Under "Features & clients", click **Configure features & clients**.
1. Select a global policy for Copilot in the cloud, then communicate your decision with your organizations.

   > [!TIP] If you select **Enabled for selected organizations**, click **Manage organizations**, then **Select organizations**. In the "Copilot in the cloud" dialog, select the organizations to enable, then click **Save**. To select organizations based on custom properties instead, use the REST API. See [Copilot Coding Agent Management](https://docs.github.com/en/rest/copilot/copilot-coding-agent-management#selecting-organizations-with-custom-properties).

1. By default, the feature will be available in all repositories in selected organizations. If there are repositories where the cloud agent should be blocked for all users, tell organization owners to configure this setting. See [Add Copilot Cloud Agent](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent#disabling-or-enabling-copilot-cloud-agent-in-your-repositories).

## Configuring permissions for tool calls

By default, cloud sessions run in interactive mode with assisted tool approvals. This gives users the best balance between control and ease of use. Users can also enable "allow-all" mode unless your enterprise has blocked this option.

To disable "allow-all" mode or assisted approval, or configure permissions for specific operations, you can use your enterprise's `managed-settings.json` file. See [Get Started](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started).

## Configuring MCP servers and web access

Copilot automatically has access to a small number of default MCP servers. See [MCP And Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/mcp-and-cloud-agent#default-mcp-servers).

You can enable third-party MCP servers for your enterprise.

1. In the sidebar, click {% octicon "mcp" aria-hidden="true" aria-label="mcp" %} **MCP**.

1. Set a policy for **MCP servers in Copilot**.

For more granular settings, you can configure an allowlist or denylist in your enterprise's `managed-settings.json` file. See [Configure Enterprise Allowlist](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-enterprise-allowlist).

Organization owners can configure the firewall for their organization to determine which external hosts and URLs the cloud agent can access. For more information, see [Customize The Firewall](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-the-firewall).

## Configuring session environments

Agent sessions on GitHub can run in a cloud sandbox or on GitHub Actions. Compute costs from both environments draw on the same monthly allowance.

* A cloud sandbox is a faster, lightweight environment that allows users to resume sessions in GitHub's chat interface or in other clients.
* GitHub Actions gives you more control over the environment, such as secrets and variables, setup steps to install dependencies, and access to self-hosted runners or private networking.

For a detailed comparison, see [Copilot On GitHub](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github#comparison-of-the-two-experiences).


Coverage of policies and enterprise managed settings currently varies between environments. Where users can choose between these environments, cloud sandboxes are the default. However, currently, some interfaces can only run on GitHub Actions (such as assigning an issue to Copilot or mentioning `@Copilot` in a pull request).


Enabling the **Copilot in the cloud** policy automatically makes cloud sandboxes available to users, and cloud sandboxes cannot be disabled separately. See [Enabling Or Disabling Cloud Sandboxes For Your Organization](https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-sandboxes-for-your-organization).

For more information about configuring the GitHub Actions environment, see [Customize The Agent Environment](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment) and [Configure Runner For Coding Agent](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/configure-runner-for-coding-agent).

## Enabling agent apps and third-party agents

Enterprise owners can enable third-party agents, including agent apps, for their organizations. Once enabled at the enterprise level, organization owners can choose which agents to allow. For more information, see [Agent Apps](https://docs.github.com/en/copilot/concepts/agent-capabilities/about-agents/agent-apps) and [About Third Party Coding Agents](https://docs.github.com/en/copilot/concepts/agent-capabilities/about-agents/about-third-party-coding-agents).
