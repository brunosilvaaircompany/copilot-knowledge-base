# Overview of a migration from Bitbucket Server to GitHub Enterprise Cloud

## Overview

With GitHub Enterprise Importer, you can migrate to GitHub Enterprise Cloud on a repository-by-repository basis. For more information, see [About GitHub Enterprise Importer](https://docs.github.com/en/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer).

If you're migrating from Bitbucket Server, you can use this guide to plan and implement your migration and complete follow-up tasks.

## Planning your migration

To plan your migration, ask yourself the following questions.


* [How soon do we need to complete the migration?](#how-soon-do-we-need-to-complete-the-migration)
* [Do we understand what will be migrated?](#do-we-understand-what-will-be-migrated)
* [Who will run the migration?](#who-will-run-the-migration)
* [What organizational structure do we want in GitHub?](#what-organizational-structure-do-we-want-in-github)

### How soon do we need to complete the migration?

Determine your timeline, which will largely dictate your approach. The first step for determining your timeline is to get an inventory of what you need to migrate.

* Number of repositories
* Number of pull requests

Migration timing is largely based on the number of pull requests in a repository. If you want to migrate 1,000 repositories, and each repository has 100 pull requests on average, and only 50 users have contributed to the repositories, your migration will likely be very quick. If you want to migrate only 100 repositories, but the repositories each have 75,000 pull requests on average, and 5,000 users, the migration will take much longer and require much more planning and testing.

After you take inventory of the repositories you need to migrate, you can weigh your inventory data against your desired timeline. If your organization can withstand a higher degree of change, then you might be able to migrate all your repositories at once, completing your migration efforts in a few days. However, you may have various teams that are not able to migrate at the same time. In this case, you might want to batch and stagger your migrations to fit the teams' timelines, extending your migration effort.

1. Determine how many repositories and pull requests you need to migrate.
1. To understand when teams can be ready to migrate, interview stakeholders.
1. Fully review the rest of this guide, then decide on a migration timeline.

### Do we understand what will be migrated?

Ensure that you and your stakeholders understand what data can be migrated by GitHub Enterprise Importer.

For migrations from Bitbucket Server, GitHub Enterprise Importer only migrates Git repositories and pull requests. Any other assets, such as CI pipelines, will remain in Bitbucket Server.

Because permissions work differently in GitHub than in Bitbucket Server, GitHub Enterprise Importer does not attempt to migrate repository permissions from Bitbucket Server. For more information, see [Configuring permissions](#configuring-permissions).

1. Review the data that's migrated from Bitbucket Server. For more information, see [About Migrations From Bitbucket Server To GitHub Enterprise Cloud](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/about-migrations-from-bitbucket-server-to-github-enterprise-cloud).
1. Make a list of any data that you'll need to manually migrate or recreate.

### Who will run the migration?

To migrate a repository, you must be an organization owner for the destination organization in GitHub, or an organization owner must grant you the migrator role.

You must also have required permissions and access to your Bitbucket Server instance:

* Admin or super admin permissions
* If your Bitbucket Server instance runs Linux, SFTP access to the instance, using a supported SSH private key (see [Managing Access For A Migration From Bitbucket Server](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/managing-access-for-a-migration-from-bitbucket-server#required-permissions-for-bitbucket-server))
* If your Bitbucket Server instance runs Windows, file sharing (SMB) access to the instance

1. Decide whether you want an organization owner of the destination organization to perform your migrations, or whether you need to grant the migrator role to someone else.
1. If you chose to grant the migrator role, decide which person or team you'll grant the role to.
1. Grant the migrator role to the person or team.
 For more information, see [Managing Access For A Migration From Bitbucket Server](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/managing-access-for-a-migration-from-bitbucket-server#about-the-migrator-role).
1. Confirm that the person has correctly configured personal access tokens to meet all the access requirements.
 For more information, see [Managing Access For A Migration From Bitbucket Server](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/managing-access-for-a-migration-from-bitbucket-server#required-scopes-for-personal-access-tokens).
1. Confirm the migrator has admin or super admin permissions and SFTP access for your Bitbucket Server instance.

### What organizational structure do we want in GitHub?

Next, plan the organizational structure you'll create in GitHub.

In Bitbucket Server, repositories are grouped into projects. In GitHub, repositories are owned by organizations. However, you should not assume that the best approach is to create one organization in GitHub per project in Bitbucket Server.

After migrating to GitHub, you should have only one enterprise account and a small number of organizations owned by that enterprise.

Each migrated repository will be owned by one of these organizations, which may result in a large list of ungrouped repositories within each organization. However, you can manage access to groups of repositories by creating teams on GitHub. For more information, see [About Teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams).

If you want to break your migration effort into batches, consider batching by organization.

1. Decide what your new organization structure will be.
1. Decide if you need to break up your migration effort into smaller batches.
1. If so, decide how you want to break up your migrations.


## Running your migrations

To help uncover problems that might be unique to your enterprise, we highly recommend performing a trial run of your migration. With a trial run, you'll learn:

* Whether the migration for a given repository can complete successfully.
* Whether you can get the migrated repository back to a workable state.
* How long a migration will take to run.

Trial runs can take place at any time, and work does not need to halt during the migration. To reduce the time it takes to complete your trial migrations, you can schedule the batches for your trial runs back-to-back. Users of those repositories can then validate the results on their own time.



We recommend creating a test organization to use as a destination for your trial migrations. You can use a single organization for all trial runs, or you can create one test organization for each intended destination organization. Consider including `-sandbox` at the end of the organization names, to clarify that the organizations are intended only for migration validation and not for production. You can delete the test organizations after you're done.


1. Create a test organization for your trial migrations.
1. Run the trial migrations.
1. Complete the follow-up tasks described below for the trial migrations.
1. Ask users to validate the results of the migrations.
1. Resolve any issues uncovered by your trial migrations.

1. If your destination uses IP allow lists, configure the list to allow access by GitHub Enterprise Importer.
 For more information, see [Managing Access For A Migration From Bitbucket Server](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/managing-access-for-a-migration-from-bitbucket-server#configuring-ip-allow-lists-for-migrations).
1. Run your production migrations. For more information, see [Migrating Repositories From Bitbucket Server To GitHub Enterprise Cloud](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/migrating-repositories-from-bitbucket-server-to-github-enterprise-cloud).
1. Optionally, delete the test organization.


## Completing follow-up tasks

After each migration has finished, you will need to complete some additional tasks before the repository is ready for work.


* [Checking the migration status](#checking-the-migration-status)
* [Reviewing the migration log](#reviewing-the-migration-log)
* [Setting repository visibility](#setting-repository-visibility)
* [Configuring permissions](#configuring-permissions)
* [Reclaiming mannequins](#reclaiming-mannequins)
* [Configuring IP allow lists](#configuring-ip-allow-lists)

### Checking the migration status

First, check whether your migration succeeded or failed.

The way you check the status of your migration depends on how you ran the migration.

* If you ran the migration using the GitHub CLI, by default, the process will display whether the migration succeeded or failed once the migration is complete. If the migration failed, you will see the reason for failure.

  ```text
  Migration completed (ID: RM_123)! State: SUCCEEDED
  ```

* If you ran the migration using the GitHub CLI with the optional `--queue-only` argument, the process will exit immediately after queueing the migration, and will not tell you if the migration succeeded or failed. You can check a migration's status using the `wait-for-migration` command, or by reviewing the migration log.
* If you ran the migration using the GraphQL API, you can query the `state` and `failureReason` fields on the `RepositoryMigration` object.

If the migration failed, the migration log may contain additional information about the cause of the failure. For more information, see [Reviewing the migration log](#reviewing-the-migration-log).


### Reviewing the migration log

Review the migration log for each migrated repository. For more information, see [Accessing Your Migration Logs For GitHub Enterprise Importer](https://docs.github.com/en/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/accessing-your-migration-logs-for-github-enterprise-importer).

If the migration failed, the log may contain additional information about the cause of the failure.

If the migration succeeded, there may be warnings in the migration log representing specific pieces of data (for example pull requests, issues, or comments) which were not migrated or were migrated with caveats.

For more information on understanding migration warnings, see [Troubleshooting Your Migration With GitHub Enterprise Importer](https://docs.github.com/en/migrations/troubleshooting/troubleshooting-your-migration-with-github-enterprise-importer#understanding-migration-log-warnings). After reviewing any migration warnings, you will need to make a decision about whether you can accept those warnings and move forward.


### Setting repository visibility

All repositories are migrated as private by default, and only the user that ran the migration and organization owners will have access to the repository. If you don't want the repository to be private, change the visibility.

* You can change a repository's visibility in the browser. For more information, see [Setting Repository Visibility](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility).
* Alternatively, you can use GitHub CLI to change repository visibility from the command line. For more information, see [`gh repo edit`](https://cli.github.com/manual/gh_repo_edit) in the GitHub CLI documentation.


### Configuring permissions

Because permissions work differently in GitHub than in Bitbucket Server, GitHub Enterprise Importer does not attempt to migrate repository permissions from Bitbucket Server.

To give access to migrated repositories, you can create teams and give each team access to the repository.

1. Create teams. For more information, see [Creating A Team](https://docs.github.com/en/organizations/organizing-members-into-teams/creating-a-team).
1. Add organization members to teams. For more information, see [Adding Organization Members To A Team](https://docs.github.com/en/organizations/organizing-members-into-teams/adding-organization-members-to-a-team).
1. Give each team access to the repository. For more information, see [Managing Team Access To An Organization Repository](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository).

### Reclaiming mannequins

After you run a migration with GitHub Enterprise Importer or Enterprise Live Migrations, all user activity in the migrated repository (except Git commits) is attributed to placeholder identities called mannequins.


> [!NOTE]
> Only organization owners can reclaim mannequins. If you've been granted the migrator role, contact an organization owner to perform this step.

1. Decide if you want to reclaim mannequins.
1. Plan when you'll complete reclaims.
1. Reclaim mannequins. You can reattribute the history for each mannequin to an organization member with the GitHub CLI or in your browser. If you use the GitHub CLI, you can reclaim mannequins in bulk.
 For more information, see [Reclaiming Mannequins For GitHub Enterprise Importer](https://docs.github.com/en/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/reclaiming-mannequins-for-github-enterprise-importer).
1. If any of the members do not already have appropriate access to the repository via team membership, give the members access to the repository. For more information, see [Managing An Individuals Access To An Organization Repository](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-an-individuals-access-to-an-organization-repository).


### Configuring IP allow lists

If you added the IP ranges for GitHub Enterprise Importer to the IP allow list for your destination organization, you can remove those entries. If you disabled your identity provider's IP allow list restrictions for your destination enterprise, you can re-enable them now.


For more information, see [Managing Access For A Migration From Bitbucket Server](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/managing-access-for-a-migration-from-bitbucket-server#configuring-ip-allow-lists-for-migrations).
