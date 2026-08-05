# Opening an existing codespace

You can reopen any of your active or stopped codespaces on GitHub, in Visual Studio Code, or by using GitHub CLI. You can't reopen a codespace that has been deleted. See [Understanding The Codespace Lifecycle](https://docs.github.com/en/codespaces/about-codespaces/understanding-the-codespace-lifecycle).

You can view all your codespaces on the "Your codespaces" page at [github.com/codespaces](https://github.com/codespaces). From this page, you can:

* Open, stop, or delete your codespaces.
* See who owns (and may be billed for) your codespaces: your personal account, or organizations you belong to. See [GitHub Codespaces](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces).
* See the machine type, size, and status of your codespaces.
* Create a new codespace, either by choosing one of GitHub's templates or by clicking **New codespace**. See [Creating A Codespace From A Template](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-from-a-template) and [Creating A Codespace For A Repository](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository).
* Prevent automatic deletion of a codespace. See [Configuring Automatic Deletion Of Your Codespaces?Tool=Webui](https://docs.github.com/en/codespaces/setting-your-user-preferences/configuring-automatic-deletion-of-your-codespaces?tool=webui#avoiding-automatic-deletion-of-codespaces).

{% webui %}

## Resuming a codespace from a repository page

You can quickly resume a codespace when you're viewing a repository on GitHub.

1. With the **{% octicon "code" aria-hidden="true" aria-label="code" %} Code** tab of your repository displayed on GitHub, press <kbd>,</kbd> (the comma key).

   The "Resume codespace" page is displayed. This allows you to resume your most recently used codespace for the currently selected branch of the repository or, if you were viewing a pull request, for the topic branch of the pull request.

   ![Screenshot of the "Resume codespace" page showing the "Resume this codespace" and "Create a new one" buttons.](/assets/images/help/codespaces/resume-codespace.png)

1. Click **Resume this codespace**.

   Alternatively, if you want to create a new codespace for this branch of the repository, click **Create a new one**.

   > [!NOTE]
   > If you don't have an existing codespace for this branch, the page is titled "Create codespace" and a button labeled **Create a new codespace** is displayed.

You can bookmark the address of this page if you want to get back to it quickly to resume your codespace. Alternatively you can use the address in a link to provide other people with a quick way of creating and resuming their own codespaces for this repository.

## Opening an existing codespace from the "Your codespaces" page

1. In the top-left corner of GitHub, select {% octicon "three-bars" aria-label="Open global navigation menu" %}, then click **{% octicon "codespaces" aria-hidden="true" aria-label="codespaces" %} Codespaces** to take you to the "Your codespaces" page at [github.com/codespaces](https://github.com/codespaces).

1. To open a codespace in your default editor, click the name of the codespace. You can set your default editor for Codespaces in your personal settings page.
 See [Setting Your Default Editor For GitHub Codespaces](https://docs.github.com/en/codespaces/setting-your-user-preferences/setting-your-default-editor-for-github-codespaces).

   To open the codespace in an editor other than your default:

   1. Click the ellipsis (**...**) to the right of the codespace you want to open.
   1. Click **Open in**.
   1. Click **Open in APPLICATION**.

   You can open the codespace in:
   * Your browser
   * Visual Studio Code
   * JupyterLab

   If you choose **Visual Studio Code** (desktop application), you must make sure you have VS Code installed on your local machine.


   If you choose **JupyterLab**, the JupyterLab application must be installed in the codespace. The default dev container image includes JupyterLab, so codespaces created from the default image will always have JupyterLab installed. For more information about the default image, see [Introduction To Dev Containers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#using-the-default-dev-container-configuration) and the [`devcontainers/images`](https://github.com/devcontainers/images/tree/main/src/universal) repository. If you're not using the default image in your dev container configuration, you can install JupyterLab by adding the `ghcr.io/devcontainers/features/python` feature to your `devcontainer.json` file. You should include the option `"installJupyterlab": true`. For more information, see the README for the [`python`](https://github.com/devcontainers/features/tree/main/src/python#python-python) feature, in the `devcontainers/features` repository.


## Linking to an existing codespace

You can create links to your existing codespaces. This is useful if you have a long-lived codespace that you return to frequently. You can save the link in a location of your choice, as an alternative to using the link on https://github.com/codespaces.

> [!NOTE]
> You can only open your own codespaces. If someone clicks a link to one of your codespaces they will see a 404 error message.

Create a link using one of the following URL patterns. In these URLs `CODESPACE-NAME` represents the unique, permanent name of the codespace, such as `literate-space-parakeet-w5vg5ww5p793g7g9`, not the codespace's display name. You can find the name of a codespace by copying the link to the codespace on your https://github.com/codespaces page and extracting the codespace name from the URL.

| **Link opens in** | **Link syntax** |
| --- | --- |
| VS Code web client |  `https://CODESPACE-NAME.github.dev` |
| VS Code web client with a specified workspace |  `https://CODESPACE-NAME.github.dev?folder=/workspaces/PATH/TO/WORKSPACE/DIRECTORY` |
| VS Code desktop application |  `https://github.com/codespaces/CODESPACE-NAME?editor=vscode` |
| JupyterLab |  `https://github.com/codespaces/CODESPACE-NAME?editor=jupyter` |


{% endwebui %}

{% vscode %}

## Reopening an existing codespace

> [!NOTE]
> To use GitHub Codespaces in VS Code, you need to install the Codespaces extension.
 See [Using GitHub Codespaces In Visual Studio Code](https://docs.github.com/en/codespaces/developing-in-a-codespace/using-github-codespaces-in-visual-studio-code).

1. In the VS Code desktop application, open the Command Palette with <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
1. Type "Codespaces" and select one of the following commands.
   * To open a codespace in a new window of VS Code, select **Codespaces: Open Codespace in New Window**
   * To open a codespace in the web editor, select **Codespaces: Open in Browser**
1. Click the codespace that you want to open.

   ![Screenshot of the VS Code Command Palette showing a list of codespaces available to connect to.](/assets/images/help/codespaces/open-codespace-from-vscode.png)

You can also access the commands listed above by navigating to the Remote Explorer view in VS Code and right-clicking the codespace that you want to open.

![Screenshot of a codespace selected in the Remote Explorer, with "Open in Browser" highlighted in the right-click menu.](/assets/images/help/codespaces/open-codespace-remote-explorer.png)

> [!NOTE]
> If the Remote Explorer is not displayed in the Activity Bar:
>
> 1. Access the Command Palette. For example, by pressing <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
> 1. Type: `details`.
> 1. Click **Codespaces: Details**.


## Linking to an existing codespace

You can create links to your existing codespaces. This is useful if you have a long-lived codespace that you return to frequently. You can save the link in a location of your choice, as an alternative to using the link on https://github.com/codespaces.

> [!NOTE]
> You can only open your own codespaces. If someone clicks a link to one of your codespaces they will see a 404 error message.

Create a link using one of the following URL patterns. In these URLs `CODESPACE-NAME` represents the unique, permanent name of the codespace, such as `literate-space-parakeet-w5vg5ww5p793g7g9`, not the codespace's display name. You can find the name of a codespace by copying the link to the codespace on your https://github.com/codespaces page and extracting the codespace name from the URL.

| **Link opens in** | **Link syntax** |
| --- | --- |
| VS Code web client |  `https://CODESPACE-NAME.github.dev` |
| VS Code web client with a specified workspace |  `https://CODESPACE-NAME.github.dev?folder=/workspaces/PATH/TO/WORKSPACE/DIRECTORY` |
| VS Code desktop application |  `https://github.com/codespaces/CODESPACE-NAME?editor=vscode` |
| JupyterLab |  `https://github.com/codespaces/CODESPACE-NAME?editor=jupyter` |


{% endvscode %}

{% cli %}

## Reopening an existing codespace

If you have installed GitHub CLI, you can use it to work with GitHub Codespaces. For installation instructions for GitHub CLI, see the [GitHub CLI repository](https://github.com/cli/cli#installation).



1. In a terminal, enter one of the following GitHub CLI commands.
   * To open a codespace in VS Code, enter:

     ```shell copy
     gh codespace code
     ```

     > [!NOTE]
     > You must have VS Code installed on your local machine. See [Setting up Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview) in the VS Code documentation.

   * To open a codespace in the browser, enter:

     ```shell copy
     gh codespace code --web
     ```

   * To open a codespace in JupyterLab, enter:

     ```shell copy
     gh codespace jupyter
     ```

     > [!NOTE]
     > The JupyterLab application must be installed in the codespace you are opening. The default dev container image includes JupyterLab, so codespaces created from the default image will always have JupyterLab installed. For more information about the default image, see [Introduction To Dev Containers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#using-the-default-dev-container-configuration) and the [`devcontainers/images`](https://github.com/devcontainers/images/tree/main/src/universal) repository. If you're not using the default image in your dev container configuration, you can install JupyterLab by adding the `ghcr.io/devcontainers/features/python` feature to your `devcontainer.json` file. You should include the option `"installJupyterlab": true`. For more information, see the README for the [`python`](https://github.com/devcontainers/features/tree/main/src/python#python-python) feature, in the `devcontainers/features` repository.



   * To access a codespace from the command line, over SSH, enter:

     ```shell copy
     gh codespace ssh
     ```

1. Using the arrow keys, navigate to the codespace that you want to open.
1. To open the codespace, press <kbd>Enter</kbd>.

See [`gh codespace code`](https://cli.github.com/manual/gh_codespace_code) in the GitHub CLI manual.

{% endcli %}

## Further reading

* [Organizations](https://docs.github.com/en/rest/codespaces/organizations)
