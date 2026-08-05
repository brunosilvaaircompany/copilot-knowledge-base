# Delegated alert dismissal

Delegated alert dismissal lets you restrict which users can directly dismiss an alert. When you enable the feature:
* Users with write access to a repository must request to dismiss alerts in that repository.
* Organization owners and security managers can approve or deny dismissal requests, as well as dismiss alerts directly themselves.

Reviewers are notified of dismissal requests via email, and can either approve the request to dismiss the alert, or deny the request to leave the alert open. After a request is reviewed, the requester is notified of the outcome via email.

## Availability

You can enable delegated alert dismissal for:
* Code scanning alerts (available on GitHub.com and GitHub Enterprise Server 3.17+)
* Secret scanning alerts (available on GitHub.com and GitHub Enterprise Server 3.17+)
* Dependabot alerts (available on GitHub.com and GitHub Enterprise Server 3.21+)

## Custom roles for delegated alert dismissal

You can use a custom role to let team members who are not organization owners or security managers respond to dismissal requests and dismiss alerts directly. The custom role needs the following permissions:

* Organization permissions for reviewing and bypassing alert dismissal requests. To find the exact permissions required for a particular product, see [Permissions for organization access](/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles#permissions-for-organization-access).
* Repository permissions to view, dismiss, and reopen alerts. To find the exact permissions required for a particular product, see [Security](/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles#security).

> [!NOTE]
> Adding repository permissions to a custom organization role is currently in public preview and subject to change.


## Next steps

To configure delegated alert dismissal, see:
* [Enable Delegated Alert Dismissal](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/enable-delegated-alert-dismissal)
* [Enable Delegated Dismissal](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts/enable-delegated-dismissal)
* [Enable Delegated Alert Dismissal](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/enable-delegated-alert-dismissal)
