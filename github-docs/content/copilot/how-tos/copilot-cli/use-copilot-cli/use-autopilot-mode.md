# Using Autopilot mode in GitHub Copilot CLI

For an overview of when to use Autopilot mode and what to consider before handing over a task, see [Autopilot](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/autopilot).

## Starting or switching to Autopilot mode

You can start Autopilot mode from an interactive Copilot CLI session.

1. In your terminal, start the CLI:

   ```shell copy
   copilot
   ```

1. Press <kbd>Shift</kbd>+<kbd>Tab</kbd> until the status line shows Autopilot mode.
1. If the CLI asks how to handle permissions, choose whether to enable all permissions, use manual approval for the session, or cancel.
1. Enter a specific prompt that includes the outcome and checks you expect. For example:

   ```copilot
   Add pagination to the users API. Preserve the existing response
   fields, add tests for the first and final pages, and run the API
   test suite.
   ```

You can also start or refocus Autopilot mode with the `/autopilot` slash command:

```copilot
/autopilot Fix the failing API tests and verify the full test suite
```

To leave Autopilot mode, press <kbd>Shift</kbd>+<kbd>Tab</kbd> to cycle to another mode.

## Moving from a plan to Autopilot mode

For complex work, create and review a plan before allowing autonomous implementation.

1. In an interactive session, press <kbd>Shift</kbd>+<kbd>Tab</kbd> until the status line shows Plan mode.
1. Enter a prompt that describes the change, constraints, and required validation.
1. Review the plan and ask Copilot to revise it until it matches your requirements.
1. Select **Accept plan and continue in Autopilot execution mode**.
1. If prompted, choose the permissions appropriate for the task.
1. Monitor the implementation, then review the resulting changes and test output.

To start a plan-then-Autopilot session from the command line, enter:

```shell copy
copilot --plan --mode autopilot
```

This command moves from planning to Autopilot mode automatically when the plan is ready. It does not wait for interactive plan approval. For the exact behavior and compatible options, see [CLI Command Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference#plan-then-autopilot).

## Configuring permissions

When entering autopilot mode, if you have not already granted Copilot all permissions, a message is displayed prompting you to choose between three options:

```text
1. Enable all permissions (recommended)
2. Use Manual Approval for this session
3. Cancel (Esc)
```

You will get the best results from Autopilot mode if you enable all permissions. If you choose manual approval, Copilot will automatically deny any tool requests that require approval, which may prevent it from completing certain tasks. You can change your mind later and grant full permissions, during an Autopilot session, by using the `/allow-all` command (or its alias `/yolo`).

Before granting Copilot wide-ranging permissions, consider using local sandboxing, or running the session in a cloud sandbox, to limit what Copilot can access.

If you enable local sandboxing while using Autopilot mode, Copilot completes anything it can achieve inside the sandbox without interruption. However, any step that needs to escape the sandbox—for example, writing to a file outside the current working directory—is denied. For more information about local sandboxing, see [About Cloud And Local Sandboxes](https://docs.github.com/en/copilot/concepts/about-cloud-and-local-sandboxes).

## Comparing Autopilot mode, `--allow-all`, and `--no-ask-user`

These controls affect separate aspects of how Copilot CLI works:

* **Autopilot mode** controls continuation. The agent can work through successive steps that require additional interactions with the AI model without waiting for another prompt.
* **`--allow-all`**, and its alias `--yolo`, control approvals. They allow the agent to use all tools, paths, and URLs without asking for permission, but do not enable autonomous continuation. In Interactive mode, the agent still stops when it needs further direction.
* **`--no-ask-user`** suppresses clarifying questions. The agent makes decisions instead of asking for input, but does not continue through successive model interactions unless Autopilot mode is also enabled.

During an interactive session, you can enable all permissions with `/allow-all` or `/yolo`.

> [!NOTE]
> The `/allow-all` and `/yolo` commands enable all permissions for the current session. Entering either command again does not disable the permissions.

For more details about the available command options for permissions, see [CLI Command Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference#command-line-options).

## Limiting autonomous work

Use limits to prevent a task from continuing longer or consuming more AI credits than you expect.

* Use `--max-autopilot-continues=COUNT` to cap automatic continuation messages.
* Use `--max-ai-credits=CREDITS` to set a soft AI credit limit for programmatic use.
* In an interactive session, use `/limits` to inspect or change the AI credit limit.

For current defaults and accepted values, see [CLI Command Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference#command-line-options). For procedures for AI credit limits, see [Set Session Limit](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/set-session-limit).

## Stopping and reviewing work

1. To interrupt a running turn, press <kbd>Esc</kbd> twice.
1. To prevent the next prompt from running in Autopilot mode, press <kbd>Shift</kbd>+<kbd>Tab</kbd> to select another mode.
1. Review the files the agent changed. In the CLI, you can open the diff view with:

   ```copilot
   /diff
   ```

1. Run the relevant tests, linters, and security checks before committing or pushing the changes.

For all interruption and review controls, see [CLI Command Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference#global-shortcuts-in-the-interactive-interface).

## Choosing the mode for the next task

By default, Autopilot mode is sticky: once Copilot determines that a task is complete, Copilot CLI remains in Autopilot mode, so the next prompt you enter is also handled in autopilot mode. You can switch back to the standard interactive mode at any time by pressing <kbd>Shift</kbd>+<kbd>Tab</kbd>.

If you'd rather have Copilot CLI automatically switch back to interactive mode after each task completes, you can disable this behavior by setting `stayInAutopilot` to `false`. You can do this in either of the following ways:

* During an interactive session, enter `/settings stayInAutopilot false`.
* Add `"stayInAutopilot": false` to your user configuration file (`~/.copilot/settings.json`). For more information, see [CLI Config Dir Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-config-dir-reference#user-settings-copilotsettingsjson).

When this setting is disabled, Copilot automatically switches back to the standard Interactive mode once a task completes. To run another task in Autopilot mode, press <kbd>Shift</kbd>+<kbd>Tab</kbd> and cycle through the available modes until you re-enter Autopilot mode, then enter your next prompt.

> [!NOTE]
> This setting only controls which mode you are in _after_ a task completes. It does not cause Copilot to keep working after it has decided the task is done. Autopilot still stops when the task is complete, when a problem occurs, when you press <kbd>Ctrl</kbd>+<kbd>C</kbd>, or when the continuation limit is reached.

## Running Autopilot mode programmatically

Use programmatic Autopilot mode for a script or other non-interactive workflow where the CLI must continue after the initial prompt.

1. Decide which permissions the task requires.
1. Set a continuation limit or an AI credit limit appropriate for the task.
1. Run the prompt with `-p` and `--autopilot`. For example:

   ```shell copy
   copilot --autopilot --yolo --max-autopilot-continues 10 -p "YOUR PROMPT HERE"

   ```

   Replace `YOUR PROMPT HERE` with a specific task. This example grants all permissions and sets the maximum number of automatic continuations to `10`.

For the complete list of programmatic options, see [CLI Programmatic Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-programmatic-reference) and [CLI Command Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference#command-line-options).
