# Adding LLM models to GitHub Copilot CLI

There are various ways you can add models to Copilot CLI.

* **Ollama**: Copilot CLI automatically discovers models served by Ollama running on your machine, and you can add these models from the model picker.
* **Manually configured model provider**: Add an external model provider by specifying your own credentials in a configuration file. This method is often called bring your own key (BYOK).
* **Installing MAI Code 1.1 Flash locally**: Windows users with the required system specifications can install this model directly from the model picker and run it on their local machine.

> [!NOTE]
> This article tells you how to configure custom models for your own use. To set up custom models for users in an organization or enterprise, see [Enable Custom Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/enable-custom-models) and [Enable Custom Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/enable-custom-models).


## Model requirements

Choose a model and endpoint that support **tool calling** (also called function calling) and **streaming**. These capabilities let Copilot CLI use tools and display responses as they arrive.

Configure token limits to match your model, especially for smaller local models. For an unknown model, Copilot CLI can default to a limit of 128,000 prompt tokens, which can exceed the model's actual capacity. Setting a higher limit does not increase the model's context window.

## Adding models from Ollama

If Ollama is running on your local machine, and you have already downloaded a model, Copilot CLI can discover the model and allow you to add it from the model picker.

### Prerequisite

You must have installed Ollama on your local machine and downloaded at least one model. For information, see [Download Ollama](https://ollama.com/download) on the Ollama website.

### Adding a model

1. In an interactive session, enter `/model`.
1. Look for Ollama-provided models under "Local and self-hosted."

   Any models you have downloaded from Ollama but not yet added are shown with the status "Discovered."

1. Select a discovered model and press <kbd>Enter</kbd>.
1. Choose **Add and use for this session** to switch to the model, or **Add without switching** to keep using your current model.
1. Press <kbd>Esc</kbd> to exit the picker.

The CLI saves the model details to the `providers.json` file so it is available in later sessions.

> [!NOTE]
> Copilot checks for Ollama at `http://127.0.0.1:11434` by default. If Ollama uses another local address or port, set `OLLAMA_HOST` before starting the CLI. Automatic discovery only checks addresses on your own machine. For an Ollama server on another machine, use a provider configuration file instead.

## Manually adding a model provider configuration

To use a model provider other than Ollama, you need to manually add the provider details to the `providers.json` file.

### Prerequisite

You must have an API key to add a model provider that requires authentication.

### Supported providers

For connections to a model provider's API, the following provider types are available:

| Provider type | Compatible services |
|---|---|
| `openai` | OpenAI and services with an OpenAI-compatible API, such as Ollama, vLLM, and Foundry Local. This is the default provider type. |
| `azure` | Azure OpenAI Service. |
| `anthropic` | Anthropic (Claude models). |

### Adding a provider and a model

The `providers.json` file stores details of configured providers and models. It's located in your CLI configuration directory, normally `~/.copilot`. You can use another file by setting `COPILOT_PROVIDERS_CONFIG` to its path before starting the CLI.

Models you configure in the `providers.json` file are available in the CLI's model picker, alongside the GitHub-provided models available to your account.

> [!IMPORTANT]
> Credentials entered in this file are stored as plain text. Keep the file private and do not commit it to a repository or share it. Values such as `$MY_API_KEY` in JSON are treated as literal text, not read from your environment.

1. Open `providers.json`, or create it if it does not exist. Add your provider and model. For example, this configuration adds the OpenAI model provider and one model:

    ```json
    {
       "providers": [
          {
             "name": "my-provider",
             "type": "openai",
             "baseUrl": "https://api.openai.com/v1",
             "apiKey": "YOUR-API-KEY"
          }
       ],
       "models": [
          {
             "id": "YOUR-MODEL-NAME",
             "provider": "my-provider"
          }
       ]
    }
    ```

   Replace `YOUR-API-KEY` with your provider's API key and `YOUR-MODEL-NAME` with a model name available to your account. For another OpenAI-compatible provider, change `baseUrl` to its API URL. Omit `apiKey` if the provider does not require authentication.

   If the file already contains providers and models, add to the existing data instead of replacing it.

   For providers or models that need additional settings:

   * Set the provider's `type` to `azure` for Azure OpenAI or `anthropic` for Anthropic, and use that provider's API URL and credentials.
   * For OpenAI or Azure models that use the Responses API, add `"wireApi": "responses"` to the provider. The default is `completions`.
   * For an Azure deployment, set the model's `wireModel` to the deployment name and `modelId` to the name of the model you deployed. If you need a specific API version, add `"azure": { "apiVersion": "YOUR-API-VERSION" }` to the provider. Replace `YOUR-API-VERSION` with the version required by your endpoint.
   * If the model's `id` is a name you chose rather than the name accepted by the provider, set `wireModel` to the provider's model name. Set `modelId` to a model name the CLI recognizes so it can use that model's capabilities and limits.
   * Set `maxPromptTokens` and `maxOutputTokens` on a model to match its supported limits. Use whole numbers greater than zero.
   * To authenticate with a bearer token instead of an API key, set `bearerToken` on the provider.

   Many other parameters can be configured in this file. For more information, see [CLI Config Dir Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-config-dir-reference#providersjson).

1. To add another model from the same provider, add another entry to `models` with a different `id` and the same `provider`.

   > [!NOTE]
   > Each model's `provider` value must match a provider's `name`.

1. To add a different provider, add an entry to `providers` with a unique `name`, then add its models.
1. Save the file and restart the CLI.
1. To select the example model when starting a session, run:

    ```shell
    copilot --model PROVIDER-NAME/MODEL-NAME
    ```

1. To switch models during a session, use the `/model` slash command. For more information, see [Choose A Model](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/choose-a-model).

1. To stop loading a provider from your saved configuration, remove its entry from `providers` and its model entries from `models`, then restart the CLI. Choose a different default with `/model --global` before removing your current default model.

## Installing a local model from the model picker

> [!NOTE]
> This feature is in public preview and is subject to change.
 To use this feature, start the CLI with the `--experimental` option, or use `/experimental on` in an interactive session to enable this and other experimental features for the current and future sessions.

If you are using Windows and your computer meets the following prerequisites, you can use the CLI's model picker to install and run the following models locally on your device:

* MAI Code 1.1 Flash
* Flint NVFP4

### Prerequisites

You must have:
* A Windows PC
* An NVIDIA GPU (AMD is not supported)
* Minimum available combined RAM per model:

  * **MAI Code 1.1 Flash:**&nbsp; 96 GB
  * **Flint NVFP4:**&nbsp; 48 GB

* Minimum available storage per model:

  * **MAI Code 1.1 Flash:**&nbsp; 60 GB
  * **Flint NVFP4:**&nbsp; 23 GB


### Benefits of using MAI Code 1.1 Flash locally

MAI Code 1.1 Flash is a coding-optimized model that you can run locally on your Windows PC. By using a model that's running locally, you can use Copilot offline and avoid consuming GitHub AI Credits.

After installing MAI Code 1.1 Flash, you can select it from the model picker, just like any other model. The model also becomes available for Copilot Fusion's Fusion Standard effort level to use. When you set the model selection to **Copilot Fusion** with Fusion Standard, MAI Code 1.1 Flash will be automatically chosen to work on appropriate tasks, leaving cloud-based models for tasks that require more resources or higher performance.


### Using the model picker to install a local model

1. In a local interactive session, enter `/model`.
1. Look for the supported local models under "Local and self-hosted."

   The status is shown as "Download required".

   > [!NOTE]
   > The local models are only available for download if your local machine is a Windows PC that meets the GPU and memory requirements.

1. Use the down arrow key to select a local model, then press <kbd>Enter</kbd>.

   The CLI checks that your computer meets the installation requirements. See the [Prerequisites](#prerequisites) listed earlier in this article.

1. Select **Download and set up** to start downloading the model.

   You can continue using other models while the download is in progress. The CLI will notify you, in the conversation output, when the download is complete.

### Using a local model

After the download is complete, the local model will be available for use in your sessions.

You can:

* Select it from the model picker, then choose **Select this model**. See [Choose A Model](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/choose-a-model#choosing-a-model).
* **MAI Code 1.1 Flash only:** Choose **Copilot Fusion**, then **Fusion Standard** in the model picker, and Copilot will automatically use the local model when appropriate.
* Assign it to a custom agent for focused tasks. You can then prompt Copilot to use that custom agent for part of a task, while keeping your main session on a different model in the cloud. See [Create Custom Agents For CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli#delegating-focused-tasks-to-a-specific-model).

> [!IMPORTANT]
> After downloading a local model from the model picker, do not use it simultaneously in sessions within different Copilot surfaces (Copilot CLI, the Copilot app, VS Code), either by direct selection or via Copilot Fusion. Each surface loads its own instance of the model into memory, which is likely to cause your local machine to run out of RAM.


## Running in offline mode

To prevent Copilot CLI from contacting GitHub's servers—for example, to send telemetry data—set the `COPILOT_OFFLINE` environment variable to `true` before starting the CLI. For full network isolation, your model provider must also be local or within the same isolated environment. See [Authenticate Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/authenticate-copilot-cli#offline-mode).

## Troubleshooting

* **An Ollama model is missing:** Check that Ollama is running and the model has been downloaded. Open `/model` and press <kbd>Ctrl</kbd>+<kbd>R</kbd> to scan again. For a server on another machine, configure its OpenAI-compatible API URL manually, including `/v1`.
* **A saved model is missing:** Check that its `provider` matches a provider's `name`, then restart the CLI. If adding a discovered model produced a save warning, follow the warning to fix the file or its permissions.
* **Environment settings have no effect:** Check whether `providers.json`, or the file selected by `COPILOT_PROVIDERS_CONFIG`, already contains providers or models. That file takes precedence.
* **Requests fail:** Check the API URL, credentials, model name, and API choice. For Azure OpenAI, check the deployment name. For errors about request size, set token limits that fit your model.
