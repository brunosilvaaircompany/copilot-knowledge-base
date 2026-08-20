# Configuring Dependabot version updates




> [!NOTE]
> Your site administrator must set up Dependabot updates for your GitHub Enterprise Server instance before you can use this feature. For more information, see [Enabling Dependabot For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise).
>
> You may not be able to enable or disable Dependabot updates if an enterprise owner has set a policy at the enterprise level. For more information, see [Enforcing Policies For Code Security And Analysis For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).





## Enabling Dependabot version updates

You enable Dependabot version updates by committing a `dependabot.yml` configuration file to your repository.
If you enable the feature in your settings page, GitHub creates a basic file which you can edit, otherwise you can create the file using any file editor.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Under "Dependabot," to the right of "Dependabot version updates", click **Enable** to open a basic `dependabot.yml` configuration file in the `.github` directory of your repository. For information about the options you can use to customize how Dependabot maintains your repositories, see [Dependabot Options Reference](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference).



   ```yaml copy
   # To get started with Dependabot version updates, you'll need to specify which
   # package ecosystems to update and where the package manifests are located.

   version: 2
   updates:
   - package-ecosystem: "" # See documentation for possible values
     directory: "/" # Location of package manifests
     schedule:
       interval: "weekly"
   ```

1. Add a `version`. This key is mandatory. The file must start with `version: 2`.
1. Optionally, if you have dependencies in a private registry, add a `registries` section containing authentication details. For more information, see [Configure Access To Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries).
1. Add an `updates` section, with an entry for each package manager you want Dependabot to monitor. This key is mandatory. You use it to configure how Dependabot updates the versions or your project's dependencies. Each entry configures the update settings for a particular package manager. For more information, see [About The Dependabot Yml File](https://docs.github.com/en/code-security/concepts/supply-chain-security/about-the-dependabot-yml-file) and [Dependabot Options Reference](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference).
1. For each package manager, use:

    * `package-ecosystem` to specify the package manager. For more information about the supported package managers, see [`package-ecosystem`](/code-security/reference/supply-chain-security/dependabot-options-reference#package-ecosystem-).
    * `directories` or `directory` to specify the location of multiple manifest or other definition files. For more information, see [Defining multiple locations for manifest files](/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/controlling-dependencies-updated#defining-multiple-locations-for-manifest-files).
    * `schedule.interval` to specify how often to check for new versions.

1. Check the `dependabot.yml` configuration file in to the `.github` directory of the repository.


### Example `dependabot.yml` file

The example `dependabot.yml` file below configures version updates for three package managers: npm, Docker, and GitHub Actions. When this file is checked in, Dependabot checks the manifest files on the default branch for outdated dependencies. If it finds outdated dependencies, it will raise pull requests against the default branch to update the dependencies.

```yaml copy
# Basic `dependabot.yml` file with
# minimum configuration for three package managers

version: 2
updates:
  # Enable version updates for npm
  - package-ecosystem: "npm"
    # Look for `package.json` and `lock` files in the `root` directory
    directory: "/"
    # Check the npm registry for updates every day (weekdays)
    schedule:
      interval: "daily"

  # Enable version updates for Docker
  - package-ecosystem: "docker"
    # Look for a `Dockerfile` in the `root` directory
    directory: "/"
    # Check for updates once a week
    schedule:
      interval: "weekly"

  # Enable version updates for GitHub Actions
  - package-ecosystem: "github-actions"
    # Workflow files stored in the default location of `.github/workflows`
    # You don't need to specify `/.github/workflows` for `directory`. You can use `directory: "/"`.
    directory: "/"
    schedule:
      interval: "weekly"
```

In the example above, if the Docker dependencies were very outdated, you might want to start with a `daily` schedule until the dependencies are up-to-date, and then drop back to a weekly schedule.

## Enabling version updates on forks

If you want to enable version updates on forks, there's an extra step. Version updates are not automatically enabled on forks when a `dependabot.yml` configuration file is present. This ensures that fork owners don't unintentionally enable version updates when they pull changes including a `dependabot.yml` configuration file from the original repository.

On a fork, you also need to explicitly enable Dependabot.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Security and quality" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Advanced Security**.

1. Under "Dependabot," to the right of "Dependabot version updates," click **Enable** to allow Dependabot to initiate version updates.

## Receiving updates for indirect dependencies

By default, only direct dependencies that are explicitly defined in a manifest are kept up to date by Dependabot version updates. You can choose to receive updates for indirect dependencies defined in lock files. For more information, see [Controlling Dependencies Updated](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/controlling-dependencies-updated#allowing-specific-dependencies-to-be-updated).

## Enabling access to private dependencies

When running security or version updates, some ecosystems must be able to resolve all dependencies from their source to verify that updates have been successful. If your manifest or lock files contain any private dependencies, Dependabot must be able to access the location at which those dependencies are hosted. Organization owners can grant Dependabot access to private repositories containing dependencies for a project within the same organization. For more information, see [Managing Security And Analysis Settings For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-or-internal-dependencies). You can configure access to private registries in a repository's `dependabot.yml` configuration file. For more information, see [Configure Access To Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries).


Additionally, Dependabot doesn't support private GitHub dependencies for all package managers. For more information, see [Supported Ecosystems And Repositories](https://docs.github.com/en/code-security/reference/supply-chain-security/supported-ecosystems-and-repositories) and [GitHub Language Support](https://docs.github.com/en/get-started/learning-about-github/github-language-support).

## Checking the status of version updates

After you enable version updates, the **Dependabot** tab in the dependency graph for the repository is populated. This tab shows which package managers Dependabot is configured to monitor and when Dependabot last checked for new versions.

![Screenshot of the Dependency graph page. A tab, titled "Dependabot," is highlighted with an orange outline.](/assets/images/help/dependabot/dependabot-tab-view.png)

For information, see [List Configured Dependencies](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/list-configured-dependencies).

## Disabling Dependabot version updates

You can disable version updates entirely by deleting the `dependabot.yml` file from your repository. More usually, you want to disable updates temporarily for one or more dependencies, or package managers.

* Package managers: disable by setting `open-pull-requests-limit: 0` or by commenting out the relevant `package-ecosystem` in the configuration file.
* Specific dependencies: disable by adding `ignore` attributes for packages or applications that you want to exclude from updates.

When you disable dependencies, you can use wild cards to match a set of related libraries. You can also specify which versions to exclude. This is particularly useful if you need to block updates to a library, pending work to support a breaking change to its API, but want to get any security fixes to the version you use.

### Example disabling version updates for some dependencies

The example `dependabot.yml` file below includes examples of the different ways to disable updates to some dependencies, while allowing other updates to continue.

```yaml
# `dependabot.yml` file with updates
# disabled for Docker and limited for npm

version: 2
updates:
  # Configuration for Dockerfile
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
      # Disable all pull requests for Docker dependencies
    open-pull-requests-limit: 0

  # Configuration for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    ignore:
      # Ignore updates to packages that start with 'aws'
      # Wildcards match zero or more arbitrary characters
      - dependency-name: "aws*"
      # Ignore some updates to the 'express' package
      - dependency-name: "express"
        # Ignore only new versions for 4.x and 5.x
        versions: ["4.x", "5.x"]
      # For all packages, ignore all patch updates
      - dependency-name: "*"
        update-types: ["version-update:semver-patch"]
```

For more information about checking for existing ignore preferences, see [Dependabot Options Reference](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference#ignore--).
