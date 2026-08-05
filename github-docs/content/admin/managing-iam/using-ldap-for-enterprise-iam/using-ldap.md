# Using LDAP

## About LDAP authentication for GitHub Enterprise Server

LDAP is a popular application protocol for access and maintenance of directory information services, and is one of the most common protocols for integration of third-party software with large company user directories. For more information, see [Lightweight Directory Access Protocol](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol) on Wikipedia.

If you use an LDAP directory for centralized authentication, you can configure LDAP authentication for the people who use your GitHub Enterprise Server instance.

> [!NOTE]
> You can use either SAML or LDAP, but not both.


If you want to allow authentication for some people who don't have an account on your external authentication provider, you can allow fallback authentication to local accounts on your GitHub Enterprise Server instance. For more information, see [Allowing Built In Authentication For Users Outside Your Provider](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/allowing-built-in-authentication-for-users-outside-your-provider).


## Supported LDAP services

GitHub Enterprise Server integrates with these LDAP services:

* Active Directory
* FreeIPA
* Oracle Directory Server Enterprise Edition
* OpenLDAP
* Open Directory
* 389-ds

## Username considerations with LDAP

GitHub normalizes a value from your IdP{% elsif ghes %}external authentication provider to determine the username for each new personal account in your enterprise on GitHub{% elsif ghes %}on your GitHub Enterprise Server instance.
 For more information, see [Username Considerations For External Authentication](https://docs.github.com/en/admin/managing-iam/iam-configuration-reference/username-considerations-for-external-authentication).

## Configuring LDAP with your GitHub Enterprise Server instance

After you configure LDAP, users will be able to sign into your instance with their LDAP credentials. When users sign in for the first time, their profile names, email addresses, and SSH keys will be set with the LDAP attributes from your directory.

When you configure LDAP access for users via the Management Console, your user licenses aren't used until the first time a user signs in to your instance. However, if you create an account manually using site admin settings, the user license is immediately accounted for.

> [!WARNING]
> Before configuring LDAP on your GitHub Enterprise Server instance, make sure that your LDAP service supports paged results.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings" sidebar, click **Authentication**.


1. Under "Authentication", select **LDAP**.
1. Optionally, to allow people without an account on your external authentication system to sign in with built-in authentication, select **Allow built-in authentication**. For more information, see [Allowing Built In Authentication For Users Outside Your Provider](https://docs.github.com/en/admin/managing-iam/understanding-iam-for-enterprises/allowing-built-in-authentication-for-users-outside-your-provider).

1. Add your configuration settings.

## LDAP attributes

Use these attributes to finish configuring LDAP for your GitHub Enterprise Server instance.

| Attribute name           | Required     | Description |
|--------------------------|----------|-------------|
| `Host`                   | {% octicon "check" aria-label="Required" %} | The LDAP host, e.g. `ldap.example.com` or `10.0.0.30`. If the hostname is only available from your internal network, you may need to configure your GitHub Enterprise Server instance's DNS first so it can resolve the hostname using your internal nameservers. |
| `Port`                   | {% octicon "check" aria-label="Required" %} | The port the host's LDAP services are listening on. Examples include: 389 and 636 (for LDAPS). |
| `Encryption`             | {% octicon "check" aria-label="Required" %} | The encryption method used to secure communications to the LDAP server. Examples include plain (no encryption), SSL/LDAPS (encrypted from the start), and StartTLS (upgrade to encrypted communication once connected). |
| `Domain search user`     | {% octicon "x" aria-label="Optional" %} | The LDAP user that looks up other users that sign in, to allow authentication. This is typically a service account created specifically for third-party integrations. Use a fully qualified name, such as `cn=Administrator,cn=Users,dc=Example,dc=com`. With Active Directory, you can also use the `[DOMAIN]\[USERNAME]` syntax (e.g. `WINDOWS\Administrator`) for the domain search user with Active Directory. |
| `Domain search password` | {% octicon "x" aria-label="Optional" %} | The password for the domain search user. |
| `Administrators group`   | {% octicon "x" aria-label="Optional" %} | Users in this group are promoted to site administrators when signing into your appliance. If you don't configure an LDAP Administrators group, the first LDAP user account that signs into your appliance will be automatically promoted to a site administrator. |
| `Domain base`            | {% octicon "check" aria-label="Required" %} | The fully qualified `Distinguished Name` (DN) of an LDAP subtree you want to search for users and groups. Each group must be defined in the same domain base as the users that belong to it. If you specify restricted user groups, only users that belong to those groups will be in scope. We recommend that you specify the top level of your LDAP directory tree as your domain base and use restricted user groups to control access. You can configure multiple domain bases. However, GitHub Enterprise Server searches for users and group membership against each configured domain base sequentially, so configuring multiple domain bases can increase the number of LDAP queries that are performed. To ensure the performance and stability of your instance, we recommend that you configure no more than three domain bases. |
| `Restricted user groups` | {% octicon "x" aria-label="Optional" %} | If specified, only users in these groups will be allowed to log in. You only need to specify the common names (CNs) of the groups. If no groups are specified, _all_ users within the scope of the specified domain base will be able to sign in to your GitHub Enterprise Server instance. You can configure multiple restricted user groups. However, each group increases the number of group membership LDAP queries that GitHub Enterprise Server performs for each user. To prevent authentication timeouts and sync performance issues, we recommend that you configure no more than three groups. |
| `User ID`                | {% octicon "check" aria-label="Required" %} | The LDAP attribute that identifies the LDAP user who attempts authentication. Once a mapping is established, users may change their GitHub Enterprise Server usernames. This field should be `sAMAccountName` for most Active Directory installations, but it may be `uid` for other LDAP solutions, such as OpenLDAP. The default value is `uid`. |
| `Profile name`           | {% octicon "x" aria-label="Optional" %} | The name that will appear on the user's GitHub Enterprise Server profile page. Unless LDAP Sync is enabled, users may change their profile names. |
| `Emails`                 | {% octicon "x" aria-label="Optional" %} | The email addresses for a user's GitHub Enterprise Server account. |
| `SSH keys`               | {% octicon "x" aria-label="Optional" %} | The public SSH keys attached to a user's GitHub Enterprise Server account. The keys must be in OpenSSH format. |
| `GPG keys`               | {% octicon "x" aria-label="Optional" %} | The GPG keys attached to a user's GitHub Enterprise Server account. |
| `Disable LDAP authentication for Git operations` | {% octicon "x" aria-label="Optional" %} |If selected, [turns off](#disabling-password-authentication-for-git-operations) users' ability to use LDAP passwords to authenticate Git operations. |
| `Enable LDAP certificate verification` | {% octicon "x" aria-label="Optional" %} |If selected, [turns on](#enabling-ldap-certificate-verification) LDAP certificate verification. |
| `Synchronization` | {% octicon "x" aria-label="Optional" %} | If selected, [turns on](#enabling-ldap-sync) LDAP Sync. |

## Disabling password authentication for Git operations

To enforce use of personal access tokens or SSH keys for Git access, which can help prevent your server from being overloaded by LDAP authentication requests, you can disable password authentication for Git operations.

We recommend this setting because a slow-responding LDAP server, especially combined with a large number of requests due to polling, is a frequent source of performance issues and outages.

To disable password authentication for Git operations, select **Disable username and password authentication for Git operations** in your LDAP settings.

When this option is selected, if a user tries to use a password for Git operations via the command line, they will receive an error message that says, `Password authentication is not allowed for Git operations. You must use a personal access token.`

## Enabling LDAP certificate verification

You can validate the LDAP server certificate you use with TLS by enabling LDAP certificate verification.

To enable LDAP certificate verification, select **Enable LDAP certificate verification** in your LDAP settings.

When this option is selected, the certificate is validated to make sure:

* If the certificate contains at least one Subject Alternative Name (SAN), one of the SANs matches the LDAP hostname. Otherwise, the Common Name (CN) matches the LDAP hostname.
* The certificate is not expired.
* The certificate is signed by a trusted certificate authority (CA).

## Enabling LDAP Sync

You can establish role-based access control for users from your LDAP server by synchronizing GitHub Enterprise Server users and team membership against your established LDAP groups. For more information, see [Creating A Team](https://docs.github.com/en/organizations/organizing-members-into-teams/creating-a-team#creating-teams-with-ldap-sync-enabled).

LDAP sync does not create user accounts on your GitHub Enterprise Server instance. For more information, see [Viewing and creating LDAP users](#viewing-and-creating-ldap-users).

> [!NOTE]
> Using LDAP Synchronization with groups that exceed 1499 members may lead to team membership synchronization failures.
>
> If you use Active Directory specifically, user lookups and team synchronization may fail when the LDAP groups configured for teams or in the Management Console exceed 1500 members, due to the `MaxValRange` limit in Active Directory. As a workaround, you can use Active Directory groups that contain less than 1500 members, or you can work with your Active Directory administrator to increase the `MaxValRange` value for your domain controllers. For more information, see [View and set LDAP policy in Active Directory by using Ntdsutil.exe](https://learn.microsoft.com/en-US/troubleshoot/windows-server/identity/view-set-ldap-policy-using-ntdsutil) in Microsoft Learn.
>
> If you need help determining if modifying the `MaxValRange` is the right approach for your Active Directory environment, contact Microsoft Support.

To enable LDAP Sync, in your LDAP settings, select **Synchronization**.

To pick a synchronization interval for all users and all teams, click the dropdown menus. Then select **every 1 hour**, **every 4 hours**, or **every 24 hours**.

To automatically synchronize certain attributes from LDAP, under "Synchronize User Emails, SSH & GPG Keys," click **Synchronize Emails**, **Synchronize SSH Keys**, and/or **Synchronize GPG Keys**.

After you enable LDAP sync, a synchronization job will run at the specified time interval to perform the following operations on each user account:

* If you've allowed built-in authentication for users outside your identity provider, and the user is using built-in authentication, move on to the next user.
* If no LDAP mapping exists for the user, try to map the user to an LDAP entry in the directory. If the user cannot be mapped to an LDAP entry, suspend the user and move on to the next user.
* If there is an LDAP mapping and the corresponding LDAP entry in the directory is missing, suspend the user and move on to the next user.
* If the corresponding LDAP entry has been marked as disabled and the user is not already suspended, suspend the user and move on to the next user.
* If the corresponding LDAP entry is not marked as disabled, and the user is suspended, and _Reactivate suspended users_ is enabled in the Admin Center, unsuspend the user.
* If one or more restricted user groups are configured on the instance and the corresponding LDAP entry is not in one of these groups, suspend the user.
* If one or more restricted user groups are configured on the instance, the corresponding LDAP entry is in one of these groups, and _Reactivate suspended users_ is enabled in the Admin Center, unsuspend the user.
* If the corresponding LDAP entry includes a `name` attribute, update the user's profile name.
* If the corresponding LDAP entry is in the Administrators group, promote the user to site administrator.
* If the corresponding LDAP entry is not in the Administrators group, demote the user to a normal account, unless the account is suspended. Suspended administrators will not be demoted and will remain listed on the "Site admins" and "Enterprise owners" pages.
* If an LDAP User field is defined for emails, synchronize the user's email settings with the LDAP entry. Set the first LDAP `mail` entry as the primary email.
* If an LDAP User field is defined for SSH public keys, synchronize the user's public SSH keys with the LDAP entry.
* If an LDAP User field is defined for GPG keys, synchronize the user's GPG keys with the LDAP entry.

> [!NOTE]
> LDAP entries can only be marked as disabled if you use Active Directory and the `userAccountControl` attribute is present and flagged with `ACCOUNTDISABLE`. Some variations of Active Directory, such as AD LDS and ADAM, don't support the `userAccountControl` attribute.

A synchronization job will also run at the specified time interval to perform the following operations on each team that has been mapped to an LDAP group:

* If a team's corresponding LDAP group has been removed, remove all members from the team.
* If LDAP member entries have been removed from the LDAP group, remove the corresponding users from the team. If the user is no longer a member of any team in the organization and is not an owner of the organization, remove the user from the organization. If the user loses access to any repositories as a result, delete any private forks the user has of those repositories.

  > [!NOTE]
  > LDAP Sync will not remove a user from an organization if the user is an owner of that organization. Another organization owner will need to manually remove the user instead.

* If LDAP member entries have been added to the LDAP group, add the corresponding users to the team. If the user regains access to any repositories as a result, restore any private forks of the repositories that were deleted because the user lost access in the past 90 days.


As part of its optimization configuration, LDAP Sync will not transfer your nested team structure. To create child and parent team relationships, you must manually recreate the nested team structure and sync it with the corresponding LDAP group. For more information, see [Creating A Team](https://docs.github.com/en/organizations/organizing-members-into-teams/creating-a-team#creating-teams-with-ldap-sync-enabled)



> [!WARNING]
> When LDAP Sync is enabled, site admins and organization owners can search the LDAP directory for groups to map the team to.
>
> This has the potential to disclose sensitive organizational information to contractors or other unprivileged users, including:
>
> * The existence of specific LDAP Groups visible to the _Domain search user_.
> * Members of the LDAP group who have GitHub Enterprise Server user accounts, which is disclosed when creating a team synced with that LDAP group.
>
> If disclosing such information is not desired, your company or organization should restrict the permissions of the configured _Domain search user_ in the admin console. If such restriction isn't possible, contact us by visiting [GitHub Enterprise Support](https://support.github.com).

## Supported LDAP group object classes

GitHub Enterprise Server supports these LDAP group object classes. Groups can be nested.

* `group`
* `groupOfNames`
* `groupOfUniqueNames`
* `posixGroup`

## Viewing and creating LDAP users

When you use LDAP, your instance creates a user account the first time someone successfully signs in using LDAP credentials. Alternatively, you can manually provision a user account.

You can view the full list of LDAP users who have access to your instance and provision new users.

1. Sign in to your GitHub Enterprise Server instance at `http(s)://HOSTNAME/login`.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.


1. In the left sidebar, click **LDAP users**.
1. To search for a user, type a full or partial username and click **Search**. Existing users will be displayed in search results. If a user doesn’t exist, click **Create** to provision the new user account.

## Updating LDAP accounts

Unless [LDAP Sync is enabled](#enabling-ldap-sync), changes to LDAP accounts are not automatically synchronized with GitHub Enterprise Server.

* To use a new LDAP admin group, users must be manually promoted and demoted on GitHub Enterprise Server to reflect changes in LDAP.
* To add or remove LDAP accounts in LDAP admin groups, [promote or demote the accounts on GitHub Enterprise Server](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator).
* To remove LDAP accounts, [suspend the GitHub Enterprise Server accounts](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/suspending-and-unsuspending-users).

## Manually syncing LDAP accounts

1. Sign in to your GitHub Enterprise Server instance at `http(s)://HOSTNAME/login`.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. Under "Search users, organizations, teams, repositories, gists, and applications", type the name of the user in the text field.
1. To the right of text field, click **Search**.
   ![Screenshot of the "Search" page of the "Site admin" settings. The button to search users, labeled "Search," is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/search-for-things.png)
   * If an exact account name match isn't found, under "Search results – Accounts", in the "Fuzzy matches" section, click the name of the user you want to manage.
   ![Screenshot of search results in the "Site admin" settings. In the "Fuzzy matches" section, an example user name is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/click-user.png)

1. Review the user details in the site admin page to confirm you have identified the correct user.
   ![Screenshot of the Site admin account overview page.](/assets/images/enterprise/site-admin-settings/site-admin-account-overview.png)

1. In the upper-right corner of the page, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Admin**.
![Screenshot of the header of the "Site admin" page for a user or repository. The "Admin" tab is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/user/user-admin-tab-top.png)


1. Under "LDAP," click **Sync now** to manually update the account with data from your LDAP server.

You can also [use the API to trigger a manual sync](/rest/enterprise-admin/ldap).

## Revoking access to your GitHub Enterprise Server instance

If [LDAP Sync is enabled](#enabling-ldap-sync), removing a user's LDAP credentials will suspend their account after the next synchronization run.

If LDAP Sync is **not** enabled, you must manually suspend the GitHub Enterprise Server account after you remove the LDAP credentials. For more information, see [Suspending And Unsuspending Users](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/suspending-and-unsuspending-users).

## About logging for LDAP

Log events for LDAP appear in systemd journal logs on your GitHub Enterprise Server instance. You'll find events related to LDAP operations in the logs for `github-unicorn` and `github-resqued`. For more information, see [About System Logs](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-system-logs#journal-logs-for-the-github-application).

## Limitations for LDAP on GitHub Enterprise Server

The GitHub Enterprise Server LDAP authentication timeout setting is 10 seconds. This means that all LDAP queries required for user authentication and group membership queries (when Administrators and Restricted User Groups are configured in the management console) must successfully complete within 10 seconds for an LDAP user who is logging into GitHub Enterprise Server. GitHub Enterprise Server does not currently support extending this 10 second LDAP authentication timeout as this can have a negative impact on other services on the appliance and lead to poor performance or unexpected outages. We recommend limiting the network latency between GitHub Enterprise Server and LDAP server(s) to help prevent authentication timeouts.

GitHub Enterprise Server does not support user LDAP DNs with special characters. If there is an LDAP user with a special character in their LDAP DN, GitHub Enterprise Server may not be able to accurately determine the group membership of a user who is authenticating or being synced by LDAP Sync.

## Migrating from LDAP to SAML and SCIM

If your organization needs automated user provisioning and lifecycle management capabilities beyond what LDAP provides, you can migrate from LDAP authentication to SAML single sign-on with SCIM provisioning. This migration enables centralized user provisioning, deprovisioning, and attribute synchronization from your identity provider.

For more information, see [Migrating From Ldap To Saml With Scim](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/migrating-from-ldap-to-saml-with-scim).
