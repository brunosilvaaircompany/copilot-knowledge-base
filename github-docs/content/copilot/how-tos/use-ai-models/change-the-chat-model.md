# Changing the AI model for GitHub Copilot Chat

Choose from a selection of models, each with its own particular strengths. You may have a favorite model that you like to use, or you might prefer to use a particular model for inquiring about a specific subject.

To view the available models per client, see [Supported Models](https://docs.github.com/en/copilot/reference/ai-models/supported-models#supported-ai-models-per-client).

> [!NOTE] Different models consume AI credits at different rates based on their token pricing. For details, see [Models And Pricing](https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing).

Copilot allows you to change the model during a chat and have the alternative model used to generate responses to your prompts.

If you access Copilot Chat through a Copilot Business or Copilot Enterprise subscription, your organization or enterprise must grant members the ability to switch to a different model. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies) or [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies#copilot-access-to-alternative-ai-models).


Changing the model used by Copilot Chat does not affect the model used for Copilot inline suggestions. See [Change The Completion Model](https://docs.github.com/en/copilot/how-tos/use-ai-models/change-the-completion-model).

{% webui %}

### Limitations of AI models for Copilot Chat

Experimental pre-release versions of the models may not interact with all filters correctly, including the setting to block suggestions matching public code (see [Manage Policies](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#enabling-or-disabling-suggestions-matching-public-code)).

## Changing the AI model

These instructions are for Copilot on the GitHub website. For instructions on different clients, click the appropriate tab at the top of this page.

> [!NOTE] If you use Copilot Extensions, they may override the model you select.

If you access Copilot Chat through a Copilot Business or Copilot Enterprise subscription, your organization or enterprise must grant members the ability to switch to a different model. See [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies) or [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies#copilot-access-to-alternative-ai-models).


1. In the top right of any page on GitHub, click the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}** icon.

   ![Screenshot of the 'Copilot' button, highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-icon-top-right.png)

1. At the bottom of Copilot Chat, select the **CURRENT-MODEL** {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %} dropdown menu, then click the AI model of your choice.

1. Optionally, after submitting a prompt, you can regenerate the same prompt using a different model by clicking the retry icon ({% octicon "sync" aria-label="The re-run icon" %}) below the response. The new response will use your selected model and maintain the full context of the conversation.

{% endwebui %}

{% vscode %}

## Changing the AI model

These instructions are for Visual Studio Code. For instructions on different clients, click the appropriate tab at the top of this page.

> [!NOTE]
>
> * If you use Copilot Extensions, they may override the model you select.
> * Experimental pre-release versions of the models may not interact with all filters correctly, including the setting to block suggestions matching public code (see [Manage Policies](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#enabling-or-disabling-suggestions-matching-public-code)).


1. Open Copilot Chat by clicking the {% octicon "copilot" aria-hidden="true" aria-label="copilot" %} icon in the title bar of Visual Studio Code.

1. At the bottom of the chat view, select the **CURRENT-MODEL** {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %} dropdown menu, then click the AI model of your choice.

> [!NOTE] If you select **Auto**, Copilot auto model selection will select the best model based on availability and to help reduce rate limiting. See [Auto Model Selection](https://docs.github.com/en/copilot/concepts/models/auto-model-selection).


## Adding more models

You can expand the model options that are available to power Copilot Chat. You can add models from:

* **A model provider**—such as Anthropic, Gemini, OpenAI, and others.
* **The AI Toolkit for Visual Studio Code**.

> [!NOTE] Using the AI Toolkit for VS Code is in public preview and subject to change.

### Prerequisites

* Depending on the provider or model you choose, you may need to supply an API key, or model ID, from the provider, or a GitHub personal access token (PAT).
* To add models from the AI Toolkit for Visual Studio Code, you must <a href="vscode:extension/ms-windows-ai-studio.windows-ai-studio?ref_product=copilot&ref_type=engagement&ref_style=text">install the AI Toolkit extension</a>.
* If you are a Copilot Business or Copilot Enterprise customer and want to use third-party models in Visual Studio Code, the **Bring Your Own Language Model Key in VS Code** policy must be enabled. For more information, see the [Copilot settings page](https://github.com/settings/copilot/features) in GitHub.com.

### Adding models

1. In the Copilot chat view, click the **CURRENT-MODEL** {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %} dropdown menu.
1. Click **Manage Models**.

   ![Screenshot of the 'Manage Models' option, highlighted with a dark orange outline.](/assets/images/help/copilot/vsc-manage-models-option.png)

   A list of providers is displayed.

   If you have installed the AI Toolkit, then additional providers, added via the AI Toolkit, are also listed.

   ![Screenshot of the 'Manage Language Models' list.](/assets/images/help/copilot/vsc-manage-models-list.png)

1. Click the provider whose model(s) you want to add.
1. Depending on which provider you selected, you may be prompted to enter a GitHub PAT, an API key for the provider, or a model ID for a specific model.

   Enter the required information, then press <kbd>Enter</kbd>.

   A list of available models is displayed.

1. Select the model(s) you want to add, then click **OK**.

The models you selected are now available in the model picker in the chat view.

If you added a model from a provider via the AI Toolkit then the first time you use the model, you will be prompted to download it. You may also be prompted to authenticate with the provider.

> [!TIP] If you're already using chat with auto model selection, you'll need to start a new chat session to switch models. To start a new session, in the top right of the chat view, click {% octicon "plus" aria-label="new chat" %} new chat.

{% endvscode %}

{% visualstudio %}

## Changing the AI model

These instructions are for Visual Studio. For instructions on different clients, click the appropriate tab at the top of this page.

To use multi-model Copilot Chat, you must use Visual Studio 2022 version 17.12 or later. See the [Visual Studio downloads page](https://visualstudio.microsoft.com/downloads/).

> [!NOTE]
>
> * If you use Copilot Extensions, they may override the model you select.
> * Experimental pre-release versions of the models may not interact with all filters correctly, including the setting to block suggestions matching public code (see [Manage Policies](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#enabling-or-disabling-suggestions-matching-public-code)).


1. In the Visual Studio menu bar, click **View**, then click **GitHub Copilot Chat**.
1. In the bottom right of the chat view, select the **CURRENT-MODEL** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click the AI model of your choice.

> [!NOTE] If you select **Auto**, Copilot auto model selection will select the best model based on availability and to help reduce rate limiting. See [Auto Model Selection](https://docs.github.com/en/copilot/concepts/models/auto-model-selection).


{% endvisualstudio %}

{% jetbrains %}

## Changing the AI model

These instructions are for the JetBrains IDEs. For instructions on different clients, click the appropriate tab at the top of this page.

> [!NOTE]
>
> * If you use Copilot Extensions, they may override the model you select.
> * Experimental pre-release versions of the models may not interact with all filters correctly, including the setting to block suggestions matching public code (see [Manage Policies](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#enabling-or-disabling-suggestions-matching-public-code)).


For reasoning models that support configurable thinking effort, you can control how much reasoning the model applies to each request.

1. Click the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}** icon in the status bar.
1. In the popup menu, click **Open GitHub Copilot Chat**.
1. In the bottom right of the chat view, select an AI model of your choice from the **CURRENT-MODEL** {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %} dropdown menu.
1. Optionally, hover over a reasoning model that supports configurable thinking effort.
   1. In the **Thinking Effort** submenu, select an effort level. Nonreasoning models do not display the **Thinking Effort** submenu.

> [!NOTE] If you select **Auto**, Copilot auto model selection will select the best model based on availability and to help reduce rate limiting. See [Auto Model Selection](https://docs.github.com/en/copilot/concepts/models/auto-model-selection).


> [!TIP]
> Model selection is also available when using Copilot through JetBrains AI Assistant. For more information, see [Copilot In Jetbrains](https://docs.github.com/en/copilot/concepts/agents/copilot-in-jetbrains).

{% endjetbrains %}

{% eclipse %}

## Changing the AI model

These instructions are for the Eclipse IDE. For instructions on different clients, click the appropriate tab at the top of this page.

> [!NOTE]
>
> * If you use Copilot Extensions, they may override the model you select.
> * Experimental pre-release versions of the models may not interact with all filters correctly, including the setting to block suggestions matching public code (see [Manage Policies](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#enabling-or-disabling-suggestions-matching-public-code)).


1. Click the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}** icon in the status bar.
1. In the popup menu, click **Open Chat**.
1. In the bottom right of the chat panel, click the currently selected AI model, then select an alternative model from the popup menu.

> [!NOTE] If you select **Auto**, Copilot auto model selection will select the best model based on availability and to help reduce rate limiting. See [Auto Model Selection](https://docs.github.com/en/copilot/concepts/models/auto-model-selection).


{% endeclipse %}

{% xcode %}

## Changing the AI model

These instructions are for Xcode. For instructions on different clients, click the appropriate tab at the top of this page.

To use multi-model Copilot Chat, you must install the GitHub Copilot for Xcode extension. See [Install Copilot Extension](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension).

> [!NOTE]
>
> * If you use Copilot Extensions, they may override the model you select.
> * Experimental pre-release versions of the models may not interact with all filters correctly, including the setting to block suggestions matching public code (see [Manage Policies](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#enabling-or-disabling-suggestions-matching-public-code)).


1. To open the chat view, click **Editor** in the menu bar, then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot** then **Open Chat**. Copilot Chat opens in a new window.
1. In the bottom right of the chat view, select the **CURRENT-MODEL** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click the AI model of your choice.

> [!NOTE] If you select **Auto**, Copilot auto model selection will select the best model based on availability and to help reduce rate limiting. See [Auto Model Selection](https://docs.github.com/en/copilot/concepts/models/auto-model-selection).


{% endxcode %}

## Further reading

* [Change The Completion Model](https://docs.github.com/en/copilot/how-tos/use-ai-models/change-the-completion-model)
* [Model Comparison](https://docs.github.com/en/copilot/reference/ai-models/model-comparison)

{% vscode %}

* [AI language models in VS Code](https://code.visualstudio.com/docs/copilot/language-models#_bring-your-own-language-model-key) in the Visual Studio Code documentation.

{% endvscode %}
