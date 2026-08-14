# Renaming a file

## Renaming a file on GitHub

Renaming a file also gives you the opportunity to [move the file to a new location](/repositories/working-with-files/managing-files/moving-a-file-to-a-new-location).

> [!TIP]
> * If you try to rename a file in a repository that you don’t have access to, we will fork the project to your personal account and help you send [a pull request](/pull-requests/reference/pull-requests) to the original repository after you commit your change.
> * File names created via the web interface can only contain alphanumeric characters and hyphens (`-`). To use other characters, create and commit the files locally and then push them to the repository.
> * Some files, such as images, require that you rename them from the command line. For more information, see [Renaming a file using the command line](#renaming-a-file-using-the-command-line).

1. In your repository, browse to the file you want to rename.
1. In the upper right corner of the file view, click {% octicon "pencil" aria-label="Edit file" %} to open the file editor.
   ![Screenshot of a file. In the header, a button, labeled with a pencil icon, is outlined in dark orange.](/assets/images/help/repository/edit-file-edit-button.png)

1. In the filename field, change the name of the file to the new filename you want. You can also update the contents of your file at the same time.
![Screenshot showing a repository file open for editing in the web browser. The file name field is active and highlighted with a dark orange outline.](/assets/images/help/repository/changing-file-name.png)
1. Click **Commit changes...**

1. In the "Commit message" field, type a short, meaningful commit message that describes the change you made to the file. You can attribute the commit to more than one author in the commit message. For more information, see [Creating A Commit With Multiple Authors](https://docs.github.com/en/pull-requests/how-tos/commit-changes/creating-a-commit-with-multiple-authors).

1. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is the default branch, you should choose to create a new branch for your commit and then create a pull request. For more information, see [Creating A Pull Request](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request).

   ![Screenshot of a GitHub pull request showing a radio button to commit directly to the main branch or to create a new branch. New branch is selected.](/assets/images/help/repository/choose-commit-branch.png)

1. Click **Commit changes** or **Propose changes**.


## Renaming a file using the command line

You can use the command line to rename any file in your repository.

Many files can be renamed directly on GitHub, but some files, such as images, require that you rename them from the command line.

This procedure assumes you've already:

* [Created a repository on GitHub](/repositories/creating-and-managing-repositories/creating-a-new-repository), or have an existing repository owned by someone else you'd like to contribute to
* [Cloned the repository locally on your computer](/repositories/creating-and-managing-repositories/cloning-a-repository)


1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Change the current working directory to your local repository.

1. Rename the file, specifying the old file name and the new name you'd like to give the file. This will stage your change for commit.

   ```shell
   git mv OLD-FILENAME NEW-FILENAME
   ```

1. Use `git status` to check the old and new file names.

   ```shell
   $ git status
   > # On branch YOUR-BRANCH
   > # Changes to be committed:
   > #   (use "git reset HEAD <file>..." to unstage)
   > #
   > #     renamed: OLD-FILENAME -> NEW-FILENAME
   > #
   ```

1. Commit the file that you've staged in your local repository.


   ```shell
   $ git commit -m "Rename file"
   # Commits the tracked changes and prepares them to be pushed to a remote repository.
   # To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.

   ```

1. [Push the changes](/get-started/using-git/pushing-commits-to-a-remote-repository) in your local repository to your GitHub Enterprise Server instance.

   ```shell
   $ git push origin YOUR_BRANCH
   # Pushes the changes in your local repository up to the remote repository you specified as the origin
   ```
