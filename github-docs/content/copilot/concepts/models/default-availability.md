# About default availability of Copilot models

On Copilot Business and Copilot Enterprise plans, the **Default availability for released models** policy will control whether unconfigured generally available (GA) models default to enabled or disabled. If this policy is enabled, users will benefit from the latest models without the need for administrator intervention.



To give you time to prepare, this policy can be configured but **does not currently affect model availability**. On August 26, 2026, new GA models and existing unconfigured GA models will automatically follow the default set in the policy. These are models that you have not explicitly chosen a setting for. They will be relabeled as "inherits default" in the UI.

To prepare for this change, you can disable the policy or explicitly disable models you don't want to be enabled.



## Which models follow the policy?



New and existing unconfigured models will follow the default set in the policy. Unconfigured models are:



* At the enterprise level, models that have not been added to the models list on the models configuration page.
* At the organization level, models that have been made "optional" by an enterprise administrator, and that an organization owner has not explicitly enabled or disabled. (**Does not apply** if you are opted in to the enterprise teams model access preview.)

When a new model is released, it is unconfigured by default.

The following models are **not** eligible for default enablement, regardless of whether they are new or existing:

* Models that have been explicitly disabled
* Pre-GA models
* Open weight models (DeepSeek, Kimi K2.7 Code, Kimi K3)
* Models that are not covered by GitHub's data retention agreement (Claude Fable 5)
* For enterprises that have restricted models to data-resident or FedRAMP-compliant models, any models that do not respect these policies


## How do I prevent default enablement?

To disable default enablement entirely, disable the **Default availability for released models** policy in your enterprise or organization's models policies. You can set a policy for the entire enterprise, or disable the policy only in organizations with stricter compliance requirements.

If you keep the **Default availability for released models** policy enabled, you can explicitly disable individual models so that they are not eligible for automatic enablement.

For instructions on managing model policies, see [Manage Availability Of Default Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-availability-of-default-models) and [Manage Default Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-default-models).

## How do I prepare for new models?

We recommend keeping up with new model releases so you can choose your enablement settings for each one. New models are announced on GitHub's changelog. For more information, see [Learning About New Features And Models](https://docs.github.com/en/copilot/concepts/learning-about-new-features-and-models#learning-about-new-copilot-models).
