# Customizing the GitHub Copilot app

Tailor the GitHub Copilot app to your workflows so your agents follow your conventions, use your preferred tools, and apply the right expertise to every task.

The **Customize** tab in the app sidebar allows you to discover and manage MCP servers, plugins, skills, and canvases in one place. From this tab, you can:

* Explore featured customizations as a starting point if you do not already know which customization you need.
* Browse by customization type.
* Find MCP servers by viewing trending options or browsing by category.
* Review customizations already available for you to use in the **Installed** view.

## Setting global and repository instructions

You can add instructions that apply globally or only to a specific repository.

### Setting global instructions

Global instructions apply to every session across all repositories and local folders.

1. Open the app settings.
1. Click **Sessions**.
1. Under "Instructions," edit "App instructions."

### Setting repository-specific instructions

Repository-specific instructions apply to every session for the selected repository.

1. Open the app settings.
1. Under "Repositories," click the repository.
1. Edit the "Instructions" field.

## Adding agent skills

Agent skills are folders of instructions, scripts, and resources that Copilot can load when relevant to improve its performance in specialized tasks. Any skills configured for your repositories or Copilot CLI are automatically available in the GitHub Copilot app. To add or manage skills, click **Customize** in the app sidebar, then click **Skills**.

For more information about agent skills, see [Agent Skills](https://docs.github.com/en/copilot/concepts/customizations/agent-skills).

For a GitHub-provided built-in skills reference, see [Built In Skills](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/built-in-skills).

## Configuring MCP servers

MCP servers connect the agent to external tools and data sources. Any MCP servers configured for your repositories or Copilot CLI are automatically available in the GitHub Copilot app.

To discover and install an MCP server:

1. Click **Customize** in the app sidebar.
1. Click **MCP**.
1. Explore featured or trending servers, browse by category, or add a custom server.
1. Select a server and follow the prompts to install it.

To view or manage MCP servers that are already installed, click **Installed**.

For more information about MCP, see [Add MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers).

## Connecting services

> [!NOTE]
> Copilot connectors are in public preview and are subject to change.


Connect an external service in the GitHub Copilot app to give Copilot access to its tools and context. You can then use the connector across supported Copilot surfaces without repeating setup. GitHub handles MCP server configuration and authentication for you.

If your organization or enterprise provides your Copilot subscription, an administrator may need to update its policies to allow these connections. See [Copilot Connectors](https://docs.github.com/en/copilot/concepts/customizations/copilot-connectors).

To connect a service:

1. Click **Customize** in the app sidebar.
1. Select **MCP** from the dropdown next to the search field.
1. Select the **GitHub verified** filter. GitHub-verified MCP servers (connectors) are marked with a Mona badge that shows **Verified** when you hover over it.
1. Next to the service you want to connect, click **Connect**. **Connect** only appears for services that have a GitHub-verified MCP server. Other services are listed as standard MCP servers, which you install instead. See [Configuring MCP servers](#configuring-mcp-servers).
1. Follow the prompts to sign in to the service and approve access.

## Using custom agents

Custom agents are specialized versions of Copilot that you can tailor to specific tasks and workflows.

Use the agent picker dropdown in the prompt box to select a custom agent before or during a session.

Alternatively, type `/agent` in the prompt box to choose and invoke a custom agent.

For more information, see [Custom Agents](https://docs.github.com/en/copilot/concepts/customizations/custom-agents).

## Adding plugins

Plugins are installable packages that add a preconfigured set of capabilities, such as skills, hooks, custom agents, MCP servers, and canvas extensions, extending the functionality of the GitHub Copilot app.

The **Customize** page shows plugins and other customizations from the sources configured in the app. Use its search field to find a plugin.

Repository defaults are a project-specific option in clients that read `.github/copilot/settings.json`. Members can turn off these defaults. Enterprise managed settings always win: required plugins cannot be turned off, and blocked plugins cannot be turned on. For an overview of plugin behavior, see [Plugins](https://docs.github.com/en/copilot/concepts/customizations/plugins).

### Install a plugin

1. Click **Customize** in the app sidebar.
1. Search the Browse page for the plugin you want to use, then click **Install**.

To test a plugin in the app, add the marketplace that contains it, then find and install the plugin from **Customize**.

### Manage installed plugins

1. Click **Customize** in the app sidebar.
1. Click **Installed**.
1. Turn on or off the toggle next to the plugin.

## Adding a plugin marketplace

To add a custom marketplace in the GitHub Copilot app:

1. On the **Customize** page, select the marketplace settings control next to the marketplace dropdown.
1. Follow the prompts to add the GitHub repository or Git URL that hosts the marketplace.

To create and share a marketplace, see [Create And Share Plugin Marketplaces](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/create-and-share-plugin-marketplaces).

## Working with canvas extensions

Use canvas extensions to build shared, agent-driven artifacts and interfaces for collaborative or personal workflows. You can find canvases under **Canvas** in **Customize**, or use `/create-canvas` in a session to create your own. For more information, see [Working With Canvas Extensions](https://docs.github.com/en/copilot/how-tos/github-copilot-app/working-with-canvas-extensions).

To work through code scanning alerts alongside your code, install the `github-security` plugin. See [View And Fix Security Alerts](https://docs.github.com/en/copilot/how-tos/github-copilot-app/view-and-fix-security-alerts).

## Organization and enterprise management

Enterprise and organization owners can set policies to govern how Copilot is used across surfaces. For the major policies supported by the GitHub Copilot app, see [Supported Surfaces For Policies](https://docs.github.com/en/copilot/reference/supported-surfaces-for-policies).

Enterprises can also define a `managed-settings.json` file to control which actions users can take in supported Copilot clients, such as which plugins users can install and whether "YOLO-style" commands are permitted. See [Get Started](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started).
