# Custom properties

## What are custom properties?

Custom properties are structured metadata fields that you can attach to repositories or organizations in your GitHub Enterprise Server instance. They allow you to decorate your repositories or organizations with information such as compliance frameworks, data sensitivity, or project details.

An enterprise can have up to 100 property definitions. An allowed value list can have up to 200 items.

There are two types of custom properties:

* **Repository custom properties**: Metadata attached to individual repositories.
* **Organization custom properties**: Metadata attached to organizations within an enterprise.

> [!NOTE]
> For GitHub Enterprise Server, this feature will only be available from version 3.21.


## What are the benefits of using custom properties?

As well as providing improved discovery, automated workflows, compliance tracking, targeted policy enforcement, and better reporting capabilities, custom properties enable powerful governance through **ruleset integration**.

Both repository and organization custom properties can be used as targeting criteria for rulesets, enabling fine-grained policy enforcement based on metadata.

* For repository custom rules, see [Creating Rulesets For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization#targeting-repositories-by-properties-in-your-organization) and [Managing Custom Properties For Repositories In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/managing-custom-properties-for-repositories-in-your-enterprise).
* For organization custom rules, see [Managing Policies For Code Governance](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/managing-policies-for-code-governance).

## How do I add and manage custom properties?



Custom properties are fully supported through GitHub's REST API, enabling programmatic management and integration with external systems. See [Custom Properties](https://docs.github.com/en/rest/enterprise-admin/custom-properties).



You can add custom properties through GitHub's UI. See [Managing Custom Properties For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization) and [Managing Custom Properties For Organizations](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/managing-custom-properties-for-organizations).
