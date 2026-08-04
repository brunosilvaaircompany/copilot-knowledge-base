# Detaching repositories from their security configurations

If you decide that the security needs of a repository are too specific for a security configuration to be useful, you can detach that repository from the linked configuration and instead manage security enablement settings at the repository level.

Detaching a repository from a security configuration will not change the existing security enablement settings for that repository.

Alternatively, if you want to apply a security configuration to a repository that's already attached to a different configuration, you can apply the configuration as normal, and you do not need to detach the current configuration. For more information, see [Apply Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/apply-custom-configuration).

## Detaching repositories from linked security configurations

Detached repositories show a status of "No configuration" in the repository table on the security configurations settings page. For more information about all configuration statuses, see [Configuration Statuses](https://docs.github.com/en/code-security/reference/security-at-scale/configuration-statuses).

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the "Security" section of the sidebar, select the **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security** dropdown menu, then click **Configurations**.

1. Click the **Repositories** tab.
1. Optionally, in the "Apply configurations" section, filter for specific repositories you would like to detach from their configurations. To learn more, see [Filter Repositories](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/manage-your-coverage/filter-repositories).
1. In the repository table, select repositories with one of three methods:
     * Select each repository you would like to apply the security configuration to.
     * To select all repositories displayed on the current page of the repository table, select the checkbox associated with "NUMBER repositories".
     * After selecting the current page of repositories, "25 of NUMBER selected", to select _all_ repositories in your organization that match any filters you have applied, click **Select all**.

1. Select the **Apply configuration** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click **No configuration**.
1. To finish detaching your repositories from their linked security configurations, in the "No configuration?" window, click **No configuration**.

## Next steps

You can now manage security enablement settings at the repository level. For an introduction, see [Quickstart For Securing Your Repository](https://docs.github.com/en/code-security/getting-started/quickstart-for-securing-your-repository).
