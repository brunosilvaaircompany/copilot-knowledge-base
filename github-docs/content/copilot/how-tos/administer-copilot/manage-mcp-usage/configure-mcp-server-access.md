# Configure MCP server access for your organization or enterprise

> [!NOTE]
> The MCP registry URL and allowlist are in public preview and subject to change.

## Prerequisites

Before you can fully configure MCP server access for your company, you need to create an MCP registry. See [Configure MCP Registry](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-mcp-registry).

## Configuring the MCP allowlist policy for an enterprise

To ensure uniform access, you can set and maintain your MCP registry URL and allowlist policy at the enterprise level. Otherwise, if your teams have different needs, you should configure separate policies for each organization.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} AI controls**.

1. In the sidebar, click {% octicon "mcp" aria-hidden="true" aria-label="mcp" %} **MCP**.

1. Ensure **MCP servers in Copilot** is set to **Enabled everywhere**.
1. In the **MCP Registry URL** section, enter the URL of your registry, then click **Save**.

    > [!NOTE]
> If you set up your MCP registry using Azure API Center, enter the base URL for your API Center, including the workspace path, in the format:
>
> ```text
> https://SERVICE-NAME.data.REGION.azure-apicenter.ms/workspaces/WORKSPACE-NAME
> ```
>
> For example:
>
> ```text
> https://contoso-apic.data.eastus.azure-apicenter.ms/workspaces/default
> ```
>
> Including additional route suffixes like `/v0.1/servers` will cause the registry to error out, because GitHub Copilot appends the MCP v0.1 path automatically.


1. In the **Restrict MCP access to registry servers** section, select the dropdown menu, then click one of the following options:
   * **Allow all**: No restrictions. All MCP servers can be used.
   * **Registry only**: Only servers from the registry may run.

    Your chosen policy will immediately apply to developers in your enterprise.

## Configuring the MCP allowlist policy for an organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, then click **Policies**.
1. In the "Features" section, ensure **MCP servers in Copilot** is set to **Enabled**.
1. In the **MCP Registry URL (optional)** field, enter the URL of your registry, then click **Save**.

    > [!NOTE]
> If you set up your MCP registry using Azure API Center, enter the base URL for your API Center, including the workspace path, in the format:
>
> ```text
> https://SERVICE-NAME.data.REGION.azure-apicenter.ms/workspaces/WORKSPACE-NAME
> ```
>
> For example:
>
> ```text
> https://contoso-apic.data.eastus.azure-apicenter.ms/workspaces/default
> ```
>
> Including additional route suffixes like `/v0.1/servers` will cause the registry to error out, because GitHub Copilot appends the MCP v0.1 path automatically.


1. In the **Restrict MCP access to registry servers** section, select the dropdown menu, then click one of the following options:
   * **Allow all**: No restrictions. All MCP servers can be used.
   * **Registry only**: Only servers from the registry may run.

    Your chosen policy will immediately apply to developers in your organization.

## Next steps

For detailed information on MCP allowlist enforcement and limitations, see [MCP Allowlist Enforcement](https://docs.github.com/en/copilot/reference/mcp-allowlist-enforcement).

## Further reading

* [Supported Surfaces For Policies](https://docs.github.com/en/copilot/reference/supported-surfaces-for-policies)
