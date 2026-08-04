# About the GitHub Copilot app

## Introduction

The GitHub Copilot app is a desktop application purpose-built for agent-driven development. It gives you a single place to direct AI agents across parallel workstreams, work with GitHub issues and pull requests, and manage the full development lifecycle—without context-switching between terminals, IDEs, and browser tabs.

The app is built on GitHub Copilot CLI and integrates natively with GitHub, so your repositories, branches, and CI pipelines work out of the box. It's designed for workflows where you want to run multiple agents in parallel and stay focused on directing work rather than doing it all yourself.

## Availability

GitHub Copilot app is available for all Copilot plans.
 For Copilot Business and Copilot Enterprise users, the GitHub Copilot app policy must remain enabled. This policy is enabled by default and is separate from the Copilot CLI policy.

## Supported operating systems

The GitHub Copilot app supports the following operating systems:

* macOS
* Linux
* Windows

## Benefits of using the GitHub Copilot app

* **Work in parallel.** Run multiple agent sessions at the same time, each on its own branch, so you can make progress on several tasks without waiting for one to finish.
* **Stay in one place.** Triage issues, direct agents, review changes, and land pull requests without switching between your terminal, IDE, and browser.
* **Start fast.** The app connects to GitHub natively—your repositories, branches, issues and pull requests work out of the box with no additional setup.
* **Stay in control.** Choose how much autonomy to give agents, from fully collaborative to fully autonomous, and adjust the model and reasoning effort for each session.
* **Collaborate on a shared surface.** Use canvases to create custom interfaces where people and agents can collaborate.

## What can I do with the GitHub Copilot app?

* **Parallel workspaces:** Run multiple isolated agent sessions simultaneously, each with a dedicated git worktree and branch. When you start a new agent session you can choose to run it in a cloud-based sandbox (public preview) hosted by GitHub. For more information, see [Agent Sessions](https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions#starting-a-session).
* **Session modes:** Choose how you work with agents: Interactive (collaborative), Plan (agent plans, you approve), or Autopilot (fully autonomous). You can also select from multiple LLMs and adjust reasoning effort for each session.
* **Model selection:** Select from multiple LLMs, including models from your own provider using bring your own key (BYOK), and adjust reasoning effort for each session.
* **GitHub integration:** Browse and find issues, start sessions from them, create and close pull requests, review pull requests, view CI check results, and search across your repositories—all within the app.
* **Customizations:** Configure and use global instructions, MCP servers, and agent skills.
* **Automations:** Save recurring agent tasks and run them on a schedule or on demand.
* **Quick chats:** Brainstorm in a conversation mode without creating a dedicated branch or workspace.
* **Session history:** Use `/chronicle` to get insights from previous sessions, including work you started in the app.
* **Canvases:** Open custom, agent-driven artifacts and interfaces where people and agents can collaborate.

## GitHub Copilot app workflow

A typical workflow in the GitHub Copilot app looks like this:

1. Browse issues in a repository and pick one up, or start from a blank workspace.
1. Choose a session mode—Interactive, Plan, or Autopilot—and select a model.
1. Describe the task and let the agent create a branch, write code, and run tests.
1. Review the agent's changes, provide feedback, and iterate.
1. Create a pull request, leave a review, check whether CI passed, and merge the PR—all from within the app.

You can run several of these workflows in parallel, each in its own workspace, and switch between them as needed.

## Optimizing AI usage in the GitHub Copilot app

Follow these practices to use AI credits more efficiently in the app:

* **Match model capability to task complexity.** Use lighter models for straightforward changes and higher-capability models for complex debugging, design decisions, and multi-step tasks.
* **Choose the right session mode for the stage of work.** Use **Plan** mode to validate scope and approach, use **Interactive** mode when you want tighter steering, and move to **Autopilot** when the task is well-defined.
* **Use quick chats to scope before opening a full session.** For early exploration, use **Quick chats** to clarify requirements and reduce rework before creating a dedicated session.
* **Start a new session when you switch tasks.** A new session keeps context focused and avoids carrying irrelevant history into unrelated work.
* **Use usage insights regularly.** Run `/chronicle cost tips` to find expensive patterns in your session usage and improve efficiency over time.

For more detailed optimization tips, see [Optimize Ai Usage](https://docs.github.com/en/copilot/tutorials/optimize-ai-usage).

## Providing feedback

To share feedback, click the **Give feedback** icon in the bottom-left corner of the app.

## Public code

GitHub Copilot app may generate code that is a match or near match of publicly available code, even if the "Suggestions matching public code" policy is set to "Block." See [Manage Policies](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#enabling-or-disabling-suggestions-matching-public-code).

## Further reading

* [Getting Started](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started)
