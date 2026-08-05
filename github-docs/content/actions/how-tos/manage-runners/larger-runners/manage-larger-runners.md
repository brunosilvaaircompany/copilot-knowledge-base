# Managing larger runners

## Adding a larger runner to an enterprise

Enterprise owners can add larger runners to an enterprise and assign them to organizations. By default, when a larger runner is created for an enterprise, it is added to a default runner group that all organizations in the enterprise have access to. While all organizations are granted access to the runner, the repositories in each organization **are not** granted access. For each organization, an organization owner must configure the runner group to specify which repositories have access to the enterprise runner. For more information, see [Allowing repositories to access larger runners](#allowing-repositories-to-access-larger-runners).

You can choose an operating system and a hardware configuration from the list of available options. When new instances of this runner are deployed through autoscaling, they'll use the same operating system and hardware configuration you've defined here.

New runners are automatically assigned to the default group, or you can choose which group the runners must join during the runner creation process. In addition, you can modify the runner's group membership after you've registered the runner. For more information, see [Control Access](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/control-access).



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Actions**.

1. Click the **Runners** tab.

1. Click **New runner**, then click **{% octicon "mark-github" aria-hidden="true" aria-label="mark-github" %} New GitHub-hosted runner**.
1. Complete the required details to configure your new runner:

    * **Name:** Enter a name for your new runner. For easier identification, this should indicate its hardware and operating configuration, such as `ubuntu-24.04-16core`.
    * **Platform:** Choose a platform from the available options. Once you've selected a platform, you will be able to choose a specific image.

        If you are building a custom image, the platform that you select for your runner must match the platform of the image you want to build. The platform of the runner can be one of the following:
      * Linux x64
      * Linux ARM64
      * Windows x64
    * **Image:** Choose an image from the available options. Once you've selected an image, you will be able to choose a specific size.
      * **GitHub-owned:** For images managed by GitHub, select an image under this tab.
      * **Partner:** For images managed by a partner, select an image under this tab. ex: Base Windows 11 desktop, GPU-optimized, and arm64 images are located under this tab.
      * **Custom:** For images that are created by your organization or enterprise, select an image under this tab. Custom images are created by running a workflow on an image-building runner that you, your organization, or your enterprise have set up. For more information, see [Installing custom images](/actions/how-tos/manage-runners/larger-runners/use-custom-images#installing-custom-images).
    * **Size:** Choose a hardware configuration from the list of available options. The available sizes depend on the image that you selected in a previous step. For GPU runners, select a size under the **GPU-powered** tab.
    * **Maximum concurrency:** Choose the maximum number of jobs that can be active at any time.
    * **Runner group:** Choose the group that your runner will be a member of. This group will host multiple instances of your runner, as they scale up and down to suit demand. 
    * **Networking:** Choose whether static IP address ranges will be assigned to instances of the larger runner. You can use up to 10 larger runners with static IP addresses in total. 

    > [!NOTE]
> The names of larger runners can dictate their functionality. For example, to use a larger runner for code scanning default setup, the runner must be named `code-scanning`. For more information on code scanning with larger runners, see [Configure Larger Runners](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/configure-larger-runners).


1. Click **Create runner**.

1. To allow organizations to access your larger runner, specify which organizations can use the runner group the runner is assigned to. For more information, see [Control Access](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/control-access#changing-which-organizations-can-access-a-runner-group).




## Adding a larger runner to an organization

Organization owners and users with the "Manage organization runners and runner groups" permission can add a larger runner to an organization and control which repositories can use it. When you create a new runner for an organization, by default, all repositories in the organization have access to the runner. To limit which repositories can use the runner, assign it to a runner group with access to specific repositories. For more information, see [Allowing repositories to access larger runners](#allowing-repositories-to-access-larger-runners).

You can choose an operating system and a hardware configuration from the list of available options. When new instances of this runner are deployed through autoscaling, they'll use the same operating system and hardware configuration you've defined here.

New runners are automatically assigned to the default group, or you can choose which group the runners must join during the runner creation process. In addition, you can modify the runner's group membership after you've registered the runner. For more information, see [Control Access](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/control-access).


1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runners**.


1. Click **New runner**, then click **{% octicon "mark-github" aria-hidden="true" aria-label="mark-github" %} New GitHub-hosted runner**.
1. Complete the required details to configure your new runner:

    * **Name:** Enter a name for your new runner. For easier identification, this should indicate its hardware and operating configuration, such as `ubuntu-24.04-16core`.
    * **Platform:** Choose a platform from the available options. Once you've selected a platform, you will be able to choose a specific image.

        If you are building a custom image, the platform that you select for your runner must match the platform of the image you want to build. The platform of the runner can be one of the following:
      * Linux x64
      * Linux ARM64
      * Windows x64
    * **Image:** Choose an image from the available options. Once you've selected an image, you will be able to choose a specific size.
      * **GitHub-owned:** For images managed by GitHub, select an image under this tab.
      * **Partner:** For images managed by a partner, select an image under this tab. ex: Base Windows 11 desktop, GPU-optimized, and arm64 images are located under this tab.
      * **Custom:** For images that are created by your organization or enterprise, select an image under this tab. Custom images are created by running a workflow on an image-building runner that you, your organization, or your enterprise have set up. For more information, see [Installing custom images](/actions/how-tos/manage-runners/larger-runners/use-custom-images#installing-custom-images).
    * **Size:** Choose a hardware configuration from the list of available options. The available sizes depend on the image that you selected in a previous step. For GPU runners, select a size under the **GPU-powered** tab.
    * **Maximum concurrency:** Choose the maximum number of jobs that can be active at any time.
    * **Runner group:** Choose the group that your runner will be a member of. This group will host multiple instances of your runner, as they scale up and down to suit demand. 
    * **Networking:** Choose whether static IP address ranges will be assigned to instances of the larger runner. You can use up to 10 larger runners with static IP addresses in total. 

    > [!NOTE]
> The names of larger runners can dictate their functionality. For example, to use a larger runner for code scanning default setup, the runner must be named `code-scanning`. For more information on code scanning with larger runners, see [Configure Larger Runners](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/configure-larger-runners).


1. Click **Create runner**.

1. To allow repositories to access your larger runners, add them to the list of repositories that can use it. For more information, see [Allowing repositories to access larger runners](#allowing-repositories-to-access-larger-runners).

## Allowing repositories to access larger runners

Repositories are granted access to larger runners through runner groups. Enterprise administrators can choose which organizations are granted access to enterprise-level runner groups, and organization owners and users with the "Manage organization runners and runner groups" permission control repository-level access to all larger runners.

Organization owners can use and configure enterprise-level runner groups for the repositories in their organization, or they can create organization-level runner groups to control access. Users with the "Manage organization runners and runner groups" can only manage organization-level runner groups. For more information, see [Permissions Of Custom Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles).

* **For enterprise-level runner groups:** By default, repositories in an organization do not have access to enterprise-level runner groups. To give repositories access to enterprise runner groups, organization owners must configure each enterprise runner group and choose which repositories have access.

* **For organization-level runner groups:** By default, all repositories in an organization are granted access to organization-level runner groups. To restrict which repositories have access, organization owners and users with the "Manage organization runners and runner groups" permission must configure organization runner groups and choose which repositories have access.


Once a repository has access to larger runners, the larger runners can be added to workflow files. For more information, see [Use Larger Runners](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/use-larger-runners).

1. Navigate to the main page of the organization where your runner groups are located.
1. Click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runner groups**.



1. Select a runner group from either list on the page. Organization-level runner groups are listed at the top of the page, and enterprise-level runner groups are listed under "Shared by the Enterprise."
1. On the runner group page, under "Repository access," select **All repositories** or **Selected repositories**. If you choose to grant access to specific repositories, click {% octicon "gear" aria-label="The Settings gear" %}, then select the repositories you would like to grant access to from the list.

> [!WARNING]
> If you are using a Fixed IP range, we recommend that you only use larger runners with private repositories. Forks of your repository can potentially run dangerous code on your larger runner by creating a pull request that executes the code in a workflow.

> For more information, see [Control Access](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/control-access).

If you want to require workflows to target runners only through runner groups, you can disable standard GitHub-hosted runners at the organization or enterprise level. See [Disabling Or Limiting GitHub Actions For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization) and [Enforcing Policies For GitHub Actions In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise).

## Changing the name of a larger runner

> [!NOTE]
> The names of larger runners can dictate their functionality. For example, to use a larger runner for code scanning default setup, the runner must be named `code-scanning`. For more information on code scanning with larger runners, see [Configure Larger Runners](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/configure-larger-runners).



You can edit the name of your larger runners.

* [Changing the name of an organization runner](#changing-the-name-of-an-organization-runner)
* [Changing the name of an enterprise runner](#changing-the-name-of-an-enterprise-runner)

### Changing the name of an organization runner



1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runners**.


1. In the list of runners, select the runner you would like to edit.

1. Enter a new name for the runner in the text field under "Name."
1. Click **Save**.




### Changing the name of an enterprise runner


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Actions**.

1. Click the **Runners** tab.

1. In the list of runners, select the runner you would like to edit.

1. Enter a new name for the runner in the text field under "Name."
1. Click **Save**.



## Changing the size of a larger runner


You can edit the size of your larger runners.

* [Changing the size of an organization runner](#changing-the-size-of-an-organization-runner)
* [Changing the size of an enterprise runner](#changing-the-size-of-an-enterprise-runner)

### Changing the size of an organization runner



1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runners**.


1. In the list of runners, select the runner you would like to edit.

1. Select a new size for the runner from the list of available options under "Size." The available sizes depend on the image that is installed on the runner.
1. Click **Save**.




### Changing the size of an enterprise runner


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Actions**.

1. Click the **Runners** tab.

1. In the list of runners, select the runner you would like to edit.

1. Select a new size for the runner from the list of available options under "Size." The available sizes depend on the image that is installed on the runner.
1. Click **Save**.



## Changing the image of a larger runner


You can edit the image of your larger runners if you are using a GitHub-owned image. For a list of our managed images see the [GitHub Actions Runner Images](https://github.com/actions/runner-images) repository.

* [Changing the image of an organization runner](#changing-the-image-of-an-organization-runner)
* [Changing the image of an enterprise runner](#changing-the-image-of-an-enterprise-runner)

### Changing the image of an organization runner



1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runners**.


1. In the list of runners, select the runner you would like to edit.

1. Select a new image for the runner from the list of available options under "Image." The available images are limited to GitHub-owned images.
1. Click **Save**.




### Changing the image of an enterprise runner


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Actions**.

1. Click the **Runners** tab.

1. In the list of runners, select the runner you would like to edit.

1. Select a new image for the runner from the list of available options under "Image." The available images are limited to GitHub-owned images.
1. Click **Save**.



## Configuring autoscaling for larger runners

You can control the maximum number of jobs allowed to run concurrently for specific runner sets. Setting this field to a higher value can help prevent workflows being blocked due to parallelism.


* [Configuring autoscaling for an organization runner](#configuring-autoscaling-for-an-organization-runner)
* [Configuring autoscaling for an enterprise runner](#configuring-autoscaling-for-an-enterprise-runner)

### Configuring autoscaling for an organization runner



1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runners**.


1. In the list of runners, select the runner you would like to edit.

1. In the "Capacity" section, under "Maximum concurrency", enter the maximum number of jobs you would like to allow to run at the same time.
1. Click **Save**.




### Configuring autoscaling for an enterprise runner


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Actions**.

1. Click the **Runners** tab.

1. In the list of runners, select the runner you would like to edit.

1. In the "Capacity" section, under "Maximum concurrency", enter the maximum number of jobs you would like to allow to run at the same time.
1. Click **Save**.



## Creating static IP addresses for larger runners

> [!NOTE]
> * To use static IP addresses, your organization must use GitHub Enterprise Cloud. For more information about how you can try GitHub Enterprise Cloud for free, see [Setting up a trial of GitHub Enterprise Cloud](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).

> * macOS larger runners do not support static IP addresses.

You can enable static IP addresses for larger runners. When you do this, the larger runners are assigned static IP address ranges. All IP addresses in the range assigned are usable. By default, you can configure up to 10 larger runner pools with static IP address ranges for your account. If you would like to use more than 10 larger runner pools with static IP address ranges, please contact us through the [GitHub Support portal](https://support.github.com){% elsif ghes %}your site administrator.


Each larger runner you create is not a single machine. It is a pool of runners that automatically scales out to handle concurrent jobs, up to the maximum concurrency you set when creating the runner. All jobs in the pool share the same static IP address range. This means a single larger runner with one static IP range can handle many jobs running at the same time without requiring additional runners.

The number of available IP addresses in the assigned ranges does not restrict the number of concurrent jobs. Within a runner pool, there is a load balancer which allows for high reuse of the IP addresses in the assigned ranges. This ensures your workflows can run concurrently at scale while each machine is assigned a static IP address.



* [Creating static IP addresses for organization runners](#creating-static-ip-addresses-for-organization-runners)
* [Creating static IP addresses for enterprise runners](#creating-static-ip-addresses-for-enterprise-runners)

### Creating static IP addresses for organization runners



1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runners**.


1. In the list of runners, select the runner you would like to edit.

1. To assign static IP addresses to the runner, under "Networking," check **Assign unique & static public IP address ranges for this runner**.
1. Click **Save**.




### Creating static IP addresses for enterprise runners


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Actions**.

1. Click the **Runners** tab.

1. In the list of runners, select the runner you would like to edit.

1. To assign static IP addresses to the runner, under "Networking," check **Assign unique & static public IP address ranges for this runner**.
1. Click **Save**.



## Azure Storage firewall considerations

### Virtual machines and storage accounts in the same region

If you use Azure Storage accounts protected by network rules, be aware that traffic from larger runners' VMs to storage accounts in the same Azure region uses private Azure IP addresses rather than the larger runners' public IP range.

As a result, Azure Storage firewall rules that rely only on runner public IP allowlists might not work as expected. This can cause connectivity failures that appear as 403 (AuthorizationFailure) responses, with an error message similar to:

```text
The request may be blocked by network rules of storage account. Please check network rule set using 'az storage account show -n accountname --query networkRuleSet'.
  If you want to change the default action to apply when no rule matches, please use 'az storage account update'.
```

For more information see the Microsoft documentation for [Guidelines and limitations for the Azure Storage firewall](https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security-limitations) and [Configure network routing preference for Azure Storage](https://learn.microsoft.com/en-us/azure/storage/common/configure-network-routing-preference?tabs=azure-portal&source=docs).

> [!NOTE]
> We don't recommend configuring Azure Storage firewall network rules for larger runners unless you use either `static public IP ranges` or an `Azure VNet`.
> Public IP ranges can be dynamic, so allowlist-based rules may break and cause intermittent connectivity failures.
> See [Larger Runners](https://docs.github.com/en/actions/reference/runners/larger-runners#networking-for-larger-runners)

### Use Static IP Ranges and Service Endpoints

One option for safely enabling Storage Account network rules is to use runners with static IPs and request support for configuring Azure Storage service endpoints for the virtual network hosting those static IPs. See [Azure virtual network service endpoints](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-service-endpoints-overview) for more information.

Contact GitHub Support to set up this configuration through the [GitHub Support portal](https://support.github.com/).

### Configure Azure VNET

Another option to safely connect to Azure Storage accounts is to enable Azure VNET with GitHub-hosted runners.

* [About Azure Private Networking For GitHub Hosted Runners In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/about-azure-private-networking-for-github-hosted-runners-in-your-organization)

* [About Azure Private Networking For GitHub Hosted Runners In Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/about-azure-private-networking-for-github-hosted-runners-in-your-enterprise)
