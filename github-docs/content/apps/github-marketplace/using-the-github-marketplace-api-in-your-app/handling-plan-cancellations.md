# Handling plan cancellations

> [!NOTE]
> This article applies to publishing apps in GitHub Marketplace only. For more information about publishing GitHub Actions in GitHub Marketplace, see [Publish In GitHub Marketplace](https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace).


For more information about cancelling as it relates to billing, see [Billing Customers](https://docs.github.com/en/apps/github-marketplace/selling-your-app-on-github-marketplace/billing-customers).

## Step 1. Cancellation event

If a customer chooses to cancel a GitHub Marketplace order, GitHub sends a [`marketplace_purchase`](/apps/github-marketplace/using-the-github-marketplace-api-in-your-app/webhook-events-for-the-github-marketplace-api) webhook with the action `cancelled` to your app when the cancellation takes effect. If the customer cancels during a free trial, your app will receive the event immediately. When a customer cancels a paid plan, the cancellation will occur at the end of the customer's billing cycle.

## Step 2. Deactivating customer accounts

When a customer cancels a free or paid plan, your app must perform these steps to complete cancellation:

1. Deactivate the account of the customer who canceled their plan.
1. Revoke the OAuth token your app received for the customer.
1. If your app is an OAuth app, remove all webhooks your app created for repositories.
1. Remove all customer data within 30 days of receiving the `cancelled` event.

> [!NOTE]
> We recommend using the [`marketplace_purchase`](/apps/github-marketplace/using-the-github-marketplace-api-in-your-app/webhook-events-for-the-github-marketplace-api) webhook's `effective_date` to determine when a plan change will occur and periodically synchronizing the [List accounts for a plan](/rest/apps/marketplace#list-accounts-for-a-plan). For more information on webhooks, see [Webhook Events For The GitHub Marketplace API](https://docs.github.com/en/apps/github-marketplace/using-the-github-marketplace-api-in-your-app/webhook-events-for-the-github-marketplace-api).
