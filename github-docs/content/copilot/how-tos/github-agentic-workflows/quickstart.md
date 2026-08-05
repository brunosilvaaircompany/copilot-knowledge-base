# Your first agentic workflow

> [!NOTE]
> GitHub Agentic Workflows are in public preview and subject to change.


## Introduction

GitHub Agentic Workflows let you automate repository tasks using AI-powered workflows. For an overview of GitHub Agentic Workflows, see [About GitHub Agentic Workflows](https://docs.github.com/en/copilot/concepts/agents/about-github-agentic-workflows).

In this guide, you'll add a pre-built agentic workflow—a daily repository status report—to an existing repository. This takes about 10 minutes and gives you a working example of automated agents running in GitHub Actions.

This quickstart focuses on getting your first workflow running. For deeper setup and troubleshooting guidance, see the [GitHub Agentic Workflows documentation site](https://github.github.com/gh-aw/).

## Prerequisites

Before you begin, make sure you have:

* An AI account: GitHub Copilot, Anthropic Claude, OpenAI Codex, or Google Gemini
* A GitHub repository where you have write access
* GitHub Actions enabled for the repository
* GitHub CLI (`gh`) v2.0.0 or later installed and authenticated

  To check your version, run `gh --version`. To authenticate, run:

  ```shell
  gh auth login --scopes repo,workflow
  ```

You can complete this quickstart with any supported engine. GitHub Copilot is the default engine, and a GitHub Copilot plan is only required when you choose it.

Supported operating systems are Linux, macOS, and Windows with WSL.

## Step 1: Install the `gh aw` extension

Install the GitHub Agentic Workflows extension for the GitHub CLI:

```shell
gh extension install github/gh-aw
```

## Step 2: Add a workflow and trigger a run

From your repository root, run:

```shell
gh aw add-wizard githubnext/agentics/daily-repo-status
```

The `add-wizard` command accepts workflow references in `OWNER/REPO/WORKFLOW-NAME` format. This interactive process will:

1. Check repository prerequisites.
1. Prompt you to select an AI engine (Copilot is the default, or choose from other engines).
1. Guide you through secret and authentication setup for your chosen engine. Depending on the engine you choose, the wizard may prompt you to configure `COPILOT_GITHUB_TOKEN`, `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, or `GEMINI_API_KEY`. See the [authentication reference](https://github.github.com/gh-aw/reference/auth/) article for setup instructions.
1. Generate the workflow markdown file and compile the corresponding `.lock.yml` file.
1. Open a pull request that adds both generated files in `.github/workflows/`.
1. Let you review and merge the pull request yourself, or choose a flow that merges it for you.

Once the workflow is created, you will be asked if you want to run it immediately. Select **Yes** to trigger the workflow.

## Step 3: Wait for the workflow to complete

An automated workflow run typically takes 2-3 minutes. Once complete, a new issue appears in your repository with a daily status report that analyzes:

* Recent repository activity (issues, pull requests, discussions, releases)
* Progress tracking and highlights
* Actionable next steps for maintainers

## Step 4: Customize the workflow (optional)

You can edit the workflow to match your priorities:

1. Open `.github/workflows/daily-repo-status.md` in your repository.
1. Edit the markdown body to describe what you want the report to cover—your issue backlog, CI setup, testing, performance, or roadmap.
1. If you changed the frontmatter configuration, recompile the workflow:

   ```shell
   gh aw compile
   ```

1. Commit and push your changes.
1. Optionally trigger another run:

   ```shell
   gh aw run daily-repo-status
   ```

## Next steps

* To create your own custom agentic workflows, see [Creating GitHub Agentic Workflows](https://docs.github.com/en/copilot/how-tos/github-agentic-workflows/creating-github-agentic-workflows).
* For advanced patterns and the full reference, see the [GitHub Agentic Workflows documentation site](https://github.github.com/gh-aw/).
