# Editing your configuration of default setup

After running an initial analysis of your code with default setup, you can make changes to your configuration to better meet your needs. You can customize your configuration in the user interface, or using repository properties to add custom queries{% ifversion codeql-config-property %} or apply a custom configuration file{% endif %}. See [Setup Types](https://docs.github.com/en/code-security/concepts/code-scanning/setup-types) and [Repository Properties](https://docs.github.com/en/code-security/concepts/code-scanning/repository-properties).

## Customizing your existing configuration of default setup

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. In the "CodeQL analysis" row of the "Code Security" section, select {% octicon "kebab-horizontal" aria-label="Menu" %}, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} View CodeQL configuration**.
1. In the "CodeQL default configuration" window, click **{% octicon "pencil" aria-hidden="true" aria-label="pencil" %} Edit**.
1. Optionally, in the "Languages" section, select or deselect languages for analysis.
1. Optionally, in the "Query suite" row of the "Scan settings" section, select a different query suite to run against your code.

1. Optionally, to use labeled runners, in the "Runner type" section of the "CodeQL default configuration" modal dialog, select **Standard GitHub runner** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} to open a dropdown menu, then select **Labeled runner**. Then, next to "Runner label," enter the label of an existing self-hosted or GitHub-hosted runner. For more information, see [Configure Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning#assigning-labels-to-self-hosted-runners).

1. (Public preview) Optionally, in the "Threat model" row of the "Scan settings" section, select **Remote and local sources**. This option is only available for repositories with code in a supported language: Java/Kotlin and C#.

1. To update your configuration, as well as run an initial analysis of your code with the new configuration, click **Save changes**. All future analyses will use your new configuration.

## Defining the alert severities that cause a check failure for a pull request

You can use rulesets to prevent pull requests from being merged when one of the following conditions is met:

* A required tool finds a code scanning alert of a severity that is defined in the ruleset.
* A required tool's analysis is still in progress.
* A required tool is not configured for the repository.


For more information, see [Set Merge Protection](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/set-merge-protection). For more general information about rulesets, see [About Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

## Including local sources of tainted data in default setup


> [!NOTE]
> Threat models are currently in public preview and subject to change. During the public preview, threat models are supported only by analysis for Java/Kotlin and C#.


If your codebase only considers remote network requests to be potential sources of tainted data, then we recommend using the default threat model. If your codebase considers sources other than network requests to potentially contain tainted data, then you can use threat models to add these additional sources to your CodeQL analysis. During the public preview, you can add local sources (for example: command-line arguments, environment variables, file systems, and databases) that your codebase may consider to be additional sources of tainted data.

You can edit the threat model used in a default setup configuration. For more information, see [Customizing your existing configuration of default setup](#customizing-your-existing-configuration-of-default-setup).

## Extending CodeQL coverage with CodeQL model packs in default setup


> [!NOTE]
> CodeQL model packs are currently in public preview and subject to change. Model packs are supported for C/C++, C#, Java/Kotlin, Python, Ruby, and Rust analysis.
>
> The CodeQL model editor in the CodeQL extension for Visual Studio Code supports modeling dependencies for C#, Java/Kotlin, Python, and Ruby.


If your enterprise is hosted on GitHub.com and you use frameworks and libraries that are not recognized by the standard libraries included with CodeQL, you can model your dependencies and extend code scanning analysis. For more information, see [Supported languages and frameworks](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/) in the documentation for CodeQL.

For default setup, you need to define the models of your additional dependencies in CodeQL model packs. You can extend coverage in default setup with CodeQL model packs for individual repositories, or at scale for all repositories in an organization.

For more information about CodeQL model packs and writing your own, see [Use The Model Editor](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-vs-code/use-the-model-editor).

### Extending coverage for a repository

1. In the `.github/codeql/extensions` directory of the repository, copy the model pack directory which should include a `codeql-pack.yml` file and any `.yml` files containing additional models for the libraries or frameworks you wish to include in your analysis.
1. The model packs will be automatically detected and used in your code scanning analysis.
1. If you later change your configuration to use advanced setup, any model packs in the `.github/codeql/extensions` directory will still be recognized and used.

### Extending coverage for all repositories in an organization

>[!NOTE]
> If you extend coverage with CodeQL model packs for all repositories in an organization, the model packs that you specify must be published to the container registry associated with the GitHub Enterprise Server instance (`https://containers.HOSTNAME`) and be accessible to the repositories that run code scanning. For more information, see [Working With The Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security** then **Global settings**.


1. Find the "Code scanning" section.
1. Next to "Expand CodeQL analysis," click **Configure**.
1. Enter references to the published model packs you want to use, one per line, then click **Save**.

    ![Screenshot of the "Expand CodeQL analysis" view" in the settings for an organization.](/assets/images/help/security/enable-codeql-org-model-packs.png)

1. The model packs will be automatically detected and used when code scanning runs on any repository in the organization with default setup enabled.



## Customizing default setup with a configuration file

You can further customize default setup by applying a CodeQL configuration file, using the `github-codeql-config-file` repository property. The configuration in the file is merged with the configuration default setup generates automatically, so you can, for example, add extra queries or exclude paths without needing to switch to advanced setup. For more information about what you can configure in a CodeQL configuration file, and how it's merged with default setup, see [Repository Properties](https://docs.github.com/en/code-security/concepts/code-scanning/repository-properties#custom-configuration-files).

### Applying a configuration file to all repositories in an organization

The recommended way to customize default setup at scale is to set an organization-wide default value for the `github-codeql-config-file` repository property, so that you don't need to update individual repositories as you add more of them to your organization.

1. Create a CodeQL configuration file in a central repository. You can either create a new repository for this purpose or add the file to an existing one. Your organization-wide configuration can then be maintained in one place. For information about the format of the configuration files, see [Workflow Configuration Options](https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options#custom-configuration-files).

   If the configuration file is stored in a private repository other than the one being analyzed, you also need to set up a _Git Source_ private registry configuration so that default setup can access it from other repositories. See [Giving Org Access Private Registries](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/manage-usage-and-access/giving-org-access-private-registries).


1. Create a `github-codeql-config-file` repository property for your organization and set its default value to the path of the configuration file. For example, if you have committed your configuration file as `codeql.yml` to the `main` branch of `octo-org/config`, you would set the value of the repository property to `remote=octo-org/config@main:codeql.yml`.

   We recommend testing the configuration file on a single repository before setting the organization-wide default. See [Repository Properties](https://docs.github.com/en/code-security/concepts/code-scanning/repository-properties#testing-changes-before-applying-them).

1. The configuration file will be automatically detected and merged with the configuration default setup generates the next time code scanning runs on each repository in the organization. Repositories that already have an explicit value set for the `github-codeql-config-file` property continue to use that value instead of the organization-wide default. For more information about how default and explicit repository property values interact, see [Managing Custom Properties For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization#adding-custom-properties).

### Applying a configuration file to a repository

If you only need to customize default setup for a single repository, or to test a configuration before rolling it out to your organization, you can set the property directly on that repository instead.

1. Create a CodeQL configuration file. This can be a file within the repository being analyzed, or a file in a separate repository. For information about the format of the configuration files, see [Workflow Configuration Options](https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options#custom-configuration-files).

   If the configuration file is stored in a private repository other than the one being analyzed, you also need to set up a _Git Source_ private registry configuration so that default setup can access it from other repositories. See [Giving Org Access Private Registries](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/manage-usage-and-access/giving-org-access-private-registries).


1. Set the `github-codeql-config-file` repository property for the repository to the local or remote path of the configuration file. See [Repository Properties](https://docs.github.com/en/code-security/concepts/code-scanning/repository-properties#custom-configuration-files) for more information about acceptable values for this property, and [Managing Custom Properties For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization#setting-values-for-repositories-in-your-organization) for how to set a repository property value.
1. The configuration file will be automatically detected and merged with the configuration default setup generates the next time code scanning runs on the repository.





## Continuing scans on inactive repositories

By default, code scanning default setup pauses weekly scheduled scans on repositories that have had no commits pushed or pull requests opened for 180 days.
 You can override this behavior in an organization, though the scan period is not configurable.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security** then **Global settings**.

1. In the "Code scanning" section, enable the **Keep scheduled scans running every 30 days for inactive repositories** setting.



## Further customization

If you need to change any other aspects of your code scanning configuration, consider configuring advanced setup. See [Configuring Advanced Setup For Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configuring-advanced-setup-for-code-scanning).
