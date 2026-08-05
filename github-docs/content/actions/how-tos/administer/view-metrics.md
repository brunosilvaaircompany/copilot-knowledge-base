# Viewing GitHub Actions metrics

## Viewing GitHub Actions metrics for your organization

> [!NOTE]
There may be a discrepancy between the **Workflows** tab's job count and the **Jobs** tab's count due to differences in how unique jobs are identified. This does not affect the total minutes calculated.


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "graph" aria-hidden="true" aria-label="graph" %} Insights**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with a graph icon and "Insights," is outlined in dark orange.](/assets/images/help/organizations/org-nav-insights-tab.png)

1. In the "Insights" navigation menu, click **Actions Usage Metrics** or click **Actions Performance Metrics**.
1. Optionally, to select a time period to view usage metrics for, choose an option from the **Period** drop down menu at the top right of the page. For more information, see [View Metrics](https://docs.github.com/en/actions/how-tos/administer/view-metrics#understanding-github-actions-metrics-aggregation).
1. Click on the tab that contains the metrics you would like to view. For more information, see [Metrics](https://docs.github.com/en/actions/concepts/metrics).
1. Optionally, to filter the data displayed in a tab, create a filter.
    1. Click on the **{% octicon "filter" aria-hidden="true" aria-label="filter" %} Filter** button.
    1. Click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add a filter**.
    1. Choose a metric you would like to filter results by.
    1. Depending on the metric you chose, fill out information in the "Qualifier," "Operator," and "Value" columns.
    1. Optionally, click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add a filter** to add another filter.
    1. Click **Apply**.
1. Optionally, to download usage metrics to a CSV file, click {% octicon "download" aria-label="Download report" %}.


## Viewing GitHub Actions metrics for your repository

> [!NOTE]
There may be a discrepancy between the **Workflows** tab's job count and the **Jobs** tab's count due to differences in how unique jobs are identified. This does not affect the total minutes calculated.


1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click the **{% octicon "graph" aria-hidden="true" aria-label="graph" %} Insights** tab.

1. In the "Insights" navigation menu, click **Actions Usage Metrics** or click **Actions Performance Metrics**.
1. Optionally, to select a time period to view usage metrics for, choose an option from the **Period** drop down menu at the top right of the page. For more information, see [View Metrics](https://docs.github.com/en/actions/how-tos/administer/view-metrics#understanding-github-actions-metrics-aggregation).
1. Click on the tab that contains the metrics you would like to view. For more information, see [Metrics](https://docs.github.com/en/actions/concepts/metrics).
1. Optionally, to filter the data displayed in a tab, create a filter.
    1. Click on the **{% octicon "filter" aria-hidden="true" aria-label="filter" %} Filter** button.
    1. Click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add a filter**.
    1. Choose a metric you would like to filter results by.
    1. Depending on the metric you chose, fill out information in the "Qualifier," "Operator," and "Value" columns.
    1. Optionally, click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add a filter** to add another filter.
    1. Click **Apply**.
1. Optionally, to download usage metrics to a CSV file, click {% octicon "download" aria-label="Download report" %}.


## Understanding GitHub Actions metrics aggregation

The time period selection feature allows you to view GitHub Actions metrics over predefined periods, as detailed in the following table. These metrics exclude skipped runs and those that use zero minutes. Data is presented using Coordinated Universal Time (UTC) days.

{% rowheaders %}

| Period                 | Description                                                                  |
|------------------------|------------------------------------------------------------------------------|
| Current week (Mon-Sun) | Data from Monday through the current day when the page is viewed.            |
| Current month          | Data from the first of the month to the current day when the page is viewed. |
| Last month             | Data from the first day to the last day of the previous month.               |
| Last 30 days           | Data from the last 30 days to when the page is viewed.                       |
| Last 90 days           | Data from the last 90 days to when the page is viewed.                       |
| Last year              | Data aggregated for the last 12 months.                                      |
| Custom                 | Data from a custom date range. The range can be up to 100 days including the start and end dates and go back as far as one year. |

{% endrowheaders %}
