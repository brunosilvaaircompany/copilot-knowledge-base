# Configuring private networking for GitHub-hosted runners in your enterprise

## About Azure private networking for GitHub-hosted runners

To use GitHub-hosted runners with Azure VNET, first, configure your Azure resources. Then create a private network configuration in GitHub.

The following procedures will lead you through both steps.

For more information about troubleshooting common issues with using GitHub-hosted runners with Azure VNET, see [Troubleshooting Azure Private Network Configurations For GitHub Hosted Runners In Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/troubleshooting-azure-private-network-configurations-for-github-hosted-runners-in-your-enterprise).


## Configuring your Azure resources

You will use a script to automate configuring your Azure resources.

### Prerequisites

* Use an Azure account with the Subscription Contributor role and the Network Contributor role. These roles enable you to register the `GitHub.Network` resource provider and delegate the subnet. For more information, see [Azure built-in roles](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles) in the Azure documentation.

* To correctly associate the subnets with the right user, Azure `NetworkSettings` resources must be created in the same subscriptions where virtual networks are created.

* To ensure resource availability/data residency, resources must be created in the same Azure region.

* Outbound network traffic from the subnet **must not** be subject to TLS interception as our Virtual Machines will not be configured to trust intermediate certificates that your network uses to perform the interception.

   If you need to use TLS interception, you can install intermediate certificates via a custom image. See [Use Custom Images](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/use-custom-images).

* We recommend some level of network traffic control over your Azure VNET and to use DNS/domain-based controls. The previously recommended IP addresses will be closed on or after July 1, 2026. 


#### DNS/domain control (recommended)

If you control the outbound access of your GitHub-hosted runners with Azure VNET using DNS or domains, you allow-list a set of domains for GitHub Actions functionality. This is the recommended approach because the domains are published on the GitHub meta endpoint, which GitHub keeps up to date as network requirements change. For a breakdown of the domains by function, see the "Communication" section in [Self Hosted Runners](https://docs.github.com/en/actions/reference/runners/self-hosted-runners#communication).

You can find the domains to allow-list on the GitHub meta endpoint at [https://api.github.com/meta](https://api.github.com/meta). For more information on the meta endpoint, see [Meta](https://docs.github.com/en/rest/meta/meta#get-github-meta-information).

There are three sections on the meta endpoint you can choose to allow-list based on:

* `domains.actions_inbound.full_domains`: An extremely specific list of exact domains needed for GitHub Actions functionality, with no wildcarded domains.
* `domains.actions`: A middle-ground domain list, with some GitHub-owned domains wildcarded, but other domains listed specifically.
* `domains.actions_inbound.wildcard_domains`: A list with primarily wildcarded domains. This will be the most stable from a domain change perspective.

> [!WARNING]
> Required domains on the meta endpoint are subject to change. GitHub ensures a domain is on the meta endpoint for at least one week before it goes into use. The meta endpoint does not provide a "last updated" date, so you cannot rely on a timestamp to detect changes.
>
> If you plan to use the more specific domain lists, you must check for new domains on a weekly basis and update your network control systems appropriately, or your GitHub Actions jobs may experience unintended issues. Because new domains are published at least a week before they are required, a weekly check leaves enough lead time to apply changes before they take effect. The middle-ground list that allows for some GitHub domain wildcards will be much more stable, and the full wildcard list should see very little change.

You can use any technology of your choice for doing DNS/domain control on your Azure VNET. This guidance is for the minimal required domains for basic functionality; you may need to add more domains to your allow-list system for additional scenarios.

#### IP address controls

> [!WARNING]
> The IP-based `.bicep` template below is closing down and will be removed on or after July 1, 2026. It remains available to support migration to DNS/domain-based control (see "DNS/domain control" above). Customers who hard-code or template this IP list (for example, in Terraform) are at risk of broken traffic when the underlying Azure IP ranges change, because this static list is not kept up to date. Migrate to the meta endpoint domains before this template is removed.

  > [!NOTE]
 > To determine the appropriate subnet IP address range, we recommend adding a 30% buffer to the maximum job concurrency you anticipate. For instance, if your network configuration's runners are set to a maximum job concurrency of 300, it's recommended to utilize a subnet IP address range that can accommodate at least 390 runners. This buffer helps ensure that your network can handle unexpected increases in VM needs to meet job concurrency without running out of IP addresses.

If you control outbound access using IP addresses during the transition period, save the following `.bicep` file. Name the file `actions-nsg-deployment.bicep`.

  The `.bicep` file we provide contains the minimal set of rules to use GitHub-hosted runners with Azure VNET. You may need to add rules for your specific use case.

  If you use GitHub Enterprise Cloud with data residency, in the `AllowOutBoundGitHub` section, you must also include the ingress IP ranges for GHE.com. See [Network Details For Ghecom](https://docs.github.com/en/admin/data-residency/network-details-for-ghecom#githubs-ip-addresses).

  ```bicep copy
  @description('NSG for outbound rules')
  param location string
  param nsgName string = 'actions_NSG'

  resource actions_NSG 'Microsoft.Network/networkSecurityGroups@2017-06-01' = {
    name: nsgName
    location: location
    properties: {
      securityRules: [
        {
          name: 'AllowVnetOutBoundOverwrite'
          properties: {
            protocol: 'TCP'
            sourcePortRange: '*'
            destinationPortRange: '443'
            sourceAddressPrefix: '*'
            destinationAddressPrefix: 'VirtualNetwork'
            access: 'Allow'
            priority: 200
            direction: 'Outbound'
            destinationAddressPrefixes: []
          }
        }
        {
          name: 'AllowOutBoundActions'
          properties: {
            protocol: '*'
            sourcePortRange: '*'
            destinationPortRange: '443'
            sourceAddressPrefix: '*'
            access: 'Allow'
            priority: 210
            direction: 'Outbound'
            destinationAddressPrefixes: [
              '4.175.114.51/32'
              '20.102.35.120/32'
              '4.175.114.43/32'
              '20.72.125.48/32'
              '20.19.5.100/32'
              '20.7.92.46/32'
              '20.232.252.48/32'
              '52.186.44.51/32'
              '20.22.98.201/32'
              '20.246.184.240/32'
              '20.96.133.71/32'
              '20.253.2.203/32'
              '20.102.39.220/32'
              '20.81.127.181/32'
              '52.148.30.208/32'
              '20.14.42.190/32'
              '20.85.159.192/32'
              '52.224.205.173/32'
              '20.118.176.156/32'
              '20.236.207.188/32'
              '20.242.161.191/32'
              '20.166.216.139/32'
              '20.253.126.26/32'
              '52.152.245.137/32'
              '40.118.236.116/32'
              '20.185.75.138/32'
              '20.96.226.211/32'
              '52.167.78.33/32'
              '20.105.13.142/32'
              '20.253.95.3/32'
              '20.221.96.90/32'
              '51.138.235.85/32'
              '52.186.47.208/32'
              '20.7.220.66/32'
              '20.75.4.210/32'
              '20.120.75.171/32'
              '20.98.183.48/32'
              '20.84.200.15/32'
              '20.14.235.135/32'
              '20.10.226.54/32'
              '20.22.166.15/32'
              '20.65.21.88/32'
              '20.102.36.236/32'
              '20.124.56.57/32'
              '20.94.100.174/32'
              '20.102.166.33/32'
              '20.31.193.160/32'
              '20.232.77.7/32'
              '20.102.38.122/32'
              '20.102.39.57/32'
              '20.85.108.33/32'
              '40.88.240.168/32'
              '20.69.187.19/32'
              '20.246.192.124/32'
              '20.4.161.108/32'
              '20.22.22.84/32'
              '20.1.250.47/32'
              '20.237.33.78/32'
              '20.242.179.206/32'
              '40.88.239.133/32'
              '20.121.247.125/32'
              '20.106.107.180/32'
              '20.22.118.40/32'
              '20.15.240.48/32'
              '20.84.218.150/32'
            ]
          }
        }
        {
          name: 'AllowOutBoundGitHub'
          properties: {
            protocol: '*'
            sourcePortRange: '*'
            destinationPortRange: '443'
            sourceAddressPrefix: '*'
            access: 'Allow'
            priority: 220
            direction: 'Outbound'
            destinationAddressPrefixes: [
              '140.82.112.0/20'
              '143.55.64.0/20'
              '185.199.108.0/22'
              '192.30.252.0/22'
              '20.175.192.146/32'
              '20.175.192.147/32'
              '20.175.192.149/32'
              '20.175.192.150/32'
              '20.199.39.227/32'
              '20.199.39.228/32'
              '20.199.39.231/32'
              '20.199.39.232/32'
              '20.200.245.241/32'
              '20.200.245.245/32'
              '20.200.245.246/32'
              '20.200.245.247/32'
              '20.200.245.248/32'
              '20.201.28.144/32'
              '20.201.28.148/32'
              '20.201.28.149/32'
              '20.201.28.151/32'
              '20.201.28.152/32'
              '20.205.243.160/32'
              '20.205.243.164/32'
              '20.205.243.165/32'
              '20.205.243.166/32'
              '20.205.243.168/32'
              '20.207.73.82/32'
              '20.207.73.83/32'
              '20.207.73.85/32'
              '20.207.73.86/32'
              '20.207.73.88/32'
              '20.217.135.1/32'
              '20.233.83.145/32'
              '20.233.83.146/32'
              '20.233.83.147/32'
              '20.233.83.149/32'
              '20.233.83.150/32'
              '20.248.137.48/32'
              '20.248.137.49/32'
              '20.248.137.50/32'
              '20.248.137.52/32'
              '20.248.137.55/32'
              '20.26.156.215/32'
              '20.26.156.216/32'
              '20.26.156.211/32'
              '20.27.177.113/32'
              '20.27.177.114/32'
              '20.27.177.116/32'
              '20.27.177.117/32'
              '20.27.177.118/32'
              '20.29.134.17/32'
              '20.29.134.18/32'
              '20.29.134.19/32'
              '20.29.134.23/32'
              '20.29.134.24/32'
              '20.87.245.0/32'
              '20.87.245.1/32'
              '20.87.245.4/32'
              '20.87.245.6/32'
              '20.87.245.7/32'
              '4.208.26.196/32'
              '4.208.26.197/32'
              '4.208.26.198/32'
              '4.208.26.199/32'
              '4.208.26.200/32'
              '4.225.11.196/32'
              '4.237.22.32/32'
            ]
          }
        }
        {
          name: 'AllowStorageOutbound'
          properties: {
            protocol: '*'
            sourcePortRange: '*'
            destinationPortRange: '443'
            sourceAddressPrefix: '*'
            destinationAddressPrefix: 'Storage'
            access: 'Allow'
            priority: 230
            direction: 'Outbound'
            destinationAddressPrefixes: []
          }
        }
      ]
    }
  }
  ```


### 1. Obtain the `databaseId` for your enterprise

> [!TIP]
> Your token will require at minimum `read:enterprise` permissions to perform a successful query.

You can use the following GraphQL query to retrieve your enterprise `databaseId`. You will use the enterprise `databaseId` for the value of the `DATABASE_ID` environment variable in the next step. For more information on working with GraphQL, see [Forming Calls With GraphQL](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql).

| Query variable | Description |
|----|----|
| `slug` | The slug for your enterprise account, which you can identify by looking at the URL for your enterprise, `https://github.com/enterprises/SLUG` or `https://SLUG.ghe.com`.


```graphql
query(
  $slug: String!
){
  enterprise (slug: $slug)
  {
    slug
    databaseId
  }
}
'
Variables
{
  "slug": "ENTERPRISE_SLUG"
}
```

#### Example for GitHub.com

You can use the following curl command to find your `databaseId`.

```shell copy
curl -H "Authorization: Bearer BEARER_TOKEN" -X POST \
  -d '{ "query": "query($slug: String!) { enterprise (slug: $slug) { slug databaseId } }" ,
        "variables": {
          "slug": "ENTERPRISE_SLUG"
        }
      }' \
https://api.github.com/graphql
```

#### Example for GHE.com

You can use the following GitHub CLI commands to retrieve the `databaseId`. Replace SUBDOMAIN with your enterprise's subdomain of GHE.com.

  ```shell copy
  gh auth login -s 'read:enterprise' -h SUBDOMAIN.ghe.com

  gh api graphql --hostname SUBDOMAIN.ghe.com -f query='query($slug: String!) { enterprise (slug: $slug) { slug databaseId } }' -f slug='SUBDOMAIN'
  ```

### 2. Use a script to configure your Azure resources

Use the following script to set up a subnet for Azure private networking. The script creates all resources in the same resource group.

To use the script, fill in the placeholder environment variable values with the actual values and run the script from a bash shell or Windows Subsystem for Linux.

> [!NOTE]
> * Run the following script in the same directory where you saved the `actions-nsg-deployment.bicep` file.
> * When setting the `YOUR_AZURE_LOCATION` environment variable, use your region’s name. This value is different than your region’s display name. To see a list of names and display names, use `az account list-locations -o table`.
> * When you create the network settings resource, a service association link is applied to the subnet that you provide. This link prevents accidental deletion of the subnet while in use by the GitHub Actions service.
> * If you customize this script to use network resources in existing subnets, you must ensure any existing network interfaces (NICs) connected to the subnet are deleted before the subnet is delegated to the GitHub Actions service. Otherwise, the service will fail to apply the service association link to the subnet.

```bash copy
#!/bin/bash

# This script creates the following resources in the specified subscription:
# - Resource group
# - Network Security Group rules
# - Virtual network (vnet) and subnet
# - Network Settings with specified subnet and GitHub Enterprisedatabase ID
#
# It also registers the `GitHub.Network` resource provider with the subscription,
# delegates the created subnet to the Actions service via the `GitHub.Network/NetworkSettings`
# resource type, and applies the NSG rules to the created subnet.

# stop on failure
set -e

#set environment
export AZURE_LOCATION=YOUR_AZURE_LOCATION
export SUBSCRIPTION_ID=YOUR_SUBSCRIPTION_ID
export RESOURCE_GROUP_NAME=YOUR_RESOURCE_GROUP_NAME
export VNET_NAME=YOUR_VNET_NAME
export SUBNET_NAME=YOUR_SUBNET_NAME
export NSG_NAME=YOUR_NSG_NAME
export NETWORK_SETTINGS_RESOURCE_NAME=YOUR_NETWORK_SETTINGS_RESOURCE_NAME
export DATABASE_ID=YOUR_DATABASE_ID
export API_VERSION=2024-04-02

# These are the default values. You can adjust your address and subnet prefixes.
export ADDRESS_PREFIX=10.0.0.0/16
export SUBNET_PREFIX=10.0.0.0/24

echo
echo login to Azure
. az login --output none

echo
echo set account context $SUBSCRIPTION_ID
. az account set --subscription $SUBSCRIPTION_ID

echo
echo Register resource provider GitHub.Network
. az provider register --namespace GitHub.Network

echo
echo Create resource group $RESOURCE_GROUP_NAME at $AZURE_LOCATION
. az group create --name $RESOURCE_GROUP_NAME --location $AZURE_LOCATION

echo
echo Create NSG rules deployed with 'actions-nsg-deployment.bicep' file
. az deployment group create --resource-group $RESOURCE_GROUP_NAME --template-file ./actions-nsg-deployment.bicep --parameters location=$AZURE_LOCATION nsgName=$NSG_NAME

echo
echo Create vnet $VNET_NAME and subnet $SUBNET_NAME
. az network vnet create --resource-group $RESOURCE_GROUP_NAME --name $VNET_NAME --address-prefix $ADDRESS_PREFIX --subnet-name $SUBNET_NAME --subnet-prefixes $SUBNET_PREFIX

echo
echo Delegate subnet to GitHub.Network/networkSettings and apply NSG rules
. az network vnet subnet update --resource-group $RESOURCE_GROUP_NAME --name $SUBNET_NAME --vnet-name $VNET_NAME --delegations GitHub.Network/networkSettings --network-security-group $NSG_NAME

echo
echo Create network settings resource $NETWORK_SETTINGS_RESOURCE_NAME
. az resource create --resource-group $RESOURCE_GROUP_NAME --name $NETWORK_SETTINGS_RESOURCE_NAME --resource-type GitHub.Network/networkSettings --properties "{ \"location\": \"$AZURE_LOCATION\", \"properties\" : { \"subnetId\": \"/subscriptions/$SUBSCRIPTION_ID/resourceGroups/$RESOURCE_GROUP_NAME/providers/Microsoft.Network/virtualNetworks/$VNET_NAME/subnets/$SUBNET_NAME\", \"businessId\": \"$DATABASE_ID\" }}" --is-full-object --output table --query "{GitHubId:tags.GitHubId, name:name}" --api-version $API_VERSION

echo
echo To clean up and delete resources run the following command:
echo az group delete --resource-group $RESOURCE_GROUP_NAME
```

The script will return the full payload for the created resource. The `GitHubId` hash value returned in the payload for the created resource is the network settings resource ID you will use in the next steps while configuring a network configuration in GitHub.


## Creating a network configuration for your enterprise in GitHub

After configuring your Azure resources, you can use an Azure Virtual Network (VNET) for private networking by creating a network configuration at the enterprise or organization level. Then, you can associate that network configuration to runner groups.



Please note that initial setup must be at the enterprise level when creating the network settings configured with Azure. This is why, when obtaining the `databaseId`, the steps require you to configure the enterprise slug. Organizations are only allowed to create their own network configurations once the enterprise has been established and enabled through enterprise policy for hosted compute networking. For more information about runner groups, see [Control Access](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/control-access).



Once the network configuration is associated with a runner group, all runners in that group will have access to the Azure VNET that has been connected to the underlying configuration.

### Prerequisites

Ensure your Azure resources have been configured _before_ adding a network configuration in GitHub. For more information, see [Configuring Private Networking For GitHub Hosted Runners In Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/configuring-private-networking-for-github-hosted-runners-in-your-enterprise#configuring-your-azure-resources).


### 1. Add a new network configuration for your enterprise


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. In the left sidebar, click **Hosted compute networking**.
1. Click the **New network configuration** dropdown. Then click **Azure private network**.
1. Name your network configuration.
1. Click **Add Azure Virtual Network**.
1. In the popup window, enter the network settings resource ID you retrieved when you configured your Azure resources for private networking.
1. Click **Add Azure Virtual Network**.

### 2. Create a runner group for your enterprise

> [!NOTE]
> For the runner group to be accessible by repositories within your organizations, those repositories must have access to that runner group at the organization level. For more information, see [Control Access](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/control-access#changing-which-repositories-can-access-a-runner-group).

1. Create a new runner group for your enterprise. For more information about how to create a runner group, see [Control Access](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/control-access#creating-a-runner-group-for-an-enterprise).
1. To choose a policy for organization access, select the **Organization access** dropdown menu and click a policy. You can configure a runner group to be accessible to a specific list of organizations, or all organizations in the enterprise. By default, only private repositories can access runners in a runner group, but you can override this.

1. While configuring your runner group, under "Network configurations," use the dropdown menu to select the network configuration you created for the Azure VNET.
1. To create the group and apply the policy, click **Create group**.

### 3. Add the GitHub-hosted runner to the enterprise runner group

> [!NOTE]
> When adding your GitHub-hosted runner to a runner group, select the runner group you created in the previous procedures.

1. Add the GitHub-hosted runner to the runner group. For more information, see [Manage Larger Runners](https://docs.github.com/en/enterprise-cloud@latest/actions/how-tos/manage-runners/larger-runners/manage-larger-runners#adding-a-larger-runner-to-an-enterprise).

### 4. Optionally, manage network configurations


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. In the left sidebar, click **Hosted compute networking**.
1. To edit a network configuration, to the right of the network configuration, click {% octicon "pencil" aria-label="Edit a network configuration" %}. Then click **Edit configuration**.
1. To disable a network configuration, to the right of the network configuration, click {% octicon "kebab-horizontal" aria-label="Menu" %}. Then click **Disable**.
1. To delete a network configuration, to the right of the network configuration, click {% octicon "kebab-horizontal" aria-label="Menu" %}. Then click **Delete**.

### 5. Optionally, add a failover network to a network configuration

> [!NOTE]
> VNET failover is in public preview and subject to change.

You can configure a failover network for your network configuration. A failover network is a secondary Azure Virtual Network subnet, which can be in a different Azure region from your primary subnet. If your primary subnet becomes unavailable due to a regional outage or other disruption, you can enable the failover network to route runner traffic through the secondary subnet, maintaining continuity for your GitHub Actions workflows.

Key points about VNET failover:

* The failover subnet can reside in a different Azure region than the primary subnet.
* Switching between primary and failover subnets is a manual process. You enable or disable the failover network at your discretion.
* Both the primary and failover subnets must be configured with the required Azure resources (VNET/subnet, network settings, etc.) before you can use failover.
* The failover subnet must be in a [supported region](/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/about-azure-private-networking-for-github-hosted-runners-in-your-enterprise#about-supported-regions).


Before adding a failover network, ensure you have configured the Azure resources (VNET, subnet, network security group, and network settings resource) for the secondary subnet, following the same "Configuring your Azure resources" procedures above. The failover subnet can be in a different Azure region from your primary subnet.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. In the left sidebar, click **Hosted compute networking**.
1. Click the edit icon ({% octicon "pencil" aria-label="Edit a network configuration" %}) next to the network configuration you want to add a failover network to. Then click **Edit configuration**.
1. Click **Add failover network**.
1. In the popup window, enter the network settings resource ID for your secondary (failover) Azure subnet.
1. Click **Add Azure Virtual Network**.
1. You will now see two subnets listed in the network configuration: the primary and the failover, labeled accordingly.

### 6. Optionally, enable or disable the failover network

After adding a failover network, you can enable it to route traffic through the secondary subnet, or disable it to return to the primary subnet.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. In the left sidebar, click **Hosted compute networking**.
1. Click the edit icon ({% octicon "pencil" aria-label="Edit a network configuration" %}) next to the network configuration. Then click **Edit configuration**.
1. To switch to the failover network, click **Enable failover VNET**. Runner traffic will be routed through the failover subnet.
1. To switch back to the primary network, click **Disable failover VNET**. Runner traffic will return to the primary subnet.


## Enabling creation of network configurations for organizations

You can allow organization owners in an enterprise to create their own organization-level network configurations.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Click **Hosted compute networking**.
1. Under "Hosted compute networking," click **Enable**.
1. Click **Save**.

## Deleting a subnet

When you create the network settings resource, a service association link is applied to the subnet that you provide. This link prevents accidental deletion of the subnet while in use by the GitHub Actions service.

To delete the subnet, this service association link needs to be removed first. The service association link is safely removed automatically once the network settings resource is deleted.

To delete the network settings resource, the network configuration that uses it needs to be deleted first.



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.


1. In the left sidebar, click **Hosted compute networking**.
1. Open the network configuration that is using the subnet that you want to delete.
1. Review the list of runner groups using the network configuration.
1. In the top-right corner, click the "{% octicon "kebab-horizontal" aria-label="Menu" %}" button. Then click **Delete configuration**.
1. To delete the network settings resource and remove the service association link, use your own inputs with following commands with the Azure CLI. For more information, see the [Azure Command-Line Interface (CLI)](https://learn.microsoft.com/en-us/cli/azure/) documentation.

   ```bash copy
   az account set --subscription $SUBSCRIPTION_ID
   az resource delete -g $RESOURCE_GROUP_NAME --name $NETWORK_SETTINGS_RESOURCE_NAME --resource-type 'GitHub.Network/networkSettings' --api-version $API_VERSION
   ```

1. Delete the subnet in Azure. For more information, see [Delete a subnet](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal#delete-a-subnet) on Microsoft Learn.
