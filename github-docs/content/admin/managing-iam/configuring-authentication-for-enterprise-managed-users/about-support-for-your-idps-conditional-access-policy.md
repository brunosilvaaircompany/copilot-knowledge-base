# About support for your IdP's Conditional Access Policy

>[!NOTE] OpenID Connect (OIDC) and Conditional Access Policy (CAP) support for Enterprise Managed Users is only available for Microsoft Entra ID (previously known as Azure AD).


## About support for Conditional Access Policies

When your enterprise uses OIDC SSO, GitHub will automatically use your IdP's conditional access policy (CAP) IP conditions to validate interactions with GitHub when members use the web UI or change IP addresses, and for each authentication with a personal access token or SSH key associated with a user account.



>[!NOTE] CAP protection for web sessions is currently in public preview and may change.
>
> If IdP CAP support is already enabled for your enterprise, you can opt into extended protection for web sessions from your enterprise's "Authentication security" settings.
> When web session protection is enabled and a user's IP conditions are not satisfied, they can view and filter all user-owned resources but cannot view the details of the results for notifications, searches, personal dashboards, or starred repositories.


GitHub supports CAP for any enterprise with managed users where OIDC SSO is enabled. Enterprise owners can choose to use this IP allow list configuration instead of GitHub's IP allow list, and can do so once OIDC SSO is configured. For more information about IP allow lists, see [Restricting Network Traffic To Your Enterprise With An Ip Allow List](https://docs.github.com/en/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list#about-your-idps-allow-list) and [Managing Allowed Ip Addresses For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization).

* GitHub enforces your IdP's IP conditions but cannot enforce your device compliance conditions.
* Policies for multi-factor authentication are only enforced at the point of sign-in to the IdP.

For more information about using OIDC with Enterprise Managed Users, see [Configuring Oidc For Enterprise Managed Users](https://docs.github.com/en/admin/managing-iam/configuring-authentication-for-enterprise-managed-users/configuring-oidc-for-enterprise-managed-users) and [Migrating From Saml To Oidc](https://docs.github.com/en/admin/managing-iam/reconfiguring-iam-for-enterprise-managed-users/migrating-from-saml-to-oidc).

## About CAP and deploy keys

A deploy key is an SSH key that grants access to an individual repository. Because deploy keys do not perform operations on behalf of a user, CAP IP conditions do not apply to any requests authenticated with a deploy key. For more information, see [Managing Deploy Keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys#deploy-keys).

## Considerations for integrations and automations

GitHub sends the originating IP address to your IdP for validation against your CAP. To make sure actions and apps are not blocked by your IdP's CAP, you will need to make changes to your configuration.

> [!WARNING]
> If you use GitHub Enterprise Importer to migrate an organization from your GitHub Enterprise Server instance, make sure to use a service account that is exempt from Entra ID's CAP otherwise your migration may be blocked.


### GitHub Actions

Actions that use a personal access token will likely be blocked by your IdP's CAP. We recommend that personal access tokens are created by a service account which is then exempted from IP controls in your IdP's CAP.

If you're unable to use a service account, another option for unblocking actions that use personal access tokens is to allow the IP ranges used by GitHub Actions. For more information, see [About Githubs Ip Addresses](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses).

### GitHub Codespaces

GitHub Codespaces may not be available if your enterprise uses OIDC SSO with CAP to restrict access by IP addresses. This is because codespaces are created with dynamic IP addresses which it's likely your IdP’s CAP will block. Other CAP policies may also affect GitHub Codespaces's availability, depending on the policy's specific setup.

### The github.dev editor

The github.dev editor may not be available if your enterprise uses OIDC SSO with CAP to restrict access by IP addresses. This is because github.dev relies on dynamic IP addresses which it's likely your IdP’s CAP will block. Other CAP policies may also affect github.dev's availability, depending on the policy's specific setup.

### GitHub Apps and OAuth apps

When GitHub Apps and OAuth apps sign a user in and make requests on that user's behalf, GitHub will send the IP address of the app's server to your IdP for validation. If the IP address of the app's server is not validated by your IdP's CAP, the request will fail.

When GitHub Apps call GitHub APIs acting either as the app itself or as an installation, these calls are not performed on behalf of a user. Since your IdP's CAP executes and applies policies to user accounts, these application requests cannot be validated against CAP and are always allowed through. For more information on GitHub Apps authenticating as themselves or as an installation, see [About Authentication With A GitHub App](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/about-authentication-with-a-github-app).

You can contact the owners of the apps you want to use, ask for their IP ranges, and configure your IdP's CAP to allow access from those IP ranges. If you're unable to contact the owners, you can review your IdP sign-in logs to review the IP addresses seen in the requests, then allow-list those addresses.

If you do not wish to allow all of the IP ranges for all of your enterprise's apps, you can also exempt installed GitHub Apps and authorized OAuth apps from the IdP allow list. If you do so, these apps will continue working regardless of the originating IP address. For more information, see [Enforcing Policies For Security Settings In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#allowing-access-by-github-apps).

## Further reading

* [Using the location condition in a Conditional Access policy](https://learn.microsoft.com/entra/identity/conditional-access/location-condition) on Microsoft Learn
