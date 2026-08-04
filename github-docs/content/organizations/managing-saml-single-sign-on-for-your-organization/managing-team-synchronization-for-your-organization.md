# Managing team synchronization for your organization

> [!NOTE]
> If your enterprise uses Enterprise Managed Users, you do not need to use team synchronization. Instead, you can manage team membership via the SCIM configuration you created while setting up your enterprise. For more information, see [Managing Team Memberships With Identity Provider Groups](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups).




## About team synchronization

You can enable team synchronization between your IdP and GitHub to allow organization owners and team maintainers to connect teams in your organization with IdP groups.

If team sync is enabled for your organization or enterprise account, you can synchronize a GitHub team with an IdP group. When you do this, membership changes to the IdP group are reflected on GitHub automatically, reducing the need for manual updates and custom scripts.


To connect a team on GitHub to an IdP group, the team must already exist in your organization. Even if you have configured SCIM provisioning, creating a group in your IdP does not automatically create a team on GitHub.




> [!NOTE]
> To use SAML single sign-on, your organization must use GitHub Enterprise Cloud. For more information about how you can try GitHub Enterprise Cloud for free, see [Setting up a trial of GitHub Enterprise Cloud](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).





You can use team synchronization with supported IdPs.
* Entra ID commercial tenants (Gov Cloud is not supported)
* Okta



Team synchronization is not a user provisioning service and does not invite non-members to join organizations in most cases. This means a user will only be successfully added to a team if they are already an organization member. However, you can optionally allow team synchronization to re-invite users who were previously organization members and have since been removed.



After you enable team synchronization, team maintainers and organization owners can connect a team to an IdP group on GitHub or through the API. For more information, see [Synchronizing A Team With An Identity Provider Group](https://docs.github.com/en/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group) and [Teams](https://docs.github.com/en/rest/teams#team-sync).


You can also enable team synchronization for all organizations owned by an enterprise account. If SAML is configured at the enterprise level, you cannot enable team synchronization on an individual organization. Instead, you must configure team synchronization for the entire enterprise. For more information, see [Managing Team Synchronization For Organizations In Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/managing-team-synchronization-for-organizations-in-your-enterprise).


If your organization is owned by an enterprise account, enabling team synchronization for the enterprise account will override your organization-level team synchronization settings. For more information, see [Managing Team Synchronization For Organizations In Your Enterprise](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/managing-team-synchronization-for-organizations-in-your-enterprise).



### Usage limits

There are usage limits for the team synchronization feature. Exceeding these limits will lead to a degradation in performance and may cause synchronization failures.

* Maximum number of members in a GitHub team: 5,000
* Maximum number of members in a GitHub organization: 10,000
* Maximum number of teams in a GitHub organization: 1,500

These limits only apply to the use of the team synchronization feature. Your organization may have more members or teams than the limits above, but your use of the team synchronization feature will be impaired. These limits do not apply to SCIM-based linking of teams to SCIM groups.

## Enabling team synchronization

The steps to enable team synchronization depend on the IdP you want to use. There are prerequisites to enable team synchronization that apply to every IdP. Each individual IdP has additional prerequisites.

### Prerequisites

To enable team synchronization with any IdP, you must obtain administrative access to your IdP or work with your IdP administrator to configure the IdP integration and groups. The person who configures your IdP integration and groups must have one of the required permissions.

  | IdP | Required permissions |
  | --- | -------------------- |
  | Entra ID | <ul><li>Global administrator</li><li>Privileged Role administrator</li></ul>
  | Okta | <ul><li>Service user with read-only administrator permissions</li></ul>


You must enable SAML single sign-on for your organization and your supported IdP. For more information, see [Enforcing Saml Single Sign On For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization).

You must have a linked SAML identity. To create a linked identity, you must authenticate to your organization using SAML SSO and the supported IdP at least once. For more information, see [Authenticating With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on).

> [!NOTE]
> For team synchronization to work, your SAML settings must contain a valid IdP URL for the "Issuer" field. For more information, see [Enabling and testing SAML single sign-on for your organization](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization).

### Enabling team synchronization for Entra ID

To enable team synchronization for Entra ID, your Entra ID installation needs the following permissions.
* [Read all group memberships](https://learn.microsoft.com/en-us/graph/permissions-reference#groupmemberreadall) : GitHub gets a list of Entra groups so users can select one to synchronize to a specific GitHub team.
* [Read all users’ full profiles](https://learn.microsoft.com/en-us/graph/permissions-reference#userreadall) : GitHub gets a list of members' Entra ID and Entra display/full names for syncing an Entra group and a GitHub team.
* [Sign in and read user profile](https://learn.microsoft.com/en-us/graph/permissions-reference#userread) : When SAML SSO is enabled, users must single sign-on to the Entra application as a prerequisite for team syncing.


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Authentication security**.

1. Confirm that SAML SSO is enabled for your enterprise.

1. Under "Team synchronization", click **Enable for Entra ID**.

1. Confirm team synchronization.
    * If you have IdP access, click **Enable team synchronization**. You'll be redirected to your identity provider's SAML SSO page and asked to select your account and review the requested permissions.
    * If you don't have IdP access, copy the IdP redirect link and share it with your IdP administrator to continue enabling team synchronization.

1. Review the identity provider tenant information you want to connect to your organization, then click **Approve**. This will register the **GitHub team synchronization** app as an active enterprise application within your Entra ID tenant.


### Enabling team synchronization for Okta

Okta team synchronization requires that SAML and SCIM with Okta have already been set up for your organization.

To avoid potential team synchronization errors with Okta, we recommend that you confirm that SCIM linked identities are correctly set up for all organization members who are members of your chosen Okta groups, before enabling team synchronization on GitHub.

If an organization member does not have a linked SCIM identity, then team synchronization will not work as expected and the user may not be added or removed from teams as expected. If any of these users are missing a SCIM linked identity, you will need to re-provision them.

For help on provisioning users that have missing a missing SCIM linked identity, see [Troubleshooting Identity And Access Management For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization).

Before you enable team synchronization for Okta, you or your IdP administrator must:

* Configure the SAML, SSO, and SCIM integration for your organization using Okta. For more information, see [Configuring Saml Single Sign On And Scim Using Okta](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta).
* Provide the tenant URL for your Okta instance.
* Generate a valid SSWS token with read-only admin permissions for your Okta installation as a service user. For more information, see [Create the token](https://developer.okta.com/docs/guides/create-an-api-token/create-the-token/) and [Service users](https://support.okta.com/help/s/article/What-Is-A-Service-Account?language=en_US) in Okta's documentation.


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Authentication security**.

1. Confirm that SAML SSO is enabled for your enterprise.

1. We recommend you confirm that your users have SAML enabled and have a linked SCIM identity to avoid potential provisioning errors. For more information, see [Troubleshooting Identity And Access Management For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization).

1. Consider enforcing SAML in your organization to ensure that organization members link their SAML and SCIM identities. For more information, see [Enforcing Saml Single Sign On For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization).
1. Under "Team synchronization", click **Enable for Okta**.

1. Under your organization's name, in the "SSWS Token" field, type a valid SSWS token.
1. In the "URL" field, type the URL for your Okta instance.
1. Review the identity provider tenant information you want to connect to your organization, then click **Create**.



## Managing whether team sync can re-invite non-members to your organization

Changes to this setting do **not** impact pending invitations. Any invitation generated while team sync was allowed to re-invite past members to the organization can result in the member being re-added to the organization, even if re-invitation has since been disallowed.


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Authentication security**.

1. Under "Team synchronization", select or deselect **Do not allow Team Sync to re-invite past members to this organization that were removed by an organization owner.**


## Disabling team synchronization

> [!WARNING]
> When you disable team synchronization, any team members that were assigned to a GitHub team through the IdP group are not removed from the team and retain their access to repositories.


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Authentication security**.

1. Under "Team synchronization", click **Disable team synchronization**.

## Offboarding users with team synchronization

If you plan to use team synchronization to offboard users from your enterprise completely, you should disable the policy for unaffiliated users. See [Control Offboarding](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/control-offboarding).
