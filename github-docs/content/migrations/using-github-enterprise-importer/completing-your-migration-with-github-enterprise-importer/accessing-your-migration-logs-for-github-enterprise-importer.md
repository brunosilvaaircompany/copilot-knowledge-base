# Accessing your migration logs for GitHub Enterprise Importer

## About migration logs

Each time you run a migration with GitHub Enterprise Importer, a migration log is created. You should check the migration log after every migration to review any migration warnings.

The migration log lists the steps that were completed as part of the migration and includes additional information.

* Migration warnings, representing data (such as issues, pull requests, or comments) that didn't migrate as expected
* Who ran the migration
* The source of the migration
* How long the migration took

> [!IMPORTANT]  
> Issues should be enabled in the target repository for the migration log to be created.

You can access the migration log for a repository migration in multiple ways.

* On GitHub, by viewing the "Migration Log" issue in the migrated repository. You can use this issue to discuss any warnings with your team and record any decisions.
* By downloading a log file using the GitHub CLI.

When you run an organization migration, GitHub Enterprise Importer additionally creates a repository named `gei-migration-results` in the destination organization. This repository contains information about the migration of organization-level data and duplicates the information in the "Migration Log" issues for each migrated repository.

For more information about interpreting warnings in your migration log, see [Troubleshooting Your Migration With GitHub Enterprise Importer](https://docs.github.com/en/migrations/troubleshooting/troubleshooting-your-migration-with-github-enterprise-importer#understanding-migration-log-warnings).

## Viewing a repository migration log on GitHub

People with read access to a repository can access the migration log for the repository on GitHub.

1. Navigate to the migrated repository in your destination organization.
1. Under your repository name, click **{% octicon "issue-opened" aria-hidden="true" aria-label="issue-opened" %} Issues**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled "Issues," is outlined in dark orange.](/assets/images/help/repository/repo-tabs-issues-global-nav-update.png)

1. Click the issue with the title "Migration Log."

## Downloading a repository migration log with the GitHub CLI

Organization owners and organization members with the migrator role can download migration logs using the GitHub CLI.

You can download the latest migration log for an individual repository with the `download-logs` command. The exact command depends on your migration source.

* [Downloading a repository migration log with the ADO2GH extension](#downloading-a-repository-migration-log-with-the-ado2gh-extension)
* [Downloading a repository migration log with the BBS2GH extension](#downloading-a-repository-migration-log-with-the-bbs2gh-extension)
* [Downloading a repository migration log with the GEI extension](#downloading-a-repository-migration-log-with-the-gei-extension)

Migration logs are available to download for 24 hours after the migration is completed.

### Downloading a repository migration log with the ADO2GH extension

If your migration source is Azure DevOps, you can download the latest migration log for an individual repository with the `gh ado2gh download-logs` command. Replace DESTINATION with the destination organization, REPOSITORY with the repository name, and FILENAME with a file name for the downloaded file.


```shell copy
gh ado2gh download-logs --github-target-org DESTINATION --target-repo REPOSITORY --migration-log-file FILENAME
```

* If you don't already have a `GH_PAT` environment variable set for a personal access token with access to the destination organization, add `--github-target-pat TOKEN`, replacing `TOKEN` with the personal access token.
 For personal access token requirements, see [Manage Access](https://docs.github.com/en/migrations/ado/manage-access).
* If you're migrating to GHE.com, add `--target-api-url TARGET-API-URL`, where TARGET-API-URL is the base API URL for your enterprise's subdomain. For example: `https://api.octocorp.ghe.com`.


### Downloading a repository migration log with the BBS2GH extension

If your migration source is Bitbucket Server, you can download the latest migration log for an individual repository with the `gh bbs2gh download-logs` command. Replace DESTINATION with the destination organization, REPOSITORY with the repository name, and FILENAME with a file name for the downloaded file.


```shell copy
gh bbs2gh download-logs --github-target-org DESTINATION --target-repo REPOSITORY --migration-log-file FILENAME
```

* If you don't already have a `GH_PAT` environment variable set for a personal access token with access to the destination organization, add `--github-target-pat TOKEN`, replacing `TOKEN` with the personal access token.
 For personal access token requirements, see [Managing Access For A Migration From Bitbucket Server](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/managing-access-for-a-migration-from-bitbucket-server#required-scopes-for-personal-access-tokens).
* If you're migrating to GHE.com, add `--target-api-url TARGET-API-URL`, where TARGET-API-URL is the base API URL for your enterprise's subdomain. For example: `https://api.octocorp.ghe.com`.


### Downloading a repository migration log with the GEI extension

If your migration source is a GitHub product, you can download the latest migration log for an individual repository with the `gh gei download-logs` command. Replace DESTINATION with the destination organization, REPOSITORY with the repository name, and FILENAME with a file name for the downloaded file.


```shell copy
gh gei download-logs --github-target-org DESTINATION --target-repo REPOSITORY --migration-log-file FILENAME
```

* If you don't already have a `GH_PAT` environment variable set for a personal access token with access to the destination organization, add `--github-target-pat TOKEN`, replacing `TOKEN` with the personal access token.
 For personal access token requirements, see [Managing Access For A Migration Between GitHub Products](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-between-github-products/managing-access-for-a-migration-between-github-products#required-scopes-for-personal-access-tokens).
* If you're migrating to GHE.com, add `--target-api-url TARGET-API-URL`, where TARGET-API-URL is the base API URL for your enterprise's subdomain. For example: `https://api.octocorp.ghe.com`.


### Downloading all the repository migration logs for a migration script

To ensure you have access to migration logs for all your migrated repositories, you can use the `--download-migration-logs` flag when generating a migration script for repository migrations. When you use this flag, the script will include the `download-logs` command for each repository migrated in the script. For more information, see [About GitHub Enterprise Importer](https://docs.github.com/en/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer).

> [!NOTE]
> You can only use the `--download-migration-logs` flag with repository migrations, not with organization migrations.

## Accessing an organization migration log

Owners of the destination organization can access the migration log for an organization migration on GitHub.

To access the migration log for an organization migration, navigate to the repository named `gei-migration-results` in your destination organization.

The `README.md` file in the root of the repository includes the following information about the organization migration:
* Any warnings or errors related to the migration of organization-level data, such as settings and teams
* The number of repositories that were successfully migrated and the number of repositories that failed to migrate

The`/success` and `/failure` directories contain one file for each repository that was successfully migrated or that failed to migrate, respectively. These files follow the naming convention `REPO_NAME.md`.

> [!NOTE]
> The `gei-migration-results` repository is created at the beginning of the migration process but is only updated with your migration logs after the migration finishes.
