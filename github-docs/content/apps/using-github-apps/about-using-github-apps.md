# About using GitHub Apps

## About GitHub Apps

GitHub Apps are tools that extend GitHub's functionality. GitHub Apps can do things on GitHub like open issues, comment on pull requests, and manage projects. They can also do things outside of GitHub based on events that happen on GitHub. For example, a GitHub App can post on Slack when an issue is opened on GitHub.

## Finding GitHub Apps


You can discover GitHub Apps on [GitHub Marketplace](https://github.com/marketplace). Developers can also share a link to their public app directly, even if it's not in the GitHub Marketplace.  On GitHub.com you can install public apps from any developer on your enterprise, organization, or user account, as long as you trust the developer.


>[!NOTE] Apps from GitHub Marketplace are not currently available on GHE.com.



You can also build your own GitHub App. For more information, see [About Creating GitHub Apps](https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps).

## Using GitHub Apps

In order to use a GitHub App, you must install the app on your enterprise, user or organization account. When you install the app, you grant the app permission to read or modify your account's data. The specific permissions depends on the app, and GitHub will tell you what permissions the app requested before you install the app. When you install the app on your organization or user account, you will also specify what repositories the app can access. Apps installed on an enterprise account can only manage the enterprise itself, and are not granted organization or repository permissions.

 If the app requires any additional configuration, the app will direct you to do so. For more information, see [Installing A GitHub App From GitHub Marketplace For Your Personal Account](https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-personal-account), [Installing A GitHub App From GitHub Marketplace For Your Organizations](https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-organizations), [Installing A GitHub App From A Third Party](https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-a-third-party) and [Installing Your Own GitHub App](https://docs.github.com/en/apps/using-github-apps/installing-your-own-github-app).

You may also need to authorize a GitHub App to verify your identity, know what resources you can access, or take actions on your behalf. If you need to authorize the app, the app will prompt you to do so. When an app acts on your behalf, it has access to the same resources that you do as long as the app is installed on the account that owns the resources and you have given it the right permissions. For more information, see [Authorizing GitHub Apps](https://docs.github.com/en/apps/using-github-apps/authorizing-github-apps).

Occasionally, the GitHub App will request updated permissions. GitHub will notify you when this occurs. In order for the app to continue to function, you will need to review and approve the updated permissions. For more information, see [Approving Updated Permissions For A GitHub App](https://docs.github.com/en/apps/using-github-apps/approving-updated-permissions-for-a-github-app).

Before you install or authorize a GitHub App, you should make sure that you trust the app developer. If you no longer use the app, you should suspend or uninstall the app and/or revoke your authorization of the app. For more information, see [Reviewing And Modifying Installed GitHub Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps#blocking-access) and [Reviewing And Revoking Authorization Of GitHub Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps).



## Agent apps

> [!NOTE] Agent apps are currently in public preview and subject to change.


Agent apps are GitHub Apps that expose agents on GitHub. GitHub partners build agent apps to bring their tools and services into your development workflow. These agent apps are agents you can delegate work to alongside Copilot cloud agent and other third-party agents. Powered by Copilot cloud agent, you can trigger these agents from issues, pull requests, and the Agents UI.

When you install an agent app, you will be asked if you want to enable agent features. For more information, see [Agent Apps](https://docs.github.com/en/copilot/concepts/agents/agent-apps).

If the app is installed in an organization owned by an enterprise, an administrator must also enable the "agent apps" Copilot policy before the agent features become available.



## GitHub Apps and OAuth apps
GitHub also supports OAuth apps. Unlike GitHub Apps, you do not install an OAuth app or control what repositories it can access.

Both OAuth apps and GitHub Apps use OAuth 2.0.

OAuth apps can only act on behalf of a user, while GitHub Apps can either act on behalf of a user or independently of a user.

For more information, see [Differences Between GitHub Apps And OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps) and [Authorizing OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/using-oauth-apps/authorizing-oauth-apps).
