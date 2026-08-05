# GitHub credential types reference

This article provides a consolidated reference for all programmatic credential types that can access GitHub. Use this reference to audit activity and manage credential revocation, especially during security incidents.

## Credential types overview

The following table lists all credential types that can programmatically access GitHub.

| Credential type | Credential prefix | Lifespan | Revocation | Associated with |
|-----------------|-----------------|----------|------------|-----------------|
| [Personal access token (classic)](#personal-access-token-classic) | `ghp_` | Long-lived | Manual | User account |
|[Fine-grained personal access token](#fine-grained-personal-access-token) | `github_pat_` | Configurable (up to 1 year, or no expiration) | Manual | User account |
| [OAuth app access token](#oauth-app-access-tokens) | `gho_` | Long-lived | Manual | User account |
| [GitHub App user access token](#github-app-user-access-tokens) | `ghu_` | Short-lived (8 hours) | Automatic expiry or manual | User account |
| [GitHub App installation access token](#github-app-installation-access-tokens) | `ghs_` | Short-lived (1 hour) | Automatic expiry | App installation |
| [GitHub App refresh token](#github-app-refresh-tokens) | `ghr_` | Long-lived (6 months) | Manual | User account |
| [User SSH key](#user-ssh-keys) | Not applicable | Long-lived | Manual | User account |
| [Deploy key](#deploy-keys) | Not applicable | Long-lived | Manual | Repository |
| [`GITHUB_TOKEN`](#github_token-github-actions) (GitHub Actions) | Not applicable | Short-lived (job duration) | Automatic expiry | Workflow run |

## Credential revocation

The following sections describe revocation options for each credential type based on your role. See also [Token Expiration And Revocation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation).


> [!NOTE] Enterprise owners have options for taking action against individual members or in bulk during incidents. See [Actions for security incidents](#actions-for-security-incidents).


### Personal access token (classic)

* If the token **belongs to you**, you can delete it via your personal account settings. See [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#deleting-a-personal-access-token).

* If the token is owned by someone else, and the actual token value is known, **anyone** can submit a request to revoke it using the REST API. The API doesn't require authentication - anyone with the token value can submit it for revocation. See [Revoke?Apiversion=2022 11 28](https://docs.github.com/en/rest/credentials/revoke?apiVersion=2022-11-28#revoke-a-list-of-credentials) in the REST API documentation.

* **Organization owners** and **enterprise owners** do not have direct visibility into or control over individual tokens. However, they can:
   * Revoke them using the REST API, if the actual token value is known. See [Revoke?Apiversion=2022 11 28](https://docs.github.com/en/rest/credentials/revoke?apiVersion=2022-11-28#revoke-a-list-of-credentials).
   * Restrict the access of personal access tokens to the organization or enterprise entirely. See [Setting A Personal Access Token Policy For Your Organization](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization) and [Enforcing Policies For Personal Access Tokens In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise).
* **Organization owners and enterprise owners** on GitHub Enterprise Cloud with SSO enforced can revoke the SSO authorization for a specific personal access token (classic). See [Revoking SSO authorization](#revoking-sso-authorization) for details.
* **Revoked automatically** if pushed to a public repository or gist, or if unused for one year. See [Token Expiration And Revocation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation).

### Fine-grained personal access token

* If the token **belongs to you**, you can delete it via your personal account settings. See [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#deleting-a-personal-access-token).

* If the token is owned by someone else, and the actual token value is known, **anyone** can submit a request to revoke it using the REST API. The API doesn't require authentication - anyone with the token value can submit it for revocation. See [Revoke?Apiversion=2022 11 28](https://docs.github.com/en/rest/credentials/revoke?apiVersion=2022-11-28#revoke-a-list-of-credentials) in the REST API documentation.

* **Organization owners**: Can view and revoke individual tokens. Note, however, that when an organization owner revokes a fine-grained personal access token, any SSH keys created by the token will continue to work and the token will still be able to read public resources within the organization. The revocation changes the resource owner from the organization to the user, and the user can reassign it back. See [Reviewing And Revoking Personal Access Tokens In Your Organization](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization).
* **Organization owners** and **enterprise owners** can:
   * Revoke the token using the REST API. See [Revoke?Apiversion=2022 11 28](https://docs.github.com/en/rest/credentials/revoke?apiVersion=2022-11-28#revoke-a-list-of-credentials).
   * Restrict the access of personal access tokens to the organization or enterprise entirely. See [Setting A Personal Access Token Policy For Your Organization](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization) and [Enforcing Policies For Personal Access Tokens In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise).
* **Revoked automatically** if pushed to a public repository or gist, or if unused for one year. See [Token Expiration And Revocation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation).

### OAuth app access tokens

* **Users** can revoke their authorization to an OAuth app in their personal account settings, which will revoke any tokens associated with the app. See [Reviewing Your Authorized OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/using-oauth-apps/reviewing-your-authorized-oauth-apps).

* If the token is owned by someone else, and the actual token value is known, **anyone** can submit a request to revoke it using the REST API. The API doesn't require authentication - anyone with the token value can submit it for revocation. See [Revoke?Apiversion=2022 11 28](https://docs.github.com/en/rest/credentials/revoke?apiVersion=2022-11-28#revoke-a-list-of-credentials) in the REST API documentation.

* **Organization owners** can deny a previously approved OAuth app's access to the organization. See [Denying Access To A Previously Approved OAUTH App For Your Organization](https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-oauth-access-to-your-organizations-data/denying-access-to-a-previously-approved-oauth-app-for-your-organization).
* On GitHub Enterprise Cloud, enterprise and organization owners cannot directly revoke SSO authorization for individual OAuth app tokens. SSO credential authorization does not apply to GitHub Enterprise Server.
* **Revoked automatically** if pushed to a public repository or gist, or if unused for one year. See [Token Expiration And Revocation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation).

### GitHub App user access tokens

* **Users** can revoke their authorization to an GitHub App in their personal account settings. Note that this revokes authorization for **all** organizations, not just a specific one. See [Reviewing And Revoking Authorization Of GitHub Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps).

* If the token is owned by someone else, and the actual token value is known, **anyone** can submit a request to revoke it using the REST API. The API doesn't require authentication - anyone with the token value can submit it for revocation. See [Revoke?Apiversion=2022 11 28](https://docs.github.com/en/rest/credentials/revoke?apiVersion=2022-11-28#revoke-a-list-of-credentials) in the REST API documentation.

* **Organization owners** can't revoke user authorizations directly, but can suspend or uninstall the app to prevent access to organization resources. See [Reviewing And Modifying Installed GitHub Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps).
* On GitHub Enterprise Cloud, enterprise and organization owners cannot directly revoke SSO authorization for individual GitHub App user access tokens. SSO credential authorization does not apply to GitHub Enterprise Server.
* **Automatically expires** after 8 hours by default. See [Token Expiration And Revocation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation#user-token-expired-due-to-github-app-configuration).

### GitHub App refresh tokens

* **Users** can revoke the GitHub App authorization, which also invalidates associated refresh tokens. See [Reviewing And Revoking Authorization Of GitHub Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps).

* If the token is owned by someone else, and the actual token value is known, **anyone** can submit a request to revoke it using the REST API. The API doesn't require authentication - anyone with the token value can submit it for revocation. See [Revoke?Apiversion=2022 11 28](https://docs.github.com/en/rest/credentials/revoke?apiVersion=2022-11-28#revoke-a-list-of-credentials) in the REST API documentation.

* **Automatically expires** after 6 months.

### GitHub App installation access tokens

* **App owners** can revoke via `DELETE /installation/token`. See [Installations?Apiversion=2022 11 28](https://docs.github.com/en/rest/apps/installations?apiVersion=2022-11-28#revoke-an-installation-access-token).
* **Organization owners and enterprise owners**: Can uninstall the app from the organization, which deactivates all associated installation tokens. See [Reviewing And Modifying Installed GitHub Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps).
* **Automatically expires** after 1 hour.

### User SSH keys

* **Users** can delete the credential via **Settings > SSH and GPG keys**. See [Reviewing Your SSH Keys](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/reviewing-your-ssh-keys).
* **Organization owners and enterprise owners** on GitHub Enterprise Cloud with SSO enforced can revoke the SSO authorization for a specific SSH key. Once revoked, the same key cannot be re-authorized—the user must create a new SSH key. See [Revoking SSO authorization](#revoking-sso-authorization) for details.
* **Automatically deleted** if unused for one year. See [Deleted Or Missing SSH Keys](https://docs.github.com/en/enterprise-cloud@latest/authentication/troubleshooting-ssh/deleted-or-missing-ssh-keys).

For more information on SSH keys, see [Adding A New SSH Key To Your GitHub Account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

### Deploy keys

* **Repository admins** can delete keys via **Repository settings > Security > Deploy keys**. Also available via the Deploy keys REST API. See [Reviewing Your Deploy Keys](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/reviewing-your-deploy-keys).
* **Organization owners** can disable deploy keys entirely across the organization, which disables all existing deploy keys. See [Restricting Deploy Keys In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/restricting-deploy-keys-in-your-organization).
* **Enterprise owners** can enforce a policy to disable deploy keys across all repositories. See [Enforcing Repository Management Policies In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise).

For more information on deploy keys, see [Managing Deploy Keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys).

### `GITHUB_TOKEN` (GitHub Actions)

* **Automatically expires**: The `GITHUB_TOKEN` is created at the start of each workflow job and expires when the job completes. There is no manual revocation mechanism. During an incident, you can disable GitHub Actions on the repository to prevent new tokens from being issued.

For more information on `GITHUB_TOKEN`, see [Github_Token](https://docs.github.com/en/actions/concepts/security/github_token).

## SSO authorization

On GitHub Enterprise Cloud, when single sign-on (SSO) is required at the enterprise level, enforced at the organization level, or enabled for an organization and a member has linked an identity, certain credential types must be authorized for an organization before they can access organization resources. The following table indicates which credential types can be authorized for an organization. SSO credential authorization does not apply to GitHub Enterprise Server.

| Token type | Supports SSO authorization | Admins can revoke SSO authorization |
|-----------------|---------------------------|-------------------------------------|
| Personal access token (classic) | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Fine-grained personal access token | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| OAuth app access token | {% octicon "check" aria-label="Yes" %}[^1] | {% octicon "x" aria-label="No" %} |
| GitHub App user access token | {% octicon "check" aria-label="Yes" %}[^1] | {% octicon "x" aria-label="No" %} |
| GitHub App installation access token | {% octicon "x" aria-label="No" %} (not required) | Not applicable |
| GitHub App refresh token | {% octicon "x" aria-label="No" %} | Not applicable |
| User SSH key | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Deploy key | {% octicon "x" aria-label="No" %} (repository-scoped) | Not applicable |
| `GITHUB_TOKEN` (GitHub Actions) | {% octicon "x" aria-label="No" %} (repository-scoped) | Not applicable |

[^1]: On GitHub Enterprise Cloud, SSO authorization is granted automatically when the user authorizes the app during an active SAML or OIDC session. These authorizations are not visible to users or admins in the GitHub UI, and are not returned by the [Orgs](https://docs.github.com/en/rest/orgs/orgs#list-saml-sso-authorizations-for-an-organization) REST API endpoint.

On GitHub Enterprise Cloud, for information on how to authorize a credential for SSO, see [Authorizing A Personal Access Token For Use With Single Sign On](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-single-sign-on/authorizing-a-personal-access-token-for-use-with-single-sign-on), [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token), and [Authorizing An SSH Key For Use With Single Sign On](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-single-sign-on/authorizing-an-ssh-key-for-use-with-single-sign-on).

### Revoking SSO authorization

On GitHub Enterprise Cloud with SSO enforced, when a credential supports SSO authorization, there are two independent containment options:

* **Delete or revoke the credential itself**: Permanently removes all access associated with the credential. See the individual credential type sections above for who can perform this action.
* **Revoke the credential's SSO authorization**: Blocks the credential from accessing a specific organization's resources without deleting it. Once revoked, the user cannot re-authorize the same credential; they must create a new one.

On GitHub Enterprise Cloud, enterprise administrators and organization owners can revoke SSO authorization for the credential types marked in the table above:

* **Organization owners** can manage SSO authorizations for organizations with organization-level SSO via the GitHub UI. See [Viewing And Managing A Members Saml Access To Your Organization](https://docs.github.com/en/enterprise-cloud@latest/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization).
* **Enterprise owners** can manage SSO authorizations for enterprises with enterprise-level SSO (including Enterprise Managed Users) via the GitHub UI. See [Viewing And Managing A Users Saml Access To Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-authorized-credentials).

On GitHub Enterprise Cloud, you can also manage SSO authorizations via the REST API.


On GitHub Enterprise Cloud, during a security incident, enterprise owners can revoke SSO authorizations for individual members or in bulk. See [Actions for security incidents](#actions-for-security-incidents).


## Actions for security incidents

During a security incident, there are enterprise-level actions that enterprise owners on GitHub Enterprise Cloud can take to respond quickly. You can take action against individual members or against all members in bulk. These actions affect user SSH keys, OAuth app user access tokens, GitHub App user access tokens, personal access tokens (classic), and fine-grained personal access tokens. They do **not** affect GitHub App installation access tokens, deploy keys, or `GITHUB_TOKEN`.

> [!WARNING] Bulk actions are high-impact actions that should be reserved for major security incidents. They are likely to break automations, and it could take months of work to restore your original state.


* **Revoke SSO authorizations for a specific user**: Remove SSO authorizations for a specific user's credentials. Useful for responding to incidents affecting individual accounts. See [Revoke Authorizations Or Tokens](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/respond-to-incidents/revoke-authorizations-or-tokens#taking-action-against-individual-members).
* **Delete keys and tokens for a specific user**: Delete a specific user's credentials entirely. Available for Enterprise Managed Users **only**. See [Revoke Authorizations Or Tokens](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/respond-to-incidents/revoke-authorizations-or-tokens#taking-action-against-individual-members).

* **Lock down SSO**: Temporarily block SSO for all users except enterprise owners, preventing access to SSO-protected resources. Available for Enterprise Managed Users or enterprises that use SSO. See [Lock Down Sso](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/respond-to-incidents/lock-down-sso).
* **Revoke all SSO authorizations**: Remove SSO authorizations for user credentials across all organizations in the enterprise. Credentials are not deleted, but lose access to SSO-protected organization resources. Once revoked, credentials cannot be re-authorized—users must create new credentials. Available for Enterprise Managed Users or enterprises that use SSO. See [Revoke Authorizations Or Tokens](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/respond-to-incidents/revoke-authorizations-or-tokens).
* **Delete all user tokens and keys**: Delete user credentials entirely, removing all access. Available for Enterprise Managed Users **only**. See [Revoke Authorizations Or Tokens](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/respond-to-incidents/revoke-authorizations-or-tokens).

> [!NOTE]
> For enterprises with personal accounts (non-EMU) that use SSO, the "delete all tokens and keys" option is **not available**. The "revoke SSO authorizations" action blocks access to SSO-protected organization resources, but does not block credentials from accessing enterprise-level endpoints or resources in organizations that do not enforce SSO. For enterprises without SSO, neither bulk action is available.
