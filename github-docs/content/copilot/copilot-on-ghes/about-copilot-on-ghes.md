# About GitHub Copilot on GitHub Enterprise Server

If your enterprise is primarily hosted on GitHub Enterprise Server, you must take extra steps for your developers to use GitHub Copilot.

GitHub Copilot is available on GitHub's cloud-hosted platforms: GitHub.com and GHE.com.

* Copilot licenses can **only** be assigned to users through one of these platforms. A Copilot license is required for all Copilot functionality, with the exception of local "bring your own key" (BYOK) setups.
* Administrative features such as policies and managed settings are configured on these platforms.
* Copilot features, such as Copilot Chat, are integrated into these platforms, and **not** into GitHub Enterprise Server.

However, if your enterprise is primarily hosted on GitHub Enterprise Server, your developers can still benefit from GitHub Copilot. The following sections explain your options.

> [!IMPORTANT]
> GitHub Copilot documentation on this version of GitHub Docs is limited to content that applies specifically to GitHub Enterprise Server. View documentation for usage and administration on the [GitHub Enterprise Cloud version](/enterprise-cloud@latest/copilot) of the site.

## Assigning licenses on a cloud platform

Your GitHub Enterprise license also entitles you to an enterprise account on GitHub.com or GHE.com.

You can use your cloud-hosted enterprise account to assign Copilot licenses to users and configure policies for Copilot. Users will then be able to authenticate to their cloud account to use Copilot in local clients such as Copilot CLI.

Copilot will have access to locally checked-out code and files. Users can configure their local [GitHub MCP server](https://github.com/github/github-mcp-server?tab=readme-ov-file#local-github-mcp-server) so that Copilot can connect to your instance and perform actions like opening issues or pull requests.

If you enable license sync with GitHub Connect, each individual will only consume one GitHub Enterprise license, even with an account on both cloud and server. See [About GitHub Connect](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/about-github-connect).

## Using Copilot in an air-gapped environment

Alternatively, you can configure Copilot CLI to work with GitHub Enterprise Server in disconnected or air-gapped environments, without connecting to GitHub's cloud platforms or requiring a Copilot license.



An administrator configures a model provider for the instance, and users connect Copilot CLI with their GitHub Enterprise Server credentials.

For more information, see [Set Up Copilot CLI](https://docs.github.com/en/copilot/copilot-on-ghes/set-up-copilot-cli).

> [!NOTE]
> This feature is in technical preview and subject to change.
