# Introduction to billing and licensing

## Key functionalities

The billing and licensing pages on GitHub contain views and options to help you understand and manage the cost of using paid products, plans, and subscriptions. Key tasks you can perform are:

* **Prevent overspending**: Use budgets and alerts to track and control your spending.
* **Observe and understand spending**: Understand how your spending is distributed across products.
* **Estimate future spending**: View trends in your spending based on the usage across cost centers (enterprise accounts only) and budgets (all accounts).
* **Gather insights and data**: Generate usage reports to share with your team or stakeholders, and know if you're on track with your budget.
* **Allocate costs to centers**: Improve accountability by creating and assigning organizations, repositories, and members to cost centers.

## Accessing the billing pages

You can only access billing information for an account where you are an owner, a billing manager, or have equivalent permissions. For more information, see [Billing Roles](https://docs.github.com/en/billing/reference/billing-roles).

1. In the upper-right corner of any page on GitHub, click your profile picture.

   * For **personal accounts**, click **Settings**: https://github.com/settings/billing.
   * For **organizations**, click **Your organizations**, then next to the organization, click **Settings**.
   * For **enterprises**, click **Your enterprises**, then click **Settings**.

1. Click **Billing & Licensing**.

   * For **personal accounts** and **organizations**, the option is displayed under "Access" in the side bar. Then click **Overview**.
   * For **enterprises**, the **Billing & Licensing** option is displayed as a separate tab, next to the "Settings" tab.

If you have questions, please contact [GitHub Support](https://support.github.com).

> [!NOTE] When you enable GitHub Secret Protection, GitHub Code Security, or GitHub Advanced Security, there is a delay of up to two hours before the change is shown in the usage data on the "Billing and licensing" tab.


## Accessing billing information programmatically

You can use the REST API to download the usage report for a personal or organization account. First you will need to create a fine-grained access token with the permissions defined by the end point, see:

* [Get billing usage report for a user](/rest/billing/usage?apiVersion=2022-11-28#get-billing-usage-report-for-a-user)
* [Get billing usage report for an organization](/rest/billing/usage?apiVersion=2022-11-28#get-billing-usage-report-for-an-organization)
* [Get billing usage report for an enterprise](/rest/billing/usage?apiVersion=2022-11-28#get-billing-usage-report-for-an-enterprise)

For more information, see [Automate Usage Reporting](https://docs.github.com/en/enterprise-cloud@latest/billing/tutorials/automate-usage-reporting).

## Next steps

* [View Productlicense Use](https://docs.github.com/en/billing/how-tos/products/view-productlicense-use)
* [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets)
* [Control Costs At Scale](https://docs.github.com/en/billing/tutorials/control-costs-at-scale)
