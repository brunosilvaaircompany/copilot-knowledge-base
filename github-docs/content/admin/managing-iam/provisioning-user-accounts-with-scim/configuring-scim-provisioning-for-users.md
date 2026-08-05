# Configuring SCIM provisioning for Enterprise Managed Users

To create, manage, and deactivate user accounts for your enterprise members on GitHub, your IdP must implement SCIM for communication with GitHub. SCIM is an open specification for management of user identities between systems. Different IdPs provide different experiences for the configuration of SCIM provisioning.


If you use a partner IdP, you can simplify the configuration of SCIM provisioning by using the partner IdP's application. If you don't use a partner IdP for provisioning, you can implement SCIM using calls to GitHub's REST API for SCIM. For more information, see [Enterprise Managed Users](https://docs.github.com/en/admin/concepts/identity-and-access-management/enterprise-managed-users#how-does-emus-integrate-with-identity-management-systems).

> [!NOTE] GitHub does not test or validate identity provider (IdP) gallery applications for use in Government Cloud environments, including Microsoft Entra ID Government Cloud and Okta Government Cloud. Authentication and SCIM provisioning issues that involve gallery applications in these environments fall outside GitHub's [scope of support](/support/learning-about-github-support/about-github-support#scope-of-support).




## Who needs to follow these instructions?

Even if your instance already uses SAML authentication, or if you were enrolled in the SCIM private preview on a previous GitHub Enterprise Server version, you must ensure you have followed **all instructions in this guide** to enable SCIM in version 3.14 and later.

This guide applies in any of the following situations.

* You're **setting up SAML and SCIM for the first time**: you'll follow these instructions to get started.
* You **already use SAML authentication**: you'll need to enable SCIM on your instance, plus either reconfigure SAML with an IdP application that supports automated provisioning or set up a SCIM integration with the REST API.
* You were **enrolled in the SCIM private preview**: you'll need to reenable SCIM on your instance and, if you're using a partner IdP, reconfigure your settings on an updated IdP application.





## About user lifecycle management with SCIM

With SCIM, you manage the lifecycle of user accounts from your IdP:

* After you configure provisioning for Enterprise Managed Users, your IdP uses SCIM to provision user accounts on GitHub and add the accounts to your enterprise. to create an account and send an onboarding email to the user. If you assign a group to the application in your IdP, your IdP will provision accounts for all members of the group.
* When you update information associated with a user's identity on your IdP, your IdP will update the user's account on GitHub.
* When you unassign the user from the IdP application or deactivate a user's account on your IdP, your IdP will communicate with GitHub to invalidate any sessions and disable the member's account. The disabled account's information is maintained and their username is changed to a hash of their original username, with the short code appended if applicable.
* If you reassign a user to the IdP application or reactivate their account on your IdP, the user account will be reactivated, and the username will be restored.


To configure team and organization membership, repository access, and permissions, you can use groups on your IdP. For more information, see [Managing Team Memberships With Identity Provider Groups](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups).



{% endif %}

## Prerequisites



If you're configuring SCIM provisioning for a new enterprise, make sure to complete all previous steps in the initial configuration process. See [Getting Started With Enterprise Managed Users](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users).





## 1. Create a built-in setup user

To ensure you can continue to sign in and configure settings when SCIM is enabled, you'll create an enterprise owner using built-in authentication.

1. Sign in to GitHub Enterprise Server as a user with access to the Management Console.
1. If you have **already enabled SAML authentication**, ensure your settings allow you to create and promote a built-in authentication user. Go to the "Authentication" section of the Management Console and enable the following settings:

   * Select **Allow creation of accounts with built-in authentication**, so you can create the user.
   * Select **Disable administrator demotion/promotion**, so admin permissions can be granted outside of your SAML provider.

   For help finding these settings, see [Configuring Saml Single Sign On For Your Enterprise](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso).

1. Create a built-in user account{% ifversion scim-for-ghes-ga %} with the username `scim-admin` to perform provisioning actions on your instance. See [Allowing Built In Authentication For Users Outside Your Provider](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/allowing-built-in-authentication-for-users-outside-your-provider#inviting-users-outside-your-provider-to-authenticate-to-your-instance).

   Ensure the user's email and username are different from any user you plan on provisioning through SCIM. If your email provider supports it, you can modify an email address by adding `+admin`, for example `johndoe+admin@example.com`.

   You can use any username for your setup user, but we recommend using `scim-admin`. Although the `scim-admin` user consumes a license when first created, the license is freed once SCIM is enabled. With any other username, the user will continue to consume a license after SCIM is enabled.

1. Copy the password reset link after creating the user, and open it in a private browser window. Set a password for this user.

   > [!IMPORTANT]
   > As this user will act as a break-glass account, ensure you store the password securely in a password manager. Otherwise you risk losing access to this account.

1. Promote the user to an enterprise owner. See [Promoting Or Demoting A Site Administrator](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator#promoting-a-user-from-the-enterprise-settings).

## 2. Create a personal access token

1. Sign in to your instance as the **built-in setup user** you created in the previous section.
1. Create a personal access token (classic). For instructions, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

   * The token must have the `scim:enterprise` scope.
   * The token must have **no expiration**. If you specify an expiration date, SCIM will no longer function after the expiration date passes.

1. Store the token securely in a password manager until you need the token again later in the setup process. You'll need the token to configure SCIM on your IdP.

## 3. Enable SAML on your instance

> [!NOTE] Complete this section if either of the following situations applies:
> * If you have **not already enabled SAML authentication**, you will need to do so before you can enable SCIM.
> * If you already use SAML authentication and want to use a **partner IdP for both authentication and provisioning**, or if you're **upgrading from the SCIM private preview**, you must reconfigure SAML using a new application.

1. Sign in to your instance as a user with access to the Management Console.
1. Go to the "Authentication" section of the Management Console. For instructions, see [Configuring Saml Single Sign On For Your Enterprise](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso).
1. Select **SAML**.
1. Configure the SAML settings according to your requirements and the IdP you're using.

   * So the built-in setup user can continue to authenticate, ensure you select the following settings:
     * **Allow creation of accounts with built-in authentication**
     * **Disable administrator demotion/promotion**
   * If you're using a partner IdP, to find the information you need to configure the settings, follow the "Configure SAML" section of the relevant guide.
     * [Configuring Authentication And Provisioning With Entra ID](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-authentication-and-provisioning-with-entra-id#1-configure-saml)
     * [Configuring Authentication And Provisioning With Pingfederate](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-authentication-and-provisioning-with-pingfederate#1-configure-saml)
     * [Configuring Scim Provisioning With Okta](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-with-okta#1-configure-saml)

1. Optionally, complete configuration of the SAML settings within the application in your IdP. Alternatively, you can leave this step until later.

## 4. Enable SCIM on your instance

1. Sign in to your instance as the **built-in setup user** you created earlier.

1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Authentication security**.

1. Under "SCIM Configuration", select **Enable SCIM configuration**.

You can confirm that SCIM is now enabled by checking your instance's [audit logs](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise). You should expect to see a "business.enable_open_scim" event, indicating that GitHub's [SCIM REST API](/admin/managing-iam/provisioning-user-accounts-with-scim/provisioning-users-and-groups-with-scim-using-the-rest-api) has been enabled on your instance.

{% endif %}



## Configuring user provisioning for Enterprise Managed Users



After completing the setup on GitHub, you can configure provisioning on your IdP. The instructions you should follow differ depending on whether you use a partner IdP's application for both authentication and provisioning.

* [Configuring provisioning if you use a partner IdP's application](#configuring-provisioning-if-you-use-a-partner-idps-application)
* [Configuring provisioning for other identity management systems](#configuring-provisioning-for-other-identity-management-systems)

### Configuring provisioning if you use a partner IdP's application



To use a partner IdP's application both authentication and provisioning, review the partner's instructions for configuring provisioning in the links in the following table.

{% rowheaders %}

| IdP | SSO method | Instructions |
|---|---|---|
| Microsoft Entra ID (previously known as Azure AD) | OIDC | [Tutorial: Configure GitHub Enterprise Managed User (OIDC) for automatic user provisioning](https://docs.microsoft.com/azure/active-directory/saas-apps/github-enterprise-managed-user-oidc-provisioning-tutorial) on Microsoft Learn |
| Entra ID | SAML | [Tutorial: Configure GitHub Enterprise Managed User for automatic user provisioning](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-provisioning-tutorial) on Microsoft Learn |
| Okta | SAML | [Configuring Scim Provisioning With Okta](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-with-okta) |
| PingFederate | SAML | The "Prerequisites" and "2. Configure SCIM" sections in [Configuring Authentication And Provisioning With Pingfederate](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-authentication-and-provisioning-with-pingfederate) |

{% endrowheaders %}



### Configuring provisioning for other identity management systems

If you don't use a partner IdP, or if you only use a partner IdP for SAML authentication, you can manage the lifecycle of user accounts using GitHub's REST API endpoints for SCIM provisioning. See [Provisioning Users And Groups With Scim Using The Rest API](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/provisioning-users-and-groups-with-scim-using-the-rest-api).

> [!NOTE]
> Use of the REST API for SCIM provisioning is not supported with enterprises enabled for OIDC.

GitHub does not expressly support mixing partner IdPs for authentication and provisioning and does not test all identity management systems. **GitHub's support team may not be able to assist you with issues related to mixed or untested systems.** If you need help, you must consult the system's documentation, support team, or other resources.

>[!IMPORTANT] The combination of **Okta and Entra ID** for SSO and SCIM (in either order) is explicitly **not supported**. GitHub's SCIM API will return an error to the identity provider on provisioning attempts if this combination is configured.




1. Sign in as the setup user for your enterprise with the username **SHORTCODE_admin**, replacing SHORTCODE with your enterprise's shortcode.


   > [!NOTE]
   > If you need to reset the password for your setup user, contact GitHub Support through the [GitHub Support portal](https://support.github.com). The usual password reset option by providing your email address will not work.



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **Identity provider**.

1. Under **Identity Provider**, click **Single sign-on configuration**.

1. Under "Open SCIM Configuration", select "Enable open SCIM configuration".
1. Manage the lifecycle of your users by making calls to the REST API endpoints for SCIM provisioning. See [Provisioning Users And Groups With Scim Using The Rest API](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/provisioning-users-and-groups-with-scim-using-the-rest-api).





## 6. Update settings

After you have finished the configuration process, you should disable the following setting in the Management Console:

* **Disable administrator demotion/promotion**: Disable this setting to allow assignment of the enterprise owner role via SCIM. If this setting remains enabled, you will not be able to provision enterprise owners via SCIM.

Optionally, you can disable the following setting in the Management Console as well:

* **Allow creation of accounts with built-in authentication**: Disable this setting if you want all users to be provisioned from your IdP.



## Assigning users and groups

After you have configured authentication and provisioning, you will be able to provision new users on GitHub by assigning users or groups to the GitHub Enterprise Managed User application.


When assigning users, you can use the "Roles" attribute in the application on your IdP to set a user's role in your enterprise. For more information about the roles available to assign, see [Abilities Of Roles](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/abilities-of-roles).


Entra ID does not support provisioning nested groups. For more information, see [How Application Provisioning works in Microsoft Entra ID](https://learn.microsoft.com/entra/identity/app-provisioning/how-provisioning-works#assignment-based-scoping) on Microsoft Learn.
