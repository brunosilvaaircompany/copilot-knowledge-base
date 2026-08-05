# Managing teams and people with access to your repository

## About access management for repositories

For each repository that you administer on GitHub, you can see an overview of every team or person with access to the repository. From the overview, you can also invite new teams or people, change each team or person's role for the repository, or remove access to the repository.

This overview can help you audit access to your repository, onboard or off-board contractors or employees, and effectively respond to security incidents.

If a person has been given conflicting access, you'll see a warning on the repository access page. The warning appears with "{% octicon "alert" aria-hidden="true" aria-label="alert" %} Mixed roles" next to the person with the conflicting access. To see the source of the conflicting access, hover over the warning icon or click **Mixed roles**.




If you're a member of an enterprise with managed users, you can invite a member of your enterprise to collaborate in a repository that either a user or organization owns. The invited user will only have access to the repository, even if the repository belongs to an organization. The user must be provisioned by your company's identity provider (IdP). For more information, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators-or-repository-collaborators).



For more information about repository roles, see [Permission Levels For A Personal Account Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/permission-levels-for-a-personal-account-repository) and [Repository Roles For An Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization).

## Filtering the list of teams and people

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Access" section of the sidebar, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Collaborators & teams**.

1. Under "Manage access", in the search field, start typing the name of the team or person you'd like to find. Optionally, use the dropdown menus to filter your search. 

   You can also toggle between the **Direct access** and **Organization access** tabs to view who has direct access to the repository and who can access the repository via a team or organization role.

## Changing permissions for a team or person

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Access" section of the sidebar, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Collaborators & teams**.

1. Under "Manage access", next to the team or person whose role you'd like to change, select the **Role** dropdown menu, and click a new role.

## Inviting a team or person

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Access" section of the sidebar, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Collaborators & teams**.

1. To the right of "Manage access", click **Add people** or **Add teams**.

1. In the search field, start typing the name of the team or person to invite, then click a name in the list of matches.
1. Under "Choose a role", select the repository role to grant to the team or person, then click **Add NAME to REPOSITORY**.

## Removing access for a team or person

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Access" section of the sidebar, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Collaborators & teams**.

1. Under "Manage access", next to the team or person whose access you'd like to remove, click **Remove**.

## Further reading

* [Setting Repository Visibility](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)
* [Setting Base Permissions For An Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/setting-base-permissions-for-an-organization)
