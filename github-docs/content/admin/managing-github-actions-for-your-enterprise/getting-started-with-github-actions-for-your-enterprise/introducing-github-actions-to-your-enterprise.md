# Introducing GitHub Actions to your enterprise

## About GitHub Actions for enterprises

GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline.
 With GitHub Actions, your enterprise can automate, customize, and execute your software development workflows like testing and deployments. For more information, see [About GitHub Actions For Enterprises](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises).

Before you introduce GitHub Actions to a large enterprise, you first need to plan your adoption and make decisions about how your enterprise will use GitHub Actions to best support your unique needs.

## Governance and compliance

You should create a plan to govern your enterprise's use of GitHub Actions and meet your compliance obligations.

Determine which actions and reusable workflows your developers will be allowed to use. First, decide whether you'll enable access to actions {% ifversion actions-workflow-policy %}and reusable workflows from outside your instance. If users in your enterprise need access to other actions from GitHub.com or GitHub Marketplace, there are a few configuration options.
 For more information, see [About Using Actions In Your Enterprise](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise).

Then,{% else %}First,{% endif %} decide whether you'll allow third-party actions and reusable workflows that were not created by GitHub. You can configure the actions and reusable workflows that are allowed to run at the repository, organization, and enterprise levels and can choose to only allow actions that are created by GitHub. If you do allow third-party actions and reusable workflows, you can limit allowed actions to those created by verified creators or a list of specific actions and reusable workflows.

For more information, see [Managing GitHub Actions Settings For A Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-github-actions-permissions-for-your-repository), [Disabling Or Limiting GitHub Actions For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization), and [Enforcing Policies For GitHub Actions In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-to-restrict-the-use-of-github-actions-in-your-enterprise).

Consider combining OpenID Connect (OIDC) with reusable workflows to enforce consistent deployments across your repository, organization, or enterprise. You can do this by defining trust conditions on cloud roles based on reusable workflows. For more information, see [Oidc With Reusable Workflows](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-with-reusable-workflows).

You can access information about activity related to GitHub Actions in the audit logs for your enterprise. If your business needs require retaining this information longer than audit log data is retained, plan how you'll export and store this data outside of GitHub. For more information, see [Exporting Audit Log Activity For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise) and [Streaming The Audit Log For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise).

You can practice the principle of least privilege by administering custom organization roles for access to settings in your GitHub Actions CI/CD pipeline. For more information about custom organization roles, see [Permissions Of Custom Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles).

## Security

You should plan your approach to security hardening for GitHub Actions.

### Security hardening individual workflows and repositories

Make a plan to enforce good security practices for people using GitHub Actions features within your enterprise. For more information about these practices, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use).

You can also encourage reuse of workflows that have already been evaluated for security. For more information, see [Innersourcing](#innersourcing).

### Securing access to secrets and deployment resources

You should plan where you'll store your secrets. We recommend storing secrets in GitHub, but you might choose to store secrets in a cloud provider.

In GitHub, you can store secrets at the repository or organization level. Secrets at the repository level can be limited to workflows in certain environments, such as production or testing. For more information, see [Use Secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets).

You should consider adding manual approval protection for sensitive environments, so that workflows must be approved before getting access to the environments' secrets. For more information, see [Manage Environments](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments).

### Security considerations for third-party actions

There is significant risk in sourcing actions from third-party repositories on GitHub. If you do allow any third-party actions, you should create internal guidelines that encourage your team to follow best practices, such as pinning actions to the full commit SHA. For more information, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use#using-third-party-actions).



### Private networking with GitHub-hosted runners

You can use GitHub-hosted runners in an Azure VNET. This enables you to use GitHub-managed infrastructure for CI/CD while providing you with full control over the networking policies of your runners. For more information about Azure VNET, see [What is Azure Virtual Network?](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview) in the Azure documentation.
 For more information, see [About Azure Private Networking For GitHub Hosted Runners In Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/about-azure-private-networking-for-github-hosted-runners-in-your-enterprise).



## Innersourcing

Think about how your enterprise can use features of GitHub Actions to innersource automation. Innersourcing is a way to incorporate the benefits of open source methodologies into your internal software development cycle. For more information, see [An introduction to innersource](https://resources.github.com/whitepapers/introduction-to-innersource/) in GitHub Resources.


To share actions across your enterprise without publishing the actions publicly, you can store the actions in an internal repository, then configure the repository to allow access to GitHub Actions workflows in other repositories owned by the same organization or by any organization in the enterprise. For more information, see [Share With Your Enterprise](https://docs.github.com/en/actions/how-tos/reuse-automations/share-with-your-enterprise).



With reusable workflows, your team can call one workflow from another workflow, avoiding exact duplication. Reusable workflows promote best practice by helping your team use workflows that are well designed and have already been tested. For more information, see [Reuse Workflows](https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows).

To provide a starting place for developers building new workflows, you can use workflow templates. This not only saves time for your developers, but promotes consistency and best practice across your enterprise. For more information, see [Create Workflow Templates](https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates).

## Managing resources

You should plan for how you'll manage the resources required to use GitHub Actions.



### Hardware requirements

You may need to upgrade the CPU and memory resources for {% ifversion ghes %}your GitHub Enterprise Server instance to handle the load from GitHub Actions without causing performance loss. For more information, see [Getting Started With GitHub Actions For GitHub Enterprise Server](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements).
{% endif %}

### Runners

GitHub Actions workflows require runners. You can choose to use GitHub-hosted runners or self-hosted runners. GitHub manages maintenance and upgrades for GitHub-hosted runners. For more information, see [GitHub Hosted Runners](https://docs.github.com/en/actions/concepts/runners/github-hosted-runners).

To manage your own resources, configuration, or geographic location of your runner machines, use self-hosted runners. For more information, see [Self Hosted Runners](https://docs.github.com/en/actions/concepts/runners/self-hosted-runners).

If you want more control over the networking policies for your runners, use self-hosted runners or private networking options for GitHub-hosted runners. For more information about private networking options, see [Private Networking](https://docs.github.com/en/actions/concepts/runners/private-networking).

If you are using self-hosted runners, you have to decide whether you want to use physical machines, virtual machines, or containers. Physical machines will retain remnants of previous jobs, and so will virtual machines unless you use a fresh image for each job or clean up the machines after each job run. If you choose containers, you should be aware that the runner auto-updating will shut down the container, which can cause workflows to fail. You should come up with a solution for this by preventing auto-updates or skipping the command to kill the container.

You also have to decide where to add each runner. You can add a self-hosted runner to an individual repository, or you can make the runner available to an entire organization or your entire enterprise. Adding runners at the organization or enterprise levels allows sharing of runners, which might reduce the size of your runner infrastructure. You can use policies to limit access to self-hosted runners at the organization and enterprise levels by assigning groups of runners to specific repositories or organizations. For more information, see [Add Runners](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/add-runners) and [Manage Access](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access). You can also use policies to prevent people using repository-level self-hosted runners. For more information, see [Enforcing Policies For GitHub Actions In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#runners).

You should consider using autoscaling to automatically increase or decrease the number of available self-hosted runners. For more information, see [Self Hosted Runners](https://docs.github.com/en/actions/reference/runners/self-hosted-runners).

Finally, you should consider security hardening for self-hosted runners. For more information, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use#hardening-for-self-hosted-runners).

### Storage

Artifacts enable you to share data between jobs in a workflow and store data once that workflow has completed.
 For more information, see [Store And Share Data](https://docs.github.com/en/actions/tutorials/store-and-share-data).

GitHub Actions also has a caching system that you can use to cache dependencies to speed up workflow runs. For more information, see [Dependency Caching](https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching).

You must configure external blob storage for workflow artifacts, caches, and other workflow logs. Decide which supported storage provider your enterprise will use. For more information, see [Getting Started With GitHub Actions For GitHub Enterprise Server](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#external-storage-requirements).


You can use policy settings for GitHub Actions to customize the storage of workflow artifacts, caches, and log retention. For more information, see [Enforcing Policies For GitHub Actions In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise).


Some storage is included in your subscription, but additional storage will affect your bill. You should plan for this cost. For more information, see [GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions).


## Tracking usage

You should consider making a plan to track your enterprise's usage of GitHub Actions, such as how often workflows are running, how many of those runs are passing and failing, and which repositories are using which workflows.


You can see basic details of storage and data transfer usage of GitHub Actions for each organization in your enterprise via your billing settings. For more information, see [View Productlicense Use](https://docs.github.com/en/billing/how-tos/products/view-productlicense-use#organization-and-enterprise-accounts).

> [!NOTE] Enterprise-level metrics for GitHub Actions is in public preview and subject to change.

You can view both usage and performance data for your enterprise under the "Insights" tab. These metrics provide the same GitHub Actions data available at the repository and organization levels but aggregated for your entire enterprise. If you need more detailed insights, see [Viewing GitHub Actions metrics for your organization](/actions/how-tos/administer/view-metrics#viewing-github-actions-metrics-for-your-organization) or [Viewing GitHub Actions metrics for your repository](/actions/how-tos/administer/view-metrics#viewing-github-actions-metrics-for-your-repository).

For more detailed usage data at a per job or per workflow level, you can use webhooks to subscribe to information about workflow jobs and workflow runs. For more information, see [About Webhooks](https://docs.github.com/en/webhooks/about-webhooks).

Make a plan for how your enterprise can pass the information from these webhooks into a data archiving system, and plan how you'll enable your teams to get the data they need from your archiving system.
