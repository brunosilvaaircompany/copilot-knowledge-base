# Migrating repositories from GitHub.com to GitHub Enterprise Cloud

## About repository migrations with GitHub Enterprise Importer

Migrations to GitHub Enterprise Cloud include migrations between accounts on GitHub.com and, if you're adopting data residency, migrations to your enterprise's subdomain of GHE.com.

You can run your migration with either the GitHub CLI or the API.

The GitHub CLI simplifies the migration process and is recommended for most customers. Advanced customers with heavy customization needs can use the API to build their own integrations with GitHub Enterprise Importer.


{% cli %}
To see instructions for using the API, use the tool switcher at the top of the page.

{% endcli %}
{% api %}
To see instructions for using the GitHub CLI, use the tool switcher at the top of the page.

{% endapi %}


If the destination organization or enterprise has rulesets enabled, the migrated repository's history may violate those rules. To allow the migration without disabling your rulesets, add "Repository migrations" to the bypass list for each applicable ruleset.  This bypass applies only during the migration. Once complete, rulesets will be enforced on all new contributions.

To configure the bypass:

1. Navigate to each enterprise or organization ruleset.
1. In the "Bypass list" section, click **Add bypass**.
1. Select **Repository migrations**.

For more information, see [Creating Rulesets For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization) and [Setting Ruleset Bypasses For Repository Migrations](https://docs.github.com/en/enterprise-cloud@latest/migrations/troubleshooting/setting-ruleset-bypasses-for-repository-migrations).



## Prerequisites

* We strongly recommend that you perform a trial run of your migration and complete your production migration soon after. To learn more about trial runs, see [Overview Of A Migration Between GitHub Products](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-between-github-products/overview-of-a-migration-between-github-products#running-your-migrations).

* Ensure you understand the data that will be migrated and the known support limitations of the Importer.
 For more information, see [About Migrations Between GitHub Products](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-between-github-products/about-migrations-between-github-products).
* While not required, we recommend halting work during your production migration. The Importer doesn't support delta migrations, so any changes that happen during the migration will not migrate. If you choose not to halt work during your production migration, you'll need to manually migrate these changes.

* In both the source and destination organization, you must be either an organization owner or be granted the migrator role. For more information, see [Managing Access For A Migration Between GitHub Products](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-between-github-products/managing-access-for-a-migration-between-github-products#about-the-migrator-role).

{% api %}

## Step 0: Get ready to use the GitHub GraphQL API

To make GraphQL queries, you'll need to write your own scripts or use an HTTP client like [Insomnia](https://insomnia.rest/).

To learn more about getting started with the GitHub GraphQL API, including how to authenticate, see [Forming Calls With GraphQL](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql).

You will send all GraphQL queries to the **destination** of your migration. If you're migrating to GitHub Enterprise Cloud with data residency, make sure to send queries to the endpoint for your enterprise's subdomain of GHE.com.


## Step 1: Get the `ownerId` for your migration destination

As an organization owner in GitHub Enterprise Cloud, use the `GetOrgInfo` query to return the `ownerId`, also called the organization ID, for the organization you want to own the migrated repositories. You'll need the `ownerId` to identify your migration destination.


#### `GetOrgInfo` query

```graphql
query(
  $login: String!
){
  organization (login: $login)
  {
    login
    id
    name
    databaseId
  }
}
```

| Query variable | Description |
|----|----|
| `login` | Your organization name.

#### `GetOrgInfo` response

```json
{
  "data": {
    "organization": {
      "login": "Octo",
      "id": "MDEyOk9yZ2FuaXphdGlvbjU2MTA=",
      "name": "Octo-org",
      "databaseId": 5610
    }
  }
}
```

In this example, `MDEyOk9yZ2FuaXphdGlvbjU2MTA=` is the organization ID or `ownerId`, which we'll use in the next step.


## Step 2: Identify where you're migrating from

You can set up a migration source using the `createMigrationSource` query. You'll need to supply the `ownerId`, or organization ID, gathered from the `GetOrgInfo` query.


Your migration source is an organization on GitHub.com.

### `createMigrationSource` mutation

```graphql
mutation createMigrationSource($name: String!, $ownerId: ID!) {
  createMigrationSource(input: {name: $name, url: "https://github.com", ownerId: $ownerId, type: GITHUB_ARCHIVE}) {
    migrationSource {
      id
      name
      url
      type
    }
  }
}
```

> [!NOTE]
> Make sure to use `GITHUB_ARCHIVE` for `type`.


| Query variable | Description |
|----|----|
| `name` | A name for your migration source. This name is for your own reference, so you can use any string.
| `ownerId` | The organization ID of your organization on GitHub Enterprise Cloud.


### `createMigrationSource` response

```json
{
  "data": {
    "createMigrationSource": {
      "migrationSource": {
        "id": "MS_kgDaACQxYmYxOWU4Yi0wNzZmLTQ3NTMtOTdkZC1hNGUzZmYxN2U2YzA",
        "name": "GitHub.com Source",
        "url": "https://github.com",
        "type": "GITHUB_SOURCE"
      }
    }
  }
}
```

In this example, `MS_kgDaACQxYmYxOWU4Yi0wNzZmLTQ3NTMtOTdkZC1hNGUzZmYxN2U2YzA` is the migration source ID, which we'll use in the next step.

## Step 3: Start your repository migration

When you start a migration, a single repository and its accompanying data migrates into a brand new GitHub repository that you identify.

If you want to move multiple repositories at once from the same source organization, you can queue multiple migrations. You can run up to 5 repository migrations at the same time.


### `startRepositoryMigration` mutation

```graphql
mutation startRepositoryMigration (
  $sourceId: ID!,
  $ownerId: ID!,
  $sourceRepositoryUrl: URI!,
  $repositoryName: String!,
  $continueOnError: Boolean!,
  $accessToken: String!,
  $githubPat: String!,
  $targetRepoVisibility: String!
){
  startRepositoryMigration( input: {
    sourceId: $sourceId,
    ownerId: $ownerId,
    repositoryName: $repositoryName,
    continueOnError: $continueOnError,
    accessToken: $accessToken,
    githubPat: $githubPat,
    targetRepoVisibility: $targetRepoVisibility
    sourceRepositoryUrl: $sourceRepositoryUrl,
  }) {
    repositoryMigration {
      id
      migrationSource {
        id
        name
        type
      }
      sourceUrl
    }
  }
}
```

| Query variable | Description |
|----|----|
| `sourceId` | Your migration source `id` returned from the `createMigrationSource` mutation.
| `ownerId` | The organization ID of your organization on GitHub Enterprise Cloud.
| `repositoryName` | A custom unique repository name not currently used by any of your repositories owned by the organization on GitHub Enterprise Cloud. An error-logging issue will be created in this repository when your migration is complete or has stopped.
| `continueOnError` | Migration setting that allows the migration to continue when encountering errors that don't cause the migration to fail. Must be `true` or `false`. We highly recommend setting `continueOnError` to `true` so that your migration will continue unless the Importer can't move Git source or the Importer has lost connection and cannot reconnect to complete the migration.
| `githubPat` | The personal access token for your destination organization on GitHub Enterprise Cloud.
| `accessToken` | The personal access token for your source.
| `targetRepoVisibility` | The visibility of the new repository. Must be `private`, `public`, or `internal`. If not set, your repository is migrated as private.

| `sourceRepositoryUrl` | The URL of your source repository, using the format `https://github.com/{organization}/{repository}`.

For personal access token requirements, see [Managing Access For A Migration Between GitHub Products](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-between-github-products/managing-access-for-a-migration-between-github-products#required-scopes-for-personal-access-tokens).

In the next step, you'll use the migration ID returned from the `startRepositoryMigration` mutation to check the migration status.


## Step 4: Check the status of your migration

To detect any migration failures and ensure your migration is working, you can check your migration status using the `getMigration` query. You can also check the status of multiple migrations with `getMigrations`.

The `getMigration` query will return with a status to let you know if the migration is `queued`, `in progress`, `failed`, or `completed`. If your migration failed, the Importer will provide a reason for the failure.

#### `getMigration` query

```graphql
query (
  $id: ID!
){
  node( id: $id ) {
    ... on Migration {
      id
      sourceUrl
      migrationSource {
        name
      }
      state
      failureReason
    }
  }
}
```

| Query variable | Description |
|----|----|
| `id` | The `id` of your migration that [the `startRepositoryMigration` mutation](#startrepositorymigration-mutation) returned. |


## Step 5: Validate your migration and check the error log

To finish your migration, we recommend that you check the "Migration Log" issue. This issue is created on GitHub in the destination repository.

![Screenshot of an issue with the title "Migration Log." The second comment in the issue includes logs for a migration.](/assets/images/help/github-enterprise-importer/migration-log-issue.png)

Finally, we recommend that you review your migrated repositories for a soundness check.


{% endapi %}

{% cli %}

## Step 1: Install the GEI extension of the GitHub CLI

If this is your first migration, you'll need to install the GEI extension of the GitHub CLI. For more information about the GitHub CLI, see [About GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli).


Alternatively, you can download a standalone binary from the [releases page](https://github.com/github/gh-gei/releases) for the `github/gh-gei` repository. You can run the binary directly, without the `gh` prefix.


1. Install the GitHub CLI. For installation instructions for GitHub CLI, see the [GitHub CLI repository](https://github.com/cli/cli#installation).


   > [!NOTE]
   > You need version 2.4.0 or newer of GitHub CLI. You can check the version you have installed with the `gh --version` command.

1. Install the GEI extension.

   ```shell copy
   gh extension install github/gh-gei
   ```


Any time you need help with the GEI extension, you can use the `--help` flag with a command. For example, `gh gei --help` will list all the available commands, and `gh gei migrate-repo --help` will list all the options available for the `migrate-repo` command.


## Step 2: Update the GEI extension of the GitHub CLI

The GEI extension is updated weekly. To make sure you're using the latest version, update the extension.


```shell
gh extension upgrade github/gh-gei
```


## Step 3: Set environment variables

Before you can use the GEI extension to migrate to GitHub Enterprise Cloud, you must create personal access tokens that can access the source and destination organizations, then set the personal access tokens as environment variables.


1. Create and record a personal access token (classic) that will authenticate for the destination organization on GitHub Enterprise Cloud, making sure that the token meets all requirements. For more information, see [Managing Access For A Migration Between GitHub Products](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-between-github-products/managing-access-for-a-migration-between-github-products#creating-a-personal-access-token-for-github-enterprise-importer).
1. Create and record a personal access token that will authenticate for the source organization, making sure that this token also meets all of the same requirements.

1. Set environment variables for the personal access tokens, replacing TOKEN in the commands below with the personal access tokens you recorded above. Use `GH_PAT` for the destination organization and `GH_SOURCE_PAT` for the source organization.

   * If you're using Terminal, use the `export` command.

      ```shell copy
      export GH_PAT="TOKEN"
      export GH_SOURCE_PAT="TOKEN"
      ```

   * If you're using PowerShell, use the `$env` command.

      ```shell copy
      $env:GH_PAT="TOKEN"
      $env:GH_SOURCE_PAT="TOKEN"
      ```

1. If you're migrating to GitHub Enterprise Cloud with data residency, for convenience, set an environment variable for the **base API URL** for your enterprise.

   Ensure you replace `SUBDOMAIN` with your enterprise's subdomain. For example, if your enterprise's subdomain is `acme`, the `TARGET_API_URL` value would be `https://api.acme.ghe.com`.

   * If you're using Terminal, use the `export` command.

     ```shell copy
     export TARGET_API_URL="https://api.SUBDOMAIN.ghe.com"
     ```

   * If you're using PowerShell, use the `$env` command.

     ```shell copy
     $env:TARGET_API_URL="https://api.SUBDOMAIN.ghe.com"
     ```

   You'll use this variable with the `--target-api-url` option in commands you run with the GitHub CLI.



## Step 4: Generate a migration script

If you want to migrate multiple repositories to GitHub Enterprise Cloud at once, use the GitHub CLI to generate a migration script. The resulting script will contain a list of migration commands, one per repository.

> [!NOTE]
> Generating a script outputs a PowerShell script. If you're using Terminal, you will need to output the script with the `.ps1` file extension and install PowerShell for either [Mac](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-macos?view=powershell-7.2) or [Linux](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-linux?view=powershell-7.2) to run it.


If you want to migrate a single repository, skip to the next step.

### Generating a migration script

To generate a migration script, run the `gh gei generate-script` command.


```shell copy
gh gei generate-script --github-source-org SOURCE --github-target-org DESTINATION --output FILENAME
```

If you downloaded GEI as a standalone binary rather than as an extension for the GitHub CLI, you will need to update your generated script to run the binary instead of `gh gei`.


#### Placeholders

Replace the placeholders in the command above with the following values.

Placeholder | Value |
----------- | ----- |

SOURCE | Name of the source organization

DESTINATION | Name of the destination organization

FILENAME | A filename for the resulting migration script<br><br>If you're using Terminal, use a `.ps1` file extension as the generated script requires PowerShell to run. You can install PowerShell for [Mac](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-macos?view=powershell-7.2) or [Linux](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-linux?view=powershell-7.2).



#### Additional arguments

| Argument | Description |
| -------- | ----------- |
| `--target-api-url TARGET-API-URL` | If you're migrating to GHE.com, add `--target-api-url TARGET-API-URL`, where TARGET-API-URL is the base API URL for your enterprise's subdomain. For example: `https://api.octocorp.ghe.com`.
 |
| `--download-migration-logs` | Download the migration log for each migrated repository. For more information about migration logs, see [Accessing Your Migration Logs For GitHub Enterprise Importer](https://docs.github.com/en/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/accessing-your-migration-logs-for-github-enterprise-importer#downloading-all-the-repository-migration-logs-for-a-migration-script). |

### Reviewing the migration script

After you generate the script, review the file and, optionally, edit the script.

* If there are any repositories you don't want to migrate, delete or comment out the corresponding lines.
* If you want any repositories to have a different name in the destination organization, update the value for the corresponding `--target-repo` flag.
* If you want to change the visibility of a new repository, update the value for the corresponding `--target-repo-visibility` flag. By default, the script sets the same visibility as the source repository.


If your repository has more than 10 GB of releases data, releases cannot be migrated. Use the `--skip-releases` flag to migrate the repository without releases.


If you downloaded GEI as a standalone binary rather than as an extension for the GitHub CLI, you will need to update your generated script to run the binary instead of `gh gei`.


## Step 5: Migrate repositories

You can migrate multiple repositories with a migration script or a single repository with the `gh gei migrate-repo` command.


### Migrate multiple repositories

To migrate multiple repositories, run the script you generated. Replace FILENAME in the commands below with the filename you provided when generating the script.

* If you're using Terminal, use `./`.

  ```shell copy
  ./FILENAME
  ```

* If you're using PowerShell, use `.\`.

  ```shell copy
  .\FILENAME
  ```


### Migrate a single repository

To migrate a single repository, use the `gh gei migrate-repo` command.


```shell copy
gh gei migrate-repo --github-source-org SOURCE --source-repo CURRENT-NAME --github-target-org DESTINATION --target-repo NEW-NAME
```

#### Placeholders

Replace the placeholders in the command above with the following values.

Placeholder | Value |
----------- | ----- |

SOURCE | Name of the source organization

CURRENT-NAME | The name of the repository you want to migrate

DESTINATION | Name of the destination organization

NEW-NAME | The name you want the migrated repository to have



#### Additional arguments

| Argument | Description |
| -------- | ----------- |
| `--target-api-url TARGET-API-URL` | If you're migrating to GHE.com, add `--target-api-url TARGET-API-URL`, where TARGET-API-URL is the base API URL for your enterprise's subdomain. For example: `https://api.octocorp.ghe.com`.
 |
| `--skip-releases` | If your repository has more than 10 GB of releases data, releases cannot be migrated. Use the `--skip-releases` flag to migrate the repository without releases.
 |
| `--target-repo-visibility TARGET-VISIBILITY` | Repositories are migrated with private visibility by default. To set the visibility, you can add the `--target-repo-visibility` flag, specifying `private`, `public`, or `internal`. If you're migrating to an enterprise with managed users, public repositories are not available.
 |

#### Aborting the migration

If you want to cancel a migration, use the `abort-migration` command, replacing MIGRATION-ID with the ID returned from `migrate-repo`.


```shell copy
gh gei abort-migration --migration-id MIGRATION-ID
```

## Step 6: Validate your migration and check the error log

When your migration is complete, we recommend reviewing your migration log. For more information, see [Accessing Your Migration Logs For GitHub Enterprise Importer](https://docs.github.com/en/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/accessing-your-migration-logs-for-github-enterprise-importer). If your source repository contained rulesets and you're being blocked by them, see [Setting Ruleset Bypasses For Repository Migrations](https://docs.github.com/en/enterprise-cloud@latest/migrations/troubleshooting/setting-ruleset-bypasses-for-repository-migrations).

We recommend that you review your migrated repositories for a soundness check.


{% endcli %}
