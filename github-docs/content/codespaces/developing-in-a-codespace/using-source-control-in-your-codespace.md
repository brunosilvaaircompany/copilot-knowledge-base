# Using source control in your codespace

## About source control in GitHub Codespaces

You can perform all the Git actions you need directly within your codespace. For example, you can fetch changes from a remote repository, switch branches, create a new branch, commit and push changes, and create a pull request. You can use the integrated terminal within your codespace to enter Git commands, or you can click icons and menu options to complete all the most common Git tasks. This guide explains how to use the graphical user interface for source control.

{% vscode %}

For more information about Git support in Visual Studio Code, see [Using Version Control in VS Code](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support) in the Visual Studio Code documentation.

{% endvscode %}

{% webui %}

Source control in the Visual Studio Code web client uses the same workflow as the Visual Studio Code desktop application. For more information, see [Using Version Control in VS Code](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support) in the Visual Studio Code documentation.

{% endwebui %}

A typical workflow for updating a file using GitHub Codespaces would be:

* From the default branch of your repository on GitHub, create a codespace. See [Creating A Codespace For A Repository](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository).
* In your codespace, create a new branch to work on.
* Make your changes and save them.
* Commit the change.
* Raise a pull request.

> [!NOTE]
> By default, GitHub Codespaces uses the HTTPS protocol to transfer data to and from a remote repository, and authenticates with a `GITHUB_TOKEN` configured with read and write access to the repository from which you create the codespace. If you're having issues with authentication, see [Troubleshooting Authentication To A Repository](https://docs.github.com/en/codespaces/troubleshooting/troubleshooting-authentication-to-a-repository).

## About automatic forking

To create a codespace for a repository for which you only have read access, you must have permission to fork the repository.

You do not need to fork the repository before you create the codespace. For example, you can create a codespace from the repository to look at the project and make experimental changes, then delete the codespace if you no longer need it.

If you make a commit from the codespace, or push a new branch, GitHub Codespaces either creates a fork of the repository under your account and links it to your codespace, or it links your codespace to an existing fork if you already have one for the repository. You can then push your changes to the fork and create a pull request to propose the changes to the upstream repository.

If you make a commit from the command line, you will see a prompt asking if you would like to proceed with linking your codespace to a new or existing fork. Enter `y` to proceed. If you commit changes from the **Source Control** view in VS Code, your codespace is automatically linked to a fork without you being prompted.

> [!NOTE]
> * If you delete your fork repository, then any codespaces linked to the fork are deleted, even if you originally created them from the upstream repository.
> * If you make a commit from the command line and refuse the new fork by entering `n`, you should push your changes from the command line rather than from VS Code's Source Control view. If you use the Source Control view, VS Code will still try to create a fork for you on push.

When GitHub Codespaces creates a fork, or links your codespace to an existing fork, the following things happen.

* The access token associated with your codespace is updated to include `read` and `write` permission to your fork, in addition to `read` permission to the upstream repository.
* In your Git settings, the upstream repository is reassigned to the name `upstream`, and the fork is added as a new remote repository under the name `origin`.

By default, source control commands that you access from your editor's user interface, such as the **Sync Changes** button in VS Code, target your fork. If you're working from the command line, you can use `origin` to refer to your fork and `upstream` to refer to the upstream repository. For example, you can fetch changes from the upstream repository to ensure your codespace is up to date with the latest changes to the project.

```shell
git fetch upstream
```

When you have made some changes, you can push them to a feature branch of your fork.

```shell
git push origin my-feature-branch
```

For more information, see [About Forks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks).

{% webui %}

## Publishing a codespace created from a template

When you create a codespace from a template repository or a template on the "Your codespaces" page, the work you do won't be stored in a repository on GitHub until you publish your codespace. For more information, see [Creating A Codespace From A Template](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-from-a-template#publishing-to-a-repository-on-github).

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


## Creating or switching branches

1. If the current branch is not shown in the status bar, at the bottom of your codespace, right-click the status bar and select **Source control**.
1. Click the branch name in the status bar.

   ![Screenshot of the branch name displayed in the status bar of VS Code.](/assets/images/help/codespaces/branch-in-status-bar.png)

1. In the dropdown, either click the branch you want to switch to, or enter the name for a new branch and click **Create new branch**.

   ![Screenshot of the dropdown for creating a new branch in VS Code.](/assets/images/help/codespaces/create-new-branch.png)


> [!TIP]
> If someone has recently changed a file on the remote repository, in the branch you switched to, you may not see those changes until you pull the changes into your codespace.

## Committing your changes

1. In the Activity Bar, click the **Source Control** view.

   ![Screenshot of the VS Code Activity Bar with the source control button highlighted with an orange outline.](/assets/images/help/codespaces/source-control-activity-bar-button.png)

1. To stage your changes, click {% octicon "plus" aria-label="Stage changes" %} next to the file you've changed, or next to **Changes** if you've changed multiple files and you want to stage them all.

   ![Screenshot of the "Source control" side bar with the staging button (a plus sign), to the right of "Changes," highlighted with a dark orange outline.](/assets/images/help/codespaces/codespaces-commit-stage.png)

1. In the text box, type a commit message describing the change you've made.

   ![Screenshot of the "Source control" side bar with a commit message entered into the text box above the "Commit" button.](/assets/images/help/codespaces/codespaces-commit-commit-message.png)  

1. Click the down arrow at the right side of the **Commit** button, and select **Commit & Push** from the dropdown menu.

   ![Screenshot of the dropdown for the "Commit" button. The option "Commit & Push" is highlighted with a dark orange outline.](/assets/images/help/codespaces/commit-and-push-option.png)  

## Pulling changes from the remote repository

You can pull changes from the remote repository into your codespace at any time.

1. In the Activity Bar, click the **Source Control** view.

   ![Screenshot of the VS Code Activity Bar with the source control button highlighted with an orange outline.](/assets/images/help/codespaces/source-control-activity-bar-button.png)

1. At the top of the side bar, click {% octicon "kebab-horizontal" aria-label="Views and More Actions..." %}.

   ![Screenshot of the "Source control" side bar. The ellipsis button (three dots) is highlighted with a dark orange outline.](/assets/images/help/codespaces/source-control-ellipsis-button.png)

1. In the dropdown menu, click **Pull**.

If the dev container configuration has been changed since you created the codespace, you can apply the changes by rebuilding the container for the codespace. For more information, see [Introduction To Dev Containers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace).

## Setting your codespace to automatically fetch new changes

You can set your codespace to automatically fetch details of any new commits that have been made to the remote repository. This allows you to see whether your local copy of the repository is out of date, in which case you may choose to pull in the new changes.

If the fetch operation detects new changes on the remote repository, you'll see the number of new commits in the status bar. You can then pull the changes into your local copy.

1. Click the **Manage** button at the bottom of the Activity Bar.

   ![Screenshot of the bottom of the Activity Bar. The Manage button (labeled with a gear symbol) is highlighted with a dark orange outline.](/assets/images/help/codespaces/manage-button.png)

1. In the menu, click **Settings**.
1. On the Settings page, search for: `autofetch`.

   ![Screenshot of the "Settings" tab. The search text "autofetch" is highlighted with a dark orange outline.](/assets/images/help/codespaces/autofetch-search.png)

1. To fetch details of updates for all remotes registered for the current repository, set **Git: Autofetch** to `all`.

   ![Screenshot of the "Git: Autofetch" setting, set to "all."](/assets/images/help/codespaces/autofetch-all.png)

1. If you want to change the number of seconds between each automatic fetch, edit the value of **Git: Autofetch Period**.

## Raising a pull request

1. After you've committed changes to your local copy of the repository, click the pull request icon at the top of the "Source Control" side bar.

   ![Screenshot of the top of the "Source Control" side bar. The pull request icon is highlighted with a dark orange outline.](/assets/images/help/codespaces/codespaces-commit-pr-button.png)  

1. Check that the local branch and repository you're merging from, and the remote branch and repository you're merging into, are correct. Then give the pull request a title and a description.

   ![Screenshot of the "GitHub Pull Request" side bar with a form for creating a pull request, including "Title" and "Description" fields.](/assets/images/help/codespaces/codespaces-commit-pr.png)

1. Click **Create**.


## Pushing changes to your remote repository

You can push changes you've saved and committed. This applies those changes to the upstream branch on the remote repository. You might want to do this if you're not yet ready to create a pull request, or if you prefer to create a pull request on GitHub.

1. At the top of the side bar, click {% octicon "kebab-horizontal" aria-label="Views and More Actions..." %}.

   ![Screenshot of the "Source control" side bar. The ellipsis button (three dots) is highlighted with a dark orange outline.](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)

1. In the dropdown menu, click **Push**.


{% endwebui %}

{% vscode %}

## Publishing a codespace created from a template

When you create a codespace from a template repository or a template on the "Your codespaces" page, the work you do won't be stored in a repository on GitHub until you publish your codespace. For more information, see [Creating A Codespace From A Template](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-from-a-template#publishing-to-a-repository-on-github).

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


## Creating or switching branches

1. If the current branch is not shown in the status bar, at the bottom of your codespace, right-click the status bar and select **Source control**.
1. Click the branch name in the status bar.

   ![Screenshot of the branch name displayed in the status bar of VS Code.](/assets/images/help/codespaces/branch-in-status-bar.png)

1. In the dropdown, either click the branch you want to switch to, or enter the name for a new branch and click **Create new branch**.

   ![Screenshot of the dropdown for creating a new branch in VS Code.](/assets/images/help/codespaces/create-new-branch.png)


> [!TIP]
> If someone has recently changed a file on the remote repository, in the branch you switched to, you may not see those changes until you pull the changes into your codespace.

## Committing your changes

1. In the Activity Bar, click the **Source Control** view.

   ![Screenshot of the VS Code Activity Bar with the source control button highlighted with an orange outline.](/assets/images/help/codespaces/source-control-activity-bar-button.png)

1. To stage your changes, click {% octicon "plus" aria-label="Stage changes" %} next to the file you've changed, or next to **Changes** if you've changed multiple files and you want to stage them all.

   ![Screenshot of the "Source control" side bar with the staging button (a plus sign), to the right of "Changes," highlighted with a dark orange outline.](/assets/images/help/codespaces/codespaces-commit-stage.png)

1. In the text box, type a commit message describing the change you've made.

   ![Screenshot of the "Source control" side bar with a commit message entered into the text box above the "Commit" button.](/assets/images/help/codespaces/codespaces-commit-commit-message.png)  

1. Click the down arrow at the right side of the **Commit** button, and select **Commit & Push** from the dropdown menu.

   ![Screenshot of the dropdown for the "Commit" button. The option "Commit & Push" is highlighted with a dark orange outline.](/assets/images/help/codespaces/commit-and-push-option.png)  

## Pulling changes from the remote repository

You can pull changes from the remote repository into your codespace at any time.

1. In the Activity Bar, click the **Source Control** view.

   ![Screenshot of the VS Code Activity Bar with the source control button highlighted with an orange outline.](/assets/images/help/codespaces/source-control-activity-bar-button.png)

1. At the top of the side bar, click {% octicon "kebab-horizontal" aria-label="Views and More Actions..." %}.

   ![Screenshot of the "Source control" side bar. The ellipsis button (three dots) is highlighted with a dark orange outline.](/assets/images/help/codespaces/source-control-ellipsis-button.png)

1. In the dropdown menu, click **Pull**.

If the dev container configuration has been changed since you created the codespace, you can apply the changes by rebuilding the container for the codespace. For more information, see [Introduction To Dev Containers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace).

## Setting your codespace to automatically fetch new changes

You can set your codespace to automatically fetch details of any new commits that have been made to the remote repository. This allows you to see whether your local copy of the repository is out of date, in which case you may choose to pull in the new changes.

If the fetch operation detects new changes on the remote repository, you'll see the number of new commits in the status bar. You can then pull the changes into your local copy.

1. Click the **Manage** button at the bottom of the Activity Bar.

   ![Screenshot of the bottom of the Activity Bar. The Manage button (labeled with a gear symbol) is highlighted with a dark orange outline.](/assets/images/help/codespaces/manage-button.png)

1. In the menu, click **Settings**.
1. On the Settings page, search for: `autofetch`.

   ![Screenshot of the "Settings" tab. The search text "autofetch" is highlighted with a dark orange outline.](/assets/images/help/codespaces/autofetch-search.png)

1. To fetch details of updates for all remotes registered for the current repository, set **Git: Autofetch** to `all`.

   ![Screenshot of the "Git: Autofetch" setting, set to "all."](/assets/images/help/codespaces/autofetch-all.png)

1. If you want to change the number of seconds between each automatic fetch, edit the value of **Git: Autofetch Period**.

## Raising a pull request

1. After you've committed changes to your local copy of the repository, click the pull request icon at the top of the "Source Control" side bar.

   ![Screenshot of the top of the "Source Control" side bar. The pull request icon is highlighted with a dark orange outline.](/assets/images/help/codespaces/codespaces-commit-pr-button.png)  

1. Check that the local branch and repository you're merging from, and the remote branch and repository you're merging into, are correct. Then give the pull request a title and a description.

   ![Screenshot of the "GitHub Pull Request" side bar with a form for creating a pull request, including "Title" and "Description" fields.](/assets/images/help/codespaces/codespaces-commit-pr.png)

1. Click **Create**.


## Pushing changes to your remote repository

You can push changes you've saved and committed. This applies those changes to the upstream branch on the remote repository. You might want to do this if you're not yet ready to create a pull request, or if you prefer to create a pull request on GitHub.

1. At the top of the side bar, click {% octicon "kebab-horizontal" aria-label="Views and More Actions..." %}.

   ![Screenshot of the "Source control" side bar. The ellipsis button (three dots) is highlighted with a dark orange outline.](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)

1. In the dropdown menu, click **Push**.


{% endvscode %}
