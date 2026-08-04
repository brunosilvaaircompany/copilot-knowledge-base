# Managing multiple accounts

## Contributing to multiple accounts using HTTPS and personal access tokens

Alternatively, if you want to use the HTTPS protocol for both accounts, you can use different personal access tokens for each account by configuring Git to store different credentials for each repository.

{% mac %}

1. Open Terminal.

1. To confirm your use of a credential manager, enter the following command and note the output.

   ```shell copy
   git config --get credential.helper
   ```

1. If the output confirms that you're using a credential manager, clear the stored credentials for the credential manager.

   * If the output doesn't include the name of a credential manager, there is no credential manager configured, and you can proceed to the next step.

   * If the output is `osxkeychain`, you're using the macOS keychain. To clear the credentials, you can use the credential helper on the command line:

     ```shell
     $ git credential-osxkeychain erase
     host=github.com
     protocol=https
     > [Press Return]
     >
     ```

   * If the output is `manager` (or `manager-core` in previous versions), you're using Git Credential Manager. To clear the credentials, run the following command.


     ```shell copy
     echo "protocol=https\nhost=github.com" | git credential-manager erase
     ```
1. To configure Git to cache credentials for the full remote URL of each repository you access on GitHub, enter the following command.

   ```shell copy
   git config --global credential.https://github.com.useHttpPath true
   ```

1. For each of your accounts, create a dedicated personal access token (classic) with `repo` scope. Or, for each of your accounts and for each organization that you are a member of, create a fine-grained personal access token that can access the desired repositories and that has read and write permissions on repository contents. For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

1. The first time that you use Git to clone a repository or access data in a repository that you've already cloned, Git will request credentials. Provide the personal access token for the account with access to the repository.

   Git will cache the personal access token based on the full remote URL of the repository, and you'll be able to access and write repository data on your GitHub Enterprise Server instance using the correct account.


{% endmac %}

{% windows %}

1. Open Git Bash.
1. To confirm your use of a credential manager, enter the following command and note the output.

   ```shell copy
   git config --get credential.helper
   ```

1. If the output confirms that you're using a credential manager, clear the stored credentials for the credential manager.

   * If the output doesn't include the name of a credential manager, there is no credential manager configured, and you can proceed to the next step.

   * If the output is `manager` (or `manager-core` in previous versions), you're using Git Credential Manager. To clear the credentials, run the following command.


    ```shell copy
    echo "protocol=https`nhost=github.com" | git credential-manager erase
    ```

   * If the output is `wincred`, you're using the Windows Credential Manager. To clear the credentials, enter the following command.

     ```shell copy
     cmdkey /delete:LegacyGeneric:target=git:https://github.com
     ```

1. To configure Git to cache credentials for the full remote URL of each repository you access on GitHub, enter the following command.

   ```shell copy
   git config --global credential.https://github.com.useHttpPath true
   ```

1. For each of your accounts, create a dedicated personal access token (classic) with `repo` scope. Or, for each of your accounts and for each organization that you are a member of, create a fine-grained personal access token that can access the desired repositories and that has read and write permissions on repository contents. For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

1. The first time that you use Git to clone a repository or access data in a repository that you've already cloned, Git will request credentials. Provide the personal access token for the account with access to the repository.

   Git will cache the personal access token based on the full remote URL of the repository, and you'll be able to access and write repository data on your GitHub Enterprise Server instance using the correct account.


{% endwindows %}

{% linux %}

1. Open Terminal.

1. To confirm your use of a credential manager, enter the following command and note the output.

   ```shell copy
   git config --get credential.helper
   ```

1. If the output confirms that you're using a credential manager, clear the stored credentials for the credential manager.

   * If the output doesn't include the name of a credential manager, there is no credential manager configured, and you can proceed to the next step.

   * If the output is `manager` (or `manager-core` in previous versions), you're using Git Credential Manager. To clear the credentials, run the following command.


    ```shell copy
    echo "protocol=https\nhost=github.com" | git credential-manager erase
    ```
1. To configure Git to cache credentials for the full remote URL of each repository you access on GitHub, enter the following command.

   ```shell copy
   git config --global credential.https://github.com.useHttpPath true
   ```

1. For each of your accounts, create a dedicated personal access token (classic) with `repo` scope. Or, for each of your accounts and for each organization that you are a member of, create a fine-grained personal access token that can access the desired repositories and that has read and write permissions on repository contents. For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

1. The first time that you use Git to clone a repository or access data in a repository that you've already cloned, Git will request credentials. Provide the personal access token for the account with access to the repository.

   Git will cache the personal access token based on the full remote URL of the repository, and you'll be able to access and write repository data on your GitHub Enterprise Server instance using the correct account.


{% endlinux %}

## Contributing to multiple accounts using SSH and `GIT_SSH_COMMAND`

If you want to use the SSH protocol for both accounts, you can use different SSH keys for each account. For more information about using SSH, see [Connecting To GitHub With SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

To use a different SSH key for different repositories that you clone to your workstation, you must write a shell wrapper function for Git operations. The function should perform the following steps.
1. Determine the repository's full name with owner, using a command such as `git config --get remote.origin.url`.
1. Choose the correct SSH key for authentication.
1. Modify `GIT_SSH_COMMAND` accordingly. For more information about `GIT_SSH_COMMAND`, see [Environment Variables](https://git-scm.com/docs/git#Documentation/git.txt-codeGITSSHCOMMANDcode) in the Git documentation.

For example, the following command sets the `GIT_SSH_COMMAND` environment variable to specify an SSH command that uses the private key file at **_PATH/TO/KEY/FILE_** for authentication to clone the repository named OWNER/REPOSITORY on your GitHub Enterprise Server instance.

```shell copy
GIT_SSH_COMMAND='ssh -i PATH/TO/KEY/FILE -o IdentitiesOnly=yes' git clone git@github.com:OWNER/REPOSITORY
```

## Contributing to multiple accounts using SSH and multiple keys

If you are a member of an enterprise with managed users, but also want to collaborate outside your enterprise using a personal account, you can use different SSH keys for each account. For more information about using SSH, see [Connecting To GitHub With SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).
> [!WARNING]
> You cannot use the same SSH key to contribute to both repositories inside your organization with managed users and outside the enterprise. 

1. Generate a different SSH key for the repositories in your organization with managed users. See [Generating A New SSH Key And Adding It To The SSH Agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key). When you save the key, give it a different filename from your existing key (for instance, add -emu to the suggested name of the file).

1. Add the new ssh key to your managed user account. See [Adding A New SSH Key To Your GitHub Account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account#adding-a-new-ssh-key-to-your-account)

1. Configure your SSH Config File `~/.ssh/config` to use the different keys. For example, if your personal SSH key is `~/.ssh/id_ed25519` and your enterprise with managed users SSH key is `~/.ssh/id_ed25519-emu`

   ```text copy
   Host github.com
	   IdentityFile ~/.ssh/id_ed25519
       IdentitiesOnly yes

   Host github-emu.com
	   Hostname github.com
	   IdentityFile ~/.ssh/id_ed25519-emu
       IdentitiesOnly yes
   ```

   > [!NOTE]
   > The `IdentitiesOnly` line ensures that if the ssh-agent has loaded multiple keys, ssh uses the correct key when connecting.

1. Test your SSH configuration by running the following command to connect using the SSH key associated with your personal account - see [Testing Your SSH Connection](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection) for further details

   ```shell copy
   ssh -T git@github.com
   ```

   Test to see if you can connect to (GitHub) using your enterprise with managed users SSH key

   ```shell copy
   ssh -T git@github-emu.com
   ```

1. Tell `git` to use the correct key when downloading or uploading a repository in an organization with managed users. 
   To list the organizations in your enterprise with managed users,
   1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

   1. For each organization listed tell `git` to use the `github-emu.com` host.

   For example, if one of your organizations is called `octocat-emu` then to tell `git` to use the host `github-emu.com` for repositories in the `octocat-emu` organization, run the following command

   ```shell copy
   git config --global url."git@github-emu.com:octocat-emu/".insteadOf "git@github.com:octocat-emu/"
   ```

Now, when you clone a repository using SSH, in the `octocat-emu` organization, `git` will use the SSH key associated with your enterprise with managed users instead of your personal key.

## Next steps

For reference information, see [Personal Account Reference](https://docs.github.com/en/account-and-profile/reference/personal-account-reference).
