# Configuring Copilot in GitHub Desktop

You can choose which model Copilot uses for each GitHub Desktop feature, such as commit message generation and conflict resolution.

You can also configure Copilot in GitHub Desktop to use your own LLM provider (BYOK) instead of GitHub-hosted models. This lets you connect to OpenAI-compatible endpoints, Azure OpenAI, or Anthropic, including locally running models such as Ollama.

## Prerequisites

* You must be signed in to a GitHub account with access to Copilot in GitHub Desktop.
* If your access is managed by an organization or enterprise, Copilot in GitHub Desktop must be enabled for your account.
* You have an API key or bearer token from a supported LLM provider, or you have a local model running, such as Ollama.
* You have the base URL and at least one model identifier for the provider you want to use.

> [!NOTE]
> Custom LLM providers in GitHub Desktop require access to Copilot in GitHub Desktop. To use your own LLM models with Copilot CLI, see [Use Byok Models](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/use-byok-models).

## Supported provider types

GitHub Desktop supports three custom provider types:

| Provider type | Compatible services |
| --- | --- |
| **OpenAI / OpenAI-compatible** | OpenAI, Ollama, vLLM, Foundry Local, and any other endpoint that is compatible with the selected API format. |
| **Azure** | Azure OpenAI Service. |
| **Anthropic** | Anthropic Claude models. |

## Configuring your provider

You configure your model provider by adding a custom provider in GitHub Desktop settings.

{% mac %}

1. In the menu bar, select **GitHub Desktop**, then click **Settings**.

   ![Screenshot of the menu bar on a Mac. Under the open "GitHub Desktop" dropdown menu, the cursor hovers over "Settings", which is highlighted in blue.](/assets/images/help/desktop/mac-choose-settings.png)


1. In the left sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**.

1. Click the **Providers** tab.
1. Click **Add Provider**.
1. Under **Name**, type a name for the LLM provider.
1. Under **Type**, select the provider type.
1. Under **Base URL**, type the base URL of your model provider's API endpoint.

   The base URL must be an HTTPS URL, or an HTTP URL that points to the local machine.
1. If you selected **OpenAI / OpenAI-compatible**, under **API Format**, select the API format your provider expects.
   * Select **Chat completions (default)** for providers that use the OpenAI Chat Completions API.
   * Select **Responses (GPT-5 series)** for providers that use the OpenAI Responses API.
1. If you selected **Azure**, under **Azure API Version**, type the API version for your deployment.
1. Optionally, under **Request Timeout (seconds)**, type the number of seconds GitHub Desktop waits for the provider to respond.
1. Under **Authentication**, select the authentication method.
   * Select **API key** to authenticate with an API key.
   * Select **Bearer token** to authenticate with a bearer token.
   * Select **None** only for endpoints that do not require credentials.
1. If you selected **API key** or **Bearer token**, type the required credential.
1. Add at least one model to the provider. For more information, see [Adding models to your provider](#adding-models-to-your-provider).
1. Click **Add**.

{% endmac %}

{% windows %}

1. Use the **File** menu, then click **Options**.

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. In the expanded "File" dropdown menu, the "Options" item is outlined in orange.](/assets/images/help/desktop/windows-choose-options.png)


1. In the left sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**.

1. Click the **Providers** tab.
1. Click **Add Provider**.
1. Under **Name**, type a name for the LLM provider.
1. Under **Type**, select the provider type.
1. Under **Base URL**, type the base URL of your model provider's API endpoint.

   The base URL must be an HTTPS URL, or an HTTP URL that points to the local machine.
1. If you selected **OpenAI / OpenAI-compatible**, under **API Format**, select the API format your provider expects.
   * Select **Chat completions (default)** for providers that use the OpenAI Chat Completions API.
   * Select **Responses (GPT-5 series)** for providers that use the OpenAI Responses API.
1. If you selected **Azure**, under **Azure API Version**, type the API version for your deployment.
1. Optionally, under **Request Timeout (seconds)**, type the number of seconds GitHub Desktop waits for the provider to respond.
1. Under **Authentication**, select the authentication method.
   * Select **API key** to authenticate with an API key.
   * Select **Bearer token** to authenticate with a bearer token.
   * Select **None** only for endpoints that do not require credentials.
1. If you selected **API key** or **Bearer token**, type the required credential.
1. Add at least one model to the provider. For more information, see [Adding models to your provider](#adding-models-to-your-provider).
1. Click **Add**.

{% endwindows %}

## Adding models to your provider

Add the models you want to use from your provider. Each model you add appears in the model picker alongside GitHub-hosted models.

1. In the **Add Custom Provider** or **Edit Custom Provider** dialog, under **Models**, click **Add Model**.
1. Under **Display Name**, type the friendly name shown in the Copilot model picker.
1. Under **Model Identifier**, type the exact model name your provider expects.
1. Under **Reasoning Effort**, select the reasoning level for the model.

   For non-reasoning models, or to let the provider choose, leave **Default (provider's choice)** selected.
1. Click **Add**.

## Reviewing provider responsibilities

When you use your own LLM provider, GitHub Desktop sends prompts and repository context to that provider instead of GitHub. Check your provider's data handling and retention policies before adding credentials.

Always review generated commit messages and conflict-resolution suggestions before committing. For more information, see [Responsible Use](https://docs.github.com/en/copilot/responsible-use).

## Further reading

* [Committing And Reviewing Changes To Your Project In GitHub Desktop](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop)
* [Supported Models](https://docs.github.com/en/copilot/reference/ai-models/supported-models)
* [Use Byok Models](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/use-byok-models)
