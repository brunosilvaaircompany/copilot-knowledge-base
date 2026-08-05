# Configuring default setup for code scanning at scale

With default setup for code scanning, you can quickly secure code in repositories across your organization. For more information, see [Setup Types](https://docs.github.com/en/code-security/concepts/code-scanning/setup-types).

For repositories that are not suitable for default setup, you can configure advanced setup at the repository level, or at the organization level using a script.

## Prerequisites

A repository must meet all the following criteria to be eligible for default setup:

* Advanced setup for code scanning is not already enabled.
* GitHub Actions is enabled.
* It is publicly visible, or GitHub Code Security is enabled.{%- elsif ghes %}
* GitHub Code Security is enabled.


## Configuring default setup for all eligible repositories in an organization

You can enable default setup for all eligible repositories in your organization. For more information, see [Organization Security](https://docs.github.com/en/code-security/concepts/security-at-scale/organization-security).

### Configuring default setup features

Through your organization's security settings page, you can customize default setup for all eligible repositories, such as extending coverage using model packs. See [Edit Default Setup](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/edit-default-setup).



You can also apply a custom CodeQL configuration file across your organization by requiring the `github-codeql-config-file` repository property for your organization and setting its default value. This lets you customize analysis at scale without maintaining workflow files. See [Edit Default Setup](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/edit-default-setup#applying-a-configuration-file-to-all-repositories-in-an-organization) for step-by-step instructions.



## Configuring default setup for a subset of repositories in an organization

You can filter for specific repositories you would like to configure default setup for. For more information, see [Apply Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/apply-custom-configuration).



## Providing default setup access to private registries

When a repository uses code stored in a private registry, default setup needs access to the registry to work effectively. For more information, see [Giving Org Access Private Registries](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/manage-usage-and-access/giving-org-access-private-registries).





## Configuring merge protection for all repositories in an organization

You can use rulesets to prevent pull requests from being merged when one of the following conditions is met:

* A required tool finds a code scanning alert of a severity that is defined in the ruleset.
* A required tool's analysis is still in progress.
* A required tool is not configured for the repository.


For more information, see [Set Merge Protection](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/set-merge-protection#creating-a-merge-protection-ruleset-for-all-repositories-in-an-organization). For more general information about rulesets, see [About Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).
