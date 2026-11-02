# AI applications scanning for pull requests

> [!NOTE]
> AI applications scanning is currently in public preview and subject to change.

## What is AI applications scanning?

AI applications scanning is a detector that finds security risks specific to AI applications and agents. It detects:

* **Indirect prompt injection:** When malicious instructions embedded in external content, such as documents, websites, or API responses, can influence a model's behavior.
* **Sensitive information disclosure:** When an AI application can expose sensitive information, such as credentials, personal data, or confidential business data.
* **Excessive agency:** When an AI application or agent has excessive functionality, permissions, or autonomy that could allow it to perform unintended or harmful actions.

This detector is separate from CodeQL-based code scanning and from AI Scan for pull requests, GitHub's other AI-based code scanning detector on pull requests. AI Scan for pull requests focuses on traditional code security vulnerabilities, while AI applications scanning focuses on vulnerabilities specific to AI applications and agents, such as prompt injection and excessive agency. If your organization builds AI applications or agents, evaluate both. For more information about AI Scan for pull requests, see [Ai Powered Security Detections](https://docs.github.com/en/code-security/concepts/code-scanning/ai-powered-security-detections).

## How it works

AI applications scanning uses an LLM-based detection approach instead of CodeQL. Because it doesn't rely on static analysis built for specific languages, it has no language or framework limitations.

The detector analyzes pull requests for code patterns and data flows that can expose AI applications to indirect prompt injection, sensitive information disclosure, or excessive agency.

Scans run when a pull request is created and after each new commit.

## How findings appear on pull requests

Findings from AI applications scanning appear as pull request comments, the same way other code scanning findings do. Each finding includes:

* "AI app" label and thumbs up/down feedback control
* A dismiss button

As with AI Scan, these findings are advisory. They don't block a pull request from being merged.

Copilot Autofix suggestions are generated automatically for findings from this detector. This behavior is independent of the Code Scanning Autofix setting, which controls Copilot Autofix for CodeQL results.

## Detection coverage

During public preview, AI applications scanning only detects indirect prompt injection (XPIA) vulnerabilities in AI agents.

This detector covers pull requests only. It doesn't scan your full repository or existing backlog for AI application risks.

As with AI Scan for pull requests, this detector doesn't run on pull requests from forks or pull requests created by Dependabot, and its findings can't be used in rulesets to enforce merge requirements.

## How to enable AI applications scanning

AI applications scanning is off by default at the enterprise, organization, and repository level.

* **Enterprise**: Enablement is controlled by the shared **AI Scan** enterprise policy. Enterprise owners can allow organizations to enable AI-powered code scanning features, including AI applications scanning. See [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise#enforcing-a-policy-to-manage-ai-scan-in-your-enterprises-repositories).
* **Organization**: Organization owners can enable **Scan for AI applications** for eligible repositories where it's allowed. See [Configure Global Settings](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/configure-global-settings#enabling-ai-applications-scanning).
* **Repository**: Repository administrators can opt out for individual repositories once their organization allows it.

If your organization already has AI Scan for pull requests enabled, or you're moving from the private preview of AI applications scanning, you still need to separately enable **Scan for AI applications** at the organization level. Enabling AI Scan for pull requests doesn't enable AI applications scanning, and the reverse is also true. Both features share the same enterprise-level policy, but organizations must enable each one separately.

## Billing

Using AI applications scanning requires a GitHub Advanced Security license and consumes AI credits on top of that license. Eligible public repositories are also included in this billing requirement. For more information, see [GitHub Advanced Security](https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security#how-ai-feature-usage-is-billed).
