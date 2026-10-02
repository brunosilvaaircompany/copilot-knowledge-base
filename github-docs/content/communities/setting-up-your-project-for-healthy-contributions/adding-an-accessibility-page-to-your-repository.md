# Adding an accessibility page to your repository

When a repository contains an `ACCESSIBILITY.md` file, GitHub displays an **Accessibility** tab on the repository overview and links to the page from the repository's **About** section.

GitHub looks for the file in the `.github` directory, the repository root, and the `docs` directory, in that order. If the repository does not contain an accessibility page, it can inherit one from a repository named `.github` that is owned by the organization.

An accessibility page can describe your project's accessibility priorities, supported environments, known barriers, contributor expectations, reporting process, ownership, and maintenance.


## Adding an accessibility page from Community Standards

For a public repository, you can start with the accessibility page template.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "graph" aria-hidden="true" aria-label="graph" %} Insights**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled with a graph icon and "Insights," is outlined in orange.](/assets/images/help/repository/repo-nav-insights-tab.png)

1. In the left sidebar, click **Community Standards**.
1. Under "Additional community file," find "Accessibility," then click **Add** or **Propose**.
1. Replace the instructions in the template with accessibility-related information for your project. The instructions are stored in comments and do not appear when GitHub renders the file.
1. Click **Commit changes...**

1. In the "Commit message" field, type a short, meaningful commit message that describes the change you made to the file. You can attribute the commit to more than one author in the commit message. For more information, see [Creating A Commit With Multiple Authors](https://docs.github.com/en/pull-requests/how-tos/commit-changes/creating-a-commit-with-multiple-authors).

1. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is the default branch, you should choose to create a new branch for your commit and then create a pull request. For more information, see [Creating A Pull Request](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request).

   ![Screenshot of a GitHub pull request showing a radio button to commit directly to the main branch or to create a new branch. New branch is selected.](/assets/images/help/repository/choose-commit-branch.png)

1. Click **Commit changes** or **Propose changes**.



## Creating an accessibility page manually

1. On GitHub, navigate to the main page of the repository.

1. Above the list of files, select the **Add file** {% octicon "triangle-down" aria-label="The downwards-facing triangle icon" %} dropdown menu, then click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Create new file**.

   Alternatively, you can click {% octicon "plus" aria-label="The plus sign icon" %} in the file tree view on the left.

   ![Screenshot of the main page of a repository highlighting both the "Add file" and the "plus sign" icon, described above, with an orange outline.](/assets/images/help/repository/add-file-buttons.png)

1. In the file name field, type _ACCESSIBILITY.md_. To store the file in the `.github` or `docs` directory, type _.github/ACCESSIBILITY.md_ or _docs/ACCESSIBILITY.md_.
1. On the **Edit new file** tab, add accessibility-related information.
1. Click **Commit changes...**

1. In the "Commit message" field, type a short, meaningful commit message that describes the change you made to the file. You can attribute the commit to more than one author in the commit message. For more information, see [Creating A Commit With Multiple Authors](https://docs.github.com/en/pull-requests/how-tos/commit-changes/creating-a-commit-with-multiple-authors).


1. If you have more than one email address associated with your account on GitHub, click the email address drop-down menu and select the email address to use as the Git author email address. Only verified email addresses appear in this drop-down menu. If you enabled email address privacy, then a no-reply will be the default commit author email address. For more information about the exact form the no-reply email address can take, see [Setting Your Commit Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).

    ![Screenshot of a GitHub pull request showing a dropdown menu with options to choose the commit author email address. octocat@github.com is selected.](/assets/images/help/repository/choose-commit-email-address.png)


1. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is the default branch, you should choose to create a new branch for your commit and then create a pull request. For more information, see [Creating A Pull Request](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request).

   ![Screenshot of a GitHub pull request showing a radio button to commit directly to the main branch or to create a new branch. New branch is selected.](/assets/images/help/repository/choose-commit-branch.png)

1. Click **Commit changes** or **Propose changes**.
