This article covers disabling Copilot Autofix. Agentic Autofix has separate access controls. To disable agentic autofix, see [Managing Access To Agentic Autofix For Code Scanning](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/managing-access-to-agentic-autofix-for-code-scanning#disabling-agentic-autofix).

For enterprise-owned organizations, controls for Copilot Autofix follow this hierarchy:

* Enterprise owners control whether the feature is **allowed** in the enterprise. When allowed, it **can** be enabled at lower levels (but is not automatically enabled).
* When it's enabled by the enterprise, organization owners can still disable it for their organization. This prevents any repository in the organization from enabling it.
* If both the enterprise and organization have the feature enabled, repository administrators can disable it for the individual repository.

For standalone organizations, the organization and repository controls apply without an enterprise policy.

Disabling Copilot Autofix at any level closes all open suggestions that it added as comments on code scanning alerts in affected pull requests. If you later re-enable it, suggestions are generated only for new pull requests. To generate suggestions for existing pull requests, re-run code scanning security analysis.

> [!NOTE]
> Copilot Autofix is an integral part of GitHub Code Quality and will continue to run on code quality results even when it is disabled for code security results.

## Blocking use of Copilot Autofix for an enterprise

Enterprise owners can disallow Copilot Autofix for security results across all organizations and repositories in their enterprise.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under {% octicon "law" aria-hidden="true" aria-label="law" %} "Policies", click **Advanced Security**.

1. Under "Copilot Autofix", use the dropdown and select **All organizations: Not allowed**.

## Disabling Copilot Autofix for an organization

Organization owners can disable Copilot Autofix for all repositories in their organization. For enterprise-owned organizations, this setting is only available if the enterprise allows Copilot Autofix.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security** then **Global settings**.

1. Under the "Code scanning" section, set **Copilot Autofix** to **Off**.

## Disabling Copilot Autofix for a repository

Repository administrators can disable Copilot Autofix if their organization enables it. For enterprise-owned organizations, this setting is only available if the enterprise also allows Copilot Autofix.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. In the "Code Security" section, set **Copilot Autofix** to **Off**.
