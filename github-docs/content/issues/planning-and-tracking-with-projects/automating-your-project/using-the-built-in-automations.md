# Using the built-in automations

> [!NOTE]
> Project workflow automations must be enabled by an enterprise owner in the enterprise settings page for policies for projects. For more information, see [Enforcing Policies For Projects In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise).




Projects includes built-in workflows that you can use to update the **Status** of items based on certain events. For example, you can automatically set the status to **Todo** when an item is added to your project, close issues when the issue's status in your project is changed, or set the status to **Done** when an issue is closed.

When your project initializes, two workflows are enabled by default: When issues or pull requests in your project are closed, their status is set to **Done**, and when pull requests in your project are merged, their status is set to **Done**.

You can also configure workflows to automatically archive items when they meet set criteria and to automatically add items from a repository when they match a filter. For more information, see [Archiving Items Automatically](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically) and [Adding Items Automatically](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project/adding-items-automatically).

## Enabling a built-in workflow

You can enable or disable the built-in workflows for your project.

1. Navigate to your project.
1. In the top-right, click {% octicon "kebab-horizontal" aria-label="The menu icon" %} to open the menu.

   ![Screenshot showing a project's menu bar. The menu icon is highlighted with an orange outline.](/assets/images/help/projects-v2/open-menu.png)

1. In the menu, click **{% octicon "workflow" aria-hidden="true" aria-label="workflow" %} Workflows**.

1. Under "Default workflows," click on the workflow that you want to edit.
1. In the top right, click **Edit**.

   ![Screenshot showing a project's menu bar. The "Edit" button is highlighted with an orange rectangle.](/assets/images/help/projects-v2/workflow-start-editing.png)

1. Depending on the workflow you have selected, make changes to the fields to configure the workflow's behavior.
1. To save your changes and enable the workflow, click **Save and turn on workflow**.
