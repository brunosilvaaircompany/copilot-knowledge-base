# Exporting changes to a branch

## About exporting changes

While using GitHub Codespaces, you may want to export your changes to a branch without launching your codespace. This can be useful when you have hit a [spending limit](/billing/how-tos/set-up-budgets) or have a general issue accessing your codespace.

You can export your changes in one of several ways, depending on how you created the codespace. In every case, only the Git branch that is currently checked out in the codespace is exported. Work contained in other branches is not exported.

* If you created the codespace from a repository to which you have write access, you can export your changes to a new branch of the repository.
* If you created the codespace from a repository to which you only have read access, you can export your changes to a fork of the repository. GitHub Codespaces will create a new fork for you, or link your codespace to an existing fork if you already have one for the repository, and export your changes to a new branch of the fork. For more information, see [Using Source Control In Your Codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/using-source-control-in-your-codespace#about-automatic-forking).
* If you created the codespace from a template, and have not yet published it, you can publish the codespace to a new repository.

> [!NOTE]
> GitHub blocks pushes containing files larger than 100 MiB. If your codespace contains large files you will not be able to export your changes to a branch or fork. For more information, see [About Large Files On GitHub](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github).

## Exporting changes to a branch

The following steps describe how to export your changes to a branch or fork. For information on exporting an unpublished codespace to a new repository, see [Creating A Codespace From A Template](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-from-a-template#publishing-from-github).

1. In the top-left corner of GitHub, select {% octicon "three-bars" aria-label="Open global navigation menu" %}, then click **{% octicon "codespaces" aria-hidden="true" aria-label="codespaces" %} Codespaces** to take you to the "Your codespaces" page at [github.com/codespaces](https://github.com/codespaces).
 Or, for an individual repository, click the **{% octicon "code" aria-hidden="true" aria-label="code" %} Code** menu.
1. Click the ellipsis (**...**) to the right of the codespace you want to export from.
1. Select **{% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} Export changes to a branch** or **{% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} Export changes to a fork**.

   ![Screenshot of a list of codespaces with the dropdown menu for one of them displayed, showing the "Export changes to a branch" option.](/assets/images/help/codespaces/export-changes-to-a-branch.png)

1. In the dialog box, click **Create branch** or **Create fork**.

The name of the new branch will be the permanent name of your codespace prefixed by the string `codespace-`, for example `codespace-ideal-space-engine-w5vg5ww5p793g7g9`.
