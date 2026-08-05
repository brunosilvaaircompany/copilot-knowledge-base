# Budgets

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
