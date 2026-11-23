# Overriding enterprise-managed settings for enterprise teams

With a server-managed deployment, you can configure your enterprise's `managed-settings.json` file to apply different governance settings to groups of users based on their enterprise team membership. The enterprise defines all settings in a central place, and enterprise team membership determines which users receive a given set of values. **If you haven't created the `managed-settings.json` file yet, see [Get Started](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started).**

To let enterprise teams replace an enterprise default, mark the key as `overridable` in `managed-settings.json`. An overridable key uses the enterprise team's value when set, or falls back to your enterprise default when the enterprise team leaves it unset.

## Supported keys

The `{ "overridable": <VALUE> }` syntax applies to the `model`, `autoTier`,`fusionTier`, `permissions.disableBypassPermissionsMode`, `permissions.deny`, `permissions.ask`, `permissions.allow`, `allowedMcpServers`, `deniedMcpServers`, `extraKnownMarketplaces`, `strictKnownMarketplaces`, `strictPluginOnlyCustomization`, and `sandbox` keys.

`enabledPlugins` works additively. The enterprise `managed-settings.json` sets a baseline, and an enterprise team file can add more plugins on top of it.

For a full description of these keys and their syntax, see [Enterprise Managed Settings](https://docs.github.com/en/copilot/reference/enterprise-administrators/enterprise-managed-settings).

## Overriding settings for specific enterprise teams

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

1. In your enterprise's `copilot/managed-settings.json` file, mark each key you want to make eligible for override using the `{ "overridable": <VALUE> }` syntax. The `json` files you map to enterprise teams can only send different values for keys you mark overridable.

   An `overridable` value you provide in `managed-settings.json` is the default when enterprise team files do not declare a different value for a given key.
   
   For example, to defer `model`, `disableBypassPermissionsMode`, and `allowedMcpServers` to enterprise teams:

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

1. In your enterprise's `.github-private` repository, create `copilot/team-mappings.json`. Map each enterprise team settings file to one or more enterprise team slugs. The key is the settings file name, and the value is an array of enterprise team slugs, so you can apply one file across multiple enterprise teams.

    ```json
    {
      "devs.json": ["developers-all", "finops-dev"],
      "ai-users.json": ["ai-baseline-trained"],
      "frontier.json": ["ai-pioneers"]
    }
    ```

1. Create the enterprise team settings file under `copilot/teams/`. You can include any keys you marked as overridable, more restrictive values for `autoTier`, plus the additive key `enabledPlugins`. Every other key stays governed by your enterprise default.

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

GitHub evaluates enterprise team membership and applies matching settings for each person. If a user belongs to multiple enterprise teams, their enterprise team files are combined using the least restrictive value for most keys, then applied beneath the enterprise settings, where platform decisions always win.

For `strictPluginOnlyCustomization`, restrictions from matching enterprise teams are combined instead. A category restricted by any matching team stays restricted.

## Allow an MCP-development team to use standalone servers

You can keep most developers on plugin-provided MCP servers while allowing an enterprise team to develop and test standalone MCP configurations. Use an overridable enterprise default and a team setting that removes only the `mcp` restriction.

This example keeps standalone executable extensions restricted for everyone. It does not change marketplace restrictions, MCP enablement, server allowlists and denylists, or stricter managed-only policies. Device-managed restrictions also remain in effect.

1. Create an enterprise team for MCP developers. In this example, its slug is `mcp-developers`. Add the people who need to develop and test MCP servers to this team.
1. In `copilot/managed-settings.json`, make the source restriction overridable:

   ```json
   {
     "strictPluginOnlyCustomization": {
       "overridable": ["mcp", "extensions"]
     }
   }
   ```

   Preserve your other managed settings, including the marketplace restrictions that define approved plugin sources. Keep any additional categories you already restrict in both the enterprise default and the team value below.

1. In `copilot/team-mappings.json`, map a settings file to the enterprise team:

   ```json
   {
     "mcp-development.json": ["mcp-developers"]
   }
   ```

   Keep any existing mappings. Replace `mcp-developers` with your enterprise team's slug.

1. Create `copilot/teams/mcp-development.json` with the replacement value:

   ```json
   {
     "strictPluginOnlyCustomization": ["extensions"]
   }
   ```

   The team value replaces the entire overridable default. Include every category that should remain restricted. Setting the value to `false` removes all restrictions from this key at this layer.

1. Commit and push the files, then verify the effective behavior in supported clients for a team member and a non-member:

   * Confirm that the team member can use standalone MCP configurations if other policies permit them.
   * Confirm that the non-member cannot use the same standalone MCP configurations.
   * Confirm that standalone executable extensions remain blocked for both users.

   A user without an applicable replacement retains the enterprise default.

If a developer also belongs to a team whose settings restrict `mcp`, that restriction still applies. To permit standalone MCP development, ensure that no other applicable team or managed policy imposes the restriction.
