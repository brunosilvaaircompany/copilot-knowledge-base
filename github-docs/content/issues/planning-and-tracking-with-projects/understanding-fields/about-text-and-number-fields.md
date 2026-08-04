# About text and number fields

You can use text fields to include notes or any other freeform text in your project.

Text fields can be used in filters, for example: `field:"exact text"`. Text fields and item titles will also be used if you filter for text without specifying a field.

Number fields can also be used in filters. You can use `>`, `>=`, `<`, `<=`, and `..` range queries to filter by a number field. For example: `field:5..15` or `field:>=20`. For more information, see [Filtering Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects).

## Adding a text field

1. In table view, in the rightmost field header, click {% octicon "plus" aria-label="Add field" %}.
   ![Screenshot of a project. The "Add field" button is highlighted with an orange outline.](/assets/images/help/projects-v2/new-field-button.png)
1. Click **New field**.
1. At the top of the dropdown, type the name of your new field.

1. Select **Text**.
1. Click **Save**.

## Adding a number field

1. In table view, in the rightmost field header, click {% octicon "plus" aria-label="Add field" %}.
   ![Screenshot of a project. The "Add field" button is highlighted with an orange outline.](/assets/images/help/projects-v2/new-field-button.png)
1. Click **New field**.
1. At the top of the dropdown, type the name of your new field.

1. Select **Number**.
1. Click **Save**.

## Setting a default value

Set a default value for text or number fields. New items added to the project are automatically pre-populated with that value.

1. Navigate to your project.
1. In the top-right, click {% octicon "kebab-horizontal" aria-label="More options" %} to open the menu.

   ![Screenshot showing a project's menu bar. The menu icon is highlighted with an orange outline.](/assets/images/help/projects-v2/open-menu.png)
  
1. In the menu, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings** to access the project settings.

1. Click the name of the text or number field to configure.
1. In the **Default value** field, type the value to use as the default.
1. Click **Save**.

To remove a default value, clear the **Default value** field, then click **Save**. Removing a default value does not affect existing items in the project.
