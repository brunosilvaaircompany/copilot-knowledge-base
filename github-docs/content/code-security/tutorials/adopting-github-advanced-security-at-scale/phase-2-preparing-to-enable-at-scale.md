# Phase 2: Preparing to enable at scale

> [!TIP]
> This article is part of a series on adopting GitHub Advanced Security at scale. For the previous article in this series, see [Phase 1 Align On Your Rollout Strategy And Goals](https://docs.github.com/en/code-security/tutorials/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals).

## Preparing to enable code scanning

Code scanning is a feature that you use to analyze the code in a GitHub repository to find security vulnerabilities and coding errors. Any problems identified by the analysis are shown in your repository.
 For more information, see [Code Scanning](https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning).

Rolling code scanning out across hundreds of repositories can be difficult, especially when done inefficiently. Following these steps will ensure your rollout is both efficient and successful.


Code scanning is also available for all public repositories on GitHub.com without a license for prodname_GH_code_security.

### Preparing teams for code scanning

First, prepare your teams to use code scanning. The more teams that use code scanning, the more data you'll have to drive remediation plans and monitor progress on your rollout.

For an introduction to code scanning, see:
* [Code Scanning](https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning)
* [Code Scanning Alerts](https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts)
* [Assess Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/assess-alerts)

Your core focus should be preparing as many teams to use code scanning as possible. You can also encourage teams to remediate appropriately, but we recommend prioritizing enablement and use of code scanning over fixing issues during this phase.



### Enabling code scanning for your appliance

Before you can proceed with pilot programs and rolling out code scanning across your enterprise, you must first enable code scanning for your appliance. For more information, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance).



## Preparing to enable secret scanning

> [!NOTE]
> When a secret is detected in a repository that has enabled secret scanning, GitHub alerts all users with access to security alerts for the repository. 
>
> Secrets found in public repositories using secret scanning alerts for partners are reported directly to the partner, without creating an alert on GitHub. For details about the supported partner patterns, see [Supported Secret Scanning Patterns](https://docs.github.com/en/code-security/reference/secret-security/supported-secret-scanning-patterns).

If a project communicates with an external service, it might use a token or private key for authentication. If you check a secret into a repository, anyone who has read access to the repository can use the secret to access the external service with your privileges. Secret scanning will scan your entire Git history on all branches present in your GitHub repositories for secrets and alert you or block the push containing the secret. For more information, see [Secret Scanning](https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning).

Secret scanning alerts for partners runs automatically on public repositories and public npm packages to notify service providers about leaked secrets on GitHub.

{% ifversion fpt or ghec %}Secret scanning alerts for users are available for free on all public repositories.{% endif %}

### Considerations when enabling secret scanning

Enabling secret scanning at the organizational level can be easy, but clicking **Enable All** at the organization level and selecting the option **Automatically enable secret scanning for every new repository** has some downstream effects that you should be aware of:

#### License consumption

Enabling secret scanning for all repositories will maximize your use of GitHub Secret Protection licenses. This is fine if you have enough licenses for the current committers to all those repositories. If the number of active developers is likely to increase in the coming months, you may exceed your license limit and then be unable to use secret scanning on newly created repositories.

#### Initial high volume of detected secrets

If you are enabling secret scanning on a large organization, be prepared to see a high number of secrets found. Sometimes this comes as a shock to organizations and the alarm is raised. If you would like to turn on secret scanning across all repositories at once, plan for how you will respond to multiple alerts across the organization.

Secret scanning can be enabled for individual repositories. For more information, see [Enable Secret Scanning](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/detect-secret-leaks/enable-secret-scanning). Secret scanning can also be enabled for all repositories in your organization, as described above. For more information on enabling for all repositories, see [Managing Security And Analysis Settings For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization).

### Custom patterns for secret scanning

Secret scanning detects a large number of default patterns but can also be configured to detect custom patterns, such as secret formats unique to your infrastructure or used by integrators that GitHub's secret scanning does not currently detect. For more information about supported secrets for partner patterns, see [Supported Secret Scanning Patterns](https://docs.github.com/en/code-security/reference/secret-security/supported-secret-scanning-patterns).

As you audit your repositories and speak to security and developer teams, build a list of the secret types that you will later use to configure custom patterns for secret scanning. For more information, see [Define Custom Patterns](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns).

### Push protection for secret scanning

Push protection for organizations and repositories instructs secret scanning to check pushes for supported secrets _before_ secrets are committed to the codebase. For information on which secrets are supported, see [Supported Secret Scanning Patterns](https://docs.github.com/en/code-security/reference/secret-security/supported-secret-scanning-patterns).

If a secret is detected in a push, that push is blocked. Secret scanning lists any secrets it detects so the author can review the secrets and remove them or, if needed, allow those secrets to be pushed. Secret scanning can also check pushes for custom patterns.


Developers have the option to bypass push protection by reporting that a secret is a false positive, that it is used in tests, or that it will be fixed later.

When a contributor bypasses a push protection block, GitHub:
* Creates an alert in the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab of the repository, organization, and enterprise
* Adds the bypass event to the audit log
* Sends an email alert to personal account, organization, and enterprise owners, security managers, and repository administrators who are watching the repository, with a link to the secret and the reason it was allowed


Before enabling push protection, consider whether you need to create guidance for developer teams on the acceptable conditions for bypassing push protection. You can configure a link to this resource in the message that's displayed when a developer attempts to push a blocked secret.

Next, familiarize yourself with the different options for managing and monitoring alerts that are the result of a contributor bypassing push protection.

For more information, see [Push Protection](https://docs.github.com/en/code-security/concepts/secret-security/push-protection).

## Next steps

For the next article in this series, see [Phase 3 Pilot Programs](https://docs.github.com/en/code-security/tutorials/adopting-github-advanced-security-at-scale/phase-3-pilot-programs).
