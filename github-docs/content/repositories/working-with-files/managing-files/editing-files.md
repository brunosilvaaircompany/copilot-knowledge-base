# Editing files

## Editing files in your repository

> [!TIP]
> If a repository has any protected branches, you can't edit or upload files in the protected branch using GitHub. You can use GitHub Desktop to move your changes to a new branch and commit them. For more information, see [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches) and [Committing And Reviewing Changes To Your Project In GitHub Desktop](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop).


> [!NOTE]
> GitHub's file editor uses [CodeMirror](https://codemirror.net/).

1. In your repository, browse to the file you want to edit.
1. In the upper right corner of the file view, click {% octicon "pencil" aria-label="Edit file" %} to open the file editor.
   ![Screenshot of a file. In the header, a button, labeled with a pencil icon, is outlined in dark orange.](/assets/images/help/repository/edit-file-edit-button.png)


   

   > [!NOTE]
   > Instead of editing and committing the file using the default file editor, you can optionally choose to use the [github.dev code editor](/codespaces/the-githubdev-web-based-editor) by selecting the {% octicon "triangle-down" aria-label="More edit options" %} dropdown menu and clicking **github.dev**. You can also clone the repository and edit the file locally via GitHub Desktop by clicking **GitHub Desktop**.
   >
   > ![Screenshot of a file. In the header, a downwards-facing triangle icon is outlined in dark orange.](/assets/images/help/repository/edit-file-edit-dropdown.png)

   

1. In the text box, make any changes you need to the file.
1. Above the new content, click **Preview**.

   ![Screenshot of a file in edit mode. Above the file's contents, a tab labeled "Preview" is outlined in dark orange.](/assets/images/help/repository/edit-readme-preview-changes.png)

1. Click **Commit changes...**

1. In the "Commit message" field, type a short, meaningful commit message that describes the change you made to the file. You can attribute the commit to more than one author in the commit message. For more information, see [Creating A Commit With Multiple Authors](https://docs.github.com/en/pull-requests/how-tos/commit-changes/creating-a-commit-with-multiple-authors).


1. If you have more than one email address associated with your account on GitHub, click the email address drop-down menu and select the email address to use as the Git author email address. Only verified email addresses appear in this drop-down menu. If you enabled email address privacy, then a no-reply will be the default commit author email address. For more information about the exact form the no-reply email address can take, see [Setting Your Commit Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).

    ![Screenshot of a GitHub pull request showing a dropdown menu with options to choose the commit author email address. octocat@github.com is selected.](/assets/images/help/repository/choose-commit-email-address.png)


1. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is the default branch, you should choose to create a new branch for your commit and then create a pull request. For more information, see [Creating A Pull Request](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request).

   ![Screenshot of a GitHub pull request showing a radio button to commit directly to the main branch or to create a new branch. New branch is selected.](/assets/images/help/repository/choose-commit-branch.png)

1. Click **Commit changes** or **Propose changes**.


## Editing files in another user's repository

When you edit a file in another user's repository, we'll automatically [fork the repository](/pull-requests/how-tos/work-with-forks/fork-a-repo) and [open a pull request](/pull-requests/how-tos/create-pull-requests/creating-a-pull-request) for you.

1. In another user's repository, browse to the folder that contains the file you want to edit. Click the name of the file you want to edit.
1. Above the file content, click {% octicon "pencil" aria-label="Edit file" %}. On the page that appears, click **Fork this repository**.
1. In the text box, make any changes you need to the file.
1. Above the new content, click **Preview**.

   ![Screenshot of a file in edit mode. Above the file's contents, a tab labeled "Preview" is outlined in dark orange.](/assets/images/help/repository/edit-readme-preview-changes.png)

1. Click **Commit changes...**

1. In the "Commit message" field, type a short, meaningful commit message that describes the change you made to the file. You can attribute the commit to more than one author in the commit message. For more information, see [Creating A Commit With Multiple Authors](https://docs.github.com/en/pull-requests/how-tos/commit-changes/creating-a-commit-with-multiple-authors).


1. If you have more than one email address associated with your account on GitHub, click the email address drop-down menu and select the email address to use as the Git author email address. Only verified email addresses appear in this drop-down menu. If you enabled email address privacy, then a no-reply will be the default commit author email address. For more information about the exact form the no-reply email address can take, see [Setting Your Commit Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).

    ![Screenshot of a GitHub pull request showing a dropdown menu with options to choose the commit author email address. octocat@github.com is selected.](/assets/images/help/repository/choose-commit-email-address.png)


1. Click **Propose changes**.
1. Type a title and description for your pull request.
1. Click **Create pull request**.
