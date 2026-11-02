# Copilot connectors

> [!NOTE]
> Copilot connectors are in public preview and are subject to change.


## About Copilot connectors

Much of what you need to know while coding lives outside your repository, in the services your team uses to plan, discuss, and monitor its work. Copilot can access services such as Slack, Work IQ, Atlassian Rovo, and Sentry through GitHub-verified Model Context Protocol (MCP) servers, or connectors. GitHub handles MCP server configuration and authentication for you.

Connect a service once by signing in and approving access. You can then use its tools and context in supported Copilot surfaces, without repeating setup.

To get started, visit the [Copilot customization page](https://github.com/copilot/customize?utm_source=link-docs-new-connectors-product&utm_medium=docs&utm_campaign=universe-2026) to explore available connectors. 

Depending on the connected service and its tools, you could ask Copilot to:

* Find requirements in Teams and SharePoint with Work IQ, then suggest the code changes and tests needed to implement them.
* Find and summarize the Slack thread where your team agreed on an API design before changing the implementation.
* Investigate a failing service by querying logs and metrics in Grafana Cloud.

Copilot can use tools from a connected service when they are relevant to your request, even if you do not mention the service by name. For a list of supported services, see [Supported Connectors](https://docs.github.com/en/copilot/reference/supported-connectors).

## Where you can use connectors

You can set up and use connectors from these locations:

* **GitHub Copilot app**: The **Customize** tab in the app sidebar. Select **MCP** from the dropdown next to the search field, then select the **GitHub verified** filter.
* **GitHub Copilot CLI**: The **Connectors** view of the MCP server dashboard, opened with `/mcp`.
* **Visual Studio Code**: The **Customizations** section of the Agents window.
* **Copilot in the cloud**: The [Copilot customization page](https://github.com/copilot/customize?utm_source=link-docs-new-connectors-product&utm_medium=docs&utm_campaign=universe-2026).

After you connect a service, you can also use its connector with Copilot in the cloud in GitHub Mobile for iOS and Android, or in a mobile browser.

Connectors work locally and in Copilot sessions that run on a cloud sandbox, including sessions started on GitHub.com. They are not yet supported in sessions that run on GitHub Actions, such as when you assign an issue to Copilot.

## Enabling connectors in your organization

If your organization or enterprise provides your Copilot subscription, the following policies and settings must allow connectors before you can use them:

* **Editor preview features**: Because connectors are in public preview, this policy must be enabled. To enable it, see [Manage Policies](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies#enabling-copilot-features-and-models-in-your-organization) or [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies#defining-policies-for-your-enterprise).
* **MCP servers in Copilot**: This policy must be enabled. If MCP servers are disabled, you can't use connectors.
* **Restrict MCP access to registry servers**: On clients that enforce this policy, setting it to **Registry only** blocks connectors. To use connectors on those clients, this policy must be set to **Allow all**.
* **MCP allowlist**: On clients that support MCP managed settings, if your enterprise defines an `allowedMcpServers` allowlist, the allowlist must include each connector's URL, or a wildcard that matches all connectors. A matching `deniedMcpServers` entry blocks the connector even if the allowlist permits it. See [Configure Enterprise Allowlist](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-enterprise-allowlist#allowing-copilot-connectors).

For more information about these policies, see [MCP Management](https://docs.github.com/en/copilot/concepts/enterprise/mcp-management). For the clients that enforce each policy, see [Supported Surfaces For Policies](https://docs.github.com/en/copilot/reference/supported-surfaces-for-policies).

The service you're connecting may have its own MCP access requirements. For example, a Slack administrator may need to enable MCP connections before you can connect Slack to Copilot.
