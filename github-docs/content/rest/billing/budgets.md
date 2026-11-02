# Budgets

## Authentication for enterprise budgets

GitHub App authentication for enterprise cost center and budget endpoints is not generally available. The "Enterprise billing" permission shown in the generated endpoint details is not available to all enterprises when registering an enterprise-owned GitHub App, on either GitHub.com or GHE.com.

The generated endpoint descriptions and authentication tables do not indicate whether your enterprise can grant this permission. Do not plan an integration using GitHub App user or installation access tokens unless your enterprise can grant this permission.

For enterprise owners and billing managers, use a personal access token (classic) or an OAuth access token with the `manage_billing:enterprise` scope. The token's user must have access to the resources being requested. Fine-grained personal access tokens cannot access these enterprise endpoints. See [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).


## Creating a user-scoped budget

> [!IMPORTANT]
> The request body schema below is missing a required field. When `budget_scope` is `user`, you must also include a `user` field set to the GitHub username the budget applies to. If you omit this field, the API returns `HTTP 400: Missing required fields: budget_entity_name`. For user-scoped budgets, `budget_entity_name` can be an empty string.

The following example creates a user-scoped budget that limits a single user's monthly Copilot AI credits to $30 USD:

```json
{
  "budget_amount": 30,
  "prevent_further_usage": true,
  "budget_scope": "user",
  "budget_entity_name": "",
  "budget_type": "BundlePricing",
  "budget_product_sku": "ai_credits",
  "budget_alerting": {
    "will_alert": false,
    "alert_recipients": []
  },
  "user": "USERNAME"
}
```
