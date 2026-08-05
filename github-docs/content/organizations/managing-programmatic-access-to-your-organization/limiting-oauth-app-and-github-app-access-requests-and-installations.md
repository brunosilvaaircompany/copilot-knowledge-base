# Limiting OAuth app and GitHub App access requests and installations

## About app access requests

When app access requests are enabled, members and outside collaborators can request organization access for GitHub Apps and OAuth apps which have not yet been approved by your organization. For GitHub Apps this is a request for installation, which grants the app access to your organization directly. For OAuth apps this is a request to allow the app through the [About OAUTH App Access Restrictions](https://docs.github.com/en/organizations/managing-oauth-access-to-your-organizations-data/about-oauth-app-access-restrictions), which allows the app to access your organization after it's signed in a user.

You can control if members or outside collaborators are able to request unapproved apps for your organization. Users can still consent to apps for use in their personal accounts, and use them with your organization if you've approved those apps for use.

By default, app access requests are enabled. If your organization has a large number of members or outside collaborators, you may want to disable app access requests to reduce the number of requests you have to review.

## Enabling or disabling app access requests

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Access" section of the sidebar, click **Member privileges**.

1. Under "App access requests" select which users should be allowed to request apps and click **Save**.

Blocking app access requests from organization members is in public preview.



## About GitHub App installation restrictions

By default, repository admins can install GitHub Apps on repositories within your organization if the app does not request organization permissions or the "repository administration" permission. As an organization owner, you can restrict GitHub App installations to only organization owners. When this restriction is enabled:

* Repository admins, including outside collaborators with repository admin access, cannot install GitHub Apps on their repositories.
* Repository admins must use the request flow to ask organization owners to install apps on their repositories.
* Repository admins cannot add their repositories to existing GitHub App installations in the organization.

This installation restriction applies to GitHub Apps only. OAuth apps require organization approval by default and cannot be approved on a per-repository basis.

> [!NOTE]
> If you have also disabled app access requests, users with repository admin access will be blocked from both installing apps and requesting installations.

## Restricting GitHub App installation to organization owners

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Access" section of the sidebar, click **Member privileges**.

1. Under "GitHub Apps", deselect **Allow repository admins to install GitHub Apps for their repositories** and click **Save**.
