# Viewing GitHub Actions metrics for your organization

## About GitHub Actions metrics

GitHub Actions metrics provide insights into how your workflows and jobs are performing at the organization and repository levels. There are two types of metrics to help you analyze different aspects of your workflows:
* **GitHub Actions usage metrics:** Usage metrics help you track how many minutes your workflows and jobs consume. You can use this data to understand the cost of running Actions and ensure you're staying within your plan limits. This is especially useful for identifying high-usage workflows or repositories.
* **GitHub Actions performance metrics:** Performance metrics focus on the efficiency and reliability of your workflows and jobs. With performance metrics, you can monitor key indicators like job run times, queue times, and failure rates to identify bottlenecks, slow-running jobs, or frequently failing workflows.


## Enabling access to GitHub Actions metrics
  
Organization owners can create custom organization roles to allow people to view GitHub Actions usage metrics for their organization. To provide users with access, select the "View organization Actions metrics" role when creating a custom organization role. For more information, see [Permissions Of Custom Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles).


## About GitHub Actions usage metrics

GitHub Actions usage metrics enable you to analyze how your organization is using Actions minutes. You can view usage information related to:

* **Workflows**. View usage data for each workflow in your organization, and use this information to identify opportunities for optimization, such as refactoring a workflow or using a larger runner.
* **Jobs**. See which jobs are the most resource-intensive and where they are running.
* **Repositories**. Get a high-level snapshot of each repository in your organization and their volume of Actions minutes usage.
* **Runtime OS**. Understand how runners for each operating system are using Actions minutes and what types of operating systems your workflows are running on most often.
* **Runner type**. Compare how your self-hosted runners and GitHub-hosted runners use Actions minutes and the volume of workflow runs for each type of runner.


GitHub Actions usage metrics do not apply minute multipliers to the metrics displayed. While they _can_ help you understand your bill, their primary purpose is to help you understand how and where Actions minutes are being used in your organization.

For more information about minute multipliers, see [GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions#baseline-minute-costs).

## About GitHub Actions performance metrics


GitHub Actions performance metrics enables you to analyze the efficiency and reliability of your workflows. You can view performance information such as average run times, average queue times, and failure rates, related to:

* **Workflows**. View performance data for each workflow in your organization, including average run time and job failures. Use this information to identify inefficient workflows and run stability.
* **Jobs**. View performance data for each individual job to, including average run time, average queue time, and job failures. Use this information to identify inefficient jobs.
* **Repositories**. Get a high-level snapshot of each repository in your organization and their average performance metrics.
* **Runtime OS**. Understand how runners for each operating system are performing.
* **Runner type**. Compare the performance of self-hosted runners and GitHub-hosted runners, to make decisions about runner types.


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
