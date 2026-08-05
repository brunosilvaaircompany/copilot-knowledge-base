# Configuring SAML single sign-on for Enterprise Managed Users

**Before** following the steps in this article, make sure that your enterprise uses **managed users** and that you are signed in as the setup user whose username is your enterprise's shortcode suffixed with `_admin`. You can verify you are signed in with the correct user by checking whether your enterprise view has the "Viewing as SHORTCODE_admin" header bar at the top of the screen. If you see this, you are signed in with the correct user and you can follow the steps in this article. For more information about the setup user, see [Getting Started With Enterprise Managed Users](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users).

If your enterprise uses **personal accounts**, you must follow a different process to configure SAML single sign-on. See [Configuring Saml Single Sign On For Your Enterprise](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise).

## About SAML SSO for Enterprise Managed Users

With Enterprise Managed Users, access to your enterprise's resources on GitHub.com or GHE.com must be authenticated through your identity provider (IdP). Instead of signing in with a GitHub username and password, members of your enterprise will sign in through your IdP.

After you configure SAML SSO, we recommend storing your recovery codes so you can recover access to your enterprise in the event that your IdP is unavailable.

> [!NOTE] GitHub does not test or validate identity provider (IdP) gallery applications for use in Government Cloud environments, including Microsoft Entra ID Government Cloud and Okta Government Cloud. Authentication and SCIM provisioning issues that involve gallery applications in these environments fall outside GitHub's [scope of support](/support/learning-about-github-support/about-github-support#scope-of-support).


If you currently use SAML SSO for authentication and would prefer to use OIDC and benefit from CAP support, you can follow a migration path. For more information, see [Migrating From Saml To Oidc](https://docs.github.com/en/admin/managing-iam/reconfiguring-iam-for-enterprise-managed-users/migrating-from-saml-to-oidc).


## Prerequisites

* Understand the integration requirements and level of support for your IdP.

  * GitHub offers a "paved-path" integration and full support if you use a **partner IdP** for both authentication and provisioning.
  * Alternatively, you can use any system or combination of systems that conforms to SAML 2.0 and SCIM 2.0. However, support for resolving problems with these systems may be limited.

  For more details, see [Enterprise Managed Users](https://docs.github.com/en/admin/concepts/identity-and-access-management/enterprise-managed-users#identity-management-systems).
* Your IdP must adhere to the SAML 2.0 specification. See the [SAML Wiki](https://wiki.oasis-open.org/security) on the OASIS website.
* You must have tenant administrative access to your IdP.
* If you're configuring SAML SSO for a new enterprise, make sure to complete all previous steps in the initial configuration process. See [Getting Started With Enterprise Managed Users](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users).

## Configure SAML SSO for Enterprise Managed Users

To configure SAML SSO for your enterprise with managed users, you must configure an application on your IdP, then configure your enterprise on GitHub. After you configure SAML SSO, you can configure user provisioning.

1. [Configure your IdP](#configure-your-idp)
1. [Configure your enterprise](#configure-your-enterprise)
1. [Enable provisioning](#enable-provisioning)

### Configure your IdP

1. If you use a partner IdP, to install the GitHub Enterprise Managed User application, click the link for your IdP and environment.

   {% rowheaders %}

   | Identity provider | App for GitHub.com | App for GHE.com |
   | ----------------- | ------------- | ------------------- |
   | Microsoft Entra ID | [GitHub Enterprise Managed User](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/aad.githubenterprisemanageduser?tab=Overview) | [GitHub Enterprise Managed User](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/aad.githubenterprisemanageduser?tab=Overview) |
   | Okta | [GitHub Enterprise Managed User](https://www.okta.com/integrations/github-enterprise-managed-user) | [GitHub Enterprise Managed User - ghe.com](https://www.okta.com/integrations/github-enterprise-managed-user-ghe-com/) |
   | PingFederate | [PingFederate downloads website](https://www.pingidentity.com/en/resources/downloads/pingfederate.html) (navigate to the **Add-ons** tab, then select **GitHub EMU Connector 1.0**) | [PingFederate downloads website](https://www.pingidentity.com/en/resources/downloads/pingfederate.html) (navigate to the **Add-ons** tab, then select **GitHub EMU Connector 1.0**) |

   {% endrowheaders %}

1. To configure SAML SSO for Enterprise Managed Users on a partner IdP, read the relevant documentation for your IdP and environment.

   {% rowheaders %}

   | Identity provider | Documentation for GitHub.com | Documentation for GHE.com |
   | ----------------- | ------------- | ------------------- |
   | Microsoft Entra ID | [Microsoft Learn](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-tutorial) | [Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-enterprise-managed-user-ghe-com-tutorial) |
   | Okta | [Configuring Saml Single Sign On With Okta For Enterprise Managed Users](https://docs.github.com/en/admin/managing-iam/configuring-authentication-for-enterprise-managed-users/configuring-saml-single-sign-on-with-okta-for-enterprise-managed-users) | [Configuring Saml Single Sign On With Okta For Enterprise Managed Users](https://docs.github.com/en/admin/managing-iam/configuring-authentication-for-enterprise-managed-users/configuring-saml-single-sign-on-with-okta-for-enterprise-managed-users) |
   | PingFederate | [Configuring Authentication And Provisioning With Pingfederate](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-authentication-and-provisioning-with-pingfederate) ("Prerequisites" and "1. Configure SAML" sections) | [Configuring Authentication And Provisioning With Pingfederate](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-authentication-and-provisioning-with-pingfederate) ("Prerequisites" and "1. Configure SAML" sections) |

   {% endrowheaders %}

   Alternatively, if you don't use a partner IdP, you can use the SAML configuration reference for GitHub to create and configure a generic SAML 2.0 application on your IdP. See [Saml Configuration Reference](https://docs.github.com/en/admin/managing-iam/iam-configuration-reference/saml-configuration-reference).

1. To test and configure your enterprise, assign yourself or the user that will configure SAML SSO for your enterprise on GitHub to the application you configured for Enterprise Managed Users on your IdP.

   > [!NOTE]
   > In order to test a successful authentication connection upon configuration, at least one user must be assigned to the IdP.

1. To continue configuring your enterprise on GitHub, locate and note the following information from the application you installed on your IdP.

    | Value | Other names | Description |
    | :- | :- | :- |
    | IdP Sign-On URL | Login URL, IdP URL | Application's URL on your IdP |
    | IdP Identifier URL | Issuer | IdP's identifier to service providers for SAML authentication |
    | Signing certificate, PEM-encoded | Public certificate | Public certificate that IdP uses to sign authentication requests |

### Configure your enterprise

After you configure SAML SSO for Enterprise Managed Users on your IdP, you can configure your enterprise on GitHub.

After the initial configuration of SAML SSO, the only setting you can update on GitHub for your existing SAML configuration is the SAML certificate, which can be done by any member with the enterprise owner role. If you need to update the sign-on URL or issuer URL, you must first disable SAML SSO, then reconfigure SAML SSO with the new settings. For more information, see [Disabling Authentication And Provisioning For Enterprise Managed Users](https://docs.github.com/en/admin/managing-iam/configuring-authentication-for-enterprise-managed-users/disabling-authentication-and-provisioning-for-enterprise-managed-users).

1. Sign in as the setup user for your enterprise with the username **SHORTCODE_admin**, replacing SHORTCODE with your enterprise's shortcode.


   > [!NOTE]
   > If you need to reset the password for your setup user, contact GitHub Support through the [GitHub Support portal](https://support.github.com). The usual password reset option by providing your email address will not work.


1. If you're using a **non-partner IdP** (an IdP other than Okta, PingFederate or Entra ID), before enabling SAML, you must update a setting so that you will be able to set up SCIM using the REST API. See [Configuring Scim Provisioning For Users](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users#configuring-provisioning-for-other-identity-management-systems).

1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **Identity provider**.

1. Under **Identity Provider**, click **Single sign-on configuration**.


1. Under "SAML single sign-on," select **Add SAML configuration**.
1. Under **Sign on URL**, type the HTTPS endpoint of your IdP for SSO requests that you noted while configuring your IdP.
1. Under **Issuer**, type your SAML issuer URL that you noted while configuring your IdP, to verify the authenticity of sent messages.
1. Under **Public Certificate**, paste the certificate that you noted while configuring your IdP, to verify SAML responses.

   > [!NOTE]
   > GitHub does not enforce the expiration of this SAML IdP certificate. This means that even if this certificate expires, your SAML authentication will continue to work. However, GitHub's recommendation is to update the certificate before it expires. We will accept a SAML response signed with an expired certificate, but we cannot comment on how the certificate expiring will be handled at the identity provider level. If your IdP administrator regenerates the SAML certificate, and you don't update it on the GitHub side, users will encounter a `digest mismatch` error during SAML authentication attempts due to the certificate mismatch. See [Error: Digest mismatch](/admin/managing-iam/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#error-digest-mismatch).
1. Under the same **Public Certificate** section, select the **Signature Method** and **Digest Method** dropdown menus, then click the hashing algorithm used by your SAML issuer.
1. Before enabling SAML SSO for your enterprise, to ensure that the information you've entered is correct, click **Test SAML configuration**. This test uses Service Provider initiated (SP-initiated) authentication and must be successful before you can save the SAML settings.

1. Click **Save SAML settings**.

    > [!NOTE]
    > After you require SAML SSO for your enterprise and save SAML settings, the setup user will continue to have access to the enterprise and will remain signed in to GitHub along with the managed user accounts provisioned by your IdP who will also have access to the enterprise.

1. To ensure you can still access your enterprise on GitHub if your IdP is unavailable in the future, click **Download**, **Print**, or **Copy** to save your recovery codes. For more information, see [Downloading Your Enterprise Accounts Single Sign On Recovery Codes](https://docs.github.com/en/admin/managing-iam/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes).


### Enable provisioning

After you enable SAML SSO, enable provisioning. For more information, see [Configuring Scim Provisioning For Users](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users).

### Enable guest collaborators

You can use the role of guest collaborator to grant limited access to vendors and contractors in your enterprise. Unlike enterprise members, guest collaborators only have access to internal repositories within organizations where they are a member.

If you use Entra ID or Okta for SAML authentication, you may need to update your IdP application to use guest collaborators. For more information, see [Enabling Guest Collaborators](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/enabling-guest-collaborators).
