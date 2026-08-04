# Disabling webhooks

## About disabling webhooks

You can disable a webhook that was previously enabled for a repository, organization, GitHub Marketplace account, GitHub Sponsors account, or GitHub App.

You can disable a webhook that was previously enabled for a repository, organization, GitHub Enterprise, GitHub Marketplace account, GitHub Sponsors account, or GitHub App.

You can disable a webhook that was previously enabled for a repository, organization, GitHub Enterprise, or GitHub App.

To disable a webhook, you can choose to deactivate or delete it. When you deactivate a webhook, the webhook deliveries will stop, and you can choose to reactivate the webhook at a later time. When you delete a webhook, it cannot be restored.

For more information, see [About Webhooks](https://docs.github.com/en/webhooks/about-webhooks) and [Creating Webhooks](https://docs.github.com/en/webhooks/using-webhooks/creating-webhooks).

## Disabling a repository webhook

To disable a repository webhook, you can deactivate or delete it. You must be a repository owner, or have admin access in the repository, to disable webhooks.

You can use the GitHub web interface or the REST API to delete a webhook for a repository. For more information about using the REST API to delete a repository webhook, see [Webhooks](https://docs.github.com/en/rest/repos/webhooks#delete-a-repository-webhook).

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the left sidebar, click **{% octicon "webhook" aria-hidden="true" aria-label="webhook" %} Webhooks**.

1. Under "Webhooks", locate the webhook you'd like to disable.
1. Disable the webhook by either deactivating or deleting it:
   1. To _deactivate_ the webhook:
      1. Click **Edit**.
      1. Deselect **Active**.
      1. Click **Update webhook**.
   1. To _delete_ the webhook, click **Delete**. This action cannot be undone.


## Disabling an organization webhook

To disable an organization webhook, you can deactivate or delete it. Only organization owners can disable webhooks in an organization.

You can use the GitHub web interface or the REST API to delete an organization webhook. For more information about using the REST API to delete an organization webhook, see [Webhooks](https://docs.github.com/en/rest/orgs/webhooks#delete-an-organization-webhook).

1. In the upper-right corner of any page on GitHub, click your profile picture.
1. Click **Your organizations**.
1. To the right of the organization, click **Settings**.
1. In the left sidebar, click **{% octicon "webhook" aria-hidden="true" aria-label="webhook" %} Webhooks**.

1. Under "Webhooks", locate the webhook you'd like to disable.
1. Disable the webhook by either deactivating or deleting it:
   1. To _deactivate_ the webhook:
      1. Click **Edit**.
      1. Deselect **Active**.
      1. Click **Update webhook**.
   1. To _delete_ the webhook, click **Delete**. This action cannot be undone.




## Disabling a global webhook for a GitHub Enterprise

Enterprise owners can disable a global webhook in an GitHub Enterprise.

{% ifversion ghes %}

You can use the GitHub web interface or the REST API to disable a global webhook. For more information about using the REST API to disable a global webhook, see [Global Webhooks](https://docs.github.com/en/rest/enterprise-admin/global-webhooks).




1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings", click **Hooks**.

1. Under "Webhooks", locate the webhook you'd like to disable.
1. Disable the webhook by either deactivating or deleting it:
   1. To _deactivate_ the webhook:
      1. Click **Edit**.
      1. Deselect **Active**.
      1. Click **Update webhook**.
   1. To _delete_ the webhook, click **Delete**. This action cannot be undone.


{% endif %}



## Disabling a GitHub Marketplace webhook

You can deactivate a webhook that was previously enabled for events relating to an app that you published on GitHub Marketplace. You cannot delete the webhook. Only the owner of the app can deactivate the GitHub Marketplace webhook for the app. If the app owner has designated any app managers for a GitHub App, the app managers can also deactivate the GitHub Marketplace webhook.

1. Navigate to your [GitHub Marketplace listing page](https://github.com/marketplace/manage).
1. Next to the GitHub Marketplace listing that you want to view webhook deliveries for, click **Manage listing**.
1. In the sidebar, click **Webhook**.
1. Deselect **Active**.
1. Click **Update webhook**.

## Disabling a GitHub Sponsors webhook

You can disable webhooks that were previously enabled for events relating to GitHub Sponsors. Only the owner of the sponsored account can disable sponsorship webhooks for that account.

1. In the upper-right corner of any page, click your profile picture, then click **Your sponsors**.
1. Next to the account you want to edit a webhook for, click **Dashboard**.
1. In the left sidebar, click **Webhooks**.
1. Under "Webhooks", locate the webhook you'd like to disable.
1. Disable the webhook by either deactivating or deleting it:
   1. To _deactivate_ the webhook:
      1. Click **Edit**.
      1. Deselect **Active**.
      1. Click **Update webhook**.
   1. To _delete_ the webhook, click **Delete**. This action cannot be undone.




## Disabling webhooks for a GitHub App

Each GitHub App has one webhook. You cannot delete the webhook, but you can deactivate the webhook. The owner of a GitHub App can deactivate the webhook the app. If the app owner has designated any app managers for a GitHub App, the app managers can also deactivate the webhook for the app.

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

1. Next to the GitHub App that you want to deactivate the webhook for, click **Edit**.
1. Under "Webhook," deselect **Active** to disable the webhook.
1. Click **Save changes**.
