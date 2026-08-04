# Configuring user display names for your enterprise

## About user display names for enterprises

A user display name controls how enterprise members are shown across GitHub Enterprise. When the feature is enabled, a member’s profile name (first and last name) appears alongside their username in places like repositories, issues, pull requests, and GitHub Discussions. The setting applies to public, private, and internal repositories within your enterprise's organizations.

When set at the enterprise level, this policy is applied across all organizations within your enterprise.

Once configured, your chosen display format will be visible throughout these key areas:

* Pull requests: reviewers, assignees, pull request authors, activities, comments, @-mentions, and commits
* Issues: assignee, comments, activities, @-mentions, and owner
* Discussions: discussion owners, comments, and @-mentions
* Projects: assignee

By default:

* GitHub Enterprise Cloud with Enterprise Managed Users and GitHub Enterprise Server show profile names alongside usernames.
* All other enterprise accounts show usernames only.

## Changing the user display name setting for an enterprise


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. On the "Manage your enterprise profile" page, go to "Member appearance".
1. Under "Profile name visibility", select one of the following options in the adjacent dropdown list.
   * **Enable everywhere** to show profile names alongside usernames across all organizations in your enterprise, including in repositories, issues, pull requests, and discussions.
   * **Disable everywhere** to show **usernames only** across all organizations in your enterprise.
   * **Let organizations decide** to allow each organization in your enterprise to configure this setting.

## Changing the user display name setting for an organization

> [!NOTE]
> The organization-level setting will only be configurable if the enterprise-level policy is set to **Let organizations decide**.

To manage configure user display name at the organization level:
1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. On the "General" page, go to "Member appearance".
1. Under "Profile name visibility", select one of the following options in the toggle.
   * **On** to show profile names alongside usernames in your organization, including in repositories, issues, pull requests, and discussions.
   * **Off** to show **usernames only** across your organization.
