# Removing files from Git Large File Storage

## Removing a single file

1. Remove the file from the repository's Git history using the `filter-repo` command. For detailed information on using these, see [Removing Sensitive Data From A Repository](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository).
1. Navigate to your _.gitattributes_ file.

   > [!NOTE]
   > Your _.gitattributes_ file is generally saved within your local repository. In some cases, you may have created a global _.gitattributes_ file that contains all of your Git LFS associations.

1. Find and remove the associated Git LFS tracking rule within the _.gitattributes_ file.
1. Save and exit the _.gitattributes_ file.

## Removing all files within a Git LFS repository

1. Remove the files from the repository's Git history using the `filter-repo` command. For detailed information on using these, see [Removing Sensitive Data From A Repository](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository).
1. Optionally, to uninstall Git LFS in the repository, run:

   ```shell
   git lfs uninstall
   ```

   For Git LFS versions below 1.1.0, run:

   ```shell
   git lfs uninit
   ```

## Git LFS objects in your repository

After you remove files from Git LFS, the Git LFS objects still exist on the remote storage and will continue to count toward your Git LFS storage quota.

To remove Git LFS objects from a repository, delete and recreate the repository. When you delete a repository, any associated issues, stars, and forks are also deleted. For more information, see [Deleting A Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/deleting-a-repository). If you need to purge a removed object and you are unable to delete the repository, please [contact support](/support) for help.

> [!NOTE]
> If you removed a single file and have other Git LFS objects that you'd like to keep in your repository, after deleting and recreating your repository, reconfigure your Git LFS-associated files. For more information, see [Removing a single file](#removing-a-single-file) and [Configuring Git Large File Storage](https://docs.github.com/en/repositories/working-with-files/managing-large-files/configuring-git-large-file-storage).

## Further reading

* [About Git Large File Storage](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-git-large-file-storage)
* [Collaboration With Git Large File Storage](https://docs.github.com/en/repositories/working-with-files/managing-large-files/collaboration-with-git-large-file-storage)
* [Installing Git Large File Storage](https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage)
