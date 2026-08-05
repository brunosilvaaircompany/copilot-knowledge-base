# Configuring two-factor authentication recovery methods

In addition to securely storing your two-factor authentication (2FA) recovery codes, we strongly recommend configuring two or more authentication methods to avoid losing access to your account. For more information, see [Configuring Two Factor Authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key).

As well as configuring authentication methods, we'd also strongly suggest setting up some 2FA recovery methods which may be helpful if you were ever to lose your authentication methods. Recovery methods available to be configured include: the account's recovery codes file, SSH key(s), Personal access tokens (PATs) and verified device(s).

## About the recovery codes file

The recovery codes file includes one-time codes for account recovery if you can’t access your two-factor authentication method. You should download and store these codes securely.

### Downloading your two-factor authentication recovery codes

When you configure two-factor authentication, you'll download and save your 2FA recovery codes. If you lose access to your phone, you can authenticate to GitHub using your recovery codes.
 You can also download your recovery codes at any point after enabling two-factor authentication.

To keep your account secure, don't share or distribute your recovery codes. We recommend saving them with a secure password manager.

If you generate new recovery codes or disable and re-enable 2FA, the recovery codes in your security settings automatically update. Reconfiguring your 2FA settings without disabling 2FA will not change your recovery codes.

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Password and authentication**.

1. Next to "Recovery codes," click **View**.

   ![Screenshot of the recovery options in the 2FA settings. A gray button, labeled "View", is outlined in orange.](/assets/images/help/2fa/view-recovery-codes-button.png)

1. Save your recovery codes in a safe place. Your recovery codes can help you get back into your account if you lose access.
    * To save your recovery codes on your device, click **Download**.
    * To save a hard copy of your recovery codes, click **Print**.
    * To copy your recovery codes for storage in a password manager, click **Copy**.

### Generating a new set of recovery codes

Once you use a recovery code to regain access to your account, it cannot be reused. If you've used all 16 recovery codes, you can generate another list of codes. Generating a new set of recovery codes will invalidate any codes you previously generated.

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Password and authentication**.

1. Next to "Recovery codes," click **View**.

   ![Screenshot of the recovery options in the 2FA settings. A gray button, labeled "View", is outlined in orange.](/assets/images/help/2fa/view-recovery-codes-button.png)

1. Under "Generate new recovery codes", click **Generate new recovery codes**.

### Configuring backups for your time-based one-time password (TOTP) app

Most TOTP apps support backups. If you lose access to your authentication device, you can use your TOTP app backup to access your authentication method and account credentials on a different authentication device, ensuring continued access to your 2FA-enabled account.

The process of configuring backups is different for each TOTP app. For some examples from popular TOTP apps, see the following documentation:

* [1Password](https://support.1password.com/backups/)
* [Google Authenticator](https://security.googleblog.com/2023/04/google-authenticator-now-supports.html)
* [Microsoft Authenticator](https://support.microsoft.com/en-us/account-billing/back-up-and-recover-account-credentials-in-the-authenticator-app-bb939936-7a8d-4e88-bc43-49bc1a700a40)

## SSH keys

SSH keys can be configured and used for account recovery if ever required. To set up 1 or more SSH keys that can be used to recover access to your 2FA-enabled account, see [Adding A New SSH Key To Your GitHub Account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

> [!NOTE]
> Be sure to choose 'authentication' as the key's type during this process.

## Personal access tokens

Personal access tokens (PATs) can be configured and used for recovery if ever needed. To set up 1 or more PATs that can be used to recover access, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

> [!NOTE]
> Be sure to choose 'repo' when choosing the 'scopes' available during this process.

## Further reading

* [About Two Factor Authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)
* [Configuring Two Factor Authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)
* [Accessing GitHub Using Two Factor Authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication)
* [Recovering Your Account If You Lose Your 2Fa Credentials](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials)
