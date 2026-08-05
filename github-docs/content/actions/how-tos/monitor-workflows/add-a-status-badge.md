# Adding a workflow status badge

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




> [!NOTE]
> Workflow badges in a private repository are not accessible externally, so you won't be able to embed them or link to them from an external site.

A status badge shows whether a workflow is currently failing or passing. A common place to add a status badge is in the `README.md` file of your repository, but you can add it to any web page you'd like. By default, badges display the status of your default branch. If there are no workflow runs on your default branch, it will display the status of the most recent run across all branches. You can display the status of a workflow run for a specific branch or event using the `branch` and `event` query parameters in the URL.

![Screenshot of a workflow status badge. From right to left it shows: the GitHub logo, workflow name ("GitHub Actions Demo"), and status ("passing").](/assets/images/help/repository/actions-workflow-status-badge.png)


To add a workflow status badge to your `README.md` file, first find the URL for the status badge you would like to display. Then you can use Markdown to display the badge as an image in your `README.md` file. For more information about image markup in Markdown, see [Basic Writing And Formatting Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images).

## Using the UI

You can create a workflow status badge directly on the UI using the workflow file name, branch parameter, and event parameter.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**.

   ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](/assets/images/help/repository/actions-tab-global-nav-update.png)

1. In the left sidebar, click the workflow you want to see.

   ![Screenshot of the left sidebar of the "Actions" tab. A workflow, "CodeQL," is outlined in dark orange.](/assets/images/help/actions/superlinter-workflow-sidebar.png)

1. On the right side of the page, next to the "Filter workflow runs" field, click {% octicon "kebab-horizontal" aria-label="Show workflow options" %} to display a dropdown menu and click **Create status badge**.
1. Optionally, select a branch if you want to display the status badge for a branch different from the default branch.
1. Optionally, select the event that will trigger the workflow.
1. Click **{% octicon "copy" aria-hidden="true" aria-label="copy" %} Copy status badge Markdown**.
1. Copy the Markdown into your `README.md` file.

## Using the workflow file name

You can build the URL for a workflow status badge using the name of the workflow file:

```text
https://github.com/OWNER/REPOSITORY/actions/workflows/WORKFLOW-FILE/badge.svg
```

To display the workflow status badge in your `README.md` file, use the Markdown markup for embedding images. For more information about image markup in Markdown, see [Basic Writing And Formatting Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images).

For example, add the following Markdown to your `README.md` file to add a status badge for a workflow with the file path `.github/workflows/main.yml`. The `OWNER` of the repository is the `github` organization and the `REPOSITORY` name is `docs`.

```markdown
![example workflow](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
```

## Using the `branch` parameter

To display the status of a workflow run for a specific branch, add `?branch=BRANCH-NAME` to the end of the status badge URL.

For example, add the following Markdown to your `README.md` file to display a status badge for a branch with the name `feature-1`.

```markdown
![example branch parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
```

## Using the `event` parameter

To display the status of workflow runs triggered by the `push` event, add `?event=push` to the end of the status badge URL.

For example, add the following Markdown to your `README.md` file to display a badge with the status of workflow runs triggered by the `push` event, which will show the status of the build for the current state of that branch.

```markdown
![example event parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?event=push)
```
