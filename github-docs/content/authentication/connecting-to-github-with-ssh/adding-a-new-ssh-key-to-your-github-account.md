# Adding a new SSH key to your GitHub account

## About addition of SSH keys to your account

You can access and write data in repositories on GitHub using SSH (Secure Shell Protocol). When you connect via SSH, you authenticate using a private key file on your local machine.
 For more information, see [About SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh).

You can also use SSH to sign commits and tags. For more information about commit signing, see [About Commit Signature Verification](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification).

After you generate an SSH key pair, you must add the public key to your GitHub Enterprise Server instance to enable SSH access for your account.

## Prerequisites

Before adding a new SSH key to your account on your GitHub Enterprise Server instance, complete the following steps.

1. Check for existing SSH keys. For more information, see [Checking For Existing SSH Keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys).
1. Generate a new SSH key and add it to your machine's SSH agent. For more information, see [Generating A New SSH Key And Adding It To The SSH Agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

## Adding a new SSH key to your account

You can add an SSH key and use it for authentication, or commit signing, or both. If you want to use the same SSH key for both authentication and signing, you need to upload it twice.

After adding a new SSH authentication key to your account on your GitHub Enterprise Server instance, you can reconfigure any local repositories to use SSH. For more information, see [Managing Remote Repositories](https://docs.github.com/en/get-started/git-basics/managing-remote-repositories#switching-remote-urls-from-https-to-ssh).



> [!NOTE]
> GitHub improved security by dropping older, insecure key types on March 15, 2022.
>
> As of that date, DSA keys (`ssh-dss`) are no longer supported. You cannot add new DSA keys to your personal account on GitHub.
>
> RSA keys (`ssh-rsa`) with a `valid_after` before November 2, 2021 may continue to use any signature algorithm. RSA keys generated after that date must use a SHA-2 signature algorithm. Some older clients may need to be upgraded in order to use SHA-2 signatures.




{% webui %}

1. Copy the SSH public key to your clipboard.

   If your SSH public key file has a different name than the example code, modify the filename to match your current setup. When copying your key, don't add any newlines or whitespace.
   {% mac %}

   ```shell
   $ pbcopy < ~/.ssh/id_ed25519.pub
   # Copies the contents of the id_ed25519.pub file to your clipboard
   ```

   > [!TIP]
   > If `pbcopy` isn't working, you can locate the hidden `.ssh` folder, open the file in your favorite text editor, and copy it to your clipboard.

   {% endmac %}
   {% windows %}

   ```shell
   $ clip < ~/.ssh/id_ed25519.pub
   # Copies the contents of the id_ed25519.pub file to your clipboard
   ```

   > [!NOTE]
   > * With Windows Subsystem for Linux (WSL), you can use `clip.exe`. Otherwise if `clip` isn't working, you can locate the hidden `.ssh` folder, open the file in your favorite text editor, and copy it to your clipboard.
   > * On newer versions of Windows that use the Windows Terminal, or anywhere else that uses the PowerShell command line, you may receive a `ParseError` stating that `The '&lt;' operator is reserved for future use.` In this case, the following alternative `clip` command should be used:
   >
   > ```shell
   > $ cat ~/.ssh/id_ed25519.pub | clip
   > # Copies the contents of the id_ed25519.pub file to your clipboard
   > ```

   {% endwindows %}
   {% linux %}

   ```shell
   $ cat ~/.ssh/id_ed25519.pub
   # Then select and copy the contents of the id_ed25519.pub file
   # displayed in the terminal to your clipboard
   ```

   > [!TIP]
   > Alternatively, you can locate the hidden `.ssh` folder, open the file in your favorite text editor, and copy it to your clipboard.

   {% endlinux %}


1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.


1. In the "Access" section of the sidebar, click **{% octicon "key" aria-hidden="true" aria-label="key" %} SSH and GPG keys**.


1. Click **New SSH key** or **Add SSH key**.
1. In the "Title" field, add a descriptive label for the new key. For example, if you're using a personal laptop, you might call this key "Personal laptop".
1. Select the type of key, either authentication or signing. For more information about commit signing, see [About Commit Signature Verification](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification).
1. In the "Key" field, paste your public key.
1. Click **Add SSH key**.
1. If prompted, confirm access to your account on GitHub. For more information, see [Sudo Mode](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/sudo-mode).


{% endwebui %}

{% cli %}

> [!NOTE]
> To learn more about GitHub CLI, see [About GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli).


Before you can use the GitHub CLI to add an SSH key to your account, you must authenticate to the GitHub CLI. For more information, see [`gh auth login`](https://cli.github.com/manual/gh_auth_login) in the GitHub CLI documentation.

To add an SSH key to your GitHub account, use the `ssh-key add` subcommand, specifying your public key. For authentication keys, if you're prompted to request additional scopes, follow the instructions in the command line.

```shell
gh ssh-key add KEY-FILE --type {authentication|signing}
```

To include a title for the new key, use the `-t` or `--title` flag.

```shell
gh ssh-key add KEY-FILE --title "personal laptop"
```

If you generated your SSH key by following the instructions in [Generating A New SSH Key And Adding It To The SSH Agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent), you can add the key to your account with this command.

```shell
gh ssh-key add ~/.ssh/id_ed25519.pub --type signing
```

{% endcli %}



## Further reading

* [Authorizing An SSH Key For Use With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/authorizing-an-ssh-key-for-use-with-single-sign-on)
