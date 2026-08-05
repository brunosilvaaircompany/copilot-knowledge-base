# Splitting a subfolder out into a new repository

> [!NOTE]
> You need Git version 2.22.0 or later to follow these instructions, otherwise `git filter-repo` will not work.

If you create a new clone of the repository, you won't lose any of your Git history or changes when you split a folder into a separate repository. However, note that the new repository won't have the branches and tags of the original repository.

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.


1. Change the current working directory to the location where you want to create your new repository.

1. Clone the repository that contains the subfolder.

   ```shell
   git clone https://github.com/USERNAME/REPOSITORY-NAME
   ```

1. Change the current working directory to your cloned repository.

   ```shell
   cd REPOSITORY-NAME
   ```

1. To filter out the subfolder from the rest of the files in the repository, install [`git-filter-repo`](https://github.com/newren/git-filter-repo), then run `git filter-repo` with the following arguments.
   * `FOLDER-NAME`: The folder within your project where you'd like to create a separate repository.

   {% windows %}

   > [!TIP]
   > Windows users should use `/` to delimit folders.

   {% endwindows %}

   ```shell
   $ git filter-repo --path FOLDER-NAME/
   # Filter the specified branch in your directory and remove empty commits
   ```

   The repository should now only contain the files that were in your subfolder(s).

   If you want one specific subfolder to be the new root folder of the new repository, you can use the following command:

   ```shell
   $ git filter-repo --subdirectory-filter FOLDER-NAME
   # Filter the specific branch by using a single sub-directory as the root for the new repository
   ```

1. [Create a new repository](/repositories/creating-and-managing-repositories/creating-a-new-repository) on GitHub.

1. At the top of your new repository on GitHub's Quick Setup page, click {% octicon "copy" aria-label="Copy to clipboard" %} to copy the remote repository URL.

   ![Screenshot of the "Quick Setup" header in a repository. Next to the remote URL, an icon of two overlapping squares is outlined in orange.](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)

   > [!TIP]
   > For information on the difference between HTTPS and SSH URLs, see [About Remote Repositories](https://docs.github.com/en/get-started/git-basics/about-remote-repositories).

1. Add a new remote name with the URL you copied for your repository. For example, `origin` or `upstream` are two common choices.

   ```shell
   git remote add origin https://github.com/USERNAME/REPOSITORY-NAME.git
   ```

1. Verify that the remote URL was added with your new repository name.

    ```shell
    $ git remote -v
    # Verify new remote URL
    > origin  https://github.com/USERNAME/NEW-REPOSITORY-NAME.git (fetch)
    > origin  https://github.com/USERNAME/NEW-REPOSITORY-NAME.git (push)
    ```

1. Push your changes to the new repository on GitHub.

    ```shell
    git push -u origin BRANCH-NAME
    ```
