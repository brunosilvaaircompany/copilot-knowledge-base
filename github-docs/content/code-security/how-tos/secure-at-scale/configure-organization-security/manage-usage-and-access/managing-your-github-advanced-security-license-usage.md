# Managing your paid use of Advanced Security

## Prerequisites

Before you can effectively manage your paid use of Advanced Security, you should understand how Advanced Security is billed. See [GitHub Advanced Security](https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security).

## Understanding your license usage

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the "Security" section of the sidebar, select the **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security** dropdown menu, then click **Configurations**.

1. Click the **Repositories** tab.
1. In the "Apply configurations" section, your current license usage will be displayed. This screenshot shows metered usage. If you have bought a volume/subscription license, then the number of licenses available is also reported.

    ![Screenshot of the "Apply configurations" section. The current license use for the enterprise is outlined in dark orange.](/assets/images/help/security-configurations/current-sp-cs-license-usage.png)

1. Optionally, to find specific repositories in your organization, filter the repository table. To learn more, see [Filter Repositories](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/manage-your-coverage/filter-repositories).



> [!TIP]
> For information about buying more volume/subscription licenses, see [Manage Ghas Licenses](https://docs.github.com/en/billing/how-tos/products/manage-ghas-licenses).


## Turning off Secret Protection or Code Security

The simplest way to turn off all Secret Protection or Code Security features for one or more repositories is to create a security configuration where the product is disabled at the top level. You can apply this custom configuration to repositories where you want to turn off paid features.

> [!TIP]
> Ensure that you give your custom configuration a very clear name, for example: "No Code Security" or "Secret Protection and Supply chain only" to avoid confusion.

For more information, see [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration) and [Apply Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/apply-custom-configuration).


To prevent future enablement of security features, we recommend you ask your enterprise administrator to set the enterprise account's Advanced Security policies so that:
* Advanced Security is **not available**.
* Repository administrators are **not allowed** to enable or disable Advanced Security features for their repositories.
See [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).
