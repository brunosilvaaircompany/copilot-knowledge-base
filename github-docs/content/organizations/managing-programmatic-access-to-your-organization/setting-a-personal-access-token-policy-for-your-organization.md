# Setting a personal access token policy for your organization

## Restricting access by personal access tokens

Organization owners can prevent personal access tokens from accessing resources owned by the organization with the following options:
* **Restrict access via personal access tokens:** Personal access tokens (classic) or fine-grained personal access tokens cannot access resources owned by the organization. SSH keys created by personal access tokens will continue to work.
* **Allow access via personal access tokens:** Personal access tokens (classic) or fine-grained personal access tokens can access resources owned by the organization.

Regardless of the chosen policy, Personal access tokens will have access to public resources within the organization. By default, both Personal access tokens (classic) and fine-grained personal access tokens are enabled.

 If your organization is owned by an enterprise, and your enterprise owner has restricted access by Personal access tokens, you cannot override the policy in your organization. For more information, see [Enforcing Policies For Personal Access Tokens In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise).

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the left sidebar, under **{% octicon "key" aria-hidden="true" aria-label="key" %} Personal access tokens**, click **Settings**. 
1. Select either the **Fine-grained tokens** or **Tokens (classic)** tab to enforce this policy based on the token type. 
1. Under **Fine-grained personal access tokens** or **Restrict personal access tokens (classic) from accessing your organizations**, select your access policy.
1. Click **Save**.

## Enforcing a maximum lifetime policy for personal access tokens

Organization owners can set maximum lifetime allowances for both fine-grained personal access tokens and personal access tokens (classic) to control access to organization resources.  However, these policies cannot exceed the maximum lifetime set at the enterprise level or disable the expiration policy set at the enterprise level. See [Enforcing a maximum lifetime policy for personal access tokens](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise#enforcing-a-maximum-lifetime-policy-for-personal-access-tokens) 

For fine-grained personal access tokens, the default the maximum lifetime policy for organizations is set to expire within 366 days. Personal access tokens (classic) do not have an expiration requirement.

When you set a policy, tokens with non-compliant lifetimes will be blocked from accessing your organization if the token belongs to a member of your organization. Setting this policy does not revoke or disable these tokens. Users will learn that their existing token is non-compliant when API calls for your organization are rejected.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the left sidebar, click **{% octicon "key" aria-hidden="true" aria-label="key" %} Personal access tokens**.
1. Select either the **Fine-grained tokens** or **Tokens (classic)** tab to enforce this policy based on the token type.
1. Under **Set maximum lifetimes for personal access tokens**, set the maximum lifetime.
1. Click **Save**.

## Enforcing an approval policy for fine-grained personal access tokens

Organization owners can manage approval requirements for each fine-grained personal access token that can access the organization with the following options:
  * **Require administrator approval:** An organization owner must approve each fine-grained personal access token that can access the organization. Fine-grained personal access tokens created by organization owners will not need approval. This is the default value.
  * **Do not require administrator approval:** Fine-grained personal access tokens created by organization members can access resources in the organization without prior approval.

Fine-grained personal access tokens will still be able to read public resources within the organization without approval.

 If your organization is owned by an enterprise, and your enterprise owner has set an approval policy for fine-grained personal access tokens, then you cannot override the policy in your organization. For more information, see [Enforcing Policies For Personal Access Tokens In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise).

> [!NOTE]
> Only fine-grained personal access tokens, not personal access tokens (classic), are subject to approval. Unless the organization has restricted access by personal access tokens (classic), any personal access token (classic) can access organization resources without prior approval. For more information, see [Restricting access by personal access tokens](#restricting-access-by-personal-access-tokens) on this page.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the left sidebar, under **{% octicon "key" aria-hidden="true" aria-label="key" %} Personal access tokens**, click **Settings**. 
1. Select the **Fine-grained tokens** tab. 
1. Under **Require approval of fine-grained personal access tokens**, select the option that meets your needs:
1. Click **Save**.
