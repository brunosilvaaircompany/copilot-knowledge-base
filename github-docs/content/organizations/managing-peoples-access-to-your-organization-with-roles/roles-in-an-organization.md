# Roles in an organization

## About roles

To perform any actions on GitHub, such as creating a pull request in a repository or changing an organization's billing settings, a person must have sufficient access to the relevant account or resource. This access is controlled by permissions. A permission is the ability to perform a specific action. For example, the ability to delete an issue is a permission. A role is a set of permissions you can assign to individuals or teams.


Repository-level roles give organization members, outside collaborators and teams of people varying levels of access to repositories. For more information, see [Repository Roles For An Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization).

Team-level roles are roles that give permissions to manage a team. You can give any individual member of a team the team maintainer role, which gives the member a number of administrative permissions over a team. For more information, see [Assigning The Team Maintainer Role To A Team Member](https://docs.github.com/en/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member).

Organization-level roles are sets of permissions that can be assigned to individuals or teams to manage an organization and the organization's repositories, teams, and settings. For more information about all the roles available at the organization level, see [Permissions Of Predefined Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-predefined-organization-roles).


If your organization is owned by an enterprise account, enterprise owners can choose to join your organization with any role. For more information, see [Managing Your Role In An Organization Owned By Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise).


## About predefined organization roles

Predefined organization roles are roles that are available by default in every organization. You don't need to create them yourself. They can include both organization permissions that let the recipient manage the organization, as well as repository permissions that apply to all of the repositories in the organization.

For more information, see [Permissions Of Predefined Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-predefined-organization-roles).

## About custom organization roles

You can have more granular control over the access you grant to your organization and repository's settings by creating custom organization roles. Organization roles are a way to grant an organization member the ability to administer certain subsets of settings without granting full administrative control of the organization and its repositories. For example, you could create a role that contains the "View organization audit log" permission.



This feature is only available to organizations on GitHub Enterprise Cloud.
For more information about how you can try GitHub Enterprise Cloud for free, see [Setting up a trial of GitHub Enterprise Cloud](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).



For more information on the permissions available with custom roles, see [Permissions Of Custom Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles).

## Descriptions of predefined organization roles

You can assign people to a variety of organization-level roles to control your members' access to your organization and its resources.

Upon invitation, you can add a user as an owner, billing manager, or member. After they have joined, you can designate them additional permissions under a predefined or custom role, such as a Moderator role or a CI/CD role.

### Organization owners

Organization owners have complete administrative access to your organization. This role should be limited, but to no less than two people, in your organization. For more information, see [Maintaining Ownership Continuity For Your Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization).

### Organization members

The default, non-administrative role for people in an organization is the organization member. By default, organization members have a number of permissions, including the ability to create repositories and projects.



### Organization moderators

Moderators are organization members who, in addition to their permissions as members, are allowed to block and unblock non-member contributors, set interaction limits, and hide comments in public repositories owned by the organization. For more information, see [Managing Moderators In Your Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization).

### Billing managers

Billing managers are users who can manage the billing settings for your organization, such as payment information. This is a useful option if members of your organization don't usually have access to billing resources. For more information, see [Adding A Billing Manager To Your Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization).



### Security managers


The security manager role is an organization-level role that organization owners can assign to any member or team in the organization. When applied, it gives permission to view security alerts and manage settings for security features across your organization, as well as read permission for all repositories in the organization.




If your organization has a security team, you can use the security manager role to give members of the team the least access they need to the organization. For more information, see [Managing Security Managers In Your Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).

### GitHub App managers

By default, only organization owners can manage the settings of GitHub App registrations owned by an organization. To allow additional users or teams to manage GitHub App registrations owned by an organization, an owner can grant them GitHub App manager permissions.

When you designate a user or team as a GitHub App manager in your organization, you can grant them access to manage the settings of some or all GitHub App registrations owned by the organization. The GitHub App manager role does not grant users access to install and uninstall GitHub Apps on an organization. For more information, see [Adding And Removing GitHub App Managers In Your Organization](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/adding-and-removing-github-app-managers-in-your-organization).

### Outside collaborators or repository collaborators

To keep your organization's data secure while allowing access to repositories, you can add outside collaborators. An outside collaborator is a person who has access to one or more organization repositories but is not explicitly a member of the organization, such as a consultant or temporary employee.


If your enterprise uses managed user accounts, the outside collaborator role is called "repository collaborator." A repository collaborator must be part of your enterprise, with a managed user account provisioned from your identity provider. If the user does not already consume a license, the user will consume a license after you grant access to a repository. For more information, see [GitHub License Users](https://docs.github.com/en/billing/reference/github-license-users#about-changes-to-your-subscription).

Generally, the outside collaborator and repository collaborator roles are equivalent, and the documentation for outside collaborators also applies to repository collaborators. However, the following distinctions apply:
* You cannot enforce two-factor authentication (2FA) for repository collaborators, because this feature is not available with Enterprise Managed Users.
* Repository collaborators cannot bypass single sign-on (SSO) requirements, because SSO is managed at the enterprise level in an enterprise with managed users. However, like outside collaborators, they do not need to provide SSO authorization of credentials for organizations where they are a collaborator.
* Repository collaborators are subject to your enterprise IP allow list policy and your identity provider's conditional access policy. However, they are not subject to the organization's IP allow list policy.



#### Managing outside collaborators or repository collaborators

To manage access to repositories for outside collaborators or repository collaborators, see:

* [Adding Outside Collaborators To Repositories In Your Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization)
* [Converting An Organization Member To An Outside Collaborator](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/converting-an-organization-member-to-an-outside-collaborator)
* [Removing An Outside Collaborator From An Organization Repository](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/removing-an-outside-collaborator-from-an-organization-repository)


To control who can add outside collaborators{% ifversion repository-collaborators %} or repository collaborators to repositories, see:

* [Setting Permissions For Adding Outside Collaborators](https://docs.github.com/en/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)
* [Enforcing Repository Management Policies In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)
{% endif %}

## Next steps

* [Managing Custom Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-organization-roles)
