# Default setup for code scanning overrides advanced setup

## About the problem

When you apply a security configuration and code scanning is defined as "Enabled with advanced setup allowed", each repository is checked to see if there is an existing, active, advanced setup.

* **No change to code scanning** if an **active** advanced setup configuration is detected.
* **Default setup is enabled** for repositories where advanced setup is **inactive or absent**.

### Inactive or absent advanced setup

Advanced setup is considered **inactive** for a repository if the repository meets any of the following criteria:

* The latest CodeQL analysis is more than 90 days old.
* All CodeQL configurations have been deleted.
* The workflow file has been deleted or disabled (exclusively for advanced setup run using actions).


## Solving the problem

This solution has two parts:

1. Any repositories where default setup for code scanning was unexpectedly applied need to run CodeQL analysis at intervals of less than 90 days, for example, once a month.

   Even if the repository is not under active development, new vulnerabilities may be identified by updates to CodeQL analysis.

1. Once the affected repositories all have CodeQL analysis running, you can reapply the security configuration.
