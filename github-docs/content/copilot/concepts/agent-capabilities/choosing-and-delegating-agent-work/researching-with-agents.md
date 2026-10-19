# Researching with agents

Research agents are designed for complex questions that require extensive investigation, rather than a quick chat response. They can autonomously gather information from multiple sources, analyze and compare evidence, and produce an in-depth answer.

Research experiences vary across Copilot surfaces:

* In GitHub Copilot CLI and the GitHub Copilot app, the `/research` slash command conducts a multi-source investigation and produces a standalone cited report.
* Copilot cloud agent can perform deep research on a repository as part of an ongoing agent session, then continue into planning and implementation.

## Producing a cited research report

In GitHub Copilot CLI and the GitHub Copilot app, `/research` invokes a built-in research agent. The agent investigates your local codebase and repositories across your organization. It can also fetch files from public and accessible private repositories and search the web.

The resulting report can be hundreds of lines long. It can include architecture diagrams, code examples, component analysis, and citations.

Research reports are saved as Markdown files, so they are durable artifacts rather than transient chat responses. You can return to a report, save it elsewhere, or share it with other people.

For instructions for Copilot CLI, see [Research With Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/research-with-copilot-cli). For the commands available in the GitHub Copilot app, see [Slash Commands](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands).

## Researching a repository with Copilot cloud agent

You can ask Copilot cloud agent to investigate a repository before deciding what to change. The agent can explain how the repository works, locate relevant code, or evaluate a problem. Unlike `/research`, this workflow is part of an ongoing agent session and does not produce a standalone research report.

In the same session, you can review the findings, steer the investigation with follow-up prompts, and ask the agent to create a plan. You can then continue into code changes. This makes cloud agent useful when research is the first phase of a larger development task.

This workflow is available through GitHub.com, including the Agents tab, agents panel, dashboard, and Copilot Chat. It is also available in public preview through the Microsoft Teams and Slack integrations. Other integrations, such as Azure Boards, Jira, and Linear, only support asking the agent to create a pull request directly.

For more information, see [Research Plan Iterate](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/research-plan-iterate).

## When to use agent-assisted research

Use a research agent when you need to:

* Understand the architecture or behavior of an unfamiliar codebase.
* Trace how a feature is implemented across multiple files or repositories.
* Investigate internal implementation patterns across your organization.
* Understand how an API, library, or technology works by drawing on code and web sources.
* Compare technologies or implementation approaches using multiple sources.
* Produce a detailed, cited artifact that you can review, save, or share.
* Investigate a problem and confirm assumptions before planning code changes.

For a quick question with a narrow scope, a normal chat prompt is usually faster.

## Getting useful research results

Describe the question, scope, and desired output in your prompt. Include relevant constraints, repositories, technologies, or time periods.

Your prompt can affect how the agent classifies the question and structures the report. Ask explicitly for the type of response you want. For example, instead of asking "What is X?", ask for "A technical deep dive into X, with architecture diagrams and code examples."
