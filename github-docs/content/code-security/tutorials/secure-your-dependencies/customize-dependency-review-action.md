# Customizing your dependency review action configuration

## Introduction

The dependency review action scans your pull requests for dependency changes and raises an error if any new dependencies have known vulnerabilities. Once installed, if the workflow run is marked as required, pull requests introducing known vulnerable packages will be blocked from merging.

This guide shows you how to add three very common customizations: failing builds based on vulnerability severity level, dependency license, and scope.

### Prerequisites

This guide assumes that:

* Dependency graph is enabled for the repository. For more information, see [Enable Dependency Graph](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/enable-dependency-graph#enabling-the-dependency-graph-for-a-repository).
* GitHub Actions is enabled for the repository. For more information, see [Managing GitHub Actions Settings For A Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository).

## Step 1: Adding the dependency review action

In this step, we'll add the dependency review workflow to your repository.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**.

   ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](/assets/images/help/repository/actions-tab-global-nav-update.png)

1. Under "Get started with GitHub Actions", find the "Security" category, then click **View all**.
1. Find "Dependency review", then click **Configure**. Alternatively, search for "Dependency review" using the search bar.
1. This will open dependency review’s GitHub Actions workflow file, `dependency-review.yml`. It should contain the following:

   ```yaml copy
   name: 'Dependency review'
   on:
     pull_request:
       branches: [ "main" ]

   permissions:
     contents: read

   jobs:
     dependency-review:
       runs-on: ubuntu-latest
       steps:
         - name: 'Checkout repository'
           uses: actions/checkout@v6

         - name: 'Dependency Review'
           uses: actions/dependency-review-action@v4
   ```

## Step 2: Changing the severity

You can block code containing vulnerable dependencies from ever being merged by setting the dependency review action to required. However, it's worth noting that blocking low-risk vulnerabilities may be too restrictive in some circumstances. In this step, we will change the severity of vulnerability that will cause a build to fail with the `fail-on-severity` option.

1. Add the `fail-on-severity` option to the end of the `dependency-review.yml` file:

   ```yaml copy
         - name: 'Dependency Review'
           uses: actions/dependency-review-action@v4
           with:
             fail-on-severity: moderate
   ```

## Step 3: Adding licenses to block

Vulnerabilities aren’t the only reason you might want to block a dependency. If your organization has restrictions on what sorts of licenses you can use, you can use dependency review to enforce those policies with the `deny-licenses` option. In this step, we will add a customization that will break the build if the pull request introduces a dependency that contains the LGPL-2.0 or BSD-2-Clause license.

1. Add the `deny-licenses` option to the end of the `dependency-review.yml` file:

   ```yaml copy
         - name: 'Dependency Review'
           uses: actions/dependency-review-action@v4
           with:
             fail-on-severity: moderate
             deny-licenses: LGPL-2.0, BSD-2-Clause
   ```

## Step 4: Adding scopes

Finally, we'll use the `fail-on-scopes` option to prevent merging vulnerable dependencies to specific deployment environments, in this case the development environment.

1. Add the `fail-on-scopes` option to the end of the `dependency-review.yml` file:

   ```yaml copy
         - name: 'Dependency Review'
           uses: actions/dependency-review-action@v4
           with:
             fail-on-severity: moderate
             deny-licenses: LGPL-2.0, BSD-2-Clause
             fail-on-scopes: development
   ```

## Step 5: Check the configuration

The `dependency-review.yml` file should now look like this:

```yaml copy

name: 'Dependency Review'
on: [pull_request]



permissions:
  contents: read



jobs:
  dependency-review:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout Repository'
        uses: actions/checkout@v6

      - name: Dependency Review
        uses: actions/dependency-review-action@v4
        with:
          fail-on-severity: moderate
          deny-licenses: LGPL-2.0, BSD-2-Clause
          fail-on-scopes: development
```

You can use this configuration as a template for your own custom configurations.

For more information on all the possible customization options, see the [README](https://github.com/actions/dependency-review-action/blob/main/README.md#configuration) in the dependency review action documentation.

## Best practices

When customizing your dependency review configuration, there are some best practices you can follow:

* Choose block lists over allow lists. It is more practical to compile a list of the "really bad" dependencies you want to block than to create an inclusive list of all the libraries you want to allow.

* Choose to block licenses instead of specifying which licenses to allow. There are a wide variety of licenses out there, so it's usually more practical to exclude those you know are incompatible with current licenses than it is to compile a complete list of compatible licenses.

* Choose `fail-on-severity`. Failing based on the severity of a vulnerability is a good way to balance the need for security with the need to create low-friction experiences for developers.

## Further reading

* [Configure Dependency Review Action](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-dependency-review-action)
* [Enforce Dependency Review](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/enforce-dependency-review)
