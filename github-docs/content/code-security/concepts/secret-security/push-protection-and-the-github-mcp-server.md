# Working with push protection and the GitHub MCP server

## About push protection and the GitHub MCP server

Push protection prevents you from inadvertently exposing secrets, such as tokens, keys and credentials, in your repository.

When you're interacting with the GitHub MCP server, push protection blocks secrets in AI-generated responses as well as preventing secrets from being included in any actions you perform, such as creating an issue.

This protection is on by default for all interactions between the GitHub MCP server and **public repositories**; and between the GitHub MCP server and private repositories covered by GitHub Advanced Security, regardless of whether push protection is enabled on the repository's security settings page.

## Resolving a block

To resolve the block, you can either:

* **Remove** the secret from the content of your request before trying again.
* **Bypass the block.** If push protection is enabled for the repository, or you have push protection enabled for your personal account, you'll see an option to bypass the push protection block. You should carefully evaluate if it's safe to include the secret in your request before continuing.

## Further reading

* [Push Protection](https://docs.github.com/en/code-security/concepts/secret-security/push-protection)
* [About the GitHub MCP server](/copilot/concepts/context/mcp#about-the-github-mcp-server)
* [Scan For Secrets With GitHub MCP Server](https://docs.github.com/en/code-security/how-tos/use-ghas-with-ai-coding-agents/scan-for-secrets-with-github-mcp-server)
