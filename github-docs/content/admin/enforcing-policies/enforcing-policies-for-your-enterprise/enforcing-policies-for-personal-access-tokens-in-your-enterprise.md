# Enforcing policies for personal access tokens in your enterprise

## Restricting access by personal access tokens

Enterprise owners can prevent their members from using personal access tokens to access resources owned by the enterprise. You can configure these restrictions for personal access tokens (classic) and fine-grained personal access tokens independently with the following options:

* **Allow organizations to configure access requirements:** Each organization owned by the enterprise can decide whether to restrict or permit access by personal access tokens. This is the default setting.
* **Restrict access via personal access tokens:** Personal access tokens cannot access organizations owned by the enterprise. SSH keys created by these personal access tokens will continue to work. Organizations cannot override this setting.
* **Allow access via personal access tokens:** Personal access tokens can access organizations owned by the enterprise. Organizations cannot override this setting.

By default, organizations and enterprises allow access by both fine-grained personal access tokens and personal access tokens (classic).

Regardless of the chosen policy, Personal access tokens will have access to public resources within the organizations managed by your enterprise.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**, click **Personal access tokens**. 
1. Select either the **Fine-grained tokens** or **Tokens (classic)** tab to enforce this policy based on the token type. 
1. Under **Fine-grained personal access tokens** or **Restrict personal access tokens (classic) from accessing your organizations**, select your access policy.
1. Click **Save**.

## Enforcing a maximum lifetime policy for personal access tokens

Enterprise owners can set and remove maximum lifetime allowances for both fine-grained personal access tokens and personal access tokens (classic) to help protect enterprise resources. Organization owners within the enterprise can further restrict the lifetime policies for their organizations. See [Enforcing a maximum lifetime policy for personal access tokens](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization#enforcing-a-maximum-lifetime-policy-for-personal-access-tokens).

For fine-grained personal access tokens, the default the maximum lifetime policy for organizations and enterprises is set to expire within 366 days. Personal access tokens (classic) do not have an expiration requirement.

### Policy enforcement details

For GHES , the enterprise-level policies apply to user namespaces as well because the enterprise owns the user accounts.

The policies around maximum lifetimes are enforced slightly differently for fine-grained personal access tokens and personal access tokens (classic). For tokens (classic), enforcement occurs when the token is used and when SSO credential authorization is attempted, and errors will prompt users to adjust the lifetime. For fine-grained personal access tokens, the target organization is known at the time of token creation. In both cases, users will be prompted to regenerate tokens with compliant lifetimes if the current one exceeds the policy limit.

When you set a policy, tokens with non-compliant lifetimes will be blocked from accessing your organization if the token belongs to a member of your organization. Setting this policy does not revoke or disable these tokens. Users will learn that their existing token is non-compliant when API calls for your organization are rejected.

### Setting a maximum lifetime policy


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.
, then click **{% octicon "key" aria-hidden="true" aria-label="key" %} Personal access tokens**.
1. Select either the **Fine-grained tokens** or **Tokens (classic)** tab to enforce this policy based on the token type.
1. Under **Set maximum lifetimes for personal access tokens**, set the maximum lifetime. Tokens must be created with a lifetime less than or equal to this many days.
1. Optionally, to exempt your enterprise administrators from this policy, check the **Exempt administrators** checkbox. You should exempt them from this policy if you use SCIM for user provisioning or have automation that has not migrated to GitHub App yet.
   >[!WARNING] If you use Enterprise Managed Users, you will be asked to accept the risk of service interruption unless you exempt your enterprise administrators. This ensures you are aware of the potential risk.
1. Click **Save**.

## Enforcing an approval policy for fine-grained personal access tokens

Enterprise owners can manage approval requirements for each fine-grained personal access token with the following options:

* **Allow organizations to configure approval requirements:** Enterprise owners can allow each organization in the enterprise to set its own approval requirements for the tokens. This is the default.
* **Require approval:** Enterprise owners can require that all organizations within the enterprise must approve each fine-grained personal access token that can access the organization. These tokens can still read public resources within the organization without needing approval.
* **Disable approval:** Fine-grained personal access tokens created by organization members can access organizations owned by the enterprise without prior approval. Organizations cannot override this setting.

By default, organizations require approval of fine-grained personal access tokens, but are able to disable this requirement. Using the settings above, you can force your organizations to have approvals enabled or disabled.

> [!NOTE]
> Only fine-grained personal access tokens, not personal access tokens (classic), are subject to approval. Any personal access token (classic) can access organization resources without prior approval, unless the organization or enterprise has restricted access by personal access tokens (classic) For more information about restricting personal access tokens (classic), see [Restricting access by personal access tokens](#restricting-access-by-personal-access-tokens) on this page and [Setting A Personal Access Token Policy For Your Organization](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**, click **Personal access tokens**. 
1. Select the **Fine-grained tokens** tab. 
1. Under **Require approval of fine-grained personal access tokens**, select your approval policy:
1. Click **Save**.
