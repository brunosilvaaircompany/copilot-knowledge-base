# Setting up the GitHub MCP Server

The GitHub MCP server is available to all GitHub users regardless of plan type. However, specific tools within the MCP server inherit the same access requirements as their corresponding GitHub features. If a feature requires a paid GitHub or Copilot license, the equivalent MCP tool will require the same subscription. For example, tools that interact with Copilot Cloud Agent require a paid Copilot license.

For the latest information and updates, see the [GitHub MCP server repository](https://github.com/github/github-mcp-server).

{% vscode %}

## About the GitHub MCP server

The GitHub MCP server is a Model Context Protocol (MCP) server provided and maintained by GitHub. MCP allows you to integrate AI capabilities with other tools and services, enhancing your development experience by providing context-aware AI assistance.

For a full introduction to the GitHub MCP server and an overview of MCP, see [MCP](https://docs.github.com/en/copilot/concepts/context/mcp).


## Prerequisites

* A GitHub account.
* Visual Studio Code.
* If you are a member of an organization or enterprise with a Copilot Business or Copilot Enterprise plan, the "MCP servers in Copilot" policy must be enabled in order to use MCP with Copilot.


## Setting up the GitHub MCP server in Visual Studio Code

The GitHub MCP server in Visual Studio Code can be configured remotely or locally. The remote GitHub MCP server is hosted by GitHub and is the recommended option for most users. The local GitHub MCP server is hosted on your machine and is recommended for users who want to customize their setup or have specific security requirements.

The steps below describe remote configuration through the MCP Registry view in Visual Studio Code's extensions panel. This view is backed by the GitHub MCP Registry. See [GitHub MCP Registry](https://github.com/mcp).

For information on manually configuring the remote or local GitHub MCP server, see the [GitHub MCP server documentation](https://github.com/mcp/io.github.github/github-mcp-server?ref_product=copilot&ref_type=engagement&ref_style=text).

1. In Visual Studio Code, open the extensions panel by clicking the extensions icon in the sidebar or pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd> (Windows/Linux) / <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd> (Mac).
1. In the extensions search bar, type `@mcp github` to search the MCP server gallery.
1. Select the GitHub MCP server from the search results. On the details page, click **Install**.
1. When prompted, confirm that you trust the server to start it.
1. To verify that the GitHub MCP server is configured correctly, open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) / <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac).
1. Type and select **MCP: List Servers**. You should see the GitHub MCP server listed as a configured server.

{% endvscode %}

{% visualstudio %}

## About the GitHub MCP server

The GitHub MCP server is a Model Context Protocol (MCP) server provided and maintained by GitHub. MCP allows you to integrate AI capabilities with other tools and services, enhancing your development experience by providing context-aware AI assistance.

For a full introduction to the GitHub MCP server and an overview of MCP, see [MCP](https://docs.github.com/en/copilot/concepts/context/mcp).


## Prerequisites

* **Access to Copilot**. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

* **Visual Studio version 17.14 or later**. For more information on installing Visual Studio, see the [Visual Studio downloads page](https://visualstudio.microsoft.com/downloads/).
* **Sign in to GitHub from Visual Studio**.
* If you are a member of an organization or enterprise with a Copilot Business or Copilot Enterprise plan, the "MCP servers in Copilot" policy must be enabled in order to use MCP with Copilot.


## Setting up the GitHub MCP server in Visual Studio

The instructions below guide you through setting up the GitHub MCP server in Visual Studio. Other MCP-compatible editors may have similar steps, but the exact process may vary.

The remote GitHub MCP server uses one-click OAuth authentication by default, but you can also manually configure it to use a personal access token (PAT) for authentication. If you use OAuth, the MCP server can only access the scopes you approve during sign-in. In organization-owned contexts, access may also be limited by admin policies that control which scopes and apps are permitted. If you use a PAT, the MCP server will have access to the scopes granted by the PAT, which is also subject to any PAT restrictions configured by the organization.

> [!NOTE]
> If you are an Enterprise Managed User, then PAT is disabled by default, unless enabled by an enterprise administrator. If PAT is disabled, you won't be able to use PAT authentication. If you have OAuth access policy restrictions, you will need the OAuth App for each client (MCP host application) to be enabled (except Visual Studio Code and Visual Studio).

For information on setting up the GitHub MCP server locally, see the [GitHub MCP server documentation](https://github.com/mcp/io.github.github/github-mcp-server?ref_product=copilot&ref_type=engagement&ref_style=text).

### Remote MCP server configuration with OAuth

You do not need to create a PAT or install any additional software to use the remote GitHub MCP server with OAuth. You can set it up directly in Visual Studio.

1. In the Visual Studio menu bar, click **View**, then click **GitHub Copilot Chat**.
1. At the bottom of the chat panel, select **Agent** from the mode dropdown.
1. In the Copilot Chat window, click the tools icon, then click the plus icon in the tool picker window.
1. In the "Configure MCP server" pop-up window, fill out the fields.
    1. For "Server ID", type `github`.
    1. For "Type", select "HTTP/SSE" from the dropdown.
    1. For "URL", type `https://api.githubcopilot.com/mcp/`.
1. Click **Save**. The configuration in the `mcp.json` file should look like this:

      ```json copy
          {
            "servers": {
              "github": {
                "url": "https://api.githubcopilot.com/mcp/"
              }
            }
          }
      ```

1. In the `mcp.json` file, click **Auth** from the CodeLens above the server to authenticate to the server. A pop-up will come up allowing you to authenticate with your GitHub account.

### Remote MCP server configuration with PAT

To configure the remote GitHub MCP server with a PAT, ensure you have created a PAT with the necessary scopes for the access you want to grant to the MCP server. For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

1. In the Visual Studio menu bar, click **View**, then click **GitHub Copilot Chat**.
1. At the bottom of the chat panel, select **Agent** from the mode dropdown.
1. In the Copilot Chat window, click the tools icon, then click the plus icon in the tool picker window.
1. In the "Configure MCP server" pop-up window, fill out the fields.
    1. For "Server ID", type `github`.
    1. For "Type", select "HTTP/SSE" from the dropdown.
    1. For "URL", type `https://api.githubcopilot.com/mcp/`.
    1. Add a new header under "Headers", called "Authorization" and set to the value `Bearer YOUR_GITHUB_PAT`, replacing "YOUR_GITHUB_PAT" with your PAT.
1. Click **Save**. The configuration in the `mcp.json` file should look like this:

    ```json copy
      {
        "servers": {
            "github": {
                "url": "https://api.githubcopilot.com/mcp/",
                "requestInit": {
                    "headers": {
                        "Authorization": "Bearer YOUR_GITHUB_PAT"
                    }
                }
            }
        }
      }
    ```

For more information on configuring MCP servers in Visual Studio, see [Use MCP servers in Visual Studio (Preview)](https://learn.microsoft.com/en-us/visualstudio/ide/mcp-servers?view=vs-2022) in the Visual Studio documentation.

{% endvisualstudio %}

{% jetbrains %}

## About the GitHub MCP server

The GitHub MCP server is a Model Context Protocol (MCP) server provided and maintained by GitHub. MCP allows you to integrate AI capabilities with other tools and services, enhancing your development experience by providing context-aware AI assistance.

For a full introduction to the GitHub MCP server and an overview of MCP, see [MCP](https://docs.github.com/en/copilot/concepts/context/mcp).


## Prerequisites

* **Access to Copilot**. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

* **A compatible JetBrains IDE**. GitHub Copilot is compatible with the following IDEs:

  * IntelliJ IDEA (Ultimate, Community, Educational)
* Android Studio
* CLion
* Code With Me Guest
* DataGrip
* DataSpell
* GoLand
* JetBrains Client
* MPS
* PhpStorm
* PyCharm (Professional, Community, Educational)
* Rider
* RubyMine
* RustRover
* WebStorm

See the [JetBrains IDEs](https://www.jetbrains.com/products/?ref_product=copilot&ref_type=engagement&ref_style=button) tool finder to download.

* **Latest version of the GitHub Copilot extension**. See the [GitHub Copilot plugin](https://plugins.jetbrains.com/plugin/17718-github-copilot?ref_product=copilot&ref_type=engagement&ref_style=text) in the JetBrains Marketplace. For installation instructions, see [Install Copilot Extension?Tool=Jetbrains](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=jetbrains).
* **Sign in to GitHub in your JetBrains IDE**. For authentication instructions, see [Install Copilot Extension?Tool=Jetbrains](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=jetbrains#installing-the-github-copilot-plugin-in-your-jetbrains-ide).

* If you are a member of an organization or enterprise with a Copilot Business or Copilot Enterprise plan, the "MCP servers in Copilot" policy must be enabled in order to use MCP with Copilot.


## Setting up the GitHub MCP server in JetBrains IDEs

The instructions below guide you through setting up the GitHub MCP server in JetBrains IDEs. Other MCP-compatible editors may have similar steps, but the exact process may vary.

The remote GitHub MCP server uses one-click OAuth authentication by default, but you can also manually configure it to use a personal access token (PAT) for authentication. If you use OAuth, the MCP server can only access the scopes you approve during sign-in. In organization-owned contexts, access may also be limited by admin policies that control which scopes and apps are permitted. If you use a PAT, the MCP server will have access to the scopes granted by the PAT, which is also subject to any PAT restrictions configured by the organization.

> [!NOTE]
> If you are an Enterprise Managed User, then PAT is disabled by default, unless enabled by an enterprise administrator. If PAT is disabled, you won't be able to use PAT authentication. If you have OAuth access policy restrictions, you will need the OAuth App for each client (MCP host application) to be enabled (except Visual Studio Code and Visual Studio).

For information on setting up the GitHub MCP server locally, see the [GitHub MCP server documentation](https://github.com/mcp/io.github.github/github-mcp-server?ref_product=copilot&ref_type=engagement&ref_style=text).

### Remote MCP server configuration with OAuth

You do not need to create a PAT or install any additional software to use the remote GitHub MCP server with OAuth. You can set it up directly in JetBrains IDEs.

1. In the lower right corner, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}**.
1. From the menu, select "Open Chat", make sure you are in Agent mode, then click the tools icon (called "Configure your MCP server") at the bottom of the chat window.
1. Click **Add MCP Tools**.

1. In the `mcp.json` file, add the following configuration:

    ```json copy
{
  "servers": {
      "github": {
          "type": "http",
          "url": "https://api.githubcopilot.com/mcp/"
      }
  }
}
```


1. In the "GitHub Copilot" popup that says the "MCP server definition wants to authenticate to GitHub, click **Allow**.
1. If you have not yet authorized the GitHub Copilot plugin, in the browser popup, click **Continue** next to your personal account.

### Remote MCP server configuration with PAT

To configure the remote GitHub MCP server with a PAT, ensure you have created a PAT with the necessary scopes for the access you want to grant to the MCP server. For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

1. In the lower right corner, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}**.
1. From the menu, select "Open Chat", make sure you are in Agent mode, then click the tools icon (called "Configure your MCP server") at the bottom of the chat window.
1. Click **Add MCP Tools**.

1. In the `mcp.json` file, add the following configuration, replacing `YOUR_GITHUB_PAT` with the PAT you created:

  ```json copy
    {
      "servers": {
          "github": {
              "url": "https://api.githubcopilot.com/mcp/",
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

## About the GitHub MCP server

The GitHub MCP server is a Model Context Protocol (MCP) server provided and maintained by GitHub. MCP allows you to integrate AI capabilities with other tools and services, enhancing your development experience by providing context-aware AI assistance.

For a full introduction to the GitHub MCP server and an overview of MCP, see [MCP](https://docs.github.com/en/copilot/concepts/context/mcp).


## Prerequisites

* **Access to Copilot**. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

* **GitHub Copilot for Xcode extension**. See [Install Copilot Extension](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension).
* If you are a member of an organization or enterprise with a Copilot Business or Copilot Enterprise plan, the "MCP servers in Copilot" policy must be enabled in order to use MCP with Copilot.


## Setting up the GitHub MCP server in Xcode

The instructions below guide you through setting up the GitHub MCP server in Xcode. Other MCP-compatible editors may have similar steps, but the exact process may vary.

The remote GitHub MCP server uses one-click OAuth authentication by default, but you can also manually configure it to use a personal access token (PAT) for authentication. If you use OAuth, the MCP server can only access the scopes you approve during sign-in. In organization-owned contexts, access may also be limited by admin policies that control which scopes and apps are permitted. If you use a PAT, the MCP server will have access to the scopes granted by the PAT, which is also subject to any PAT restrictions configured by the organization.

> [!NOTE]
> If you are an Enterprise Managed User, then PAT is disabled by default, unless enabled by an enterprise administrator. If PAT is disabled, you won't be able to use PAT authentication. If you have OAuth access policy restrictions, you will need the OAuth App for each client (MCP host application) to be enabled (except Visual Studio Code and Visual Studio).

For information on setting up the GitHub MCP server locally, see the [GitHub MCP server documentation](https://github.com/mcp/io.github.github/github-mcp-server?ref_product=copilot&ref_type=engagement&ref_style=text).

### Remote MCP server configuration with OAuth

You do not need to create a PAT or install any additional software to use the remote GitHub MCP server with OAuth. You can set it up directly in Xcode.

1. Open the GitHub Copilot for Xcode extension and go to "Settings".
   * Alternatively, in an active Xcode workspace, you can find the settings by clicking **Editor** in the menu bar, selecting **GitHub Copilot**, then clicking **Open GitHub Copilot for Xcode Settings**.
1. Select the **MCP** tab, then click **Edit Config**.

1. Add the following configuration:

    ```json copy
{
  "servers": {
      "github": {
          "type": "http",
          "url": "https://api.githubcopilot.com/mcp/"
      }
  }
}
```


1. In the "GitHub Copilot" popup that says the "MCP Server Definition wants to authenticate to GitHub", click **Continue**.
1. If you have not yet authorized the GitHub Copilot plugin, in the browser popup, click **Continue** next to your personal account.

### Remote MCP server configuration with PAT

To configure the remote GitHub MCP server with a PAT, ensure you have created a PAT with the necessary scopes for the access you want to grant to the MCP server. For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

1. Open the GitHub Copilot for Xcode extension and go to "Settings".
   * Alternatively, in an active Xcode workspace, you can find the settings by clicking **Editor** in the menu bar, selecting **GitHub Copilot**, then clicking **Open GitHub Copilot for Xcode Settings**.
1. Select the **MCP** tab, then click **Edit Config**.

1. Add the following configuration, replacing `YOUR_GITHUB_PAT` with the PAT you created:

```json copy
  {
    "servers": {
        "github": {
            "url": "https://api.githubcopilot.com/mcp/",
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

## About the GitHub MCP server

The GitHub MCP server is a Model Context Protocol (MCP) server provided and maintained by GitHub. MCP allows you to integrate AI capabilities with other tools and services, enhancing your development experience by providing context-aware AI assistance.

For a full introduction to the GitHub MCP server and an overview of MCP, see [MCP](https://docs.github.com/en/copilot/concepts/context/mcp).


## Prerequisites

* **Access to Copilot**. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

* **Compatible version of Eclipse**. To use the GitHub Copilot extension, you must have Eclipse version 2024-09 or above. See the [Eclipse download page](https://www.eclipse.org/downloads/packages/).
* If you are a member of an organization or enterprise with a Copilot Business or Copilot Enterprise plan, the "MCP servers in Copilot" policy must be enabled in order to use MCP with Copilot.

* **Latest version of the GitHub Copilot extension**. Download this from the [Eclipse Marketplace](https://aka.ms/copiloteclipse?ref_product=copilot&ref_type=engagement&ref_style=text). For more information, see [Install Copilot Extension?Tool=Eclipse](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=eclipse).
* **Sign in to GitHub from Eclipse**.

## Setting up the GitHub MCP server in Eclipse

The instructions below guide you through setting up the GitHub MCP server in Eclipse. Other MCP-compatible editors may have similar steps, but the exact process may vary.

The remote GitHub MCP server uses one-click OAuth authentication by default, but you can also manually configure it to use a personal access token (PAT) for authentication. If you use OAuth, the MCP server can only access the scopes you approve during sign-in. In organization-owned contexts, access may also be limited by admin policies that control which scopes and apps are permitted. If you use a PAT, the MCP server will have access to the scopes granted by the PAT, which is also subject to any PAT restrictions configured by the organization.

> [!NOTE]
> If you are an Enterprise Managed User, then PAT is disabled by default, unless enabled by an enterprise administrator. If PAT is disabled, you won't be able to use PAT authentication. If you have OAuth access policy restrictions, you will need the OAuth App for each client (MCP host application) to be enabled (except Visual Studio Code and Visual Studio).

For information on setting up the GitHub MCP server locally, see the [GitHub MCP server repository](https://github.com/github/github-mcp-server#usage-in-other-mcp-hosts-1).

### Remote MCP server configuration with OAuth

You do not need to create a PAT or install any additional software to use the remote GitHub MCP server with OAuth. You can set it up directly in Eclipse.

1. Click the Copilot icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the status bar at the bottom of Eclipse.
1. From the menu, select **Open Chat** and, in the chat window, click the "Configure Tools..." icon.
   * Alternatively, you can select **Edit preferences**, then in the left pane, expand GitHub Copilot and click **MCP**.

1. Add the following configuration under "Server Configurations":

    ```json copy
{
  "servers": {
      "github": {
          "type": "http",
          "url": "https://api.githubcopilot.com/mcp/"
      }
  }
}
```


1. Click **Apply**.
1. In the "GitHub Copilot" popup that says the "MCP Server Definition wants to authenticate to GitHub", click **OK**.
1. If you have not yet authorized the GitHub Copilot plugin, in the browser popup, click **Continue** next to your personal account.

### Remote MCP server configuration with PAT

To configure the remote GitHub MCP server with a PAT, ensure you have created a PAT with the necessary scopes for the access you want to grant to the MCP server. For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

1. Click the Copilot icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the status bar at the bottom of Eclipse.
1. From the menu, select **Open Chat** and, in the chat window, click the "Configure Tools..." icon.
   * Alternatively, you can select **Edit preferences**, then in the left pane, expand GitHub Copilot and click **MCP**.

1. Add the following configuration under "Server Configurations", replacing `YOUR_GITHUB_PAT` with the PAT you created:

  ```json copy
    {
      "servers": {
          "github": {
              "url": "https://api.githubcopilot.com/mcp/",
              "requestInit": {
                  "headers": {
                      "Authorization": "Bearer YOUR_GITHUB_PAT"
                  }
              }
          }
      }
    }
  ```

{% endeclipse %}

## Enterprise configuration

If you are using GitHub Enterprise Server or GitHub Enterprise Cloud with data residency, additional configuration is required. For more information, see [Enterprise Configuration](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/enterprise-configuration).

## Next steps

* To learn how to use the GitHub MCP server in Visual Studio Code, see [Use The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/use-the-github-mcp-server).
* For information on configuring individual toolsets with read-only or read/write access, see [Configure Toolsets](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/configure-toolsets).
