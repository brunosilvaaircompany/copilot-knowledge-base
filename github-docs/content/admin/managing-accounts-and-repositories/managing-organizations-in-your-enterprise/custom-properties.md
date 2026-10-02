# Custom properties

## What are custom properties?

Custom properties are structured metadata fields that you can attach to repositories or organizations in your GitHub Enterprise Server instance. They allow you to decorate your repositories or organizations with information such as compliance frameworks, data sensitivity, or project details.

There are two types of custom properties:

* **Repository custom properties**: Metadata attached to individual repositories.
* **Organization custom properties**: Metadata attached to organizations within an enterprise.

## What are the benefits of using custom properties?

As well as providing improved discovery, automated workflows, compliance tracking, targeted policy enforcement, and better reporting capabilities, custom properties enable powerful governance through **ruleset integration**.

Both repository and organization custom properties can be used as targeting criteria for rulesets, enabling fine-grained policy enforcement based on metadata.

* For repository custom rules, see [Creating Rulesets For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization#targeting-repositories-by-properties-in-your-organization) and [Managing Custom Properties For Repositories In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/managing-custom-properties-for-repositories-in-your-enterprise).
* For organization custom rules, see [Managing Policies For Code Governance](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/managing-policies-for-code-governance).

## How do I add and manage custom properties?

There are multiple ways to manage custom properties. To manage properties within GitHub, you can use:

* Your organization or enterprise settings. See [Managing Custom Properties For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization) and [Managing Custom Properties For Organizations](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/managing-custom-properties-for-organizations).
* GitHub's [Custom Properties](https://docs.github.com/en/rest/enterprise-admin/custom-properties).



You can also set up an integration to automatically update custom properties with metadata from an external system, such as a software catalog or internal developer portal. External properties can be used in the same places as standard repository custom properties. See [Sync External Custom Properties](https://docs.github.com/en/organizations/managing-organization-settings/sync-external-custom-properties)

Both standard custom properties and external properties can be managed at scale with the REST API and GitHub Apps. External properties are more suitable when the external system should be the source of truth, because they are:

* Namespaced (`external_system.property_name`), so their provenance is clear and they don't conflict with other custom properties in the organization.
* Read-only on GitHub, so users cannot edit them and bring them out of line with the external system.

External properties are **not** available for organization custom properties (metadata attached to organizations).
