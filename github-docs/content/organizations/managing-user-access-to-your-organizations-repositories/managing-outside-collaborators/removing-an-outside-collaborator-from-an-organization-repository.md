# Removing an outside collaborator from an organization repository

>[!NOTE] If your enterprise uses managed user accounts, the outside collaborator role is called "repository collaborator." Generally, the documentation for outside collaborators also applies to repository collaborators. For the distinctions that apply, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators-or-repository-collaborators).





> [!WARNING]
> * When removing an outside collaborator from a private repository, the paid license count does not automatically downgrade. To pay for fewer licenses after removing users from your organization, follow the steps in [Downgrade Plan](https://docs.github.com/en/billing/how-tos/manage-plan-and-licenses/downgrade-plan).
> * You are responsible for ensuring that people who have lost access to a repository delete any confidential information or intellectual property.



While forks of private repositories are deleted when a collaborator is removed, the person will still retain any local clones of your repository.

## Removing outside collaborators from all repositories in an organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with a person icon and "People," is outlined in dark orange.](/assets/images/help/organizations/organization-people-tab.png)

1. In the "Organization permissions" sidebar, click **Outside collaborators**.

1. Select the outside collaborator or outside collaborators you'd like to remove from the organization.

   ![Screenshot of the first two users in the list of outside collaborators. To the left of each user, a checkbox is checked and outlined in dark orange.](/assets/images/help/teams/list-of-outside-collaborators-selected-bulk.png)
1. Above the list of outside collaborators, select the **X collaborators selected...** dropdown menu, and click **Remove from all repositories**.

   ![Screenshot of the list of outside collaborators. Above the list, a dropdown menu, labeled "2 collaborators selected..." is outlined in dark orange.](/assets/images/help/teams/user-bulk-management-options-for-outside-collaborators.png)
1. Review the outside collaborator or outside collaborators who will be removed from the organization, then click **Remove outside collaborators**.

## Removing an outside collaborator from a particular repository in an organization

If you only want to remove an outside collaborator from certain repositories in your organization, you can remove this person's access to one specific repository at a time.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with a person icon and "People," is outlined in dark orange.](/assets/images/help/organizations/organization-people-tab.png)

1. In the "Organization permissions" sidebar, click **Outside collaborators**.

1. To the right of the username of the person you want to remove, select the {% octicon "gear" aria-label="Collaborator settings" %} dropdown menu, and click **Manage**.

   ![Screenshot of the outside collaborator list for an organization. To the right of a collaborator, a kebab icon is outlined in dark orange.](/assets/images/help/organizations/manage-outside-collaborator.png)
1. To the right of the repository that you want to remove the outside collaborator from, click **Manage access**.
1. To completely remove the outside collaborator's access to the repository, in the upper right corner, click **Remove access to this repository**.
1. To confirm, click **Remove access**.

You can also remove an outside collaborator from a repository in the access overview in your repository settings. For more information, see [Managing Teams And People With Access To Your Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#removing-access-for-a-team-or-person).
