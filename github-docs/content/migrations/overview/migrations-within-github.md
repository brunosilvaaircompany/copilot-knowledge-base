# About migrations between GitHub products

## When would I migrate between platforms?

You can use GitHub's migration tools to move **between** GitHub platforms. For example:

* If you want to adopt GitHub Enterprise Cloud with data residency, you can migrate your enterprise to GHE.com.
* To use certain features on GitHub.com, such as Enterprise Managed Users or new billing models, you can migrate between enterprises on GitHub.com.
* To benefit from the simplified administration and new features of GitHub Enterprise Cloud, you can migrate from GitHub Enterprise Server.

## Considerations for migrations to GitHub Enterprise Cloud

* If you **already use GitHub Enterprise Cloud**: A GitHub Enterprise plan entitles you to **only one** deployment of GitHub Enterprise Cloud.

  For example, if you already use GitHub.com, and you also want to migrate from GitHub Enterprise Server to GHE.com, your usage for both won't be covered under a single plan.
* If you're **migrating to Enterprise Managed Users**: You will need to integrate with an identity provider to manage user accounts. Check the level of support for your identity provider before you start. See [Enterprise Managed Users](https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users#how-does-emus-integrate-with-identity-management-systems).
* If you're **migrating from GitHub Enterprise Server**: Be aware that GitHub applies rate limits to certain actions, which are disabled by default on GitHub Enterprise Server. See [Rate Limits For The Rest API](https://docs.github.com/en/enterprise-cloud@latest/rest/using-the-rest-api/rate-limits-for-the-rest-api).
* If you're **migrating to GitHub Enterprise Cloud with data residency**: Be aware that certain features are unavailable, and some features require different or additional configuration. See [Feature Overview For GitHub Enterprise Cloud With Data Residency](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/feature-overview-for-github-enterprise-cloud-with-data-residency).

## Available tools

For an overview of available tooling for your migration path, see [Migration Paths To GitHub](https://docs.github.com/en/migrations/overview/migration-paths-to-github).
