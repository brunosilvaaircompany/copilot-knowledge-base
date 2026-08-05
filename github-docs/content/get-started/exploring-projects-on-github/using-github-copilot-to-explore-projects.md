# Using GitHub Copilot to explore projects

In this guide, you’ll learn how to use Copilot Chat in GitHub to understand a repository’s purpose, examine files, and dive into specific lines of code. By following these steps, you’ll gain insights into any project faster—making onboarding, code review, and project exploration easier and more efficient.

## Prerequisites

You'll need access to GitHub Copilot. For more information, see [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).


## Understanding a repository

When you’re new to a project, it can be challenging to understand the purpose of a repository and its files. Copilot can help you quickly understand the purpose of a repository, for example, by providing a summary of the repository’s README file.

1. On the GitHub website, go to the repository you want to chat about.

1. Click the **{% octicon "copilot" aria-hidden="true" aria-label="Copilot" %}** icon at the top right of the page.
1. The heading at the top of the chat panel should read "Chatting about" followed by the name of the current repository.

   If the wrong repository name is displayed, because you were previously chatting about another repository, click **All repositories** then choose the repository you want to chat about.

   ![Screenshot of the Copilot chat panel page with "All repositories" highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-chat-all-repositories.png)

1. In the "Ask Copilot" box, at the bottom of the chat panel, type "Summarize the purpose of this repository based on the README" and press <kbd>Enter</kbd>.  Copilot replies in the chat panel.

You can also use Copilot to understand the roles of different folders and files within the repository. For example, you can ask Copilot to summarize the contents of a specific file, or to explain the purpose of a specific folder.

## Exploring files and code

When you’re exploring a project, you might want to understand the contents of a specific file. Copilot can help you quickly understand the purpose of a file, for example, by providing a summary of the file’s contents. You can also ask Copilot to explain specific lines of code within a file.

1. On GitHub, navigate to a repository and open a file.
1. Do one of the following:
   * To ask a question about the **entire file**, click the Copilot icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) at the top right of the file view.

     ![Screenshot of the Copilot button, highlighted with a dark orange outline, at the top of the file view.](/assets/images/help/copilot/copilot-button-for-file.png)

   * To ask a question about **specific lines** within the file:

     1. Click the line number for the first line you want to ask about, hold down <kbd>Shift</kbd>, then click the line number for the last line you want to select.
     1. To ask your own question about the selected lines, click the Copilot icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) to the right of your selection, then type your question in the GitHub Copilot Chat panel.
     1. To ask a predefined question, click the drop-down menu beside the Copilot icon, then choose one of the options.

     ![Screenshot of the Copilot buttons, highlighted with a dark orange outline, to the right of some selected code.](/assets/images/help/copilot/copilot-buttons-inline-code.png)

1. If you clicked the Copilot icon, type a question in the "Ask Copilot" box at the bottom of the chat panel and press <kbd>Enter</kbd>.

   For example, if you are asking about the entire file, you could enter:
   * `Explain this file.`
   * `How could I improve this code?`
   * `How can I test this script?`

   If you are asking about specific lines, you could enter:
   * `Explain the function at the selected lines.`
   * `How could I improve this class?`
   * `Add error handling to this code.`
   * `Write a unit test for this method.`

   Copilot responds to your request in the panel.

1. Optionally, after submitting a question, you can click {% octicon "square-fill" aria-label="Stop" %} in the text box to stop the response.

1. You can continue the conversation by asking a follow-up question. For example, you could type "tell me more" to get Copilot to expand on its last comment.


## Further reading

* [Explore A Codebase](https://docs.github.com/en/copilot/tutorials/explore-a-codebase)

## Next steps

Now that you know how to use Copilot to explore projects, you can use it to help you understand any repository, file, or line of code on GitHub.
