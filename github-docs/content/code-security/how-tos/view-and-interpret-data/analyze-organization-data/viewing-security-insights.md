# Viewing security insights

The overview page in security overview provides a consolidated dashboard of your organization or enterprise's security landscape. You can filter the dashboard by time period, tool, and other criteria to focus on specific areas of interest. For more information about the overview dashboard, available metrics, and access permissions, see [Security Overview](https://docs.github.com/en/code-security/concepts/security-at-scale/security-overview).


You can download a CSV file of the overview dashboard data for your organization or enterprise. For more information, see [Export Data](https://docs.github.com/en/code-security/how-tos/view-and-interpret-data/analyze-organization-data/export-data).



>[!NOTE] The summary views ("Overview", "Coverage" and "Risk") show data only for default alerts. Secret scanning alerts for ignored directories and generic alerts are all omitted from these views. Consequently, the individual alert views may include a larger number of open and closed alerts.


## Viewing the security overview dashboard for your organization

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. The overview page is the primary view that you will see after clicking on the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab. To get to the dashboard from another security overview page, in the sidebar, click **{% octicon "graph" aria-hidden="true" aria-label="graph" %} Overview**.
1. By default, the **Detection** tab is displayed. If you want to switch to another tab to see other metrics, click **Remediation** or **Prevention**.
1. Use the options at the top of the overview page to filter the group of alerts you want to see metrics for. All of the data and metrics on the page will change as you adjust the filters.
   * Use the date picker to set the time range that you want to view alert activity and metrics for.
   * Click in the search box to add further filters on the alerts and metrics displayed.

    ![Screenshot of the overview page in security overview. Filtering options are outlined in dark orange, including the date picker and search field.](/assets/images/help/security-overview/security-overview-dashboard-filters-3-tab.png)




## Viewing the security overview dashboard for your enterprise

{% ifversion ghes %}1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.

1. At the top of the page, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. By default, the **Detection** tab is displayed. If you want to switch to another tab to see other metrics, click **Remediation** or **Prevention**.
1. Use the options at the top of the overview page to filter the group of alerts you want to see metrics for. All of the data and metrics on the page will change as you adjust the filters.
   * Use the date picker to set the time range that you want to view alert activity and metrics for.
   * Click in the search box to add further filters on the alerts and metrics displayed.

    ![Screenshot of the overview page in security overview. Filtering options are outlined in dark orange, including the date picker and search field.](/assets/images/help/security-overview/security-overview-dashboard-filters-3-tab.png)


> [!TIP]
> You can use the `owner` filter in the search field to filter the data by organization. If you're an owner of an enterprise with managed users, you can use the `owner-type` filter to filter the data by the type of repository owner, so that you can view data from either organization-owned repositories or user-owned repositories. For more information, see [Filtering Alerts In Security Overview](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/filtering-alerts-in-security-overview).



The enterprise security overview also includes a **Public monitoring** page, where you can view alerts for secrets leaked by enterprise members in public repositories outside your enterprise. See [Viewing Public Monitoring Alerts](https://docs.github.com/en/code-security/how-tos/view-and-interpret-data/analyze-organization-data/viewing-public-monitoring-alerts).


{% endif %}

## Next steps

The dashboard displays metrics about alert status, remediation velocity, and high-risk repositories in your organization or enterprise. For detailed explanations of each metric and how it's calculated, see [Overview Dashboard Metrics](https://docs.github.com/en/code-security/reference/security-at-scale/overview-dashboard-metrics).

You can filter the dashboard by time period, tool, repository, and other criteria. For more information, see [Filtering Alerts In Security Overview](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/filtering-alerts-in-security-overview).
