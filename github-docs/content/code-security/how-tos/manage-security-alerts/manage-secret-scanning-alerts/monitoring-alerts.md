# Monitoring alerts from secret scanning

When secret scanning detects a potential secret leak in your repository, staying informed about these alerts is crucial for maintaining your code's security. GitHub provides multiple notification channels to ensure you and your team are promptly alerted when secrets are found. You can customize how and when you receive these notifications based on your role and preferences.

You can also audit responses to secret scanning alerts to track how your team manages security issues and maintain compliance with your organization's security policies.

## Configuring notifications for secret scanning alerts

In addition to displaying an alert in the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab of the repository, GitHub can also send email notifications for alerts. These notifications are different for incremental scans and historical scans.

### Incremental scans

When a new secret is detected, GitHub notifies all users with access to security alerts for the repository according to their notification preferences. These users include:
* Repository administrators
* Security managers
* Users with custom roles with read/write access
* Organization owners and enterprise owners, if they are administrators of repositories where secrets were leaked

> [!NOTE]
> Commit authors who've accidentally committed secrets will be notified, regardless of their notification preferences.

You will receive an email notification if:
* You are watching the repository.
* You have enabled notifications for "All Activity", or for custom "Security alerts" on the repository.
* In your notification settings, under "Subscriptions", then under "Watching", you have selected to receive notifications by email.



In addition, you will receive a notification if someone assigns a code scanning or a secret scanning alert to you, see [Assigning alerts](/code-security/concepts/security-at-scale/about-security-campaigns#about-assigning-alerts-to-users-and-copilot-cloud-agent).





1. On GitHub, navigate to the main page of the repository.

1. To start watching the repository, select **{% octicon "eye" aria-hidden="true" aria-label="eye" %} Watch**.

   ![Screenshot of the repository's main page. A dropdown menu, titled "Watch", is highlighted with an orange outline.](/assets/images/help/repository/repository-watch-dropdown.png)

1. In the dropdown menu, click **All Activity**. Alternatively, to only subscribe to security alerts, click **Custom**, then click **Security alerts**.
1. Navigate to the notification settings for your personal account. These are available at [https://github.com/settings/notifications](https://github.com/settings/notifications?ref_product=secret-scanning&ref_type=engagement&ref_style=text).
1. On your notification settings page, under "Subscriptions", then under "Watching", select the **Notify me** dropdown.
1. Select "Email" as a notification option, then click **Save**.

   ![Screenshot of the notification settings for a user account. Under "Subscriptions" and "Watching" a checkbox, titled "Email", is outlined in orange.](/assets/images/help/notifications/repository-watching-notification-options.png)

For more information about setting up notification preferences, see [Managing Security And Analysis Settings For Your Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) and [Configuring your watch settings for an individual repository](/subscriptions-and-notifications/get-started/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository).


### Historical scans

For historical scans, GitHub notifies the following users:

* Organization owners, enterprise owners, and security managers—whenever a historical scan is complete, even if no secrets are found.
* Repository administrators, security managers, and users with custom roles with read/write access—whenever a historical scan detects a secret, and according to their notification preferences.

We do _not_ notify commit authors.

For more information about setting up notification preferences, see [Managing Security And Analysis Settings For Your Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) and [Configuring your watch settings for an individual repository](/subscriptions-and-notifications/get-started/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository).


## Auditing responses to secret scanning alerts

You can audit the actions taken in response to secret scanning alerts using GitHub tools. For more information, see [Audit Security Alerts](https://docs.github.com/en/code-security/concepts/security-at-scale/audit-security-alerts).
