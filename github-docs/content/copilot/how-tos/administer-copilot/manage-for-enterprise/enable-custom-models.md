# Enabling custom models for GitHub Copilot in your enterprise

>[!NOTE]
>This feature is in public preview and subject to change.

You can add custom models to your enterprise or organization by providing your own API keys. This enables teams to use your preferred large language model (LLM) providers with Copilot Chat, Copilot CLI, and IDEs.

API keys from the following providers are supported:

* Anthropic
* AWS Bedrock
* Google AI Studio
* Microsoft Foundry
* OpenAI
* OpenAI-compatible providers
* xAI

Fine-tuned models are also supported, but functionality and quality of results can vary depending on the fine-tuning setup. You should test your model and review its outputs carefully before using it in production.

>[!NOTE] A separate feature allows users to configure their own LLM keys locally in various clients. See [Bring Your Own Key](https://docs.github.com/en/copilot/concepts/models/bring-your-own-key).


## Why bring your own API keys?

As an enterprise owner, you may have specific requirements for governance, data security, and compliance. Setting up your own API keys allows you to address:

* **Governance and compliance:** Choose LLM providers that comply with your organization's policies and regulatory requirements.
* **Cost management:** Align with your existing payment methods, contracts, credits, or negotiated rates, and avoid usage overages.
* **Visibility and control:** Manage which models your team can access, and monitor usage through your provider's existing dashboards and billing.
* **Flexibility:** Support custom or specialized models that your organization already uses.


## Adding your key to an enterprise account

> [!IMPORTANT] We highly recommend adhering to the principle of least privilege by assigning only the minimum necessary scopes to your API keys.

After you've added your key and selected one or more models, you and members of your organizations will be able to use them with Copilot Chat, Copilot CLI, and IDEs. Your models will appear at the bottom of the model picker, under the enterprise name.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} AI controls**.

1. In the sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**.
1. Click **Configure allowed models**.
1. Click the **Custom models** tab.
1. Above the list of API keys, click **Add API key**.
1. Under "Provider", select the LLM provider you want to use.
1. Under "Name", type a name for this key. This will be shown in the model picker.
1. Under "API key", type or paste your key.
1. Depending on which provider you are using, select or add models.
   * If you're using OpenAI, Anthropic, or xAI, click {% octicon "sync" aria-label="Fetch new models" %} in the API key text field to fetch the models associated with your key. Next, under "Available models", select the models you want to use.

     ![Screenshot of the "Add API key" form. The "Fetch new models" button is highlighted with an orange outline.](/assets/images/help/copilot/byok-add.png)

   * If you're using Microsoft Foundry, type your deployment URL in the field under "Deployment URL". Next, in the field under "Available models", type a Model ID and click {% octicon "check" aria-label="Add model" %} to add it.

     If your models have different deployment URLs, they cannot be added to the same API key. Create a separate API key for each deployment URL.

     ![Screenshot of the "Add API key" form. The model text field and "Add model" button is highlighted with an orange outline.](/assets/images/help/copilot/byok-add-foundry.png)

1. After you select or add the models you want to make available, click **Save**.

## Managing availability of custom models in your organizations

You can choose whether the models you have added are available to organizations in your enterprise account.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} AI controls**.

1. In the sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**.
1. Click **Configure custom models**.
1. Above the list of API keys, click the **Added models** tab.
1. Next to a model, click **Configure**. If any organizations already have access to the model, instead of "Configure", you will need to click **All organizations** or **X organizations**.
1. In the modal that opens, click the **Access** tab.
   >[!NOTE] The model must be set to 'Enabled' before the "Access" tab will be available.
1. Choose how the model should be made available to organizations:
   * To make the model available to all organizations in your enterprise account, select **Allow for all organizations**.
   * To only make the model available for specific organizations, select **Choose per organization**, and check or uncheck the organizations listed below.
1. Click **Save**.

## Further reading

* [Enable Custom Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/enable-custom-models) in our documentation for organizations.
* [Chat](https://docs.github.com/en/copilot/concepts/chat)
* [Supported Surfaces For Policies](https://docs.github.com/en/copilot/reference/supported-surfaces-for-policies)
