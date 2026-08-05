# AI-powered security detections in pull requests

> [!NOTE]
> AI-powered security detections are currently in public preview and subject to change.

AI-powered security detections are additional security findings produced by an AI-based scanning engine that runs on pull requests and complements CodeQL. Unlike CodeQL alerts, AI-powered findings are only available on pull requests and do not appear as backlog alerts in the repository's security view.

While CodeQL provides high-precision static analysis for a specific set of supported languages and queries, many repositories use languages and frameworks that CodeQL does not cover. AI-powered detections expand code scanning coverage into these areas, helping you find vulnerabilities without adding new tools or configuration.

During the public preview, AI-powered security detections require a GitHub Advanced Security license and a GitHub Copilot license.

Usage consumes AI credits. See [Usage Based Billing For Organizations And Enterprises](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

## How AI-powered security detections work

AI-powered security detections run automatically on pull requests in repositories where CodeQL default setup is enabled and AI-powered detections have been opted into. The AI-based scan is triggered on pull request creation and after each new commit, the same as CodeQL.

AI-powered findings are advisory and do not block pull request merges. They provide signals about where code security can be improved without interrupting your workflow.

The AI scanning engine works directly with the code in the pull request and does not require a build system. It uses tools such as code search to gather additional context from the repository when deciding whether to flag an issue. It uses its own specialized prompts and does not use custom instruction files such as `/.github/copilot-instructions.md` or `/CLAUDE.md`.

The AI scan runs independently of CodeQL's status. If CodeQL default setup fails or is in a waiting state, AI-powered detections will still run.

Results are posted to the pull request as they are found. If the CodeQL scan takes longer to complete, you may see AI-powered findings before CodeQL results appear, or vice versa.

## How findings appear on pull requests

AI-powered findings appear alongside CodeQL alerts on the **Conversation** and **Files changed** tabs of a pull request. Each AI-powered finding is labeled with an "AI" indicator so you can distinguish it from CodeQL alerts.

Each finding includes a description of the security issue and an explanation of the risk. Most findings also include a suggested remediation, but not every finding has one. Where a suggested remediation is available, Copilot Autofix is included and provides a recommended code change to fix the issue, the same way it does for CodeQL alerts. Findings also include a thumbs up/down feedback mechanism that helps improve detection quality over time.

## Limitations

* AI-powered security detections analyze pull requests only. Full repository scans are not supported.
* AI-powered findings cannot yet be used in rulesets to enforce merge requirements
* Detection categories and supported languages may change as the feature evolves.
* As with any AI-based tool, findings may include false positives. Use the feedback mechanism to report inaccurate results.

## Supported languages

AI-powered security detections are designed to cover languages and frameworks that are not currently supported by CodeQL. This includes, but is not limited to, languages such as PHP, Shell/Bash, Terraform configuration (HCL), and Dockerfiles, as well as framework coverage gaps such as JSP for Java and Blazor for C#.

For a full list of languages supported by CodeQL, see [About Code Scanning With Codeql](https://docs.github.com/en/code-security/concepts/code-scanning/codeql/about-code-scanning-with-codeql).

## Detection categories

AI-powered security detections currently cover the following categories. These categories describe how findings are classified. The AI scanner may evolve over time as models improve.

* **String injection** — Unsafe string-built SQL, HTML, shell, JSON, or YAML with missing or incorrect escaping or sanitization.
* **Weak cryptography** — Weak algorithms, small keys, insecure randomness, missing encryption, or weak password hashing.
* **Broken access control** — Path traversal, CSRF gaps, or user-driven open redirects.
* **Sensitive data exposure** — Secrets, tokens, passwords, or stack traces stored, logged, or sent without adequate protection.
* **Security misconfiguration** — Risky defaults or settings, such as disabling security controls or enabling debug features.
* **Authentication failures** — Missing TLS or validation, insecure authentication flows, or missing rate limiting.
* **Data integrity failures** — Unsafe deserialization, HTTP for sensitive actions, prototype pollution, or executing untrusted content.
* **Server-side request forgery (SSRF)** — Server fetches attacker-controlled URLs, hosts, or protocols.
* **Supply chain risks** — Unpinned third-party actions, packages, or images, or downloads without integrity checks.

## Enabling AI-powered security detections

AI-powered security detections are not allowed at the enterprise level by default and disabled at the organization and repository levels. Enterprise administrators must explicitly allow the feature before organizations can enable it. Organization administrators must explicitly opt in to the feature. Repository administrators can opt-out of the feature. Additionally, you need to have the CodeQL default setup enabled.

You do not need to select a model to enable AI-powered security detections.

* **Enterprise**: The **AI Findings** policy under "Code Security" controls whether organizations can enable the feature. See [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise#enforcing-a-policy-to-manage-the-use-of-ai-powered-security-detections-in-your-enterprises-repositories).
* **Organization**: The **AI findings** setting under "Code scanning" enables AI-powered detections for repositories in the organization. See [Configuring Global Security Settings For Your Organization](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/configuring-global-security-settings-for-your-organization#enabling-ai-powered-security-detections).
* **Repository**: The **AI findings** toggle under "Code scanning" enables or disables AI-powered detections for the individual repository. Repositories inherit the organization setting but can opt out individually.
