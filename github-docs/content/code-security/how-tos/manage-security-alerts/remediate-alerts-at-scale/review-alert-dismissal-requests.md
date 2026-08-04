# Reviewing alert dismissal requests

## Prerequisites

To receive and manage alert dismissal requests, you need to enable delegated alert dismissal. For an introduction to delegated alert dismissal and enablement instructions for specific features, see:
* [Enable Delegated Alert Dismissal](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/enable-delegated-alert-dismissal)
* [Enable Delegated Dismissal](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts/enable-delegated-dismissal)
* [Enable Delegated Alert Dismissal](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/enable-delegated-alert-dismissal)

## Reviewing requests for an organization

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. In the "Requests" section of the sidebar, click any of the following options to review alert dismissal requests for the relevant feature:
    * {% octicon "key" aria-hidden="true" aria-label="key" %} **Secret scanning alert dismissal**
    * {% octicon "codescan" aria-hidden="true" aria-label="codescan" %} **Code scanning alert dismissal**
    * {% octicon "dependabot" aria-hidden="true" aria-label="dependabot" %} **Dependabot alert dismissal**

1. Optionally, to filter requests by source repository, reviewer, requester, timeframe, or status, use the dropdown menus at the top of the list of requests.
1. Click the request you want to review.
1. Read the contents of the alert, as well as the requester's reasoning for the dismissal request.
1. Next to the dismissal request in the alert timeline, click **Review request**.
1. Provide any comments for the requester in the text box, then select either **Deny request** or **Approve request**.
1. Click **Submit review**.


## Reviewing requests across your enterprise

> [!NOTE] To review an alert dismissal request at the enterprise level, you must be an organization owner or security manager for the source organization, or be granted the necessary permissions through a custom role.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. In the "Requests" section of the sidebar, click any of the following options to review alert dismissal requests for the relevant feature:
    * {% octicon "key" aria-hidden="true" aria-label="key" %} **Secret scanning alert dismissal**
    * {% octicon "codescan" aria-hidden="true" aria-label="codescan" %} **Code scanning alert dismissal**
    * {% octicon "dependabot" aria-hidden="true" aria-label="dependabot" %} **Dependabot alert dismissal**

1. Optionally, to filter requests by source organization, reviewer, requester, timeframe, or status, use the dropdown menus at the top of the list of requests.
1. Click the request you want to review.
1. Read the contents of the alert, as well as the requester's reasoning for the dismissal request.
1. Next to the dismissal request in the alert timeline, click **Review request**.
1. Provide any comments for the requester in the text box, then select either **Deny request** or **Approve request**.
1. Click **Submit review**.
