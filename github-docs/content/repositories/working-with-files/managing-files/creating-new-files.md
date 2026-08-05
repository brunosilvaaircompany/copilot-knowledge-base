# Creating new files

When creating a file on GitHub, consider the following:

* If you try to create a new file in a repository that you don’t have access to, we will fork the project to your personal account and help you send [a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to the original repository after you commit your change.
* File names created via the web interface can only contain alphanumeric characters and hyphens (`-`). To use other characters, [create and commit the files locally, then push them to the repository on GitHub](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).
* Your repository may have push rulesets enabled. Push rulesets may block creating a new file in the repository based on certain restrictions. Push rulesets apply to the repository's entire fork network. Which means that any push rulesets that are configured in the root repository will also apply to every fork of the repository. For more information, see [About Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets#about-rulesets).


> [!WARNING]
> Never `git add`, `commit`, or `push` sensitive information, for example passwords or API keys, to a remote repository. If you've already added this information, see [Removing Sensitive Data From A Repository](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository).


1. On GitHub, navigate to the main page of the repository.

1. In your repository, browse to the folder where you want to create a file.
1. Above the list of files, select the **Add file** {% octicon "triangle-down" aria-label="The downwards-facing triangle icon" %} dropdown menu, then click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Create new file**.

   Alternatively, you can click {% octicon "plus" aria-label="The plus sign icon" %} in the file tree view on the left.

   ![Screenshot of the main page of a repository highlighting both the "Add file" and the "plus sign" icon, described above, with an orange outline.](/assets/images/help/repository/add-file-buttons.png)

1. In the file name field, type the name and extension for the file. To create subdirectories, type the `/` directory separator.
1. In the file contents text box, type content for the file.
1. To review the new content, above the file contents, click **Preview**.
   ![Screenshot of a file in edit mode. Above the text box for editing file contents, a tab, labeled "Preview", outlined in dark orange.](/assets/images/help/repository/new-file-preview.png)

1. Click **Commit changes...**

1. In the "Commit message" field, type a short, meaningful commit message that describes the change you made to the file. You can attribute the commit to more than one author in the commit message. For more information, see [Creating A Commit With Multiple Authors](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors).


1. If you have more than one email address associated with your account on GitHub, click the email address drop-down menu and select the email address to use as the Git author email address. Only verified email addresses appear in this drop-down menu. If you enabled email address privacy, then a no-reply will be the default commit author email address. For more information about the exact form the no-reply email address can take, see [Setting Your Commit Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).

    ![Screenshot of a GitHub pull request showing a dropdown menu with options to choose the commit author email address. octocat@github.com is selected.](/assets/images/help/repository/choose-commit-email-address.png)


1. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is the default branch, you should choose to create a new branch for your commit and then create a pull request. For more information, see [Creating A Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

   ![Screenshot of a GitHub pull request showing a radio button to commit directly to the main branch or to create a new branch. New branch is selected.](/assets/images/help/repository/choose-commit-branch.png)

1. Click **Commit changes** or **Propose changes**.
