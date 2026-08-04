# Managing projects using Jira

## Connecting Jira to a GitHub Enterprise organization

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the left sidebar, click **{% octicon "code" aria-hidden="true" aria-label="code" %} Developer settings**.

1. In the left sidebar, click **OAuth apps**.

1. Click **New OAuth app**.

   > [!NOTE]
   > If you haven't created an app before, this button will say, **Register an application**.

1. Fill in the application settings:
    * In the **Application name** field, type "Jira" or any name you would like to use to identify the Jira instance.
    * In the **Homepage URL** field, type the full URL of your Jira instance.
    * In the **Authorization callback URL** field, type the full URL of your Jira instance.
1. Click **Register application**.
1. At the top of the page, note the **Client ID** and **Client Secret**. You will need these for configuring your Jira instance.

## Jira instance configuration

1. On your Jira instance, log into an account with administrative access.
1. At the top of the page, click the settings (gear) icon and choose **Applications**.
1. In the left sidebar, under **Integrations**, click **DVCS accounts**.
1. Click **Link Bitbucket Cloud or GitHub account**.
1. In the **Add New Account** modal, fill in your GitHub Enterprise settings:
    * From the **Host** dropdown menu, choose **GitHub Enterprise**.
    * In the **Team or User Account** field, type the name of your GitHub Enterprise organization or user account.
    * In the **OAuth Key** field, type the Client ID of your GitHub Enterprise developer application.
    * In the **OAuth Secret** field, type the Client Secret for your GitHub Enterprise developer application.
    * If you don't want to link new repositories owned by your GitHub Enterprise organization or user account, deselect **Auto Link New Repositories**.
    * If you don't want to enable smart commits, deselect **Enable Smart Commits**.
    * Click **Add**.
1. Review the permissions you are granting to your GitHub Enterprise account and click **Authorize application**.
1. If necessary, type your password to continue.
