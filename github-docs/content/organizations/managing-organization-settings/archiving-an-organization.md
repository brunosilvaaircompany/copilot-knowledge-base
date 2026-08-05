# Archiving an organization

> [!NOTE]
> You can only archive an organization if it's using GitHub Free or if the organization is part of an enterprise. If you want to archive an individually-billed organization, you must downgrade your organization to GitHub Free first. For more information, see [Downgrade Plan](https://docs.github.com/en/billing/how-tos/manage-plan-and-licenses/downgrade-plan).



## About archiving your organization

When you archive an organization, all repositories in the organization will be archived as well. This means that all issues, pull requests, and comments will be read-only. A key will be set in the API to indicate the organization has been archived. Many actions that can be performed in an organization will be disabled, including creating new repositories. You will still be able to delete repositories. You will also still be able to transfer repositories out of the organization, for example, to give a project to a user who is taking over active maintenance.

When an organization is archived, visitors to the organization's profile will see a banner indicating that it has been archived. The repositories in the organization will now have a badge and a banner on their home page indicating that they are read-only.

The difference between archiving individual repositories and archiving an entire organization is that, in archived organizations, individual repositories may not be unarchived independently. The whole organization is read-only and must be unarchived for any repository to be writeable again.

You can also delete an organization. Deleting your organization account permanently removes all repositories, forks of private repositories, wikis, issues, pull requests, and project or organization pages. For more information, see [Deleting An Organization Account](https://docs.github.com/en/organizations/managing-organization-settings/deleting-an-organization-account).

## Archiving your organization

You can archive your organization to make it read-only and indicate that it's no longer actively maintained. Prior to archiving, consider updating your organization's profile and README with context about why it's archived. To add an organization-wide README, see [Customizing Your Organizations Profile](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile).

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Danger zone" section, click **Archive this organization**.
1. Read the warning. If you want to proceed, type the organization's name, then click **Archive the organization**.

You will see a notice at the top of the page indicating that the archiving process has started. The archiving process runs in the background and does not require any user interaction. Once the process is complete, the organization's profile will display a banner indicating the organization has been archived.

## Unarchiving your organization

You can unarchive an organization that has been archived. This will re-enable the ability to unarchive individual repositories in the organization, but will not automatically unarchive them. It will also re-enable the creation of new repositories.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Danger zone" section, click **Unarchive this organization**.
1. Read the warning. If you want to proceed, type the organization's name, then click **Unarchive the organization**.
