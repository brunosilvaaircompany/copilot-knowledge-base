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

Global instructions apply to every session across all projects.

1. Open the app settings.
1. Click **Sessions**.
1. Under "Instructions," edit "App instructions."

### Setting repository-specific instructions

Repository-specific instructions apply to every session for the selected repository.

1. Open the app settings.
1. Under "Projects," click the repository.
1. Edit the "Instructions" field.

## Adding agent skills

Agent skills are folders of instructions, scripts, and resources that Copilot can load when relevant to improve its performance in specialized tasks. Any skills configured for your repositories or Copilot CLI are automatically available in the GitHub Copilot app. To add or manage skills, click **Customize** in the app sidebar, then click **Skills**.

For more information about agent skills, see [About Agent Skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills).

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


## Using custom agents

Custom agents are specialized versions of Copilot cloud agent that you can tailor to specific tasks and workflows.

Use the agent picker dropdown in the prompt box to select a custom agent before or during a session.

Alternatively, type `/agent` in the prompt box to choose and invoke a custom agent.

For more information, see [About Custom Agents](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-custom-agents).

## Adding plugins

Plugins are installable packages that add a preconfigured set of capabilities, such as skills, hooks, custom agents, MCP servers, and canvas extensions, extending the functionality of the GitHub Copilot app.

The **Plugins** view shows plugins from the marketplaces configured in the app. You can filter the list by marketplace or add a custom marketplace.

To browse and install a plugin:

1. Click **Customize** in the app sidebar, then click **Plugins**.
1. Optionally, use the marketplace dropdown to filter the available plugins.
1. Find the plugin you want to use, then click **Install**.

To add a custom marketplace:

1. In the **Plugins** view, click the {% octicon "gear" aria-label="The marketplace settings icon" %} icon next to the marketplace dropdown.
1. Follow the prompts to add the GitHub repository or Git URL that hosts the marketplace.

For more information, see [About Plugins](https://docs.github.com/en/copilot/concepts/agents/about-plugins).

## Working with canvas extensions

Use canvas extensions to build shared, agent-driven artifacts and interfaces for team or personal workflows. You can find canvases under **Canvas** in **Customize**, or use `/create-canvas` in a session to create your own. For more information, see [Working With Canvas Extensions](https://docs.github.com/en/copilot/how-tos/github-copilot-app/working-with-canvas-extensions).

## Organization and enterprise management

Enterprise and organization owners can set policies to govern how Copilot is used across surfaces. For the major policies supported by the GitHub Copilot app, see [Supported Surfaces For Policies](https://docs.github.com/en/copilot/reference/supported-surfaces-for-policies).

Enterprises can also define a `managed-settings.json` file to control which actions users can take in supported Copilot clients, such as which plugins users can install and whether "YOLO-style" commands are permitted. See [Configure Enterprise Managed Settings](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings).
