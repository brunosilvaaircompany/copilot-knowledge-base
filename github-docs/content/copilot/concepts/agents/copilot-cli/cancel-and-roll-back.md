# Canceling a GitHub Copilot CLI operation and rolling back changes

## Introduction

When you work in an interactive Copilot CLI session, you can press <kbd>Esc</kbd> or <kbd>Ctrl</kbd>+<kbd>C</kbd> to control what Copilot is doing. Both keypresses can cancel operations, but they work slightly differently:

* <kbd>Ctrl</kbd>+<kbd>C</kbd> acts immediately, without a confirming second press—removing any queued prompts first (one per press), then canceling the current operation.
* A single <kbd>Esc</kbd> keypress gives you more gradual, staged control. While Copilot is actively working, a single <kbd>Esc</kbd> doesn't cancel right away—it shows a reminder, and a second press carries out the next step: removing the most recently queued prompt, or canceling the operation once nothing is queued.

If Copilot has already made changes and you want to undo them, you can roll back your workspace to a previous point in the session. Copilot CLI takes a snapshot of your workspace state each time you enter a prompt, and this allows you to rewind to an earlier state by pressing <kbd>Esc</kbd> twice when Copilot is idle and the input area is empty.

## What pressing Esc does in different situations

Pressing <kbd>Esc</kbd> once performs different actions depending on the current state of the session:

| Current state | What pressing <kbd>Esc</kbd> does |
| ------------- | ------------------------ |
| Copilot is active with no queued prompts. | Shows an "Esc again to cancel" reminder. The running operation is canceled only if you press <kbd>Esc</kbd> again within half a second. |
| Copilot is active and there are queued prompts. | Shows the "Esc again to cancel" reminder. Pressing <kbd>Esc</kbd> again removes the most recently queued prompt. |
| A permission dialog is open. | A single <kbd>Esc</kbd> denies the pending request (no second press needed). |
| A dialog, overlay, or picker is open. | Closes the dialog, overlay, or picker. |
| Copilot is idle. | Shows a brief reminder that pressing <kbd>Esc</kbd> again quickly will open the rewind picker. See [Rolling back changes](#rolling-back-changes). |

## When to use Esc instead of Ctrl+C

The main difference between these two ways of canceling an operation is that <kbd>Esc</kbd> is designed for gradual, targeted intervention, while <kbd>Ctrl</kbd>+<kbd>C</kbd> is a hard stop.

Use <kbd>Esc</kbd> when you want to interact with Copilot without necessarily ending the current operation. For example, if a permission dialog appears and you want to deny that specific request, pressing <kbd>Esc</kbd> dismisses the dialog and Copilot continues working—it just won't use the tool you denied. Similarly, if you've queued follow-up prompts and want to cancel them without interrupting the work already in progress, pressing <kbd>Esc</kbd> removes the most recently queued prompt (repeat to remove earlier ones), while the current operation keeps running.

Use <kbd>Ctrl</kbd>+<kbd>C</kbd> when you want to cancel without the confirming second press that <kbd>Esc</kbd> requires. If no prompts are queued, a single <kbd>Ctrl</kbd>+<kbd>C</kbd> immediately cancels the active operation. If you have queued prompts, each <kbd>Ctrl</kbd>+<kbd>C</kbd> removes the most recently queued prompt—one per press—and cancels the active operation only once the queue is empty. Any file write that is already in progress will complete—files are not left corrupted mid-write—but any remaining planned changes are abandoned. Pressing <kbd>Ctrl</kbd>+<kbd>C</kbd> a second time within two seconds, when the input area is empty, exits the session entirely.

As a rule of thumb, use <kbd>Esc</kbd> when you want to intervene selectively, and <kbd>Ctrl</kbd>+<kbd>C</kbd> when you want to stop and start over.

## Rolling back changes

While Copilot is inactive and there is no text in the input area, you can press <kbd>Esc</kbd> twice to display a list of points in your current session that you can roll back to. Each point corresponds to a snapshot of your workspace that was taken immediately before Copilot started working on the prompt shown in the list.

For full details of how to use the double <kbd>Esc</kbd> keypress to roll back changes made during a session, see [Roll Back Changes](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/roll-back-changes).

> [!WARNING]
> Rewinding restores your entire workspace to the state it was in at the selected snapshot. This reverts all changes made after that point—not only changes made by Copilot, but also any manual edits, and changes resulting from shell commands. Any new files created in the workspace after the snapshot was taken are deleted, irrespective of their Git status.


### What happens when you roll back

When you select a snapshot from the rewind picker, the following actions occur:

1. **Git state is restored.** The repository is checked out to the Git commit and branch recorded in the snapshot.
1. **Untracked files are cleaned.** Files that did not exist at the time of the snapshot are removed.
1. **Modified files are restored.** Files that were changed after the snapshot are reverted to their backed-up state, including permissions and staging state.
1. **Session history is truncated.** The conversation is rewound to the point where the selected snapshot was taken. All messages and tool calls that occurred after that point are removed from the session.
1. **Snapshots are removed.** The selected snapshot and all snapshots after it are permanently deleted. Only snapshots from earlier conversation steps remain available for future rewinds.
1. **Rollback confirmed.** After the rollback, Copilot displays a message indicating how many files were restored.
1. **Your prompt is restored.** The prompt associated with the selected snapshot is placed in the input area.

### Changes that can't be rolled back

Rewind is unavailable in the following situations:

* **Files over 10 MB.** Individual files larger than 10 MB are skipped during snapshot creation. Changes to these files are not restored during a rollback.
* **More than 500 changed files.** If more than 500 files were changed during a single step of a CLI conversation, a snapshot is not created for that step. You will not be able to roll back changes made in that step. Earlier snapshots are unaffected.

## Further reading

* [CLI Command Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)
