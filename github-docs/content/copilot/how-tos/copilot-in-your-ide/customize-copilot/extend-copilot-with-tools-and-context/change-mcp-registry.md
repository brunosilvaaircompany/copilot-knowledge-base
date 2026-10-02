# Changing your MCP registry in your IDE

MCP registries for Copilot in your IDE streamline the process of discovering and setting up MCP servers. By default, Copilot uses the GitHub MCP Registry, but you can configure your own MCP registry to customize the list of servers available in your environment.

{% jetbrains %}

>[!NOTE] MCP registry availability in Copilot is currently in public preview, and requires the [latest nightly build](http://aka.ms/copilot-jb-mcpreg-allowlist-preview?ref_product=copilot&ref_type=engagement&ref_style=text) of Copilot for JetBrains IDEs.

1. In your JetBrains IDE, open Copilot Chat.
1. In the Copilot Chat window, click the **MCP** icon.
1. In the MCP Registry window, click the **settings {% octicon "gear" aria-label="The Settings gear" %}** icon.
1. In the settings, next to **MCP Registry URL**, enter the URL of the MCP registry you want to use.
1. Click **Apply** to save your changes, and then click **OK** to close the settings window.
1. In the MCP Registry window, you should now see the updated list of MCP servers from the registry you configured. You can select an MCP server from this list to use with Copilot Chat.

{% endjetbrains %}

{% xcode %}

>[!NOTE] MCP registry availability in Copilot is currently in public preview, and requires the [latest pre-release version](https://github.com/github/CopilotForXcode/releases?ref_product=copilot&ref_type=engagement&ref_style=text) of Copilot for Xcode.

1. In Xcode, open Copilot Chat.
1. In the Copilot Chat window, click the {% octicon "gear" aria-label="The Settings gear" %} icon to open settings.
1. In the settings window, select the **Tools** tab.
1. Next to **MCP Registry URL (Optional)**, click **Edit URL**.
1. In the dialog that appears, enter the URL of the MCP registry you want to use and press <kbd>Return</kbd>.
1. Click **Browse MCP Servers** to view the updated list of MCP servers from the registry you configured. You can select an MCP server from this list to use with Copilot Chat.

{% endxcode %}

{% eclipse %}

>[!NOTE] MCP registry availability in Copilot is currently in public preview, and requires the [latest pre-release version](https://aka.ms/copilot-ecl-mcpreg-allowlist-preview?ref_product=copilot&ref_type=engagement&ref_style=text) of Copilot for Eclipse.

1. In Eclipse, open Copilot Chat.
1. In the Copilot Chat window, click the **MCP** icon.
1. In the MCP Registry window, click **{% octicon "gear" aria-label="The Settings gear" %} Configure Registry URL**.
1. In the "Preferences" window, under "MCP Registry URL (Optional)", enter the URL of the MCP registry you want to use.
1. Click **Apply and Close** to save your changes and close the preferences window.
1. In the MCP Registry window, you should now see an updated list of MCP servers from the registry you configured. You can select an MCP server from this list to use with Copilot Chat.

{% endeclipse %}
