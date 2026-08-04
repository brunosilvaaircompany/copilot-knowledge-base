# Use GraphQL to migrate repositories from Azure DevOps to GitHub Enterprise Cloud

> [!NOTE] You can also use ADO2GH extension of the GitHub CLI to perform your migration. See [Understand Migrations From Azure DevOps To GitHub](https://docs.github.com/en/migrations/ado/understand-migrations-from-azure-devops-to-github).

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


Your migration source is your ADO organization.

### `createMigrationSource` mutation

```graphql
mutation createMigrationSource($name: String!, $ownerId: ID!) {
  createMigrationSource(input: {name: $name, url: "https://dev.azure.com", ownerId: $ownerId, type: AZURE_DEVOPS}) {
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
> Make sure to use `AZURE_DEVOPS` for `type`.


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
        "name": "Azure DevOps Source",
        "url": "https://dev.azure.com",
        "type": "AZURE_DEVOPS"
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
    targetRepoVisibility: $targetRepoVisibility,
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

| `sourceRepositoryUrl` | The URL of your source repository, using the format `https://dev.azure.com/{organization}/{project}/_git/{repository}`.

For personal access token requirements, see [Manage Access](https://docs.github.com/en/migrations/ado/manage-access).

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


## Further reading

* [Follow Up Tasks](https://docs.github.com/en/migrations/ado/follow-up-tasks)
* [Key Differences Between Azure DevOps And GitHub](https://docs.github.com/en/migrations/ado/key-differences-between-azure-devops-and-github)
