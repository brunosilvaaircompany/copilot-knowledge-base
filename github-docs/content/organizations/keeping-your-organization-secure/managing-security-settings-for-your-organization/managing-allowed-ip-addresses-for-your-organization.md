# Managing allowed IP addresses for your organization

## About allowed IP addresses

By default, authorized users can access your organization's resources from any IP address. You can restrict access to your organization's private resources by configuring a list that allows or denies access from specific IP addresses. For example, you can allow access to the private resources exclusively from the IP address of your office network.

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


You can approve access for a single IP address, or a range of addresses, using CIDR notation. For more information, see [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation) on Wikipedia.


> [!NOTE]
> * Only organizations that use GitHub Enterprise Cloud can use IP allow lists. For more information about how you can try GitHub Enterprise Cloud for free, see [Setting up a trial of GitHub Enterprise Cloud](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).

> * If you configure an IP allow list for your organization you won't be able to use GitHub Codespaces for repositories owned by the organization.

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


## About IP allow list management

To enforce the IP allow list, you must first add IP addresses to the list, then enable the IP allow list. After you complete your list, you can check whether a particular IP address would be allowed by any of the enabled entries in the list.

You must add your current IP address, or a matching range, before you enable the IP allow list.


If you set up an allow list you can also choose to automatically add to your allow list any IP addresses configured for GitHub Apps that you install in your organization. The creator of a GitHub App can configure an allow list for their application, specifying the IP addresses at which the application runs. By inheriting their allow list into yours, you avoid connection requests from the application being refused. For more information, see [Allowing access by GitHub Apps](#allowing-access-by-github-apps).

You can also configure allowed IP addresses at the enterprise account level, and the entries in the enterprise account's allow list are inherited by all the organizations owned by the enterprise. Organization owners can add additional entries to the allow list for their organizations, but they cannot manage entries that are inherited from the enterprise account's allow list, and enterprise owners cannot manage entries added to the organization's allow list.
 For more information, see [Restricting Network Traffic To Your Enterprise With An Ip Allow List](https://docs.github.com/en/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list#about-githubs-ip-allow-list).

> [!WARNING]
> Losing access to the IP addresses in your IP allow list could result in unintended consequences, such as getting locked out of your enterprise or organization.

As a best practice, to ensure both secure and reliable access to your enterprise and organization resources when creating an IP allow list, consider the following:

* Maintaining more than one owner of the enterprise account or organization that the IP allow list will be enforced for.
* Using CIDR notation to specify a range of IP addresses that will include dynamically assigned addresses, to minimize the number of allow list entries.
* Including a static network in your allowed IP addresses, for backup access in case of problems.

## Adding an allowed IP address

You can create an IP allow list by adding entries that each contain an IP address or address range. After you finish adding entries, you can check whether a particular IP address would be allowed by any of the enabled entries in your list.

Before the list restricts access to private assets owned by organizations in your enterprise, you must also enable allowed IP addresses.




> [!NOTE]
> GitHub is gradually rolling out support for IPv6. As GitHub services continue to add IPv6 support, we will start recognizing IPv6 addresses of GitHub users. To prevent possible access interruptions, please ensure you have added any necessary IPv6 addresses to your IP allow list.



> [!NOTE]
> Due to caching, adding or removing IP addresses can take a few minutes to fully take effect.


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Authentication security**.

1. At the bottom of the "IP allow list" section, in the "IP address or range in CIDR notation" field, type an IP address, or a range of addresses in CIDR notation.

   ![Screenshot of the IP allow list settings. A text field, labeled "IP address or range in CIDR notation", is highlighted with an orange outline.](/assets/images/help/security/ip-address-field.png)

1. Optionally, in the "Short description of IP address or range" field, enter a description of the allowed IP address or range.

1. Click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add**.

1. Optionally, check if a particular IP address would be allowed by any of the enabled entries in your list. For more information, see [Checking if an IP address is permitted](#checking-if-an-ip-address-is-permitted).


## Enabling allowed IP addresses

After you create an IP allow list, you can enable allowed IP addresses. When you enable allowed IP addresses, GitHub immediately enforces any enabled entries in your IP allow list.



> [!NOTE]
> After you enable an IP allow list for your organization you won't be able to use GitHub Codespaces for repositories owned by the organization.



Before you enable your IP allow list, you can check whether your allow list will permit a connection from a particular IP address. For more information, see [Checking if an IP address is permitted](#checking-if-an-ip-address-is-permitted).


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Authentication security**.

1. Under "IP allow list", select **Enable IP allow list**.
1. Click **Save**.

## Allowing access by GitHub Apps

If you're using an allow list, you can also choose to automatically add to your allow list any IP addresses configured for GitHub Apps that you install in your organization.

If you select **Enable IP allow list configuration for installed GitHub Apps** in your allow list settings, then IP addresses from installed GitHub Apps are added to your allow list. This happens irrespective of whether your allow list is currently enabled. If you install a GitHub App and then the creator of that application changes the addresses in its allow list, your allow list is automatically updated with those changes.

You can identify the IP addresses that have been automatically added from GitHub Apps by reviewing the description field. The description for these IP addresses is: "Managed by the NAME GitHub App." Unlike addresses you add manually, you cannot edit, delete, or disable IP addresses that are automatically added from GitHub Apps.


> [!NOTE]
> The addresses in the IP allow list of a GitHub App only affect requests made by installations of the GitHub App. The automatic addition of a GitHub App's IP address to an organization's allow list does not allow access to a GitHub user who connects from that IP address.


For more information about how to create an allow list for a GitHub App you have created, see [Managing Allowed Ip Addresses For A GitHub App](https://docs.github.com/en/apps/maintaining-github-apps/managing-allowed-ip-addresses-for-a-github-app).

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Authentication security**.

1. Under "IP allow list", select **Enable IP allow list configuration for installed GitHub Apps**.
1. Click **Save**.

## Editing an allowed IP address

You can edit an entry in your IP allow list. If you edit an enabled entry, changes are enforced immediately.

After you finish editing entries, you can check whether your allow list will permit a connection from a particular IP address after you enable the list.


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Authentication security**.

1. Under "IP allow list", next to the entry you want to edit, click **Edit**.

1. In the "IP address" field, type an IP address, or range of addresses, in CIDR notation.

1. In the "Description" field, type a description of the allowed IP address or range.

1. Click **Update**.
1. Optionally, check if a particular IP address would be allowed by any of the enabled entries in your list. For more information, see [Checking if an IP address is permitted](#checking-if-an-ip-address-is-permitted).


## Checking if an IP address is permitted

You can check whether a particular IP address would be allowed by any of the enabled entries in your IP allow list, even if the list is not currently enabled.


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Authentication security**.

1. At the end of the "IP allow list" section, under "Check IP address", enter an IP address.
   ![Screenshot of the "Check IP address" text field.](/assets/images/help/security/check-ip-address.png)


## Deleting an allowed IP address

> [!NOTE]
> Due to caching, adding or removing IP addresses can take a few minutes to fully take effect.


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Authentication security**.

1. Under "IP allow list", next to the entry you want to delete, click **Delete**.

1. To permanently delete the entry, click **Yes, delete this IP allow list entry**.


## Using GitHub Actions with an IP allow list

> [!WARNING]
> If you use an IP allow list and would also like to use GitHub Actions, you must use self-hosted runners or GitHub-hosted larger runners with static IP address ranges. When using [Azure private networking](/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/about-azure-private-networking-for-github-hosted-runners-in-your-enterprise), IPs from your Azure subnet must be used. To reduce the number of required IPs, we recommend creating a load balancer to provide a single IP range for the GitHub allow list. For more information, see [Self Hosted Runners](https://docs.github.com/en/actions/reference/runners/self-hosted-runners)  or [Larger Runners](https://docs.github.com/en/actions/concepts/runners/larger-runners).

To allow your self-hosted or larger hosted runners to communicate with GitHub, add the IP address or IP address range of your runners to the IP allow list that you have configured for your enterprise.


## Using GitHub Pages with an IP allow list

If you use a custom GitHub Actions workflow as a publishing source for your GitHub Pages site, to permit the runner to connect and build the site, you must configure a rule for your IP allow list.

If you don't use a custom workflow, the build runner will have access to the repository for the GitHub Pages site by default. For more information about publishing sources, see [Configuring a publishing source for your GitHub Pages site](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
