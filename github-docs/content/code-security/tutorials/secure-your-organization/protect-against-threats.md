# Protecting against security threats

## Introduction

Preventing security incidents is less costly and less disruptive than responding
to them. By proactively hardening your environment on GitHub, you reduce your exposure to threats such as exploited credentials, unauthorized access, and supply chain attacks.

This guide primarily focuses on the protective measures you can apply across organizations that are part of an enterprise on GitHub Enterprise Cloud. To trial GitHub Enterprise Cloud, see [Setting Up A Trial Of GitHub Enterprise Cloud](https://docs.github.com/en/enterprise-cloud@latest/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).

Many of GitHub's security features mentioned here, such as security configurations, branch rulesets and access controls, can be configured at both the organization level or enterprise level.

## Immediate actions

These are high-impact actions you can take right now to establish a security baseline across an organization.

* [Establish security coverage](#establish-security-coverage)
* [Tighten controls](#tighten-controls)
* [Review and restrict access](#review-and-restrict-access)
* [Run a secret risk assessment](#run-a-secret-risk-assessment)

### Establish security coverage

Ensure that GitHub's GitHub Advanced Security tools are active across all repositories. Rather than enabling tools one by one, you can create and apply a **security configuration**, which is a collection of security settings that can be applied to repositories across your organization or enterprise in a single action.

A strong configuration might include:

* **Secret scanning** and **push protection** to detect secrets that have already been committed to your codebase, and prevent new secrets from being pushed. Leaked credentials are one of the most common causes of security breaches.
* **Code scanning** to identify vulnerabilities and coding errors in your source code before they reach production.
* **Dependabot alerts** and **Dependabot security updates** to notify you of known vulnerabilities and malware in your dependencies and automatically open pull requests to update vulnerable dependencies.

See [Create Custom Configuration](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration) (organizations) and [Create Custom Configuration](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/create-custom-configuration) (enterprises).

### Tighten controls

GitHub gives you a range of controls that govern what can happen in your repositories and organization. Ensuring these controls are configured appropriately is essential for reducing risk.

#### Protect critical branches with rulesets

Rulesets let you define protection rules for branches and tags across one or more repositories. Use them to enforce requirements such as pull request reviews and status checks (such as automated security scans). This can help prevent unauthorized changes from reaching production code, including changes from compromised accounts.

See [Creating Rulesets For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization) (organizations) and [Enforcing Policies For Code Governance](https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-governance) (enterprises).

#### Control who can bypass push protection

When you enable push protection, contributors who attempt to push a detected secret are blocked but, by default, they have the option to bypass the block. **Delegated bypass** requires that bypass requests pass through a review and approval cycle, so no bypass can happen without an explicit, audited decision.

See [Enable Delegated Bypass](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-secrets/manage-bypass-requests/enable-delegated-bypass).

#### Enforce dependency review on pull requests

The dependency review action lets you catch vulnerable dependencies before they're merged, by surfacing known vulnerabilities in a pull request's dependency changes. Like push protection for secrets, it acts as a gate rather than an after-the-fact alert. You can enforce dependency review on pull requests across your organization.

See [Dependency Review](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review#about-the-dependency-review-action) and [Enforce Dependency Review](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/enforce-dependency-review).

### Review and restrict access

Access that was appropriate when it was granted may no longer be necessary. Regularly reviewing who and what has access to an organization reduces the risk of unauthorized actions.

#### Audit member access and follow the principle of least privilege

Ensure that members of organizations have only the access they need. Remove members who no longer require access, downgrade roles where broader permissions aren't justified, and review outside collaborator access. Overly permissive access increases the blast radius of any compromised account.

If the default roles are more permissive than an organization requires, you can create **custom roles** that grant only the specific permissions each team needs. This is especially valuable for organizations adopting a zero trust security model.

See [Identify Role Requirements](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/identify-role-requirements).

#### Review authorized applications

OAuth apps and GitHub Apps that are installed in an organization can access data. Review the list of authorized applications and remove any that are no longer needed or no longer trusted. Stale integrations represent an often-overlooked attack surface.

See [Reviewing And Modifying Installed GitHub Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps) and [About OAUTH App Access Restrictions](https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-oauth-access-to-your-organizations-data/about-oauth-app-access-restrictions).

#### Restrict network access with IP allow lists

For organizations on GitHub Enterprise Cloud, if your organization operates from known network ranges, configure an IP allow list to restrict access to GitHub resources from those ranges only. This adds a layer of defense against compromised credentials being used from unexpected locations.

See [Managing Allowed Ip Addresses For Your Organization](https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization) and [Restricting Network Traffic To Your Enterprise With An Ip Allow List](https://docs.github.com/en/enterprise-cloud@latest/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list).



### Run a secret risk assessment

Run a free, on-demand scan for an organization's repositories that gives you a point-in-time view of the total number of currently exposed secrets across your organization.

See [Assess Your Secret Risk](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk).



## Near-term actions

These actions are also important for your security posture, but may require more preparation and coordination before you can roll them out.

* [Strengthen authentication](#strengthen-authentication)
* [Harden your GitHub Actions workflows](#harden-your-github-actions-workflows)
* [Prepare for a security incident](/code-security/tutorials/secure-your-organization/prepare-for-a-security-incident)

### Strengthen authentication

Weak or compromised authentication is one of the most common causes of account takeover. Requiring strong authentication across your organization significantly reduces this risk.

Require two-factor authentication (2FA) for all members, which ensures that a compromised password alone is not enough to access an account. Before enforcing the requirement, communicate with your organization so members have time to set up 2FA.

Organizations on GitHub Enterprise Cloud can go further by enforcing single sign-on (SSO), which centralizes authentication through your identity provider.

See [Requiring Two Factor Authentication In Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) and [About Identity And Access Management With Saml Single Sign On](https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on).

### Harden your GitHub Actions workflows

GitHub Actions workflows often have access to secrets, deployment credentials, and write permissions to your repository. Without careful configuration, a compromised or malicious action can exfiltrate data or inject malicious code.

#### Explicitly declare workflow permissions

By default, workflows may receive broad permissions through the `GITHUB_TOKEN`. Explicitly declare the minimum permissions each workflow needs using the `permissions` key in your workflow files. This limits the damage that a compromised workflow step can cause.

#### Pin third-party actions to commit SHAs

When you reference a third-party action by tag (for example, `v1`), the tag can be moved to point to different code. Pinning actions to a full commit SHA ensures you always run the exact code you reviewed and approved. This protects against supply chain attacks where a tag is hijacked.

#### Restrict which actions can run

Configure policies at the organization or enterprise level to control which actions are allowed to run. You can limit actions to those created by GitHub, actions from verified creators, or a specific allowlist.

For more information on all of these practices, as well as additional secure use practices for GitHub Actions specifically, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use).

## Ongoing security practices

These practices should become part of your regular operational rhythm.

* [Monitor your security posture with security overview](#monitor-your-security-posture-with-security-overview)
* [Run regular security campaigns to reduce security debt](#run-regular-security-campaigns-to-reduce-security-debt)
* [Continue to audit access and permissions](#continue-to-audit-access-and-permissions)
* [Keep dependencies up to date](#keep-dependencies-up-to-date)
* [Rotate secrets and enforce expiration](#rotate-secrets-and-enforce-expiration)

### Monitor your security posture with security overview

Security overview gives you a centralized view of an organization's and enterprise's security landscape. Use it to track which repositories have security features enabled and identify repositories with open alerts, so that emerging risks don't go unnoticed.

See [Security Overview](https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/security-at-scale/security-overview).

### Run regular security campaigns to reduce security debt

Over time, security alerts can accumulate. Security campaigns let you organize and prioritize remediation efforts, assign groups of alerts to developers (with the help of Copilot-generated fixes), or assign alerts directly to Copilot.

Security campaigns are available to organizations on GitHub Team or GitHub Enterprise Cloud with GitHub Secret Protection or GitHub Code Security enabled. See [Creating Managing Security Campaigns](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/creating-managing-security-campaigns).

### Continue to audit access and permissions

As people join and leave an organization, and as projects evolve, access requirements change. Schedule periodic reviews of:

* Organization membership and roles.
* Outside collaborator access.
* Repository-level permissions and team assignments.
* Authorized OAuth and GitHub Apps.

This ensures that access remains aligned with the principle of least privilege, even as your organization changes.

### Keep dependencies up to date

Vulnerable dependencies are a common entry point for attackers. Dependabot can automatically open pull requests to update dependencies with known vulnerabilities, but those pull requests still need to be reviewed and merged promptly.

Establish a process for triaging and merging Dependabot pull requests so that security updates don't stall.

See [Dependabot Auto Triage Rules](https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/supply-chain-security/dependabot-auto-triage-rules) and [Manage Dependabot Prs](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/manage-dependabot-prs).

### Rotate secrets and enforce expiration

The longer a credential exists, the more opportunity there is for it to be exposed or stolen. Where possible:

* Set expiration dates on personal access tokens.
* Rotate secrets on a regular schedule.

For information on managing tokens, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) and [Token Expiration And Revocation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation).

## Next steps

* Even with strong preventive controls in place, security incidents can still occur. There are several critical tools and response processes that you should ensure are set up in advance. See [Prepare For A Security Incident](https://docs.github.com/en/code-security/tutorials/secure-your-organization/prepare-for-a-security-incident).
