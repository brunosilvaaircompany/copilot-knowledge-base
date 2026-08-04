# Moving a team in your organization's hierarchy

Organization owners can change the parent of any team. Team maintainers can change a team's parent if they are maintainers in both the child team and the parent team. Team maintainers without maintainer permissions in the child team can request to add a parent or child team. For more information, see [Requesting To Add Or Change A Parent Team](https://docs.github.com/en/organizations/organizing-members-into-teams/requesting-to-add-or-change-a-parent-team) and [Requesting To Add A Child Team](https://docs.github.com/en/organizations/organizing-members-into-teams/requesting-to-add-a-child-team).

Child teams inherit the access permissions of the parent team. For more information on team hierarchies, see [About Teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams#nested-teams).


> [!TIP]
> * You cannot change a team's parent to a secret team. For more information, see [About Teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams).
> * You cannot nest a parent team beneath one of its child teams.
> * Adding an existing child team to a new parent team removes it from its previous parent team.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Teams**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with the people icon and "Teams," is outlined in dark orange.](/assets/images/help/organizations/organization-teams-tab.png)

1. In the list of teams, click the name of the team whose parent you'd like to change.
1. At the top of the team page, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

   ![Screenshot of the header of a team's page. A tab, labeled with a gear icon and "Settings", is outlined in dark orange.](/assets/images/help/teams/team-settings-global-nav-update.png)

1. Under "Parent team", select the **Select a parent team** dropdown menu and either click a parent team, or, to remove an existing parent, click **Clear selected value**.
1. Click **Update**.
1. Read about the changed repository access permissions.

1. Click **Confirm new parent team**.

## Further reading

* [About Teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams)
