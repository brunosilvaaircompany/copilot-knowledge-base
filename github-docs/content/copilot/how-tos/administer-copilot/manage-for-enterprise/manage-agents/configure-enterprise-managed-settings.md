# Configuring enterprise-managed settings

With enterprise managed settings, enterprise owners can centrally define and distribute configuration settings to supported clients for users on your enterprise's Copilot plan, ensuring every member works within the guardrails you define, while letting teams tailor the settings you allow.

The following clients are supported, although not every client supports every property:

* Copilot CLI
* VS Code
* The GitHub Copilot app
* Copilot cloud agent

These settings apply enterprise-wide and enterprises can customize specific keys to enterprise teams. For each supported key, the `managed-settings.json` value takes precedence over any file-based configuration a user sets in their client.

Managed settings are loaded locally when the client starts, even if the device has no network connection. This means controls such as suppressing the `allow-all` permission options and restricting plugin configuration still apply before sign in or any server round trip, and remain active when users switch accounts.

## Defining settings

For detailed information on the available properties and syntax, see [Enterprise Managed Settings Reference](https://docs.github.com/en/copilot/reference/enterprise-managed-settings-reference).

Use `copilot/team-mappings.json` and the `copilot/teams/` directory when you need one or more enterprise teams to use settings that differ from the defaults in `copilot/managed-settings.json`. For more information, see [Configure Enterprise Managed Settings](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings#overriding-settings-for-specific-teams).

## Choosing a deployment method

There are multiple ways to deploy enterprise managed settings. Use the following guidelines to choose the right method for you. For any method, pilot on a small device group before broad deployment.

* **Server-managed**: Default for most enterprises and best for review workflows and audit history. Applies to all clients, including Copilot cloud agent.
* **MDM-managed**: Best when IT teams need device-group targeting through existing MDM tooling on macOS and Windows. Local clients only.
* **File-based**: Available on all platforms, and useful when server-managed and MDM-managed deployment are not available, including developer environments such as containers and Codespaces. Local clients only.

There are additional considerations if you use a dedicated enterprise for Copilot Business. See [Guidance for dedicated Copilot Business enterprises](#guidance-for-dedicated-copilot-business-enterprises).

## Deploying server-managed settings

1. Create and configure your `.github-private` repository. See [Create GitHub Private Repo](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/create-github-private-repo).
1. In the repository, create or update `copilot/managed-settings.json`.
1. Add your enterprise policy keys and values in JSON format.
1. Commit and push your changes to the default branch.
1. Confirm that enterprise users are running a supported client. Updated settings are applied automatically within about an hour, or immediately after the client restarts or the user signs in again.

## Overriding settings for specific teams

For server-managed deployments, use `copilot/team-mappings.json` and the `copilot/teams/` directory when one or more enterprise teams should use settings that differ from your default `copilot/managed-settings.json` values. `enabledPlugins` and `extraKnownMarketplaces` work additively. The enterprise `managed-settings.json` sets a baseline, and an enterprise team file can add more plugins and marketplaces on top of it.

1. In your enterprise's `copilot/managed-settings.json` file, mark each key you want to make eligible for override using the `{ "overridable": <VALUE> }` syntax. The `json` files you map to teams can only send different values for keys you mark overridable. An `overridable` value you provide in `managed-settings.json` is the default when teams files do not declare a different value for a given key. 
For example, to defer both `model` and `disableBypassPermissionsMode`:

    ```json
    {
      "model": { "overridable": "auto" },
      "permissions": {
        "disableBypassPermissionsMode": { "overridable": "disable" }
      }
    }
    ```
   
1. In your enterprise's `.github-private` repository, create `copilot/team-mappings.json`. Map each team settings file to one or more enterprise team slugs. The key is the settings file name and the value is an array of team slugs, so you can apply one file across multiple teams.
    
    ```json
    {
      "devs.json": ["developers-all", "finops-dev"],
      "ai-users.json": ["ai-baseline-trained"],
      "frontier.json": ["ai-pioneers"]
    }
    ```
  
1. Create the team settings file under `copilot/teams/`. Include only the keys you marked as overridable. Every other key stays governed by your enterprise default.

   ```json
   {
     "model": "unmanaged",
     "permissions": {
       "disableBypassPermissionsMode": "unmanaged"
     }
   }
   ```

1. Commit and push your changes to the default branch.

GitHub evaluates enterprise team membership and applies matching settings for each person. If a user belongs to multiple teams, their team files are combined using the least restrictive value for each key, then applied beneath the enterprise settings, where platform decisions always win.

## Deploying MDM-managed settings

1. Create or update your `managed-settings.json` payload using the same JSON schema used for server-managed settings.
1. Deploy the payload using your enterprise MDM platform and standard rollout process.
1. Assign the policy to the target device groups.

    Clients do not need to restart, and check for updated policies on an hourly basis. In VS Code, an administrator can force a check for testing by running the `Developer: Sync Account Policy` command.

1. Confirm the settings took effect. See [Verifying the configuration has applied](#verifying-the-configuration-has-applied).

## Deploying file-based settings

1. Create or update a `managed-settings.json` file with the policy keys and values you want to enforce.
1. Distribute the file to managed machines using your standard device management process. Machines that don't receive the file are not restricted by this policy, so file-based deployment only provides coverage for the machines you actively distribute to.
1. Apply file permissions according to your enterprise security requirements.
1. Ask users to restart supported clients so the updated policy is loaded at startup.
1. Confirm the settings took effect. See [Verifying the configuration has applied](#verifying-the-configuration-has-applied).

## Verifying the configuration has applied

Once the configuration is committed, users on a supported client see the specified settings within about an hour, since clients periodically check the server for updated configuration. For server-managed deployments, this includes `copilot/managed-settings.json`, `copilot/team-mappings.json`, and files in `copilot/teams/`.

 Restarting the client or signing in again applies the latest settings immediately.

If a user does not see these settings, ensure they receive access to Copilot through your enterprise or one of its organizations. If a user receives a license from multiple billing entities, ensure they have selected your enterprise in the "Usage billed to" dropdown in their [personal Copilot settings](https://github.com/settings/copilot/features).

## Guidance for dedicated Copilot Business enterprises

If you have a dedicated enterprise for Copilot Business (sometimes called Copilot Standalone), you can still use enterprise managed settings. The deployment method you choose determines what you need to set up first.

### Using server-managed settings

Server-managed settings require an organization and a `.github-private` repository. To create these, one user in your enterprise needs a GitHub Enterprise license. With that license, the user can:

1. Create an organization and a `.github-private` repository. See [Create GitHub Private Repo](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/create-github-private-repo).
1. Add settings to the repository in a `copilot/managed-settings.json` file.
1. Set that organization as the source of governance for your enterprise's AI standards. See [Create GitHub Private Repo](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/create-github-private-repo#selecting-your-repository-as-your-source-of-governance).

From that point on, any user on your enterprise's Copilot plan using Copilot CLI or VS Code is governed by those settings, whether or not they have access to the `.github-private` repository.

The main limitation of this method is the GitHub Enterprise license requirement to create the organization and repository.

### Using MDM-managed or file-based settings

If you don't want to add a GitHub Enterprise license or create an organization, you can deploy the same settings through MDM (such as Intune or Jamf) or a file-based deployment. These methods use the same JSON schema and don't require an organization or `.github-private` repository. See [Deploying MDM-managed settings](#deploying-mdm-managed-settings) and [Deploying file-based settings](#deploying-file-based-settings). For VS Code-specific guidance, see [Deploy Copilot managed settings](https://code.visualstudio.com/docs/enterprise/ai-settings#_deploy-copilot-managed-settings) in the VS Code documentation.

### Plugin access considerations

Users don't need access to the `.github-private` repository for clients to pull in managed settings. However, if managed settings define a plugin using `enabledPlugins`, the client automatically tries to install it for each user. The user needs access to where the plugin files are hosted. If the plugin is hosted in a private repository on GitHub, the user needs authorization to that repository, which may require a license.
