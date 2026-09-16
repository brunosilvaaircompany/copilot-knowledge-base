# Quickstart for using GitHub Copilot on GitHub.com

GitHub Copilot is built into GitHub, so you can use it without installing anything.

This quickstart shows how to ask questions about code and assign a coding task to Copilot cloud agent. It takes about ten minutes.

## Step 1: Ask Copilot about a file

1. Try these prompts to explore specific files in the `github/docs` repository.

   ```copilot prompt
   In `github/docs`, look at `/package.json` and explain what this file does.
   ```

   ```copilot prompt
   In `github/docs`, look at `/src/color-schemes/tests/color-mode-script.ts` and share how I could improve this code.
   ```

Next, open a file in a repository of your choice and ask Copilot questions about it.

1. Navigate to any repository you want to explore. It doesn't need to be your own.
1. Open any file in the repository.
1. Click the Copilot icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) at the top right of the file view.
1. In the prompt box, type a question and press <kbd>Enter</kbd>. For example:
   * {% prompt %}Explain what this file does.{% endprompt %}
   * {% prompt %}How could I improve this code?{% endprompt %}
   * {% prompt %}What tests would cover this function?{% endprompt %}
   * {% prompt %}What was the last change and why was it made?{% endprompt %}

   Copilot responds in the chat panel.
1. Ask follow-up questions to explore the code further. For example:
   * {% prompt %}Tell me more{% endprompt %} to get Copilot to expand on its last comment
   * Ask exploratory questions about a repository
   * Explain the changes in a pull request
   * Ask a question about a specific issue or commit

For more information, see [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github).

## Step 2: Assign an issue to Copilot

> [!NOTE]
> To use Copilot cloud agent in this quickstart, upgrade to a paid plan such as [Copilot Pro](https://github.com/github-copilot/signup?ref_product=copilot&ref_type=purchase&ref_style=text&ref_plan=pro).
>
> Without access to a paid plan, you can instead learn about the remaining steps by using Copilot in your preferred editor. See [Quickstart For Using GitHub Copilot In Your Ide](https://docs.github.com/en/copilot/get-started/quickstart-for-using-github-copilot-in-your-ide).

Copilot cloud agent can work on coding tasks autonomously. Assigning an issue is the easiest way to start, and Copilot creates a pull request when it finishes.

1. In a personal repository you have write access to, enable Copilot cloud agent from your [Copilot settings](https://github.com/settings/copilot?ref_product=copilot&ref_type=engagement&ref_style=text).

   * To enable Copilot cloud agent for repositories in an organization or enterprise instead, see [Enable Copilot](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot) for further instructions.

1. Find an existing issue you'd like Copilot to work on, or create a new issue.
1. Open the issue. In the right sidebar of the issue, click **Assignees**.
1. Click **Copilot** from the assignees list.
1. Optionally, add context in the **Optional prompt** field—for example, coding patterns, files to modify, or testing requirements.

Copilot uses the issue title, description, and existing comments. Add follow-up information directly to the pull request after it opens.

## Step 3: Review the resulting pull request

When Copilot finishes the task, it opens a pull request and requests your review.

1. Open the pull request that Copilot created.
1. Review the diff and verify the changes match what you intended.
1. To request changes, mention `@copilot` in a comment on the pull request, or push commits directly to the branch.
1. When you're satisfied with the changes, merge the pull request.

For more information, see [Review Copilot Output](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/review-copilot-output).

## Next steps

* **Experiment with using Copilot cloud agent** for research and multitasking. See [Overview](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/overview)
