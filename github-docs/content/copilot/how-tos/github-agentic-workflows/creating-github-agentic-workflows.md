# Creating GitHub Agentic Workflows

> [!NOTE]
> GitHub Agentic Workflows are in public preview and subject to change.


## About creating GitHub Agentic Workflows

You can create GitHub Agentic Workflows with a coding agent (recommended) or manually. A workflow is a markdown file in `.github/workflows/` that contains YAML frontmatter for configuration and natural language instructions for the AI agent.

To create an agentic workflow, you define the workflow in markdown, compile it into a `.lock.yml` file, commit both files, then run it through GitHub Actions triggers or the GitHub CLI.

This article focuses on the core tasks: creating, updating, and reusing workflows. For complete technical detail and additional patterns, use the [GitHub Agentic Workflows documentation site](https://github.github.com/gh-aw/).

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

* The GitHub Agentic Workflows extension for the GitHub CLI installed:

   ```shell
   gh extension install github/gh-aw
   ```

   If you're using GitHub CLI version 2.90.0 or later, running any `gh aw` command will prompt you to install the extension automatically if it is not yet installed.

## Authentication

You can set up authentication with your chosen AI engine (coding agent) in two ways:

* [Using the built-in `GITHUB_TOKEN`](#using-the-built-in-github_token) for organization billing (recommended). This option is specifically for the GitHub Copilot engine, and can only be used by repositories owned by an organization with a GitHub Copilot plan.
* [Using a personal access token or API key](#using-a-personal-access-token-or-api-key) for personal repositories and third-party AI engines.

### Using the built-in `GITHUB_TOKEN`

> [!TIP]
> If you use GitHub Copilot in an organization-owned repository, the built-in `GITHUB_TOKEN` approach in this section is strongly recommended.

If you are using GitHub Copilot in an organization-owned repository, you can use GitHub Actions' built-in `GITHUB_TOKEN` instead of a personal access token. This bills the workflow's usage directly to your organization and avoids the need to manage a personal access token secret for Copilot requests. To set this up:

1. Your organization administrator should enable the policy "Allow use of Copilot CLI billed to the organization", if not already enabled, in Copilot settings.
1. For workflows that you want to bill to an organization, put `copilot-requests: write` in the workflow frontmatter `permissions`.

#### Enabling organization billing

"Allow use of Copilot CLI billed to the organization" must be enabled in GitHub Copilot policy settings. If the "Copilot CLI" policy is already enabled, the billing policy is enabled by default.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)



1. In the sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, then click **Policies**.
1. Enable "Copilot CLI", then enable "Allow use of Copilot CLI billed to the organization."

#### Billing a workflow to an organization

When creating a workflow, you must include `copilot-requests: write` under `permissions` in the workflow frontmatter. When this permission is set, the GitHub Actions' token is used for Copilot requests, and `COPILOT_GITHUB_TOKEN` is ignored for those requests. If the GitHub Actions token does not have GitHub Copilot access from the organization, the workflow fails when it sends Copilot requests, and you should configure `COPILOT_GITHUB_TOKEN` instead.

```yaml
permissions:
  contents: read
  copilot-requests: write
```

### Using a personal access token or API key

For personal repositories or third-party AI engines, you need to create a repository secret storing a personal access token or API key. For GitHub Copilot, the secret is `COPILOT_GITHUB_TOKEN`, which stores a fine-grained personal access token.

If you use `gh aw add-wizard`, the setup flow prompts you to create that secret. If you are creating an agentic workflow from the GitHub web interface or manually, you will first need to add the secret yourself in your repository's GitHub Actions secrets, either in the GitHub UI or with `gh aw secrets set` in the CLI. For instructions, see [authentication reference](https://github.github.com/gh-aw/reference/auth/).

## Creating a workflow

The recommended way to create agentic workflows is to use a CLI coding agent or VS Code. This gives you one guided path for authoring, compiling, and committing the workflow.

### Using a CLI coding agent or VS Code

1. Using the GitHub CLI GitHub Agentic Workflows extension (`gh aw`), initialize the repository for agentic authoring (recommended for first-time setup in a repository):

   ```shell
   gh aw init
   ```

   This adds skills, instructions, and a custom agent related to agentic workflow authoring, so coding agents can create and edit workflows more effectively.
1. Start your coding agent in the context of your repository (for example, Copilot CLI or VS Code agent mode).
1. Enter a prompt mentioning the `agentic-workflows` skill and describing your desired workflow:

   ```copilot copy
   /agentic-workflows Create a new workflow that creates a daily report on
   recent activity in the repository, delivered as
   an issue.
   ```

1. The agent will create the workflow, and compile the workflow using the GitHub CLI.
1. Review the workflow, then ask the agent to commit and push the files.
1. Trigger the workflow from the GitHub Actions tab, or with the GitHub CLI run:

   ```shell
   gh aw run YOUR-WORKFLOW-NAME
   ```

### Other creation methods

You can also create agentic workflows:

* In the GitHub web interface. See [creating workflows in the GitHub web interface](https://github.github.com/gh-aw/setup/creating-workflows/#github-web-interface).
* Manually. See [creating workflows by manual editing](https://github.github.com/gh-aw/setup/creating-workflows/#manual-editing).

## Workflow structure reference

Each workflow markdown file has two parts:

| Section | Purpose |
| --- | --- |
| **YAML frontmatter** | Defines triggers (`on`), permissions, safe outputs, and the AI engine. |
| **Markdown body** | Natural language instructions the AI agent follows when the workflow runs. |

Key frontmatter fields:

| Field | Description |
| --- | --- |
| `on` | The event trigger (same syntax as GitHub Actions triggers). |
| `permissions` | Repository permissions granted to the agent. Defaults to `read-all`. |
| `safe-outputs` | Write operations the agent is allowed to perform (for example, `create-issue`, `add-comment`, `create-pull-request`). |
| `engine` | The AI engine to use (`copilot` is the default; `claude`, `codex`, and `gemini` are also supported). |

For the full frontmatter reference, see the [GitHub Agentic Workflows frontmatter documentation](https://github.github.com/gh-aw/reference/frontmatter/).

## Example agentic workflow

The following example is a simplified weekly issue activity report for a repository.

```markdown
---
on: weekly on monday

permissions:
  issues: read
  copilot-requests: write

network: defaults

tools:
  github:
    toolsets: [issues]

safe-outputs:
  create-issue:

---

# Weekly issue activity report

Review issue activity from the last 7 days in this repository.

Create a GitHub issue that includes:

- Total issues opened and closed this week.
- The top recurring themes from issue titles and descriptions.
- A short list of notable issues that still need attention.
- Two or three actionable recommendations for maintainers.

Keep the report concise and action-oriented.
```

## Updating a workflow

To update an existing workflow:

1. Edit the workflow markdown file in `.github/workflows/`.
1. Recompile to refresh the lock file:

   ```shell
   gh aw compile
   ```

1. Commit and push both updated files.
1. Open a pull request and verify GitHub Actions checks.

For detailed editing guidance, see [Editing Workflows](https://github.github.com/gh-aw/guides/editing-workflows/).

## Reusing workflows

You can also import workflows from external repositories that you can access. For example, you can add a workflow from `githubnext/agentics`:

```shell
gh aw add-wizard githubnext/agentics/daily-repo-status
```

For non-interactive setup, you can use `gh aw add` and optionally pin a version.

When you import a workflow, GitHub CLI stores a `source:` value in frontmatter so you can update from upstream later with `gh aw update`.

Only import workflows from sources you trust, and review what a workflow does before adding it to your repository. Workflows marked `private: true` can't be imported into other repositories.

When you update an imported workflow, GitHub CLI tries to preserve local changes. If there are merge conflicts, resolve them and run `gh aw compile` again.

For more information, see [Reusing Workflows](https://github.github.com/gh-aw/guides/reusing-workflows/).

## Next steps

* For workflow examples, advanced patterns, guides, and troubleshooting information, see the [GitHub Agentic Workflows documentation site](https://github.github.com/gh-aw/).
