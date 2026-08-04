# Redelivering webhooks

## About redelivering webhooks

You may want to redeliver a webhook to help you test your application or to recover from server downtime. You can redeliver webhook deliveries that occurred in the past 3 days. GitHub does not automatically redeliver failed deliveries.

## Redelivering repository webhooks

Only people with admin access to a repository can redeliver webhooks in that repository.

You can use the GitHub web interface or the REST API to redeliver webhooks for a repository. For more information about using the REST API to redeliver webhooks, see [Webhooks](https://docs.github.com/en/rest/repos/webhooks).

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Code and automation" section of the sidebar, click **{% octicon "webhook" aria-hidden="true" aria-label="webhook" %} Webhooks**.
1. In the list of webhooks, click the URL of the webhook you'd like to redeliver. If you do not have a webhook configured, no webhooks will be listed.

   ![Screenshot of a list of webhooks. The URL link to view a webhook is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)

1. Click **Recent deliveries**. All deliveries from the past 3 days will be listed. If this webhook has not been delivered within the past 3 days, no deliveries will be listed.

1. Click the delivery GUID for the delivery that you want to redeliver.
1. Click **Redeliver**.

## Redelivering organization webhooks

Only organization owners can redeliver webhooks in that organization.

You can use the GitHub web interface or the REST API to redeliver webhooks for an organization. For more information about using the REST API to redeliver webhooks, see [Webhooks](https://docs.github.com/en/rest/orgs/webhooks).

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the "Code and automation" section of the sidebar, click **{% octicon "webhook" aria-hidden="true" aria-label="webhook" %} Webhooks**.
1. In the list of webhooks, click the URL of the webhook you'd like to redeliver. If you do not have a webhook configured, no webhooks will be listed.

   ![Screenshot of a list of webhooks. The URL link to view a webhook is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)

1. Click **Recent deliveries**. All deliveries from the past 3 days will be listed. If this webhook has not been delivered within the past 3 days, no deliveries will be listed.

1. Click the delivery GUID for the delivery that you want to redeliver.
1. Click **Redeliver**.

## Redelivering GitHub App webhooks

The owner of a GitHub App can redeliver webhooks for the app. If the app owner has designated any app managers for a GitHub App, the app managers can also redeliver webhooks.

You can use the GitHub web interface or the REST API to redeliver webhooks for a GitHub App. For more information about using the REST API redeliver, see [Webhooks](https://docs.github.com/en/rest/apps/webhooks).

1. In the upper-right corner of any page on GitHub, click your profile picture.
1. Navigate to your account settings.
   * For an app owned by a personal account, click **Settings**.
   * For an app owned by an organization:
     1. Click **Your organizations**.
     1. To the right of the organization, click **Settings**.
   * For an app owned by an enterprise:
     1. If you use Enterprise Managed Users, click **Your enterprise** to go directly to the enterprise account settings.
     1. If you use personal accounts, click **Your enterprises** and then to the right of the enterprise, click **Settings**.{% elsif ghes %}
     1. Click **Enterprise settings**.



1. Navigate to the GitHub App settings.
   * For an app owned by a personal account or organization:
     1. In the left sidebar, click **{% octicon "code" aria-hidden="true" aria-label="code" %} Developer settings**, then click **GitHub Apps**.
   * For an app owned by an enterprise:
     1. In the left sidebar, under "Settings",{% elsif ghes %} click **Settings**, then click **GitHub Apps**.

1. Next to the GitHub App that you want to redeliver a webhook for, click **Edit**.
1. In the sidebar, click **Advanced**.
1. Under "Recent deliveries", all deliveries from the past 3 days will be listed. If this webhook has not been delivered within the past 3 days, no deliveries will be listed. If webhooks are not active, the "Recent Deliveries" section will not be present.

   Click the delivery GUID for the delivery that you want to redeliver.

   ![Screenshot of the "Recent deliveries" list for a webhook. A delivery GUID in the list of deliveries is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)

1. Click **Redeliver**.



## Redelivering GitHub Marketplace webhooks

The owner of a GitHub App can redeliver GitHub Marketplace webhooks for that app. If the app owner has designated any app managers for a GitHub App, the app managers can also redeliver webhooks.

1. Navigate to your [GitHub Marketplace listing page](https://github.com/marketplace/manage).
1. Next to the GitHub Marketplace listing for which you want to redeliver webhooks, click **Manage listing**.
1. In the sidebar, click **Webhook**.
1. Under "Recent deliveries", all deliveries from the past 3 days will be listed. If this webhook has not been delivered within the past 3 days, no deliveries will be listed. If webhooks are not active, the "Recent Deliveries" section will not be present.

   Click the delivery GUID for the delivery that you want to redeliver.

   ![Screenshot of the "Recent deliveries" list for a webhook. A delivery GUID in the list of deliveries is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)

1. Click **Redeliver**.





## Redelivering GitHub Sponsors webhooks

Only the owner of the sponsored account can redeliver sponsorship webhooks for that account.

1. In the upper-right corner of any page, click your profile picture, then click **Your sponsors**.
1. Next to the account for which you want to redeliver webhooks, click **Dashboard**.
1. In the sidebar, click **Webhooks**.
1. In the list of webhooks, click the URL of the webhook you'd like to redeliver. If you do not have a webhook configured, no webhooks will be listed.

   ![Screenshot of a list of webhooks. The URL link to view a webhook is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)

1. Under "Recent deliveries", all deliveries from the past 3 days will be listed. If this webhook has not been delivered within the past 3 days, no deliveries will be listed. If webhooks are not active, the "Recent Deliveries" section will not be present.

   Click the delivery GUID for the delivery that you want to redeliver.

   ![Screenshot of the "Recent deliveries" list for a webhook. A delivery GUID in the list of deliveries is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)

1. Click **Redeliver**.





## Redelivering global webhooks

Only enterprise owners can redeliver webhooks in that enterprise.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings", click **Hooks**.

1. In the list of webhooks, click the URL of the webhook you'd like to redeliver. If you do not have a webhook configured, no webhooks will be listed.

   ![Screenshot of a list of webhooks. The URL link to view a webhook is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)

1. Under "Recent deliveries", all deliveries from the past 3 days will be listed. If this webhook has not been delivered within the past 3 days, no deliveries will be listed. If webhooks are not active, the "Recent Deliveries" section will not be present.

   Click the delivery GUID for the delivery that you want to redeliver.

   ![Screenshot of the "Recent deliveries" list for a webhook. A delivery GUID in the list of deliveries is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)

1. Click **Redeliver**.
