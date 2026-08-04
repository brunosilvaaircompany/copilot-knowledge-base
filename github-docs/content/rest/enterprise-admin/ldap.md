# REST API endpoints for LDAP

## About LDAP

You can use these endpoints to update the Distinguished Name (DN) that a user or team maps to. Note that in most cases, you must have [LDAP Sync enabled](/admin/managing-iam/using-ldap-for-enterprise-iam/using-ldap) for your GitHub Enterprise Server appliance. The [Update LDAP mapping for a user](#update-ldap-mapping-for-a-user) endpoint can be used when LDAP is enabled, even if LDAP Sync is disabled.

> [!NOTE]
> These endpoints only support authentication using a personal access token (classic). For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).
