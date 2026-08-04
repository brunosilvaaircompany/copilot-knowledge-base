# Abilities of roles in an enterprise

## About roles in an enterprise

GitHub offers a range of predefined and custom roles for access to enterprise settings and resources.

| Role | Description |
| ---- | ----------- |
| Enterprise owner | Can manage all enterprise settings, members, and policies. |
|  |
| Billing manager | Can manage enterprise billing settings. |
|  |
|  |
| App manager | Can manage GitHub App registrations that are owned by the enterprise. |
|  |
|  |
| Security manager | Can view security results and manage security settings for the enterprise (public preview). |
|  |
| User | A regular enterprise member with no administrative access. Includes organization members and unaffiliated users. |
|  |
|  |
| Guest collaborator | Can be granted access to repositories or organizations, but has limited access by default (Enterprise Managed Users only). |
|  |
|  |
| Custom roles | Define your own set of permissions for access to enterprise settings. |
|  |

People with collaborator access to repositories are listed in your enterprise's "People" tab, but are not enterprise members and do not have access to the enterprise. See [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators-or-repository-collaborators).

## Enterprise owners

Enterprise owners have complete control over the enterprise and can take every action, including:

* Managing administrators
* Adding and removing {% elsif ghes %}Managing organizations
* Removing enterprise members from all organizations
* Managing enterprise settings
* Enforcing policy across organizations
* Managing billing settings
* Managing security settings

Enterprise owners do not have access to organization settings or content by default, but they can gain access by joining any organization. See [Managing Your Role In An Organization Owned By Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise).



## Billing managers

Billing managers only have access to your enterprise's billing settings. They can view and manage:

* User licenses
* Usage-based billing
* Other billing settings

Billing managers do not have access to organization settings or content by default except for internal repositories within an enterprise in which they are a member.





## App managers

GitHub App managers:

* Can view, create, edit, and delete GitHub App registrations that are owned by the enterprise. For the specific app settings that GitHub App managers can control, see [Modifying A GitHub App Registration](https://docs.github.com/en/apps/maintaining-github-apps/modifying-a-github-app-registration).
* Cannot install and uninstall GitHub Apps on an enterprise or organization.

App managers can also be assigned to individual apps. See [Adding And Removing GitHub App Managers In Your Enterprise](https://docs.github.com/en/admin/managing-github-apps-for-your-enterprise/adding-and-removing-github-app-managers-in-your-enterprise).





## Security managers

> [!NOTE]
> The enterprise security manager role is in public preview and subject to change.

Security managers have the permissions required to effectively manage use of security features and alerts for the enterprise. They can view, manage, and assign:

* Security configurations at the enterprise and organization level
* Use of GitHub Secret Protection and GitHub Code Security at the enterprise and organization level
* Security alerts and dashboards for all repositories in organizations in the enterprise
* Security campaigns for organizations
* Repository settings for security features

In addition, they have read access for code in all repositories and write access for all security alerts in the enterprise.



## Users

Users have no administrative access to the enterprise by default. They cannot access or configure enterprise settings, unless you assign them a custom role that grants this access.



### Organization members



If a user is a member or owner of any organization, they are listed as an **organization member** on your enterprise's "People" page. In addition to their access to organizations where they are members, these users can access all repositories with "internal" visibility in any organization in the enterprise. See [About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories).



### Unaffiliated users

If a user is not a member of any organization, and doesn't have the enterprise owner or billing manager role, the user is listed as an unaffiliated user.

Unaffiliated users:

* Do not consume a GitHub Enterprise license, unless they meet another criterion listed in [GitHub License Users](https://docs.github.com/en/billing/reference/github-license-users#organizations-on-github-enterprise-cloud).
* Cannot access private or internal repositories.
* Can be added as members of enterprise teams.
* Can receive a Copilot license or custom role directly from your enterprise.
* Can remove themselves from the enterprise at any time, unless you use Enterprise Managed Users.

If you have an enterprise with personal accounts, you can disable this role. See [Control Offboarding](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/control-offboarding).





## Guest collaborators

>[!NOTE] The guest collaborator role is only available with Enterprise Managed Users.


You can use the guest collaborator role to grant limited access to vendors and contractors. Guest collaborators:

* Are provisioned by your IdP, like all managed user accounts.
* Can be added as organization members or as collaborators in repositories.
* Cannot access internal repositories in the enterprise, except in organizations where they're added as a member.

The difference between a guest collaborator and a regular user is that when a regular user is added to one organization, they can automatically access **all** internal repositories in the enterprise.


You may need to update your IdP application to use guest collaborators. See [Enabling Guest Collaborators](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/enabling-guest-collaborators).





## Custom roles

With custom roles, you can define your own sets of permissions. This allows you to delegate administrative duties securely or grant extra privileges to help non-administrators be productive.

To create a custom enterprise role, see [Create Custom Roles](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/create-custom-roles).

## Next steps

When you have decided which roles your users require, assign the roles to them. See [Assign Roles](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/assign-roles).
