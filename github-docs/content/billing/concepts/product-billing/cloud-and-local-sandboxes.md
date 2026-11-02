# Billing for cloud and local sandboxes for GitHub Copilot

## How sandbox usage is measured

Billing applies to cloud sandboxing only. Local sandboxing is included in the standard GitHub Copilot seat at no additional cost.

A cloud sandbox session incurs charges across three meters:

* **Compute**: the time a cloud sandbox session is running.
* **Memory**: the memory allocated to a cloud sandbox session while it is running.
* **Storage**: snapshot storage for stopped sessions.

Usage is measured from the moment a session starts until it is stopped or deleted. Memory is measured based on the memory allocated to the session, not the memory actively in use.

### Compute

The compute meter tracks the time a cloud sandbox is running. Compute is not metered while a sandbox is stopped.

### Memory

The memory meter tracks the memory allocated to a cloud sandbox while it is running. Memory is not metered while a sandbox is stopped.

### Storage

The storage meter tracks snapshot storage for stopped sessions. When you stop a cloud sandbox, GitHub retains a snapshot of the sandbox's state so you can resume it later. Snapshot storage is metered from the time the sandbox is stopped until the sandbox is deleted.

For more information about cloud and local sandboxes, see [About Cloud Sandboxes](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes) and [About Cloud And Local Sandboxes](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes).

## Free and billed use

Your GitHub plan includes a monthly amount of **included compute usage**. Each product measures usage in its own units and applies its own rate. GitHub calculates the cost of that usage, which counts against the included compute usage. After the included amount is consumed, additional usage is billed to your account. The included amount resets at the start of each billing cycle.

The following usage can draw from the same included compute usage:

* **Standard GitHub-hosted runners** for private or internal repositories, and **cloud sandbox compute and memory**, on all plans.
* **Larger runners**, where available, when the billing account uses GitHub Team or GitHub Enterprise Cloud.

No eligible usage type has priority over another when drawing from the shared included compute usage.

The following usage remains free independently and does not reduce the included compute usage:

* Standard GitHub-hosted runners in public repositories. See [Choose The Runner For A Job](https://docs.github.com/en/actions/how-tos/write-workflows/choose-where-workflows-run/choose-the-runner-for-a-job#standard-github-hosted-runners-for-public-repositories).
* Self-hosted runners.

Larger runners are billed for public repositories.


For example, suppose a cloud sandbox runs for 600 seconds with 4 GiB of memory. At the published rates below:

* The compute cost is 600 compute seconds × $0.000024 USD, or $0.0144 USD.
* The memory cost is 2,400 GiB-seconds (4 GiB × 600 seconds) × $0.000003 USD, or $0.0072 USD.
* A total of $0.0216 USD is deducted from the account's included compute usage.

This example shows how usage measured in seconds and GiB-seconds draws from the same monetary value as runner usage measured in minutes. For the amount included with each plan, see [Product Usage Included](https://docs.github.com/en/billing/reference/product-usage-included).

## Paying for use

You pay for cloud sandboxes using the payment method set up for your GitHub account. See [Manage Payment Info](https://docs.github.com/en/billing/how-tos/set-up-payment/manage-payment-info).

### Pricing

| Meter | Description | Unit | Price (USD) |
| --- | --- | --- |------------|
| Compute | Time that a cloud sandbox session is running. | Compute second | $0.000024 |
| Memory | Memory allocated to a cloud sandbox session while it is running. | GiB second | $0.000003 |
| Storage | Snapshot storage for stopped sessions. | GiB month | $0.005  |

## How costs are assigned to a billable account

Cloud sandbox usage is billed to the account that owns the sandbox:

* **Sessions that work in repositories**: A session can work across multiple repositories, as long as they all have the same owner. That owner is billed, whether it's your personal account or an organization.
* **Sessions that don't work in a repository**: The account you choose as the owner is billed. You can choose your personal account or an organization you belong to. If you don't choose an owner, your personal account is billed.

For example, if you start a session with `copilot --cloud` when you aren't in a Git repository, Copilot CLI prompts you to select an owner. Your personal account is listed first, ahead of any organizations you belong to. All usage for that session is billed to the account you select.

## Managing your budget for cloud sandboxes

If your account does not have a valid payment method on file, usage is blocked once you use up your quota.

If you have a valid payment method on file, spending may be limited by one or more budgets. Check the budgets set for your account to ensure they are appropriate for your usage needs. See [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets).


You can set budgets and alerts to monitor and control your cloud sandbox spending. For more information, see [Budgets And Alerts](https://docs.github.com/en/billing/concepts/budgets-and-alerts) and [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets).

When you create a budget for cloud sandboxes, you can choose between two budget types:

* **Product-level budget**: caps spending across all cloud sandbox usage, regardless of SKU.
* **SKU-level budget**: caps spending for a specific cloud sandbox SKU (for example, "Sandboxes for GitHub Copilot: Linux"). For a full list of cloud sandbox SKUs, see [Product And Sku Names](https://docs.github.com/en/billing/reference/product-and-sku-names).

If you enable **Stop usage when budget limit is reached**, additional cloud sandbox usage is blocked once the budget reaches 100%, and a banner notifies users in the affected scope.

> [!NOTE]
> Cloud sandboxes for GitHub Copilot are not part of the "Bundled AI credits" budget type. Bundled AI credits budgets apply only to SKUs that consume AI credits (such as GitHub Copilot AI credits, cloud agent AI credits, and GitHub Spark AI credits). To control cloud sandbox spending, use a product-level or SKU-level budget.

## Viewing your cloud sandbox usage

To view your cloud sandbox usage, billable amounts, and remaining included compute usage, see [Estimate Spending](https://docs.github.com/en/billing/how-tos/products/estimate-spending) and [Gather Insights](https://docs.github.com/en/billing/tutorials/gather-insights).

## Further reading

* [About Cloud Sandboxes](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes)
* [About Cloud And Local Sandboxes](https://docs.github.com/en/copilot/concepts/about-cloud-and-local-sandboxes)
* [About Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli)
* [How Billing Works](https://docs.github.com/en/billing/get-started/how-billing-works)
