# Creating a custom security configuration

## About custom security configurations

With custom security configurations, you can create collections of enablement settings for GitHub's security products to meet the specific security needs of your organization. For example, you can create a different custom security configuration for each organization or group of organizations to reflect their unique security requirements and compliance obligations.

You can also choose whether or not you want to include GitHub Code Security or GitHub Secret Protection features in a configuration.

If you do, keep in mind that these features incur usage costs (or require GitHub Advanced Security licenses) when applied to private and internal repositories. For more information, see [About GitHub Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security).



When creating a security configuration, keep in mind that:
* Only features installed by a site administrator on your GitHub Enterprise Server instance will appear in the UI.
* Some features will only be visible if your organization or GitHub Enterprise Server instance has purchased the relevant GitHub Advanced Security product (GitHub Code Security or GitHub Secret Protection).
* Certain features, like Dependabot security updates and code scanning default setup, also require that GitHub Actions is installed on the GitHub Enterprise Server instance.



>[!IMPORTANT]
> The order and names of some settings will differ depending on whether you are using licenses for the original GitHub Advanced Security product, or for the two new products: GitHub Code Security and GitHub Secret Protection.
 See [Creating a GitHub Advanced Security configuration](#creating-a-github-advanced-security-configuration) or [Creating a Secret Protection and Code Security configuration](#creating-a-secret-protection-and-code-security-configuration).

## Creating a Secret Protection and Code Security configuration



1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the "Security" section of the sidebar, select the **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security** dropdown menu, then click **Configurations**.

1. In the "Security configurations" section, click **New configuration**.
1. To configure groups of security features for your repositories, click **Custom configuration**.
1. To help identify your custom security configuration and clarify its purpose on the "Security configurations" page, name your configuration and create a description.
1. Optionally, enable "Secret Protection", a paid feature for private and internal  repositories. Enabling Secret Protection enables alerts for secret scanning. In addition, you can choose whether to enable, disable, or keep the existing settings for the following secret scanning features:
    * **Validity checks**. To learn more about validity checks for partner patterns, see [Evaluating Alerts](https://docs.github.com/en/code-security/tutorials/remediate-leaked-secrets/evaluating-alerts#checking-a-secrets-validity).{% ifversion ghes > 3.19 %}
       Your site administrator must enable validity checks before you can use this feature. See [Configure Secret Scanning](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configure-secret-scanning).{% endif %}
    * **Extended metadata**. To learn more about extended metadata checks, see [About extended metadata checks](/code-security/concepts/secret-security/validity-checks#about-extended-metadata-checks) and [Evaluating Alerts](https://docs.github.com/en/code-security/tutorials/remediate-leaked-secrets/evaluating-alerts#reviewing-extended-metadata-for-a-token).
    > [!NOTE]
    > You can only enable extended metadata checks if validity checks are enabled.
    * **Generic patterns**. To learn more about scanning for generic patterns, see [Supported Secret Scanning Patterns](https://docs.github.com/en/code-security/reference/secret-security/supported-secret-scanning-patterns#supported-generic-patterns) and [Viewing Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts/viewing-alerts).
    * **Scan for AI-detected secrets**. To learn more, see [Security And Quality Ai Features](https://docs.github.com/en/code-security/responsible-use/security-and-quality-ai-features).
    * **Push protection**. To learn about push protection, see [Push Protection](https://docs.github.com/en/code-security/concepts/secret-security/push-protection).
    * **Bypass privileges**. By assigning bypass privileges or exemptions, selected actors can bypass or skip push protection. There is a review and approval process for all other contributors. See [Delegated Bypass](https://docs.github.com/en/code-security/concepts/secret-security/delegated-bypass).
    * **Prevent direct alert dismissals**. To learn more, see [Enable Delegated Dismissal](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts/enable-delegated-dismissal).
1. Optionally, enable "Code Security", a paid feature for private and internal  repositories. You can choose whether to enable, disable, or keep the existing settings for the following code scanning features:
   * **Default setup**. To learn more about default setup, see [Configure Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning#configuring-default-setup-for-a-repository).
      > [!NOTE]
> To create a configuration that you can apply to all repositories regardless of current code scanning setup, choose "Enabled with advanced setup allowed". This setting enables default setup only in repositories where CodeQL analysis is not actively run. _Option available from GitHub Enterprise Server 3.19._

   * **Runner type**. If you want to target specific runners for code scanning, you can choose to use custom-labeled runners at this step. See [Configure Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning#assigning-labels-to-self-hosted-runners). 
    * **Prevent direct alert dismissals**. To learn more, see [Enable Delegated Alert Dismissal](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/enable-delegated-alert-dismissal).
1. Still under "Code Security", in the "Dependency scanning" table, choose whether you want to enable, disable, or keep the existing settings for the following dependency scanning features:
   * **Dependency graph**. To learn about dependency graph, see [Dependency Graph](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph).
      > [!TIP]
      > When both "Code Security" and Dependency graph are enabled, this enables dependency review, see [Dependency Review](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review).
   * **Automatic dependency submission**. To learn about automatic dependency submission, see [Submit Dependencies Automatically](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/submit-dependencies-automatically).
   * **Dependabot alerts**. To learn about Dependabot, see [Dependabot Alerts](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts).
   * **Security updates**. To learn about security updates, see [Dependabot Security Updates](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-security-updates).
   * **Prevent direct alert dismissals**. To learn more, see [Enable Delegated Alert Dismissal](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/enable-delegated-alert-dismissal).
   * **Malware alerts**. To learn more, see [Malware Alerts](https://docs.github.com/en/code-security/concepts/supply-chain-security/malware-alerts).
1. For "Private vulnerability reporting", choose whether you want to enable, disable, or keep the existing settings. To learn about private vulnerability reporting, see [Configure For A Repository](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/configure-vulnerability-reporting/configure-for-a-repository).
1. Optionally, in the "Policy" section, you can use additional options to control how the configuration is applied:
   * **Use as default for newly created repositories**. Select the **None** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click **Public**, **Private and internal**, or **All repositories**.
        > [!NOTE]
> The default security configuration for an organization is only automatically applied to new repositories created in your organization. If a repository is transferred into your organization, you will still need to apply an appropriate security configuration to the repository manually.

   * **Enforce configuration**. Block repository owners from changing features that are enabled or disabled by the configuration (features that are not set aren't enforced). Select **Enforce** from the dropdown menu.

    > [!NOTE] Some situations can break the enforcement of security configurations. See [Configuration Enforcement](https://docs.github.com/en/code-security/reference/security-at-scale/configuration-enforcement).


1. To finish creating your custom security configuration, click **Save configuration**.


## Creating a GitHub Advanced Security configuration



1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the "Security" section of the sidebar, select the **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security** dropdown menu, then click **Configurations**.

1. In the "Security configurations" section, click **New configuration**.
1. To help identify your custom security configuration and clarify its purpose on the "New configuration" page, name your configuration and create a description.
1. In the "GitHub Advanced Security features" row, choose whether to include or exclude GitHub Advanced Security (GHAS) features.
1. In the "Secret scanning" table, choose whether you want to enable, disable, or keep the existing settings for the following security features:
    * **Alerts**. To learn about secret scanning alerts, see [Secret Scanning](https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning). 
    * **Validity checks**. To learn more about validity checks for partner patterns, see [Evaluating Alerts](https://docs.github.com/en/code-security/tutorials/remediate-leaked-secrets/evaluating-alerts#checking-a-secrets-validity).
    * **Generic patterns**. To learn more about scanning for generic patterns, see [Supported Secret Scanning Patterns](https://docs.github.com/en/code-security/reference/secret-security/supported-secret-scanning-patterns#supported-generic-patterns) and [Viewing Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts/viewing-alerts).
    * **Scan for AI-detected secrets**. To learn more, see [Security And Quality Ai Features](https://docs.github.com/en/code-security/responsible-use/security-and-quality-ai-features).
    * **Push protection**. To learn about push protection, see [Push Protection](https://docs.github.com/en/code-security/concepts/secret-security/push-protection).
    * **Bypass privileges**. By assigning bypass privileges or exemptions, selected actors can bypass or skip push protection. There is a review and approval process for all other contributors. See [Delegated Bypass](https://docs.github.com/en/code-security/concepts/secret-security/delegated-bypass).
    * **Prevent direct alert dismissals**. To learn more, see [Enable Delegated Dismissal](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts/enable-delegated-dismissal).
1. In the "Code scanning" table, choose whether you want to enable, disable, or keep the existing settings for code scanning default setup.
   * **Default setup**. To learn more about default setup, see [Configure Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning#configuring-default-setup-for-a-repository).
      > [!NOTE]
> To create a configuration that you can apply to all repositories regardless of current code scanning setup, choose "Enabled with advanced setup allowed". This setting enables default setup only in repositories where CodeQL analysis is not actively run. _Option available from GitHub Enterprise Server 3.19._

   * **Runner type**. If you want to target specific runners for code scanning, you can choose to use custom-labeled runners at this step. See [Configure Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning#assigning-labels-to-self-hosted-runners). 
    * **Prevent direct alert dismissals**. To learn more, see [Enable Delegated Alert Dismissal](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/enable-delegated-alert-dismissal).
1. In the "Dependency scanning" table, choose whether you want to enable, disable, or keep the existing settings for the following dependency scanning features:
   * **Dependency graph**. To learn about dependency graph, see [Dependency Graph](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph).
      > [!TIP]
      > When both "GitHub Advanced Security" and Dependency graph are enabled, this enables dependency review, see [Dependency Review](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review).
   * **Automatic dependency submission**. To learn about automatic dependency submission, see [Submit Dependencies Automatically](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/submit-dependencies-automatically).
   * **Dependabot alerts**. To learn about Dependabot, see [Dependabot Alerts](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts).
   * **Security updates**. To learn about security updates, see [Dependabot Security Updates](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-security-updates).
   * **Prevent direct alert dismissals**. To learn more, see [Enable Delegated Alert Dismissal](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/enable-delegated-alert-dismissal).
   * **Malware alerts**. To learn more, see [Malware Alerts](https://docs.github.com/en/code-security/concepts/supply-chain-security/malware-alerts).
1. For "Private vulnerability reporting", choose whether you want to enable, disable, or keep the existing settings. To learn about private vulnerability reporting, see [Configure For A Repository](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/configure-vulnerability-reporting/configure-for-a-repository).
1. Optionally, in the "Policy" section, you can use additional options to control how the configuration is applied:
   * **Use as default for newly created repositories**. Select the **None** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click **Public**, **Private and internal**, or **All repositories**.
        > [!NOTE]
> The default security configuration for an organization is only automatically applied to new repositories created in your organization. If a repository is transferred into your organization, you will still need to apply an appropriate security configuration to the repository manually.

   * **Enforce configuration**. Block repository owners from changing features that are enabled or disabled by the configuration (features that are not set aren't enforced). Select **Enforce** from the dropdown menu.

1. To finish creating your custom security configuration, click **Save configuration**.


## Next steps

To apply your custom security configuration to repositories in your organization, see [Apply Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/apply-custom-configuration).

To learn how to edit your custom security configuration, see [Edit Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/manage-your-coverage/edit-custom-configuration).
