# Security configuration enforcement

Security configurations can be enforced at the organization{% ifversion security-configuration-enterprise-level %} or enterprise level to prevent owners from changing the enablement status of configured security features.
Enterprise owners and members with the **admin** role

* At the **organization** level, enforcement means repository owners cannot change the enablement status of features that are enabled or disabled by the configuration.
* At the **enterprise** level,  you can enforce for repository owners only, or for both repository and organization owners. When enforcement applies to both, neither repository owners nor organization owners can change the enablement status of features that are enabled or disabled by the configuration.
{% else %}

Security configurations can be enforced, meaning repository owners cannot change the enablement status of features that are enabled or disabled by the configuration.

{% endif %}

## Situations that break enforcement

Some situations can break the enforcement of security configurations. For example, the enablement of code scanning will not apply to a repository if:
* GitHub Actions is initially enabled on the repository, but is then disabled in the repository.
* GitHub Actions required by code scanning configurations are not available in the repository.
* Self-hosted runners with the label `code-scanning` are not available.
* The definition for which languages should not be analyzed using code scanning default setup is changed.

## Enforcement and the REST API

If a user in your organization or enterprise attempts to change the enablement status of a feature in an enforced configuration using the REST API, the API call will appear to succeed, but no enablement statuses will change.
