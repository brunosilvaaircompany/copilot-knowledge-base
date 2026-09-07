# About enterprise-managed plugin standards

Enterprise-managed plugin standards allow administrators to **define and enforce policies for plugin availability**. By configuring a `managed-settings.json` file, administrators can specify which plugin marketplaces are available to users and which plugins are installed automatically.

## Where plugin standards apply

Plugin standards apply to all users on the enterprise's Copilot plan, across supported clients. See [Enterprise Managed Settings](https://docs.github.com/en/copilot/reference/enterprise-administrators/enterprise-managed-settings#supported-keys).

Users must upgrade to a supported client version for these standards to be applied.

## How plugin standards work

For plugin standards, the `managed-settings.json` file can define:

* **Known marketplaces**. Plugin marketplaces that are available to users for browsing and installing plugins.
* **Default-enabled plugins**. Specific plugins that are automatically installed when users authenticate.

When a user authenticates to Copilot in a supported client, the client queries the `managed-settings.json` file. The policies defined in the file are then applied to the user's session.

## Why use enterprise-managed plugin standards

Enterprise-managed plugin standards help administrators address several common challenges:

* **Consistency across clients**. Ensure that all developers have access to the same plugins and marketplaces.
* **Centralized governance**. Manage plugin availability from a single configuration file, rather than relying on individual developers to install the correct plugins.
* **Version-controlled policies**. Because the configuration lives in a Git repository, all changes to plugin standards are tracked, auditable, and reviewable through pull requests.
* **Reduced onboarding friction**. New developers automatically receive the enterprise's standard plugins when they authenticate, without any manual setup.

## Next step

To configure enterprise plugin standards, see [Configure Enterprise Managed Settings](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings).
