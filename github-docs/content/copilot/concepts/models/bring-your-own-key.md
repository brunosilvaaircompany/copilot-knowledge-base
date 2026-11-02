# Bring your own key for GitHub Copilot

Bring your own key (BYOK) allows you to use Copilot with compatible models that you or your organization configure.

There are two ways to configure access to additional models:

* Users can configure additional models for themselves in a supported Copilot client.
* Enterprise owners, and organization owners with the necessary permissions, can make additional models available to eligible users in their enterprise or organization through GitHub's Copilot API.

Your ability to access additional locally hosted or cloud-hosted models depends on the surface in which you're using Copilot and the configuration method used to add models. For example, user-configured BYOK in Copilot CLI can connect to a compatible cloud-hosted service or a model server running on your computer or network.


> [!NOTE]
> Alternatively, Windows users can add the MAI Code 1.1 Flash model to their local machine, directly from Copilot CLI, the Copilot app or Visual Studio Code, provided their computer meets the required system resources. See [Add Llm Models](https://docs.github.com/en/copilot/how-tos/github-copilot-app/add-llm-models#installing-a-local-model-from-the-model-picker), [Add Llm Models](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-llm-models#installing-a-local-model-from-the-model-picker), and [AI language models in VS Code](https://code.visualstudio.com/docs/agent-customization/language-models#_use-on-device-models).


## BYOK configured by users

Supported Copilot clients let you configure your own connection to a model provider. The client uses the credentials you supply to send model requests directly to that provider, rather than through GitHub's Copilot API. You supply the provider credentials through the client rather than configuring them in GitHub's enterprise or organization settings. When you configure a model in this way it becomes available to you, but not to other Copilot users.

You can use BYOK to add locally hosted or cloud-hosted models. Custom models you configure in this way are added alongside the GitHub-provided models available to you. Adding custom models does not remove other models.

BYOK allows you to use models without a Copilot subscription. However, a cloud-hosted service still requires internet access. To use a model in an air-gapped environment, the model endpoint must be reachable from the client within that environment.

You can configure your own model provider in the following clients.

| Client | More information |
| --- | --- |
| VS Code | [Add a model from a built in provider](https://code.visualstudio.com/docs/agent-customization/language-models#_add-a-model-from-a-built-in-provider) in the VS Code documentation |
| JetBrains | [Bring your own key (BYOK) support for JetBrains IDEs and Xcode](https://github.blog/changelog/2025-09-11-bring-your-own-key-byok-support-for-jetbrains-ides-and-xcode-in-public-preview/?utm_source=byok-docs-byok-public-preview-changelog&utm_medium=docs&utm_campaign=universe-2026#try-it-out) on the GitHub Blog |
| Xcode | [Bring your own key (BYOK) support for JetBrains IDEs and Xcode](https://github.blog/changelog/2025-09-11-bring-your-own-key-byok-support-for-jetbrains-ides-and-xcode-in-public-preview/#try-it-out) on the GitHub Blog |
| Copilot CLI | [Add Llm Models](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-llm-models) |
| GitHub Copilot app | [Add Llm Models](https://docs.github.com/en/copilot/how-tos/github-copilot-app/add-llm-models) |
| Copilot SDK | [Byok](https://docs.github.com/en/copilot/how-tos/copilot-sdk/auth/byok) |

For users on a Copilot Business or Copilot Enterprise plan, the ability to configure your own model provider in IDEs can be disabled by an enterprise or organization policy.

## BYOK configured by an enterprise or organization

>[!NOTE]
>This feature is in public preview and subject to change.

Enterprise owners can configure custom models for users in their enterprise by adding provider keys in their enterprise settings. They can also allow organization owners to configure custom models in their organization settings by enabling the **Enable custom models** policy.

Custom models are available in Copilot Chat, Copilot CLI, and IDEs, and apply to users on the enterprise's Copilot Business or Copilot Enterprise plan. Users can select them in the same way they would select a GitHub-hosted model.

Users access these models through GitHub's Copilot API without configuring the provider's credentials themselves. Users must have a Copilot license and internet access to use the custom models.

For more information, see [Enable Custom Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/enable-custom-models).
