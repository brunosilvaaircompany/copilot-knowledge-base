# Adding support resources to your project

To direct people to specific support resources, you can add a SUPPORT file to your repository's root, `docs`, or `.github` folder. When someone creates an issue in your repository, they will see a link to your project's SUPPORT file.

![Screenshot of the new issue form. In the right sidebar, in the "Helpful resources" section, a link labeled "Support" is outlined in dark orange.](/assets/images/help/issues/support-guidelines-in-issue.png)

You can create default support resources for your organization or personal account. For more information, see [Creating A Default Community Health File](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file).

> [!TIP]
> To help people find your support guidelines, you can link to your SUPPORT file from other places in your repository, such as your [README file](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes).

## Adding support resources to your project

1. On GitHub, navigate to the main page of the repository.

1. Above the list of files, select the **Add file** {% octicon "triangle-down" aria-label="The downwards-facing triangle icon" %} dropdown menu, then click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Create new file**.

   Alternatively, you can click {% octicon "plus" aria-label="The plus sign icon" %} in the file tree view on the left.

   ![Screenshot of the main page of a repository highlighting both the "Add file" and the "plus sign" icon, described above, with an orange outline.](/assets/images/help/repository/add-file-buttons.png)

1. In the file name field, type _SUPPORT.md_ (with all caps).
1. On the **Edit new file** tab, add information about how people can get support for your project.
1. To review your SUPPORT file, click **Preview**.
1. Click **Commit changes...**

1. In the "Commit message" field, type a short, meaningful commit message that describes the change you made to the file. You can attribute the commit to more than one author in the commit message. For more information, see [Creating A Commit With Multiple Authors](https://docs.github.com/en/pull-requests/how-tos/commit-changes/creating-a-commit-with-multiple-authors).


1. If you have more than one email address associated with your account on GitHub, click the email address drop-down menu and select the email address to use as the Git author email address. Only verified email addresses appear in this drop-down menu. If you enabled email address privacy, then a no-reply will be the default commit author email address. For more information about the exact form the no-reply email address can take, see [Setting Your Commit Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).

    ![Screenshot of a GitHub pull request showing a dropdown menu with options to choose the commit author email address. octocat@github.com is selected.](/assets/images/help/repository/choose-commit-email-address.png)


1. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is the default branch, you should choose to create a new branch for your commit and then create a pull request. For more information, see [Creating A Pull Request](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request).

   ![Screenshot of a GitHub pull request showing a radio button to commit directly to the main branch or to create a new branch. New branch is selected.](/assets/images/help/repository/choose-commit-branch.png)

1. Click **Commit changes** or **Propose changes**.
