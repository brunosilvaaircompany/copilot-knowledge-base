# Enabling security features at scale

## About securing your organization

GitHub has many features that help you improve and maintain the quality of your code. Some features are included in all GitHub plans. Additional features are available to organizations on GitHub Team and GitHub Enterprise Cloud that purchase a GitHub Advanced Security product:

{% data reusables.advanced-security.ghas-products-bullets+ghas %}

You can easily enable and manage GitHub's security features throughout your organization with security configurations, which control repository-level security features, and global settings, which control security features at the organization level. We recommend applying security configurations _and_ customizing your global settings to create a system that best meets the security needs of your organization.

For more information on purchasing GitHub Secret Protection or GitHub Code Security, see [About GitHub Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security) and [Buy Advanced Security](https://docs.github.com/en/enterprise-cloud@latest/billing/how-tos/products/buy-advanced-security) in the GitHub Enterprise Cloud documentation.

## About security configurations

Security configurations are collections of enablement settings for GitHub's security features that you can apply to any repository within an organization or enterprise.



When you create a security configuration, you can choose different enablement settings to meet the specific security needs of a group of repositories.


To learn how to create custom security configurations, see [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration).


### After you apply a configuration

When you apply a security configuration to repositories, each repository enters a managed relationship with that configuration. That relationship can change over time. For example, if a repository admin overrides a security setting on an unenforced configuration, if an organization or enterprise admin detaches the configuration, if enforcement is enabled, or if the initial attachment fails. Each change is reflected in the repository's configuration status.

For the full list of configuration statuses and recommended actions, see [Configuration Statuses](https://docs.github.com/en/code-security/reference/security-at-scale/configuration-statuses).

## About global settings

While security configurations determine repository-level security settings, global settings determine your organization-level security settings, which are then inherited by all repositories. With global settings, you can customize how security features analyze your organization.



## About enabling secure access to private registries

If your organization uses private registries, providing code scanning and Dependabot secure access to these registries will improve code analysis and allow Dependabot to update a wider range of dependencies. For information, see [Giving Org Access Private Registries](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/manage-usage-and-access/giving-org-access-private-registries).





## About integrating production context

If your organization uses Microsoft Defender for Cloud, JFrog Artifactory, or CI/CD to promote artifacts to production, you can integrate this data into GitHub. This production context helps you prioritize code scanning and Dependabot alerts. For more information, see [Prioritize Alerts In Production Code](https://docs.github.com/en/code-security/tutorials/secure-your-organization/prioritize-alerts-in-production-code).



## Next steps

To get started with creating a security configuration for your organization, see [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration).
