# Models and pricing for GitHub Copilot

## How model pricing works

When you use Copilot, the interaction consumes tokens: input tokens (what's sent to the model), output tokens (what the model generates), and cached tokens (context the model reuses or stores). Each token is priced based on the model used, and the total is converted into AI credits, where 1 AI credit = $0.01 USD.

The cost of an interaction depends on two things: the model and the number of tokens consumed.

How Copilot usage is tracked and billed depends on your plan type:

* Individual plans (Copilot Free, Copilot Pro, Copilot Pro+, and Copilot Max) include GitHub AI Credits allowances that vary by plan. For details, see [Usage Based Billing For Individuals](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-individuals).
* Copilot Business and Copilot Enterprise include per-user GitHub AI Credits allowances that are pooled at the billing entity level. For details, see [Usage Based Billing For Organizations And Enterprises](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

When usage exceeds the included allowances for any Copilot plan, additional usage is billed in GitHub AI Credits at the per-token rates shown in the pricing tables below (1 AI credit = $0.01 USD).

> [!NOTE] The option to purchase additional AI credits is not available if you subscribe, or have subscribed, to a Copilot plan through GitHub Mobile on iOS or Android.


## Pricing tables

All prices are **per 1 million tokens**.

### OpenAI

> [!NOTE] Models with a **Long context** tier, offer extended capabilities and longer context windows. See [Supported Models](https://docs.github.com/en/copilot/reference/ai-models/supported-models#models-with-extended-capabilities)

GPT-5.6 Sol, GPT-5.6 Terra, and GPT-5.6 Luna include a cache write cost in addition to cached input. Earlier OpenAI models have no cache write cost.

| Model | Release status | Category | Tier | Threshold (input tokens) | Input | Cached input | Cache write | Output |
| --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: |
| {% for entry in tables.copilot.models-and-pricing %}{% if entry.provider == "openai" %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.category }} | {{ entry.tier }} | {{ entry.threshold }} | {{ entry.input }} | {{ entry.cached_input }} | {{ entry.cache_write }} | {{ entry.output }} |
| {% endif %}{% endfor %} |

### Anthropic

Anthropic models include a cache write cost in addition to cached input.

| Model | Release status | Category | Input | Cached input | Cache write | Output |
| --- | --- | --- | ---: | ---: | ---: | ---: |
| {% for entry in tables.copilot.models-and-pricing %}{% if entry.provider == "anthropic" %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.category }} | {{ entry.input }} | {{ entry.cached_input }} | {{ entry.cache_write }} | {{ entry.output }} |
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

## Code completions

Code completions and next edit suggestions are not billed in AI credits. They remain unlimited for all paid Copilot plans and continue to use their existing counting mechanism.


## Pricing and usage cost considerations for Copilot code review

For most Copilot features, the model used for each interaction is visible to you, so you can reference the pricing tables above to estimate costs. Copilot code review is an exception—the model is selected automatically and is not disclosed, so per-token costs may vary between reviews.

Each code review is billed in two ways: token consumption is billed in AI credits, and the agentic infrastructure that powers the review consumes GitHub Actions minutes.

GitHub Actions minutes are attributed to the repository, and from there to the enterprise or cost center where applicable. AI credits are charged to the person who requests the review, or to the author of a pull request where a policy automatically triggers a review. If neither has a Copilot seat, usage is billed to the enterprise or cost center instead.

You can view your current GitHub Actions usage for Copilot code review in the following ways:

* **GitHub Actions metrics**: Filter by the `copilot-pull-request-reviewer` workflow. See [Viewing GitHub Actions Metrics For Your Organization](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/viewing-github-actions-metrics-for-your-organization).
* **Billing usage report**: Filter by `workflow_path` using the value `dynamic/agents/copilot-pull-request-reviewer`. See [Billing Reports](https://docs.github.com/en/billing/reference/billing-reports).

## Model multipliers for annual Copilot Pro and Copilot Pro+ subscribers

Copilot Pro and Copilot Pro+ subscribers on **existing annual billing plans** using the **request-based billing** model have different model multipliers. See [Model Multipliers For Annual Plans](https://docs.github.com/en/copilot/reference/copilot-billing/request-based-billing-legacy/model-multipliers-for-annual-plans).

[^gemini-flash-promo]: Gemini 3.6 Flash and Gemini 3.7 Flash are available at the promotional pricing of $0.75 per 1M input tokens, $0.075 per 1M cached input tokens, and $3.75 per 1M output tokens through December 31, 2026.
