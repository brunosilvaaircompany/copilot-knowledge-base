# Recovering your account if you lose your 2FA credentials

> [!WARNING]
> For security reasons, GitHub Support [will not be able to restore access to accounts](/free-pro-team@latest/site-policy/other-site-policies/github-account-recovery-policy) with two-factor authentication enabled if you lose your two-factor authentication credentials or lose access to your account recovery methods.


> [!NOTE]
> If you cannot use any recovery methods, you have permanently lost access to your account. However, you can unlink an email address tied to the locked account. The unlinked email address can then be linked to a new or existing account. For more information, see [Unlinking Your Email Address From A Locked Account](https://docs.github.com/en/account-and-profile/how-tos/account-management/unlinking-your-email-address-from-a-locked-account).




## Using a two-factor authentication recovery code

Use one of your recovery codes to automatically regain entry into your account. You may have saved your recovery codes to a password manager or your computer's downloads folder. The default filename for recovery codes is `github-recovery-codes.txt`. For more information about recovery codes, see [Configuring Two Factor Authentication Recovery Methods](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes).

> [!NOTE]
> If you do not know your password, you can use a recovery code after requesting a new password. See [Updating Your GitHub Access Credentials](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/updating-your-github-access-credentials#requesting-a-new-password).

1. Navigate to  [`https://github.com/login`](https://github.com/login) {%- elsif ghes %} `http(s)://HOSTNAME/login` .
1. To prompt two-factor authentication, type your username and password, then click **Sign in**.


   > [!NOTE]
   > If you have linked a social account to your GitHub account, you can sign-in with your social login instead of using your password.


1. Under "More options", click **2FA recovery code**.

1. Type one of your recovery codes, then click **Verify**.

> [!NOTE]
> If you are receiving a "Recovery code authentication failed" error when using a recovery code, the code you are entering is invalid. You can try troubleshooting your recovery codes. See [Troubleshooting Two Factor Authentication Issues](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/troubleshooting-two-factor-authentication-issues).

## Authenticating with a passkey

If you have added a passkey to your account, you can use your passkey to automatically regain access to your account. Passkeys satisfy both password and 2FA requirements, so you don't need to know your password in order to recover your account. See [About Passkeys](https://docs.github.com/en/authentication/authenticating-with-a-passkey/about-passkeys).

## Authenticating with a security key

If you configured two-factor authentication using a security key, you can use your security key as a secondary authentication method to automatically regain access to your account. For more information, see [Configuring Two Factor Authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key).



## Authenticating with a fallback number

> [!NOTE]
> Configuring a fallback SMS number in addition to your primary SMS number is no longer supported. Instead, we strongly recommend registering multiple authentication methods.

If you lose access to your preferred TOTP app or phone number, you can provide a two-factor authentication code sent to your fallback number to automatically regain access to your account.

## Authenticating with a verified device, SSH token, or personal access token

If you know your password for GitHub but don't have the two-factor authentication credentials or your two-factor authentication recovery codes, you can have a one-time password sent to your verified email address to begin the verification process. You'll need to verify your identity using a recovery authentication factor, such as an SSH key or previously verified device.

> [!NOTE]
> For security reasons, regaining access to your account by authenticating with a one-time password can take up to three business days. GitHub will not review additional requests submitted during this time.

You can use your two-factor authentication credentials or two-factor authentication recovery codes to regain access to your account anytime during the 3-5 day waiting period.

> [!WARNING]
> If you protect your personal account with two-factor authentication but do not know your password,  you will need to begin with a password reset request. For more information, see [Recovering without your password](/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials#recovering-without-your-password).


1. Navigate to  [`https://github.com/login`](https://github.com/login) {%- elsif ghes %} `http(s)://HOSTNAME/login` .
1. To prompt two-factor authentication, type your username and password, then click **Sign in**.


   > [!NOTE]
   > If you have linked a social account to your GitHub account, you can sign-in with your social login instead of using your password.


1. Under "More options", click **2FA recovery code**.

1. Under "More options", click **Begin account or email recovery**.
1. In the modal that appears, click **I understand, get started**.
1. You may be required to verify an email address. To send an email containing a one-time password to each email address associated with your account, click **Send one-time password**.
   > [!NOTE]
   > The one-time password will be sent to your primary and backup email addresses. Unless you have previously chosen a specific backup email address, all verified emails are considered backup email addresses.
1. Type the one-time password from your email in the "One-time password" text field, then click **Verify email address**.

1. Choose a recovery verification factor.

    * If you've used your current device to log into this account before and would like to use the device for verification, click **Verify with this device**.
    * If you've previously set up an SSH key on this account and would like to use the SSH key for verification, click **SSH key**.
    * If you've previously set up a personal access token and would like to use the personal access token for verification, click **Personal access token**.

    > [!NOTE]
    > For security reasons, an authentication factor may not be available for recovery, even if you've used that authentication method with the account before. For example, SSH keys are removed from accounts after a period of inactivity.


A member of GitHub Support will review your request and email you within three business days. If your request is approved, you'll receive a link to complete your account recovery process. If your request is denied, the email will include a way to contact support.






## Recovering without your password

If you have forgotten your password, you can request a new password and recover your account during the password reset process.

### Using a two-factor authentication recovery code to reset your password

If you have your recovery codes, you can use them to complete the password reset process. See [Updating Your GitHub Access Credentials](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/updating-your-github-access-credentials#requesting-a-new-password).

### Recovering without your password or two-factor authentication credentials

If you have lost access to your two-factor authentication credentials and your recovery codes, you can start account recovery request. You'll need to verify your identity using a recovery authentication factor, such as an SSH key or previously verified device.

1. To request a new password, visit https://{% ifversion fpt or ghec %}github.com/password_reset.
1. Enter the email address associated with your account, then click **Send password reset email.**
   > [!NOTE]
   > Only primary and backup email addresses can be used to request a new password. Unless you have previously chosen a specific backup email address, all verified emails are considered backup email addresses.
1. GitHub will email you a link that will allow you to reset your password. You must click on this link within 3 hours of receiving the email. If you didn't receive an email from us, make sure to check your spam folder.


1. You will be prompted for your 2FA credentials. Under "More options", click **Begin account or email recovery**.
1. In the modal that appears, click **I understand, get started**.

1. Choose a recovery verification factor.

    * If you've used your current device to log into this account before and would like to use the device for verification, click **Verify with this device**.
    * If you've previously set up an SSH key on this account and would like to use the SSH key for verification, click **SSH key**.
    * If you've previously set up a personal access token and would like to use the personal access token for verification, click **Personal access token**.

    > [!NOTE]
    > For security reasons, an authentication factor may not be available for recovery, even if you've used that authentication method with the account before. For example, SSH keys are removed from accounts after a period of inactivity.


A member of GitHub Support will review your request and email you within three business days. If your request is approved, you'll receive a link to complete your account recovery process. If your request is denied, the email will include a way to contact support.


## Unlinking your email address

If you have exhausted your recovery options, you can unlink your email address from your account. The email address is then available for you to link it to a new or existing account, maintaining your commit history. See [Unlinking Your Email Address From A Locked Account](https://docs.github.com/en/account-and-profile/how-tos/account-management/unlinking-your-email-address-from-a-locked-account).

{% endif %}

## Further reading

* [Troubleshooting Two Factor Authentication Issues](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/troubleshooting-two-factor-authentication-issues)
* [Configuring Two Factor Authentication Recovery Methods](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)
