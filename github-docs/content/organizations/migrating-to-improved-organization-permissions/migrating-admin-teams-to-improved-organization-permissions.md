# Migrating admin teams to improved organization permissions

## About migrations for legacy admin teams

By default, all organization members can create repositories. If you restrict [repository creation permissions](/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization) to organization owners, and your organization was created under the legacy organization permissions structure, members of legacy admin teams will still be able to create repositories.

Legacy admin teams are teams that were created with the admin permission level under the legacy organization permissions structure. Members of these teams were able to create repositories for the organization, and we've preserved this ability in the improved organization permissions structure.

You can remove this ability by migrating your legacy admin teams to the improved organization permissions.

For more information, see [Repository Roles For An Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization).

> [!WARNING]
> If your organization has disabled [repository creation permissions](/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization) for all members, some members of legacy admin teams may lose repository creation permissions. If your organization has enabled member repository creation, migrating legacy admin teams to improved organization permissions will not affect team members' ability to create repositories.

## Migrating all of your organization's legacy admin teams

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Access" section of the sidebar, click **{% octicon "comment-discussion" aria-hidden="true" aria-label="comment-discussion" %} Team discussions**.

1. Review your organization's legacy admin teams, then click **Migrate all teams**.
1. Read the information about possible permissions changes for members of these teams, then click **Migrate all teams.**

## Migrating a single admin team

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Teams**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with the people icon and "Teams," is outlined in dark orange.](/assets/images/help/organizations/organization-teams-tab.png)

1. Click the name of the team.

1. In the team description box, click **Migrate team**.
