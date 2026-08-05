## Use custom agents

A custom agent is a specialized version of Copilot. Custom agents help Copilot handle unique workflows, particular coding conventions, and specialist use cases.

Copilot CLI includes a default group of custom agents for common tasks:

<table>
  <thead>
    <tr>
      <th style="width:20%">Agent</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Explore</td>
      <td>Performs quick codebase analysis, allowing you to ask questions about your code without adding to your main context.</td>
    </tr>
    <tr>
      <td>Task</td>
      <td>Executes commands such as tests and builds, providing brief summaries on success and full output on failure.</td>
    </tr>
    <tr>
      <td>General-purpose</td>
      <td>Handles complex, multi-step tasks that require the full toolset and high-quality reasoning, running in a separate context to keep your main conversation clearly focused.</td>
    </tr>
    <tr>
      <td>Code-review</td>
      <td>Reviews changes with a focus on surfacing only genuine issues, minimizing noise.</td>
    </tr>
  </tbody>
</table>

The AI model being used by the CLI can choose to delegate a task to a subsidiary subagent process, that operates using a custom agent with specific expertise, if it judges that this would result in the work being completed more effectively. The model may equally choose to handle the work directly in the main agent.

You can define your own custom agents using Markdown files, called agent profiles, that specify what expertise the agent should have, what tools it can use, and any specific instructions for how it should respond.

You can define custom agents at the user, repository, organization, or enterprise level:

| Type | Location | Scope |
| --- | --- | --- |
| User-level custom agent | local `~/.copilot/agents` directory | All projects |
| Repository-level custom agent | `.github/agents` directory in your local and remote repositories | Current project |
| Organization-level custom agent | `/agents` directory in the organization's `.github` or `.github-private` repository | All projects within the organization |
| Enterprise-level custom agent | `/agents` directory in the `.github-private` repository of an organization designated in enterprise settings. For more information, see [Prepare For Custom Agents](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/prepare-for-custom-agents). | All projects under the enterprise account |

In the case of naming conflicts (where agents share the same filename), a user-level agent overrides a repository-level agent, a repository-level agent overrides an organization-level agent, and an organization-level agent overrides an enterprise-level agent.

Custom agents can be used in three ways:

* Using the slash command in the CLI's interactive interface to select from the list of available custom agents:

  ```shell
  /agent
  ```

* Calling out to the custom agent directly in a prompt:

  ```shell
  Use the refactoring agent to refactor this code block
  ```

  Copilot will automatically infer the agent you want to use.

* Specifying the custom agent you want to use with the command-line option. For example:

  ```shell
  copilot --agent=refactor-agent --prompt "Refactor this code block"
  ```

For more information, see [Create Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents).

## Use skills

You can create skills to enhance the ability of Copilot to perform specialized tasks with instructions, scripts, and resources.

For more information, see [Add Skills](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills).

## Add an MCP server

Copilot CLI comes with the GitHub MCP server already configured. This MCP server allows you to interact with resources on GitHub.com—for example, allowing you to merge pull requests from the CLI.

To extend the functionality available to you in Copilot CLI, you can add more MCP servers:

1. Use the following slash command:

   ```shell
   /mcp add
   ```

1. Fill in the details for the MCP server you want to add, using the <kbd>Tab</kbd> key to move between fields.
1. Press <kbd>Ctrl</kbd>+<kbd>S</kbd> to save the details.

Details of your configured MCP servers are stored in the `mcp-config.json` file, which is located, by default, in the `~/.copilot` directory. This location can be changed by setting the `COPILOT_HOME` environment variable. For information about the JSON structure of a server definition, see [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers#writing-a-json-configuration-for-mcp-servers).

For more detailed information on adding and managing MCP servers in Copilot CLI, see [Add MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers).

## Next steps

To learn how to guide and refine agent behavior during task execution to keep work on track, see [Steer Agents](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/steer-agents).
