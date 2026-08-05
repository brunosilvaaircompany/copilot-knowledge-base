# Adding a GPG key to your GitHub account

## About addition of GPG keys to your account

To sign commits associated with your account on GitHub, you can add a public GPG key to your personal account. Before you add a key, you should check for existing keys. If you don't find any existing keys, you can generate and copy a new key. For more information, see [Checking For Existing Gpg Keys](https://docs.github.com/en/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys) and [Generating A New Gpg Key](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key).

You can add multiple public keys to your account on GitHub. Commits signed by any of the corresponding private keys will show as verified. Once a commit has been verified, any commits signed by the corresponding private key will continue to show as verified, even if the public key is removed.

![Screenshot of a list of commits. One commit is marked as "Verified." A dropdown shows the commit was signed and when it was signed.](/assets/images/help/settings/verified-persistent-commit.png)

To verify as many of your commits as possible, you can add expired and revoked keys. If the key meets all other verification requirements, commits that were previously signed by any of the corresponding private keys will show as verified and indicate that their signing key is expired or revoked.


### Supported GPG key algorithms

GitHub supports several GPG key algorithms. If you try to add a key generated with an unsupported algorithm, you may encounter an error.

* RSA
* ElGamal
* DSA
* ECDH
* ECDSA
* EdDSA


When verifying a signature, GitHub extracts the signature and attempts to parse its key ID. The key ID is then matched with keys added to GitHub. Until a matching GPG key is added to GitHub, it cannot verify your signatures.

## Adding a GPG key

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "key" aria-hidden="true" aria-label="key" %} SSH and GPG keys**.

1. Next to the "GPG keys" header, click **New GPG key**.
1. In the "Title" field, type a name for your GPG key.
1. In the "Key" field, paste the GPG key you copied when you [generated your GPG key](/authentication/managing-commit-signature-verification/generating-a-new-gpg-key).
1. Click **Add GPG key**.
1. If prompted, authenticate to your GitHub account to confirm the action.

## Further reading

* [Checking For Existing Gpg Keys](https://docs.github.com/en/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys)
* [Generating A New Gpg Key](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)
* [Telling Git About Your Signing Key](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)
* [Associating An Email With Your Gpg Key](https://docs.github.com/en/authentication/managing-commit-signature-verification/associating-an-email-with-your-gpg-key)
* [Signing Commits](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits)
* [About Commit Signature Verification](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification)
