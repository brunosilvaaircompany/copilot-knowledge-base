# Accessing your enterprise account if your identity provider is unavailable

## About recovery codes

You can use a recovery code to access your enterprise account when an authentication configuration error or an issue with your identity provider (IdP) prevents you from using SSO.

In order to access your enterprise account this way, you must have previously downloaded and stored the recovery codes for your enterprise. For more information, see [Downloading Your Enterprise Accounts Single Sign On Recovery Codes](https://docs.github.com/en/admin/managing-iam/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes).

You can only use recovery codes once and you must use your codes in consecutive order. Recovery codes grant access for 24 hours.


## Using a recovery code

> [!NOTE]
> If your enterprises uses Enterprise Managed Users, you must sign in as the setup user to use a recovery code.

1. Attempt to access the enterprise account.
1. Under the single sign-on dialog, click **Use a recovery code**.
1. In the "Recovery Code" field, type your recovery code.
1. Click **Verify**.

After you've used a recovery code, make sure to note that the code is no longer valid. You will not be able to reuse the recovery code.
