# Install and configure GitHub Enterprise Importer

## Step 1: Install the GL2GH extension of the GitHub CLI

GitHub Enterprise Importer is a collection of extensions for GitHub CLI. If this is your first migration, you'll need to install GitHub CLI and the GL2GH extension.

1. Install the GitHub CLI.
   * For installation instructions for GitHub CLI, see the [GitHub CLI repository](https://github.com/cli/cli#installation).

   * If you already have GitHub CLI installed, run `gh --version` to ensure you're running version 2.4.0 or newer. If you have an older version, visit the [GitHub CLI repository](https://github.com/cli/cli#installation) for upgrade instructions.
1. Install the GL2GH extension.

   ```shell copy
   gh extension install github/gh-gl2gh
   ```

1. The GL2GH extension of the GitHub CLI is updated frequently. To make sure you're using the latest version, update the extension.


    ```shell copy
    gh extension upgrade github/gh-gl2gh
    ```


## Step 2: Set environment variables

Before you can use the GL2GH extension to migrate to GitHub Enterprise Cloud, you must create personal access tokens that can access the source and destination, then set the personal access tokens as environment variables.

1. Make sure you have your personal access tokens for both GitHub and GitLab ready. See [Manage Access](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrate-from-gitlab/manage-access) if you haven't already created a token.
1. Set environment variables for the personal access tokens, replacing TOKEN in the commands below with the personal access tokens you previously created. Use `GH_PAT` for the destination organization and `GITLAB_PAT` for the source GitLab instance.

   * If you're using Terminal, use the `export` command.

      ```shell copy
      export GH_PAT="TOKEN"
      export GITLAB_PAT="TOKEN"
      ```

   * If you're using PowerShell, use the `$env` command.

      ```shell copy
      $env:GH_PAT="TOKEN"
      $env:GITLAB_PAT="TOKEN"
      ```

1. If you're migrating to GitHub Enterprise Cloud with data residency, for convenience, set an environment variable for the **base API URL** for your enterprise.

   Ensure you replace `SUBDOMAIN` with your enterprise's subdomain. For example, if your enterprise's subdomain is `acme`, the `TARGET_API_URL` value would be `https://api.acme.ghe.com`.

   * If you're using Terminal, use the `export` command.

     ```shell copy
     export TARGET_API_URL="https://api.SUBDOMAIN.ghe.com"
     ```

   * If you're using PowerShell, use the `$env` command.

     ```shell copy
     $env:TARGET_API_URL="https://api.SUBDOMAIN.ghe.com"
     ```

   You'll use this variable with the `--target-api-url` option in commands you run with the GitHub CLI.
