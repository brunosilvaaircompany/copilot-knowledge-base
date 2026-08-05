# Managing access for a migration from Bitbucket Server

## About required access for GitHub Enterprise Importer

To protect your data, GitHub enforces specific access requirements to use GitHub Enterprise Importer. These requirements vary based on the task you are trying to perform. To prevent errors, you should review this article carefully and verify that you meet all of the requirements for the task you want to complete.


To migrate a repository from Bitbucket Server to GitHub, you need sufficient access to both the source (your Bitbucket Server instance) and the destination (an organization on GitHub). To have sufficient access, you'll need all of the following things.
* A required role in the destination organization on GitHub
* A personal access token that can access the destination organization on GitHub
  * The personal access token must have all the required scopes, which depend on your role and the task you want to complete.
  * If the destination organization uses SAML single sign-on for GitHub, you must authorize the personal access token for SSO.
* On Bitbucket Server, required permissions and SFTP or SMB access

Additionally, if you use IP allow lists in the destination organization, you may need to configure the allow lists to allow access by GitHub Enterprise Importer.

## About the migrator role

To remove the need for organization owners to complete migrations, GitHub includes a distinct role for using GitHub Enterprise Importer.

Granting the migrator role allows you to designate other teams or individuals to handle your migrations.

* You can only grant the migrator role for an organization on GitHub.com or GHE.com.
* You can grant the migrator role to an individual user or a team. We strongly recommend that you assign the migrator role to a team. Then, you can further customize who can run a migration by adjusting team membership. See [Adding Organization Members To A Team](https://docs.github.com/en/organizations/organizing-members-into-teams/adding-organization-members-to-a-team) or [Removing Organization Members From A Team](https://docs.github.com/en/organizations/organizing-members-into-teams/removing-organization-members-from-a-team).
* The migrator must use a personal access token that meets all the requirements for running migrations.

> [!WARNING]
> When you grant the migrator role in an organization to a user or team, you are granting them the ability to import or export any repository in that organization.

To grant the migrator role, see [Granting the migrator role](#granting-the-migrator-role).


<span id="required-roles"></span>

## Required roles for GitHub

For the destination organization on GitHub, different roles are required for different tasks.

The following table lists which tasks can be performed by which role.

Task | Organization owner | Migrator |
---- | ------- | ----- |
Assigning the migrator role for repository migrations | {% octicon "check" aria-label="Can perform" %} | {% octicon "x" aria-label="Cannot perform" %} |
Running a repository migration | {% octicon "check" aria-label="Can perform" %} | {% octicon "check" aria-label="Can perform" %} |
Downloading a migration log | {% octicon "check" aria-label="Can perform" %} | {% octicon "check" aria-label="Can perform" %} |
Reclaiming mannequins | {% octicon "check" aria-label="Can perform" %} | {% octicon "x" aria-label="Cannot perform" %} |


## Required scopes for personal access tokens

To run a migration, you need a personal access token that can access the destination organization on GitHub.

The scopes that are required for your GitHub personal access token (classic) depend on your role and the task you want to complete.

> [!NOTE]
> You can only use a personal access token (classic), not a fine-grained personal access token.
 This means that you cannot use GitHub Enterprise Importer if your organization uses the "Restrict personal access tokens (classic) from accessing your organizations" policy. For more information, see [Enforcing Policies For Personal Access Tokens In Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise#restricting-access-by-personal-access-tokens).

Task | Organization owner | Migrator
---- | -------- | ----- |
Assigning the migrator role for repository migrations | `admin:org` | {% octicon "dash" aria-label="Not applicable" %}
Running a repository migration (destination organization) | `repo`, `workflow`, `admin:org` | `repo`, `workflow`, `read:org`
Downloading a migration log | `repo`, `workflow`, `admin:org` | `repo`, `workflow`, `read:org`
Reclaiming mannequins | `repo`, `workflow`, `admin:org` | {% octicon "dash" aria-label="Not applicable" %}


## Required permissions for Bitbucket Server

To migrate from Bitbucket Server, you need:

* The username and password of a Bitbucket Server account that has admin or super admin permissions
* If your Bitbucket Server instances runs on Linux, SFTP access to the Bitbucket Server instance (see [SSH keys](#ssh-keys)). In general, if you can access the server via SSH, then you can also use SFTP.
* If your Bitbucket Server instance runs on Windows, file sharing (SMB) access to the Bitbucket Server instance

### SSH keys

If your Bitbucket Server instance runs on Linux, you must use an SSH key that meets the following requirements:

* Does not have a passphrase
* Uses one of the following ciphers
  * `aes256-ctr`
  * `3des-cbc`
  * `aes128-cbc`
  * `aes192-cbc`
  * `aes256-cbc`
  * `blowfish-cbc`
  * `twofish-cbc`
  * `twofish192-cbc`
  * `twofish128-cbc`
  * `twofish256-cbc`
  * `arcfour`
  * `arcfour128`
  * `arcfour256`
  * `cast128-cbc`
  * `aes128-ctr`
  * `aes192-ctr`

If you receive an error like `cipher name aes256-ctr for openssh key file is not supported` when running a migration, your SSH private key uses an unsupported cipher. For more information about how to generate a compatible private key, see [Troubleshooting Your Migration With GitHub Enterprise Importer](https://docs.github.com/en/migrations/troubleshooting/troubleshooting-your-migration-with-github-enterprise-importer#cipher-name-is-not-supported-error).

## Granting the migrator role

To allow someone other than an organization owner to run a migration or download migration logs, you can grant the migrator role to a user or team. For more information, see [About the migrator role](#about-the-migrator-role).

You can grant the migrator role using either the BBS2GH extension of the GitHub CLI or the GraphQL API.

* [Granting the migrator role with the BBS2GH extension](#granting-the-migrator-role-with-the-bbs2gh-extension)
* [Granting the migrator role with the GraphQL API](#granting-the-migrator-role-with-the-graphql-api)

### Granting the migrator role with the BBS2GH extension

To grant the migrator role using the CLI, you must have installed the BBS2GH extension of the GitHub CLI. For more information, see [Migrating Repositories From Bitbucket Server To GitHub Enterprise Cloud](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/migrating-repositories-from-bitbucket-server-to-github-enterprise-cloud#step-1-install-the-bbs2gh-extension-of-the-github-cli).

1. On GitHub, create and record a personal access token that meets all the requirements for granting the migrator role. For more information, see [Creating a personal access token for GitHub Enterprise Importer](#creating-a-personal-access-token-for-github-enterprise-importer).
1. Set the personal access token as an environment variable, replacing TOKEN in the commands below with the personal access token you recorded above.

   * If you're using Terminal, use the `export` command.

      ```shell copy
      export GH_PAT="TOKEN"
      ```

   * If you're using PowerShell, use the `$env` command.

      ```shell copy
      $env:GH_PAT="TOKEN"
      ```

1. Use the `gh bbs2gh grant-migrator-role` command, replacing ORGANIZATION with the organization you want to grant the migrator role for, ACTOR with the user or team name, and TYPE with `USER` or `TEAM`.

   ```shell copy
   gh bbs2gh grant-migrator-role --github-org ORGANIZATION --actor ACTOR --actor-type TYPE
   ```

   >[!NOTE] If you're granting the migrator role for GHE.com, you must also include the target API URL for your enterprise's subdomain. For example: `--target-api-url https://api.octocorp.ghe.com`.


### Granting the migrator role with the GraphQL API

You can use the `grantMigratorRole` GraphQL mutation to assign the migrator role and the `revokeMigratorRole` mutation to revoke the migrator role.

You must use a personal access token (PAT) that meets all access requirements. For more information, see the [Required scopes for personal access tokens](#required-scopes-for-personal-access-tokens).

#### `grantMigratorRole` mutation

This GraphQL mutation sets the migration role.

```graphql
mutation grantMigratorRole (
  $organizationId: ID!,
  $actor: String!,
  $actor_type: ActorType!
) {
  grantMigratorRole( input: {
    organizationId: $organizationId,
    actor: $actor,
    actorType: $actor_type
  })
   { success }
}
```

| Query variable | Description |
|----|----|
| `organizationId` | The `ownerId` (or organization ID) for your organization, from the `GetOrgInfo` query.
| `actor` | The team or username who you want to assign the migration role to.
| `actor_type` | Specify whether the migrator is a `USER` or `TEAM`.

#### `revokeMigratorRole` mutation

This mutation removes the migrator role.

```graphql
mutation revokeMigratorRole (
  $organizationId: ID!,
  $actor: String!,
  $actor_type: ActorType!
) {
  revokeMigratorRole( input: {
    organizationId: $organizationId,
    actor: $actor,
    actorType: $actor_type
  })
   { success }
}
```


## Creating a personal access token for GitHub Enterprise Importer

1. Verify that you have a sufficient role for the task you want to complete. For more information, see [Required roles](#required-roles-for-github).
1. Create a personal access token (classic), making sure to grant all the scopes required for the task you want to complete. You can only use a personal access token (classic), not a fine-grained personal access token.
 For more information, [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) and [Required scopes for personal access token](#required-scopes-for-personal-access-tokens).
1. If SAML single sign-on is enforced for the organization(s) you need to access, authorize the personal access token for SSO. For more information, see [Authorizing A Personal Access Token For Use With Single Sign On](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-single-sign-on/authorizing-a-personal-access-token-for-use-with-single-sign-on).


## Configuring IP allow lists for migrations

If the destination of your migration uses an IP allow list (either GitHub's IP allow list feature or your identity provider's (IdP) IP allow list restrictions), you need to configure IP allow lists on GitHub.

* If you use GitHub's IP allow list feature, you must add the GitHub IP ranges below to the allow list for the destination organization.
* If you use your IdP's IP allow list to restrict access to your enterprise on GitHub, you should disable these restrictions in your enterprise account settings until after your migration is complete.

For more information, see [Managing Allowed Ip Addresses For Your Organization](https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization) and [Restricting Network Traffic To Your Enterprise With An Ip Allow List](https://docs.github.com/en/enterprise-cloud@latest/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list).

### IP ranges for GitHub.com

You'll need to add the following IP ranges to your IP allow list(s):

* 192.30.252.0/22
* 185.199.108.0/22
* 140.82.112.0/20
* 143.55.64.0/20
* 135.234.59.224/28 (added July 28, 2025)
* 2a0a:a440::/29
* 2606:50c0::/32
* 20.99.172.64/28 (added July 28, 2025)

You can get an up-to-date list of IP ranges used by GitHub Enterprise Importer at any time with the "Get GitHub meta information" endpoint of the REST API.

The `github_enterprise_importer` key in the response contains a list of IP ranges used for migrations.

For more information, see [Meta](https://docs.github.com/en/rest/meta#get-github-meta-information).


### Virtual network firewall rules for Azure Blob Storage for GitHub.com

Customers with Azure Blob Storage configured for storing repository data for migrations must add virtual network firewall rules to their storage accounts to allow GEI to access the repository data. This requires the use of the Azure CLI or PowerShell, as adding these virtual network firewall rules on the Azure Portal is currently unsupported. The following virtual network subnet IDs must be added to the virtual network firewall rules for your storage account:

* `/subscriptions/cdf1c65c-e6f4-43b3-945f-c5280f104f9c/resourceGroups/ghr-network-service-1a72ec6f-45b6-44be-a4bd-f0fe50079c9f-5-westus2/providers/Microsoft.Network/virtualNetworks/1a72ec6f-45b6-44be-a4bd-f0fe50079c9f-5/subnets/1a72ec6f-45b6-44be-a4bd-f0fe50079c9f-5`
* `/subscriptions/173ad082-b20d-4d44-8257-7fbf34959bed/resourceGroups/ghr-network-service-1a72ec6f-45b6-44be-a4bd-f0fe50079c9f-5-westus3/providers/Microsoft.Network/virtualNetworks/1a72ec6f-45b6-44be-a4bd-f0fe50079c9f-5/subnets/1a72ec6f-45b6-44be-a4bd-f0fe50079c9f-5`

To add the virtual network firewall rules to your Azure Storage account, you can follow step 5 in the documentation for [creating a virtual network rule for Azure Storage](https://learn.microsoft.com/azure/storage/common/storage-network-security-virtual-networks?tabs=azure-cli) using the network subnet IDs provided above. Be sure to provide the `--subscription` argument with the subscription ID tied to the storage account.


### IP ranges for GHE.com

You must allow:

* Ranges required for everyone
* Additional ranges that depend on your data residency region

For the ranges to add, see [Network Details For Ghecom](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/network-details-for-ghecom#ip-ranges-for-github-enterprise-importer).


In addition, if you are using a blob storage account with firewall rules:

* You must allow access to the egress IP ranges for GHE.com. See [Network Details For Ghecom](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/network-details-for-ghecom#githubs-ip-addresses).
* If you are using Azure Blob Storage you may need to perform some additional network configuration. This may occur if your Azure Blob Storage happens to be located in the same region as the GitHub Enterprise Importer service's compute. Please contact [GitHub Support](https://support.github.com).


## Further reading

* [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)
