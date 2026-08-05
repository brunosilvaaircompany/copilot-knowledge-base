# Copilot customization cheat sheet

GitHub Copilot offers several customization features that let you tailor its behavior to your workflow, your team's standards, and your project's needs. Use the tables below to find the right one for your use case.

## Feature overview

This table shows what each customization feature is and where it lives.

| Feature | What it is | Filename and location |
|---------|-----------|-------------------|
| [Custom instructions](/copilot/concepts/prompting/response-customization) | Always-on context that automatically applies to every interaction within its defined scope | `.github/copilot-instructions.md` (repo-wide), `.github/instructions/*.instructions.md` (path-specific), `AGENTS.md` (third-party agents), or personal/org settings via UI on GitHub |
| [Prompt files](/copilot/concepts/prompting/response-customization?tool=vscode#about-prompt-files) | Reusable, standalone prompt template with input variables | `.github/prompts/*.prompt.md` |
| [Custom agents](/copilot/concepts/agents/cloud-agent/about-custom-agents) | Specialist persona with its own instructions, tool restrictions, and context | `.github/agents/AGENT-NAME.md` (repository), `/agents/AGENT-NAME.md` in the organization's `.github` or `.github-private` repository (org-level), `/agents/AGENT-NAME.md` in a designated `.github-private` repository (enterprise-level), or user profile |
| [Subagents](/copilot/how-tos/chat-with-copilot/chat-in-ide#using-subagents) | Separate agent spawned by the main agent to handle delegated work in an isolated context | N/A (runtime process, not a user-configured file) |
| [Agent skills](/copilot/concepts/agents/about-agent-skills) | Folder of instructions, scripts, and resources that Copilot loads when relevant to a task | `.github/skills/<skill-name>/SKILL.md`, `.claude/skills/<skill-name>/SKILL.md`, or `.agents/skills/<skill-name>/SKILL.md` (project); `~/.copilot/skills/<skill-name>/SKILL.md` or `~/.agents/skills/<skill-name>/SKILL.md` (personal) |
| [Hooks](/copilot/concepts/agents/hooks) | Custom shell commands that execute deterministically at specific points in an agent's workflow | `.github/hooks/*.json` |
| [MCP servers](/copilot/concepts/context/mcp) | Connection to external systems, APIs, and databases | `mcp.json` (path varies by IDE), repository MCP settings on GitHub (applies to cloud agent and Copilot code review), or `mcp-servers` property in custom agent configurations |

## Usage comparison

This table helps you decide which customization feature to use.

| Feature | How to trigger | Best for | Example use cases |
|---------|---------------|-------------|-------------------|
| [Custom instructions](/copilot/concepts/prompting/response-customization) | Automatic | Standards, guidelines, or expectations that apply broadly across a context | Enforce coding standards, accessibility rules, review checklists |
| [Prompt files](/copilot/concepts/prompting/response-customization?tool=vscode#about-prompt-files) | Manual: reference directly in chat or use the prompt file picker | Focused single tasks you run once with different inputs each time | Generate unit tests, run a code review checklist |
| [Custom agents](/copilot/concepts/agents/cloud-agent/about-custom-agents) | Manual: select from the agent dropdown in your IDE, on GitHub, or in Copilot CLI | Projects or processes with distinct stages that need specialized capabilities or strict handoffs | React reviewer agent, read-only auditing agent |
| [Subagents](/copilot/how-tos/chat-with-copilot/chat-in-ide#using-subagents) | Automatic, or reference a subagent directly in your prompt | Complex subtasks that should run in isolation from the main agent | Codebase research, running test suites |
| [Agent skills](/copilot/concepts/agents/about-agent-skills) | Automatic: chosen by Copilot when relevant to your prompt | Multi-step workflows with bundled assets that should be loaded as needed | GitHub Actions failure debugging, deployment procedures, release note drafting |
| [Hooks](/copilot/concepts/agents/hooks) | Automatic: at configured lifecycle events | Tasks that need to run at a specific point in the agent lifecycle, with guaranteed execution | Run a formatter after every file edit, approve or deny tool executions, prevent credential leaks with secret scanning |
| [MCP servers](/copilot/concepts/context/mcp) | Automatic, or ask for a specific tool by name | Tasks that require access to external tools or real-time data | Manage issues and PRs (GitHub MCP server), automate browser testing (Playwright MCP server) |

## IDE and surface support

This table shows which customization features are supported in each IDE and surface. For the full Copilot feature matrix, see [Copilot Feature Matrix](https://docs.github.com/en/copilot/reference/copilot-feature-matrix#features-by-ide).

GitHub recommends using the latest stable IDE, Copilot CLI, and Copilot extension versions to get the best Copilot experience.

**Key:**

* ✓ = supported
* ✗ = not supported
* P = under preview

| Feature | VS Code | Visual Studio | JetBrains IDEs | Eclipse | Xcode | GitHub .com | Copilot CLI |
|---------|:-------:|:-------------:|:---------:|:-------:|:-----:|:-------:|:---:|
| Custom instructions | ✓ | ✓ | P | P | P | ✓ | ✓ |
| Prompt files | ✓ | ✓ | P | ✗ | P | ✗ | ✗ |
| Custom agents | ✓ | ✓ | P | P | P | ✓ | ✓ |
| Subagents | ✓ | ✗ | P | P | P | ✗ | ✓ |
| Agent skills | ✓ | ✓ | P | ✗ | ✗ | ✓ | ✓ |
| Hooks | P | ✗ | ✗ | ✗ | ✗ | ✓ | ✓ |
| MCP servers | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

For a detailed breakdown of which types of custom instructions are supported in each IDE and surface, see [Custom Instructions Support](https://docs.github.com/en/copilot/reference/custom-instructions-support).

## Agent Customizations editor in JetBrains IDEs

In JetBrains IDEs, you can use the Agent Customizations editor to manage multiple Copilot customizations from one place. In the GitHub Copilot Chat panel, click the settings icon in the top-right, then click **Customizations**.

From the editor, you can:

* View and edit custom agents
* Manage reusable skills
* Configure workspace or personal instructions
* Manage prompt files
* Choose **Workspace** customizations for the current project or **Personal** customizations that follow you across projects

For steps to create repository instructions and prompt files in JetBrains IDEs, see [Add Repository Instructions In Your Ide](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions-in-your-ide/add-repository-instructions-in-your-ide).

## Further reading

* [Customization Library](https://docs.github.com/en/copilot/tutorials/customization-library)—a curated collection of examples
