# About Copilot auto model selection

## Overview

More than just a model picker, auto model selection is an intelligent system delivering high quality results, better reliability, and one less decision to make as the model landscape rapidly evolves.

### Auto with task optimization

> [!NOTE] Auto model selection with task optimization is generally available in Copilot Chat on the GitHub website, in VS Code, in Copilot CLI, and in GitHub Copilot app.

Auto model selection with task optimization combines two systems to provide high quality results and better reliability. One system tracks real-time system health and availability, while the other evaluates task complexity. Putting these together, auto model selection routes the task to the optimal model.

Routing occurs along natural cache boundaries to avoid additional cache related costs. Switching models mid-session has shown increased cost without ample improvements in quality.
This helps you get more value from Copilot since it matches each task to the model that can solve it most efficiently. That means reserving higher-cost reasoning models for problems that truly need it, while routing straightforward tasks to faster, lower-cost models that still deliver great results.

Benefits of using auto model selection include:
* Matching each task to the model that can solve it most efficiently.
* Model choice based on real-time system health and availability.
* Language invariance: Routing decisions depend on what you are trying to do, not what language you're asking in.
* Improved cost efficiency due to intelligent task routing.

#### Auto tier options

When using auto with task optimization, there are three tiers available. Use these tiers to adjust how auto model selection preferentially routes models for each prompt. 

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

### Auto optimized for model reliability and availability

Experience less rate limiting by letting auto model selection choose the best available model on your behalf.

Auto model selection, optimized for model reliability and availability, intelligently chooses models based on real-time system health and model performance. You benefit from:
* Reduced rate limiting
* Lower latency and errors

### Policies and availability

When you select **Auto**, auto model selection chooses from supported models, subject to your policies and subscription type. Available models may change over time. See [Supported Models](https://docs.github.com/en/copilot/reference/ai-models/supported-models#supported-ai-models-in-auto-model-selection).

Auto model selection **won't** include these models:
* Models not available in your plan.
* Models excluded by administrator policies. See [Configure Access To Ai Models](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-access-to-ai-models).
* Models excluded by policies restricting Copilot to data-resident or FedRAMP-compliant models.
* Models excluded by policies restricting [Evaluation models](/copilot/reference/ai-models/supported-models#evaluation-models).

### Disabling evaluation models in auto model selection

Auto model selection may serve evaluation models to users on Copilot plans for individuals. Individuals can disable use of these models at any time. See [Supported Models](https://docs.github.com/en/copilot/reference/ai-models/supported-models#evaluation-models).

### Discount for using auto model selection

If you are on a paid Copilot plan, you qualify for a 10% discount on model costs while using auto model selection in Copilot Chat, Copilot CLI, GitHub Copilot app, or Copilot cloud agent.


## Auto model selection in Copilot

Auto model selection, with task optimization, is generally available in these Copilot products:
* Copilot Chat, on the GitHub website and supported IDEs
* Copilot CLI
* GitHub Copilot app
* Copilot cloud agent

> [!NOTE] Auto tiers are only available on VS Code, Copilot CLI, and GitHub Copilot app .

> [!TIP]
> You can see which model was used for each Copilot response.
> * In **Copilot Chat**, hover over the response.
> * In **Copilot CLI**, the model used for each response displays in the terminal.
> * In **Copilot cloud agent**, the model used for each response displays at the end of the response.
> * In **GitHub Copilot app**, the model used for each response is shown by the model picker next to **Auto**.

### Copilot Chat in IDEs

Auto model selection, with task optimization, is generally available in the following IDEs:
  * VS Code

Auto model selection, optimized for model reliability and availability, is generally available in the following IDEs:
  * JetBrains IDEs
  * Eclipse
  * Xcode
  * Visual Studio

## Auto model selection in third-party agents

When you select **Auto** in the OpenAI Codex or Anthropic Claude coding agents, Auto model selection chooses from the supported list of models, subject to your policies and subscription type.

### OpenAI Codex supported models

These models are available for Auto model selection in the OpenAI Codex coding agent.

* GPT-5.3-Codex
* GPT-5.4
* GPT-5.4 nano


For more information, see [OpenAI Codex](https://docs.github.com/en/copilot/concepts/agents/openai-codex).

### Anthropic Claude supported models

These models are available for Auto model selection in the Anthropic Claude coding agent.

* Claude Opus 4.7
* Claude Sonnet 4.6


For more information, see [Anthropic Claude](https://docs.github.com/en/copilot/concepts/agents/anthropic-claude).
