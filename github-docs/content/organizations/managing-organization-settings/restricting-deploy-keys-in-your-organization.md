# Restricting deploy keys in your organization

You can choose whether members can create deploy keys for repositories in your organization.

By default, new organizations are configured to disallow the creation of deploy keys in repositories.

Organization owners can restrict the creation of deploy keys to help prevent sensitive information from being exposed. For more information, see [Prevent Data Leaks](https://docs.github.com/en/code-security/tutorials/secure-your-organization/prevent-data-leaks) and [Managing Deploy Keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys#deploy-keys). If you want more fine-grained control over permissions, consider using a GitHub App instead. See [Overview](https://docs.github.com/en/apps/overview).

If your organization is owned by an enterprise account, you may not be able to configure this setting for your organization, if an enterprise owner has set a policy at the enterprise level. For more information, see [Enforcing Repository Management Policies In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deploy-keys).

> [!WARNING]
> Changing this setting to disabled will result in **existing deploy keys being disabled** in all repositories in the organization. Scripts, apps, or workflows that create, use, or delete deploy keys will no longer work.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Access" section of the sidebar, click **Member privileges**.

1. Under "Deploy keys", review the information about changing the setting, click **Enabled** or **Disabled**.
1. Click **Save**.
