# Removing organization members from a team

Removing a member from a team revokes their access to all repositories and related resources granted through the team. This includes:

* Removal from assignee fields in issues, pull requests, and project cards.
* Loss of access to repository-specific tools such as GitHub Discussions, Projects, and Wikis.
* Inability to contribute to any repositories the team has access to.

If the member is assigned to any ongoing tasks, you should reassign them or grant them individual repository permissions, as required.

> [!WARNING]
> * If you remove a person’s access to a private repository, any of their forks of that private repository are deleted. Local clones of the private repository are retained. If a team's access to a private repository is revoked or a team with access to a private repository is deleted, and team members do not have access to the repository through another team, private forks of the repository will be deleted.
> * When [LDAP Sync is enabled](/admin/managing-iam/using-ldap-for-enterprise-iam/using-ldap#enabling-ldap-sync), if you remove a person from a repository, they will lose access but their forks will not be deleted. If the person is added to a team with access to the original organization repository within three months, their access to the forks will be automatically restored on the next sync.
> * You are responsible for ensuring that people who have lost access to a repository delete any confidential information or intellectual property.
> * People with admin permissions to a private or internal repository can disallow forking of that repository, and organization owners can disallow forking of any private or internal repository in an organization. For more information, see [Managing The Forking Policy For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) and [Managing The Forking Policy For Your Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository).


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Teams**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with the people icon and "Teams," is outlined in dark orange.](/assets/images/help/organizations/organization-teams-tab.png)

1. Click the name of the team.

1. Select the person or people you'd like to remove.

   ![Screenshot of the first user in a list of team members. To the left of the user, a checkbox is checked and outlined in dark orange.](/assets/images/help/teams/team-member-check-box.png)
1. Above the list of team members, use the drop-down menu and click **Remove from team**.

      ![Screenshot of a team's "Members" page. Above the list of team members, a dropdown menu, labeled "2 members selected", is outlined in dark orange.](/assets/images/help/teams/team-member-bulk-management.png)
