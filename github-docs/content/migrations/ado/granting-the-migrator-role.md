# Granting the migrator role

To allow someone other than an organization owner to run a migration or download migration logs, you can grant the migrator role to a user or team.

To grant the migrator role using the CLI, you can use the ADO2GH extension of the GitHub CLI.

1. Install the GitHub CLI.
   * For installation instructions for GitHub CLI, see the [GitHub CLI repository](https://github.com/cli/cli#installation).

   * If you already have GitHub CLI installed, run `gh --version` to ensure you're running version 2.4.0 or newer. If you have an older version, visit the [GitHub CLI repository](https://github.com/cli/cli#installation) for upgrade instructions.
1. Install the ADO2GH extension.

   ```shell copy
   gh extension install github/gh-ado2gh
   ```

1. The ADO2GH extension of the GitHub CLI is updated weekly. To make sure you're using the latest version, update the extension.


    ```shell copy
    gh extension upgrade github/gh-ado2gh
    ```


1. On GitHub, create and record a personal access token that has the `admin:org` scope.
1. Set the personal access token as an environment variable, replacing TOKEN in the commands below with the personal access token you recorded above.

   * If you're using Terminal, use the `export` command.

      ```shell copy
      export GH_PAT="TOKEN"
      ```

   * If you're using PowerShell, use the `$env` command.

      ```shell copy
      $env:GH_PAT="TOKEN"
      ```

1. Use the `gh ado2gh grant-migrator-role` command, replacing ORGANIZATION with the organization you want to grant the migrator role for, ACTOR with the user or team name, and TYPE with `USER` or `TEAM`.

   ```shell copy
   gh ado2gh grant-migrator-role --github-org ORGANIZATION --actor ACTOR --actor-type TYPE
   ```

   >[!NOTE] If you're granting the migrator role for GHE.com, you must also include the target API URL for your enterprise's subdomain. For example: `--target-api-url https://api.octocorp.ghe.com`.
