# Diagnosing security configuration issues

## Finding and remediating attachment failures

When you apply a configuration to a group of repositories, some repositories may fail to attach, typically because of a conflict between existing repository settings and the configuration you applied. When this happens, only some settings are applied to the affected repositories, and those repositories won't inherit future changes to the configuration.

On the security configuration settings page, in the **Repositories** tab under "Apply configurations", a banner shows how many repositories have an attachment failure and summarizes the reason. Click the link in the banner, or filter the repository list by `config-status:failed`, to see affected repositories and guidance on how to remediate each failure.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the "Security" section of the sidebar, select the **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security** dropdown menu, then click **Configurations**.

1. Click the **Repositories** tab.
1. In the "Apply configurations" section, filter by `config-status:failed`.
1. From the results list, for the repository you're interested in, click **{% octicon "alert" aria-hidden="true" aria-label="alert" %} Failed REASON**.
1. In the dialog box, review the information and follow the remediation guidance.

## Finding and remediating removed configurations

A repository's configuration status changes to `removed` when a repository admin changes a security setting that conflicts with the applied configuration. The configuration is still associated with the repository, but the repository no longer inherits all settings from the configuration.

To find and remediate repositories with a `removed` status:

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the "Security" section of the sidebar, select the **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security** dropdown menu, then click **Configurations**.

1. Filter the repository list using the "Configuration status" filter and select "Removed."
1. To restore the intended settings, re-apply the configuration to the affected repositories.
1. To prevent future overrides, consider enabling enforcement on the configuration. See [Configuration Enforcement](https://docs.github.com/en/code-security/reference/security-at-scale/configuration-enforcement).

## Finding and remediating enterprise-removed configurations

A repository's configuration status changes to `removed_by_enterprise` when an enterprise-level change conflicts with the organization-level configuration applied to the repository.

To find and remediate repositories with a `removed_by_enterprise` status:

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the "Security" section of the sidebar, select the **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security** dropdown menu, then click **Configurations**.

1. Filter the repository list using the "Configuration status" filter and select "Removed by enterprise."
1. Coordinate with your enterprise admin to resolve the conflict between the enterprise-level and organization-level configurations.
1. Re-apply the configuration at the organization or enterprise level.

For more information about all configuration statuses, see [Configuration Statuses](https://docs.github.com/en/code-security/reference/security-at-scale/configuration-statuses).
