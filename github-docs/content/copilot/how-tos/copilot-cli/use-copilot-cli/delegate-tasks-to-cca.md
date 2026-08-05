Copilot CLI offers two ways to have Copilot work autonomously: **autopilot mode** and the **`/delegate` command**. Both let you hand off tasks, but they differ in where the work happens:

* **Autopilot mode** runs locally in your CLI session. You give autopilot full permissions and Copilot then works on a task without stopping to prompt you for input. Your local machine does the work, and you can watch progress in real time. Use autopilot when you want hands-free local execution.

* **`/delegate`** pushes the task to Copilot cloud agent on GitHub. The work runs remotely: Copilot creates a branch, opens a draft pull request, and works in the background. Use `/delegate` when you want to hand off a task entirely and continue running even if you shut down your local machine.

## Get autopilot to complete tasks autonomously on your local machine

There are two ways to use autopilot mode:

* **Interactively:** In an interactive session, press <kbd>Shift</kbd>+<kbd>Tab</kbd> until you see "autopilot" in the status bar. If prompted to choose permissions for autopilot mode, allow full permissions, then enter your prompt.
* **Programmatically:** Pass the CLI a prompt directly in a command, and include the `--autopilot` option. For example, to use autopilot mode with full permissions, restricting it to 10 continuations, enter `copilot --autopilot --yolo --max-autopilot-continues 10 -p "YOUR PROMPT HERE"
`.

For more information, see [Autopilot](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/autopilot).

## Delegate tasks to Copilot cloud agent

You can delegate a task to Copilot cloud agent on GitHub by using the `/delegate`slash command, followed by a prompt:

```shell
/delegate complete the API integration tests and fix any failing edge cases
```

Alternatively, prefix a prompt with `&` to delegate it:

```shell
& complete the API integration tests and fix any failing edge cases
```

Copilot will ask to commit any of your unstaged changes as a checkpoint in a new branch it creates. Copilot cloud agent will open a draft pull request, make changes in the background, and request a review from you.

Copilot will provide a link to the pull request and agent session on GitHub once the session begins.

## Next steps

To learn how to invoke specialized agents tailored to specific tasks, such as code review, documentation, or security audits, see [Invoke Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/invoke-custom-agents).
