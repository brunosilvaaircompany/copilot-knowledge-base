# Using GitHub Codespaces in Visual Studio Code

## About GitHub Codespaces in Visual Studio Code

You can use your local install of Visual Studio Code to create, manage, work in, and delete codespaces. To use GitHub Codespaces in VS Code, you need to install the Codespaces extension.
 For more information on setting up GitHub Codespaces in VS Code, see [Prerequisites](#prerequisites).

By default, if you create a new codespace on GitHub, it will open in the browser. If you would prefer to open any new codespaces in VS Code automatically, you can set your default editor to be VS Code. For more information, see [Setting Your Default Editor For GitHub Codespaces](https://docs.github.com/en/codespaces/setting-your-user-preferences/setting-your-default-editor-for-github-codespaces).

If you prefer to work in the browser, but want to continue using your existing VS Code extensions, themes, and shortcuts, you can turn on Settings Sync. For more information, see [Personalizing GitHub Codespaces For Your Account](https://docs.github.com/en/codespaces/setting-your-user-preferences/personalizing-github-codespaces-for-your-account#settings-sync).

## Prerequisites

To develop in a codespace directly in VS Code, you must install and sign into the GitHub Codespaces extension with your GitHub credentials. The GitHub Codespaces extension requires VS Code October 2020 Release 1.51 or later.

Use the Visual Studio Code Marketplace to install the [GitHub Codespaces](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) extension. For more information, see [Extension Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery) in the VS Code documentation.

1. In VS Code, in the Activity Bar, click the Remote Explorer icon.

   ![Screenshot of the Activity Bar. The icon for the "Remote Explorer" side bar (a rectangle overlaid by a circle) is highlighted with an orange outline.](/assets/images/help/codespaces/click-remote-explorer-icon-vscode.png)

{% indented_data_reference reusables.codespaces.remote-explorer spaces=3 %}

1. Select "GitHub Codespaces" from the dropdown at the top of the "Remote Explorer" side bar, if it is not already selected.
1. Click **Sign in to GitHub**.

   ![Screenshot of the "Remote Explorer" side bar for "GitHub Codespaces" with the "Sign in to GitHub" button displayed.](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

1. If you are not currently signed in to GitHub you'll be prompted to do so. Go ahead and sign in.
1. When you're prompted to specify what you want to authorize, click the **Authorize** button for "GitHub."
1. If the authorization page is displayed, click **Authorize Visual-Studio-Code**.



## Connecting to an enterprise on GHE.com

If you access GitHub through a subdomain of GHE.com, you must configure the  `Github-enterprise: Uri` and `Github > Codespaces: Auth Provider` settings in VS Code before you can connect to your codespaces.

1. To open your VS Code settings, press <kbd>Command</kbd>+<kbd>,</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>,</kbd> (Windows).
1. In the search bar, search for `enterprise`.
1. For the `Github-enterprise: Uri` setting, enter the URL where you access GitHub. For example: `https://octocorp.ghe.com`.

   Alternatively, you can add the following to your `settings.json` file:

   ```json copy
   "github-enterprise.uri": "https://SUBDOMAIN.ghe.com"
   ```

1. In the VS Code settings, search for `Codespaces Auth Provider`.
1. For the `Github > Codespaces: Auth Provider` setting, select `github-enterprise` from the dropdown.

   Alternatively, you can add the following to your `settings.json` file:

   ```json copy
   "github.codespaces.authProvider": "github-enterprise"
   ```

1. You will be shown a prompt asking you to sign in. Click **Sign in to GitHub**, then follow the prompts to authorize your account.

   If you **don't see the prompt**, try restarting VS Code.

If you ever need to switch back to an account on GitHub.com, set the `Github > Codespaces: Auth Provider` setting back to its default value and remove the `Github-enterprise: Uri` setting.



## Creating a codespace in VS Code

After you connect your account on GitHub to the GitHub Codespaces extension, you can create a new codespace. For more information about the GitHub Codespaces extension, see the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

1. In VS Code, in the Activity Bar, click the Remote Explorer icon.

   ![Screenshot of the Activity Bar. The icon for the "Remote Explorer" side bar (a rectangle overlaid by a circle) is highlighted with an orange outline.](/assets/images/help/codespaces/click-remote-explorer-icon-vscode.png)

{% indented_data_reference reusables.codespaces.remote-explorer spaces=3 %}

1. Hover over the "Remote Explorer" side bar and click {% octicon "plus" aria-label="The plus icon" %}.

   ![Screenshot of the "Remote Explorer" side bar for GitHub Codespaces. The tooltip "Create New Codespace" is displayed beside the plus sign button.](/assets/images/help/codespaces/create-codespace-vscode.png)

1. In the text box, type the name of the repository you want to develop in, then select it.

   ![Screenshot of "octo-org/he" entered into the text box and a list of four repositories that start with this string.](/assets/images/help/codespaces/choose-repository-vscode.png)

   A message is displayed at the right side of subsequent prompts telling you who will pay for the codespace.

   ![Screenshot of a prompt for a branch, with the message "Usage paid for by hubwriter."](/assets/images/help/codespaces/who-will-pay-vscode.png)

1. Click the branch you want to develop on.
1. If prompted to choose a dev container configuration file, choose a file from the list.
1. Click the machine type you want to use.

   > [!NOTE]
   > Your choice of available machine types may be limited by a number of factors. These can include a policy configured for your organization, or a minimum machine type specification for your repository. For more information, see [Restricting Access To Machine Types](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types) and [Setting A Minimum Specification For Codespace Machines](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/configuring-dev-containers/setting-a-minimum-specification-for-codespace-machines).



## Opening a codespace in VS Code

1. In VS Code, in the Activity Bar, click the Remote Explorer icon.

   ![Screenshot of the Activity Bar. The icon for the "Remote Explorer" side bar (a rectangle overlaid by a circle) is highlighted with an orange outline.](/assets/images/help/codespaces/click-remote-explorer-icon-vscode.png)

{% indented_data_reference reusables.codespaces.remote-explorer spaces=3 %}

1. Under "GitHub Codespaces", hover over the codespace you want to develop in.
1. Click the connection icon (a plug symbol).

   ![Screenshot of the "Remote Explorer" side bar. The connection icon for a codespace (a plug symbol) is highlighted with a dark orange outline.](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## Changing the machine type in VS Code

Typically, you can run your codespace on a choice of remote machine types. These machine types offer a choice of hardware specifications ranging from 2 cores to 32 cores, although the full range of machine types may not always be available. Each machine type has a different level of resources and a different billing tier. For information, see [GitHub Codespaces](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces).

By default the machine type with the lowest valid resources is used when you create a codespace.
 You can change the machine type of your codespace at any time.

> [!NOTE]
> Your choice of available machine types may be limited by a number of factors. These can include a policy configured for your organization, or a minimum machine type specification for your repository. For more information, see [Restricting Access To Machine Types](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types) and [Setting A Minimum Specification For Codespace Machines](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/configuring-dev-containers/setting-a-minimum-specification-for-codespace-machines).


1. In VS Code, open the Command Palette with <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
1. Search for and select "Codespaces: Change Machine Type."

   ![Screenshot of "change machine" entered as a search string and "Codespaces: Change Machine Type" in the dropdown list.](/assets/images/help/codespaces/vscode-change-machine-type-option.png)

1. If you're not following these instructions within a codespace, click the codespace that you want to change.

   ![Screenshot of a dropdown list of four codespaces.](/assets/images/help/codespaces/vscode-change-machine-choose-repo.png)

   If you are following these instructions in a codespace, the change will apply to the codespace you're working in.
1. Select the machine type you want to use.
1. If you're changing to a machine type with a different storage capacity, a prompt will appear asking if you would like to continue. Read the prompt and click **Yes** to accept.


If you changed to a virtual machine with a different storage capacity (for example, from 32 GB to 64 GB), your codespace will be unavailable for a short time while the machine type is changed. If the codespace is currently active, it will automatically be stopped. When the change is complete, you'll be able to restart the codespace running on the new machine type.

If you changed to a virtual machine with the same storage capacity, the change will be applied the next time you restart the codespace. An active codespace will not be stopped automatically. For more information on restarting a codespace, see [Stopping And Starting A Codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/stopping-and-starting-a-codespace#restarting-a-codespace).


## Deleting a codespace in VS Code

You can delete codespaces from within VS Code when you are not currently working in a codespace.

1. In VS Code, in the Activity Bar, click the Remote Explorer icon.

   ![Screenshot of the Activity Bar. The icon for the "Remote Explorer" side bar (a rectangle overlaid by a circle) is highlighted with an orange outline.](/assets/images/help/codespaces/click-remote-explorer-icon-vscode.png)

{% indented_data_reference reusables.codespaces.remote-explorer spaces=3 %}

1. Under "GitHub Codespaces," right-click the codespace you want to delete.
1. Click **Delete Codespace**.


## Switching to VS Code Insiders in the web client

If you are using the VS Code web client, you can switch to the Insiders version of the application. For more information about this version of VS Code, see [Introducing the Insiders Build](https://code.visualstudio.com/blogs/2016/02/01/introducing_insiders_build) in the VS Code blog.

After you switch versions in a codespace, the web client will continue to use the Insiders version if you stop and restart the codespace. New codespaces that you create and open in the VS Code web client will also use the Insiders version.

1. In bottom left of the browser window that's displaying a codespace, click **{% octicon "gear" aria-label="Manage" %}**.
1. In the menu, select "Switch to Insiders Version."

   ![Screenshot of the VS Code web client. A gear icon is highlighted with an orange outline. "Switch to Insiders Version" is shown in the menu.](/assets/images/help/codespaces/codespaces-insiders-vscode.png)

1. Click **Reload**.

To switch back to the Stable version of VS Code, repeat the process but choose **Switch to Stable Version**. After you switch back, the codespace will continue to use the Stable version if you stop and restart the codespace. New codespaces that you create and open in the VS Code web client will also use the Stable version.

## Using the Insiders desktop application for Codespaces

To use GitHub Codespaces in the Insiders version of the VS Code desktop application, start or create your codespaces from within the VS Code Insiders application. For more information see [Creating a codespace in VS Code](#creating-a-codespace-in-vs-code) and [Opening a codespace in VS Code](#opening-a-codespace-in-vs-code) earlier in this article.

## Further reading

* [Using The Vs Code Command Palette In Codespaces](https://docs.github.com/en/codespaces/reference/using-the-vs-code-command-palette-in-codespaces)
* [Using GitHub Copilot In GitHub Codespaces](https://docs.github.com/en/codespaces/reference/using-github-copilot-in-github-codespaces)
