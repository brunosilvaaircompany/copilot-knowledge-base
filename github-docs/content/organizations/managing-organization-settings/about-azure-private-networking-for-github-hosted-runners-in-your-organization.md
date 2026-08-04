# About Azure private networking for GitHub-hosted runners in your organization

## About Azure private networking for GitHub-hosted runners

You can use GitHub-hosted runners in an Azure VNET. This enables you to use GitHub-managed infrastructure for CI/CD while providing you with full control over the networking policies of your runners. For more information about Azure VNET, see [What is Azure Virtual Network?](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview) in the Azure documentation.


You can connect multiple VNET subnets to GitHub and manage private resource access for your runners via runner groups. For more information about runner groups, see [Control Access](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/control-access).

Using GitHub-hosted runners within Azure VNET allows you to perform the following actions.
* Privately connect a runner to resources inside an Azure VNET without opening internet ports, including on-premises resources accessible from the Azure VNET.
* Restrict what GitHub-hosted runners can access or connect to with full control over outbound network policies.
* Monitor network logs for GitHub-hosted runners and view all connectivity to and from a runner.


## About using larger runners with Azure VNET

2-64 vCPU Ubuntu and Windows runners are supported with Azure VNET. For more information on these runner types, see [Larger Runners](https://docs.github.com/en/actions/reference/runners/larger-runners#specifications-for-general-larger-runners).

Private networking for GitHub-hosted runners does not support static IP addresses for larger runners.
 You must use dynamic IP addresses, which is the default configuration for larger runners. For more information about networking for larger runners, see [Larger Runners](https://docs.github.com/en/actions/reference/runners/larger-runners#networking-for-larger-runners).


## About network communication

To facilitate communication between GitHub networks and your VNET, a GitHub-hosted runner's network interface card (NIC) deploys into your Azure VNET. The runner is always deployed in the same Azure region as your subnet.

Because the NIC lives within your VNET, GitHub cannot block inbound connections. By default, Azure virtual machines will accept inbound connections from the same VNET. For more information, see [`AllowVNetInBound`](https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview#allowvnetinbound) on Microsoft Learn. It is recommended to explicitly block all inbound connections to the runners. GitHub will never require inbound connections to these machines.

A NIC enables an Azure virtual machine (VM) to communicate with internet, Azure, and on-premises resources. This way, all communication is kept private within the network boundaries, and networking policies applied to the VNET also apply to the runner. For more information on how to manage a network interface, see [Change network interface settings](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-network-interface?tabs=azure-portal#change-network-interface-settings) on Microsoft Learn.

>[!NOTE] Soon, NICs created by the GitHub Actions service will no longer appear in your Azure subscriptions. Moving forward, NICs will be provisioned in a service subscription and assigned IP addresses from your subnet.


![Diagram of network communication between GitHub and your private networks. Each step is numbered and corresponds to a step listed below the diagram.](/assets/images/help/actions/actions-vnet-injected-larger-runners-architecture.png)

1. A GitHub Actions workflow is triggered.
1. The GitHub Actions service creates a runner.
1. The runner service deploys the GitHub-hosted runner's network interface card (NIC) into your Azure VNET.
1. The runner agent picks up the workflow job. The GitHub Actions service queues the job.
1. The runner sends logs back to the GitHub Actions service.
1. The NIC accesses on-premise resources.


## About supported regions

GitHub deploys your runners in the same Azure region as the subnet you connect them to. Because of this, your subnet must be in one of the supported regions. The GitHub Actions service supports a subset of all the regions that Azure provides, which facilitates communication between the GitHub Actions service and your subnet.

> [!NOTE] If you use data residency on GHE.com, the supported regions are different. See [Network Details For Ghecom](https://docs.github.com/en/admin/data-residency/network-details-for-ghecom#supported-regions-for-azure-private-networking).

The following regions are supported on GitHub.com.

<ul style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
<li><code>AustraliaEast</code></li>
<li><code>BrazilSouth</code></li>
<li><code>CanadaCentral</code></li>
<li><code>CanadaEast</code></li>
<li><code>CentralUs</code></li>
<li><code>EastAsia</code></li>
<li><code>EastUs</code></li>
<li><code>EastUs2</code></li>
<li><code>FranceCentral</code></li>
<li><code>GermanyWestCentral</code></li>
<li><code>JapanWest</code></li>
<li><code>KoreaCentral</code></li>
<li><code>NorthCentralUs</code></li>
<li><code>NorthEurope</code></li>
<li><code>NorwayEast</code></li>
<li><code>SouthCentralUs</code></li>
<li><code>SoutheastAsia</code></li>
<li><code>SouthIndia</code></li>
<li><code>SwedenCentral</code></li>
<li><code>SwitzerlandNorth</code></li>
<li><code>UkSouth</code></li>
<li><code>UkWest</code></li>
<li><code>WestUs</code></li>
<li><code>WestUs2</code></li>
<li><code>WestUs3</code></li>
</ul>

Azure private networking supports GPU runners in the following regions.

* `EastUs`
* `NorthCentralUs`
* `SouthCentralUs`
* `WestUs`

Azure private networking supports arm64 runners in the following regions.

* `CentralUs`
* `EastUs`
* `EastUs2`
* `NorthCentralUs`
* `SouthCentralUs`
* `WestUs`
* `WestUs2`
* `WestUs3`

We will be launching a process to request support for new regions soon. You may also use global virtual network peering to connect virtual networks across Azure regions. For more information, see [Virtual network peering](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview) in the Azure documentation.


## About the GitHub Actions service permissions

In order to successfully deploy a NIC and join a NIC to a subnet, the GitHub Actions service maintains the following Azure role-based access control (RBAC) permissions in your Azure subscription. For more information about fine-grained access management of Azure resources, see [Azure RBAC](https://learn.microsoft.com/en-us/azure/role-based-access-control/) in the Azure documentation.

* `GitHub.Network/operations/read`
* `GitHub.Network/networkSettings/read`
* `GitHub.Network/networkSettings/write`
* `GitHub.Network/networkSettings/delete`
* `GitHub.Network/RegisteredSubscriptions/read`
* `Microsoft.Network/locations/operations/read`
* `Microsoft.Network/locations/operationResults/read`
* `Microsoft.Network/locations/usages/read`
* `Microsoft.Network/networkInterfaces/read`
* `Microsoft.Network/networkInterfaces/write`
* `Microsoft.Network/networkInterfaces/delete`
* `Microsoft.Network/networkInterfaces/join/action`
* `Microsoft.Network/networkSecurityGroups/join/action`
* `Microsoft.Network/networkSecurityGroups/read`
* `Microsoft.Network/publicIpAddresses/read`
* `Microsoft.Network/publicIpAddresses/write`
* `Microsoft.Network/publicIPAddresses/join/action`
* `Microsoft.Network/routeTables/join/action`
* `Microsoft.Network/virtualNetworks/read`
* `Microsoft.Network/virtualNetworks/subnets/join/action`
* `Microsoft.Network/virtualNetworks/subnets/read`
* `Microsoft.Network/virtualNetworks/subnets/write`
* `Microsoft.Network/virtualNetworks/subnets/serviceAssociationLinks/delete`
* `Microsoft.Network/virtualNetworks/subnets/serviceAssociationLinks/read`
* `Microsoft.Network/virtualNetworks/subnets/serviceAssociationLinks/write`
* `Microsoft.Network/virtualNetworks/subnets/serviceAssociationLinks/details/read`
* `Microsoft.Network/virtualNetworks/subnets/serviceAssociationLinks/validate/action`
* `Microsoft.Resources/subscriptions/resourceGroups/read`
* `Microsoft.Resources/subscriptions/resourcegroups/deployments/read`
* `Microsoft.Resources/subscriptions/resourcegroups/deployments/write`
* `Microsoft.Resources/subscriptions/resourcegroups/deployments/operations/read`
* `Microsoft.Resources/deployments/read`
* `Microsoft.Resources/deployments/write`
* `Microsoft.Resources/deployments/operationStatuses/read`

The following permissions will be present on two enterprise applications in your Azure tenant. You will see the enterprise applications your Azure tenant after configuring Azure private networking.

* `GitHub CPS Network Service` id: `85c49807-809d-4249-86e7-192762525474`
* `GitHub Actions API` id: `4435c199-c3da-46b9-a61d-76de3f2c9f82`


## Using your VNET's network policies

Because the GitHub-hosted runner's NIC is deployed into your Azure VNET, networking policies applied to the VNET also apply to the runner.

For example, if your VNET is configured with an Azure ExpressRoute to provide access to on-premises resources (e.g. Artifactory) or connected to a VPN tunnel to provide access to other cloud-based resources, those access policies also apply to your runners. Additionally, any outbound rules applied to your VNET's network security group (NSG) also apply, giving you the ability to control outbound access for your runners.

If you have enabled any network logs monitoring for your VNET, you can also monitor network traffic for your runners.

GitHub-hosted runners use whatever outbound control your network is using. If your network relies on Azure's default outbound access, the IPs are not predictable and cannot be added to the GitHub IP allow list. For recommendations on using a stable outbound IP, see [Default outbound access](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/default-outbound-access) in the Azure documentation.


## About VNET failover

> [!NOTE]
> VNET failover is in public preview and subject to change.

You can configure a failover network for your network configuration. A failover network is a secondary Azure Virtual Network subnet, which can be in a different Azure region from your primary subnet. If your primary subnet becomes unavailable due to a regional outage or other disruption, you can enable the failover network to route runner traffic through the secondary subnet, maintaining continuity for your GitHub Actions workflows.

Key points about VNET failover:

* The failover subnet can reside in a different Azure region than the primary subnet.
* Switching between primary and failover subnets is a manual process. You enable or disable the failover network at your discretion.
* Both the primary and failover subnets must be configured with the required Azure resources (VNET/subnet, network settings, etc.) before you can use failover.
* The failover subnet must be in a [supported region](/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/about-azure-private-networking-for-github-hosted-runners-in-your-enterprise#about-supported-regions).


For more information about configuring a failover network, see [Configuring Private Networking For GitHub Hosted Runners In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/configuring-private-networking-for-github-hosted-runners-in-your-organization#5-optionally-add-a-failover-network-to-a-network-configuration).

## Using GitHub-hosted runners with an Azure VNET

To use GitHub-hosted runners with an Azure VNET, you will need to configure your Azure resources and then create a networking configuration in GitHub.



For procedures to configure Azure private networking at the organization level, see [Configuring Private Networking For GitHub Hosted Runners In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/configuring-private-networking-for-github-hosted-runners-in-your-organization).





By default, organizations in an enterprise cannot create new network configurations and only inherit enterprise-level network configurations. Enterprise owners can set a policy that allows organizations in the enterprise to create network configurations that are independent of the enterprise. For more information, see [Configuring Private Networking For GitHub Hosted Runners In Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/configuring-private-networking-for-github-hosted-runners-in-your-enterprise#enabling-creation-of-network-configurations-for-organizations).


For procedures to configure Azure private networking at the enterprise level, see [Configuring Private Networking For GitHub Hosted Runners In Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/configuring-private-networking-for-github-hosted-runners-in-your-enterprise).

For procedures to configure Azure private networking at the organization level, see [Configuring Private Networking For GitHub Hosted Runners In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/configuring-private-networking-for-github-hosted-runners-in-your-organization).
