# Enabling OAuth app access restrictions for your organization

When you create a new organization, OAuth app access restrictions are enabled by default. Organization owners can [disable OAuth app access restrictions](/organizations/managing-oauth-access-to-your-organizations-data/disabling-oauth-app-access-restrictions-for-your-organization) at any time.


Even if you restrict OAuth apps access in your organization, users can still authorize privileged OAuth apps and use them to access data from the organization. For more information, see [Privileged OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/using-oauth-apps/privileged-oauth-apps).

> [!WARNING]
> * Enabling OAuth app access restrictions will revoke organization access for all previously authorized OAuth apps and SSH keys. For more information, see [About OAUTH App Access Restrictions](https://docs.github.com/en/organizations/managing-oauth-access-to-your-organizations-data/about-oauth-app-access-restrictions).
> * Once you've set up OAuth app access restrictions, make sure to reauthorize any OAuth app that require access to the organization's private data on an ongoing basis. All organization members will need to create new SSH keys, and the organization will need to create new deploy keys as needed.
> * When OAuth app access restrictions are enabled, applications can use an OAuth token to access information about GitHub Marketplace transactions.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Third-party Access" section of the sidebar, click **{% octicon "person" aria-hidden="true" aria-label="person" %} OAuth app policy**.

1. Under "Third-party application access policy," click **Setup application access restrictions**.
1. After you review the information about third-party access restrictions, click **Restrict third-party application access**.
