# Managing team synchronization for organizations in your enterprise

> [!NOTE]
> If your enterprise uses Enterprise Managed Users, you do not need to use team synchronization. Instead, you can manage team membership via the SCIM configuration you created while setting up your enterprise. For more information, see [Managing Team Memberships With Identity Provider Groups](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups).




## About team synchronization for enterprise accounts

If you use SAML at the enterprise level with Entra ID as your IdP, you can enable team synchronization for your enterprise account to allow organization owners and team maintainers to synchronize teams in the organizations owned by your enterprise accounts with IdP groups.

If team sync is enabled for your organization or enterprise account, you can synchronize a GitHub team with an IdP group. When you do this, membership changes to the IdP group are reflected on GitHub automatically, reducing the need for manual updates and custom scripts.



Team synchronization is not a user provisioning service and does not invite non-members to join organizations in most cases. This means a user will only be successfully added to a team if they are already an organization member. However, you can optionally allow team synchronization to re-invite users who were previously organization members and have since been removed.



After you enable team synchronization, team maintainers and organization owners can connect a team to an IdP group on GitHub or through the API. For more information, see [Synchronizing A Team With An Identity Provider Group](https://docs.github.com/en/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group) and [Teams](https://docs.github.com/en/rest/teams#team-sync).


> [!WARNING]
> When you disable team synchronization, any team members that were assigned to a GitHub team through the IdP group are not removed from the team and retain their access to repositories.


You can also configure and manage team synchronization for an individual organization. For more information, see [Managing Team Synchronization For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization).

### Usage limits

There are usage limits for the team synchronization feature. Exceeding these limits will lead to a degradation in performance and may cause synchronization failures.

* Maximum number of members in a GitHub team: 5,000
* Maximum number of members in a GitHub organization: 10,000
* Maximum number of teams in a GitHub organization: 1,500

These limits only apply to the use of the team synchronization feature. Your organization may have more members or teams than the limits above, but your use of the team synchronization feature will be impaired. These limits do not apply to SCIM-based linking of teams to SCIM groups.

## Prerequisites

* You must use an Entra ID commercial tenant, not Gov Cloud.
* You or your Entra ID administrator must be a Global administrator or a Privileged Role administrator in Entra ID.
* You must enforce SAML single sign-on for organizations in your enterprise account with your supported IdP. For more information, see [Configuring Saml Single Sign On For Your Enterprise](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise).
* You must authenticate to your enterprise account using SAML SSO and the supported IdP. For more information, see [Authenticating With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on).

## Managing team synchronization for Entra ID

To enable team synchronization for Entra ID, your Entra ID installation needs the following permissions.
* [Read all group memberships](https://learn.microsoft.com/en-us/graph/permissions-reference#groupmemberreadall) : GitHub gets a list of Entra groups so users can select one to synchronize to a specific GitHub team.
* [Read all users’ full profiles](https://learn.microsoft.com/en-us/graph/permissions-reference#userreadall) : GitHub gets a list of members' Entra ID and Entra display/full names for syncing an Entra group and a GitHub team.
* [Sign in and read user profile](https://learn.microsoft.com/en-us/graph/permissions-reference#userread) : When SAML SSO is enabled, users must single sign-on to the Entra application as a prerequisite for team syncing.



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Authentication security**.

1. Confirm that SAML SSO is enabled for your enterprise.

1. Under "Team synchronization", click **Enable for Entra ID**.

1. Confirm team synchronization.
    * If you have IdP access, click **Enable team synchronization**. You'll be redirected to your identity provider's SAML SSO page and asked to select your account and review the requested permissions.
    * If you don't have IdP access, copy the IdP redirect link and share it with your IdP administrator to continue enabling team synchronization.

1. Review the details for the IdP tenant you want to connect to your enterprise account, then click **Approve**. This will register the **GitHub team synchronization** app as an active enterprise application within your Entra ID tenant.

1. To disable team synchronization, under "Team synchronization", click **Disable team synchronization**.



## Managing whether team synchronization can re-invite non-members to organizations

Changes to this setting do **not** impact pending invitations. Any invitation generated while team sync was allowed to re-invite past members to the organization can result in the member being re-added to the organization, even if re-invitation has since been disallowed.



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Authentication security**.

1. Under "Team synchronization", select or deselect **Do not allow Team Sync to re-invite past members to organizations that were removed by an organization owner.**
