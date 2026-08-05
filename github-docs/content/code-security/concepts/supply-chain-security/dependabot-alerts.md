# Dependabot alerts

Software often relies on packages from various sources, creating dependency relationships that can unknowingly introduce security vulnerabilities. When your code depends on packages with known security vulnerabilities, you become a target for attackers seeking to exploit your system—potentially gaining access to your code, data, customers, or contributors. Dependabot alerts notify you about vulnerable dependencies so you can upgrade to secure versions and protect your project.

## When Dependabot sends alerts

Dependabot scans your repository's default branch and sends alerts when:


* A new vulnerability is added to the GitHub Advisory Database
* Your enterprise publishes an innersource advisory for a component you depend on. For more information, see [Innersource Advisories](https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/innersource-advisories).
* Your dependency graph changes—for example, when you push commits that update packages or versions

For supported ecosystems, see [Dependency Graph Supported Package Ecosystems](https://docs.github.com/en/code-security/reference/supply-chain-security/dependency-graph-supported-package-ecosystems#supported-package-ecosystems).

## Understanding alerts

When GitHub detects a vulnerable dependency, a Dependabot alert appears on the repository's **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab and dependency graph. Each alert includes:

* A link to the affected file
* Details about the vulnerability and its severity
* Information about a fixed version (when available)

Alerts generated from an innersource advisory carry a distinct "Innersource" label, distinguishing them from alerts based on public advisories.

For information about viewing and managing alerts, see [View Dependabot Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/view-dependabot-alerts).

## Who can enable alerts?

Repository administrators and organization owners can enable Dependabot alerts for their repositories and organizations. When enabled, GitHub immediately generates the dependency graph and creates alerts for any vulnerable dependencies it identifies.  Repository administrators can grant access to additional people or teams.


Enterprise owners must enable Dependabot alerts for your GitHub Enterprise Server instance before you can use this feature. For more information, see [Enabling Dependabot For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise).



See [Configure Dependabot Alerts](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-dependabot-alerts).



## Alert ownership and assignments

Users with write access or higher can assign Dependabot alerts to repository collaborators, teams, or AI agents to establish clear ownership for vulnerability remediation. Assignments help track who's responsible for each alert and prevent vulnerabilities from being overlooked.

You can assign alerts to the following types of agents:

* **Copilot**, GitHub's built-in AI agent.
* **Third-party agents**,such as Codex or Claude, when enabled in your repository settings.

When an alert is assigned to a person or team, the assignee receives a notification and the alert displays their name in the alert list. You can filter alerts by assignee to track progress.

When an alert is assigned to an agent, the agent automatically creates a session and opens a draft pull request with a proposed fix. If the agent can't generate a fix, it remains as an assignee, and you can click **View Session** on the alert timeline to review the agent's log.

> [!NOTE]
> Assignment visibility is currently scoped to the repository-level alerts view. The organization-wide security overview does not display alert assignments.

When an alert's assignees change, GitHub sends an `assignees_changed` webhook event. You can use this event to trigger workflows or sync assignment data with external systems. For more information, see [Webhook Events And Payloads](https://docs.github.com/en/webhooks/webhook-events-and-payloads#dependabot_alert).

### Automation and integrations

You can manage alert assignments programmatically using the REST API. For more information, see [Alerts](https://docs.github.com/en/rest/dependabot/alerts).

For information about assigning alerts, see [View Dependabot Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/view-dependabot-alerts#viewing-and-prioritizing-dependabot-alerts).



## How alert notifications work

By default, GitHub sends email notifications about new alerts to people who both:

* Have write, maintain, or admin permissions to a repository
* Are watching the repository and have enabled notifications for security alerts or for all activity on the repository


You can override the default behavior by choosing the type of notifications you want to receive, or switching notifications off altogether in the settings page for your user notifications at [https://github.com/settings/notifications](https://github.com/settings/notifications).


Regardless of your notification preferences, when Dependabot is first enabled, GitHub does not send notifications for all vulnerable dependencies found in your repository. Instead, you will receive notifications for new vulnerable dependencies identified after Dependabot is enabled, if your notification preferences allow it.

If you are concerned about receiving too many notifications, we recommend leveraging Dependabot auto-triage rules to auto-dismiss low-risk alerts. Rules are applied before alert notifications are sent, so alerts that are auto-dismissed upon creation do not send notifications. See [Dependabot Auto Triage Rules](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-auto-triage-rules).

Alternatively, you can opt into the weekly email digest, or even completely turn off notifications while keeping Dependabot alerts enabled.

## Limitations

Dependabot alerts have some limitations:

* Alerts can't catch every security issue. Always review your dependencies and keep manifest and lock files up to date for accurate detection.
* New vulnerabilities may take time to appear in the GitHub Advisory Database and trigger alerts.
* Only advisories reviewed by GitHub or published by your enterprise as innersource advisories trigger alerts.
* Dependabot doesn't scan archived repositories.
* For GitHub Actions, alerts are only generated for actions that use semantic versioning, not SHA versioning.


GitHub never publicly discloses vulnerabilities for any repository. 



## GitHub Copilot Chat integration

With a GitHub Copilot Enterprise license, you can ask Copilot Chat questions about Dependabot alerts in your organization's repositories. For more information, see [Get Started With Chat](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/get-started-with-chat#security-alert-questions).



## Further reading


* [Malware Alerts](https://docs.github.com/en/code-security/concepts/supply-chain-security/malware-alerts)
* [Innersource Advisories](https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/innersource-advisories)
* [View Dependabot Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/view-dependabot-alerts)
* [Dependabot Security Updates](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-security-updates)
* [Audit Security Alerts](https://docs.github.com/en/code-security/concepts/security-at-scale/audit-security-alerts)
