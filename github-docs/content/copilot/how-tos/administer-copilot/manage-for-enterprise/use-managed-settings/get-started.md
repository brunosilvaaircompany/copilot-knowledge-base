# Getting started with enterprise-managed settings

With enterprise managed settings, you can centrally define and distribute configuration settings for GitHub Copilot to supported clients. This ensures everyone works within the guardrails you define, with the option to specialize settings for different teams. For example, you can block agents from performing sensitive operations, install approved agent plugins, or ensure that sessions run in a sandbox.

This guide walks through creating the `managed-settings.json` file on GitHub, rolling out the settings to users, and overriding specific settings for enterprise teams. As a low-friction example, we'll ensure new conversations start in auto model mode for most users, and override this setting for a specific enterprise team. This example will allow you to test the managed settings deployment without causing disruption to users.

> [!NOTE] If you use a dedicated enterprise for Copilot Business, there is additional guidance to consider. See [Copilot Business Only](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/copilot-business-only).

## Supported clients

The following clients are supported, although not every client supports every property:

* Copilot CLI
* VS Code
* The GitHub Copilot app
* Copilot cloud agent
* JetBrains IDEs

For a full reference of supported keys, see [Enterprise Managed Settings](https://docs.github.com/en/copilot/reference/enterprise-administrators/enterprise-managed-settings).

## 1. Create a `.github-private` repository

You can host the `managed-settings.json` file in a `.github-private` repository owned by a designated organization in your enterprise. This allows you to keep your managed settings next to your custom agent profiles, in a place that members of the enterprise can view.

For instructions on **creating the repository and selecting it as your enterprise's source of client governance**, see [Create GitHub Private Repo](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/create-github-private-repo).

The governance settings in this repository apply to all users who receive a Copilot license from your enterprise or any of its organizations, regardless of whether the user has access to the `.github-private` repository or the organization that owns it. We recommend giving the repository internal visibility, so that enterprise members can view the governance settings, and restricting edits of the `managed-settings.json` file to administrators and AI managers.

> [!TIP] This is called a "server-managed" deployment. There are other methods of distributing managed settings to users, including mobile device management (MDM) and local file delivery. For more information, see [Deploy Managed Settings](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/deploy-managed-settings).

## 2. Create the `managed-settings.json` file

In this example, we're using a very simple configuration that ensures users' conversations start in auto mode. This means Copilot will automatically choose the best model for a user's task from your enterprise's allowed models, which reduces rate limiting issues for users.

1. In the `.github-private` repository, create a file at `copilot/managed-settings.json`.
1. Add configuration to the file. For example:

   ``` json copy
   {
     "model": "auto"
   }
   ```

1. Commit your changes to the default branch.

For a real rollout, **check the supported keys and their coverage across clients**. See [Enterprise Managed Settings](https://docs.github.com/en/copilot/reference/enterprise-administrators/enterprise-managed-settings).

## 3. Override the setting for specific teams

You can override supported properties of the `managed-settings.json` file for enterprise teams. In this example, we'll disable the auto model default for a team that needs to stick to specific models for specialized work.

After you complete this section, your `.github-private` repository will have the following structure:

* **`.github-private/`**
  * **`copilot/`**
    * **`managed-settings.json`**: `{ "model": { "overridable": "auto" } }`
    * **`team-mappings.json`**: `{ "no-auto.json": ["special-team"] }`
    * **`teams/`**
      * **`no-auto.json`**: `{ "model": "unmanaged" }`


### Steps

1. Create an enterprise team containing users who should not receive the auto mode default. In this example, we'll call it `special-team`. See [Create Enterprise Teams](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams).
1. In your `copilot/managed-settings.json` file, mark the key as eligible for override using the `{ "overridable": VALUE }` syntax. The `VALUE` is the default when teams files do not declare a different value for a given key.

   For example, we will make `model` overridable for enterprise teams, with `auto` remaining the default for everyone else:

   ```json copy
   {
     "model": { "overridable": "auto" }
   }
   ```

1. In your `.github-private` repository, create a dedicated settings file for the enterprise team under `copilot/teams/`. For example: `copilot/teams/no-auto.json`.
   
   In this file, add configuration that provides values for overridable properties.

   The following example removes the control on auto model mode. Everything else remains governed by your `managed-settings.json` file.

   ```json copy
   {
     "model": "unmanaged"
   }
   ```

1. In your `.github-private` repository, create `copilot/team-mappings.json`. In this file, map the name of the enterprise team to its special configuration file. The key is the settings file name, and the value is an array of team slugs, so you can apply one file across multiple teams.

    ```json copy
    {
      "no-auto.json": ["special-team"]
    }
    ```

1. Commit and push your changes to the default branch.

Later, you can add different overrides for other keys and other teams. **For a more complete example**, see [Override Settings For Teams](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/override-settings-for-teams).

## 4. Check the settings are active

Check that the settings you defined are active for users and overridden for specific teams. In this example, most of your enterprise's Copilot users should find that new conversations in their client start in auto mode. The `special-team` enterprise team should not have this experience.

For server-managed deployments, users on a supported client see the specified settings within about an hour. This includes `copilot/managed-settings.json`, `copilot/team-mappings.json`, and files in `copilot/teams/`. Restarting the client or signing in again triggers an immediate refresh.

If a user does not see these settings, ensure they receive access to Copilot through your enterprise or one of its organizations. If a user receives a license from multiple billing entities, ensure they have selected your enterprise in the "Usage billed to" dropdown in their [personal Copilot settings](https://github.com/settings/copilot/features).

For MDM-managed deployments, clients check for updated policies hourly. For file-based deployments, restart the client to load an updated file. These deployment methods apply to all users with the settings installed on their machine, regardless of where their Copilot license comes from.

## Next step

Now you've created a simple managed settings setup, you can:

* Add additional governance properties to the file. See [Enterprise Managed Settings](https://docs.github.com/en/copilot/reference/enterprise-administrators/enterprise-managed-settings).
* Decide whether to deploy settings to users through other methods. See [Deploy Managed Settings](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/deploy-managed-settings).
