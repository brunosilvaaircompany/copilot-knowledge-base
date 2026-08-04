# Quickstart for Projects

## Introduction

This guide demonstrates how to use Projects to plan and track work. In this guide, you will create a new project, customize views, and add custom fields to manage a team backlog, iteration planning, and a team roadmap to communicate priorities and progress with your collaborators. You'll also set up built-in workflows to automatically manage the items in your project and charts to visualize items in your project.

## Prerequisites

You can either create an organization project or a user project. To create an organization project, you need a GitHub organization. For more information about creating an organization, see [Creating A New Organization From Scratch](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).

In this guide, you will add issues from repositories owned by your organization (for organization projects) or by you (for user projects) to your new project. For more information about creating issues, see [Creating An Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue).

## Creating a project

First, create an organization project or a user project.

### Creating an organization project

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "table" aria-hidden="true" aria-label="table" %} Projects**.

   ![Screenshot showing profile tabs. The 'Projects' tab is highlighted with an orange outline.](/assets/images/help/projects-v2/tab-projects.png)
1. Click **New project**.
1. Select which type of project or template you want to use.
   * To create a blank project, under "Start from scratch," click **Table**, **Roadmap**, or **Board**.
   * To create a project from a template, click the template you want to use. You can select from the built-in templates curated by GitHub, the templates created by your organization, and the recommended templates that have been chosen by your organization.
1. Optionally, if you selected a template, review the fields, views, workflows, and insights that will be created.
1. In the text box under "Project name," type a name for your new project.

1. Optionally, start your project with items already added by selecting **Import items from repository**. All new and existing items from the chosen repository will be added to your project, and it will be designated as your project's default repository.

1. Click **Create project**.


### Creating a user project

1. In the top right corner of GitHub, click your profile picture, then click **Your profile**.

   ![Screenshot of the dropdown menu under @octocat's profile picture. "Your profile" is outlined in dark orange.](/assets/images/help/profile/profile-button-avatar-menu-global-nav-update.png)

1. On your profile, click **{% octicon "table" aria-hidden="true" aria-label="table" %} Projects**.

   ![Screenshot showing profile tabs. The 'Projects' tab is highlighted with an orange outline.](/assets/images/help/projects-v2/tab-projects.png)

1. Click **New project**.
1. Select which type of project or template you want to use.
   * To create a blank project, under "Start from scratch", click **Table**, **Roadmap**, or **Board**.
   * To create a project from a template, click the built-in template that you want to use.
1. Optionally, if you selected a template, review the fields, views, workflows, and insights that will be created.
1. In the text box under "Project name", type a name for your new project.
1. Click **Create project**.


## Setting your project description and README

You can set your project's description and README to share the purpose of your project, provide instructions on how to use the project, and include any relevant links.

1. Navigate to your project.
1. In the top-right, click {% octicon "kebab-horizontal" aria-label="More options" %} to open the menu.

   ![Screenshot showing a project's menu bar. The menu icon is highlighted with an orange outline.](/assets/images/help/projects-v2/open-menu.png)
  
1. In the menu, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings** to access the project settings.

1. To add a short description to your project, under "Add a description", type your description in the text box and click **Save**.
1. To update your project's README, under "README", type your content in the text box.
   * You can format your README using Markdown. For more information, see [Basic Writing And Formatting Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).
   * To toggle between the text box and a preview of your changes, click {% octicon "eye" aria-label="The preview icon" %} or {% octicon "pencil" aria-label="The edit icon" %}.
1. To save changes to your README, click **Save**.

You can view and make quick changes to your project description and README by navigating to your project and clicking {% octicon "sidebar-expand" aria-label="The sidebar icon" %} in the top right.


## Adding items to your project

Next, add a few items to your project.

1. Place your cursor in the bottom row of the project, next to the {% octicon "plus" aria-label="Create new item or add existing item" %}.

   ![Screenshot showing the bottom row of a table view. The "Add item" field is highlighted with an orange outline.](/assets/images/help/projects-v2/add-item.png)

1. Paste the URL of the issue or pull request.
1. To add the issue or pull request, press <kbd>Return</kbd>.


Repeat the above steps a few times to add multiple items to your project.

For more information and other ways to add issues to your project, or about other items you can add to your project, see [Adding Items To Your Project](https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project).

## Adding draft issues to your project

Next, add a draft issue to your project.

1. Place your cursor in the bottom row of the project, next to the {% octicon "plus" aria-label="Create new item or add existing item" %}.

   ![Screenshot showing the bottom row of a table view. The "Add item" field is highlighted with an orange outline.](/assets/images/help/projects-v2/add-item.png)

1. Type your idea, then press **Enter**.
1. To add body text, click on the title of the draft issue. In the markdown input box that appears, enter the text for the draft issue body, then click **Save**.


## Adding fields

Next, create custom fields to manage the iteration, priority, and estimates for your project items.

### Creating an iteration field

Create an iteration field so you can plan and track your work over repeating blocks of time. Iterations can be configured to suit how you and your team works, with customizable lengths and the ability to insert breaks.

1. In table view, in the rightmost field header, click {% octicon "plus" aria-label="Add field" %}.
   ![Screenshot of a project. The "Add field" button is highlighted with an orange outline.](/assets/images/help/projects-v2/new-field-button.png)
1. Click **New field**.
1. At the top of the dropdown, type the name of your new field.

1. Select **Iteration**
1. To change the duration of each iteration, type a new number, then select the dropdown and click either **days** or **weeks**.
1. Click **Save**.

Specify an iteration for all items in your project.

### Creating a priority field

Now, create a custom field named `Priority` and containing the values: `High`, `Medium`, or `Low`.

1. In table view, in the rightmost field header, click {% octicon "plus" aria-label="Add field" %}.
   ![Screenshot of a project. The "Add field" button is highlighted with an orange outline.](/assets/images/help/projects-v2/new-field-button.png)
1. Click **New field**.
1. At the top of the dropdown, type the name of your new field.

1. Select **Single select**
1. Below "Options," type the first option, "High."
1. To add additional fields, for "Medium" and "Low," click **Add option**.
1. Click **Save**.

Specify a priority for all items in your project.

![Screenshot showing a list of issues, each with a priority of "Low," "Medium," or "High" in the "Priority" field.](/assets/images/help/projects/priority-example.png)

### Creating an estimate field

Create a custom field named `Estimate` to track the complexity for each item.

1. In table view, in the rightmost field header, click {% octicon "plus" aria-label="Add field" %}.
   ![Screenshot of a project. The "Add field" button is highlighted with an orange outline.](/assets/images/help/projects-v2/new-field-button.png)
1. Click **New field**.
1. At the top of the dropdown, type the name of your new field.

1. Select **Number**
1. Click **Save**.

Specify an estimate for all items in your project.

## Creating views

Create views to visualize your items in a table, board, and roadmap.

For more information on customizing views, see [Customizing Views In Your Project](https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project).

### Creating a team backlog

You can use a table layout to visualize your team backlog as a spreadsheet, allowing you to view many fields and make edits.

Select visible fields for your view to communicate the priority and progress of your team backlog.

1. In table view, in the rightmost field header, click {% octicon "plus" aria-label="the plus icon" %}.

   ![Screenshot of a project. The "Add field" button, indicated by a plus icon, is highlighted with an orange outline.](/assets/images/help/projects-v2/new-field-button.png)

1. Under "Hidden fields," click **Type**, **Status**, **Sub-issues progress**, **Assignees**, **Linked pull requests**, **Priority**, and **Estimate**.

Next, group all of the items in your project by priority to make it easier to focus on the high priority items.

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Click **{% octicon "rows" aria-hidden="true" aria-label="rows" %} Group**.
1. Click **Priority**.

Now, move items between groups to change their priority.

1. Choose an item.
1. Drag and drop the item into a different priority group. When you do this, the priority of the item will change to be the priority of its new group.

You can also show the sum of the `Estimate` field for each priority group.

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Click **{% octicon "number" aria-hidden="true" aria-label="number" %} Field sum**.
1. Select **Estimate**.

When you grouped your items by priority and added a field sum in the previous steps, your project displayed an indicator to show that the view was modified. Save these changes so that your collaborators will also see the tasks grouped by priority.

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Click **Save changes**.


You can share the URL with your team to keep everyone aligned on the project priorities. When a view is saved, anyone who opens the project will see the saved view. Here, you grouped by priority, but you can also add other modifiers such as sort, filter, or layout.

Finally, to indicate the purpose of the view, give it a descriptive name.

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Click **{% octicon "pencil" aria-hidden="true" aria-label="pencil" %} Rename view**.
1. Type the new name for your view.
1. To save changes, press <kbd>Return</kbd>.

Next, you will create new views with different layouts.

For more information on customizing tables, see [Customizing The Table Layout](https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-the-table-layout).

### Creating a weekly iteration board view

To view the progress of your project's items in a kanban board, you can use the board layout. The board layout is based on the status field by default, so specify a status for each item in your project.

First, create a new view.

1. To the right of your existing views, click **New view**
   ![Screenshot showing the view tabs at the top of a project. The "New view" button is highlighted with an orange outline.](/assets/images/help/projects-v2/new-view.png)


Next, switch to the board layout.

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Under "Layout," click **Board**.

To indicate the purpose of the view, give it a descriptive name.

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Click **{% octicon "pencil" aria-hidden="true" aria-label="pencil" %} Rename view**.
1. Type the new name for your view.
1. To save changes, press <kbd>Return</kbd>.

Add a filter for `iteration:@current` to only includes items from the current iteration.

You can also show the sum of the `Estimate` field for each status column.

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Click **{% octicon "number" aria-hidden="true" aria-label="number" %} Field sum**.
1. Select **Estimate**.

When you added a filter and added a field sum in the previous steps, your project displayed an indicator to show that the view was modified. Save this view so that you and your collaborators can easily access it in the future.

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Click **Save changes**.


For more information on customizing boards, see [Customizing The Board Layout](https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-the-board-layout).

### Creating a team roadmap

To view your project items on a timeline, you can use the roadmap layout. Roadmaps use custom date and iteration fields to position your issues, pull requests, and draft items on a timeline, allowing you to track work over time and watch progress.

First, create a new view.

1. To the right of your existing views, click **New view**
   ![Screenshot showing the view tabs at the top of a project. The "New view" button is highlighted with an orange outline.](/assets/images/help/projects-v2/new-view.png)


Next, switch to the roadmap layout.

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Under "Layout," click **Roadmap**.

You can add vertical markers on a roadmap to show the milestones associated with items in your project.

1. In the top right of your roadmap, click **{% octicon "location" aria-hidden="true" aria-label="location" %} Markers**.

   ![Screenshot showing the menu bar in a roadmap layout. The "Markers" button is highlighted with an orange outline.](/assets/images/help/projects-v2/markers.png)

1. In the menu, select which markers you want to display on your roadmap.

When you added markers, your project displayed an indicator to show that the view was modified. Save this view so that you and your collaborators can easily access it in the future.

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Click **Save changes**.


To indicate the purpose of the view, give it a descriptive name.

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Click **{% octicon "pencil" aria-hidden="true" aria-label="pencil" %} Rename view**.
1. Type the new name for your view.
1. To save changes, press <kbd>Return</kbd>.

For more information on customizing roadmaps, see [Customizing The Roadmap Layout](https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-the-roadmap-layout).

## Configuring built-in automation

Next, configure the auto-add workflow to automatically add issues opened in a repository with a specific label to your project.

1. Navigate to your project.
1. In the top-right, click {% octicon "kebab-horizontal" aria-label="The menu icon" %} to open the menu.

   ![Screenshot showing a project's menu bar. The menu icon is highlighted with an orange outline.](/assets/images/help/projects-v2/open-menu.png)

1. In the menu, click **{% octicon "workflow" aria-hidden="true" aria-label="workflow" %} Workflows**.

1. In the "Default workflows" list, click **Auto-add to project**.
1. To start editing the workflow, in the top right, click **Edit**.

   ![Screenshot showing the workflow menu bar. The "Edit" button is highlighted with an orange rectangle.](/assets/images/help/projects-v2/workflow-start-editing.png)

1. Under "Filters," select the repository you want to add items from.
1. Next to the repository selection, type the filter criteria you want items to match before they are automatically added to your project. For example, to catch all issues and pull requests opened with the label "question," use `is:issue,pr label:question`.
1. To enable the new workflow, click **Save and turn on workflow**.

Finally, add a built in workflow to set the status to **Todo** when an item is added to your project.

1. In the top-right, click {% octicon "kebab-horizontal" aria-label="The menu icon" %} to open the menu.
   ![Screenshot showing a project's menu bar. The menu icon is highlighted with an orange outline.](/assets/images/help/projects-v2/open-menu.png)
1. In the menu, click **{% octicon "workflow" aria-hidden="true" aria-label="workflow" %} Workflows**.
1. Under **Default workflows**, click **Item added to project**.
1. Next to **When**, ensure that both `issues` and `pull requests` are selected.
1. Next to **Set**, select **Status:Todo**.
1. Click the **Disabled** toggle to enable the workflow.

For more information on automating your project and other default workflows you can configure to keep your project items up to date, see [Automating Your Project](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project).

## Viewing charts and insights

You can use insights for Projects to view, create, and customize charts that use the items added to your project as their source data. You can apply filters to the default chart and also create your own charts by choosing the grouping, layout, X-axis, and Y-axis configuration.

1. Navigate to your project.
1. In the top-right, to access insights, click {% octicon "graph" aria-label="Navigate to insights" %}.
   ![Screenshot showing a projects menu buttons. The insights button is highlighted with an orange outline.](/assets/images/help/projects-v2/insights-button.png)

1. In the menu on the left, click **New chart**.
1. Optionally, to change the name of the new chart, click {% octicon "triangle-down" aria-label="The triangle icon" %}, type a new name, and press <kbd>Return</kbd>.
1. Above the chart, type filters to change the data used to build the chart. See [Filtering Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects).
1. To the right of the filter text box, click **Save changes**.

For more information, see [About Insights For Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects).

## Further reading

* [Best Practices For Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/best-practices-for-projects)
* [Managing Items In Your Project](https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-items-in-your-project)
* [Understanding Fields](https://docs.github.com/en/issues/planning-and-tracking-with-projects/understanding-fields)
