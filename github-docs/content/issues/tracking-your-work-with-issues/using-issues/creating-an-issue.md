# Creating an issue

Issues can be used to keep track of bugs, enhancements, or other requests. For more information, see [About Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues).

Repository administrators can disable issues for a repository. For more information, see [Disabling Issues](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/disabling-issues).


## Creating an issue from a repository

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "issue-opened" aria-hidden="true" aria-label="issue-opened" %} Issues**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled "Issues," is outlined in dark orange.](/assets/images/help/repository/repo-tabs-issues-global-nav-update.png)

1. Click **New issue**.

1. If your repository uses issue templates, next to the type of issue you'd like to open, click **Get started**.

   If the type of issue you'd like to open isn't included in the available options, click **Open a blank issue**.

   ![Screenshot of the template chooser for an issue. Below the template choices, a link, labeled "Open a blank issue," is outlined in dark orange.](/assets/images/help/issues/blank-issue-link.png)
1. In the "Title" field, type a title for your issue.
1. In the comment body field, type a description of your issue.

   To cross-reference a related discussion, paste the discussion's URL into the issue description.

   

   > [!TIP]
   > As you type, GitHub may suggest potential duplicate issues that already exist in the repository. If a suggestion looks relevant, you can click through to the existing issue instead of creating a new one. These suggestions appear once the title is filled out and the body reaches 100 characters, and up to three existing issues may be shown. The suggestions are non-blocking and do not prevent you from creating your issue.

   

1. If you're a project maintainer, you can [assign the issue to someone](/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users), [add it to a project](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project#assigning-a-project-from-within-an-issue-or-pull-request), [associate it with a milestone](/issues/using-labels-and-milestones-to-track-work/associating-milestones-with-issues-and-pull-requests), [set the issue type](/issues/tracking-your-work-with-issues/using-issues/editing-an-issue#adding-or-changing-the-issue-type), or [apply a label](/issues/using-labels-and-milestones-to-track-work/managing-labels).

1. When you're finished, click **Submit new issue**.


## Creating an issue from a comment

You can open a new issue from a comment in an issue or pull request. When you open an issue from a comment, the issue contains a snippet showing where the comment was originally posted.

1. Navigate to the comment that you would like to open an issue from.
1. In that comment, click {% octicon "kebab-horizontal" aria-label="Show options" %}.

   ![Screenshot of a comment on a pull request. The kebab button is outlined in dark orange.](/assets/images/help/pull_requests/kebab-in-pull-request-review-comment.png)

1. Click **Reference in new issue**.
1. Use the "Repository" dropdown menu, and select the repository you want to open the issue in.
1. Type a descriptive title and body for the issue.
1. Click **Create issue**.
1. If you're a project maintainer, you can [assign the issue to someone](/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users), [add it to a project](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project#assigning-a-project-from-within-an-issue-or-pull-request), [associate it with a milestone](/issues/using-labels-and-milestones-to-track-work/associating-milestones-with-issues-and-pull-requests), [set the issue type](/issues/tracking-your-work-with-issues/using-issues/editing-an-issue#adding-or-changing-the-issue-type), or [apply a label](/issues/using-labels-and-milestones-to-track-work/managing-labels).

1. When you're finished, click **Submit new issue**.


## Creating an issue from code

You can open a new issue from a specific line or lines of code in a file or pull request. When you open an issue from code, the issue contains a snippet showing the line or range of code you chose. You can only open an issue in the same repository where the code is stored.

1. On GitHub, navigate to the main page of the repository.

1. Locate the code you want to reference in an issue:
    * To open an issue about code in a file, navigate to the file.
    * To open an issue about code in a pull request, navigate to the pull request and click **{% octicon "diff" aria-hidden="true" aria-label="diff" %} Files changed**. Then, browse to the file that contains the code you want included in your comment, and click **View**.
1. Choose whether to select a single line or a range.

   * To select a single line of code, click the line number to highlight the line.
   * To select a range of code, click the number of the first line in the range to highlight the line of code. Then, hover over the last line of the code range, press <kbd>Shift</kbd>, and click the line number to highlight the range.

1. To the left of the code range, click {% octicon "kebab-horizontal" aria-label="Code line X options" %}. In the dropdown menu, click **Reference in new issue**.

   ![Screenshot of a file, with 8 lines selected. To the left of the first selected line, a button labeled with a kebab icon is outlined in dark orange.](/assets/images/help/repository/open-new-issue-specific-line.png)
1. In the "Title" field, type a title for your issue.
1. In the comment body field, type a description of your issue.

1. If you're a project maintainer, you can [assign the issue to someone](/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users), [add it to a project](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project#assigning-a-project-from-within-an-issue-or-pull-request), [associate it with a milestone](/issues/using-labels-and-milestones-to-track-work/associating-milestones-with-issues-and-pull-requests), [set the issue type](/issues/tracking-your-work-with-issues/using-issues/editing-an-issue#adding-or-changing-the-issue-type), or [apply a label](/issues/using-labels-and-milestones-to-track-work/managing-labels).

1. When you're finished, click **Submit new issue**.


## Creating an issue from discussion

People with triage permission to a repository can create an issue from a discussion.

When you create an issue from a discussion, the contents of the discussion post will be automatically included in the issue body, and any labels will be retained. Creating an issue from a discussion does not convert the discussion to an issue or delete the existing discussion. For more information about GitHub Discussions, see [About Discussions](https://docs.github.com/en/discussions/collaborating-with-your-community-using-discussions/about-discussions).

1. Under your repository or organization name, click **{% octicon "comment-discussion" aria-hidden="true" aria-label="comment-discussion" %} Discussions**.

   ![Screenshot of the tabs in a GitHub repository. The "Discussions" option is outlined in dark orange.](/assets/images/help/discussions/repository-discussions-tab-global-nav-update.png)

1. In the list of discussions, click the discussion you want to view.

1. In the right sidebar, click **{% octicon "issue-opened" aria-hidden="true" aria-label="issue-opened" %} Create issue from discussion**.

   ![Screenshot of the sidebar in a discussion. The "Create issue from discussion" option is outlined in dark orange.](/assets/images/help/discussions/create-issue-from-discussion.png)

1. In the "Title" field, type a title for your issue.
1. In the comment body field, type a description of your issue.

1. If you're a project maintainer, you can [assign the issue to someone](/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users), [add it to a project](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project#assigning-a-project-from-within-an-issue-or-pull-request), [associate it with a milestone](/issues/using-labels-and-milestones-to-track-work/associating-milestones-with-issues-and-pull-requests), [set the issue type](/issues/tracking-your-work-with-issues/using-issues/editing-an-issue#adding-or-changing-the-issue-type), or [apply a label](/issues/using-labels-and-milestones-to-track-work/managing-labels).

1. When you're finished, click **Submit new issue**.


## Creating an issue from a project

You can quickly create issues without leaving your project. When using a view that is grouped by a field, creating an issue in that group will automatically set the new issue's field to the group's value. For example, if you group your view by "Status", when you create an issue in the "Todo" group, the new issue's "Status" will automatically be set to "Todo."
 For more information about Projects, see [About Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects).

1. Navigate to your project.
1. At the bottom of a table, group of items, or a column in board layout, click {% octicon "plus" aria-label="plus icon" %}.

   ![Screenshot showing the bottom row of a table view. The "+" button is highlighted with an orange outline.](/assets/images/help/projects-v2/omnibar-add.png)

1. Click **Create new issue**.
1. At the top of the "Create new issue" dialog, select the repository where you want the new issue to be created.

   ![Screenshot showing the "Create new issue" dialog.](/assets/images/help/projects-v2/issue-create-form.png)

1. Below the repository dropdown, type a title for the new issue.
1. Optionally, use the fields below the title field to set assignees, labels, and milestones, and add the new issue to other projects.
1. Optionally, type a description for your issue.
1. Optionally, if you want to create more issues, select **Create more** and the dialog will reopen when you create your issue.
1. Click **Create**.




## Creating an issue from a task list item

Within an issue, you can use task lists to break work into smaller tasks and track the full set of work to completion. If a task requires further tracking or discussion, you can convert the task to an issue by hovering over the task and clicking {% octicon "issue-opened" aria-label="The issue opened icon" %} in the upper-right corner of the task. For more information, see [About Tasklists](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists).



## Creating an issue from a URL query

You can use query parameters to open issues. Query parameters are optional parts of a URL you can customize to share a specific web page view, such as search filter results or an issue template on GitHub. To create your own query parameters, you must match the key and value pair.

> [!TIP]
> You can also create issue templates that open with default labels, assignees, and an issue title. For more information, see [Using Templates To Encourage Useful Issues And Pull Requests](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests).

You must have the proper permissions for any action to use the equivalent query parameter. For example, you must have permission to add a label to an issue to use the `labels` query parameter. For more information, see [Repository Roles For An Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization).

If you create an invalid URL using query parameters, or if you don't have the proper permissions, the URL will return a `404 Not Found` error page. If you create a URL that exceeds the server limit, the URL will return a `414 URI Too Long` error page.

Query parameter | Example
---  | ---
`title` | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report` creates an issue with the label "bug" and title "New bug report."
`body` | `https://github.com/octo-org/octo-repo/issues/new?title=New+bug+report&body=Describe+the+problem.` creates an issue with the title "New bug report" and the comment "Describe the problem" in the issue body.
`labels` | `https://github.com/octo-org/octo-repo/issues/new?labels=help+wanted,bug` creates an issue with the labels "help wanted" and "bug".
`milestone` | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones` creates an issue with the milestone "testing milestones."
`assignees` | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat` creates an issue and assigns it to @octocat.
`projects` | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1` creates an issue with the title "Bug fix" and adds it to the organization's project 1.
`template` | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md` creates an issue with a template in the issue body. The `template` query parameter works with templates stored in an `ISSUE_TEMPLATE` subdirectory within the root, `docs/` or `.github/` directory in a repository. For more information, see [Using Templates To Encourage Useful Issues And Pull Requests](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests).


You can also use URL query parameters to fill custom text fields that you have defined in issue form templates. Query parameters for issue form fields can also be passed to the issue template chooser. For more information, see [Syntax For Githubs Form Schema](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys).


## Creating an issue with GitHub CLI

GitHub CLI is an open source tool for using GitHub from your computer's command line. When you're working from the command line, you can use the GitHub CLI to save time and avoid switching context.
 To learn more about GitHub CLI, see [About GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli).

To create an issue, use the `gh issue create` subcommand. To skip the interactive prompts, include the `--body` and the `--title` flags.

```shell
gh issue create --title "TITLE" --body "ISSUE-DESCRIPTION"
```

You can also specify assignees, labels, milestones, and projects.

```shell
gh issue create --title "TITLE" --body "ISSUE-DESCRIPTION" --assignee @me,USERNAME --label "LABEL-1,LABEL-2" --project PROJECT-NAME --milestone "MILESTONE-NAME"
```



To set the issue type, use the `--type` flag.

```shell
gh issue create --title "TITLE" --body "ISSUE-DESCRIPTION" --type "ISSUE-TYPE"
```





To create the issue as a sub-issue of an existing parent, use the `--parent` flag with an issue number or URL.

```shell
gh issue create --title "TITLE" --body "ISSUE-DESCRIPTION" --parent PARENT-ISSUE-NUMBER
```





To create dependencies at the same time, use the `--blocked-by` and `--blocking` flags. Both accept a comma-separated list of issue numbers or URLs.

```shell
gh issue create --title "TITLE" --body "ISSUE-DESCRIPTION" --blocked-by BLOCKED-BY-ISSUE-NUMBER --blocking BLOCKING-ISSUE-NUMBER
```





## Creating an issue with Copilot Chat on GitHub

> [!NOTE]
> This feature is in public preview and subject to change.

Creating issues manually can be repetitive and time-consuming. With Copilot, you can create issues faster by prompting in natural language, or even by uploading a screenshot. Copilot fills out the title, body, labels, assignees, and more, using your repository’s templates and structure. See [Use Copilot To Create Or Update Issues](https://docs.github.com/en/copilot/how-tos/copilot-on-github/copilot-for-github-tasks/use-copilot-to-create-or-update-issues).

## Creating an issue from Copilot Chat in VS Code

You can also create an issue directly from Copilot Chat in VS Code, using the Model Context Protocol (MCP). See [Extend Copilot Chat With MCP](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/extend-copilot-chat-with-mcp).



## Further reading

* [Writing On GitHub](https://docs.github.com/en/get-started/writing-on-github)
