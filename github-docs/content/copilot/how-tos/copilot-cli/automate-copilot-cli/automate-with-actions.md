You can run GitHub Copilot CLI in a GitHub Actions workflow to automate AI-powered tasks as part of your CI/CD process. For example, you can summarize recent repository activity, generate reports, or scaffold project content. GitHub Copilot CLI runs on the Actions runner like any other CLI tool, so you can install it during a job and invoke it from workflow steps.

## Recommended approach: GitHub Agentic Workflows

For most automation use cases, we recommend using [GitHub Agentic Workflows](https://github.com/github/gh-aw) rather than invoking `copilot` directly in workflow steps. Agentic workflows use `GITHUB_TOKEN` authentication by default and include additional guardrails suited for automated environments.

For setup instructions, see [Quick Start](https://github.github.com/gh-aw/setup/quick-start/) in the GitHub Agentic Workflows documentation.

## Using Copilot CLI in an Actions workflow

You can define a job in a GitHub Actions workflow that: installs Copilot CLI on the runner, authenticates it, runs it in programmatic mode, and then handles the results. Programmatic mode is designed for scripts and automation and lets you pass a prompt non-interactively.

Workflows can follow this pattern:

1. **Trigger**: Start the workflow on a schedule, in response to repository events, or manually.
1. **Setup**: Checkout code, set up environment.
1. **Install**: Install GitHub Copilot CLI on the runner.
1. **Authenticate**: Ensure the CLI has the necessary permissions to access the repository and make changes.
1. **Run Copilot CLI**: Invoke Copilot CLI with a prompt describing the task you want to automate.

### Example workflow

The following workflow generates details of changes made today in the default branch of the repository and displays these details as the summary for the workflow run.

```yaml copy
name: Daily summary
on:
  workflow_dispatch:
  # Run this workflow daily at 5:30pm UTC
  schedule:
    - cron: '30 17 * * *'
permissions:
  contents: read
jobs:
  daily-summary:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v6

        with:
          fetch-depth: 0

      - name: Set up Node.js environment
        uses: actions/setup-node@v7


      - name: Install Copilot CLI
        run: npm install -g @github/copilot

      - name: Run Copilot CLI
        env:
          {% raw %}COPILOT_GITHUB_TOKEN: ${{ secrets.PERSONAL_ACCESS_TOKEN }}{% endraw %}
        run: |
          copilot -p "Review the git log for this repository and write a bullet point summary of all code changes that were made today, with links to the relevant commit on GitHub. Above the bullet list give a description (max 100 words) summarizing the changes made. Write the details to summary.md" --allow-tool='shell(git:*)' --allow-tool=write --no-ask-user
          cat summary.md >> "$GITHUB_STEP_SUMMARY"
```

The following sections explain each part of this workflow.

## Trigger

In this example, the workflow runs on a daily schedule and can also be triggered manually.

The `workflow_dispatch` trigger lets you run the workflow manually from the **Actions** tab of your repository on GitHub, which is useful when testing changes to your prompt or workflow configuration.

The `schedule` trigger runs the workflow automatically at a specified time using cron syntax.

```yaml copy
on:
  # Allows manual triggering of this workflow
  workflow_dispatch:
  # Run this workflow daily at 11:55pm UTC
  schedule:
    - cron: '55 23 * * *'
```

## Setup

Set up the job so Copilot CLI can access your repository and run on the Actions runner. This allows Copilot CLI to analyze the repository context, when generating the daily summary.

The `permissions` block defines the scope granted to the built-in `GITHUB_TOKEN`. Because this workflow reads repository data and prints a summary to the logs, it requires `contents: read`.

```yaml copy
permissions:
  contents: read
jobs:
  daily-summary:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v6

        with:
          fetch-depth: 0
```

## Install

Install Copilot CLI on the runner so your workflow can invoke it as a command. You can install GitHub Copilot CLI using any supported installation method. For a full list of installation options, see [Install Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli).

In this example, the workflow installs GitHub Copilot CLI globally with npm.

```yaml copy
- name: Set up Node.js environment
  uses: actions/setup-node@v7


- name: Install Copilot CLI
  run: npm install -g @github/copilot
```

## Authenticate

To allow Copilot CLI to run on an Actions runner, you need to provide authentication credentials. There are two options:

* **Using `GITHUB_TOKEN`** (recommended for organization-owned repositories): No PAT or stored secrets required. See [Use Copilot CLI In Actions](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli-in-actions).
* **Using a personal access token**: An alternative to `GITHUB_TOKEN`, for example if your organization has not enabled the policy, or if you want usage billed to a specific user's Copilot seat. Follow the steps below.

**Step 1: Create a personal access token (PAT) with the "Copilot Requests" permission:**

1. Go to your personal settings for creating a fine-grained personal access token: [github.com/settings/personal-access-tokens/new](https://github.com/settings/personal-access-tokens/new?ref_product=copilot&ref_type=engagement&ref_style=text).
1. Create a new PAT with the "Copilot Requests" permission.
1. Copy the token value.

**Step 2: Store the PAT as an Actions repository secret:**

1. In your repository, go to **Settings** > **Secrets and variables** > **Actions** and click **New repository secret**.
1. Give the secret a name that you will use in the workflow. In this example we're using `PERSONAL_ACCESS_TOKEN` as the name of the secret.
1. Paste the token value into the "Secret" field and click **Add secret**.

The workflow sets a special environment variable with the value of the repository secret. Copilot CLI supports several special environment variables for authentication. In this example, the workflow uses `COPILOT_GITHUB_TOKEN`, which is specific to Copilot CLI and allows you to set different permissions for Copilot than you might use elsewhere with the built-in `GITHUB_TOKEN` environment variable.

```yaml copy
- name: Run Copilot CLI
  env:
   {% raw %}COPILOT_GITHUB_TOKEN: ${{ secrets.PERSONAL_ACCESS_TOKEN }}{% endraw %}
```

## Run Copilot CLI

Use `copilot -p PROMPT [OPTIONS]` to run the CLI programmatically and exit when the command completes.

The CLI prints its response to standard output, which is recorded in the log for the Actions workflow run. However, to make the details of changes easier to access, this example adds this information to the summary for the workflow run.

```yaml copy
  run: |
    copilot -p "Review the git log for this repository and write a bullet point summary of all code changes that were made today, with links to the relevant commit on GitHub. Above the bullet list give a description (max 100 words) summarizing the changes made. Write the details to summary.md" --allow-tool='shell(git:*)' --allow-tool=write --no-ask-user
    cat summary.md >> "$GITHUB_STEP_SUMMARY"
```

This example uses several options after the CLI prompt:

* `--allow-tool='shell(git:*)'` allows Copilot to run Git commands to analyze the repository history. This is necessary to generate the summary of recent changes.
* `--allow-tool='write'` allows Copilot to write the generated summary to a file on the runner.
* `--no-ask-user` prevents the CLI from prompting for user input, which is important when running in an automated workflow where there is no user to respond to requests for additional input.

## Next steps

After you confirm the workflow generates a summary of changes, you can adapt the same pattern to other automation tasks. Start by changing the prompt you pass to `copilot -p PROMPT`, then decide what you want to do with the output. For example, you could:

* Create a pull request to update a changelog file in the repository with the day's changes.
* Email the summary to the repository maintainers.

## Further reading

* [CLI Command Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)
* [Actions](https://docs.github.com/en/actions)
* [Run CLI Programmatically](https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically)
