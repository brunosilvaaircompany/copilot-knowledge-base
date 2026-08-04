# Measuring the success of a GitHub Copilot trial

When you run a Copilot trial, the key to success is understanding how teams adopt and use Copilot.
By combining insights from the Copilot usage metrics dashboard and API, you can assess early results, identify enablement needs, and decide whether to expand rollout.

This tutorial shows you how to:

1. Define clear trial goals and success criteria.
1. View and interpret adoption and engagement data in the dashboard.
1. Evaluate your trial results.
1. Incorporate qualitative feedback from developers.
1. Extend your evaluation through the Copilot usage metrics API.
1. Decide whether to expand rollout.

## Step 1: Define your trial goals

Before analyzing metrics, decide what outcomes will define a successful trial for your organization. Setting clear goals makes it easier to interpret results and communicate value to stakeholders.

| Example goal | What success looks like | Related metrics |
|:--|:--|:--|
| Adoption | Most licensed developers activate and use Copilot regularly. | Total active users, daily active users (DAU), weekly active users (WAU) |
| Engagement | Developers explore multiple features and modes. | Requests per chat feature, agent adoption |
| Productivity and satisfaction | Developers report efficiency gains and trust in suggestions. | Acceptance rate, internal feedback, satisfaction surveys |
| Enablement effectiveness | Teams understand how and when to use Copilot. | Breadth of usage across languages and IDEs |

## Step 2: View adoption and engagement metrics in the dashboard


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. Click the **Insights** tab.


The dashboard shows 28 days of aggregated IDE telemetry data for all licensed users. Focus on these **key metrics** during your trial:

| Metric | What it shows | Why it matters |
|:--|:--|:--|
| Total active users | Number of developers who used Copilot at least once during the trial period. | Indicates license activation and overall reach. |
| Daily active users (DAU) | Number of unique users active each day. | Reveals early adoption trends—whether interest is growing, stable, or declining. |
| Agent adoption | Percentage of active users who used the Copilot agent. | Shows depth of engagement and exploration beyond basic completions. |
| Acceptance rate | Percentage of Copilot suggestions accepted. | Reflects relevance and trust—key indicators of value and user satisfaction. |
| Language and model usage | Distribution of programming languages and models used. | Helps identify where Copilot delivers the most value across teams. |

> [!NOTE]
> Copilot usage metrics primarily reflect activity in supported IDEs. Server-side telemetry supplements client-side IDE telemetry to surface additional active users. Usage in Copilot Chat on GitHub.com, GitHub Mobile, Copilot code review, or Copilot CLI is not included in dashboard data.


> [!TIP]
> Total active users and DAU show whether developers are using Copilot at all, but not how deeply. For a signal that tracks whether trial usage is deepening over time, such as developers progressing from completions to agent workflows, see [View Impact Dashboard](https://docs.github.com/en/copilot/how-tos/administer-copilot/view-impact-dashboard).

## Step 3: Evaluate your trial results

Compare your dashboard data to your trial goals. Common success indicators include:

| Goal | What to measure | Signs of success |
|:--|:--|:--|
| License activation | Total active users | 70–90% of trial licenses show usage within the first month. |
| Sustained engagement | Daily and weekly active users | DAU and WAU stabilize or increase over time. |
| Breadth of usage | Requests per chat feature, language usage | Users experiment across multiple languages and features. |
| Depth of usage | Agent adoption, acceptance rate | Developers are exploring advanced Copilot capabilities. |
| Positive feedback | Team surveys or internal feedback | Developers report productivity gains or workflow improvements. |

If one or more goals aren’t met, consider whether additional enablement, communication, or IDE configuration might be needed before expanding the rollout.

## Step 4: Incorporate qualitative feedback

While adoption and engagement are quantitative, satisfaction metrics help you understand perceived value and developer sentiment. Consider incorporating the following sources of feedback, from outside GitHub, into your analysis.

| Source | Description |
|:--|:--|
| Copilot satisfaction surveys | Periodic feedback from developers about usefulness, trust, and productivity. |
| Internal feedback channels | Team retrospectives or pulse surveys about workflow changes and perceived speed gains. |
| Support trends | Fewer “how do I…” questions over time often indicates increased confidence and satisfaction. |

Combining usage metrics with developer feedback gives the most complete view of Copilot’s impact.

## Step 5: Extend your evaluation through the Copilot usage metrics API

After your trial, you can continue monitoring adoption and engagement through the Copilot usage metrics API. The API gives you more control over what data you collect and how often you analyze it.

### Retrieve enterprise-wide data

You can use the Copilot usage metrics endpoints to download 28-day usage reports for your enterprise. These reports include the same dataset shown in the Copilot usage metrics dashboard. The API provides two endpoints.

| Endpoint | Description |
|:--|:--|
| `GET /enterprises/{enterprise}/copilot/metrics/reports/enterprise-28-day/latest` | Returns a signed download link for the latest 28-day **enterprise-level** usage report. |
| `GET /enterprises/{enterprise}/copilot/metrics/reports/users-28-day/latest` | Returns a signed download link for the latest 28-day **user-level** usage report. |

Each endpoint response includes time-limited signed URLs for downloading the reports from Azure Blob Storage, along with the reporting period covered by the file.

Example response:

```json
{
  "download_links": [
    "https://example.com/copilot-usage-report.ndjson"
  ],
  "report_start_day": "2025-07-18",
  "report_end_day": "2025-08-14"
}
```

For complete field definitions, see [Copilot Usage Metrics](https://docs.github.com/en/copilot/reference/copilot-usage-metrics).

### Automate your reporting

To automate your reporting, you can set up a scheduled job to call the API at regular intervals (e.g., daily or weekly) and store the results in a database or data warehouse for further analysis. This allows you to track trends over time and generate custom reports as needed.

## Step 6: Decide whether to expand rollout

Use your findings from the dashboard and API data to make an informed decision about expanding Copilot usage.

| Decision area | Questions to ask | Supporting metrics |
|:--|:--|:--|
| Adoption | Are most trial users active? Have they continued using Copilot consistently? | Total active users, DAU, WAU |
| Enablement needs | Do teams need more guidance or resources? | Low or inconsistent usage across languages or models |
| Engagement | Are developers exploring features beyond basic completions? | Agent adoption, chat requests per feature |
| Satisfaction | Are teams finding Copilot valuable? | Acceptance rate, feedback from surveys |

Document your findings and share them with stakeholders to inform the next phase of your rollout.

## Next steps

Now that you know how to measure the success of your Copilot trial, you can continue to monitor adoption and engagement as you expand usage. To learn more about driving adoption and enabling developers, see [Drive Adoption](https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/enable-developers/drive-adoption). To track adoption depth and connect spend to pull request output as you scale beyond the trial, see [View Impact Dashboard](https://docs.github.com/en/copilot/how-tos/administer-copilot/view-impact-dashboard).
