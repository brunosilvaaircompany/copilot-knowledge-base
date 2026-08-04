# Gathering insights on your spending

The billing platform provides you with the tools to:

* **Get insights** into usage trends to understand how your resources are being used.
* **Search and filter usage** by repository, product, or SKU, and group data accordingly.
* **Generate reports** on past usage for various time periods, including the current hour, today, this month, last month, this year, last year, or a custom date range.



## Viewing usage for your personal account

You can view the usage of your personal account and download the usage data for further analysis.

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.

1. Click **Usage**.
1. To search or filter the graph, click the search bar. Then click the filter you want to use.
1. To further filter the graph, use the dropdown menus.

   * To see the usage by group, select **Group**, then click a group.
   * To filter by time, select **Time Frame**, then click a time period.
   * Optionally, to view the monthly budget and actual usage per day, select **Group: None** and **Time Frame: Current Month**.

   Below the graph, you can see a more granular overview of the usage. Click the arrow next to a specific date to see a nested table with usage per SKU, units, price/unit, and actual usage.

   >[!NOTE] The usage graph is configured to represent the start of the month to the end of the month, not your specific billing period.

1. To request a CSV usage report, select **Get usage report** in the upper-right corner of the page.

   You can choose a pre-selected option or use the "Custom range" option to specify a date range of up to 31 days.



## Viewing usage for your organization{% elsif ghec or ghes %}enterprise

Organization **owners**{% elsif ghec or ghes %}Enterprise **owners** and **billing managers** can view the usage of your organization{% elsif ghec or ghes %}enterprise members and download the usage data for further analysis.



1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. On the left side of the page, in the organization sidebar, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing**.


{% elsif ghec %}


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.




1. Click **Usage**, then click **Metered usage** or **AI usage**.
1. To search or filter the graph, click the search bar. Then click the filter you want to use.
1. To further filter the graph, use the dropdown menus.

   * To see the usage by group, select **Group**, then click a group.
   * To filter by time, select **Time Frame**, then click a time period.
   * Optionally, to view the monthly budget and actual usage per day, select **Group: None** and **Time Frame: Current Month**.

   Below the graph, you can see a more granular overview of the usage. Click the arrow next to a specific date to see a nested table with usage per SKU, units, price/unit, and actual usage.

   >[!NOTE] The usage graph is configured to represent the start of the month to the end of the month, not your specific billing period.

1. To request a CSV usage report, select **{% octicon "download" aria-hidden="true" aria-label="download" %} Get usage report** in the upper-right corner of the page.

> [!NOTE] Data for the detailed usage report is available only through the GitHub web interface and cannot be obtained via the REST API `/usage` endpoint. The REST API only provides access to summarized billing information.


## Viewing license usage

You can view the license usage of your organization{% elsif ghec or ghes %}enterprise members and download the usage data for further analysis.



1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. On the left side of the page, in the organization sidebar, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing**.


{% elsif ghec %}

The following license types are available:

* User
* GitHub Secret Protection and GitHub Code Security
* GitHub Enterprise

You can also view your active GitHub Enterprise instances and users.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.




1. From the list of "Billing & licensing" pages, click **Licensing**.

1. To download a CSV report of the license usage, click {% octicon "kebab-horizontal" aria-label="Licensing dropdown" %} to the right of the usage you want to download, then click **{% octicon "download" aria-hidden="true" aria-label="download" %} CSV report**.

## Further reading


* [Billing](https://docs.github.com/en/rest/billing/billing)
* [Manage User Licenses](https://docs.github.com/en/billing/how-tos/manage-plan-and-licenses/manage-user-licenses)
