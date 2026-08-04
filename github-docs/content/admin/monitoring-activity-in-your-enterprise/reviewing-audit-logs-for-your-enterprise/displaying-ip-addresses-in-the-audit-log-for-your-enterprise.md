# Displaying IP addresses in the audit log for your enterprise

## About display of IP addresses in the audit log

By default, GitHub does not display the source IP address for events in your enterprise's audit log. Optionally, to ensure compliance and respond to threats, you can display the full IP address associated with the actor responsible for each event. Actors are typically users, but can also be apps or integrations.


You are responsible for meeting any legal obligations that accompany the viewing or storage of IP addresses displayed within your enterprise's audit log.

If you choose to display IP addresses for your enterprise account, IP addresses for **new and existing events** will appear in both your enterprise's audit log and the audit log of every organization owned by your enterprise. Alternatively, you can enable the display of IP addresses in the audit log for individual organizations. For more information, see [Displaying Ip Addresses In The Audit Log For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/displaying-ip-addresses-in-the-audit-log-for-your-organization).

You can display IP addresses in the audit log regardless of which authentication method you use for your enterprise on GitHub. For more information, see [Identity And Access Management Fundamentals](https://docs.github.com/en/admin/concepts/identity-and-access-management/identity-and-access-management-fundamentals).

When anyone creates an account on GitHub, the person agrees to GitHub's collection of basic information about connections to GitHub's services, including source IP address. For more information, see [GitHub General Privacy Statement](https://docs.github.com/en/free-pro-team@latest/site-policy/privacy-policies/github-general-privacy-statement).


## Events that display IP addresses in the audit log

GitHub displays an IP address in the audit log when a member of the enterprise interacts with a resource owned by your enterprise or an organization in your enterprise. For example, you will see an IP address for audited events involving an internal or private repository owned by an organization in your enterprise, or resources associated with those repositories, such as an issue, pull request, action, or project.

If members of your enterprise access your GitHub Enterprise Server instance with personal accounts that they manage, because you do not use Enterprise Managed Users, GitHub does not display an event or IP address in the audit log for the following actions.

* Authentication to your GitHub Enterprise Server instance
* Interactions with a resource owned by the personal account, including a repository, gist, or project
* Interactions with a public repository owned by an organization in your enterprise

GitHub does not display IP addresses in the audit log for `api.request` events that do not have repository context, such as requests triggered by GraphQL or requests to endpoints that reference only a user or organization.

GitHub does not display IP addresses in the audit log for certain events where the actor recorded in the audit log differs from the person or system that performed the action. GitHub also does not display IP addresses when a bot or automated system performs the action.

## Enabling display of IP addresses in the audit log


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Audit log**.

1. On the **Settings** tab, under "Disclose actor IP addresses in audit logs", select **Enable source IP disclosure**.

1. Click **Save**.

After you enable the feature, you can access the audit log to view events that include IP addresses. For more information, see [Accessing The Audit Log For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise).
