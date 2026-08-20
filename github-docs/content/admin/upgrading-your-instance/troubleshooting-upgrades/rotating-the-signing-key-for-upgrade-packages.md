# Rotating the signing key for upgrade packages

## About upgrade package signing keys

GitHub Enterprise Server upgrade packages are signed with a GPG key so that administrators can verify the packages come from GitHub. When you install an upgrade, the appliance checks the package signature against the GPG public key stored in its keyring.

Occasionally, GitHub may rotate this signing key. When that happens, you must update the GPG public key on your instance before you can install any upgrade packages signed with the new key. Your instance will continue to function normally without the key rotation, but upgrades will fail signature verification until the key is updated.

If the signing key has not been rotated, attempting to install an upgrade package will fail with the following error:

```text
Error: The file provided is not a valid GitHub Enterprise Server package.
```

## Considerations for unsupported versions

GitHub strongly recommends upgrading to a supported version as soon as possible.

Versions of GitHub Enterprise Server prior to 3.16 are not being re-signed with the new GPG key. If you are on version 3.13 or earlier you will not be able to rotate the GPG public key until you are on at least version 3.14. If you rotate your GPG public key before upgrading to at least 3.14 you will not be able to install upgrades, as the prior GPG public key will be removed from your GitHub Enterprise Server instance.

For help determining the correct upgrade path, use the [Upgrade assistant](https://support.github.com/enterprise/server-upgrade).

## Prerequisites

* SSH access to your GitHub Enterprise Server instance. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
* Your instance must be able to reach `enterprise.github.com` over HTTPS to download the rotation script. If your instance is behind a restrictive firewall or in an air-gapped environment, download the script from an external machine and transfer it to the appliance manually.

## Rotating the signing key on a single-node instance

1. Connect to your GitHub Enterprise Server instance via SSH.
1. Download the rotation script provided by GitHub.

   ```shell
   curl -fsSL https://enterprise.github.com/security/2026-05-24/rotate-gpg.sh -o rotate-gpg.sh
   ```

1. Run the rotation script. The script must be run twice: once as the `admin` user and once with `sudo`, because the key is stored in both the admin and root accounts.

   ```shell
   chmod ug+x ./rotate-gpg.sh
   ./rotate-gpg.sh
   sudo ./rotate-gpg.sh
   ```

1. Verify the rotation completed successfully. Each run of the script prints a confirmation message that includes the new key fingerprint.

## Rotating the signing key on HA or cluster topologies

For instances configured with high availability or clustering, the key must be rotated on every node.

1. Connect to any node in your HA or cluster installation via SSH.
1. Download the rotation script provided by GitHub on every node.

   ```shell
   ghe-cluster-each -- "curl -fsSL https://enterprise.github.com/security/2026-05-24/rotate-gpg.sh -o rotate-gpg.sh"
   ```

1. Run the script twice on every node, once as the `admin` user and once with `sudo`.

   ```shell
   ghe-cluster-each -- chmod ug+x ./rotate-gpg.sh
   ghe-cluster-each -- ./rotate-gpg.sh
   ghe-cluster-each -- sudo ./rotate-gpg.sh
   ```

1. Verify the rotation completed successfully on each node.

## Verifying the current signing key

To check which GPG signing key is currently installed on your instance, connect via SSH and run:

```shell
gpg --list-keys --keyid-format long
```

The output displays the fingerprint of the key in the keyring. Compare the fingerprint with the expected value published by GitHub to confirm the rotation was applied correctly.

## What to expect after rotating the key

After you rotate the signing key:

* Your instance continues to function normally. No user downtime is required.
* Previously downloaded upgrade packages that were signed with the prior key will fail verification. Download the latest available patch release to get a package signed with the new key.
* Only download GitHub Enterprise Server updates from the official releases page. For more information, see [GitHub Enterprise Server releases](https://enterprise.github.com/releases).

## Reverting a key rotation

The rotation script removes the previous key from the GPG keyring before importing the new key. There is no built-in way to undo the rotation.

If you need assistance reverting a key rotation or recovering from a failed upgrade, [contact GitHub Support](/support/contacting-github-support).
