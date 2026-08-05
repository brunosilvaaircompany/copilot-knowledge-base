# Configuring automatic dependency submission for your repository

## Prerequisites

Dependency graph must be enabled for the repository for you to enable automatic dependency submission.

You must also enable GitHub Actions for the repository in order to use automatic dependency submission. For more information, see [Managing GitHub Actions Settings For A Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository).

> [!NOTE]
> For ecosystems that support Dependabot graph jobs, you do not need to enable automatic dependency submission. Dependabot graph jobs run automatically when the dependency graph is enabled for your repository, and they take precedence over automatic dependency submission. See [Dependency Graph Data](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph-data#dependabot-graph-jobs).

## Enabling automatic dependency submission

Repository administrators can enable or disable automatic dependency submission for a repository by following the steps outlined in this procedure.

Organization owners can enable automatic dependency submission for multiple repositories using a security configuration. For more information, see [Create Custom Configuration](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration).

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Under "Dependency graph", click the dropdown menu next to “Automatic dependency submission”, then select **Enabled**.

Once you've enabled automatic dependency submission for a repository, GitHub will:
* Watch for pushes to the repository.
* Run the dependency graph build action associated with the package ecosystem for any manifests in the repository.
* Perform an automatic dependency submission with the results.

You can view details about the automatic workflows run by viewing the **Actions** tab of your repository.

> [!NOTE] After you enable automatic dependency submission, we'll automatically trigger a run of the action. Once enabled, it'll run each time a commit to the default branch updates a manifest.

## Accessing private registries

### Using Dependabot secrets

For ecosystems that support Dependabot graph jobs, you can configure access to private registries using Dependabot secrets at the organization or repository level.

When Dependabot graph jobs encounter private packages that are not accessible through configured secrets, those packages are gracefully omitted from the dependency graph without causing a failure.

For more information on configuring private registry access, see [Configure Access To Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries).

### Using self-hosted runners

You can configure **self-hosted runners** to run automatic dependency submission jobs, instead of using the GitHub Actions infrastructure. This is necessary to access private registries for ecosystems that do not support Dependabot graph jobs, or when your registries are only reachable from within your network. The self-hosted runners must be running on Linux or macOS. For .NET and Python auto-submission, they must have access to the public internet in order to download the latest component-detection release.

1. Provision one or more self-hosted runners, at the repository or organization level. For more information, see [Self Hosted Runners](https://docs.github.com/en/actions/concepts/runners/self-hosted-runners) and [Add Runners](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/add-runners).
1. Assign a `dependency-submission` label to each runner you want automatic dependency submission to use. For more information, see [Apply Labels](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/apply-labels#assigning-a-label-to-a-self-hosted-runner).
1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Under "Dependency graph", click the dropdown menu next to "Automatic dependency submission", then select **Enabled for labeled runners**.

Once enabled, automatic dependency submission jobs will run on the self-hosted runners, unless:
* The self-hosted runners are unavailable.
* There aren't any runner groups tagged with a `dependency-submission` label.

>[!NOTE] For Maven or Gradle projects that use self-hosted runners with private Maven registries, you need to modify the Maven server settings file to allow the dependency submission workflows to connect to the registries. For more information about the Maven server settings file, see [Security and Deployment Settings](https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html#transitive-dependencies) in the Maven documentation.

On a restricted network, automatic dependency submission has several outbound needs. Depending on the ecosystem, a job might download the language toolchain it runs on, the tooling it uses to detect and submit dependencies (such as the Gradle dependency-submission plugin), and your project's own dependencies from your registries.

Configuring access to your dependency registry covers only the last of these. Make sure the other paths are reachable too, or mirrored internally where the ecosystem supports it.

For network allowlist URLs, the option to resolve the Gradle submission plugin from an internal repository, larger runner configuration, troubleshooting details, and package ecosystem-specific information, see [Automatic Dependency Submission](https://docs.github.com/en/code-security/reference/supply-chain-security/automatic-dependency-submission).

## Further reading

* [Supply Chain Security](https://docs.github.com/en/code-security/concepts/supply-chain-security/supply-chain-security)
* [Use Dependency Submission API](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/use-dependency-submission-api)
