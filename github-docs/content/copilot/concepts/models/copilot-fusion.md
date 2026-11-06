# About GitHub Copilot Fusion

## Overview

Copilot Fusion is an intelligent runtime model router and orchestrator. It chooses models and execution patterns for your task, then returns a single response. For example, it can choose one model to draft a solution and a separate model for review.

You select Copilot Fusion in the model picker, but you aren't selecting a specific model. You're choosing a system that routes and orchestrates models at runtime. You don't need to switch models during a task or decide which model suits each step. For each request, Copilot Fusion selects the right execution pattern, the right level of reasoning effort, and the models that run it.

Copilot Fusion also considers real-time system health and availability when choosing models. Routing occurs along natural cache boundaries and large changes in conversation complexity to avoid additional cache-related costs without quality improvements.

### How Copilot Fusion works

Copilot Fusion evaluates each task and uses capability signals for reasoning, code generation, debugging, and tool use, to select the most efficient execution pattern that meets the quality bar for your chosen effort level.

Depending on the effort level and task, Copilot Fusion chooses one of three execution patterns:

| Execution pattern | Description |
| --- | --- |
| Single | One model completes the task. |
| Cascade | An efficient model drafts a solution, and a judge inspects the draft and decides whether to accept it or escalate to a stronger model. |
| Critique | One model drafts a response while multiple models independently critique it in parallel. Their feedback is aggregated, and the original model revises its response based on the combined feedback. |

Copilot Fusion chooses an execution pattern when needed, for each prompt, so different prompts in the same session can use different execution patterns. For example, if your first prompt uses the single pattern, a follow-up prompt can use the critique pattern.

Choosing an execution pattern is a lightweight step that adds minimal latency.

Copilot Fusion only adds model calls when a task warrants them. This means a straightforward task doesn't wait or use AI credits for a review it doesn't need.

* The single execution pattern behaves like a request to one model.
* Cascade and critique take longer because they include model calls for review.

Copilot Fusion draws on a mix of models: versatile models for straightforward work, and models with stronger reasoning for harder problems. Reasoning effort and model choice are set per step. The model pool changes as new models become available and as GitHub evaluates which models perform best.

While Copilot Fusion works, you can follow the progress of each step and the model being used. Intermediate drafts might be revised or discarded, so Copilot Fusion only shows you the final response.

Copilot Fusion doesn't have a context window of its own. Each step runs within the context limits of the model running it. The context window shown for Copilot Fusion is a conservative value based on the smallest limits among the models it uses.

When the response is provided, you can hover over the effort level name below the response to see a list of models used.

## Copilot Fusion effort levels

Copilot Fusion has multiple effort levels to let you prioritize the quality, cost, and capability tradeoffs that the system prioritizes for each prompt.

| Effort level | Priority | Typical use |
| --- | --- | --- |
| **Fusion Standard** | Balances cost, quality, and latency. | Everyday work. Copilot Fusion selects one model for each task. |
| **Fusion High** | Balanced orchestration with moderate token savings. | Substantial, well-scoped coding tasks, such as fixing a complex bug or making a change across several files, when additional model calls may be worth the extra time and AI credits. |
| **Fusion Max** | Frontier capability while still considering token efficiency. | Tasks requiring the deepest possible reasoning and most thorough analysis. |
| **Fusion Fast** | Only used in scenarios that require fast models. | Not selectable by users. Only available in Visual Studio Code inline chat. |

> [!NOTE]
> * If Fusion Max is not available in your model picker, one or more of the models required for Fusion Max may be disabled. See [Configure Access To Ai Models](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-access-to-ai-models) and [Manage Availability Of Default Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-availability-of-default-models#configuring-models-available-for-copilot-fusion).
> * If you have installed either the MAI Code 1.1 Flash or {% data variables.copilot.qwen3.8-flash-next %} models locally, these are more likely to be used, where appropriate, on the Fusion Standard effort level. See [Selecting local models in Copilot Fusion](#selecting-local-models-in-copilot-fusion).

## Selecting local models in Copilot Fusion

> [!NOTE]
> This feature is in public preview and is subject to change.


If you use Windows on a computer with the required specifications, you can download and install the MAI Code 1.1 Flash model from within Copilot CLI, the Copilot app, or Visual Studio Code. See [Add Llm Models](https://docs.github.com/en/copilot/how-tos/github-copilot-app/add-llm-models#installing-a-local-model-from-the-model-picker), [Add Llm Models](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-llm-models#installing-a-local-model-from-the-model-picker), and [AI language models in VS Code](https://code.visualstudio.com/docs/agent-customization/language-models#_use-on-device-models).


Once this model is installed locally, Copilot Fusion can choose to use it when appropriate, but only from the Fusion Standard effort level.

Similarly, in Copilot CLI, if you install {% data variables.copilot.qwen3.8-flash-next %} locally, (using a model provider such as Ollama), and Copilot identifies it as "qwen3.8-flash-next-local", then Copilot Fusion, from the Fusion Standard effort level, can also use this local model. This is supported across Windows, macOS, and Linux.

While this is in public preview, you must enable experimental features to use it:

* **In the Copilot app**: Turn on **Local model auto routing** in the "Experimental" section of the app's settings.
* **In Copilot CLI**: Start the CLI with the `--experimental` option, or use `/experimental on` in an interactive session to enable experimental features for the current and future sessions.

As an alternative to Copilot Fusion, you can configure a custom agent to use a specific local model, and then, in your prompt, instruct Copilot to use that custom agent for the task, or for a specific part of the task. See [Create Custom Agents For CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli#delegating-focused-tasks-to-a-specific-model).

## Policies and availability

Copilot Fusion is generally available in:

* Visual Studio Code
* Copilot CLI
* GitHub Copilot app
* JetBrains IDEs

### Copilot Fusion effort level availability by Copilot plan

{% rowheaders %}

| Effort level | Copilot Free | Copilot Student | Copilot Pro | Copilot Pro+ | Copilot Max | Copilot Business | Copilot Enterprise |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Fusion Standard | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Fusion High | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Fusion Max | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| Fusion Fast | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |

{% endrowheaders %}

### Policies

When you use Copilot Fusion, it chooses from the models available, subject to your policies and subscription type. Available models may change over time.

Copilot Fusion, **won't** include these models:
* Models not available in your plan.
* Models excluded by administrator policies. See [Configure Access To Ai Models](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-access-to-ai-models) and [Manage Availability Of Default Models](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-availability-of-default-models#configuring-models-available-for-copilot-fusion).
* Models excluded by policies restricting Copilot to data-resident or FedRAMP-compliant models.
* Models excluded by policies restricting [Evaluation models](/copilot/reference/ai-models/supported-models#evaluation-models).

Copilot Fusion may use specific locally hosted models with the Fusion Standard effort level. See [Copilot Fusion](https://docs.github.com/en/copilot/concepts/models/copilot-fusion#selecting-local-models-in-copilot-fusion).

If none of the models Copilot Fusion uses are available to you, Copilot Fusion doesn't appear in the model picker.

## Billing for Copilot Fusion


> [!NOTE]
> Through November 30, 2026, users on paid Copilot plans receive a 30% discount on model costs when using Copilot Fusion.



When you use Copilot Fusion, you're billed for each model it uses, at that model's standard rate. There's no separate charge for Copilot Fusion. Because Fusion High and Fusion Max can use more than one model for a task, a task may consume more AI credits than it would with Fusion Standard. For per-model rates, see [Models And Pricing](https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing).

Copilot Fusion keeps your main conversation on the same model whenever possible, so the conversation continues to benefit from cached tokens. Models that assist, such as a reviewer, receive only the context they need.

## Copilot Fusion limitations

* Copilot Fusion works separately from subagents and doesn't start them.
* If Copilot Fusion discards a draft, changes that the draft already made in your workspace, such as file edits, aren't undone automatically. Review changes before you commit them.
* The execution patterns and model pool used may change over time.

## Further reading

* [Choose A Model](https://docs.github.com/en/copilot/how-tos/github-copilot-app/choose-a-model)
* [Choose A Model](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/choose-a-model)
