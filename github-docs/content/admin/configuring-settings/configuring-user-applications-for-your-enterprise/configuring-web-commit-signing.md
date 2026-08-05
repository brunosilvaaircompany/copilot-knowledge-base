# Configuring web commit signing

## About web commit signing

If you enable web commit signing, GitHub Enterprise Server will automatically use GPG to sign commits users make on the web interface of your GitHub Enterprise Server instance. Commits signed by GitHub Enterprise Server will have a verified status. For more information, see [About Commit Signature Verification](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification).

You can enable web commit signing, rotate the private key used for web commit signing, and disable web commit signing.

### About persistent commit signature verification

Persistent commit signature verification is related but separate from web commit signing. This feature ensures that the verified status of commits is retained, even if signing keys are changed or revoked.

Persistent commit signature verification helps maintain long-term integrity and trust in your repository’s commit history. However, you may choose to disable it in environments where minimizing disk usage is a priority, especially for large installations with a high number of verified commits.

For information about disabling persistent commit signature verification, see [Disabling Persistent Commit Verification](https://docs.github.com/en/admin/configuring-settings/configuring-user-applications-for-your-enterprise/disabling-persistent-commit-verification).

## Enabling web commit signing

1. In the administrative shell, create a PGP key. Make note of the email address and key ID.

   ```bash copy
   gpg --full-generate-key --pinentry-mode=loopback
   ```

   * Use the default key type and at least `4096` bits with no expiry.

   * Use `web-flow` as the username. If `web-flow` is unavailable or unusable, use any new unique username. Use this username throughout the following steps in this article.
   * If you have a no-reply email address defined in the Management Console, use that email address. If not, use any email address, such as `web-flow@my-company.com`. The email address does not need to be valid.
   * The PGP key **cannot** be protected by a passphrase.

1. Define the key as an environment variable for GitHub Enterprise Server, replacing `<YOUR-KEY-ID>` with the GPG key ID.

    ```bash copy
    ghe-config "secrets.gpgverify.web-signing-key" "$(gpg --export-secret-keys -a <YOUR-KEY-ID> | awk '{printf "%s\\n", $0}')"
    ```

1. Update the settings for GitHub's commit signing service.

   ```bash copy
   sudo consul-template -once -template /etc/consul-templates/etc/nomad-jobs/gpgverify/gpgverify.hcl.ctmpl:/etc/nomad-jobs/gpgverify/gpgverify.hcl
    
   sudo nomad job run /etc/nomad-jobs/gpgverify/gpgverify.hcl
   ```

1. Enable web commit signing.

    ```bash copy
    ghe-config app.github.web-commit-signing-enabled true
    ```

1. Create a new user on your GitHub Enterprise Server instance via built-in authentication or external authentication. For more information, see [Identity And Access Management Fundamentals](https://docs.github.com/en/admin/concepts/identity-and-access-management/identity-and-access-management-fundamentals).
   * The user's username must be the same username you used when creating the PGP key in step 1 above, for example, `web-flow`.
   * The user's email address must be the same address you used when creating the PGP key.
1. Run the following command, replacing KEY-ID with your PGP key ID.

   ```bash copy
   gpg --armor --export KEY-ID
   ```

1. Copy your PGP key, beginning with `-----BEGIN PGP PUBLIC KEY BLOCK-----` and ending with `-----END PGP PUBLIC KEY BLOCK-----`.
1. Sign into GitHub Enterprise Server as the user created for web commit signing, for example, `web-flow`.
1. Add the public PGP key to the user's profile. For more information, see [Adding A Gpg Key To Your GitHub Account](https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account).

   > [!NOTE]
   > Do not remove other public keys from the list of GPG keys. If a public key is deleted, any commits signed with the corresponding private key will no longer be marked as verified.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. In the "Settings" sidebar, click **Email**.

1. Under "No-reply email address", type the same email address you used when creating the PGP key.

   > [!NOTE]
   > The "No-reply email address" field will only be displayed if you've enabled email for your GitHub Enterprise Server instance. For more information, see [Configuring Email For Notifications](https://docs.github.com/en/admin/configuring-settings/configuring-user-applications-for-your-enterprise/configuring-email-for-notifications#configuring-smtp-for-your-enterprise).

1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.



## Rotating the private key used for web commit signing

1. In the administrative shell, create a PGP key. Make note of the email address and key ID.

   ```bash copy
   gpg --full-generate-key --pinentry-mode=loopback
   ```

   * Use the default key type and at least `4096` bits with no expiry.

   * Use the web commit signing user's username, for example, `web-flow`.
   * Use the no-reply email address defined in the Management Console, which should be the same as the email address of the web commit signing user, for example, `web-flow`.
   * The PGP key **cannot** be protected by a passphrase.

1. Define the key as an environment variable for GitHub Enterprise Server, replacing `<YOUR-KEY-ID>` with the GPG key ID.

    ```bash copy
    ghe-config "secrets.gpgverify.web-signing-key" "$(gpg --export-secret-keys -a <YOUR-KEY-ID> | awk '{printf "%s\\n", $0}')"
    ```

1. Update the settings for GitHub's commit signing service.

   ```bash copy
   sudo consul-template -once -template /etc/consul-templates/etc/nomad-jobs/gpgverify/gpgverify.hcl.ctmpl:/etc/nomad-jobs/gpgverify/gpgverify.hcl
    
   sudo nomad job run /etc/nomad-jobs/gpgverify/gpgverify.hcl
   ```

1. Run the following command, replacing KEY-ID with your PGP key ID.

   ```bash copy
   gpg --armor --export KEY-ID
   ```

1. Copy your PGP key, beginning with `-----BEGIN PGP PUBLIC KEY BLOCK-----` and ending with `-----END PGP PUBLIC KEY BLOCK-----`.
1. Sign into GitHub Enterprise Server as the user created for web commit signing, for example, `web-flow`.
1. Add the public PGP key to the user's profile. For more information, see [Adding A Gpg Key To Your GitHub Account](https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account).

   > [!NOTE]
   > Do not remove other public keys from the list of GPG keys. If a public key is deleted, any commits signed with the corresponding private key will no longer be marked as verified.


## Disabling web commit signing

You can disable web commit signing for your GitHub Enterprise Server instance.

1. In the administrative shell, run the following command.

   ```bash copy
   ghe-config app.github.web-commit-signing-enabled false
   ```

1. Apply the configuration.

   ```bash copy
   ghe-config-apply
   ```
