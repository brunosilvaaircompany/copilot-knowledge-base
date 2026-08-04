# Displaying IP addresses in the audit log for your organization

> [!NOTE]
> Displaying IP addresses in the audit log for an organization is in public preview and subject to change.

## About display of IP addresses in the audit log

By default, GitHub does not display the source IP address for events in your organization's audit log. Optionally, to ensure compliance and respond to threats, you can display the full IP address associated with the actor responsible for each event. Actors are typically users, but can also be apps or integrations.
 If you enable this setting, the IP address will be displayed for **new and existing events** in the audit log.

You are responsible for meeting any legal obligations that accompany the viewing or storage of IP addresses displayed within your organization's audit log.



Alternatively, you can configure IP addresses at the enterprise level. For more information, see [Displaying IP addresses in the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/displaying-ip-addresses-in-the-audit-log-for-your-enterprise).



When anyone creates an account on GitHub, the person agrees to GitHub's collection of basic information about connections to GitHub's services, including source IP address. For more information, see [GitHub General Privacy Statement](https://docs.github.com/en/free-pro-team@latest/site-policy/privacy-policies/github-general-privacy-statement).


After you enable the feature, you can access the audit log to view events that include IP addresses. For more information, see [Reviewing The Audit Log For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization).

## Events that display IP addresses in the audit log

GitHub displays an IP address for each event in the organization audit log that meets these criteria.

* The actor is an organization member or owner.
* The target is either an organization-owned repository that is private or internal, or an organization resource that is not a repository, such as a project.
* For `api.request` events, the request must have repository context; requests triggered by GraphQL or to endpoints that reference only a user or organization do not meet this condition.

## Enabling display of IP addresses in the audit log

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Archive" section of the sidebar, click **{% octicon "log" aria-hidden="true" aria-label="log" %} Logs**, then click **Audit log**.

1. On the **Settings** tab, under "Disclose actor IP addresses in audit logs", select **Enable source IP disclosure**.

1. Click **Save**.
