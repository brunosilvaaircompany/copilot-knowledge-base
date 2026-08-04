# Managing security managers in your organization

The security manager role is an organization-level role that organization owners can assign to any member or team in the organization. When applied, it gives permission to view security alerts and manage settings for security features across your organization, as well as read permission for all repositories in the organization.




## Permissions for the security manager role

Organization members and members of teams assigned the security manager role have only the permissions required to effectively manage use of security features for the organization.

* Read access on all repositories in the organization, in addition to any existing repository access
* Write access on all security alerts in the organization 
* Access to view and configure all repositories in the organization's security overview 
* The ability to configure settings for security features at the organization level, including the ability to enable or disable GitHub Advanced Security features
* The ability to configure settings for security features at the repository level, including the ability to enable or disable GitHub Advanced Security features

Additional functionality, including a security overview for the organization, is available in organizations that use GitHub Secret Protection, GitHub Code Security, or GitHub Advanced Security.

If a team has the security manager role, people with admin access to the team and a specific repository can change the team's level of access to that repository but cannot remove the access. For more information, see [Managing Team Access To An Organization Repository](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository) and [Managing Teams And People With Access To Your Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository).

## Managing security managers in your organization

You can assign the pre-defined security manager role to either an organization team or directly to an organization member. Larger organizations may want to create a dedicated team for security management. This approach is especially useful if you want to assign additional permissions to your security experts.

For information about assigning roles to users and teams, see [Using Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles).

## Creating a custom security role

You can create custom security roles for your organization with reduced or increased access, as needed. For example, you might create a security role limited to managing secret scanning results and bypass requests, or you might create a combined security and audit log role. For more information, see [Managing Custom Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-organization-roles).
