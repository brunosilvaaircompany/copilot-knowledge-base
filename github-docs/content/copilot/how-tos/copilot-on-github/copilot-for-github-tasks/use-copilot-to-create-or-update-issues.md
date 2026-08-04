# Using GitHub Copilot to create or update issues

> [!NOTE]
> This feature is in public preview and subject to change.

Copilot can create or update issues from a natural-language prompt or a screenshot. It fills in the title, body, labels, assignees, and more—using your repository's issue forms or templates when available. Review and refine every draft before you submit.

## Create an issue

1. Navigate to [https://github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text).

1. In the prompt box, describe the issue you want to create. Use `repo-owner/repo-name` to target a specific repository.

   For example:

   * {% prompt %}In OWNER/REPOSITORY, create a feature request to add fuzzy matching to search.{% endprompt %}
   * {% prompt %}Log a bug for a 500 error. This happens consistently when I try to log into the site.{% endprompt %}
   * {% prompt %}Create a task to change the application logo background to red and add the label "needs design review".{% endprompt %}

   > [!NOTE] You can only create issues in repositories where you already have permission to do so.

1. Optionally, paste, drag, or attach an image to your prompt. Add text to describe the issue, for example: `Create an issue because this error appears when trying to reset a password.`

1. Copilot drafts an issue with a suggested title, body, and metadata (labels, assignees, issue type). If your repository has issue forms or templates, Copilot maps your prompt to the relevant fields.

1. Review the draft. Edit any field, choose a different template, or ask Copilot to make changes with a follow-up prompt.

1. Click **Create**.

## Create multiple issues

If your prompt includes multiple tasks or bugs, Copilot drafts each one separately.

For example: {% prompt %}In OWNER/REPOSITORY, create 3 issues: 1) DETAILS OF ONE TASK, 2) DETAILS OF ANOTHER TASK, 3) DETAILS OF A THIRD TASK{% endprompt %}

Review and edit each draft individually, then click **Create** to publish.

## Create sub-issues

Copilot can break a task into a parent issue with sub-issues.

For example:

`In octo-org/octo-repo, plan a new user dashboard. Break it down into an epic, and create sub-issues for each main feature and task.`

Copilot generates a draft issue tree with a parent issue and sub-issues beneath it. Expand or collapse sub-issues, edit details, and use follow-up prompts to add or remove sub-issues.

When you're ready, click **Review and create**, then click **Create issues**.

## Update an existing issue

Prompt Copilot to modify an issue that already exists. For example:

`In octo-org/octo-repo, update issue #123 to add more details about the bug and steps to reproduce it. Also, change the label to "bug" and assign it to @username.`

Review the draft in the workbench, then click **Update**.

## Link to existing parent or sub-issues

Copilot can connect new issues to ones that already exist. For example:

* `Create a sub-issue for octo-org/octo-repo issue #456.`
* `Create a parent issue for octo-org/octo-repo issue #456.`
* `Create a parent issue for octo-org/octo-repo issues #456, #457, and #458.`

Review the draft in the workbench, then click **Review and create** > **Create issues**.

## Assign an issue to Copilot

With Copilot cloud agent enabled, you can assign an issue to Copilot during creation. See [Access Management](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/access-management).

* **Natural language:** Include `Assign this issue to Copilot.` in your prompt.
* **Manually:** Select "Copilot" from the assignee list.

Copilot starts working on the issue automatically after creation.

## Further reading

* [Configuring Issue Templates For Your Repository](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)
* [Plan A Project](https://docs.github.com/en/copilot/tutorials/plan-a-project)
