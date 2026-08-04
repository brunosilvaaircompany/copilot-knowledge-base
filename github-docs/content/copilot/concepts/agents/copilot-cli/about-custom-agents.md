# About custom agents

## About custom agents

Custom agents are specialized versions of the Copilot agent that you can tailor to your unique workflows, coding conventions, and use cases. They act like tailored teammates that follow your standards, use the right tools, and implement team-specific practices. You define these agents once instead of repeatedly providing the same instructions and context.

You define custom agents using Markdown files called agent profiles. These files specify prompts, tools, and MCP servers. This allows you to encode your conventions, frameworks, and desired outcomes directly into Copilot.

The agent profile defines the custom agent's behavior. When you assign the agent to a task or issue, it instantiates the custom agent.


In addition to any custom agents you define yourself, Copilot includes a set of pre-built custom agents. See [Built-in agents](#built-in-agents).

## Agent profile format

Agent profiles are Markdown files with YAML frontmatter. In their simplest form, they include:

* **Name** (optional): A display name for the custom agent. If omitted, the agent's filename is used as its identifier and default display name.
* **Description**: Explains the agent's purpose and capabilities.
* **Prompt**: Custom instructions that define the agent's behavior and expertise.
* **Tools** (optional): Specific tools the agent can access. By default, agents can access all available tools, including built-in tools, and MCP server tools.

Agent profiles can also include MCP server configurations using the `mcp-servers` property.

### Example agent profile

This example is a basic agent profile with name, description, and prompt configured.

```text
---
name: readme-creator
description: Agent specializing in creating and improving README files
---

You are a documentation specialist focused on README files. Your scope is limited to README files or other related documentation files only - do not modify or analyze code files.

Focus on the following instructions:
- Create and update README.md files with clear project descriptions
- Structure README sections logically: overview, installation, usage, contributing
- Write scannable content with proper headings and formatting
- Add appropriate badges, links, and navigation elements
- Use relative links (e.g., `docs/CONTRIBUTING.md`) instead of absolute URLs for files within the repository
- Make links descriptive and add alt text to images
```

## Where you can configure custom agents

You can define agent profiles at different levels:

* **Repository level**: Create `.github/agents/CUSTOM-AGENT-NAME.md` in your repository for project-specific agents.
* **Organization level**: Create `/agents/CUSTOM-AGENT-NAME.md` in the organization's `.github` or `.github-private` repository for broader availability within the organization.
* **Enterprise level**: Create `/agents/CUSTOM-AGENT-NAME.md` in the `.github-private` repository of an organization that an enterprise owner has designated in enterprise settings for availability across all repositories in the enterprise.

For more information, see [Prepare For Custom Agents](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/prepare-for-custom-agents) and [Prepare For Custom Agents](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/prepare-for-custom-agents).


## Built-in agents

In addition to the main Copilot agent, which processes your request when you submit a prompt, Copilot CLI includes the following built-in agents which the main agent can run as subagents to assist with common development tasks. These agents are optimized for efficiency and accuracy, leveraging the capabilities of the underlying language models and tools to provide high-quality assistance in their respective domains.

Copilot will automatically use an appropriate built-in agent based on your prompt and the current context. For example, the prompt `How does authentication work in this codebase?` will typically trigger the Explore agent, and using the `/research` slash command will trigger the Research agent.

* **explore** — A fast, lightweight codebase exploration agent. It uses code intelligence, grep, glob, view, and shell tools to search files and understand code structure. It will not change any files, so can be called in parallel to other subagents being run by the main Copilot agent. It has read-only access to GitHub MCP server tools.

* **task** — A command execution agent that runs development commands (tests, builds, linters, formatters, dependency installs) and reports results efficiently. It returns a brief summary on success, and full output on failure, keeping the main context clean. It has access to all of the tools the parent agent can use (excluding some that are not appropriate in a subagent context), with the same permissions granted or denied.

* **general-purpose** — This agent essentially has all of the same capabilities as the main Copilot agent. The main agent can run the general-purpose agent as a subagent to assist with any task that requires a separate context window, or to run in parallel when appropriate.

* **code-review** — Reviews code changes with an extremely high signal-to-noise ratio. This agent analyzes staged/unstaged changes and branch diffs, surfacing only issues that genuinely matter: bugs, security vulnerabilities, race conditions, memory leaks, and logic errors. It never comments on style or formatting. It will not make any changes to files.

* **research** — This agent operates as a staff-level software engineer and research specialist. It provides exhaustive, meticulously researched answers about codebases, APIs, libraries, and software architecture. It uses GitHub search/exploration tools, web fetch/search, and local tools. Unlike the other agents, the research agent can only be invoked by using the `/research` slash command. It cannot be automatically triggered by the main agent.

* **rubber-duck** — A constructive critic that gives Copilot a second opinion on its own plans, code, and tests. It runs on a different model from the one driving your session, so it brings a complementary perspective. It is designed to review proposed changes, not to make file changes itself. For more information, see [Rubber Duck](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/rubber-duck).

## Running agents as subagents

One of the benefits of using custom agents you have defined yourself—or the built-in agents—is that the main Copilot agent can run them as subagents with a separate context window. This means that your custom agent, or built-in agent, can focus on a specific subtask without cluttering the context window of the main agent.

Where appropriate, tasks performed by subagents can be run in parallel, allowing the overall task to be completed more quickly.

For more information, see [Comparing CLI Features](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/comparing-cli-features).

## Next steps

To create your own custom agents, see:

* [Create Custom Agents For CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli)
* [Customization Cheat Sheet](https://docs.github.com/en/copilot/reference/customization-cheat-sheet)
