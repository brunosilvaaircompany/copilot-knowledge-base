# Using the GitHub MCP Server from Copilot Chat

The GitHub MCP server is pre-configured in Copilot Chat in GitHub with a limited set of skills, so you can use it immediately. Instruct Copilot Chat to perform tasks like creating branches or merging pull requests on your behalf.

For a full list of available skills, see [Chat Cheat Sheet](https://docs.github.com/en/copilot/reference/chat-cheat-sheet#mcp-skills). For more about MCP, see [MCP](https://docs.github.com/en/copilot/concepts/context/mcp).

## Use the GitHub MCP server

1. Navigate to [https://github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text).

1. Type a request and press **Enter**. For example:

    {% prompt %}Create a new branch called [BRANCH-NAME] in the repository [OWNER/REPO-NAME].{% endprompt %}

    {% prompt %}Merge the pull request [PR-NUMBER] in the repository [OWNER/REPO-NAME].{% endprompt %}

1. Click **Allow** to confirm the action.
1. Copilot Chat performs the action and shows the result.

## Limitations

The GitHub MCP server in Copilot Chat in GitHub supports a limited set of skills. If a requested action is not supported, Copilot Chat provides guidance but cannot perform it directly.

To access the full set of tools, set up the GitHub MCP server in your IDE. See [Use The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/use-the-github-mcp-server).

You can also use the GitHub MCP server with Copilot cloud agent. It is enabled with read-only access by default and can be customized for wider access. See [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers#customizing-the-built-in-github-mcp-server).
## Further reading

* [Enhance Agent Mode With MCP](https://docs.github.com/en/copilot/tutorials/enhance-agent-mode-with-mcp)
