# Optimizing the creation of pull requests for Dependabot version updates

By default, Dependabot opens a new pull request to update each dependency. When you enable security updates, new pull requests are opened when a vulnerable dependency is found. When you configure version updates for one or more ecosystems, new pull requests are opened when new versions of dependencies are available, with the frequency defined in the `dependabot.yml` file.

If your project has many dependencies, you might find that you have a very large number of Dependabot pull requests to review and merge, which can quickly become difficult to manage.

There are a couple of customization options you can implement to optimize Dependabot update pull requests to align with your processes, such as:
* **Controlling the frequency** with which Dependabot checks for newer versions of your dependencies with `schedule`.
* **Prioritize meaningful updates** with `groups`.

## Controlling the frequency and timings of dependency updates

Dependabot runs its checks for version updates at a frequency set by you in the configuration file, where the required field, `schedule.interval`, must be set to `daily`, `weekly`, `monthly`, `quarterly`, `semiannually`, `yearly`, or `cron` (see [`cronjob`](/code-security/reference/supply-chain-security/dependabot-options-reference#cronjob)).

By default, Dependabot balances its workload by assigning a random time to check and raise pull requests for dependency updates.

However, to reduce distraction, or to better organize time and resources for reviewing and addressing version updates, you might find it useful to modify the frequency and timings. For example, you may prefer Dependabot to run weekly rather than daily checks for updates, and at a time that ensures pull requests are raised before for your team's triage session.

### Modifying the frequency and timings for dependency updates

You can use `schedule` with a combination of options to modify the frequency and timings of when Dependabot checks for version updates.

The example `dependabot.yml` file below changes the npm configuration to specify that Dependabot should check for version updates to npm dependencies every Tuesday at 02:00 Japanese Standard Time (UTC +09:00).

```yaml copy
# `dependabot.yml` file with
# customized schedule for version updates

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    # Check the npm registry every week on Tuesday at 02:00 Japan Standard Time (UTC +09:00)
    schedule:
      interval: "weekly"
      day: "tuesday"
      time: "02:00"
      timezone: "Asia/Tokyo"
```

See also [schedule](/code-security/reference/supply-chain-security/dependabot-options-reference#schedule-).



### Setting up a cooldown period for dependency updates

You can use `cooldown` with a combination of options to control when Dependabot creates pull requests for **version updates**, but not **security updates**.

{% ifversion dependabot-cooldown-default-days %}

By default, Dependabot applies a cooldown period of 3 days to version updates, so a new version is not considered for a version update until 3 days after its release. **This default cooldown does not apply to security updates.**




The example `dependabot.yml` file below shows a cooldown period being applied to the dependencies `requests`, `numpy`, and those prefixed with `pandas` or `django`, but not to the dependency called `pandas` (exact match), which is excluded via the **exclude** list.

```yaml copy
version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    cooldown:
      default-days: 5
      semver-major-days: 30
      semver-minor-days: 7
      semver-patch-days: 3
      include:
        - "requests"
        - "numpy"
        - "pandas*"
        - "django"
      exclude:
        - "pandas"
```

* The number of cooldown days must be between 1 and 90.
* The maximum allowed items limit in `include` and `exclude` lists, which can be used with `cooldown`, is 150 each.

> [!NOTE]
> To consider **all dependencies** for a cooldown period, you can:
> * Omit the `include` option which applies cooldown to all dependencies.
> * Use `"*"` in `include` to apply the cooldown settings to everything.
> We recommend the use of `exclude` to **only** exclude **specific dependencies** from cooldown settings.

SemVer is supported for most package managers. Updates to new versions for dependencies in cooldown are deferred as follows:

* Major updates: Delayed by 30 days (`semver-major-days: 30`).
* Minor updates: Delayed by 7 days (`semver-minor-days: 7`).
* Patch updates: Delayed by 3 days (`semver-patch-days: 3`).

See also [`cooldown`](/code-security/reference/supply-chain-security/dependabot-options-reference#cooldown-).

{% endif %}

## Prioritizing meaningful updates

### Grouping related dependencies together

You can use `groups` to consolidate updates for multiple dependencies into a single pull request. This helps you focus your review time on higher risk updates, and minimize the time spent reviewing minor version updates. For example, you can combine updates for minor or patch updates for development dependencies into a single pull request, and have a dedicated group for security or version updates that impact a key area of your codebase.

You must configure groups per individual package ecosystem, then you can create multiple groups per package ecosystem using a combination of criteria:

* Dependabot update type: `applies-to`
* Type of dependency: `dependency-type`.
* Dependency name: `patterns` and `exclude-patterns`
* Semantic versioning levels: `update-types`

To see all supported values for each criterion, see [`groups`](/code-security/reference/supply-chain-security/dependabot-options-reference#groups--).

The below examples present several different methods to create groups of dependencies using the criteria.

### Example 1: Three version update groups

In this example, the `dependabot.yml` file:
* Creates three groups, called "`production-dependencies`", "`development-dependencies`", and "`rubocop`".
* Uses `patterns` and `dependency-type` to include dependencies in the group.
* Uses `exclude-patterns` to exclude a dependency (or multiple dependencies) from the group.

```yaml
version: 2
updates:
  # Keep bundler dependencies up to date
  - package-ecosystem: "bundler"
    directory: "/"
    schedule:
      interval: "weekly"
    groups:
      production-dependencies:
        dependency-type: "production"
      development-dependencies:
        dependency-type: "development"
        exclude-patterns:
          - "rubocop*"
      rubocop:
        patterns:
          - "rubocop*"
```

As a result:
* Version updates are grouped by dependency type.
* Development dependencies matching the pattern `rubocop*` are excluded from the `development-dependencies` group.
* Instead, development dependencies matching `rubocop*` will be included in the `rubocop` group. Due to the ordering, production dependencies matching `rubocop*` will be included in the `production-dependencies` group.
* In addition, all groups default to applying to version updates only, since the `applies-to` key is absent.

### Example 2: Grouped updates with excluded dependencies

In this example, the `dependabot.yml` file:
* Creates a group called "`support-dependencies`," as part of a customized Bundler configuration.
* Uses `patterns` that match with the name of a dependency (or multiple dependencies) to include dependencies in the group.
* Uses `exclude-patterns` that match with the name of a dependency (or multiple dependencies) to exclude dependencies from the group.
* Applies the grouping to version updates only, since `applies-to: version-updates` is used.

```yaml
version: 2
updates:
  # Keep bundler dependencies up to date
  - package-ecosystem: "bundler"
    directories:
      - "/frontend"
      - "/backend"
      - "/admin"

    schedule:
      interval: "weekly"
    # Create a group of dependencies to be updated together in one pull request
    groups:
      # Specify a name for the group, which will be used in pull request titles
      # and branch names
      support-dependencies:
        # Define patterns to include dependencies in the group (based on
        # dependency name)
        applies-to: version-updates # Applies the group rule to version updates
        patterns:
          - "rubocop" # A single dependency name
          - "rspec*"  # A wildcard string that matches multiple dependency names
          - "*"       # A wildcard that matches all dependencies in the package
                      # ecosystem. Note: using "*" may open a large pull request
        # Define patterns to exclude dependencies from the group (based on
        # dependency name)
        exclude-patterns:
          - "gc_ruboconfig"
          - "gocardless-*"
```

As a result:
* The majority of dependencies for bundler are consolidated into the `support-dependencies` group due to the wildcard ("*") pattern, apart from
* Dependencies that match `gc_ruboconfig` and `gocardless-*` are excluded from the group, and Dependabot continues to raise single pull requests for these dependencies. This can be helpful if updates for these dependencies need to be reviewed with closer scrutiny.
* For `support-dependencies`, Dependabot will only raise pull requests for version updates.

### Example 3: Individual pull requests for major updates and grouped for minor/patch updates

In this example, the `dependabot.yml` file:
* Creates a group called "`angular`."
* Uses `patterns` that match with the name of a dependency to include dependencies in the group.
* Uses `update-type` to only include `minor` or `patch` updates in the group.
* Applies the grouping to version updates only, since `applies-to: version-updates` is used.

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    groups:
      # Specify a name for the group, which will be used in pull request titles
      # and branch names
      angular:
        applies-to: version-updates
        patterns:
          - "@angular*"
        update-types:
          - "minor"
          - "patch"
```

As a result:
* Dependabot will create a grouped pull request for all Angular dependencies that have a minor or patch update.
* All major updates will continue to be raised as individual pull requests.

### Example 4: Grouped pull requests for minor/patch updates and no pull requests for major updates

In this example, the `dependabot.yml` file:
* Creates two groups called "`angular`" and "`minor-and-patch`".
* Uses `applies-to` so that the first group applies to version updates only, and the second group applies to security updates only.
* Uses `update-type` to only include `minor` or `patch` updates for both groups.
* Uses an `ignore` condition to exclude updates to `major` versions of `@angular*` packages.

```yaml
version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    groups:
      angular:
        applies-to: version-updates
        patterns:
          - "@angular*"
        update-types:
          - "minor"
          - "patch"
      minor-and-patch:
        applies-to: security-updates
        patterns:
          - "@angular*"
        update-types:
          - "patch"
          - "minor"
    ignore:
      - dependency-name: "@angular*"
        update-types: ["version-update:semver-major"]
```

As a result:
* Minor and patch version updates for Angular dependencies are grouped into a single pull request.
* Minor and patch security updates for Angular dependencies are also grouped together into a single pull request.
* Dependabot won't automatically open pull requests for major updates for Angular.




### Grouping updates across directories in a monorepo

If you manage a monorepo with multiple directories that share common dependencies, you can reduce the number of pull requests for version updates by grouping updates by dependency name across all directories.

When you configure Dependabot to monitor multiple directories and enable grouping by dependency name, Dependabot will:
* Create a single pull request for each dependency update that affects multiple directories
* Update the same dependency to the same version across all directories in one operation
* Reduce the number of pull requests you need to review
* Minimize CI/CD costs by running tests once instead of per directory

For more information, see [`group-by`](/code-security/reference/supply-chain-security/dependabot-options-reference#group-by-groups).

This configuration example groups updates by dependency name across the `/frontend`, `/admin-panel`, and `/mobile-app` directories. If `lodash` needs to be updated in all three directories, Dependabot will create a single pull request named "Bump lodash in monorepo-dependencies group" that updates `lodash` in all three locations.

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directories:
      - "/frontend"
      - "/admin-panel"
      - "/mobile-app"
    schedule:
      interval: "weekly"
    groups:
      monorepo-dependencies:
        group-by: dependency-name
```
