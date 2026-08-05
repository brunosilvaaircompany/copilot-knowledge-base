# Creating a codespace for a repository

## About creating a codespace for a repository

You can create a codespace on GitHub, in Visual Studio Code, or by using GitHub CLI.
 Use the tabs in this article to display instructions for each of these ways of creating a codespace.

You can use GitHub Codespaces on your personal GitHub account, with the quota of free use included each month for accounts on the Free and Pro plans. You can continue using GitHub Codespaces beyond your monthly included storage and compute usage by providing payment details and setting a spending limit. See [GitHub Codespaces](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces).


Organizations can enable members and outside collaborators to create and use codespaces at the organization's expense. For more information, see [Choosing Who Owns And Pays For Codespaces In Your Organization](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization).

Your ability to create codespaces from organization-owned repositories depends on several factors, including the repository's visibility and the settings of the organization or its parent enterprise. For more information, see [Troubleshooting Creation And Deletion Of Codespaces](https://docs.github.com/en/codespaces/troubleshooting/troubleshooting-creation-and-deletion-of-codespaces#no-access-to-create-a-codespace).




> [!NOTE]
> If you have a managed user account, you cannot create codespaces for your personal repositories, unless the repository is a fork of an organization-owned repository and you are allowed to use GitHub Codespaces at the organization's expense. For more information, see [Enterprise Managed Users](https://docs.github.com/en/admin/concepts/identity-and-access-management/enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts).




If you're starting a new project, you might want to create a codespace from a template and publish to a repository on GitHub later.
 For more information, see [Creating A Codespace From A Template](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-from-a-template).

If you create a codespace from a repository, the codespace will be associated with a specific branch, which cannot be empty. You can create more than one codespace per repository or even per branch.

You can see every available codespace that you have created on the "Your codespaces" page. To display this page, in the top-left corner of GitHub, select {% octicon "three-bars" aria-label="Open global navigation menu" %}, then click **{% octicon "codespaces" aria-hidden="true" aria-label="codespaces" %} Codespaces**. This takes you to [github.com/codespaces](https://github.com/codespaces).


### The codespace creation process

When you create a codespace, a number of steps happen to create and connect you to your development environment:

* Step 1: VM and storage are assigned to your codespace.
* Step 2: Container is created and your repository is cloned.
* Step 3: You can connect to the codespace.
* Step 4: Codespace continues with post-creation setup.

For more information on what happens when you create a codespace, see [Deep Dive](https://docs.github.com/en/codespaces/about-codespaces/deep-dive).

For more information on the lifecycle of a codespace, see [Understanding The Codespace Lifecycle](https://docs.github.com/en/codespaces/about-codespaces/understanding-the-codespace-lifecycle).

If you want to use Git hooks for your codespace, then you should set up hooks using the `devcontainer.json` lifecycle scripts, such as `postCreateCommand`. These get executed during step 4, above. For information about the lifecycle scripts, see the [dev containers specification](https://containers.dev/implementors/json_reference/#lifecycle-scripts) on the Development Containers website. Since the dev container for your codespace is created after the repository is cloned, any [git template directory](https://git-scm.com/docs/git-init#_template_directory) configured in the dev container image will not apply to your codespace. Hooks must instead be installed after the codespace is created.

You can edit code, debug, and use Git commands while developing in a codespace with VS Code. For more information, see the [VS Code documentation](https://code.visualstudio.com/docs).


To speed up codespace creation, repository administrators can enable GitHub Codespaces prebuilds for a repository. For more information, see [About GitHub Codespaces Prebuilds](https://docs.github.com/en/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds).


## Creating a codespace for a repository

{% webui %}

1. On GitHub, navigate to the main page of the repository.

1. Under the repository name, select the branch dropdown menu, which is labeled with the name of the current branch, then click the branch you want to create a codespace for.

   ![Screenshot of the expanded branch dropdown menu, listing various branches. The "trunk" dropdown menu, shown with a branch icon, is outlined in orange.](/assets/images/help/codespaces/branch-drop-down.png)

1. Click the **{% octicon "code" aria-hidden="true" aria-label="code" %} Code** button, then click the **Codespaces** tab.

   A message is displayed at the bottom of the dialog telling you who will pay for the codespace.

   ![Screenshot of Codespaces dialog. The message showing who will pay for the codespace is highlighted with a dark orange outline.](/assets/images/help/codespaces/who-will-pay.png)

1. Create your codespace, either using the default options, or after configuring advanced options:

   * **Use the default options**

      To create a codespace using the default options, click {% octicon "plus" aria-label="Create a codespace on BRANCH" %}. <br/><br/>

   * **Configure advanced options**

      To configure advanced options for your codespace, such as a different machine type or a particular `devcontainer.json` file:

      1. At the top right of the **Codespaces** tab, select {% octicon "kebab-horizontal" aria-label="Codespace repository configuration" %} and click **New with options**.

         ![Screenshot of the options dropdown in the "Codespaces" tab, with the option "New with options" highlighted.](/assets/images/help/codespaces/default-machine-type.png)

      1. On the options page for your codespace, choose your preferred options from the dropdown menus.

         ![Screenshot of the advanced options page with buttons for "Branch," "Dev container configuration," "Region," and "Machine type."](/assets/images/help/codespaces/advanced-options.png)

         The options page may also display the names of one or more secrets that it's recommended you create in your Codespaces settings. For more information, see [Recommended secrets](#recommended-secrets).

         > [!NOTE]
         > * You can bookmark the options page to give you a quick way to create a codespace for this repository and branch.
         > * The [https://github.com/codespaces/new](https://github.com/codespaces/new) page provides a quick way to create a codespace for any repository and branch. You can get to this page quickly by typing `codespace.new` into your browser's address bar.
         > * For more information about dev container configuration files, see [Introduction To Dev Containers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers).
         > * For more information about machine types, see [Changing The Machine Type For Your Codespace](https://docs.github.com/en/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types).
         > * Your choice of available machine types may be limited by a number of factors. These can include a policy configured for your organization, or a minimum machine type specification for your repository. For more information, see [Restricting Access To Machine Types](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types) and [Setting A Minimum Specification For Codespace Machines](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/configuring-dev-containers/setting-a-minimum-specification-for-codespace-machines).


      1. Click **Create codespace**.

## Recommended secrets

The names of user-defined secrets may be displayed on the advanced options page when you create a codespace. This will happen if recommended secrets have been specified in the dev container configuration you have selected. For more information, see [Specifying Recommended Secrets For A Repository](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/configuring-dev-containers/specifying-recommended-secrets-for-a-repository).

<img src="/assets/images/help/codespaces/recommended-secrets.png" style="max-height:50rem" alt='Screenshot of the "Create codespace" page with four recommended secrets highlighted with a dark orange outline.' />

Entering values for these development environment secrets, when you're prompted to do so, is recommended because it's likely your project will need values for these secrets. However, supplying values is not required for you to create a codespace. You can set these secrets within the codespace if you prefer.

If you enter a value for a recommended secret, the secret will be available in the new codespace. When you click **Create codespace**, the secret is also added to your personal settings for Codespaces, so you will not need to enter a value for the secret in future when you create a codespace for this repository.

If the name of a secret is shown with a checkbox that is unavailable for selection, and no input box, this is because you already have a secret of this name configured in your personal settings for Codespaces, and you have associated it with this repository. If you've created a secret of this name but have not associated it with this repository, the checkbox will be available to select and by doing so you can update your settings to add the association.

If you want to change the value of a preselected secret you can do so from your personal settings for Codespaces at [github.com/settings/codespaces](https://github.com/settings/codespaces). For more information, see [Managing Your Account Specific Secrets For GitHub Codespaces](https://docs.github.com/en/codespaces/managing-your-codespaces/managing-your-account-specific-secrets-for-github-codespaces).

{% endwebui %}

{% vscode %}

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



{% endvscode %}

{% cli %}

> [!NOTE]
> To learn more about GitHub CLI, see [About GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli).


To create a new codespace, use the `gh codespace create` subcommand.

```shell
gh codespace create
```

You are prompted to choose a repository. A message is displayed telling you who will pay for the codespace. You are then prompted to choose a branch, a dev container configuration file (if more than one is available), and a machine type (if more than one is available).

Alternatively, you can use flags to specify some or all of the options:

```shell
gh codespace create -r OWNER/REPO -b BRANCH --devcontainer-path PATH -m MACHINE-TYPE
```

In this example, replace `owner/repo` with the repository identifier. Replace `branch` with the name of the branch, or the full SHA hash of the commit, that you want to be initially checked out in the codespace. If you use the `-r` flag without the `b` flag, the codespace is created from the default branch.

Replace `path` with the path to the dev container configuration file you want to use for the new codespace. If you omit this flag and more than one dev container file is available you will be prompted to choose one from a list. For more information about the dev container configuration file, see [Introduction To Dev Containers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers).

Replace `machine-type` with a valid identifier for an available machine type. Identifiers are strings such as: `basicLinux32gb` and `standardLinux32gb`. The type of machines that are available depends on the repository, your personal account, and your location. If you enter an invalid or unavailable machine type, the available types are shown in the error message. If you omit this flag and more than one machine type is available you will be prompted to choose one from a list.

For full details of the options for this command, see [the GitHub CLI manual](https://cli.github.com/manual/gh_codespace_create).

{% endcli %}

## Further reading

* [Opening An Existing Codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/opening-an-existing-codespace)
* [Facilitating Quick Creation And Resumption Of Codespaces](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/setting-up-your-repository/facilitating-quick-creation-and-resumption-of-codespaces)
* [Organizations](https://docs.github.com/en/rest/codespaces/organizations)
