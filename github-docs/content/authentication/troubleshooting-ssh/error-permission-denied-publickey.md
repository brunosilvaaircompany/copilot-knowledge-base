# Error: Permission denied (publickey)

> [!NOTE] This article contains commands or examples that use the `github.com` domain. You might access GitHub at a different domain, such as `octocorp.ghe.com`.




## Should the `sudo` command or elevated privileges be used with Git?

You should not be using the `sudo` command or elevated privileges, such as administrator permissions, with Git.

If you have a _very good reason_ you must use `sudo`, then ensure you are using it with every command. If you [generate SSH keys](/authentication/connecting-to-github-with-ssh) without `sudo` and then try to use a command like `sudo git push`, you won't be using the same keys that you generated.

## Check that you are connecting to the correct server

To make sure you are connecting to the right domain, you can enter the following command:

```shell copy
ssh -vT git@github.com
```

You should see this output:

```shell
> OpenSSH_8.1p1, LibreSSL 2.7.3
> debug1: Reading configuration data /Users/YOU/.ssh/config
> debug1: Reading configuration data /etc/ssh/ssh_config
> debug1: /etc/ssh/ssh_config line 47: Applying options for *
> debug1: Connecting to github.com port 22.
```

The connection should be made on port 22, unless you're overriding settings to use [SSH over HTTPS](/authentication/troubleshooting-ssh/using-ssh-over-the-https-port).

## Always use the "git" user

All connections, including those for remote URLs, must be made as the "git" user. If you try to connect with your GitHub username, it will fail:

```shell
$ ssh -T GITHUB-USERNAME@github.com
> Permission denied (publickey).
```

If your connection failed and you're using a remote URL with your GitHub username, you can [change the remote URL to use the "git" user](/get-started/git-basics/managing-remote-repositories).

You should verify your connection by typing:

```shell copy
ssh -T git@github.com
```

You should see this output:

```shell
> Hi USERNAME! You've successfully authenticated...
```



> [!WARNING]
> If you are accessing GitHub at a different domain such as `octocorp.ghe.com`, then you need to replace `git@github.com` with `octocorp@octocorp.ghe.com`.

>
> ```shell
> ssh -T octocorp@octocorp.ghe.com
> ```



## Make sure you have a key that is being used

{% mac %}

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Verify that you have a private key generated and loaded into SSH.

   ```shell
   # start the ssh-agent in the background
   $ eval "$(ssh-agent -s)"
   > Agent pid 59566
   $ ssh-add -l -E sha256
   > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
   ```

{% endmac %}

{% windows %}

If you have [GitHub Desktop](https://desktop.github.com/) installed, you can use it to clone repositories and not deal with SSH keys.


1. **If you are using Git Bash**, turn on ssh-agent:

    ```shell
    # start the ssh-agent in the background
    $ eval "$(ssh-agent -s)"
    > Agent pid 59566
    ```


   **If you are using another terminal prompt**, such as [Git for Windows](https://git-for-windows.github.io/), turn on ssh-agent:

```shell
# start the ssh-agent in the background
$ eval $(ssh-agent -s)
> Agent pid 59566
```


   > [!NOTE]
> The eval commands above start ssh-agent manually in your environment. These commands may fail if ssh-agent already runs as a background system service. If that happens, we recommend you check the relevant documentation for your environment.


1. Verify that you have a private key generated and loaded into SSH.

   ```shell
   $ ssh-add -l -E sha256
   > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
   ```

{% endwindows %}

{% linux %}

1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.


1. Verify that you have a private key generated and loaded into SSH.

   ```shell
   $ ssh-add -l -E sha256
   > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
   ```

{% endlinux %}

The `ssh-add` command _should_ print out a long string of numbers and letters. If it does not print anything, you will need to [generate a new SSH key](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) and associate it with GitHub.

> [!TIP]
> On most systems the default private keys (`~/.ssh/id_rsa` and `~/.ssh/identity`) are automatically added to the SSH authentication agent. You shouldn't need to run `ssh-add path/to/key` unless you override the file name when you generate a key.

### Getting more details

You can also check that the key is being used by trying to connect to `git@github.com`:

```shell copy
ssh -vT git@github.com
```

You'll see output like this:

```shell
> ...
> debug1: identity file /Users/YOU/.ssh/id_rsa type -1
> debug1: identity file /Users/YOU/.ssh/id_rsa-cert type -1
> debug1: identity file /Users/YOU/.ssh/id_dsa type -1
> debug1: identity file /Users/YOU/.ssh/id_dsa-cert type -1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Trying private key: /Users/YOU/.ssh/id_rsa
> debug1: Trying private key: /Users/YOU/.ssh/id_dsa
> debug1: No more authentication methods to try.
> Permission denied (publickey).
```

In this example, SSH did not find any keys.
* "-1" at the end of the "identity file" lines means SSH couldn't find a file to use.
* "Trying private key" lines indicate that no file was found.

If a file existed, those lines would be "1" and "Offering public key", as in this output:

```shell
> ...
> debug1: identity file /Users/YOU/.ssh/id_rsa type 1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Offering RSA public key: /Users/YOU/.ssh/id_rsa
```

## Verify the public key is attached to your account

You must provide your public key to GitHub to establish a secure connection.

{% mac %}

1. Open Terminal.
1. Start SSH agent in the background.

   ```shell
   $ eval "$(ssh-agent -s)"
   > Agent pid 59566
   ```

1. Find and take a note of your public key fingerprint.

   ```shell
   $ ssh-add -l -E sha256
   > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
   ```

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "key" aria-hidden="true" aria-label="key" %} SSH and GPG keys**.

1. Compare the list of SSH keys with the output from the `ssh-add` command.

{% endmac %}

{% windows %}

1. Open the command line.
1. Start SSH agent in the background.

   ```shell
   $ ssh-agent -s
   > Agent pid 59566
   ```

1. Find and take a note of your public key fingerprint.

   ```shell
   $ ssh-add -l -E sha256
   > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
   ```

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "key" aria-hidden="true" aria-label="key" %} SSH and GPG keys**.

1. Compare the list of SSH keys with the output from the `ssh-add` command.

{% endwindows %}

{% linux %}

1. Open Terminal.
1. Start SSH agent in the background.

   ```shell
   $ eval "$(ssh-agent -s)"
   > Agent pid 59566
   ```

1. Find and take a note of your public key fingerprint. If you're using OpenSSH 6.7 or older:

   ```shell
   $ ssh-add -l
   > 2048 a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d /Users/USERNAME/.ssh/id_rsa (RSA)
   ```

   If you're using OpenSSH 6.8 or newer:

   ```shell
   $ ssh-add -l -E md5
   > 2048 MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d /Users/USERNAME/.ssh/id_rsa (RSA)
   ```

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "key" aria-hidden="true" aria-label="key" %} SSH and GPG keys**.

1. Compare the list of SSH keys with the output from the `ssh-add` command.

{% endlinux %}

If you don't see your public key in GitHub, you'll need to [add your SSH key to GitHub](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) to associate it with your computer.

> [!WARNING]
> If you see an SSH key you're not familiar with on GitHub, delete it immediately and contact us through the [GitHub Support portal](https://support.github.com){% elsif ghes %}your site administrator for further help. An unidentified public key may indicate a possible security concern. For more information, see [Reviewing Your SSH Keys](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/reviewing-your-ssh-keys).
