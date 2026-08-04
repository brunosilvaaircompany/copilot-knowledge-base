# Enabling and testing SAML single sign-on for your organization

## About SAML single sign-on

You can enable SAML SSO in your organization without requiring all members to use it. Enabling but not enforcing SAML SSO in your organization can help smooth your organization's SAML SSO adoption. Once a majority of your organization's members use SAML SSO, you can enforce it within your organization.



> [!NOTE]
> To use SAML single sign-on, your organization must use GitHub Enterprise Cloud. For more information about how you can try GitHub Enterprise Cloud for free, see [Setting up a trial of GitHub Enterprise Cloud](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).





If you enable but don't enforce SAML SSO, organization members who choose not to use SAML SSO can still be members of the organization. For more information on enforcing SAML SSO, see [Enforcing Saml Single Sign On For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization).

> [!NOTE]
> SSO authentication is not required for outside collaborators. For more information about outside collaborators, see [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators).


When SAML SSO is disabled, all linked external identities are removed from GitHub.


After you enable SAML SSO, OAuth app and GitHub App authorizations may need to be revoked and reauthorized before they can access the organization. For more information, see [Authorizing OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/using-oauth-apps/authorizing-oauth-apps#oauth-apps-and-organizations).


## Enabling and testing SAML single sign-on for your organization

Before your enforce SAML SSO in your organization, ensure that you've prepared the organization. For more information, see [Preparing To Enforce Saml Single Sign On In Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/preparing-to-enforce-saml-single-sign-on-in-your-organization).

For more information about the identity providers (IdPs) that GitHub supports for SAML SSO, see [Connecting Your Identity Provider To Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization).

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Authentication security**.


1. Under "SAML single sign-on," select **Enable SAML authentication**.

   > [!NOTE]
   > After enabling SAML SSO, you can download your single sign-on recovery codes so that you can access your organization even if your IdP is unavailable. For more information, see [Downloading Your Organizations Saml Single Sign On Recovery Codes](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/downloading-your-organizations-saml-single-sign-on-recovery-codes).

1. In the "Sign on URL" field, type the HTTPS endpoint of your IdP for single sign-on requests. This value is available in your IdP configuration.
1. Optionally, in the "Issuer" field, type your SAML issuer's name. This verifies the authenticity of sent messages.

   > [!NOTE]
   > If you want to enable team synchronization for your organization, the "Issuer" field is a required. For more information, see [Managing Team Synchronization For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization).

1. Under "Public Certificate", paste a certificate to verify SAML responses.

   > [!NOTE]
   > GitHub does not enforce the expiration of this SAML IdP certificate. This means that even if this certificate expires, your SAML authentication will continue to work. However, if your IdP administrator regenerates the SAML certificate, and you don't update it on the GitHub side, users will encounter a `digest mismatch` error during SAML authentication attempts due to the certificate mismatch. See [Error: Digest mismatch](/admin/managing-iam/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#error-digest-mismatch).

1. Under your public certificate, to the right of the current signature and digest methods, click {% octicon "pencil" aria-label="Modify Signature and Digest Methods" %}.

   ![Screenshot of the current signature method and digest method in the SAML settings. The pencil icon is highlighted with an orange outline.](/assets/images/help/saml/edit-signature-digest-method.png)
1. Select the **Signature Method** and **Digest Method** dropdown menus, then click the hashing algorithm used by your SAML issuer.


1. Before enabling SAML SSO for your organization, to ensure that the information you've entered is correct, click **Test SAML configuration**. This test uses Service Provider initiated (SP-initiated) authentication and must be successful before you can save the SAML settings.


   > [!TIP]
   > When setting up SAML SSO in your organization, you can test your implementation without affecting your organization members by leaving **Require SAML SSO authentication for all members of the _organization name_ organization** unchecked.


1. To enforce SAML SSO and remove all organization members who haven't authenticated via your IdP, select **Require SAML SSO authentication for all members of the _organization name_ organization**. For more information on enforcing SAML SSO, see [Enforcing Saml Single Sign On For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization).
1. Click **Save**.

## Further reading

* [About Identity And Access Management With Saml Single Sign On](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)
* [Saml Configuration Reference](https://docs.github.com/en/admin/managing-iam/iam-configuration-reference/saml-configuration-reference)
