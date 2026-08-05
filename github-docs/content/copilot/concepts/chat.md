# About GitHub Copilot Chat

# Overview

GitHub Copilot Chat is the AI-powered chat interface for GitHub Copilot. It allows you to interact with AI models to get coding assistance, explanations, and suggestions in a conversational format.

Copilot Chat can help you with a variety of coding-related tasks, like offering you code suggestions, providing natural language descriptions of a piece of code's functionality and purpose, generating unit tests for your code, and proposing fixes for bugs in your code.

GitHub Copilot Chat is available in various environments:

* GitHub (the website)
* A range of IDEs such as Visual Studio Code, Xcode, and JetBrains IDEs
* GitHub Mobile
* GitHub Copilot CLI
* GitHub Copilot app

Different environments may have different features and capabilities, but the core functionality remains consistent across platforms. To explore the functionality available in each environment, see the [Chat With Copilot](https://docs.github.com/en/copilot/how-tos/chat-with-copilot) how-to guides and the [Tutorials](https://docs.github.com/en/copilot/tutorials).

## Limitations

Copilot Chat is designed to assist with coding tasks, but you remain responsible for reviewing and validating the code it generates. It may not always produce correct or optimal solutions, and it can sometimes generate code that contains security vulnerabilities or other issues. Always test and review the code before using it in production.

## Passing context between Copilot Chat and Copilot cloud agent sessions

On GitHub, Copilot Chat and Copilot cloud agent can share context. When you start an agent session from a chat, the session incorporates the context of your conversation, and while the session runs you can continue chatting with Copilot about its progress.

Copilot Chat can also answer questions about pull requests created by Copilot by pulling in the relevant agent session logs, so you can ask what changed, what was validated, and why, without leaving the conversation.

This context passing is scoped to the Copilot Chat and cloud agent sessions you are actively working with. It is distinct from Copilot Memory, which builds a longer-term, persistent understanding of your repositories and preferences across sessions. For more information, see [Manage And Track Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents).

## Customizing Copilot Chat responses

GitHub Copilot in GitHub, Visual Studio Code, and Visual Studio can provide chat responses that are tailored to the way your team works, the tools you use, the specifics of your project, or your personal preferences, if you provide it with enough context to do so. Instead of repeating instructions in each prompt, you can create and save instructions for Copilot Chat to customize what responses you receive.

There are various ways you can create custom instructions for Copilot Chat. These fall into three main categories:

* **Personal instructions**: You can add personal instructions so that all the chat responses you, as a user, receive are tailored to your preferences.
* **Repository instructions**: You can store instructions files in a repository, so that all prompts asked in the context of the repository automatically include the instructions you've defined.
* **Organization instructions**: If you are an organization owner, you can create a custom instructions file for an organization, so that all prompts asked in the context of any repository owned by the organization automatically include the instructions you've defined.

For more information, see [Add Personal Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-personal-instructions), [Add Repository Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions) and [Add Organization Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-organization-instructions).

## AI models for Copilot Chat

You can change the model Copilot uses to generate responses. You may find that different models perform better, or provide more useful responses, depending on the type of questions you ask. Options include premium models with advanced capabilities.  

## Extending Copilot Chat

Copilot Chat can be extended in a variety of ways to enhance its functionality and integrate it with other tools and services. This can include using the Model Context Protocol (MCP) to provide context-aware AI assistance, or connecting third-party tools to leverage GitHub’s AI capabilities.

### Extending Copilot Chat with MCP

MCP is an open standard that defines how applications share context with large language models (LLMs). MCP provides a standardized way to connect AI models to different data sources and tools, enabling them to work together more effectively.

You can configure MCP servers to provide context to Copilot Chat in various IDEs, such as Visual Studio Code and JetBrains IDEs. For Copilot Chat in GitHub, the GitHub MCP server is automatically configured, enabling Copilot Chat to perform a limited set of tasks, at your request, such as creating branches or merging pull requests. For more information, see [Extend Copilot Chat With MCP](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/extend-copilot-chat-with-mcp) and [Use The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/use-the-github-mcp-server).

### Further reading

* [Chat With Copilot](https://docs.github.com/en/copilot/how-tos/chat-with-copilot) how-to guides
* [Overview](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview)
* [Copilot Cookbook](https://docs.github.com/en/copilot/tutorials/copilot-cookbook)
