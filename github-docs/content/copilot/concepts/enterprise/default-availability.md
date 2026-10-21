# About default availability of Copilot features and models

For enterprises with Copilot Business or Copilot Enterprise plans, two separate policies control whether unconfigured generally available (GA) features and models default to enabled or disabled. If these policies are enabled, users benefit from the latest features and models without the need for administrator intervention.



The models policy is already active. The feature policy will become active soon.






## Default availability of features

The **Default policy for new features** policy is available to configure but is **not** currently active. Starting from October 22, 2026, the value you have defined for this policy will be the default setting: it will apply to any new or existing GA feature that you have not explicitly configured.

In your policy settings, you will see a banner showing how many eligible policies are currently unconfigured, so you can assess the impact of your global default and explicitly configure individual policies before October 22.

This policy is enabled by default. If you don't take action, unconfigured features will be enabled on October 22.



### When does the policy apply?

Your setting for this policy determines the default enablement status of:

* Newly released GA (general availability) features
* Existing GA features that are **Unconfigured** in your policy settings

The policy can be configured in an enterprise and its organizations. At the enterprise level, it applies to features labeled as **Unconfigured**. At the organization level, it applies to features that an enterprise owner has set to **Let organizations decide**, but that an organization owner has not explicitly configured.

The policy does **not** apply to features in preview.

### Policy states

At the enterprise level, the policy has the following possible states.

Policy state | Outcome
------------ | --------
**Let organizations decide** | Any unconfigured, GA feature is automatically available for organizations to enable or disable. The default state of the feature _in each of those organizations_ is determined by the organization-level **Default policy for new features** policy.
**Enabled everywhere** | Any unconfigured, GA feature is automatically enabled for all your Copilot users, and organizations cannot disable it.
**Disabled everywhere** | Any unconfigured, GA feature is automatically disabled for all your Copilot users, and organizations cannot enable it.

### What counts as a feature?

For the purposes of this policy, a "feature" refers to any policy configured on an enterprise's "Features & clients" page (`github.com/enterprises/ENTERPRISE/ai-controls/copilot/features`), **plus**:

* The **Copilot code review** policy on the "Agents" page
* The **MCP servers in Copilot** policy on the "MCP" page

The following policies are exceptions and are **not** affected:

* Restrictive model policies on GHE.com: **Restrict Copilot to data residency models** and **Restrict Copilot to FedRAMP models**
* **Store local sessions in the Cloud** for Copilot CLI and VS Code 

## Default availability of models

The **Default availability for released models** policy is active and affects new and unconfigured GA models.

>[!NOTE] This policy is **not** related to the default model that is selected for users' sessions. See [Auto Model Selection](https://docs.github.com/en/copilot/concepts/models/auto-model-selection).

### Which models follow the policy?

The default policy applies to models that you have not explicitly configured. These models are indicated in your enterprise or organization's model settings with the **Delegate to Default Policy** label. When a new model is released, it inherits the default until you explicitly configure it.

The following models are **not** in scope. They are disabled by default, regardless of your "Default availability" policy setting.

* Pre-GA models
* Open weight models (DeepSeek, Kimi K3)
* Models that are not covered by GitHub's data retention agreement (Claude Fable 5, Claude Fable 5.1)
* For enterprises that have restricted models to data-resident or FedRAMP-compliant models, any models that do not respect these policies


### Policy states

At the enterprise level, the **Default availability for released models** policy has the following possible states.

Policy state | Outcome
------------ | --------
**Enabled** | Any model labeled **Delegate to Default Policy** is automatically enabled for all your Copilot users, and organizations or teams cannot disable it.
**Disabled** | Any model labeled **Delegate to Default Policy** is automatically disabled for all your Copilot users, and organizations or teams cannot enable it.
**Let organizations decide** | Any model labeled **Delegate to Default Policy** is automatically available for organizations to enable or disable. In each organization, an eligible model follows the organization-level **Default availability for released models** policy if the organization has not explicitly configured it. This state is not available if you have enabled enterprise teams mode.

#### Policy states for models

The status of each model in your enterprise's model settings reflects whether or not it follows the default policy.

Model status | Description
------------ | -----------
**Enabled** or **Disabled** | Explicitly configured. **Does not follow** the default availability policy.
**Delegate to default policy** | Has not been configured. **Follows** the default availability policy.
**Unconfigured** | Has not been configured. **Does not follow** the default availability policy. For example, a model in preview.
**Delegate to organizations** or **Delegate to Enterprise Teams/Apps** | (Depends on whether you have enabled enterprise teams mode.) Explicitly configured. **Does not follow** the default availability policy at the enterprise level. However, if delegated to organizations, **will follow** the organization-level default availability policy _for each organization that does not explicitly configure the model_.

## How do I prevent default enablement?

To disable default enablement entirely, disable the default policies in your enterprise or organization's settings. You can set a policy for the entire enterprise, or disable the policy only in organizations with stricter compliance requirements.

If you keep the default availability policies enabled, you can explicitly disable individual features and models so that they are not eligible for automatic enablement.

* For features, see [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies) and [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).
* For models, see [Manage Availability Of Default Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-availability-of-default-models) and [Manage Default Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-default-models).

## How do I prepare for new releases?

We recommend keeping up with new releases and GA announcements so you can choose your enablement settings. New features and models are announced on GitHub's changelog. For more information, see [Learning About New Features And Models](https://docs.github.com/en/copilot/concepts/enterprise/learning-about-new-features-and-models).
