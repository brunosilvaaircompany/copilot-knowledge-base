# Configuring an MCP server allowlist for your enterprise

## About allowlists

You can define an allowlist and denylist to control which MCP servers users in your enterprise can run in Copilot clients and cloud sandboxes. These lists are defined in your enterprise's `managed-settings.json`, which you can store on GitHub. For more information, see [MCP Management](https://docs.github.com/en/copilot/concepts/enterprise/mcp-management).

`allowedMcpServers` and `deniedMcpServers` apply to MCP servers defined in user settings and repository settings, but **don't** apply to MCP servers defined in repository custom agent profiles. However, you can prevent use of MCP servers configured in custom agent profiles by ensuring that any required domains to start them are not allowed by the organization or repository-level custom firewall. See [Customizing Or Disabling The Firewall For Copilot Coding Agent](https://docs.github.com/en/copilot/how-tos/agents/copilot-coding-agent/customizing-or-disabling-the-firewall-for-copilot-coding-agent).


These controls also apply to Copilot connectors on clients that support MCP managed settings. If you define an allowlist, users can only use connectors whose URLs match an allowlist entry. See [Allowing Copilot connectors](#allowing-copilot-connectors).

## Prerequisites

* For any MCP servers to run, the **MCP servers in Copilot** policy must be enabled for your enterprise or for organizations where MCP servers should be allowed.
* If you currently restrict MCP servers to a custom registry, we recommend turning off this restriction to avoid conflicts with your new allowlist and maintain a single source of truth. Set the **Restrict MCP access to registry servers** policy to **Allow all**, and optionally clear the value for **MCP Registry URL**.

You can find these settings in the {% octicon "mcp" aria-hidden="true" aria-label="MCP" %} **MCP** section of your Copilot policies. See [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).

## Defining an allowlist or denylist

1. Create a `managed-settings.json` file for your enterprise. Most enterprises store this file in a `.github-private` repository. You can also install it directly on users' machines using mobile device management. See [Deploy Managed Settings](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/deploy-managed-settings#deploying-server-managed-settings).
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

## Allowing Copilot connectors

Copilot connectors are remote MCP servers, so you allow or block them with `serverUrl` entries. If you don't define `allowedMcpServers`, connectors are allowed unless they match a `deniedMcpServers` entry, and you don't need to add them. If you define `allowedMcpServers`, connectors are blocked unless their URLs match an entry.

To allow all connectors, including connectors added in the future, add the following wildcard entry to your existing `allowedMcpServers` list.

```json copy
{
  "allowedMcpServers": [
    { "serverUrl": "https://api.github.com/copilot-connectors/api/v1/connectors/*/mcp" }
  ]
}
```

To allow only specific connectors, add an entry for each connector's URL instead. For the URL of each connector, see [Connector URLs](#connector-urls). For example, the following entries allow the Slack and Sentry connectors.

```json copy
{
  "allowedMcpServers": [
    { "serverUrl": "https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotslackmcp/mcp" },
    { "serverUrl": "https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotsentrymcp/mcp" }
  ]
}
```

These examples show only the connector entries. Keep the other entries in your allowlist, because any MCP server that doesn't match an entry is blocked.

To block specific connectors, add their URLs to `deniedMcpServers`. Because deny rules take precedence, you can combine the wildcard allowlist entry with denylist entries to allow all connectors except the ones you block. To block all connectors, add the wildcard URL to `deniedMcpServers`.

### Connector URLs

{% rowheaders %}

| Connector | MCP server URL |
| --- | --- |
| Airtable | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotairtablemcp/mcp` |
| Amplitude | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotamplitudemcp/mcp` |
| Apify | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotapifymcp/mcp` |
| Atlassian Rovo | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotatlassianrovomcp/mcp` |
| Azure Data Explorer | `https://api.github.com/copilot-connectors/api/v1/connectors/kusto/mcp` |
| Bitly | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotbitlymcp/mcp` |
| Canva | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotcanvamcp/mcp` |
| Cloudflare | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotcloudflaremcp/mcp` |
| Composio | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotcomposiomcp/mcp` |
| Figma | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotfigmamcp/mcp` |
| Grafana Cloud | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotgrafanamcp/mcp` |
| LaunchDarkly | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotlaunchdarklymcp/mcp` |
| Linear | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotlinearmcp/mcp` |
| Lucid | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotlucidmcp/mcp` |
| Microsoft Learn Docs | `https://api.github.com/copilot-connectors/api/v1/connectors/microsoftlearndocsmcpserver/mcp` |
| Miro | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotmiromcp/mcp` |
| Neon | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotneonmcp/mcp` |
| Netlify | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotnetlifymcp/mcp` |
| Notion | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotnotionmcp/mcp` |
| Port | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotportmcp/mcp` |
| Postman | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotpostmanmcp/mcp` |
| Sentry | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotsentrymcp/mcp` |
| Slack | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotslackmcp/mcp` |
| Statsig | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotstatsigmcp/mcp` |
| Vercel | `https://api.github.com/copilot-connectors/api/v1/connectors/githubcopilotvercelmcp/mcp` |
| Work IQ | `https://api.github.com/copilot-connectors/api/v1/connectors/workiqmcp/mcp` |


{% endrowheaders %}

## Evaluation rules

Copilot clients evaluate MCP servers in this order:

1. Always allow built-in default servers, such as the built-in GitHub MCP server.
1. Block the server if it matches any entry in `deniedMcpServers`.
1. If `allowedMcpServers` is present, block the server if it does not match an entry.
1. Block the server if its URL or command contains an unresolved variable, such as `${VARIABLE}` or `$VARIABLE`, because the client cannot verify the server.

If a client receives settings from multiple `managed-settings.json` deployment methods, all the settings apply. A deny rule from any source blocks the server, and a server must match an allowlist entry at every layer that defines one.

If an allowlist or denylist is malformed (for example, has invalid JSON), the client treats the policy as an empty `allowedMcpServers` list. This blocks all servers except built-in default servers.

If the client cannot determine a policy layer because of a retrieval or device-discovery error, it retains the previously enforced policy. The effective policy can become more restrictive, but not less restrictive.
