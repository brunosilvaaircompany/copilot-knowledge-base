# Creating custom agents for Copilot cloud agent

Custom agents allow you to tailor Copilot's expertise for specific tasks. For a conceptual overview of custom agents, see [About Custom Agents](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-custom-agents).

> [!NOTE]
> Custom agents are in public preview for JetBrains IDEs, Eclipse, and Xcode, and subject to change.


## Creating a custom agent profile in a repository on GitHub

1. Go to the agents tab at [https://github.com/copilot/agents](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text).

1. Using the dropdown menu in the prompt box, select the repository you want to create the custom agent profile in.

   > [!NOTE]
   > Organization owners can create organization-level custom agents in the organization's `.github` or `.github-private` repository that are available across all repositories within their organization. Enterprise owners can create enterprise-level custom agents in the `.github-private` repository of an organization designated in enterprise settings, available across all organizations in the enterprise. For more information, see [Prepare For Custom Agents](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/prepare-for-custom-agents) and [Prepare For Custom Agents](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/prepare-for-custom-agents).

1. Optionally, select the branch you want to create the agent profile in. The default is the main branch.
1. Click {% octicon "copilot" aria-label="Select a custom agent" %}, then click **{% octicon "plus" aria-label="Plus button" %} Create an agent**. This will open a template agent profile called `my-agent.agent.md` in the `.github/agents` directory of your target repository.
1. If you are creating an organization or enterprise-level custom agent, delete the `.github/` portion of the file path to move your template to the root `agents` directory.
1. Edit the filename (the text before `.agent.md`), selecting a unique, descriptive name that identifies the agent's purpose. Note that the filename may only contain the following characters: `.`, `-`, `_`, `a-z`, `A-Z`, `0-9`.
1. Configure the agent profile, including the name, description, tools, and prompts. For more information on what the agent profile can include, see [Configuring an agent profile](#configuring-an-agent-profile).
1. Commit the file to the repository and merge it into the default branch. Go back to the agents tab and refresh the page if needed. Your custom agent will now appear in the dropdown when you click {% octicon "copilot" aria-hidden="true" aria-label="copilot" %} in the prompt box.

## Configuring an agent profile

An agent profile is a Markdown file with YAML frontmatter that specifies the custom agent's name, description, available tools, and MCP server configurations. Configuring an agent profile involves defining the agent's identity, capabilities, tool access, and behavioral instructions.

For detailed configuration information about YAML properties, tools, MCP server setup, tool aliases, and how custom agents are processed, see [Custom Agents Configuration](https://docs.github.com/en/copilot/reference/custom-agents-configuration).

To configure your agent profile:

1. Optionally, write a `name` for your custom agent. If unset, the name will default to the filename (without the `.md` or `.agent.md` suffix).
1. Write a brief `description` (required) explaining what your agent does and its specific capabilities or domain expertise.
1. In the `tools` property, define which tools the agent can use. This is a list of tool names or aliases, including tools from MCP servers configured in the repository settings or the agent profile (for example, `tools: ["read", "edit", "search", "some-mcp-server/tool-1"]`). If you omit this property, the agent will have access to all available tools. See "Tools" in [Custom Agents Configuration](https://docs.github.com/en/copilot/reference/custom-agents-configuration#tools).
1. Optionally, in the `mcp-servers` property, you can configure MCP servers that will be available only to this agent to extend its capabilities. See "MCP server configuration details" in [Custom Agents Configuration](https://docs.github.com/en/copilot/reference/custom-agents-configuration#mcp-server-configuration-details).
1. If you are creating and using the agent profile in VS Code, JetBrains IDEs, Eclipse, or Xcode, you can also use the `model` property to control which AI model the agent should use.
1. Optionally, set the `target` property to either `vscode` or `github-copilot` if you want to only use the agent in a specific environment. The agent will be available in both environments if you omit the property.
1. Write the agent's prompt. Define the agent's behavior, expertise, and instructions in the Markdown content below the YAML frontmatter. The prompt can be a maximum of 30,000 characters.


## Example agent profiles

The following examples demonstrate what an agent profile could look like for the common tasks of writing tests or planning the implementation of a project. For additional inspiration, see the [Custom agents](/copilot/tutorials/customization-library/custom-agents) examples in the customization library. You can also find more specific examples in the [awesome-copilot](https://github.com/github/awesome-copilot/tree/main/agents) community collection.

### Testing specialist

This example enables all tools by omitting the `tools` property.

```text copy
---
name: test-specialist
description: Focuses on test coverage, quality, and testing best practices without modifying production code
---

You are a testing specialist focused on improving code quality through comprehensive testing. Your responsibilities:

- Analyze existing tests and identify coverage gaps
- Write unit tests, integration tests, and end-to-end tests following best practices
- Review test quality and suggest improvements for maintainability
- Ensure tests are isolated, deterministic, and well-documented
- Focus only on test files and avoid modifying production code unless specifically requested

Always include clear test descriptions and use appropriate testing patterns for the language and framework.
```

### Implementation planner

This example only enables a subset of tools.

```text copy
---
name: implementation-planner
description: Creates detailed implementation plans and technical specifications in markdown format
tools: ["read", "search", "edit"]
---

You are a technical planning specialist focused on creating comprehensive implementation plans. Your responsibilities:

- Analyze requirements and break them down into actionable tasks
- Create detailed technical specifications and architecture documentation
- Generate implementation plans with clear steps, dependencies, and timelines
- Document API designs, data models, and system interactions
- Create markdown files with structured plans that development teams can follow

Always structure your plans with clear headings, task breakdowns, and acceptance criteria. Include considerations for testing, deployment, and potential risks. Focus on creating thorough documentation rather than implementing code.
```


## Using custom agents

Once you've created a custom agent, you can use it wherever Copilot cloud agent is available.

* When prompting Copilot cloud agent with a task on GitHub.com, use the dropdown menu in the agents panel or agents tab to select your custom agent instead of the default cloud agent.
* When assigning Copilot cloud agent to an issue, you can select your custom agent from the dropdown menu to handle the issue with your specialized configuration.
* When using the GitHub Copilot CLI, you can choose to use a particular custom agent by using the `/agent` slash command or referencing the agent in a prompt or via a command-line argument. For more information, see [Overview](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview#use-custom-agents).

When Copilot opens pull requests, it will note which custom agent was used to complete the work in the pull request description.

For more information on using Copilot cloud agent, see [Start Copilot Sessions](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/start-copilot-sessions).


## Next steps

* For a hands-on tutorial to create your first custom agent, see [Your First Custom Agent](https://docs.github.com/en/copilot/tutorials/customization-library/custom-agents/your-first-custom-agent).
* For detailed configuration information, see [Custom Agents Configuration](https://docs.github.com/en/copilot/reference/custom-agents-configuration).
* For information on using cloud agents, including your custom agents, to start Copilot sessions, see [Start Copilot Sessions](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/start-copilot-sessions).
