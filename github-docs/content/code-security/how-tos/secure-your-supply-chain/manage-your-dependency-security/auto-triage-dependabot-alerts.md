# Customizing auto-triage rules to prioritize Dependabot alerts

## About custom auto-triage rules

You can create your own Dependabot auto-triage rules based on alert metadata. You can choose to auto-dismiss alerts indefinitely, or snooze alerts until a patch becomes available, and you can specify which Dependabot alerts you want Dependabot to open pull requests for. Rules are applied before alert notifications are sent, so creating custom rules that auto-dismiss low-risk alerts will reduce future notification noise.

Since any rules that you create apply to both future and current alerts, you can also use auto-triage rules to manage your alerts in bulk.

Repository administrators can create custom auto-triage rules for their repositories. For private or internal repositories, this requires GitHub Code Security.{% elsif ghes %}This requires GitHub Code Security.

Organization owners and security managers can set custom auto-triage rules at the organization-level, and then choose if a rule is enforced or enabled across all public and private repositories in the organization.

   * **Enforced:** If an organization-level rule is "enforced", repository administrators cannot edit, disable, or delete the rule.
   * **Enabled:** If an organization-level rule is "enabled", repository administrators can still disable the rule for their repository.

> [!NOTE]
> In the event that an organization-level rule and a repository-level rule specify conflicting behaviors, the action set out by the organization-level rule takes precedence. Dismissal rules always act before rules which trigger Dependabot pull requests.

You can create rules to target alerts using the following metadata:

* CVE ID
* CWE
* Dependency scope (`devDependency` or `runtime`)
* Ecosystem
* GHSA ID
* Manifest path (for repository-level rules only)
* Package name
* Patch availability
* Severity
* EPSS Score

### Understanding how custom auto-triage rules and Dependabot security updates interact


> [!NOTE] Dependabot will only open pull requests to resolve Dependabot alerts, not Dependabot malware alerts.



You can use custom auto-triage rules to tailor which Dependabot alerts you want Dependabot to open pull requests for. However, for an "open a pull request" rule to take effect, you must ensure that Dependabot security updates are **disabled** for the repository (or repositories) that the rule should apply to.

When Dependabot security updates are enabled for a repository, Dependabot will automatically try to open pull requests to resolve **every** open Dependabot alert that has an available patch. If you prefer to customize this behavior using a rule, you must leave Dependabot security updates disabled.

For more information about enabling or disabling Dependabot security updates for a repository, see [Configure Security Updates](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-security-updates#managing-dependabot-security-updates-for-your-repositories).

## Adding custom auto-triage rules to your repository

> [!NOTE]
> During the public preview, you can create up to 10 custom auto-triage rules for a repository.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. In the "Dependabot" section, to the right of "Dependabot rules", click {% octicon "gear" aria-label="Configure Dependabot rules" %}.

1. Click **New rule**.

1. Under "Rule name", describe what this rule will do.

1. Under "State", use the dropdown menu to select whether the rule should be enabled or disabled for the repository.
1. Under "Target alerts", select the metadata you want to use to filter alerts.

1. Under "Rules", select the action you want to take on alerts that match the metadata:
   * Select **Dismiss alerts** to auto-dismiss alerts that match the metadata. You can choose to dismiss alerts indefinitely or until a patch is available.
   * Select **Open a pull request to resolve this alert** if you want Dependabot to suggest changes to resolve alerts that match the targeted metadata. Note that this option is unavailable if you have already selected the option to dismiss alerts indefinitely, or if Dependabot security updates are enabled in your repository settings.

      > [!NOTE] Dependabot will only open pull requests to resolve Dependabot alerts, not Dependabot malware alerts.


1. Click **Create rule**.


## Adding custom auto-triage rules to your organization

You can add custom auto-triage rules for all eligible repositories in your organization. For more information, see [Configure Global Settings](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/configure-global-settings#creating-and-managing-dependabot-auto-triage-rules).

## Editing or deleting custom auto-triage rules for your repository

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. In the "Dependabot" section, to the right of "Dependabot rules", click {% octicon "gear" aria-label="Configure Dependabot rules" %}.

1. Under "Repository rules", to the right of the rule that you want to edit or delete, click {% octicon "pencil" aria-label="Edit custom rule" %}.
1. To edit the rule, make any changes to the applicable fields, then click **Save rule**.

1. To delete the rule, under "Danger Zone", click **Delete rule**.
1. In the "Are you sure you want to delete this rule?" dialog box, review the information, then click **Delete rule**.


## Editing or deleting custom auto-triage rules for your organization

You can edit or delete custom auto-triage rules for all eligible repositories in your organization. For more information, see [Configure Global Settings](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/configure-global-settings#creating-and-managing-dependabot-auto-triage-rules).
