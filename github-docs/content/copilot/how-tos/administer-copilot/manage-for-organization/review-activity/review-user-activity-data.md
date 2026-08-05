# Reviewing user activity data for GitHub Copilot in your organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, and then click **Access**.

1. At the top of the page, under "GitHub Copilot," you can see an overview of your organization's GitHub Copilot usage. You can see the number seats assigned through your Copilot Enterprise or Copilot Business plan, and the estimated monthly cost.

   
   ![Screenshot of the GitHub Copilot usage overview.](/assets/images/help/copilot/copilot-usage-overview-enterprise.png)
   

1. Alternatively, under "Access management," you can use the **Sort** options to sort the list of users by when they last used GitHub Copilot.
1. For more detailed information, you can retrieve the **Activity report**. GitHub generates a report for you, which you can download as a CSV file.

## Using the API to retrieve assignment information

You can use GitHub's REST API to get details about the assignment of GitHub Copilot seats in your organization. See [Get Copilot seat information and settings for an organization](/rest/copilot/copilot-user-management?apiVersion=2022-11-28#get-copilot-seat-information-and-settings-for-an-organization), [List all Copilot seat assignments for an organization](/rest/copilot/copilot-user-management?apiVersion=2022-11-28#list-all-copilot-seat-assignments-for-an-organization), and [Get Copilot seat assignment details for a user](/rest/copilot/copilot-user-management?apiVersion=2022-11-28#get-copilot-seat-assignment-details-for-a-user).

## Troubleshooting `last_activity_at` data

If you believe a user's `last_activity_at` date should be more recent than shown in the CSV or API report, wait 24 hours and check again. If their recent Copilot usage is still not reflected in their `last_activity_at` date, have the user check that telemetry is enabled in their IDE settings.

For more information about this property and other data in the activity report, see [Metrics Data](https://docs.github.com/en/copilot/reference/metrics-data).

## Further reading


* [View License Usage](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/view-license-usage)
* [GitHub Copilot Trust Center](https://copilot.github.trust.page)
* [Grant Access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-access/grant-access)
* [Revoke Access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-access/revoke-access)
* [Review Changes](https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/review-changes)
