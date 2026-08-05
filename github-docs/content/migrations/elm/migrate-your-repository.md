# Migrating your repository with Enterprise Live Migrations

>[!NOTE] Enterprise Live Migrations is in public preview and subject to change.


>[!TIP] As you follow this guide, you can refer to the [Elm CLI Reference](https://docs.github.com/en/migrations/elm/elm-cli-reference) for more detailed usage information. If you encounter errors, see [Troubleshooting](https://docs.github.com/en/migrations/elm/troubleshooting).

## Prerequisites

Make sure you're ready for your migration. See [Prepare For Your Migration](https://docs.github.com/en/migrations/elm/prepare-for-your-migration).

## 1. Create access tokens

You must authenticate with a personal access token (classic) for both the source and destination of the migration. For detailed instructions, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

**Make a note of both tokens**, as you will need them in the next step.

1. Create a personal access token (classic) on **GitHub Enterprise Server** with the following scopes.

   * `repo`
   * `admin:org`
   * `admin:repo_hook`
   * `admin:org_hook`

1. Create a personal access token (classic) on **GHE.com** with the following scopes.

   * `repo`
   * `workflow`
   * `admin:org`
   * `admin:repo_hook`
   * `admin:enterprise`

1. If single sign-on is enforced on the target organization on GHE.com, authorize the GHE.com token.

## 2. Configure GitHub Enterprise Server

You must set some configuration on the GitHub Enterprise Server instance before performing a migration. These configuration values apply to all ELM migrations. Developers on GitHub Enterprise Server may experience a brief downtime when you apply the new configuration.

1. Access the GitHub Enterprise Server administrative shell over SSH. See [Accessing The Administrative Shell SSH](https://docs.github.com/en/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
1. Set the following configuration variables with `ghe-config`.

   For example: `ghe-config app.elm-exporter.enabled true`

   | Variable | Set this to... |
   |--------- | -------------- |
   | `app.elm-exporter.enabled` | `true` |
   | `app.elm.internal-webhooks-enabled` | `true` |
   | `app.elm-exporter.webhooks-loopback-address-enabled` | `true` |
   | `secrets.elm-exporter.migration-target-url` | The API URL for your destination enterprise (for example: `https://api.octocorp.ghe.com`). Do **not** include a trailing slash at the end of the URL.
 |
   | `secrets.elm-exporter.migration-target-token` | The access token you created for GHE.com. |
   | `secrets.elm-exporter.source-token` | The access token you created for GitHub Enterprise Server. |
   | `secrets.elm-exporter.source-user` | The username associated with the GitHub Enterprise Server token (for example: `ghe-admin`). |
   | `app.migrations.enabled` | If you don't already have migrations enabled on the instance, you must set this to `true`. |

1. Apply the configuration.

   ```shell copy
   ghe-config-apply
   ```

## 3. Set required environment variables

When the configuration has been applied, and before starting a migration, set required environment variables. For example:

```shell
export API_URL='http://localhost:1738'
```

>[!IMPORTANT] Copy the values for `API_URL` and `MIGRATION_MANAGER_HMAC_KEY` verbatim. The other variables are specific to your environment.

| Variable | Required value |
| -------- | -------------- |
| API_URL | `http://localhost:1738` |
| MIGRATION_MANAGER_HMAC_KEY | `$(ghe-config secrets.elm-exporter.elm-exporter-hmac-keys)` |
| MIGRATION_TARGET_URL | The API URL for your destination enterprise (for example: `https://api.octocorp.ghe.com`). Do **not** include a trailing slash at the end of the URL.
 |
| MIGRATION_TARGET_TOKEN | The personal access token (classic) for GHE.com
 |

Any of these values can also be provided as CLI flags on any `elm` command, which will take priority over the variables. For example: `--api-url http://localhost:1738`.

## 4. Create a migration

Create a new migration by specifying the source and target repository details. `--pat-name` must be set to `system-pat` as a static value. The other values are placeholders specific to your environment.

>[!NOTE] The `target-org` can be new or existing. If the target organization doesn't already exist, it will be created during the migration. However, no settings from the source organization will be migrated.

```shell copy
elm migration create \
  --source-org EXISTING-GHES-ORG \
  --source-repo EXISTING-GHES-REPO \
  --target-org GHEC-ORG \
  --target-repo NEW-GHEC-REPO \
  --target-api GHEC-API-URL \
  --pat-name system-pat
```

For example:

``` shell
elm migration create \
  --source-org my-ghes-org \
  --source-repo my-ghes-repo \
  --target-org my-dr-org \
  --target-repo my-dr-repo \
  --target-api $MIGRATION_TARGET_URL \
  --pat-name system-pat
```

Optional flags:
* `--start`: If you're ready to start the migration immediately.
* `--target-visibility`: Migrated repositories are created with **internal** visibility by default, but you can specify `private`.

### Save the migration ID

You should see a response like the following:

```json
{
  "migrationId": "2b5c9eae-b5da-4306-ab04-2a29cc2b7cb9",
  "expiresAt": "2026-02-11T21:49:33.619162159Z"
}
```

Export the `migrationId` as a variable, as you will need it for the next commands. For example:

```shell
export MIGRATION_ID='2b5c9eae-b5da-4306-ab04-2a29cc2b7cb9'
```

## 5. Start the migration

If you didn't already start the migration, start it now using the migration ID you just saved.

``` shell copy
elm migration start --migration-id $MIGRATION_ID
```

This launches the backfill and live update processes. ELM is now collecting data from the source repository and listening for supported webhook events.

## 6. Monitor the migration

When the migration has started, you should see a new repository on GHE.com. During the migration, you will see the repository fill with an initial load of data and receive updates as developers continue to work in the source repository.

Run the following command regularly to monitor the migration status. You will see a breakdown of the statuses of the source and target, and information on live data being migrated.

``` shell copy
elm migration status --migration-id $MIGRATION_ID
```

The most important indicator in the response is the status in the **combinedState** object. When the status reaches `COMBINED_STATUS_READY_FOR_CUTOVER`, you should be ready to proceed to the next step. However, you will be alerted in the `displayMessage` if any individual resources failed to migrate, which you may need to investigate.

For example:

``` json
  "combinedState":  {
    "status":  "COMBINED_STATUS_READY_FOR_CUTOVER",
    "displayMessage":  "Ready for cutover (1 resources failed)",
    "repositories":  [
      {
        "repositoryNwo":  "new-test-org/my-new-repo",
        "phase":  "REPOSITORY_PHASE_READY_FOR_CUTOVER",
        "displayStatus":  "Ready for cutover (1 failed)"
      }
    ],
    "readyForCutover":  true,
    "cutoverBlockers":  []
  },
```

Tips:

* If you're running multiple migrations, you can check the status of all of them with `elm migration list`. This command shows in-progress migrations by default, but you can also filter by `--status`.
* If you encounter failure statuses that require attention, see [Troubleshooting](https://docs.github.com/en/migrations/elm/troubleshooting#statuses-and-recommended-actions).

## 7. Complete the migration

When a migration is ready for cutover, you can complete the migration. The cutover process will archive the source repository, making it **permanently read-only** unless a repository administrator unarchives it.

``` shell copy
elm migration cutover-to-destination --migration-id $MIGRATION_ID
```

Continue to monitor the migration. When you see the `MIGRATION_STATUS_COMPLETED` status at the top of the response, the migration is complete, although there are some follow-up tasks to give access to users from GitHub Enterprise Server.

## Next steps

Give users access to the new repository and reconcile activity with user accounts. See [Complete Your Migration](https://docs.github.com/en/migrations/elm/complete-your-migration).
