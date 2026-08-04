# Configure MCP servers for your repository

## Prerequisite

Before setting up MCP servers for your repository, read [MCP](https://docs.github.com/en/copilot/concepts/context/mcp) and [MCP And Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/mcp-and-cloud-agent).

## Introduction

As a repository administrator, you can configure MCP servers for use within your repository. You do this using a JSON-formatted configuration that specifies the details of the MCP servers you want to use. You enter the JSON configuration directly into the settings for the repository on GitHub.com.

This repository-level MCP configuration is shared by Copilot cloud agent and Copilot code review. For information on disabling use of MCP servers by Copilot code review, see [Disabling MCP tools for Copilot code review](#disabling-mcp-tools-for-code-review).

> [!NOTE]
> Existing repository MCP configurations that were previously managed under Copilot cloud agent settings were automatically moved to the new shared MCP settings page. No migration action is required.

The GitHub MCP server and Playwright MCP server are enabled by default. You can add your own MCP servers alongside these defaults.

Organization and enterprise administrators can also configure MCP servers as part of custom agents using the YAML frontmatter. For more information, see [Custom Agents Configuration](https://docs.github.com/en/copilot/reference/custom-agents-configuration#mcp-server-configuration-details).

> [!WARNING]
> Once you've configured an MCP server, Copilot will be able to use the tools provided by the server autonomously, and will not ask for your approval before using them.

When configuring MCP servers for use by Copilot cloud agent and Copilot code review, keep in mind:

* Copilot cloud agent and Copilot code review only support MCP tools. They do not currently support resources or prompts provided by the MCP server.
* Copilot cloud agent and Copilot code review do not currently support remote MCP servers that leverage OAuth for authentication and authorization.


## Adding an MCP configuration to your repository

Repository administrators can configure MCP servers by following these steps:

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the sidebar, under "Code, planning, and automation",
 click **Copilot** then **MCP servers**.
1. On the "Model Context Protocol (MCP)" page, add your configuration in the "MCP configuration" section.

   The following sections in this article explain how to write the JSON configuration that you need to enter here.

1. Click **Save MCP configuration**.

   Your configuration will be validated to ensure proper syntax.

1. If your MCP server requires a variable, key, or secret, add an Agents secret or variable with a name prefixed with `COPILOT_MCP_`. Only Agents secrets and variables with names prefixed with `COPILOT_MCP_` will be available to your MCP configuration. See [Configure Secrets And Variables](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/configure-secrets-and-variables).

## Writing a JSON configuration for MCP servers

You configure MCP servers using a special JSON format. The JSON must contain an `mcpServers` object, where the key is the name of the MCP server (for example, `sentry`), and the value is an object with the configuration for that MCP server.

```json copy
{
  "mcpServers": {
    "MCP SERVER 1": {
      "command": "VALUE",
      "args": [ VALUES ],
      ...
    },
    "MCP SERVER 2": {
      "command": "VALUE",
      "args": [ VALUES ],
      ...
    },
    ...
  }
}
```

The configuration object can contain the following keys:

**Required keys for local and remote MCP servers**
* `tools` (`string[]`): The tools from the MCP server to enable. You may be able to find a list of tools in the server's documentation, or in its code. We strongly recommend that you allowlist specific read-only tools, since the agent will be able to use these tools autonomously and will not ask you for approval first. You can also enable all tools by including `*` in the array.
* `type` (`string`): Copilot cloud agent accepts `"local"`, `"stdio"`, `"http"`, or `"sse"`.

**Local MCP specific keys**
* `command` (`string`): Required. The command to run to start the MCP server.
* `args` (`string[]`): Required. The arguments to pass to the `command`.
* `env` (`object`): Optional. The environment variables to pass to the server. This object should map the name of the environment variable that should be exposed to your MCP server to one of the following:
  * A substitution reference to a secret or variable in your Copilot environment, such as `$COPILOT_MCP_API_KEY` or `${COPILOT_MCP_API_KEY}`. Referenced names must start with `COPILOT_MCP_`.
  * A literal string value.

**Remote MCP specific keys**
* `url` (`string`): Required. The MCP server's URL.
* `headers` (`object`): Optional. The headers to attach to requests to the server. This object should map the name of header keys to one of the following:
  * A substitution reference to a secret or variable in your Copilot environment, such as `$COPILOT_MCP_API_KEY` or `${COPILOT_MCP_API_KEY}`. Referenced names must start with `COPILOT_MCP_`.
  * A literal string value.

Note that all `string` and `string[]` fields besides `tools` and `type` support substitution with a variable or secret you have configured in your Copilot environment.

### Variable substitution

The following syntax patterns are supported for referencing environment variables configured in your Copilot environment:

| Syntax      | Example                 |
| ----------- | ------------            |
| `$VAR`      | `$COPILOT_MCP_API_KEY`  |
| `${VAR}`    | `${COPILOT_MCP_API_KEY}`|
| `${VAR:-default}` | `${COPILOT_MCP_API_KEY:-fallback_value}` |

## Example configurations

The examples below show MCP server configurations for different providers.
* [Sentry](#example-sentry)
* [Notion](#example-notion)
* [Azure](#example-azure)
* [Cloudflare](#example-cloudflare)
* [Azure DevOps](#example-azure-devops)
* [Atlassian](#example-atlassian)

### Example: Sentry

The [Sentry MCP server](https://github.com/getsentry/sentry-mcp) gives Copilot authenticated access to exceptions recorded in [Sentry](https://sentry.io).

```javascript copy
// If you copy and paste this example, you will need to remove the comments prefixed with `//`, which are not valid JSON.
{
  "mcpServers": {
    "sentry": {
      "type": "local",
      "command": "npx",
      // We can use the $SENTRY_HOST environment variable which is passed to
      // the server because of the `env` value below.
      "args": ["@sentry/mcp-server@latest", "--host=$SENTRY_HOST"],
      "env": {
        // We can specify an environment variable value as a string...
        "SENTRY_HOST": "https://contoso.sentry.io",
        // or refer to a variable or secret in your Copilot environment
        // with a name starting with `COPILOT_MCP_`
        "SENTRY_ACCESS_TOKEN": "$COPILOT_MCP_SENTRY_ACCESS_TOKEN"
      }
    }
  }
}
```

### Example: Notion

The [Notion MCP server](https://github.com/makenotion/notion-mcp-server) gives Copilot authenticated access to notes and other content from [Notion](https://notion.so).

```javascript copy
// If you copy and paste this example, you will need to remove the comments prefixed with `//`, which are not valid JSON.
{
  "mcpServers": {
    "notionApi": {
      "type": "local",
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "-e",
        // We can use the $NOTION_API_KEY environment variable which is passed to
        // the server because of the `env` value below.
        "OPENAPI_MCP_HEADERS={\"Authorization\": \"Bearer $NOTION_API_KEY\", \"Notion-Version\": \"2022-06-28\"}",
       "mcp/notion"
      ],
      "env": {
        // The value of the `COPILOT_MCP_NOTION_API_KEY` secret will be passed to the
        // server command as an environment variable called `NOTION_API_KEY`
        "NOTION_API_KEY": "$COPILOT_MCP_NOTION_API_KEY"
      },
      "tools": ["*"]
    }
  }
}
```

### Example: Azure

The [Microsoft MCP repository](https://github.com/microsoft/mcp) includes the Azure MCP server, which allows Copilot to understand your Azure-specific files and Azure resources within your subscription when making code changes.

To automatically configure your repository with a `copilot-setup-steps.yml` file to authenticate with Azure, plus secrets for authentication, clone the repository locally then run the [Azure Developer CLI](https://learn.microsoft.com/en-us/azure/developer/azure-developer-cli/?ref_product=copilot&ref_type=engagement&ref_style=button)'s `azd cloud-agent config` command in the root of the repository.

Once you've run the command and merged the created pull request, you can add the MCP configuration to your repository.

  ```json copy
   {
     "mcpServers": {
       "Azure": {
        "type": "local",
        "command": "npx",
        "args": [
          "-y",
          "@azure/mcp@latest",
          "server",
          "start"
         ],
        "tools": ["*"]
       }
     }
   }
   ```

### Example: Cloudflare

The [Cloudflare MCP server](https://github.com/cloudflare/mcp-server-cloudflare) creates connections between your Cloudflare services, including processing documentation and data analysis.

```json copy
{
  "mcpServers": {
    "cloudflare": {
      "type": "sse",
      "url": "https://docs.mcp.cloudflare.com/sse",
      "tools": ["*"]
    }
  }
}
```

### Example: Azure DevOps

The [Azure DevOps MCP server](https://github.com/microsoft/azure-devops-mcp) creates a seamless connection between Copilot and your Azure DevOps services, including work items, pipelines or documentation.

To use the Azure DevOps MCP server with Copilot cloud agent, you must update the repository's copilot-setup-steps.yml file to include an Azure login workflow step.

1. Configure OIDC in a Microsoft Entra application, trusting GitHub. See [Use the Azure Login action with OpenID Connect](https://learn.microsoft.com/en-us/azure/developer/github/connect-from-azure-openid-connect).
1. Setup access to Azure DevOps organization and projects for the application identity. See [Add organization users and manage access](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/add-organization-users).
1. Add a `.github/workflows/copilot-setup-steps.yml` Actions workflow file in your repository if you do not already have one.
1. Add an Azure login step to the `copilot-setup-steps` workflow job.

   ```yaml copy
   # This workflow uses actions that are not certified by GitHub.
# They are provided by a third-party and are governed by
# separate terms of service, privacy policy, and support
# documentation.

   on:
     workflow_dispatch:
   permissions:
     id-token: write
     contents: read
   jobs:
     copilot-setup-steps:
       runs-on: ubuntu-latest
       permissions:
         id-token: write
         contents: read
       environment: copilot
       steps:
         - name: Azure login
           uses: azure/login@a457da9ea143d694b1b9c7c869ebb04ebe844ef5
           with:
             client-id: {% raw %}${{ secrets.AZURE_CLIENT_ID }}{% endraw %}
             tenant-id: {% raw %}${{ secrets.AZURE_TENANT_ID }}{% endraw %}
             allow-no-subscriptions: true
   ```

   This configuration ensures the `azure/login` action is executed when Copilot cloud agent runs.
1. Configure secrets for your `AZURE_CLIENT_ID` and `AZURE_TENANT_ID` as Agents secrets at either the organization or repository level. For more information, see [Configure Secrets And Variables](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/configure-secrets-and-variables).
1. Configure the Azure DevOps MCP server by adding an `ado` object to your MCP configuration with the tools you want Copilot to use.

  ```json copy
  {
    "mcpServers": {
      "ado": {
        "type": "local",
        "command": "npx",
        "args": ["-y", "@azure-devops/mcp", "<your-azure-devops-organization>", "-a", "azcli"],
        "tools": ["wit_get_work_item", "wit_get_work_items_batch_by_ids", ...]
      }
    }
  }
   ```

### Example: Atlassian

The [Atlassian MCP server](https://github.com/atlassian/atlassian-mcp-server) gives Copilot authenticated access to your Atlassian apps, including Jira, Compass, and Confluence.

For more information about authenticating to the Atlassian MCP server using an API key, see [Configuring authentication via API token](https://support.atlassian.com/atlassian-rovo-mcp-server/docs/configuring-authentication-via-api-token/) in the Atlassian documentation.

```javascript copy
// If you copy and paste this example, you will need to remove the comments prefixed with `//`, which are not valid JSON.
{
  "mcpServers": {
    "atlassian-rovo-mcp": {
      "command": "npx",
      "type": "local",
      "tools": ["*"],
      "args": [
        "mcp-remote@latest",
        "https://mcp.atlassian.com/v1/mcp",
        // We can use the $ATLASSIAN_API_KEY environment variable which is passed
        // to the server because of the `env` value below.
        "--header",
        "Authorization: Basic $ATLASSIAN_API_KEY"
      ],
      "env": {
        // The value of the `COPILOT_MCP_ATLASSIAN_API_KEY` secret will be passed
        // to the server command as an environment variable
        // called `ATLASSIAN_API_KEY`.
        "ATLASSIAN_API_KEY": "$COPILOT_MCP_ATLASSIAN_API_KEY"
      }
    }
  }
}
```

## Reusing your MCP configuration from Visual Studio Code

If you have already configured MCP servers in VS Code, you can leverage a similar configuration for your repository MCP settings on GitHub.

Depending on how VS Code is configured, you may be able to find your MCP settings in your repository's `.vscode/mcp.json` file, or in your machine's private `settings.json` file.

To adapt the configuration for repository MCP settings on GitHub, you will need to:

1. Add a `tools` key for each MCP server, specifying which tools will be available to Copilot.
1. If you've configured `inputs`, switch to using `env` directly.
1. If you've configured an `envFile`, switch to using `env` directly.
1. Update any references to `inputs` in your `args` configuration to refer to environment variables from `env` instead.

For more information on MCP in VS Code, see the [VS Code docs](https://code.visualstudio.com/docs/copilot/chat/mcp-servers).

## Validating your MCP configuration

Once you've set up your MCP configuration, you should test it to make sure it is set up correctly.

### Validate with Copilot cloud agent

1. Create an issue in the repository, then assign it to Copilot.
1. Wait a few seconds, and Copilot will leave an 👀 reaction on the issue.
1. Wait a few more seconds, and Copilot will create a pull request, which will appear in the issue's timeline.
1. Click the created pull request in the timeline, and wait until a "Copilot started work" timeline event appears.
1. Click **View session** to open the Copilot cloud agent logs.
1. Click the ellipsis button (**...**) at the top right of the log viewer, then click **Copilot** in the sidebar.
1. Click the **Start MCP Servers** step to expand the logs.
1. If your MCP servers have been started successfully, you will see their tools listed at the bottom of the logs.

If your MCP servers require any dependencies that are not installed on the GitHub Actions runner by default, such as `uv` and `pipx`, or that need special setup steps, you may need to create a `copilot-setup-steps.yml` Actions workflow file to install them. For more information, see [Customize The Agent Environment](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment).

### Validate with Copilot code review

1. Open a pull request in the repository.
1. Request a review from Copilot.
1. Open the linked review session from the pull request timeline by clicking **View session**. In the session logs, review the "Setting up environment" section to see which MCP servers and tools were started and called.

## Customizing the built-in GitHub MCP server

The GitHub MCP server is enabled by default and connects to GitHub with a specially scoped token that only has read-only access to the current repository.

If you want to allow Copilot to access data outside the current repository, you can give it a personal access token with wider access.

1. Create a personal access token with the appropriate permissions. We recommend using a fine-grained personal access token, where you can limit the token's access to read-only permissions on specific repositories. For more information on personal access tokens, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).
1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the sidebar, under "Code, planning, and automation",
 click **Copilot** then **MCP servers**.
1. Add your configuration in the "MCP configuration" section. For example, you can add the following:

   ```javascript copy
    // If you copy and paste this example, you will need to remove the comments prefixed with `//`, which are not valid JSON.
    {
      "mcpServers": {
        "github-mcp-server": {
          "type": "http",
          // Remove "/readonly" to enable wider access to all tools.
          // Then, use the "X-MCP-Toolsets" header to specify which toolsets you'd like to include.
          // Use the "tools" field to select individual tools from the toolsets.
          "url": "https://api.githubcopilot.com/mcp/readonly",
          "tools": ["*"],
          "headers": {
            "X-MCP-Toolsets": "repos,issues,users,pull_requests,code_security,secret_protection,actions,web_search"
          }
        }
      }
    }
   ```

   For more information on toolsets, refer to the [README](https://github.com/github/github-mcp-server?tab=readme-ov-file#available-toolsets) in the GitHub Remote MCP Server documentation.

1. Click **Save MCP configuration**.
1. Add an Agents secret called `COPILOT_MCP_GITHUB_PERSONAL_ACCESS_TOKEN` with your personal access token as the value. You can configure this at either the organization or repository level. For more information, see [Configure Secrets And Variables](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/configure-secrets-and-variables).

For information on using the GitHub MCP server in other environments, see [Use The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/use-the-github-mcp-server).

## Disabling MCP tools for code review

In repository settings, use of MCP tools by Copilot code review is enabled by default.

Disable this setting if you want the configured MCP servers available only for Copilot cloud agent, and not for Copilot code review.

If you disable this setting, Copilot code review won't call MCP tools for pull request reviews in that repository, including tools from the default GitHub and Playwright MCP servers.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the sidebar, under "Code, planning, and automation",
 click **Copilot** then **Code review**.
1. Click the **Allow Copilot to use MCP tools when reviewing pull requests** toggle to disable the setting.

## Next steps

* [Add MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers)
* [Use Code Review](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review)
* [Create Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents)
* [Customize The Agent Environment](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment)
* [Extend Copilot Chat With MCP](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/extend-copilot-chat-with-mcp)
