# Generating a new SSH key and adding it to the ssh-agent

## About SSH key passphrases

You can access and write data in repositories on GitHub using SSH (Secure Shell Protocol). When you connect via SSH, you authenticate using a private key file on your local machine.
 For more information, see [About SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh).

When you generate an SSH key, you can add a passphrase to further secure the key. Whenever you use the key, you must enter the passphrase. If your key has a passphrase and you don't want to enter the passphrase every time you use the key, you can add your key to the SSH agent. The SSH agent manages your SSH keys and remembers your passphrase.

If you don't already have an SSH key, you must generate a new SSH key to use for authentication. If you're unsure whether you already have an SSH key, you can check for existing keys. For more information, see [Checking For Existing SSH Keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys).

If you want to use a hardware security key to authenticate to GitHub, you must generate a new SSH key for your hardware security key. You must connect your hardware security key to your computer when you authenticate with the key pair. For more information, see the [OpenSSH 8.2 release notes](https://www.openssh.com/txt/release-8.2).

## Generating a new SSH key

You can generate a new SSH key on your local machine. After you generate the key, you can add the public key to your account on your GitHub Enterprise Server instance to enable authentication for Git operations over SSH.



If you are a site administrator for your GitHub Enterprise Server instance, you can use the same key to grant yourself administrative SSH access to the instance. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).





> [!NOTE]
> GitHub improved security by dropping older, insecure key types on March 15, 2022.
>
> As of that date, DSA keys (`ssh-dss`) are no longer supported. You cannot add new DSA keys to your personal account on GitHub.
>
> RSA keys (`ssh-rsa`) with a `valid_after` before November 2, 2021 may continue to use any signature algorithm. RSA keys generated after that date must use a SHA-2 signature algorithm. Some older clients may need to be upgraded in order to use SHA-2 signatures.




1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Paste the text below, replacing the email used in the example with your GitHub email address.

   ```shell
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

   > [!NOTE]
   > If you are using a legacy system that doesn't support the Ed25519 algorithm, use:
   >
   > ```shell
   > ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   > ```

   This creates a new SSH key, using the provided email as a label.

   ```shell
   > Generating public/private ALGORITHM key pair.
   ```

   When you're prompted to "Enter a file in which to save the key", you can press **Enter** to accept the default file location. Please note that if you created SSH keys previously, ssh-keygen may ask you to rewrite another key, in which case we recommend creating a custom-named SSH key. To do so, type the default file location and replace id_ALGORITHM with your custom key name.

   {% mac %}

   ```shell
   > Enter a file in which to save the key (/Users/YOU/.ssh/id_ALGORITHM): [Press enter]
   ```

   {% endmac %}

   {% windows %}

   ```powershell
   > Enter file in which to save the key (/c/Users/YOU/.ssh/id_ALGORITHM):[Press enter]
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/YOU/.ssh/id_ALGORITHM):[Press enter]
   ```

   {% endlinux %}

1. At the prompt, type a secure passphrase. For more information, see [Working With SSH Key Passphrases](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases).

   ```shell
   > Enter passphrase (empty for no passphrase): [Type a passphrase]
   > Enter same passphrase again: [Type passphrase again]
   ```

## Adding your SSH key to the ssh-agent

Before adding a new SSH key to the ssh-agent to manage your keys, you should have checked for existing SSH keys and generated a new SSH key. <span class="platform-mac">When adding your SSH key to the agent, use the default macOS `ssh-add` command, and not an application installed by [macports](https://www.macports.org/), [homebrew](https://brew.sh/), or some other external source.</span>

{% mac %}

1. Start the ssh-agent in the background.

    ```shell
    $ eval "$(ssh-agent -s)"
    > Agent pid 59566
    ```

    Depending on your environment, you may need to use a different command. For example, you may need to use root access by running `sudo -s -H` before starting the ssh-agent, or you may need to use `exec ssh-agent bash` or `exec ssh-agent zsh` to run the ssh-agent.


1. If you're using macOS Sierra 10.12.2 or later, you will need to modify your `~/.ssh/config` file to automatically load keys into the ssh-agent and store passphrases in your keychain.

   * First, check to see if your `~/.ssh/config` file exists in the default location.

     ```shell
     $ open ~/.ssh/config
     > The file /Users/YOU/.ssh/config does not exist.
     ```

   * If the file doesn't exist, create the file.

     ```shell
     touch ~/.ssh/config
     ```

   * Open your `~/.ssh/config` file, then modify the file to contain the following lines. If your SSH key file has a different name or path than the example code, modify the filename or path to match your current setup.

     ```text copy
     Host HOSTNAME
       AddKeysToAgent yes
       UseKeychain yes
       IdentityFile ~/.ssh/id_ed25519
     ```

     > [!NOTE]
     > * If you chose not to add a passphrase to your key, you should omit the `UseKeychain` line.
     > * If you see a `Bad configuration option: usekeychain` error, add an additional line to the configuration's' `Host *.HOSTNAME` section.
     >
     > ```text copy
     > Host HOSTNAME
     >   IgnoreUnknown UseKeychain
     > ```

1. Add your SSH private key to the ssh-agent and store your passphrase in the keychain. If you created your key with a different name, or if you are adding an existing key that has a different name, replace _id_ed25519_ in the command with the name of your private key file.


   ```shell
   ssh-add --apple-use-keychain ~/.ssh/id_ed25519
   ```

   > [!NOTE]
> The `--apple-use-keychain` option stores the passphrase in your keychain for you when you add an SSH key to the ssh-agent. If you chose not to add a passphrase to your key, run the command without the `--apple-use-keychain` option.
>
> The `--apple-use-keychain` option is in Apple's standard version of `ssh-add`. In macOS versions prior to Monterey (12.0), the `--apple-use-keychain` and `--apple-load-keychain` flags used the syntax `-K` and `-A`, respectively.
>
> If you don't have Apple's standard version of `ssh-add` installed, you may receive an error. For more information, see [Error SSH Add Illegal Option    Apple Use Keychain](https://docs.github.com/en/authentication/troubleshooting-ssh/error-ssh-add-illegal-option----apple-use-keychain).
>
> If you continue to be prompted for your passphrase, you may need to add the command to your `~/.zshrc` file (or your `~/.bashrc` file for bash).


1. Add the SSH public key to your account on GitHub. For more information, see [Adding A New SSH Key To Your GitHub Account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).


{% endmac %}

{% windows %}

If you have [GitHub Desktop](https://desktop.github.com/) installed, you can use it to clone repositories and not deal with SSH keys.


1. In a new _admin elevated_ PowerShell window, ensure the ssh-agent is running. You can use the "Auto-launching the ssh-agent" instructions in [Working With SSH Key Passphrases](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases), or start it manually:

   ```powershell
   # start the ssh-agent in the background
   Get-Service -Name ssh-agent | Set-Service -StartupType Manual
   Start-Service ssh-agent
   ```

1. In a terminal window without elevated permissions, add your SSH private key to the ssh-agent.
   If you created your key with a different name, or if you are adding an existing key that has a different name, replace _id_ed25519_ in the command with the name of your private key file.


   ```powershell
   ssh-add c:/Users/YOU/.ssh/id_ed25519
   ```

1. Add the SSH public key to your account on GitHub. For more information, see [Adding A New SSH Key To Your GitHub Account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).


> ### Troubleshooting SSH agent conflicts in Windows
>
> In Windows environments, the native Windows OpenSSH implementation and the one included with Git for Windows (based on MSYS2/Bash) can coexist.
>
> If you configure and save your passphrases in the Windows agent using PowerShell, Git may still prompt you for your passphrase during operations like `git push`. This can happen when Git for Windows uses its bundled `ssh.exe` (from MSYS2) instead of the Windows system OpenSSH client, and therefore can't talk to the Windows `ssh-agent` service.
>
> To ensure Git uses the agent where you've stored your credentials, force Git to use the system's SSH binary by running:
>
> ```powershell
> git config --global core.sshCommand "C:/Windows/System32/OpenSSH/ssh.exe"
> ```


{% endwindows %}

{% linux %}

1. Start the ssh-agent in the background.

    ```shell
    $ eval "$(ssh-agent -s)"
    > Agent pid 59566
    ```

    Depending on your environment, you may need to use a different command. For example, you may need to use root access by running `sudo -s -H` before starting the ssh-agent, or you may need to use `exec ssh-agent bash` or `exec ssh-agent zsh` to run the ssh-agent.


1. Add your SSH private key to the ssh-agent.

   If you created your key with a different name, or if you are adding an existing key that has a different name, replace _id_ed25519_ in the command with the name of your private key file.


   {% indented_data_reference reusables.ssh.add-ssh-key-to-ssh-agent-commandline spaces=3 %}

1. Add the SSH public key to your account on GitHub. For more information, see [Adding A New SSH Key To Your GitHub Account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).


{% endlinux %}

## Generating a new SSH key for a hardware security key

If you are using macOS or Linux, you may need to update your SSH client or install a new SSH client prior to generating a new SSH key. For more information, see [Error Unknown Key Type](https://docs.github.com/en/authentication/troubleshooting-ssh/error-unknown-key-type).

1. Insert your hardware security key into your computer.
1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.


1. Paste the text below, replacing the email address in the example with the email address associated with your GitHub account.

   {% mac %}

   ```shell
   ssh-keygen -t ed25519-sk -C "your_email@example.com"
   ```

   {% endmac %}

   {% windows %}

   ```powershell
   ssh-keygen -t ed25519-sk -C "your_email@example.com"
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   ssh-keygen -t ed25519-sk -C "your_email@example.com"
   ```

   {% endlinux %}

   > [!NOTE]
   > If the command fails and you receive the error `invalid format` or `feature not supported,` you may be using a hardware security key that does not support the Ed25519 algorithm. Enter the following command instead.
   >
   > ```shell
   > ssh-keygen -t ecdsa-sk -C "your_email@example.com"
   > ```

1. When you are prompted, touch the button on your hardware security key.
1. When you are prompted to "Enter a file in which to save the key," press Enter to accept the default file location.

   {% mac %}

   ```shell
   > Enter a file in which to save the key (/Users/YOU/.ssh/id_ed25519_sk): [Press enter]
   ```

   {% endmac %}

   {% windows %}

   ```shell
   > Enter a file in which to save the key (c:\Users\YOU\.ssh\id_ed25519_sk):[Press enter]
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/YOU/.ssh/id_ed25519_sk):[Press enter]
   ```

   {% endlinux %}

1. When you are prompted to type a passphrase, press **Enter**.

   ```shell
   > Enter passphrase (empty for no passphrase): [Type a passphrase]
   > Enter same passphrase again: [Type passphrase again]
   ```
   
1. Add the SSH public key to your account on GitHub. For more information, see [Adding A New SSH Key To Your GitHub Account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).


## Further reading

* [GitHub Credential Types](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/github-credential-types)
