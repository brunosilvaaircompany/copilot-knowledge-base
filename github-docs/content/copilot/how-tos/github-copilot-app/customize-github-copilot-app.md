# Customizing the GitHub Copilot app

Tailor the GitHub Copilot app to your workflows so your agents follow your conventions, use your preferred tools, and apply the right expertise to every task.

## Setting global and repository instructions

You can set global instructions in the app settings under **General**.

You can set repository-specific instructions in the app settings, under the repository name in the "Projects" section.

## Adding agent skills

Agent skills are folders of instructions, scripts, and resources that Copilot can load when relevant to improve its performance in specialized tasks. Any skills configured for your repositories or Copilot CLI are automatically available in the GitHub Copilot app. You can also add and manage skills in the app settings under **Skills**.

For more information about agent skills, see [About Agent Skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills).

For a GitHub-provided built-in skills reference, see [Built In Skills](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/built-in-skills).

## Configuring MCP servers

MCP servers connect the agent to external tools and data sources. Any MCP servers configured for your repositories or Copilot CLI are automatically available in the GitHub Copilot app. You can also add and manage additional MCP servers in the app settings under **MCP Servers**. The app includes a catalog of popular servers, or you can add a custom server.

For more information about MCP, see [Add MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers).


## Using custom agents

Custom agents are specialized versions of Copilot cloud agent that you can tailor to specific tasks and workflows.

In a session, type `/agent` to choose and invoke a custom agent.

For more information, see [About Custom Agents](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-custom-agents).

## Adding plugins

Plugins are installable packages that add a preconfigured set of capabilities, such as skills, hooks, and custom agents, extending GitHub Copilot app's functionality.

To browse and install plugins, open app settings, then click **Plugins**.

For more information, see [About Plugins](https://docs.github.com/en/copilot/concepts/agents/about-plugins).

## Working with canvas extensions

Use canvas extensions to build shared, agent-driven artifacts and interfaces for team or personal workflows. In a session, use `/create-canvas` to scaffold a canvas extension, then iterate on the canvas with the agent. For more information, see [Working With Canvas Extensions](https://docs.github.com/en/copilot/how-tos/github-copilot-app/working-with-canvas-extensions).

## Organization and enterprise management

Enterprise and organization owners can set policies to govern how Copilot is used across surfaces. For the major policies supported by the GitHub Copilot app, see [Supported Surfaces For Policies](https://docs.github.com/en/copilot/reference/supported-surfaces-for-policies).

Enterprises can also define a `managed-settings.json` file to control which actions users can take in supported Copilot clients, such as which plugins users can install and whether "YOLO-style" commands are permitted. See [Configure Enterprise Managed Settings](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings).
