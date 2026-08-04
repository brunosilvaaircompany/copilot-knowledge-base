# Billing for cloud and local sandboxes for GitHub Copilot

> [!NOTE]
> Cloud and local sandboxes for GitHub Copilot are in public preview and subject to change.


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

For more information about cloud and local sandboxes, see [About Cloud And Local Sandboxes](https://docs.github.com/en/copilot/concepts/about-cloud-and-local-sandboxes).

## Free and billed use

During public preview, eligible GitHub accounts receive a **$10 monthly entitlement** to try cloud sandboxes. This entitlement is available through the end of July 2026. Any usage beyond the monthly entitlement is billed to your account.

After the preview period ends, the entitlement no longer applies and all usage is billed.

## Paying for use

You pay for cloud sandboxes using the payment method set up for your GitHub account. See [Manage Payment Info](https://docs.github.com/en/billing/how-tos/set-up-payment/manage-payment-info).

### Pricing

| Meter | Description | Unit | Price (USD) |
| --- | --- | --- |------------|
| Compute | Time that a cloud sandbox session is running. | Compute second | $0.000024 |
| Memory | Memory allocated to a cloud sandbox session while it is running. | GiB second | $0.000003 |
| Storage | Snapshot storage for stopped sessions. | GiB month | $0.005  |

## How costs are assigned to a billable account

Cloud sandbox usage is billed to the account that owns the sandbox.

You are prompted to select an owner for the session only if you are not currently in a Git repository. In this case, when you create a cloud sandbox session with `copilot ‑‑cloud`, you are prompted to select an owner—your own personal account is listed first, ahead of any organizations you belong to. You must choose either your personal account or one of the listed organizations, and all usage for that session is billed to the account you select.

If you are in a repository, the owner of the repository is billed and no owner selection is required.

## Managing your budget for cloud sandboxes

If your account does not have a valid payment method on file, usage is blocked once you use up your quota.

If you have a valid payment method on file, spending may be limited by one or more budgets. Check the budgets set for your account to ensure they are appropriate for your usage needs. See [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets).


You can set budgets and alerts to monitor and control your cloud sandbox spending. For more information, see [Budgets And Alerts](https://docs.github.com/en/billing/concepts/budgets-and-alerts) and [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets).

When you create a budget for cloud sandboxes, you can choose between two budget types:

* **Product-level budget**: caps spending across all cloud sandbox usage, regardless of SKU.
* **SKU-level budget**: caps spending for a specific cloud sandbox SKU (for example, "Sandbox Linux"). For a full list of cloud sandbox SKUs, see [Product And Sku Names](https://docs.github.com/en/billing/reference/product-and-sku-names).

If you enable **Stop usage when budget limit is reached**, additional cloud sandbox usage is blocked once the budget reaches 100%, and a banner notifies users in the affected scope.

> [!NOTE]
> Cloud sandboxes for GitHub Copilot are not part of the "Bundled AI credits" budget type. Bundled AI credits budgets apply only to SKUs that consume AI credits (such as GitHub Copilot AI credits, cloud agent AI credits, and GitHub Spark AI credits). To control cloud sandbox spending, use a product-level or SKU-level budget.

## Viewing your cloud sandbox usage

To view your cloud sandbox usage, billable amounts, and the monthly preview entitlement, see [Estimate Spending](https://docs.github.com/en/billing/how-tos/products/estimate-spending) and [Gather Insights](https://docs.github.com/en/billing/tutorials/gather-insights).

## Further reading

* [About Cloud And Local Sandboxes](https://docs.github.com/en/copilot/concepts/about-cloud-and-local-sandboxes)
* [About Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli)
* [How Billing Works](https://docs.github.com/en/billing/get-started/how-billing-works)
