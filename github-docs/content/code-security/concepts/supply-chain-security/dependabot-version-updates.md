# Dependabot version updates

> [!NOTE]
> Your site administrator must set up Dependabot updates for your GitHub Enterprise Server instance before you can use this feature. For more information, see [Enabling Dependabot For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise).
>
> You may not be able to enable or disable Dependabot updates if an enterprise owner has set a policy at the enterprise level. For more information, see [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).





## About Dependabot version updates

Dependabot takes the effort out of maintaining your dependencies. You can use it to ensure that your repository automatically keeps up with the latest releases of the packages and applications it depends on.

When Dependabot raises pull requests, these pull requests could be for _security_ or _version_ updates:

* _Dependabot security updates_ are automated pull requests that help you update dependencies with known vulnerabilities.
* _Dependabot version updates_ are automated pull requests that keep your dependencies updated, even when they don’t have any vulnerabilities. To check the status of version updates, navigate to the **Insights** tab of your repository, then select **Dependency Graph**, and Dependabot.


You enable Dependabot version updates by checking a `dependabot.yml` configuration file into your repository.


Dependabot and all related features are covered by [GitHub's Terms of Service](/free-pro-team@latest/site-policy/github-terms/github-terms-of-service).
{% elsif ghec %}
Dependabot and all related features are covered by your license agreement. For more information, see [GitHub Enterprise Customer Terms](https://github.com/customer-terms).



## Updates for packages

The `dependabot.yml` configuration file specifies the location of the manifest, or of other package definition files, stored in your repository. Dependabot uses this information to check for outdated packages and applications. Dependabot determines if there is a new version of a dependency by looking at the semantic versioning ([semver](https://semver.org/)) of the dependency to decide whether it should update to that version. For information on the supported repositories and ecosystems, see [Supported Ecosystems And Repositories](https://docs.github.com/en/code-security/reference/supply-chain-security/supported-ecosystems-and-repositories).


The `dependabot.yml` file can also be configured to tell Dependabot how to maintain your dependencies. For more information, see [About The Dependabot Yml File](https://docs.github.com/en/code-security/concepts/supply-chain-security/about-the-dependabot-yml-file).

For certain package managers, Dependabot version updates also supports vendoring. Vendored (or cached) dependencies are dependencies that are checked in to a specific directory in a repository rather than referenced in a manifest. Vendored dependencies are available at build time even if package servers are unavailable. Dependabot version updates can be configured to check vendored dependencies for new versions and update them if necessary.

When Dependabot identifies an outdated dependency, it raises a pull request to update the manifest to the latest version of the dependency. For vendored dependencies, Dependabot raises a pull request to replace the outdated dependency with the new version directly. You check that your tests pass, review the changelog and release notes included in the pull request summary, and then merge it. For more information, see [Configure Version Updates](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-version-updates).



By default, Dependabot applies a cooldown period of 3 days to version updates, so a new version is not considered for a version update until 3 days after its release. **This default cooldown does not apply to security updates.**
 This gives new releases time to stabilize before you receive a pull request. You can customize the cooldown periods, and the dependencies they apply to, with the `cooldown` option. For more information, see [Dependabot Options Reference](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference#cooldown-).



If you enable _security updates_, Dependabot also raises pull requests to update vulnerable dependencies. For more information, see [Dependabot Security Updates](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-security-updates).

## Updates for actions

Actions are often updated with bug fixes and new features to make automated processes more reliable, faster, and safer. When you enable Dependabot version updates for GitHub Actions, Dependabot will help ensure that references to actions in a repository's _workflow.yml_ file and reusable workflows used inside workflows are kept up to date.

For each action in the file, Dependabot checks the action's reference (typically a version number or commit identifier associated with the action) against the latest version. If a more recent version of the action is available, Dependabot will send you a pull request that updates the reference in the workflow file to the latest version.

Dependabot also checks workflow files for uses of reusable workflows, and updates the Git reference for these called reusable workflows.

To enable this feature, see [Auto Update Actions](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/auto-update-actions).

## About automatic deactivation of Dependabot updates

When maintainers of a repository stop interacting with Dependabot pull requests, Dependabot temporarily pauses its updates and lets you know, see [Dependabot Updates Stopped](https://docs.github.com/en/code-security/reference/supply-chain-security/troubleshoot-dependabot/dependabot-updates-stopped).


## About notifications for Dependabot version updates

You can filter your notifications on GitHub to show notifications for pull requests created by Dependabot. For more information, see [Managing Notifications From Your Inbox](https://docs.github.com/en/subscriptions-and-notifications/how-tos/viewing-and-triaging-notifications/managing-notifications-from-your-inbox).
