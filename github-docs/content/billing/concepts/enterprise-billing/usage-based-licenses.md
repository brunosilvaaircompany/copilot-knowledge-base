# Usage-based billing for enterprise licenses

Usage-based billing means you pay each month for the number of licenses actually consumed in your enterprise account, instead of committing to a fixed number in advance. This model provides flexibility and can be more cost-efficient than traditional volume licensing.



For how billing cycles work and how mid-cycle changes (such as adding or removing seats) affect charges, see [Billing Cycles](https://docs.github.com/en/billing/concepts/billing-cycles) and [Impact Of Plan Changes](https://docs.github.com/en/billing/concepts/impact-of-plan-changes).



## Do I have usage-based billing?

You are already enrolled in usage-based billing if you created a trial of GitHub Enterprise Cloud on or after August 1, 2024.

If you currently pay for your GitHub Enterprise licenses by invoice with a volume, subscription, or prepaid agreement, you will continue to be billed in this way until your agreement expires. At renewal, you have the option to switch to the metered billing model.


## Can I use GitHub Enterprise Server?

Although you can sync licenses with GitHub Enterprise Server, usage-based licensing is a cloud-first license model where users must first be added to an organization on GitHub Enterprise Cloud.

For a detailed comparison between usage-based and volume licensing models, see [Combined Enterprise Use](https://docs.github.com/en/billing/concepts/enterprise-billing/combined-enterprise-use#usage-based-and-volume-licensing).

## Can I use a Visual Studio bundle?

If you have a Visual Studio bundle with GitHub Enterprise Cloud, you can switch to usage-based billing by contacting your account manager or [GitHub's Sales team](https://github.com/enterprise/contact) ahead of contract renewal.

Usage-based billing will apply to non-bundled licenses, categorized as "GitHub Enterprise licenses" on your enterprise's Licensing page. These licenses include:

* Licenses for enterprise members who are not matched to a Visual Studio account.
* Any extra GitHub Enterprise licenses you consume beyond the number of licenses purchased in your volume agreement.

Bundled licenses (Visual Studio plus GitHub Enterprise) **remain on a volume agreement**.

Before switching to usage-based billing, to ensure you are not charged extra for Visual Studio users who should consume a bundled license:

* Ensure all Visual Studio users are correctly matched to their account on GitHub. See [Set Up Vs Subscription](https://docs.github.com/en/enterprise-cloud@latest/billing/how-tos/set-up-payment/set-up-vs-subscription#reconciling-users-across-visual-studio-and-github).
* Add all Visual Studio users to your enterprise on **GitHub Enterprise Cloud** before adding them to GitHub Enterprise Server. Users who are only on GitHub Enterprise Server will consume a "GitHub Enterprise" license once you switch to usage-based billing.

## How are metered licenses measured?


With metered billing, the cost of a license is calculated by measuring **consumed licenses** and **billable licenses**.

* **Consumed licenses**: The number of licenses currently in use.
* **Billable licenses**: The unique licenses billed in a billing cycle. If a user stops consuming a license within the month, the adjustment is reflected in your next month's bill.

If a user starts consuming a license in the middle of the billing cycle, you will pay pro rata for the user's license usage that month.

**For example:** The billing cycle begins on the first day of the month, and the account starts with 0 licenses.

* Day 1: The administrator adds 10 licensed users.
* Day 2: The administrator adds 20 licensed users.
* Day 3: The administrator removes 5 licensed users.
* Day 4: No change.

At the end of day 4, there will be:

* 25 consumed licenses `(10 + 20 - 5)`. This is the number of users actively consuming licenses.
* 30 billable licenses `(10 + 20)`. This is the number of distinct users that consumed a license at some point during the month.

Pending invitations to join an organization that belongs to your enterprise on GitHub do not consume a license.


To view your license usage and history, see [View Enterprise Usage](https://docs.github.com/en/billing/how-tos/manage-plan-and-licenses/view-enterprise-usage).

## Which payment methods can I use?

You can use the following payment methods for usage-based billing for licenses:

* Invoiced and self-serve GitHub Enterprise customers can pay using a **credit card** or **PayPal**
* Invoiced customers can also pay using **prepaid credits** (only available to customers who have a volume subscription with or without metered add-ons)
* You can connect an **Azure** subscription to your enterprise account
* For **purchase orders**, you can contact your account manager in [GitHub's Sales team](https://github.com/enterprise/contact)
