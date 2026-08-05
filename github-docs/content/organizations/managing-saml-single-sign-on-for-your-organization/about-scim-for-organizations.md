# About SCIM for organizations

>[!IMPORTANT] This article describes the SCIM integration for managing membership of organizations, available to **enterprises that use personal accounts on GitHub.com**. If you're looking for the SCIM integration for provisioning user accounts for **Enterprise Managed Users** or **GitHub Enterprise Server**, see [Configuring Scim Provisioning For Users](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users) or [User Provisioning With Scim On Ghes](https://docs.github.com/en/enterprise-server@latest/admin/managing-iam/provisioning-user-accounts-with-scim/user-provisioning-with-scim-on-ghes).

## About SCIM for organizations

If your organization uses [SAML SSO](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on), you can implement SCIM to add, manage, and remove organization members' access to GitHub. For example, an administrator can deprovision an organization member using SCIM and automatically remove the member from the organization.



> [!NOTE]
> To use SAML single sign-on, your organization must use GitHub Enterprise Cloud. For more information about how you can try GitHub Enterprise Cloud for free, see [Setting up a trial of GitHub Enterprise Cloud](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).





You cannot use this implementation of SCIM with an enterprise account or with an organization with managed users. If your enterprise is enabled for Enterprise Managed Users, you must use a different implementation of SCIM. Otherwise, SCIM is not available at the enterprise level. For more information, see [Configuring Scim Provisioning For Users](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users).


If you use SAML SSO without implementing SCIM, you won't have automatic deprovisioning. When organization members' sessions expire after their access is removed from the IdP, they aren't automatically removed from the organization. Authorized tokens grant access to the organization even after their sessions expire. If SCIM is not used, to fully remove a member's access, an organization owner must remove the member's access in the IdP and manually remove the member from the organization on GitHub.

If SCIM provisioning is implemented for your organization, any changes to a user's organization membership should be triggered from the identity provider. If a user is invited to an organization manually instead of by an existing SCIM integration, their user account may not get properly linked to their SCIM identity. This can prevent the user account from being deprovisioned via SCIM in the future. If a user is removed manually instead of by an existing SCIM integration, a stale linked identity will remain, which can lead to issues if the user needs to re-join the organization.


## Supported identity providers

These identity providers (IdPs) are compatible with the GitHub SCIM API for organizations. For more information, see [Scim](https://docs.github.com/en/rest/scim).
* Microsoft Entra ID (previously known as Azure AD)
* Okta
* OneLogin

## About SCIM configuration for organizations

To use SCIM with your organization, you must use a third-party-owned OAuth app. The OAuth app must be authorized by, and subsequently acts on behalf of, a specific GitHub user. If the user who last authorized this OAuth app leaves or is removed from the organization, SCIM will stop working. To avoid this issue, we recommend creating a dedicated user account to configure SCIM. This user account must be an organization owner and will consume a license.


Before you authorize the OAuth app, you must have an active SAML session. For more information, see [About Authentication With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/about-authentication-with-single-sign-on#about-oauth-apps-github-apps-and-saml-sso).

> [!NOTE]
> The SAML IdP and the SCIM client must use matching `NameID` and `userName` values for each user. This allows a user authenticating through SAML to be linked to their provisioned SCIM identity.


## Further reading

* [Viewing And Managing A Members Saml Access To Your Organization](https://docs.github.com/en/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)
