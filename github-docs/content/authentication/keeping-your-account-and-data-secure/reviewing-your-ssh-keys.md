# Reviewing your SSH keys

You can delete unauthorized (or possibly compromised) SSH keys to ensure that an attacker no longer has access to your repositories. You can also approve existing SSH keys that are valid.

{% mac %}

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "key" aria-hidden="true" aria-label="key" %} SSH and GPG keys**.

1. Under "SSH keys", take note of the SSH keys associated with your account. For those that you don't recognize, or that are out-of-date, click **Delete**. If there are valid SSH keys you'd like to keep, click **Approve**.

   > [!NOTE]
   > If you're auditing your SSH keys due to an unsuccessful Git operation, the unverified key that caused the [SSH key audit error](/authentication/troubleshooting-ssh/error-were-doing-an-ssh-key-audit) will be highlighted in the list of SSH keys.

1. Open Terminal.

1. Start the ssh-agent in the background.

    ```shell
    $ eval "$(ssh-agent -s)"
    > Agent pid 59566
    ```

    Depending on your environment, you may need to use a different command. For example, you may need to use root access by running `sudo -s -H` before starting the ssh-agent, or you may need to use `exec ssh-agent bash` or `exec ssh-agent zsh` to run the ssh-agent.


1. Find and take a note of your public key fingerprint.

   ```shell
   $ ssh-add -l -E sha256
   > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
   ```

1. The SSH keys on GitHub _should_ match the same keys on your computer.

{% endmac %}

{% windows %}

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "key" aria-hidden="true" aria-label="key" %} SSH and GPG keys**.

1. Under "SSH keys", take note of the SSH keys associated with your account. For those that you don't recognize, or that are out-of-date, click **Delete**. If there are valid SSH keys you'd like to keep, click **Approve**.

   > [!NOTE]
   > If you're auditing your SSH keys due to an unsuccessful Git operation, the unverified key that caused the [SSH key audit error](/authentication/troubleshooting-ssh/error-were-doing-an-ssh-key-audit) will be highlighted in the list of SSH keys.

1. Open Git Bash.

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


   {% indented_data_reference reusables.desktop.note-start-ssh-agent spaces=3 %}

1. Find and take a note of your public key fingerprint.

   ```shell
   $ ssh-add -l -E sha256
   > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
   ```

1. The SSH keys on GitHub _should_ match the same keys on your computer.

{% endwindows %}

{% linux %}

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "key" aria-hidden="true" aria-label="key" %} SSH and GPG keys**.

1. Under "SSH keys", take note of the SSH keys associated with your account. For those that you don't recognize, or that are out-of-date, click **Delete**. If there are valid SSH keys you'd like to keep, click **Approve**.

   > [!NOTE]
   > If you're auditing your SSH keys due to an unsuccessful Git operation, the unverified key that caused the [SSH key audit error](/authentication/troubleshooting-ssh/error-were-doing-an-ssh-key-audit) will be highlighted in the list of SSH keys.

1. Open Terminal.

1. Start the ssh-agent in the background.

    ```shell
    $ eval "$(ssh-agent -s)"
    > Agent pid 59566
    ```

    Depending on your environment, you may need to use a different command. For example, you may need to use root access by running `sudo -s -H` before starting the ssh-agent, or you may need to use `exec ssh-agent bash` or `exec ssh-agent zsh` to run the ssh-agent.


1. Find and take a note of your public key fingerprint.

   ```shell
   $ ssh-add -l -E sha256
   > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
   ```

1. The SSH keys on GitHub _should_ match the same keys on your computer.

{% endlinux %}

> [!WARNING]
> If you see an SSH key you're not familiar with on GitHub, delete it immediately and contact us through the [GitHub Support portal](https://support.github.com){% elsif ghes %}your site administrator for further help. An unidentified public key may indicate a possible security concern.
