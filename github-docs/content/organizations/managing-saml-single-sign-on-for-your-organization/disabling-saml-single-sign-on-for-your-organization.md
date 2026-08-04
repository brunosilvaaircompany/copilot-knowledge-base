# Disabling SAML single sign-on for your organization

After you disable SAML SSO for your organization, all external identities for your organization will be removed. For more information, see [Viewing And Managing A Members Saml Access To Your Organization](https://docs.github.com/en/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization).

Disabling SAML SSO does not delete members' credentials. Their personal access tokens, SSH keys, and existing authorizations for OAuth apps and GitHub Apps remain valid, and their SSO authorizations are not revoked. If you enable SAML SSO again, members link their identity again the next time they sign in, but do not need to authorize their existing tokens and SSH keys again.


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)



    > [!NOTE]
    > If you're unable to access the organization because your identity provider (IdP) is unavailable, you can use a recovery code to bypass SSO. For more information, see [Accessing Your Organization If Your Identity Provider Is Unavailable](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/accessing-your-organization-if-your-identity-provider-is-unavailable).

1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Authentication security**.


1. Under "SAML single sign-on", deselect **Enable SAML authentication**.
1. Click **Save**.
