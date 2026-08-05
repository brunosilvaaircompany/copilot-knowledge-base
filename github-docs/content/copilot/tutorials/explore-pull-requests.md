# Using GitHub Copilot to explore pull requests

## Introduction

You can ask Copilot different questions about a pull request, from different views within the pull request. For example, you can ask Copilot to summarize a pull request, or explain what has changed within specific files or lines of code in a pull request.

## Get a summary of a pull request

You can ask Copilot to summarize a pull request, or to provide information about the status of a pull request.

1. On GitHub, navigate to a pull request in a repository.
1. In the top right corner of the page, click the Copilot icon (**{% octicon "copilot" aria-label="Copilot icon" %}**) to open Copilot Chat.

    Copilot will use the pull request as context for your question.
1. At the bottom of the Copilot Chat panel, in the prompt box, type a question and press <kbd>Enter</kbd>.

### Example prompts

The following prompts are examples of the kind of questions you can ask Copilot to help you find out about a pull request.

* `Summarize this pull request`
* `What is the current status of this pull request?`
* `What are the main changes in this pull request?`

## Ask Copilot to explain changes in a pull request

You can ask Copilot to examine the changes in a pull request and provide insights. Copilot can return a story of the commits made, a list of unresolved feedback, or assistance with performing a structured review with insights and actionable suggestions, using context from the pull request's file changes, commits, comments, and existing reviews.

1. On GitHub, navigate to a pull request in a repository.
1. Open Copilot Chat, type your question, and press <kbd>Enter</kbd>.

### Example prompts
* `Help me understand the commits made in this pull request.`
* `Is there any unresolved feedback in this pull request?`
* `Help review this pull request.`

## Ask about changes to a specific file in a pull request

You can ask Copilot to explain the changes made to a specific file in a pull request, or to provide information about the status of a file in a pull request.

1. On GitHub, navigate to a pull request in a repository.
1. Click the **Files changed** tab.
1. To the right side of a line in the file you want to ask about, click the {% octicon "triangle-down" aria-hidden="true" aria-label="Show file actions" %} icon, then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, and select **Ask about this diff**.

    This opens Copilot Chat with the file changes indicated as the context of your question.

    Your conversation appears alongside the diff, so you can review the code and chat at the same time.
1. Type a question in the prompt box at the bottom of the chat panel and press <kbd>Enter</kbd>.

### Example prompts

* `What are the changes in this file?`
* `What is the status of this file in the pull request?`

## Ask about specific lines within a file in a pull request

You can ask Copilot to explain specific lines of code in a pull request, or to provide information about the status of those lines.

1. On GitHub, navigate to a pull request in a repository.
1. Click the **Files changed** tab.
1. Click the line number for the first line you want to select, then hold down <kbd>Shift</kbd> and click the line number for the last line you want to select.
1. To the right side of one of the selected lines, click the {% octicon "triangle-down" aria-hidden="true" aria-label="Show file actions" %} icon, then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, and select **Ask about this diff**.

    This opens Copilot Chat with the selected lines indicated as the context of your question.
1. Type a question in the prompt box at the bottom of the chat panel and press <kbd>Enter</kbd>.

### Example prompts

* `Explain the selected lines of code`
* `What do these lines of code do?`

## Ask why a workflow has failed

You can ask Copilot to explain why a workflow has failed in a pull request, and provide suggestions for how to fix the issue.

1. On GitHub, navigate to a pull request in a repository.
1. Scroll to the bottom of the page, then, next to one of the failing checks, click the ellipsis, and then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Explain error.**

    This opens Copilot Chat with the workflow failure indicated as the context of your question and a prompt pre-filled in the chat input box. Copilot responds with information about why the pull request failed. Copilot may also provide suggestions for how to fix the issue.

1. If Copilot has provided steps to fix the issue, you can follow the steps to resolve the problem.

### Example prompts

* `Why has this workflow failed?`
* `What can I do to fix this issue?`

## Ask about a pull request created by Copilot

When you view a pull request created by Copilot cloud agent, you can ask Copilot about the work it did. Copilot retrieves the agent's session logs to explain what changed, what was validated, and why.

### Example prompts

* `What did Copilot change in this pull request and why?`
* `What did Copilot validate before opening this pull request?`
* `Summarize the agent session that created this pull request.`

## Further reading

* [Explore A Codebase](https://docs.github.com/en/copilot/tutorials/explore-a-codebase)
* [Accelerate Pull Requests](https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/drive-downstream-impact/accelerate-pull-requests)
