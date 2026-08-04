# Creating an organization team

Organizations that use GitHub Enterprise Cloud can use team synchronization to automatically add and remove organization members to teams through an identity provider. For more information, see [Synchronizing a team with an identity provider group](/enterprise-cloud@latest/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group) in the GitHub Enterprise Cloud documentation.





## Creating a team



1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Teams**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with the people icon and "Teams," is outlined in dark orange.](/assets/images/help/organizations/organization-teams-tab.png)

1. At the top of the page, click **New team**.

1. Under "Create new team", type the name for your new team.

1. Optionally, in the "Description" field, type a description of the team.

1. Optionally, if you're creating a child team, under "Parent team", select the **Select a parent team** dropdown menu and click a parent team. For more information about child teams, see [About Teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams#nested-teams).


1. Optionally, if your organization or enterprise account uses team synchronization or your enterprise uses Enterprise Managed Users, connect an identity provider group to your team.
    * If your enterprise uses Enterprise Managed Users, use the "Identity Provider Groups" drop-down menu, and select a single identity provider group to connect to the new team. For more information, [Managing Team Memberships With Identity Provider Groups](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups).
    * If your organization or enterprise account uses team synchronization, under "Identity Provider Groups," select the **Select Groups** dropdown menu, and click up to five identity provider groups to connect to the new team. For more information, see [Synchronizing A Team With An Identity Provider Group](https://docs.github.com/en/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group).

1. Under "Team visibility", select a visibility for the team.

1. Under "Team notifications", select **Enabled** or **Disabled**.

   > [!NOTE]
   > This setting only applies to @mentions of the team name. This setting does not affect notifications for reviews requested from the team.

1. Click **Create team**.

1. Optionally, give the team access to organization repositories. For more information, see [Managing Team Access To An Organization Repository](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository).



## Creating teams with LDAP Sync enabled

Instances using LDAP for user authentication can use LDAP Sync to manage a team's members. Setting the group's **Distinguished Name** (DN) in the **LDAP group** field will map a team to an LDAP group on your LDAP server. If you use LDAP Sync to manage a team's members, you won't be able to manage your team within {% ifversion ghes %}your GitHub Enterprise Server instance. The mapped team will sync its members in the background and periodically at the interval configured when LDAP Sync is enabled. For more information, see [Using Ldap](https://docs.github.com/en/admin/managing-iam/using-ldap-for-enterprise-iam/using-ldap#enabling-ldap-sync).

You must be a site admin and an organization owner to create a team with LDAP sync enabled.


As part of its optimization configuration, LDAP Sync will not transfer your nested team structure. To create child and parent team relationships, you must manually recreate the nested team structure and sync it with the corresponding LDAP group. For more information, see [Creating A Team](https://docs.github.com/en/organizations/organizing-members-into-teams/creating-a-team#creating-teams-with-ldap-sync-enabled)



> [!NOTE]
> * LDAP Sync only manages the team's member list. You must manage the team's repositories and permissions from within GitHub Enterprise Server.
> * If an LDAP group mapping to a DN is removed, such as if the LDAP group is deleted, then every member is removed from the synced GitHub Enterprise Server team. To fix this, map the team to a new DN, add the team members back, and [manually sync the mapping](/admin/managing-iam/using-ldap-for-enterprise-iam/using-ldap#manually-syncing-ldap-accounts).
> * When LDAP Sync is enabled, if a person is removed from a repository, they will lose access but their forks will not be deleted. If the person is added to a team with access to the original organization repository within three months, their access to the forks will be automatically restored on the next sync.

1. Ensure that [LDAP Sync is enabled](/admin/managing-iam/using-ldap-for-enterprise-iam/using-ldap#enabling-ldap-sync).
1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Teams**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with the people icon and "Teams," is outlined in dark orange.](/assets/images/help/organizations/organization-teams-tab.png)

1. At the top of the page, click **New team**.

1. Under "Create new team", type the name for your new team.

1. Under "LDAP group," search for an LDAP group's DN to map the team to. If you don't know the DN, type the LDAP group's name. GitHub Enterprise Server will search for and autocomplete any matches.
1. Optionally, in the "Description" field, type a description of the team.

1. Under "Team visibility", select a visibility for the team.

1. Optionally, if you're creating a child team, under "Parent team", select the **Select a parent team** dropdown menu and click a parent team. For more information about child teams, see [About Teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams#nested-teams).

1. Click **Create team**.


{% endif %}
