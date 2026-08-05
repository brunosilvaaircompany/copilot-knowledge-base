# Disabling persistent commit verification

## About persistent commit verification

When persistent commit verification is enabled, GitHub Enterprise Server stores a verification record alongside each commit when its signature is verified. This record ensures that verified commits maintain their verification status even if signing keys are later rotated, expired, or revoked. For more information about persistent commit verification, see [About Commit Signature Verification](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification#persistent-commit-signature-verification).

By default, persistent commit verification is enabled on GitHub Enterprise Server 3.17 and later.

Each verified commit requires approximately 80 bytes of storage. For large installations with a large number of verified commits (e.g., hundreds of thousands or more), you may want to disable this feature to limit data growth.

## Disabling persistent commit verification

You can disable persistent commit verification for your GitHub Enterprise Server instance.

1. In the administrative shell, run the following command.

   ```bash copy
   ghe-config app.persist-commit-signature-verification.enabled false
   ```

1. Apply the configuration.

   ```bash copy
   ghe-config-apply
   ```

## Enabling persistent commit verification

If you previously disabled persistent commit verification, you can re-enable it.

1. In the administrative shell, run the following command.

   ```bash copy
   ghe-config app.persist-commit-signature-verification.enabled true
   ```

1. Apply the configuration.

   ```bash copy
   ghe-config-apply
   ```
