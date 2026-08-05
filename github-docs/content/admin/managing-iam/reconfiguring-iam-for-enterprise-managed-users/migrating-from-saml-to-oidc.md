# Migrating from SAML to OIDC

>[!NOTE] OpenID Connect (OIDC) and Conditional Access Policy (CAP) support for Enterprise Managed Users is only available for Microsoft Entra ID (previously known as Azure AD).


## About migration of an enterprise with managed users from SAML to OIDC

If your enterprise with managed users uses SAML SSO to authenticate with Entra ID, you can migrate to OIDC. When your enterprise uses OIDC SSO, GitHub will automatically use your IdP's conditional access policy (CAP) IP conditions to validate interactions with GitHub when members use the web UI or change IP addresses, and for each authentication with a personal access token or SSH key associated with a user account.



>[!NOTE] CAP protection for web sessions is currently in public preview and may change.
>
> If IdP CAP support is already enabled for your enterprise, you can opt into extended protection for web sessions from your enterprise's "Authentication security" settings.
> When web session protection is enabled and a user's IP conditions are not satisfied, they can view and filter all user-owned resources but cannot view the details of the results for notifications, searches, personal dashboards, or starred repositories.


When you migrate from SAML to OIDC, managed user accounts and groups that were previously provisioned for SAML but are not provisioned by the GitHub Enterprise Managed User (OIDC) application will have "(SAML)" appended to their display names.

If you're new to Enterprise Managed Users and haven't yet configured authentication for your enterprise, you do not need to migrate and can set up OIDC single sign-on immediately. For more information, see [Configuring Oidc For Enterprise Managed Users](https://docs.github.com/en/admin/managing-iam/configuring-authentication-for-enterprise-managed-users/configuring-oidc-for-enterprise-managed-users).

> [!WARNING]
> When you migrate to a new IdP or tenant, connections between GitHub teams and IdP groups are removed, and are not reinstated after the migration. This will remove all members from the team and leave the team unconnected to your IdP, which may cause disruption if you use team sync to manage access to organizations or licenses from your IdP. We recommend you use the "External groups" endpoints of the REST API to gather information about your teams setup before you migrate, and to reinstate connections afterwards. For more information, see [External Groups](https://docs.github.com/en/rest/teams/external-groups).


## Prerequisites

* Your enterprise on GitHub must currently be configured to use SAML for authentication, with Entra ID as your identity provider (IdP). For more information, see [Configuring Saml Single Sign On For Enterprise Managed Users](https://docs.github.com/en/admin/managing-iam/configuring-authentication-for-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users).
* You'll need to access both your enterprise on GitHub and your tenant on Entra ID.

  * To configure the GitHub Enterprise Managed User (OIDC) application on Entra ID, you must sign into the Entra ID tenant as a user with the Global Administrator role.
  * To sign in as the setup user for your enterprise on GitHub, you must use a recovery code for the enterprise. For more information, see [Downloading Your Enterprise Accounts Single Sign On Recovery Codes](https://docs.github.com/en/admin/managing-iam/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes).

* Schedule a time to migrate when people aren't actively using your enterprise's resources. During the migration, users cannot access your enterprise until after you configure the new application and users as re-provisioned.


## Migrating your enterprise

To migrate your enterprise from SAML to OIDC, you will disable your existing GitHub Enterprise Managed User application on Entra ID, prepare and begin the migration as the setup user for your enterprise on GitHub, then install and configure the new application for OIDC on Entra ID. After the migration is complete and Entra ID provisions your users, the users can authenticate to access your enterprise's resources on GitHub using OIDC.

> [!WARNING]
> Migration of your enterprise from SAML to OIDC can take up to an hour. During the migration, users cannot access your enterprise on GitHub.

1. Before you begin the migration, sign in to Azure and disable provisioning in the existing GitHub Enterprise Managed User application.
1. If you use [Conditional Access (CA) network location policies](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition) in Entra ID, and you're currently using an IP allow list with your enterprise account or any of the organizations owned by the enterprise account, disable the IP allow lists. See [Enforcing Policies For Security Settings In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise) and [Managing Allowed Ip Addresses For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization).
1. Sign in as the setup user for your enterprise with the username **SHORTCODE_admin**, replacing SHORTCODE with your enterprise's shortcode.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. When prompted to continue to your identity provider, click **Use a recovery code** and sign in using one of your enterprise's recovery codes.

   > [!NOTE]
   > You must use a recovery code for your enterprise, not your user account. For more information, see [Downloading Your Enterprise Accounts Single Sign On Recovery Codes](https://docs.github.com/en/admin/managing-iam/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes).

1. At the top of the page, click **Identity provider**.

1. Under **Identity Provider**, click **Single sign-on configuration**.

1. At the bottom of the page, click **Migrate to OpenID Connect single sign-on**.
1. Read the warning, then click **Migrate to OIDC**.
1. Click **Begin OIDC migration**.
1. After GitHub redirects you to your IdP, sign in, then follow the instructions to give consent and install the GitHub Enterprise Managed User (OIDC) application. After Entra ID asks for permissions for GitHub Enterprise Managed Users with OIDC, enable **Consent on behalf of your organization**, then click **Accept**.

   > [!WARNING]
   > You must sign in to Entra ID as a user with global admin rights in order to consent to the installation of the GitHub Enterprise Managed User (OIDC) application.

1. After you grant consent, a new browser window will open to GitHub and display a new set of recovery codes for your enterprise with managed users. Download the codes, then click **Enable OIDC authentication**.
1. Wait for the migration to complete, which can take up to an hour. To check the status of the migration, navigate to your enterprise's authentication security settings page. If "Require SAML authentication" is selected, the migration is still in progress.

   > [!WARNING]
   > Do not provision new users from the application on Entra ID during the migration.

1. In a new tab or window, while signed in as the setup user, create a personal access token (classic) with the **scim:enterprise** scope and **no expiration** and copy it to your clipboard. For more information about creating a new token, see [Configuring Scim Provisioning For Users](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users#creating-a-personal-access-token).
1. In the provisioning settings for the GitHub Enterprise Managed User (OIDC) application in the Microsoft Entra admin center, under "Tenant URL", the tenant URL for your enterprise:
    * For **GitHub.com**: `https://api.github.com/scim/v2/enterprises/YOUR_ENTERPRISE`, replacing YOUR_ENTERPRISE with the name of your enterprise account. For example, if your enterprise account's URL is `https://github.com/enterprises/octo-corp`, the name of the enterprise account is `octo-corp`.
    * For **GHE.com**: `https://api.SUBDOMAIN.ghe.com/scim/v2/enterprises/SUBDOMAIN`, where SUBDOMAIN is your enterprise's subdomain on GHE.com.

1. Under "Secret token", paste the personal access token (classic) with the **scim:enterprise** scope that you created earlier.
1. To test the configuration, click **Test Connection**.
1. To save your changes, at the top of the form, click **Save**.
1. In the Microsoft Entra admin center, copy the users and groups from the old GitHub Enterprise Managed User application to the new GitHub Enterprise Managed User (OIDC) application.
1. Test your configuration by provisioning a single new user.
1. If your test is successful, start provisioning for all users by clicking **Start provisioning**.
