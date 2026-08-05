# Configuring the GitHub MCP Server for GitHub Enterprise

The GitHub MCP server can be configured to work with GitHub Enterprise Server and GitHub Enterprise Cloud with data residency. The configuration steps differ depending on whether you are using the remote or local MCP server.

## About enterprise MCP server configuration

The GitHub MCP server supports two enterprise deployment types:

* **[GitHub Enterprise Cloud with data residency](#configuring-the-remote-mcp-server-for-github-enterprise-cloud-with-data-residency)**: Supports both remote and local MCP server configurations
* **[GitHub Enterprise Server](#configuring-the-local-mcp-server-for-enterprise)**: Supports **only local MCP server configuration**

> [!IMPORTANT]
> GitHub Enterprise Server does **not** support remote MCP server hosting. If you are using GitHub Enterprise Server, you **must** use the local MCP server configuration described in [Configuring the local MCP server for enterprise](#configuring-the-local-mcp-server-for-enterprise). Skip the remote MCP server configuration section below.

## Prerequisites

* A GitHub Enterprise Server instance or GitHub Enterprise Cloud account with data residency
* The GitHub MCP server configured in your editor. See [Set Up The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/set-up-the-github-mcp-server).

## Configuring the remote MCP server for GitHub Enterprise Cloud with data residency

> [!NOTE]
> This section applies **only** to GitHub Enterprise Cloud with data residency. If you are using GitHub Enterprise Server, skip to [Configuring the local MCP server for enterprise](#configuring-the-local-mcp-server-for-enterprise).

{% vscode %}

GitHub Enterprise Cloud with data residency can use the remote MCP server. To configure it, you need to update the MCP server URL to point to your GitHub Enterprise Cloud instance.

For example, if your GitHub Enterprise Cloud instance is `https://octocorp.ghe.com`, the MCP server URL would be `https://copilot-api.octocorp.ghe.com/mcp`.

1. In Visual Studio Code, open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) / <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac).
1. Type and select **MCP: Open User Configuration**.
1. In the settings file, locate the `servers` section. If you have already configured the GitHub MCP server, you will see a `github` entry.
1. Update the `url` field to point to your GitHub Enterprise Cloud instance.

   **Option A: With PAT authentication**

   ```json copy
   {
     "servers": {
       "github": {
         "type": "http",
         "url": "https://copilot-api.SUBDOMAIN.ghe.com/mcp",
         "headers": {
           "Authorization": "Bearer ${input:github_mcp_pat}"
         }
       }
     },
     "inputs": [
       {
         "type": "promptString",
         "id": "github_mcp_pat",
         "description": "GitHub PAT",
         "password": true
       }
     ]
   }
   ```

   **Option B: With OAuth authentication**

   ```json copy
   {
     "servers": {
       "github": {
         "type": "http",
         "url": "https://copilot-api.SUBDOMAIN.ghe.com/mcp"
       }
     }
   }
   ```

   Replace `SUBDOMAIN.ghe.com` with your GHE.com subdomain.

1. Save the file.
1. When using OAuth with GitHub Enterprise Cloud with data residency, configure your VS Code settings to point to your GitHub Enterprise Cloud instance. Add the following to your [VS Code user settings](https://code.visualstudio.com/docs/configure/settings#_user-settings):

    ```json
    {
      "github-enterprise.uri": "https://copilot-api.SUBDOMAIN.ghe.com/mcp"
    }
    ```

1. Restart Visual Studio Code or reload the window for the changes to take effect.

{% endvscode %}

{% visualstudio %}

GitHub Enterprise Cloud with data residency can use the remote MCP server. To configure it, you need to update the MCP server URL to point to your GitHub Enterprise Cloud instance.

For example, if your GitHub Enterprise Cloud instance is `https://octocorp.ghe.com`, the MCP server URL would be `https://copilot-api.octocorp.ghe.com/mcp`.

1. In the Visual Studio menu bar, click **View**, then click **GitHub Copilot Chat**.
1. At the bottom of the chat panel, select **Agent** from the mode dropdown.
1. In the Copilot Chat window, click the tools icon, then click the plus icon in the tool picker window.
1. In the "Configure MCP server" pop-up window, fill out the fields.
    1. For "Server ID", type `github`.
    1. For "Type", select "HTTP/SSE" from the dropdown.
    1. For "URL", type `https://copilot-api.YOURSUBDOMAIN.ghe.com/mcp`, replacing `YOURSUBDOMAIN` with your GitHub Enterprise Cloud subdomain.
    1. Add a new header under "Headers", called "Authorization" and set to the value `Bearer YOUR_GITHUB_PAT`, replacing "YOUR_GITHUB_PAT" with your personal access token.
1. Click **Save**.

{% endvisualstudio %}

{% jetbrains %}

GitHub Enterprise Cloud with data residency can use the remote MCP server. To configure it, you need to update the MCP server URL to point to your GitHub Enterprise Cloud instance.

For example, if your GitHub Enterprise Cloud instance is `https://octocorp.ghe.com`, the MCP server URL would be `https://copilot-api.octocorp.ghe.com/mcp`.

1. In the lower right corner, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}**.
1. From the menu, select "Open Chat", make sure you are in Agent mode, then click the tools icon (called "Configure your MCP server") at the bottom of the chat window.
1. Click **Add MCP Tools**.

1. In the `mcp.json` file, add the following configuration, replacing `YOURSUBDOMAIN` with your GitHub Enterprise Cloud subdomain and `YOUR_GITHUB_PAT` with your personal access token:

   ```json copy
   {
     "servers": {
       "github": {
         "url": "https://copilot-api.YOURSUBDOMAIN.ghe.com/mcp",
         "requestInit": {
           "headers": {
             "Authorization": "Bearer YOUR_GITHUB_PAT"
           }
         }
       }
     }
   }
   ```

{% endjetbrains %}

{% xcode %}

GitHub Enterprise Cloud with data residency can use the remote MCP server. To configure it, you need to update the MCP server URL to point to your GitHub Enterprise Cloud instance.

For example, if your GitHub Enterprise Cloud instance is `https://octocorp.ghe.com`, the MCP server URL would be `https://copilot-api.octocorp.ghe.com/mcp`.

1. Open the GitHub Copilot for Xcode extension and go to "Settings".
   * Alternatively, in an active Xcode workspace, you can find the settings by clicking **Editor** in the menu bar, selecting **GitHub Copilot**, then clicking **Open GitHub Copilot for Xcode Settings**.
1. Select the **MCP** tab, then click **Edit Config**.

1. Add the following configuration, replacing `YOURSUBDOMAIN` with your GitHub Enterprise Cloud subdomain and `YOUR_GITHUB_PAT` with your personal access token:

   ```json copy
   {
     "servers": {
       "github": {
         "url": "https://copilot-api.YOURSUBDOMAIN.ghe.com/mcp",
         "requestInit": {
           "headers": {
             "Authorization": "Bearer YOUR_GITHUB_PAT"
           }
         }
       }
     }
   }
   ```

{% endxcode %}

{% eclipse %}

GitHub Enterprise Cloud with data residency can use the remote MCP server. To configure it, you need to update the MCP server URL to point to your GitHub Enterprise Cloud instance.

For example, if your GitHub Enterprise Cloud instance is `https://octocorp.ghe.com`, the MCP server URL would be `https://copilot-api.octocorp.ghe.com/mcp`.

1. Click the Copilot icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the status bar at the bottom of Eclipse.
1. From the menu, select **Open Chat** and, in the chat window, click the "Configure Tools..." icon.
   * Alternatively, you can select **Edit preferences**, then in the left pane, expand GitHub Copilot and click **MCP**.

1. Add the following configuration under "Server Configurations", replacing `YOURSUBDOMAIN` with your GitHub Enterprise Cloud subdomain and `YOUR_GITHUB_PAT` with your personal access token:

   ```json copy
   {
     "servers": {
       "github": {
         "url": "https://copilot-api.YOURSUBDOMAIN.ghe.com/mcp",
         "requestInit": {
           "headers": {
             "Authorization": "Bearer YOUR_GITHUB_PAT"
           }
         }
       }
     }
   }
   ```

1. Click **Apply**.

{% endeclipse %}

## Configuring the local MCP server for enterprise

Both GitHub Enterprise Server and GitHub Enterprise Cloud with data residency support the local MCP server. You can configure the local server using either the `GITHUB_HOST` environment variable or the `--gh-host` command-line flag.

### Important considerations

* **For GitHub Enterprise Server**: Prefix the hostname with the `https://` URI scheme, as it otherwise defaults to `http://`, which GitHub Enterprise Server does not support.
* **For GitHub Enterprise Cloud with data residency**: Use `https://YOURSUBDOMAIN.ghe.com` as the hostname.

### Configuration with Docker

{% vscode %}

To configure the local MCP server with Docker in Visual Studio Code:

1. In Visual Studio Code, open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) / <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac).
1. Type and select **MCP: Open User Configuration**.
1. In the settings file, locate the `servers` section or create it if it doesn't exist.
1. Add the following configuration:

   **For GitHub Enterprise Server:**

   ```json copy
   {
     "inputs": [
       {
         "type": "promptString",
         "id": "github_token",
         "description": "GitHub PAT",
         "password": true
       }
     ],
     "servers": {
       "github": {
         "command": "docker",
         "args": [
           "run",
           "-i",
           "--rm",
           "-e",
           "GITHUB_PERSONAL_ACCESS_TOKEN",
           "-e",
           "GITHUB_HOST",
           "ghcr.io/github/github-mcp-server"
         ],
         "env": {
           "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
           "GITHUB_HOST": "https://YOUR_GHES_HOSTNAME"
         }
       }
     }
   }
   ```

   Replace `YOUR_GHES_HOSTNAME` with your GitHub Enterprise Server hostname (for example, `https://github.example.com`).

   **For GitHub Enterprise Cloud with data residency:**

   ```json copy
   {
     "inputs": [
       {
         "type": "promptString",
         "id": "github_token",
         "description": "GitHub PAT",
         "password": true
       }
     ],
     "servers": {
       "github": {
         "command": "docker",
         "args": [
           "run",
           "-i",
           "--rm",
           "-e",
           "GITHUB_PERSONAL_ACCESS_TOKEN",
           "-e",
           "GITHUB_HOST",
           "ghcr.io/github/github-mcp-server"
         ],
         "env": {
           "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
           "GITHUB_HOST": "https://YOURSUBDOMAIN.ghe.com"
         }
       }
     }
   }
   ```

   Replace `YOURSUBDOMAIN` with your GitHub Enterprise Cloud subdomain.

1. Save the file.
1. Restart Visual Studio Code or reload the window for the changes to take effect.

{% endvscode %}

{% visualstudio %}

To configure the local MCP server with Docker in Visual Studio, you need to manually edit the `mcp.json` file.

1. Open the `mcp.json` file in Visual Studio. The file is typically located in your user profile directory.
1. Add the following configuration:

   **For GitHub Enterprise Server:**

   ```json copy
   {
     "mcp": {
       "inputs": [
         {
           "type": "promptString",
           "id": "github_token",
           "description": "GitHub PAT",
           "password": true
         }
       ],
       "servers": {
         "github": {
           "command": "docker",
           "args": [
             "run",
             "-i",
             "--rm",
             "-e",
             "GITHUB_PERSONAL_ACCESS_TOKEN",
             "-e",
             "GITHUB_HOST",
             "ghcr.io/github/github-mcp-server"
           ],
           "env": {
             "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
             "GITHUB_HOST": "https://YOUR_GHES_HOSTNAME"
           }
         }
       }
     }
   }
   ```

   Replace `YOUR_GHES_HOSTNAME` with your GitHub Enterprise Server hostname (for example, `https://github.example.com`).

   **For GitHub Enterprise Cloud with data residency:**

   ```json copy
   {
     "mcp": {
       "inputs": [
         {
           "type": "promptString",
           "id": "github_token",
           "description": "GitHub PAT",
           "password": true
         }
       ],
       "servers": {
         "github": {
           "command": "docker",
           "args": [
             "run",
             "-i",
             "--rm",
             "-e",
             "GITHUB_PERSONAL_ACCESS_TOKEN",
             "-e",
             "GITHUB_HOST",
             "ghcr.io/github/github-mcp-server"
           ],
           "env": {
             "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
             "GITHUB_HOST": "https://YOURSUBDOMAIN.ghe.com"
           }
         }
       }
     }
   }
   ```

   Replace `YOURSUBDOMAIN` with your GitHub Enterprise Cloud subdomain.

1. Save the file.

{% endvisualstudio %}

{% jetbrains %}

To configure the local MCP server with Docker in JetBrains IDEs:

1. In the lower right corner, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}**.
1. From the menu, select "Open Chat", make sure you are in Agent mode, then click the tools icon (called "Configure your MCP server") at the bottom of the chat window.
1. Click **Add MCP Tools**.

1. Add the following configuration:

   **For GitHub Enterprise Server:**

   ```json copy
   {
     "inputs": [
       {
         "type": "promptString",
         "id": "github_token",
         "description": "GitHub PAT",
         "password": true
       }
     ],
     "servers": {
       "github": {
         "command": "docker",
         "args": [
           "run",
           "-i",
           "--rm",
           "-e",
           "GITHUB_PERSONAL_ACCESS_TOKEN",
           "-e",
           "GITHUB_HOST",
           "ghcr.io/github/github-mcp-server"
         ],
         "env": {
           "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
           "GITHUB_HOST": "https://YOUR_GHES_HOSTNAME"
         }
       }
     }
   }
   ```

   Replace `YOUR_GHES_HOSTNAME` with your GitHub Enterprise Server hostname (for example, `https://github.example.com`).

   **For GitHub Enterprise Cloud with data residency:**

   ```json copy
   {
     "inputs": [
       {
         "type": "promptString",
         "id": "github_token",
         "description": "GitHub PAT",
         "password": true
       }
     ],
     "servers": {
       "github": {
         "command": "docker",
         "args": [
           "run",
           "-i",
           "--rm",
           "-e",
           "GITHUB_PERSONAL_ACCESS_TOKEN",
           "-e",
           "GITHUB_HOST",
           "ghcr.io/github/github-mcp-server"
         ],
         "env": {
           "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
           "GITHUB_HOST": "https://YOURSUBDOMAIN.ghe.com"
         }
       }
     }
   }
   ```

   Replace `YOURSUBDOMAIN` with your GitHub Enterprise Cloud subdomain.

{% endjetbrains %}

{% xcode %}

To configure the local MCP server with Docker in Xcode:

1. Open the GitHub Copilot for Xcode extension and go to "Settings".
   * Alternatively, in an active Xcode workspace, you can find the settings by clicking **Editor** in the menu bar, selecting **GitHub Copilot**, then clicking **Open GitHub Copilot for Xcode Settings**.
1. Select the **MCP** tab, then click **Edit Config**.

1. Add the following configuration:

   **For GitHub Enterprise Server:**

   ```json copy
   {
     "inputs": [
       {
         "type": "promptString",
         "id": "github_token",
         "description": "GitHub PAT",
         "password": true
       }
     ],
     "servers": {
       "github": {
         "command": "docker",
         "args": [
           "run",
           "-i",
           "--rm",
           "-e",
           "GITHUB_PERSONAL_ACCESS_TOKEN",
           "-e",
           "GITHUB_HOST",
           "ghcr.io/github/github-mcp-server"
         ],
         "env": {
           "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
           "GITHUB_HOST": "https://YOUR_GHES_HOSTNAME"
         }
       }
     }
   }
   ```

   Replace `YOUR_GHES_HOSTNAME` with your GitHub Enterprise Server hostname (for example, `https://github.example.com`).

   **For GitHub Enterprise Cloud with data residency:**

   ```json copy
   {
     "inputs": [
       {
         "type": "promptString",
         "id": "github_token",
         "description": "GitHub PAT",
         "password": true
       }
     ],
     "servers": {
       "github": {
         "command": "docker",
         "args": [
           "run",
           "-i",
           "--rm",
           "-e",
           "GITHUB_PERSONAL_ACCESS_TOKEN",
           "-e",
           "GITHUB_HOST",
           "ghcr.io/github/github-mcp-server"
         ],
         "env": {
           "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
           "GITHUB_HOST": "https://YOURSUBDOMAIN.ghe.com"
         }
       }
     }
   }
   ```

   Replace `YOURSUBDOMAIN` with your GitHub Enterprise Cloud subdomain.

{% endxcode %}

{% eclipse %}

To configure the local MCP server with Docker in Eclipse:

1. Click the Copilot icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the status bar at the bottom of Eclipse.
1. From the menu, select **Open Chat** and, in the chat window, click the "Configure Tools..." icon.
   * Alternatively, you can select **Edit preferences**, then in the left pane, expand GitHub Copilot and click **MCP**.

1. Add the following configuration under "Server Configurations":

   **For GitHub Enterprise Server:**

   ```json copy
   {
     "inputs": [
       {
         "type": "promptString",
         "id": "github_token",
         "description": "GitHub PAT",
         "password": true
       }
     ],
     "servers": {
       "github": {
         "command": "docker",
         "args": [
           "run",
           "-i",
           "--rm",
           "-e",
           "GITHUB_PERSONAL_ACCESS_TOKEN",
           "-e",
           "GITHUB_HOST",
           "ghcr.io/github/github-mcp-server"
         ],
         "env": {
           "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
           "GITHUB_HOST": "https://YOUR_GHES_HOSTNAME"
         }
       }
     }
   }
   ```

   Replace `YOUR_GHES_HOSTNAME` with your GitHub Enterprise Server hostname (for example, `https://github.example.com`).

   **For GitHub Enterprise Cloud with data residency:**

   ```json copy
   {
     "inputs": [
       {
         "type": "promptString",
         "id": "github_token",
         "description": "GitHub PAT",
         "password": true
       }
     ],
     "servers": {
       "github": {
         "command": "docker",
         "args": [
           "run",
           "-i",
           "--rm",
           "-e",
           "GITHUB_PERSONAL_ACCESS_TOKEN",
           "-e",
           "GITHUB_HOST",
           "ghcr.io/github/github-mcp-server"
         ],
         "env": {
           "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
           "GITHUB_HOST": "https://YOURSUBDOMAIN.ghe.com"
         }
       }
     }
   }
   ```

   Replace `YOURSUBDOMAIN` with your GitHub Enterprise Cloud subdomain.

1. Click **Apply**.

{% endeclipse %}

### Configuration when building from source

If you are building the MCP server from source instead of using Docker, you can set the `GITHUB_HOST` environment variable or use the `--gh-host` command-line flag:

**Using environment variable:**

```bash
export GITHUB_HOST="https://YOUR_GHES_OR_GHEC_HOSTNAME"
./github-mcp-server stdio
```

**Using command-line flag:**

```bash
./github-mcp-server --gh-host \
  "https://YOUR_GHES_OR_GHEC_HOSTNAME" stdio
```

Replace `YOUR_GHES_OR_GHEC_HOSTNAME` with your GitHub Enterprise Server hostname (for example, `https://github.example.com`) or GitHub Enterprise Cloud hostname (for example, `https://octocorp.ghe.com`).

## Next steps

* To learn how to use the GitHub MCP server, see [Use The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/use-the-github-mcp-server).
* To learn how to configure toolsets for the GitHub MCP server, see [Configure Toolsets](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/configure-toolsets).
