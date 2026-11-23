# About live migrations

## What is Enterprise Live Migrations?

Enterprise Live Migrations (ELM) is a service for migrating repositories to GitHub Enterprise Cloud with data residency (GHE.com) with minimal downtime for developers. You can migrate from GitHub Enterprise Server or from Azure DevOps Services.

Migrations are "live" because users can continue working in the source repository during most of the migration process. After the repository data is initially copied, ELM continues to synchronize any changes made in the source repository, such as new commits, so that these changes are included in the migration.

A migration includes repository data only. Data that is not part of a repository, such as settings for the organization or project that contains it, is **not** included and must be migrated or reconfigured separately on the destination enterprise.

The tools you use to run a migration, and the data that ELM can migrate, depend on your source platform. For details, see the documentation for your migration path in [Next steps](#next-steps).

## Differences from GitHub Enterprise Importer

ELM and GitHub Enterprise Importer (GEI) are separate tools that both support migrating repositories to GHE.com.

The main benefits of ELM are:

* **Reduced developer downtime**: During a migration with GEI, developers lose access to the repository for the duration of the migration. This downtime creates risks like blocked deployments or stalled feature work.
* **Monorepo support**: ELM is capable of migrating large, complex monorepos with deep histories. These often exceed the capacity of GEI.
* **Better visibility**: ELM provides detailed repository-level visibility into migration progress, surfacing granular failures so that you can be confident the migrated repository is an accurate replica.

However, because of the higher traffic load associated with live updates, ELM supports fewer concurrent migrations than GEI.

You may want to use both tools over the course of a platform migration, prioritizing the repositories that will benefit most from ELM.

## Overview of a migration

The high-level phases of a migration are:

1. **Preparation and validation**: You choose the repositories to migrate, grant the migration operator the required access, and prepare the source and destination platforms. ELM then checks that each repository is ready to migrate.
1. **Initial copy**: ELM copies the repository data to the destination enterprise.
1. **Continuous synchronization**: ELM tracks changes made in the source repository and applies them to the destination repository, until you are ready to cut over.
1. **Cutover**: The source repository becomes read-only and any final changes are synchronized. This is the downtime period for developers.
1. **Verification**: The operator checks that the data was migrated successfully.
1. **Follow-up**: An organization owner performs follow-up tasks on the destination enterprise, such as configuring organization settings and reattributing activity to users.

## Next steps

Your next steps depend on your migration path.

* **GitHub Enterprise Server to GHE.com**: To get ready to run a migration, see [Prepare For Your Migration](https://docs.github.com/en/migrations/elm/ghes-to-ghecom/prepare-for-your-migration).
* **Azure DevOps to GHE.com**: For guidance on migrating from Azure DevOps Services, see [Enterprise live migrations overview](https://learn.microsoft.com/azure/devops/repos/enterprise-live-migrations/overview) in the Microsoft Learn documentation. If you currently use Azure DevOps Server, first migrate to Azure DevOps Services before you use ELM.
