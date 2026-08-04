# Customizing the table layout

## About the table layout

The table layout is a powerful and adaptable spreadsheet comprised of your issues, pull requests, and draft issues with metadata from GitHub and the custom fields you've added to your project. You can group, sort, and filter items, and show or hide fields in your table layouts to suit the needs of everyone on your team.


For more information about changing a view to use the table layout, see [Changing The Layout Of A View](https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view#changing-the-project-layout).

## Showing and hiding fields

You can show or hide a specific field.

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Under "Configuration", click **{% octicon "note" aria-hidden="true" aria-label="note" %} Fields**.
1. Select or deselect the fields you want to show or hide.


You can also hide individual fields using the field headers.

1. Next to the field you want to hide, click {% octicon "kebab-horizontal" aria-label="Status column options" %}.
   ![Screenshot showing a field header. The menu icon is highlighted with an orange outline.](/assets/images/help/projects-v2/modify-field-menu.png)
1. Click **{% octicon "eye-closed" aria-hidden="true" aria-label="eye-closed" %} Hide field**.

## Grouping by field values

You can group items by a custom field value. When items are grouped, if you drag an item to a new group, the value of that group is applied. For example, if you group by "Status" and then drag an item with a status of `In progress` to the `Done` group, the status of the item will switch to `Done`. Similarly, when you add a new item to a group, the new item is populated with the value of the group.


> [!NOTE]
> You cannot group by title, labels, reviewers, or linked pull requests.

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Click **{% octicon "rows" aria-hidden="true" aria-label="rows" %} Group by**.
1. Click the field you want to group by.
1. Optionally, to disable grouping, click **{% octicon "x" aria-hidden="true" aria-label="x" %} No grouping** at the bottom of the list.


## Slicing by field values

You can slice your items by a field to view a list of the field values in a separate panel. When you click on a value in the slice panel, the current view will adjust to only show items with that value. The slice panel works with the current filter applied to your view.

> [!NOTE]
> You cannot slice by title, reviewers, or linked pull requests.

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Click **Slice by**.
1. Click the field you want to slice by.
1. Optionally, to disable slicing, click **{% octicon "x" aria-hidden="true" aria-label="x" %} No slicing** at the bottom of the list.

With the slice panel open, you can change the current field by using the menu at the top of the slice panel.


## Reordering fields

You can change the order of fields.

1. Click the field header.

   ![Screenshot showing three field headers. One of the headers is highlighted with an orange outline.](/assets/images/help/projects-v2/select-field-header.png)

1. While continuing to click, drag the field to the required location.

## Reordering rows

You can change the order of rows.

1. Click the number at the start of the row.

   ![Screenshot showing three rows on a table layout. One of the row numbers is highlighted with an orange outline.](/assets/images/help/projects-v2/select-row-number.png)

1. While continuing to click, drag the row to the required location.

## Sorting by field values

You can sort items by a field value.

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Click **Sort**.
1. Click the field you want to sort by.
1. Optionally, to add a secondary sort, click another field.
1. Optionally, to change the direction of the sort for either field, click the field again.

   ![Screenshot of the sort menu. The button to change the direction of the sort for the first sorted field is highlighted with an orange outline.](/assets/images/help/projects-v2/sort-order-secondary.png)

1. Optionally, to remove a sort, click one of the sorted fields, or {% octicon "x" aria-hidden="true" aria-label="x" %} click **No sorting** at the bottom of the list.


## Showing the sum of a number field

You can configure a view to show the sum of one of more number fields, including a count of items in the group or column. For example, if you have a number field tracking the number of hours each item may take to complete, you can display of sum of those hours for each group or column.

In a board layout, field sums are displayed at the top of each column. In table and roadmap layouts, when you enable grouping by a field, field sums are included in each group's header.

1. Click **{% octicon "gear" aria-label="View options" %} View** next to the search bar of the currently open view.


1. Click **{% octicon "number" aria-hidden="true" aria-label="number" %} Field sum**.
1. Select the fields you want to include.
