# Developing in a codespace

## About development with GitHub Codespaces

You can develop code in a codespace using your choice of tool:

* A command shell, via an SSH connection initiated using GitHub CLI
* The Visual Studio Code desktop application
* A browser-based version of Visual Studio Code

{% webui %}

The tabs in this article allow you to switch between information for each of these ways of working. You're currently on the tab for the web browser version of Visual Studio Code.

## Working in a codespace in the browser

Using Codespaces in the browser provides you with a fully featured development experience. You can edit code, debug, use Git commands, and run your application.

![Annotated screenshot of the five main components of the user interface: side bar, activity bar, editor, panels, status bar.](/assets/images/help/codespaces/codespace-overview-annotated.png)

The main components of the user interface are:

1. **Side bar** - By default, this area shows your project files in the Explorer.
1. **Activity bar** - This displays the Views and provides you with a way to switch between them. You can reorder the Views by dragging and dropping them.
1. **Editor** - This is where you edit your files. You can right-click the tab for a file to access options such as locating the file in the Explorer.
1. **Panels** - This is where you can see output and debug information, as well as the default place for the integrated Terminal.
1. **Status bar** - This area provides you with useful information about your codespace and project. For example, the branch name, configured ports, and more.


For the best experience with GitHub Codespaces, we recommend using a Chromium-based browser, like Google Chrome or Microsoft Edge.
 For more information, see [Troubleshooting GitHub Codespaces Clients](https://docs.github.com/en/codespaces/troubleshooting/troubleshooting-github-codespaces-clients).
### Customizing the codespaces for a repository

You can customize the codespaces that are created for a repository by creating or updating the dev container configuration for the repository. You can do this from within a codespace. After you change a dev container configuration, you can apply the changes to the current codespace by rebuilding the Docker container for the codespace. For more information, see [Introduction To Dev Containers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers).

### Personalizing your codespace

You can use a [dotfiles](https://dotfiles.github.io/tutorials/) repository and [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) to personalize aspects of the codespace environment for any codespace that you create. Personalization can include shell preferences and additional tools. For more information, see [Personalizing GitHub Codespaces For Your Account](https://docs.github.com/en/codespaces/setting-your-user-preferences/personalizing-github-codespaces-for-your-account).

### Running your app from a codespace

You can forward ports in your codespace to test and debug your application. You can also manage the port protocol and share the port within your organization or publicly.
 For more information, see [Forwarding Ports In Your Codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace).

### Committing your changes

When you've made changes to your codespace, either new code or configuration changes, you'll want to commit your changes. Committing configuration changes to your repository ensures that anyone else who creates a codespace from this repository has the same configuration. Any customization you do, such as adding VS Code extensions, will be available to all users.

For this tutorial, you created a codespace from a template repository, so the code in your codespace is not yet stored in a repository. You can create a repository by publishing the current branch to GitHub.

For information, see [Using Source Control In Your Codespace?Tool=Webui](https://docs.github.com/en/codespaces/developing-in-a-codespace/using-source-control-in-your-codespace?tool=webui#publishing-a-codespace-created-from-a-template).


### Using the Visual Studio Code Command Palette

The Visual Studio Code Command Palette allows you to access and manage many features for Codespaces and Visual Studio Code. For more information, see [Using The Vs Code Command Palette In Codespaces](https://docs.github.com/en/codespaces/reference/using-the-vs-code-command-palette-in-codespaces).

## Navigating to an existing codespace

1. You can see every available codespace that you have created on the "Your codespaces" page. To display this page, in the top-left corner of GitHub, select {% octicon "three-bars" aria-label="Open global navigation menu" %}, then click **{% octicon "codespaces" aria-hidden="true" aria-label="codespaces" %} Codespaces**. This takes you to [github.com/codespaces](https://github.com/codespaces).

1. Click the name of the codespace you want to develop in.

   ![Screenshot of a list of three codespaces on the https://github.com/codespaces page.](/assets/images/help/codespaces/your-codespaces-list.png)

Alternatively, you can see any of your codespaces for a specific repository by navigating to that repository, clicking the **{% octicon "code" aria-hidden="true" aria-label="code" %} Code** button and selecting the **Codespaces** tab. The dropdown menu will display all active codespaces for the repository.


{% endwebui %}

{% vscode %}

The tabs in this article allow you to switch between information for each of these ways of working. You're currently on the tab for Visual Studio Code.

## Working in a codespace in VS Code

GitHub Codespaces provides you with the full development experience of Visual Studio Code. You can edit code, debug, and use Git commands while developing in a codespace with VS Code. For more information, see the [VS Code documentation](https://code.visualstudio.com/docs).


![Annotated screenshot of the five main components of the user interface: side bar, activity bar, editor, panels, status bar.](/assets/images/help/codespaces/codespace-annotated-vscode.png)

The main components of the user interface are:

1. **Side bar** - By default, this area shows your project files in the Explorer.
1. **Activity bar** - This displays the Views and provides you with a way to switch between them. You can reorder the Views by dragging and dropping them.
1. **Editor** - This is where you edit your files. You can right-click the tab for a file to access options such as locating the file in the Explorer.
1. **Panels** - This is where you can see output and debug information, as well as the default place for the integrated Terminal.
1. **Status bar** - This area provides you with useful information about your codespace and project. For example, the branch name, configured ports, and more.


For more information on using VS Code, see the [User Interface guide](https://code.visualstudio.com/docs/getstarted/userinterface) in the VS Code documentation.

You can connect to your codespace directly from VS Code. For more information, see [Using GitHub Codespaces In Visual Studio Code](https://docs.github.com/en/codespaces/developing-in-a-codespace/using-github-codespaces-in-visual-studio-code).


For troubleshooting information, see [Troubleshooting GitHub Codespaces Clients](https://docs.github.com/en/codespaces/troubleshooting/troubleshooting-github-codespaces-clients).
### Customizing the codespaces for a repository

You can customize the codespaces that are created for a repository by creating or updating the dev container configuration for the repository. You can do this from within a codespace. After you change a dev container configuration, you can apply the changes to the current codespace by rebuilding the Docker container for the codespace. For more information, see [Introduction To Dev Containers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers).

### Personalizing your codespace

You can use a [dotfiles](https://dotfiles.github.io/tutorials/) repository and [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) to personalize aspects of the codespace environment for any codespace that you create. Personalization can include shell preferences and additional tools. For more information, see [Personalizing GitHub Codespaces For Your Account](https://docs.github.com/en/codespaces/setting-your-user-preferences/personalizing-github-codespaces-for-your-account).

### Running your app from a codespace

You can forward ports in your codespace to test and debug your application. You can also manage the port protocol and share the port within your organization or publicly.
 For more information, see [Forwarding Ports In Your Codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace).

### Committing your changes

When you've made changes to your codespace, either new code or configuration changes, you'll want to commit your changes. Committing configuration changes to your repository ensures that anyone else who creates a codespace from this repository has the same configuration. Any customization you do, such as adding VS Code extensions, will be available to all users.

For this tutorial, you created a codespace from a template repository, so the code in your codespace is not yet stored in a repository. You can create a repository by publishing the current branch to GitHub.

For information, see [Using Source Control In Your Codespace?Tool=Webui](https://docs.github.com/en/codespaces/developing-in-a-codespace/using-source-control-in-your-codespace?tool=webui#publishing-a-codespace-created-from-a-template).


### Using the Visual Studio Code Command Palette

The Visual Studio Code Command Palette allows you to access and manage many features for Codespaces and Visual Studio Code. For more information, see [Using The Vs Code Command Palette In Codespaces](https://docs.github.com/en/codespaces/reference/using-the-vs-code-command-palette-in-codespaces).

## Navigating to an existing codespace

1. You can see every available codespace that you have created on the "Your codespaces" page. To display this page, in the top-left corner of GitHub, select {% octicon "three-bars" aria-label="Open global navigation menu" %}, then click **{% octicon "codespaces" aria-hidden="true" aria-label="codespaces" %} Codespaces**. This takes you to [github.com/codespaces](https://github.com/codespaces).

1. Click the name of the codespace you want to develop in.

   ![Screenshot of a list of three codespaces on the https://github.com/codespaces page.](/assets/images/help/codespaces/your-codespaces-list.png)

Alternatively, you can see any of your codespaces for a specific repository by navigating to that repository, clicking the **{% octicon "code" aria-hidden="true" aria-label="code" %} Code** button and selecting the **Codespaces** tab. The dropdown menu will display all active codespaces for the repository.


{% endvscode %}

{% cli %}

The tabs in this article allow you to switch between information for each of these ways of working. You're currently on the tab for GitHub CLI.

## Working in a codespace in a command shell

> [!NOTE]
> To learn more about GitHub CLI, see [About GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli).


You can use GitHub CLI to create a new codespace, or start an existing codespace, and then SSH to it. Once connected, you can work on the command line using your preferred command-line tools.

After installing GitHub CLI and authenticating with your GitHub account you can use the command `gh codespace [<SUBCOMMAND>...] --help` to browse the help information. Alternatively, you can view the same reference information at [https://cli.github.com/manual/gh_codespace](https://cli.github.com/manual/gh_codespace).

For more information, see [Using GitHub Codespaces With GitHub CLI](https://docs.github.com/en/codespaces/developing-in-a-codespace/using-github-codespaces-with-github-cli).

{% endcli %}
