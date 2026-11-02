# GitHub Copilot seats and billing cycles for organizations and enterprises

## Available plans

Organizations and enterprises provide Copilot through assigned seats. The per-user access charge and included usage depend on the plan:

* **Copilot Business** at $19 USD per user per month, includes 1,900 AI credits per user, and access to a broad model catalog.
* **Copilot Enterprise** at $39 USD per user per month, includes 3,900 AI credits per user (GitHub Enterprise Cloud only), and priority access to new models and features.
* **Copilot access**, for eligible enterprises, at $0 incremental charge through GitHub Enterprise Cloud for licensed users, or $10 USD per user per month as Copilot Standalone without a GitHub Enterprise Cloud license. This plan has no included usage allowance.

For eligibility and a comparison of the models, see [Whats Changing With GitHub Enterprise And Copilot](https://docs.github.com/en/copilot/get-started/whats-changing-with-github-enterprise-and-copilot).

Data-resident and FedRAMP-compliant Copilot requests include a 10% model multiplier increase. See [GitHub Copilot With Data Residency](https://docs.github.com/en/admin/data-residency/github-copilot-with-data-residency#pricing-changes).

## GitHub AI Credits

Metered usage is measured in AI credits. On Copilot Business and Copilot Enterprise, each license contributes credits to a shared pool, and usage beyond the pool is billed separately. On the Copilot access plan, metered usage is billed from the first use.

Inline code completions and next edit suggestions do not consume credits and remain unlimited, including when a user has a $0 USD budget or reaches an enforced spending limit.

For a full explanation of how AI credits work, including pooling, additional usage, and what happens when credits run out, see [Billing](https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/billing).

## Seat assignment

A Copilot seat is a license for one user. Assignment is required even when access has no incremental charge.

With Copilot access or Copilot Business, enterprise owners can assign seats directly to individuals or enterprise teams. Each member of an assigned team receives a seat.

Organization-wide assignment works differently by plan. With Copilot access, enterprise owners can assign seats to all members of an organization. With Copilot Business or Copilot Enterprise, enterprise owners enable Copilot for an organization, then organization owners assign seats to its members.

With licenses assigned through organizations on Copilot Business or Copilot Enterprise, a user with seats from multiple organizations in the same enterprise is billed only once. One organization is selected and billed for the seat. To identify it, request a detailed usage report and refer to the `organization` column. See [Billing Reports](https://docs.github.com/en/billing/reference/billing-reports).

For assignment instructions, see [Grant Access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access) or [Grant Access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-access/grant-access).

## Billing cycles

You can add or remove seats during a billing cycle. The effect on billing and access depends on your plan and the action taken.

### Copilot access through GitHub Enterprise Cloud or as Copilot Standalone

Removing a member's seat with **Remove access** retains their access until the end of the billing cycle. Losing the underlying GitHub Enterprise Cloud license or leaving the enterprise revokes access immediately. For the billing effects of each change, see [License Changes](https://docs.github.com/en/copilot/reference/copilot-billing/license-changes#copilot-access).

### Copilot Business and Copilot Enterprise

Billed users are calculated at the end of each billing cycle, based on the number of GitHub Copilot seats that are assigned. You can add or remove seats at any time during the billing cycle.

When you add seats, you will be billed pro rata for those seats for the rest of the billing cycle. Included AI credits for the seats may also be prorated. If you pay by credit card or PayPal, you will need to pay a prorated amount upfront to cover the seats for the rest of the current billing cycle.

When you remove seats, billing for those seats continues until the end of the current billing cycle.

> [!IMPORTANT]
> Users who are suspended or removed from your organization or enterprise lose access to Copilot immediately, but their seats are still billed through the end of the current billing cycle.

For more information, see [License Changes](https://docs.github.com/en/copilot/reference/copilot-billing/license-changes).

#### Payment dates for credit card or PayPal

If you pay by credit card or PayPal, you will be charged at the following times:

* At the beginning of the calendar month, for all assigned GitHub Copilot licenses
* At the beginning of the billing cycle, for any usage from the previous cycle outside your plan's allowance
* Whenever you need to pay to continue using AI credits
* Whenever you purchase additional licenses during the billing cycle

You will receive a receipt and invoice at each point, which you can view on your "Payment history" page.

## Managing costs

You can control AI credits spend using budget controls at the user, cost center, and enterprise level. For an overview of how budget controls work, see [Budgets](https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/budgets). For guidance on choosing a configuration, see [Optimizing Your Budget Configuration](https://docs.github.com/en/copilot/tutorials/budgets/optimizing-your-budget-configuration).

## Reference

For detailed reference information about billing options and the effects of changes during a billing cycle, see [Copilot Billing](https://docs.github.com/en/copilot/reference/copilot-billing).
