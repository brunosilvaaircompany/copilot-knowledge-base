# Impersonating a user

## About user impersonation

If you need to temporarily take over a user account, for example when troubleshooting a user problem, or when the user is unavailable and urgent action is required, you can start an impersonation session to act on their behalf.

For each impersonation session, you need to provide a reason for the impersonation. A session is limited to one hour, and you will have the same access as the user being impersonated.

Actions you perform during an impersonation session are recorded as events in the enterprise audit log, as well as the impersonated user's security log. The person being impersonated is sent an email notification when the impersonation session starts. You cannot deactivate these emails. For more information, see [Audit Log Events For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise) and [Reviewing Your Security Log](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log).

## Impersonating a user

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. Under "Search users, organizations, teams, repositories, gists, and applications", type the name of the user in the text field.
1. To the right of text field, click **Search**.
   ![Screenshot of the "Search" page of the "Site admin" settings. The button to search users, labeled "Search," is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/search-for-things.png)
   * If an exact account name match isn't found, under "Search results – Accounts", in the "Fuzzy matches" section, click the name of the user you want to manage.
   ![Screenshot of search results in the "Site admin" settings. In the "Fuzzy matches" section, an example user name is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/click-user.png)

1. Review the user details in the site admin page to confirm you have identified the correct user.
   ![Screenshot of the Site admin account overview page.](/assets/images/enterprise/site-admin-settings/site-admin-account-overview.png)

1. In the top left of the page, click **User info**.

   ![Screenshot of the "User info" section for a user. The "User info" heading is outlined. Under the heading, the user is marked as active.](/assets/images/enterprise/stafftools/user-info.png)
1. Under "Danger Zone", click **Sign in to GitHub as @username**
1. Select a reason from the dropdown list. If you select **Other** you will need to provide additional context in the text field below **Notes**. Click **Begin impersonation** to begin the session.
1. When you are ready to end the impersonation session, click **Return to your mundane life as username** in the banner at the top of the page.
