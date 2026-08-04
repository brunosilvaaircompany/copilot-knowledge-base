# Adding sub-issues

You can add sub-issues to an issue to break down larger pieces of work into tasks. Your sub-issues show their relationship to the parent issue allowing you to track your work across GitHub. Parent issues and sub-issue progress is also available in your projects, allowing you to build views, filter, and group by parent issue.

Your sub-issues can themselves contain sub-issues, allowing you to create full hierarchies of issues that visualize entire projects or pieces of work and show the relationships between your issues.

You can add up to 100 sub-issues per parent issue and create up to eight levels of nested sub-issues.

## Creating a sub-issue

1. Navigate to the issue that you want to add a sub-issue to.
1. At the bottom of the issue description, click **Create sub-issue**.
1. In the dialog, type the title for your sub-issue.
1. Optionally, type the description for your issue, and set the issue type and any assignees, labels, projects, and milestones.
1. Optionally, if you want to continue create sub-issues for this parent issue, select **Create more sub-issues**.
1. Click **Create**.

## Adding an existing issue as a sub-issue

1. Navigate to the issue that you want to add a sub-issue to.
1. At the bottom of the issue description, next to "Create sub-issue", click {% octicon "triangle-down" aria-label="View more sub-issue options" %}.

   ![Screenshot of the sub-issues section below the issue description. The "View more sub-issue options" button is highlighted with an orange rectangle.](/assets/images/help/issues/sub-issue-drop-down.png)

1. In the drop-down menu, click **Add existing issue**.
1. Select the issue that you want to add as a sub-issue.
    * Select an issue from one of the suggestions.
    * In the "Search issues" field, type an issue title or issue number, then click on the results.
    * To add issues from other repositories, click {% octicon "arrow-left" aria-label="Back to repository selection" %} next to the repository name and select a different repository.

## Working with sub-issues using GitHub CLI

GitHub CLI is an open source tool for using GitHub from your computer's command line. When you're working from the command line, you can use the GitHub CLI to save time and avoid switching context.
 To learn more about GitHub CLI, see [About GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli).

To create a new issue as a sub-issue of an existing parent, use the `--parent` flag with `gh issue create`. The parent can be specified by issue number or URL.

```shell
gh issue create --title "TITLE" --body "ISSUE-DESCRIPTION" --parent PARENT-ISSUE-NUMBER
```

To add existing issues as sub-issues of a parent, use the `--add-sub-issue` flag with `gh issue edit`. The flag accepts a comma-separated list of issue numbers or URLs.

```shell
gh issue edit PARENT-ISSUE-NUMBER --add-sub-issue SUB-ISSUE-NUMBER
```

To remove a sub-issue from its parent, use `--remove-sub-issue` on the parent or `--remove-parent` on the sub-issue.

```shell
gh issue edit PARENT-ISSUE-NUMBER --remove-sub-issue SUB-ISSUE-NUMBER
gh issue edit SUB-ISSUE-NUMBER --remove-parent
```
