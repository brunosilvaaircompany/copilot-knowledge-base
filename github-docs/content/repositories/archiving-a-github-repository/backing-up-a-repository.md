# Backing up a repository

You may want to take backups of repositories for archiving or disaster recovery purposes.

Depending on the GitHub features you use and your requirements (for example whether you need to be able to restore the backup), there are different backup options which include different data.

You may want to store your backups on an external hard drive and/or upload them to a cloud-based backup or storage service such as [Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview/), [Google Drive](https://www.google.com/drive/), or [Dropbox](https://www.dropbox.com/dropbox).

## Backing up a Git repository with the Git CLI

A Git repository includes all of the files and folders associated with a project, along with each file's revision history. For more information, see [About Git](https://docs.github.com/en/get-started/using-git/about-git#about-repositories).

You can take a backup of a Git repository, including the revision history, by performing a mirror clone with the Git CLI.

To perform a mirror clone, use the `git clone` command with the `--mirror` option.

```bash
git clone --mirror https://github.com/EXAMPLE-USER/REPOSITORY.git
```

If the repository includes Git Large File Storage objects, pull in the objects. For more details on Git Large File Storage and how to install it, see [About Git Large File Storage](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-git-large-file-storage).

```bash
git lfs fetch --all
```

Once you have cloned the Git repository, you can compress it into an archive (for example a `.zip` or `.tar.gz` file) and move it to a location for safe-keeping.

You can restore your backup by decompressing the archive and then pushing the Git repository to a Git remote.

## Backing up a wiki with the Git CLI

Wikis in GitHub are stored as Git repositories. This means that you can back up a wiki by cloning it. For more details on how to clone a wiki using Git, see [Adding Or Editing Wiki Pages](https://docs.github.com/en/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages#cloning-wikis-to-your-computer).

Once you have cloned the wiki, you can compress it into an archive (for example a `.zip` or `.tar.gz` file) and move it to a location for safe-keeping.

You can restore your backup by decompressing the archive and then pushing the wiki repository to a Git remote.

## Backing up a Git repository and selected metadata with migration archives

You can use the REST API to generate a migration archive for a repository. For more information, see [Orgs](https://docs.github.com/en/rest/migrations/orgs).

These archives are designed for moving data between GitHub products, but they can also be used to back up a repository for archiving purposes

> [!WARNING]
> Migration archives do not include all data related to a repository. For example, Git Large File Storage objects, discussions, or packages are not included. For more information on what is included in migration archives, see [About Migrations Between GitHub Products](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-between-github-products/about-migrations-between-github-products).

Once you have generated an archive, you can move it to a location of your choice for safe-keeping.


Migration archives can be restored to your GitHub Enterprise Server instance using the `ghe-migrator` tool, which is accessible over SSH. For more information, see [Migrating Data To GitHub Enterprise Server](https://docs.github.com/en/migrations/using-ghe-migrator/migrating-data-to-github-enterprise-server).

> [!WARNING]
> Migration archives are not designed to be used as backups, and it is not guaranteed that a migration archive generated today will be restorable in future versions of GitHub Enterprise Server.





## Third-party backup tools

A number of self-service tools exist that automate backups of repositories. Backup tools will download data from _specific_ repositories and organize it within a new branch or directory.

For more information about self-service backup tools, see the [Backup Utilities category on GitHub Marketplace](https://github.com/marketplace?type=apps&category=backup-utilities).
