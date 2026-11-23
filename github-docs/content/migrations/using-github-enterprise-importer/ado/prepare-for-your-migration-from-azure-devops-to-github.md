# Prepare for your migration from Azure DevOps to GitHub

## Determine how much you have to migrate

Determine your timeline, which will largely dictate your approach. The first step for determining your timeline is to get an inventory of what you need to migrate.

* Number of repositories
* Number of pull requests

>[!NOTE] Migration timing is largely based on the number of pull requests in a repository. If you want to migrate 1,000 repositories, and each repository has 100 pull requests on average, your migration will likely be very quick. If you want to migrate only 100 repositories, but the repositories each have 75,000 pull requests on average, the migration will take much longer and require more planning and testing.

We recommend the `inventory-report` command in the ADO2GH extension of the GitHub CLI. This command will connect with the Azure DevOps API, and then create several CSV files. `repos.csv` contains information about your repositories, including the number of pull requests.

To produce the CSV files, use the following command, replacing `YOUR_ADO_ORG` with your organization on Azure DevOps.

```shell copy
gh ado2gh inventory-report --ado-org YOUR_ADO_ORG
```

After you take inventory of the repositories you need to migrate, weigh your inventory data against your desired timeline.

* If your organization can withstand a higher degree of change, then you might be able to migrate all your repositories at once, completing your migration efforts in a few days.
* If you have teams that are not able to migrate at the same time, you might want to batch and stagger your migrations to fit the teams' timelines, extending your migration effort.

## Determine GitHub organizational structure

Next, plan the organizational structure you'll create in GitHub. ADO and GitHub have different ways of organizing an enterprise's work.

* ADO: Organization > team project > repositories
* GitHub: Enterprise > organization > repositories

After migrating to GitHub, you should have only one enterprise account and a small number of organizations owned by that enterprise. Each organization from ADO should correspond to a single organization on GitHub.

>[!NOTE] The concept of a team project, which is used to group repositories in ADO, does not exist in GitHub. We do not recommend creating an organization on GitHub for each team project on ADO, as this may result in a large list of ungrouped repositories within each organization. However, you can manage access to groups of repositories by creating teams.

If you want to break your migration effort into batches, the new structure can help you determine them. If you have more than one organization in ADO, and each organization's repositories are reasonably sized batches, consider batching by organization.

1. Decide what your new organization structure will be.
1. Decide if you need to break up your migration effort into smaller batches.
1. If so, decide how you want to break up your migrations.


## Configuring repository permissions

Because permissions work differently in GitHub than in ADO, GitHub Enterprise Importer does not attempt to migrate repository permissions from ADO.

When you use ADO2GH CLI, GitHub Enterprise Importer will create two teams in GitHub for each team project in ADO. Each team is granted a different level of access to all repositories that originated from the team project.

Team | Access to migrated repositories
--- | ---
TEAM-PROJECT-Maintainers | Maintainer
TEAM-PROJECT-Admins | Admin

To give access to migrated repositories, you can add people to these teams. You can do this manually on GitHub, or if you chose to link the teams to Azure Active Directory (AAD) groups during your migration, by managing group membership in AAD. For more information about manually managing team membership, see [Adding Organization Members To A Team](https://docs.github.com/en/organizations/organizing-members-into-teams/adding-organization-members-to-a-team).
