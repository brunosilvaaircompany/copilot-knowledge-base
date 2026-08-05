# Adding a file to a repository

## Adding a file to a repository on GitHub

Files that you add to a repository via a browser are limited to 25 MiB per file. You can add larger files, up to 100 MiB each, via the command line. For more information, see [Adding a file to a repository using the command line](#adding-a-file-to-a-repository-using-the-command-line). To add files larger than 100 MiB, you must use Git Large File Storage. For more information, see [About Large Files On GitHub](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github).

You can upload up to 100 files to GitHub at the same time.

If a repository has any protected branches, you can't edit or upload files in the protected branch using GitHub. You can use GitHub Desktop to move your changes to a new branch and commit them. For more information, see [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches) and [Committing And Reviewing Changes To Your Project In GitHub Desktop](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop).


Your repository may have push rulesets enabled. Push rulesets may block creating a new file in the repository based on certain restrictions. Push rulesets apply to the repository's entire fork network. Which means that any push rulesets that are configured in the root repository will also apply to every fork of the repository. For more information, see [About Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets#about-rulesets).


Your repository may be secured by push protection. With push protection, GitHub will block uploading a file to the repository if the file contains a supported secret, such as a token. You should remove the secret from the file before attempting to upload the file again. For more information, see [Push Protection In The GitHub UI](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/work-with-leak-prevention/push-protection-in-the-github-ui) and [Push Protection In The GitHub UI](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/work-with-leak-prevention/push-protection-in-the-github-ui#resolving-a-blocked-commit).

>[!NOTE] Push protection for file uploads in the web UI is currently in public preview and subject to change.


> [!WARNING]
> Use Git to push files to your repository if you need to apply the logic in your `.gitattributes` file. For example, automatic conversion of line endings. Uploading a file through the GitHub web interface will ignore `.gitattributes`.

1. On GitHub, navigate to the main page of the repository.

1. Above the list of files, select the **Add file** dropdown menu and click **Upload files**. Alternatively, you can drag and drop files into your browser.

   ![Screenshot of the main page of the repository. Above the list of a files, a button, labeled "Add file," is outlined in dark orange.](/assets/images/help/repository/upload-files-button.png)
1. To select the files you want to upload, drag and drop the file or folder, or click **choose your files**.
1. In the "Commit message" field, type a short, meaningful commit message that describes the change you made to the file. You can attribute the commit to more than one author in the commit message. For more information, see [Creating A Commit With Multiple Authors](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors).

1. Below the commit message fields, decide whether to add your commit to the current branch or to a new branch. If your current branch is the default branch, you should choose to create a new branch for your commit and then create a pull request. For more information, see [Creating A Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

   ![Screenshot of a GitHub pull request showing a radio button to commit directly to the main branch or to create a new branch. New branch is selected.](/assets/images/help/repository/choose-commit-branch.png)

1. Click **Propose changes**.

## Adding a file to a repository using the command line

You can upload an existing file to a repository on GitHub using the command line.

> [!TIP]
> You can also [add an existing file to a repository from the GitHub website](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

This procedure assumes you've already:

* [Created a repository on GitHub](/repositories/creating-and-managing-repositories/creating-a-new-repository), or have an existing repository owned by someone else you'd like to contribute to
* [Cloned the repository locally on your computer](/repositories/creating-and-managing-repositories/cloning-a-repository)


> [!WARNING]
> Never `git add`, `commit`, or `push` sensitive information, for example passwords or API keys, to a remote repository. If you've already added this information, see [Removing Sensitive Data From A Repository](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository).


1. On your computer, move the file you'd like to upload to GitHub into the local directory that was created when you cloned the repository.
1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Change the current working directory to your local repository.

1. Stage the file for commit to your local repository.


   ```shell
   $ git add .
   # Adds the file to your local repository and stages it for commit. To unstage a file, use 'git reset HEAD YOUR-FILE'.

   ```

1. Commit the file that you've staged in your local repository.


   ```shell
   $ git commit -m "Add existing file"
   # Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.

   ```

1. [Push the changes](/get-started/using-git/pushing-commits-to-a-remote-repository) in your local repository to your GitHub Enterprise Server instance.

   ```shell
   $ git push origin YOUR_BRANCH
   # Pushes the changes in your local repository up to the remote repository you specified as the origin
   ```




## Further reading

* [Adding Locally Hosted Code To GitHub](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
