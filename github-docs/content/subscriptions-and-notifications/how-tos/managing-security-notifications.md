# Managing security notifications

## Dependabot alerts notification options

The notification options for your user account are available at [https://github.com/settings/notifications](https://github.com/settings/notifications). You can configure notification settings for each repository, in the repository watch settings.

To receive notifications about Dependabot alerts on repositories, you need to watch these repositories, and subscribe to receive "All Activity" notifications or configure custom settings to include "Security alerts." For more information, see [Configuring Notifications](https://docs.github.com/en/subscriptions-and-notifications/get-started/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository).

You can choose the delivery method for notifications, as well as the frequency at which the notifications are sent to you.

You can choose to receive notifications:

* In your inbox, as web notifications. A web notification is sent when Dependabot is enabled for a repository, when a new manifest file is committed to the repository, and when a new vulnerability with a critical or high severity is found (**On GitHub** option).
* By email. An email is sent when Dependabot is enabled for a repository, when a new manifest file is committed to the repository, and when a new vulnerability with a critical or high severity is found (**Email** option).
* On the command line. Warnings are displayed as callbacks when you push to repositories with any insecure dependencies (**CLI** option).
* On GitHub Mobile, as web notifications. For more information, see [Configuring Notifications](https://docs.github.com/en/subscriptions-and-notifications/get-started/configuring-notifications#managing-your-notification-settings-with-github-mobile).

> [!NOTE]
> The email and web/GitHub Mobile notifications are:
>
> * _Per repository_ when Dependabot is enabled on the repository, or when a new manifest file is committed to the repository.
> * _Per organization_ when a new vulnerability is discovered.
> * Sent when a new vulnerability is discovered. GitHub doesn't send notifications when vulnerabilities are updated.


You can customize the way you are notified about Dependabot alerts. For example, you can receive a daily or weekly digest email summarizing alerts for up to 10 of your repositories using the **Email weekly digest** option.



For more information about the notification delivery methods available to you, and advice on optimizing your notifications for Dependabot alerts, see [Configure Dependabot Notifications](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-dependabot-notifications).

## Secret scanning notification options

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





For more information on how to configure notifications for secret scanning alerts, see [Monitoring Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts/monitoring-alerts).
