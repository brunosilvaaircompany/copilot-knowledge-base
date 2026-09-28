# Revoking authorizations or deleting credentials in your enterprise

When your enterprise is affected by a security incident, you can respond by preventing programmatic access to your enterprise or its organizations.

Available actions:

* **Revoke SSO authorizations** to remove access to SSO-protected organization resources for user credentials in your enterprise.
* **Delete keys and tokens** to remove user tokens and SSH keys in your enterprise, even if they don't have an SSO authorization (Enterprise Managed Users only).



In the "Authentication security" section of your enterprise settings, you can take action against credentials:

* **For individual members**: Revoke SSO authorizations or delete credentials for a specific user when responding to a targeted incident or performing routine access cleanup.
* **For a specific credential type**: Revoke SSO authorizations or delete credentials of a selected type, such as only personal access tokens (classic), across your entire enterprise.
* **For all members (bulk action)**: Take bulk action to revoke SSO authorizations or delete credentials across all members and every supported credential type, such as when responding to a major security incident.

You can also take any of these actions using the [Credential Authorizations](https://docs.github.com/en/rest/enterprise-admin/credential-authorizations).

> [!NOTE] Organization owners can take the same actions at the organization level, using the GitHub UI or the [Orgs](https://docs.github.com/en/rest/orgs/orgs#revoke-a-single-credential-type-for-an-organization).



## Accessing the authentication security page


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. In the left sidebar, click **Authentication security**.

## Reviewing credentials

Before taking action, use the "Credentials" overview and CSV export to assess which credentials can access your enterprise. The overview provides enterprise-wide visibility, but the available response depends on the credential type and where it is managed.

For information about the overview, export fields, and audit log correlation, see [Reviewing Credentials In Your Enterprise](https://docs.github.com/en/admin/managing-iam/respond-to-incidents/reviewing-credentials-in-your-enterprise).

## Choosing where to take action

Use the following table to determine the narrowest appropriate response. Enterprise-level actions can affect credentials across every organization in the enterprise. Organization- and user-level actions reduce disruption when you can identify the affected credential or application.

| Credential type | Where it is managed | Who can take action | Scope and available action |
| --- | --- | --- | --- |
| Fine-grained personal access token | Organization settings or the token owner's personal settings | Organization owner or token owner | At the organization level, revoke the token's access to organization resources. At the user level, delete the token. |
| Personal access token (classic) | SSO credential authorization settings or the token owner's personal settings | Enterprise owner, organization owner, or token owner | At the enterprise or organization level, revoke SSO authorization. At the user level, delete the token. |
| OAuth app access token | Organization OAuth app policy or the user's authorized OAuth apps | Organization owner or user | At the organization level, deny the app access. At the user level, revoke the app authorization and its associated tokens. |
| GitHub App user access token or installation | Installed app settings or the user's authorized GitHub Apps | Enterprise owner, organization owner, or user | At the enterprise or organization level, suspend or uninstall the app to prevent access. At the user level, revoke the user's authorization. |
| User SSH key | SSO credential authorization settings or the key owner's personal settings | Enterprise owner, organization owner, or key owner | At the enterprise or organization level, revoke SSO authorization. At the user level, delete the key. |

For a targeted response, use the procedure for the credential and action:

* **Fine-grained personal access tokens**: [Reviewing And Revoking Personal Access Tokens In Your Organization](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization)
* **User-owned personal access tokens**: [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#deleting-a-personal-access-token)
* **SSO-authorized personal access tokens (classic) and user SSH keys**: [Viewing And Managing A Members Saml Access To Your Organization](https://docs.github.com/en/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)
* **OAuth app access tokens**: [Denying Access To A Previously Approved OAUTH App For Your Organization](https://docs.github.com/en/organizations/managing-oauth-access-to-your-organizations-data/denying-access-to-a-previously-approved-oauth-app-for-your-organization) or [Reviewing Your Authorized OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/using-oauth-apps/reviewing-your-authorized-oauth-apps)
* **GitHub App user access tokens or installations**: [Reviewing And Modifying Installed GitHub Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps) or [Reviewing And Revoking Authorization Of GitHub Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps)
* **User-owned SSH keys**: [Reviewing Your SSH Keys](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/reviewing-your-ssh-keys)

For an enterprise-wide response, see [Taking bulk action against all members](#taking-bulk-action-against-all-members). These actions affect user credentials, not GitHub App installation access tokens.

## Understanding the available actions

The following sections describe what each action does, which SSO authorizations or credentials are impacted, and related audit log events.

> [!NOTE] If your enterprise does **not** use Enterprise Managed Users and has **not** enabled SAML SSO, neither of these actions is available. As an alternative, if you need users to replace personal access tokens as part of your incident response, you can configure an enterprise policy to expire all personal access tokens. See [Enforcing Policies For Personal Access Tokens In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise).


By default, each action targets all credential types that support it. You can instead scope an action to a single credential type, such as personal access tokens (classic) or user SSH keys, to contain an incident without disrupting other credentials. See [Included credentials](#included-credentials) for the credential types that support each action.


### Revoke SSO authorizations

This action is available for Enterprise Managed Users or enterprises that use SAML SSO.

Revoking authorizations removes SSO authorizations for user tokens and SSH keys, either for a specific user, all users, or a specific credential type, across all organizations in your enterprise.

* Credentials that have had SSO authorizations revoked **cannot be re-authorized** for the affected organizations. To restore access, users must create new credentials and authorize them.
* The credentials themselves are not deleted, and their permissions for the user and enterprise scopes, and for non-SSO-protected organizations, **remain active**.
* Credentials that have not been authorized for SSO are **not affected**.

Authorization for **fine-grained personal access tokens** works differently, so this action has a different effect on this token type. For fine-grained PATs where an organization is the "resource owner," the resource owner is removed, removing access to organization resources. Users can change the resource owner back to the organization account, which may require approval (see [Enforcing Policies For Personal Access Tokens In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise#enforcing-an-approval-policy-for-fine-grained-personal-access-tokens)).

### Delete keys and tokens

This action is available for Enterprise Managed Users only.

Deleting keys and tokens removes credentials that have access to your enterprise, either for a specific user, all users, or a specific credential type, regardless of whether they are authorized for SSO. The credentials stop working and are no longer visible in the UI.

For example, you can delete all personal access tokens for an individual member without affecting that member's SSH keys. To restore programmatic access, users must create new credentials, authorize them with organizations if required, and update affected processes to use the new credentials.

### Included credentials

Both actions include the following credential types:

* User SSH keys
* OAuth apps user access tokens (`ghu_`)
* GitHub App user access tokens
* Personal access tokens (classic)
* Fine-grained personal access tokens

The "revoke authorizations" action works differently for fine-grained personal access tokens. For details, see [Revoke SSO authorizations](#revoke-sso-authorizations).

The following credential types are **not** affected by either action:

* GitHub App installation tokens (`ghs_`)
* Deploy keys
* GitHub Actions `GITHUB_TOKEN` access

> [!NOTE] A deploy key created with a personal access token or an OAuth app token is deleted when the "Delete keys and tokens" action deletes that token. Deploy keys created through the web interface or with a GitHub App user access token are not affected. See [Deploy Keys](https://docs.github.com/en/rest/deploy-keys/deploy-keys).

### Audit and security log events

The "revoke authorizations" action generates the following events, whether it's scoped to a specific user, a specific credential type, or all members:

* `org_credential_authorization.deauthorize`
* `org_credential_authorization.revoke`
* `personal_access_token.access_revoked`

The "delete tokens" action also generates those events, and additionally generates the following events:

* `oauth_access.destroy`
* `personal_access_token.destroy`

Affected users receive an email notification when their SSO authorizations are revoked or their credentials are deleted, whether the action was initiated by an enterprise owner or by the user themselves.



## Taking action against individual members

You can revoke SSO authorizations or delete credentials for a specific user. This is useful for responding to incidents affecting individual accounts, such as a compromised account or lost hardware, or for routine access cleanup.

### Revoking authorizations for a specific user


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. In the left sidebar, click **Authentication security**.
1. In the "Danger zone" section, click **Revoke for ▼**, then click **A specific user**.
1. Select the user whose authorizations you want to revoke.
1. To confirm, type `USERNAME credentials` (replacing `USERNAME` with the user's username).
1. Click **Revoke authorizations**.

### Deleting credentials for a specific user

This action is available for Enterprise Managed Users only.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. In the left sidebar, click **Authentication security**.
1. In the "Danger zone" section, click **Delete for ▼**, then click **A specific user**.
1. Select the user whose credentials you want to delete.
1. To confirm, type `USERNAME credentials` (replacing `USERNAME` with the user's username).
1. Click **Delete keys and tokens**.

## Taking action against a specific credential type

You can revoke SSO authorizations or delete credentials of a single type across your entire enterprise, without affecting other credential types. For example, you can revoke SSO authorizations for all personal access tokens (classic) while leaving user SSH keys and other credential types untouched.

### Revoking authorizations for a credential type


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. In the left sidebar, click **Authentication security**.
1. In the "Danger zone" section, click **Revoke for ▼**, then click the credential type whose authorizations you want to revoke.
1. Read the warning about the impact of this action.
1. To confirm, type the name of your enterprise.
1. Click **Revoke authorizations**.

### Deleting credentials of a specific type

This action is available for Enterprise Managed Users only.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. In the left sidebar, click **Authentication security**.
1. In the "Danger zone" section, click **Delete for ▼**, then click the credential type whose credentials you want to delete.
1. Read the warning about the impact of this action.
1. To confirm, type the name of your enterprise.
1. Click **Delete keys and tokens**.

You can also combine these actions with a specific user, by selecting a user first and then choosing a credential type, or perform either action using the [Credential Authorizations](https://docs.github.com/en/rest/enterprise-admin/credential-authorizations).



## Taking bulk action against all members

Use the **Danger zone** bulk action buttons to respond to a major security incident by taking action against all members of your enterprise.

> [!WARNING] Bulk actions are high-impact actions that should be reserved for major security incidents. They are likely to break automations, and it could take months of work to restore your original state.

### Revoking authorizations for all members


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. In the left sidebar, click **Authentication security**.
1. In the "Danger zone" section, click **Revoke for ▼**, then click **All users**.
1. Read the warning about the impact of this action.
1. To confirm, type the name of your enterprise.
1. Click **Revoke authorizations**.

### Deleting credentials for all members

This action is available for Enterprise Managed Users only.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. In the left sidebar, click **Authentication security**.
1. In the "Danger zone" section, click **Delete for ▼**, then click **All users**.
1. Read the warning about the impact of this action.
1. To confirm, type the name of your enterprise.
1. Click **Delete keys and tokens**.

## Resources for smaller-scale responses

The following articles describe alternative actions for managing incidents that are smaller in scope, where you can identify specific compromised tokens or user accounts.

* [Identifying Audit Log Events Performed By An Access Token](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)
* [Remediating A Leaked Secret](https://docs.github.com/en/code-security/tutorials/remediate-leaked-secrets/remediating-a-leaked-secret)
* [Revoke](https://docs.github.com/en/rest/credentials/revoke) in the REST API documentation
* [Orgs](https://docs.github.com/en/rest/orgs/orgs#revoke-a-single-credential-type-for-an-organization) in the REST API documentation
