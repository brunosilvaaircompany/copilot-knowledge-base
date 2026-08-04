# About migrations from Bitbucket Server to GitHub Enterprise Cloud

## About migrations from Bitbucket Server

You can use GitHub Enterprise Importer to migrate repositories from Bitbucket Server to GitHub Enterprise Cloud (GitHub.com or GHE.com). Migrations from Bitbucket Server are only supported for Bitbucket Server or Bitbucket Data Center version 5.14+ or higher.

## Data that is migrated

We currently only support migrating the following repository data from Bitbucket Server to GitHub Enterprise Cloud.

* Git source (including commit history)
* Pull requests (including comments, pull request reviews, pull request review comments at the file and line level, required reviewers, and attachments)

  > [!NOTE]
  > Users may receive a `500` error when attempting to view a pull request, if the pull request was merged and the head branch deleted on Bitbucket Server prior to migration. Bitbucket Server removes specific Git references to objects for such pull requests, and consequently those Git objects associated with the pull request are unable to be migrated.

## Data that is not migrated

Currently, the following data is **not** migrated.

* Personal repositories owned by users
* Branch permissions
* Commit comments
* Repository settings
* CI pipelines

## Limitations on migrated data

There are limits to what GitHub Enterprise Importer can migrate. Some are due to limitations of GitHub, while others are limitations of GitHub Enterprise Importer itself.

### Limitations of GitHub

* **2 GiB size limit for a single Git commit:** No single commit in your Git repository can be larger than 2 GiB. If any of your commits are larger than 2 GiB, you will need to split the commit into smaller commits that are each 2 GiB or smaller.
* **255 byte limit for Git references:** No single [Git reference](https://git-scm.com/book/en/v2/Git-Internals-Git-References), commonly known as a "ref", can have a name larger than 255 bytes. Usually, this means that your references cannot be more than 255 characters long, but any non-[ASCII](https://en.wikipedia.org/wiki/ASCII) characters, such as emojis, may consume more than one byte. If any of your Git references are too large, we'll return a clear error message.
* **100 MiB file size limit:** After you complete your migration, no single file in your Git repository can be larger than 100 MiB. During repository migration this limit is increased to 400 MiB. Consider using Git LFS to store large files. For more information, see [Managing Large Files](https://docs.github.com/en/repositories/working-with-files/managing-large-files).


### Limitations of GitHub Enterprise Importer

* **40 GiB size limit for repository archives (public preview):** The Importer cannot migrate repositories with more than 40 GiB of combined git data and metadata in the repository archive.
* **400 MiB file size limit:** When migrating a repository with GitHub Enterprise Importer, no single file in your Git repository can be larger than 400 MiB. Consider using Git LFS for storing large files. For more information, see [Managing Large Files](https://docs.github.com/en/repositories/working-with-files/managing-large-files).
* **Git LFS objects not migrated:** The Importer can migrate repositories that use Git LFS, but the LFS objects themselves will not be migrated. They can be pushed to your migration destination as a follow-up task after the migration is complete. For more information, see [Duplicating A Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository#mirroring-a-repository-that-contains-git-large-file-storage-objects).
* **Follow-up tasks required:** When migrating between GitHub products, certain settings are not migrated and must be reconfigured in the new repository. For a list of follow-up tasks you'll need to complete after each migration, see [Overview Of A Migration Between GitHub Products](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-between-github-products/overview-of-a-migration-between-github-products#completing-follow-up-tasks).
* **Delayed code search functionality:** Re-indexing the search index can take a few hours after a repository is migrated, and code searches may return unexpected results until re-indexing is complete.
* **Rulesets configured for your organization can cause migrations to fail:** For example, if you configured a rule that requires email addresses for commit authors to end with `@monalisa.cat`, and the repository you're migrating contains commits that don't comply with this rule, your migration will fail. For more information about rulesets, see [About Rulesets](https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).
* **Mannequin content might not be searchable:** Mannequins are placeholder users to which imported content (such as issues, pull requests, comments, etc.) is associated. When you search for content associated with a mannequin, such as assigned issues, the issues may not be found. Once a mannequin is reclaimed, the content should be found via the new owner. For more information, see [Reclaiming Mannequins For GitHub Enterprise Importer](https://docs.github.com/en/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/reclaiming-mannequins-for-github-enterprise-importer).


## Getting started

Before you migrate from Bitbucket Server, you should plan out how you will run your migration. Before migrating any data, you will need to choose someone to run the migration. You must grant that person the necessary access for both the source and the destination of the migration. We also recommend you run a trial migration first.

For an overview of the migration process from beginning to end, see [Overview Of A Migration From Bitbucket Server To GitHub Enterprise Cloud](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/overview-of-a-migration-from-bitbucket-server-to-github-enterprise-cloud).
