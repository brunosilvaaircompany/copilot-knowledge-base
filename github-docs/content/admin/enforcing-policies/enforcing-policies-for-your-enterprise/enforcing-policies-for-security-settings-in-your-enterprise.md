# Enforcing policies for security settings in your enterprise

## About policies for security settings in your enterprise

You can enforce policies to control the security settings for organizations owned by your enterprise. By default, organization owners can manage security settings.

## Requiring two-factor authentication for organizations in your enterprise


> [!NOTE]
> As of March 2023, GitHub required all users who contribute code on GitHub.com to enable one or more forms of two-factor authentication (2FA). If you were in an eligible group, you would have received a notification email when that group was selected for enrollment, marking the beginning of a 45-day 2FA enrollment period, and you would have seen banners asking you to enroll in 2FA on GitHub.com. If you didn't receive a notification, then you were not part of a group required to enable 2FA, though we strongly recommend it.

>
> For more information about the 2FA enrollment rollout, see [this blog post](https://github.blog/2023-03-09-raising-the-bar-for-software-security-github-2fa-begins-march-13).



If {% ifversion ghes %}your GitHub Enterprise Server instance uses LDAP or built-in authentication, enterprise{% else %}Enterprise{% endif %} owners can require that organization members, billing managers, and outside collaborators in all organizations owned by an enterprise use two-factor authentication to secure their user accounts. This policy is not available for enterprises with managed users.

Before you can require two-factor authentication for all organizations owned by your enterprise, you must enable 2FA for your own account. For more information, see [Securing Your Account With Two Factor Authentication 2Fa](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa).

Before you require use of two-factor authentication, we recommend notifying organization members, outside collaborators, and billing managers and asking them to set up 2FA for their accounts. Organization owners can see if members and outside collaborators already use 2FA on each organization's "People" page. For more information, see [Viewing Whether Users In Your Organization Have 2Fa Enabled](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/viewing-whether-users-in-your-organization-have-2fa-enabled).

The verification of two-factor authentication codes requires an accurate time on both the client's device and server. Site administrators should ensure time synchronization is configured and accurate. For more information, see [Configuring Time Synchronization](https://docs.github.com/en/admin/configuring-settings/configuring-network-settings/configuring-time-synchronization).


> [!WARNING]
> * When you require two-factor authentication for your enterprise, outside collaborators (including bot accounts) in all organizations owned by your enterprise who do not use 2FA will be removed from the organization and lose access to its repositories. They will also lose access to their forks of the organization's private repositories. You can reinstate their access privileges and settings if they enable 2FA for their account within three months of their removal from your organization. For more information, see [Reinstating A Former Member Of Your Organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization).
> * Any outside collaborator in any of the organizations owned by your enterprise who disables 2FA for their account after you've enabled required two-factor authentication will automatically be removed from the organization. Members and billing managers who disable 2FA will not be able to access organization resources until they re-enable it.
> * If you're the sole owner of an enterprise that requires two-factor authentication, you won't be able to disable 2FA for your user account without disabling required 2FA for the enterprise.



> [!NOTE]
> Some of the users in your organizations may have been selected for mandatory two-factor authentication enrollment by GitHub.com, but it has no impact on how you enable the 2FA requirement for the organizations in your enterprise. If you enable the 2FA requirement for organizations in your enterprise, outside collaborators without 2FA currently enabled will be removed from the organizations, including those that are required to enable it by GitHub.com.




1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Authentication security**.

1. Under "Two-factor authentication", review the information about changing the setting. Optionally, to view the current configuration for all organizations in the enterprise account before you change the setting, click **{% octicon "eye" aria-hidden="true" aria-label="eye" %} View your organizations' current configurations**.

   ![Screenshot of a policy in the enterprise settings. A link, labeled "View your organizations' current configurations", is outlined.](/assets/images/help/business-accounts/view-current-policy-implementation-link.png)

1. Under "Two-factor authentication", select **Require two-factor authentication for the enterprise and all of its organizations**, then click **Save**.
1. If prompted, read the information about how user access to organization resources will be affected by a 2FA requirement. To confirm the change, click **Confirm**.
1. Optionally, if any outside collaborators are removed from the organizations owned by your enterprise, we recommend sending them an invitation to reinstate their former privileges and access to your organization. Each person must enable 2FA before they can accept your invitation.



### Requiring secure methods of two-factor authentication for organizations in your enterprise

Alongside requiring two-factor authentication, enterprise owners can require that organization members, billing managers, and outside collaborators in all organizations owned by an enterprise use secure methods of 2FA. Secure two-factor methods are passkeys, security keys, authenticator apps, and the GitHub mobile app. Users who do not have a secure method of 2FA configured, or who have any insecure method configured, will be prevented from accessing resources within any organizations owned by an enterprise.  This policy is not available for enterprises with managed users.

Before you require secure methods of two-factor authentication, we recommend notifying organization members, outside collaborators, and billing managers and asking them to set up secure 2FA for their accounts. Organization owners can see if members and outside collaborators already use secure methods of 2FA on each organization's "People" page. For more information, see [Viewing Whether Users In Your Organization Have 2Fa Enabled](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/viewing-whether-users-in-your-organization-have-2fa-enabled).

1. Under "Two-factor authentication", select **Require two-factor authentication for the enterprise and all of its organizations** and **Only allow secure two-factor methods**, then click **Save**.

1. If prompted, read the information about how user access to organization resources will be affected by requiring secure 2FA methods. To confirm the change, click **Confirm**.

1. Optionally, if any outside collaborators are removed from the organizations owned by your enterprise, we recommend sending them an invitation to reinstate their former privileges and access to your organization. Each person must enable 2FA with a secure method before they can accept your invitation.



## Managing SSH certificate authorities for your enterprise

You can use a SSH certificate authority (CA) to allow members of any organization owned by your enterprise to access that organization's repositories using SSH certificates you provide. {% ifversion ghec %}If your enterprise uses Enterprise Managed Users, enterprise{% elsif ghes %}Enterprise members can also be allowed to use the certificate to access personally-owned repositories.{% endif %} You can require that members use SSH certificates to access organization resources, unless SSH is disabled in your repository.
 For more information, see [About SSH Certificate Authorities](https://docs.github.com/en/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities).

GitHub uses OpenSSH-format SSH user certificates to authenticate Git operations over SSH by validating the certificate's signature and fields (including its validity period) against a trusted SSH certificate authority (CA) configured at the organization and/or enterprise level.

When you issue each client certificate, you must include an extension that specifies which GitHub user the certificate is for. For more information, see [About SSH Certificate Authorities](https://docs.github.com/en/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities).


### Adding an SSH certificate authority

If you require SSH certificates for your enterprise, enterprise members should use a special URL for Git operations over SSH. For more information, see [About SSH Certificate Authorities](https://docs.github.com/en/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates).

 Each certificate authority can only be uploaded to one account on GitHub. If an SSH certificate authority has been added to an organization or enterprise account, you cannot add the same certificate authority to another organization or enterprise account on GitHub.

If you add one certificate authority to an enterprise and another certificate authority to an organization in the enterprise, either certificate authority can be used to access the organization's repositories.



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Authentication security**.

1. To the right of "SSH Certificate Authorities", click **New CA**.
1. Under "Key," paste your public SSH key.
1. Click **Add CA**.

1. Optionally, to require members to use SSH certificates, select **Require SSH Certificates**, then click **Save**.

   > [!NOTE]
   > When you require SSH certificates, users will not be able to authenticate to access the organization's repositories over HTTPS or with an unsigned SSH key.{% elsif ghec %}, regardless of whether the SSH key is authorized for an organization that requires authentication through an external identity system.
   >
   > The requirement does not apply to authorized GitHub Apps (including user-to-server tokens), deploy keys, or to GitHub features such as GitHub Actions and Codespaces, which are trusted environments within the GitHub ecosystem.




### Managing access to user-owned repositories

You can enable or disable access to user-owned repositories with an SSH certificate{% ifversion ghec %} if your enterprise uses managed user accounts. However, if your enterprise uses personal accounts on GitHub.com members cannot use the certificate to access personally-owned repositories.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Authentication security**.

1. Under "SSH Certificate Authorities", select the **Access User Owned Repository** checkbox.
{% endif %}

### Deleting an SSH certificate authority

Deleting an SSH certificate authority (CA) from your enterprise settings on GitHub can't be undone. If you want to trust the same CA again in the future, you'll need to add the CA back to GitHub by uploading the CA's public key again in your enterprise's SSH certificate authority settings.

Deleting a CA immediately prevents GitHub from accepting SSH certificates signed by that CA, including certificates that have not yet expired. For CA rotation guidance, see [About SSH Certificate Authorities](https://docs.github.com/en/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#certificate-revocation-and-ca-rotation).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Authentication security**.

1. Under "SSH Certificate Authorities", to the right of the CA you want to delete, click **Delete**.
1. Read the warning, then click **I understand, please delete this CA**.




## Upgrading an SSH certificate authority

CAs uploaded to your enterprise {% ifversion ghec %}prior to March 27th, 2024,{% elsif ghes %}before GitHub Enterprise Server version 3.13 allow the use of non-expiring certificates. To learn more about why expirations are now required for new CAs, see [About SSH Certificate Authorities](https://docs.github.com/en/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#issuing-certificates). You can upgrade an existing CA to prevent it from issuing non-expiring certificates. For best security, we strongly recommend upgrading all your CAs once you validate you're not reliant on non-expiring certificates.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Authentication security**.

1. Under "SSH Certificate Authorities", to the right of the CA you want to upgrade, click **Upgrade**.
1. Read the warning, then click **Upgrade**.

After upgrading the CA, non-expiring certificates signed by that CA will be rejected.
{% endif %}



## Managing SSO for unauthenticated users

> [!NOTE]
> Automatically redirecting users to sign in is currently in public preview for Enterprise Managed Users and subject to change.


If your enterprise uses Enterprise Managed Users, you can choose what unauthenticated users see when they attempt to access your enterprise's resources. For more information about Enterprise Managed Users, see [Enterprise Managed Users](https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users).

By default, to hide the existence of private resources, when an unauthenticated user attempts to access your enterprise, GitHub displays a 404 error.

To prevent confusion from your developers, you can change this behavior by enabling the "Automatically redirect users to sign in" setting so that users are automatically redirected to single sign-on (SSO) through your identity provider (IdP). When you enable this setting, anyone who visits the URL for any of your enterprise's resources will be able to see that the resource exists. However, they'll only be able to see the resource if they have appropriate access after authenticating with your IdP.

The configuration of this setting also affects Enterprise Managed Users who use Git Credential Manager (GCM). For more details, see the [`git-credential-manager` repository](https://github.com/git-ecosystem/git-credential-manager)

If "Automatically redirect users to sign in" is enabled, GitHub sends the server hints that let GCM automatically filter accounts for your enterprise members. If the setting is disabled, users who use GCM must turn off account filtering locally in GCM to avoid being prompted for authentication each time they perform a Git operation. For more details, see [Caching Your GitHub Credentials In Git](https://docs.github.com/en/get-started/git-basics/caching-your-github-credentials-in-git).

> [!NOTE]
> If a user is signed in to their personal account when they attempt to access any of your enterprise's resources, they'll be automatically signed out and redirected to SSO to sign in to their managed user account. For more information, see [Managing Multiple Accounts](https://docs.github.com/en/enterprise-cloud@latest/account-and-profile/how-tos/account-management/managing-multiple-accounts).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **Identity provider**.

1. Under **Identity Provider**, click **Single sign-on configuration**.

1. Under "Single sign-on settings", select or deselect **Automatically redirect users to sign in**.


## Further reading

* [About Saml For Enterprise Iam](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/about-saml-for-enterprise-iam)

* [Accessing Compliance Reports For Your Enterprise](https://docs.github.com/en/admin/overview/accessing-compliance-reports-for-your-enterprise)


* [Restricting Network Traffic To Your Enterprise With An Ip Allow List](https://docs.github.com/en/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)
