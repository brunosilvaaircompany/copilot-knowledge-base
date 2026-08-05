# Reviewing and revoking personal access tokens in your organization

## About reviewing and revoking fine-grained personal access tokens

Organization owners can view all fine-grained personal access tokens that can access resources owned by the organization. Organization owners can also revoke access by fine-grained personal access tokens. When a fine-grained personal access token is revoked, SSH keys created by the token will continue to work and the token will still be able to read public resources within the organization.

When a token is revoked, the user who created the token will receive an email notification.

Organization owners can only view and revoke fine-grained personal access tokens in this UI, not personal access tokens (classic). Unless the organization or enterprise has restricted access by personal access tokens (classic), any personal access token (classic) can access organization resources until the token expires. For more information about restricting access by personal access tokens (classic), see [Setting A Personal Access Token Policy For Your Organization](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization) and [Enforcing Policies For Personal Access Tokens In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise).

 Organization owners can also view and revoke personal access tokens (classic) if their organization requires SAML single-sign on. For more information, see [Viewing And Managing A Users Saml Access To Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-authorized-credentials). For more information about using the REST API to do this, see [List SAML SSO authorizations for an organization](/rest/orgs/orgs#list-saml-sso-authorizations-for-an-organization) and [Remove a SAML SSO authorization for an organization](/rest/orgs/orgs#remove-a-saml-sso-authorization-for-an-organization).

Organization owners can also use the REST API to review and revoke fine-grained personal access tokens. These endpoints can only be called by GitHub Apps, and cannot be called with personal access tokens or OAuth apps. For more information, see [Orgs](https://docs.github.com/en/rest/orgs/orgs#list-fine-grained-personal-access-tokens-with-access-to-organization-resources).

## Reviewing and revoking fine-grained personal access tokens

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the left sidebar, under **{% octicon "key" aria-hidden="true" aria-label="key" %} Personal access tokens**, click **Active tokens**. Any fine-grained personal access tokens that can access your organization will be displayed.
1. Click the name of the token that you want review or revoke.
1. Review the access and permissions that the token has.
1. To revoke access by the token to the organization, click **Revoke**.

Alternatively, you can revoke multiple tokens at once:

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the left sidebar, under **{% octicon "key" aria-hidden="true" aria-label="key" %} Personal access tokens**, click **Active tokens**. Any fine-grained personal access tokens that can access your organization will be displayed.
1. Optionally, use filters to only display certain tokens.
   * Use the **Owner** dropdown to filter the tokens by the member who created the token.
   * Use the **Repository** dropdown to filter the tokens by repository access.
   * Use the **Permissions** dropdown to filter the tokens by permission.

1. Select each token that you want to revoke.
1. Select the **tokens selected...** dropdown menu and click **Revoke...**.
