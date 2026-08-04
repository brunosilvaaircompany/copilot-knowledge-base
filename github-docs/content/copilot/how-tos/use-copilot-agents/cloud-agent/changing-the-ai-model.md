# Changing the AI model for GitHub Copilot cloud agent

> [!NOTE]
> For an overview of Copilot cloud agent, see [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent).

## Introduction

In supported entrypoints, you can select the model used by Copilot cloud agent.

You may find that different models perform better, or provide more useful responses, depending on the type of tasks you give Copilot.

> [!NOTE]
> Model selection for Copilot cloud agent is only supported when assigning an issue to Copilot on GitHub.com, when mentioning `@copilot` in a pull request comment on GitHub.com, or when starting a task from the agents tab, agents panel, GitHub Mobile or the Raycast launcher. Where a model picker is not available, Auto will be used automatically. See [Start Copilot Sessions](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/start-copilot-sessions).

## Supported models

The following options are currently available:

* Auto 
* Claude Sonnet 4.5
* Claude Opus 4.7
* Claude Opus 5
* Claude Haiku 4.5
* Gemini 3.1 Pro
* Gemini 3.5 Flash
* Gemini 3.6 Flash
* GPT-5.4 mini
* GPT-5.6 Luna
* GPT-5.6 Sol
* GPT-5.6 Terra
* Grok 4.5
* MAI-Code-1-Flash


> [!NOTE] If you select **Auto**, Copilot auto model selection will select the best model based on availability and to help reduce rate limiting. See [Auto Model Selection](https://docs.github.com/en/copilot/concepts/models/auto-model-selection).


## Reasoning level

Some models support configurable reasoning levels, which control how much time and effort the model spends reasoning before it responds. Higher reasoning levels can improve the quality of responses to complex tasks, but may take longer and use more AI credits.

If you select a model that supports configurable reasoning, a second dropdown menu appears so you can choose the reasoning level you want Copilot cloud agent to use for that task. For more information about which models support configurable reasoning, see [Supported Models](https://docs.github.com/en/copilot/reference/ai-models/supported-models#models-with-extended-capabilities).
