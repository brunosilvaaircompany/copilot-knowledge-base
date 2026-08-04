# Assessing the security risk of your code

## Exploring the security risks in your code

You can use the different views on your **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab to explore the security risks in your code.

* **Overview:** use to explore trends in **Detection**, **Remediation**, and **Prevention** of security alerts.
* **Risk:** use to explore the current state of repositories, across all alert types.
* **Assessments:** use to explore the current state of repositories, for secret leaks specifically
* **Findings:** use to explore code scanning, Dependabot, or secret scanning alerts in greater detail.

These views provide you with the data and filters to:

* Assess the landscape of security risk of code stored in all your repositories.
* Identify the highest impact vulnerabilities to address.
* Monitor your progress in remediating potential vulnerabilities.
* Understand how your organization is affected by secret leaks and exposures.
* Export your current selection of data for further analysis and reporting.  

For information about the **Overview**, see [Viewing Security Insights](https://docs.github.com/en/code-security/how-tos/view-and-interpret-data/analyze-organization-data/viewing-security-insights).

## Viewing organization-level security risks in code

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. To display the "Security risk" view, in the sidebar, click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Risk**.

1. Use options in the page summary to filter results to show the repositories you want to assess. The list of repositories and metrics displayed on the page automatically update to match your current selection. For more information on filtering, see [Filtering Alerts In Security Overview](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/filtering-alerts-in-security-overview).
    * Use the **Teams** dropdown to show information only for the repositories owned by one or more teams.
    * Click **NUMBER affected** or **NUMBER unaffected** in the header for any feature to show only the repositories with open alerts or no open alerts of that type.
    * Click any of the descriptions of "Open alerts" in the header to show only repositories with alerts of that type and category. For example, **1 critical** to show the repository with a critical alert for Dependabot.
    * At the top of the list of repositories, click **NUMBER Archived** to show only repositories that are archived.
    * Click in the search box to add further filters to the repositories displayed.


   ![Screenshot of the "Security risk" view for an organization. The options for filtering are outlined in dark orange.](/assets/images/help/security-overview/security-risk-view-highlights.png)

        > [!NOTE] The set of unaffected repositories includes all repositories without open alerts and also any repositories where the security feature is not enabled.


1. Optionally, use the sidebar on the left to explore alerts for a specific security feature in greater detail. On each page, you can use filters that are specific to that feature to refine your search.
 
1. Optionally, use the **{% octicon "download" aria-hidden="true" aria-label="download" %} Export CSV** button to download a CSV file of the data currently displayed on the page for security research and in-depth data analysis. For more information, see [Export Data](https://docs.github.com/en/code-security/how-tos/view-and-interpret-data/analyze-organization-data/export-data). 

>[!NOTE] The summary views ("Overview", "Coverage" and "Risk") show data only for default alerts. Secret scanning alerts for ignored directories and generic alerts are all omitted from these views. Consequently, the individual alert views may include a larger number of open and closed alerts.


## Viewing enterprise-level security risks in code

You can view data for security alerts across organizations in an enterprise.

> [!TIP]
> You can use the `owner` filter in the search field to filter the data by organization. If you're an owner of an enterprise with managed users, you can use the `owner-type` filter to filter the data by the type of repository owner, so that you can view data from either organization-owned repositories or user-owned repositories. For more information, see [Filtering Alerts In Security Overview](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/filtering-alerts-in-security-overview).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.

1. At the top of the page, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. To display the "Security risk" view, in the sidebar, click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Risk**.
1. Use options in the page summary to filter results to show the repositories you want to assess. The list of repositories and metrics displayed on the page automatically update to match your current selection. For more information on filtering, see [Filtering Alerts In Security Overview](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/filtering-alerts-in-security-overview).
    * Use the **Teams** dropdown to show information only for the repositories owned by one or more teams.
    * Click **NUMBER affected** or **NUMBER unaffected** in the header for any feature to show only the repositories with open alerts or no open alerts of that type.
    * Click any of the descriptions of "Open alerts" in the header to show only repositories with alerts of that type and category. For example, **1 critical** to show the repository with a critical alert for Dependabot.
    * At the top of the list of repositories, click **NUMBER Archived** to show only repositories that are archived.
    * Click in the search box to add further filters to the repositories displayed.


    ![Screenshot of the "Security risk" view for an enterprise. The options for filtering are outlined in dark orange.](/assets/images/help/security-overview/security-risk-view-highlights-enterprise.png)

        > [!NOTE] The set of unaffected repositories includes all repositories without open alerts and also any repositories where the security feature is not enabled.

1. Optionally, use the sidebar on the left to explore alerts for a specific security feature in greater detail. On each page, you can use filters that are specific to that feature to refine your search.

1. Optionally, use the {% octicon "download" aria-hidden="true" aria-label="download" %} **Export CSV** button to download a CSV file of the data currently displayed on the page for security research and in-depth data analysis. For more information, see [Export Data](https://docs.github.com/en/code-security/how-tos/view-and-interpret-data/analyze-organization-data/export-data). 

>[!NOTE] The summary views ("Overview", "Coverage" and "Risk") show data only for default alerts. Secret scanning alerts for ignored directories and generic alerts are all omitted from these views. Consequently, the individual alert views may include a larger number of open and closed alerts.




## Next steps

When you have assessed your security risks, you are ready to create a security campaign to collaborate with developers to remediate alerts. For information about fixing security alerts at scale, see [Creating Managing Security Campaigns](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/creating-managing-security-campaigns) and [Best Practice Fix Alerts At Scale](https://docs.github.com/en/code-security/tutorials/secure-your-organization/best-practice-fix-alerts-at-scale).
