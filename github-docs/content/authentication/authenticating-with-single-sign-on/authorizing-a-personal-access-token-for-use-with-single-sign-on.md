# Authorizing a personal access token for use with single sign-on

You must authorize your personal access token (classic) after creation before the token can access an organization that uses SAML single sign-on (SSO). Access to `internal` resources (repositories, projects, and packages) in an enterprise requires an SSO authorization for an organization within an enterprise. For more information about creating a new personal access token (classic), see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens). Fine-grained personal access tokens are authorized during token creation, before access to the organization is granted.

> [!NOTE]
> If you have a linked identity for an organization, you can only use authorized personal access tokens and SSH keys with that organization, even if SSO is not enforced. You have a linked identity for an organization if you've ever authenticated via SSO for that organization, unless an organization or enterprise owner later revoked the linked identity. For more information about revoking linked identities, see [Viewing And Managing A Members Saml Access To Your Organization](https://docs.github.com/en/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization) and [Viewing And Managing A Users Saml Access To Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise).


Before you can authorize a personal access token or SSH key, you must have a linked external identity. If you're a member of an organization where SSO is enabled, you can create a linked external identity by authenticating to your organization with your identity provider (IdP) at least once. For more information, see [About Authentication With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/about-authentication-with-single-sign-on).

After you authorize a personal access token or SSH key, the token or key will stay authorized until revoked in one of the following ways.

* An organization or enterprise owner revokes the authorization. Enterprise owners can also revoke authorizations for individual users or in bulk. See [Revoke Authorizations Or Tokens](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/respond-to-incidents/revoke-authorizations-or-tokens).
* You are removed from the organization.
* The scopes in a personal access token are edited, or the token is regenerated.
* The personal access token expired as defined during creation.


1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the left sidebar, click **{% octicon "code" aria-hidden="true" aria-label="code" %} Developer settings**.

1. In the left sidebar, click **Personal access tokens**.


1. Next to the token you'd like to authorize, click **Configure SSO**. If you don't see **Configure SSO**, ensure that you have authenticated at least once through your identity provider to access resources on GitHub. For more information, see [About Authentication With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/about-authentication-with-single-sign-on).


   ![Screenshot of a list entry for a personal access token (classic). A dropdown menu, labeled "Configure SSO", is outlined in orange.](/assets/images/help/settings/sso-allowlist-button.png)

1. In the dropdown menu, to the right of the organization you'd like to authorize the token for, click **Authorize**.

> [!NOTE]
> When authorizing a personal access token (classic) for use within an organization that belongs to an enterprise which has both an IP allow list and single sign-on enabled at the enterprise level, your IP must also be allowed at the enterprise level. See [Restricting Network Traffic To Your Enterprise With An Ip Allow List](https://docs.github.com/en/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list).

## Further reading

* [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
* [About Authentication With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/about-authentication-with-single-sign-on)
