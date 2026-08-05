# Adding items to your project

> [!NOTE]
> A project can contain a maximum of 50,000 items across both active views and the archive page. To learn more about automatically archiving items when they meet specific criteria, see [Archiving Items Automatically](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically).

## Adding issues and pull requests to a project

You have several options for adding issues and pull requests to your project. You can add them individually, automatically, or in bulk. Furthermore, you can include issues and pull requests from any organization, and you also have the ability to add draft issues that can be converted into regular issues later on. For more information, see [Creating draft issues](#creating-draft-issues).



When you add an issue or pull request to your project, an event will be added to the issue or pull request's timeline. Timeline events will also be added when you remove issues or pull requests and when changes are made to its `status` field for those items. Timeline events are only visible to people who have at least read permission for the project. If a change is made by a built-in workflow, the activity will be attributed to **@github-project-automation**.



For more information about making bulk changes to your items after adding them, see [Editing Items In Your Project](https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-items-in-your-project/editing-items-in-your-project).

### Automatically adding issues and pull requests

You can configure a built-in workflow to automatically add issues and pull requests from a repository when they meet specific filter criteria. For more information about configuring a workflow, see [Adding Items Automatically](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project/adding-items-automatically).

### Pasting the URL of an issue or pull request

You can copy the URL of an issue or pull request into your clipboard and paste that into your project.

1. Place your cursor in the bottom row of the project, next to the {% octicon "plus" aria-label="Create new item or add existing item" %}.

   ![Screenshot showing the bottom row of a table view. The "Add item" field is highlighted with an orange outline.](/assets/images/help/projects-v2/add-item.png)

1. Paste the URL of the issue or pull request.
1. To add the issue or pull request, press <kbd>Return</kbd>.


### Searching for an issue or pull request

If you know the issue or pull request number or if you know part of the title, you can search for an issue or pull request directly from your project.

1. Place your cursor in the bottom row of the project, next to the {% octicon "plus" aria-label="Create new item or add existing item" %}.

   ![Screenshot showing the bottom row of a table view. The "Add item" field is highlighted with an orange outline.](/assets/images/help/projects-v2/add-item.png)

1. To open the list of repositories, type <kbd>#</kbd>.
1. Select the repository where the pull request or issue is located. You can type part of the repository name to narrow down your options.
1. Select the issue or pull request. You can type part of the title to narrow down your options.

### Bulk adding issues and pull requests

You can add multiple issues and pull requests from your project and use filters, such as `label:bug`, to narrow down your search.

1. In the bottom row of the project, click {% octicon "plus" aria-hidden="true" aria-label="plus" %}.
   ![Screenshot showing the bottom row of a table view. The "+" button is highlighted with an orange outline.](/assets/images/help/projects-v2/omnibar-add.png)
1. Click **Add item from repository**.
1. Optionally, to change the repository, click the dropdown and select a repository. You can also search for specific issues and pull requests.

   ![Screenshot showing the "Add from repository" form. The repository dropdown and search field are highlighted with an orange outline.](/assets/images/help/projects-v2/add-bulk-select-repo.png)
1. Select the issues and pull requests you want to add.
1. Click **Add selected items**.


### Adding multiple issues or pull requests from a repository

You can also add issues and pull requests to your project from a repository's issue and pull request lists.

1. On GitHub, navigate to the repository that contains the issues or pull requests you want to add to your project.
1. Under your repository name, click **{% octicon "issue-opened" aria-hidden="true" aria-label="issue-opened" %} Issues** or **{% octicon "git-pull-request" aria-hidden="true" aria-label="git-pull-request" %} Pull requests**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, the "Issues" and "Pull requests" tabs are outlined in orange.](/assets/images/help/repository/repo-settings-issues-pull-requests-global-nav-update.png)

1. Select the issues or pull requests you want to add to your project.

   * To select individual issues or pull requests, to the left of the title of each issue or pull request you want to add to your project, select the checkbox.

      ![Screenshot of the first two issues in the list of issues for a repository. To the left of each issue, a checkbox is outlined in dark orange.](/assets/images/help/issues/select-issue-checkbox.png)
   * To select every issue or pull request on the page, at the top of the list of issues or pull requests, select all.

      ![Screenshot of the list of issues for a repository. In the header above the list, a checkbox to select all issues is outlined in dark orange.](/assets/images/help/issues/select-all-checkbox.png)
1. Above the list of issues or pull requests, click **Projects**.
1. Click the projects you want to add the selected issues or pull requests to.

### Assigning a project from within an issue or pull request

You can also add an issue or pull request to your project from within the issue or pull request itself.

1. Navigate to the issue or pull request that you want to add to a project.
1. In the side bar, click **Projects**.
   ![Screenshot showing an issue's sidebar. "Projects" is highlighted with an orange outline.](/assets/images/help/projects-v2/issue-sidebar-projects.png)
1. Select the project that you want to add the issue or pull request to.
1. Optionally, populate the custom fields.

### Using the command palette to add an issue or pull request

You can use the command palette when viewing your project to quickly add items.

1. To open the project command palette, press <kbd>Command</kbd>+<kbd>K</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux).

1. Start typing "Add items" and press <kbd>Return</kbd>.
1. Optionally, to change the repository, click the dropdown and select a repository. You can also search for specific issues and pull requests.

   ![Screenshot showing the "Add from repository" form. The repository dropdown and search field are highlighted with an orange outline.](/assets/images/help/projects-v2/add-bulk-select-repo.png)
1. Select the issues and pull requests you want to add.
1. Click **Add selected items**.


## Creating issues

You can quickly create issues without leaving your project. When using a view that is grouped by a field, creating an issue in that group will automatically set the new issue's field to the group's value. For example, if you group your view by "Status", when you create an issue in the "Todo" group, the new issue's "Status" will automatically be set to "Todo."


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


## Creating draft issues

Draft issues are useful to quickly capture ideas. Unlike issues and pull requests that are referenced from your repositories, draft issues exist only in your project.

1. Place your cursor in the bottom row of the project, next to the {% octicon "plus" aria-label="Create new item or add existing item" %}.

   ![Screenshot showing the bottom row of a table view. The "Add item" field is highlighted with an orange outline.](/assets/images/help/projects-v2/add-item.png)

1. Type your idea, then press **Enter**.
1. To add body text, click on the title of the draft issue. In the markdown input box that appears, enter the text for the draft issue body, then click **Save**.


Draft issues can have a title, text body, assignees, and any custom fields from your project. In order to populate the repository, labels, or milestones for a draft issue, you must first convert the draft issue to an issue. For more information, see [Converting Draft Issues To Issues](https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-items-in-your-project/converting-draft-issues-to-issues).

> [!NOTE]
> Users will not receive notifications when they are assigned to or mentioned in a draft issue unless the draft issue is converted to an issue.
