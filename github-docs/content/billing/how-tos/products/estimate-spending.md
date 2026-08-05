# Viewing and estimating your spending

The new billing platform provides a high-level view of your spending trends based on the usage across products. You can use this information to estimate your spending and make informed decisions about your budget.



## Viewing spending for your personal account

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing**.

On this page, you can view your usage in the following categories:

* **Current metered usage:** The card on the top left shows the gross metered usage for your personal account.

* **By products:** You can use the product tabs to view usage and discounts for different products.

* **By repository:** The card at the bottom of the page shows the top five repositories that generate the most usage for your personal account. This helps you identify which repositories are consuming the most resources across Copilot, GitHub Actions, Codespaces, and other billable features. You can click {% octicon "kebab-horizontal" aria-label="Open column options" %} in the upper-right corner of each card to view all usage, including a breakdown by gross usage versus billable usage (minus any discounts that may apply).

Additionally, you can change your plan by clicking **Upgrade to Pro** or **Downgrade to Free** in the "Current plan" section.

At the top of the page, under "Next payment due", you can see the date of your next billing cycle.



## Viewing spending for your organization{% elsif ghec or ghes %}enterprise

The "Overview" page provides a high-level view of your spending and budgets.



1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. On the left side of the page, in the organization sidebar, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing**.


{% elsif ghec %}


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.




On this page, you can view your usage in the following categories:

* **Current metered usage:** The card on the top left shows the gross metered usage for your organization{% elsif ghec or ghes %}enterprise including all cost centers. Click **More details** to view a breakdown of the usage by cost center.

* **By products:** You can use the product tabs to view usage and discounts for different products.

   > [!NOTE] When you enable GitHub Secret Protection, GitHub Code Security, or GitHub Advanced Security, there is a delay of up to two hours before the change is shown in the usage data on the "Billing and licensing" tab.



* **By repository:** The card at the bottom of the page shows the top five repositories that generate the most usage. You can click **View details** in the upper-right corner of the card to view all usage, including a breakdown by gross usage versus billable usage (minus any discounts that may apply).
{% elsif ghec %}
* **By organization** and **by repository:** The two cards at the bottom of the page show the top five organizations and repositories that generate the most usage. You can click **View details** in the upper-right corner of each card to view all usage, including a breakdown by gross usage versus billable usage (minus any discounts that may apply).




## Viewing prepaid credits

Your prepaid credits are shown at the top of the page in the **Current included usage** card. To add more prepaid credits, you can contact your account manager in [GitHub's Sales team](https://github.com/enterprise/contact).

If you don't currently use prepaid credits, but have a volume subscription and would like to use credits, you can contact your account manager in [GitHub's Sales team](https://github.com/enterprise/contact). Prepaid credits are only available to customers who are invoiced (with or without metered add-ons). Prepaid credits can't be used if your account _only_ includes metered add-ons.

## Viewing promotion and discounts

You can see the total amount of promotions and discounts applied to your account on the Overview page. In the top right-hand corner of the **Current included usage** card, click **More details** to view a breakdown of your promotions and discounts.



## Creating a budget

As an enterprise owner or billing manager, you can set the budget for your enterprise, an organization within your enterprise, or a cost center. As an organization owner, you are able to set the budgets for the repositories you manage. See [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets#creating-a-budget).
