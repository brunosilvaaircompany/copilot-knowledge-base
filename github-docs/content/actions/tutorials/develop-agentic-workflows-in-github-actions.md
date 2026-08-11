# Develop agentic workflows in GitHub Actions

> [!NOTE]
> GitHub Agentic Workflows are in public preview and subject to change.


## Introduction

GitHub Agentic Workflows let you define repository automations in Markdown and choose the AI coding agent that runs them. The `gh aw` extension compiles each agentic workflow into a GitHub Actions workflow.

The entire workflow lifecycle—authoring, debugging, and optimization—is itself agentic. You describe what you want in natural language and a coding agent creates, refines, and troubleshoots the workflow for you.

This tutorial uses a coding agent to create an automated pull request reviewer that checks whether changes are adequately tested.

## Prerequisites

Before you begin, make sure you have:

* A repository where GitHub Actions is enabled and you have write access
* GitHub CLI version 2.0.0 or later installed and authenticated
* Access to a supported coding agent, such as Claude Code, OpenAI Codex, or Google Gemini CLI
, or Copilot CLI, and its required credential

To authenticate GitHub CLI, run:

```shell
gh auth login --scopes repo,workflow
```

## Installing the `gh aw` extension

Install the GitHub Agentic Workflows extension for GitHub CLI:

```shell
gh extension install github/gh-aw
```

## Choosing an agent and configuring authentication

Choose the agent CLI that best fits your workflow. Claude Code, OpenAI Codex, or Google Gemini CLI
, and Copilot CLI can all run GitHub Agentic Workflows.

This article walks through a simple setup that adds the agent's credential as a repository secret. If you use Claude Code, OpenAI Codex, or Google Gemini CLI
, store the agent's API key as a repository secret.

| Agent CLI | `engine` value | Repository secret |
| --- | --- | --- |
| Claude Code | `claude` | `ANTHROPIC_API_KEY` containing an Anthropic API key |
| OpenAI Codex | `codex` | `OPENAI_API_KEY` containing an OpenAI API key |
| Google Gemini CLI | `gemini` | `GEMINI_API_KEY` containing a Google AI Studio API key |
| Copilot CLI (default) | `copilot` | No secret needed for organization repositories (see below). For personal repositories, `COPILOT_GITHUB_TOKEN` containing a fine-grained personal access token with **Copilot Requests** set to **Read**. |

Other engines such as Pi (experimental) are also supported. For the full list, see the [GitHub Agentic Workflows authentication reference](https://github.github.com/gh-aw/reference/auth/).

### Organization billing for GitHub Copilot

If you use GitHub Copilot in an organization-owned repository, you can use GitHub Actions' built-in `GITHUB_TOKEN` instead of a personal access token. Add `copilot-requests: write` to your workflow frontmatter `permissions` and no separate secret is required. For setup steps, see [Creating GitHub Agentic Workflows](https://docs.github.com/en/copilot/how-tos/github-agentic-workflows/creating-github-agentic-workflows#using-the-built-in-github_token).

### Storing a secret in the GitHub UI

To add a secret for Claude Code, OpenAI Codex, or Google Gemini CLI
, or GitHub Copilot personal repositories:

1. On GitHub, navigate to your repository.
1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
1. In the sidebar, click **Secrets and variables**, then click **Actions**.
1. Click **New repository secret**.
1. In the **Name** field, enter the secret name from the table above.
1. In the **Secret** field, enter the value.
1. Click **Add secret**.

## Creating the workflow

Use a coding agent to create the workflow from a natural language description.

1. From your repository root, initialize the repository for agentic authoring. This adds skills and instructions that help the coding agent create and edit workflows:

   ```shell
   gh aw init
   ```

1. Start a coding agent session in the context of your repository—for example, using Claude Code, OpenAI Codex, or Google Gemini CLI
, Copilot CLI, or VS Code agent mode.
1. Use the `agentic-workflows` skill and describe the workflow you want:

   ```copilot copy
   /agentic-workflows create a pr reviewer that ensure the changes are tested.
   ```

    The agent creates a workflow Markdown file in `.github/workflows/`, compiles the corresponding `.lock.yml` GitHub Actions workflow file, and asks you to review and commit both files.

1. Review the generated workflow, then ask the agent to commit and push the files.

> [!TIP]
> You can use the same agentic approach to update and improve the workflow after it runs. Ask the agent to refine the review criteria, add more checks, or debug a failed run—all in natural language. If you edit the workflow frontmatter later, run `gh aw compile` before committing your changes.

## Running the workflow

The generated workflow triggers automatically on pull requests, so it runs the next time you open or update a pull request in your repository.

1. Open a pull request in your repository.
1. On GitHub, navigate to your repository and click the **Actions** tab.
1. In the left sidebar, select the workflow that the agent created.
1. Once the run completes, the workflow leaves a pull request review noting whether the changes include enough tests.

## Next steps

* To create a workflow that produces a weekly issue activity report, see [Creating GitHub Agentic Workflows](https://docs.github.com/en/copilot/how-tos/github-agentic-workflows/creating-github-agentic-workflows).
* For advanced engine configuration, safe outputs, and more workflow examples, see the [GitHub Agentic Workflows documentation site](https://github.github.com/gh-aw/).
