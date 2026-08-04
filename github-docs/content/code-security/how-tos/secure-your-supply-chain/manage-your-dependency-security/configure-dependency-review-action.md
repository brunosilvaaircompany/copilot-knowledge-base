# Configuring the dependency review action

The "dependency review action" refers to the specific action that can report on differences in a pull request within the GitHub Actions context. It can also add enforcement mechanisms to the GitHub Actions workflow. For more information, see [Dependency Review](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review#about-the-dependency-review-action).



> [!NOTE]
> On GHE.com, dependency insights and license and package metadata in the dependency graph are not currently available. The dependency graph itself remains available at the repository level. See [Feature Overview For GitHub Enterprise Cloud With Data Residency](https://docs.github.com/en/admin/data-residency/feature-overview-for-github-enterprise-cloud-with-data-residency#currently-unavailable-features).





For a list of common configuration options, see [Dependency review](https://github.com/marketplace/actions/dependency-review#configuration-options) on the GitHub Marketplace.
 
## Configuring the dependency review action

There are two methods of configuring the dependency review action:
* Inlining the configuration options in your workflow file.
* Referencing a configuration file in your workflow file.

Notice that all of the examples use a short version number for the action (`v3`) instead of a semver release number (for example, `v3.0.8`). This ensures that you use the most recent minor version of the action.

### Using inline configuration to set up the dependency review action

1. Add a new YAML workflow to your `.github/workflows` folder.

   For `runs-on`, the default label is `self-hosted`. You can replace the default label with the label of any of your runners.

   ```yaml copy
   name: 'Dependency Review'
   on: [pull_request]

   permissions:
     contents: read

   jobs:
     dependency-review:
       runs-on: [self-hosted]
       steps:
        - name: 'Checkout Repository'
          uses: actions/checkout@v6

        - name: Dependency Review
          uses: actions/dependency-review-action@v4
   ```

1. Specify your settings.

   This dependency review action example file illustrates how you can use the available configuration options.

   

   ```yaml copy
   name: 'Dependency Review'
   on: [pull_request]

   permissions:
     contents: read

   jobs:
     dependency-review:
       runs-on: [self-hosted]
       steps:
       - name: 'Checkout Repository'
         uses: actions/checkout@v6

       - name: Dependency Review
         uses: actions/dependency-review-action@v4
         with:
           # Possible values: "critical", "high", "moderate", "low"
           fail-on-severity: critical

           
           # You can only include one of these two options: `allow-licenses` and `deny-licenses`
           # ([String]). Only allow these licenses (optional)
           # Possible values: Any SPDX-compliant license identifiers or expressions from https://spdx.org/licenses/
           allow-licenses: GPL-3.0, BSD-3-Clause, MIT
           # ([String]). Block the pull request on these licenses (optional)
           # Possible values: Any SPDX-compliant license identifiers or expressions from https://spdx.org/licenses/
           deny-licenses: LGPL-2.0, BSD-2-Clause
           
           # ([String]). Skip these GitHub Advisory Database IDs during detection (optional)
           # Possible values: Any valid GitHub Advisory Database ID from https://github.com/advisories
           allow-ghsas: GHSA-abcd-1234-5679, GHSA-efgh-1234-5679
           # ([String]). Block pull requests that introduce vulnerabilities in the scopes that match this list (optional)
           # Possible values: "development", "runtime", "unknown"
           fail-on-scopes: development, runtime
   ```

   

### Using a configuration file to set up dependency review action

1. Add a new YAML workflow to your `.github/workflows` folder and use `config-file` to specify that you are using a configuration file.

   For `runs-on`, the default label is `self-hosted`. You can replace the default label with the label of any of your runners.

   ```yaml copy
   name: 'Dependency Review'
   on: [pull_request]

   permissions:
    contents: read

   jobs:
     dependency-review:
       runs-on: [self-hosted]
       steps:
       - name: 'Checkout Repository'
         uses: actions/checkout@v6

       - name: Dependency Review
         uses: actions/dependency-review-action@v4
         with:
          # ([String]). Representing a path to a configuration file local to the repository or in an external repository.
          # Possible values: An absolute path to a local file or an external file.
          config-file: './.github/dependency-review-config.yml'
          # Optional alternative syntax for an external file: OWNER/REPOSITORY/FILENAME@BRANCH (uncomment if preferred)
          # config-file: 'github/octorepo/dependency-review-config.yml@main'

          # ([Token]) Use if your configuration file resides in a private external repository.
          # Possible values: Any GitHub token with read access to the private external repository.
          external-repo-token: 'ghp_123456789abcde'
   ```

1. Create the configuration file in the path you have specified.

   This YAML example file illustrates how you can use the available configuration options.

   

   ```yaml copy
     # Possible values: "critical", "high", "moderate", "low"
     fail-on-severity: critical
   
     # You can only include one of these two options: `allow-licenses` and `deny-licenses`
     # ([String]). Only allow these licenses (optional)
     # Possible values: Any SPDX-compliant license identifiers or expressions from https://spdx.org/licenses/
     allow-licenses:
       - GPL-3.0
       - BSD-3-Clause
       - MIT
      # ([String]). Block the pull request on these licenses (optional)
      # Possible values: Any SPDX-compliant license identifiers or expressions from https://spdx.org/licenses/
     deny-licenses:
       - LGPL-2.0
       - BSD-2-Clause
   
      # ([String]). Skip these GitHub Advisory Database IDs during detection (optional)
      # Possible values: Any valid GitHub Advisory Database ID from https://github.com/advisories
     allow-ghsas:
       - GHSA-abcd-1234-5679
       - GHSA-efgh-1234-5679
      # ([String]). Block pull requests that introduce vulnerabilities in the scopes that match this list (optional)
      # Possible values: "development", "runtime", "unknown"
     fail-on-scopes:
       - development
       - runtime
   ```

   

For further details about the configuration options, see [`dependency-review-action`](https://github.com/actions/dependency-review-action#readme).

## Further reading

* [Customize Dependency Review Action](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/customize-dependency-review-action)
