# Security configuration enforcement

Security configurations can be enforced, meaning repository owners cannot change the enablement status of features that are enabled or disabled by the configuration.

## Situations that break enforcement

Some situations can break the enforcement of security configurations. For example, the enablement of code scanning will not apply to a repository if:
* GitHub Actions is initially enabled on the repository, but is then disabled in the repository.
* GitHub Actions required by code scanning configurations are not available in the repository.
* Self-hosted runners with the label `code-scanning` are not available.
* The definition for which languages should not be analyzed using code scanning default setup is changed.

## Enforcement and the REST API

If a user in your organization or enterprise attempts to change the enablement status of a feature in an enforced configuration using the REST API, the API call will appear to succeed, but no enablement statuses will change.
