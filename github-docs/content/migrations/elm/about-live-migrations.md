# About live migrations from GitHub Enterprise Server to GHE.com

>[!NOTE] Enterprise Live Migrations is in public preview and subject to change.


## What is Enterprise Live Migrations?

Enterprise Live Migrations (ELM) is a service for migrating repositories from GitHub Enterprise Server to GitHub Enterprise Cloud with data residency (GHE.com). It is operated using a command line tool on GitHub Enterprise Server.

Migrations are "live" because users can continue using the source repository during most of the migration process. After the repository data is initially collected, webhooks check for changes to the repository, such as new commits or updates to settings. These changes are reported to ELM and included in the migration.

An ELM migration includes a single repository. Organization-level data, such as organization settings, teams, and projects, are **not** included in the migration and must be reconfigured manually on the destination enterprise.

## Differences from GitHub Enterprise Importer

ELM and GitHub Enterprise Importer (GEI) are separate tools that both support migrating repositories from GitHub Enterprise Server to GHE.com.

The main benefits of ELM are:

* **Reduced developer downtime**: During a migration with GEI, developers lose access to the repository for the duration of the migration. This downtime creates risks like blocked deployments or stalled feature work.
* **Monorepo support**: ELM is capable of migrating large, complex monorepos with deep histories. These often exceed the capacity of GEI.
* **Better visibility**: ELM provides detailed repository-level visibility into migration progress, surfacing granular failures so that you can be confident the migrated repository is an accurate replica.

However, because of the higher traffic load associated with live updates, ELM supports fewer concurrent migrations than GEI: up to **10** concurrent repository migrations from a single GitHub Enterprise Server instance, and **20** concurrent migrations per destination enterprise.

You may want to use both tools over the course of a platform migration, prioritizing the repositories that will benefit most from ELM.

## Overview of a migration

Typically, a site administrator runs a migration using the `elm` CLI tool, in a terminal session over SSH. The operator must provide personal access tokens with access to both GitHub Enterprise Server and the destination enterprise.

The high-level phases of a migration are:

1. **Creation**: The site admin runs CLI commands to create and start the migration, specifying the source repository and destination.
1. **Preflight checks**: The migration service verifies parameters, tokens, network connectivity, and repository configuration.
1. **Backfill**: The ELM tool does an initial crawl to capture all repository data and sends it to the migration service on the destination platform. During the backfill phase, webhooks check for live updates to the repository as the migration continues.
1. **Cutover**: The source repository is archived (made read-only) and any final live updates are sent to ELM. This is the downtime period for developers.
1. **Completion**: The migration is finished. The site admin can check the data was migrated successfully.
1. **Follow-up**: An organization owner performs follow-up tasks on the destination enterprise, such as reconfiguring organization settings and reattributing activity to users.

## Next steps

To get ready to run a migration, see [Prepare For Your Migration](https://docs.github.com/en/migrations/elm/prepare-for-your-migration).
