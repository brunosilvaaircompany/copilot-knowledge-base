# GitHub Spark billing

GitHub Spark allows users to build applications using natural-language prompts, then share the apps with teammates or deploy them to production.


> [!NOTE]
> GitHub Spark is in public preview with [data protection](https://gh.io/dpa) and subject to change.


## Billing for Spark app creation

Each prompt to Spark consumes AI credits based on token usage and the model used. Spark usage is attributed to a dedicated **Spark** SKU, which allows you to track and set budgets specifically for Spark separately from other Copilot features. See [Usage Based Billing For Organizations And Enterprises](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

## Managing Spark costs

You now have more granular options for managing Spark costs:

### Budget options

* **Bundled budget**: Combine Spark AI credits with other Copilot costs in a single budget for simplified management.
* **Individual product budget**: Set a dedicated budget specifically for Spark for granular cost control.

For detailed information about setting up budgets, see [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets).

### Analytics and monitoring

With the dedicated SKU, you can:

* Track Spark AI credits consumption separately from other Copilot features in billing analytics
* Set up alerts when Spark usage approaches budget limits
* Generate reports specifically for Spark usage

## Billing and limits for Spark app deployment

You can publish apps created with Spark to a deployment environment.

Deployed apps do not currently incur any charges. However, GitHub currently **limits usage** of deployed sparks based on criteria including number of HTTP requests, data transfer, and storage.

* Limits apply to the billable owner, meaning if you own 10 deployed sparks, all 10 will count towards the limits.
* When any limit is reached, the spark is unpublished for the rest of the billing period.

In the future, a new billing system will allow sparks to continue being deployed once a limit is reached, with additional usage charged to the spark's billable owner. GitHub will publish the limits once they are confirmed following a testing period. This article will be updated when more details are available.

## Further reading

* [Agents](https://docs.github.com/en/copilot/responsible-use/agents)
* [Build Apps With Spark](https://docs.github.com/en/copilot/tutorials/spark/build-apps-with-spark)
