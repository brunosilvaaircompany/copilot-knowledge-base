# Choosing a model in GitHub Copilot CLI

## Introduction

Copilot supports a range of AI models. Different models have different strengths. For example, some prioritize low latency, while others are optimized for complex reasoning or large context windows. You can choose the model you think best fits your needs for a particular task.

For details of models and their capabilities, see [Supported Models](https://docs.github.com/en/copilot/reference/ai-models/supported-models) and [Model Comparison](https://docs.github.com/en/copilot/reference/ai-models/model-comparison). The models available to you depend on your Copilot plan and your enterprise or organization settings.


## Identifying the currently selected model

Information about currently selected model is displayed as the last items in the status line, below the prompt box in an interactive session.

## Choosing a model

You can choose which model you want to use for the current session. This choice takes effect immediately if Copilot is currently idle, or when the current turn completes. The model will continue to be used for the remainder of the session, unless you change it again. Your choice persists if you later resume the session, but other current or future sessions are not affected.

If you have installed local models, these are only available if you are currently in a local session. See [Add Llm Models](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-llm-models).

1. In an interactive session, enter `/model`.

   A list of models is displayed. You can press <kbd>Shift</kbd>+<kbd>Tab</kbd> to arrange the list into different model groupings: recommended, by vendor, by provider, or by category.

1. Use the up/down arrow keys on your keyboard to navigate through the list of available models.
1. Optionally:

   * On models with context tier options, use the tab key to change the context capacity.
   * On models with a choice of reasoning levels, use the left/right arrow keys to change the reasoning level.

1. Press <kbd>Enter</kbd> to use the highlighted model.

### Choosing the "Copilot Fusion" option

When you choose **Copilot Fusion** and an effort level, Copilot chooses models, and execution patterns when needed, for your task, then returns a single response. Copilot Fusion has multiple effort levels to let you prioritize the quality, cost, and capability tradeoffs that the system prioritizes for each prompt.

For more information, see [Copilot Fusion](https://docs.github.com/en/copilot/concepts/models/copilot-fusion).

If you have installed the MAI Code 1.1 Flash model on your local machine, then Copilot Fusion, can choose this model—in VS Code, Copilot CLI, and the GitHub Copilot app—when you set the effort level to Fusion Standard. This allows tasks to be completed without using GitHub AI Credits. See [Add Llm Models](https://docs.github.com/en/copilot/how-tos/github-copilot-app/add-llm-models#installing-a-local-model-from-the-model-picker), [Add Llm Models](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-llm-models#installing-a-local-model-from-the-model-picker), and [AI language models in VS Code](https://code.visualstudio.com/docs/agent-customization/language-models#_use-on-device-models).


Copilot Fusion, on the Fusion Standard effort level, can also use {% data variables.copilot.qwen3.8-flash-next %} on your local machine.

### Choosing a model from the command line

You can select a model from the command line by using the `--model` option. For example:

```bash
copilot --model MODEL-NAME -p "YOUR PROMPT"
```

You can use Copilot Fusion to automatically select an appropriate model. Use `fusion` as the model name, and `--fusion-tier` with `standard`, `high`, or `max` to specify the effort level. For example:

```bash
copilot --model fusion --fusion-tier standard -p "YOUR PROMPT"
```

### Choosing a specific model for a subagent

You can configure a subagent to use a specific model.

This allows you, for example, to use a locally hosted model for part of the work on a task. To do this, configure a custom agent to use that model and then ask the main Copilot agent to delegate a focused task to to that subagent. This does not change the main session's model. See [Create Custom Agents For CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli#delegating-focused-tasks-to-a-specific-model).

### Setting your default model

You can set a default model for Copilot CLI.

1. In an interactive session, enter `/config model`.
1. Use the up/down arrow keys on your keyboard to navigate through the list of available models.
1. Use the tab key and left/right arrow keys to change the context capacity and reasoning level, where these are available.
1. Press <kbd>Enter</kbd> to use the highlighted model.

Your choice is applied to the current session and future sessions.

> [!NOTE]
> Project settings, enforced administrator policies, and explicit invocation options can take precedence over your default model choice.
