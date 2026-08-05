# Assessing adoption of security features

You can use security overview to see which repositories and teams have already enabled each security feature, and where people need more encouragement to adopt these features.

>[!NOTE] "Pull request alerts" are reported as enabled only when code scanning has analyzed at least one pull request since alerts were enabled for the repository.

## Viewing the enablement of security features for an organization

You can view data to assess the enablement of features for secure coding across repositories in an organization.

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. To display the "Security coverage" view, in the sidebar, click **{% octicon "meter" aria-hidden="true" aria-label="meter" %} Coverage**.
1. Use options in the page summary to filter results to show the repositories you want to assess. The list of repositories and metrics displayed on the page automatically update to match your current selection. For more information on filtering, see [Filtering Alerts In Security Overview](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/filtering-alerts-in-security-overview).
    * Use the **Teams** dropdown to show information only for the repositories owned by one or more teams. For more information, see [Managing Team Access To An Organization Repository](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository).
    * Click **NUMBER enabled** or **NUMBER not enabled** in the header for any feature to show only the repositories with that feature enabled or not enabled.
    * At the top of the list of repositories, click **NUMBER Archived** to show only repositories that are archived.
    * Click in the search box to add further filters to the repositories displayed.




In the list of repositories, a "Paused" label under "Dependabot" indicates repositories for which Dependabot updates are paused. For information about inactivity criteria, see [Dependabot Security Updates](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-security-updates#about-automatic-deactivation-of-dependabot-updates) and [Dependabot Version Updates](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-version-updates#about-automatic-deactivation-of-dependabot-updates), for security and version updates, respectively.

## Viewing the enablement of features for secure coding in an enterprise

You can view data to assess the enablement of security features across organizations in an enterprise.

1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.

1. At the top of the page, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. To display the "Security coverage" view, in the sidebar, click **Coverage**.
1. Use options in the page summary to filter results to show the repositories you want to assess. The list of repositories and metrics displayed on the page automatically update to match your current selection. For more information on filtering, see [Filtering Alerts In Security Overview](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/filtering-alerts-in-security-overview).
    * Use the **Teams** dropdown to show information only for the repositories owned by one or more teams. For more information, see [Managing Team Access To An Organization Repository](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository).
    * Click **NUMBER enabled** or **NUMBER not enabled** in the header for any feature to show only the repositories with that feature enabled or not enabled.
    * At the top of the list of repositories, click **NUMBER Archived** to show only repositories that are archived.
    * Click in the search box to add further filters to the repositories displayed.


   > [!TIP]
> You can use the `owner` filter in the search field to filter the data by organization. If you're an owner of an enterprise with managed users, you can use the `owner-type` filter to filter the data by the type of repository owner, so that you can view data from either organization-owned repositories or user-owned repositories. For more information, see [Filtering Alerts In Security Overview](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/filtering-alerts-in-security-overview).


## Viewing enablement trends for an organization

You can view data to assess the enablement status and enablement status trends of security features for an organization.

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. In the sidebar, under "Insights," click **{% octicon "meter" aria-hidden="true" aria-label="meter" %} Enablement**.
1. Click on one of the tabs for "Dependabot," "Code scanning," or "Secret scanning" to view enablement trends and the percentage of repositories in your organization with that feature enabled. This data is displayed as a graph and a detailed table.
1. Optionally, use the options at the top of the "Enablement trends" view page to filter the group of repositories you want to see enablement trends for.
    * Use the date picker to set the time range that you want to view enablement trends for.
    * Click in the search box to add further filters on the enablement trends displayed. The filters you can apply are the same as those for the "Overview" dashboard view. For more information, see [Filtering Alerts In Security Overview](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/filtering-alerts-in-security-overview).

      ![Screenshot of the "Enablement trends" view for an organization, showing Dependabot status and trends over 30 days, with a filter applied.](/assets/images/help/security-overview/security-overview-enablement-trends.png)

## Viewing enablement trends for an enterprise

You can view data to assess the enablement status and enablement status trends of security features across organizations in an enterprise.

1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.

1. At the top of the page, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. To display the "Enablement trends" view, in the sidebar, under "Insights", click **Enablement**.
1. Click on one of the tabs for "Dependabot," "Code scanning," or "Secret scanning" to view enablement trends and the percentage of repositories across organizations in your enterprise with that feature enabled. This data is displayed as a graph and a detailed table.
1. Optionally, use the options at the top of the "Enablement trends" view page to filter the group of repositories you want to see enablement trends for.
    * Use the date picker to set the time range that you want to view enablement trends for.
    * Click in the search box to add further filters on the enablement trends displayed. For more information, see [Filtering Alerts In Security Overview](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/filtering-alerts-in-security-overview).

>[!TIP] You can use the `owner:` filter in the search field to filter the data by organization. For more information, see [Filtering Alerts In Security Overview](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/filtering-alerts-in-security-overview).

## Acting on enablement data

After you have reviewed enablement coverage, consider the following actions.

1. Check if your enterprise has configured overly restrictive policies that limit the use of security features. See [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).
1. Enable features that should be enabled on all repositories. For information on enabling features for a whole organization, see [Configure Organization Security](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security).

   For example, secret scanning alerts and push protection reduce the risk of a security leak no matter what information is stored in the repository. If you see repositories that don't already use these features, you should either enable them or discuss an enablement plan with the team who owns the repository.

1. For other features, consider whether the feature should be enabled in more repositories. For example, there would be no point in enabling Dependabot for repositories that only use ecosystems or languages that are unsupported. As such, it's normal to have some repositories where these features are not enabled.

## Next steps


You can download a CSV file of the data displayed on the "Security coverage" page. This data file can be used for efforts like security research and in-depth data analysis, and can integrate easily with external datasets. See [Export Data](https://docs.github.com/en/code-security/how-tos/view-and-interpret-data/analyze-organization-data/export-data).


You can use the "Enablement trends" view to see enablement status and enablement status trends over time for Dependabot, code scanning, or secret scanning across repositories or organizations. See [Viewing enablement trends for an organization](#viewing-enablement-trends-for-an-organization) or [Viewing enablement trends for an enterprise](#viewing-enablement-trends-for-an-enterprise).
