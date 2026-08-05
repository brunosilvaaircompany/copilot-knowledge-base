# Cost centers

Cost centers allow you to attribute usage and spending to business units, improving accountability, forecasting, and cost allocation. You can also apply one or more budgets to them to control costs.

## Cost center creation

* **Enterprise owners and billing managers** can create and edit cost centers for **any resource**.
* **Organization owners** can create and edit cost centers that contain **resources in their organization**.

When you create a cost center, you define which resources it contains from users, repositories, organizations, and enterprise teams. If your account is billed through Azure, you can also add an Azure subscription to bill usage to a different Azure subscription than the enterprise default.

You can assign an enterprise team to a cost center. Every member of the team is added to the cost center, and membership stays current automatically as people join or leave the team—so you don't have to add or remove users one by one. For more information about enterprise teams, see [Create Enterprise Teams](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams).


To get started with cost centers, see [Control Costs At Scale](https://docs.github.com/en/billing/tutorials/control-costs-at-scale).

## Cost center allocation

To allocate metered spending to a cost center, you add repositories, organizations, or users to the cost center.

* For **usage-based** products, like GitHub Actions, cost centers are charged based on the **repositories or organizations** in the cost center, as this is where the usage takes place.
* For **license-based** products, like GitHub Copilot, cost centers are charged based on the **users** in the cost center.
* For products billed by **AI credit** usage, like Copilot cloud agent, cost centers are charged based on the **users** in the cost center, or the **organization that granted the user's GitHub Copilot license** if the user isn't directly assigned to a cost center.

Cost centers only apply to metered usage, and do not work with volume or subscription billing.


For more details, see [Cost Center Allocation](https://docs.github.com/en/billing/reference/cost-center-allocation).

## Controlling included usage

For cost centers that contain Copilot licenses, you can apply included usage controls in addition to budgets.

Included usage controls cap a cost center's included usage to the amount of AI credits funded by the licenses assigned to that cost center. GitHub sets this cap automatically and adjusts it as licensed members are added or removed, you don't enter an amount. When a cost center reaches its cap, you choose whether its members are blocked or their additional usage continues as paid overage.


This is separate from a cost center budget, which caps metered charges only after the shared pool of AI credits is exhausted. For more information, see [Budgets For Usage Based Billing](https://docs.github.com/en/copilot/concepts/billing/budgets-for-usage-based-billing#included-usage-controls-for-cost-centers).

## Cost center limitations

* The maximum number of active cost centers per enterprise is 1,000.
* The maximum number of resources per cost center is 25,000.
* A maximum of 50 resources can be added to or removed from a cost center at a time.
* Azure subscriptions can only be added to or removed from cost centers through the UI.
* Outside collaborators or unaffiliated users can only be added to cost centers via the cost center API. For more information, see [Control Costs At Scale](https://docs.github.com/en/billing/tutorials/control-costs-at-scale#add-resources-to-the-cost-center).
* You can't set different budgets for teams within the same cost center. A budget applies to the whole cost center, so if two teams need separate budgets, create a separate cost center for each. Separate cost centers can share the same Azure billing identity.
