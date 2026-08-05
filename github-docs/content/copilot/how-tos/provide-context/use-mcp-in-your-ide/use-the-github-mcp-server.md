# Using the GitHub MCP Server in your IDE

The GitHub MCP server is available to all GitHub users regardless of plan type. However, specific tools within the MCP server inherit the same access requirements as their corresponding GitHub features. If a feature requires a paid GitHub or Copilot license, the equivalent MCP tool will require the same subscription. For example, tools that interact with Copilot cloud agent require a paid Copilot license.

{% vscode %}

## About the GitHub MCP server

The GitHub MCP server is a Model Context Protocol (MCP) server provided and maintained by GitHub. MCP allows you to integrate AI capabilities with other tools and services, enhancing your development experience by providing context-aware AI assistance.

For a full introduction to the GitHub MCP server and an overview of MCP, see [MCP](https://docs.github.com/en/copilot/concepts/context/mcp).


## Prerequisites

* A GitHub account.
* Visual Studio Code.
* The GitHub MCP server, configured in your editor. See [Set Up The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/set-up-the-github-mcp-server).
* If you are a member of an organization or enterprise with a Copilot Business or Copilot Enterprise plan, the "MCP servers in Copilot" policy must be enabled in order to use MCP with Copilot.


## Using the GitHub MCP server in Visual Studio Code

The GitHub MCP server enables you to perform a wide range of actions on GitHub, via Copilot Chat in Visual Studio Code.

1. Open Copilot Chat by clicking the {% octicon "copilot" aria-hidden="true" aria-label="copilot" %} icon in the title bar of Visual Studio Code.

1. In the Copilot Chat box, select **Agent** from the agent dropdown menu.

1. To see the available actions, in the Copilot Chat box, click the **Configure tools** icon.
    * If you expand the GitHub MCP server entry, you will see a list of available tools.
1. In the Copilot Chat box, type a command or question related to the action you want to perform, and press **Enter**.
    * For example, you can ask the GitHub MCP server to create a new issue, list pull requests, or retrieve repository information.
1. The GitHub MCP server will process your request and provide a response in the chat interface.
    * In the Copilot Chat box, you may be asked to give additional permissions or provide more information to complete the action.
1. Follow the prompts to complete the action.

## Troubleshooting

If you encounter issues while using the GitHub MCP server, there are a few common troubleshooting steps you can take.

### Authorization issues

If you are having trouble authorizing the MCP server, ensure that:

* You are signed in to GitHub in your choice of IDE.

If you are authenticating with a personal access token (PAT), ensure that:
* Your GitHub PAT is valid and has the necessary scopes for the actions you want to perform.
* You have entered the correct PAT.

### Copilot agent mode problems

If you are having trouble with the Copilot Chat agent mode, ensure that:
* You have selected the correct agent in the Copilot Chat box.
* You have configured the MCP server correctly in your IDE.
* You have the necessary permissions to perform the actions you are trying to execute.

### Push protection block

If you are using the GitHub MCP server and push protection blocks a secret that you believe is safe to expose, you may be able to bypass the block by specifying a reason for allowing the secret. See [Push Protection And The GitHub MCP Server](https://docs.github.com/en/code-security/concepts/secret-security/push-protection-and-the-github-mcp-server#resolving-a-block).

### General tips

If you are experiencing other issues with the GitHub MCP server, here are some general tips to help you troubleshoot:

* Check the output logs of the MCP server for any error messages.
* If you are running the MCP server locally, ensure that your local environment is set up correctly for running Docker containers.
* Try restarting the MCP server or your IDE.


{% endvscode %}

{% visualstudio %}

## About the GitHub MCP server

The GitHub MCP server is a Model Context Protocol (MCP) server provided and maintained by GitHub. MCP allows you to integrate AI capabilities with other tools and services, enhancing your development experience by providing context-aware AI assistance.

For a full introduction to the GitHub MCP server and an overview of MCP, see [MCP](https://docs.github.com/en/copilot/concepts/context/mcp).


## Prerequisites

* **Access to Copilot**. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

* **Visual Studio version 17.14 or later**. For more information on installing Visual Studio, see the [Visual Studio downloads page](https://visualstudio.microsoft.com/downloads/).
* The GitHub MCP server, configured in your editor. See [Set Up The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/set-up-the-github-mcp-server).
* **Sign in to GitHub from Visual Studio**.
* If you are a member of an organization or enterprise with a Copilot Business or Copilot Enterprise plan, the "MCP servers in Copilot" policy must be enabled in order to use MCP with Copilot.


## Using the GitHub MCP server in Visual Studio

The GitHub MCP server enables you to perform a wide range of actions on GitHub, via Copilot Chat in Visual Studio.

1. In the Visual Studio menu bar, click **View**, then click **GitHub Copilot Chat**.
1. At the bottom of the chat panel, select **Agent** from the mode dropdown.
1. In the Copilot Chat window, click the tools icon.
    * Under **GitHub**, you will see a list of available tools.
1. In the Copilot Chat box, type a command or question related to the action you want to perform, and press **Enter**.
    * For example, you can ask the GitHub MCP server to create a new issue, list pull requests, or retrieve repository information.
1. The GitHub MCP server will process your request and provide a response in the chat interface.
    * In the Copilot Chat box, you may be asked to give additional permissions or provide more information to complete the action.
1. Follow the prompts to complete the action.

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

* **The GitHub MCP server**, configured in your editor. See [Set Up The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/set-up-the-github-mcp-server).
* If you are a member of an organization or enterprise with a Copilot Business or Copilot Enterprise plan, the "MCP servers in Copilot" policy must be enabled in order to use MCP with Copilot.


## Using the GitHub MCP server in JetBrains IDEs

The GitHub MCP server enables you to perform a wide range of actions on GitHub, via Copilot Chat in JetBrains IDEs.

1. Open the Copilot Chat window by clicking the **GitHub Copilot Chat** icon at the right side of the JetBrains IDE window.

   ![Screenshot of the GitHub Copilot Chat icon in the Activity Bar.](/assets/images/help/copilot/jetbrains-copilot-chat-icon.png)
1. At the top of the chat panel, click the **Agent** tab.
1. To see the available actions, in the Copilot Chat box, click the tools icon.
    * You will see a list of available actions from the GitHub MCP server.
1. In the Copilot Chat box, type a command or question related to the action you want to perform, and press **Enter**.
    * For example, you can ask the GitHub MCP server to create a new issue, list pull requests, or retrieve repository information.
1. The GitHub MCP server will process your request and provide a response in the chat interface.
    * In the Copilot Chat box, you may be asked to give additional permissions or provide more information to complete the action.
1. Follow the prompts to complete the action.

## Troubleshooting

If you encounter issues while using the GitHub MCP server, there are a few common troubleshooting steps you can take.

### Authorization issues

If you are having trouble authorizing the MCP server, ensure that:

* You are signed in to GitHub in your choice of IDE.

If you are authenticating with a personal access token (PAT), ensure that:
* Your GitHub PAT is valid and has the necessary scopes for the actions you want to perform.
* You have entered the correct PAT.

### Copilot agent mode problems

If you are having trouble with the Copilot Chat agent mode, ensure that:
* You have selected the correct agent in the Copilot Chat box.
* You have configured the MCP server correctly in your IDE.
* You have the necessary permissions to perform the actions you are trying to execute.

### Push protection block

If you are using the GitHub MCP server and push protection blocks a secret that you believe is safe to expose, you may be able to bypass the block by specifying a reason for allowing the secret. See [Push Protection And The GitHub MCP Server](https://docs.github.com/en/code-security/concepts/secret-security/push-protection-and-the-github-mcp-server#resolving-a-block).

### General tips

If you are experiencing other issues with the GitHub MCP server, here are some general tips to help you troubleshoot:

* Check the output logs of the MCP server for any error messages.
* If you are running the MCP server locally, ensure that your local environment is set up correctly for running Docker containers.
* Try restarting the MCP server or your IDE.


{% endjetbrains %}

{% xcode %}

## About the GitHub MCP server

The GitHub MCP server is a Model Context Protocol (MCP) server provided and maintained by GitHub. MCP allows you to integrate AI capabilities with other tools and services, enhancing your development experience by providing context-aware AI assistance.

For a full introduction to the GitHub MCP server and an overview of MCP, see [MCP](https://docs.github.com/en/copilot/concepts/context/mcp).


## Prerequisites

* **Access to Copilot**. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

* **GitHub Copilot for Xcode extension**. See [Install Copilot Extension](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension).
* The GitHub MCP server, configured in your editor. See [Set Up The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/set-up-the-github-mcp-server).
* If you are a member of an organization or enterprise with a Copilot Business or Copilot Enterprise plan, the "MCP servers in Copilot" policy must be enabled in order to use MCP with Copilot.


## Using the GitHub MCP server in Xcode

The GitHub MCP server enables you to perform a wide range of actions on GitHub, via Copilot Chat in Xcode.

1. To open the chat view, click **Editor** in the menu bar, then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot** then **Open Chat**. Copilot Chat opens in a new window.
1. At the bottom of the chat panel, select **Agent**.
1. To see the available actions, in the Copilot Chat box, click the tools icon.
    * You will see a list of available actions from the GitHub MCP server.
1. In the Copilot Chat box, type a command or question related to the action you want to perform, and press **Enter**.
    * For example, you can ask the GitHub MCP server to create a new issue, list pull requests, or retrieve repository information.
1. The GitHub MCP server will process your request and provide a response in the chat interface.
    * In the Copilot Chat box, you may be asked to give additional permissions or provide more information to complete the action.
1. Follow the prompts to complete the action.

## Troubleshooting

If you encounter issues while using the GitHub MCP server, there are a few common troubleshooting steps you can take.

### Authorization issues

If you are having trouble authorizing the MCP server, ensure that:

* You are signed in to GitHub in your choice of IDE.

If you are authenticating with a personal access token (PAT), ensure that:
* Your GitHub PAT is valid and has the necessary scopes for the actions you want to perform.
* You have entered the correct PAT.

### Copilot agent mode problems

If you are having trouble with the Copilot Chat agent mode, ensure that:
* You have selected the correct agent in the Copilot Chat box.
* You have configured the MCP server correctly in your IDE.
* You have the necessary permissions to perform the actions you are trying to execute.

### Push protection block

If you are using the GitHub MCP server and push protection blocks a secret that you believe is safe to expose, you may be able to bypass the block by specifying a reason for allowing the secret. See [Push Protection And The GitHub MCP Server](https://docs.github.com/en/code-security/concepts/secret-security/push-protection-and-the-github-mcp-server#resolving-a-block).

### General tips

If you are experiencing other issues with the GitHub MCP server, here are some general tips to help you troubleshoot:

* Check the output logs of the MCP server for any error messages.
* If you are running the MCP server locally, ensure that your local environment is set up correctly for running Docker containers.
* Try restarting the MCP server or your IDE.


{% endxcode %}

{% eclipse %}

## About the GitHub MCP server

The GitHub MCP server is a Model Context Protocol (MCP) server provided and maintained by GitHub. MCP allows you to integrate AI capabilities with other tools and services, enhancing your development experience by providing context-aware AI assistance.

For a full introduction to the GitHub MCP server and an overview of MCP, see [MCP](https://docs.github.com/en/copilot/concepts/context/mcp).


## Prerequisites

* **Access to Copilot**. See [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

* **Compatible version of Eclipse**. To use the GitHub Copilot extension, you must have Eclipse version 2024-09 or above. See the [Eclipse download page](https://www.eclipse.org/downloads/packages/).
* If you are a member of an organization or enterprise with a Copilot Business or Copilot Enterprise plan, the "MCP servers in Copilot" policy must be enabled in order to use MCP with Copilot.

* The GitHub MCP server, configured in your editor. See [Set Up The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/set-up-the-github-mcp-server).
* **Latest version of the GitHub Copilot extension**. Download this from the [Eclipse Marketplace](https://aka.ms/copiloteclipse?ref_product=copilot&ref_type=engagement&ref_style=text). For more information, see [Install Copilot Extension?Tool=Eclipse](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=eclipse).
* **Sign in to GitHub from Eclipse**.

## Using the GitHub MCP server in Eclipse

The GitHub MCP server enables you to perform a wide range of actions on GitHub, via Copilot Chat in Eclipse.

1. To open the Copilot Chat panel, click the Copilot icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the status bar at the bottom of Eclipse, then click **Open Chat**.
1. At the bottom of the chat panel, select **Agent** from the mode dropdown.
1. To see the available actions, in the Copilot Chat box, click the tools icon.
    * Under `github`, you will see a list of available actions.
1. In the Copilot Chat box, type a command or question related to the action you want to perform, and press **Enter**.
    * For example, you can ask the GitHub MCP server to create a new issue, list pull requests, or retrieve repository information.
1. The GitHub MCP server will process your request and provide a response in the chat interface.
    * In the Copilot Chat box, you may be asked to give additional permissions or provide more information to complete the action.
1. Follow the prompts to complete the action.

## Troubleshooting

If you encounter issues while using the GitHub MCP server, there are a few common troubleshooting steps you can take.

### Authorization issues

If you are having trouble authorizing the MCP server, ensure that:

* You are signed in to GitHub in your choice of IDE.

If you are authenticating with a personal access token (PAT), ensure that:
* Your GitHub PAT is valid and has the necessary scopes for the actions you want to perform.
* You have entered the correct PAT.

### Copilot agent mode problems

If you are having trouble with the Copilot Chat agent mode, ensure that:
* You have selected the correct agent in the Copilot Chat box.
* You have configured the MCP server correctly in your IDE.
* You have the necessary permissions to perform the actions you are trying to execute.

### Push protection block

If you are using the GitHub MCP server and push protection blocks a secret that you believe is safe to expose, you may be able to bypass the block by specifying a reason for allowing the secret. See [Push Protection And The GitHub MCP Server](https://docs.github.com/en/code-security/concepts/secret-security/push-protection-and-the-github-mcp-server#resolving-a-block).

### General tips

If you are experiencing other issues with the GitHub MCP server, here are some general tips to help you troubleshoot:

* Check the output logs of the MCP server for any error messages.
* If you are running the MCP server locally, ensure that your local environment is set up correctly for running Docker containers.
* Try restarting the MCP server or your IDE.


{% endeclipse %}

## Further reading

* [Enhance Agent Mode With MCP](https://docs.github.com/en/copilot/tutorials/enhance-agent-mode-with-mcp)
* [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers)
