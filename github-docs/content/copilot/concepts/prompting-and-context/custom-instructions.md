# Custom instructions for GitHub Copilot

## About customizing Copilot responses

GitHub Copilot can provide responses that are tailored to your preferences, the way your team works, the tools you use, and the specifics of your project. Instead of repeatedly adding the same context to your prompts, you can create custom instructions that automatically provide this information to Copilot to allow it to generate higher quality responses.

Prompt files provide another way to give Copilot task-specific instructions and context. Unlike custom instructions, you choose when to use them in a chat. For more information, see [Prompt Files](https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-files).

The types of custom instructions available, and the Copilot features that use them, vary by client and surface (GitHub.com, Visual Studio Code, Visual Studio, JetBrains IDEs, Xcode, and Eclipse). To check which types your environment supports, see [Custom Instructions Support](https://docs.github.com/en/copilot/reference/custom-instructions-support). For supported IDEs and versions, see [Copilot Feature Matrix](https://docs.github.com/en/copilot/reference/copilot-feature-matrix).

> [!NOTE]
> Due to the non-deterministic nature of AI, Copilot may not always follow your custom instructions in exactly the same way every time they are used.


## Types of custom instructions

Custom instructions can apply at different levels:

| Type | Scope | Example uses |
| --- | --- | --- |
| **Personal instructions** | Your conversations with Copilot | Specify your individual preferences, such as preferred language or response style. |
| **Repository custom instructions** | Conversations with Copilot performed in the context of a repository, project, path, or supported agent | Describe the languages, frameworks, tools, architecture, and coding conventions used in a project. |
| **Organization custom instructions** | Conversations with Copilot when used in the context of an organization | Provide organization-wide language, security, compliance, or response guidelines. |

Some clients (JetBrains IDEs and Xcode) provide additional global, workspace, or project instruction mechanisms. These mechanisms do not always map directly to personal, repository, and organization instructions in GitHub.

## About personal instructions

Personal instructions configured on GitHub.com apply to GitHub Copilot Chat in GitHub. Other clients, such as Copilot CLI, use local files for personal instructions. See [Add Custom Instructions](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions#how-multiple-instruction-files-interact).

You can customize how Copilot Chat responds to you on GitHub.com by adding personal instructions. These instructions apply only to you. For example, you can specify your preferred language, the level of detail you want, or how you want responses to be structured. See [Add Personal Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-personal-instructions).

## About repository custom instructions

Repository custom instructions provide project-specific context and guidance. For example, you can describe the repository's purpose, the frameworks and tools it uses, and the coding or testing conventions that contributors should follow.

There are three main types of repository custom instructions:

* **Repository-wide custom instructions**, which apply to all requests made in the context of a repository.

  These are specified in a `copilot-instructions.md` file in the `.github` directory of the repository.

* **Path-specific custom instructions**, which apply to requests made in the context of files that match a specified path.

  These are specified in one or more `NAME.instructions.md` files within or below the `.github/instructions` directory in the repository.

  By using path-specific instructions you can avoid overloading your repository-wide instructions with information that only applies to files of certain types, or in certain directories.

* **Agent instructions**, which are similar to repository-wide custom instructions, but are currently not supported by all Copilot features.

  These are specified in files called `AGENTS.md`, `CLAUDE.md`, or `GEMINI.md`.

For details of support for each of these types of repository custom instructions across different Copilot features, see [Custom Instructions Support](https://docs.github.com/en/copilot/reference/custom-instructions-support).

For a curated collection of examples, see [Custom Instructions](https://docs.github.com/en/copilot/tutorials/customization-library/custom-instructions).


Note that agent instruction files, such as `AGENTS.md`, provide instructions to supported AI agents. They are different from custom agent definition files stored in `.github/agents`, which define specialized agents and their configuration. For the agent instruction filenames that Copilot recognizes, see [Custom Instructions Support](https://docs.github.com/en/copilot/reference/custom-instructions-support).

### Repository custom instructions across clients and surfaces

Which types of repository custom instructions you can use (repository-wide, path-specific, or agent instructions) depends on your environment and on the task, such as chatting, working in the cloud, or reviewing a pull request. For example, an environment may support path-specific instructions for one task but not another. To check support for your setup, see [Custom Instructions Support](https://docs.github.com/en/copilot/reference/custom-instructions-support). For supported IDEs and versions, see [Copilot Feature Matrix](https://docs.github.com/en/copilot/reference/copilot-feature-matrix).

## About organization custom instructions

> [!NOTE]
> **Support:** Organization custom instructions are currently only supported for Copilot Chat on GitHub.com, Copilot code review on GitHub.com and Copilot cloud agent on GitHub.com.


Organization owners can add instructions to tailor Copilot to the needs and preferences of their organization. These instructions are used for all members of the organization, regardless of whether they receive their Copilot subscription from that organization.

Organization custom instructions can only be configured for organizations with a Copilot Business or Copilot Enterprise subscription.

For example, organization instructions can:

* Specify a language that should be used in responses.
* Provide organization-wide security or compliance guidance.
* Specify preferred response formats, such as not generating code blocks.
* Direct people to an internal knowledge base or support channel for particular topics.

For information about adding organization instructions, see [Add Organization Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-organization-instructions).

## Precedence of custom instructions

Precedence depends on the client and feature. Most surfaces and clients, including Copilot CLI, Visual Studio Code and Visual Studio, combine applicable instruction files without defining a general precedence order.

For Copilot Chat on GitHub.com, all relevant instructions are provided to Copilot. The order of precedence, from highest to lowest, is:

1. **Personal instructions**
1. **Repository custom instructions:**
   1. **Path-specific instructions** in any applicable `.github/instructions/**/*.instructions.md` file
   1. **Repository-wide instructions** in `.github/copilot-instructions.md`
   1. **Agent instructions**, such as instructions in an `AGENTS.md` file
1. **Organization custom instructions**

Whenever possible, try to avoid providing conflicting sets of instructions. If you are concerned about response quality, you can temporarily disable repository instructions. See [Add Repository Instructions?Tool=Webui](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions?tool=webui#enabling-or-disabling-custom-instructions-for-copilot-code-review).


## Using custom instructions

Custom instructions consist of natural language instructions and are most effective when they are short, self-contained statements. Consider the scope over which you want an instruction to apply before deciding whether to add it at the personal, repository, or organization level.

Common use cases include:

* **Response preferences.** Specify a preferred language, response structure, tone, or level of explanation.
* **Project context.** Explain the purpose, architecture, or domain of a repository.
* **Languages and frameworks.** Identify the languages, libraries, frameworks, and versions used by a project.
* **Coding and testing conventions.** Describe naming, formatting, testing, error-handling, or documentation standards.
* **Review and security guidance.** Identify issues that should receive particular attention when a supported feature reviews or changes code.
* **Organization requirements.** Provide organization-wide language, security, compliance, or support guidance.

For example:

* Personal instruction: `Always respond in Portuguese.`
* Personal instruction: `Explain a single concept per line. Be clear and concise.`
* Repository instruction: `Use Vue with the PrimeVue library.`
* Repository instruction: `Use early returns whenever possible.`
* Organization instruction: `For questions related to security, use the Security Docs Knowledge Base.`
* Organization instruction: `Do not generate code blocks in responses.`

Instructions about testing, commit messages, or code review can provide useful context. However, the Copilot features that use a particular instruction vary by client and surface, and custom instructions do not guarantee that generated content will comply with a policy.

> [!NOTE]
> When reviewing a pull request, Copilot reads repository custom instructions, agent instructions, and agent skills from the head branch (the branch with your changes), not the base branch. For example, when merging `my-feature-branch` into `main`, Copilot uses the instructions and skills in `my-feature-branch`, so you can test changes to them in the same pull request without merging them first.



## Writing effective custom instructions

The instructions you add to your custom instruction file(s) should be short, self-contained statements that provide Copilot with relevant information to help it work in this repository. Because the instructions are sent with every chat message, they should be broadly applicable to most requests you will make in the context of the repository.

The exact structure you utilize for your instructions file(s) will vary by project and need, but the following guidelines provide a good starting point:

* Provide an overview of the project you're working on, including its purpose, goals, and any relevant background information.
* Specify the coding standards and conventions that should be followed, such as naming conventions, formatting rules, and best practices.
* Include any specific tools, libraries, or frameworks that are used in the project, along with any relevant version numbers or configurations.

The following instructions file is an example of these practices in action:

```markdown
# Project Overview

This project is a web application that allows users to manage their tasks and to-do lists. It is built using React and Node.js, and uses MongoDB for data storage.

## Libraries and Frameworks

- React and Tailwind CSS for the frontend.
- Node.js and Express for the backend.
- MongoDB for data storage.

## Coding Standards

- Use semicolons at the end of each statement.
- Use single quotes for strings.
- Use function based components in React.
- Use arrow functions for callbacks.

## UI guidelines

- A toggle is provided to switch between light and dark mode.
- Application should have a modern and clean design.
```

You should also consider the size and complexity of your repository. The following types of instructions may work for a small repository with only a few contributors, but for a large and diverse repository, **these may cause problems**:

* Requests to refer to external resources when formulating a response
* Instructions to answer in a particular style
* Requests to always respond with a certain level of detail

For example, the following instructions **may not have the intended results**:

```markdown
Always conform to the coding styles defined in styleguide.md in repo my-org/my-repo when generating code.

Use @terminal when answering questions about Git.

Answer all questions in the style of a friendly colleague, using informal language.

Answer all questions in less than 1000 characters, and words of no more than 12 characters.
```


## Next steps

* [Add Personal Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-personal-instructions)
* [Add Repository Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions)
* [Add Repository Instructions In Your Ide](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/customize-copilot/configure-custom-instructions/add-repository-instructions-in-your-ide)
* [Add Organization Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-organization-instructions)

## Further reading

* [Custom Instructions](https://docs.github.com/en/copilot/tutorials/customization-library/custom-instructions)—a curated collection of examples
* [Customize Code Review](https://docs.github.com/en/copilot/tutorials/customize-code-review)
* [Copilot Memory](https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory)
* [Customization Cheat Sheet](https://docs.github.com/en/copilot/reference/customization-cheat-sheet)
