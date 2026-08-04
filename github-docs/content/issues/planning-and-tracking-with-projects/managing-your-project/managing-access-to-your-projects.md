# Managing access to your projects

## About project access

Admins of organization-level projects can manage access for the entire organization, for teams, for individual organization members, and for outside collaborators.

Admins of user-level projects can invite individual collaborators and manage their access.

Project admins can also control the visibility of their project for everyone on the internet. For more information, see [Managing Visibility Of Your Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-your-project/managing-visibility-of-your-projects).

## Managing access for organization-level projects

You can control access to your project by setting permissions for particular individuals and teams or you can set a base permission that applies to everyone in your organization.

### Managing access for everyone in your organization

You can manage access for everyone in your organization to a particular project by changing the project's base permission. Changes to the base permission only affect organization members who are not organization owners and who are not granted individual access.

You can also configure the default base permission at the organization-level for new projects and projects that haven't yet had a base permission configured. For more information about setting your organization's base permission for projects, see [Managing Base Permissions For Projects](https://docs.github.com/en/organizations/managing-organization-settings/managing-base-permissions-for-projects).

1. Navigate to your project.
1. In the top-right, click {% octicon "kebab-horizontal" aria-label="More options" %} to open the menu.

   ![Screenshot showing a project's menu bar. The menu icon is highlighted with an orange outline.](/assets/images/help/projects-v2/open-menu.png)
  
1. In the menu, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings** to access the project settings.

1. Click **Manage access**.
1. Under **Base role**, select the default role.

   ![Screenshot showing the "Who has access" settings. The dropdown for setting the base role is highlighted with an orange outline.](/assets/images/help/projects-v2/base-role.png)

   * **No access:** Only organization owners and users granted individual access can see the project. Organization owners are also admins for the project.
   * **Read:** Everyone in the organization can see the project. Organization owners are also admins for the project.
   * **Write:** Everyone in the organization can see and edit the project. Organization owners are also admins for the project.
   * **Admin:** Everyone in the organization is an admin for the project.

### Managing access for teams and individual members of your organization

You can also add teams, external collaborators, and individual organization members as collaborators for an organization-level project. For more information, see [About Teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams).

If you grant a team read permissions or greater for a project, the project is also displayed on the team's projects page. You can also add projects to a team on the team's projects page. For more information, see [Adding Your Project To A Team](https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-team).

You can only invite an individual user to collaborate on your organization-level project if they are already a member of the organization or an outside collaborator on at least one repository in the organization.

1. Navigate to your project.
1. In the top-right, click {% octicon "kebab-horizontal" aria-label="More options" %} to open the menu.

   ![Screenshot showing a project's menu bar. The menu icon is highlighted with an orange outline.](/assets/images/help/projects-v2/open-menu.png)
  
1. In the menu, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings** to access the project settings.

1. Click **Manage access**.
1. Under **Invite collaborators**, search for the team or individual user that you want to invite.

   ![Screenshot showing searching for a collaborator.](/assets/images/help/projects-v2/access-search.png)

1. Select the role for the collaborator.
   * **Read:** The team or individual can view the project.
   * **Write:** The team or individual can view and edit the project.
   * **Admin:** The team or individual can view, edit, and add new collaborators to the project.
1. Click **Invite**.

### Managing access of an existing collaborator on your project

1. Navigate to your project.
1. In the top-right, click {% octicon "kebab-horizontal" aria-label="More options" %} to open the menu.

   ![Screenshot showing a project's menu bar. The menu icon is highlighted with an orange outline.](/assets/images/help/projects-v2/open-menu.png)
  
1. In the menu, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings** to access the project settings.

1. Click **Manage access**.
1. Under **Manage access**, find the collaborator(s) whose permissions you want to modify.

   You can use the **Type** and **Role** drop-down menus to filter the access list.

   ![Screenshot of the "Manage access" section. The octocat is listed as a collaborator.](/assets/images/help/projects-v2/access-find-member.png)

1. Edit the role for the collaborator(s).
1. Optionally, click **Remove** to remove the collaborator(s).

## Managing access for user-level projects

### Granting a collaborator access to your project

> [!NOTE]
> This only affects collaborators for your project, not for repositories in your project. To view an item on the project, someone must have the required permissions for the repository that the item belongs to. Only people with access to a private repository will be able to view project items from that private repository. For more information, see [Setting Repository Visibility](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility) and [Managing Teams And People With Access To Your Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository).

1. Navigate to your project.
1. In the top-right, click {% octicon "kebab-horizontal" aria-label="More options" %} to open the menu.

   ![Screenshot showing a project's menu bar. The menu icon is highlighted with an orange outline.](/assets/images/help/projects-v2/open-menu.png)
  
1. In the menu, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings** to access the project settings.

1. Click **Manage access**.
1. Under **Invite collaborators**, search for the user that you want to invite.

   ![Screenshot showing searching for a collaborator.](/assets/images/help/projects-v2/access-search.png)

1. Select the role for the collaborator.
   * **Read:** The individual can view the project.
   * **Write:** The individual can view and edit the project.
   * **Admin:** The individual can view, edit, and add new collaborators to the project.
1. Click **Invite**.

### Managing access of an existing collaborator on your project

1. Navigate to your project.
1. In the top-right, click {% octicon "kebab-horizontal" aria-label="More options" %} to open the menu.

   ![Screenshot showing a project's menu bar. The menu icon is highlighted with an orange outline.](/assets/images/help/projects-v2/open-menu.png)
  
1. In the menu, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings** to access the project settings.

1. Click **Manage access**.
1. Under **Manage access**, find the collaborator(s) whose permissions you want to modify.

   You can use the **Type** and **Role** drop-down menus to filter the access list.

   ![Screenshot of the "Manage access" section. The octocat is listed as a collaborator.](/assets/images/help/projects-v2/access-find-member.png)

1. Edit the role for the collaborator(s).
1. Optionally, click **Remove** to remove the collaborator(s).
