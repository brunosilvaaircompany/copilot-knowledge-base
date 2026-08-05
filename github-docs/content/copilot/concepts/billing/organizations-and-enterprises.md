# About billing for GitHub Copilot in organizations and enterprises

## Available plans

GitHub offers the following plans for organization accounts:

* **Copilot Business** at $19 USD per user per month, includes 1,900 AI credits per user, and access to a broad model catalog.
* **Copilot Enterprise** at $39 USD per user per month, includes 3,900 AI credits per user (GitHub Enterprise Cloud only), and priority access to new models and features.



> [!NOTE]
> Existing customers receive higher included AI credits during the promotional period (June–August 2026). See [Usage Based Billing For Organizations And Enterprises](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises#promotional-amounts-for-existing-customers).



With GitHub Enterprise Cloud:

* An enterprise owner chooses the plan for each organization in the enterprise. For guidance on choosing a plan, see [Choose Enterprise Plan](https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/assign-licenses/choose-enterprise-plan).

* Data-resident and FedRAMP-compliant Copilot requests include a 10% model multiplier increase. See [GitHub Copilot With Data Residency](https://docs.github.com/en/admin/data-residency/github-copilot-with-data-residency#pricing-changes).

## GitHub AI Credits

Copilot usage is measured in AI credits under usage-based billing. Each license contributes AI credits to a shared enterprise pool, and usage beyond the pool is charged at $0.01 USD per AI credit. Code completions and next edit suggestions are not billed in AI credits and remain unlimited for all paid plans.

For a full explanation of how AI credits work, including pooling, additional usage, and what happens when credits run out, see [Usage Based Billing For Organizations And Enterprises](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

## Seat assignment

A Copilot seat is a license to use GitHub Copilot for a user. Each month, your organization or enterprise is billed for the number of assigned seats.

Seat assignment is managed by organization owners. With GitHub Enterprise Cloud, an enterprise owner must have enabled GitHub Copilot for the organization before an organization owner can assign seats. See [Grant Access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-access/grant-access).

If a user receives a seat from multiple organizations in the same enterprise, the enterprise will be billed only once, and one organization is selected and billed for the seat. To determine which organization is billed for a given user, request a detailed usage report and refer to the `organization` column for the user's Copilot license. See [Billing Reports](https://docs.github.com/en/billing/reference/billing-reports).

## Billing cycles

Billed users are calculated at the end of each billing cycle, based on the number of GitHub Copilot seats that are assigned. Although you can add or remove seats at any time during the billing cycle, billing for removed seats continues until the end of the current billing cycle. See [License Changes](https://docs.github.com/en/copilot/reference/copilot-billing/license-changes).

## Managing costs

You can control AI credits spend using budget controls at the user, cost center, and enterprise level. For an overview of how budget controls work, see [Budgets For Usage Based Billing](https://docs.github.com/en/copilot/concepts/billing/budgets-for-usage-based-billing). For guidance on choosing a configuration, see [Optimizing Your Budget Configuration](https://docs.github.com/en/copilot/tutorials/budgets/optimizing-your-budget-configuration).

## Reference

For detailed reference information about billing options and the effects of changes during a billing cycle, see [Copilot Billing](https://docs.github.com/en/copilot/reference/copilot-billing).
