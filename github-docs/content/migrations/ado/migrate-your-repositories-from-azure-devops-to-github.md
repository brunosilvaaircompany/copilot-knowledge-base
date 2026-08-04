# Migrate your repositories from Azure DevOps to GitHub

## Prerequisites

* You must have completed all previous phases of this guide.
* Ensure you understand the data that will be migrated and the known support limitations of the Importer.
 For more information, see [Understand Migrations From Azure DevOps To GitHub](https://docs.github.com/en/migrations/ado/understand-migrations-from-azure-devops-to-github).
* While not required, we recommend halting work during your production migration. The Importer doesn't support delta migrations, so any changes that happen during the migration will not migrate. If you choose not to halt work during your production migration, you'll need to manually migrate these changes.


## Generate a migration script

If you want to migrate multiple repositories to GitHub Enterprise Cloud at once, use the GitHub CLI to generate a migration script. The resulting script will contain a list of migration commands, one per repository.

> [!NOTE]
> Generating a script outputs a PowerShell script. If you're using Terminal, you will need to output the script with the `.ps1` file extension and install PowerShell for either [Mac](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-macos?view=powershell-7.2) or [Linux](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-linux?view=powershell-7.2) to run it.


To generate a migration script, run the `gh ado2gh generate-script` command.

```shell copy
gh ado2gh generate-script --ado-org SOURCE --github-org DESTINATION --output FILENAME
```

Replace the placeholders in the command above with the following values.

Placeholder | Value |
----------- | ----- |

SOURCE | Name of the source organization

DESTINATION | Name of the destination organization

FILENAME | A filename for the resulting migration script<br><br>If you're using Terminal, use a `.ps1` file extension as the generated script requires PowerShell to run. You can install PowerShell for [Mac](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-macos?view=powershell-7.2) or [Linux](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-linux?view=powershell-7.2).


### Additional arguments

| Argument | Description |
| -------- | ----------- |
| `--target-api-url TARGET-API-URL` | If you're migrating to GHE.com, add `--target-api-url TARGET-API-URL`, where TARGET-API-URL is the base API URL for your enterprise's subdomain. For example: `https://api.octocorp.ghe.com`.
 |
| `--all` | Add additional functionality to the script, such as rewiring pipelines, creating teams, and configuring Azure Boards integrations. |
| `--download-migration-logs` | Download the migration log for each migrated repository. For more information about migration logs, see [Accessing Your Migration Logs For GitHub Enterprise Importer](https://docs.github.com/en/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/accessing-your-migration-logs-for-github-enterprise-importer#downloading-all-the-repository-migration-logs-for-a-migration-script). |

## Reviewing the migration script

After you generate the script, review the file and, optionally, edit the script.

* If there are any repositories you don't want to migrate, delete or comment out the corresponding lines.
* If you want any repositories to have a different name in the destination organization, update the value for the corresponding `--target-repo` flag.
* If you want to change the visibility of a new repository, update the value for the corresponding `--target-repo-visibility` flag. By default, the script sets the same visibility as the source repository.


## Perform a trial run

To help uncover problems that might be unique to your enterprise, we highly recommend performing a trial run of your migration. With a trial run, you'll learn:

* Whether the migration for a given repository can complete successfully.
* Whether you can get the migrated repository back to a workable state.
* How long a migration will take to run.

Trial runs can take place at any time, and work does not need to halt during the migration. To reduce the time it takes to complete your trial migrations, you can schedule the batches for your trial runs back-to-back. Users of those repositories can then validate the results on their own time.



1. Create a test organization for your trial migrations.

   You can use a single organization for all trial runs, or you can create one test organization for each intended destination organization. Consider including `-sandbox` at the end of the organization names, to clarify that the organizations are intended only for migration validation and not for production. You can delete the test organizations after you're done.

1. Run the trial migrations.
1. Confirm that you are able to complete the follow-up tasks in [Follow Up Tasks](https://docs.github.com/en/migrations/ado/follow-up-tasks).
1. Ask users to validate the results of the migrations.
1. Resolve any issues uncovered by your trial migrations.
1. Optionally, delete the test organization.


## Migrate repositories

If your trial run was successful, and you were able to complete the follow-up tasks, you can proceed to the real migration.

>[!WARNING] We recommend halting work in the repositories you are migrating. Any changes made during or after the migration will need to be manually migrated.

To migrate multiple repositories, run the script you generated. Replace FILENAME in the commands below with the filename you provided when generating the script.

* If you're using Terminal, use `./`.

  ```shell copy
  ./FILENAME
  ```

* If you're using PowerShell, use `.\`.

  ```shell copy
  .\FILENAME
  ```
