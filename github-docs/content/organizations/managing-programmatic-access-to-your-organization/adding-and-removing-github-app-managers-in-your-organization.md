# Adding and removing GitHub App managers in your organization

## About GitHub App managers

Organization  and enterprise owners can designate other users or organization teams as GitHub App managers. GitHub App managers can manage the settings of some or all of the GitHub App registrations that are owned by the account. The GitHub App manager role does not grant recipients access to install and uninstall GitHub Apps on an organization  or enterprise. For organization-owned apps, the role also does not grant permission to list apps in GitHub Marketplace. Only organization owners can list apps in GitHub Marketplace. For more information about the specific app settings that GitHub App managers can control, see [Modifying A GitHub App Registration](https://docs.github.com/en/apps/maintaining-github-apps/modifying-a-github-app-registration).


For more information about GitHub App manager permissions, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers).

## Granting the ability to manage all GitHub Apps owned by the organization


To assign the App Manager organization role to a user or team, see [Using Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles#assigning-an-organization-role).

Use the role assignments page to see who has been granted this and any other organization role. Organization owners can always manage GitHub Apps and are not shown in this view.


## Granting the ability to manage an individual GitHub App

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the left sidebar, select **{% octicon "code" aria-hidden="true" aria-label="code" %} Developer settings** then click **GitHub Apps**.

1. Under "GitHub Apps", click on the avatar of the app you'd like to add a GitHub App manager for.
1. In the left sidebar, click **App managers**.

1. At the bottom of the "App managers" section, in the search field, type the username of the person or team you want to designate as a GitHub App manager for the app, then click **Grant**.

## Removing a GitHub App manager's permissions for the entire organization


See [Using Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles#deleting-an-organization-role-assignment) for directions on removing the App Manager role from a user or team.


## Removing managers from an individual GitHub App

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the left sidebar, select **{% octicon "code" aria-hidden="true" aria-label="code" %} Developer settings** then click **GitHub Apps**.

1. Under "GitHub Apps", click on the avatar of the app you'd like to remove a GitHub App manager from.
1. In the left sidebar, click **App managers**.

1. Under "App managers", next to the person or team you want to remove GitHub App manager permissions from, click **Revoke**.
