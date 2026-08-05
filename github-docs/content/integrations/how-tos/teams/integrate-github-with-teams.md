# Integrating GitHub with Teams

## About the GitHub integration for Teams

The GitHub integration for Microsoft Teams gives you and your teams visibility into your GitHub projects directly in Teams channels. You can triage issues, collaborate on pull requests, and keep track of changes without leaving Teams.

With the GitHub integration for Teams, you can:

* Get **GitHub notifications** in Teams channels.
* Use **commands** to take actions on GitHub.
* See **previews** when sharing links to GitHub resources.

* Initiate a Copilot cloud agent session from Teams, using the context of a Teams thread.


When you grant the GitHub app access to your Teams workspace, you are granting it certain permissions. The permissions provided are necessary for the app to function correctly and provide the features you expect. See [Teams Permissions](https://docs.github.com/en/integrations/reference/teams-permissions).


## Prerequisites

To use the GitHub integration for Teams, you need:

* A GitHub account.
* A Teams workspace where you have permission to install apps.



## Installing the GitHub integration for Teams in a single workspace

1. Go to the [GitHub integration for Teams](https://teams.microsoft.com/l/app/ca9e26b7-dce5-44a0-b2b7-a70a3d65ce25) listing in the Teams app store.
1. Click **Add**.
1. Follow the prompts to sign in to Teams and approve access.
1. In Teams, run `@GitHub Notifications signin` and follow the prompts to connect your GitHub account.

{% ifversion ghec %}

### Installing the Teams app for GitHub Enterprise Cloud with data residency

If you use GitHub Enterprise Cloud with data residency on GHE.com, install the data-residency app from [AppSource](https://appsource.microsoft.com/en-us/product/office/WA200008122) and sign in with your GitHub Enterprise Cloud account when prompted.



{% endif %}



## Installing the GitHub integration for Teams on GitHub Enterprise Server

To integrate GitHub Enterprise Server with Microsoft Teams, you first need to configure the chat integration on your instance and register an app in Microsoft Azure.

### Register the app and provision the Teams bot

1. In the Management Console for your GitHub Enterprise Server instance, open the **Chat integration** page and select the **Enable GitHub Chat integration** checkbox.
1. Under "Select chat client", select **Microsoft Teams**, and follow the link to register an app in Microsoft Azure.
1. In Azure, configure the details for your app registration:
    * Enter your application registration **Name**.
    * Set the supported account types to **Multiple Entra ID tenants** and **Allow all tenants**.
1. Click **Register**.
1. Record the application (client) ID and tenant ID displayed.
1. Under **Certificates & secrets**, create a new client secret.
1. Record the client secret value displayed.
1. Return to the Management Console and **Chat integration** page on your GitHub Enterprise Server instance.
1. Click **Deploy to Azure**, and follow the prompts to provision the Teams bot in Microsoft Azure.
1. In Azure, select the **Subscription** and **Resource group** for the Azure bot to be deployed.
1. Enter the application (client) ID and tenant ID you recorded earlier, in the Teams bot configuration.
1. Depending on your network configuration for GitHub Enterprise Server:
    * If your instance _is reachable_ on the public internet, select the **Append '_msteams' to path** checkbox.
    * If your instance _is not reachable_ on the public internet and requires a proxy:
        * Ensure the **Append '_msteams' to path** checkbox isn't selected.
        * In the **GHES Instance Host Name** field, enter the URL that will forward the traffic to your instance.
1. Click the **Review + create** tab, and then click **Create** to save the settings and begin provisioning the app.
1. Wait for the Teams bot to be provisioned in Azure.

### Configure GitHub Enterprise Server and install the app in Teams

1. Return to the Management Console  and **Chat integration** page on your GitHub Enterprise Server instance.
1. Enter the **Microsoft client ID**, **Microsoft client secret**, and **Microsoft tenant ID** using the application details you recorded earlier.
1. Optionally, if your GitHub Enterprise Server instance _is not reachable_ on the public internet and requires a proxy, enter the URL that will forward the traffic to your instance in the **Public Endpoint URL** field.
1. Click **Save client settings**.
1. Click **Generate manifest** to download the integration manifest for later use.
1. Click **Save settings** to apply the changes to your instance.
1. Log in to your Teams client, and open the Teams admin center.
1. Go to **Teams apps** > **Manage apps**, and click **Upload** to upload the integration manifest you downloaded in a previous step. For more information, see [Upload your app to Teams](https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/deploy-and-publish/apps-upload#upload-your-app).
1. Install your app in Teams, and run `@GHE signin` to connect your GitHub account.



## Further reading

* [Use GitHub In Teams](https://docs.github.com/en/integrations/how-tos/teams/use-github-in-teams) - Learn how to use the GitHub integration for Teams.
* [Customize Notifications](https://docs.github.com/en/integrations/how-tos/teams/customize-notifications) - Learn how to customize your GitHub notifications in Teams.
