# Coverage and requirements for Copilot usage metrics

Copilot usage metrics combine client-side and server-side telemetry. Coverage varies by surface and report.

## Included activity

Usage metrics include IDE, Copilot CLI, and agent apps activity.

Metrics broken down by agent app are available in the usage metrics APIs and NDJSON exports, but not in the usage metrics dashboards. Activity from agent apps is already included in daily, weekly, and monthly active-user totals through server-side telemetry. These breakdowns do not change the active-user totals.

Detailed IDE breakdowns depend on client-side telemetry. Server-side telemetry can identify active users that client-side telemetry misses, but can't provide all the same breakdowns. For missing-data troubleshooting and an explanation of how these sources affect totals, see [Reconciling Usage Metrics](https://docs.github.com/en/copilot/reference/copilot-usage-metrics/reconciling-usage-metrics).

## IDE and client coverage

IDE-based metrics describe activity in supported editors, not Copilot Chat on GitHub.com or GitHub Mobile activity.

However, the usage metrics APIs and exports also provide server-side client metrics in `totals_by_client`. These metrics count successful model requests through the Copilot API. Known client values include `github_web` and `github_mobile`, so these surfaces aren't excluded from all usage metrics reports. Client request counts aren't equivalent to IDE activity or prompt counts. See [Copilot Usage Metrics](https://docs.github.com/en/copilot/reference/copilot-usage-metrics/copilot-usage-metrics#client-metrics-fields).

## License and seat data

License and seat management data aren't included in usage metrics reports. To view or manage license assignments, use the Copilot user management API, which is the source of truth for license and seat information. See [Copilot User Management](https://docs.github.com/en/rest/copilot/copilot-user-management).

## Supported IDEs

For detailed IDE-based usage metrics, end users must enable IDE telemetry and use the following minimum IDE and Copilot Chat extension versions.

Older versions may not send all the events that usage metrics rely on, or may attribute activity to the wrong IDE. Keep IDEs and Copilot extensions current, and use device management tooling to enforce these minimum versions where possible.

| IDE | Minimum IDE version | Minimum Copilot Chat extension version |
|:--|:--|:--|
| Eclipse | 4.31 | 0.9.3.202507240902 |
| JetBrains / IntelliJ | 2024.2.6 | 1.5.52-241 |
| Visual Studio | 17.14.13 | 18.0.471.29466 |
| VS Code | 1.107.1 | 0.35.3 |
| Xcode | 14.3.1 | 0.40.0 |

In per-user reports, each `totals_by_ide` entry includes `last_known_ide_version` and `last_known_plugin_version`. Use these fields to identify developers who need to update.

### Version requirements for SDK-based agent activity

Some IDEs run Copilot agent sessions through the Copilot SDK. Some versions of these IDEs don't identify themselves when they send agent activity, so that activity is left out of usage metrics. This causes agent interactions and agent lines of code to be undercounted. To include this activity, end users must use one of the following versions or later:

| IDE | Minimum version for SDK-based agent activity | Affected versions |
|:--|:--|:--|
| VS Code | 1.139.0 | 1.134 through 1.138, when using the agent window |
| Copilot plugin for JetBrains IDEs | 1.20.0 | 1.15.0 through 1.19.x |
| Visual Studio | 18.12 | Insiders (preview) builds before 18.12 |

If you're planning IDE updates, move developers directly to these versions or later. Generally available versions of Visual Studio aren't affected.

For JetBrains IDEs, avoid Copilot plugin versions 1.15.0 through 1.19.x.

Eclipse and Xcode don't run agent sessions through the Copilot SDK, so they aren't affected.

Missing data can't be backfilled, because activity from affected versions doesn't identify which IDE it came from.

Some of this activity was counted as Copilot CLI activity instead, which can inflate Copilot CLI metrics. This clears up as developers update the affected IDEs, but earlier Copilot CLI metrics can't be corrected. Copilot CLI users don't need to update.

This issue affects only how activity is attributed in usage metrics. Billing is not affected.
