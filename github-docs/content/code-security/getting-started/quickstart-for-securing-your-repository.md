# Quickstart for securing your repository

## Introduction

This guide shows you how to configure security features for a repository.

Your security needs are unique to your repository, so you may not need to enable every feature for your repository. For more information, see [GitHub Security Features](https://docs.github.com/en/code-security/getting-started/github-security-features).

Some features are available for all repositories{% elsif fpt or ghec %}repositories on all plans. Additional features are available to organizations and enterprises that use GitHub Secret Protection, GitHub Code Security, or GitHub Advanced Security. GitHub Advanced Security features are also enabled for all public repositories on GitHub. For more information, see [About GitHub Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security).



## Managing access to your repository

The first step to securing a repository is to establish who can see and modify your code. For more information, see [Managing Your Repositorys Settings And Features](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features).

From the main page of your repository, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, then scroll down to the "Danger Zone."

* To change who can view your repository, click **Change visibility**. For more information, see [Setting Repository Visibility](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility).
* To change who can access your repository and adjust permissions, click **Manage access**. For more information, see [Managing Teams And People With Access To Your Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository).

## Managing the dependency graph


Repository administrators can enable or disable the dependency graph for repositories.
 The dependency graph interprets manifest and lock files in a repository to identify dependencies.

1. From the main page of your repository, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
1. Click **Advanced Security**.
1. Next to Dependency graph, click **Enable** or **Disable**.



Enterprise owners can configure the dependency graph and Dependabot alerts for an enterprise. For more information, see [Enable Dependency Graph](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/enable-dependency-graph) and [Enabling Dependabot For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise).


For more information, see [Enable Dependency Graph](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/enable-dependency-graph#enabling-the-dependency-graph-for-a-repository).

## Managing Dependabot alerts

Dependabot alerts are generated when GitHub identifies a dependency in the dependency graph with a vulnerability. You can enable Dependabot alerts for any repository.

Additionally, you can use Dependabot auto-triage rules to manage your alerts at scale, so you can auto-dismiss or snooze alerts, and specify which alerts you want Dependabot to open pull requests for. For information about the different types of auto-triage rules, and whether your repositories are eligible, see [Dependabot Auto Triage Rules](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-auto-triage-rules).


For an overview of the different features offered by Dependabot and instructions on how to get started, see [Dependabot Quickstart](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/dependabot-quickstart).



1. Click your profile picture, then click **Settings**.
1. Click **Advanced Security**.
1. Click **Enable** next to Dependabot alerts.



Enterprise owners must configure the dependency graph and Dependabot alerts for an enterprise.

Once Dependabot alerts have been configured, repository administrators and organization owners can enable Dependabot alerts for private and internal repositories in their "Advanced Security" settings page. Public repositories are enabled by default. For more information, see [Enable Dependency Graph](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/enable-dependency-graph), [Enabling Dependabot For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise), and [Configure Dependabot Alerts](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-dependabot-alerts).



For more information, see [Dependabot Alerts](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts) and [Managing Security And Analysis Features](https://docs.github.com/en/account-and-profile/how-tos/account-settings/managing-security-and-analysis-features).

## Managing dependency review

Dependency review lets you visualize dependency changes in pull requests before they are merged into your repositories. For more information, see [Dependency Review](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review).

Dependency review is a GitHub Code Security feature. Dependency review is enabled for all repositories with the dependency graph enabled. Organizations that use GitHub Team or GitHub Enterprise Cloud with GitHub Code Security can additionally enable dependency review for private and internal repositories.

To enable dependency review for a repository, ensure that the dependency graph is enabled.

1. From the main page of your repository, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
1. Click **Advanced Security**.
1. To the right of Code Security, click **Enable**.
1. Under Code Security, check that dependency graph is enabled for the repository. {% elsif ghes %}
1. Check that dependency graph is configured for your enterprise.

## Managing Dependabot security updates

For any repository that uses Dependabot alerts, you can enable Dependabot security updates to raise pull requests with security updates when vulnerabilities are detected.

1. From the main page of your repository, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
1. Click **Advanced Security**.
1. Next to Dependabot security updates, click **Enable**.

For more information, see [Dependabot Security Updates](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-security-updates) and [Configure Security Updates](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-security-updates).

## Managing Dependabot version updates

You can enable Dependabot to automatically raise pull requests to keep your dependencies up-to-date. For more information, see [Dependabot Version Updates](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-version-updates).


1. From the main page of your repository, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
1. Click **Advanced Security**.
1. Next to Dependabot version updates, click **Enable** to create a basic `dependabot.yml` configuration file.
1. Specify the dependencies to update and any associated configuration options, then commit the file to the repository. For more information, see [Configure Version Updates](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-version-updates#enabling-dependabot-version-updates).



## Configuring Code Security



> [!NOTE]
> Code Security features are available for all public repositories, and for private repositories owned by organizations that are part of a team or an enterprise that uses GitHub Code Security or GitHub Advanced Security.



GitHub Code Security includes code scanning, CodeQL CLI and Copilot Autofix, as well as other features that find and fix vulnerabilities in your codebase.

You can configure code scanning to automatically identify vulnerabilities and errors in the code stored in your repository by using a CodeQL analysis workflow or third-party tool. Depending on the programming languages in your repository, you can configure code scanning with CodeQL using default setup, in which GitHub automatically determines the languages to scan, query suites to run, and events that will trigger a new scan. For more information, see [Configure Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning).

1. From the main page of your repository, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Advanced Security**.
1. If "Code Security" or "GitHub Advanced Security" is not already enabled, click **Enable**.
1. To the right of "CodeQL analysis", select **Set up** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %}, then click **Default**.
1. In the pop-up window that appears, review the default configuration settings for your repository, then click **Enable CodeQL**.
1. Choose whether you want to enable addition features, such as Copilot Autofix or AI-powered security detections.

As an alternative to default setup, you can use advanced setup, which generates a workflow file you can edit to customize your code scanning with CodeQL. For more information, see [Configuring Advanced Setup For Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-advanced-setup-for-code-scanning-with-codeql).

## Configuring Secret Protection



> [!NOTE]
> Secret Protection features are available for all public repositories, and for private repositories owned by organizations that are part of a team or an enterprise that uses GitHub Secret Protection or GitHub Advanced Security.



GitHub Secret Protection includes secret scanning and push protection, as well as other features that help you detect and prevent secret leaks in your repository.

1. From the main page of your repository, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
1. Click **Advanced Security**.
1. If "Secret Protection" or "GitHub Advanced Security" is not already enabled, click **Enable**.
1. If the option "Secret scanning" is shown, click **Enable**.
1. Choose whether you want to enable additional features, such as scanning for generic patterns and push protection.

## Setting a security policy

If you are a repository maintainer, it's good practice to specify a security policy for your repository by creating a file named `SECURITY.md` in the repository. This file instructs users about how to best contact you and collaborate with you when they want to report security vulnerabilities in your repository. You can view the security policy of a repository from the repository’s **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

1. From the main page of your repository, click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**.
1. In the left sidebar, under "Reporting", click **{% octicon "law" aria-hidden="true" aria-label="law" %} Security policy**.
1. Click **Start setup**.
1. Add information about supported versions of your project and how to report vulnerabilities.

For more information, see [Add Security Policy](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/configure-vulnerability-reporting/add-security-policy).

## Next steps

You can view and manage alerts from security features to address dependencies and vulnerabilities in your code. For more information, see [View Dependabot Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/view-dependabot-alerts), [Manage Dependabot Prs](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/manage-dependabot-prs), [Assess Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/assess-alerts), and [Manage Secret Scanning Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts).

You can also use GitHub's tools to audit responses to security alerts. For more information, see [Audit Security Alerts](https://docs.github.com/en/code-security/concepts/security-at-scale/audit-security-alerts).

If you have a security vulnerability in a public repository, you can create a security advisory to privately discuss and fix the vulnerability. For more information, see [Repository Security Advisories](https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/repository-security-advisories) and [Create Repository Advisory](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/create-repository-advisory).


If you use GitHub Actions, you can use GitHub's security features to increase the security of your workflows. For more information, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use).
