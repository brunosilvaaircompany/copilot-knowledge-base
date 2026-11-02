# About AI Scan

AI Scan is a set of AI-powered scanning capabilities that complement CodeQL. The capabilities differ in their scope:

* **AI Scan for repositories** scans a repository’s default branch on demand across all languages, including languages already supported by CodeQL.
* **AI Scan for pull requests** currently finds general security vulnerabilities in selected languages and frameworks not covered by CodeQL.
* **Scan for AI applications** finds risks specific to AI applications and agents, such as indirect prompt injection, independently of CodeQL language coverage.

Each feature has its own coverage, availability, and billing requirements.



## AI Scan for repositories

AI Scan for repositories is in public preview and subject to change.


AI Scan for repositories finds security vulnerabilities across your repository's default branch, in any language. It extends coverage beyond CodeQL-supported languages and can find additional vulnerabilities in languages CodeQL already analyzes.

Users with write access run scans on demand. Findings are added to your code scanning backlog alongside CodeQL alerts, where you can assign them, link them to issues, include them in security campaigns, or use agentic autofix to help fix them.

For more information, including availability, billing, limitations, and enablement guidance, see [Ai Scan For Repositories](https://docs.github.com/en/code-security/concepts/code-scanning/ai-scan-for-repositories).



## AI scanning on pull requests

### General code security vulnerabilities

**AI Scan for pull requests** finds security vulnerabilities in pull request changes for selected languages and frameworks not covered by CodeQL. Examples include PHP and Terraform configuration (HCL).

When enabled, it scans eligible pull requests when they are created and after each new commit. Findings appear alongside CodeQL alerts with an "AI" label.

For more information, including coverage, availability, billing, and enablement guidance, see [Ai Powered Security Detections](https://docs.github.com/en/code-security/concepts/code-scanning/ai-powered-security-detections).



### AI application and agent risks

**Scan for AI applications** finds security risks in AI applications and agents in pull requests, initially focusing on indirect prompt injection.

When enabled, the detector scans eligible pull requests when they are created and after each new commit. Findings appear as comments on the pull request.

For more information, including coverage, availability, billing, and enablement guidance, see [Ai Applications Scanning For Pull Requests](https://docs.github.com/en/code-security/concepts/code-scanning/ai-applications-scanning-for-pull-requests).



## Managing AI Scan

For enterprises, a shared **AI Scan** policy controls whether organizations can enable these features. Allowing AI Scan does not automatically enable any feature. See [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise#enforcing-a-policy-to-manage-ai-scan-in-your-enterprises-repositories).

Organizations enable each feature separately, and repository administrators can opt out for each feature independently. For permissions and setup instructions, see the dedicated article for each feature.
