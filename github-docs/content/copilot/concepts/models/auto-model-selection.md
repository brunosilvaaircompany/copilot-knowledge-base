# About GitHub Copilot auto model selection

## Overview

More than just a model picker, Copilot auto model selection is an intelligent system delivering high quality results, better reliability, and one less decision to make as the model landscape rapidly evolves.

You use Copilot auto model selection by choosing **Auto** in the model picker. If you see **Copilot Fusion** in the picker, rather than **Auto**, it means that Copilot Fusion is available in your Copilot surface. See [Copilot Fusion](https://docs.github.com/en/copilot/concepts/models/copilot-fusion).

## Auto model selection availability

Auto model selection is available in these surfaces:
* Copilot in the cloud
* On Copilot Free, Copilot cloud agent and Copilot Chat on GitHub.com
* GitHub Copilot Chat in GitHub Mobile
* Eclipse
* Xcode
* Visual Studio

## Discount for using auto model selection

If you are on a paid Copilot plan, you qualify for a 10% discount on model costs while using auto model selection in Copilot Chat, or Copilot cloud agent. 


### Auto with task optimization

> [!NOTE] Auto model selection with task optimization is generally available in Copilot Chat on the GitHub website.

Auto model selection with task optimization combines two systems to provide high quality results and better reliability. One system tracks real-time system health and availability, while the other evaluates task complexity. Putting these together, auto model selection routes the task to the optimal model.

Routing occurs along natural cache boundaries and large drifts in conversation complexity to avoid additional cache related costs without quality improvements.

This helps you get more value from Copilot since it matches each task to the model that can solve it most efficiently. That means reserving higher-cost reasoning models for problems that truly need it, while routing straightforward tasks to faster, lower-cost models that still deliver great results.

Benefits of using auto model selection include:
* Matching each task to the model that can solve it most efficiently.
* Model choice based on real-time system health and availability.
* Language invariance: Routing decisions depend on what you are trying to do, not what language you're asking in.
* Improved cost efficiency due to intelligent task routing.

### Tier options for auto model selection

There are three tiers available. Use these tiers to adjust how auto model selection preferentially routes models for each prompt.

| Tier | Priority | Typical use |
| --- | --- | --- |
| **Efficiency** | Cost | Well suited to fast, straightforward tasks. |
| **Balance** | Balances cost, quality and latency | A good fit for everyday work. |
| **Intelligence** | Quality | Built for complex tasks. |

With tiers, auto model selection still considers the prompt for each task. The same models remain available in each tier, but tiered routing changes how preferred models are selected for each task.  Examples for each tier:
* **Efficiency**: All prompts are routed to the most cost-efficient and appropriately capable model for the task.
* **Balance**: For each prompt, the model is selected by considering cost, quality, and latency, to provide cost effective and efficient performance appropriate to the complexity of each prompt.
* **Intelligence**: Prompts are evaluated for which model would provide the highest quality response. A simple prompt could still be routed to a smaller model, while a complex prompt is routed to the most capable model for that task.

Usage is still charged based on the model auto selects, regardless of tier, alongside the 10% discount for users on paid plans. See [Discount for auto model selection](#discount-for-using-auto-model-selection).

## Policies and model availability

When you select **Auto**, auto model selection chooses from supported models, subject to your policies and subscription type. Available models may change over time. See [Supported Models](https://docs.github.com/en/copilot/reference/ai-models/supported-models#supported-ai-models-in-auto-model-selection).

Auto model selection **won't** include these models:
* Models not available in your plan.
* Models excluded by administrator policies. See [Configure Access To Ai Models](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-access-to-ai-models).
* Models excluded by policies restricting Copilot to data-resident or FedRAMP-compliant models.
* Models excluded by policies restricting [Evaluation models](/copilot/reference/ai-models/supported-models#evaluation-models).
* Models that you, or an administrator for your enterprise or organization, have installed on your local network, or local machine, and have added to Copilot for selection in the model picker.

## Disabling evaluation models in auto model selection

Auto model selection may serve evaluation models to users on Copilot plans for individuals. Individuals can disable use of these models at any time. See [Supported Models](https://docs.github.com/en/copilot/reference/ai-models/supported-models#evaluation-models).
