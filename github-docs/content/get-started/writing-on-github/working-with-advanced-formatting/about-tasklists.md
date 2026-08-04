# About tasklists

## About tasklists

> [!IMPORTANT]
> Tasklist blocks are retired. You can read more about this on the [GitHub Blog](https://github.blog/changelog/2025-02-18-github-issues-projects-february-18th-update/).
>
>  You can use sub-issues as the replacement for tasklist blocks. Sub-issues provide a dedicated section within each issue, making it easier to track related work without relying on Markdown. For more information about sub-issues, see [Adding Sub Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/adding-sub-issues). 

A tasklist is a set of tasks that each render on a separate line with a clickable checkbox. You can select or deselect the checkboxes to mark the tasks as complete or incomplete.

You can use Markdown to create a tasklist in any comment on GitHub. If you reference an issue, pull request, or discussion in a tasklist, the reference will unfurl to show the title and state.


You can view tasklist summary information in issue and pull request lists, when the tasklist is in the initial comment.


## Creating tasklists

To create a task list, preface list items with a hyphen and space followed by `[ ]`. To mark a task as complete, use `[x]`.

```markdown
- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:
```

![Screenshot showing the rendered version of the markdown. The references to issues are rendered as issue titles.](/assets/images/help/writing/task-list-rendered-simple.png)


> [!NOTE]
> You cannot create tasklist items within closed issues or issues with linked pull requests.

## Reordering tasks

You can reorder the items in a tasklist. First, click or hover to the left of a task's checkbox until a grid of six dots appears. Then, drag and drop the grid to move the task to a new location.

You can reorder tasks across different lists in the same comment, but you cannot reorder tasks across different comments.

 ![Screenshot of a GitHub issue showing two tasks in a tasklist. A grid of six dots to the left of the second task is outlined in dark orange.](/assets/images/help/writing/task-list-reorder.png)



## Converting tasks into issues

You can also convert tasks into issues. First, hover over one of the items in your tasklist and then click {% octicon "issue-opened" aria-label="Convert to issue" %}.

  ![Screenshot of an issue showing two tasks. The "Convert to issue" icon is highlighted with an orange outline.](/assets/images/help/writing/convert-task-lists-into-issues.png)

## Navigating tracked issues

Any issues that are referenced in a tasklist specify that they are tracked by the issue that contains the tasklist. To navigate to the tracking issue from the tracked issue, click on the tracking issue number in the **Tracked by** section next to the issue status.

![Screenshot of issue 3 showing the issue status of "Open" and the text "Tracked by issue #2", which is outlined in orange.](/assets/images/help/writing/task-list-tracked.png)
