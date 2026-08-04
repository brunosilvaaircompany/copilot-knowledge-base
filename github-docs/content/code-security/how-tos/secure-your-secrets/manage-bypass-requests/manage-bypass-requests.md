# Managing requests to bypass push protection

When delegated bypass for push protection is enabled, designated reviewers can approve or deny requests from contributors who want to push commits containing secrets.

This article explains how to review and manage bypass requests for repositories and organizations.

For more information about how bypass requests work, see [Bypass Requests](https://docs.github.com/en/code-security/concepts/secret-security/bypass-requests).

## Managing requests for a repository

1. On GitHub, navigate to the main page of the repository.

1. Under the repository name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab. If you cannot see the "{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality" tab, select the **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="kebab-horizontal" %}** dropdown menu, and then click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**.

1. In the left sidebar, under "Requests," click **Push protection bypass**.

1. Select the **All statuses** dropdown menu, then click **Open** to view requests that are awaiting review, and those that have been approved but for which the commits haven't been pushed to the repository yet.
1. Click the request that you want to review.
1. Review the details of the request.
1. Optionally, add a review comment. The comment will be added to the review request timeline and the secret scanning alert timeline. For example, you may wish to explain the reason for the approval or denial of the request for auditing and reporting reasons, and suggest next steps for the contributor to take.


1. To allow the contributor to push the commit containing the secret, click **Approve bypass request**. Or, to require the contributor to remove the secret from the commit, click **Deny bypass request**.

## Managing requests for an organization

Organization owners, security managers and organization members with the relevant fine-grained permission (via a custom role) can review and manage bypass requests for all repositories in the organization using security overview. See [Review Bypass Requests](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/manage-bypass-requests/review-bypass-requests).

## Filtering requests

You can filter requests by:

* Approver (member of the bypass list)
* Requester (contributor making the request)
* Timeframe
* Status

### Filtering by status

The following statuses are assigned to a request:

|Status|Description|
|---------|-----------|
|`Cancelled`| The request has been canceled by the contributor.|
|`Completed`|The request has been approved and the commit(s) have been pushed to the repository.|
|`Denied`|The request has been reviewed and denied.|
|`Expired`| The request has expired. Requests are valid for 7 days. |
|`Open`| The request has either not yet been reviewed, or has been approved but the commit(s) have not been pushed to the repository.  |

## Further reading

* [Delegated Bypass](https://docs.github.com/en/code-security/concepts/secret-security/delegated-bypass)
* [Enable Delegated Bypass](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/manage-bypass-requests/enable-delegated-bypass)
* [Review Bypass Requests](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/manage-bypass-requests/review-bypass-requests)
