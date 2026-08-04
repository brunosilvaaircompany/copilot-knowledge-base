# Migrating organizations from GitHub.com to GitHub Enterprise Cloud

## About organization migrations with GitHub Enterprise Importer

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

* For the source organization, you must be an organization owner or have the migrator role. For more information, see [Managing Access For A Migration Between GitHub Products](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-between-github-products/managing-access-for-a-migration-between-github-products#about-the-migrator-role).
* For the destination enterprise account, you must be an enterprise owner.
* Organization migrations can migrate organizations with up to 5,000 repositories. If an organization contains more than 5,000 repositories, follow the instructions for [Migrating Repositories From Githubcom To GitHub Enterprise Cloud](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-between-github-products/migrating-repositories-from-githubcom-to-github-enterprise-cloud).

{% api %}

## Step 0: Get ready to use the GitHub GraphQL API

To make GraphQL queries, you'll need to write your own scripts or use an HTTP client like [Insomnia](https://insomnia.rest/).

To learn more about getting started with the GitHub GraphQL API, including how to authenticate, see [Forming Calls With GraphQL](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql).

You will send all GraphQL queries to the **destination** of your migration. If you're migrating to GitHub Enterprise Cloud with data residency, make sure to send queries to the endpoint for your enterprise's subdomain of GHE.com.


## Step 1: Get the enterprise ID for your migration destination

As an enterprise owner in GitHub.com, use the following query to return the ID for the enterprise account you want to own the migrated organization. You'll need the enterprise ID to identify your migration destination.

```graphql
query(
  $slug: String!
){
  enterprise (slug: $slug)
  {
    slug
    id
  }
}
```

| Query variable | Description |
|----|----|
| `slug` | The slug for your enterprise account, which you can identify by looking at the URL for your enterprise, `https://github.com/enterprises/SLUG` or `https://SLUG.ghe.com`.


## Step 2: Start your organization migration

When you start a migration, a single organization and its accompanying data migrates into a brand new organization within the destination enterprise that you identify.

```graphql
mutation startOrganizationMigration (
  $sourceOrgUrl: URI!,
  $targetOrgName: String!,
  $targetEnterpriseId: ID!,
  $sourceAccessToken: String!,
	$targetAccessToken: String!
){
  startOrganizationMigration( input: {
    sourceOrgUrl: $sourceOrgUrl,
    targetOrgName: $targetOrgName,
    targetEnterpriseId: $targetEnterpriseId,
    sourceAccessToken: $sourceAccessToken,
		targetAccessToken: $targetAccessToken
  }) {
    orgMigration {
      id
    }
  }
}
```

| Query variable | Description |
|----|----|
`sourceOrgUrl` | The URL of the source organization, such as `https://github.com/octo-org`.
`targetOrgName` | The name you want the new organization to have. Cannot be shared by another organization on your destination platform.
`targetEnterpriseId` | The ID of the enterprise that you want to create the new organization in, returned by step 2.
`sourceAccessToken` | Your personal access token (classic) for the source organization. For requirements, see [Managing Access For A Migration Between GitHub Products](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-between-github-products/managing-access-for-a-migration-between-github-products#required-scopes-for-personal-access-tokens).
`targetAccessToken` | Your personal access token (classic) for the destination enterprise.

In the next step, you'll use the migration ID returned from the `startOrganizationMigration` mutation to check the migration status.

## Step 3: Check the status of your migration

To detect any migration failures and ensure your migration is working, you can query the `OrganizationMigration`(s) that you have created to see the migration status using the `getMigration` query.

The query will return with a status to let you know if the migration is `queued`, `in progress`, `failed`, or `completed`, plus information about how many repositories are waiting to be migrated. If your migration failed, the Importer will provide a reason for the failure.

```graphql
query (
  $id: ID!
){
  node( id: $id ) {
    ... on OrganizationMigration {
      id
			sourceOrgUrl
			targetOrgName
      state
      failure_reason
      remaining_repositories_count
      total_repositories_count
    }
  }
}
```

| Query variable | Description |
|----|----|
| `id` | The `id` of your migration. |

{% endapi %}

{% cli %}

## Step 1: Install the GEI extension of the GitHub CLI

If this is your first migration, you'll need to install the GEI extension of the GitHub CLI. For more information about the GitHub CLI, see [About GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli).


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

Before you can use the GEI extension to migrate to GitHub Enterprise Cloud, you must create personal access tokens (classic) that can access the source organization and destination enterprise, then set the personal access tokens (classic) as environment variables.

1. Create and record a personal access token that meets all the requirements to authenticate for the source organization for organization migrations. For more information, see [Managing Access For A Migration Between GitHub Products](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-between-github-products/managing-access-for-a-migration-between-github-products#creating-a-personal-access-token-for-github-enterprise-importer).
1. Create and record a personal access token (classic) that meets all the requirements to authenticate for the destination enterprise for organization migrations.
1. Set environment variables for the personal access tokens (classic), replacing TOKEN in the commands below with the personal access tokens (classic) you recorded above. Use `GH_PAT` for the destination enterprise and `GH_SOURCE_PAT` for the source organization.

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


## Step 4: Migrate your organization

To migrate an organization, use the `gh gei migrate-org` command.

```shell copy
gh gei migrate-org --github-source-org SOURCE --github-target-org DESTINATION --github-target-enterprise ENTERPRISE
```

> [!NOTE] If you're migrating to GHE.com, add `--target-api-url TARGET-API-URL`, where TARGET-API-URL is the base API URL for your enterprise's subdomain. For example: `https://api.octocorp.ghe.com`.


Replace the placeholders in the command above with the following values.

Placeholder | Value |
----------- | ----- |

SOURCE | Name of the source organization

DESTINATION | The name you want the new organization to have. Cannot be shared by another organization on your destination platform.
ENTERPRISE | The slug for your destination enterprise, which you can identify by looking at the URL for your enterprise account, `https://github.com/enterprises/SLUG` or `https://SLUG.ghe.com`.

## Step 5: Validate your migration and check the error log

{% endcli %}
{% api %}

## Step 4: Validate your migration and check the error log

{% endapi %}

After your migration has finished, we recommend that you check the migration log repository. For more information, see [Accessing Your Migration Logs For GitHub Enterprise Importer](https://docs.github.com/en/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/accessing-your-migration-logs-for-github-enterprise-importer#accessing-an-organization-migration-log).

Finally, we recommend you perform a soundness check of your organization and migrated repositories.
