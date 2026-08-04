# Exploring your enterprise trial of GitHub Code Security

This guide assumes that you have planned and started a trial of GitHub Advanced Security for an existing or trial GitHub enterprise account, see [Planning A Trial Of Ghas](https://docs.github.com/en/code-security/tutorials/trialing-github-advanced-security/planning-a-trial-of-ghas).

## Introduction

Code scanning and dependency analysis work in the same way in public repositories and in private and internal repositories with Code Security enabled. In addition, Code Security enables you to create security campaigns where security specialists and developers can collaborate to effectively reduce technical debt.

This article focuses on how you can combine these features with enterprise-level controls to standardize and enforce your development process.

### Refine your security configurations

In contrast to Secret Protection, where a single security configuration is typically applied to all repositories, you probably want to fine-tune the configuration of code scanning for different types of repositories. For example, you might need to create additional configurations so that:

* Code scanning uses runners with a specific label to apply to repositories that require a specialized environment or that use private registries.
* Code scanning is "Not set" to apply to repositories that need to use advanced setup or that require a third-party tool.

For your trial, it's simplest to create a primary enterprise-level security configuration and apply it to your test repositories. Then you can create any additional security configurations you need and apply them to a subset of repositories selected using code language, custom property, visibility, and other filter options. For more information, see [Enable Security Features Trial](https://docs.github.com/en/code-security/tutorials/trialing-github-advanced-security/enable-security-features-trial) and [Apply Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/apply-custom-configuration).

### Provide access to view results of code scanning

By default, only the repository administrator and the organization owner can view all code scanning alerts in their area. You should assign the predefined security manager role to all organization teams and users who you want to access the alerts found during the trial. You may also want to give the enterprise account owner this role for each organization in the trial. For more information, see [Managing Security Managers In Your Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization) and [Using Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles#assigning-an-organization-role).

## Evaluate and refine results from the default setup

The default setup for code scanning runs a set of high confidence queries. These are chosen to ensure that, when you roll out code scanning across your whole codebase, developers see a limited set of high quality results, with few false positive results.

You can see a summary of any results found in the organizations in your trial enterprise in the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab for the enterprise. There are also separate views for each type of security alert. See [Viewing Security Insights](https://docs.github.com/en/code-security/how-tos/view-and-interpret-data/analyze-organization-data/viewing-security-insights).

If you don't see the results you expect for code scanning, you can update default setup to run an extended query suite for repositories where you expected to find more results. This is controlled at the repository level, see [Edit Default Setup](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/edit-default-setup).

> [!TIP]
> If you are blocked from editing the repository settings for code scanning, edit the security configuration used by the repository so that settings are not enforced.

If the extended suite still fails to find the results you expect, you may need to enable advanced setup so you can customize the analysis fully. For more information, see [Use The Tools Status Page For Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/use-the-tools-status-page-for-code-scanning) and [Configuring Advanced Setup For Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configuring-advanced-setup-for-code-scanning).

## Enforce automated analysis of pull requests

There are three different types of automated analysis of pull requests built into GitHub:

* **Code scanning analysis** uses queries to highlight known bad coding patterns and security vulnerabilities. Copilot Autofix suggests fixes to problems identified by code scanning.
* **Dependency review** summarizes the dependency changes made by the pull request and highlights any dependencies with known vulnerabilities or that do not meet your development standards.
* **Copilot code review** uses AI to provide feedback on your changes with suggested fixes where possible.

These automated reviews are a valuable extension to self-review and make it easier for developers to present a more complete and secure pull request for peer review. In addition, code scanning and dependency reviews can be enforced to protect the security and compliance of your code.

> [!NOTE]
> GitHub Copilot Autofix is included in the license for GitHub Code Security. Copilot code review requires a paid Copilot plan.

### Code scanning analysis

When code scanning is enabled, you can then block merges into important branches unless the pull request meets your requirements by creating a code ruleset for the enterprise or organization. Typically, you would require that results from code scanning are present and that any important alerts are resolved.

* **Type of ruleset:** Branch.
* **Require code scanning results:** Enable to block merging until results are successfully generated for the commit and the reference the pull request targets.
* **Required tools and alert thresholds:** Define the level of alerts that must be resolved before a pull request can be merged for each code scanning tool you use.

As with all rulesets, you can control exactly which organizations (enterprise-level), repositories, and branches it acts on and also define roles or teams who can bypass the rule. For more information, see [About Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

### Dependency review

When Code Security and dependency graph are enabled for a repository, manifest files have a rich diff view which shows a summary of the dependencies that it adds or updates. This is a useful summary for human reviewers of the pull request but does not provide any control of which dependencies are added to the codebase.

Most enterprises put automatic checks in place to block the use of dependencies with known vulnerabilities or unsupported license terms.

1. Create a private repository to serve as a central home where you can store reusable workflows for the enterprise.
1. Edit the actions settings for the repository to allow all private repositories in the enterprise to access workflows in this central repository, see [Allowing access to components in a private repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository).
1. In the central repository, create a reusable workflow to run the dependency review action, configuring the action to meet your business needs, see [Configure Dependency Review Action](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-dependency-review-action).
1. In each organization, create or update branch rulesets to add the new workflow to the required status checks, see [Enforce Dependency Review](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/enforce-dependency-review).

This allows you to update the configuration in a single location, but use the workflow in many repositories. You may want to use this central repository to maintain other workflows. For more information, see [Reuse Workflows](https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows).

### Copilot code review

> [!NOTE]
>
> * If you get a Copilot subscription from an organization, you will only be able to participate in the public preview on the GitHub website if an owner of your organization or enterprise has enabled Copilot code review. See [Manage Policies](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies#opting-in-to-previews-or-feedback) and [Manage Enterprise Policies](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies) in the GitHub Enterprise Cloud documentation.

By default, users request a review from Copilot in the same way as they do from human reviewers. However, you can update or create an organization-level branch ruleset to automatically add Copilot as a reviewer to all pull requests made to selected branches in all or selected repositories. See [Configure Automatic Review](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-on-github/set-up-copilot/configure-automatic-review) in the GitHub Enterprise Cloud documentation.

Copilot leaves a review comment on each pull request it reviews, without approving the pull request or requesting changes. This ensures that its review is advisory and will not block development work. Similarly, you should not enforce the resolution of suggestions made by Copilot because AI suggestions have known limitations, see [Agents](https://docs.github.com/en/enterprise-cloud@latest/copilot/responsible-use/agents#7-limitations) in the GitHub Enterprise Cloud documentation.

## Define where Copilot Autofix is allowed and enabled

Copilot Autofix helps developers understand and fix code scanning alerts found in their pull requests. We recommend that you enable this feature for all repositories with Code Security enabled to help developers resolve alerts efficiently and increase their understanding of secure coding.

There are two levels of control:

* Enterprises can allow or block use of Copilot Autofix throughout the enterprise using an "Advanced Security" policy, see: [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).
* Organizations can enable or disable Copilot Autofix for all organization-owned repositories in the "Global settings" for the organization, see [Configure Global Settings](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/configure-global-settings).

## Engage developers in security remediation

Security campaigns provide a way for security teams to engage with developers to remediate security technical debt. They also provide a practical way to combine education in secure coding with examples of vulnerable code in code that your developers are familiar with. For more information, see [About Security Campaigns](https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/security-at-scale/about-security-campaigns) and [Best Practice Fix Alerts At Scale](https://docs.github.com/en/enterprise-cloud@latest/code-security/tutorials/secure-your-organization/best-practice-fix-alerts-at-scale) in the GitHub Enterprise Cloud documentation.

## Provide a secure development environment

The development environment has many components. Some of the most useful features for scaling and standardizing a secure development environment in GitHub are:

* **Security configurations:** define the setup of security features for the enterprise, an organization, a subset of organization repositories, or new repositories, see [Refine your security configurations](#refine-your-security-configurations).
* **Policies:** protect and control use of resources for the enterprise or an organization, see [Enforcing Policies For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise).
* **Rulesets:** protect and control branches, tags, and pushes for an organization, a subset of organization repositories, or a repository, see [Creating Rulesets For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization).
* **Repository templates:** define the security workflows and processes needed for each type of environment, see [Creating A Template Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository). For example, each template might contain a specialized:
   * Security policy file defining the company's security stance and how to report any security concerns.
   * Workflow to enable Dependabot version updates for package managers used by the company.
   * Workflow defining advanced setup for code scanning for supported development languages where the default setup results are not enough.

In addition, when a developer creates a repository from a template they must define the value of any required custom properties. Custom properties are very useful for selecting a subset of repositories that you want to apply configurations, policies, or rulesets to, see [Managing Custom Properties For Repositories In Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/managing-custom-properties-for-repositories-in-your-enterprise) in the GitHub Enterprise Cloud documentation.

## Next steps

When you have finished exploring these options and secret scanning features, you are ready to test your discoveries so far against your business needs, and then explore further.

## Further reading

* [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use)
* [Enforcing Policies For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise)
* [Governing How People Use Repositories In Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/governing-how-people-use-repositories-in-your-enterprise) in the GitHub Enterprise Cloud documentation
* [Enforce GitHub Advanced Security at Scale](https://wellarchitected.github.com/library/application-security/recommendations/enforce-ghas-at-scale/)
