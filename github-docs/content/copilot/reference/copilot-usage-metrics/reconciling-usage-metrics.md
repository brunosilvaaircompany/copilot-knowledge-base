# Reconciling Copilot usage metrics across dashboards, APIs, and reports

The Copilot usage metrics dashboard, APIs, and export files all use the same underlying telemetry data, but they aggregate and present it differently. Understanding these differences helps you reconcile numbers across sources and trust your analysis when preparing internal reports.

* The Copilot usage metrics dashboards are available at the **enterprise** and **organization** level.
* The Copilot usage metrics APIs support **enterprise-, organization-, repository-, and user-level** records.
* Team-level totals are not pre-aggregated. They are constructed by joining the user-teams report with the per-user usage metrics report. See [Team Level Metrics](https://docs.github.com/en/copilot/reference/copilot-usage-metrics/team-level-metrics).
* Repository-level reports provide daily pull request activity for repositories with activity on the requested day. See [Copilot Usage Metrics](https://docs.github.com/en/copilot/reference/copilot-usage-metrics/copilot-usage-metrics#repository-level-fields-api-only).

## Prerequisite

IDE-based Copilot usage metrics depend on **telemetry from users' IDEs**. If a developer has disabled telemetry in their IDE, their detailed IDE-based Copilot activity, such as per-IDE, per-feature, and lines-of-code breakdowns, will **not** appear in the dashboard, API reports, or exported data. However, server-side telemetry may still surface these users in your active user counts even when client telemetry is unavailable.

If you notice missing users or unexpectedly low adoption numbers, verify IDE telemetry settings before troubleshooting other causes.

Copilot CLI metrics (`daily_active_cli_users` and `totals_by_cli`) are collected and reported separately from IDE telemetry. CLI usage does **not** contribute to IDE-based active user counts or other IDE metrics.

Do not reconcile `totals_by_3rd_party_agent[].user_initiated_interaction_count`, which counts user-initiated agent app jobs, with the top-level `user_initiated_interaction_count`, which counts explicit prompts from other supported telemetry.

## Metric alignment

The dashboard and APIs use shared definitions for key metrics:

| Concept | Dashboard metric | API or export field | Notes |
|:--|:--|:--|:--|
| Active users | Daily/weekly/total active users | `user_initiated_interaction_count` > 0 | A user is considered active if they interacted with Copilot in their IDE on that day. |
| Acceptance rate | Code completion acceptance rate | `code_acceptance_activity_count` ÷ `code_generation_activity_count` | Both sources calculate acceptance rate the same way, though rounding may differ. |
| Agent adoption | Agent adoption chart | `totals_by_feature` where feature = “agent” | Reflects users who interacted with the Copilot agent. |
| Language usage | Language usage charts | `totals_by_language_feature` or `totals_by_language_model` | The dashboard visualizes these aggregated fields. |
| Adoption cohort/phase | Adoption cohort distribution (impact dashboard) | `ai_adoption_phase`, `totals_by_ai_adoption_phase` | The dashboard and API read the same underlying field, so cohort counts should match between them. Users displayed as "Passive users" in the dashboard correspond to the `No Cohort` value in `totals_by_ai_adoption_phase`, and are included in that array like any other phase, so cohort percentages reflect all licensed users, not just those in Phase 1–3. |

For complete field descriptions, see [Copilot Usage Metrics](https://docs.github.com/en/copilot/reference/copilot-usage-metrics).

## Discrepancies between reports

Small differences between dashboard data, API reports, and exports are expected. These variations are usually caused by differences in time windows, scope, or data freshness.

### Time windows

Each data source aggregates data differently.

| Source | Time window | Aggregation method |
|:--|:--|:--|
| Dashboard | 28-day rolling window | Metrics are aggregated continuously over the past 28 days to smooth fluctuations. |
| APIs | Daily | Each record represents a single day per user, enabling daily trend analysis. |
| NDJSON exports | Daily | Mirrors API output for BI tools and long-term reporting. |

Aligning your reporting period with the dashboard’s 28-day window ensures consistent comparisons.

### Delayed telemetry

Because IDE telemetry is processed asynchronously, data for recent days may appear incomplete or missing. Data typically finalizes within three full UTC days. Apparent drops in recent daily metrics often resolve once telemetry is fully processed.

### Export timing

NDJSON files reflect data available at the time of export. If a file is downloaded before new telemetry is processed, the data may lag behind the dashboard or API. Re-exporting the file after the three-day window provides the most accurate view.

## `Unknown` values

The value `Unknown` appears in some API or export breakdowns when telemetry from the IDE client lacks sufficient detail to categorize the activity. This is expected behavior and does not indicate missing data.

| Breakdown | Explanation |
|:--|:--|
| Language | Shown as `Unknown` when the IDE cannot identify the programming language of the active file. |
| Feature | Appears when an older client sends a generic event without specifying a chat mode (for example, `chat_panel_unknown_mode`). |
| Model | Appears when the event lacks information identifying the model used. Some internal models (for example, `gpt-4o-mini`) may appear alongside `Unknown` when used for non-user-facing operations such as summarization or intent detection. |

`Unknown` values are excluded from dashboard visualizations but appear in API and NDJSON data for completeness. The amount of `Unknown` data decreases as users upgrade to newer IDE and extension versions that send richer telemetry.

## Users surfaced by server-side telemetry

Copilot usage metrics combine client-side and server-side telemetry to identify active users. Users confirmed as active through server-side telemetry, but for whom no client telemetry was received, are included in your active user totals (such as `daily_active_users`). When available, these users may also appear in `totals_by_ide` (and in per-user reports this includes the most recently detected IDE and Copilot extension versions). However, other dimensional breakdowns (`totals_by_feature`, `totals_by_language_feature`, `totals_by_language_model`, `totals_by_model_feature`) and lines-of-code metrics will still be empty.

This means your top-level active user counts may be higher than the sum of users reflected in the breakdown arrays. This is expected behavior and does not indicate a data error.
