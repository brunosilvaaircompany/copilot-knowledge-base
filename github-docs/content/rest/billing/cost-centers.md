# Cost centers

## Authentication

GitHub App authentication for enterprise cost center and budget endpoints is not generally available. The "Enterprise billing" permission shown in the generated endpoint details is not available to all enterprises when registering an enterprise-owned GitHub App, on either GitHub.com or GHE.com.

The generated endpoint descriptions and authentication tables do not indicate whether your enterprise can grant this permission. Do not plan an integration using GitHub App user or installation access tokens unless your enterprise can grant this permission.

For enterprise owners and billing managers, use a personal access token (classic) or an OAuth access token with the `manage_billing:enterprise` scope. The token's user must have access to the resources being requested. Fine-grained personal access tokens cannot access these enterprise endpoints. See [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).


## Required roles

The following roles can access cost center API endpoints:

* **Enterprise owners**
* **Billing managers**
* **Organization owners**
