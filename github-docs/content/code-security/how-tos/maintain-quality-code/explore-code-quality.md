# Exploring GitHub Code Quality results in your organization

## Prerequisites

* If your organization belongs to an enterprise, an enterprise owner must enable Code Quality for your organization. See [Allow GitHub Code Quality In Enterprise?Utm_Campaign=Code Quality Ga July 2026&Utm_Medium=Docs&Utm_Source=Docs Explore Cq Enterprise Enablement](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/allow-github-code-quality-in-enterprise?utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-explore-cq-enterprise-enablement).
* Your organization must have repositories with Code Quality enabled. See [Enable Code Quality?Utm_Campaign=Code Quality Ga July 2026&Utm_Medium=Docs&Utm_Source=Docs Explore Cq Repo Enablement](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/enable-code-quality?utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-explore-cq-repo-enablement).

## Viewing code quality insights for your organization

The organization-level dashboard has two tabs:

* The **Health** tab shows a snapshot of your organization's current code health.
* The **Trends** tab shows how open findings have changed over a selected period of time, so you can track progress and identify repositories that need attention.

1. On GitHub, navigate to the main page of your organization. For example, from [https://github.com/settings/organizations](https://github.com/settings/organizations?ref_product=github&ref_type=engagement&ref_style=text&utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-explore-cq-org-settings).
1. Under your organization name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. In the "Insights" section of the sidebar, click **{% octicon "code-square" aria-hidden="true" aria-label="code review" %} Code quality**.

> [!NOTE]
> What you see on the dashboard depends on your access:
>
> * Organization owners see data for **every** repository that has Code Quality enabled.
> * All other organization members see data only for repositories where they can view Code Quality findings (the repository-level pages), up to a maximum of 3,000 repositories.

## Filtering dashboard data

A filter bar at the top of the dashboard applies to both the **Health** and **Trends** tabs. You can filter by:

* Reliability score
* Maintainability score
* Standard findings
* AI findings
* Topic
* Team
* Visibility
* Any custom properties defined for your organization

You can also sort the dashboard data using the **Sort** control in the same filter bar.

## Viewing current code health

The **Health** tab shows a snapshot of your organization's code health right now.

### Interpreting the score distribution chart

The score distribution chart provides a visual overview of the code health of your organization. Each bubble represents a collection of repositories with the same maintainability and reliability scores.

* The **position** of each bubble demonstrates the overall health of those repositories. Higher bubbles represent higher maintainability scores, while bubbles further to the right represent higher reliability scores.
* The **color and border pattern** of a bubble indicate the severity of the lower score for those repositories. For example, a bubble with a "Poor" score in either category will always be red with a dashed border.
* The **size** of each bubble represents the number of repositories with that particular score combination.

To view the maintainability score, reliability score, and number of repositories represented by a particular bubble, hover over the bubble.

### Exploring the repository table

Below the bubble chart, there is a table that lists all repositories in your organization. Here, you can view code quality findings, along with more detailed information about those findings.

You can sort the repository table in ascending or descending order for any column by clicking the column header.

### Investigating low-scoring repositories

1. To filter the dashboard data for the lowest-performing repositories, on the score distribution chart, click the bubble with the lowest combined scores.
1. Scroll down to the repository table. By default, the table is sorted from most to least recent repository scan, helping you prioritize current quality issues.
1. Optionally, to prioritize repositories with the highest number of CodeQL findings, click **Standard findings** twice.
1. To view the repository-level dashboard for a specific repository, click the repository's name.

## Tracking quality trends over time

The **Trends** tab shows how open findings across repositories that you have access to and that match the current filters have changed over time, so you can tell whether your code quality work is having an effect and where to focus attention next.

1. On the organization-level dashboard, click the **Trends** tab.
1. Use the **Period** dropdown to select a time range: the last 7, 14, or 30 days.
1. Review the "Open findings over time" graph, which shows the total number of open findings across applicable repositories for the selected period.
1. Optionally, use the buttons above the graph to group the data by **Health score** or **Severity**.
1. Hover over a point on the graph to see the open finding count for that day.

### Understanding the trends data

Keep the following in mind when you interpret the graph:

* The graph is based on daily snapshots of open findings. If no analysis ran on a given day, there may be no data point for that day.
* Historical data is only available from when Code Quality started taking snapshots, so the available time range may initially be limited.
* The graph tracks the total count of open findings, not individual findings being opened or fixed. A change in the count doesn't necessarily mean developers fixed or introduced problems.
* Enabling Code Quality on additional repositories can increase the finding count shown in the graph. An increase after enabling new repositories doesn't necessarily mean code quality is declining.
* The graph tracks the total count of open findings for the repositories you are currently filtering on. The total count includes:

  * New findings that are introduced by code changes or when code quality analysis is enabled on new repositories
  * Findings that are fixed in the code or dismissed by users

## Identifying repositories that need attention

Below the trends graph, two tables help you identify which repositories need attention over the selected time period:

* **Most improved repositories** lists repositories with the largest decrease in open findings over the selected time period.
* **Repositories needing improvement** lists repositories with the largest increase in open findings over the selected time period.

Both tables include the following columns:

* **Repository**: The name of the repository.
* **Total open**: The number of open findings for the repository at the end of the selected time period.
* **Net change**: How the open finding count for the repository has changed over the selected time period.
* **Dismissed**: How many findings were dismissed for the repository over the selected time period.

The number of findings for a repository is affected by findings being fixed and dismissed. You can use the repository-level dashboard to confirm what changed.

To investigate a repository, click its name to open its repository-level Code Quality dashboard, where you can review individual findings and take remediation action.

## Next steps

To understand the code health information available on the repository-level dashboard, see [Interpret Results](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/interpret-results).

If you're planning to enable Code Quality across many repositories, see [Roll Out At Scale](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/roll-out-at-scale).
