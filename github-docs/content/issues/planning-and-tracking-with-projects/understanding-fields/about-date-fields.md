# About date fields

You can filter for date values using the `YYYY-MM-DD` format, for example: `date:2022-07-01`. You can also use operators, such as `>`, `>=`, `<`, `<=`, and `..`. For example, `date:>2022-07-01` and `date:2022-07-01..2022-07-31`. You can also provide `@today` to represent the current day in your filter. For more information, see [Filtering Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects).

If your project makes use of date fields, you can use the roadmap layout to view items on a timeline. For more information, see [Changing The Layout Of A View](https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view) and [Customizing The Roadmap Layout](https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-the-roadmap-layout).

> [!NOTE]
> Date fields do not currently support default values.

## Adding a date field

1. In table view, in the rightmost field header, click {% octicon "plus" aria-label="Add field" %}.
   ![Screenshot of a project. The "Add field" button is highlighted with an orange outline.](/assets/images/help/projects-v2/new-field-button.png)
1. Click **New field**.
1. At the top of the dropdown, type the name of your new field.

1. Select **Date**
1. Click **Save**.
