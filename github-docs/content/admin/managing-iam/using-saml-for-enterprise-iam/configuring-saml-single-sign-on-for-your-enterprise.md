# Configuring SAML single sign-on for your enterprise

**Before** following the steps in this article, make sure that your enterprise uses **personal accounts**. You can do so by checking whether your enterprise view has the "Users managed by ACCOUNT NAME" header bar at the top of the screen.

If you see this, your enterprise uses **managed users** and you must follow a different process to configure SAML single sign-on. See [Configuring Saml Single Sign On For Enterprise Managed Users](https://docs.github.com/en/admin/managing-iam/configuring-authentication-for-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users).



## About SAML SSO



Single sign-on (SSO) gives organization owners and enterprise owners a way to control and secure access to organization resources like repositories, issues, and pull requests.


If you configure SAML SSO, members of your organization will continue to sign into their personal accounts on GitHub.com. When a member accesses most resources within your organization, GitHub redirects the member to your IdP to authenticate. After successful authentication, your IdP redirects the member back to GitHub. For more information, see [About Authentication With Single Sign On](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-single-sign-on/about-authentication-with-single-sign-on).

> [!NOTE]
> SAML SSO does not replace the normal sign-in process for GitHub. Unless you use Enterprise Managed Users, members will continue to sign into their personal accounts on GitHub.com, and each personal account will be linked to an external identity in your IdP.


For more information, see [About Identity And Access Management With Saml Single Sign On](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on).

Enterprise owners can enable SAML SSO and centralized authentication through a SAML IdP across all organizations owned by an enterprise account. After you enable SAML SSO for your enterprise account, SAML SSO is enforced as a requirement for all enterprise members and all organizations owned by your enterprise account. All members will be required to authenticate using SAML SSO to gain access to the organizations where they are a member, and enterprise owners will be required to authenticate using SAML SSO when accessing an enterprise account.


To access each organization's resources on GitHub, the member must have an active SAML session in their browser. To access each organization's protected resources using the API and Git, the member must use a personal access token or SSH key that the member has authorized for use with the organization. Enterprise owners can view and revoke a member's linked identity, active sessions, or authorized credentials at any time.


>[!NOTE]
> This view is only enabled when SAML with SCIM is enabled.

 For more information, see [Viewing And Managing A Users Saml Access To Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise).



> [!NOTE]
> You cannot configure SCIM for your enterprise account unless your account was created for Enterprise Managed Users. For more information, see [Enterprise Managed Users](https://docs.github.com/en/admin/concepts/identity-and-access-management/enterprise-managed-users).
>
> If you do not use Enterprise Managed Users, and you want to use SCIM provisioning, you must configure SAML SSO at the organization level, not the enterprise level. For more information, see [About Identity And Access Management With Saml Single Sign On](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on).




When SAML SSO is disabled, all linked external identities are removed from GitHub.


After you enable SAML SSO, OAuth app and GitHub App authorizations may need to be revoked and reauthorized before they can access the organization. For more information, see [Authorizing OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/using-oauth-apps/authorizing-oauth-apps#oauth-apps-and-organizations).


{% elsif ghes %}

SAML SSO allows you to centrally control and secure access to {% ifversion ghes %}your GitHub Enterprise Server instance from your SAML IdP.

If an unauthenticated user attempts to sign in to your GitHub Enterprise Server instance and you have disabled [built-in authentication](/admin/managing-iam/understanding-iam-for-enterprises/allowing-built-in-authentication-for-users-outside-your-provider), GitHub redirects the user to your SAML IdP for authentication. After the user successfully authenticates with an account on the IdP, the IdP redirects the user back to your GitHub Enterprise Server instance. GitHub validates the response from your IdP, then grants access to the user. The user's SAML session is active in the browser for 24 hours. After that, the user must authenticate again with your IdP.



With JIT provisioning, if you remove a user from your IdP, you must also manually suspend the user's account on your GitHub Enterprise Server instance. Otherwise, the account's owner can continue to authenticate using access tokens or SSH keys. For more information, see [Suspending And Unsuspending Users](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/suspending-and-unsuspending-users).




{% endif %}

## Supported identity providers

GitHub supports SAML SSO with IdPs that implement the SAML 2.0 standard. For more information, see the [SAML Wiki](https://wiki.oasis-open.org/security) on the OASIS website.

GitHub officially supports and internally tests the following IdPs for SAML. For more information about the IdPs that are supported for SCIM on GitHub Enterprise Server, see [User Provisioning With Scim On Ghes](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/user-provisioning-with-scim-on-ghes#supported-identity-providers).

* Microsoft Active Directory Federation Services (AD FS)
* Microsoft Entra ID (previously known as Azure AD)
* Okta
* OneLogin
* PingOne
* Shibboleth




For more information about connecting Microsoft Entra ID (previously known as Azure AD) to your enterprise, see [Tutorial: Microsoft Entra SSO integration with GitHub Enterprise Cloud - Enterprise Account](https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-enterprise-cloud-enterprise-account-tutorial) in Microsoft Docs.

> [!NOTE] GitHub does not test or validate identity provider (IdP) gallery applications for use in Government Cloud environments, including Microsoft Entra ID Government Cloud and Okta Government Cloud. Authentication and SCIM provisioning issues that involve gallery applications in these environments fall outside GitHub's [scope of support](/support/learning-about-github-support/about-github-support#scope-of-support).


{% elsif ghes %}

For more information about connecting Entra ID to your enterprise, see [Tutorial: Microsoft Entra SSO integration with GitHub Enterprise Server](https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-ae-tutorial) in Microsoft Docs.

> [!NOTE] GitHub does not test or validate identity provider (IdP) gallery applications for use in Government Cloud environments, including Microsoft Entra ID Government Cloud and Okta Government Cloud. Authentication and SCIM provisioning issues that involve gallery applications in these environments fall outside GitHub's [scope of support](/support/learning-about-github-support/about-github-support#scope-of-support).


## Username considerations with SAML

GitHub normalizes a value from your IdP{% elsif ghes %}external authentication provider to determine the username for each new personal account in your enterprise on GitHub{% elsif ghes %}on {% ifversion ghes %}your GitHub Enterprise Server instance.
 For more information, see [Username Considerations For External Authentication](https://docs.github.com/en/admin/managing-iam/iam-configuration-reference/username-considerations-for-external-authentication).

{% endif %}



## Enforcing SAML single-sign on for organizations in your enterprise account

When you enforce SAML SSO for your enterprise, the enterprise configuration will override any existing organization-level SAML configurations. There are special considerations when enabling SAML SSO for your enterprise account if any of the organizations owned by the enterprise account are already configured to use SAML SSO.
 For more information, see [Switching Your Saml Configuration From An Organization To An Enterprise Account](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account).

When you enforce SAML SSO for an organization, GitHub removes any members of the organization that have not authenticated successfully with your SAML IdP. When you require SAML SSO for your enterprise, GitHub does not remove members of the enterprise that have not authenticated successfully with your SAML IdP. The next time a member accesses the enterprise's resources, the member must authenticate with your SAML IdP.

For more detailed information about how to enable SAML using Okta, see [Configuring Saml Single Sign On For Your Enterprise Using Okta](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise-using-okta).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Authentication security**.


1. Optionally, to view the current configuration for all organizations in the enterprise account before you change the setting, click **{% octicon "eye" aria-hidden="true" aria-label="eye" %} View your organizations' current configurations**.

   ![Screenshot of a policy in the enterprise settings. A link, labeled "View your organizations' current configurations", is outlined.](/assets/images/help/business-accounts/view-current-policy-implementation-link.png)

1. Under "SAML single sign-on", select **Require SAML authentication**.
1. In the **Sign on URL** field, type the HTTPS endpoint of your IdP for single sign-on requests. This value is available in your IdP configuration.
1. Optionally, in the **Issuer** field, type your SAML issuer URL to verify the authenticity of sent messages.
1. Under **Public Certificate**, paste a certificate to verify SAML responses. This is the public key corresponding to the private key used to sign SAML responses.

   > [!NOTE]
   > GitHub does not enforce the expiration of this SAML IdP certificate. This means that even if this certificate expires, your SAML authentication will continue to work. However, if your IdP administrator regenerates the SAML certificate, and you don't update it on the GitHub side, users will encounter a `digest mismatch` error during SAML authentication attempts due to the certificate mismatch. See [Error: Digest mismatch](/admin/managing-iam/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#error-digest-mismatch).

   To find the certificate, refer to the documentation for your IdP. Some IdPs call this an X.509 certificate.

1. Under your public certificate, to the right of the current signature and digest methods, click {% octicon "pencil" aria-label="Modify Signature and Digest Methods" %}.

   ![Screenshot of the current signature method and digest method in the SAML settings. The pencil icon is highlighted with an orange outline.](/assets/images/help/saml/edit-signature-digest-method.png)
1. Select the **Signature Method** and **Digest Method** dropdown menus, then click the hashing algorithm used by your SAML issuer.


1. Before enabling SAML SSO for your enterprise, to ensure that the information you've entered is correct, click **Test SAML configuration** . This test uses Service Provider initiated (SP-initiated) authentication and must be successful before you can save the SAML settings.

1. Click **Save**.
1. To ensure you can still access your enterprise on GitHub if your IdP is unavailable in the future, click **Download**, **Print**, or **Copy** to save your recovery codes. For more information, see [Downloading Your Enterprise Accounts Single Sign On Recovery Codes](https://docs.github.com/en/admin/managing-iam/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes).


{% elsif ghes %}

## Configuring SAML SSO

You can enable or disable SAML authentication for {% ifversion ghes %}your GitHub Enterprise Server instance, or you can edit an existing configuration. You can view and edit authentication settings in the Management Console. For more information, see [Administering Your Instance From The Web UI](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-web-ui).

> [!NOTE]
> GitHub strongly recommends that you verify any new configuration for authentication in a staging environment. An incorrect configuration could result in downtime for your GitHub Enterprise Server instance. For more information, see [Setting Up A Staging Instance](https://docs.github.com/en/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance).


1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings" sidebar, click **Authentication**.


1. Under "Authentication", select **SAML**.
1. Optionally, to allow people without an account on your external authentication system to sign in with built-in authentication, select **Allow built-in authentication**. For more information, see [Allowing Built In Authentication For Users Outside Your Provider](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/allowing-built-in-authentication-for-users-outside-your-provider).

1. Optionally, to enable unsolicited response SSO, select **IdP initiated SSO**. By default, GitHub Enterprise Server will reply to an unsolicited Identity Provider (IdP) initiated request with an `AuthnRequest` back to the IdP.

   > [!TIP]
   > We recommend keeping this value **unselected**. You should enable this feature **only** in the rare instance that your SAML implementation does not support service provider initiated SSO, and when advised by GitHub Enterprise Support.

1. Optionally, if you do not want your SAML provider to determine administrator rights for users on your GitHub Enterprise Server instance, select **Disable administrator demotion/promotion**
1. Optionally, to allow your GitHub Enterprise Server instance to receive encrypted assertions from your SAML IdP, select **Require encrypted assertions**.

   You must ensure that your IdP supports encrypted assertions and that the encryption and key transport methods in the management console match the values configured on your IdP. You must also provide your GitHub Enterprise Server instance's public certificate to your IdP. For more information, see [Enabling Encrypted Assertions](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/enabling-encrypted-assertions).

1. In the **Single sign-on URL** field, type the HTTP or HTTPS endpoint on your IdP for single sign-on requests. This value is provided by your IdP configuration. If the host is only available from your internal network, you may need to [configure your GitHub Enterprise Server instance to use internal nameservers](/admin/configuring-settings/configuring-network-settings/configuring-dns-nameservers).
1. Optionally, in the **Issuer** field, type your SAML issuer's name. This verifies the authenticity of messages sent to your GitHub Enterprise Server instance.
1. Select the **Signature Method** and **Digest Method** dropdown menus, then click the hashing algorithm used by your SAML issuer to verify the integrity of the requests from your GitHub Enterprise Server instance.
1. Select the **Name Identifier Format** dropdown menu, then click a format.
1. Under "Verification certificate", click **Choose File**, then choose a certificate to validate SAML responses from the IdP.

   > [!NOTE]
   > GitHub does not enforce the expiration of this SAML IdP certificate. This means that even if this certificate expires, your SAML authentication will continue to work. However, if your IdP administrator regenerates the SAML certificate, and you don't update it on the GitHub side, users will encounter a `digest mismatch` error during SAML authentication attempts due to the certificate mismatch. See [Error: Digest mismatch](/admin/managing-iam/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#error-digest-mismatch).

1. Under "User attributes", modify the SAML attribute names to match your IdP if needed, or accept the default names.

{% endif %}

## Further reading



* [Managing Saml Single Sign On For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization)


* [Promoting Or Demoting A Site Administrator](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator)
{% ifversion scim-for-ghes-public-beta %}* [Configuring Scim Provisioning For Users](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users)
{%- endif %}
