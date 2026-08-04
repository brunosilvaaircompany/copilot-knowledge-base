# Establishing a governance framework for your enterprise

As an enterprise owner, you are responsible for maintaining a strong security posture, complying with regulations, mitigating risks, and protecting intellectual property, within your enterprise. GitHub has tools that can help with that.

Storing your company's code on GitHub allows easy collaboration, tracking, and deployment from a single location. While allowing people to work in repositories with as little friction as possible is important for culture and productivity, you will want to implement some controls over people's work to ensure your code stays secure and reliable.

With GitHub Enterprise, you have access to GitHub's full range of governance features, allowing you to:

* Control how people can update code
* Govern how people can use repositories
* Monitor activity
* Detect leaked secrets
* Set up an approval process for important actions
* Detect vulnerabilities or errors in code



## Protecting your branches

For important branches in your enterprise's repositories, such as branches containing production code, your compliance framework should reduce the risk of errors or malicious code entering your production environments.

With **rulesets**, you can apply rules that govern how people can interact with specific branches. You can also give certain users the right to  explicitly bypass the rules, which provides flexibility while still making the intended restrictions clear.

Many enterprises add rules that:

* **Restrict deletions**, so you can be confident users won't accidentally delete the branch
* **Require a pull request** for all changes, so you have a paper trail and can enforce reviews
* **Require status checks and deployments to succeed** before merging pull requests, so you can guard against errors in production

Other rules, such as requiring signed commits or a linear commit history, are more situational and depend on your compliance requirements.


As an enterprise owner, you can create rulesets at the enterprise level that flexibly target the repositories and branches where you want rules to apply. You can start by adding a base level of protection to every default branch in your enterprise, then build your framework from there. To get started, see [Enforcing Policies For Code Governance](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-governance).


## Governing usage of repositories

Because repositories are where your companies' code and data are stored, it's important to define how users can interact with your repositories to reduce the risk of data leaks. In your enterprise settings, you can set policies to:

* Restrict the default visibility of repositories
* Prevent non-members from being invited to repositories
* Prevent repositories from being forked or transferred outside of an organization

The goal of your policies should be to maintain your security requirements while still promoting collaboration and reducing friction for developers. For example, you could create an "open source" organization for all your enterprise's public repositories, and prevent public repositories from being created in any other organization.


The easiest way to enforce restrictions is to create a **repository policy**. This allows you to flexibly target organizations and repositories in your enterprise and apply restrictions around visibility, naming, creation, deletion, and transfers. See [Governing How People Use Repositories In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/governing-how-people-use-repositories-in-your-enterprise).

Other policies are available as blanket restrictions. These give you more control over the repository lifecycle, but aren't as flexible as the repository policy features. See [Enforcing Repository Management Policies In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise).

## Targeting policies with metadata

You can enable better governance through automated policy enforcement. This is possible with custom properties, allowing you to add structured metadata to your resources. See [Custom Properties](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/custom-properties).

With **repository custom properties**, you can classify repositories by attributes like risk level, team ownership, or compliance requirements. This metadata enables you to automatically apply different governance rules based on repository characteristics.

With **organization custom properties**, you can categorize organizations within your enterprise by data sensitivity, regulatory frameworks, or business units. You can then use these properties to selectively target organizations with enterprise rulesets.

Both types of custom properties integrate with rulesets, allowing you to create powerful governance frameworks that automatically enforce the right policies based on metadata rather than manual repository selection.

See [Managing Custom Properties For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization) and [Managing Custom Properties For Organizations](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/managing-custom-properties-for-organizations).

## Monitoring activity

If something goes wrong, it's important to be able to search activity in your enterprise to investigate the cause or scope of the problem.

GitHub's audit log includes detailed events related to your enterprise account, your organizations, and, if you use Enterprise Managed Users, your managed users. You can filter the audit log for themes like billing activity or search for events associated with a compromised token.

To access the audit log, see [Accessing The Audit Log For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise).

GitHub does not retain audit log data indefinitely. We recommend streaming your audit logs to an external location, which allows you to retain the data for as long as you need and query the data with external tools. See [Streaming The Audit Log For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise).

## Preventing sensitive information from reaching your codebase

To protect intellectual property and prevent security incidents, it's important to implement a system to keep sensitive information such as tokens out of your codebase.

### Secret scanning

With **secret scanning**, you can scan your code to detect sensitive information such as API keys, passwords, and other credentials in the codebase, preventing unauthorized access and potential breaches. Secret scanning alerts you to sensitive information in your codebase, allowing you to respond appropriately by changing passwords or rotating tokens. For generic secrets such as passwords, secret scanning is powered by GitHub Copilot and uses AI. See [Security And Quality Ai Features](https://docs.github.com/en/code-security/responsible-use/security-and-quality-ai-features)

To learn more, see [Secret Scanning](https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning).

Secret scanning can be enabled at the enterprise, organization, and repository level. See [Configure Secret Scanning](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configure-secret-scanning){% elsif ghec %}[Organization Security](https://docs.github.com/en/code-security/concepts/security-at-scale/organization-security) for enablement at enterprise level.

### Push protection

Additionally, you can prevent sensitive data and credentials from being accidentally pushed to repositories with **push protection**.

Push protection acts as a safeguard by scanning for secrets in real-time and blocking pushes that contain potentially sensitive information. Organization owners can configure push protection policies at the organization level to enforce consistent security standards across all repositories. When a push is blocked, developers receive detailed guidance on how to remediate the issue, such as removing the secret from the code.

See [Push Protection](https://docs.github.com/en/code-security/concepts/secret-security/push-protection).

Push protection can be enabled at the organization, repository, and user account level. See [Enable Push Protection](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/prevent-future-leaks/enable-push-protection).



> [!NOTE]
> The configuration of patterns for push protection at enterprise and organization level is currently in public preview and subject to change.


To align secret detection with internal security policies and more effectively prevent unauthorized exposure of sensitive information in your repositories, you can customize which secret patterns are included in push protection at the enterprise or organization level. See [Configure Additional Settings](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/configure-additional-settings#specifying-patterns-to-include-in-push-protection-for-your-enterprise) and [Configure Global Settings](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/configure-global-settings#specifying-patterns-to-include-in-push-protection).



## Setting up an approval process for sensitive actions

You may want to set up an approval process for better control over who in your enterprise can perform sensitive actions. An approval process helps mitigate the risk of unauthorized or malicious changes, and can provide a record of who used the bypass and why, ensuring that all actions are traceable and accountable.

> [!NOTE] The implementation of these approval processes can potentially cause some friction, so it's important to ensure that your security management team has adequate coverage before proceeding.

Approval processes are available for:
* Bypasses of push protection—You can choose who is allowed to bypass push protection, and add a review and approval cycle for pushes containing secrets from all other contributors. For more information about **delegated bypass for push protection**, see [Delegated Bypass](https://docs.github.com/en/code-security/concepts/secret-security/delegated-bypass).
* Dismissals of alerts for code scanning, Dependabot, and secret scanning—You can provide additional control and visibility over alert assessment by ensuring that only designated individuals can dismiss (or close) alerts. For more information about **delegated alert dismissal**, see the following articles:
  * [Enable Delegated Alert Dismissal](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/enable-delegated-alert-dismissal)
  * [Enable Delegated Alert Dismissal](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/enable-delegated-alert-dismissal)
  * [Enable Delegated Dismissal](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts/enable-delegated-dismissal)

## Identifying security vulnerabilities and errors

Many industries have regulations that require regular security assessments and vulnerability management. **Code scanning** helps ensure compliance with industry standards by identifying and mitigating security risks in your code, such as insecure patterns.

Code scanning can be integrated to your CI/CD pipeline, providing continuous monitoring and assessment of your codebase.

To get started quickly with code scanning, we recommend you use the default setup. See [Configure Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning).

Code scanning can be enabled at the enterprise, organization, and repository level. See [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance){% elsif ghec %}[Organization Security](https://docs.github.com/en/code-security/concepts/security-at-scale/organization-security) for enablement at enterprise level.
