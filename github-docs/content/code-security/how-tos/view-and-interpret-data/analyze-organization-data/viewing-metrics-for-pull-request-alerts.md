# Viewing code scanning metrics for pull requests

## Viewing code scanning pull request metrics for an organization

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. In the sidebar, under "Insights", click **{% octicon "graph" aria-hidden="true" aria-label="graph" %} Code scanning on pull requests**.

1. Select the **CodeQL** or **AI Scan** tab.

1. Optionally, use the date picker to set the time range. The date picker filters data based on when the pull request alerts or findings were created.
1. Optionally, apply filters in the search box at the top of the page.
1. Alternatively, you can open the advanced filter dialog:
    * At the top of the page, next to the search box, click **{% octicon "filter" aria-hidden="true" aria-label="filter" %} Filter**.
    * Click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add a filter**, then select a filter from the dropdown menu.
    * To search for repositories matching the selected filter, fill out the available fields for that filter, then click **Apply**. You can repeat this process to add as many filters as you would like to your search.
    * Optionally, to remove a filter from your search, click **{% octicon "filter" aria-hidden="true" aria-label="filter" %} Filter**. In the row of the filter you want to remove, click {% octicon "x" aria-label="Delete FILTER-NUMBER: FILTER-PROPERTIES" %}, then click **Apply**.
1. {% ifversion ai-powered-security-detections %}On the **CodeQL** tab, you can use the **{% octicon "download" aria-hidden="true" aria-label="download" %} Export CSV** button to download a CSV file of the displayed data. CSV export is not yet available for the **AI Scan** tab.  For more information, see [Export Data](https://docs.github.com/en/code-security/how-tos/view-and-interpret-data/analyze-organization-data/export-data). {% endif %}

## Viewing code scanning pull request metrics for your enterprise

You can also view code scanning metrics for pull requests across organizations in your enterprise.

1. Navigate to GitHub Enterprise Cloud.
1. In the top-right corner of GitHub, click your profile picture.
1. Depending on your environment, click **Enterprise**, or click **Enterprises** then click the enterprise you want to view.

1. At the top of the page, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. In the sidebar, under "Insights", click **{% octicon "graph" aria-hidden="true" aria-label="graph" %} Code scanning on pull requests**.

1. Select the **CodeQL** or **AI Scan** tab.

1. Optionally, use the date picker or filters to limit the displayed data.

> [!TIP]
> You can use the `owner` filter in the search field to filter the data by organization. If you're an owner of an enterprise with managed users, you can use the `owner-type` filter to filter the data by the type of repository owner, so that you can view data from either organization-owned repositories or user-owned repositories. For more information, see [Filtering Alerts In Security Overview](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/filtering-alerts-in-security-overview).
