# Understand migrations from Azure DevOps to GitHub

## About migrations from Azure DevOps Cloud

You can use GitHub Enterprise Importer to migrate repositories from Azure DevOps to GitHub Enterprise Cloud (GitHub.com or GHE.com).

You can only use GitHub Enterprise Importer to migrate from Azure DevOps Cloud, not from Azure DevOps Server. If you currently use Azure DevOps Server and want to migrate to GitHub, you can migrate to Azure DevOps Cloud first. For more information, see [Migrate to Azure DevOps](https://azure.microsoft.com/en-us/services/devops/migrate/) on the Azure site.

Before you create your enterprise account on GitHub, decide whether your enterprise will use Enterprise Managed Users. This affects how your members authenticate and how you manage identities and access. See [Choose An Enterprise Type](https://docs.github.com/en/enterprise-cloud@latest/enterprise-onboarding/getting-started-with-your-enterprise/choose-an-enterprise-type).

To learn more about the differences between GitHub and Azure DevOps, see [Key Differences Between Azure DevOps And GitHub](https://docs.github.com/en/migrations/ado/key-differences-between-azure-devops-and-github).

## Support for Azure Pipelines and Azure Boards

Both Azure Pipelines and Azure Boards can be fully integrated with your GitHub experience. You can configure your enterprise account and Azure DevOps so you can keep using these services while also benefitting from having your repositories hosted on GitHub.

If you want to migrate Azure Pipelines to GitHub Actions, contact your GitHub account manager.

## Data that is migrated

GitHub Enterprise Importer currently supports migrating the following repository data from Azure DevOps to GitHub Enterprise Cloud.

* Git source (including commit history)
* Pull requests
* User history for pull requests
* Work item links on pull requests
* Attachments on pull requests
* Branch policies for the repository (user-scoped branch policies and cross-repo branch policies are not included)

## Limitations on migrated data

There are limits to what GitHub Enterprise Importer can migrate. Some are due to limitations of GitHub, while others are limitations of GitHub Enterprise Importer itself.

### Limitations of GitHub

* **2 GiB size limit for a single Git commit:** No single commit in your Git repository can be larger than 2 GiB. If any of your commits are larger than 2 GiB, you will need to split the commit into smaller commits that are each 2 GiB or smaller.
* **2 GiB size limit for a single push:** No single push can be larger than 2 GiB. Larger pushes fail with a `pack exceeds maximum allowed size` error.
* **255 byte limit for Git references:** No single Git reference, commonly known as a "ref", can have a name larger than 255 bytes. Usually, this means that your references cannot be more than 255 characters long, but any non-ASCII characters, such as emojis, may consume more than one byte. If any of your Git references are too large, we'll return a clear error message.
* **100 MiB file size limit:** After you complete your migration, no single file in your Git repository can be larger than 100 MiB. During repository migration this limit is increased to 400 MiB. Consider using Git LFS to store large files.

### Limitations of GitHub Enterprise Importer

* **40 GiB size limit for a Git repository (public preview):** This limit applies only to the source code. To check if the repository archive is over the limit, use the [git-sizer](https://github.com/github/git-sizer) tool and review the total blob size in the output. The git-sizer tool also helps to identify potential issues related to large files, blob size, commit size, and tree counts that could impact migrations.

* **400 MiB file size limit:** When migrating a repository with GitHub Enterprise Importer, no single file in your Git repository can be larger than 400 MiB. Consider using Git LFS for storing large files.
* **Git LFS objects not migrated:** The Importer can migrate repositories that use Git LFS, but the LFS objects themselves will not be migrated. They can be pushed to your migration destination as a follow-up task after the migration is complete.
* **Delayed code search functionality:** Re-indexing the search index can take a few hours after a repository is migrated, and code searches may return unexpected results until re-indexing is complete.
* **Rulesets configured for your organization can cause migrations to fail:** For example, if you configured a rule that requires email addresses for commit authors to end with `@monalisa.cat`, and the repository you're migrating contains commits that don't comply with this rule, your migration will fail.
* **Mannequin content might not be searchable:** Mannequins are placeholder users to which imported content (such as issues, pull requests, comments, etc.) is associated. When you search for content associated with a mannequin, such as assigned issues, the issues may not be found. Once a mannequin is reclaimed, the content should be found via the new owner.
