# Applying a custom security configuration

To learn how to create a custom security configuration, see [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration).

## Applying your custom security configuration to repositories in your organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the "Security" section of the sidebar, select the **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security** dropdown menu, then click **Configurations**.

1. Click the **Repositories** tab.
1. Optionally, in the "Apply configurations" section, filter for specific repositories you would like to apply your custom security configuration to. To learn how to filter the repository table, see [Filter Repositories](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/manage-your-coverage/filter-repositories).
1. In the repository table, select repositories with one of three methods:
     * Select each repository you would like to apply the security configuration to.
     * To select all repositories displayed on the current page of the repository table, select the checkbox associated with "NUMBER repositories".
     * After selecting the current page of repositories, "25 of NUMBER selected", to select _all_ repositories in your organization that match any filters you have applied, click **Select all**.

1. Select the **Apply configuration** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click **YOUR-CONFIGURATION-NAME**.

    > [!NOTE]
> The default security configuration for an organization is only automatically applied to new repositories created in your organization. If a repository is transferred into your organization, you will still need to apply an appropriate security configuration to the repository manually.


1. Review the detailed information about how your changes will affect GitHub Secret Protection, GitHub Code Security, or GitHub Advanced Security license consumption. To apply the security configuration, click **Apply**.

The security configuration is applied to both active and archived repositories because some security features run on archived repositories, for example, secret scanning. In addition, if a repository is later unarchived you can be confident that it is protected by the chosen security configuration.



>[!NOTE]
> If you apply an enforced configuration, this information is reported in the list of repositories. An enforced configuration means that repository owners are blocked from changing features that have been enabled or disabled in the configuration, but features that are not set aren't enforced.

After you apply a configuration, each repository's configuration status reflects the result of the operation—for example, `attached`, `attaching`, or `failed`. For the full list of statuses and recommended actions, see [Configuration Statuses](https://docs.github.com/en/code-security/reference/security-at-scale/configuration-statuses).
