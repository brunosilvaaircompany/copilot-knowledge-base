# Troubleshooting Azure private network configurations for GitHub-hosted runners in your enterprise

## Troubleshooting configuring private networking for GitHub-hosted runners in your enterprise



### Enabling creation of network configurations for organizations in an enterprise

By default, organizations in an enterprise cannot create new network configurations and only inherit enterprise-level network configurations. Enterprise owners can set a policy that allows organizations in the enterprise to create network configurations that are independent of the enterprise. For more information, see [Configuring Private Networking For GitHub Hosted Runners In Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/configuring-private-networking-for-github-hosted-runners-in-your-enterprise#enabling-creation-of-network-configurations-for-organizations).




### Configuring Azure resources before creating a network configuration in GitHub

Ensure your Azure resources have been configured _before_ adding a network configuration in GitHub.

### Supported regions

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


### Runner failed to connect to the internet

GitHub-hosted runners need to be able to make outbound connections to GitHub as well as other necessary URLs for GitHub Actions.

If GitHub Actions cannot communicate with the runners, the pool will never be able to bring runners online and so no jobs will be picked up. In this case, the pool will have the following error code.

```bash
VNetInjectionFailedToConnectToInternet
```

To fix this, ensure that you have configured your Azure resources according to the "Configuring your Azure resources" procedures.

### Deployment scope is locked

You can put locks on the Azure subscription or resource group, which can prevent NIC creation or deletion.

Locks that prevent NIC creation fail to pick up jobs, while locks that prevent NIC deletion either exhaust subnet address space (by continuing to create NICs) or have long queue-to-assign (QTA) times as the service retries deployment exceptions.

In this case, the pool will have the following error code.

```bash
RunnerDeploymentScopeLocked
```

To fix this, remove the lock or change the subnet you are using to one without a lock.

### Deployment blocked by policy

You can create policies on their management group, subscription, resource group, or individual resources. The most common policy is requiring a resource to have certain tags or to have a specific name.

The policy will prevent creation of NICs, which means the pool will not pick up jobs since no VMs can come online.

In this case, the pool will have the following error code.

```bash
RunnerDeploymentBlockedByPolicy
```

To fix this, remove the policy or change the subnet you are using to one without a policy.

### Subnet is full

Subnets have a limited amount of IP addresses to distribute. Each runner consumes one IP address. If the service attempts to scale up beyond the maximum runner count setting, it will encounter deployment errors.

This impacts the ability of the pool to add additional runners. If the queue depth is high enough, you may experience increased queue-to-assign (QTA) times. Jobs will still be processed, but not at a level of concurrency that you may expect.

In this case, the pool will have the following error code.

```bash
VNetInjectionSubnetIsFull
```

To fix this, either increase the size of the subnet you are using or reduce the pool's maximum runner count to match your subnet size.

### Cannot delete subnet

In some cases, a subnet cannot be deleted because it has a Service Association Link (SAL) applied to it. For more information, see [Configuring Private Networking For GitHub Hosted Runners In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/configuring-private-networking-for-github-hosted-runners-in-your-organization#deleting-a-subnet).

If you need to identify the network settings resource associated with the subnet, you can run the following `curl` command.
To obtain an Azure Entra token, please refer to the [Azure documentation](https://learn.microsoft.com/en-us/cli/azure/authenticate-azure-cli). Use the same `api-version` you used to create the resource.

```shell
curl --request GET \
  --url "https://management.azure.com/subscriptions/{subscriptionId}/providers/GitHub.Network/NetworkSettings?api-version={api-version}&subnetId={subnetId}" \
  --header 'Content-Type: application/json' \
  --header "Authorization: Bearer {entra_token}"
```

### Incorrect NSG or firewall rules

The "Configuring your Azure resources" procedures list the required openings. However, you may have complex production networks with multiple downstream proxies or firewalls.

If runners are failing to come online, no jobs will be picked up. Your setup process may involve setting up the runner application and communicating back to the GitHub Actions service to indicate it is ready, as well as fetching and installing anti-abuse tooling. If either of these processes fail, the runner cannot pick up any jobs.

If you are experiencing these issues, try setting up a virtual machine on the same subnet that you are using for private networking with GitHub-hosted runners. However, if you have a service association link (SAL) in place, this is not possible.

If you have a SAL in place, try setting up a similar subnet in the virtual network and place a virtual machine on that network. Then attempt to register a self-hosted runner on it.

### HTTP request payload failure when configuring Azure resources

While running the command to configure Azure resources, ensure you are using the correct API version and the `businessId` property. If you are using a different property, your command may return the following error.

```bash
(HttpRequestPayloadAPISpecValidationFailed) HTTP request payload failed validation against API specification with one or more errors. Please see details for more information.
```

If you experience this error, you can see more information by running the command using the `---debug` flag.

### Network settings configured at the wrong level

If network settings were configured using an organization's `databaseId` instead of an enterprise `databaseId`, an error will occur. The error message will indicate that a private network cannot be established with the provided resource ID because it is already associated with a different enterprise or organization. To resolve this, delete the existing network settings and recreate them using the enterprise `databaseId`.

### Failover network not switching traffic

> [!NOTE]
> VNET failover is in public preview and subject to change.
> [!IMPORTANT]
> Switching between the primary and failover networks is a gradual process. During the transition, runners may be running on both networks simultaneously. Based on testing, the full transition takes approximately 15 minutes. Ensure both subnets remain accessible during this period.

If enabling the failover network does not appear to reroute runner traffic, check the following:

* Ensure the failover subnet's Azure resources (VNET/subnet, NSG/firewall, network settings) are correctly configured. Follow the same "Configuring your Azure resources" procedures used for your primary subnet.
* Confirm the failover network was added to the correct network configuration and that the configuration is associated with the appropriate runner group.

### Failover subnet not reachable

If runners cannot connect after enabling the failover network, the issue is likely with the Azure resources configured for the failover subnet.

* Ensure the failover subnet has the correct NSG or firewall rules applied, matching the requirements listed in the [Configuring Private Networking For GitHub Hosted Runners In Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/configuring-private-networking-for-github-hosted-runners-in-your-enterprise) procedures.
* Verify that the failover subnet has sufficient IP address space for the expected runner concurrency.

### Cannot switch back to primary after GitHub-initiated failover


1. Navigate to your network configuration in the **Hosted compute networking** settings.
1. Click the edit icon next to the network configuration. Then click **Edit configuration**.
1. Click **Disable failover VNET** to return runner traffic to the primary subnet.

If you are unable to disable the failover, ensure the primary subnet's Azure resources are healthy and accessible. Verify there are no ongoing outages in the primary subnet's Azure region.
