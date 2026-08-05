# Caching your GitHub credentials in Git

> [!TIP]
> If you clone GitHub repositories using SSH, then you can authenticate using an SSH key instead of using other credentials. For information about setting up an SSH connection, see [Connecting To GitHub With SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

## GitHub CLI

GitHub CLI will automatically store your Git credentials for you when you choose `HTTPS` as your preferred protocol for Git operations and answer "yes" to the prompt asking if you would like to authenticate to Git with your GitHub credentials.

1. [Install](https://github.com/cli/cli#installation) GitHub CLI on macOS, Windows, or Linux.
1. In the command line, enter `gh auth login`, then follow the prompts.
   * When prompted for your preferred protocol for Git operations, select `HTTPS`.
   * When asked if you would like to authenticate to Git with your GitHub credentials, enter `Y`.

For more information about authenticating with GitHub CLI, see [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

## Git Credential Manager

[Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager) (GCM) is another way to store your credentials securely and connect to GitHub over HTTPS. With GCM, you don't have to manually [create and store a personal access token](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens), as GCM manages authentication on your behalf, including 2FA (two-factor authentication).

{% mac %}

1. Install Git using [Homebrew](https://brew.sh/):

   ```shell
   brew install git
   ```

1. Install GCM using Homebrew:

   ```shell
   brew install --cask git-credential-manager
   ```

  For macOS, you don't need to run `git config` because GCM automatically configures Git for you.

The next time you clone an HTTPS URL that requires authentication, Git will prompt you to log in using a browser window. You may first be asked to authorize an OAuth app. If your account or organization requires [two-factor auth](/authentication/securing-your-account-with-two-factor-authentication-2fa), you'll also need to complete the 2FA challenge.



> [!TIP]
>
> If you're a member of an enterprise that uses Enterprise Managed Users, your enterprise view has the "Users managed by ACCOUNT NAME" header bar at the top of the screen. In that case you will need to disable account filtering locally in GCM to prevent getting prompted for authentication each time a remote Git operation is performed. For more details, see the [`git-credential-manager` repository](https://github.com/git-ecosystem/git-credential-manager/blob/release/docs/configuration.md#credentialgithubaccountfiltering).
>
> To configure the Git Credential Manager run the following command:
>
> ```bash
> git config --global credential.gitHubAccountFiltering "false"
> ```




Once you've authenticated successfully, your credentials are stored in the macOS keychain and will be used every time you clone an HTTPS URL. Git will not require you to type your credentials in the command line again unless you change your credentials.

{% endmac %}

{% windows %}

1. Install Git for Windows, which includes GCM. For more information, see [Git for Windows releases](https://github.com/git-for-windows/git/releases/latest) from its [releases page](https://github.com/git-for-windows/git/releases/latest).

We recommend always installing the latest version. At a minimum, install version 2.29 or higher, which is the first version offering OAuth support for GitHub.

The next time you clone an HTTPS URL that requires authentication, Git will prompt you to log in using a browser window. You may first be asked to authorize an OAuth app. If your account or organization requires [two-factor auth](/authentication/securing-your-account-with-two-factor-authentication-2fa), you'll also need to complete the 2FA challenge.



> [!TIP]
>
> If you're a member of an enterprise that uses Enterprise Managed Users, your enterprise view has the "Users managed by ACCOUNT NAME" header bar at the top of the screen. In that case you will need to disable account filtering locally in GCM to prevent getting prompted for authentication each time a remote Git operation is performed. For more details, see the [`git-credential-manager` repository](https://github.com/git-ecosystem/git-credential-manager/blob/release/docs/configuration.md#credentialgithubaccountfiltering).
>
> To configure the Git Credential Manager run the following command:
>
> ```bash
> git config --global credential.gitHubAccountFiltering "false"
> ```




Once you've authenticated successfully, your credentials are stored in the Windows credential manager and will be used every time you clone an HTTPS URL. Git will not require you to type your credentials in the command line again unless you change your credentials.

<br>

> [!WARNING]
> Older versions of Git for Windows came with Git Credential Manager for Windows. This older product is no longer supported and cannot connect to GitHub via OAuth. We recommend you upgrade to [the latest version of Git for Windows](https://github.com/git-for-windows/git/releases/latest).

> [!WARNING]
> If you cached incorrect or outdated credentials in Credential Manager for Windows, Git will fail to access GitHub. To reset your cached credentials so that Git prompts you to enter your credentials, access the Credential Manager in the Windows Control Panel under User Accounts > Credential Manager. Look for the GitHub entry and delete it.

{% endwindows %}

{% linux %}

For Linux, install Git and GCM, then configure Git to use GCM.

1. Install Git from your distro's packaging system. Instructions will vary depending on the flavor of Linux you run.

1. Install GCM. See the [instructions in the GCM repo](https://github.com/git-ecosystem/git-credential-manager/blob/release/docs/install.md), as they'll vary depending on the flavor of Linux you run.

1. Configure Git to use GCM. There are several backing stores that you may choose from, so see the GCM docs to complete your setup. For more information, see [GCM Linux](https://aka.ms/gcmcore-linuxcredstores).

The next time you clone an HTTPS URL that requires authentication, Git will prompt you to log in using a browser window. You may first be asked to authorize an OAuth app. If your account or organization requires [two-factor auth](/authentication/securing-your-account-with-two-factor-authentication-2fa), you'll also need to complete the 2FA challenge.



> [!TIP]
>
> If you're a member of an enterprise that uses Enterprise Managed Users, your enterprise view has the "Users managed by ACCOUNT NAME" header bar at the top of the screen. In that case you will need to disable account filtering locally in GCM to prevent getting prompted for authentication each time a remote Git operation is performed. For more details, see the [`git-credential-manager` repository](https://github.com/git-ecosystem/git-credential-manager/blob/release/docs/configuration.md#credentialgithubaccountfiltering).
>
> To configure the Git Credential Manager run the following command:
>
> ```bash
> git config --global credential.gitHubAccountFiltering "false"
> ```




Once you've authenticated successfully, your credentials are stored on your system and will be used every time you clone an HTTPS URL. Git will not require you to type your credentials in the command line again unless you change your credentials.

For more options for storing your credentials on Linux, see [Credential Storage](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage) in Pro Git.

{% endlinux %}

<br>

For more information or to report issues with GCM, see the official GCM docs at [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager).
