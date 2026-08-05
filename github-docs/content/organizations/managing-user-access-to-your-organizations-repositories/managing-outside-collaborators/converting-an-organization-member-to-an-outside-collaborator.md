# Converting an organization member to an outside collaborator

>[!NOTE] If your enterprise uses managed user accounts, the outside collaborator role is called "repository collaborator." Generally, the documentation for outside collaborators also applies to repository collaborators. For the distinctions that apply, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators-or-repository-collaborators).



## About conversion of organization members to outside collaborators

You can convert a member of an organization to an outside collaborator. For more information about outside collaborators, see [Adding Outside Collaborators To Repositories In Your Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization).

If the organization is owned by an enterprise, converting{% elsif ghes %}Converting an organization member to an outside collaborator may be restricted. For more information, see [Enforcing repository management policies in your enterprise](/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories).{% elsif fpt %} in the GitHub Enterprise Cloud documentation.

 Unless you are on a free plan, adding an outside collaborator to a private or internal repository will use one of your paid licenses. For more information, see "[About per-user pricing](/billing/reference/github-license-users){% elsif ghes %}[About billing for your enterprise](/billing/concepts/enterprise-billing/billing-for-enterprises)."
 When you add an outside collaborator to a repository, you'll also need to add them to any forks of the repository you'd like them to access. If you are adding an outside collaborator to a private or internal fork of a repository, the collaborator must be a member of the enterprise or have access to the upstream repository.


After converting a member to an outside collaborator, they will no longer be an explicit member of the organization and will be removed from all teams. They will retain repository access to those they were directly added to, as well as those added through their former team memberships. They will no longer be able to:

* Create teams
* See all organization members and teams
* @mention any visible team
* Be a team maintainer

For more information, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).

We recommend reviewing the organization member's access to repositories to ensure their access is as you expect. For more information, see [Managing An Individuals Access To An Organization Repository](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-an-individuals-access-to-an-organization-repository).

When you convert an organization member to an outside collaborator, their privileges as organization members are saved for three months so that you can restore their membership privileges if you invite them to rejoin your organization within that time frame. For more information, see [Reinstating A Former Member Of Your Organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization).

## Converting an organization member to an outside collaborator

> [!NOTE]
> You may not be able to convert an organization member to an outside collaborator, if an organization owner or enterprise owner has restricted your ability to add outside collaborators.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with a person icon and "People," is outlined in dark orange.](/assets/images/help/organizations/organization-people-tab.png)

1. Select the person or people you'd like to convert to outside collaborators.

   ![Screenshot of the first two users in a list of organization members. To the left of each member, a checkbox is checked and outlined in dark orange.](/assets/images/help/teams/list-of-members-selected-bulk.png)
1. Above the list of members, select the **X members selected...** dropdown menu and click **Convert to outside collaborator**.

   ![Screenshot of the list of organization members. Above the list, a dropdown menu, labeled "2 members selected..." is outlined in dark orange.](/assets/images/help/teams/user-bulk-management-options.png)
1. Read the information about converting members to outside collaborators, then click **Convert to outside collaborator**.
