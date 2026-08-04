# Switching your SAML configuration from an organization to an enterprise account

## About SAML single sign-on for enterprise accounts

Single sign-on (SSO) gives organization owners and enterprise owners a way to control and secure access to organization resources like repositories, issues, and pull requests.
 Enterprise owners can enable SAML SSO and centralized authentication through a SAML IdP across all organizations owned by an enterprise account. After you enable SAML SSO for your enterprise account, SAML SSO is enforced as a requirement for all enterprise members and all organizations owned by your enterprise account. All members will be required to authenticate using SAML SSO to gain access to the organizations where they are a member, and enterprise owners will be required to authenticate using SAML SSO when accessing an enterprise account.


There are special considerations when enabling SAML SSO for your enterprise account if any of the organizations owned by the enterprise account are already configured to use SAML SSO.


When you configure SAML SSO at the organization level, each organization must be configured with a unique SSO tenant in your IdP, which means that your members will be associated with a unique SAML identity record for each organization they have successfully authenticated with. If you configure SAML SSO for your enterprise account instead, each enterprise member will have one SAML identity that is used for all organizations owned by the enterprise account.

After you configure SAML SSO for your enterprise account, the new configuration will override any existing SAML SSO configurations for organizations owned by the enterprise account. Any team synchronization settings you have configured will also be removed from these organizations.

* Your organization members will be removed from GitHub teams following the removal of the organization's team synchronization settings.
* If you intend to re-enable team synchronization, before enabling SAML SSO for your enterprise, take note of the current team sync configuration in the affected organizations. See [Managing Team Synchronization For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization).

  You will need to re-add your organization members to GitHub teams after re-enabling team synchronization.
* Schedule a time to make changes to your organization's team synchronization settings when people aren't actively using your organization's resources. Changes to team synchronization may result in some downtime for your members.

Enterprise members will not be notified when an enterprise owner enables SAML for the enterprise account. If SAML SSO was previously enforced at the organization level, members should not see a major difference when navigating directly to organization resources. The members will continue to be prompted to authenticate via SAML. If members navigate to organization resources via their IdP dashboard, they will need to click the new tile for the enterprise-level app, instead of the old tile for the organization-level app. The members will then be able to choose the organization to navigate to.

Any personal access tokens, SSH keys, OAuth apps, and GitHub Apps that were previously authorized for the organization will continue to be authorized for the organization. However, members will need to authorize any PATs, SSH keys, OAuth apps, and GitHub Apps that were never authorized for use with SAML SSO for the organization.

SCIM provisioning is not currently supported when SAML SSO is configured for an enterprise account. If you are currently using SCIM for an organization owned by your enterprise account, you will lose this functionality when switching to an enterprise-level configuration.

You are not required to remove any organization-level SAML configurations before configuring SAML SSO for your enterprise account, but you may want to consider doing so. If SAML is ever disabled for the enterprise account in the future, any remaining organization-level SAML configurations will take effect. Removing the organization-level configurations can prevent unexpected issues in the future.

For more information about the decision to implement SAML SSO at the organization or enterprise level, see [Identity And Access Management Fundamentals](https://docs.github.com/en/admin/concepts/identity-and-access-management/identity-and-access-management-fundamentals#considerations-for-enabling-saml-for-an-enterprise-or-organization).

## Switching your SAML configuration from an organization to an enterprise account

1. Enforce SAML SSO for your enterprise account, making sure all organization members are assigned or given access to the IdP app being used for the enterprise account. For more information, see [Configuring Saml Single Sign On For Your Enterprise](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise).
1. If you kept any organization-level SAML configurations in place, to prevent confusion, consider hiding the tile for the organization-level apps in your IdP.
1. Advise your enterprise members about the change.
   * Members will no longer be able to access their organizations by clicking the SAML app for the organization in the IdP dashboard. They will need to use the new app configured for the enterprise account.
   * Members will need to authorize any PATs or SSH keys that were not previously authorized for use with SAML SSO for their organization. For more information, see [Authorizing A Personal Access Token For Use With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/authorizing-a-personal-access-token-for-use-with-single-sign-on) and [Authorizing An SSH Key For Use With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/authorizing-an-ssh-key-for-use-with-single-sign-on).
   * Members may need to reauthorize OAuth apps that were previously authorized for the organization. For more information, see [About Authentication With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/about-authentication-with-single-sign-on#about-oauth-apps-github-apps-and-saml-sso).
