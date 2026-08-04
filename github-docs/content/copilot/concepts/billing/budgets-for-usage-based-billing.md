# Budgets for usage-based billing

Every Copilot license includes AI credits that are pooled across your enterprise. Budget controls let you govern how individual users draw from that pool and cap any additional spending once the pool is exhausted. This article explains what each control does, how the system evaluates them, and what happens when a limit is reached.

## Understanding budget controls

You have budget controls at the user, organization, cost center, and enterprise levels, each serving a different purpose. They work together, not as alternatives.

### User-level budget

The user-level budget (ULB) caps how many AI credits a single user can consume in a billing cycle—both from the shared pool and from additional (metered) usage. This is the only control that is active during both the pool phase and the metered phase. ULBs always enforce a hard stop; there is no option to allow usage to continue beyond the limit. A $0 USD budget blocks the user immediately.

There are three types, listed from the broadest scope to the most specific:

* **Universal user-level budget:** A default budget applied to every Copilot-licensed user in your enterprise. This is your primary tool for ensuring fair access to the shared pool.
* **Cost center user-level budget:** A default budget applied to every user in a single cost center, sometimes called a group-scoped user-level budget. You set one per-user amount on the cost center and it applies to every current and future member, so you can give different departments different per-user limits—for example, $20 USD per user for engineering and $5 USD per user for marketing—without creating thousands of individual budgets. It overrides the universal budget for members of that cost center.
* **Individual user-level budget:** A budget set for a specific user, which overrides both the universal default and any cost center user-level budget. Use this for power users who need higher limits, or to restrict specific users to a lower amount.

When more than one type applies to a user, the most specific budget wins: an individual user-level budget takes precedence over a cost center user-level budget, which takes precedence over the universal user-level budget.

#### When users appear in a universal user-level budget

A universal user-level budget can apply to thousands of licensed users. GitHub creates each user's budget record the first time they consume AI credits after the budget is created, or after the start of a new billing cycle. As a result, users appear in the universal budget list gradually rather than all at once, and a licensed user who does not use Copilot in a given billing cycle will not appear in the list for that billing cycle.

For a complete view of all licensed users regardless of activity, use the **AI usage** or **Licensing** pages.

### Cost center budget

A cost center budget caps metered charges for a defined group of users or an organization. It does not limit how much a team draws from the pool. It is only active after the shared pool is exhausted. A cost center budget **does not extend or override a user-level budget**: if a user has reached their user-level budget, they are blocked even if their cost center still has remaining budget.

Members of a cost center can be assigned directly, through an organization, or through an enterprise team. For how usage is allocated when more than one assignment applies to a user, see [Cost Center Allocation](https://docs.github.com/en/billing/reference/cost-center-allocation).

When a cost center's budget is exhausted, only users in that cost center are blocked. Other users and cost centers are unaffected.

> [!NOTE]
> A cost center budget is different from a cost center user-level budget. A cost center budget caps the team's **total metered charges** after the pool is exhausted. A cost center user-level budget caps **each member's individual consumption** across both the pool and metered phases, the same way other user-level budgets do. You can apply both to the same cost center.

### Included usage controls for cost centers

Included usage controls cap a cost center's included usage to the amount of AI credits funded by the licenses assigned to that cost center. GitHub sets this cap automatically and adjusts it as licensed members are added or removed, you don't enter an amount. When a cost center reaches its cap, you choose whether its members are blocked or their additional usage continues as paid overage.


Unlike a cost center budget, which caps metered charges only after the shared pool of AI credits is exhausted, an included usage control limits how much of the pool a cost center can draw **before** the metered phase begins. To enable it, see [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets).

Cost center administrators can view the included usage cap and current consumption on the cost center home page. When the included usage pool cap is enabled, the home page shows **AI credit pool enabled** and displays the AI credits consumed in that cost center out of the total cap.

#### How the included usage cap is calculated

The cap is the sum of the included AI credits for every license assigned to the cost center's members, even when license types are mixed:

* Each Copilot Business license adds 1,900 AI credits.
* Each Copilot Enterprise license adds 3,900 AI credits.

For example, at current included amounts, a cost center with 10 Copilot Business licenses and 5 Copilot Enterprise licenses has a cap of 38,500 AI credits: 19,000 from the Copilot Business licenses (10 × 1,900) plus 19,500 from the Copilot Enterprise licenses (5 × 3,900).

The cap updates automatically if GitHub changes the included amount for a license type. It's also recalculated as the cost center's own licenses change: increases apply right away, so a growing team isn't blocked, while decreases take effect at the start of the next billing cycle, so AI credits that members have already used aren't clawed back mid-cycle.

| Change | Effect on the cap | When it applies |
| --- | --- | --- |
| A licensed user is added or granted a license, or an existing license is upgraded (for example, Copilot Business to Copilot Enterprise) | Increases | Right away |
| A licensed user is removed or loses their license, or an existing license is downgraded | Decreases | Start of the next billing cycle |
| A licensed member moves between two cost centers that both use included usage controls | Recalculated for both cost centers | Start of the next billing cycle |
| An unlicensed user is added or removed | No change | Not applicable |
### Organization budget

An organization budget caps metered charges for users who receive their Copilot license through that organization. Like cost center budgets, it is only active after the shared pool is exhausted.

Organization budgets are the only budget option available to organization owners. They can only further restrict usage below any budget set by an enterprise admin, and they cannot override a higher-level budget.

If a user receives Copilot licenses from multiple organizations, GitHub picks one organization at random each billing cycle to bill the seat. This means the user's spend could count against a different organization's budget from month to month, making enforcement unpredictable. To avoid this, ensure each user has a single license through one organization, or use cost center budgets with direct user assignment.

### Enterprise budget

The enterprise budget caps total metered charges across your entire enterprise. Like cost center budgets, it is only active after the shared pool is exhausted.

> [!IMPORTANT]
> The enterprise budget is not a total monthly budget. It only caps metered charges after the pool is exhausted. Your total maximum bill is your license fees plus the enterprise budget. For example, 400 Copilot Business licenses at $19 USD per month means $7,600 USD in license fees. A $5,000 USD enterprise budget means your maximum bill is $12,600 USD, not $5,000 USD.

### How the controls compare

| Control | What it caps | When it's active | Scope | Hard stop? |
| --- | --- | --- | --- | --- |
| Universal user-level budget | Each user's total AI credit consumption | Always (pool + metered) | Per user | Always |
| Cost center user-level budget | Each member's total consumption, set per cost center (overrides universal) | Always (pool + metered) | Per user, by cost center | Always |
| Individual user-level budget | A specific user's total consumption (overrides universal and cost center user-level budgets) | Always (pool + metered) | Per user | Always |
| Cost center budget | A team's metered charges after pool exhaustion | Metered phase only | Per cost center | Only if "Stop usage when budget limit is reached" is enabled |
| Organization budget | An organization's metered charges after pool exhaustion | Metered phase only | Per organization | Only if "Stop usage when budget limit is reached" is enabled |
| Enterprise budget | Total enterprise metered charges after pool exhaustion | Metered phase only | Enterprise-wide | Only if "Stop usage when budget limit is reached" is enabled |

Any budget set to $0 USD stops usage immediately for the users it applies to.

## How billing flows through budgets

When someone in your enterprise uses Copilot, the system checks budget controls in a specific order to decide whether the request is served, metered, or blocked.

> [!NOTE]
> For additional (metered) usage to occur, the "AI credit paid usage" policy must be enabled in your enterprise or organization settings. If this policy is disabled, usage is blocked when the shared pool is exhausted, regardless of your budget configuration.

Each request for an AI credit-consuming feature goes through these checks:

1. **User-level budget check.** The system first checks whether the user has exceeded their user-level budget. When a user has more than one type of user-level budget, the most specific one applies: an individual budget if set, otherwise the budget for the user's cost center, otherwise the universal budget. If the applicable budget is exceeded, the request is blocked immediately. ULBs are always a hard stop, and no other budget can override or supplement them. If no user-level budget is set, the request continues.
1. **Shared pool check.** Next, the system checks whether the shared pool has AI credits remaining. If yes, the request is served from the pool at no extra cost. If the pool is empty, the request moves to metered usage at $0.01 USD per AI credit.
1. **Cost center, organization, or enterprise check.** For metered usage, the system checks budgets in the following order:

   * **If the user is in a cost center:** The cost center's budget is checked. If budget remains, the cost center pays. If the budget is exhausted, the system checks whether "Stop usage when budget limit is reached" is enabled.
   * **If the user is not in a cost center but their license is billed to an organization with a budget:** The organization's budget is checked. If budget remains, the organization pays. If the budget is exhausted, the system checks whether "Stop usage when budget limit is reached" is enabled.
   * **If no cost center or organization budget applies:** The enterprise spending limit is checked. If the limit has not been reached, the enterprise pays. If the limit has been reached, the system checks whether "Stop usage when budget limit is reached" is enabled.

   In all cases, if "Stop usage when budget limit is reached" is on, the user is blocked. If it is off, charges continue to accrue without a cap.

> [!IMPORTANT]
> "Stop usage when budget limit is reached" applies to enterprise spending limits, cost center budgets, and organization budgets only, and is off by default. Without it, charges continue to accrue past the limit. Always enable it when creating a budget. User-level budgets always enforce a hard stop and do not have this setting.

## How user-level budgets and spending limits interact

User-level budgets and spending limits are independent controls that serve different purposes. ULBs control how much each person can consume. Spending limits control how much metered usage your organization will pay for.

If these are not aligned, users can get blocked unexpectedly. The system applies a "lowest remaining headroom wins" rule: whichever budget has the least capacity remaining blocks the user first, regardless of what other budgets still have available. For example, if a user has $5 USD remaining on their individual ULB but the enterprise budget only has $1 USD remaining, the enterprise budget blocks them, even though their personal budget isn't exhausted.

This means that if your ULBs collectively allow more consumption than the shared pool provides, the difference spills over into metered charges. If your enterprise budget is too low to cover that gap, users get blocked before they reach their individual limits.

When you raise ULBs, check that your spending limits can still cover the resulting gap.

The reverse is also true: raising a cost center or enterprise budget does not unblock a user who has hit their ULB. For example, if a user exhausts their $5 USD ULB at the same moment the shared pool runs out, they cannot consume from any remaining cost center budget, even if that cost center has $10 USD remaining. The ULB is a total cap on that user's consumption across both pool and metered phases. To unblock them, you must raise their individual ULB or increase the universal ULB.

## Cost center exclusion

By default, cost center usage counts against the enterprise budget. Cost center exclusion is useful when a specific team needs independent spending authority that isn't constrained by the enterprise-wide cap, for example, a research team with its own budget approval. When exclusion is enabled for a cost center, that team's metered charges are not counted against the enterprise budget and will not be blocked when the enterprise budget is reached. Their spending is capped only by their own cost center budget.

## What happens when a user is blocked

When a user reaches any budget limit, their access to Copilot features that consume AI credits is blocked. There is no automatic fallback to lower-cost models. Code completions and next edit suggestions continue to work; they are included in all plans and do not consume AI credits.

A blocked user remains blocked until one of the following happens:

* The next billing cycle begins and monthly consumption resets.
* An administrator increases the relevant budget.

## Next steps

* To set up budget controls for your enterprise, see [Getting Started With Budget Controls](https://docs.github.com/en/copilot/tutorials/budgets/getting-started-with-budget-controls).
* To choose the right configuration for your organization's structure, including common scenarios and sizing advice, see [Optimizing Your Budget Configuration](https://docs.github.com/en/copilot/tutorials/budgets/optimizing-your-budget-configuration).
