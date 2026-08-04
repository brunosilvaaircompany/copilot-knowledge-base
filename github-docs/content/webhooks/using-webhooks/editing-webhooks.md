# Editing webhooks

## About editing webhooks

You can edit a webhook to change any of the settings that were selected when the webhook was initially created. For more information about the settings you can select while creating a webhook, see [Creating Webhooks](https://docs.github.com/en/webhooks/using-webhooks/creating-webhooks).

## Editing a repository webhook

You can edit a webhook that was created in a specific repository. You must be a repository owner or have admin access in the repository to edit webhooks in that repository.

You can use the GitHub web interface or the REST API to edit a repository webhook. For more information about using the REST API to edit a repository webhook, see [Webhooks](https://docs.github.com/en/rest/repos/webhooks#update-a-repository-webhook).

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the left sidebar, click **{% octicon "webhook" aria-hidden="true" aria-label="webhook" %} Webhooks**.

1. Next to the webhook you'd like to edit, click **Edit**.

1. Make any desired changes to the webhook settings.

1. Click **Update Webhook**.


## Editing an organization webhook

You can edit a webhook that was created in a specific organization. You must be an organization owner to edit webhooks in that organization.

You can use the GitHub web interface or the REST API to edit an organization webhook. For more information about using the REST API to create an organization webhook, see [Webhooks](https://docs.github.com/en/rest/orgs/webhooks#update-an-organization-webhook).

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the left sidebar, click **{% octicon "webhook" aria-hidden="true" aria-label="webhook" %} Webhooks**.

1. Next to the webhook you'd like to edit, click **Edit**.

1. Make any desired changes to the webhook settings.

1. Click **Update Webhook**.




## Editing a global webhook for a GitHub Enterprise

Enterprise owners can edit a global webhook to change any of the settings that were selected when the webhook was initially created.

{% ifversion ghes %}

You can use the GitHub web interface or the REST API to edit a global webhook. For more information about using the REST API to edit a global webhook, see [Global Webhooks](https://docs.github.com/en/rest/enterprise-admin/global-webhooks).




1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings", click **Hooks**.

1. Next to the webhook you'd like to edit, click **Edit**.

1. Make any desired changes to the webhook settings.

1. Click **Update Webhook**.


{% endif %}



## Editing a GitHub Marketplace webhook

You can edit a webhook that was created for an app that you published in GitHub Marketplace. Only the owner of the app, or an app manager for the app, can edit a GitHub Marketplace webhook. For more information, see [Webhook Events For The GitHub Marketplace API](https://docs.github.com/en/apps/github-marketplace/using-the-github-marketplace-api-in-your-app/webhook-events-for-the-github-marketplace-api).

1. Navigate to your [GitHub Marketplace listing page](https://github.com/marketplace/manage).
1. Next to the GitHub Marketplace listing that you want to view webhook deliveries for, click **Manage listing**.
1. In the sidebar, click **Webhook**.
1. Make any desired changes to the webhook settings.

1. Click **Update Webhook**.


## Editing a GitHub Sponsors webhook

You can edit a webhook that was created for a GitHub Sponsors account. Only the owner of the sponsored account can edit sponsorship webhooks for that account.

1. In the upper-right corner of any page, click your profile picture, then click **Your sponsors**.
1. Next to the account you want to edit a webhook for, click **Dashboard**.
1. In the left sidebar, click **Webhooks**.
1. Next to the webhook you'd like to edit, click **Edit**.

1. Make any desired changes to the webhook settings.

1. Click **Update Webhook**.




## Editing webhooks for a GitHub App

Each GitHub App has one webhook. You cannot delete the webhook, but you can activate or deactivate the webhook, change the webhook events that the webhook subscribes to, or make changes to other basic settings for the webhook.

The owner of a GitHub App can edit the webhook configuration for the app. If the app owner has designated any app managers for a GitHub App, the app managers can also edit the webhook configuration. For more information, see [Using Webhooks With GitHub Apps](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/using-webhooks-with-github-apps).

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


1. In the left sidebar, click **{% octicon "code" aria-hidden="true" aria-label="code" %} Developer settings**.

1. In the left sidebar, click **GitHub Apps**.

1. Next to the GitHub App that you want to update the webhook configuration for, click **Edit**.
1. To edit the basic webhook settings:
   1. Under "Webhook", any desired changes to the webhook settings.
   1. Click **Save changes**.
1. To make changes to the events that the webhook is subscribed to:
   1. In the sidebar, click **Permissions & events**.
   1. The specific webhook events that you can select for your GitHub App registration are determined by the type of permissions you selected for your app. You will first need to select the permissions you would like your app to have, and then you can subscribe your app to webhook events that are related to that set of permissions.


      Under the sections "Repository permissions," "Organization permissions," and "Account permissions," select the permissions that are required for the events your app will subscribe to. For more information, see [Choosing Permissions For A GitHub App](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/choosing-permissions-for-a-github-app). For more information about things to consider when changing the permissions, see [Modifying a GitHub App registration](/apps/maintaining-github-apps/modifying-a-github-app-registration#changing-the-permissions-of-a-github-app).
   1. Under "Subscribe to Events," select the webhook events you would like your GitHub App to receive.
   1. Click **Save changes**.

You can use the REST API to edit the webhook configuration for a GitHub App. For more information about using the REST API to view recent deliveries, see [Webhooks](https://docs.github.com/en/rest/apps/webhooks).
