# Installing the GitHub Copilot extension in your environment

## Prerequisite

To use Copilot in your IDE, you need either limited access through Copilot Free or a paid Copilot plan for full access. For more information about how to get access and choose the right plan, see [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

{% azure_data_studio %}

## About the GitHub Copilot extension in Azure Data Studio

Installing the GitHub Copilot extension in Azure Data Studio allows you to receive coding suggestions from Copilot as you type.

To see instructions for other popular coding environments, use the tool switcher at the top of the page.

## Installing the GitHub Copilot extension in Azure Data Studio

1. Make sure you have access to GitHub Copilot. For information, see [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

1. Make sure you have a compatible version of Azure Data Studio. To use GitHub Copilot in Azure Data Studio, you must have Azure Data Studio version 1.44.0 or later installed. See the [Azure Data Studio download page](https://docs.microsoft.com/sql/azure-data-studio/download-azure-data-studio) in the Azure Data Studio documentation.

1. Install the GitHub Copilot extension in Azure Data Studio. See [Install the GitHub Copilot extension](https://learn.microsoft.com/en-us/azure-data-studio/extensions/github-copilot-extension-overview#install-the-github-copilot-extension) in the Microsoft documentation.

1. If a popup window in Azure Data Studio prompts you to sign in to use GitHub Copilot, click **Sign in to GitHub** and follow the instructions on screen.

   * If you have previously authorized Azure Data Studio for your account on GitHub, GitHub Copilot will be automatically authorized.
   * If you don't get the prompt to authorize, you can view notifications by clicking the bell icon in the bottom panel of the Azure Data Studio window.

1. If you are following the authorization steps, in your browser, GitHub will request the necessary permissions for GitHub Copilot. To approve these permissions, click **Authorize Azure Data Studio**.

{% endazure_data_studio %}

{% jetbrains %}

## About the GitHub Copilot extension in JetBrains IDEs

Installing the GitHub Copilot extension in JetBrains IDEs allows you to chat with Copilot in your IDE and receive coding suggestions from Copilot as you type.

To see instructions for other popular coding environments, use the tool switcher at the top of the page.

### Version compatibility

For information about version compatibility of the GitHub Copilot extension in JetBrains IDEs, see [GitHub Copilot Versions](https://plugins.jetbrains.com/plugin/17718-github-copilot/versions) in the JetBrains Marketplace.

### About the license for the GitHub Copilot plugin in JetBrains IDEs

GitHub, Inc. is the licensor of the JetBrains plugin. The end user license agreement for this plugin is the [GitHub Terms for Additional Products and Features](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot) and use of this plugin is subject to those terms. JetBrains has no responsibility or liability in connection with the plugin or such agreement. By using the plugin, you agree to the foregoing terms.

## Installing the GitHub Copilot plugin in your JetBrains IDE

The following procedure will guide you through installation of the GitHub Copilot plugin in IntelliJ IDEA. Steps to install the plugin in another supported IDE may differ.

1. Make sure you have access to GitHub Copilot. For information, see [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

1. Make sure you have a JetBrains IDE that is compatible with GitHub Copilot. GitHub Copilot is compatible with the following IDEs:

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


1. In your JetBrains IDE, open the **Plugins** settings, search the **Marketplace** for the GitHub Copilot plugin, then click **Install**. For more information, see [GitHub Copilot plugin](https://plugins.jetbrains.com/plugin/17718-github-copilot?ref_product=copilot&ref_type=engagement&ref_style=text) in the JetBrains Marketplace.

1. After GitHub Copilot is installed, click **Restart IDE**.

1. After your JetBrains IDE has restarted, click the **Tools** menu. Click **GitHub Copilot**, then click **Login to GitHub**.

   > [!NOTE] If you're using a Copilot plan for a managed user account on GHE.com, you'll need to update some settings before you sign in.
 See [Authenticate To Ghecom?Tool=Jetbrains](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/authenticate-to-ghecom?tool=jetbrains#authenticating-from-jetbrains-ides).

   ![Screenshot of the expanded "Tools" menu and "GitHub Copilot" sub-menu. The "Login to GitHub" option is highlighted in blue.](/assets/images/help/copilot/jetbrains-tools-menu.png)

1. In the "Sign in to GitHub" dialog box, to copy the device code and open the device activation window, click **Copy and Open**.

   ![Screenshot of the "Sign in to GitHub" dialog. A device code is displayed above a button labeled "Copy and Open".](/assets/images/help/copilot/device-code-copy-and-open.png)

1. A device activation window will open in your browser. If prompted to sign in to GitHub, sign in with your GitHub account, or click **Continue with Google** or **Continue with Apple**.

1. Paste the device code, then click **Continue**.

1. GitHub will request the necessary permissions for GitHub Copilot. To approve these permissions, click **Authorize GitHub Copilot Plugin**.

1. After the permissions have been approved, your JetBrains IDE will show a confirmation. To begin using GitHub Copilot, click **OK**.

## Other ways to access GitHub Copilot in JetBrains IDEs

The plugin provides the full Copilot experience, but you can also access Copilot through JetBrains AI Assistant or Copilot CLI without installing the plugin. For a comparison of what each entry point offers, see [Copilot In Jetbrains](https://docs.github.com/en/copilot/concepts/agents/copilot-in-jetbrains).

{% endjetbrains %}

{% vimneovim %}

## About the GitHub Copilot extension in Vim/Neovim

Installing the GitHub Copilot extension in Vim/Neovim allows you to receive coding suggestions from Copilot as you type.

To see instructions for other popular coding environments, use the tool switcher at the top of the page.

## Installing the GitHub Copilot extension in Vim/Neovim

GitHub recommends that you install the GitHub Copilot plugin with Vim/Neovim's built-in plugin manager. Alternatively, you can use a plugin manager of your choice to install `github/copilot.vim`. For more information, see the [copilot.vim repository](https://github.com/github/copilot.vim).

1. Make sure you have access to GitHub Copilot. For information, see [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

1. Make sure you have a compatible version of Vim/Neovim installed. To use GitHub Copilot in Vim/Neovim you must have Vim version 9.0.0185 / Neovim version 0.6 or above and Node.js version 18 or above. See the [Vim](https://vimhelp.org/) / [Neovim documentation](https://neovim.io/doc/) and the [Node.js website](https://nodejs.org/en/).

1. Install GitHub Copilot using the built-in plugin manager:

   * For **Neovim on macOS or Linux**, run the following command in the terminal.

     ```shell copy
     git clone https://github.com/github/copilot.vim \
     ~/.config/nvim/pack/github/start/copilot.vim
     ```

   * For **Neovim on Windows**, run the following command in Git Bash:

     ```shell copy
     git clone https://github.com/github/copilot.vim.git ^
     %USERPROFILE%/AppData/Local/nvim/pack/github/start/copilot.vim
     ```

   * For **Vim on macOS or Linux**, run the following command in the terminal.

     ```shell copy
     git clone https://github.com/github/copilot.vim \
     ~/.vim/pack/github/start/copilot.vim
     ```

   * For **Vim on Windows**, run the following command in Git Bash:

     ```shell copy
     git clone https://github.com/github/copilot.vim.git ^
     %USERPROFILE%/vimfiles/pack/github/start/copilot.vim
     ```

1. To configure GitHub Copilot, open Vim/Neovim and enter the following command.

   ```shell copy
   :Copilot setup
   ```

1. Enable GitHub Copilot in your Vim/Neovim configuration, or with the Vim/Neovim command.

   ```shell copy
   :Copilot enable
   ```


{% endvimneovim %}

{% visualstudio %}

## About the GitHub Copilot extension in Visual Studio

Installing the GitHub Copilot extension in Visual Studio allows you to receive coding suggestions from Copilot as you type.

To see instructions for other popular coding environments, use the tool switcher at the top of the page.

### Version compatibility

Starting from Visual Studio 2022 Version 17.10, the unified Copilot and GitHub Copilot Chat extension is included by default as a built-in component. For more information, see [Install GitHub Copilot in Visual Studio](https://learn.microsoft.com/en-us/visualstudio/ide/visual-studio-github-copilot-install-and-states?ref_product=copilot&ref_type=engagement&ref_style=text) in the Microsoft documentation.

The following instructions are for versions 2022 17.8 and 2022 17.9 of Visual Studio for Windows.

## Installing the GitHub Copilot extension in Visual Studio

1. Make sure you have access to GitHub Copilot. For information, see [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).

1. Make sure you have a compatible version of Visual Studio installed. To use GitHub Copilot in Visual Studio, you must have version 2022 17.8 or later of Visual Studio for Windows installed. For more information, see [Install Visual Studio](https://learn.microsoft.com/en-us/visualstudio/install/install-visual-studio?ref_product=copilot&ref_type=engagement&ref_style=text) in the Microsoft documentation.


1. Install the GitHub Copilot extension in Visual Studio. See [Install GitHub Copilot in Visual Studio](https://learn.microsoft.com/en-us/visualstudio/ide/visual-studio-github-copilot-install-and-states?ref_product=copilot&ref_type=engagement&ref_style=text) in the Microsoft documentation.

1. After installing the GitHub Copilot extension, to enable GitHub Copilot, ensure you have added your GitHub account to Visual Studio. For more information, see [Add your GitHub accounts to your Visual Studio keychain](https://learn.microsoft.com/en-us/visualstudio/ide/work-with-github-accounts?ref_product=copilot&ref_type=engagement&ref_style=text) in the Microsoft documentation.

   > [!NOTE] If you're using a Copilot plan for a managed user account on GHE.com, you'll need to update some settings before you sign in.
 See [Authenticate To Ghecom?Tool=Visualstudio](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/authenticate-to-ghecom?tool=visualstudio#authenticating-from-visual-studio).

{% endvisualstudio %}

{% vscode %}

## About GitHub Copilot in Visual Studio Code

GitHub Copilot in Visual Studio Code allows you to receive coding suggestions from Copilot as you type. You also automatically get access to GitHub Copilot Chat, which allows you to chat with Copilot.

To see instructions for other popular coding environments, use the tool switcher at the top of the page.

## Setting up GitHub Copilot in Visual Studio Code

When you set up GitHub Copilot in Visual Studio Code for the first time, the required extensions are installed automatically. You don't need to download or install them manually.

For detailed instructions, see [Set up GitHub Copilot in Visual Studio Code](https://code.visualstudio.com/docs/copilot/setup?ref_product=copilot&ref_type=engagement&ref_style=text#_set-up-copilot-in-vs-code) in the Visual Studio Code documentation.

> [!NOTE] If you're using a Copilot plan for a managed user account on GHE.com, you'll need to update some settings before you sign in.
 See [Authenticate To Ghecom?Tool=Vscode](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/authenticate-to-ghecom?tool=vscode#authenticating-from-vs-code).

{% endvscode %}

{% xcode %}

## About the GitHub Copilot extension for Xcode

Installing the GitHub Copilot extension for Xcode allows you to receive coding suggestions from Copilot as you type.

To see instructions for other popular coding environments, use the tool switcher at the top of the page.

### Version compatibility

To use GitHub Copilot for Xcode you must have Xcode version 8.0 or above and macOS Monterey (12.0) or above installed. See [Xcode](https://developer.apple.com/xcode/) on the Apple Developer site.

## Installing the GitHub Copilot extension for Xcode

1. Make sure you have access to GitHub Copilot. For information, see [What Is GitHub Copilot](https://docs.github.com/en/copilot/get-started/what-is-github-copilot#get-access).
1. Make sure you have a compatible version of Xcode installed. To use GitHub Copilot for Xcode you must have Xcode version 8.0 or above and macOS Monterey (12.0) or above. See [Xcode](https://developer.apple.com/xcode/) on the Apple Developer site.
1. Download the latest version of the GitHub Copilot for Xcode extension from the [`github/CopilotForXcode` repository](https://github.com/github/CopilotForXcode/releases/latest/download/GitHubCopilotForXcode.dmg?ref_product=copilot&ref_type=engagement&ref_style=text) and install it. A background item will be added for the application to be able to start itself when Xcode starts.
1. Open the **GitHub Copilot for Xcode** application from the Applications folder and step through the on-screen instructions for setting up the extension.

## Granting required permissions

Two permissions are required to be able to use the extension: "Accessibility" and "Xcode Source Editor Extension". You will be prompted to enable the "Accessibility" permission when you first start the extension.

The "Xcode Source Editor Extension" permission needs to be enabled manually.

1. Open the GitHub Copilot for Xcode application.
1. Click **Extension Permission**.
1. Enable GitHub Copilot and click **Done**.

After granting the required permissions, restart Xcode. You will see a new item in the "Editor" menu called "GitHub Copilot".

## Signing in to GitHub Copilot

Before you can use the GitHub Copilot extension for Xcode, you need to authorize the extension to access your GitHub account.

> [!NOTE] If you're using a Copilot plan for a managed user account on GHE.com, you'll need to update some settings before you sign in.
 See [Authenticate To Ghecom?Tool=Xcode](https://docs.github.com/en/copilot/how-tos/configure-personal-settings/authenticate-to-ghecom?tool=xcode#authenticating-from-xcode).

1. Open the GitHub Copilot for Xcode application.
1. Click **Login to GitHub** and follow the prompts to authorize the extension.

{% endxcode %}

{% eclipse %}

## About GitHub Copilot in Eclipse

Installing GitHub Copilot in Eclipse allows you to receive coding suggestions from Copilot as you type. You also automatically get access to GitHub Copilot Chat, which allows you to chat with Copilot.

To see instructions for other popular coding environments, use the tool switcher at the top of the page.

### Version compatibility

To use the GitHub Copilot extension, you must have Eclipse version 2024-03 or above. See the [Eclipse download page](https://www.eclipse.org/downloads/packages/).

## Installing GitHub Copilot in Eclipse

1. Download and install the latest version of GitHub Copilot from the [Eclipse Marketplace](https://aka.ms/copiloteclipse?ref_product=copilot&ref_type=engagement&ref_style=text) or directly via the [Eclipse Update Site](https://azuredownloads-g3ahgwb5b8bkbxhd.b01.azurefd.net/github-copilot/?ref_product=copilot&ref_type=engagement&ref_style=text). For more information, see [Installing New Software](https://help.eclipse.org/latest/topic/org.eclipse.platform.doc.user/tasks/tasks-124.htm) in the Eclipse documentation.

1. After the extension is installed, restart Eclipse to apply the changes.

1. In the bottom right corner of the Eclipse workbench, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, then click **Sign In to GitHub**.

1. In the "Sign In to GitHub" dialog box, to copy the device code and open the device activation window, click **Copy Code and Open**.

1. A device activation window will open in your browser. Paste the device code, then click **Continue**.

1. GitHub will request the necessary permissions for GitHub Copilot. To approve these permissions, click **Authorize GitHub Copilot Plugin**.

1. After the permissions have been approved, Eclipse will show a confirmation. To begin using GitHub Copilot, click **OK**.

{% endeclipse %}

## Next steps

* **Get started with Copilot** - Learn how to use Copilot in your preferred coding environment. See [Get Ide Code Suggestions](https://docs.github.com/en/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions).
