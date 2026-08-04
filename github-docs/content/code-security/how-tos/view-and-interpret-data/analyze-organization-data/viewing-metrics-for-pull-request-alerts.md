# Viewing metrics for pull request alerts

## Viewing CodeQL pull request metrics for an organization

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. In the sidebar, under "Insights", click **{% octicon "graph" aria-hidden="true" aria-label="graph" %} CodeQL pull requests**.
1. Optionally, use the date picker to set the time range. The date picker will show data based on the pull request alerts' creation dates.
1. Optionally, apply filters in the search box at the top of the page.
1. Alternatively, you can open the advanced filter dialog:
    * At the top of the page, next to the search box, click **{% octicon "filter" aria-hidden="true" aria-label="filter" %} Filter**.
    * Click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add a filter**, then select a filter from the dropdown menu.
    * To search for repositories matching the selected filter, fill out the available fields for that filter, then click **Apply**. You can repeat this process to add as many filters as you would like to your search.
    * Optionally, to remove a filter from your search, click **{% octicon "filter" aria-hidden="true" aria-label="filter" %} Filter**. In the row of the filter you want to remove, click {% octicon "x" aria-label="Delete FILTER-NUMBER: FILTER-PROPERTIES" %}, then click **Apply**.
1. You can use the **{% octicon "download" aria-hidden="true" aria-label="download" %} Export CSV** button to download a CSV file of the data currently displayed on the page for security research and in-depth data analysis. For more information, see [Export Data](https://docs.github.com/en/code-security/how-tos/view-and-interpret-data/analyze-organization-data/export-data). 

## Viewing CodeQL pull request metrics for your enterprise

You can also view metrics for CodeQL pull request alerts across organizations in your enterprise.

1. Navigate to GitHub Enterprise Cloud.
1. In the top-right corner of GitHub, click your profile picture.
1. Depending on your environment, click **Enterprise**, or click **Enterprises** then click the enterprise you want to view.

1. At the top of the page, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. In the sidebar, under "Insights", click **{% octicon "graph" aria-hidden="true" aria-label="graph" %} CodeQL pull requests**.

> [!TIP]
> You can use the `owner` filter in the search field to filter the data by organization. If you're an owner of an enterprise with managed users, you can use the `owner-type` filter to filter the data by the type of repository owner, so that you can view data from either organization-owned repositories or user-owned repositories. For more information, see [Filtering Alerts In Security Overview](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/filtering-alerts-in-security-overview).
