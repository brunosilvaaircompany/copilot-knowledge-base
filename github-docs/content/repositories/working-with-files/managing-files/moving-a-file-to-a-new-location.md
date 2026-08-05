# Moving a file to a new location

In addition to changing the file location, you can also [update the contents of your file](/repositories/working-with-files/managing-files/editing-files), or [give it a new name](/repositories/working-with-files/managing-files/renaming-a-file) in the same commit.

## Moving a file to a new location on GitHub

> [!TIP]
> * If you try to move a file in a repository that you don’t have access to, we'll fork the project to your personal account and help you send [a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to the original repository after you commit your change.
> * Some files, such as images, require that you move them from the command line. For more information, see [Moving A File To A New Location](https://docs.github.com/en/repositories/working-with-files/managing-files/moving-a-file-to-a-new-location).
> * If a repository has any protected branches, you can't edit or upload files in the protected branch using GitHub. You can use GitHub Desktop to move your changes to a new branch and commit them. For more information, see [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches) and [Committing And Reviewing Changes To Your Project In GitHub Desktop](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop).


1. In your repository, browse to the file you want to move.
1. In the upper right corner of the file view, click {% octicon "pencil" aria-label="Edit file" %} to open the file editor.
   ![Screenshot of a file. In the header, a button, labeled with a pencil icon, is outlined in dark orange.](/assets/images/help/repository/edit-file-edit-button.png)


   

   > [!NOTE]
   > Instead of editing and committing the file using the default file editor, you can optionally choose to use the [github.dev code editor](/codespaces/the-githubdev-web-based-editor) by selecting the {% octicon "triangle-down" aria-label="More edit options" %} dropdown menu and clicking **github.dev**. You can also clone the repository and edit the file locally via GitHub Desktop by clicking **GitHub Desktop**.
   >
   > ![Screenshot of a file. In the header, a downwards-facing triangle icon is outlined in dark orange.](/assets/images/help/repository/edit-file-edit-dropdown.png)

   

1. In the filename field, change the name of the file using these guidelines:
    * To move the file **into a subfolder**, type the name of the folder you want, followed by `/`. Your new folder name becomes a new item in the navigation breadcrumbs.
    * To move the file into a directory **above the file's current location**, place your cursor at the beginning of the filename field, then either type `../` to jump up one full directory level, or type the `backspace` key to edit the parent folder's name.
1. Click **Commit changes...**

1. In the "Commit message" field, type a short, meaningful commit message that describes the change you made to the file. You can attribute the commit to more than one author in the commit message. For more information, see [Creating A Commit With Multiple Authors](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors).

1. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is the default branch, you should choose to create a new branch for your commit and then create a pull request. For more information, see [Creating A Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

   ![Screenshot of a GitHub pull request showing a radio button to commit directly to the main branch or to create a new branch. New branch is selected.](/assets/images/help/repository/choose-commit-branch.png)

1. Click **Commit changes** or **Propose changes**.


## Moving a file to a new location using the command line

You can use the command line to move files within a repository by removing the file from the old location and then adding it in the new location.

Many files can be [moved directly on GitHub](/repositories/working-with-files/managing-files/moving-a-file-to-a-new-location), but some files, such as images, require that you move them from the command line.

This procedure assumes you've already:

* [Created a repository on GitHub](/repositories/creating-and-managing-repositories/creating-a-new-repository), or have an existing repository owned by someone else you'd like to contribute to
* [Cloned the repository locally on your computer](/repositories/creating-and-managing-repositories/cloning-a-repository)


1. On your computer, move the file to a new location within the directory that was created locally on your computer when you cloned the repository.
1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Use `git status` to check the old and new file locations.

   ```shell
   $ git status
   > # On branch YOUR-BRANCH
   > # Changes not staged for commit:
   > #   (use "git add/rm <file>..." to update what will be committed)
   > #   (use "git checkout -- <file>..." to discard changes in working directory)
   > #
   > #     deleted:    /OLD-FOLDER/IMAGE.PNG
   > #
   > # Untracked files:
   > #   (use "git add <file>..." to include in what will be committed)
   > #
   > #     /NEW-FOLDER/IMAGE.PNG
   > #
   > # no changes added to commit (use "git add" and/or "git commit -a")
   ```

1. Stage the file for commit to your local repository.
 This will delete, or `git rm`, the file from the old location and add, or `git add`, the file to the new location.

   ```shell
   $ git add .
   # Adds the file to your local repository and stages it for commit.
   # To unstage a file, use 'git reset HEAD YOUR-FILE'.

   ```

1. Use `git status` to check the changes staged for commit.

   ```shell
   $ git status
   > # On branch YOUR-BRANCH
   > # Changes to be committed:
   > #   (use "git reset HEAD <file>..." to unstage)
   > #
   > #    renamed:    /old-folder/image.png -> /new-folder/image.png
   # Displays the changes staged for commit
   ```

1. Commit the file that you've staged in your local repository.


   ```shell
   $ git commit -m "Move file to new directory"
   # Commits the tracked changes and prepares them to be pushed to a remote repository.
   # To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.

   ```

1. [Push the changes](/get-started/using-git/pushing-commits-to-a-remote-repository) in your local repository to your GitHub Enterprise Server instance.

   ```shell
   $ git push origin YOUR_BRANCH
   # Pushes the changes in your local repository up to the remote repository you specified as the origin
   ```
