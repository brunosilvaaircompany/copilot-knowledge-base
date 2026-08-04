# Security overview dashboard metrics

## Dashboard metrics

In security overview, the overview dashboard displays security alert metrics for your organization or enterprise. You can use the dashboard to monitor the health of your application security program, collaborate with engineering teams, and gather data for benchmarking purposes.

The dashboard displays trending data that tracks alert counts and activity over time, as well as snapshot data that reflects the current state. All data and metrics across the dashboard change as you apply filters. By default, the dashboard displays all alerts from GitHub tools, but you can use the tool filter to show alerts from a specific tool (secret scanning, Dependabot, code scanning using CodeQL, a specific third-party tool) or all third-party code scanning tools. See [Filtering Alerts In Security Overview](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/filtering-alerts-in-security-overview).

**Trend indicators** show percentage change compared to the previous period. For example:
* 10 alerts this week vs. 20 alerts last week = 50% decrease
* An average alert age of 15 days vs. 5 days = 200% increase

**Alert severity filtering:** The dashboard only includes alerts with security severity levels: `Critical`, `High`, `Medium`, or `Low`. Non-security alerts (`Error`, `Warning`, or `Note`) are excluded. This may cause the dashboard count to differ from code scanning alert totals. For more information, see [Code Scanning Alerts](https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts#about-alert-severity-and-security-severity-levels).

### Limitations

The data that populates the overview page can and will change over time due to various factors, such as repository deletion or modifications to a security advisory. This means that the overview metrics for the same time period could vary if viewed at two different times. For compliance reports or other scenarios where data consistency is crucial, we recommend that you source data from the audit log. See [Audit Security Alerts](https://docs.github.com/en/code-security/concepts/security-at-scale/audit-security-alerts).

The overview page tracks how security alerts changed over time. However, when you filter by another attribute, such as repository status, it uses that attribute's current value, not its historical value.

For example, archiving a repository closes any open alerts it contains. If you view the overview page for a week before you archived the repository:

* The repository's data only appears if you filter to show archived repositories, because that's the repository's current status.
* The alerts still show up as open, because that reflects their status at that point in time.



## Dashboard structure

The dashboard is divided into three tabs, each focused around a different security goal:

* **Detection:** Shows metrics about the status and age of alerts in your organization or enterprise, the secrets that have been blocked or bypassed, and the top repositories and vulnerabilities that pose the highest potential security risk.
* **Remediation:** Shows metrics about how alerts are resolved and alert activity over time.
* **Prevention:** Shows metrics about how vulnerabilities have been prevented and fixed in pull requests.

> [!NOTE]
> Unlike the **Detection** and **Remediation** tabs which report alerts on the default branch, the **Prevention** tab gives you insights for CodeQL alerts found in merged pull requests.

## Detection metrics

Track the current state of security alerts in your organization or enterprise.

### Open alerts over time

Shows the change in the number of open alerts over the time period you have chosen. By default, alerts are grouped by severity. You can change the way alerts are grouped.

* New alerts are represented on their creation date.
* Alerts that existed before the chosen time period are represented at the start of the period.
* Once an alert is remediated or dismissed, it is not included in the graph. Instead, the alert moves to the closed alerts graph.

### Age of alerts

The average age of all alerts that are still open at the end of the chosen time period.

**Formula:** The age of each open alert is calculated by subtracting the date the alert was created from the date that the chosen time period ends, then averaging across all open alerts.

> [!NOTE]
> For reopened alerts, the age is calculated by subtracting the original creation date rather than the date the alert was reopened.

### Reopened alerts

The total number of open alerts that were reopened during the chosen time period. Only alerts that are open at the end of the reporting period are reported. This includes:

* Alerts that were closed before the chosen time period and remain open at the end of the period.
* Newly created alerts that were closed and then reopened during the chosen time period.
* Alerts that were open at the start of the chosen time period, but closed and then reopened within the same period.

### Secrets bypassed or blocked

Shows the ratio of secrets bypassed to the total secrets blocked by push protection.

* **Bypassed:** Detected secrets that were committed anyway.
* **Successfully blocked:** Total blocked minus bypassed. A secret is considered to have been successfully blocked when it has been corrected and not committed to the repository.

Click **View details** to view the secret scanning report with the same filters and time period selected.

For more information on secret scanning push protection metrics, see [Viewing Metrics For Secret Scanning Push Protection](https://docs.github.com/en/code-security/how-tos/view-and-interpret-data/analyze-organization-data/viewing-metrics-for-secret-scanning-push-protection).

### Impact analysis table

The impact analysis table has separate tabs showing data for: "Repositories," "Advisories," and "SAST vulnerabilities."

* **Repositories tab:** Shows the top 10 repositories with the most open alerts at the end of the chosen time period, ranked by total number of open alerts. For each repository, the total number of open alerts is shown alongside a breakdown by severity.
* **Advisories tab:** Shows the 10 CVE advisories that triggered the most Dependabot alerts at the end of the chosen time period, ranked by total number of open alerts. For each advisory, the total number of open alerts is shown alongside a severity rating.
* **SAST vulnerabilities tab:** Shows the 10 Static Application Security Testing (SAST) vulnerabilities that triggered the most code scanning alerts, ranked by total number of open alerts. For each vulnerability, the total number of open alerts is shown alongside a severity rating.

## Remediation metrics

Track how quickly and effectively alerts are resolved.

### Closed alerts over time

Shows the change in the number of closed alerts over the time period you have chosen. By default, alerts are grouped by severity. You can change the way alerts are grouped. Closed alerts include security alerts that have been successfully remediated or dismissed prior to or during the chosen time period.

* Alerts closed during the time period are represented on the graph on their close date.
* Alerts remediated or dismissed before the chosen time period are represented at the start of the period.

### Mean time to remediate

The average age of all alerts that were remediated or dismissed during the chosen time period. Alerts that were closed as "false positive" are excluded.

**Formula:** The age of each closed alert is calculated by subtracting the date the alert was created from the date that the alert was last closed during the chosen time period, then averaging across all closed alerts.

> [!NOTE]
> For reopened alerts, the age is calculated by subtracting the original creation date rather than the date the alert was reopened.

### Net resolve rate

The rate at which alerts are being closed. This metric is similar to measuring "developer velocity," reflecting the speed and efficiency with which alerts are resolved.

**Formula:** Number of alerts that were closed and remained closed during the chosen time period ÷ Number of alerts created during the time period

> [!NOTE]
> The net resolve rate takes into account any new and any closed alerts during the chosen time period. This means that the set of new alerts and set of closed alerts used for the calculation do not necessarily correspond, since they may represent different populations of alerts.

**Excluded:** Alerts that are reopened and re-closed during the chosen time period are ignored.

### Alert activity graph

Shows alert inflows and outflows over your chosen time period.

* **Green bars:** Number of new alerts created during the segmented time period
* **Purple bars:** Number of alerts closed during the segmented time period
* **Blue dotted line:** Net alert activity (difference between new and closed alerts)

## Prevention metrics

Track vulnerabilities caught and fixed before reaching production.

### Introduced versus prevented

Shows the cumulative number of vulnerabilities that were caught in the developer workflow versus the vulnerabilities introduced over the time period you have chosen.

* **Prevented:** Count of pull request alerts detected by CodeQL that have been fixed for merged pull requests. Dates are based on fix date.
* **Introduced:** Count of new pull request alerts detected by CodeQL that were dismissed as "Risk accepted" or were unresolved at the time the pull request was merged. Dates are based on creation date.

### Vulnerabilities fixed in pull requests

The count of pull request alerts detected by CodeQL or secret scanning with a close reason of "Fixed" that are tied to a merged pull request.



### Pull request alerts fixed with Copilot Autofix suggestions

Shows the ratio of accepted Copilot Autofix suggestions to the total number of Copilot Autofix suggestions on pull request alerts detected by code scanning.

Copilot Autofix for code scanning provides targeted recommendations to help you fix code scanning alerts. See [Security And Quality Ai Features](https://docs.github.com/en/code-security/responsible-use/security-and-quality-ai-features).
