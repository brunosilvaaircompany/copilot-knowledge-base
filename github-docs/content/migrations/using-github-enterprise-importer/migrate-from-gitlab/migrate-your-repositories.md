# Migrate your repositories from GitLab to GitHub

## Prerequisites

* You must have completed all previous phases of this guide.
* The GitLab project must be enabled for exports. See [Enable project export](https://docs.gitlab.com/administration/settings/import_and_export_settings/#enable-project-export) and [Sidekiq configuration for imports](https://docs.gitlab.com/administration/sidekiq/configuration_for_imports/) in the GitLab documentation.
* Ensure you understand the data that will be migrated and the known support limitations of the Importer.
 For more information, see [Understand Migrations](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrate-from-gitlab/understand-migrations).
* While not required, we recommend halting work during your production migration. The Importer doesn't support delta migrations, so any changes that happen during the migration will not migrate. If you choose not to halt work during your production migration, you'll need to manually migrate these changes.


## Performing a trial run

To help uncover problems that might be unique to your enterprise, we highly recommend performing a trial run of your migration. With a trial run, you'll learn:

* Whether the migration for a given repository can complete successfully.
* Whether you can get the migrated repository back to a workable state.
* How long a migration will take to run.

Trial runs can take place at any time, and work does not need to halt during the migration. To reduce the time it takes to complete your trial migrations, you can schedule the batches for your trial runs back-to-back. Users of those repositories can then validate the results on their own time.



1. Create a test organization for your trial migrations.

   You can use a single organization for all trial runs, or you can create one test organization for each intended destination organization. Consider including `-sandbox` at the end of the organization names, to clarify that the organizations are intended only for migration validation and not for production. You can delete the test organizations after you're done.

1. Run the trial migrations.
1. Confirm that you are able to complete the follow-up tasks in [Follow Up Tasks](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrate-from-gitlab/follow-up-tasks).
1. Ask users to validate the results of the migrations.
1. Resolve any issues uncovered by your trial migrations.
1. Optionally, delete the test organization.


## Migrating a single repository

To migrate one repository, use the `gh gl2gh migrate-repo` command.

```shell copy
gh gl2gh migrate-repo \
  --gitlab-server-url GITLAB_SERVER_URL \
  --gitlab-group SOURCE_GROUP \
  --gitlab-project SOURCE_PROJECT \
  --github-org DESTINATION \
  --github-repo NEW_REPO_NAME \
  --use-github-storage
```

Replace the placeholders in the command above with the following values.

Placeholder | Value
----------- | -----
GITLAB_SERVER_URL | The full URL of your GitLab instance, such as `https://gitlab.com` or `https://gitlab.example.com`.
SOURCE_GROUP | The full path of the group or namespace that contains the project. For nested subgroups, use the full path, such as `parent-group/subgroup`.
SOURCE_PROJECT | The GitLab project to migrate.
DESTINATION | The destination organization on GitHub.
NEW_REPO_NAME | The name for the repository on GitHub.

If you are not using GitHub-owned blob storage, see [Configure Storage](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrate-from-gitlab/configure-storage).

### Additional arguments

| Argument | Description |
| -------- | ----------- |
| `--target-repo-visibility` | Sets the visibility of the new repository to `public`, `private`, or `internal`. Defaults to `private`. |
| `--target-api-url TARGET-API-URL` | If you're migrating to GHE.com, add `--target-api-url TARGET-API-URL`, where TARGET-API-URL is the base API URL for your enterprise's subdomain. For example: `https://api.octocorp.ghe.com`.
 |
| `--target-uploads-url TARGET-UPLOADS-URL` | If you're migrating to GHE.com and using GitHub-owned blob storage, also add `--target-uploads-url TARGET-UPLOADS-URL`, where TARGET-UPLOADS-URL is the base uploads API URL for your enterprise's subdomain. For example: `https://uploads.octocorp.ghe.com`. This defaults to `https://uploads.github.com`.
 |
| `--no-ssl-verify` | Disables SSL verification when the GL2GH extension talks to your GitLab instance. Use this only if your GitLab instance uses a self-signed certificate. All other steps still verify SSL. |
| `--archive-url URL` | Imports a previously exported archive from a URL, instead of exporting the project from GitLab again. |
| `--archive-path PATH` | Imports a previously exported archive from a local file path, instead of exporting the project from GitLab again. |
| `--keep-archive` | Retains the export archive locally instead of deleting it after a successful upload. |

## Generating a migration script

If you want to migrate multiple repositories to GitHub Enterprise Cloud at once, use the GitHub CLI to generate a migration script. The resulting script contains one `migrate-repo` command per repository.

To generate a migration script, run the `gh gl2gh generate-script` command.

```shell copy
gh gl2gh generate-script \
  --gitlab-server-url GITLAB_SERVER_URL \
  --github-org DESTINATION \
  --output FILENAME \
  --use-github-storage
```

Replace the placeholders in the command above with the following values.

Placeholder | Value
----------- | -----
GITLAB_SERVER_URL | The full URL of your GitLab instance, such as `https://gitlab.com` or `https://gitlab.example.com`.
DESTINATION | The destination organization on GitHub.
FILENAME | A filename for the resulting migration script<br><br>If you're using Terminal, use a `.ps1` file extension as the generated script requires PowerShell to run. You can install PowerShell for [Mac](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-macos?view=powershell-7.2) or [Linux](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-linux?view=powershell-7.2).


By default, the script includes every project the token can access. To scope the script, add `--gitlab-group GROUP`, or `--gitlab-group GROUP --gitlab-project PROJECT` for a single project.

If you are not using GitHub-owned blob storage, see [Configure Storage](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrate-from-gitlab/configure-storage).

### Additional arguments

| Argument | Description |
| -------- | ----------- |
| `--target-api-url TARGET-API-URL` | If you're migrating to GHE.com, add `--target-api-url TARGET-API-URL`, where TARGET-API-URL is the base API URL for your enterprise's subdomain. For example: `https://api.octocorp.ghe.com`.
 |
| `--target-uploads-url TARGET-UPLOADS-URL` | If you're migrating to GHE.com and using GitHub-owned blob storage, also add `--target-uploads-url TARGET-UPLOADS-URL`, where TARGET-UPLOADS-URL is the base uploads API URL for your enterprise's subdomain. For example: `https://uploads.octocorp.ghe.com`. This defaults to `https://uploads.github.com`.
 |

### Reviewing the migration script

After you generate the script, review the file and, optionally, edit the script.

* If there are any repositories you don't want to migrate, delete or comment out the corresponding lines.
* If you want any repositories to have a different name in the destination organization, update the value for the corresponding `--github-repo` flag.
* If you want to change the visibility of a new repository, add or update the corresponding `--target-repo-visibility` flag.

### Migrate repositories

If your trial run was successful, and you were able to complete the follow-up tasks, you can proceed to the real migration.

>[!WARNING] We recommend halting work in the repositories you are migrating. Any changes made during or after the migration will need to be manually migrated.

Run the script you generated. Replace FILENAME in the commands below with the filename you provided when generating the script.

* If you're using Terminal, use `./`.

  ```shell copy
  ./FILENAME
  ```

* If you're using PowerShell, use `.\`.

  ```shell copy
  .\FILENAME
  ```
