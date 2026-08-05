# Preparing for your live migration from GitHub Enterprise Server to GHE.com

>[!NOTE] Enterprise Live Migrations is in public preview and subject to change.


## Is our GitHub Enterprise Server instance ready?

ELM is available in the latest patch releases for GitHub Enterprise Server 3.17 and later. This documentation assumes you are using the following patch version or later. The instructions may not work on earlier versions.



* `3.21.2`
* `3.20.4`
* `3.19.8`
* `3.18.11`
* `3.17.17`

Your GitHub Enterprise Server instance must also:

* Use an **HTTPS** URL. HTTP URLs are not supported.
* Allow outbound traffic to the destination of the migration.
* Have migrations enabled in the "Migrations" section of the Management Console.
* Be prepared for some additional load during the migration: repository archiving causes all issues and pull requests in the repository to be pulled from MySQL and reindexed in Elasticsearch.

## What will our destination organization look like?

You can migrate repositories to a new or existing organization on GHE.com. ELM creates the target organization if it doesn't already exist.

A platform migration is a good opportunity to reconsider your organization and team structure. See [Organize Work](https://docs.github.com/en/admin/concepts/enterprise-best-practices/organize-work).

## Which repositories will we migrate?

ELM supports up to **10** concurrent repository migrations from a single GitHub Enterprise Server instance, and **20** concurrent migrations per destination enterprise.

Plan which repositories you will migrate with ELM first, and which you can migrate later or using a different migration tool. Repositories that are most likely to benefit from ELM are:

* Important repositories where long periods of downtime would disrupt your business
* Large monorepos that are too big for other migration tools

Public repositories are not available on GHE.com, and these will be rejected by ELM. You can change the visibility of these repositories on GitHub Enterprise Server before you start.

You should check that the repositories you choose don't contain release assets that are over 2GB, as this is the limit for ELM.

## Who will run the migration?

The person who runs an ELM migration must:

* Have site admin access to the GitHub Enterprise Server instance
* Be an enterprise owner on the GHE.com enterprise

This person will need to perform the following tasks:

* Before the migration, create personal access tokens (classic) on both the source and destination enterprise.
* During the migration, monitor the migration status and respond to issues.

For concurrent ELM migrations from a GitHub Enterprise Server instance, the same person must run all the `elm` commands, using the same tokens.

After the migration, someone will need to perform some follow-up tasks on GHE.com. Any organization owner can do this.

## What should my developers know?

Before you start, communicate with developers that:

* The repository is moving to a new location. Users can continue to use the source repository during the migration until the operator begins the final cutover to the new location. After cutover, the source repository will be archived, so it will be read-only unless it is unarchived by a repository administrator.
* While the migration is in progress, developers should avoid force pushes to the repository, because these will disrupt the Git history in a way that ELM cannot resolve.
* Certain actions that developers perform during the migration process may not be reflected in the migrated repository. For details, see the unsupported actions in [Migrated Data Reference](https://docs.github.com/en/migrations/elm/migrated-data-reference#events-included-in-live-updates).

## Next steps

When you're ready to run a migration, see [Migrate Your Repository](https://docs.github.com/en/migrations/elm/migrate-your-repository).
