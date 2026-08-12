# Build with agents in VS Code

Visual Studio Code comes with AI agents built in. Describe a task in natural language and an agent plans the approach, edits files across your project, runs commands, and self-corrects until the work is done. Agents stay in the flow of how you already work, so you can focus on intent and review instead of typing every line.

Agents are free to start and built into VS Code: sign in with a GitHub account to use the free plan, choose from multiple agents and models, or bring your own model key and even run a local model offline. New to agents? Learn [how agents work](concepts/agents.md).

<video src="images/agents-overview/agents-intro.mp4" title="Video showing an agent session building a complete feature in VS Code." controls muted></video>

<div class="docs-action" data-show-in-doc="false" data-show-in-sidebar="true" title="Get started with agents">
Complete your first coding task with an agent in the Agents window or Chat view.

* [Start quickstart](quickstart.md)

</div>

## What you can do with agents

Agents handle real coding tasks end-to-end. A few common ones:

* **Plan before you code**: use the [Plan agent](run/planning.md) to produce a step-by-step implementation plan you can review and refine before any file changes.
* **Build new features**: describe what functionality you want and let the agent scaffold UI, wire up state, and update tests.
* **Prototype and explore variants**: spin up quick proofs of concept or generate multiple design variants of the same feature in parallel, then keep the one that works best.
* **Refactor at scale**: rename, restructure, or migrate code across the workspace, with the agent tracking what still needs to change.
* **Build and validate web apps**: give an agent a visual and interactive feedback loop with [browser tools](run/browser-tools.md). The agent can run your app, exercise user flows in the integrated browser, inspect the result, fix problems, and verify its changes.
* **Debug and fix failing tests**: point an agent at a stack trace or a red test and have it find the root cause and apply a fix.

Agents are the most autonomous of several AI surfaces in VS Code. For lighter-weight help, you can also use [chat](../chat/chat-overview.md), [inline chat](../chat/inline-chat.md), [inline suggestions](https://code.visualstudio.com/docs/editing/ai-powered-suggestions), and [smart actions](https://code.visualstudio.com/docs/editing/copilot-smart-actions).

## Get started

AI features are built into VS Code. Sign in with your GitHub account to enable them, then complete the [agents quickstart](quickstart.md). If you don't have a subscription, you're signed up for the free plan with monthly limits. To explore a longer scenario, follow the [agents tutorial](agents-tutorial.md).

**NOTE:** Make sure agents are enabled in VS Code settings (`setting(chat.agent.enabled)`). If your organization has disabled agents, contact your GitHub organization admin.

## Choose how you work with agents

In VS Code, the choice comes down to your approach and your scope. The Agents window is **agent-first** and works across **all your workspaces** from a single window, so it's ideal when you assign high-level tasks and orchestrate multiple agents in parallel across projects. The Chat view is **code-first** and is **scoped to the workspace** you have open, so it's ideal when you give the agent coding tasks and stay close to the code it produces.

If you want to work outside VS Code, you can also manage your agents from the terminal with the Copilot CLI, from the GitHub Copilot app, or directly in your browser.

Choose the experience that fits your current task and where you want to work. You can start a session in one and continue it in the other without losing context.



**Agents window**


The [Agents window](run/agents-window.md) (Preview) is a dedicated window focused on chat as the primary interface. It works across all your workspaces from one window, so you can assign high-level tasks, evaluate the outcomes, and run and track multiple agents in parallel. The Agents window is optimized for **agent-first workflows**.

![Screenshot showing how to start a new agent session by selecting New at the top of the sidebar in the Agents window.](images/agents-overview/agents-window-hero.png)



**Chat view**


The [Chat view](run/chat-view.md) is a chat panel in the sidebar, next to your workspace editor tabs. It's scoped to the workspace you have open in VS Code, so you can give the agent coding tasks, review the code it produces, and keep an agent focused on the code you're actively working on. The Chat view is optimized for **code-first workflows**.

![Screenshot showing the Chat view with the sessions list, conversation, and chat input.](images/agents-overview/chat-view-expanded.png)



**Browser**


Stay on top of your agents from any browser, no setup required. On [github.com](https://github.com/copilot), assign issues to Copilot, review agent pull requests, and track progress, then pull a branch into VS Code when you want to take over.

Need your own environment? [vscode.dev/agents](https://vscode.dev/agents) opens a secure tunnel to your development machine, letting you track and manage your running agent sessions in the browser with your local code and tools within reach.

![Screenshot showing the GitHub website with the Copilot tab open, displaying a list of issues assigned to Copilot.](images/agents-overview/hero-vscode-dev-agents-dark.png)



**Copilot CLI**


Use [GitHub Copilot CLI](run/agent-harnesses.md#use-copilot-cli-from-the-terminal) to work with an agent from the command line, either in the VS Code integrated terminal or an external terminal.

![Screenshot showing the Copilot CLI running in the VS Code integrated terminal.](images/agents-overview/hero-copilot-cli-dark.png)



**GitHub Copilot App**


Use the [GitHub Copilot app](https://github.com/features/copilot) to manage AI coding tasks in a dedicated desktop experience outside VS Code.

![Screenshot showing the GitHub Copilot app with the sessions list, conversation, and chat input.](images/agents-overview/hero-copilot-app-dark.png)




## Choose your agent and model

VS Code gives you flexibility instead of locking you into one agent or model. You choose:

* **Your agent harness**: run [Copilot, Claude, or Codex](run/agent-harnesses.md) on your machine, use the Local harness for the full VS Code tool and model ecosystem, or hand work to a cloud harness that runs remotely and opens a pull request.
* **Your model**: use a model hosted and provided by GitHub Copilot, or bring your own key to use a model from the provider or host of your choice, including a local model that runs offline.

Learn more about [agent harnesses](concepts/agent-harnesses.md) and [language models](../agent-customization/language-models.md). You set these choices, along with the permission level, when you start a session and can change them at any time. See how to [start a session](run/sessions/manage-sessions.md).

## Tailor agents to your codebase

Agents work best when they understand your project's conventions and have the right tools. VS Code gives you several ways to tailor agents so they produce code that fits your codebase and team practices from the start:

* **Set coding standards**: define project-wide rules and conventions with [custom instructions](../agent-customization/custom-instructions.md) so agents generate code in your style.

* **Automate repeatable tasks**: package multi-step workflows, scripts, and template files as [agent skills](../agent-customization/agent-skills.md), or capture a single reusable prompt in a [prompt file](../agent-customization/prompt-files.md).

* **Specialize the agent**: create [custom agents](../agent-customization/custom-agents.md) for personas or roles like code reviewer, security expert, or tester.

* **Connect external tools and data**: add [MCP servers](../agent-customization/mcp-servers.md) to reach databases and APIs, and use [hooks](../agent-customization/hooks.md) to run scripts at key points in an agent session.

To decide which option fits your goal, see [Customization concepts](concepts/customization.md). For setup steps and examples, see [Customize agent behavior in VS Code](../agent-customization/overview.md). You can also install [plugins](../agent-customization/agent-plugins.md) to add pre-packaged bundles of these customizations from the Marketplace.

## Trust and control

Agents can read and edit files, run terminal commands, and call external services. VS Code keeps you in control: approve or deny tool calls before they run, set a permission level that matches the autonomy you are comfortable with, and enable agent sandboxing to restrict file system and network access at the OS level. Learn more about [trust and safety](concepts/trust-and-safety.md) and [AI security](run/security.md).

Organizations can centrally manage which AI features, models, and tools are available across their teams. Admins define policies that control agent capabilities, restrict MCP servers or extensions, and enforce compliance requirements, so developers get a consistent, governed experience out of the box. Learn more about [enterprise AI policies](https://code.visualstudio.com/docs/enterprise/ai-settings).

## Next steps

<div class="card-grid">
    <a class="card" href="/docs/agents/agents-handoff-tutorial">
        <i class="codicon codicon-mortar-board" aria-hidden="true"></i>
        <p>Explore agent handoffs</p>
    </a>
    <a class="card" href="/docs/agents/best-practices">
        <i class="codicon codicon-checklist" aria-hidden="true"></i>
        <p>Learn agent best practices</p>
    </a>
    <a class="card" href="/docs/agents/concepts/agents">
        <i class="codicon codicon-lightbulb" aria-hidden="true"></i>
        <p>Explore agent concepts</p>
    </a>
</div>
