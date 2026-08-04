# Quickstart for repositories

## Create a repository

GitHub repositories store a variety of projects. In this guide, you'll create a repository and commit your first change.

{% webui %}

1. In the upper-right corner of any page, select {% octicon "plus" aria-label="Create something new" %}, then click **New repository**.

   ![Screenshot of a GitHub dropdown menu showing options to create new items. The menu item "New repository" is outlined in dark orange.](/assets/images/help/repository/repo-create-global-nav-update.png)

1. Type a short, memorable name for your repository. For example, "hello-world".

   ![Screenshot of the first step in creating a repository. The "Repository name" field contains the text "hello-world" and is outlined in dark orange.](/assets/images/help/repository/create-repository-name.png)
1. Optionally, add a description of your repository. For example, "My first repository on GitHub."
1. Choose a repository visibility. For more information, see [About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).

1. Toggle **Add README** to **On**.

1. Click **Create repository**.


Congratulations! You've successfully created your first repository, and initialized it with a _README_ file.

{% endwebui %}

{% cli %}

> [!NOTE]
> To learn more about GitHub CLI, see [About GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli).


1. In the command line, navigate to the directory where you would like to create a local clone of your new project.
1. To create a repository for your project, use the `gh repo create` subcommand. When prompted, select **Create a new repository on GitHub from scratch** and enter the name of your new project. If you want your project to belong to an organization instead of to your personal account, specify the organization name and project name with `organization-name/project-name`.
1. Follow the interactive prompts. To clone the repository locally, confirm yes when asked if you would like to clone the remote project directory.
1. Alternatively, to skip the prompts supply the repository name and a visibility flag (`--public`, `--private`, or `--internal`). For example, `gh repo create project-name --public`. To clone the repository locally, pass the `--clone` flag. For more information about possible arguments, see the [GitHub CLI manual](https://cli.github.com/manual/gh_repo_create).

{% endcli %}

## Commit your first change

{% webui %}

A [commit](/get-started/learning-about-github/github-glossary#commit) is like a snapshot of all the files in your project at a particular point in time.

When you created your new repository, you initialized it with a _README_ file. _README_ files are a great place to describe your project in more detail, or add some documentation such as how to install or use your project. The contents of your _README_ file are automatically shown on the front page of your repository.

Let's commit a change to the README file.

1. In your repository's list of files, select **README.md**.

   ![Screenshot of a list of files in a repository. A file name, "README.md", is highlighted with an orange outline.](/assets/images/help/repository/create-commit-open-readme.png)
1. In the upper right corner of the file view, click {% octicon "pencil" aria-label="Edit file" %} to open the file editor.
   ![Screenshot of a file. In the header, a button, labeled with a pencil icon, is outlined in dark orange.](/assets/images/help/repository/edit-file-edit-button.png)

1. In the text box, type some information about yourself.
1. Above the new content, click **Preview**.

   ![Screenshot of a file in edit mode. Above the file's contents, a tab labeled "Preview" is outlined in dark orange.](/assets/images/help/repository/edit-readme-preview-changes.png)

1. Review the changes you made to the file. If you select **Show diff**, you will see the new content in green.

   ![Screenshot of a file preview. The "Show diff" checkbox is enabled and additions to the file are shown with a green line. Both are outlined in orange.](/assets/images/help/repository/create-commit-review.png)
1. Click **Commit changes...**

1. In the "Commit message" field, type a short, meaningful commit message that describes the change you made to the file. You can attribute the commit to more than one author in the commit message. For more information, see [Creating A Commit With Multiple Authors](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors).

1. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is the default branch, you should choose to create a new branch for your commit and then create a pull request. For more information, see [Creating A Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

   ![Screenshot of a GitHub pull request showing a radio button to commit directly to the main branch or to create a new branch. New branch is selected.](/assets/images/help/repository/choose-commit-branch.png)

1. Click **Commit changes** or **Propose changes**.


{% endwebui %}

{% cli %}

Now that you have created a project, you can start committing changes.

_README_ files are a great place to describe your project in more detail, or add some documentation such as how to install or use your project. The contents of your _README_ file are automatically shown on the front page of your repository. Follow these steps to add a _README_ file.

1. In the command line, navigate to the root directory of your new project. (This directory was created when you ran the `gh repo create` command.)
1. Create a _README_ file with some information about the project.

    ```shell
    echo "info about this project" >> README.md
    ```

1. Enter `git status`. You will see that you have an untracked `README.md` file.

    ```shell
    $ git status

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
      README.md

    nothing added to commit but untracked files present (use "git add" to track)
    ```

1. Stage and commit the file.

    ```shell
    git add README.md && git commit -m "Add README"
    ```

1. Push the changes to your branch.

    ```shell
    git push --set-upstream origin HEAD
    ```

{% endcli %}

## Next steps

You have now created a repository, including a _README_ file, and created your first commit on GitHub.

{% webui %}

* You can now clone a GitHub repository to create a local copy on your computer. From your local repository you can commit, and create a pull request to update the changes in the upstream repository. For more information, see [Cloning A Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) and [Set Up Git](https://docs.github.com/en/get-started/git-basics/set-up-git).

{% endwebui %}

* Secure your repository using GitHub's available security features. For more information, see [Quickstart For Securing Your Repository](https://docs.github.com/en/code-security/getting-started/quickstart-for-securing-your-repository).

* You can find interesting projects and repositories on GitHub and make changes to them by creating a fork of the repository. Forking a repository will allow you to make changes to another repository without affecting the original. For more information, see [Fork A Repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).


* Each repository on GitHub is owned by a person or an organization. You can interact with the people, repositories, and organizations by connecting and following them on GitHub. For more information, see [Discovering Projects On GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/discovering-projects-on-github).


* GitHub has a great support community where you can ask for help and talk to people from around the world. Join the conversation on [GitHub Community](https://github.com/orgs/community/discussions).
