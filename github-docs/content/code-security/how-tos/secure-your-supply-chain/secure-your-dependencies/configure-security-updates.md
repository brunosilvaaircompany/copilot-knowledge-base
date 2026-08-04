# Configuring Dependabot security updates





> [!NOTE]
> Your site administrator must set up Dependabot updates for your GitHub Enterprise Server instance before you can use this feature. For more information, see [Enabling Dependabot For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise).
>
> You may not be able to enable or disable Dependabot updates if an enterprise owner has set a policy at the enterprise level. For more information, see [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).





## Managing Dependabot security updates for your repositories

You can enable or disable Dependabot security updates for all qualifying repositories owned by your personal account or organization. For more information, see [Managing Security And Analysis Features](https://docs.github.com/en/account-and-profile/how-tos/account-settings/managing-security-and-analysis-features) or [Managing Security And Analysis Settings For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization).

You can also enable or disable Dependabot security updates for an individual repository.

### Enabling or disabling Dependabot security updates for an individual repository

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. To the right of "Dependabot security updates," click **Enable** to enable the feature or **Disable** to disable it. For public repositories, the button is disabled if the feature is always enabled.

## Grouping Dependabot security updates into a single pull request

In order to use grouped security updates, you must first enable the following features:

* **Dependency graph**. For more information, see [Enable Dependency Graph](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/enable-dependency-graph).
* **Dependabot alerts**. For more information, see [Configure Dependabot Alerts](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-dependabot-alerts).
* **Dependabot security updates**. For more information, see [Configure Security Updates](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-security-updates#managing-dependabot-security-updates-for-your-repositories).

> [!NOTE]
> When grouped security updates are first enabled, Dependabot will immediately try to create grouped pull requests. You may notice Dependabot closing old pull requests and opening new ones.

You can enable grouped pull requests for Dependabot security updates in one, or both, of the following ways.

* To group as many available security updates together as possible, across directories and per ecosystem, enable grouping in the "Advanced Security" settings for your repository, or in "Global settings" under Advanced Security for your organization.
* For more granular control of grouping, such as grouping by package name, development/production dependencies, SemVer level, or across multiple directories per ecosystem, add configuration options to the `dependabot.yml` configuration file in your repository.

> [!NOTE]
> If you have configured group rules for Dependabot security updates in a `dependabot.yml` file, all available updates will be grouped according to the rules you've specified. Dependabot will only group across those directories not configured in your `dependabot.yml` if the setting for grouped security updates at the organization or repository level is also enabled.


### Enabling or disabling grouped Dependabot security updates for an individual repository

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Under "Dependabot," to the right of "Grouped security updates," click **Enable** to enable the feature or **Disable** to disable it.

### Enabling or disabling grouped Dependabot security updates for an organization

You can enable grouped Dependabot security updates into a single pull request. For more information, see [Configure Global Settings](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/configure-global-settings#grouping-dependabot-security-updates).

## Overriding the default behavior with a configuration file

You can override the default behavior of Dependabot security updates by adding a `dependabot.yml` file to your repository. With a `dependabot.yml` file, you can have more granular control of grouping, and override the default behavior of Dependabot security updates settings.

Use the `groups` option with the `applies-to: security-updates` key to create sets of dependencies (per package manager), so that Dependabot opens a single pull request to update multiple dependencies at the same time. You can define groups by package name (the `patterns` and `exclude-patterns` keys), dependency type (`dependency-type` key), and SemVer (the `update-types` key).

Dependabot creates groups in the order they appear in your `dependabot.yml` file. If a dependency update could belong to more than one group, it is only assigned to the first group it matches with.


If you only require _security_ updates and want to exclude _version_ updates, you can set `open-pull-requests-limit` to `0` in order to prevent version updates for a given `package-ecosystem`.

For more information about the configuration options available for security updates, see [Customizing Dependabot Security Prs](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/customizing-dependabot-security-prs).

```yaml copy
# Example configuration file that:
#  - Has a private registry
#  - Ignores lodash dependency
#  - Disables version-updates
#  - Defines a group by package name, for security updates for golang dependencies

version: 2
registries:
  example:
    type: npm-registry
    url: https://example.com
    token: {% raw %}${{secrets.NPM_TOKEN}}{% endraw %}
updates:
  - package-ecosystem: "npm"
    directory: "/src/npm-project"
    schedule:
      interval: "daily"
    # For Lodash, ignore all updates
    ignore:
      - dependency-name: "lodash"
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0
    registries:
      - example
  - package-ecosystem: "gomod"
    directories:
      - "**/*"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 0
    groups:
      golang:
        applies-to: security-updates
        patterns:
          - "golang.org*"
```

> [!NOTE]
> In order for Dependabot to use this configuration for security updates, the `directory` must be the path to the manifest files (or `directories` must contain paths or glob patterns matching the manifest file locations), and you should not specify a `target-branch`.

## Further reading

* [Dependabot Alerts](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts)
* [Configure Dependabot Alerts](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-dependabot-alerts)
* [Dependency Graph Supported Package Ecosystems](https://docs.github.com/en/code-security/reference/supply-chain-security/dependency-graph-supported-package-ecosystems#supported-package-ecosystems)
