# Managing requests for personal access tokens in your organization

## About fine-grained personal access token requests

When organization members create a fine-grained personal access token to access resources owned by the organization, if the organization requires approval for fine-grained personal access tokens, then an organization owner must approve the token before it can be used to access any resources that are not public. For more information, see [Setting A Personal Access Token Policy For Your Organization](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).

GitHub will notify organization owners with a daily email about all fine-grained personal access tokens that are awaiting approval. When a token is denied or approved, the user who created the token will receive an email notification.

> [!NOTE]
> Only fine-grained personal access tokens, not personal access tokens (classic), are subject to approval. Unless the organization has restricted access by personal access tokens (classic), any personal access token (classic) can access organization resources without prior approval. For more information, see [Setting A Personal Access Token Policy For Your Organization](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).

Organization owners can also use the REST API to review and manage fine-grained personal access token requests. These endpoints can only be called by GitHub Apps, and cannot be called with personal access tokens or OAuth apps. For more information, see [Orgs](https://docs.github.com/en/rest/orgs/orgs#list-requests-to-access-organization-resources-with-fine-grained-personal-access-tokens).

## Managing fine-grained personal access token requests

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the left sidebar, under **{% octicon "key" aria-hidden="true" aria-label="key" %} Personal access tokens**, click **Pending requests**. If any tokens are pending approval for your organization, they will be displayed.
1. Click the name of the token that you want to approve or deny.
1. Review the access and permissions that the token is requesting.
1. To grant the token access to the organization, click **Approve**. To deny the token access to the organization, click **Deny**.
1. If you denied the request, in the confirmation box, optionally enter the reason that you denied the token. This reason will be shared in the notification that is sent to the token owner. Then, click **Deny**.

Alternatively, you can approve or deny multiple tokens at once:

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the left sidebar, under **{% octicon "key" aria-hidden="true" aria-label="key" %} Personal access tokens**, click **Pending requests**. If any tokens are pending approval for your organization, they will be displayed.
1. Optionally, use filters to only display certain tokens.
   * Use the **Owner** dropdown to filter the tokens by the member who created the token.
   * Use the **Repository** dropdown to filter the tokens by repository access.
   * Use the **Permissions** dropdown to filter the tokens by permission.

1. Select each token that you want to approve or reject.
1. Select the **request selected...** dropdown menu and click **Approve...** or **Deny...**.
