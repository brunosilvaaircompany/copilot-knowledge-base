# Using GitHub Copilot Spaces

For information on creating Copilot Spaces, see [Create Copilot Spaces](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/copilot-spaces/create-copilot-spaces).

## Using Copilot Spaces in your IDE

You can also access the information and context from Spaces directly in your IDE using the GitHub MCP server. This allows you to leverage your curated context while coding without switching between your IDE and the web interface.

This functionality is available in any IDE that supports the GitHub Copilot extension and the GitHub MCP server.

>[!NOTE] When using Spaces in your IDE, repository context and uploaded files are not supported. You will have access to all other sources, including text content added via "{% octicon "paste" aria-label="Add text content" %} **Add text content**", GitHub files, issues, pull requests, and instructions from the space.

Once you've accessed space context from your IDE:

* The space's context will inform Copilot's responses
* You can reference the space's content when generating code, getting explanations, or working on development tasks
* Your spaces stay in sync as your project evolves. GitHub files and other GitHub-based sources added to a space are automatically updated as they change, making Copilot an evergreen expert in your project

### Prerequisites

To use Spaces in your IDE, you need to:

* Set up the remote GitHub MCP server for your IDE. For more information, see [Set Up The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/set-up-the-github-mcp-server) and [Remote GitHub MCP Server](https://github.com/github/github-mcp-server/blob/main/docs/remote-server.md) in the GitHub MCP server documentation.
* Configure the remote GitHub MCP server so that the Spaces toolset is enabled.

  The Spaces toolset is not included in the default configuration, so you must explicitly enable it using the `X-MCP-Toolsets` header. The following example configuration enables both the default tools and Spaces:

   ```json copy
   {
     "servers": {
       "github": {
         "type": "http",
         "url": "https://api.githubcopilot.com/mcp/",
         "headers": {
           "X-MCP-Toolsets": "default,copilot_spaces"
         }
       }
     }
   }
   ```

   Alternatively, you can use the dedicated Spaces toolset URL: `https://api.githubcopilot.com/mcp/x/copilot_spaces`. Note that this configuration provides _only_ Spaces tools, without other default GitHub MCP server functionality.

### Accessing space context from your IDE

For more detailed information on using the GitHub MCP server in a specific IDE, see [Use The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/use-the-github-mcp-server).

Note that Spaces can only be used in agent mode in your IDE, since spaces are accessed via the GitHub MCP server.

1. In your IDE, open Copilot Chat and select **Agent** from the agent dropdown menu.
   * To confirm that the Spaces tools are enabled, in the Copilot Chat box, click the tools icon. In the tools list, expand the GitHub MCP server entry and confirm that the `get_copilot_space` and `list_copilot_spaces` tools are listed and enabled.
   * If you don't see the tools listed, check that you have completed the prerequisites above, including enabling the `copilot_spaces` toolset in your GitHub MCP server configuration.
1. In the Copilot Chat box, enter a prompt that references the space that you want to use as context. If you know the exact name of the space and the name of the user or organization that owns the space, you can provide that. Otherwise, Copilot will automatically use the `list_copilot_spaces` tool to find spaces that match the name or text you provide and access the context from those spaces.

   For example, you could use either of these two prompts:
    * `Using the Copilot space 'Checkout Flow Redesign' owned by myorganization, summarize the implementation plan.`
    * `Summarize the implementation plan from the Copilot space for the checkout flow redesign.`

   Follow-up prompts in the same chat conversation will have access to the same spaces, without you having to reference it explicitly.

## Next steps

* To learn more about how to use Spaces to help you with development work, see [Speed Up Development Work](https://docs.github.com/en/copilot/tutorials/speed-up-development-work).
* To learn how to share your space with your team, see [Collaborate With Others](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/copilot-spaces/collaborate-with-others).
