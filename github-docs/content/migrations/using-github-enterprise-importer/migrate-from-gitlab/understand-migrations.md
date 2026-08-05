# Understand migrations from GitLab to GitHub

## About migrations from GitLab

You can use GitHub Enterprise Importer to migrate repositories from GitLab to GitHub Enterprise Cloud (GitHub.com or GHE.com).

Migrations are performed with the GL2GH extension of the GitHub CLI, a cross-platform command-line wrapper around the GitHub migration APIs. For each repository, the GL2GH extension:

1. **Exports** the GitLab project to a `.tar.gz` archive containing the Git repository plus project metadata (such as issues, merge requests, labels, milestones, and releases).
1. **Stages** the archive locally on the machine where you run the command.
1. **Uploads** the archive to blob storage that GitHub can read from (either GitHub-owned blob storage or a storage account you own in AWS S3 or Azure Blob Storage).
1. **Imports** the archive into the destination organization, transforming GitLab entities into their GitHub equivalents.

Before you create your enterprise account on GitHub, decide whether your enterprise will use Enterprise Managed Users. This affects how your members authenticate and how you manage identities and access. See [Choose An Enterprise Type](https://docs.github.com/en/enterprise-cloud@latest/enterprise-onboarding/getting-started-with-your-enterprise/choose-an-enterprise-type).

## Supported GitLab versions

You can migrate from both GitLab.com and self-managed GitLab instances.

GitHub Enterprise Importer supports currently maintained (non-end-of-life) versions of GitLab. For the list of maintained versions, see [Statement of support](https://docs.gitlab.com/policy/maintenance/) in the GitLab documentation. Older versions have not been tested or evaluated.

## Data that is migrated

When the data is present in the GitLab export archive, GitHub Enterprise Importer migrates the following data from GitLab to GitHub Enterprise Cloud.

* Git source (including commit history) and the repository wiki
* Commit comments
* Project configuration that maps cleanly, such as the default branch
* Issues and issue comments, including issue state and milestone events
  * Threaded discussions are migrated as flat comments with context of the original thread
* Merge requests, which are converted to pull requests, including:
  * Comments (migrated as review comments only when diff data is present, otherwise as flat issue comments; only the latest diff is present in the export)
  * Reviewers and approvers
  * Merge request state events
* Milestones
* Timeline events
* Emoji reactions
* Uploads (attachments)
* Releases and release assets
* Project members (migrated as mannequins)

## Data that is not migrated

The following data is not migrated.

* Git LFS objects: Pointer files travel with the Git history, but the binary objects must be pushed to your migration destination separately as a follow-up task. For more information, see [Duplicating A Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository#mirroring-a-repository-that-contains-git-large-file-storage-objects).
* Repository policies, including merge trains, pipeline gates, required approvals, topics, avatars, and mirroring
* Group settings and group membership
* Snippets, issue boards, time-tracking data, and design-management data
* CI/CD pipelines and pipeline schedules (`.gitlab-ci.yml` has no automatic GitHub Actions equivalent)
* Vulnerability reports
* Data that GitLab does not include in the export at all, such as webhooks, CI/CD variables, job traces and artifacts, child-pipeline history, and pipeline triggers

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


### Limitations of GitLab

* **40 GB limit for the GitLab export archive:** GitLab's project export API will not produce an archive larger than 40 GB on GitLab.com. Unlike the GitHub source-size limit, this applies to the entire export archive, including project metadata as well as the Git source. This limit is set by GitLab and may differ on self-managed instances.
