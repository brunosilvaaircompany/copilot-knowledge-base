# Bring your own key for GitHub Copilot

Bring your own key (BYOK) allows you to use Copilot with models of your choice, such as models that are running on your local machine or hosted by an external provider.

There are two separate mechanisms for providing your own LLM keys to Copilot. One allows users to configure their own models locally, and the other allows enterprise and organization owners to provide custom models for all users.


## Local BYOK

Various Copilot clients allow users to configure custom LLM keys locally.

These keys are only handled client-side: they are stored locally and the associated models aren't available to other users. This mechanism removes dependency on GitHub's Copilot API, making it suitable for air-gapped environments or users without Copilot subscriptions.

Local BYOK is available in the following clients.

| Client | More information |
| --- | --- |
| VS Code | [Add a model from a built in provider](https://code.visualstudio.com/docs/agent-customization/language-models#_add-a-model-from-a-built-in-provider) in the VS Code documentation |
| JetBrains | [Bring your own key (BYOK) support for JetBrains IDEs and Xcode](https://github.blog/changelog/2025-09-11-bring-your-own-key-byok-support-for-jetbrains-ides-and-xcode-in-public-preview/#try-it-out) on the GitHub Blog |
| Xcode | [Bring your own key (BYOK) support for JetBrains IDEs and Xcode](https://github.blog/changelog/2025-09-11-bring-your-own-key-byok-support-for-jetbrains-ides-and-xcode-in-public-preview/#try-it-out) on the GitHub Blog |
| Copilot CLI | [Use Byok Models](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/use-byok-models) |
| GitHub Copilot app | [Use Byok Models](https://docs.github.com/en/copilot/how-tos/github-copilot-app/use-byok-models) |
| Copilot SDK | [Byok](https://docs.github.com/en/copilot/how-tos/copilot-sdk/auth/byok) |

For users on a Copilot Business or Copilot Enterprise plan, the ability to use local BYOK in IDEs can be disabled by an enterprise or organization policy.

## Enterprise BYOK

>[!NOTE]
>This feature is in public preview and subject to change.

Enterprise owners can add keys for custom models in their enterprise settings. They can also allow organization owners to do the same in their organization settings, by enabling the **Enable custom models** policy.

Custom models are available in Copilot Chat, Copilot CLI, and IDEs, and apply to users on the enterprise's Copilot Business or Copilot Enterprise plan. Users can select them in the same way they would select a GitHub-hosted model.

Enterprise BYOK is handled server-side and affects the models served to users by the Copilot API. Users must have a Copilot license and internet access to use the custom models.

For more information, see [Enable Custom Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/enable-custom-models).
