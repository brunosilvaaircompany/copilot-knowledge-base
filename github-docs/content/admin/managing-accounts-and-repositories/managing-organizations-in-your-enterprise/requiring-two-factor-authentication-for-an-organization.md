# Requiring two-factor authentication for an organization

When using LDAP or built-in authentication, two-factor authentication is supported on your GitHub Enterprise Server instance. Organization owners can require members to have two-factor authentication enabled.

When using SAML or CAS, two-factor authentication is not supported or managed on the GitHub Enterprise Server instance, but may be supported by the external authentication provider. Two-factor authentication enforcement on organizations is not available. For more information about enforcing two-factor authentication on organizations, see [Requiring Two Factor Authentication In Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization).


For more information, see [About Two Factor Authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication).

## Requirements for enforcing two-factor authentication

Before you can require organization members and outside collaborators to use two-factor authentication, you must [enable 2FA](/authentication/securing-your-account-with-two-factor-authentication-2fa) for your own personal account.

Before you require use of 2FA, we recommend notifying organization members and outside collaborators and asking them to set up 2FA for their accounts. You can [see if members and outside collaborators already use 2FA](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/viewing-whether-users-in-your-organization-have-2fa-enabled) on an organization's People tab.

The verification of two-factor authentication codes requires an accurate time on both the client's device and server. Site administrators should ensure time synchronization is configured and accurate. For more information, see [Configuring Time Synchronization](https://docs.github.com/en/admin/configuring-settings/configuring-network-settings/configuring-time-synchronization).


> [!WARNING]
> * When you require 2FA, members who do not use 2FA will not be able to access your enterprise resources until they enable 2FA on their account. They will retain membership even without 2FA, including occupying seats in your enterprise and organizations.
> * When your require 2FA, outside collaborators (including bot accounts) who do not use 2FA will be removed from the enterprise and its organization and lose access to repositories, including their forks of private repositories. If they enable 2FA for their personal account within three months of being removed from the organization, you can [reinstate their access privileges and settings](/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization).
> * When 2FA is required, outside collaborators who disable 2FA will automatically be removed from the enterprise and its organizations. Members who disable 2FA will not be able to access your enterprise and organization resources until they re-enable it.
> * If you're the sole owner of an organization that requires 2FA, you won't be able to disable 2FA for your personal account without disabling required 2FA for the organization.

## Requiring two-factor authentication for an organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Authentication security**.

1. Under "Two-factor authentication", select **Require two-factor authentication for everyone in your organization**, then click **Save**.

1. If prompted, read the information about members and outside collaborators who will be removed from the organization.
1. To confirm the change, click **Confirm**.


## Viewing people who were removed from your organization

To view people who were automatically removed from your organization for non-compliance when you required two-factor authentication, you can [search the audit log](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise) using `reason:two_factor_requirement_non_compliance` in the search field.

1. In the upper-left corner of any page, click {% octicon "mark-github" aria-label="Global navigation" %}.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "Archives" section of the sidebar, click **{% octicon "log" aria-hidden="true" aria-label="log" %} Security log**.


1. Enter your search query using `reason:two_factor_requirement_non_compliance`. To narrow your search for:
   * Outside collaborators removed, enter `action:org.remove_outside_collaborator AND reason:two_factor_requirement_non_compliance`

   You can also view people removed from a particular organization by using the organization name in your search:
   * `org:octo-org AND reason:two_factor_requirement_non_compliance`
1. Click **Search**.

## Helping removed outside collaborators rejoin your organization

If any outside collaborators are removed from the organization when you enable required use of two-factor authentication, they'll receive an email notifying them that they've been removed. They should then enable 2FA for their personal account, and contact an organization owner to request access to your organization.

## Further reading

* [Viewing Whether Users In Your Organization Have 2Fa Enabled](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/viewing-whether-users-in-your-organization-have-2fa-enabled)
* [Securing Your Account With Two Factor Authentication 2Fa](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa)
* [Reinstating A Former Member Of Your Organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization)
* [Reinstating A Former Outside Collaborators Access To Your Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/reinstating-a-former-outside-collaborators-access-to-your-organization)
