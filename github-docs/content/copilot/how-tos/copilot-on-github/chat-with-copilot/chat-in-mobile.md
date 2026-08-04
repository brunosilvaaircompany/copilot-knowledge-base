# Asking GitHub Copilot questions in GitHub Mobile

## Limitations

The following limitations apply to Copilot Chat in GitHub Mobile:

* If you're a member of an organization or enterprise, your access to Copilot Chat in GitHub Mobile may depend on policies set by your administrator. See [Policies](https://docs.github.com/en/copilot/concepts/policies).
* If you purchased Copilot Pro, Copilot Pro+, or Copilot Max through an in-app purchase on iOS or Android, you cannot enable additional GitHub AI Credits. To do so, cancel your mobile subscription and re-subscribe on GitHub.com through a web browser.

## Asking a general question about software development

1. In GitHub Mobile, tap the **{% octicon "copilot" aria-hidden="true" aria-label="Copilot" %}** icon in the bottom right corner of the screen.

   > [!NOTE]
   > The **{% octicon "copilot" aria-hidden="true" aria-label="Copilot" %}** icon is not shown on every page in GitHub Mobile. If you don't see the icon, navigate to a different page in GitHub Mobile and look for the icon there.

1. At the bottom of the page, in the "Ask Copilot" box, type a question and send the message.

   Some examples of general questions you could ask are:
   * `What are the advantages of the Go programming language?`
   * `What is Agile software development?`
   * `What is the most popular JavaScript framework?`
   * `Give me some examples of regular expressions.`
   * `Write a bash script to output today's date.`

1. Within a conversation thread, you can ask follow-up questions. Copilot will answer within the context of the conversation.

## Asking exploratory questions about a repository

You can ask questions about a specific repository, to get help with understanding the code, or to get help with a specific task you're working on.

1. In GitHub Mobile, navigate to a repository, and tap the **{% octicon "copilot" aria-hidden="true" aria-label="Copilot" %}** icon in the bottom right corner of the screen.
1. At the bottom of the page, use the "Ask Copilot" box, type a question and send the message.

   For example, if you chose the repository you are working in as the context, you could ask:

   * `What is the main purpose of this repo? What problem does it solve or what functionality does it provide?`
   * `What web frameworks are used in this project?`
   * `Where is rate limiting implemented in our API?`
   * `How is the code organized? Explain the project architecture.`
   * `Are there any specific environment requirements for working on this project?`

## Asking questions about specific pieces of code

You can chat with Copilot about a file in your repository, or about specific lines of code within a file.

1. In GitHub Mobile, navigate to a repository and open a file.
1. Do one of the following:
   * To ask a question about the entire file, tap the Copilot icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the bottom right corner of the file view.
   * To ask a question about specific lines within the file, select and copy the lines you want to ask about. Then tap the Copilot icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) and paste the copied lines in the Copilot Chat input field.

1. Type a question in the "Ask Copilot" box at the bottom of the chat panel and send the message.



## Asking questions about pull requests, issues, and discussions

Navigate to any pull request, issue, or discussion in GitHub Mobile and tap the **{% octicon "copilot" aria-hidden="true" aria-label="Copilot" %}** icon to ask Copilot about it.



## Extending Copilot Chat in GitHub Mobile


GitHub Copilot Extensions integrate the power of external tools into Copilot Chat, helping you reduce context switching and receive responses with domain-specific context. You can install Copilot Extensions from the GitHub Marketplace or build private ones within your organization, then type `@` in a chat window to see a list of your available extensions. To use an extension, select the extension from the list or type the full slug name, then type your prompt.
