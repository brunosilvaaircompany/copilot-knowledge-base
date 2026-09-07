# Overriding enterprise-managed settings for teams

With a server-managed deployment, you can configure your enterprise's `managed-settings.json` file to apply different governance settings to groups of users based on their enterprise team membership. The enterprise defines all settings in a central place, and team membership determines which users receive a given set of values. **If you haven't created the `managed-settings.json` file yet, see [Get Started](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started).**

To make a key eligible for team overrides, you will mark it as `overridable` in `managed-settings.json`. An overridable key uses the team's value when set, or falls back to your enterprise default when the team leaves it unset.

## Supported keys

The `{ "overridable": <VALUE> }` syntax applies to the `model`, `permissions.disableBypassPermissionsMode`, `permissions.deny`, `permissions.ask`, `permissions.allow`, `allowedMcpServers`, and `deniedMcpServers` keys.

`enabledPlugins` and `extraKnownMarketplaces` work additively. The enterprise `managed-settings.json` sets a baseline, and an enterprise team file can add more plugins and marketplaces on top of it.

For a full description of these keys and their syntax, see [Enterprise Managed Settings](https://docs.github.com/en/copilot/reference/enterprise-administrators/enterprise-managed-settings).

## Overriding settings for specific teams

These instructions apply to **server-managed deployments** (a `managed-settings.json` hosted on GitHub). Other deployment methods do not support enterprise team overrides, and would require you to deploy different settings to different groups of users via your MDM platform.

You will use `copilot/team-mappings.json` and the `copilot/teams/` directory to configure which enterprise teams should use settings that differ from your default `copilot/managed-settings.json` values.

After you complete this section, your `.github-private` repository will have the following structure:

* **`.github-private/`**
  * **`copilot/`**
    * **`managed-settings.json`**: `{ "model": { "overridable": "auto" } }`
    * **`team-mappings.json`**: `{ "no-auto.json": ["special-team"] }`
    * **`teams/`**
      * **`no-auto.json`**: `{ "model": "unmanaged" }`


## Steps

1. In your enterprise's `copilot/managed-settings.json` file, mark each key you want to make eligible for override using the `{ "overridable": <VALUE> }` syntax. The `json` files you map to teams can only send different values for keys you mark overridable.

   An `overridable` value you provide in `managed-settings.json` is the default when team files do not declare a different value for a given key.
   
   For example, to defer `model`, `disableBypassPermissionsMode`, and `allowedMcpServers` to teams:

    ```json
    {
      "model": { "overridable": "auto" },
      "permissions": {
        "disableBypassPermissionsMode": { "overridable": "disable" }
      },
      "allowedMcpServers": {
        "overridable": [
          { "serverUrl": "https://mcp.company.com/*" }
        ]
      }
    }
    ```

1. In your enterprise's `.github-private` repository, create `copilot/team-mappings.json`. Map each team settings file to one or more enterprise team slugs. The key is the settings file name, and the value is an array of team slugs, so you can apply one file across multiple teams.

    ```json
    {
      "devs.json": ["developers-all", "finops-dev"],
      "ai-users.json": ["ai-baseline-trained"],
      "frontier.json": ["ai-pioneers"]
    }
    ```

1. Create the team settings file under `copilot/teams/`. You can include any keys you marked as overridable, plus the additive keys `enabledPlugins` and `extraKnownMarketplaces`. Every other key stays governed by your enterprise default.

   ```json
   {
     "model": "unmanaged",
     "permissions": {
       "disableBypassPermissionsMode": "unmanaged"
     },
     "allowedMcpServers": [
       { "serverUrl": "https://team-specific-mcp.company.com/*" }
     ]
   }
   ```

1. Commit and push your changes to the default branch.

GitHub evaluates enterprise team membership and applies matching settings for each person. If a user belongs to multiple teams, their team files are combined using the least restrictive value for each key, then applied beneath the enterprise settings, where platform decisions always win.
