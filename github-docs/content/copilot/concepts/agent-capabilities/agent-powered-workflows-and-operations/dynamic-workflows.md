# Dynamic workflows

> [!NOTE] This feature is in public preview and is subject to change.


This article explains what dynamic workflows are and what they can do. For details of how to use them, see [Use Dynamic Workflows](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-dynamic-workflows).

## About dynamic workflows

A dynamic workflow is a program that defines how a task is carried out. It can combine automated steps with the work of one or more agents. Steps can run one after another, in parallel, or as a mixture of both.

Dynamic workflows are particularly useful for complex, multi-step tasks, and tasks that you want to be able to repeat with a deterministic set of actions carried out every time. For example, you might use a dynamic workflow to investigate a service interruption incident, by collecting logs and telemetry, assigning independent agents to analyze different systems, and combining their structured findings into a timeline and root-cause report.

Dynamic workflows can:

* Run commands, use tools, or call other services.
* Divide a goal into tasks and run independent tasks in parallel.
* Pass results from one stage to the next.
* Have subagents verify each other's findings.
* Combine results into a single answer.
* Ask you for input, if the application you're using supports it.
* Pause at a checkpoint so that you can review results and resume the run when you're ready.

Everything is defined in code: the steps, when to involve agents, and how to use their results. Agents handle the parts that need analysis or judgment.

A workflow can ask agents to return results in a specified format so that later steps can use them. Copilot can ask an agent to correct the format if needed.

Dynamic workflows are defined in Copilot extensions. They can be:

* **Authored by Copilot.** Describe the task and the process you want the workflow to follow.
* **Authored by you.** You can write the extension yourself, using Copilot's built-in authoring guidance.
* **Shared with you.** Once the extension is loaded, its dynamic workflows are available for use.

To use a dynamic workflow, you can ask Copilot in natural language to run it by name. For example:

```copilot copy
Run the java-security-review dynamic workflow on the java files in the current directory.
```

When you start a dynamic workflow from a prompt, Copilot runs it in the background, and reports back when it's finished. You can continue working in your session while it runs.

> [!IMPORTANT]
> Your chat agent only creates or runs a dynamic workflow when you explicitly ask it to, or when a skill or slash command instructs it to do so.

In Copilot CLI, you can also run an existing dynamic workflow directly from your terminal with `copilot workflow run WORKFLOW-NAME`. You don't need to open an interactive chat or ask an agent to start it. The workflow can still use agents to carry out its steps.

The command waits for the run to finish or stop before returning control to your shell. Use this approach to repeat a workflow with specific inputs, save its result, or run it from a script or CI/CD pipeline. For more information, see [Use Dynamic Workflows](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-dynamic-workflows#running-a-dynamic-workflow-from-the-command-line).

You can also start a workflow through an extension's slash command, custom tool, or programmatic hook, or from other code that uses the GitHub Copilot SDK. In the Copilot app, an extension can provide a canvas—a custom interface—with controls to start the workflow. These alternatives depend on the extension and the client you're using.

For more information about canvases, see [Working With Canvas Extensions](https://docs.github.com/en/copilot/how-tos/github-copilot-app/working-with-canvas-extensions).

To see what dynamic workflows are available, just ask Copilot:

```copilot copy
What dynamic workflows are available?
```

## Availability of dynamic workflows

Dynamic workflows are available in the Copilot app, Copilot CLI, and Copilot SDK. They are available to users on all Copilot plans except Copilot Pro and Copilot Pro+ subscribers on existing annual plans who remain on legacy premium request-based billing. For more information about this billing model, see [Request Based Billing Legacy](https://docs.github.com/en/copilot/reference/copilot-billing/request-based-billing-legacy).

## How dynamic workflows differ from autopilot and fleet

If you already use autopilot mode and the `/fleet` command, a dynamic workflow might seem to be the same sort of thing. The main difference is how work is planned and controlled, not simply how many agents are used.

* **Autopilot** is a mode that's all about autonomy. It lets Copilot keep working through a task without pausing to get your input after each step.
* **`/fleet`** encourages Copilot to delegate work to subagents and coordinate their work in parallel. Copilot decides how to break down the task each time.
* **A dynamic workflow** carries out a process defined in code. The workflow's author defines the steps, conditions, and handoffs. The process can use one agent or many, with work happening in sequence, in parallel, or both.

Reusing a workflow means reusing its steps and rules. The path through those steps can change with the inputs or findings, and agents can give different answers on different runs.

| Aspect | Autopilot | Fleet | Dynamic workflow |
| --- | --- | --- | --- |
| Main purpose | Let Copilot keep working autonomously | Encourage Copilot to delegate work to subagents | Carry out a process defined in code |
| Who defines the process? | Copilot decides the next steps | Copilot decides how to divide and coordinate the work | The workflow author defines the steps, conditions, and handoffs |
| How work runs | Depends on the task and Copilot's decisions | Independent work can be delegated in parallel | Sequentially, in parallel, or both, using one agent or many |

For details about controlling workflow runs, see [Limiting a dynamic workflow](#limiting-a-dynamic-workflow) and [Watching, stopping, pausing, and resuming runs](#watching-stopping-pausing-and-resuming-runs).

## When to use a dynamic workflow

Use a dynamic workflow when you want to define a process you can reuse, or when a single task needs clear stages, checks, or limits. Good candidates include:

* Running release checks, asking one agent to assess failures, and pausing for you to review the findings before resuming.
* Reviewing many changed files in a pull request in parallel.
* Using code to find unresolved review comments on merged pull requests, then asking two models whether the comments still matter. The workflow's code reports findings only when both agree.
* Sweeping a large codebase for a pattern—for example, missing tests or usages of an API you're removing—across many directories at once.
* Researching a change, planning its implementation from the findings, and then making the change.
* Kicking off a long, potentially expensive run that you may want to pause and resume later.

For a quick answer or a simple change, a normal prompt in the standard chat mode is usually sufficient.

## Permissions for dynamic workflows

A dynamic workflow's subagents use the CLI's permission system and inherit the permission grants of the session that started them. Anything you have already allowed in your session applies to the dynamic workflow's subagents.

If one of a workflow's subagents tries to do something that is not already permitted, its request surfaces as a normal permission prompt in your interactive CLI session. You approve it there, in the same way you would for the main agent. The subagent that needs permission simply waits until you answer.

If one subagent requests a permission and you grant it for the duration of the session, that grant applies to all subagents that need the same permission.

When you use `copilot workflow run`, the command does not display permission approval prompts. Grant the permissions the workflow's agents need before starting the run. See [Use Dynamic Workflows](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-dynamic-workflows#running-a-dynamic-workflow-from-the-command-line).

An extension can also run its own code directly, outside these permission prompts.

## Creating a dynamic workflow

You can create a dynamic workflow by asking Copilot to do so in an interactive session. Tell Copilot what you want the workflow to accomplish.

By default, Copilot creates an extension for your current session. You can instead ask it to create a personal or project extension, or write the extension yourself using Copilot's built-in authoring guidance.

For more information, see [Use Dynamic Workflows](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-dynamic-workflows).

## Revising a dynamic workflow

Typically, the first time you use a dynamic workflow you'll test it by running it with a limited scope. For example, for a dynamic workflow designed to process multiple files, you might initially tell Copilot to run the workflow on just two or three files. You can then assess the outcome. If necessary, you can then ask Copilot to revise the workflow before running it again.

Use a natural language request to get Copilot to revise the workflow's saved definition, rather than overriding a limit for just one run. For example:

```copilot copy
Update the check-python-style dynamic workflow to use no more than 10 subagents in total.
```

The revisions are saved to the dynamic workflow's extension, whether it is stored for a session, in your personal extensions directory, or in a project repository. New runs use the revised version after the updated extension is loaded. This does not replace saved results in a paused run.

If you revise a dynamic workflow that you've shared in a project's repository, people working on that project must pull the updated version of the repository, and then reload their extensions, before they can use the revised version.

## Reusing and sharing dynamic workflows

By default, workflows that Copilot authors for you are scoped to the current session. You can copy the extension into your personal extensions directory to use it across sessions, or into a repository's extensions directory to share it with people working on that project. This shares the definition, not the original session's run history or saved progress. For more information, see [Use Dynamic Workflows](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-dynamic-workflows#reusing-and-sharing-dynamic-workflows).

To share a dynamic workflow more widely, you can package it as a plugin and distribute it through your preferred plugin management system. For more information, see [Plugins Creating](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-creating).

## Limiting a dynamic workflow

You can set the following limits for a dynamic workflow:

* The maximum number of workflow-owned agents that can be active at the same time.
* The maximum number of workflow-owned agents that can be launched, in total, over the course of a run.
* The maximum active running time, including time used before a pause. Time while the run is paused does not count.
* The approximate maximum number of AI credits that the workflow's agents and their subagents can consume.

  > [!NOTE]
  > Copilot tracks the credits used by the workflow's agents and stops new work when the total reaches the limit. Usage is reported after it occurs, so work already underway can take the total past the limit. This is an approximate maximum, not a hard ceiling.

Limits can be defined in three places:

* **In your prompt:** Specify a limit in natural language within the prompt you use to run a dynamic workflow. For example:

  ```copilot
  Use the architecture-research dynamic workflow on this repo, with a timeout of 1 hour.
  ```

* **In the workflow code:** When you create a dynamic workflow you can (optionally) define limits that should be used when the dynamic workflow is run.
* **In your personal settings:** You can define default limits in your personal settings for Copilot. These will apply to any dynamic workflow you run, if the same type of limit is not specified in the prompt or the workflow code.

  In Copilot CLI you can use the following keys with the `/settings` command to configure your personal default limits for dynamic workflows.

  * `workflows.defaultLimits.maxConcurrentSubagents`
  * `workflows.defaultLimits.maxTotalSubagents`
  * `workflows.defaultLimits.timeoutSeconds` (must be specified in seconds)
  * `workflows.defaultLimits.maxAiCredits`

  For example:

  ```copilot
  /settings workflows.defaultLimits.timeoutSeconds 3600
  ```

The limits are prioritized in the order shown above. If you specify a limit in your prompt then it overrides any corresponding limit defined in the dynamic workflow or in your personal settings.

The concurrent-subagent limit makes additional subagents wait until others finish. Reaching it does not stop the workflow.

The other limits can stop a run, but its status and saved results are kept so that you can resume it later. When you resume a run that stopped at a limit, increase that limit to allow more work. The new limit is a total for the run, including usage before it stopped, not a fresh allowance.

### Preventing unexpected AI credit usage

A workflow that launches many subagents can take a long time to complete and consume a large number of AI credits.

To prevent unexpected high consumption of AI credits, you should test a dynamic workflow with a small-scale scope before using it for a large-scale job. After performing a small run, check the actual AI credit usage, then set an appropriate limit on AI credits for the large-scale run.

## Watching, stopping, pausing, and resuming runs

You can use the `/workflows` slash command in a Copilot CLI session, or the **Workflows** button in the Copilot app, to view current or past workflow runs.

The details show AI credits usage and any phases, progress messages, and subagents the workflow reports. You can cancel or pause a currently running workflow from here. An extension can also provide its own progress view, for example in a canvas in the Copilot app.

If you have paused a run—or if it has stopped because a limit was reached—you can select it from the run list to resume it. The workflow can reuse saved results from completed steps and subagents. Work that was not saved may need to run again.

For more information, see [Use Dynamic Workflows](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-dynamic-workflows#monitoring-and-managing-dynamic-workflow-runs).
