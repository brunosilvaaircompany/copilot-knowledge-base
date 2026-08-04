# Restricting network traffic to your enterprise with an IP allow list

## About network traffic restrictions

By default, authorized users can access your enterprise's resources from any IP address. You can restrict access to your enterprise's private resources by configuring a list that allows or denies access from specific IP addresses. For example, you can allow access to the private resources exclusively from the IP address of your office network.

Once you configure a GitHub IP allow list, the list determines whether users or apps can access protected resources through the web UI, APIs, or Git when they use any of the following authentication methods. 

**Interactive (web) authentication:**
* User authentication, including GitHub authentication, SAML, and OIDC authentication

**Non-interactive authentication:**
* Personal access token
* OAuth app tokens
* SSH keys (including deploy keys and SSH keys used by GitHub Apps
* GitHub App user-to-server or installation tokens, including the GitHub Actions`GITHUB_TOKEN`

  > [!NOTE]
  > IP allow lists don't currently restrict access when a GitHub App is installed on a user account and uses server-to-server installation tokens to access an organization or enterprise.

The IP allow list applies to users with any role or access, including enterprise and organization owners, repository administrators, and external collaborators.


> [!NOTE]
> If your enterprise uses Enterprise Managed Users, enabling the IP allow list does not restrict user provisioning actions performed through SAML/SCIM, OpenID Connect (OIDC) with Entra ID, or via REST API endpoints. For more information, see [Provisioning User Accounts With Scim](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim).

If your enterprise uses Enterprise Managed Users with Microsoft Entra ID (previously known as Azure AD) and OIDC, you can choose whether to use GitHub's IP allow list feature or to use the allow list restrictions for your identity provider (IdP). If your enterprise does not use Enterprise Managed Users with Azure and OIDC, you can use GitHub's allow list feature.

## Which resources are protected?

IP allow lists **do** restrict access to:

* Organization-owned repositories
* Private and internal repositories
* Public resources, when a user is signed into GitHub (including non-interactive authentication methods such as:
  * Personal access token
  * OAuth app tokens
  * SSH keys, including deploy keys
  * GitHub App user-to-server or installation tokens, including the GitHub Actions`GITHUB_TOKEN`
    > [!NOTE]
    > Excluding installation tokens used by a GitHub App which is installed on a user account.
* Raw URLs for files in repositories, such as `https://raw.githubusercontent.com/octo-org/octo-repo/main/README.md?token=ABC10001`
* Repositories, including forks, owned by managed user accounts, when enabled

IP allow lists do **not** restrict access to:

* Public resources, when accessed anonymously
* A GitHub App (server-to-server) installation token when the GitHub App is installed on a user account.
* GitHub Copilot features that do not require directly fetching private or organizational data from GitHub
* Anonymized URLs for images and videos uploaded to issues or pull requests, such as `https://private-user-images.githubusercontent.com/10001/20002.png?jwt=ABC10001`, unless you use GitHub Enterprise Cloud with data residency


## About GitHub's IP allow list

You can use GitHub's IP allow list to control access to your enterprise and assets owned by organizations in your enterprise.

You can approve access for a single IP address, or a range of addresses, using CIDR notation. For more information, see [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation) on Wikipedia.


To enforce the IP allow list, you must first add IP addresses to the list, then enable the IP allow list. After you complete your list, you can check whether a particular IP address would be allowed by any of the enabled entries in the list.

You must add your current IP address, or a matching range, before you enable the IP allow list.
 When you enable the allow list, the IP addresses you have configured are immediately added to the allow lists of organizations in your enterprise. If you disable the allow list, the addresses are removed from the organization allow lists.

Organization owners can add additional entries to the allow list for their organizations, but they cannot manage entries that are inherited from the enterprise account's allow list, and enterprise owners cannot manage entries added to the organization's allow list.
 For more information, see [Managing Allowed Ip Addresses For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization).

You can choose to automatically add to your allow list any IP addresses configured for GitHub Apps installed in your enterprise. The creator of a GitHub App can configure an allow list for their application, specifying the IP addresses at which the application runs. By inheriting their allow list into yours, you avoid connection requests from the application being refused. For more information, see [Allowing access by GitHub Apps](#allowing-access-by-github-apps).


## About your IdP's allow list

If you are using Enterprise Managed Users with Entra ID and OIDC, you can use your IdP's allow list.

Using your IdP's allow list deactivates the GitHub IP allow list configurations for all organizations in your enterprise and deactivates the GraphQL APIs for enabling and managing IP allow lists.

By default, your IdP runs the CAP on the initial interactive SAML or OIDC sign-in to GitHub for any IP allow list configuration you choose.

The OIDC CAP applies to web requests and requests to the API using a user token, such as an OAuth token for an OAuth app or a user access token for a GitHub App acting on behalf of a user. The OIDC CAP does not apply when a GitHub App uses an installation access token. See [About Authentication With A GitHub App](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/about-authentication-with-a-github-app) and [About Support For Your Idps Conditional Access Policy](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/configuring-authentication-for-enterprise-managed-users/about-support-for-your-idps-conditional-access-policy#github-apps-and-oauth-apps).

>[!NOTE] CAP protection for web sessions is currently in public preview and may change.
>
> If IdP CAP support is already enabled for your enterprise, you can opt into extended protection for web sessions from your enterprise's "Authentication security" settings.
> When web session protection is enabled and a user's IP conditions are not satisfied, they can view and filter all user-owned resources but cannot view the details of the results for notifications, searches, personal dashboards, or starred repositories.


To ensure seamless use of the OIDC CAP while still applying the policy to OAuth tokens and user access tokens, you must copy all of the IP ranges from each GitHub App that your enterprise uses to your IdP policy.

## Using GitHub's IP allow list

### Enabling GitHub's IP allow list


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Authentication security**.

1. If you're using Enterprise Managed Users with OIDC, under "IP allow list," select the **IP allow list configuration** dropdown menu and click **GitHub**.
1. Under "IP allow list," select **Enable IP allow list**.
1. Click **Save**.

### Adding an allowed IP address

You can create an IP allow list by adding entries that each contain an IP address or address range. After you finish adding entries, you can check whether a particular IP address would be allowed by any of the enabled entries in your list.

Before the list restricts access to private assets owned by organizations in your enterprise, you must also enable allowed IP addresses.




> [!NOTE]
> GitHub is gradually rolling out support for IPv6. As GitHub services continue to add IPv6 support, we will start recognizing IPv6 addresses of GitHub users. To prevent possible access interruptions, please ensure you have added any necessary IPv6 addresses to your IP allow list.



> [!NOTE]
> Due to caching, adding or removing IP addresses can take a few minutes to fully take effect.



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Authentication security**.

1. At the bottom of the "IP allow list" section, in the "IP address or range in CIDR notation" field, type an IP address, or a range of addresses in CIDR notation.

   ![Screenshot of the IP allow list settings. A text field, labeled "IP address or range in CIDR notation", is highlighted with an orange outline.](/assets/images/help/security/ip-address-field.png)

1. Optionally, in the "Short description of IP address or range" field, enter a description of the allowed IP address or range.

1. Click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add**.

1. Optionally, check if a particular IP address would be allowed by any of the enabled entries in your list. For more information, see [Checking if an IP address is permitted](#checking-if-an-ip-address-is-permitted).


### Allowing access by GitHub Apps

If you're using an allow list, you can also choose to automatically add to your allow list any IP addresses configured for GitHub Apps that are installed in your enterprise.

If you select **Enable IP allow list configuration for installed GitHub Apps** in your allow list settings, then IP addresses from installed GitHub Apps are added to your allow list. This happens irrespective of whether your allow list is currently enabled. If you install a GitHub App and then the creator of that application changes the addresses in its allow list, your allow list is automatically updated with those changes.

You can identify the IP addresses that have been automatically added from GitHub Apps by reviewing the description field. The description for these IP addresses is: "Managed by the NAME GitHub App." Unlike addresses you add manually, you cannot edit, delete, or disable IP addresses that are automatically added from GitHub Apps.


> [!NOTE]
> The addresses in the IP allow list of a GitHub App only affect requests made by installations of the GitHub App. The automatic addition of a GitHub App's IP address to an organization's allow list does not allow access to a GitHub user who connects from that IP address.


For more information about how to create an allow list for a GitHub App you have created, see [Managing Allowed Ip Addresses For A GitHub App](https://docs.github.com/en/apps/maintaining-github-apps/managing-allowed-ip-addresses-for-a-github-app).

To enable automatic addition of IP addresses for GitHub Apps:


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Authentication security**.

1. Under "IP allow list", select **Enable IP allow list configuration for installed GitHub Apps**.

   > [!NOTE]
   > If you're using Enterprise Managed Users with OIDC, you can only allow access by GitHub Apps if you use GitHub for your IP allow list configuration.

1. Click **Save**.


### Editing an allowed IP address

You can edit an entry in your IP allow list. If you edit an enabled entry, changes are enforced immediately.

After you finish editing entries, you can check whether your allow list will permit a connection from a particular IP address after you enable the list.



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Authentication security**.

1. Under "IP allow list", next to the entry you want to edit, click **Edit**.

1. In the "IP address" field, type an IP address, or range of addresses, in CIDR notation.

1. In the "Description" field, type a description of the allowed IP address or range.

1. Click **Update**.
1. Optionally, check if a particular IP address would be allowed by any of the enabled entries in your list. For more information, see [Checking if an IP address is permitted](#checking-if-an-ip-address-is-permitted).


### Checking if an IP address is permitted

You can check whether a particular IP address would be allowed by any of the enabled entries in your IP allow list, even if the list is not currently enabled.



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Authentication security**.

1. At the end of the "IP allow list" section, under "Check IP address", enter an IP address.
   ![Screenshot of the "Check IP address" text field.](/assets/images/help/security/check-ip-address.png)


### Deleting an allowed IP address

> [!NOTE]
> Due to caching, adding or removing IP addresses can take a few minutes to fully take effect.



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Authentication security**.

1. Under "IP allow list", next to the entry you want to delete, click **Delete**.

1. To permanently delete the entry, click **Yes, delete this IP allow list entry**.


## Using your identity provider's allow list

> [!NOTE]
> Using your IdP's allow list is only supported for Enterprise Managed Users with Entra ID and OIDC.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Authentication security**.

1. Under "IP allow list," select the **IP allow list configuration** dropdown menu and click **Identity Provider**.
1. Optionally, to allow installed GitHub and OAuth apps to access your enterprise from any IP address, select **Skip IdP check for applications**.
1. Click **Save**.

## Restricting access to user-owned resources with the IP allow list

> [!NOTE]
> User-level IP allow list enforcement is only available for enterprises that use Enterprise Managed Users.

By default, your enterprise's IP allow list does not restrict access to repositories and other resources owned by managed user accounts. You can enable user-level enforcement to extend IP allow list restrictions to user-owned resources, including:

* User-owned repositories and their forks
* User profile pages

This ensures that all locations where enterprise code may reside—not just organization-owned repositories—are only accessible from allowed IP addresses.

### Enabling user-level enforcement


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Authentication security**.

1. Under "IP allow list", select **Enable IP allow list user-level enforcement**.
1. Click **Save**.

> [!IMPORTANT]
> Before enabling user-level enforcement, add all IP addresses that your managed user accounts use to connect to the enterprise IP allow list. If a user connects from an IP address that isn’t on the allow list, they won’t be able to access their user-owned resources.

### Disabling user-level enforcement

To stop enforcing the IP allow list on user-owned resources, follow the same steps above and deselect **Enable IP allow list user-level enforcement**, then click **Save**. Access to user-owned resources will no longer be restricted by the IP allow list.

## Using GitHub Actions with an IP allow list

> [!WARNING]
> If you use an IP allow list and would also like to use GitHub Actions, you must use self-hosted runners or GitHub-hosted larger runners with static IP address ranges. When using [Azure private networking](/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/about-azure-private-networking-for-github-hosted-runners-in-your-enterprise), IPs from your Azure subnet must be used. To reduce the number of required IPs, we recommend creating a load balancer to provide a single IP range for the GitHub allow list. For more information, see [Self Hosted Runners](https://docs.github.com/en/actions/reference/runners/self-hosted-runners)  or [Larger Runners](https://docs.github.com/en/actions/concepts/runners/larger-runners).

To allow your self-hosted or larger hosted runners to communicate with GitHub, add the IP address or IP address range of your runners to the IP allow list that you have configured for your enterprise.


## Using GitHub Pages with an IP allow list

If you use a custom GitHub Actions workflow as a publishing source for your GitHub Pages site, to permit the runner to connect and build the site, you must configure a rule for your IP allow list.

If you don't use a custom workflow, the build runner will have access to the repository for the GitHub Pages site by default. For more information about publishing sources, see [Configuring a publishing source for your GitHub Pages site](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).


## Using Dependabot with an IP allow list

Dependabot is a first-party GitHub App whose repository access is exempt from IP allow list restrictions. This means Dependabot can read dependency files and create pull requests regardless of your IP allow list configuration.

If Dependabot jobs running on GitHub Actions runners need to reach external resources that require predictable IP addresses (for example, private package registries behind a firewall), you should set up a self-hosted runner or configure larger runners with a static IP address range. See [Self Hosted Runners](https://docs.github.com/en/actions/concepts/runners/self-hosted-runners) and [Dependabot On Actions](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-on-actions).

Additionally, to learn more about configuring larger runners with a static IP address range, see [Larger Runners](https://docs.github.com/en/actions/concepts/runners/larger-runners).

To allow your self-hosted runners or larger runners to communicate with GitHub, add the IP address or IP address range of your runners to the IP allow list that you have configured for your enterprise.
