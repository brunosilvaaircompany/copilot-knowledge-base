# Disabling autofix for code scanning security alerts

## Disabling agentic autofix

Disabling agentic autofix can be done in two ways:

1. By disabling Copilot Autofix since agentic autofix relies on the same underlying setting. For instructions, see the sections below.
1. By opting repositories out of Copilot cloud agent. See [Access Management](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/access-management#opting-repositories-out-of-copilot-cloud-agent).

For more information about agentic autofix, see [Autofix For Code Scanning](https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning#agentic-autofix).

## Disabling Copilot Autofix

You can disable Copilot Autofix at the enterprise, organization, or repository level.

Disabling Copilot Autofix at any level will close all open Copilot Autofix suggestions that were added as comments on code scanning alerts in pull requests. If Copilot Autofix is later re-enabled, suggestions will only be generated for pull requests opened after that point, or after re-running code scanning security analysis on existing pull requests.

> [!NOTE]
> Copilot Autofix is an integral part of GitHub Code Quality and will continue to run on code quality results even when it is disabled for code security results.

For more information about Copilot Autofix, see [Autofix For Code Scanning](https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning).

### Blocking use of Copilot Autofix for an enterprise

Enterprise administrators can disallow Copilot Autofix for security results in their enterprise. If you disallow Copilot Autofix for an enterprise, Copilot Autofix cannot be enabled for any organizations or repositories within the enterprise.

Allowing Copilot Autofix for an enterprise does not enforce enablement of Copilot Autofix, but means that organization and repository administrators will have the option to enable or disable Copilot Autofix for security results.

Disallowing Copilot Autofix at the enterprise level will remove all open Copilot Autofix suggestions that were added as comments on code scanning alerts in pull requests across all repositories of all organizations within the enterprise.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under {% octicon "law" aria-hidden="true" aria-label="law" %} "Policies", click **Advanced Security Code security**.

1. Under "Copilot Autofix", use the dropdown menu to choose "Not allowed."

### Disabling Copilot Autofix for an organization

If Copilot Autofix is allowed at the enterprise level, organization administrators have the option to disable Copilot Autofix for an organization. If you disable Copilot Autofix for an organization, Copilot Autofix cannot be enabled for any repositories within the organization.

Disabling Copilot Autofix at the organization level will remove all open Copilot Autofix suggestions that were added as comments on code scanning alerts in pull requests across all repositories in the organization.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security** then **Global settings**.

1. Under the "Code scanning" section, deselect **Copilot Autofix**.

For more information about configuring global code scanning settings, see [Configure Global Settings](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/configure-global-settings#configuring-global-code-scanning-settings).

### Disabling Copilot Autofix for a repository

If Copilot Autofix is allowed at the enterprise level and enabled at the organization level, repository administrators have the option to disable Copilot Autofix for a repository. Disabling Copilot Autofix at the repository level will remove all open Copilot Autofix suggestions that were added as comments on code scanning alerts in pull requests across the repository.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. In the "Code Security" section, deselect **Copilot Autofix**.
