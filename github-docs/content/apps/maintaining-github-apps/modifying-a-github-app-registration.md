# Modifying a GitHub App registration

## About GitHub App modifications

You can modify your GitHub App registration to change any of the settings that were selected when the app was initially registered. For more information about the settings you can select while registering a GitHub App, see [Registering A GitHub App](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app).

For example, you can change the name and description of your app, the permissions granted to your app, the webhooks your app subscribes to, or the visibility of your app.

You can also choose to test new optional features for your GitHub App. See [Activating Optional Features For GitHub Apps](https://docs.github.com/en/apps/maintaining-github-apps/activating-optional-features-for-github-apps).


<a name="navigating-to-your-github-app-settings"></a>

## Navigating to your GitHub App settings

To modify a GitHub App, first navigate to the app settings page.

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

1. To the right of the GitHub App you want to modify, click **Edit**.


## Changing the basic information of a GitHub App

You can change the basic information of your GitHub App, like the name of the app, the description of the app, and the homepage URL of the app.

1. Navigate to the settings page for the app you'd like to modify. For more information, see [Navigating to your GitHub App settings](#navigating-to-your-github-app-settings) in this article.

1. Under "Basic information," modify the GitHub App information that you'd like to change.
1. Click **Save changes**.

## Requesting user authorization (OAuth) during installation

You can prompt users to authorize your GitHub App when they install it and generate a user access token. When you request user authorization (OAuth) during installation, you must also provide a callback URL where the user will be redirected after they authorize the installation. See [Generating A User Access Token For A GitHub App](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app).

1. Navigate to the settings page for the app you'd like to modify. For more information, see [Navigating to your GitHub App settings](#navigating-to-your-github-app-settings) in this article.

1. Under "Identifying and authorizing users," select or deselect **Request user authorization (OAuth) during installation**.
1. Under "Callback URL," enter the full URL to redirect to after a user authorizes the installation.

## Enabling or disabling the device flow

You can use the device flow to authorize users for a headless app like a CLI tool or Git credential manager. For more information about using the device flow with GitHub Apps, see [Generating A User Access Token For A GitHub App](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app#using-the-device-flow-to-generate-a-user-access-token).

1. Navigate to the settings page for the app you'd like to modify. For more information, see [Navigating to your GitHub App settings](#navigating-to-your-github-app-settings) in this article.

1. Under "Identifying and authorizing users," select or deselect **Enable Device Flow**.

## Adding or updating a setup URL

You can redirect people to a specific URL after they install your app. See [Registering A GitHub App](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app).

If you select **Request user authorization (OAuth) during installation**, you will not be able to enter a setup URL. Users will instead be redirected to the Callback URL as part of the authorization flow, where you can describe additional setup. See [About The User Authorization Callback URL](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/about-the-user-authorization-callback-url).

1. Navigate to the settings page for the app you'd like to modify. For more information, see [Navigating to your GitHub App settings](#navigating-to-your-github-app-settings) in this article.

1. Under "Post installation," in the "Setup URL" field, enter the URL where you'd like to redirect users after they install your app.
1. Optionally, if you want to redirect users to the setup URL after they update an installation, select **Redirect on update**. An update includes adding or removing a repository for an installation. If "Setup URL" is blank, this will be ignored.

## Changing the permissions of a GitHub App

You can change the access permissions that are granted to your GitHub App using the following steps.

When you add new **repository**, **organization**, or **enterprise** permissions for an app, each account where the app is installed will need to approve the new permissions. When you add **account** permissions for an app, each user that has authorized the app will need to approve the permission changes. In both cases, GitHub will send an email to each organization owner or user, notifying them of the request to update the app's permissions. Updated permissions won't take effect on an installation or user authorization until the new permissions are approved. You can use the [installation webhook](/webhooks/webhook-events-and-payloads?actionType=new_permissions_accepted#installation) to find out when people accept new permissions for your app.

If you remove permissions or webhooks from your GitHub App, the changes will take effect immediately. If you remove permissions that were previously granted to your app, the app will no longer be able to access those resources.

If you change the permissions of an app owned by an enterprise, the changes will take effect immediately for all installations of the app within the enterprise{% ifversion enterprise-app-manager %} if you are an enterprise owner. If you are an app manager, the changes will only be automatically accepted in organizations where you are an organization owner.

Updates cannot be automatically accepted if you add repository permissions to an app for the first time. In that case, each organization owner will need to approve the update so that they can choose which repositories the app has access to.{% endif %}

Changing the permissions of an app may also change the webhooks that your app can subscribe to and the actions that your app can take with the API. See [Choosing Permissions For A GitHub App](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/choosing-permissions-for-a-github-app).

1. Navigate to the settings page for the app you'd like to modify. For more information, see [Navigating to your GitHub App settings](#navigating-to-your-github-app-settings) in this article.

1. In the GitHub Apps settings sidebar, click **Permissions & events**.
1. Under the sections "Repository permissions," "Organization permissions," and "Account permissions," modify the permissions you'd like to change. For each type of permission, select either "Read-only," "Read and write," or "No access" from the dropdown. See [Choosing Permissions For A GitHub App](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/choosing-permissions-for-a-github-app).
1. Optionally, under "Add a note to users," add a note telling your users why you are changing the permissions that your GitHub App requests.
1. Click **Save changes**.

## Activating or deactivating the GitHub App webhook

You can configure your GitHub App to receive webhooks for specific events on GitHub and automatically take action on them. See [Using Webhooks With GitHub Apps](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/using-webhooks-with-github-apps).

1. Navigate to the settings page for the app you'd like to modify. For more information, see [Navigating to your GitHub App settings](#navigating-to-your-github-app-settings) in this article.

1. Under "Webhook," to enable or disable the webhook, select or deselect **Active**.
1. If you selected **Active** in the previous step, under "Webhook URL," enter the URL that GitHub should send webhook events to.
1. Optionally, if you selected **Active** in the previous step, under "Webhook secret," enter a secret token to secure your webhooks. GitHub highly recommends that you set a webhook secret.

## Changing the webhook event subscriptions of a GitHub App

You can change the webhook events that a GitHub App subscribes to using the following steps.

The specific webhook events that you can select for your GitHub App registration are determined by the type of permissions you selected for your app. You will first need to select the permissions you would like your app to have, and then you can subscribe your app to webhook events that are related to that set of permissions.
 See [Using Webhooks With GitHub Apps](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/using-webhooks-with-github-apps).

1. Navigate to the settings page for the app you'd like to modify. For more information, see [Navigating to your GitHub App settings](#navigating-to-your-github-app-settings) in this article.

1. Activate the GitHub App webhook. See [Activating or deactivating the GitHub App webhook](/apps/maintaining-github-apps/modifying-a-github-app-registration#activating-or-deactivating-the-github-app-webhook) in this article.
1. In the GitHub Apps settings sidebar, click **Permissions & events**.
1. Under the sections "Repository permissions," "Organization permissions," and "Account permissions," select the permissions that are required for the events your app will subscribe to. See [Changing the permissions of a GitHub App](#changing-the-permissions-of-a-github-app).
1. Under "Subscribe to Events," select the webhook events you would like your GitHub App to receive.
1. Click **Save changes**.

## Changing the visibility of a GitHub App

You can change the visibility settings of your GitHub App to control who can install it. Public apps cannot be made private if they're installed on other accounts. See [Making A GitHub App Public Or Private](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/making-a-github-app-public-or-private).


You can't change the visibility of an GitHub App owned by an enterprise. GitHub Apps owned by an enterprise can only be installed on organizations within the enterprise{% ifversion enterprise-installed-apps %} or the enterprise itself.
{% endif %}

1. Navigate to the settings page for the app you'd like to modify. For more information, see [Navigating to your GitHub App settings](#navigating-to-your-github-app-settings) in this article.

1. In the left sidebar, click **Advanced**.

1. Under "Danger zone," depending on the current visibility of your GitHub App, click either **Make public** or **Make private**.
