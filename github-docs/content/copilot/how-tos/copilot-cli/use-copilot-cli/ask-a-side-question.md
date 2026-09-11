During an interactive Copilot CLI session, you can use the `/ask` slash command to ask a quick side question and see the answer in a separate dialog. Copilot uses the current conversation as context when it is available, but cannot use tools to answer the question.

You can use `/ask` while Copilot is currently working on a task. The question and answer are not added to the conversation history, so you should use a normal prompt instead if you want them to become part of the conversation.

The `/ask` command is not available for remote sessions.

## Asking a quick question

1. In a local interactive session, enter `/ask` followed by your question.

   For example:

   ```copilot copy
   /ask What does the previous response mean by "idempotent"?
   ```

   > [!NOTE]
   > `/btw` is an alias for `/ask`. You can use either command to ask a side question.

   Copilot answers your question in a dialog, separate from the main conversation.

1. To cancel an answer that is still being generated, or to dismiss a completed answer, press <kbd>Esc</kbd>.

The dialog does not have an input field for follow-up questions. To ask another question, dismiss the dialog and enter another `/ask YOUR-QUESTION` command.

## Further reading

* [CLI Command Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference#slash-commands-in-the-interactive-interface)
