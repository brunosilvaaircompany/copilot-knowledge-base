# Viewing your usage of metered products and licenses

> [!TIP]
> **GitHub Enterprise Server** administrators should instead see [Download License Use](https://docs.github.com/en/billing/how-tos/products/download-license-use).

## Viewing a summary of usage

The options available to you vary according to your role and GitHub plan.

GitHub Enterprise Cloud:

* Anyone can view usage data for their own personal account unless a license for a metered product (for example, Copilot) is assigned to them by an organization or enterprise account.
* If you are an **owner** or **billing manager** of an enterprise, or an organization on GitHub Team, you will also have access to usage data for that organization or enterprise account.

GitHub Enterprise Server:
* Enterprise owners can access and download usage data for licenses, see [Download License Use](https://docs.github.com/en/billing/how-tos/products/download-license-use).

### Personal accounts

1. Open your billing overview page: [https://github.com/settings/billing](https://github.com/settings/billing?ref_product=github&ref_type=engagement&ref_style=text).

1. Use the tabbed view to see a summary of consumed use for each product that you use (in this example, the "Advanced Security" tab is shown).

   ![Screenshot of the tabbed view showing "Advanced Security" with the "View details" links outlined in dark orange.](/assets/images/help/billing/overview-product-summary.png)

1. Optionally, click **View details** to show more detailed information.

### Organization and enterprise accounts

1. Navigate to your organization or enterprise. For example, from the [Organizations](https://github.com/settings/organizations?ref_product=github&ref_type=engagement&ref_style=text) or [Enterprises](https://github.com/settings/enterprises?ref_product=ghec&ref_type=engagement&ref_style=text) pages on GitHub.com.

1. Click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing** to display the billing and licensing overview for the account:
   * **Organization** accounts: under "Access" in the sidebar for settings.
   * **Enterprise** accounts: a separate tab at the top of the page.


## Exploring usage data in more detail

You can also explore usage data for all metered products in more detail in the **Usage** or **Metered usage** view.

* **Filter data on the page**: click in the text box to see a list of available filters.
* **Group data**: options in the "Group" option vary based on the filters you define.
* **Choose a time period**: use the "Time Frame" option.

The metered usage chart and usage break down table both show your current choice of data.

![Screenshot of the metered usage chart showing "Actions grouped by SKU" with the three control fields outlined in dark orange.](/assets/images/help/billing/product-usage-chart.png)


> [!TIP]
> For GitHub Actions, you can also view the billable job execution minutes for an individual workflow run. For more information, see [View Job Execution Time](https://docs.github.com/en/actions/how-tos/monitor-workflows/view-job-execution-time).




## Analyzing AI credits usage

> [!NOTE]
> Enterprise owners and billing managers can filter AI usage data by user. Organization owners cannot view user-level data directly—to see per-user consumption, download a usage report instead. See [Downloading usage reports](#downloading-usage-reports).

If you use Copilot, an additional **AI usage** view is listed under **Usage**. You can use this view to dig deeper into how your enterprise is consuming AI credits and where additional spend is occurring. For example:

* What's our total AI credits consumption across all users?
* Which users are the heaviest consumers, and are they within their budget?
* Which models are driving the most spend?
* How widespread is adoption in the organizations where we rolled out Copilot?

To understand how AI credits are pooled across your enterprise and what the usage data represents, see [Usage Based Billing For Organizations And Enterprises](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).



## Downloading usage reports

1. Visit the "Metered Usage" page to access a metered billing report for all products, or navigate to the "AI usage" page for a detailed report on AI credits consumption.
1. At the top of the page, click **Get usage report**.
1. Specify the report details.
1. Click **Email me the report**.

When the report is ready for you to download, you'll receive a message to your primary email account with a link to download the report. The link will expire after 24 hours.

For details of the fields included in the reports, see [Billing Reports](https://docs.github.com/en/billing/reference/billing-reports).

### Downloading the data plotted in the chart

When the chart on the "Metered usage" or "AI usage" page shows the data you want to download, click the {% octicon "kebab-horizontal" aria-label="Chart options" aria-hidden="true" %} button and select your preferred format.

![Screenshot of the usage chart on the "AI usage" page with "Chart options" open and outlined in dark orange.](/assets/images/help/billing/premium-request-analytics-chart-download.png)

## Next steps

* [Billing Reports](https://docs.github.com/en/billing/reference/billing-reports)
* [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets)
* [Automate Usage Reporting](https://docs.github.com/en/billing/tutorials/automate-usage-reporting)
