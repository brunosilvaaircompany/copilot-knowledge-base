# Integrating Copilot cloud agent with Jira

> [!NOTE]
> GitHub Copilot uses AI. Check for mistakes. See [Agents](https://docs.github.com/en/copilot/responsible-use/agents).

The GitHub Copilot integration in Jira allows you to invoke Copilot cloud agent without leaving your Jira workspace. From within Jira you can initiate cloud agent sessions and open pull requests, using the context of the work item's title, description, labels, comments, and any Atlassian custom fields such as acceptance criteria.

## Prerequisites

* You must have a GitHub account with access to Copilot through a paid Copilot plan.
* You must have a Jira Cloud account, **Jira must be an AI-enabled app**, and Rovo must be activated for your organization. See [Activate AI for apps](https://support.atlassian.com/organization-administration/docs/activate-atlassian-intelligence-for-products) in the Atlassian documentation.
* Installation and authentication must be completed for both Jira and GitHub.

## Installation

To install the GitHub Copilot for Jira app and authorize it for your GitHub organization or enterprise account, you need:

* Administrator permission for your Jira site.
* Owner or GitHub App manager permissions for your GitHub organization.

This integration relies on an Atlassian Forge application and a GitHub application. Both are required for the integration. Once successfully installed, authorized users of the Jira workspace with **write** access to a GitHub repository will be able to trigger the agent from Jira.

### Installing the GitHub Copilot for Jira app for GitHub.com

1. Navigate to the [GitHub Copilot for Jira installation page](https://marketplace.atlassian.com/apps/1582455624?ref_product=copilot&ref_type=engagement&ref_style=text) on the Atlassian Marketplace.
1. Click **Get it now**.
1. Select the Atlassian site you want to install the GitHub application in.
1. Click **Review** to check the installation details, and then click **Get it now**.

   Once GitHub Copilot for Jira is installed in your Jira site, you need to authorize the app to access your GitHub organization and repositories.

1. Click **Configure** in the confirmation message in Jira after installation.
   * If you are not automatically redirected, go to the [GitHub Copilot for Jira installation page](https://github.com/apps/github-copilot-for-jira?ref_product=copilot&ref_type=engagement&ref_style=text) on the GitHub Marketplace. Click **Install**.
1. If you are not already logged in to GitHub, click the highlighted **Log in to GitHub** and follow the prompts to log in to your GitHub account and authorize the application.
   * If your organization or enterprise uses single sign-on (SSO), you may need to start an active SAML session for your organization and perform an additional authorization step.
1. Click **Install app** to give the app permission to access information on your GitHub account.
1. Choose the organization and repositories the app has access to. Your GitHub organizations are enabled by default for your Jira workspace. Optionally, in the **Install GitHub Copilot for Jira** page, _deselect_ the organization and repositories you _don't want the application to have access to_.
1. Click **Install**.
1. When installation is complete, you will see a list of connected organizations on the GitHub Copilot for Jira app configuration page in Jira.

### Installing the GitHub Copilot for Jira app for GHE.com

1. Navigate to the [GitHub Copilot for Jira (GHEC with Data Residency) installation page](https://marketplace.atlassian.com/apps/3637796809?ref_product=copilot&ref_type=engagement&ref_style=text) on the Atlassian Marketplace.
1. To the right of the app name, click {% octicon "kebab-horizontal" aria-label="Configure" %}, and enter your `SUBDOMAIN.ghe.com` in the text box. Replace SUBDOMAIN with your enterprise's subdomain of GHE.com.
1. Click **Save configuration**.
1. Click **Get it now**.
1. Select the Atlassian site you want to install the GitHub application in.
1. Click **Review** to check the installation details, and then click **Get it now**.

   Once GitHub Copilot for Jira is installed in your Jira site, you need to authorize the app to access your GitHub organization and repositories.

1. Click **Configure** in the confirmation message in Jira after installation.
   * If you are not automatically redirected, find the GitHub Copilot for Jira app in the list of apps available to your enterprise at `SUBDOMAIN.ghe.com/apps/external-app/github-copilot-for-jira`. Click **Install**.
1. If you are not already logged in to GitHub, click the highlighted **Log in to GitHub** and follow the prompts to log in to your GitHub account and authorize the application.
   * If your organization or enterprise uses SSO, you may need to start an active SAML session for your organization and perform an additional authorization step.
1. Click **Install app** to give the app permission to access information on your GitHub account.
1. Choose the organization and repositories the app has access to. Your GitHub organizations are enabled by default for your Jira workspace. Optionally, in the **Install GitHub Copilot for Jira** page, _deselect_ the organization and repositories you _don't want the application to have access to_.
1. Click **Install**.
1. When installation is complete, you will see a list of connected organizations on the GitHub Copilot for Jira app configuration page in Jira.

## Using the GitHub Copilot app in Jira

The Copilot app must be enabled for a GitHub organization you are a member of, before you can start using it.

The first time you use Copilot cloud agent in Jira, you will need to connect it to your GitHub account.

Only users with **write** access to a repository can trigger Copilot cloud agent to work in that repository.

You can trigger Copilot cloud agent in several ways:

* **Assign** GitHub Copilot to a work item using the Assignee field.
* **Mention** `@GitHub Copilot` in a comment on a work item.
* **Use a Jira automation.** In your Jira automation rules, select the **Use GitHub Copilot** action and configure your flow to use a custom trigger based on Jira events, such as when a work item is created or transitioned, or a label is applied. For more information, see [Work with AI agents in Jira](https://support.atlassian.com/jira-software-cloud/docs/work-with-ai-agents-in-jira/) in the Atlassian documentation.

> [!NOTE]
> When you assign Copilot to a Jira work item, the context the agent captures from Jira will be added to the pull request and **visible to everyone** if the repository is public.

### Example: Triggering Copilot cloud agent from a Jira work item

1. In Jira, open or create a work item that contains clear requirements you want to delegate to Copilot cloud agent.
1. To specify a repository you want Copilot to work in, mention it in the work item description or in a comment.
1. Assign `GitHub Copilot` to the work item, or mention `@GitHub Copilot` in a comment. For example:

    ```text
   @GitHub Copilot create a new API endpoint for user authentication in octo-org/octorepo
    ```

1. If you have not previously connected the GitHub application in Jira to your GitHub account, follow the prompts to authorize the application for both GitHub and Atlassian.
1. Once Copilot cloud agent has started working on the pull request, a comment will appear in the chat panel in Jira. The user who initiated the agent session can view progress there.
1. You can follow up with further instructions for Copilot:
    * Use the **Continue in Chat** button under the **Agents** heading to chat directly with Copilot to have updates made to the _current_ pull request.
    * Mention `@GitHub Copilot` in a comment on the work item to have updates made in a _new_ pull request.

> [!TIP]
> If you have not received confirmation of triggering Copilot cloud agent after 1 minute, refresh the Jira work item page.

### Viewing agent activity in Jira

While cloud agent works its activity streams live into the chat panel in Jira, so you can follow what the agent is doing without leaving your work item. The activity stream includes a link to the associated agent session on GitHub.

### Directing Copilot from Jira post-session

When Copilot cloud agent has completed a session, for example when a pull request is ready for review, you can direct Copilot to continue the work:

* In the chat panel in Jira, select the link to the associated agent session on GitHub. This opens the agents panel on GitHub, where you can review the session and send follow-up instructions to update the **existing** pull request.
* Add a follow-up `@GitHub Copilot` mention or comment on the Jira work item. This starts a new session and opens a **new** pull request rather than updating the existing one.

## Customizing Copilot cloud agent in Jira

You can customize how Copilot cloud agent works in your Jira workspace by specifying models, agents, and custom instructions.

### Specifying a model

Specify a model when you want a task to run on a specific model rather than the default. For example, you may choose a lighter model for routine, well-scoped changes. To change the model used by Copilot cloud agent for a particular task, include the model name in your instructions to Copilot, see [Changing The Ai Model](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/changing-the-ai-model).

### Specifying a custom agent

Specify a custom agent to tailor cloud agent's behavior to a particular workflow or repository. You can specify a custom agent from your GitHub repository directly in the Jira ticket. For more information, see [Create Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents).

### Using custom instructions

Use custom instructions to set defaults that apply to every session, such as the target repository, so Copilot does not have to pause and ask you for input mid-session. You can define custom instructions at the Jira workspace level that apply every time Copilot cloud agent is triggered.

## Usage costs

Copilot cloud agent uses GitHub Actions minutes and AI credits.

For more information, see [Usage Based Billing For Organizations And Enterprises](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

## Adding or removing an organization to the GitHub Copilot for Jira app

A Jira administrator and GitHub organization owner can enable or disable organizations for the integration.

> [!NOTE]
> If a new SSO-protected organization is added to the app after the initial installation, users will need to start an active SAML session for the organization in GitHub, in order to trigger Copilot cloud agent to work in the new organization's repositories from Jira. For more information, see [About Authentication With Single Sign On](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-single-sign-on/about-authentication-with-single-sign-on#about-oauth-apps-github-apps-and-sso).

To change access for the GitHub Copilot for Jira app for an organization:

1. In Jira, go to the settings page for your workspace.
1. Go to the applications setting page for the GitHub Copilot app.
1. Optionally, click **Connect More GitHub Organizations** to add new organizations to the list.
1. Enable or disable the Copilot app for one or more of the listed organizations.

## Troubleshooting

If you run into problems, try the following solutions.

### You can't see the Copilot cloud agent and it is not possible to assign it to a Jira work item

In Jira, check your Atlassian Administration settings for your organization are set as follows.

1. Jira is an AI-enabled app, see [Activate AI for apps](https://support.atlassian.com/organization-administration/docs/activate-atlassian-intelligence-for-products) in the Atlassian documentation.

### You can see the Copilot cloud agent but it is not possible to assign it to a Jira work item

Check that you have connected your personal account on GitHub to the GitHub Copilot for Jira app.

1. In Jira, go to the settings page for your personal account.
1. Under your general settings, select the **GitHub Copilot for Jira** app.
1. If you are not already signed in with GitHub, follow the prompts to sign in and authorize the application.

### When chatting with GitHub Copilot, you are prompted to sign in

To sign in to GitHub Copilot for Jira app, follow the steps above in [You can see the Copilot cloud agent but it is not possible to assign it to a Jira work item](#you-can-see-the-copilot-cloud-agent-but-it-is-not-possible-to-assign-it-to-a-jira-work-item).

### Other users in your workspace can assign Copilot cloud agent to a Jira work item, but you cannot

If Copilot cloud agent cannot see or work with your organization's resources in Jira and your organization uses SSO in GitHub, you may need to reauthorize the GitHub Copilot for Jira app for your GitHub account. For more information, see [About Authentication With Single Sign On](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-single-sign-on/about-authentication-with-single-sign-on#about-oauth-apps-github-apps-and-sso).

To resolve this issue, follow these steps to start a new active SSO session for your organization:

1. Go to your [organization settings](https://github.com/settings/organizations) in GitHub.
1. Under "Single sign-on", find the organization you need to authenticate to and click **Sign out**, and then **Sign in**.
   * If your enterprise manages SSO for your organization, signing in to one organization in the enterprise works as an SSO session for all organizations in the enterprise.
1. Return to Jira, and refresh the page you are working in.
1. Try working with Copilot cloud agent in Jira again.

### GitHub Copilot is not responding

* Check GitHub's [Status page](https://githubstatus.com) for any active incidents.
* Check the [Atlassian status page](https://status.atlassian.com) for any active incidents.
* Verify that Copilot cloud agent has access to the repository by testing if you can assign Copilot to an issue on GitHub.
* Verify that the GitHub Copilot for Jira application has access to the repository. See [Reviewing And Modifying Installed GitHub Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps).

## Further reading

* [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent)
* [Access Management](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/access-management)
* [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers#example-atlassian)
* [Collaborate on work items with AI agents](https://support.atlassian.com/jira-software-cloud/docs/collaborate-on-work-items-with-ai-agents/) in the Atlassian documentation
