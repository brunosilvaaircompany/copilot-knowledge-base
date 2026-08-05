# Managing security and analysis settings for your organization

## About management of security and analysis settings

GitHub can help you to secure the repositories in your organization. You can manage the security and analysis features for all existing or new repositories that members create in your organization. If you have a license for GitHub Secret Protection or GitHub Code Security then you can also manage access to these features. For more information, see [About GitHub Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security).




You can't disable some security and analysis features that are enabled by default for public repositories.



You can quickly enable security features at scale with a security configuration, a collection of security enablement settings you can apply to repositories in an organization. You can customize Advanced Security features at the organization level with global settings. See [Organization Security](https://docs.github.com/en/code-security/concepts/security-at-scale/organization-security).



If you enable security and analysis features, GitHub performs read-only analysis on your repository.



## Allowing Dependabot to access private or internal dependencies

Dependabot can check for outdated dependency references in a project and automatically generate a pull request to update them. To do this, Dependabot must have access to all of the targeted dependency files. Typically, version updates will fail if one or more dependencies are inaccessible. For more information, see [Dependabot Version Updates](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-version-updates).

By default, Dependabot can't update dependencies that are located in private or internal repositories, or private or internal package registries. However, if a dependency is in a private or internal GitHub repository within the same organization as the project that uses that dependency, you can allow Dependabot to update the version successfully by giving it access to the host repository.

If your code depends on packages in a private or internal registry, you can allow Dependabot to update the versions of these dependencies by configuring this at the repository level. You do this by adding authentication details to the `dependabot.yml` file for the repository. For more information, see [Top-level `registries` key](/code-security/reference/supply-chain-security/dependabot-options-reference#top-level-registries-key).



> [!NOTE]
> For the option to grant Dependabot access to private or internal repositories to be available, you need Dependabot version updates or Dependabot security updates to be enabled on at least one repository within the organization.



 For more information on how to grant Dependabot access to private or internal dependencies, see [Configure Global Settings](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/configure-global-settings#granting-dependabot-access-to-private-and-internal-repositories).

## Removing access to GitHub Advanced Security features from individual repositories in an organization

You can use security configurations to remove access to GitHub Advanced Security features from individual repositories in an organization. For more information, see [Managing Your GitHub Advanced Security License Usage](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/manage-usage-and-access/managing-your-github-advanced-security-license-usage#turning-off-secret-protection-or-code-security).

## Further reading

* [Quickstart For Securing Your Repository](https://docs.github.com/en/code-security/getting-started/quickstart-for-securing-your-repository)
* [Secret Scanning](https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning)
* [Dependency Graph](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph)
* [Supply Chain Security](https://docs.github.com/en/code-security/concepts/supply-chain-security/supply-chain-security)
