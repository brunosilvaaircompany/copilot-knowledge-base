# Best practices for using GitHub Copilot to work on tasks

> [!NOTE]
> For an introduction to Copilot cloud agent, see [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent).

## Making sure your issues are well-scoped

GitHub Copilot provides better results when assigned clear, well-scoped tasks. An ideal task includes:

* A clear description of the problem to be solved or the work required.
* Complete acceptance criteria on what a good solution looks like (for example, should there be unit tests?).
* Directions about which files need to be changed.

> [!TIP]
> Copilot cloud agent has the ability to search your codebase, including semantic code search, which helps it find relevant code based on meaning rather than just exact text matches. Even if you don't specify exact file paths in a task, the agent can often discover the right code on its own.

If you pass a task to Copilot by assigning an issue, it's useful to think of the issue you assign to Copilot as a prompt. Consider whether the issue description is likely to work as an AI prompt, and will enable Copilot to make the required code changes.

## Choosing the right type of tasks to give to Copilot

As you work with Copilot, you'll get a sense of the types of tasks it's best suited to work on. Initially, you might want to start by giving Copilot simpler tasks, to see how it works as a cloud agent. For example, you could start by asking Copilot to fix bugs, alter user interface features, improve test coverage, update documentation, improve accessibility, or address technical debt.

Issues that you may choose to work on yourself, rather than assigning to Copilot, include:

* **Complex and broadly scoped tasks**
  * Broad-scoped, context-rich refactoring problems requiring cross-repository knowledge and testing
  * Complex issues requiring understanding dependencies and legacy code
  * Tasks that require deep domain knowledge
  * Tasks that involve substantial business logic
  * Large changes to a codebase requiring design consistency

* **Sensitive and critical tasks**
  * Production-critical issues
  * Tasks involving security, personally identifiable information, authentication repercussions
  * Incident response

* **Ambiguous tasks**
  * Tasks lacking clear definition: tasks with ambiguous requirements, open-ended tasks, tasks that require working through uncertainty to find a solution

* **Learning tasks**
  * Tasks where the developer wants to learn to achieve a deeper understanding

## Researching, planning, and iterating before opening a pull request

Rather than asking Copilot to open a pull request right away, you can use Copilot cloud agent to research a repository, create an implementation plan, and make iterative code changes on a branch first. This lets you review the diff and refine the work before deciding to open a pull request.

This workflow is useful when you want to:

* Understand how a codebase works before making changes.
* Agree on an approach with Copilot before any code is written.
* Review and iterate on changes before opening a pull request for review.

See [Research Plan Iterate](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/research-plan-iterate).

## Using comments to iterate on a pull request

Working with Copilot on a pull request is just like working with a human developer: it's common for the pull request to need further work before it can be merged. The process for getting the pull request to a mergeable state is exactly the same when the pull request is created by Copilot as when it's created by a human.

Additionally, you can:
* Mention `@copilot` in comments on the pull request, explaining what you think is incorrect, or could be improved, and Copilot will push commits directly to the pull request's branch. 
* Ask Copilot to resolve merge conflicts on the pull request. See [Use Cloud Agent On GitHub](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/use-cloud-agent-on-github#resolving-merge-conflicts). 
* Work on the feature branch yourself and push changes to the pull request.

After a user with write access mentions `@copilot` in a comment, Copilot will start to make any required changes, and will update the pull request when it's done. Because Copilot starts looking at comments as soon as they are submitted, if you are likely to make multiple comments on a pull request it's best to batch them by clicking **Start a review**, rather than clicking **Add single comment**. You can then submit all of your comments at once, triggering Copilot to work on your entire review, rather than working on individual comments separately.

> [!NOTE]
> Copilot only responds to comments from people who have write access to the repository.


As Copilot makes changes to the pull request, it will keep the title and body up to date so they reflect the current changes.

## Adding custom instructions to your repository

By adding custom instructions to your repository, you can guide Copilot on how to understand your project and how to build, test and validate its changes.

If Copilot is able to build, test and validate its changes in its own development environment, it is more likely to produce good pull requests which can be merged quickly.

Copilot cloud agent supports a number of different types of custom instructions files:

* `/.github/copilot-instructions.md`
* `/.github/instructions/**/*.instructions.md`
* `**/AGENTS.md`
* `/CLAUDE.md`
* `/GEMINI.md`

For more information, see [Add Repository Instructions?Tool=Webui](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions?tool=webui).

### Repository-wide instructions

To add instructions that apply to all tasks assigned to Copilot in your repository, create a `.github/copilot-instructions.md` file in the root of your repository. This file should contain information about your project, such as how to build and test it, and any coding standards or conventions you want Copilot to follow. Note that the instructions will also apply to Copilot Chat and Copilot code review.

The first time you ask Copilot to create a pull request in a given repository, Copilot will leave a comment with a link to automatically generate custom instructions. You can also ask Copilot to generate custom instructions for you at any time using our recommended prompt. See [Add Repository Instructions?Tool=Webui](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions?tool=webui#asking-copilot-cloud-agent-to-generate-a-copilot-instructionsmd-file).

You can also choose to write your own custom instructions at any time. Here is an example of an effective `copilot-instructions.md` file:

```markdown
This is a Go based repository with a Ruby client for certain API endpoints. It is primarily responsible for ingesting metered usage for GitHub and recording that usage. Please follow these guidelines when contributing:

## Code Standards

### Required Before Each Commit
- Run `make fmt` before committing any changes to ensure proper code formatting
- This will run gofmt on all Go files to maintain consistent style

### Development Flow
- Build: `make build`
- Test: `make test`
- Full CI check: `make ci` (includes build, fmt, lint, test)

## Repository Structure
- `cmd/`: Main service entry points and executables
- `internal/`: Logic related to interactions with other GitHub services
- `lib/`: Core Go packages for billing logic
- `admin/`: Admin interface components
- `config/`: Configuration files and templates
- `docs/`: Documentation
- `proto/`: Protocol buffer definitions. Run `make proto` after making updates here.
- `ruby/`: Ruby implementation components. Updates to this folder should include incrementing this version file using semantic versioning: `ruby/lib/billing-platform/version.rb`
- `testing/`: Test helpers and fixtures

## Key Guidelines
1. Follow Go best practices and idiomatic patterns
2. Maintain existing code structure and organization
3. Use dependency injection patterns where appropriate
4. Write unit tests for new functionality. Use table-driven unit tests when possible.
5. Document public APIs and complex logic. Suggest changes to the `docs/` folder when appropriate
```

### Path-specific instructions

To add instructions that apply to specific types of files Copilot will work on, like unit tests or React components, create one or more `.github/instructions/**/*.instructions.md` files in your repository.
In these files, include information about the file types, such as how to build and test them, and any coding standards or conventions you want Copilot to follow.

Using the glob pattern in the front matter of the instructions file, you can specify the file types to which they should apply. For example, to create instructions for Playwright tests you could create an instructions file called `.github/instructions/playwright-tests.instructions.md` with the following content:

```markdown
---
applyTo: "**/tests/*.spec.ts"
---

## Playwright test requirements

When writing Playwright tests, please follow these guidelines to ensure consistency and maintainability:

1. **Use stable locators** - Prefer `getByRole()`, `getByText()`, and `getByTestId()` over CSS selectors or XPath
1. **Write isolated tests** - Each test should be independent and not rely on other tests' state
1. **Follow naming conventions** - Use descriptive test names and `*.spec.ts` file naming
1. **Implement proper assertions** - Use Playwright's `expect()` with specific matchers like `toHaveText()`, `toBeVisible()`
1. **Leverage auto-wait** - Avoid manual `setTimeout()` and rely on Playwright's built-in waiting mechanisms
1. **Configure cross-browser testing** - Test across Chromium, Firefox, and WebKit browsers
1. **Use Page Object Model** - Organize selectors and actions into reusable page classes for maintainability
1. **Handle dynamic content** - Properly wait for elements to load and handle loading states
1. **Set up proper test data** - Use beforeEach/afterEach hooks for test setup and cleanup
1. **Configure CI/CD integration** - Set up headless mode, screenshots on failure, and parallel execution
```

## Organization-wide custom instructions

Copilot cloud agent leverages your organization's custom instructions as part of its work. Copilot cloud agent first prioritizes repository-wide custom instructions. For more information on how to configure organization custom instructions, see [Add Organization Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-organization-instructions).

## Using the Model Context Protocol (MCP)

You can extend the capabilities of Copilot cloud agent by using MCP. This allows Copilot cloud agent to use tools provided by local and remote MCP servers. The GitHub MCP server and [Playwright MCP server](https://github.com/microsoft/playwright-mcp) are enabled by default. For more information, see [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers).

## Creating custom agents

While custom instructions help guide Copilot's general behavior across your repository, custom agents create entirely specialized agents with focused expertise and tailored tool configurations. These agents are designed for specific, recurring workflows where domain expertise and consistent behavior are crucial. Custom agents are defined as Markdown files called agent profiles.

Here are some examples of custom agents you could create:

* **Testing specialist**: An agent configured with specific testing frameworks and focused on test coverage, test quality, and testing best practices. It might be limited to read, search, and edit tools to prevent unintended changes to production code while ensuring comprehensive test coverage.
* **Documentation expert**: An agent specialized in creating and maintaining project documentation, with deep knowledge of documentation standards, style guides, and the ability to analyze code to generate accurate API documentation and user guides.
* **Python specialist**: A language-specific agent that understands Python conventions, popular frameworks like Django or Flask, and follows PEP standards. It would have specialized knowledge of Python tooling, virtual environments, and testing frameworks like pytest.


By default, custom agents inherit any MCP server tools that have been configured in the repository, but you can also configure custom agents to only have access to specific tools.

You can use custom agents anywhere you use Copilot cloud agent, including when assigning an issue or prompting with a task.

For more information on creating and configuring custom agents, see [Create Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents).

## Pre-installing dependencies in GitHub Copilot's environment

While working on a task, Copilot has access to its own ephemeral development environment, powered by GitHub Actions, where it can explore your code, make changes, execute automated tests and linters and more.

If Copilot is able to build, test and validate its changes in its own development environment, it is more likely to produce good pull requests which can be merged quickly.

To do that, it will need your project's dependencies. Copilot can discover and install these dependencies itself via a process of trial and error - but this can be slow and unreliable, given the non-deterministic nature of large language models (LLMs).

You can configure a `copilot-setup-steps.yml` file to pre-install these dependencies before the agent starts working so it can hit the ground running. For more information, see [Customize The Agent Environment](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment#preinstalling-tools-or-dependencies-in-copilots-environment).
