# Creating enterprise teams

To simplify administration at scale, you can create enterprise teams. Enterprise teams can:


* Receive **Copilot Business licenses** directly from the enterprise.
* Be granted access to specific Copilot models (opt-in preview).

* Be assigned **predefined and custom enterprise roles**, giving members access to enterprise settings.
* Be **added to organizations**, where organization administrators can grant the team additional access and permissions.
* Receive **bypass access** on rulesets.

* Be mentioned, assigned, or requested for review in **issues and pull requests**.



Adding a user to a team grants them the privileges associated with the team. Removing a user from a team removes those privileges, but does not remove the user from the enterprise account.

There are **limits on enterprise teams**. You can create up to 2,500 teams for a single enterprise and add up to 5,000 users to each team. Each team can be assigned to a maximum of 15,000 organizations.



## 1. Navigate to the enterprise teams page


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

1. In the left sidebar, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Enterprise teams**.

## 2. Create a team

1. On the enterprise teams page, click **Create Enterprise team**.
1. Choose the team's name, description, and organization access.

   When you give a team access to organizations, members of the team are added directly to those organizations, without an invitation, and receive the same access as other organization members.

   * Outside collaborators and unaffiliated users in the team become standard enterprise members, meaning they have access to your enterprise's internal repositories and consume a GitHub Enterprise license.
   * Team members receive the base level of repository permissions for the organization.
   * Organization administrators can give the team additional repository access and assign them organization-level roles, but **cannot** remove any permissions granted by enterprise administrators.

1. Click **Create Enterprise team**.

## 3. Add users

There are multiple ways to add users to an enterprise team.

* [Adding users manually](#adding-users-manually)
* [Syncing with an IdP group](#syncing-with-an-idp-group) (Enterprise Managed Users only)
* Using the [Enterprise Team Members](https://docs.github.com/en/rest/enterprise-teams/enterprise-team-members)


Enterprise teams can contain organization members, unaffiliated users, and outside collaborators.


### Adding users manually

1. On the enterprise teams page, click the team you want to add users to.
1. Click **Add members**, then search for and select the users you want to add.
1. Click **Add**.

### Syncing with an IdP group

If you have enabled SCIM on GitHub Enterprise Server, you can sync membership of an enterprise team to a group in your identity provider. That way, any changes made to the group in the IdP (such as adding or removing a user) will be synced to the enterprise team via SCIM. For details and requirements, see [Managing Team Memberships With Identity Provider Groups](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups).

1. On the enterprise teams page, click the team you want to sync.
1. Ensure the team contains no manually assigned users. You can remove users by using the **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="More member actions" %}** menu next to the user's name in the member list.
1. Next to the team's name, click **{% octicon "pencil" aria-hidden="true" aria-label="pencil" %} Edit**.
1. Under "Manage members", click **Identity provider group**.
1. Click **Select group**, then choose the external IdP group to sync to the team. Members from the IdP group will display in the team's member list.
1. Click **Update team**.

#### Limits on IdP group sizes

If an IdP group goes over the team size limit of 5,000 users, the team will stop being synced.

For example:

* An enterprise team is initially synced with an IdP group of 5 users.
* 5,000 more users are added to the IdP group. Because the IdP group now has 5,005 users, the group isn't synced and the enterprise team remains at 5 members.
* 5 users are removed from the IdP group to bring it to 5,000 users. Syncing resumes and the enterprise team now contains the same 5,000 users as the IdP group.



## 4. Assign roles



You can assign custom enterprise roles and certain predefined roles to enterprise teams. This allows you to delegate administrative duties to specific teams or provide non-administrators with permissions that will help them work independently. See [Assign Roles](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/assign-roles).
