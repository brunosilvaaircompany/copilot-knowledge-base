# Getting started with budget controls

Set budget controls before rolling out Copilot so that usage stays within your approved spending limits. A heavy user or automated agent session can consume a large amount of AI credits in a short time.

Before you begin, make sure you understand how the four budget controls work and how the system evaluates them. See [Budgets](https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/budgets).

## Step 1: Set a universal user-level budget

The universal user-level budget (ULB) caps how much any one user can consume per billing cycle. It applies automatically to every licensed user in your enterprise.

Size this budget for expected consumption, including any usage covered by an included allowance:

* With Copilot Business or Copilot Enterprise, set it **above** the value of the per-user allowance ($19 USD or $39 USD, respectively). This lets heavier users draw on lighter users' unused credits.
* With the Copilot access plan, through GitHub Enterprise Cloud or as Copilot Standalone, there is no included allowance. Do not use the per-user access charge as a consumption limit.

For step-by-step instructions, see [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets#creating-a-budget).

## Step 2: Identify your power users and set individual overrides

Once you have a universal ULB in place, review your AI usage dashboard to identify your heaviest consumers. Users who consistently need more capacity than the universal default—for example, developers running frequent agent sessions or working with large codebases—may be blocked unnecessarily if their limit is too low.

For these users, set an individual user-level budget override. Individual overrides take precedence over the universal default. You can increase or decrease the limit for a specific user without affecting anyone else.

If the override is only meant to be temporary, such as a higher limit for one sprint or one incident, set an expiration date on it. GitHub removes the budget on that date. The user then falls back to their cost center or universal budget, if one applies, so you don't have to track the cleanup yourself. See [Budgets](https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/budgets#expiration-dates-for-individual-user-level-budgets).

> [!TIP]
> If you're setting up budgets for the first time and don't yet have usage data, start with a universal ULB that feels reasonable for your organization and revisit after your first billing cycle. Your AI usage dashboard will give you the data you need to tune individual overrides.

## Step 3: Set an enterprise spending limit

The enterprise spending limit caps metered charges. On Copilot Business and Copilot Enterprise, the limit applies only after the shared pool is exhausted, not while users draw from the pool. With included Copilot access or Copilot Standalone, metered charges begin at first use.

See [Sizing your spending limits](/copilot/tutorials/budgets/optimizing-your-budget-configuration#sizing-your-budgets) for guidance on calculating the right amount for your enterprise.

## Step 4: Enable "Stop usage when budget limit is reached" on every spending limit

By default, reaching a spending limit sends a notification but does not stop usage. Charges continue to accrue without a cap until you manually intervene.

To turn your spending limit into a hard stop, enable "Stop usage when budget limit is reached" on every spending limit you create: enterprise-level and cost center-level. When enabled, metered usage is blocked when the limit is reached rather than allowed to continue. User-level budgets don't require this step—they always enforce a hard stop automatically.

> [!IMPORTANT]
> Without "Stop usage when budget limit is reached" enabled, your spending limits are alerts only, not guardrails. Always enable it when creating a spending limit.

## Step 5: Monitor regularly

Once your budgets are in place, check your AI usage dashboard at least monthly. Look for:

* **Users getting blocked early in the cycle**: Check whether the applicable ULB or spending limit needs adjusting.
* **Metered charges exceeding expectations**: Review consumption and adjust your spending limits. If your plan includes an allowance, check whether the pool is being exhausted earlier than expected.
* **Usage staying within your approved spending limits with no blocked users**: This is the target state. On plans with an included allowance, also check how long the pool lasts.

## Next steps

* To go deeper on budget configuration for your organization's structure, see [Optimizing Your Budget Configuration](https://docs.github.com/en/copilot/tutorials/budgets/optimizing-your-budget-configuration).
