# Azure subscription reference

## Enterprises and cost centers

There’s no limit to the number of enterprises or cost centers you can connect to a single Azure subscription.

If you want to use multiple Azure subscriptions to pay for usage in one enterprise account, you need to create **cost centers**. You can connect each cost center to a different Azure subscription. If a cost center is not connected to an Azure subscription, the usage is charged to Azure subscription of the enterprise account. This also happens if a cost center becomes invalid or is deleted—any future usage from those resources is billed to the enterprise subscription.

For details on how charges are applied to cost centers, see [Cost Center Allocation](https://docs.github.com/en/billing/reference/cost-center-allocation){% elsif ghes %}[Cost Center Allocation](https://docs.github.com/en/enterprise-cloud@latest/billing/reference/cost-center-allocation) in the GitHub Enterprise Cloud documentation.

## Azure invoices

After you connect your Azure subscription, usage for GitHub's products are included on your Azure invoice, summarized by product family. Azure usage is separated by **SKU** and either **enterprise ID** or **cost center ID**. The format used is `enterprise:sku` or `costcenter:sku`.

> [!NOTE]
> Azure currently shows internal IDs, which may make it difficult to identify the corresponding enterprise or cost center.

### Invoice example

For example, if you use Azure to pay for GitHub Enterprise Cloud and GitHub Advanced Security, usage and price excluding tax for each line item will appear as follows.

| Product Family Usage Charges | Total (excluding Tax) |
| :- | :- |
| GH ENTERPRISE | AMOUNT |
| GH ADVANCED SECURITY | AMOUNT |

For more information about your Azure invoice, see [Understand terms on your Microsoft Azure invoice](https://learn.microsoft.com/azure/cost-management-billing/understand/understand-invoice) in the Microsoft Docs.

The GitHub products on your Azure invoice are also MACC-eligible. For more information, see [Track your Microsoft Azure Consumption Commitment (MACC)](https://learn.microsoft.com/azure/cost-management-billing/manage/track-consumption-commitment) in the Microsoft Docs.

## Enterprise Managed User trials

During an **Enterprise Managed User trial**, you can use metered products up to the included limits. To exceed the included limits, you’ll need to link an Azure subscription.

> [!IMPORTANT] If you don't use Enterprise Managed Users in your trial of GitHub Enterprise Cloud, connecting an Azure subscription will immediately end your trial and begin paid usage.

For more information, see [Connect Azure Sub](https://docs.github.com/en/billing/how-tos/set-up-payment/connect-azure-sub#connecting-your-azure-subscription-to-an-organization-or-enterprise-account).
