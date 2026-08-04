# Overview of request-based billing (legacy)

> [!IMPORTANT] This article only applies to Copilot Pro and Copilot Pro+ subscribers on an existing annual plan who remained on legacy premium request-based billing after June 1, 2026.


Usage of Copilot is measured through a combination of licenses and monthly usage tracking. For more information about how license costs in Copilot work, see [GitHub Copilot Licenses](https://docs.github.com/en/billing/concepts/product-billing/github-copilot-licenses).

## What are premium requests?

Some Copilot features use premium requests.
Premium requests give you access to advanced models and additional AI features.

Examples include:

* Using Copilot Chat with premium models
* Large context windows or advanced reasoning models
* Features like Copilot cloud agent
* Spark app creation

Each product's premium request usage is attributed to a premium request SKU:

* **Copilot premium requests** - Chat, CLI, Code Review, Extensions, and Spaces
* **Spark premium requests** - Spark app creation
* **Copilot cloud agent premium requests** - Copilot cloud agent sessions

See [Copilot Requests](https://docs.github.com/en/copilot/reference/copilot-billing/request-based-billing-legacy/copilot-requests) for details on which models and features consume premium requests and their SKU attribution.

> [!NOTE]
> Premium requests for Spark and Copilot cloud agent are tracked in dedicated SKUs from November 1, 2025. This provides better cost visibility and budget control for each AI product.


## How usage of premium requests is measured

Usage of premium requests is tracked monthly and is based on the following factors.

### Monthly allowance

* Each plan includes a fixed number of premium requests per user per month.
* Allowances vary by plan.
* Allowances reset on the 1st of each month at 00:00:00 UTC.

### Usage by premium models

* Each interaction that uses a premium model consumes from your allowance.
* Some models use **multipliers**, meaning a single interaction may count as multiple premium requests.
* For example, advanced reasoning models may consume 5× or 20× the standard rate.
* If you exceed your allowance and overages are enabled, extra usage is billed at the standard rate.

### Usage by Copilot cloud agent

When you use Copilot cloud agent, including any Copilot custom agents, both **GitHub Actions minutes** and **premium requests** are consumed:

* **GitHub Actions minutes** come from your account’s monthly allowance of free minutes for GitHub-hosted runners. This allowance is shared with all GitHub Actions workflows. See [GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions#free-use-of-github-actions).
* **Premium requests** come from the monthly allowance associated with your Copilot license. This allowance is shared with other features, such as Copilot Chat.

Each cloud agent **session** consumes one premium request. A session begins when you:

* Prompt Copilot to undertake a task.
* Assign Copilot to an issue

If you run out of free minutes or premium requests, and you have _not_ set up billing, a message is displayed explaining why Copilot cannot work on the task.

Copilot cloud agent uses a dedicated Copilot cloud agent premium request SKU. This SKU still pulls from your monthly allowance of premium requests, but allows for more granular budget control and monitoring.

For more information about Copilot cloud agent and Copilot custom agents, see [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent) and [About Custom Agents](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-custom-agents).

## Using more than your included premium requests

If you exceed your allowance, set a budget for additional premium requests or upgrade to a higher plan.

## Paying for premium requests

Additional usage is charged to the payment method configured for your GitHub account.

If you are billed through Azure, premium request usage appears on your Azure invoice. See [Connect Azure Sub](https://docs.github.com/en/billing/how-tos/set-up-payment/connect-azure-sub).

## Managing your budget for premium requests

You can set a budget in your personal billing settings to receive alerts when you reach 75%, 90%, or 100% of your budget. Setting a premium request budget depends on the level of granularity you need:

* **Bundled premium request budget** - Combines all premium requests into a single budget (Recommended for most users)
* **Individual SKU budgets** - Set separate budgets for each AI product (Copilot, Spark, Copilot cloud agent)

## Monitoring usage

* Track your monthly usage in your IDE, in Copilot settings on GitHub, or by downloading a usage report.
* Usage reports show all premium requests, both within and beyond the allowance, and can be used to identify high-usage users.
* Premium request analytics display usage by dedicated SKUs, providing detailed insights into which AI products consume your allowance.

For more information about monitoring your usage, see [Monitor Premium Requests](https://docs.github.com/en/copilot/reference/copilot-billing/request-based-billing-legacy/monitor-premium-requests).
