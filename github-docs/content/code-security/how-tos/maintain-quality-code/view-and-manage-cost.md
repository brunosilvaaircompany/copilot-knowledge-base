# Viewing and managing GitHub Code Quality costs

Knowing what Code Quality costs, and which levers you can pull, lets you justify the spend before you roll it out, and keep it predictable afterward. This article covers where charges come from, where to watch your usage, and how to bring costs down.

## How you're charged for Code Quality

Code Quality usage adds up from three types of cost across your organization:

* **License usage**, based on the number of unique, active committers to repositories where Code Quality is enabled.
* **GitHub Actions minutes**, consumed each time a scan runs (unless you use self-hosted runners).
* **GitHub AI Credits**, consumed by Code Quality's AI features: the fixes it generates for findings, and the scans on the **AI findings** page if you turn it on.

For exactly how each cost is measured, see [GitHub Code Quality?Utm_Campaign=Code Quality Ga July 2026&Utm_Medium=Docs&Utm_Source=Docs View Manage Cost Billing](https://docs.github.com/en/billing/concepts/product-billing/github-code-quality?utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-view-manage-cost-billing).

It's important to understand how GitHub Code Quality uses AI credits before you scale:

* Code Quality draws from your **shared AI credits pool**, the same pool every AI product (like Copilot) draws from. It isn't a separate Code Quality allowance.
* This pool is shared at your **billing entity** level. If your organization is billed through an enterprise, Code Quality draws from the enterprise-wide pool rather than an organization-only one.
* Once the shared pool is exhausted, what happens next depends on how you've configured your policy for additional usage. To avoid unexpected charges, set a budget with a hard stop.
* Your per-committer license charge is separate and isn't affected by AI credits usage.

## Where to see your usage

Code Quality usage appears in the **same billing and usage views as your other products**, not in a separate Code Quality meter. Where you look depends on how granular a breakdown you need:

* **For a repository- or organization-level breakdown, download the billing usage report** from the "Billing and licensing" tab. This is the only place you can attribute Code Quality spend, including GitHub Actions minutes, down to a specific repository or organization. There's no equivalent view in the UI. See [View Productlicense Use](https://docs.github.com/en/billing/how-tos/products/view-productlicense-use).
* **For Code Quality's AI credits usage over time, use the AI usage page** and group it by **Product** using the dropdown at the top right. This separates Code Quality from your other AI products, like Copilot, so you can track its share of the pool. To monitor the pool as a whole instead, see [Usage Based Billing For Organizations And Enterprises](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

## Monitoring your spend

Once Code Quality is running, watch your actual usage over time so costs stay predictable. Track two things:

* Your **GitHub Actions minutes**, which grow with the number of repositories running scans.
* Your **shared AI credits pool**, which Code Quality draws down alongside your other AI products. Watch the pool as a whole to avoid overage, and group the AI usage page by **Product** when you want Code Quality's share specifically.

## Controlling your costs

You have several levers to keep spend in check. In rough order of impact:

* **Enable selectively.** Turn Code Quality on where it adds value rather than across every repository at once. See [Enable Code Quality](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/enable-code-quality).
* **Disable low-value repositories.** Disabling Code Quality on a repository frees the licenses for committers unique to it, and stops its scans and AI usage. See [Disable Code Quality](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/disable-code-quality).
* **Set a budget.** A budget for Code Quality stops your spending automatically once you hit your limit, because the hard stop is mandatory (see below).
* **Keep the AI findings page off.** This page is **off by default** and stays in public preview, so it only draws down AI credits if you turn it on. Repositories that enabled it during the preview keep it on. To turn it off for a repository, disable **AI findings** on the repository's **Code quality** settings page.

### Setting a budget

Budgets are your main control for the AI credits side of Code Quality, because Code Quality draws from the shared AI credits pool.

For Code Quality, a budget is always a hard cap. When you create the budget, **Stop usage when budget limit is reached** is enabled by default and can't be turned off, so usage stops automatically once you exhaust the budget.

When you create a budget, you choose a **Budget type**. Two apply to Code Quality:

* An **AI credits budget**, which covers every SKU that consumes AI credits, including Code Quality. Use this to cap total AI spend across products.
* A **SKU-level budget**, scoped to Code Quality alone, so you can limit its spend without affecting your other AI products. This gives you granular, product-specific control, for example to contain spend during a rollout without touching your Copilot budget.

To get started, see [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets).

## What you can't control

Be aware of two limits so there are no surprises:

* **You can't pre-estimate spend** before you enable Code Quality. Usage depends on your committers, scan frequency, and findings, so plan to watch actuals after you turn it on rather than forecast them precisely.
* **You can't turn off the in-pull-request AI features.** Code Quality generates a fix for every detected finding, so AI credits usage is inherent to running it. To stop that usage entirely, disable Code Quality on the repository.

## Next steps

* **Roll out across your organization.** See [Roll Out At Scale](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/roll-out-at-scale).
* **Assess health across your organization.** See [Explore Code Quality](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/explore-code-quality).
