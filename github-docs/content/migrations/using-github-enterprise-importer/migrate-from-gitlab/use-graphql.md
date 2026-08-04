# Use GraphQL to migrate repositories from GitLab to GitHub Enterprise Cloud

> [!NOTE] You can also use GL2GH extension of the GitHub CLI to perform your migration. See [Understand Migrations](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrate-from-gitlab/understand-migrations).

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


Your migration source is your GitLab instance.

### `createMigrationSource` mutation

```graphql
mutation createMigrationSource($name: String!, $url: String!, $ownerId: ID!) {
  createMigrationSource(input: {name: $name, url: $url, ownerId: $ownerId, type: GITLAB}) {
    migrationSource {
      id
      name
      url
      type
    }
  }
}
```

Set `url` to the full URL of your GitLab instance, such as `https://gitlab.com` or `https://gitlab.example.com`. Make sure to use `GITLAB` for `type`.

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
        "name": "GitLab Source",
        "url": "https://gitlab.com",
        "type": "GITLAB"
      }
    }
  }
}
```

In this example, `MS_kgDaACQxYmYxOWU4Yi0wNzZmLTQ3NTMtOTdkZC1hNGUzZmYxN2U2YzA` is the migration source ID, which we'll use in a later step.

## Step 3: Generate and host your migration archive

Migrations from GitLab are archive-based. Instead of connecting to your GitLab instance during the migration, GitHub Enterprise Importer imports a migration archive that you generate from your GitLab project. A GitLab archive is a single file that contains both the Git source and the repository's metadata.

Before you start the migration, you must:

1. Generate a migration archive for the GitLab project you want to migrate.
1. Host the archive at a URL that GitHub Enterprise Cloud can access.

You'll provide this URL as the `gitArchiveUrl` value in the next step.

### Generating a migration archive

Use the GitLab [project export API](https://docs.gitlab.com/api/project_import_export/) to export the project you want to migrate. The token you use must have the `api` scope and a role with permission to export the project. For more information, see [Manage Access](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrate-from-gitlab/manage-access).

In the following requests, set the `GITLAB_PAT` environment variable to the token you created in [Manage Access](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrate-from-gitlab/manage-access). Replace `GITLAB-SERVER` with the host of your GitLab instance, such as `gitlab.com`, and replace `GROUP%2FPROJECT` with the URL-encoded path of your project. For example, the project `acme-group/my-project` is encoded as `acme-group%2Fmy-project`. For nested subgroups, include the full path, such as `parent-group%2Fsubgroup%2Fmy-project`.

1. Schedule the export.

   ```shell
   curl --request POST \
     --header "PRIVATE-TOKEN: $GITLAB_PAT" \
     "https://GITLAB-SERVER/api/v4/projects/GROUP%2FPROJECT/export"
   ```

1. Check the status of the export. Repeat this request until `export_status` is `finished`.

   ```shell
   curl --header "PRIVATE-TOKEN: $GITLAB_PAT" \
     "https://GITLAB-SERVER/api/v4/projects/GROUP%2FPROJECT/export"
   ```

1. Download the archive.

   ```shell
   curl --location \
     --header "PRIVATE-TOKEN: $GITLAB_PAT" \
     --output archive.tar.gz \
     "https://GITLAB-SERVER/api/v4/projects/GROUP%2FPROJECT/export/download"
   ```

### Hosting the archive

You must host the archive at a URL that GitHub Enterprise Cloud can access. You can either upload the archive to GitHub-owned blob storage or use an external blob storage provider. For information about external providers, see [Configure Storage](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrate-from-gitlab/configure-storage).

To upload the archive to GitHub-owned blob storage, you'll need the database ID of your organization on GitHub Enterprise Cloud. Replace `ORGANIZATION` with the name of your organization to get this ID from the `id` field in the response.

```shell
curl --header "Authorization: Bearer YOUR-TOKEN" \
  "https://api.github.com{% elsif ghes %}http(s)://HOSTNAME/api/v3/orgs/ORGANIZATION"
```

> [!NOTE] If you're migrating to GHE.com, replace `https://api.github.com{% elsif ghes %}http(s)://HOSTNAME/api/v3` with the base API URL for your enterprise's subdomain, such as `https://api.octocorp.ghe.com`.

Upload the archive with a `POST` request, replacing `ORGANIZATION-ID` with your organization's database ID. This request works for archives up to 100 MiB. For larger archives, use an external blob storage provider.

```shell
curl --request POST \
  --header "Authorization: Bearer YOUR-TOKEN" \
  --header "Content-Type: application/octet-stream" \
  --data-binary @archive.tar.gz \
  "https://uploads.github.com/organizations/ORGANIZATION-ID/gei/archive?name=archive.tar.gz"
```

> [!NOTE] If you're migrating to GHE.com, replace `uploads.github.com` with the uploads host for your enterprise's subdomain, such as `uploads.octocorp.ghe.com`.

The response includes a `uri` in the format `gei://archive/GUID`. Use this value as the `gitArchiveUrl` in the next step.

```json
{
  "guid": "ff7b1a25-aa10-41a9-8e42-f170304b1c0d",
  "node_id": "MA_kgDaACRmZjdiMWEyNS1hYTEwLTQxYTktOGU0Mi1mMTcwMzA0YjFjMGQ",
  "name": "archive.tar.gz",
  "size": 7103,
  "uri": "gei://archive/ff7b1a25-aa10-41a9-8e42-f170304b1c0d",
  "created_at": "2024-11-13T12:35:45.761-08:00"
}
```

## Step 4: Start your repository migration

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
  $gitArchiveUrl: String!,
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
    gitArchiveUrl: $gitArchiveUrl,
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

| `gitArchiveUrl` | A GitHub Enterprise Cloud-accessible URL to the migration archive you generated in the previous step. GitLab migrations use a single archive that contains both the Git source and metadata, so you don't need to provide a separate `metadataArchiveUrl`.
| `sourceRepositoryUrl` | The URL of your source repository on GitLab, using the format `https://GITLAB-SERVER/{group}/{project}`. For nested subgroups, include the full path, such as `https://GITLAB-SERVER/{parent-group}/{subgroup}/{project}`. GitHub Enterprise Cloud does not connect to this URL during the migration; it's recorded for reference.

Because GitLab migrations are archive-based, GitHub Enterprise Cloud does not connect to GitLab during the migration. The `accessToken` variable is required by the mutation but isn't used, so you can set it to any placeholder value, such as `not-used`.

For personal access token requirements, see [Manage Access](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrate-from-gitlab/manage-access).

In the next step, you'll use the migration ID returned from the `startRepositoryMigration` mutation to check the migration status.


## Step 5: Check the status of your migration

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


## Step 6: Validate your migration and check the error log

To finish your migration, we recommend that you check the "Migration Log" issue. This issue is created on GitHub in the destination repository.

![Screenshot of an issue with the title "Migration Log." The second comment in the issue includes logs for a migration.](/assets/images/help/github-enterprise-importer/migration-log-issue.png)

Finally, we recommend that you review your migrated repositories for a soundness check.


## Further reading

* [Follow Up Tasks](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrate-from-gitlab/follow-up-tasks)
