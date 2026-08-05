# Reviewing requests to bypass push protection

## Prerequisites

Before you can review bypass requests, delegated bypass must be enabled for your organization or repositories. See [Enable Delegated Bypass](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/manage-bypass-requests/enable-delegated-bypass).

You can review and manage these requests in security overview.

## Reviewing bypass requests for an organization

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. In the sidebar, under "Requests", click **{% octicon "key" aria-hidden="true" aria-label="key" %} Push protection bypass**.
1. Select the **All statuses** dropdown menu, then click **Open** to view requests that are awaiting review, or that have been approved but for which the commits haven't been pushed to the repository yet.
1. Click the request that you want to review.
1. Review the details of the request.
1. Optionally, add a review comment. The comment will be added to the review request timeline and the secret scanning alert timeline. For example, you may wish to explain the reason for the approval or denial of the request for auditing and reporting reasons, and suggest next steps for the contributor to take.


1. To allow the contributor to push the commit containing the secret, click **Approve bypass request**. Or, to require the contributor to remove the secret from the commit, click **Deny bypass request**.

## Filtering requests

You can filter requests by repository, approver (member who has reviewed the request), requester (contributor making the request), timeframe, and status.

### Filtering by status

The following statuses are assigned to a request:

|Status|Description|
|---------|-----------|
|`Approved`|The request has been approved, but the commit(s) have not yet been pushed to the repository.|
|`Cancelled`|The request has been cancelled by the contributor.|
|`Completed`|The request has been approved and the commit(s) have been pushed to the repository, or the request was rejected.|
|`Denied`|The request has been reviewed and denied.|
|`Expired`|The request has expired. Requests are valid for 7 days.|
|`Open`|The request has not yet been reviewed.|

## Further reading

* [Delegated Bypass](https://docs.github.com/en/code-security/concepts/secret-security/delegated-bypass)
* [Enable Delegated Bypass](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/manage-bypass-requests/enable-delegated-bypass)
