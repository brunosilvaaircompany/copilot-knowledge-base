# Hosting of models for GitHub Copilot

GitHub Copilot can use a variety of AI models. This article explains how these models are hosted and served.

## OpenAI models

Used for:

* GPT-5 mini
* GPT-5.3-Codex
* GPT-5.4
* GPT-5.4 mini
* GPT-5.4 nano
* GPT-5.5
* GPT-5.6 Luna
* GPT-5.6 Sol
* GPT-5.6 Terra

These models are hosted by OpenAI and GitHub's Azure infrastructure.

OpenAI makes the [following data commitment](https://openai.com/enterprise-privacy/): _We [OpenAI] do not train models on customer business data_. Data processing follows OpenAI's enterprise privacy comments.

GitHub maintains a [zero data retention agreement](https://platform.openai.com/docs/guides/your-data) with OpenAI.

All input requests and output responses processed by GitHub Copilot's models continue to pass through GitHub Copilot's, content filtering systems. These filters include checks for public code matches (when applied) as well as mechanisms to detect and block harmful or offensive content.

## Anthropic models

Used for:

* Claude Haiku 4.5
* Claude Sonnet 4.5
* Claude Sonnet 4.6
* Claude Sonnet 5
* Claude Opus 4.5
* Claude Opus 4.6
* Claude Opus 4.7
* Claude Opus 4.8
* Claude Opus 4.8 (fast mode) (preview)
* Claude Opus 5
* Claude Fable 5

> [!WARNING] 
> When Claude Fable 5 is used, Anthropic retains data, including prompts and outputs, to operate safety classifiers that detect harmful use. Other Claude models in GitHub Copilot remain covered by GitHub's existing data retention agreements, as documented below. Enterprise and business users need to enable the Claude Fable 5 model to make it available for your organization. You can read more about Anthropic's data handling practices for this model under section F of their [Service Specific Terms](https://www.anthropic.com/legal/service-specific-terms).

These models are hosted by Amazon Web Services, Anthropic PBC, and Google Cloud Platform. GitHub has provider agreements in place to ensure data is not used for training. Additional details for each provider are included below:

* Amazon Bedrock: Amazon makes the [following data commitments](https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html): _Amazon Bedrock doesn't store or log your prompts and completions. Amazon Bedrock doesn't use your prompts and completions to train any AWS models and doesn't distribute them to third parties_.

* Anthropic PBC: GitHub maintains a [zero data retention agreement](https://privacy.anthropic.com/en/articles/8956058-i-have-a-zero-retention-agreement-with-anthropic-what-products-does-it-apply-to) with Anthropic for generally available Anthropic features in GitHub Copilot. Some Anthropic features in beta or public preview—including tool search via the Messages API—are not covered by this agreement. For these features, data may be retained by Anthropic in accordance with [Anthropic's ZDR documentation](https://platform.claude.com/docs/en/build-with-claude/zero-data-retention). GitHub will update this page as ZDR coverage changes.

* Google Cloud: [Google commits to not training on GitHub data as part of their service terms](https://cloud.google.com/vertex-ai/generative-ai/docs/data-governance). GitHub is additionally not subject to prompt logging for abuse monitoring.

To provide better service quality and reduce latency, GitHub uses [prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching). You can read more about prompt caching on [Anthropic PBC](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching), [Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html), and [Google Cloud](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/claude-prompt-caching).

When using Claude, input prompts and output completions continue to run through GitHub Copilot's content filters for public code matching, when applied, along with those for harmful or offensive content.

## Google models

Used for:

* Gemini 3.1 Pro
* Gemini 3.5 Flash
* Gemini 3.6 Flash
* Gemini 3.7 Flash

GitHub Copilot uses Gemini models hosted on Google Cloud Platform (GCP). When using Gemini models, prompts and metadata are sent to GCP, which makes the [following data commitment](https://cloud.google.com/vertex-ai/generative-ai/docs/data-governance): _Gemini doesn't use your prompts, or its responses, as data to train its models._

To provide better service quality and reduce latency, GitHub uses [prompt caching](https://cloud.google.com/vertex-ai/generative-ai/docs/data-governance#customer_data_retention_and_achieving_zero_data_retention).

When using Gemini models, input prompts and output completions continue to run through GitHub Copilot's content filters for public code matching, when applied, along with those for harmful or offensive content.

## xAI models

Used for:

* Grok 4.5
* Grok 4.6

These models are hosted on xAI. xAI operates these models in GitHub Copilot under a zero data retention API policy. This means xAI commits that user content (both inputs sent to the model and outputs generated by the model):

Will **not** be:
* Logged for any purpose, including human review
* Saved to disk or retained in any form, including as metadata
* Accessible by xAI personnel
* Used for model training

Will **only**:
* Exist temporarily in RAM for the minimum time required to process and respond to each request
* Be immediately deleted from memory once the response is delivered

When using xAI, input prompts and output completions continue to run through GitHub Copilot's content filters for public code matching, when applied, along with those for harmful or offensive content.

For more information, see [xAI's enterprise terms of service](https://x.ai/legal/terms-of-service-enterprise) on the xAI website.

## Microsoft models

Used for:

* MAI-Code-1-Flash
* MAI-Code-1.1-Flash
* Raptor mini

MAI-Code-1-Flash and MAI-Code-1.1-Flash are first-party Microsoft models hosted on Azure in GitHub's tenant.

GitHub does not use Copilot Business or Copilot Enterprise customer data to train AI models. For individual subscribers—Copilot Free, Copilot Pro, Copilot Pro+, and Copilot Max users—GitHub may use Copilot interaction data, including prompts (inputs), suggestions (outputs), and code snippets generated during Copilot sessions to train and improve AI models, in accordance with our [GitHub General Privacy Statement](https://docs.github.com/en/free-pro-team@latest/site-policy/privacy-policies/github-general-privacy-statement) and applicable user settings. Individual subscribers can opt out of having their data used for AI model training. To manage this setting, see [Manage Policies](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#model-training-and-improvements).

MAI-Code-1-Flash and MAI-Code-1.1-Flash are served on Microsoft Azure AI Foundry within GitHub's tenant and are subject to GitHub's data handling configuration for that deployment. For details about how data is processed, retained, and secured for models served on Azure AI Foundry, see [Data, privacy, and security for Foundry Models sold by Azure](https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/openai/data-privacy?tabs=azure-portal) in the Microsoft documentation.

When using MAI-Code-1-Flash or MAI-Code-1.1-Flash, input prompts and output completions continue to run through GitHub Copilot's content filters for public code matching, when applied, along with those for harmful or offensive content.

## Open-weight models

Open-weight models have publicly available weights. Hosting differs by model and is described in the sections below. Customer prompts and responses are not sent to the original model developers.


### Moonshot AI models

Used for:

* Kimi K2.7 Code
* Kimi K3

Kimi K2.7 Code and Kimi K3 were developed by Moonshot AI. They are open-weight models that may be less aligned than other Copilot models, with an elevated risk of geographic bias. Before you enable either model, review the [Kimi K2.7 Code model card](https://huggingface.co/moonshotai/Kimi-K2.7-Code) or the [Kimi K3 model card](https://huggingface.co/moonshotai/Kimi-K3) and run your own evaluations before enabling.

Kimi K2.7 Code is hosted on Azure AI Foundry infrastructure managed by GitHub and Microsoft.

Kimi K3 is hosted by GitHub on Fireworks AI.

Both models are covered by zero data retention agreements with the hosting providers. Fireworks AI and Azure AI Foundry do not use prompts or completions to train models, and prompts and completions are not sent to Moonshot AI.

GitHub does not use Copilot Business or Copilot Enterprise customer data to train AI models. For individual subscribers—Copilot Free, Copilot Pro, Copilot Pro+, and Copilot Max users—GitHub may use Copilot interaction data, including prompts (inputs), suggestions (outputs), and code snippets generated during Copilot sessions to train and improve AI models, in accordance with our [GitHub General Privacy Statement](https://docs.github.com/en/free-pro-team@latest/site-policy/privacy-policies/github-general-privacy-statement) and applicable user settings. Individual subscribers can opt out of having their data used for AI model training. To manage this setting, see [Manage Policies](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#model-training-and-improvements).

When using Kimi K2.7 Code or Kimi K3, input prompts and output completions continue to run through GitHub Copilot's content filters.

## Inline suggestions

Inline suggestions, including ghost text and next edit suggestions, are powered by models hosted on Azure for Copilot Business and Copilot Enterprise plans. Copilot Free and Copilot Student user models are hosted on Fireworks AI.
