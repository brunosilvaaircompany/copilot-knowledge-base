# About networking for hosted compute products in your enterprise

## About network configurations

Network configurations provide an overarching construct to manage private networking settings for GitHub-hosted compute products including GitHub-hosted runners.

By customizing network configurations for hosted compute products, you can securely access private resources, control outbound network access, and monitor network traffic. This allows you to control and manage network security for your development and CI/CD managed infrastructure within a single place.


## About Azure private networking for GitHub-hosted runners

You can use GitHub-hosted runners in an Azure VNET. This enables you to use GitHub-managed infrastructure for CI/CD while providing you with full control over the networking policies of your runners. For more information about Azure VNET, see [What is Azure Virtual Network?](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview) in the Azure documentation.


For more information about using GitHub-hosted runners with an Azure VNET, see [About Azure Private Networking For GitHub Hosted Runners In Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/about-azure-private-networking-for-github-hosted-runners-in-your-enterprise).

To use GitHub-hosted runners with an Azure VNET, you will need to configure your Azure resources and then create a networking configuration in GitHub.



For procedures to configure Azure private networking at the organization level, see [Configuring Private Networking For GitHub Hosted Runners In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/configuring-private-networking-for-github-hosted-runners-in-your-organization).





By default, organizations in an enterprise cannot create new network configurations and only inherit enterprise-level network configurations. Enterprise owners can set a policy that allows organizations in the enterprise to create network configurations that are independent of the enterprise. For more information, see [Configuring Private Networking For GitHub Hosted Runners In Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/configuring-private-networking-for-github-hosted-runners-in-your-enterprise#enabling-creation-of-network-configurations-for-organizations).


For procedures to configure Azure private networking at the enterprise level, see [Configuring Private Networking For GitHub Hosted Runners In Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/configuring-private-networking-for-github-hosted-runners-in-your-enterprise).

For procedures to configure Azure private networking at the organization level, see [Configuring Private Networking For GitHub Hosted Runners In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/configuring-private-networking-for-github-hosted-runners-in-your-organization).
