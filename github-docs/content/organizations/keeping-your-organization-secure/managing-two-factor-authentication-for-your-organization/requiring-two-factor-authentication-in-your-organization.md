# Requiring two-factor authentication in your organization

> [!NOTE]
> As of March 2023, GitHub required all users who contribute code on GitHub.com to enable one or more forms of two-factor authentication (2FA). If you were in an eligible group, you would have received a notification email when that group was selected for enrollment, marking the beginning of a 45-day 2FA enrollment period, and you would have seen banners asking you to enroll in 2FA on GitHub.com. If you didn't receive a notification, then you were not part of a group required to enable 2FA, though we strongly recommend it.

>
> For more information about the 2FA enrollment rollout, see [this blog post](https://github.blog/2023-03-09-raising-the-bar-for-software-security-github-2fa-begins-march-13).



## About two-factor authentication for organizations

Two-factor authentication (2FA) is an extra layer of security used when logging into websites or apps.
 You can require all members, outside collaborators, and billing managers in your organization to enable two-factor authentication on GitHub. For more information about two-factor authentication, see [Securing Your Account With Two Factor Authentication 2Fa](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa).

You can also require two-factor authentication for organizations in an enterprise. For more information, see [Enforcing Policies For Security Settings In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise).

> [!NOTE]
> Some of the users in your organization may have been selected for mandatory two-factor authentication enrollment by GitHub, but it has no impact on how you enable the 2FA requirement for your organization.

> [!WARNING]
> * When you require use of two-factor authentication for your organization, members and billing managers who do not use 2FA will not be able to access your organization's resources until they enable 2FA on their account. They will retain membership even without 2FA, including consuming {% ifversion enterprise-licensing-language %}licenses in your organization{% endif %}.
> * When you require use of two-factor authentication for your organization, outside collaborators who do not use 2FA will be removed from the organization and lose access to its repositories. They will also lose access to their forks of the organization's private repositories. You can reinstate their access privileges and settings if they enable 2FA for their personal account within three months of their removal from your organization. For more information, see [Reinstating A Former Member Of Your Organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization).
> * You will also need to enable two-factor authentication for unattended or shared access accounts that are outside collaborators, such as bots and service accounts. If you do not configure 2FA for these unattended outside collaborator accounts after you've enabled required 2FA, the accounts will be removed from the organization and lose access to their repositories. For more information, see [Managing Bots And Service Accounts With Two Factor Authentication](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/managing-bots-and-service-accounts-with-two-factor-authentication).
> * If an outside collaborator disables two-factor authentication for their personal account after you've enabled required 2FA, they will automatically be removed from the organization.
> * If you're the sole owner of an organization that requires two-factor authentication, you won't be able to disable 2FA for your personal account without disabling required 2FA for the organization.



### Authentication methods that support 2FA

| Authentication Method                             | Description                                                                                                                              | Two-factor authentication support                                                                                                                                           |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Built-in                                          | Authentication is performed against personal accounts that are stored on the GitHub Enterprise Server appliance. | Supported and managed on the GitHub Enterprise Server appliance. Organization owners can require 2FA to be enabled for members of the organization. |
| Built-in authentication with an identity provider | Authentication is performed against accounts that are stored on the identity provider.                                                   | Dependent on the identity provider.                                                                                                                                         |
| LDAP                                              | Allows integration with your company directory service for authentication.                                                               | Supported and managed on the GitHub Enterprise Server appliance. Organization owners can require 2FA to be enabled for members of the organization. |
| SAML                                              | Authentication is performed on an external identity provider.                                                                            | Not supported or managed on the GitHub Enterprise Server appliance, but may be supported by the external authentication provider. Two-factor authentication enforcement on organizations is not available.
                                                                                                             |
| CAS                                               | Single sign-on service is provided by an external server.                                                                                | Not supported or managed on the GitHub Enterprise Server appliance, but may be supported by the external authentication provider. Two-factor authentication enforcement on organizations is not available.
                                                                                                             |




## Prerequisites

Before you can require organization members, outside collaborators, and billing managers to use two-factor authentication, you must enable 2FA for your account. For more information, see [Securing Your Account With Two Factor Authentication 2Fa](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa).

Before you require use of two-factor authentication, we recommend notifying organization members, outside collaborators, and billing managers and asking them to set up 2FA for their accounts. You can see if members and outside collaborators already use 2FA. For more information, see [Viewing Whether Users In Your Organization Have 2Fa Enabled](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/viewing-whether-users-in-your-organization-have-2fa-enabled).

## Requiring two-factor authentication in your organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Authentication security**.

1. Under "Two-factor authentication", select **Require two-factor authentication for everyone in your organization**, then click **Save**.

1. If prompted, read the information about members and outside collaborators who will be removed from the organization.
1. To confirm the change, click **Confirm**.


1. If any outside collaborators are removed from the organization, we recommend sending them an invitation that can reinstate their former privileges and access to your organization. They must enable two-factor authentication before they can accept your invitation.




### Requiring secure methods of two-factor authentication in your organization

Alongside requiring two-factor authentication, you can require that organization members, billing managers, and outside collaborators use secure methods of 2FA. Secure two-factor methods are passkeys, security keys, authenticator apps, and the GitHub mobile app. Users who do not have a secure method of 2FA configured, or who have any insecure method (such as SMS) configured, will be prevented from accessing organization resources.

Before you require secure methods of two-factor authentication, we recommend notifying organization members, outside collaborators, and billing managers and asking them to set up secure 2FA for their accounts. You can see if members and outside collaborators already use secure methods of 2FA on each organization's People page. For more information, see [Viewing Whether Users In Your Organization Have 2Fa Enabled](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/viewing-whether-users-in-your-organization-have-2fa-enabled).

1. Under "Two-factor authentication", select **Require two-factor authentication for everyone in your organization** and **Only allow secure two-factor methods**, then click **Save**.

1. If prompted, read the information about how user access to organization resources will be affected by requiring secure 2FA methods. To confirm the change, click **Confirm**.

1. Optionally, if any outside collaborators are removed from your organization, we recommend sending them an invitation to reinstate their former privileges and access. Each person must enable 2FA with a secure method before they can accept your invitation.



## Viewing people who were removed from your organization

To view people who were automatically removed from your organization for non-compliance when you required two-factor authentication, you can search your organization's audit log for people removed from your organization. The audit log event will show if a person was removed for 2FA non-compliance. For more information, see [Reviewing The Audit Log For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log).

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Archive" section of the sidebar, click **{% octicon "log" aria-hidden="true" aria-label="log" %} Logs**, then click **Audit log**.

1. Enter your search query. To search for outside collaborators removed, use `action:org.remove_outside_collaborator` in your search query

 You can also view people who were removed from your organization by using a [time frame](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#search-based-on-time-of-action) in your search.

## Helping removed outside collaborators rejoin your organization

If any outside collaborators are removed from the organization when you enable required use of two-factor authentication, they'll receive an email notifying them that they've been removed. They should then enable 2FA for their personal account, and contact an organization owner to request access to your organization.

## Further reading

* [Viewing Whether Users In Your Organization Have 2Fa Enabled](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/viewing-whether-users-in-your-organization-have-2fa-enabled)
* [Securing Your Account With Two Factor Authentication 2Fa](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa)
* [Reinstating A Former Member Of Your Organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization)
* [Reinstating A Former Outside Collaborators Access To Your Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/reinstating-a-former-outside-collaborators-access-to-your-organization)
