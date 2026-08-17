# Supported AI models in GitHub Copilot

GitHub Copilot supports multiple AI models, each with different strengths. Some prioritize speed and cost-efficiency, while others are optimized for accuracy, reasoning, or multimodal inputs. The right model depends on your task. For a side-by-side comparison to help you choose, see [Model Comparison](https://docs.github.com/en/copilot/reference/ai-models/model-comparison).

The models available to you depend on your Copilot plan and where you're using Copilot, such as GitHub.com or an IDE.

> [!NOTE]
> Model availability is subject to change. Some models may be replaced or updated over time.

For all of the default AI models, input prompts and output completions run through GitHub Copilot's content filters for harmful, offensive, or off-topic content, and for public code matching when enabled.

## Supported AI models in Copilot

This table lists the AI models available in Copilot, along with their release status.

{% rowheaders %}

| Model name                                             | Provider  | Release status             |
|--------------------------------------------------------|-----------|----------------------------|
| {% for model in tables.copilot.model-release-status %} |
| {{ model.name }}{% if model.name == 'GPT-5.4 nano' %}[^gpt54nano]{% endif %}{% if model.name == 'MAI-Code-1-Flash' or model.name == 'MAI-Code-1.1-Flash' %}[^mai-code-1-flash]{% endif %}{% if model.name == 'Claude Fable 5' %}[^claude-fable-5]{% endif %}| {{ model.provider }} | {{ model.release_status }} |
| {% endfor %}                                           |

{% endrowheaders %}

[^claude-fable-5]: When Claude Fable 5 is used, Anthropic retains data, including prompts and outputs, to operate safety classifiers that detect harmful use. Other Claude models in GitHub Copilot remain covered by GitHub's existing data retention agreements, as documented at [Model Hosting](https://docs.github.com/en/copilot/reference/ai-models/model-hosting#anthropic-models). Enterprise and business users need to enable the Claude Fable 5 model to make it available for your organization. You can read more about Anthropic's data handling practices for this model under section F of their [Service Specific Terms](https://www.anthropic.com/legal/service-specific-terms). To enable Claude Fable 5, see [Configure Access To Ai Models](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-access-to-ai-models).

## Supported AI models in Auto model selection

This table lists the supported AI models for Auto model selection. Available models may be limited by model policies. See [Auto Model Selection](https://docs.github.com/en/copilot/concepts/models/auto-model-selection).

{% rowheaders %}

| Model | Copilot cloud agent | Copilot Chat | Copilot CLI | GitHub Copilot app |
| --- | --- | --- | --- | --- |
| {% for model in tables.copilot.auto-model-selection %} |
| {{ model.name }} | {% if model.cloud_agent == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.chat == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.cli == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.app == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} |
| {% endfor %} |

{% endrowheaders %}

## Models with extended capabilities

The latest Copilot models support the following extended capabilities.

* **1 million token context window**: Allows the model to process significantly more content in a single session. This is useful when working across large codebases, long documents, or complex multi-file projects. When you select a supported model, you can choose between the default context size or the extended (1 million token) context.
* **Configurable reasoning levels**: Controls the depth of the model's reasoning process before it generates a response. When you select a supported model, you can choose which reasoning level you want to use. Higher reasoning levels can improve the quality of responses to complex problems.

Choosing a larger context window or higher reasoning will impact AI credits consumption; more tokens will be consumed, so more credits will be used. For this reason, we recommend that you use the regular context window and regular reasoning by default, selecting the larger context window and higher reasoning for more complex tasks only.

> [!NOTE]
> * The 1 million token context window is available in Visual Studio Code and Copilot CLI only.
> * Configurable reasoning levels are available in Visual Studio Code, Copilot CLI, and Copilot cloud agent.
> * Some models have extended capability pricing see [Models And Pricing](https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing#pricing-tables)

{% rowheaders %}

| Model | 1 million token context window | Configurable reasoning |
| --- | --- | --- |
| Claude Sonnet 4.6 | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Claude Opus 4.6 | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Claude Opus 4.7 | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Claude Opus 4.8 | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Claude Opus 5 | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Claude Sonnet 5 | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Claude Opus 4.8 (fast mode) (preview) | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |
| Claude Fable 5 | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| GPT-5.3-Codex | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| GPT-5.4 | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| GPT-5.5 | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| GPT-5.6 Luna | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| GPT-5.6 Sol | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| GPT-5.6 Terra | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Kimi K3 | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

## Supported AI models per client

The following table shows which models are available in each client.

{% rowheaders %}

| Model | GitHub.com | Copilot CLI | Visual Studio Code | Visual Studio | Eclipse | Xcode | JetBrains IDEs |
| --- | --- | --- | --- | --- | --- | --- | --- |
| {% for model in tables.copilot.model-supported-clients %} |
| {{ model.name }}{% if model.name == 'GPT-5.4 nano' %}[^gpt54nano]{% endif %} | {% if model.dotcom == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.cli == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.vscode == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.vs == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.eclipse == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.xcode == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.jetbrains == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} |
| {% endfor %} |

{% endrowheaders %}

> [!NOTE]
> In Visual Studio Code you can add more models than those that are available by default with your Copilot subscription. See [Change The Chat Model?Tool=Vscode](https://docs.github.com/en/copilot/how-tos/use-ai-models/change-the-chat-model?tool=vscode#adding-more-models).

## Minimum IDE versions for recent models

Some Copilot models require minimum versions of supported IDEs or Copilot extensions or plugins. The table below lists the minimum versions known from changelog entries or provided release guidance. This information is tentative and subject to change as model support rolls out. For best results, keep your IDE and Copilot extension or plugin updated to the latest available version.

{% rowheaders %}

| Model                                                    | Visual Studio Code | Visual Studio | JetBrains IDEs | Xcode | Eclipse |
|----------------------------------------------------------|----------------------------------------------|------------------------------------------|----------------|-------|---------|
| Gemini 3.1 Pro       | `v1.115.0` | `17.14.22` or `18.1.0`         | `1.5.62` | `0.46.0` | `0.14.0` |
| Gemini 3.5 Flash     | `v1.115.0` | `17.14.22` or `18.1.0`         | `1.5.62` | `0.46.0` | `0.14.0` |
| Gemini 3.6 Flash     | `v1.128.0` | `17.14.22` or `18.1.0`         | TBD | TBD | TBD |
| Gemini 3.7 Flash     | `v1.128.0` | `17.14.22` or `18.1.0`         | TBD | TBD | TBD |
| GPT-5.2-Codex        | No minimum listed | `17.14.19` or `18.0.0`         | `1.5.61` | `0.45.0` | `0.13.0` |
| GPT-5.3-Codex        | `v1.104.1` | `17.14.19`                     | `1.5.61` | `0.45.0` | `0.13.0` |
| GPT-5.4              | `v1.104.1` | `17.14.19`                     | `1.5.66` | `0.47.0` | `0.15.0` |
| GPT-5.4 mini         | `v1.104.1` | `17.14.19`                     | `1.5.66` | `0.47.0` | `0.15.0` |
| GPT-5.5              | `v1.117` | `17.14.19`                     | `1.5.66` | `0.47.0` | `0.15.0` |
| GPT-5.6 Luna         | `1.128.0` | TBD | TBD | TBD | TBD |
| GPT-5.6 Sol          | `1.128.0` | TBD | TBD | TBD | TBD |
| GPT-5.6 Terra        | `1.128.0` | TBD | TBD | TBD | TBD |
| Claude Opus 4.8      | `v1.118` | `17.14.6`                     | TBD | TBD | TBD |
| Claude Opus 5       | `v1.128.0` | `17.14.22` | TBD | TBD | TBD |
| Claude Sonnet 5  | `v1.124` | `17.14.6` | TBD | TBD | TBD |
| Claude Fable 5      | `v1.124` | `17.14.6`                    | TBD | TBD | TBD |
| Kimi K2.7 Code     | `v1.127` | `17.14.6`            | `1.9.1-251` | TBD | TBD |
| Kimi K3     | `v1.131` | TBD            | TBD | TBD | TBD |
| MAI-Code-1-Flash    | `v1.121` | TBD                            | TBD | TBD | TBD |
| MAI-Code-1.1-Flash  | `v1.121` | TBD                            | TBD | TBD | TBD |
| Grok 4.5             | TBD | `17.14.19` | TBD | TBD | TBD |
| Grok 4.6             | TBD | TBD | TBD | TBD | TBD |

{% endrowheaders %}

> [!NOTE]
>
> * For GPT-5.3-Codex in Visual Studio Code, `v1.108` and later provide improved prompting and response quality.
> * "No minimum listed" means the reviewed changelog or release guidance did not specify a minimum version, not that all older versions are supported.
> * Even when a model appears in the model picker on older supported versions, prompting and model behavior may work best with the latest IDE and Copilot extension or plugin versions.

## Supported AI models per Copilot plan

The following table shows which AI models are available in each Copilot plan. For more information about the plans, see [Plans](https://docs.github.com/en/copilot/get-started/plans).

> [!NOTE] Copilot Student and Copilot Free users have access to models through auto model selection only.

{% rowheaders %}

| Available models                               | Copilot Pro  | Copilot Pro+ | Copilot Max | Copilot Business | Copilot Enterprise |
|---------------------------------------------------------|-------------------------------------------------|-----------------------------------------------------|------------------------------------------------|-----------------------------------------------------|-------------------------------------------------------|
| {% for model in tables.copilot.model-supported-plans %} |
| {{ model.name }}{% if model.name == 'GPT-5.4 nano' %}[^gpt54nano]{% endif %}{% if model.name == 'Claude Fable 5' %}[^claude-fable-5]{% endif %} | {% if model.pro == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.pro_plus == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.max == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.business == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.enterprise == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} |
| {% endfor %}                                            |

{% endrowheaders %}

[^gpt54nano]: GPT-5.4 nano is currently only available in the Codex Visual Studio Code extension (Copilot Pro+ only) and is not available in Copilot Chat.


> [!NOTE]
> * If you're an organization or enterprise owner, you can enable or restrict access to specific models for your members. See [Configure Access To Ai Models](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-access-to-ai-models#setup-for-organization-and-enterprise-plans).

## Fallback and long-term support (LTS) models

For more information about fallback and LTS models, see [Fallback And Lts Models](https://docs.github.com/en/copilot/concepts/models/fallback-and-lts-models).

## Evaluation models

GitHub Copilot offers access to evaluation models.

> [!IMPORTANT]
> * Testing revealed evaluation models may perform worse than other models on security-related, or other categories of prompts.
> * Users should always carefully review and validate code, including code security, using a range of models and with a thorough human review before incorporating suggestions into production.

Evaluation models may appear in the product with codenames rather than official model or provider names. These models come from or are fine-tuned by one or more of the following providers: Microsoft, OpenAI, Anthropic, and Google. Data handling for each provider is limited to GitHub's existing agreement with that provider, and evaluation models undergo GitHub and Microsoft testing and verification before release.

Evaluation models may be added, updated, or removed without notice. Availability and rate limits may differ from generally available models.

Access to evaluation models in auto model selection  for users Copilot plans for individuals is governed by a policy. To disable evaluation models:

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. At the top of the page, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} AI controls**.

1. For the **Evaluation models in Copilot auto model selection** setting, select **Disabled** from the dropdown.

[^mai-code-1-flash]: MAI models are continuously improving models. Performance and behavior may evolve over time as new checkpoints are released.

## Utility models

Utility models power background features across surfaces, and cannot be disabled or selected in the model picker. See [Utility Models](https://docs.github.com/en/copilot/concepts/models/utility-models).

The following models are currently used as utility models:

* GPT-4o mini
* GPT-4o
* GPT-4.1
* GPT-5.4 nano


## Models eligible for default enablement



On Copilot Business and Copilot Enterprise plans, a new policy will control whether unconfigured generally available (GA) models default to enabled or disabled. For more information, see [Default Availability](https://docs.github.com/en/copilot/concepts/models/default-availability).






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


## Model support

If a particular model seems unavailable, refer to the model vendor's support page for the latest information about its availability. If more than one model from different vendors is unavailable, contact [GitHub Support](https://support.github.com) or refer to the [GitHub status page](https://www.githubstatus.com/) for additional information.

## Model retirement history

The following table lists AI models that are retired or scheduled for retirement from Copilot, along with their retirement dates and suggested alternatives.

{% rowheaders %}

| Model name                                                  | Retirement date             | Suggested alternative             |
|-------------------------------------------------------------|-----------------------------|-----------------------------------|
| {% for model in tables.copilot.model-deprecation-history %} |
| {{ model.name }}{% if model.name == 'Claude Sonnet 4.6' %}[^claude-sonnet-46-annual]{% endif %} | {{ model.retirement_date }} | {{ model.suggested_alternative }} |
| {% endfor %}                                                |

{% endrowheaders %}

[^claude-sonnet-46-annual]: Claude Sonnet 4.6 remains available to individual Copilot subscribers on annual plans. The retirement of Claude Sonnet 4.6 does not apply to these subscribers.

## Next steps

* To get up and running with Copilot, see [Quickstart](https://docs.github.com/en/copilot/get-started/quickstart).
* To configure which models are available to you, see [Configure Access To Ai Models](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-access-to-ai-models).
* To learn more about Responsible Use and Responsible AI, see [Copilot Trust Center](https://copilot.github.trust.page/) and [Responsible Use](https://docs.github.com/en/copilot/responsible-use).
