# Using GitHub Copilot to explore a codebase

## Introduction

If you've been assigned to work on a project that you're not familiar with—or you've found an interesting open source project that you want to contribute to—you'll need some understanding of the codebase before you can start making changes. This guide will show you how to use GitHub Copilot Chat to explore a codebase and quickly learn about the project.

## Working with Copilot Chat

Throughout this guide, we'll work with Copilot Chat on GitHub.com, which you can find at [github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text).

## Providing repository context

You can ask Copilot Chat about a codebase in either of these ways.

### Attaching a repository in chat

Attaching a repository gives Copilot Chat access to the code in the repository, and is best when you want to compare or switch between repositories during a conversation.

1. On GitHub, navigate to [github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text).
1. In the text box, click **{% octicon "plus" aria-label="Add attachments" %} Add repositories, files, and spaces**, then click **Repositories**.
1. Search for and select the repository you want to explore.

### Asking from the repository page

> [!NOTE]
> This feature is currently in public preview and subject to change.

You can ask Copilot Chat about a repository directly from its page on GitHub, without attaching it first. This is a quick way to get oriented in a project you haven't worked on before.

1. On GitHub, navigate to the repository you want to explore.
1. Open Copilot Chat from the repository page and ask a question. Copilot uses the repository as context and grounds its answers in the repository's actual files and symbols.
1. Ask a follow-up question to go deeper, using the same shared context.

## Example prompts

The following prompts are examples of the kind of questions you can ask Copilot to help you find out about a codebase.

### General questions



* `Based on the code in this repository, give me an overview of the architecture of the codebase. Provide evidence.`

* `Give me an overview of this repository: its purpose, structure, key components, and how to run it.`

* `What are the main entry points and how do the key components fit together?`

* `Which languages are used in this repo? Show the percentages for each language.`

* `What are the core algorithms implemented in this repo?`

* `What design patterns are used in this repository? Give a brief explanation of each pattern that you find, and an example of code from this repository that uses the pattern, with a link to the file.`

### Specific questions

Whether these questions are useful will depend on the codebase you're exploring.

* `How do I build this project?`

* `Where is authentication handled in this codebase?`

* `Analyze the code in this repository and tell me about the entry points for this application.`

* `Describe the data flow in this application.`

* `Analyze the code in this repository and tell me what application-level security mechanisms are employed. Provide references.`

## Understanding the files in a directory

Use Copilot to help you understand the purpose of the files in a directory, or individual files.

To find out about the files in a directory:

1. Navigate to the directory on GitHub.com.
1. In the top right corner of the page, click the Copilot icon (**{% octicon "copilot" aria-label="Copilot icon" %}**) to open Copilot Chat.

    Copilot will use the directory contents as context for your question.
1. Ask Copilot: `Explain the files in this directory`.

To find out about a specific file:

1. Open the file on GitHub.com.
1. In the top right corner of the page, click the Copilot icon (**{% octicon "copilot" aria-label="Copilot icon" %}**) to open Copilot Chat.

    Copilot will use the file contents as context for your question.
1. For a small file, ask Copilot: `Explain this file`.
1. For a large file, ask: `Explain what this file does. Start with an overview of the purpose of the file. Then, in appropriately headed sections, go through each part of the file and explain what it does in detail.`

## Understanding specific lines of code

Use Copilot to help you understand specific lines of code in a file.

To find out about a specific line of code:

1. On GitHub, navigate to a repository and open a file.
1. Select the lines by clicking the line number for the first line you want to select, holding down <kbd>Shift</kbd> and clicking the line number for the last line you want to select.
1. To ask your own question about the selected lines, click the Copilot icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) to the right of your selection.
  This displays the GitHub Copilot Chat panel with the selected lines indicated as the context of your question.
1. To ask a predefined question, click the downward-pointing button beside the Copilot icon, then choose one of the options.

    ![Screenshot of the Copilot buttons, highlighted with a dark orange outline, to the right of some selected code.](/assets/images/help/copilot/copilot-buttons-inline-code.png)

1. If you clicked the Copilot icon, type a question in the prompt box at the bottom of the chat panel and press <kbd>Enter</kbd>.

## Understanding a specific file or symbol

Use Copilot to help you understand the purpose of a specific file or symbol in the codebase. A symbol is a named entity in the code, such as a function, class, or variable.

1. On GitHub, navigate to a repository and open a file.
1. At the top of the file, click the Copilot icon (**{% octicon "copilot" aria-label="Copilot icon" %}**) to open Copilot Chat.

     Copilot will display the file contents in a split screen as context for your question.

1. If you want to ask about a specific symbol, highlight the symbol in the file.
1. In the prompt box, type a question about the file or highlighted symbol, and press <kbd>Enter</kbd>.

   Copilot replies in the chat panel.

   > [!TIP]
   >
   > Copilot's ability to answer natural language questions like these in a repository context is optimized when the semantic code search index for the repository is up to date. For more information, see [Repository Indexing](https://docs.github.com/en/copilot/concepts/context/repository-indexing).


## Finding out about commits

One good way to familiarize yourself with a project is to look at the recent work that's been happening. You can do this by browsing the recent commits.

1. On GitHub, navigate to the main page of the repository.

1. On the main page of the repository, above the file list, click **{% octicon "history" aria-hidden="true" aria-label="history" %} commits**.

   ![Screenshot of the main page for a repository. A clock icon and "178 commits" is highlighted with an orange outline.](/assets/images/help/commits/commits-page.png)

1. Click a commit message to display a diff view for that commit.
1. In the Copilot Chat panel, enter: `What does this commit do?`.
1. If necessary, you can follow up by entering: `Explain in more detail`.

## Using the Insights tab

In addition to using Copilot to help you become familiar with a project, you can also use the **Insights** tab on GitHub.com. This gives you a high-level overview of the repository.

For more information, see [Using Pulse To View A Summary Of Repository Activity](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/using-pulse-to-view-a-summary-of-repository-activity) and [Viewing A Projects Contributors](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/viewing-a-projects-contributors).

## Further reading

* [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github)
