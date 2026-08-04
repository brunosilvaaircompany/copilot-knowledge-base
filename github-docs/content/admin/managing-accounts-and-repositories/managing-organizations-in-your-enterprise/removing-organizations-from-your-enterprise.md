# Removing organizations from your enterprise

You can remove an organization that is owned by your enterprise account, so the organization stands alone.

## Limitations

If you use Enterprise Managed Users or GitHub Enterprise Cloud with data residency, removing organizations from your enterprise is not possible.

If you use Enterprise Managed Users, you can instead migrate organizations with the GitHub Enterprise Importer. See [About Migrations Between GitHub Products](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-between-github-products/about-migrations-between-github-products).

## What happens when an organization is removed?

When you remove an organization from your enterprise:

* Billing, identity management, 2FA requirements, and other policies for the organization will no longer be governed by your enterprise.
* The organization will be downgraded to the free plan.
* The organization will be governed by our standard Terms of Service.
* Any internal repositories within the organization will be converted to private repositories.
* Depending on your policy settings, people who are not members of any other organization may remain in the enterprise as unaffiliated users. These users retain access to Copilot if they were granted access directly from the enterprise. See [Control Offboarding](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/control-offboarding).
* Any IP allow list configured for the organization will be disabled, as IP allow lists are only available on GitHub Enterprise Cloud. See [Managing Allowed Ip Addresses For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization).

As part of the downgrade to the free plan:

* Protected branch and ruleset configurations will be retained in your settings, but will no longer be applied in private repositories.
* Existing pull request drafts will remain in draft status. New drafts cannot be created.
* CODEOWNERS files will no longer be applied in private repositories.
* Private GitHub Pages sites will no longer be available.
* Wikis will be retained, but won't be visible unless the organization is upgraded to GitHub Team.
* Secrets will be retained, but will not be accessible in private repositories unless the organization is upgraded to GitHub Team.

## Removing an organization from your enterprise


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. In the left sidebar, click **Organizations**.
1. In the search bar, begin typing the organization's name until the organization appears in the search results.
1. To the right of the organization's name, select the ... dropdown menu and click **Remove organization**.

 ![Expanded dropdown menu labeled with "...", for an organization. The "Remove organization" option outlined.](/assets/images/help/enterprises/remove-organization.png)

1. Review the warnings, decide whether to also remove users who will become unaffiliated, then click **Remove organization**.

## Further reading

* [Enterprise Accounts](https://docs.github.com/en/admin/concepts/enterprise-fundamentals/enterprise-accounts)
