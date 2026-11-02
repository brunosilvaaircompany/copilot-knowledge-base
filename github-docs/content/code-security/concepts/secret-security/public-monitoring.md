# Public monitoring for secret scanning

## About public monitoring

GitHub monitors for secrets leaked across GitHub in real time. Public monitoring attributes publicly exposed secrets back to your enterprise, based on where your people commit.

Secret scanning detects secrets in repositories that your enterprise owns. Public monitoring extends this detection to secrets found in arbitrary public repositories across GitHub, regardless of whether or not your enterprise owns the repository where they were leaked.

This gives enterprise security administrators visibility into credential exposure they wouldn't otherwise be aware of, helping identify potential risks and leaked secrets which could be exploited by bad actors.

## How public monitoring works

Public monitoring scans public repositories across GitHub, including non-code content such as issue and pull request comments, and gists. It detects secrets associated with your enterprise. When a secret is detected, an alert is surfaced in the enterprise-level security overview.

### Attribution methods

Public monitoring uses two methods to associate detected secrets with your enterprise:

* **Enterprise membership:** Secrets leaked by users who are members of your enterprise. This method isn't available for enterprises on GitHub Enterprise Cloud with data residency, because tenant isolation means enterprise membership rosters aren't shared with GitHub.
* **Verified domain matching:** Secrets leaked by users whose email address matches a verified domain of your enterprise, even if they are not direct enterprise members.

Both methods are active when public monitoring is enabled, except for the data residency limitation noted above.

### Alert triage and integrations

Public monitoring includes tools to help security teams triage alerts and connect findings to existing security workflows:

* **Alert management:** Dismiss and reopen alerts, add comments to record decisions, and review each alert's activity timeline.
* **Filtering:** Filter alerts by repository, committer, secret type, attribution method, or state.
* **Validity checks:** For supported secret types, review the `active`, `inactive`, or `unknown` status of a detected credential.
* **Integrations:** Use the REST API to work with alerts programmatically. Use enterprise webhook events to connect public monitoring activity to your existing security workflows.

For API details, see [List public monitoring alerts for an enterprise](/rest/secret-scanning/secret-scanning#list-public-monitoring-alerts-for-an-enterprise). For webhook payload details, see the [`<TOKEN_REDACTED>` event](/webhooks/webhook-events-and-payloads#<TOKEN_REDACTED>).

For more information about viewing and triaging alerts, see [Viewing Public Monitoring Alerts](https://docs.github.com/en/code-security/how-tos/view-and-interpret-data/analyze-organization-data/viewing-public-monitoring-alerts).

## Requirements

To use public monitoring, your enterprise must:

* Have GitHub Advanced Security or GitHub Secret Protection enabled
