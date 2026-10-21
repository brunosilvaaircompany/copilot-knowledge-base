# Custom agents

Custom agents are specialized versions of the Copilot agent that you tailor to particular tasks and workflows. Define a role once instead of repeating its instructions and tool requirements every time you need that expertise.

For example, you can create a documentation specialist that follows your writing standards, or a reviewer that can read and search files but does not need editing tools.

## About agent profiles

An agent profile is a Markdown file with YAML frontmatter. It describes the agent's purpose, gives it instructions, and can restrict its available tools. In supported environments, a profile can also configure MCP servers for that agent.

Use a custom agent when you need a reusable role with a particular approach and toolset. If you only need task-specific instructions and resources, a skill can be a simpler choice. For a comparison, see [Comparing Customizations](https://docs.github.com/en/copilot/concepts/customizations/comparing-customizations).

Profiles can be shared at repository, organization, and enterprise levels. Copilot CLI also supports personal profiles. Configuration locations, supported properties, and precedence depend on the environment. See [Custom Agents Configuration](https://docs.github.com/en/copilot/reference/custom-agents-configuration).

## Where you can use custom agents

You can use custom agents with:

* **The GitHub Copilot app**.
* **GitHub Copilot CLI**.
* **Copilot cloud agent on GitHub.com**, including the agents tab and panel, issue assignment, and pull requests.
* **Supported IDEs**, including Visual Studio Code, Visual Studio, JetBrains IDEs, Eclipse, and Xcode.

Custom agents in JetBrains IDEs and Xcode are in public preview. For IDE-specific version support and release status, see [Copilot Feature Matrix](https://docs.github.com/en/copilot/reference/copilot-feature-matrix).

In an IDE, using a custom agent directly in chat is different from delegating a task to Copilot cloud agent. A profile's properties can behave differently or be ignored between environments. For VS Code profile behavior, see [Custom agents in VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-agents).

## Built-in agents

You do not need to define a custom agent for every specialist task. Copilot CLI includes built-in agents that the main agent can use for common work:

* `explore` for codebase exploration
* `task` for command execution
* `general-purpose` for work requiring a separate agent context
* `code-review` for reviewing changes
* `research` for research
* `rubber-duck` for a second opinion
* `security-review` for security-focused review

These are provided by Copilot CLI, rather than authored as your own profiles. The available tools and behavior differ by agent. For their capabilities and model defaults, see [Built-in agents](/copilot/reference/copilot-cli-reference/cli-command-reference#built-in-agents).

## Custom agents and subagents

A custom agent is a **definition of a specialist**. A subagent is **an agent doing delegated work** in a separate context window. The main agent can delegate to a built-in agent or run a specialist using a custom agent profile.

Separate context lets a subagent focus on its assigned task without adding every intermediate detail to the main conversation. Independent tasks can also run in parallel. These are benefits of delegation, not properties that require you to create a custom profile.

Selecting a custom agent for a session and delegating a subtask to one are different ways of using a profile. In Copilot CLI, repository instructions are included for the session agent but are not included for a custom subagent by default. For the opt-in setting and invocation methods, see [Create Custom Agents For CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli).

For the broader delegation model in the GitHub Copilot app and Copilot CLI, see [Delegating And Parallelizing Work With Agents](https://docs.github.com/en/copilot/concepts/agent-capabilities/choosing-and-delegating-agent-work/delegating-and-parallelizing-work-with-agents).

## Next steps

Choose the setup guide for where you work:

* [Create Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents)
* [Use Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-custom-agents)
* [Customize GitHub Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/customize-github-copilot-app)
