# Viewing the Copilot usage metrics dashboard

After your initial rollout, the Copilot usage metrics dashboard helps you monitor how usage evolves over time. By exploring adoption, feature, model, and language trends, you can see how developers are engaging with Copilot and identify areas where additional enablement or communication may drive deeper value.

## Prerequisite

To access Copilot usage metrics, the **"Copilot usage metrics"** policy must be enabled:

* [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies#defining-policies-for-your-enterprise)
* [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies#enabling-copilot-features-and-models-in-your-organization)


## Accessing the dashboard


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. Click the **Insights** tab.

1. In the left sidebar, click **Copilot usage**.

Data in the dashboard is primarily based on IDE telemetry and is supplemented by server-side telemetry to capture additional active users. Data may appear up to three full UTC days behind the current date. See [Copilot Metrics](https://docs.github.com/en/copilot/concepts/copilot-usage-metrics/copilot-metrics).

## Using Copilot Chat to analyze exported data

For deeper analysis, you can export NDJSON reports from the dashboard and use Copilot Chat to explore the data in more detail. For example, you can ask:

```copilot copy prompt
* Which users have `user_initiated_interaction_count` > 0 but low `code_acceptance_activity_count`?
* Are there specific teams with lower adoption rates?
```
