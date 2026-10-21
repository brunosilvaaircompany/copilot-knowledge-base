# Authenticating with GitHub CLI

## About authentication in GitHub CLI

Most GitHub CLI commands act on your behalf on GitHub, so you need to authenticate before you can use them. GitHub CLI supports several ways to authenticate, depending on whether you are working interactively at your computer or running commands in a script or an automated environment.

* For interactive use, sign in once with `gh auth login` and GitHub CLI stores your credentials for you.
* For scripts and automation, provide a token through an environment variable.
* For workflows, use the token that GitHub Actions provides.

You can also opt in to expiring credentials that refresh automatically, which reduce the risk of a leaked token.

## Signing in interactively

1. To authenticate at your computer, run the following command from your terminal.

   ```shell
   gh auth login
   ```

1. Follow the on-screen prompts to finish signing in. When asked where you use GitHub:

   * If you use GitHub.com, select **GitHub.com**.
   * If you use a different host, select **Other**, then enter your hostname, for example `octocorp.ghe.com`.

By default, GitHub CLI stores your credentials in your operating system's keyring where one is available, and otherwise in a plain text configuration file. You do not need to manage this file yourself.

## Authenticating with an environment variable

For scripts and other non-interactive uses, you can provide a token through an environment variable instead of signing in. Set `GH_TOKEN` for GitHub.com and GitHub Enterprise Cloud, or `GH_ENTERPRISE_TOKEN` for GitHub Enterprise Server.

```shell
GH_TOKEN=YOUR-TOKEN gh api user
```

Replace `YOUR-TOKEN` with your token. When one of these variables is set, GitHub CLI uses it instead of any stored credentials and does not write the token to disk. To set a default host for commands that are not tied to a specific repository, set the `GH_HOST` environment variable.

## Authenticating in GitHub Actions

In a GitHub Actions workflow, authenticate GitHub CLI by passing the automatically provided `GITHUB_TOKEN` through the `GH_TOKEN` environment variable. This works for both GitHub.com and GitHub Enterprise Cloud.

```yaml
steps:
  - name: List open issues
    env:
      GH_TOKEN: {% raw %}${{ github.token }}{% endraw %}
    run: gh issue list --repo {% raw %}${{ github.repository }}{% endraw %}
```

For more information about the token that GitHub Actions provides, see [Github_Token](https://docs.github.com/en/actions/concepts/security/github_token).

On GitHub Enterprise Server, set `GH_ENTERPRISE_TOKEN` instead of `GH_TOKEN`, and set `GH_HOST` to your GitHub Enterprise Server host so that GitHub CLI authenticates to the right instance. The following example uses `ghes.example.com` as the host.

```yaml
steps:
  - name: List open issues
    env:
      GH_HOST: ghes.example.com
      GH_ENTERPRISE_TOKEN: {% raw %}${{ github.token }}{% endraw %}
    run: gh issue list --repo {% raw %}${{ github.repository }}{% endraw %}
```

## Authenticating Git over HTTPS

When you choose HTTPS as your preferred protocol for Git operations and confirm that you want to authenticate to Git with your GitHub credentials, GitHub CLI configures itself as a Git credential helper if you do not already have one configured. This lets you run Git commands such as `git push` and `git pull` without setting up a separate credential manager or using SSH. If you already use another credential helper, GitHub CLI stores your new credentials in that helper instead.

You can set this up at any time by running the following command.

```shell
gh auth setup-git
```

To configure Git for a single host instead of all authenticated hosts, use the `--hostname` flag, for example `gh auth setup-git --hostname github.com`.

## Using expiring, refreshable tokens

By default, GitHub CLI authenticates with a long-lived token that does not expire. If such a token is leaked, it grants access until you manually revoke it.

Expiring tokens reduce that risk. When you opt in, GitHub CLI stores an expiring access token together with a rotating refresh token. The access token expires within hours, and GitHub CLI automatically exchanges the refresh token for a new one whenever a fresh access token is needed. You stay authenticated without signing in again, while a leaked access token becomes unusable within hours instead of lasting indefinitely.

This behavior is opt-in and backward compatible. If you do not opt in, nothing changes, and existing sign-ins and manually supplied tokens continue to work as before.

### Opting in

Expiring tokens require GitHub CLI version v2.103.0 or later.


Expiring tokens are available on {% ifversion fpt or ghec %}GitHub.com and GitHub Enterprise Cloud. For more information about how expiring OAuth tokens and refresh tokens work, see [Authorizing OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#expiring-access-tokens).
{% else %}
Expiring tokens are not available in this version of GitHub Enterprise Server. Opting in falls back to the existing non-expiring behavior.
{% endif %}

To request expiring credentials, add the `--expiring` flag when you sign in.

```shell
gh auth login --expiring
```

Whether you receive expiring credentials depends on server support. The `--expiring` flag requests them. If the server does not support them, GitHub CLI falls back to a normal, non-expiring token and displays an informational message.

After you opt in, GitHub CLI refreshes the credential for you whenever it is needed, so there is nothing new to run day to day.

To opt in for every sign-in without passing the flag each time, enable the setting:

```shell
gh config set expiring_credentials enabled
```

### Using expiring tokens with Git

To use expiring tokens for Git operations over HTTPS, GitHub CLI must be your Git credential helper, so that it can serve and refresh the rotating credential for Git. When you sign in with expiring credentials, GitHub CLI asks you to configure it as your Git credential helper if it is not already. To make sure GitHub CLI is set up as the helper at any time, run `gh auth setup-git`.

We also recommend upgrading to Git 2.46 or newer. On Git 2.46 and later, GitHub CLI can mark an expiring credential so that a caching credential helper does not store it past its lifetime. On older versions of Git, GitHub CLI still works but prints a one-time recommendation to upgrade.

## Reading the stored token

Some scripts and extensions need the token that GitHub CLI is using, for example to authenticate a `curl` request or another HTTP client. To print the active token, run the following command.

```shell
gh auth token
```

For an expiring credential, GitHub CLI refreshes the access token if needed before printing it, so the token you receive is valid. To read the token for a specific host, use the `--hostname` flag. To print the current token without refreshing it, use the `--no-refresh` flag.

## Refreshing or adding scopes

Over time, a command may require additional scopes that your credentials do not yet have.

If you use expiring tokens, pass the `--expiring` flag (or enable the `expiring_credentials` setting) when you run `gh auth refresh`. Otherwise, changing scopes can replace your expiring credential with a non-expiring one.

To change the scopes on your existing credentials, use the following command.

```shell
gh auth refresh --scopes SCOPES
```

Replace `SCOPES` with a comma-separated list of the scopes you need.

This is separate from the automatic refresh of an expiring token, which happens in the background and does not change your scopes. See [Using expiring, refreshable tokens](#using-expiring-refreshable-tokens).

## Checking authentication status

To see which accounts you are signed in to, along with details such as token expiry, run the following command.

```shell
gh auth status
```

By default, the token itself is hidden. When a token is expired or near expiry, `gh auth status` refreshes it as part of reporting status.

Use these flags to customize the output and refresh behavior:

* To include the token in the output, add `--show-token`.
* For machine-readable output, use `--json`, which you can combine with `--show-token`.
* To report the current state without refreshing, add `--no-refresh`.

## Signing out

To sign out of an account, run the following command and follow the prompts.

```shell
gh auth logout
```

To sign out of a specific host without being prompted to choose one, use the `--hostname` flag, for example `gh auth logout --hostname github.com`.

## Using multiple accounts

You can authenticate to more than one account and switch between them with `gh auth switch`. For more information, see [Using Multiple Accounts](https://docs.github.com/en/github-cli/github-cli/using-multiple-accounts).

## Further reading

* [GitHub CLI Reference](https://docs.github.com/en/github-cli/github-cli/github-cli-reference)
* [GitHub CLI online manual](https://cli.github.com/manual/gh)
