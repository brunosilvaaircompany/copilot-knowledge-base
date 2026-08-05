# Onboarding plan

> [!NOTE]
> * Copilot prompt files are in public preview and subject to change. Prompt files are only available in VS Code, Visual Studio, and JetBrains IDEs.
 See [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization#about-prompt-files).
> * For community-contributed examples of prompt files for specific languages and scenarios, see the [Awesome GitHub Copilot Customizations](https://awesome-copilot.github.com) site.


## Onboarding plan prompt

```text copy
---
agent: 'agent'
description: 'Help new team members onboard with a phased plan and suggestions for first tasks.'
---

# Create My Onboarding Plan

I'm a new team member joining ${input:team:Team or project name} and I need help creating a structured onboarding plan.

My background: ${input:background:Briefly describe your experience level - new to tech, experienced developer new to this stack, etc.}

Please create a personalized phased onboarding plan that includes the following phases.

## Phase 1 - Foundation

Environment setup with step-by-step instructions and troubleshooting tips, plus identifying the most important documentation to read first

## Phase 2 - Exploration

Codebase discovery starting with README files, running existing tests/scripts to understand workflows, and finding beginner-friendly first tasks like documentation improvements. If possible, find me specific open issues or tasks that are suitable for my background.

## Phase 3 - Integration

Learning team processes, making first contributions, and building confidence through early wins

For each phase, break down complex topics into manageable steps, recommend relevant resources, provide concrete next steps, and suggest hands-on practice over just reading theory.
```

## How to use this prompt file

1. Save the above content as `onboarding-plan.prompt.md` in your `.github/prompts` folder.
1. In Visual Studio Code, display the Copilot Chat view and enter `/onboarding-plan`. Optionally, you can also specify your experience level by typing `background=experienced developer but new to stack`, for example.

## Further reading

* [Use prompt files in Visual Studio Code](https://code.visualstudio.com/docs/copilot/customization/prompt-files) in the Visual Studio Code documentation - Information on how to create and use prompt files
* [Response Customization](https://docs.github.com/en/copilot/concepts/prompting/response-customization) - Overview of response customization in GitHub Copilot
* [Awesome GitHub Copilot Customizations](https://github.com/github/awesome-copilot/blob/main/docs/README.prompts.md) - Repository of community-contributed custom prompt files and other customizations for specific languages and scenarios
