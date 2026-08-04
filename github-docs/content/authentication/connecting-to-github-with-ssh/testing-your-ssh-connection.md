# Testing your SSH connection

Before testing your SSH connection, you should have already:
* [Checked for existing SSH keys](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)
* [Generated a new SSH key](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
* [Added a new SSH key to your GitHub account](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

You'll need to authenticate this action using your password, which is the SSH key passphrase you created earlier. See [Working With SSH Key Passphrases](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases).



> [!NOTE] This article contains commands or examples that use the `github.com` domain. You might access GitHub at a different domain, such as `octocorp.ghe.com`.




1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Enter the following:

   ```shell copy
   ssh -T git@github.com
   # Attempts to ssh to GitHub
   ```

   You may see a warning like this:

   ```shell
   > The authenticity of host 'github.com (IP ADDRESS)' can't be established.
   > ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
   > Are you sure you want to continue connecting (yes/no)?
   ```

1. Verify that the fingerprint in the message you see matches [GitHub's public key fingerprint](/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints). If it does, then type `yes`:

   ```shell
   > Hi USERNAME! You've successfully authenticated, but GitHub does not
   > provide shell access.
   ```

   {% linux %}

   You may see this error message:

   ```shell
   ...
   Agent admitted failure to sign using the key.
   debug1: No more authentication methods to try.
   Permission denied (publickey).
   ```

   This is a known problem with certain Linux distributions. For more information, see [Error Agent Admitted Failure To Sign](https://docs.github.com/en/authentication/troubleshooting-ssh/error-agent-admitted-failure-to-sign).

   {% endlinux %}

   > [!NOTE]
   > The remote command should exit with code 1.

1. Verify that the resulting message contains your username. If you receive a "permission denied" message, see [Error Permission Denied Publickey](https://docs.github.com/en/authentication/troubleshooting-ssh/error-permission-denied-publickey).



> [!TIP] If you are accessing GitHub at a different domain such as `octocorp.ghe.com`, then you need to replace `git@github.com` with `octocorp@octocorp.ghe.com`.

>
> ```shell
> ssh -T octocorp@octocorp.ghe.com
> # Attempts to ssh to octocorp.ghe.com
> ```
