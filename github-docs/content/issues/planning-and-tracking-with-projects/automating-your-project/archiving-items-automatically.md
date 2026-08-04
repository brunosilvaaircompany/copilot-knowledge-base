# Archiving items automatically

> [!NOTE]
> Project workflow automations must be enabled by an enterprise owner in the enterprise settings page for policies for projects. For more information, see [Enforcing Policies For Projects In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise).




## About automatically archiving items


You can configure your project's built-in workflows to automatically archive items. Archiving items helps you improve focus by removing old items from your project views. An archived item retains all of its custom field data and can be viewed or restored from the archive page.


The auto-archive workflow supports a subset of filters. You can use the following filters when configuring your workflow.

| Qualifier | Possible values
| --- | --- |
| `is` | `open`, `closed`, `merged`, `draft`, `issue`, `pr`
| `reason` | `completed`, `reopened`, `"not planned"`
| `updated` | <code><@today-<em>14</em>d</code> (the last 14 days), <code><@today-<em>3</em>w</code> (the last 3 weeks), <code><@today-<em>1</em>m</code> (the last month)

GitHub marks an issue or pull request as updated when it is:

* Created
* Reopened
* Edited
* Commented
* Labeled
* Assignees are updated
* Milestones are updated
* Transferred to another repository


Additionally, items are also marked as updated when field values in your project are changed.

When you enable automatic archiving for issues or pull requests, items in your project that already meet your criteria will also be archived. There may be some delay in archiving large numbers of items that already meet the criteria.

Your project can contain up to 50,000 items across both active views and the archive page. Once that limit has been reached, you will need to delete items from your project to free up more space. For more information on permanently deleting items, see [Archiving Items From Your Project](https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project#deleting-items).

## Configuring automatic archiving in your project

1. Navigate to your project.
1. In the top-right, click {% octicon "kebab-horizontal" aria-label="The menu icon" %} to open the menu.

   ![Screenshot showing a project's menu bar. The menu icon is highlighted with an orange outline.](/assets/images/help/projects-v2/open-menu.png)

1. In the menu, click **{% octicon "workflow" aria-hidden="true" aria-label="workflow" %} Workflows**.

1. In the "Default workflows" list, click **Auto-archive items**.
1. In the top right, click **Edit**.

   ![Screenshot showing a project's menu bar. The "Edit" button is highlighted with an orange rectangle.](/assets/images/help/projects-v2/workflow-start-editing.png)

1. In the "Filters" field, type the filter criteria you want to use to automatically archive items. You can only use the `is`, `reason`, and `updated` filters.
1. To save your changes and enable the workflow, click **Save and turn on workflow**.

## Further reading

* [Archiving Items From Your Project](https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project)
* [Using The Built In Automations](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations)
