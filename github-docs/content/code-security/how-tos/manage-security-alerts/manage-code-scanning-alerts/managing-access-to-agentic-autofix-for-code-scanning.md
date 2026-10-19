## About access and rollout

Access controls for agentic autofix cascade from the enterprise to the organization and repository:

* For an enterprise-owned organization, an enterprise owner or security manager must allow organizations to configure agentic autofix. Allowing the feature doesn't enable it for organizations or repositories.
* An organization owner or security manager can enable agentic autofix for the organization. The organization setting enables it for eligible repositories by default.
* Repository administrators can opt individual repositories out or re-enable them, subject to the enterprise and organization settings.
* For an eligible public repository owned by a personal account, a repository administrator can enable or disable agentic autofix directly.

Agentic Autofix is not available for user-owned repositories in an enterprise that uses Enterprise Managed Users.

If your organization used agentic autofix during the public preview, you must enable it again.

Before you enable the feature, review how the use of AI credits and GitHub Actions minutes affects your costs.

For a standalone organization, skip the enterprise procedure. For an eligible public repository owned by a personal account, skip the enterprise and organization procedures.

## Allowing agentic autofix for an enterprise

Enterprise owners and security managers can allow organizations in an enterprise to configure agentic autofix. This policy doesn't enable the feature for any organization or repository.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under {% octicon "law" aria-hidden="true" aria-label="law" %} "Policies", click **Advanced Security**.

1. For the **Agentic Autofix** policy, select **All organizations: Allowed**.

## Enabling agentic autofix for an organization

Organization owners and security managers can enable agentic autofix for all eligible repositories in their organization. For an enterprise-owned organization, the enterprise policy must also allow it.

Before you enable the organization setting, coordinate with repository administrators about any repositories that should opt out.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security** then **Global settings**.

1. Under "Code scanning," to enable the feature, set **Agentic Autofix** to **On**.

## Managing agentic autofix for a repository

For an organization-owned repository, agentic autofix is enabled by default when the organization enables it. Repository administrators can disable or re-enable it for an individual repository. For an eligible public repository owned by a personal account, a repository administrator can enable or disable it directly.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. In the "Code Security" section, enable or disable **Agentic Autofix** by setting the toggle to **On** or **Off**.

After you enable agentic autofix, users with write access to the repository can assign code scanning alerts to Copilot. See [Resolve Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts#fixing-alerts-with-copilot).

## Disabling agentic autofix

You can disable agentic autofix at the enterprise, organization, or repository level. If you disable it at the enterprise or organization level, repository administrators cannot re-enable it.

### Disallowing agentic autofix for an enterprise

Enterprise owners and security managers can prevent all organizations and repositories in their enterprise from using agentic autofix.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under {% octicon "law" aria-hidden="true" aria-label="law" %} "Policies", click **Advanced Security**.

1. For the **Agentic Autofix** policy, select **All organizations: Not allowed**.

### Disabling agentic autofix for an organization

Organization owners and security managers can disable agentic autofix for all repositories in their organization.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security** then **Global settings**.

1. Under "Code scanning," set **Agentic Autofix** to **Off**.

### Disabling agentic autofix for a repository

Repository administrators can opt an individual repository out of agentic autofix. For an eligible public repository owned by a personal account, this disables the feature directly.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. In the "Code Security" section, set **Agentic Autofix** to **Off**.
