# Using artifacts with issues

This feature is in public preview and is subject to change.


Issue artifacts are named pieces of content attached to an issue. They provide a durable place to keep plans, research, decisions, prototypes, and reference material as context alongside your work.

You can share artifacts with others via a URL, and if you update an artifact, GitHub will keep a record of changes so you can go back and see how an artifact has evolved over the course of a project.

## Supported artifact types

Issue artifacts support the following types:

* **Markdown document (`generic`)**: General-purpose content, such as research, investigation notes, or a design document.
* **Plan (`plan`)**: A Markdown implementation plan.
* **Link (`link`)**: A named link to content elsewhere, such as a discussion, prototype, or Slack or Teams thread.
* **HTML file (`embedded_html`)**: A self-contained HTML document, such as an interactive prototype, visualization, flowchart, or diagram.

## Creating an artifact

You can create artifacts on GitHub.com, or ask an agent or developer tool to create one using the built-in GitHub MCP server, GitHub CLI, or the issue artifacts REST API. For example, you can ask the Copilot app to create an implementation plan, root cause analysis, or research summary and attach it to the issue.

### Creating an artifact on GitHub.com

1. Navigate to the issue where you want to create an artifact.
1. In the **Artifacts** section, click {% octicon "plus" aria-label="Add artifact" %}.
1. Select an artifact type:
   * To add a named URL, click **Add link**.
   * To create a Markdown document, click **Create artifact**.
   * To create an HTML document, click **Create HTML artifact**.
1. Follow the prompts to name and create the artifact.

## Viewing and sharing an artifact

1. Navigate to the issue containing the artifact.
1. In the **Artifacts** section, click the artifact name.
1. The artifact will open and display in a side panel on the issue.
1. To copy the URL to share the artifact with others, click {% octicon "link" aria-label="the link" %}.

## Editing an artifact

1. Open the artifact.
1. In the artifact panel, click {% octicon "pencil" aria-label="Edit artifact" %}.
1. Update the artifact name or content.
1. Save your changes.

Editing an artifact creates a version in its history.

## Viewing an artifact's version history

1. Open the artifact.
1. In the artifact panel, click {% octicon "history" aria-label="Edit history" %}.
1. Select a version to view its name, content, author, and creation time.

You cannot restore a version in the web interface. To restore an earlier version, use `gh issue artifact edit --restore-version`. Restoring saves the earlier name and content as a new version, preserving the complete history.

## Reordering artifacts

You can reorder artifacts by dragging them within the **Artifacts** section. You can also click {% octicon "kebab-horizontal" aria-label="Artifact actions" %} next to an artifact, click **Move**, then choose a position.

## Deleting an artifact

> [!WARNING]
> Deleting an artifact is permanent and also deletes its version history.

1. In the **Artifacts** section of the issue, click {% octicon "kebab-horizontal" aria-label="Artifact actions" %} next to the artifact.
1. Click **Delete**.

## Safely previewing an HTML artifact

On GitHub.com, HTML artifacts open in **Source** view so you can inspect the code before running it. To render the HTML, select **Preview**. GitHub renders the preview in a restricted sandbox. The interface warns that previewing runs user-provided code that may send its contents to external sites. Review the source and only preview HTML from sources you trust. To return to the source, select **Source**.

## Using artifacts with agents

When you use the Copilot app to work on an issue, artifacts created during the session are automatically attached to the issue. You can also ask Copilot to create a specific artifact, such as an implementation plan, root cause analysis, or summary of historical context.

Agents and developer tools can also use the built-in GitHub MCP server, the REST API, or GitHub CLI to read and manage artifacts. 

## Managing artifacts with GitHub CLI

Issue artifact commands require GitHub CLI 2.103.0 or later. 

For more information about issue artifact commands, see the [`gh issue artifact` reference](https://cli.github.com/manual/gh_issue_artifact).

## Further reading

* [Artifacts](https://docs.github.com/en/rest/issues/artifacts) in the REST API documentation
* [About Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues)
