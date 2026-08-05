# Viewing and updating Dependabot alerts

> [!NOTE]
> Your site administrator must set up Dependabot updates for your GitHub Enterprise Server instance before you can use this feature. For more information, see [Enabling Dependabot For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise).
>
> You may not be able to enable or disable Dependabot updates if an enterprise owner has set a policy at the enterprise level. For more information, see [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).





Your repository's Dependabot tab lists all open and closed Dependabot alerts and corresponding Dependabot security updates. You can filter alerts by package, ecosystem, or manifest. You can sort the list of alerts, and you can click into specific alerts for more details. You can also dismiss or reopen alerts, either one by one or by selecting multiple alerts at once. For more information, see [Dependabot Alerts](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts).

## About updates for vulnerable dependencies in your repository

Each Dependabot alert has a unique numeric identifier and the Dependabot tab lists an alert for every detected vulnerability. Legacy Dependabot alerts grouped vulnerabilities by dependency and generated a single alert per dependency. If you navigate to a legacy Dependabot alert, you will be redirected to a Dependabot tab filtered for that package.

You can filter and sort Dependabot alerts using a variety of filters and sort options available on the user interface. For more information, see [Viewing and prioritizing Dependabot alerts](#viewing-and-prioritizing-dependabot-alerts) below.

You can also audit actions taken in response to Dependabot alerts. For more information, see [Audit Security Alerts](https://docs.github.com/en/code-security/concepts/security-at-scale/audit-security-alerts).

## Viewing and prioritizing Dependabot alerts

You can view, sort, and filter Dependabot alerts to focus on the alerts that matter most.

By default, alerts are sorted by **Most important**, which helps you prioritize fixes based on factors such as potential impact, actionability, and relevance. This prioritization is continuously improved and considers signals like CVSS score, dependency scope, and whether vulnerable function calls are detected.

You can view all open and closed Dependabot alerts and corresponding Dependabot security updates in your repository's Dependabot tab.




When you assign an alert to an AI agent, the agent automatically creates a session and opens a draft pull request with a proposed fix. If the agent can't generate a fix, it remains as an assignee of the alert. You can click **View Session** on the alert timeline to review the agent's log and understand why no pull request was created. Only a user can remove the agent as an assignee.



1. On GitHub, navigate to the main page of the repository.

1. Under the repository name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab. If you cannot see the "{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality" tab, select the **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="kebab-horizontal" %}** dropdown menu, and then click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**.


1. In the "Findings" section of the sidebar, select the {% octicon "dependabot" aria-hidden="true" aria-label="dependabot" %} **Dependabot** {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %} dropdown menu, then click **Vulnerabilities**.



1. Optionally, refine the list of alerts:
   * Use the dropdown menus at the top of the list to sort or filter alerts.

     ![Screenshot of the filter and sort menus in the Dependabot tab.](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png)

   * Type directly in the search bar to filter alerts, including full-text search across alert details and related security advisories.
   * Click a label on an alert to automatically filter the list by that label.
   * To identify alerts that affect development dependencies, filter by the `scope:development` filter or look for alerts labeled "Development". This can help you prioritize alerts that affect production dependencies first.

     ![Screenshot showing the "Development" label assigned to an alert in the list of alerts.](/assets/images/help/repository/dependabot-alerts-development-label.png)

1. Click an alert to view its details. Alerts for development-scoped dependencies include a "Development" label in the "Tags" section on the alert details page.

   ![Screenshot showing the "Tags" section in the alert details page.](/assets/images/help/repository/dependabot-alerts-tags-section.png)


1. On the right panel, assign ownership for the alert:
   * Click the {% octicon "gear" aria-label="Show options" %} dropdown menu next to "Assignees" to select a user, team, or AI agent from the list. You can also click **Assign to Agent** to assign directly to an agent.

   When you assign an alert to an agent, a dialog appears where you can optionally:
   * Add a custom prompt with additional context about the fix.
   * Select a different repository.
   * Select the AI model to use.
   * Select a custom agent you have configured (recommended for specialized tasks).


1. Optionally, to suggest an improvement to the related security advisory, on the right-hand side of the alert details page, click **Suggest improvements for this advisory on the GitHub Advisory Database**. See [Edit Advisory Database](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/edit-advisory-database).

### Tips for prioritizing alerts

* Use the **Most important** sort order to focus on alerts with the highest potential impact.
* Prioritize alerts that affect production dependencies over development dependencies.
* Use the **Assignees** feature to clarify who is responsible for addressing each alert, so your team can track and remediate vulnerabilities more effectively.
* Use Dependabot auto-triage rules to automatically prioritize or manage alerts. See [Dependabot Auto Triage Rules](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-auto-triage-rules).

For more information about supported ecosystems and manifest files for dependency scope, see [Supported Ecosystems And Manifests For Dependency Scope](https://docs.github.com/en/code-security/reference/supply-chain-security/supported-ecosystems-and-manifests-for-dependency-scope).

For a complete list of available filters, see [Dependabot Alerts Filters](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-alerts-filters).

To retrieve alerts programmatically, see the [Alerts](https://docs.github.com/en/rest/dependabot/alerts).

## Reviewing and fixing alerts



With a GitHub Copilot Enterprise license, you can also ask GitHub Copilot Chat for help to better understand Dependabot alerts in repositories in your organization. For more information, see [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github#asking-questions-about-alerts-from-github-advanced-security-features).



You can review the details of a Dependabot alert to understand the vulnerability and how to fix it.

### Fixing vulnerable dependencies

1. View the details for an alert. For more information, see [Viewing and prioritizing Dependabot alerts](#viewing-and-prioritizing-dependabot-alerts) (above).
1. If you have Dependabot security updates enabled, there may be a link to a pull request that will fix the dependency. Alternatively, you can click **Create Dependabot security update** at the top of the alert details page to create a pull request.

   ![Screenshot of a Dependabot alert with the "Create Dependabot security update" button highlighted with a dark orange outline.](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)

1. Optionally, if you do not use Dependabot security updates, you can use the information on the page to decide which version of the dependency to upgrade to and create a pull request to update the dependency to a secure version.
1. When you're ready to update your dependency and resolve the vulnerability, merge the pull request.

   Each pull request raised by Dependabot includes information on commands you can use to control Dependabot. For more information, see [Manage Dependabot Prs](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/manage-dependabot-prs#managing-dependabot-pull-requests-with-comment-commands).

## Dismissing Dependabot alerts

> [!NOTE]
> You can only dismiss open alerts.

If you schedule extensive work to upgrade a dependency, or decide that an alert does not need to be fixed, you can dismiss the alert. Dismissing alerts that you have already assessed makes it easier to triage new alerts as they appear.

1. [Viewing and prioritizing Dependabot alerts](#viewing-and-prioritizing-dependabot-alerts) (above).
1. Select the "Dismiss" dropdown, and click a reason for dismissing the alert. Unfixed dismissed alerts can be reopened later.
1. Optionally, add a dismissal comment. The dismissal comment will be added to the alert timeline and can be used as justification during auditing and reporting. You can retrieve or set a comment by using the GraphQL API. The comment is contained in the `dismissComment` field. For more information, see [Dependabot](https://docs.github.com/en/graphql/reference/dependabot#object-repositoryvulnerabilityalert) in the GraphQL API documentation.

   ![Screenshot of a Dependabot alert page, with the "Dismiss" dropdown and the option to add a dismissal comment outlined in orange.](/assets/images/help/repository/dependabot-alerts-dismissal-comment.png)

1. Click **Dismiss alert**.

### Dismissing multiple alerts at once

1. View the open Dependabot alerts.
1. Optionally, filter the list of alerts by selecting a dropdown menu, then clicking the filter that you would like to apply. You can also type filters into the search bar.
1. To the left of each alert title, select the alerts that you want to dismiss.
   ![Screenshot of the Dependabot alerts view. Two alerts are selected and these check boxes are highlighted with an orange outline.](/assets/images/help/graphs/select-multiple-alerts.png)
1. Optionally, at the top of the list of alerts, select all alerts on the page.
   ![Screenshot of the header section of the Dependabot alerts view. The "Select all" checkbox is highlighted with a dark orange outline.](/assets/images/help/graphs/select-all-alerts.png)
1. Select the "Dismiss alerts" dropdown, and click a reason for dismissing the alerts.
   ![Screenshot of a list of alerts. Below the "Dismiss alerts" button, a dropdown labeled "Select a reason to dismiss" is expanded.](/assets/images/help/graphs/dismiss-multiple-alerts.png)

## Viewing and updating closed alerts

You can view all open alerts, and you can reopen alerts that have been previously dismissed. Closed alerts that have already been fixed cannot be reopened.

1. On GitHub, navigate to the main page of the repository.

1. Under the repository name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab. If you cannot see the "{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality" tab, select the **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="kebab-horizontal" %}** dropdown menu, and then click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**.


1. In the "Findings" section of the sidebar, select the {% octicon "dependabot" aria-hidden="true" aria-label="dependabot" %} **Dependabot** {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %} dropdown menu, then click **Vulnerabilities**.


1. To just view closed alerts, click **Closed**.

   ![Screenshot showing the list of Dependabot alerts with the "Closed" tab highlighted with a dark orange outline.](/assets/images/help/repository/dependabot-alerts-closed-checkbox.png)

1. Click the alert that you would like to view or update.
1. Optionally, if the alert was dismissed and you wish to reopen it, click **Reopen**. Alerts that have already been fixed cannot be reopened.

   ![Screenshot showing a closed Dependabot alert. A button, titled "Reopen", is highlighted in a dark orange outline.](/assets/images/help/repository/reopen-dismissed-alert.png)

### Reopening multiple alerts at once

1. View the closed Dependabot alerts.
1. To the left of each alert title, select the alerts that you want to reopen by clicking the checkbox adjacent to each alert.
1. Optionally, at the top of the list of alerts, select all closed alerts on the page.
   ![Screenshot of alerts in the "Closed" tab. The "Select all" checkbox is highlighted with a dark orange outline.](/assets/images/help/graphs/select-all-closed-alerts.png)
1. Click **Reopen** to reopen the alerts. Alerts that have already been fixed cannot be reopened.

## Reviewing the audit logs for Dependabot alerts

When a member of your organization or enterprise performs an action related to Dependabot alerts, you can review the actions in the audit log. For more information about accessing the log, see [Reviewing The Audit Log For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log) and [Accessing The Audit Log For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise).

![Screenshot of the audit log showing Dependabot alerts.](/assets/images/help/dependabot/audit-log-ui-dependabot-alert.png)

Events in your audit log for Dependabot alerts include details such as who performed the action, what the action was, and when the action was performed. The event also includes a link to the alert itself. When a member of your organization dismisses an alert, the event displays the dismissal reason and comment. For information on the Dependabot alerts actions, see the `repository_vulnerability_alert` category in [Audit Log Events For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization) and [Audit Log Events For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#repository_vulnerability_alert).
