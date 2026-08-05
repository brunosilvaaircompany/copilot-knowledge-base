# Manage access

To migrate repositories from Azure DevOps to GitHub, you need sufficient access to the **source** (an organization on Azure DevOps) and the **destination** (an organization on GitHub). After you complete the steps in this article, your access and permissions will ready for your migration.

## Decide who will perform the migration

If the person who will perform the migration is **not** a GitHub organization owner, a GitHub organization owner must first grant them the migrator role.

* If you're a GitHub organization owner, and intend to perform the migration yourself, you can continue reading this guide.
* If you wish to assign the migrator role to someone else, do that now. Then, the migrator should perform the rest of the steps in these guides. See [Granting The Migrator Role](https://docs.github.com/en/migrations/ado/granting-the-migrator-role).

## Create a personal access token (classic) on GitHub

Next, you will need to create a personal access token (classic) which the ADO2GH extension of the GitHub CLI will use to communicate with GitHub. The scopes that are required for your GitHub personal access token (classic) depend on your role and the task you want to complete.

> [!NOTE]
> You can only use a personal access token (classic), not a fine-grained personal access token.
 This means that you cannot use GitHub Enterprise Importer if your organization uses the "Restrict personal access tokens (classic) from accessing your organizations" policy. For more information, see [Enforcing Policies For Personal Access Tokens In Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise#restricting-access-by-personal-access-tokens).

Task | Organization owner | Migrator
---- | -------- | ----- |
Assigning the migrator role for repository migrations | `admin:org` | {% octicon "dash" aria-label="Not applicable" %}
Running a repository migration (destination organization) | `repo`, `workflow`, `admin:org` | `repo`, `workflow`, `read:org`
Downloading a migration log | `repo`, `workflow`, `admin:org` | `repo`, `workflow`, `read:org`
Reclaiming mannequins | `repo`, `workflow`, `admin:org` | {% octicon "dash" aria-label="Not applicable" %}


To learn how to create the token, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

## Create a Personal access token on Azure

Your Azure DevOps personal access token must have `work item (read)`, `code (read)`, and `identity (read)` scopes.

We recommend that you grant full access to your personal access token so you can use the `inventory-report` flag in phase 4.

If you want to migrate from multiple organizations, allow the personal access token to access all accessible organizations.

See [Use personal access tokens](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=preview-page#create-a-pat) in Microsoft Docs.

## Configure IP allow lists on GitHub

If you use GitHub's IP allow list feature, you must add the GitHub IP ranges below to the allow list for the source and/or destination organizations.

If your destination organization is on GitHub.com, you will need to allow the following IP addresses:

* 192.30.252.0/22
* 185.199.108.0/22
* 140.82.112.0/20
* 143.55.64.0/20
* 135.234.59.224/28 (added July 28, 2025)
* 2a0a:a440::/29
* 2606:50c0::/32
* 20.99.172.64/28 (added July 28, 2025)

See [Managing Allowed Ip Addresses For Your Organization](https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization) and [Restricting Network Traffic To Your Enterprise With An Ip Allow List](https://docs.github.com/en/enterprise-cloud@latest/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list).

## Temporarily configure your identity provider's (IdP) restrictions

If you use your IdP's IP allow list (such as Azure CAP) to restrict access to your enterprise on GitHub, you should disable these restrictions in your enterprise account settings until after your migration is complete.

## Allow migrations to bypass repository rulesets

If the destination organization or enterprise has rulesets enabled, the migrated repository's history may violate those rules. To allow the migration without disabling your rulesets, add "Repository migrations" to the bypass list for each applicable ruleset.  This bypass applies only during the migration. Once complete, rulesets will be enforced on all new contributions.

To configure the bypass:

1. Navigate to each enterprise or organization ruleset.
1. In the "Bypass list" section, click **Add bypass**.
1. Select **Repository migrations**.

For more information, see [Creating Rulesets For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization) and [Setting Ruleset Bypasses For Repository Migrations](https://docs.github.com/en/enterprise-cloud@latest/migrations/troubleshooting/setting-ruleset-bypasses-for-repository-migrations).
