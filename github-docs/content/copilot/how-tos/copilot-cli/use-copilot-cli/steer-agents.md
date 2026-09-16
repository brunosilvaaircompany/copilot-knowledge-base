## Steer the conversation while Copilot is thinking

While Copilot is working on a task, you can enter a new prompt at any time. By default, a plain prompt you send while Copilot is thinking is treated as steering and is considered in the context of the current task.

## Queue a prompt to be processed next

You can also queue a message instead of steering with it, by pressing <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (or <kbd>Ctrl</kbd>+<kbd>Q</kbd>) instead of <kbd>Enter</kbd>. A queued message waits until the current task finishes, then runs as the next turn, instead of being folded into the task that's in progress. For more information about queued prompts, see [Cancel And Roll Back](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/cancel-and-roll-back).

Steering lets you:

* Interrupt an agent that is heading in the wrong direction.
* Provide inline feedback when rejecting a tool permission request.
* Refine or clarify the task scope partway through execution.

## Next steps

To learn how to use Copilot CLI to get an AI-powered review of your code changes, see [Agentic Code Review](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/agentic-code-review).
