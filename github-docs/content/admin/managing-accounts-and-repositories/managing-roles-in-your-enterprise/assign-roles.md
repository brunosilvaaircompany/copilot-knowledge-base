# Assigning roles to people in an enterprise

Enterprise owners can assign custom and predefined **enterprise roles** to users and teams. Some roles can be assigned to enterprise teams, whereas other roles are only available for individual users. Find the section below for the role you want to assign.

For more information about using roles effectively, see [Identify Role Requirements](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/identify-role-requirements).

## Assigning app managers, security managers, and custom roles

> [!NOTE] These roles are in public preview and subject to change.

These roles can be assigned to existing users and teams in your enterprise settings, including users whose accounts were provisioned with SCIM.

Before you assign a role, you may need to create a team. Teams are the best way to manage role assignments at scale. The enterprise security manager role can **only** be assigned to a team, not to individual users. See [Create Enterprise Teams](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

1. In the left sidebar, click **{% octicon "globe" aria-hidden="true" aria-label="globe" %} Enterprise roles**, then click **Role assignments**.
1. Click **Assign role**.
1. Choose the user or team and the role they should receive, then click **Assign role**.

## Assigning enterprise owners, billing managers, and guest collaborators

This role:

* Can be chosen when you invite a user to your enterprise or provision a user from your identity provider (IdP)
* Cannot currently be assigned to enterprise teams
* Can be changed for existing users

### Assigning to new users

* If you have enabled SCIM provisioning, roles are assigned from your IdP via the SCIM `roles` attribute.
* Otherwise, you can invite someone as an enterprise owner. See [Inviting People To Manage Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise).

### Assigning to existing administrators

You can change an administrator's role or convert them to a regular member once they have joined your enterprise.

* If you provisioned the user via SCIM, you must do this from your IdP via the SCIM `roles` attribute.
* For all other accounts, you can change the role on your enterprise's "Administrators" page, using the **{% octicon "kebab-horizontal" aria-label="Administrator" %}** menu next to the user's name. See [Viewing People In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-enterprise-administrators).

## Assigning roles in an organization

Enterprise owners cannot assign organization-level roles from the enterprise settings. An organization administrator must do this. See [Using Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles#assigning-an-organization-role).
