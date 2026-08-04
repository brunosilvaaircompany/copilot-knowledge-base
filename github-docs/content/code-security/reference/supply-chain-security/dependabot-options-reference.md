# Dependabot options reference

This article provides reference information for the configuration options available in the `dependabot.yml` file. Use these options to customize how Dependabot monitors package ecosystems, schedules updates, and creates pull requests. For an overview of the `dependabot.yml` file and how it works, see [About The Dependabot Yml File](https://docs.github.com/en/code-security/concepts/supply-chain-security/about-the-dependabot-yml-file).

All options marked with a {% octicon "shield-check" aria-label="Security updates" height="16" %} icon also change how Dependabot creates pull requests for security updates, except where `target-branch` is used.

### Required keys

| Key | Location | Purpose |
|--|--|--|
| `version` | Top level| Dependabot configuration syntax to use. Always: `2`.|
| `updates` | Top level| Section where you define each `package-ecosystem` to update.|
| [`package-ecosystem`](#package-ecosystem-) | Under `updates` | Define a package manager to update. |
| [`directories` or `directory`](#directories-or-directory--) | Under each `package-ecosystem` entry | Define the location of the manifest or other definition files to update. |
| [`schedule.interval`](#schedule-) | Under each `package-ecosystem` entry | Define whether to look for version updates: `daily`, `weekly`, `monthly`, `quarterly`, `semiannually`, `yearly`, or `cron`. |

Optionally, you can also include a top-level `registries` key to define access details for private registries, see [Top-level `registries` key](#top-level-registries-key).

```yaml copy

# Basic `dependabot.yml` file with
# minimum configuration for two package managers

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
```

For a real-world example of a `dependabot.yml` file, see [Dependabot's own configuration file](https://github.com/dependabot/dependabot-core/blob/main/.github/dependabot.yml).

## `allow` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Use to define exactly which dependencies to maintain for a package ecosystem. Often used with the [`ignore`](#ignore--) option. For examples, see [Controlling Dependencies Updated](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/controlling-dependencies-updated#allowing-specific-dependencies-to-be-updated).

Dependabot default behavior:

* {% octicon "versions" aria-hidden="true" aria-label="versions" %} All dependencies explicitly defined in a manifest are kept up to date by version updates.
* {% octicon "shield-check" aria-hidden="true" aria-label="shield-check" %} All dependencies defined in lock files with vulnerable dependencies are updated by security updates.

When `allow` is specified Dependabot uses the following process:

1. Check for all explicitly **allowed** dependencies.
1. Then filter out any **ignored** dependencies or versions.

   If a dependency is matched by an `allow` and an `ignore` statement, then it is **ignored**.

| Parameters | Purpose |
|------------|---------|
| `dependency-name` | Allow updates for dependencies with matching names, optionally using `*` to match zero or more characters. |
| `dependency-type` | Allow updates for dependencies of specific types. |
|  |
| `update-types` | Allow updates to one or more semantic versioning levels. Supported values: `version-update:semver-patch`, `version-update:semver-minor`, and `version-update:semver-major`. |
|  |

### `dependency-name` (`allow`)

For most package managers, you should define a value that will match the dependency name specified in the lock or manifest file. A few systems have more complex requirements.

| Package manager | Format required | Example |
|-----------------|-----------------|---------|
| Gradle and Maven | `groupId:artifactId` | `org.kohsuke:github-api` |
| Docker for image tags |The full name of the repository | For an image tag of `<account ID>.dkr.ecr.us-west-2.amazonaws.com/base/foo/bar/ruby:3.1.0-focal-jemalloc`, use `base/foo/bar/ruby`.|

### `dependency-type` (`allow`)

| Dependency types | Supported by package managers | Allow updates |
|------------------|-------------------------------|--------|
| `direct` | All | All explicitly defined dependencies. |
| `indirect` | `bundler`, `pip`, `composer`, `cargo`, `gomod`, `uv` | Dependencies of direct dependencies (also known as sub-dependencies, or transitive dependencies).|
| `all` | All | All explicitly defined dependencies. For `bundler`, `pip`, `composer`, `cargo`, `gomod`, `uv`, also the dependencies of direct dependencies.|
| `production` | `bundler`, `composer`, `mix`, `maven`, `npm`, `pip`, `uv` (not all managers) | Only to dependencies defined by the package manager as production dependencies. |
| `development`| `bundler`, `composer`, `mix`, `maven`, `npm`, `pip`, `uv` (not all managers) | Only to dependencies defined by the package manager as development dependencies. |



### `update-types` (`allow`)

`update-types` only affects _version_ updates, not _security updates_.

Specify which semantic versions (SemVer) to allow.

SemVer is an accepted standard for defining versions of software packages, in the form `x.y.z`. Dependabot assumes that versions in this form are always `major.minor.patch`. The `update-types` value is a list of one or more strings.

* Use `version-update:semver-patch` to allow patch releases.
* Use `version-update:semver-minor` to allow minor releases.
* Use `version-update:semver-major` to allow major releases.

When `update-types` is omitted from an `allow` rule, all update types are allowed for that rule.

You can combine `update-types` with `dependency-name` or `dependency-type` to further narrow allowed updates. For examples of how you can combine these options, see [Controlling Dependencies Updated](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/controlling-dependencies-updated#allowing-specific-semantic-versioning-levels-for-updates).



## `assignees` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Specify individual assignees for all pull requests raised for a package ecosystem.  For examples, see [Customizing Dependabot Prs](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/customizing-dependabot-prs).

Dependabot default behavior:

* Pull requests are created without any assignees.

When `assignees` is defined:

* {% octicon "versions" aria-hidden="true" aria-label="versions" %} All pull requests for version updates are created with the chosen assignees.
* {% octicon "shield-check" aria-hidden="true" aria-label="shield-check" %} All pull requests for security updates are created with the chosen assignees, unless `target-branch` defines updates to a non-default branch.

Assignees must have write access to the repository. For organization-owned repositories, organization members with read access are also valid assignees.

## `commit-message` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Define the format for commit messages. Since the titles of pull requests are written based on commit messages, this setting also impacts the titles of pull requests. For examples, see [Customizing Dependabot Prs](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/customizing-dependabot-prs).

Dependabot default behavior:

* Commit messages follow similar patterns to those detected in the repository.

When `commit-message` is defined:

* {% octicon "versions" aria-hidden="true" aria-label="versions" %} All commit messages follow the defined pattern.
* {% octicon "shield-check" aria-hidden="true" aria-label="shield-check" %} All commit messages follow the defined pattern, unless `target-branch` defines updates to a non-default branch.

| Parameters | Purpose |
|------------|---------|
| `prefix` | Defines a prefix for all commit messages and pull request titles. |
| `prefix-development` | On supported systems, defines a different prefix to use for commits that update dependencies in the Development dependency group. |
| `include` | Follow the commit message prefix with additional information. |

> [!TIP]
> When pull requests are raised for grouped updates, the branch name and pull request title are defined by the group `IDENTIFIER`, see [`groups`](#groups--).

### `prefix`

* Used for all commit messages unless `prefix-development` is also defined.
* Value can be up to 50 characters.
* Dependabot inserts a colon after the prefix before adding the main commit message when the value ends with a letter, number, closing parenthesis, or closing bracket.
* End the value with a whitespace character to stop a colon being added.

### `prefix-development`

Supported by: `bundler`, `composer`, `mix`, `maven`, `npm`, `pip`, and `uv`.

* Used only for commit messages that update dependencies in the Development dependency group.
* Otherwise, the parameter behaves exactly as the `prefix` parameter.

### `include`

* Supports only the value `scope`
* When defined any prefix is followed by the type of dependencies updated in the commit: `deps` or `deps-dev`.



## `cooldown` {% octicon "versions" aria-label="Version updates" height="24" %}

Defines a **cooldown period** for dependency updates, allowing updates to be delayed for a configurable number of days. The `cooldown` option is only available for _version_ updates, not _security_ updates.

This feature enables users to customize how often Dependabot generates new version updates, offering greater control over update frequency. For examples, see [Optimizing Pr Creation Version Updates](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/optimizing-pr-creation-version-updates#setting-up-a-cooldown-period-for-dependency-updates).

{% ifversion dependabot-cooldown-default-days %}

Dependabot default behavior:

* Check for updates according to the schedule defined via `schedule.interval`.
* Apply a **default cooldown period of 3 days** to version updates, even when `cooldown` is not configured. A new version is not considered for a version update until 3 days after its release. **This default cooldown does not apply to security updates.**

You can configure the `cooldown` option to customize these default cooldown periods and control which dependencies they apply to. When **`cooldown`** is defined:



1. Dependabot checks for updates according to the defined `schedule.interval` settings.
1. Dependabot checks for any cooldown settings.
1. If a dependency’s new release falls within its cooldown period, Dependabot skips updating the version for that dependency.
1. Dependencies without a cooldown period, or those past their cooldown period, are updated to the latest version as per the configured `versioning-strategy` setting.
1. After a cooldown ends for a dependency, Dependabot resumes updating the dependency following the standard update strategy defined in `dependabot.yml`.

### **Configuration of `cooldown`**

You can specify the duration of the cooldown using the options below.

| Parameter | Description |
|-----------|-------------|
| `default-days` | **Default cooldown period for dependencies** without specific rules (optional). If not specified, Dependabot applies a default cooldown of 3 days. |
| `semver-major-days` | Cooldown period for **major version updates** (optional, applies only to package managers supporting SemVer). |
| `semver-minor-days` | Cooldown period for **minor version updates** (optional, applies only to package managers supporting SemVer). |
| `semver-patch-days` | Cooldown period for **patch version updates** (optional, applies only to package managers supporting SemVer). |
| `include` | List of dependencies to **apply cooldown** (up to **150 items**). Supports wildcards (`*`). |
| `exclude` | List of dependencies **excluded from cooldown** (up to **150 items**). Supports wildcards (`*`). |

The table below shows the package managers that support `cooldown`. The `default-days` option is supported for all package managers listed, while `semver-major-days`, `semver-minor-days`, and `semver-patch-days` are supported only where indicated.

| Package manager        | Default days supported | SemVer-bump days supported |
|-----------------------|:----------------------:|:--------------------------:|
|  |
| Bazel               | {% octicon "check" aria-label="Supported" %}              | {% octicon "x" aria-label="Not supported" %} |
|  |
| Bundler               | {% octicon "check" aria-label="Supported" %}              | {% octicon "check" aria-label="Supported" %} |
| Bun                   | {% octicon "check" aria-label="Supported" %}              | {% octicon "check" aria-label="Supported" %} |
| Cargo                 | {% octicon "check" aria-label="Supported" %}              | {% octicon "check" aria-label="Supported" %} |
| Composer              | {% octicon "check" aria-label="Supported" %}              | {% octicon "check" aria-label="Supported" %} |
|  |
| Conda                 | {% octicon "check" aria-label="Supported" %}              | {% octicon "check" aria-label="Supported" %} |
|  |
|  |
| Deno                  | {% octicon "check" aria-label="Supported" %}              | {% octicon "check" aria-label="Supported" %} |
|  |
| Devcontainers         | {% octicon "check" aria-label="Supported" %}              | {% octicon "x" aria-label="Not supported" %} |
| Docker                | {% octicon "check" aria-label="Supported" %}              | {% octicon "x" aria-label="Not supported" %} |
| Docker Compose        | {% octicon "check" aria-label="Supported" %}              | {% octicon "x" aria-label="Not supported" %} |
| Dotnet SDK            | {% octicon "check" aria-label="Supported" %}              | {% octicon "check" aria-label="Supported" %} |
| Elm                   | {% octicon "check" aria-label="Supported" %}              | {% octicon "check" aria-label="Supported" %} |
| GitHub Actions | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Gitsubmodule          | {% octicon "check" aria-label="Supported" %}              | {% octicon "x" aria-label="Not supported" %} |
| Gomod (Go Modules)    | {% octicon "check" aria-label="Supported" %}              | {% octicon "check" aria-label="Supported" %} |
| Gradle                | {% octicon "check" aria-label="Supported" %}              | {% octicon "check" aria-label="Supported" %} |
| Helm                  | {% octicon "check" aria-label="Supported" %}              | {% octicon "x" aria-label="Not supported" %} |
| Hex (Hex)             | {% octicon "check" aria-label="Supported" %}              | {% octicon "check" aria-label="Supported" %} |
|  |
| Julia                 | {% octicon "check" aria-label="Supported" %}              | {% octicon "check" aria-label="Supported" %} |
|  |
| Maven                 | {% octicon "check" aria-label="Supported" %}              | {% octicon "check" aria-label="Supported" %} |
|  |
| Nix flakes            | {% octicon "check" aria-label="Supported" %}              | {% octicon "x" aria-label="Not supported" %} |
|  |
| NPM and Yarn          | {% octicon "check" aria-label="Supported" %}              | {% octicon "check" aria-label="Supported" %} |
| NuGet                 | {% octicon "check" aria-label="Supported" %}              | {% octicon "check" aria-label="Supported" %} |
|  |
| OpenTofu              | {% octicon "check" aria-label="Supported" %}              | {% octicon "x" aria-label="Not supported" %} |
|  |
| Pip                   | {% octicon "check" aria-label="Supported" %}              | {% octicon "check" aria-label="Supported" %} |
|  |
| pre-commit            | {% octicon "check" aria-label="Supported" %}              | {% octicon "x" aria-label="Not supported" %} |
|  |
| Pub                   | {% octicon "check" aria-label="Supported" %}              | {% octicon "check" aria-label="Supported" %} |
|  |
| Rust toolchain        | {% octicon "check" aria-label="Supported" %}              | {% octicon "check" aria-label="Supported" %} |
|  |
|  |
| sbt                   | {% octicon "check" aria-label="Supported" %}              | {% octicon "check" aria-label="Supported" %} |
|  |
| Swift                 | {% octicon "check" aria-label="Supported" %}              | {% octicon "check" aria-label="Supported" %} |
| Terraform             | {% octicon "check" aria-label="Supported" %}              | {% octicon "x" aria-label="Not supported" %} |
| UV                    | {% octicon "check" aria-label="Supported" %}              | {% octicon "check" aria-label="Supported" %} |
|  |
| vcpkg                 | {% octicon "check" aria-label="Supported" %}              | {% octicon "x" aria-label="Not supported" %} |
|  |

> [!NOTE]
>
> * If `semver-major-days`, `semver-minor-days`, or `semver-patch-days` are not defined, the `default-days` settings will take precedence for cooldown-based updates.
> * The `exclude` list always take precedence over the `include` list. If a dependency is specified in both lists, it is **excluded from cooldown** and will be updated immediately.

{% endif %}

## `directories` or `directory` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

**Required option**. Use to define the location of the package manifests for each package manager (for example, the _package.json_ or _Gemfile_). Without this information Dependabot cannot create pull requests for version updates. For examples, see [Defining multiple locations for manifest files](/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/controlling-dependencies-updated#defining-multiple-locations-for-manifest-files).

* Use `directory` to define a single directory of manifests.
* Use `directories` to define a list of multiple directories of manifests.
* Define directories relative to the root of the repository for most package managers.

* For GitHub Actions, use the value `/`. Dependabot will search the `/.github/workflows` directory, as well as the `action.yml/action.yaml` file from the root directory.

If you need to use more than one block in the configuration file to define updates for a single target branch of an ecosystem, you must ensure that all values are unique and there is no overlap in directories defined.

> [!NOTE]
> The `directories` key supports globbing and the wildcard character `*`. These features are not supported by the `directory` key.

## `enable-beta-ecosystems` {% octicon "versions" aria-label="Version updates only" height="24" %}

Not currently in use.

## `groups` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Define rules to create one or more sets of dependencies managed by a package manager, to group updates into fewer, targeted pull requests. For examples, see [Optimizing Pr Creation Version Updates](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/optimizing-pr-creation-version-updates).

Dependabot default behavior:

* Open a single pull request for each dependency that needs to be updated to a newer version for version updates and for security updates.

When `groups` is used to define rules:

* All updates for dependencies that match a rule are combined in a single pull request.
* If a dependency matches more than one rule, it's included in the first group that it matches.
* Any outdated dependencies that do not match a rule are updated in individual pull requests.

Parameters | Purpose |
-------|-------------|
| `IDENTIFIER` | Define an identifier for the group to use in branch names and pull request titles. This must start and end with a letter, and can contain letters, pipes `\|`, underscores `_`, or hyphens `-`. |
| `applies-to` | Specify which type of update the group applies to. When undefined, defaults to version updates. Supported values: `version-updates` or `security-updates`. |
| `dependency-type` | Limit the group to a type. Supported values: `development` or `production`. |
| `exclude-patterns` | Define one or more patterns to exclude dependencies from the group. |
|  |
| `group-by` | Group updates across multiple directories. Supported value: `dependency-name`. |
|  |
| `patterns` | Define one or more patterns to include dependencies with matching names. |
| `update-types` | Limit the group to one or more semantic versioning levels. Supported values: `minor`, `patch`, and `major`. |

### `dependency-type` (`groups`)

Supported by: `bundler`, `composer`, `mix`, `maven`, `npm`, and `pip`.

By default, a group will include all types of dependencies.

* Use `development` to include only dependencies in the "Development dependency group."
* Use `production` to include only dependencies in the "Production dependency group."



### `group-by` (`groups`)

Use `groups.<group-name>.group-by` to specify how Dependabot should group updates across multiple directories in a monorepo.

* **Type:** String
* **Accepted values:** `dependency-name`
* **Applies to:** Configurations with multiple directories specified

When set to `dependency-name`, Dependabot will create a single pull request for each dependency update across all specified directories, rather than separate pull requests per directory.

**Limitations of cross-directory grouping**

When using `group-by: dependency-name`:

* All directories must use the same package ecosystem (for example, all `npm` or all `bundler`)
* Applies to **version updates only**
* If directories have incompatible version constraints for a dependency, Dependabot will create separate pull requests

For examples showing the use of `group-by`, see [Optimizing Pr Creation Version Updates](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/optimizing-pr-creation-version-updates#grouping-updates-across-directories-in-a-monorepo).



### `patterns` and `exclude-patterns` (`groups`)

Both options support using `*` as a wild card to define matches with dependency names. If a dependency matches both a pattern and an exclude-pattern, then it is excluded from the group.

### `update-types` (`groups`)

By default, a group will include updates for all semantic versions (SemVer). SemVer is an accepted standard for defining versions of software packages, in the form `x.y.z`. Dependabot assumes that versions in this form are always `major.minor.patch`.

* Use `patch` to include patch releases.
* Use `minor` to include minor releases.
* Use `major` to include major releases.

For examples, see [Controlling Dependencies Updated](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/controlling-dependencies-updated#specifying-the-semantic-versioning-level-to-ignore).

## `ignore` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Use with the [`allow`](#allow--) option to define exactly which dependencies to maintain for a package ecosystem. Dependabot checks for all allowed dependencies and then filters out any ignored dependencies or versions. So a dependency that is matched by both an allow and an ignore will be ignored. For examples, see [Controlling Dependencies Updated](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/controlling-dependencies-updated#ignoring-specific-dependencies).

Dependabot default behavior:

* {% octicon "versions" aria-hidden="true" aria-label="versions" %} All dependencies explicitly defined in a manifest are kept up to date by version updates.
* {% octicon "shield-check" aria-hidden="true" aria-label="shield-check" %} All dependencies defined in lock files with vulnerable dependencies are updated by security updates.

When `ignore` is used Dependabot uses the following process:

1. Check for all explicitly **allowed** dependencies.
1. Then filter out any **ignored** dependencies or versions.

   If a dependency is matched by an `allow` and an `ignore` statement, then it is **ignored**.

| Parameters | Purpose |
|------------|---------|
| `dependency-name` | Ignore updates for dependencies with matching names, optionally using `*` to match zero or more characters. |
| `versions` | Ignore specific versions or ranges of versions. |
| `update-types` | Ignore updates to one or more semantic versioning levels. Supported values: `version-update:semver-patch`, `version-update:semver-minor`, and `version-update:semver-major`. |

### `dependency-name` (`ignore`)

For most package managers, you should define a value that will match the dependency name specified in the lock or manifest file. A few systems have more complex requirements.

| Package manager | Format required | Example |
|-----------------|-----------------|---------|
| Gradle and Maven | `groupId:artifactId` | `org.kohsuke:github-api` |
| Docker for image tags |The full name of the repository | For an image tag of `<account ID>.dkr.ecr.us-west-2.amazonaws.com/base/foo/bar/ruby:3.1.0-focal-jemalloc`, use `base/foo/bar/ruby`.|

### `versions` (`ignore`)

Use to ignore specific versions or ranges of versions. If you want to define a range, use the standard pattern for the package manager. For example:

* npm: use `^1.0.0` 
* Bundler: use `~> 2.0`
* Docker: use Bundler version syntax
* NuGet: use `7.*`
* Maven: use `[1.4,)`

For examples, see [Controlling Dependencies Updated](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/controlling-dependencies-updated#ignoring-specific-versions-or-ranges-of-versions).

### `update-types` (`ignore`)

Specify which semantic versions (SemVer) to ignore. SemVer is an accepted standard for defining versions of software packages, in the form `x.y.z`. Dependabot assumes that versions in this form are always `major.minor.patch`.

* Use `version-update:semver-patch` to include patch releases.
* Use `version-update:semver-minor` to include minor releases.
* Use `version-update:semver-major` to include major releases.

## `insecure-external-code-execution` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Supported by: `bundler`, `mix`, and `pip`.

Allow Dependabot to execute external code in the manifest during updates. For examples, see [Allowing external code execution](/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries#allowing-external-code-execution).

Dependabot default behavior:

* When you give Dependabot access to one or more registries, external code execution is automatically disabled to protect your code from compromised packages.
* Version updates may fail without the ability to execute code.

When you allow `insecure-external-code-execution`:

* Dependabot will execute code in the manifest as part of the version update process.
* The code has access to only the package managers in the registries associated with that `updates`setting. There is no access allowed to any of the registries defined in the top level `registries` configuration.
* This should enable the update to succeed but also could allow a compromised package to steal credentials or gain access to configured registries.

Supported value: `allow`.

## `labels` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Specify your own labels for all pull requests raised for a package manager.  For examples, see [Customizing Dependabot Prs](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/customizing-dependabot-prs).

Dependabot default behavior:

* All pull requests have a `dependencies` label.
* If you define more than one package manager, an additional label for the ecosystem or language is added to each pull request. For example: `java` for Gradle updates and `submodules` for git submodule updates.
* If semantic version (SemVer) labels are present in the repository, they will be applied automatically to indicate the type of version update (`major`, `minor`, or `patch`).
* Dependabot creates these default labels automatically, as necessary in your repository.

When `labels` is defined:

* The labels specified are used instead of the default labels.
* SemVer labels (if present in the repository) will still be applied in addition to any custom labels defined.
* If any of these labels is not defined in the repository, it is ignored.
* You can disable all labels, including the default labels, using `labels: [ ]`.

Setting this option will also affect pull requests for security updates to the manifest files of this package manager, unless you use `target-branch` to check for version updates on a non-default branch.


## `milestone` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Associate all pull requests raised for a package manager with a milestone.  For examples, see [Customizing Dependabot Prs](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/customizing-dependabot-prs).

Dependabot default behavior:

* No milestones are used.

When `milestone` is defined:

* All pull requests for the package manager are added to the milestone.

Supported value: the numeric identifier of a milestone.

>[!TIP]
>If you view a milestone, the final part of the page URL, after `milestone`, is the identifier. For example: `https://github.com/<org>/<repo>/milestone/3`, see [Viewing Your Milestones Progress](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/viewing-your-milestones-progress).



## `multi-ecosystem-groups` {% octicon "versions" aria-label="Version updates" height="24" %}

Define groups that span multiple package ecosystems to get a single Dependabot pull request that updates all supported package ecosystems. This approach helps reduce the number of Dependabot pull requests you receive and streamlines your dependency update workflow.

Dependabot default behavior:

* Create separate pull requests for each package ecosystem that has dependency updates.

When `multi-ecosystem-groups` is used:

* Updates across multiple package ecosystems in the same group are combined into a single pull request.
* Groups have their own schedules and can inherit or override individual ecosystem settings.

### `multi-ecosystem-group`

Assign individual package ecosystems to a multi-ecosystem group using the `multi-ecosystem-group` parameter in your `updates` configuration.

> [!IMPORTANT]
> Multi-ecosystem updates require specific configuration patterns and have unique parameter merging behavior. For complete setup instructions, configuration examples, and detailed parameter reference, see [Configuring Multi Ecosystem Updates](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configuring-multi-ecosystem-updates).

```yaml copy
# Basic `dependabot.yml` file defining a multi-ecosystem-group
version: 2

multi-ecosystem-groups:
  infrastructure:
    schedule:
      interval: "weekly"

updates:
  - package-ecosystem: "docker"
    directory: "/"
    patterns: ["nginx", "redis"]
    multi-ecosystem-group: "infrastructure"

  - package-ecosystem: "terraform"
    directory: "/"
    patterns: ["aws"]
    multi-ecosystem-group: "infrastructure"
```



## `open-pull-requests-limit` {% octicon "versions" aria-label="Version updates only" height="24" %}

Change the limit on the maximum number of pull requests for version updates open at any time.

Dependabot default behavior:

* If five pull requests with version updates are open, no further pull requests are raised until some of those open requests are merged or closed.

> [!NOTE]
> _Security update_ pull requests are not subject to this limit and do not count toward it. There is no limit on the number of open pull requests for security updates.

When `open-pull-requests-limit` is defined:

* Dependabot opens pull requests up to the defined integer value. A large value can be set to effectively remove the open pull request limit.
* You can temporarily disable version updates for a package manager by setting this option to zero, see [Disabling Dependabot version updates](/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-version-updates#disabling-dependabot-version-updates).

## `package-ecosystem` {% octicon "versions" aria-label="Version updates only" height="24" %}



**Required option.** Define one `package-ecosystem` element for each package manager that you want Dependabot to monitor for new versions. The repository must also contain a dependency manifest or lock file for each package manager, see [Example `dependabot.yml` file](/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-version-updates#example-dependabotyml-file).

Package manager | YAML value      | Supported versions |
---------------|------------------|:------------------:|
|  |
| Bazel         | `bazel`          | v7, v8, v9               |
|  |
| Bun | `bun`         | >=v1.1.39              |
| Bundler | `bundler` | v2 |
| Cargo       | `cargo`          | v1               |
| Composer       | `composer`       | v2         |
|  |
| Conda         | `conda`          | Not applicable               |
|  |
|  |
| Deno         | `deno`          | >=v2               |
|  |
| Dev containers | `devcontainers`         | Not applicable               |
| Docker         | `docker`         | v1               |
| Docker Compose | `docker-compose`         | v2, v3               |
| .NET SDK       | `dotnet-sdk`         | >=.NET Core 3.1           |
|  |
| Helm Charts            | `helm`            | v3               |
|  |
| Hex            | `mix`            | v1               |
|  |
| Julia                  | `julia`           | >=v1.10               |
|  |
| elm-package    | `elm`            | v0.19            |
| git submodule  | `gitsubmodule`   | Not applicable |
| GitHub Actions  | `github-actions` | Not applicable |
| Go modules     | `gomod`          | v1               |
| Gradle        | `gradle`         | Not applicable   |
| Maven      | `maven`          | Not applicable   |
|  |
| Nix flakes | `nix`            | Not applicable   |
|  |
| npm            | `npm`            |  v7, v8, v9, v10, v11   |
| NuGet          | `nuget`          | <=6.12.0 |
|  |
| OpenTofu     | `opentofu`       | Not applicable     |
|  |
| pip         | `pip`            | 26.1.1             |
| pip-compile | `pip`            | 7.5.3            |
| pipenv      | `pip`            | 2024.4.1      |
| pnpm   | `npm`            | v7, v8, v9, v10   |
| poetry      | `pip`    | v2    |
|  |
| pre-commit | `pre-commit` | Not applicable |
|  |
| pub         | `pub`            | v2  |
|  |
| Rust toolchain | `rust-toolchain` | Not applicable   |
|  |
|  |
| sbt          | `sbt`            | Not applicable   |
|  |
| Swift   | `swift`      | v5  |
| Terraform    | `terraform`      | >= 0.13, <= 1.15.x  |
| uv           | `uv`             | v0 |
|  |
| vcpkg       | `vcpkg`          | Not applicable   |
|  |
| yarn         | `npm`            | v1, v2, v3, v4     |

## `pull-request-branch-name` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}



Configure how Dependabot generates branch names for pull requests. You can customize the separator, prefix, length, casing, word separator, and provide a custom template. For examples, see [Customizing Dependabot Prs](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/customizing-dependabot-prs).

Dependabot default behavior:

* Generate branch names of the form: `dependabot/PACKAGE-MANAGER/DEPENDENCY`

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| [`separator`](#separator) | String | `"/"` | Character used between segments of the branch name. |
| [`prefix`](#prefix) | String (max 50 characters) | `"dependabot"` | String prepended to the branch name. |
| [`max-length`](#max-length) | Integer (20–244) | `100` | Maximum character length of the branch name. |
| [`word-separator`](#word-separator) | String | Not set | Character to replace underscores (`_`) in branch name content after the prefix. |
| [`branch-name-case`](#branch-name-case) | String | Not set | Apply case transformation to the branch name content after the prefix. |
| [`template`](#template) | String (max 200 characters) | Not set | Custom format template using placeholders. |

All options are composable. When `template` is set alongside simple options, the processing order is:

1. Template rendering (placeholder substitution)
1. Separator replacement (`/` replaced with configured separator)
1. Word-separator replacement (`_` replaced with configured word-separator)
1. Case transformation applied to content after the prefix
1. Max-length truncation

### `separator`

Specify a character to use in place of `/` between branch name segments.

Supported values: `"-"`, `_`, `/`

For example, with `separator: "-"`: `dependabot/npm_and_yarn/lodash-4.17.21` becomes `dependabot-npm_and_yarn-lodash-4.17.21`.

> [!TIP]
> The hyphen symbol must be escaped so it is not interpreted as starting an empty YAML list.

### `prefix`

Specify a custom string to use at the start of the branch name instead of the default `dependabot`.

The value can be up to 50 characters.

For example, with `prefix: "deps"`: `dependabot/npm_and_yarn/lodash-4.17.21` becomes `deps/npm_and_yarn/lodash-4.17.21`.

### `max-length`

Set the maximum allowed length for generated branch names.

* Minimum value: `20`.
* Maximum value: `244`.
* Default value: `100`.
* When a branch name exceeds this limit, it is truncated and a hash suffix is appended to preserve uniqueness.

For example, with `max-length: 40`, a branch name like `dependabot/npm_and_yarn/some-long-dependency-name-1.0.0` is truncated to 40 characters with a hash suffix.

### `word-separator`

Specify a character to replace underscores (`_`) in all branch name content after the prefix—including package manager names, dependency names, group names, and directory paths.

For example, with `word-separator: "-"`:

* `npm_and_yarn` → `npm-and-yarn`
* `front_end_dir` → `front-end-dir`

### `branch-name-case`

Apply a case transformation to the branch name content after the prefix.

Supported values: `"lowercase"`, `"uppercase"`

For example, with `branch-name-case: "lowercase"`: `dependabot/npm_and_yarn/Lodash-4.17.21` becomes `dependabot/npm_and_yarn/lodash-4.17.21`.

### `template`

Define a custom branch name format using placeholders. The template gives you full control over the structure of generated branch names. For examples, see [Customizing Dependabot Prs](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/customizing-dependabot-prs).

Available placeholders depend on the update strategy:

| Placeholder | Solo updates | Grouped updates | Multi-ecosystem groups | Description |
|-------------|:---:|:---:|:---:|-------------|
| `{prefix}` | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | The configured prefix (default `dependabot`). |
| `{package_manager}` | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "x" aria-label="Not available" %} | The package ecosystem identifier (for example, `npm_and_yarn`). |
| `{directory}` | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "x" aria-label="Not available" %} | The dependency file directory. |
| `{target_branch}` | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | The target branch if configured. |
| `{dependency}` | {% octicon "check" aria-label="Available" %} | {% octicon "x" aria-label="Not available" %} | {% octicon "x" aria-label="Not available" %} | The dependency name(s). |
| `{version}` | {% octicon "check" aria-label="Available" %} | {% octicon "x" aria-label="Not available" %} | {% octicon "x" aria-label="Not available" %} | The new version or ref. |
| `{group_name}` | {% octicon "x" aria-label="Not available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | The configured group name. |
| `{name}` | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | Strategy-appropriate name: dependency and version for solo updates, group name for grouped updates. |

Template validation rules:

* All placeholders must be recognized and allowed for the update strategy in use.
* Braces must be well-formed (no unclosed `{` or `}`).
* Using `{package_manager}` in a multi-ecosystem group template raises a validation error because no single package manager applies.
* The rendered branch name must be a valid Git reference name. Characters such as spaces, `~`, `^`, `:`, `?`, `*`, `[`, and `\` are not allowed, and sequences like `..` or `@{` are rejected.
* For grouped and multi-ecosystem updates, a 10-character digest is automatically appended to the branch name to guarantee uniqueness. This is not user-controlled.



## `rebase-strategy` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Disable automatic rebasing of pull requests raised by Dependabot.

Dependabot default behavior is to rebase open pull requests when Dependabot detects any changes to a version or security update pull request. Dependabot checks for changes when:

* Your schedule runs to check for version updates.
* You reopen a closed Dependabot pull request.
* You change the value of `target-branch` in the Dependabot configuration file, see [`target-branch`](#target-branch-).
* A Dependabot pull request is in conflict after a recent push to the target branch.

When `rebase-strategy` is set to `disabled`, Dependabot stops rebasing pull requests.

> [!NOTE]
> Pull requests that were open **before** you disable rebasing will continue to be rebased until 30 days after they were opened. This affects all pull requests that have conflicts with the target branch and all pull requests for version updates.

## `registries` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Configure access to private package registries to allow Dependabot to update a wider range of dependencies, see [Configure Access To Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries) and [Configure Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-private-registries).

There are 2 locations in the `dependabot.yml` file where you can use the `registries` key:

1. At the top level, where you define the private registries you want to use and their access information, see [Configure Access To Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries).
1. Within the `updates` blocks, where you can specify which private registries each package manager should use.

Dependabot default behavior is to raise pull requests only to update dependencies stored in publicly accessible registries.

When the Dependabot configuration file has a top-level `registries` section, defining access to one or more private registries, you can configure each `package-ecosystem` to use one or more of these private registries.

When `registries` is defined for a package manager:

* Each private registry specified for a package manager is checked for version and security updates.
* Dependabot uses the access details defined in the top-level `registries` section.

Supported values: `REGISTRY_NAME` or `"*"`



## `schedule` {% octicon "versions" aria-label="Version updates only" height="24" %}

**Required option.** Define how often to check for new versions for each package manager you configure using the `interval` parameter. Optionally, for daily and weekly intervals, you can customize when Dependabot checks for updates. For examples, see [Optimizing Pr Creation Version Updates](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/optimizing-pr-creation-version-updates).

| Parameters | Purpose |
|------------|---------|
| [`interval`](#interval) | **Required.** Defines the frequency for Dependabot. |
| [`day`](#day) | Specify the day to run for a **weekly** interval. |
| [`time`](#time) | Specify the time to run. |
|  |
| [`cronjob`](#cronjob) | Defines the cron expression if the interval type is `cron`. |
|  |
| [`timezone`](#timezone) | Specify the timezone of the `time` value.  |

### `interval`

Supported values: `daily`, `weekly`, `monthly`, `quarterly`, `semiannually`, `yearly`, or `cron`

Each package manager **must** define a schedule interval.

* Use `daily` to run on every weekday, Monday to Friday.
* Use `weekly` to run once a week, by default on Monday.
* Use `monthly` to run on the first day of each month.
* Use `quarterly` to run on the first day of each quarter (January, April, July, and October).
* Use `semiannually` to run every six months, on the first day of January and July.
* Use `yearly` to run on the first day of January.
* Use `cron` for cron expression based scheduling option. See [`cronjob`](#cronjob).

>[!NOTE]
> The supported values `quarterly`, `semiannually`, and `yearly` are only available on GitHub Enterprise Server from version 3.19.

By default, Dependabot randomly assigns a time to apply all the updates in the configuration file. You can use the `time` and `timezone` parameters to set a specific runtime for all intervals.  If you use a `cron` interval, you can define the update time with a `cronjob` expression.

### `day`

Supported values: `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, or `sunday`

Optionally, run **weekly** updates for a package manager on a specific day of the week.

### `time`

Format: `hh:mm`

Optionally, run all updates for a package manager at a specific time of day. By default, times are interpreted as UTC.



### `cronjob`

Supported values: Valid cron expression in cron syntax or natural expression.

Cron syntax has five fields separated by a space, and each field represents a unit of time.

```text
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of the month (1 - 31)
│ │ │ ┌───────────── month (1 - 12 or JAN-DEC)
│ │ │ │ ┌───────────── day of the week (0 - 6 or SUN-SAT)
│ │ │ │ │
* * * * *
```


Examples : `0 9 * * *`, `every day at 5pm`

`0 9 * * *` is equivalent to "every day at 9am". `every day at 5pm` is equivalent to `0 17 * * *`.

> [!NOTE]
>
> * Timezones must be specified in the [`timezone`](#timezone) parameter and not in the `cronjob`.
> * A `cronjob` type schedule is required to use a `cron` interval.

```yaml copy

# Basic `dependabot.yml` file for cronjob

version: 2
updates:
  # Enable version updates for npm
  - package-ecosystem: "npm"
    # Look for `package.json` and `lock` files in the `root` directory
    directory: "/"
    # Check the npm registry for updates based on `cronjob` value
    schedule:
      interval: "cron"
      cronjob: "0 9 * * *"
```



### `timezone`

Specify a time zone for the `time` value. The default time zone is `UTC`.

The time zone identifier must match a timezone in the database maintained by [iana](https://www.iana.org/time-zones), see [List of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

## `target-branch` {% octicon "versions" aria-label="Version updates only" height="24" %}

Define a specific branch to check for version updates and to target pull requests for version updates against.  For examples, see [Customizing Dependabot Prs](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/customizing-dependabot-prs).

Dependabot default behavior:

* Dependabot uses the default branch for the repository, see [About the default branch](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches#about-the-default-branch).

When `target-branch` is defined:

* Only manifest files on the target branch are checked for version updates.
* All pull requests for version updates are opened targeting the specified branch.
* Options defined for this `package-ecosystem` no longer apply to security updates because security updates always use the default branch for the repository.

## `exclude-paths` {% octicon "versions" aria-label="Version updates only" height="24" %}

Use to specify paths of directories and files that Dependabot should ignore when scanning for manifests and dependencies. This option is useful when you want to prevent updates for dependencies in certain locations, such as test assets, vendored code, or specific files.

Dependabot default behavior:

* All directories and files in the specified `directory` are included in the update scan unless excluded by this option.

When `exclude-paths` is defined:

* All files and directories matching the specified paths are ignored during update scans for the given `package-ecosystem` entry.

| Parameter | Purpose |
|-----------|---------|
| `exclude-paths` | A list of glob patterns for files or directories to ignore. |

Glob patterns are supported, such as `**` for recursive matching and `*` for single-segment wildcards. Patterns are relative to the `directory` specified for the update configuration. Each ecosystem can have its own `exclude-paths` settings.

### Example

```yaml copy
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    exclude-paths:
      - "src/test/assets"
      - "vendor/**"
      - "src/*.js"
      - "src/test/helper.js"

# Sample patterns that can be used-

# Pattern: docs/*.json
# Matches: docs/foo.json, docs/bar.json

# Pattern: *.lock
# Matches: Gemfile.lock, package.lock, foo.lock (in any directory)

# Pattern: test/**
# Matches: test/foo.rb, test/bar/baz.rb, test/any/depth/file.txt

# Pattern: config/settings.yml
# Matches: config/settings.yml

# Pattern: **/*.md
# Matches: README.md, docs/guide.md, any/depth/file.md

# Pattern: src/*
# Matches: src/main.rb, src/app.js
# Does NOT match: src/utils/helper.rb

# Pattern: hidden/.*
# Matches: hidden/.env, hidden/.secret
```

In this example, Dependabot will ignore the `src/test/assets` directory, all files under `vendor/`, all JavaScript files directly under `src/`, and the specific file `src/test/helper.js` when scanning for updates.

## `vendor` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Supported by: `bundler` and `gomod` only.

Tell Dependabot to maintain your vendored dependencies as well as the dependencies defined by manifest files. A dependency is described as "vendored" or "cached" when you store the code within your repository, see [`bundle cache` documentation](https://bundler.io/man/bundle-cache.1.html) and [`go mod vendor` documentation](https://golang.org/ref/mod#go-mod-vendor).

For examples, see [Controlling Dependencies Updated](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/controlling-dependencies-updated#updating-vendored-dependencies).

Dependabot default behavior:

* Maintain only dependencies recorded in the manifest and lock files identified for Bundler.
* Raise security and version update pull requests that update the version numbers recorded in the manifest and lock files.
* For Go modules, any vendored dependencies are automatically identified and maintained as if `vendor` was enabled.

When `vendor` is enabled:

* Dependabot also maintains dependencies for Bundler that are stored in the  `_vendor/cache_` directory in the repository.
* Pull requests will sometimes contain updates to a dependency that is stored in the repository.

Supported values: `true` or `false`

## `versioning-strategy` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Supported by: `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip`, `pub`, and `uv`

Define how Dependabot should edit manifest files. For examples, see [Controlling Dependencies Updated](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/controlling-dependencies-updated#defining-a-versioning-strategy).

Dependabot default behavior:

* Try to differentiate between app and library dependencies.
* For apps, always increase the minimum version requirement to match the new version. The `increase` strategy.
* For libraries, widen the allowed version requirements to include both the new and old versions, when possible. The `widen` strategy.

When `versioning-strategy` is defined, Dependabot uses the strategy specified.

| Value | Behavior |
|--------|--------|
| `auto` | Default behavior.|
| `increase`| Always increase the minimum version requirement to match the new version. If a range already exists, typically this only increases the lower bound. |
| `increase-if-necessary` | Leave the version requirement unchanged if it already allows the new release (Dependabot still updates the resolved version). Otherwise widen the requirement. |
| `lockfile-only` | Only create pull requests to update lockfiles. Ignore any new versions that would require package manifest changes. |
| `widen`| Widen the allowed version requirements to include both the new and old versions, when possible. Typically, this only increases the maximum allowed version requirement. |

For example, if the current version is `1.0.0` and the current constraint is `^1.0.0` the different strategies would raise the following updates:

New version `1.2.0`

* `increase`: new constraint `^1.2.0`
* `increase-if-necessary`: new constraint `^1.0.0`
* `widen`: new constraint `^1.0.0`

New version `2.0.0`

* `increase`: new constraint `^2.0.0`
* `increase-if-necessary`: new constraint `^2.0.0`
* `widen`: new constraint `>=1.0.0 <3.0.0`

> [!NOTE]
> If the package manager you use does not yet support configuring the `versioning-strategy` parameter, or does not support a value you need, the strategy code is open source, so if you'd like a particular ecosystem to support a new strategy, you are always welcome to submit a pull request in <https://github.com/dependabot/dependabot-core/>.

### Versioning tags



* Represent stages in the software release lifecycle, such as alpha, beta, and stable versions.
* Allow publishers to distribute their packages more effectively.
* Indicate the stability of a version and communicate what users should expect in terms of features and stability.

Dependabot recognizes a variety of versioning tags for pre-releases, stable versions, and custom tags across different ecosystems.

The `dependabot.yml` file doesn't control the versioning tags that you can use, but you can define in configuration options such as [`ignore`](/code-security/reference/supply-chain-security/dependabot-options-reference#ignore--) the supported versioning tags you want to ignore updates for.

#### Supported versioning tags

| **Package Manager** | **YAML value** | **Supported Tags** | **Examples** |
|---------------------|----------------|--------------------|--------------|
| Maven               | `maven`        | `alpha, a, beta, b, milestone, m, rc, cr, sp, ga, final, release, snapshot` | `spring-security-web@5.6.0-SNAPSHOT`, `spring-core@5.2.0.RELEASE` |
| npm                 | `npm`          | `alpha`, `beta`, `canary`, `dev`, `experimental`, `latest`, `legacy`, `next`, `nightly`, `rc`, `release`, `stable` | `lodash@beta`, `react@latest`, `express@next` |
| pnpm                | `npm`          | `alpha`, `beta`, `canary`, `dev`, `experimental`, `latest`, `legacy`, `next`, `nightly`, `rc`, `release`, `stable` | `lodash@1.2.0-alpha`, `react@alpha`, `vue@next` |
|  |
| sbt                 | `sbt`          | `alpha, a, beta, b, milestone, m, rc, cr, sp, ga, final, release, snapshot` | `akka-actor@2.7.0-RC1`, `play-json@3.0.0-M1` |
|  |
| yarn                | `npm`          | `alpha`, `beta`, `canary`, `dev`, `experimental`, `latest`, `legacy`, `next`, `nightly`, `rc`, `release`, `stable` | `lodash@1.2.0-alpha`, `axios@latest`, `moment@nightly` |
| Bundler             | `bundler`      | Any prerelease identifier (commonly `alpha`, `beta`, `rc`, `pre`) | `rails@1.0.0.alpha`, `rack@1.0.0.beta1`, `rspec@1.0.0.rc2` |
| Cargo               | `cargo`        | Any SemVer prerelease identifier (commonly `alpha`, `beta`, `rc`, `dev`) | `serde@1.0.0-alpha`, `tokio@0.2.0-preview.3`, `clap@4.0.0-rc.1`, `rand@1.0.0-dev` |
| pip                 | `pip`          | `a`, `b`, `rc`, `dev`, `post` | `requests@1.0.0a1`, `numpy@2.0.0b3`, `django@4.0rc1`, `black@1.0.0.dev5`, `pandas@2.0.5.post1` |
| pipenv              | `pip`          | `a`, `b`, `rc`, `dev`, `post` | `requests@1.0.0a1`, `numpy@2.0.0b3`, `django@4.0rc1`, `black@1.0.0.dev5`, `pandas@2.0.5.post1` |
| pip-compile         | `pip`          | `a`, `b`, `rc`, `dev`, `post` | `requests@1.0.0a1`, `numpy@2.0.0b3`, `django@4.0rc1`, `black@1.0.0.dev5`, `pandas@2.0.5.post1` |
| poetry              | `pip`          | `a`, `b`, `rc`, `dev`, `post` | `requests@1.0.0a1`, `numpy@2.0.0b3`, `django@4.0rc1`, `black@1.0.0.dev5`, `pandas@2.0.5.post1` |
| Gradle              | `gradle`       | `alpha`, `a`, `beta`, `b`, `milestone`, `m`, `rc`, `cr`, `snapshot`, `ga`, `final`, `release`, `sp` (case-insensitive) | `spring-boot-starter@3.0.0-RC1`, `kotlin-stdlib@2.0.0-beta`, `guava@33.0.0-SNAPSHOT`, `junit@5.10.0-M2`, `ktor@2.3.0-rc.1` |
| Elm                 | `elm`          | None—strict `MAJOR.MINOR.PATCH` only (no pre-release versions) | `elm/core@1.0.0`, `elm/html@2.3.1`, `elm/json@10.0.0` |
| Docker              | `docker`       | `alpha`, `beta`, `rc`, `dev`, `preview`, `pre`, `nightly`, `snapshot`, `canary`, `unstable` (heuristic detection) | `nginx@1.25.0-rc1`, `node@20.0.0-alpha.1`, `redis@7.0.0-nightly`, `alpine@3.18.0-dev`, `ubuntu@22.04-preview` |
| git submodule       | `gitsubmodule` | None—pins to commit SHAs or git tags (no versioning scheme) | `my-lib@abc1234`, `shared-utils@v1.2.0` |
| Go modules          | `gomod`        | `alpha`, `beta`, `rc` (SemVer prerelease after `-`) | `github.com/go-chi/chi@v5.0.0-rc1`, `google.golang.org/grpc@v1.60.0-beta.1`, `github.com/octo-org/octo-module@v0.17.0-alpha.1` |
|  |
| Bazel               | `bazel`        | Any SemVer prerelease identifier (commonly `alpha`, `beta`, `rc`) | `rules_go@0.46.0-rc1`, `rules_rust@0.40.0-beta`, `bazel_skylib@1.5.0-alpha` |
|  |
| Bun                 | `bun`          | `alpha`, `beta`, `rc`, `canary` (SemVer prerelease after `-`) | `bun@1.0.0-beta.1`, `elysia@1.0.0-rc.3`, `hono@4.0.0-canary.1` |
| Composer            | `composer`     | `dev`, `alpha`, `a`, `beta`, `b`, `RC` (case-insensitive) | `laravel/framework@11.0.0-alpha1`, `symfony/console@7.0.0-beta2`, `monolog/monolog@3.0.0-RC1` |
|  |
| Conda               | `conda`        | `dev`, `alpha`, `a`, `beta`, `b`, `rc`, `c`, `post` | `numpy@2.0.0a1`, `pandas@2.1.0b2`, `scipy@1.12.0rc1`, `scikit-learn@1.4.0.dev0` |
|  |
|  |
| Deno                | `deno`         | Any SemVer prerelease identifier (commonly `alpha`, `beta`, `rc`) | `oak@13.0.0-alpha`, `fresh@2.0.0-rc.1`, `std@0.220.0-beta.2` |
|  |
| Dev containers      | `devcontainers` | SemVer 2.0.0 (prerelease not used in practice) | `ghcr.io/devcontainers/features/node@1.6.1`, `ghcr.io/devcontainers/features/python@1.6` |
| .NET SDK            | `dotnet-sdk`   | `preview.N`, `rc.N`, `alpha.N` | `dotnet-sdk@9.0.100-preview.7.24407.12`, `dotnet-sdk@9.0.100-rc.2.24474.11` |
| GitHub Actions | `github-actions` | Any SemVer prerelease identifier (commonly `alpha`, `beta`, `rc`) | `my-org/my-action@v1.0.0-beta.1`, `my-org/deploy@v2.0.0-rc1`, `my-org/lint@v3.0.0-alpha` |
|  |
| Helm Charts         | `helm`         | Any SemVer prerelease identifier (commonly `alpha`, `beta`, `rc`) | `ingress-nginx@4.11.0-beta.0`, `cert-manager@1.15.0-alpha.1`, `prometheus@25.0.0-rc1` |
|  |
| Hex                 | `mix`          | Any SemVer prerelease identifier (commonly `alpha`, `beta`, `rc`, `dev`) | `phoenix/phoenix@1.7.0-rc.0`, `elixir-ecto/ecto@3.11.0-beta.1`, `elixir-plug/plug@1.15.0-alpha.1` |
|  |
| Julia               | `julia`        | Any SemVer prerelease identifier (commonly `rc`, `DEV`, `beta`) | `HTTP@1.10.0-rc1`, `Plots@2.0.0-DEV`, `DataFrames@1.6.0-beta.1` |
|  |
|  |
| Nix                 | `nix`          | None—tracks flake input commits (no versioning scheme) | `nixpkgs@a1b2c3d`, `devenv@e4f5a6b`, `flake-utils@c7d8e9f` |
|  |
| NuGet               | `nuget`        | Any SemVer prerelease identifier (commonly `alpha`, `beta`, `rc`, `preview`) | `Newtonsoft.Json@13.0.0-rc1`, `Microsoft.Extensions.Hosting@8.0.0-preview.7`, `Serilog@3.0.0-beta.1` |
|  |
| OpenTofu            | `opentofu`     | Any SemVer prerelease identifier (commonly `alpha`, `beta`, `rc`) | `opentofu/aws@5.0.0-alpha`, `opentofu/google@5.0.0-rc1`, `opentofu/azurerm@4.0.0-beta1` |
|  |
|  |
| pre-commit          | `pre-commit`   | Any SemVer prerelease identifier (commonly `alpha`, `beta`, `rc`) | `pre-commit/mirrors-mypy@1.10.0a1`, `psf/black@24.1.0rc1`, `astral-sh/ruff-pre-commit@0.4.0-beta.1` |
|  |
| Pub                 | `pub`          | Any SemVer prerelease identifier (commonly `dev`, `beta`, `rc`) | `flutter/dio@5.0.0-dev.1`, `dart-lang/http@1.2.0-beta.1`, `invertase/melos@4.0.0-rc.1` |
|  |
| Rust toolchain      | `rust-toolchain` | Channel-based: `stable`, `beta`, `nightly` (not SemVer prerelease) | `rust@1.78.0`, `rust@beta`, `rust@nightly`, `rust@nightly-2024-01-15` |
|  |
| Swift               | `swift`        | Any SemVer prerelease identifier (commonly `alpha`, `beta`, `rc`) | `vapor/vapor@5.0.0-beta.1`, `apple/swift-nio@3.0.0-rc1`, `pointfreeco/swift-composable-architecture@2.0.0-alpha.1` |
| Terraform           | `terraform`    | Any SemVer prerelease identifier (commonly `alpha`, `beta`, `rc`) | `hashicorp/aws@5.0.0-rc1`, `hashicorp/google@4.0.0-alpha`, `hashicorp/azurerm@3.0.0-beta1` |
| uv                  | `uv`           | `a`, `b`, `rc`, `dev`, `post` (PEP 440) | `requests@1.0.0a1`, `numpy@2.0.0b3`, `django@4.0rc1`, `black@1.0.0.dev5`, `pandas@2.0.5.post1` |
|  |
| vcpkg               | `vcpkg`        | Any SemVer prerelease identifier (commonly `beta`, `rc`) | `zlib@1.3.1-beta1`, `openssl@3.2.0-rc.1`, `fmt@10.2.0-beta` |
|  |

#### Ecosystem-specific versioning details

The following details describe how Dependabot interprets versioning for specific ecosystems.

* **Bundler:** Does not use a fixed set of prerelease tags. Any version segment containing a letter is treated as prerelease (for example, `.alpha`, `.beta1`, `.rc2`). Hyphens are normalized to `.pre.` internally (for example, `1.0.0-beta` becomes `1.0.0.pre.beta`).
* **Cargo:** Follows SemVer 2.0.0 conventions. Anything after `-` is a prerelease identifier (dot-separated, `[0-9A-Za-z-]`). Build metadata (`+...`) is allowed but ignored for precedence.
* **Gradle:** In addition to the qualifiers listed in the table, these aliases are recognized: `pr`/`pre`/`preview`→`rc`, `eap`/`ea`→`alpha`. Additional prerelease qualifiers include `dev`, `experimental`, and `unstable`. Qualifiers are ordered by precedence: `alpha`/`a` < `beta`/`b` < `milestone`/`m` < `rc`/`cr` < `snapshot` < (empty/`ga`/`final`/`release`) < `sp`. Free-form identifiers not in this list are treated as stable.
* **pip/pipenv/pip-compile/poetry (PEP 440):** The table lists canonical prerelease and postrelease suffixes. Aliases are also recognized and normalized (`alpha`→`a`, `beta`→`b`, `c`/`pre`/`preview`→`rc`, `rev`/`r`→`post`). Epoch versions (`N!...`) and local versions (`+local`) are supported; local segments are used only to break ties when the public version is identical.
* **Elm:** Enforces strict SemVer (`MAJOR.MINOR.PATCH` integers only). The Elm package registry does not allow publishing prerelease versions. Dependabot compares versions numerically.
* **Go modules:** Follows SemVer with a mandatory `v` prefix. Pseudo-versions (`v0.0.0-YYYYMMDDHHMMSS-commithash`) represent unreleased commits and are always treated as prerelease. The `+incompatible` suffix marks modules at major version 2+ without a `go.mod` file and does not affect version ordering.
* **git submodule:** Dependabot tracks the latest commit on the configured branch. There is no version comparison—updates always move the pinned SHA forward. If the submodule tracks a tag, Dependabot follows the tag's commit.

* **Bazel:** Follows SemVer prerelease conventions. The Bazel Central Registry (BCR) `.bcr.N` suffix is stripped before comparison and does not affect prerelease detection.


* **Deno:** Follows SemVer prerelease conventions. Build metadata (`+...`) is supported but ignored for version precedence.

* **Bun:** Follows npm-style SemVer prerelease conventions. Build metadata (`+...`) is supported but ignored for version precedence.
* **GitHub Actions:** Dependabot resolves action versions from git tags. Any tag with a SemVer prerelease identifier (anything after `-`) is treated as prerelease. Additionally, releases marked as prerelease via the GitHub Release API are recognized regardless of tag format.

* **Julia:** Follows SemVer prerelease conventions. Prerelease identifiers are case-sensitive (for example, `DEV` and `dev` are distinct).

* **Hex:** Follows SemVer prerelease conventions. Any identifier after `-` is treated as prerelease.

* **Nix:** Dependabot tracks flake input commits, similar to git submodules. Internally, versions are represented as pseudo-versions (`0.0.0-0.N`). There is no traditional version comparison—updates move forward to the latest upstream commit.

* **NuGet:** Follows SemVer 2.0.0 prerelease conventions. Build metadata (`+...`) is supported but ignored for version precedence.

* **OpenTofu:** Follows SemVer prerelease conventions (same as Terraform). Build metadata (including the `+backport` suffix) is stripped before comparison and does not affect prerelease detection.


* **Rust toolchain:** Uses channel-based versioning (`stable`, `beta`, `nightly`) rather than SemVer prerelease identifiers. Dependabot updates the pinned channel or date-stamped nightly (for example, `nightly-2024-01-15`) to the latest available.

* **Terraform:** Follows SemVer prerelease conventions. The `v` prefix is stripped before comparison. Build metadata (`+...`) is ignored for version precedence.
* **Composer:** Follows PHP Composer stability conventions (case-insensitive). Stability flags (`@dev`, `@beta`) in constraints are stripped before comparison. The `v` prefix is handled transparently.

* **Conda:** Follows conda version spec (similar to PEP 440). Epoch versions (`N!...`) and local versions (`+local`) are supported. Post-release (`post`) suffixes are recognized.

* **.NET SDK:** Prerelease identifiers follow the `preview.N`, `rc.N`, `alpha.N` pattern. Prerelease updates require `allowPrerelease: true` in `global.json`.

* **Helm Charts:** Follows SemVer prerelease conventions. Chart version prefixes (for example, `chart-v`) and build digests (`+sha256:...`) are stripped before comparison.


* **pre-commit:** Resolves hook versions from git tags. Prerelease detection uses both Gem::Version heuristic and the GitHub Release API `prerelease` flag. SHA-pinned hooks are also supported.

* **Pub:** Follows SemVer prerelease conventions. Build metadata (`+...`) is supported but ignored for version precedence.
* **Swift:** Follows SemVer prerelease conventions. Prerelease filtering is not currently applied—all versions are treated equally in comparison.

* **vcpkg:** Supports multiple version formats: dot-separated numeric, SemVer (without build metadata), and date-based. Port version suffix (`#N`) indicates packaging revisions and does not affect prerelease detection.



#### Versioning tag glossary

* **`alpha`:** Early version, may be unstable and have incomplete features.
* **`beta`:** More stable than alpha but may still have bugs.
* **`canary`:** Regularly updated pre-release version for testing.
* **`dev`:** Represents development versions.
* **`experimental`:** Versions with experimental features.
* **`latest`:** The latest stable release.
* **`legacy`:** Older or deprecated versions.
* **`next`:** Upcoming release version.
* **`nightly`:** Versions built nightly; often includes the latest changes.
* **`rc`:** Release candidate, close to stable release.
* **`release`:** The official release version.
* **`stable`:** The most reliable, production-ready version.



## Top-level `registries` key

Specify authentication details that Dependabot can use to access private package registries, including registries hosted by GitLab or Bitbucket.



> [!NOTE]
> Private registries behind firewalls on private networks are supported for the following ecosystems:
>
> * Bundler
> * Cargo
> * Docker
> * Gradle
> * Maven
> * Npm
> * NuGet
> * Pub
> * Python
> * Yarn



The value of the `registries` key is an associative array, each element of which consists of a key that identifies a particular registry and a value which is an associative array that specifies the settings required to access that registry. The following `dependabot.yml` file configures a registry identified as `dockerhub` in the `registries` section of the file and then references this in the `updates` section of the file.

{% raw %}

```yaml copy
# Minimal settings to update dependencies stored in one private registry

version: 2
registries:
  dockerhub: # Define access for a private registry
    type: docker-registry
    url: registry.hub.docker.com
    username: octocat
    password: ${{secrets.DOCKERHUB_PASSWORD}}
updates:
  - package-ecosystem: "docker"
    directory: "/docker-registry/dockerhub"
    registries:
      - dockerhub # Allow version updates for dependencies in this registry
    schedule:
      interval: "monthly"
```

{% endraw %}

You use the following options to specify access settings. Registry settings must contain a `type` and a `url`, and typically either a `username` and `password` combination or a `token`.

| Parameters | Purpose |
|:---|:---|
| `REGISTRY_NAME` | **Required:** Defines an identifier for the registry. |
| `type`                     | **Required:** Identifies the type of registry.|
| Authentication details                 | **Required:** The parameters supported for supplying authentication details vary for registries of different types. |
| `url`                      | **Required:** The URL to use to access the dependencies in this registry. The protocol is optional. If not specified, `https://` is assumed. Dependabot adds or ignores trailing slashes as required. |
| `replaces-base`            | If the boolean value is `true`, Dependabot resolves dependencies using the specified `url` rather than the base URL of that ecosystem. |
|  |
| `scope`                    | For `npm-registry` type only. The npm scope to associate with this registry, for example `@my-company`. When `scope` is provided, Dependabot generates the `.npmrc` configuration from the registry credentials, overriding any committed `.npmrc` file or lockfile inference. |
|  |


For in-depth information about available options, as well as recommendations and advice when configuring private registries, see [Configure Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-private-registries).


### `type` and authentication details

The parameters used to provide authentication details for access to a private registry vary according to the registry `type`.



| Registry `type` | Required authentication parameters |
|--|--|
| `cargo-registry` | `token` |
| `composer-repository` | `username` and `password`<br>or OIDC with `tenant-id` and `client-id` |
| `docker-registry` | `username` and `password`<br>or OIDC with `tenant-id` and `client-id` |
| `git` | `username` and `password`<br>or OIDC with `tenant-id` and `client-id` |
| `hex-organization` | `organization` and `key` |
| `hex-repository` | `repo` and `auth-key` optionally with the corresponding `public-key-fingerprint` |
| `maven-repository` | `username` and `password`<br>or OIDC with `tenant-id` and `client-id` |
| `npm-registry` | `username` and `password`<br>or `token`<br>or OIDC with `tenant-id` and `client-id` |
| `nuget-feed` | `username` and `password`<br>or `token`<br>or OIDC with `tenant-id` and `client-id` |
| `pub-registry` | `token` |
| `python-index` | `username` and `password`<br>or `token`<br>or OIDC with `tenant-id` and `client-id` |
| `rubygems-server` | `username` and `password`<br>or `token`<br>or OIDC with `tenant-id` and `client-id` |
| `terraform-registry` | `token` |



All sensitive data used for authentication should be stored securely and referenced from that secure location, see [Configure Access To Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries).

> [!TIP]
> If the account is a GitHub account, you can use a GitHub personal access token in place of the password.




For more information about  OIDC support for Dependabot, see [Openid Connect](https://docs.github.com/en/actions/concepts/security/openid-connect#oidc-support-for-dependabot) and [Configure Access To Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries#using-oidc-for-authentication).



### `url` and `replaces-base`

The `url` parameter defines where to access a registry. When the optional `replaces-base` parameter is enabled (`true`), Dependabot resolves dependencies using the value of `url` rather than the base URL of that specific ecosystem.



### `scope`

The `scope` parameter is available for `npm-registry` type registries. It specifies which npm scope should be associated with the registry. The value must start with `@`, for example `@my-company`. To associate multiple scopes with the same registry URL, create a separate registry entry for each scope.

When `scope` is provided, Dependabot generates the `.npmrc` configuration from your registry credentials. This generated configuration takes precedence over any committed `.npmrc` file or lockfile-based inference.

#### Priority order for npm registry resolution

When determining which registry to use for npm dependencies, Dependabot follows this priority order:

1. **Credential-based generation (`scope` or `replaces-base`):** If `scope` or `replaces-base` is configured on any `npm-registry` credential in `dependabot.yml`, Dependabot generates the `.npmrc` from those credentials. This always takes priority, overriding any committed `.npmrc` file.
1. **Committed `.npmrc` in the repository:** If no `scope` is set, Dependabot uses any `.npmrc` file committed to the repository.
1. **Lockfile inference (transitional):** If there is no `scope` and no committed `.npmrc`, Dependabot attempts to infer registry configuration from the lockfile.
1. **Error generation:** If none of the above methods succeed, Dependabot reports an error with guidance to add explicit configuration.
