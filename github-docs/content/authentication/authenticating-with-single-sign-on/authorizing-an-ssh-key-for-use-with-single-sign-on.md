# Authorizing an SSH key for use with single sign-on

## About authorization of SSH keys

You can authorize an existing SSH key, or create a new SSH key and then authorize it. For more information about creating a new SSH key, see [Generating A New SSH Key And Adding It To The SSH Agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

> [!NOTE]
> If you have a linked identity for an organization, you can only use authorized personal access tokens and SSH keys with that organization, even if SSO is not enforced. You have a linked identity for an organization if you've ever authenticated via SSO for that organization, unless an organization or enterprise owner later revoked the linked identity. For more information about revoking linked identities, see [Viewing And Managing A Members Saml Access To Your Organization](https://docs.github.com/en/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization) and [Viewing And Managing A Users Saml Access To Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise).


Before you can authorize a personal access token or SSH key, you must have a linked external identity. If you're a member of an organization where SSO is enabled, you can create a linked external identity by authenticating to your organization with your identity provider (IdP) at least once. For more information, see [About Authentication With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/about-authentication-with-single-sign-on).

After you authorize a personal access token or SSH key, the token or key will stay authorized until revoked in one of the following ways.

* An organization or enterprise owner revokes the authorization. Organization and enterprise owners can also revoke authorizations for individual users, for all users, or for a specific credential type. See [Revoke Authorizations Or Tokens](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/respond-to-incidents/revoke-authorizations-or-tokens).
* You are removed from the organization.
* The scopes in a personal access token are edited, or the token is regenerated.
* The personal access token expired as defined during creation.


> [!NOTE]
> If your SSH key authorization is revoked by an organization, you will not be able to reauthorize the same key. You will need to create a new SSH key and authorize it. For more information about creating a new SSH key, see [Generating A New SSH Key And Adding It To The SSH Agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

You do not need to authorize SSH certificates signed by your organization's SSH certificate authority (CA).

## Authorizing an SSH key

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "key" aria-hidden="true" aria-label="key" %} SSH and GPG keys**.


1. To the right of the SSH key you'd like to authorize, click **Configure SSO**. If you don't see **Configure SSO**, ensure that you have authenticated at least once through your identity provider to access resources on GitHub. For more information, see [About Authentication With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/about-authentication-with-single-sign-on).


   ![Screenshot of the "Authentication Keys" section. Next to a key, a dropdown menu, labeled "Configure SSO," is outlined in orange.](/assets/images/help/settings/ssh-sso-button.png)
1. In the dropdown menu, to the right of the organization you'd like to authorize the SSH key for, click **Authorize**.

> [!NOTE]
> When authorizing an SSH key for use within an organization that belongs to an enterprise which has both an IP allow list and single sign-on enabled at the enterprise level, your IP must also be allowed at the enterprise level. See [Restricting Network Traffic To Your Enterprise With An Ip Allow List](https://docs.github.com/en/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list).

## Further reading

* [Checking For Existing SSH Keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)
* [About Authentication With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/about-authentication-with-single-sign-on)
