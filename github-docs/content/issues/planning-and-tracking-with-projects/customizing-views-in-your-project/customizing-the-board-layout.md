# Customizing the board layout

## About the board layout

The board layout spreads your issues, pull requests, and draft issues across customizable columns. You can create a kanban board by setting your column field to a "Status" field or set any other single select or iteration field as the column field.

You can drag individual or multiple items from column to column and the value of those items will adjust to match the column you drag them to.


For more information about changing a view to use the board layout, see [Changing The Layout Of A View](https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view#changing-the-project-layout).

## Setting a limit on the number of items in a column

You can set a limit for the number of cards in a particular column in a board layout. Setting a limit does not restrict anyone from adding cards that would exceed the column's limit, nor does it restrict any automations from adding cards. Column limits are unique to each view in your project.

The current count of cards and the column's limit is displayed at the top of the column and is highlighted when the current count exceeds the limit. You can use column limits to communicate how you want the column to be used and to make clear at which point action needs to be taken to reduce the number of the cards in the column.

1. Click {% octicon "kebab-horizontal" aria-label="Column context menu" %} next to the name of the column you want to modify.
  ![Screenshot showing a top of a column in the table layout. The column context menu button is highlighted with an orange outline.](/assets/images/help/projects-v2/board-column-menu.png)
1. In the menu, click **{% octicon "number" aria-hidden="true" aria-label="number" %} Set column limit**.
1. Under "Column limit", type the card limit for this column.
1. Optionally, to remove the limit, clear the entry.
1. Click **Save**.

## Showing and hiding fields

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Under "Configuration", click **{% octicon "note" aria-hidden="true" aria-label="note" %} Fields**.
1. Select or deselect the fields you want to show or hide.


## Setting the column field in board layout

In the board layout, you choose any single select or iteration field for your columns. If you drag an item to a new column, the value of that column is applied to the dragged item. For example, if you use the "Status" field for your board columns and then drag an item with a status of `In progress` to the `Done` column, the status of the item will switch to `Done`.

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Click **{% octicon "columns" aria-hidden="true" aria-label="columns" %} Column field**.
1. Click the field you want to use.

## Showing and hiding columns in board layout

In the board layout, you can choose which columns to display. The available columns are made up of the contents of your selected column field.

1. In the board layout, scroll to the right of your columns, and click {% octicon "plus" aria-label="Add a new column to the board" %}.

   ![Screenshot of a board layout scrolled to the very right. The "Add a new column to the board" button is highlighted with an orange outline.](/assets/images/help/projects-v2/board-add-column.png)

1. Select the columns you want to show.

## Slicing by field values

You can slice your items by a field to view a list of the field values in a separate panel. When you click on a value in the slice panel, the current view will adjust to only show items with that value. The slice panel works with the current filter applied to your view.

> [!NOTE]
> You cannot slice by title, reviewers, or linked pull requests.

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Click **Slice by**.
1. Click the field you want to slice by.
1. Optionally, to disable slicing, click **{% octicon "x" aria-hidden="true" aria-label="x" %} No slicing** at the bottom of the list.

With the slice panel open, you can change the current field by using the menu at the top of the slice panel.


## Sorting by field values

You can sort items by a field value.

> [!NOTE]
> When a board is sorted, you cannot manually reorder items within a column. You can continue to move items from column to column.

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Click **Sort**.
1. Click the field you want to sort by.
1. Optionally, to add a secondary sort, click another field.
1. Optionally, to change the direction of the sort for either field, click the field again.

   ![Screenshot of the sort menu. The button to change the direction of the sort for the first sorted field is highlighted with an orange outline.](/assets/images/help/projects-v2/sort-order-secondary.png)

1. Optionally, to remove a sort, click one of the sorted fields, or {% octicon "x" aria-hidden="true" aria-label="x" %} click **No sorting** at the bottom of the list.


## Grouping by field values

You can use a custom field value to group items and create horizontal sections on your board. These sections provide an additional way to organize and visually separate items. Additionally, horizontal grouping allows you to differentiate work according to work streams, team members, or varying levels of urgency or priority.

When items are grouped, if you drag an item to a new group, the value of that group is applied. For example, if you group by "Status" and then drag an item with a status of `In progress` to the `Done` group, the status of the item will switch to `Done`. Similarly, when you add a new item to a group, the new item is populated with the value of the group.


> [!NOTE]
> You cannot group by title, labels, reviewers, or linked pull requests.

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Click **{% octicon "rows" aria-hidden="true" aria-label="rows" %} Group by**.
1. Click the field you want to group by.
1. Optionally, to disable grouping, click **{% octicon "x" aria-hidden="true" aria-label="x" %} No grouping** at the bottom of the list.


## Showing the sum of a number field

You can configure a view to show the sum of one of more number fields, including a count of items in the group or column. For example, if you have a number field tracking the number of hours each item may take to complete, you can display of sum of those hours for each group or column.

In a board layout, field sums are displayed at the top of each column. In table and roadmap layouts, when you enable grouping by a field, field sums are included in each group's header.

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Click **{% octicon "number" aria-hidden="true" aria-label="number" %} Field sum**.
1. Select the fields you want to include.
