# Configuring an MCP server allowlist for your enterprise

## About allowlists

You can define an allowlist and denylist to control which MCP servers users in your enterprise can run in Copilot clients. These lists are defined in your enterprise's `managed-settings.json`, which you can store on GitHub.

For more information, see [MCP Management](https://docs.github.com/en/copilot/concepts/mcp-management).

## Prerequisites

* For any MCP servers to run, the **MCP servers in Copilot** policy must be enabled for your enterprise or for organizations where MCP servers should be allowed.
* If you currently restrict MCP servers to a custom registry, we recommend turning off this restriction to avoid conflicts with your new allowlist and maintain a single source of truth. Set the **Restrict MCP access to registry servers** policy to **Allow all**, and optionally clear the value for **MCP Registry URL**.

You can find these settings in the {% octicon "mcp" aria-hidden="true" aria-label="MCP" %} **MCP** section of your Copilot policies. See [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).

## Defining an allowlist or denylist

1. Create a `managed-settings.json` file for your enterprise. Most enterprises store this file in a `.github-private` repository. You can also install it directly on users' machines using mobile device management. See [Configure Enterprise Managed Settings](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings#deploying-server-managed-settings).
1. Edit the file to define an allowlist and denylist for MCP servers. You can match by name, server URL, or specific commands. For syntax details, see [allowedMcpServers](/copilot/reference/enterprise-administrators/enterprise-managed-settings#allowedmcpservers), and [deniedMcpServers](/copilot/reference/enterprise-administrators/enterprise-managed-settings#deniedmcpservers) in "Enterprise managed settings."

    The following example allows servers that match any of the three allowlist entries. The filesystem server configured to access the root filesystem is always blocked, even if it also matches an allowlist entry.

   ```json copy
   {
     "allowedMcpServers": [
       { "serverUrl": "https://api.githubcopilot.com/*" },
       { "serverCommand": ["npx", "@playwright/mcp@latest"] },
       { "serverCommand": ["cmd", "/c", "uvx", "markitdown-mcp"] }
     ],
     "deniedMcpServers": [
       {
         "serverCommand": [
           "npx",
           "-y",
           "@modelcontextprotocol/server-filesystem",
           "/"
         ]
       }
     ]
   }
   ```

## Evaluation rules

Copilot clients evaluate MCP servers in this order:

1. Always allow built-in default servers, such as the built-in GitHub MCP server.
1. Block the server if it matches any entry in `deniedMcpServers`.
1. If `allowedMcpServers` is present, block the server if it does not match an entry.
1. Block the server if its URL or command contains an unresolved variable, such as `${VARIABLE}` or `$VARIABLE`, because the client cannot verify the server.

If a client receives settings from multiple `managed-settings.json` deployment methods, all the settings apply. A deny rule from any source blocks the server, and a server must match an allowlist entry at every layer that defines one.

If an allowlist or denylist is malformed (for example, has invalid JSON), the client treats the policy as an empty `allowedMcpServers` list. This blocks all servers except built-in default servers.

If the client cannot determine a policy layer because of a retrieval or device-discovery error, it retains the previously enforced policy. The effective policy can become more restrictive, but not less restrictive.
