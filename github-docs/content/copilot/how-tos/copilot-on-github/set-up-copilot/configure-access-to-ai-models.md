# Configuring access to AI models in GitHub Copilot

Your access to GitHub Copilot models depends on:

* Your Copilot plan.
* The client you use (for example, GitHub.com, Visual Studio Code, or JetBrains IDEs).
* Whether your organization or enterprise restricts access to specific models.

For a list of available AI models, see [Supported Models](https://docs.github.com/en/copilot/reference/ai-models/supported-models). For information on how Copilot Chat serves different AI models, see [Model Hosting](https://docs.github.com/en/copilot/reference/ai-models/model-hosting).

## Setup for individual plans

For individual Copilot plans, you can use AI models directly within Copilot without configuring access or managing policies. Copilot Free and Copilot Student only have access to auto model selection.

> [!NOTE]
> Models available depend on your plan. See [Supported Models](https://docs.github.com/en/copilot/reference/ai-models/supported-models#supported-ai-models-per-copilot-plan).

## Setup for organization and enterprise plans

As an enterprise or organization owner, you can enable or disable access to AI models for members with a Copilot Enterprise or Copilot Business seat. See [Manage Availability Of Default Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-availability-of-default-models) or [Manage Default Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-default-models).

## Custom models

Bring your own key (BYOK) allows you to use Copilot with models of your choice, such as models that are running on your local machine or hosted by an external provider.

There are two separate mechanisms for providing your own LLM keys to Copilot. One allows users to configure their own models locally, and the other allows enterprise and organization owners to provide custom models for all users.


For more information, see [Bring Your Own Key](https://docs.github.com/en/copilot/concepts/models/bring-your-own-key).
