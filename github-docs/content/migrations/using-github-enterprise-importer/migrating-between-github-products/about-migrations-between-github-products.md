# About migrations between GitHub products with GitHub Enterprise Importer

## About migrations between GitHub products

With GitHub Enterprise Importer, you can migrate data from GitHub Enterprise Server to GitHub Enterprise Cloud, or migrate data from GitHub.com to another account on GitHub Enterprise Cloud.

If your migration source is an account on GitHub.com, you can migrate individual repositories between organizations, or migrate entire organizations between enterprises. If your migration source is GitHub Enterprise Server, you can migrate individual repositories.

The data that GitHub Enterprise Importer migrates depends on the source of the migration and whether you are migrating a repository or organization.


If the destination organization or enterprise has rulesets enabled, the migrated repository's history may violate those rules. To allow the migration without disabling your rulesets, add "Repository migrations" to the bypass list for each applicable ruleset.  This bypass applies only during the migration. Once complete, rulesets will be enforced on all new contributions.

To configure the bypass:

1. Navigate to each enterprise or organization ruleset.
1. In the "Bypass list" section, click **Add bypass**.
1. Select **Repository migrations**.

For more information, see [Creating Rulesets For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization) and [Setting Ruleset Bypasses For Repository Migrations](https://docs.github.com/en/enterprise-cloud@latest/migrations/troubleshooting/setting-ruleset-bypasses-for-repository-migrations).



## Data that is migrated from GitHub Enterprise Server

To migrate from GitHub Enterprise Server (GHES), you must have GHES version 3.4.1 or higher. The data that is migrated depends on the version you're using.

Item | GHES 3.4.1+ | GHES 3.5.0+ |
---- | ---------- | ---------- |
Git source (including commit history) | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
Pull requests | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
Issues | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
Milestones | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
Wikis | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
GitHub Actions workflows | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
Commit comments | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
Webhooks (must be re-enabled after your migration, see [Enabling webhooks](/migrations/using-github-enterprise-importer/migrating-between-github-products/overview-of-a-migration-between-github-products#enabling-webhooks)) | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
Branch protections | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
GitHub Pages settings | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
User history for the above data | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
Attachments (see [Attaching Files](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/attaching-files)) | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
Releases | {% octicon "x" aria-label="Cannot be migrated" %} | {% octicon "check" aria-label="Can be migrated" %}  |

Different size limits per repository apply to the compressed archive, depending on your GHES version.

Limit | GHES <3.8.0 | GHES 3.8.x-3.11.x | GHES 3.12.x | GHES 3.13.0+
----- | ----------- | ----------------- | ----------- | ------------
Git source | 2GiB | 10GiB | 20GiB | 40GiB (public preview)
Metadata | 2GiB | 10GiB | 20GiB | 40GiB (public preview)

### Data that is not migrated

Currently, the following data is **not** migrated.

* Audit logs
* Code scanning results
* Codespaces secrets
* Commit status checks
* Dependabot alerts
* Dependabot secrets
* Discussions at the repository level
* Edit history of issue comments and pull request comments
* Fork relationships between repositories (see [About Forks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks))
* GitHub Actions secrets, variables, environments, self-hosted runners, larger runners, workflow artifacts, or workflow run history
* GitHub Apps and GitHub App installations
* Git LFS objects and large binaries (repositories using Git LFS are still supported, see [Limitations of GitHub Enterprise Importer](#limitations-of-github-enterprise-importer))
* Links from comment bodies to specific comments or events within issues, pull requests, or discussions (the original link is retained)
* Links from commits to pull requests that were rebase merged
* Mentions of users, teams, and organizations in pull request, issue, release, and comment bodies (the username originally mentioned is retained)
* Packages in GitHub Packages
* Projects (the new projects experience)
* Reciprocal links from mentions of issues, pull requests, discussions, teams, or milestones
* References between pull requests and issues in different repositories (see [Autolinked References And Urls](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls))
* Remediation states of secret scanning results
* Repositories owned by user accounts
* Repository activity feed
* Repository properties and custom properties (see [Custom Properties](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/custom-properties))
* Repository stars
* Repository watchers
* Rulesets
* Sub-issues (see [About Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues#about-sub-issues))
* Tag protection rules
* User access to the repository
* Users' profiles, SSH keys, signing keys, or personal access tokens
* Webhook secrets

* Teams
* User or team access to the repository
* Repository settings for pull requests

### Branch protections

Branch protections apply a specified set of rules to a specific branch name or branch name pattern. For more information, see [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

Branch protections will always be migrated, but certain rules will not be migrated. The following branch protection rules are not migrated.

* Allow specific actors to bypass required pull requests
* Require approval of the most recent push
* Require deployments to succeed before merging
* Lock branch
* Restrict pushes that create matching branches
* Allow force pushes

The following limitations also apply:

* If a branch protection rule optionally allows you to specify people, teams, or apps that are exempt from the rule, such as "Restrict who can dismiss pull request reviews," the exceptions will not be migrated.
* If the "Allow force pushes" rule is enabled in "Specify who can force push" mode, the rule will not be migrated.


## Data that is migrated from GitHub.com

If your migration source is an account on GitHub.com, you can migrate individual repositories between organizations, or migrate entire organizations between enterprises.

### Migrated data for an organization

When you migrate an organization, a new organization is created within the destination enterprise account. Then, the following data is migrated to the new organization.

* Teams
* Repositories
* Team access to repositories
* Member privileges
* Organization-level webhooks (must be re-enabled after your migration, see [Enabling webhooks](/migrations/using-github-enterprise-importer/migrating-between-github-products/overview-of-a-migration-between-github-products#enabling-webhooks))
* Default branch name for new repositories created in the organization

All repositories are migrated with private visibility. If you want to set a repository's visibility to public or internal, you can do this after the migration using the UI or API.

Team membership is **not** migrated. After the migration, you'll need to add members to migrated teams. For more information, see [Overview Of A Migration Between GitHub Products](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-between-github-products/overview-of-a-migration-between-github-products#recreating-teams).

> [!NOTE]
> References to teams, such as `@octo-org/octo-team`, are **not** updated as part of an organization migration. This might cause problems in the destination organization, such as `CODEOWNERS` files not working as expected.
 For more information about how to prevent and resolve these issues, see [Troubleshooting Your Migration With GitHub Enterprise Importer](https://docs.github.com/en/migrations/troubleshooting/troubleshooting-your-migration-with-github-enterprise-importer#team-references-are-broken-after-an-organization-migration).

### Migrated data for a repository

When you migrate a repository, either directly or as part of an organization migration, only the following data is migrated.

* Git source (including commit history)
* Pull requests
* Issues
* Milestones
* Wikis (excluding attachments)
* GitHub Actions workflows
* Commit comments
* Active webhooks (must be re-enabled after your migration, see [Enabling webhooks](/migrations/using-github-enterprise-importer/migrating-between-github-products/overview-of-a-migration-between-github-products#enabling-webhooks))
* Repository topics
* Repository settings
  * Branch protections (see [Branch protections](#branch-protections) for more details)
  * GitHub Pages settings
  * Autolink references
  * Pull request settings
    * Automatically delete head branches
    * Allow auto-merge
    * Allow merge commits (commit message setting is reset to the default message)
    * Allow squash merging (commit message setting is reset to the default message)
    * Allow rebase merging
* Releases (up to 10 GiB per repository)
* User history for the above data
* Attachments (see [Attaching Files](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/attaching-files))

### Data that is not migrated

Currently, the following data is **not** migrated.

* Audit logs
* Code scanning results
* Codespaces secrets
* Commit status checks
* Dependabot alerts
* Dependabot secrets
* Discussions at the repository level
* Edit history of issue comments and pull request comments
* Fork relationships between repositories (see [About Forks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks))
* GitHub Actions secrets, variables, environments, self-hosted runners, larger runners, workflow artifacts, or workflow run history
* GitHub Apps and GitHub App installations
* Git LFS objects and large binaries (repositories using Git LFS are still supported, see [Limitations of GitHub Enterprise Importer](#limitations-of-github-enterprise-importer))
* Links from comment bodies to specific comments or events within issues, pull requests, or discussions (the original link is retained)
* Links from commits to pull requests that were rebase merged
* Mentions of users, teams, and organizations in pull request, issue, release, and comment bodies (the username originally mentioned is retained)
* Packages in GitHub Packages
* Projects (the new projects experience)
* Reciprocal links from mentions of issues, pull requests, discussions, teams, or milestones
* References between pull requests and issues in different repositories (see [Autolinked References And Urls](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls))
* Remediation states of secret scanning results
* Repositories owned by user accounts
* Repository activity feed
* Repository properties and custom properties (see [Custom Properties](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/custom-properties))
* Repository stars
* Repository watchers
* Rulesets
* Sub-issues (see [About Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues#about-sub-issues))
* Tag protection rules
* User access to the repository
* Users' profiles, SSH keys, signing keys, or personal access tokens
* Webhook secrets


When you migrate a repository directly, teams and team access to repositories are not migrated.

#### Branch protections

Branch protections apply a specified set of rules to a specific branch name or branch name pattern. For more information, see [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

Branch protections will always be migrated, but certain rules will not be migrated. The following branch protection rules are not migrated.

* Allow specific actors to bypass required pull requests
* Require approval of the most recent push
* Require deployments to succeed before merging
* Lock branch
* Restrict pushes that create matching branches
* Allow force pushes

The following limitations also apply:

* If a branch protection rule optionally allows you to specify people, teams, or apps that are exempt from the rule, such as "Restrict who can dismiss pull request reviews," the exceptions will not be migrated.
* If the "Allow force pushes" rule is enabled in "Specify who can force push" mode, the rule will not be migrated.


## Limitations on migrated data

There are limits to what GitHub Enterprise Importer can migrate. Some are due to limitations of GitHub, while others are limitations of GitHub Enterprise Importer itself.

### Limitations of GitHub

* **2 GiB size limit for a single Git commit:** No single commit in your Git repository can be larger than 2 GiB. If any of your commits are larger than 2 GiB, you will need to split the commit into smaller commits that are each 2 GiB or smaller.
* **255 byte limit for Git references:** No single [Git reference](https://git-scm.com/book/en/v2/Git-Internals-Git-References), commonly known as a "ref", can have a name larger than 255 bytes. Usually, this means that your references cannot be more than 255 characters long, but any non-[ASCII](https://en.wikipedia.org/wiki/ASCII) characters, such as emojis, may consume more than one byte. If any of your Git references are too large, we'll return a clear error message.
* **100 MiB file size limit:** After you complete your migration, no single file in your Git repository can be larger than 100 MiB. During repository migration this limit is increased to 400 MiB. Consider using Git LFS to store large files. For more information, see [Managing Large Files](https://docs.github.com/en/repositories/working-with-files/managing-large-files).


### Limitations of GitHub Enterprise Importer

* **40 GiB size limit for a Git repository (public preview):** This limit applies only to the source code. To check if the repository archive is over the limit, use the [git-sizer](https://github.com/github/git-sizer) tool and review the total blob size in the output. The git-sizer tool also helps to identify potential issues related to large files, blob size, commit size, and tree counts that could impact migrations.

* **40 GiB limit for metadata (public preview):** The Importer cannot migrate repositories with more than 40 GiB of metadata. Metadata includes issues, pull requests, releases, and attachments. In most cases, large metadata is caused by binary assets attached to releases. You can exclude releases from the migration with the `migrate-repo` command's `--skip-releases` flag, and then move your releases manually after the migration.
* **400 MiB file size limit:** When migrating a repository with GitHub Enterprise Importer, no single file in your Git repository can be larger than 400 MiB. Consider using Git LFS for storing large files. For more information, see [Managing Large Files](https://docs.github.com/en/repositories/working-with-files/managing-large-files).
* **Git LFS objects not migrated:** The Importer can migrate repositories that use Git LFS, but the LFS objects themselves will not be migrated. They can be pushed to your migration destination as a follow-up task after the migration is complete. For more information, see [Duplicating A Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository#mirroring-a-repository-that-contains-git-large-file-storage-objects).
* **Follow-up tasks required:** When migrating between GitHub products, certain settings are not migrated and must be reconfigured in the new repository. For a list of follow-up tasks you'll need to complete after each migration, see [Overview Of A Migration Between GitHub Products](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-between-github-products/overview-of-a-migration-between-github-products#completing-follow-up-tasks).
* **Delayed code search functionality:** Re-indexing the search index can take a few hours after a repository is migrated, and code searches may return unexpected results until re-indexing is complete.
* **Rulesets configured for your organization can cause migrations to fail:** For example, if you configured a rule that requires email addresses for commit authors to end with `@monalisa.cat`, and the repository you're migrating contains commits that don't comply with this rule, your migration will fail. For more information about rulesets, see [About Rulesets](https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).
* **Mannequin content might not be searchable:** Mannequins are placeholder users to which imported content (such as issues, pull requests, comments, etc.) is associated. When you search for content associated with a mannequin, such as assigned issues, the issues may not be found. Once a mannequin is reclaimed, the content should be found via the new owner. For more information, see [Reclaiming Mannequins For GitHub Enterprise Importer](https://docs.github.com/en/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/reclaiming-mannequins-for-github-enterprise-importer).


## Getting started

Before you migrate between GitHub products, you should plan out how you will run your migration. Before migrating any data, you will need to choose someone to run the migration. You must grant that person the necessary access for both the source and the destination of the migration. We also recommend you run a trial migration first.

For an overview of the migration process from beginning to end, see [Overview Of A Migration Between GitHub Products](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-between-github-products/overview-of-a-migration-between-github-products).
