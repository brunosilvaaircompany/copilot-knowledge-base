# Setting your default editor for GitHub Codespaces

On the settings page, you can set your editor preference so that when you create a codespace, or open an existing codespace, it is opened in your choice of:
* Visual Studio Code (desktop application)
* Visual Studio Code (web client application)
* JupyterLab - the web interface for Project Jupyter

When you create a new codespace from a template, it is always opened in the Visual Studio Code web client. You can reopen an existing codespace in any supported editor. For more information, see [Opening An Existing Codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/opening-an-existing-codespace).


If you want to use Visual Studio Code as your default editor for GitHub Codespaces, you need to install Visual Studio Code and the GitHub Codespaces extension for Visual Studio Code. For more information, see the [download page for Visual Studio Code](https://code.visualstudio.com/download/) and the [GitHub Codespaces extension on the Visual Studio Code marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

## Setting your default editor

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "codespaces" aria-hidden="true" aria-label="codespaces" %} Codespaces**.

1. Under "Editor preference", select the option you want.

   * If you choose **Visual Studio Code** (desktop application), you must make sure you have VS Code installed on your local machine.
<br><br>

   * If you choose **Visual Studio Code** (web client), GitHub Codespaces will automatically open in the desktop application when you next create or open a codespace.

     You may need to allow access to both your browser and Visual Studio Code for it to open successfully.<br><br>

   * If you choose **JupyterLab**, the JupyterLab application must be installed in the codespaces you open. The default dev container image includes JupyterLab, so codespaces created from the default image will always have JupyterLab installed. For more information about the default image, see [Introduction To Dev Containers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#using-the-default-dev-container-configuration) and the [`devcontainers/images`](https://github.com/devcontainers/images/tree/main/src/universal) repository. If you're not using the default image in your dev container configuration, you can install JupyterLab by adding the `ghcr.io/devcontainers/features/python` feature to your `devcontainer.json` file. You should include the option `"installJupyterlab": true`. For more information, see the README for the [`python`](https://github.com/devcontainers/features/tree/main/src/python#python-python) feature, in the `devcontainers/features` repository.


## Further reading

* [Customizing Your Codespace](https://docs.github.com/en/codespaces/customizing-your-codespace)
* [Managing Your Codespaces](https://docs.github.com/en/codespaces/managing-your-codespaces)
