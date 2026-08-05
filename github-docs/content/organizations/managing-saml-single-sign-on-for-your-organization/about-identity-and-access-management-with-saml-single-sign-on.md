# About identity and access management with SAML single sign-on

> [!NOTE]
> To use SAML single sign-on, your organization must use GitHub Enterprise Cloud. For more information about how you can try GitHub Enterprise Cloud for free, see [Setting up a trial of GitHub Enterprise Cloud](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).





## About SAML SSO

Single sign-on (SSO) gives organization owners and enterprise owners a way to control and secure access to organization resources like repositories, issues, and pull requests.


If you configure SAML SSO, members of your organization will continue to sign into their personal accounts on GitHub.com. When a member accesses most resources within your organization, GitHub redirects the member to your IdP to authenticate. After successful authentication, your IdP redirects the member back to GitHub. For more information, see [About Authentication With Single Sign On](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-single-sign-on/about-authentication-with-single-sign-on).

> [!NOTE]
> SAML SSO does not replace the normal sign-in process for GitHub. Unless you use Enterprise Managed Users, members will continue to sign into their personal accounts on GitHub.com, and each personal account will be linked to an external identity in your IdP.


IdP authentication is not required for accessing public repositories in certain ways:

* Viewing the repository's overview page and file contents on GitHub
* Forking the repository
* Performing read operations via Git, such as cloning the repository

Authentication is required for other access to public repositories, such as viewing issues, pull requests, projects, and releases.


> [!NOTE]
> SSO authentication is not required for outside collaborators. For more information about outside collaborators, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators).


Organization owners can enforce SAML SSO for an individual organization, or enterprise owners can enforce SAML SSO for all organizations in an enterprise account. For more information, see [Identity And Access Management Fundamentals](https://docs.github.com/en/admin/concepts/identity-and-access-management/identity-and-access-management-fundamentals#considerations-for-enabling-saml-for-an-enterprise-or-organization) and [Configuring Saml Single Sign On For Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise).

Before enabling SAML SSO for your organization, you'll need to connect your IdP to your organization. For more information, see [Connecting Your Identity Provider To Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization).

For an organization, SAML SSO can be disabled, enabled but not enforced, or enabled and enforced. After you enable SAML SSO for your organization and your organization's members successfully authenticate with your IdP, you can enforce the SAML SSO configuration. For more information about enforcing SAML SSO for your GitHub organization, see [Enforcing Saml Single Sign On For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization).

Members must periodically authenticate with your IdP to authenticate and gain access to your organization's resources. The duration of this login period is specified by your IdP and is generally 24 hours. This periodic login requirement limits the length of access and requires users to re-identify themselves to continue.

To access the organization's protected resources using the API and Git on the command line, members must authorize and authenticate with a personal access token or SSH key. For more information, see [Authorizing A Personal Access Token For Use With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/authorizing-a-personal-access-token-for-use-with-single-sign-on) and [Authorizing An SSH Key For Use With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/authorizing-an-ssh-key-for-use-with-single-sign-on).

The first time a member uses SAML SSO to access your organization, GitHub automatically creates a record that links your organization, the member's account on GitHub, and the member's account on your IdP. You can view and revoke the linked SAML identity, active sessions, and authorized credentials for members of your organization or enterprise account. For more information, see [Viewing And Managing A Members Saml Access To Your Organization](https://docs.github.com/en/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization) and [Viewing And Managing A Users Saml Access To Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise).

If members are signed in with a SAML SSO session when they create a new repository, the default visibility of that repository is private. Otherwise, the default visibility is public. For more information on repository visibility, see [About Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).

Organization members must also have an active SAML session to authorize an OAuth app. You can opt out of this requirement by contacting us through the [GitHub Support portal](https://support.github.com){% elsif ghes %}your site administrator. GitHub does not recommend opting out of this requirement, which will expose your organization to a higher risk of account takeovers and potential data loss.

GitHub does not support SAML Single Logout. To terminate an active SAML session, users should log out directly on your SAML IdP.


## Supported SAML services

GitHub supports SAML SSO with IdPs that implement the SAML 2.0 standard. For more information, see the [SAML Wiki](https://wiki.oasis-open.org/security) on the OASIS website.

GitHub officially supports and internally tests the following IdPs for SAML. For more information about the IdPs that are supported for SCIM on GitHub Enterprise Server, see [User Provisioning With Scim On Ghes](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/user-provisioning-with-scim-on-ghes#supported-identity-providers).

* Microsoft Active Directory Federation Services (AD FS)
* Microsoft Entra ID (previously known as Azure AD)
* Okta
* OneLogin
* PingOne
* Shibboleth


Some IdPs support provisioning access to a GitHub organization via SCIM. For more information, see [About Scim For Organizations](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).

You cannot use this implementation of SCIM with an enterprise account or with an organization with managed users. If your enterprise is enabled for Enterprise Managed Users, you must use a different implementation of SCIM. Otherwise, SCIM is not available at the enterprise level. For more information, see [Configuring Scim Provisioning For Users](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users).


## Adding members to an organization using SAML SSO

After you enable SAML SSO, there are multiple ways you can add new members to your organization. Organization owners can invite new members manually on GitHub or using the API. For more information, see [Inviting Users To Join Your Organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization) and [Orgs](https://docs.github.com/en/rest/orgs#add-or-update-organization-membership).

To provision new users without an invitation from an organization owner, you can use the URL `https://github.com/orgs/ORGANIZATION/sso/sign_up`, replacing ORGANIZATION with the name of your organization. For example, you can configure your IdP so that anyone with access to the IdP can click a link on the IdP's dashboard to join your GitHub organization.

> [!NOTE]
> Provisioning new users via `https://github.com/orgs/ORGANIZATION/sso/sign_up` is only supported when SAML SSO is configured at the organization level, not when SAML SSO is configured at the enterprise account level. For more information about SAML SSO for enterprise accounts, see [About Saml For Enterprise Iam](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/about-saml-for-enterprise-iam).

If your IdP supports SCIM, GitHub can automatically invite members to join your organization when you grant access on your IdP. If you remove a member's access to your GitHub organization on your SAML IdP, the member will be automatically removed from the GitHub organization. For more information, see [About Scim For Organizations](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).


Organizations that use GitHub Enterprise Cloud can use team synchronization to automatically add and remove organization members to teams through an identity provider. For more information, see [Synchronizing a team with an identity provider group](/enterprise-cloud@latest/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group) in the GitHub Enterprise Cloud documentation.



If an organization exceeds 100,000 members, some UI experiences and API functionality may be degraded.

## Further reading

* [Saml Configuration Reference](https://docs.github.com/en/admin/managing-iam/iam-configuration-reference/saml-configuration-reference)
* [About Two Factor Authentication And Saml Single Sign On](https://docs.github.com/en/organizations/granting-access-to-your-organization-with-saml-single-sign-on/about-two-factor-authentication-and-saml-single-sign-on)
* [About Authentication With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/about-authentication-with-single-sign-on)
