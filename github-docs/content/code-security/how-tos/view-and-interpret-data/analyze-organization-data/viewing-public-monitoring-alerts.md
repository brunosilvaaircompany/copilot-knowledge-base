# Viewing and managing public monitoring alerts

> [!NOTE]
> Public monitoring for secret scanning is currently in public preview and subject to change. If you have feedback, please join the [discussion](https://github.com/orgs/community/discussions/categories/code-security).


## About the public monitoring page

The **Public monitoring** page is a dedicated view within the enterprise-level security overview. It displays alerts for secrets detected in public repositories across GitHub that are attributed to your enterprise members or users with an email matching your enterprise's verified domain.

> [!NOTE]
> The Public monitoring page is available at the enterprise level only. It is not available at the organization level.

## Prerequisites

Public monitoring must be enabled for your enterprise. See [Enabling Public Monitoring For Your Enterprise](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/manage-your-coverage/enabling-public-monitoring-for-your-enterprise).

## Viewing public monitoring alerts


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**.

1. In the left sidebar, click **{% octicon "key" aria-hidden="true" aria-label="key" %} Public monitoring**.

   The alert list shows each detected secret with the following details:

   * The type of secret detected (for example, "Google API Key")
   * A partial secret value
   * Who the leak is attributed to and in which public repository
   * How long ago the secret was detected

1. Click an alert to open the detail panel. The panel includes:
   * The date the secret was committed
   * The full secret literal
   * Attribution details, including the committer's username and email
   * The file location where the secret was detected, with the secret highlighted in context
   * A **Recommendations** tab with suggested remediation steps

## Dismissing and reopening alerts

When you have reviewed an alert, you can dismiss it to remove it from the list of open alerts. If you need to revisit a dismissed alert later, you can reopen it. When you dismiss or reopen an alert, you can add an optional comment to record the reason for your decision.

Dismissing alerts you have already triaged helps you manage a high volume of public monitoring alerts, keeping the active list focused on the exposures that still need attention.

### Dismissing an alert


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**.

1. In the left sidebar, click **{% octicon "key" aria-hidden="true" aria-label="key" %} Public monitoring**.
1. Click the alert you want to dismiss.
1. Select the **Close as** dropdown menu, then click a reason for dismissing the alert.
1. Optionally, in the comment field, add a dismissal comment.
1. To confirm, click **Dismiss**.

### Reopening an alert


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**.

1. In the left sidebar, click **{% octicon "key" aria-hidden="true" aria-label="key" %} Public monitoring**.
1. To view closed alerts, click **Closed**, then click the alert you want to reopen. 
1. Click **Reopen alert**.
1. Optionally, in the comment field, type a reason for reopening the alert.
1. To confirm, click **Reopen**.
