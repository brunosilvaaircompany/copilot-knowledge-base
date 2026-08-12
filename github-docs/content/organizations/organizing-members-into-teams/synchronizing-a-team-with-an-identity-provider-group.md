# Synchronizing a team with an identity provider group

> [!NOTE]
> If your enterprise uses Enterprise Managed Users, you do not need to use team synchronization. Instead, you can manage team membership via the SCIM configuration you created while setting up your enterprise. For more information, see [Managing Team Memberships With Identity Provider Groups](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups).




## About team synchronization

If team sync is enabled for your organization or enterprise account, you can synchronize a GitHub team with an IdP group. When you do this, membership changes to the IdP group are reflected on GitHub automatically, reducing the need for manual updates and custom scripts.
 For more information, see [Managing Team Synchronization For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization) and [Managing Team Synchronization For Organizations In Your Enterprise](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/managing-team-synchronization-for-organizations-in-your-enterprise).

You can connect up to five IdP groups to a GitHub team. You can assign an IdP group to multiple GitHub teams.

Team synchronization does not support IdP groups with more than 5000 members.

Once a GitHub team is connected to an IdP group, your IdP administrator must make team membership changes through the identity provider. You cannot manage team membership on GitHub or using the API.


If your organization is owned by an enterprise account, enabling team synchronization for the enterprise account will override your organization-level team synchronization settings. For more information, see [Managing Team Synchronization For Organizations In Your Enterprise](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/managing-team-synchronization-for-organizations-in-your-enterprise).




Team synchronization is not a user provisioning service and does not invite non-members to join organizations in most cases. This means a user will only be successfully added to a team if they are already an organization member. However, you can optionally allow team synchronization to re-invite users who were previously organization members and have since been removed.
 For more information, see [Managing Team Synchronization For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization#managing-whether-team-synchronization-can-invite-non-members-to-your-organization) and [Managing Team Synchronization For Organizations In Your Enterprise](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/managing-team-synchronization-for-organizations-in-your-enterprise#managing-whether-team-synchronization-can-invite-non-members-to-organizations).



All team membership changes made through your IdP will appear in the audit log on GitHub as changes made by the team synchronization bot. Team synchronization will fetch group information from your IdP at least once every hour, and reflect any changes in IdP group membership into GitHub.
Connecting a team to an IdP group may remove some team members. For more information, see [Requirements for members of synchronized teams](#requirements-for-members-of-synchronized-teams).


Parent teams cannot synchronize with IdP groups. If the team you want to connect to an IdP group is a parent team, we recommend creating a new team or removing the nested relationships that make your team a parent team. For more information, see [About Teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams#nested-teams), [Creating A Team](https://docs.github.com/en/organizations/organizing-members-into-teams/creating-a-team), and [Moving A Team In Your Organizations Hierarchy](https://docs.github.com/en/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy).

To manage repository access for any GitHub team, including teams connected to an IdP group, you must make changes with GitHub. For more information, see [About Teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams) and [Managing Team Access To An Organization Repository](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository).

You can also manage team synchronization with the API. For more information, see [Team Sync](https://docs.github.com/en/rest/teams/team-sync).

If you are managing a team's membership with an IdP group, you cannot assign the team maintainer role to a member of that team. For more information, see [Assigning The Team Maintainer Role To A Team Member](https://docs.github.com/en/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member).



## Requirements for members of synchronized teams

After you connect a team to an IdP group, team synchronization will add each member of the IdP group to the corresponding team on GitHub only if:

{%- ifversion team-sync-manage-org-invites %}
* If team synchronization is not allowed to invite non-members to your organization, the person is already a member of the organization on GitHub.

* The person has already logged in with their personal account on GitHub and authenticated to the organization or enterprise account via SAML single sign-on at least once.
* The person's SSO identity is a member of the IdP group.

Existing teams or group members who do not meet these criteria will be automatically removed from the team on GitHub and lose access to repositories. Revoking a user's linked identity will also remove the user from any teams mapped to IdP groups. For more information, see [Viewing And Managing A Members Saml Access To Your Organization](https://docs.github.com/en/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity) and [Viewing And Managing A Users Saml Access To Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity).

A removed team member can be added back to a team automatically once they have authenticated to the organization or enterprise account using SSO and are moved to the connected IdP group.

To avoid unintentionally removing team members, we recommend enforcing SAML SSO in your organization or enterprise account, creating new teams to synchronize membership data, and checking IdP group membership before synchronizing existing teams. For more information, see [Enforcing Saml Single Sign On For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization) and [Configuring Saml Single Sign On For Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise).

{% endif %}

## Prerequisites

To connect a team on GitHub to an IdP group, the team must already exist in your organization. Even if you have configured SCIM provisioning, creating a group in your IdP does not automatically create a team on GitHub.



Before you can connect a GitHub team with an IdP group, an organization or enterprise owner must enable team synchronization for your organization or enterprise account. For more information, see [Managing Team Synchronization For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization) and [Managing Team Synchronization For Organizations In Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/managing-team-synchronization-for-organizations-in-your-enterprise).

To avoid unintentionally removing team members, visit the administrative portal for your IdP and confirm that each current team member is also in the IdP groups that you want to connect to this team. If you don't have this access to your identity provider, you can reach out to your IdP administrator.

You must authenticate using SAML SSO. For more information, see [Authenticating With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on).

{% elsif ghes %}
You must configure user provisioning with SCIM for {% ifversion ghes %}your GitHub Enterprise Server instance. For more information, see [User Provisioning With Scim On Ghes](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/user-provisioning-with-scim-on-ghes).

{% endif %}

## Connecting an IdP group to a team

When you connect an IdP group to a GitHub team, all users in the group are automatically added to the team.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Teams**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with the people icon and "Teams," is outlined in dark orange.](/assets/images/help/organizations/organization-teams-tab.png)

1. Click the name of the team.

1. At the top of the team page, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

   ![Screenshot of the header of a team's page. A tab, labeled with a gear icon and "Settings", is outlined in dark orange.](/assets/images/help/teams/team-settings-global-nav-update.png)

1. Under "Identity Provider Groups", select the **Select Groups** dropdown menu, and click up to 5 identity provider groups.
1. Click **Save changes**.

## Disconnecting an IdP group from a team

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Click the name of your organization.

1. Under your organization name, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Teams**.

   ![Screenshot of the horizontal navigation bar for an organization. A tab, labeled with the people icon and "Teams," is outlined in dark orange.](/assets/images/help/organizations/organization-teams-tab.png)

1. Click the name of the team.

1. At the top of the team page, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

   ![Screenshot of the header of a team's page. A tab, labeled with a gear icon and "Settings", is outlined in dark orange.](/assets/images/help/teams/team-settings-global-nav-update.png)

1. Under "Identity Provider Groups", to the right of the IdP group you want to disconnect, click {% octicon "x" aria-label="Remove group" %}.
1. Click **Save changes**.
