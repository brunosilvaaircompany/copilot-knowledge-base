# AI Scan for a repository's backlog

> [!NOTE]
> AI Scan for repositories is in public preview and subject to change.


AI Scan for repositories uses a proprietary harness that leverages multiple models, when available, to find security vulnerabilities on your repository's default branch. It supports all languages, extending coverage beyond CodeQL-supported languages and finding additional vulnerabilities in languages CodeQL already analyzes. You run scans on demand, independently of CodeQL.

AI Scan for repositories adds findings to your code scanning backlog alongside CodeQL alerts. You can use existing workflows to assign alerts, apply agentic autofix, include alerts in security campaigns, and link them to issues.

## Availability

Availability depends on who owns the repository and its visibility.

| Repository owner | Visibility | Availability and requirement |
| --- | --- | --- |
| Organization | Public | Available without an active-committer license |
| Organization | Private or internal | Available with GitHub Code Security or GitHub Advanced Security |
| Personal account | Public | Available |
| Personal account | Private | Not available |

You do not need a GitHub Copilot license.

## Billing

You run AI Scan for repositories on demand, and each scan consumes **Code Security AI credits**. This usage is separate from active-committer licensing.

Usage is billed to the account responsible for the organization's billing. 

For public repositories owned by a personal account, usage is billed to that personal account unless the repository owner has a GitHub Copilot license provided by an organization or enterprise. In that case, usage is billed to the organization or enterprise that provides the license.

If the billing account receives included AI credits through a GitHub Copilot entitlement, AI Scan uses those credits first. After the included credits are exhausted, or if the account has no included credits, usage is metered and governed by the applicable budgets. If a hard budget leaves no Code Security AI credits available, AI Scan cannot produce findings. Scanning resumes when an administrator increases the limiting budget or a new billing cycle begins.

AI scan for repositories has some limits to prevent it from consuming very high amounts of budget. Detection steps are limited to 30 minutes and 150,000 AI credits.

For more information, see [GitHub Advanced Security](https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security#how-ai-feature-usage-is-billed).

## How AI Scan works

Users with **write access** to a repository manually trigger a scan of the repository's default branch. The AI agent searches across the repository to identify files and functions to examine. It selects code for further analysis rather than reading every file in full. The agent runs within a time budget. When that budget is exhausted, it stops searching and reports its findings.

AI Scan runs independently of CodeQL. If the repository already has CodeQL alerts, AI Scan uses those alerts to suppress matching findings.

## How AI Scan findings appear in the code scanning backlog

When a scan finishes, its findings appear as alerts in the repository's code scanning alert list, under the **Security and quality** tab, alongside alerts from CodeQL. You can filter the list by the **AI Scan** tool to focus on these findings.

Use the existing alert severity filters to prioritize findings for assessment. You can assign alerts, link them to issues, include them in security campaigns, or use agentic autofix to help remediate them. See [Assess Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/assess-alerts).

During public preview, merging a potential fix does not automatically trigger another AI Scan. You must manually trigger a new scan to check for resolved alerts.

The alert will only close automatically if the applied fix changes the exact line of code that triggered the alert. Otherwise, you must manually close the alert.

## Limitations

* Scans analyze the default branch only.
* Scans are manually triggered. Scheduled scans and automatic scans on push are not supported.
* The agent selects which code to examine within a time budget. A scan does not exhaustively analyze every file or guarantee that it finds every vulnerability.
* Matching against existing CodeQL alerts is best effort, so duplicate alerts can occur.
* AI-generated findings can be inaccurate. Review each finding before deciding how to address it.

For guidance on using AI-powered security features responsibly, see [Security And Quality Ai Features](https://docs.github.com/en/code-security/responsible-use/security-and-quality-ai-features).

## Supported languages

AI Scan for repositories supports all languages, including languages already supported by CodeQL. Use it alongside CodeQL to find additional vulnerabilities, or to extend scanning coverage to languages that CodeQL does not support.

## Enabling AI Scan for repositories

Before enabling AI Scan for repositories, confirm repository eligibility, review the billing account's included AI credits, and configure budgets for metered usage.

* **Enterprise**: Enterprise owners can allow or prevent organizations from enabling AI Scan for repositories. This policy controls both AI Scan on pull requests and AI Scan for a repository's backlog. The policy is set to "Not allowed" by default. Allowing AI Scan does not enable it automatically. See [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise#enforcing-a-policy-to-manage-ai-scan-in-your-enterprises-repositories).
* **Organization**: Organization owners and security managers can enable AI Scan for repositories for eligible repositories. Repositories inherit the organization setting. See [Configure Global Settings](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/configure-global-settings#enabling-ai-scan-for-repositories).
* **Organization-owned repository**: People with admin access to the repository can opt out when the organization has enabled AI Scan. They cannot opt in when the organization setting is disabled. To disable the feature, go to the repository's "Settings" page, under "Advanced Security", then under "Code Security", toggle off **AI Scan for repositories**.

## Next steps

To run a scan and manage the resulting alerts, see [Viewing And Managing Ai Scan Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/viewing-and-managing-ai-scan-alerts).
