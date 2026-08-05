# Disabling SAML single sign-on for your enterprise

## About disabled SAML SSO for your enterprise

After you disable SAML SSO for your enterprise, the following effects apply:

* All external identities for your enterprise will be removed. For more information, see [Viewing And Managing A Users Saml Access To Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise).
* Any SAML settings configured for individual organizations within the enterprise will take effect. For more information, see [Enabling And Testing Saml Single Sign On For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization).

Disabling SAML SSO does not delete members' credentials. Their personal access tokens, SSH keys, and existing authorizations for OAuth apps and GitHub Apps remain valid, and their SSO authorizations are not revoked. If you enable SAML SSO again, members link their identity again the next time they sign in, but do not need to authorize their existing tokens and SSH keys again.


## Disabling SAML


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.



   > [!NOTE]
   > If you're unable to access the enterprise because your IdP is unavailable, you can use a recovery code to bypass SSO. For more information, see [Accessing Your Enterprise Account If Your Identity Provider Is Unavailable](https://docs.github.com/en/admin/managing-iam/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable).

1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Authentication security**.


1. Under "SAML single sign-on", deselect **Require SAML authentication**.
1. Click **Save**.

## Further reading

* [Disabling Authentication And Provisioning For Enterprise Managed Users](https://docs.github.com/en/admin/managing-iam/configuring-authentication-for-enterprise-managed-users/disabling-authentication-and-provisioning-for-enterprise-managed-users)
