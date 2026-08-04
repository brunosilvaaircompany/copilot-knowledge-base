# Adding organization members to a team

Organizations that use GitHub Enterprise Cloud can use team synchronization to automatically add and remove organization members to teams through an identity provider. For more information, see [Synchronizing a team with an identity provider group](/enterprise-cloud@latest/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group) in the GitHub Enterprise Cloud documentation.





## Adding organization members to a team



1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Teams**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with the people icon and "Teams," is outlined in dark orange.](/assets/images/help/organizations/organization-teams-tab.png)

1. Click the name of the team.

1. At the top of the team page, click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Members**.

   ![Screenshot of the header of a team's page. A tab, labeled with an organization icon and "Members", is outlined in dark orange.](/assets/images/help/teams/members-tab-global-nav-update.png)

1. Above the list of team members, click **Add a member**.

1. Add an organization member to the team or invite a non-member to join a team.
   * If the person you want to add is already a member of your organization, type their username and click **Enter**. The user will immediately be added to the team.
   * If the person you want to add is not member of your organization, type their username or email address and click **Enter**. The user will receive an email invitation to join your organization and will be added to the team once they accept the invitation.


1. Review the list of repositories that the new team member will have access to, then click **Add USERNAME to TEAMNAME**.



You can [edit or cancel an invitation](/organizations/managing-membership-in-your-organization/canceling-or-editing-an-invitation-to-join-your-organization) any time before the user accepts.





## Mapping teams to LDAP groups (for instances using LDAP Sync for user authentication)

You can create a team with LDAP Sync enabled. See [Creating A Team](https://docs.github.com/en/organizations/organizing-members-into-teams/creating-a-team#creating-teams-with-ldap-sync-enabled).

A team that's synced to an LDAP group is indicated with a special LDAP badge. The member list for an LDAP synced team can only be managed from the LDAP group it's mapped to. See [Using Ldap](https://docs.github.com/en/admin/managing-iam/using-ldap-for-enterprise-iam/using-ldap#enabling-ldap-sync).

To add a new member to a team synced to an LDAP group, add the user as a member of the LDAP group, or contact your LDAP administrator.



## Further reading

* [Managing Team Access To An Organization Repository](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository)
