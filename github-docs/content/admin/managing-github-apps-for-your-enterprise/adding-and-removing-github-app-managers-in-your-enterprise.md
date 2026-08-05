# Adding and removing GitHub App managers in your enterprise

## About GitHub App managers

Enterprise owners can designate other users in their enterprise as GitHub App managers for apps.

An app manager:

* Can manage the settings for a GitHub App registration that is owned by the enterprise. For the specific app settings that GitHub App managers can control, see [Modifying A GitHub App Registration](https://docs.github.com/en/apps/maintaining-github-apps/modifying-a-github-app-registration).
* Cannot install and uninstall GitHub Apps on an enterprise or organization.

When an enterprise app manager adds permissions to a GitHub App, the update is automatically accepted in all organizations where the app manager is also an organization owner. When an enterprise owner adds permissions to a GitHub App, the update is automatically accepted in all organizations regardless of their organization membership.

## Granting the ability to manage an individual GitHub App


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. In the left sidebar, click **{% octicon "apps" aria-hidden="true" %} GitHub Apps**.


1. Under "GitHub Apps", click on the avatar of the app you'd like to add a GitHub App manager for.
1. In the left sidebar, click **App managers**.
1. At the bottom of the "App managers" section, in the search field, type the username of the person you want to designate as a GitHub App manager for the app, then click **Grant**.

The user must be a member of the enterprise to be granted GitHub App manager permissions.

## Removing managers from an individual GitHub App


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. In the left sidebar, click **{% octicon "apps" aria-hidden="true" %} GitHub Apps**.


1. Under "GitHub Apps", click on the avatar of the app you'd like to remove a GitHub App manager from.
1. In the left sidebar, click **App managers**.
1. Under "App managers", next to the person you want to remove GitHub App manager permissions from, click **Revoke**.



## Granting the ability to manage all enterprise-owned apps

Enterprise app manager is a predefined role that grants access to all app registrations owned by the enterprise. See [Assign Roles](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/assign-roles).



## Further reading

* [Creating GitHub Apps For Your Enterprise](https://docs.github.com/en/admin/managing-github-apps-for-your-enterprise/creating-github-apps-for-your-enterprise)
* [About GitHub App Managers](https://docs.github.com/en/apps/maintaining-github-apps/about-github-app-managers)
