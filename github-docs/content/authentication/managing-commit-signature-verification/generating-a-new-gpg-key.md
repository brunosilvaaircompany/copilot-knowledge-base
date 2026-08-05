# Generating a new GPG key

### Supported GPG key algorithms

GitHub supports several GPG key algorithms. If you try to add a key generated with an unsupported algorithm, you may encounter an error.

* RSA
* ElGamal
* DSA
* ECDH
* ECDSA
* EdDSA


## Generating a GPG key

> [!NOTE]
> Before generating a new GPG key, make sure you've verified your email address. If you haven't verified your email address, you won't be able to sign commits and tags with GPG. For more information, see [Verifying Your Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/verifying-your-email-address).

1. Download and install [the GPG command line tools](https://www.gnupg.org/download/) for your operating system. We generally recommend installing the latest version for your operating system.
1. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

1. Generate a GPG key pair. Since there are multiple versions of GPG, you may need to consult the relevant [_man page_](https://en.wikipedia.org/wiki/Man_page) to find the appropriate key generation command.
    * If you are on version 2.1.17 or greater, paste the text below to generate a GPG key pair.

      ```shell copy
      gpg --full-generate-key
      ```

    * If you are not on version 2.1.17 or greater, the `gpg --full-generate-key` command doesn't work. Paste the text below and skip to step 6.

      ```shell copy
      gpg --default-new-key-algo rsa4096 --gen-key
      ```

1. At the prompt, specify the kind of key you want, or press `Enter` to accept the default.
1. At the prompt, specify the key size you want, or press `Enter` to accept the default.
1. Enter the length of time the key should be valid. Press `Enter` to specify the default selection, indicating that the key doesn't expire. Unless you require an expiration date, we recommend accepting this default.
1. Verify that your selections are correct.
1. Enter your user ID information.

   > [!NOTE]
   > When asked to enter your email address, ensure that you enter the verified email address for your GitHub account. 
To keep your email address private, use your GitHub-provided `no-reply` email address.

  For more information, see [Verifying Your Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/verifying-your-email-address) and [Setting Your Commit Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).

1. Type a secure passphrase.
1. Use the `gpg --list-secret-keys --keyid-format=long` command to list the long form of the GPG keys for which you have both a public and private key. A private key is required for signing commits or tags.

   ```shell copy
   gpg --list-secret-keys --keyid-format=long
   ```

   > [!NOTE]
   > Some GPG installations on Linux may require you to use `gpg2 --list-keys --keyid-format LONG` to view a list of your existing keys instead. In this case you will also need to configure Git to use `gpg2` by running `git config --global gpg.program gpg2`.

1. From the list of GPG keys, copy the long form of the GPG key ID you'd like to use. In this example, the GPG key ID is `3AA5C34371567BD2`:

   ```shell copy
   $ gpg --list-secret-keys --keyid-format=long
   /Users/hubot/.gnupg/secring.gpg
   ------------------------------------
   sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
   uid                          Hubot <hubot@example.com>
   ssb   4096R/4BB6D45482678BE3 2016-03-10
   ```

1. Paste the text below, substituting in the GPG key ID you'd like to use. In this example, the GPG key ID is `3AA5C34371567BD2`:

   ```shell copy
   gpg --armor --export 3AA5C34371567BD2
   # Prints the GPG key ID, in ASCII armor format
   ```

1. Copy your GPG key, beginning with `-----BEGIN PGP PUBLIC KEY BLOCK-----` and ending with `-----END PGP PUBLIC KEY BLOCK-----`.
1. [Add the GPG key to your GitHub account](/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account).

## Further reading

* [Checking For Existing Gpg Keys](https://docs.github.com/en/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys)
* [Adding A Gpg Key To Your GitHub Account](https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account)
* [Telling Git About Your Signing Key](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)
* [Associating An Email With Your Gpg Key](https://docs.github.com/en/authentication/managing-commit-signature-verification/associating-an-email-with-your-gpg-key)
* [Signing Commits](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits)
* [Signing Tags](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-tags)
