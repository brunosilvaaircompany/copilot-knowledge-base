# About default availability of Copilot models

For enterprises with Copilot Business or Copilot Enterprise plans, the **Default availability for released models** policy controls whether unconfigured generally available (GA) models default to enabled or disabled. If this policy is enabled, users benefit from the latest models without the need for administrator intervention.

## Which models follow the policy?

The default policy applies to models that you have not explicitly configured. These models are indicated in your enterprise or organization's model settings with the **Delegate to Default Policy** label. When a new model is released, it inherits the default until you explicitly configure it.

The following models are **not** in scope. They are disabled by default, regardless of your "Default availability" policy setting.

* Pre-GA models
* Open weight models (DeepSeek, Kimi K2.7 Code, Kimi K3)
* Models that are not covered by GitHub's data retention agreement (Claude Fable 5, Claude Fable 5.1)
* For enterprises that have restricted models to data-resident or FedRAMP-compliant models, any models that do not respect these policies


## How do I prevent default enablement?

To disable default enablement entirely, disable the **Default availability for released models** policy in your enterprise or organization's models policies. You can set a policy for the entire enterprise, or disable the policy only in organizations with stricter compliance requirements.

If you keep the **Default availability for released models** policy enabled, you can explicitly disable individual models so that they are not eligible for automatic enablement.

For instructions on managing model policies, see [Manage Availability Of Default Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-availability-of-default-models) and [Manage Default Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-default-models).

## How do I prepare for new models?

We recommend keeping up with new model releases so you can choose your enablement settings for each one. New models are announced on GitHub's changelog. For more information, see [Learning About New Features And Models](https://docs.github.com/en/copilot/concepts/enterprise/learning-about-new-features-and-models#learning-about-new-copilot-models).
