# Models and pricing for GitHub Copilot

## How model pricing works

When you use Copilot, the interaction consumes tokens: input tokens (what's sent to the model), output tokens (what the model generates), and cached tokens (context the model reuses or stores). Each token is priced based on the model used, and the total is converted into AI credits, where 1 AI credit = $0.01 USD.

The cost of an interaction depends on two things: the model and the number of tokens consumed.

How Copilot usage is tracked and billed depends on your plan type:

* Individual plans (Copilot Free, Copilot Pro, Copilot Pro+, and Copilot Max) include GitHub AI Credits allowances that vary by plan. For details, see [Billing](https://docs.github.com/en/copilot/concepts/billing-and-usage/individuals/billing).
* Copilot Business and Copilot Enterprise include per-user GitHub AI Credits allowances that are pooled at the billing entity level. For details, see [Billing](https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/billing).

When usage exceeds the included allowances for any Copilot plan, additional usage is billed in GitHub AI Credits at the per-token rates shown in the pricing tables below (1 AI credit = $0.01 USD).

If you purchased Copilot Pro, Copilot Pro+, or Copilot Max through an in-app purchase on iOS or Android, you can't buy additional GitHub AI Credits through the app store. However, if your GitHub account has a payment method on file, additional paid usage beyond your included AI credits is billed to that payment method based on your budget settings.

To avoid charges beyond your plan, create or edit a **Bundled AI credits budget**, set it to $0 USD, and enable **Stop usage when budget limit is reached**. See [Set Up Budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets#managing-budgets-for-your-personal-account).

To manage all Copilot billing in one place, cancel your mobile subscription in the App Store or Google Play and re-subscribe on GitHub.com.


## Pricing tables

All prices are **per 1 million tokens**.

### OpenAI

> [!NOTE] Models with a **Long context** tier, offer extended capabilities and longer context windows. See [Supported Models](https://docs.github.com/en/copilot/reference/ai-models/supported-models#models-with-extended-capabilities)

GPT-5.6 Sol, GPT-5.6 Terra, GPT-5.6 Luna, GPT-6 Astra, GPT-6 Luna, GPT-6 Sol, GPT-6.1 Sol, and GPT-6.1 Terra include a cache write cost in addition to cached input. Earlier OpenAI models have no cache write cost.

| Model | Release status | Category | Tier | Threshold (input tokens) | Input | Cached input | Cache write | Output |
| --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: |
| {% for entry in tables.copilot.models-and-pricing %}{% if entry.provider == "openai" %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.category }} | {{ entry.tier }} | {{ entry.threshold }} | {{ entry.input }} | {{ entry.cached_input }} | {{ entry.cache_write }} | {{ entry.output }} |
| {% endif %}{% endfor %} |

### Anthropic

> [!NOTE] Models with a **Long context** tier, offer extended capabilities and longer context windows. See [Supported Models](https://docs.github.com/en/copilot/reference/ai-models/supported-models#models-with-extended-capabilities)

Anthropic models include a cache write cost in addition to cached input.

| Model | Release status | Category | Tier | Threshold (input tokens) | Input | Cached input | Cache write | Output |
| --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: |
| {% for entry in tables.copilot.models-and-pricing %}{% if entry.provider == "anthropic" %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.category }} | {% if entry.tier %}{{ entry.tier }}{% else %}Default{% endif %} | {% if entry.threshold %}{{ entry.threshold }}{% else %}Not applicable{% endif %} | {{ entry.input }} | {{ entry.cached_input }} | {{ entry.cache_write }} | {{ entry.output }} |
| {% endif %}{% endfor %} |

### Google

> [!NOTE] Models with a **Long context** tier, offer extended capabilities and longer context windows. See [Supported Models](https://docs.github.com/en/copilot/reference/ai-models/supported-models#models-with-extended-capabilities)

| Model | Release status | Category | Tier | Threshold (input tokens) | Input | Cached input | Output |
| --- | --- | --- | --- | --- | ---: | ---: | ---: |
| {% for entry in tables.copilot.models-and-pricing %}{% if entry.provider == "google" %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.category }} | {{ entry.tier }} | {{ entry.threshold }} | {{ entry.input }} | {{ entry.cached_input }} | {{ entry.output }} |
| {% endif %}{% endfor %} |

### Fine-tuned (GitHub)

| Model | Release status | Category | Input | Cached input | Output |
| --- | --- | --- | ---: | ---: | ---: |
| {% for entry in tables.copilot.models-and-pricing %}{% if entry.provider == "github" %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.category }} | {{ entry.input }} | {{ entry.cached_input }} | {{ entry.output }} |
| {% endif %}{% endfor %} |

### Microsoft

| Model | Release status | Category | Input | Cached input | Output |
| --- | --- | --- | ---: | ---: | ---: |
| {% for entry in tables.copilot.models-and-pricing %}{% if entry.provider == "microsoft" %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.category }} | {{ entry.input }} | {{ entry.cached_input }} | {{ entry.output }} |
| {% endif %}{% endfor %} |

### xAI

> [!NOTE] Models with a **Long context** tier, offer extended capabilities and longer context windows. See [Supported Models](https://docs.github.com/en/copilot/reference/ai-models/supported-models#models-with-extended-capabilities)

| Model | Release status | Category | Tier | Threshold (input tokens) | Input | Cached input | Output |
| --- | --- | --- | --- | --- | ---: | ---: | ---: |
| {% for entry in tables.copilot.models-and-pricing %}{% if entry.provider == "xai" %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.category }} | {{ entry.tier }} | {{ entry.threshold }} | {{ entry.input }} | {{ entry.cached_input }} | {{ entry.output }} |
| {% endif %}{% endfor %} |

### Moonshot AI

| Model | Release status | Category | Input | Cached input | Output |
| --- | --- | --- | ---: | ---: | ---: |
| {% for entry in tables.copilot.models-and-pricing %}{% if entry.provider == "moonshot_ai" %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.category }} | {{ entry.input }} | {{ entry.cached_input }} | {{ entry.output }} |
| {% endif %}{% endfor %} |

### Image generation models

Image generation models are billed separately from the model you use for your session. Text sent to the image generation model counts as text input, images sent to the model count as image input, and the generated image counts as image output. Image generation models produce images, not text, so they have no text output price. For more information, see [Image Generation](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/image-generation).

| Model | Release status | Text input | Cached text input | Image input | Cached image input | Image output |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| {% for entry in tables.copilot.image-models-and-pricing %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.text_input }} | {{ entry.cached_text_input }} | {{ entry.image_input }} | {{ entry.cached_image_input }} | {{ entry.image_output }} |
| {% endfor %} |

## Code completions

Code completions and next edit suggestions are not billed in AI credits. They remain unlimited for all paid Copilot plans and continue to use their existing counting mechanism.


## Pricing and usage cost considerations for Copilot code review

For most Copilot features, the model used for each interaction is visible to you, so you can reference the pricing tables above to estimate costs. Copilot code review is an exception—the model is selected automatically and is not disclosed, so per-token costs may vary between reviews.

Each code review is billed in two ways: token consumption is billed in AI credits, and the agentic infrastructure that powers the review consumes GitHub Actions minutes.

The number of AI credits a review consumes depends on the review effort level. The following table shows estimated AI credits consumption per review, which you can use to plan for costs.

| Review effort level | Typical range per review | Approximate average per review |
| ------------------- | ------------------------ | ------------------------------ |
| Lite | $0.05 USD to $1 USD | $0.25 USD |
| Balanced | $0.25 USD to $5 USD | $1.50 USD |
| Max | $1.50 USD to $25 USD | $10 USD |

These figures are estimates only. Consumption generally increases with pull request size and repository custom instructions. Actual costs can fall outside these ranges and may change as models evolve. Estimates exclude GitHub Actions minutes.


GitHub Actions minutes are attributed to the repository, and from there to the enterprise or cost center where applicable. For requests associated with organization members who have paid Copilot licenses, AI credits are charged to the member or organization, depending on how the **Choose how members with a Copilot license are billed** policy is configured.

If the person associated with a review does not have a Copilot seat, usage is billed to the enterprise or cost center instead. For pull requests authored by Copilot cloud agent, usage is attributed first to the human co-author associated with the change. If the co-author cannot be billed, usage is billed directly to the organization. For pull requests authored by other bots, or when a bot requests the review, usage is also billed directly to the organization. These pull requests are eligible for agentic review.

You can view your current GitHub Actions usage for Copilot code review in the following ways:

* **GitHub Actions metrics**: Filter by the `copilot-pull-request-reviewer` workflow. See [Viewing GitHub Actions Metrics For Your Organization](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/viewing-github-actions-metrics-for-your-organization).
* **Billing usage report**: Filter by `workflow_path` using the value `dynamic/agents/copilot-pull-request-reviewer`. See [Billing Reports](https://docs.github.com/en/billing/reference/billing-reports).

## Model multipliers for annual Copilot Pro and Copilot Pro+ subscribers

Copilot Pro and Copilot Pro+ subscribers on **existing annual billing plans** using the **request-based billing** model have different model multipliers. See [Model Multipliers For Annual Plans](https://docs.github.com/en/copilot/reference/copilot-billing/request-based-billing-legacy/model-multipliers-for-annual-plans).

[^gemini-flash-promo]: Gemini 3.8 Flash is available at the promotional pricing of $0.75 per 1M input tokens, $0.075 per 1M cached input tokens, and $3.75 per 1M output tokens through December 31, 2026.



[^gemini-4-argon-promo]: Gemini 4 Argon is available at the promotional pricing of $2.00 per 1M input tokens, $0.10 per 1M cached input tokens, and $10.00 per 1M output tokens until December 1, 2026.
