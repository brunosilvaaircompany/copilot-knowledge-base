# Using cost centers to allocate costs to business units

>[!NOTE] Before you create or update a cost center, if you're unsure of how spending will be allocated to the cost center, see [Cost Center Allocation](https://docs.github.com/en/billing/reference/cost-center-allocation).

## Creating a cost center

> [!NOTE]
> An enterprise can create up to 1,000 cost centers.

Create cost centers to monitor and manage expenses for specific organizations or repositories. A single cost center can include multiple resources of any type, such as organizations, repositories, users, and enterprise teams.

When you create a cost center, you can add **organizations**, **repositories**, **users**, or **enterprise teams**. The cost center will then track spending for the selected entities.

You can assign an enterprise team to a cost center. Every member of the team is added to the cost center, and membership stays current automatically as people join or leave the team—so you don't have to add or remove users one by one. For more information about enterprise teams, see [Create Enterprise Teams](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams).



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.

1. Click **Cost centers**.
1. Click **New cost center** in the upper-right corner.

1. In the text box under "Name", enter a name for your cost center.
1. If your account is billed to Azure, you have the option to add an Azure ID. Your credentials will be verified against Azure to ensure the Azure IDs associated to your account are available.
1. Under **Resources**, select the organizations, repositories, users, and/or enterprise teams that will be a part of the cost center.

   > [!NOTE]
   > A resource (organization, repository, user, or enterprise team) can belong to only one cost center at a time. A cost center can hold many resources, but each resource lives in a single cost center. If you add a resource that belongs to a different cost center, it will be moved to the new cost center and you will be notified.

1. Click **Create cost center**.


## Adding a budget to a cost center

After you create a cost center, you can add a monthly budget and receive alerts from the cost center to monitor your spending and usage. See [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets).

## Viewing cost center usage

You can view the usage of your cost centers and download the usage data for further analysis. See [Gather Insights](https://docs.github.com/en/billing/tutorials/gather-insights).

## Viewing, editing, and deleting cost centers

You can view, edit, and delete cost centers to manage your business units effectively.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing**.

1. Click **Cost centers**.
1. Select {% octicon "kebab-horizontal" aria-label="Cost center dropdown" %} to the right of a cost center, then click **View details**, **Edit**, or **Delete**.
1. Follow the prompts.

## Further reading

* [Control Costs At Scale](https://docs.github.com/en/billing/tutorials/control-costs-at-scale)
* [Billing](https://docs.github.com/en/rest/billing/billing)
