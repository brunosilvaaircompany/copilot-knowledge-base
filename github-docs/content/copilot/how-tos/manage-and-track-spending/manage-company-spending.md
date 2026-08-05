# Managing your company's spending on GitHub Copilot

When you're adopting GitHub Copilot in an enterprise, you will want to set budgets and track spending to ensure your rollout is sustainable. GitHub offers billing tools to help you visualize your spending patterns, control AI credits consumption with budget controls, receive alerts when you reach budget thresholds, and optimize your license usage.

## Understanding who can grant licenses

To control spending, it's important to understand who can affect your bill by granting licenses to users. These are people with the **organization owner** role in organizations where you enable GitHub Copilot. Organization owners can receive requests for access from members through the GitHub UI.

We recommend that you identify the people with this role and communicate with them about your company's strategy for distributing licenses. For example, you may have a budget or limited pilot program, or you may distribute licenses through an internal website.

For more information, see [Viewing People In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members).

## Managing AI credits usage

Each Copilot license includes AI credits that are pooled across your enterprise. When the pool is exhausted, additional usage is charged at $0.01 USD per AI credit, subject to your budget controls.

### Tracking usage

To track AI credits consumption, navigate to **Billing & licensing** > **AI usage** in your enterprise settings. You can filter usage by user, model, organization, or cost center, and export the data for further analysis.

### Controlling usage with budgets

You can set budgets at the user, cost center, and enterprise level to control how AI credits are consumed. For an overview of how budget controls work, see [Budgets For Usage Based Billing](https://docs.github.com/en/copilot/concepts/billing/budgets-for-usage-based-billing). For guidance on choosing the right configuration, see [Optimizing Your Budget Configuration](https://docs.github.com/en/copilot/tutorials/budgets/optimizing-your-budget-configuration).

## Mapping spending to groups of users

You can create cost centers to map spending to individual business units or groups of users. Cost centers allow you to track costs tied to different initiatives and charge the costs to specific areas of your business.

For example, if you were running a pilot program for GitHub Copilot Enterprise for a group of employees, you might want to create a cost center to track their spending and set a budget independently of the rest of the company.

For more information, see [Control Costs At Scale](https://docs.github.com/en/billing/tutorials/control-costs-at-scale).

## Preventing overspending

You can set budgets to control Copilot spending at multiple levels.

* **User-level budgets** cap how many AI credits any single user can consume per billing cycle, from both the shared pool and additional usage.
* **Cost center budgets** and **enterprise spending limits** cap metered charges after the shared pool is exhausted.

Enable "Stop usage when budget limit is reached" on every spending limit you create. Without it, reaching a limit sends a notification but does not block usage and charges continue to accrue.

For step-by-step instructions, see [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets).

## Visualizing spending trends

You can understand your spending trends by viewing graphs of Copilot usage over a certain timeframe. Usage includes costs for Copilot licenses and any additional AI credits beyond the included pool.

For more detailed insights, you can group usage by the type of Copilot plan, and enterprises can filter the results by cost center.

1. Go to your enterprise or organization account settings and click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing**.
1. In the left sidebar, click **Usage**. For enterprises, then click **Metered usage**.

1. In the "Metered usage" section, in the search field, enter `product:copilot`. To filter by cost center, add a query like `cost_center:ce-pilot-group`.
1. To understand spending differences between Copilot Business and Copilot Enterprise plans, select the **Group: None** dropdown menu and click **Group by: SKU**.

   ![Screenshot of the "Usage" page. A line chart tracks Copilot spending over the current month, grouped by SKU.](/assets/images/help/copilot/track-spending.png)

1. To visualize AI credits consumption in detail, in the left sidebar under "Metered usage" click **AI usage**.
1. By default, the chart and table show usage grouped by model. Use the filter, "Group by", and "Timeframe" controls to show the data you want.

   ![Screenshot of the "AI usage" page. A line chart tracks AI usage over the current month, grouped by model.](/assets/images/help/copilot/track-spending-prs.png)

## Next steps

As well as managing spending on licenses, it is important to ensure licenses are being used effectively. When you begin rolling out Copilot in a company, you may see low rates of adoption at first. An effective enablement process is essential to drive adoption of Copilot in your company. Tailor this process to your company's needs and goals, and design it to help your teams understand how to use Copilot effectively.

To ensure your licenses are being used effectively, you can use the API to identify inactive users. We recommend sending these users a message with advice and resources for getting started. If a user remains inactive, you can revoke their license and assign it to another user.

If you're not sure how best to distribute licenses, GitHub has found that many successful rollouts offer a fully self-service model where developers can claim a license without approval. This allows people to get started quickly and ensures you're giving licenses to people who plan to use them.

For detailed guidance, see:

* [Drive Adoption](https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/enable-developers/drive-adoption)
* [Set Up Self Serve Licenses](https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/assign-licenses/set-up-self-serve-licenses)
* [Remind Inactive Users](https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/assign-licenses/remind-inactive-users)
