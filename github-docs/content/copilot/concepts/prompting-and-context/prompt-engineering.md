# Prompt engineering for GitHub Copilot

A prompt is a request that you make to GitHub Copilot. For example, you might ask a question, describe a task, or write a code snippet for Copilot to complete. In addition to your prompt, Copilot uses context such as the code in your current file and your conversation history to generate a response.

You interact with Copilot across many surfaces, including the GitHub Copilot app, GitHub Copilot CLI, in your IDE (Visual Studio Code, Visual Studio, JetBrains IDEs, Eclipse, and Xcode), and on the GitHub website.

From the GitHub Copilot app or the GitHub website, you can also start a Copilot cloud agent—an agent that works on a task for you—instead of working with Copilot interactively.

The tips in this article apply across Copilot surfaces to help you write prompts that generate better responses.

## Start general, then get specific

When writing a prompt for Copilot, first give Copilot a broad description of the goal or scenario. Then list any specific requirements. Put your most important requirements first. Copilot gives extra weight to instructions at the beginning and end of a prompt.

For example:

```copilot copy prompt
Write a JavaScript function that tells me if a number is prime

The function should take an integer and return true if the integer is prime

The function should error if the input is not a positive integer
```

## Give examples

Use examples to help Copilot understand what you want. You can provide example input data, example outputs, and example implementations.

For example:

```copilot copy prompt
Write a Go function that finds all dates in a string and returns them in an array. Dates can be formatted like:

* 05/02/24
* 05/02/2024
* 5/2/24
* 5/2/2024
* 05-02-24
* 05-02-2024
* 5-2-24
* 5-2-2024

Example:

findDates("I have a dentist appointment on 11/14/2023 and book club on 12-1-23")

Returns: ["11/14/2023", "12-1-23"]
```

Unit tests can also serve as examples. Before writing your function, use Copilot to write unit tests for the function. Then ask Copilot to write a function described by those unit tests.

## Break complex tasks into simpler tasks

If you want Copilot to complete a complex or large task, break the task into multiple simple, small tasks.

For example, instead of asking Copilot to generate a word search puzzle, break the process down into smaller tasks, and ask Copilot to accomplish them one by one:

* Write a function to generate a 10 by 10 grid of letters.
* Write a function to find all words in a grid of letters, given a list of valid words.
* Write a function that uses the previous functions to generate a 10 by 10 grid of letters that contains at least 10 words.
* Update the previous function to print the grid of letters and 10 random words from the grid.

## Avoid ambiguity

Avoid ambiguous terms. For example, don’t ask "what does this do" if "this" could be the current file, the last Copilot response, or a specific code block. Instead, be specific:

* What does the `createUser` function do?
* What does the code in your last response do?

Ambiguity can also apply to libraries:

* If you are using an uncommon library, describe what the library does.
* If you want to use a specific library, set the import statements at the top of the file or specify what library you want to use.

State rules and requirements directly rather than as meta-instructions. For example, write "Return the result as JSON" instead of "Remember to always return JSON."

## Provide relevant context

Copilot uses the context available to it to understand your prompt. How you supply that context depends on the surface you are using.

* **Code completions in your IDE:** open any relevant files and close irrelevant ones. Copilot uses your open files to understand your request.
* **Copilot in your IDE or on the GitHub website:** highlight the code that you want Copilot to reference, and use keywords to attach context. For example, type `@` in your prompt to attach items such as files, issues, pull requests, or repositories. Some IDEs also support slash commands (such as `/fix` and `/tests`), variables, and other options for enhancing your Copilot experience.
* **GitHub Copilot CLI:** attach a repository file with `@path`, or reference a GitHub issue or pull request with `#number`. For repository context that you want to reuse, add custom instructions such as a `.github/copilot-instructions.md` file, path-specific instruction files, or an `AGENTS.md` file.
* **Copilot cloud agent:** scope the task by selecting the repository and base branch, then describe the objective, acceptance criteria, and relevant files. Attach screenshots or mockups when visual context matters. Start the task from a chat session when existing discussion should carry into the task; otherwise, include that background in the task prompt. Keep durable guidance in repository, path-specific, or agent instruction files.

## Experiment and iterate

If you don’t get the result that you want, iterate on your prompt and try again.

If you are using Copilot to get suggestions as you code, you can delete the suggestion entirely and start over. Or you can keep the suggestion and request modifications.

If you are using Copilot Chat, you can reference the previous response in your next request. Or, you can delete the previous response and start over.

## Keep history relevant

Conversational surfaces (the GitHub Copilot app, GitHub Copilot CLI, Copilot in your IDE or on GitHub, and the Copilot cloud agent) use your conversation history as context. To give Copilot only the relevant history:

* Start a new conversation or session when you begin a new task.
* Where your surface supports it, remove or roll back turns that are no longer relevant. For example, GitHub Copilot CLI lets you start a fresh session, delete sessions, and rewind to an earlier prompt with `/undo` or `/rewind`. The Copilot cloud agent lets you start a new task and stop or archive a session, but does not let you delete a session or rewind individual turns.

## Review Copilot's output

Validate AI-generated code and responses the same way you would review a colleague's work: assess, test, and confirm correctness before you rely on it. This applies across all Copilot surfaces. For more information, see [Review Ai Generated Code](https://docs.github.com/en/copilot/tutorials/review-ai-generated-code).

## Follow good coding practices

If you aren't getting the responses you want when you ask Copilot for suggestions or explanations in your codebase, make sure that your existing code follows best practices and is easy to read. For example:

* Use a consistent code style and patterns.
* Use descriptive names for variables and functions.
* Comment your code.
* Structure your code into modular, scoped components.
* Include unit tests.

>[!Tip]
> Use Copilot to help your code follow best practices. For example, ask Copilot to add comments or to break a large function into smaller functions.

## Further reading

* [Chat Cheat Sheet](https://docs.github.com/en/copilot/reference/chat-cheat-sheet)
* [How to use GitHub Copilot: Prompts, tips, and use cases](https://github.blog/2023-06-20-how-to-write-better-prompts-for-github-copilot/?ref_product=copilot&ref_type=engagement&ref_style=text) in the GitHub blog
* [Using GitHub Copilot in your IDE: Tips, tricks, and best practices](https://github.blog/2024-03-25-how-to-use-github-copilot-in-your-ide-tips-tricks-and-best-practices/?ref_product=copilot&ref_type=engagement&ref_style=text) in the GitHub blog
* [A developer’s guide to prompt engineering and LLMs](https://github.blog/2023-07-17-prompt-engineering-guide-generative-ai-llms/) in the GitHub blog
* [Prompting GitHub Copilot Chat to become your personal AI assistant for accessibility](https://github.blog/2023-10-09-prompting-github-copilot-chat-to-become-your-personal-ai-assistant-for-accessibility/?ref_product=copilot&ref_type=engagement&ref_style=text) in the GitHub blog
