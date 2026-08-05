# Getting started with Enterprise Managed Users

Before your developers can use GitHub Enterprise Cloud with Enterprise Managed Users, you must follow a series of configuration steps.

## Create a new enterprise account

To use Enterprise Managed Users, you need a **separate type of enterprise account** with Enterprise Managed Users enabled.

You can create an enterprise account by signing up for a trial of GitHub Enterprise Cloud. See [Setting Up A Trial Of GitHub Enterprise Cloud](https://docs.github.com/en/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).

### Understand where your enterprise is hosted

Enterprise Managed Users are available on GitHub.com or, if you use data residency, on your own subdomain of GHE.com.

The setup process for the environments is similar. However, you will need to **pay attention** to where your enterprise is hosted as you follow the process. For example, there may be differences in the application you need to use in your identity provider, or the configuration values you need to provide.

## Create the setup user

After we create your enterprise, you will receive an email inviting you to choose a password for the setup user, which is used to configure authentication and provisioning. This is the first enterprise owner account, and the only user account in the enterprise that is not SCIM-provisioned. The username is your enterprise's shortcode (chosen by you or randomly generated), suffixed with `_admin`. For example: `fabrikam_admin`.

Using an **incognito or private browsing window**:

1. Set the user's password.
1. Enable two-factor authentication (2FA) for the setup user account, and save the recovery codes. See [Configuring Two Factor Authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication).

   > [!WARNING]
   > All subsequent login attempts to the setup user account will require a successful 2FA challenge response.
1. Download the enterprise recovery codes. See [Downloading Your Enterprise Accounts Single Sign On Recovery Codes](https://docs.github.com/en/admin/managing-iam/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes).

1. We strongly recommend **storing the credentials for the setup user** in your company's password management tool. Someone will need to sign in as this user to update authentication settings, migrate to another identity provider or authentication method, or use your enterprise's recovery codes.


For more information about the setup user, see [Setup User](https://docs.github.com/en/admin/concepts/identity-and-access-management/setup-user).


## Create a personal access token

Next, create a personal access token that you can use to configure provisioning.

* You must be **signed in as the setup user** when you create the token.
* The token must have at least the **scim:enterprise** scope.
* The token must have **no expiration**.

To learn how to create a personal access token (classic), see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).


## Configure authentication

Next, configure how your members will authenticate.

**If you're using Entra ID** as your IdP, you can choose between OpenID Connect (OIDC) and Security Assertion Markup Language (SAML).
* We recommend OIDC, which includes support for Conditional Access Policies (CAP).
* If you require multiple enterprises provisioned from one tenant, you can use SAML or OIDC for the first enterprise, but must use SAML for each additional enterprise.

**If you're using another IdP**, like Okta or PingFederate, you must use SAML to authenticate your members.

To get started, read the guide for your chosen authentication method.

* [Configuring Oidc For Enterprise Managed Users](https://docs.github.com/en/admin/managing-iam/configuring-authentication-for-enterprise-managed-users/configuring-oidc-for-enterprise-managed-users)
* [Configuring Saml Single Sign On For Enterprise Managed Users](https://docs.github.com/en/admin/managing-iam/configuring-authentication-for-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)


GitHub offers a "paved-path" integration and full support if you use a partner IdP for both authentication and provisioning. Alternatively, you can use any system, or combination of systems, that conforms to SAML 2.0 and SCIM 2.0. However, support for resolving problems with these systems may be limited. For more details, see [Enterprise Managed Users](https://docs.github.com/en/admin/concepts/identity-and-access-management/enterprise-managed-users#identity-management-systems).

## Configure provisioning

After you configure authentication, you can configure SCIM provisioning, which is how your IdP will create managed user accounts on GitHub. See [Configuring Scim Provisioning For Users](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users).


## Sync teams with IdP groups

After authentication and provisioning are configured, you can start managing organization membership and license assignment for your managed user accounts by synchronizing IdP groups with teams. See [Managing Team Memberships With Identity Provider Groups](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups).


## Support developers with multiple user accounts

Developers may need to maintain separate, personal accounts for their work outside of your enterprise with managed users. You can help them manage multiple accounts by providing the following resources:

* **On the command line**, developers can configure Git to simplify the process of using multiple accounts. See [Managing Multiple Accounts](https://docs.github.com/en/account-and-profile/how-tos/account-management/managing-multiple-accounts).
* **In Git Credential Manager (GCM)**: Turn off account filtering to prevent multiple sign-in prompts if the [SSO Redirect setting](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users) is not enabled for your enterprise. See [Enforcing Policies For Security Settings In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users).
* **In the web interface**, developers can switch between accounts without always needing to re-authenticate. See [Switching Between Accounts](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/switching-between-accounts).
