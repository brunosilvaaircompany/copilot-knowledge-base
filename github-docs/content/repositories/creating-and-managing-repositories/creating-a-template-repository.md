# Creating a template repository

## About template repositories

You can create a template from an existing repository. Anyone with access to the template repository can create a new repository based on the template with the same directory structure, branches, and files.


## Creating a template repository

To create a template repository, you must create a repository, then make the repository a template. For more information about creating a repository, see [Creating A New Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).

After you make your repository a template, anyone with access to the repository can generate a new repository with the same directory structure and files as your default branch. They can also choose to include all the other branches in your repository. Branches created from a template have unrelated histories, so you cannot create pull requests or merge between the branches. For more information, see [Creating A Repository From A Template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

> [!NOTE]
> Your template repository cannot include files stored using Git LFS.



> [!NOTE]
> You can use a template repository as starter code for an assignment on GitHub Classroom. For more information, see [Create An Assignment From A Template Repository](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-assignment-from-a-template-repository).



1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. Select **Template repository**.
