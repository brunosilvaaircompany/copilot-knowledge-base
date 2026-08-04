# Phase 5: Rollout and scale code scanning

> [!TIP]
> This article is part of a series on adopting GitHub Advanced Security at scale. For the previous article in this series, see [Phase 4 Create Internal Documentation](https://docs.github.com/en/code-security/tutorials/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation).

You can quickly enable security features at scale with a security configuration, a collection of security enablement settings you can apply to repositories in an organization. You can customize Advanced Security features at the organization level with global settings. See [Organization Security](https://docs.github.com/en/code-security/concepts/security-at-scale/organization-security).


## Enabling code scanning

After piloting code scanning and creating internal documentation for best practices, you can enable code scanning across your company. You can configure code scanning default setup for all repositories in an organization from security overview. For more information, see [Code Scanning At Scale](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/code-scanning-at-scale#configuring-default-setup-for-all-eligible-repositories-in-an-organization).

For some languages or build systems, you may need to instead configure advanced setup for code scanning to get full coverage of your codebase. However, advanced setup requires significantly more effort to configure, customize, and maintain, so we recommend enabling default setup first.


## Building subject matter expertise

To successfully manage and use code scanning across your company, you should build internal subject matter expertise. For default setup for code scanning, one of the most important areas for subject matter experts (SMEs) to understand is interpreting and fixing code scanning alerts. For more information about code scanning alerts, see:

* [Code Scanning Alerts](https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts)
* [Assess Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/assess-alerts)
* [Resolve Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts)

You'll also need SMEs if you need to use advanced setup for code scanning. These SMEs will need knowledge of code scanning alerts, as well as topics like GitHub Actions and customizing code scanning workflows for particular frameworks. For custom configurations of advanced setup, consider running meetings on complicated topics to scale the knowledge of several SMEs at once.

For code scanning alerts from CodeQL analysis, you can use security overview to see how CodeQL is performing in pull requests in repositories across your organization, and to identify repositories where you may need to take action. For more information, see [Pull Request Alert Metrics](https://docs.github.com/en/code-security/concepts/code-scanning/pull-request-alert-metrics).



With a GitHub Copilot Enterprise license, you can also ask GitHub Copilot Chat for help to better understand code scanning alerts in repositories in your organization. For more information, see [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github#asking-questions-about-alerts-from-github-advanced-security-features).



> [!TIP]
> For the next article in this series, see [Phase 6 Rollout And Scale Secret Scanning](https://docs.github.com/en/code-security/tutorials/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning).
