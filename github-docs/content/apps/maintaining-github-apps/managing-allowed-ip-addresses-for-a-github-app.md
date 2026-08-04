# Managing allowed IP addresses for a GitHub App

## About IP address allow lists for GitHub Apps

Enterprise and organization owners can restrict access to assets by configuring an IP address allow list. This list specifies the IP addresses that actors can use to access their resources. For more information, see [Restricting Network Traffic To Your Enterprise With An Ip Allow List](https://docs.github.com/en/enterprise-cloud@latest/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list#about-githubs-ip-allow-list).

When an organization or enterprise has an allow list, third-party applications that connect via a GitHub App will be denied access unless either of the following condition sets are true:

* The creator of the GitHub App has configured an allow list for the application that specifies the IP addresses at which their application runs. See below for details of how to do this, **and**
* The organization or enterprise owner has chosen to permit the addresses in the GitHub App's allow list to be added to their own allow list. For more information, see [Managing allowed IP addresses for your organization](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#allowing-access-by-github-apps) in the GitHub Enterprise Cloud documentation.

or

* The organization or enterprise owner has added an IP allow list entry for the IP addresses from which the application runs. See [Adding an allowed IP address](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization#adding-an-allowed-ip-address) in the GitHub Enterprise Cloud documentation.

> [!NOTE]
> The addresses in the IP allow list of a GitHub App only affect requests made by installations of the GitHub App. The automatic addition of a GitHub App's IP address to an organization's allow list does not allow access to a GitHub user who connects from that IP address.


## Adding an IP address allow list to a GitHub App registration



> [!NOTE]
> GitHub is gradually rolling out support for IPv6. As GitHub services continue to add IPv6 support, we will start recognizing IPv6 addresses of GitHub users. To prevent possible access interruptions, please ensure you have added any necessary IPv6 addresses to your IP allow list.



> [!NOTE]
> Due to caching, adding or removing IP addresses can take a few minutes to fully take effect.


1. In the upper-right corner of any page on GitHub, click your profile picture.
1. Navigate to your account settings.
   * For an app owned by a personal account, click **Settings**.
   * For an app owned by an organization:
     1. Click **Your organizations**.
     1. To the right of the organization, click **Settings**.
   * For an app owned by an enterprise:
     1. If you use Enterprise Managed Users, click **Your enterprise** to go directly to the enterprise account settings.
     1. If you use personal accounts, click **Your enterprises** and then to the right of the enterprise, click **Settings**.{% elsif ghes %}
     1. Click **Enterprise settings**.



1. Navigate to the GitHub App settings.
   * For an app owned by a personal account or organization:
     1. In the left sidebar, click **{% octicon "code" aria-hidden="true" aria-label="code" %} Developer settings**, then click **GitHub Apps**.
   * For an app owned by an enterprise:
     1. In the left sidebar, under "Settings",{% elsif ghes %} click **Settings**, then click **GitHub Apps**.

1. To the right of the GitHub App you want to modify, click **Edit**.

1. At the bottom of the "IP allow list" section, in the "IP address or range in CIDR notation" field, type an IP address, or a range of addresses in CIDR notation.

   ![Screenshot of the IP allow list settings. A text field, labeled "IP address or range in CIDR notation", is highlighted with an orange outline.](/assets/images/help/security/ip-address-field.png)

1. Optionally, in the "Short description of IP address or range" field, enter a description of the allowed IP address or range.

  The description is for your reference and is not used in the allow list of organizations where the GitHub App is installed. Instead, organization allow lists will include "Managed by the NAME GitHub App" as the description.
1. Click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add**.
