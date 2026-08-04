# Creating a codespace from a template

# About templates for GitHub Codespaces

If you're starting a new project, you can get started with development work quickly by creating a codespace from a template. You'll be able to work on your project in a cloud-based development environment, save your files in the cloud, and publish your work to a new remote repository that you can share with others or clone to your local machine.

You can start from a blank template, choose from templates maintained by GitHub for popular technologies such as React or Jupyter Notebook, or launch a codespace from any template repository on GitHub.



> [!NOTE]
> If you have a managed user account, you cannot use GitHub's public templates for GitHub Codespaces, because you can only create codespaces that are owned and paid for by your organization or enterprise. For more information, see [Abilities And Restrictions Of Managed User Accounts](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/abilities-and-restrictions-of-managed-user-accounts).



With a blank template, you'll start with an empty directory, with access to cloud-based compute resources and the tools, languages, and runtime environments that come preinstalled with the default dev container image. With other templates, you'll get starter files for the technology you're working with, plus typically some extra files such as a README file, a `.gitignore` file, and dev container configuration files containing some custom environment configuration. For more information on dev containers and the default image, see [Introduction To Dev Containers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers).

As an example, if you create a codespace from GitHub's React template, you'll arrive in a workspace containing template files for a simple application, such as `index.js`, `app.js`, and `package.json`. Shortly after the codespace opens, a development server will start up automatically, and you will be able to view the running application in a simple browser tab within the VS Code web client.

![Screenshot of VS Code's simple browser rendering the web application in GitHub's React template.](/assets/images/help/codespaces/react-template.png)

The files and configuration included in templates are defined in template repositories. The template repository is cloned into your codespace when you create the codespace. After that, the link is severed, and your codespace won't be linked to a remote repository until you publish to one.

> [!TIP]
> To help people get started with your framework, library, or other project, you can set up a template repository for use with GitHub Codespaces. For more information, see [Setting Up A Template Repository For GitHub Codespaces](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/setting-up-your-repository/setting-up-a-template-repository-for-github-codespaces).

## Creating a codespace from a GitHub template

Templates maintained by GitHub, including the blank template, are available from the "Your codespaces" page.

1. In the top-left corner of GitHub, select {% octicon "three-bars" aria-label="Open global navigation menu" %}, then click **{% octicon "codespaces" aria-hidden="true" aria-label="codespaces" %} Codespaces** to take you to the "Your codespaces" page at [github.com/codespaces](https://github.com/codespaces).

1. To view the full list of templates, in the "Explore quick start templates" section, click **See all**.

   ![Screenshot of the "Explore quick start templates" section. "See all" is highlighted with a dark orange outline.](/assets/images/help/codespaces/codespace-templates-see-all.png)

1. Optionally, to view the template repository containing the files for a template, click the name of the template.

   ![Screenshot of the "Explore quick start templates" section. Three templates are listed. The templates names are outlined in orange.](/assets/images/help/codespaces/react-template-name.png)

1. Under the name of the template you want to launch, click **Use this template**.

When you create a new codespace from a template, it is always opened in the Visual Studio Code web client. You can reopen an existing codespace in any supported editor. For more information, see [Opening An Existing Codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/opening-an-existing-codespace).


## Creating a codespace from a template repository

You can create a codespace from any template repository, then publish your work to a new repository when you are ready. For more information on template repositories, see [Creating A Repository From A Template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#about-repository-templates).

1. On GitHub, navigate to the main page of the repository.

1. Click **Use this template**, then click **Open in a codespace**.

   ![Screenshot of the "Use this template" button and the dropdown menu expanded to show the "Open in a codespace" option.](/assets/images/help/repository/use-this-template-button.png)


   > [!NOTE]
   > If you're a maintainer of the template repository, and want to commit changes to the template repository itself, you should create a codespace from the **{% octicon "code" aria-hidden="true" aria-label="code" %} Code** dropdown. For more information, see [Creating A Codespace For A Repository](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).

When you create a new codespace from a template, it is always opened in the Visual Studio Code web client. You can reopen an existing codespace in any supported editor. For more information, see [Opening An Existing Codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/opening-an-existing-codespace).


## Publishing to a repository on GitHub

When you work in a codespace created from a template, your work is saved on a virtual machine in the cloud, but it is not stored in a repository on GitHub.

You can save your files, close and stop your codespace, and come back to your work later. Typically, Git will come preinstalled, and the working directory will be automatically initialized as a Git repository unless you started from GitHub's blank template. This means you can immediately use Git for local source control, such as adding and committing files.

However, if you delete an unpublished codespace, or if it's automatically deleted by being left unused for the duration of the retention period, then your work will be deleted too. To persist your work, and to allow others to work on your project, you will need to publish your codespace to a repository on GitHub.

> [!NOTE]
> If an unpublished codespace is currently billed to an organization, publishing the codespace transfers ownership and billing of the codespace to your personal account. See [GitHub Codespaces](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces#how-costs-are-assigned-to-a-billable-account).


### Publishing from VS Code

If you're working in a codespace, you can publish it from the VS Code web client or desktop application.

1. In the Activity Bar, click the **Source Control** view.

   ![Screenshot of the VS Code Activity Bar with the source control button highlighted with an orange outline.](/assets/images/help/codespaces/source-control-activity-bar-button.png)

1. To stage your changes, click **+** next to the file you've added or changed, or next to **Changes** if you've changed multiple files and you want to stage them all.

   ![Screenshot of the "Source control" side bar with the staging button (a plus sign), to the right of "Changes," highlighted with a dark orange outline.](/assets/images/help/codespaces/codespaces-commit-stage.png)

   > [!NOTE]
   > If you start from GitHub's blank template, you will not see a list of changes unless you have already initialized your directory as a Git repository. To publish codespaces created from the blank template, click **Publish to GitHub** in the "Source Control" view, then skip to step 5.

1. To commit your staged changes, type a commit message describing the change you've made, then click **Commit**.

   ![Screenshot of the "Source control" side bar with a commit message and, below it, the "Commit" button both highlighted with a dark orange outline.](/assets/images/help/codespaces/vscode-commit-button.png)

1. Click **Publish Branch**.

   ![Screenshot of the "Source control" side bar showing the "Publish Branch" button.](/assets/images/help/codespaces/vscode-publish-branch-button.png)

1. In the "Repository Name" dropdown, type a name for your new repository, then select **Publish to GitHub private repository** or **Publish to GitHub public repository**.

   ![Screenshot of the repository name dropdown in VS Code. Two options are shown, for publishing to a private or a public repository.](/assets/images/help/codespaces/choose-new-repository.png)

   The owner of the new repository will be the GitHub account with which you created the codespace.
1. Optionally, in the pop-up that appears in the lower right corner of the editor, click **Open on GitHub** to view the new repository on GitHub.

   ![Screenshot of a confirmation message for a successfully published repository, showing the "Open on GitHub" button.](/assets/images/help/codespaces/open-on-github.png)


When a codespace is published, you have access to a greater range of options to customize your GitHub Codespaces experience. For example, you can:

* Change the machine type of your codespace to make sure you're using resources appropriate for the work you're doing (see [Changing The Machine Type For Your Codespace](https://docs.github.com/en/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)).
* Allow GitHub to automatically use GPG to sign commits you make in your codespace (see [Managing Gpg Verification For GitHub Codespaces](https://docs.github.com/en/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)).
* Share secrets with your codespace (see [Managing Your Account Specific Secrets For GitHub Codespaces](https://docs.github.com/en/codespaces/managing-your-codespaces/managing-your-account-specific-secrets-for-github-codespaces)).

### Publishing from GitHub

You can publish an unpublished codespace from the "Your codespaces" page on GitHub. This is useful if you want to publish a codespace that you don't currently have open in your browser. If you do this, your work will be preserved in a repository, but there won't be a link between your existing codespace and the new repository. However, you can navigate to the new repository and create a codespace from there, and this codespace will be connected to the repository.

1. In the top-left corner of GitHub, select {% octicon "three-bars" aria-label="Open global navigation menu" %}, then click **{% octicon "codespaces" aria-hidden="true" aria-label="codespaces" %} Codespaces** to take you to the "Your codespaces" page at [github.com/codespaces](https://github.com/codespaces).

1. Next to the unpublished codespace, click the ellipsis (**...**), then select **Publish to a new repository**.

   ![Screenshot of the dropdown menu for a codespace, showing the "Publish to a new repository" option.](/assets/images/help/codespaces/publish-to-new-repository.png)

1. Choose a name for your new repository, set it as **Public** or **Private**, and click **Create repository**.

   ![Screenshot of the "Publish to a new repository" dropdown, with the "Name" field, "Public" and "Private" options, and "Create repository" button.](/assets/images/help/codespaces/template-new-repository-settings.png)

1. Optionally, to view the new repository, click **See repository**.

## Further reading

* [Creating A Codespace For A Repository](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository)
* [Understanding The Codespace Lifecycle](https://docs.github.com/en/codespaces/about-codespaces/understanding-the-codespace-lifecycle)
* [Using Source Control In Your Codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/using-source-control-in-your-codespace)
