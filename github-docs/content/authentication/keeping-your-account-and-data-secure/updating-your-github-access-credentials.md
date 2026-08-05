# Updating your GitHub access credentials

> [!NOTE] This article contains commands or examples that use the `github.com` domain. You might access GitHub at a different domain, such as `octocorp.ghe.com`.




## Requesting a new password

1. To request a new password, visit https://github.com/password_reset.
1. Enter the email address associated with your account, then click **Send password reset email.**
   > [!NOTE]
   > Only primary and backup email addresses can be used to request a new password. Unless you have previously chosen a specific backup email address, all verified emails are considered backup email addresses.
1. GitHub will email you a link that will allow you to reset your password. You must click on this link within 3 hours of receiving the email. If you didn't receive an email from us, make sure to check your spam folder.


1. If you have enabled two-factor authentication, you will be prompted for your 2FA credentials:
   * If you have added a passkey or a security key to your account, click **Use passkey or security key**.
   
   * If you have set up [GitHub Mobile](https://github.com/mobile), you will be sent a push notification to verify your identity. If you didn't receive a notification, click "More options", then **Authenticate with GitHub Mobile**.
   
   * Alternatively, type your TOTP or SMS authentication code, or one of your recovery codes, and click **Verify**.

   
   > [!NOTE]
   > If you've lost access to your two-factor authentication credentials and your recovery codes, you can start account recovery request. See [Recovering Your Account If You Lose Your 2Fa Credentials](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials#recovering-without-your-password-or-two-factor-authentication-credentials).
   
1. In the text field under **Password**, type a new password. Then, in the text field under **Confirm password**, type the password again.
1. Click **Change password**. For help creating a strong password, see [Creating A Strong Password](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-strong-password).

> [!TIP]
> To avoid losing your password in the future, we suggest using a secure password manager.

## Changing an existing password


When you type a password to sign in, create an account, or change your password, GitHub will check if the password you entered is considered weak according to datasets like HaveIBeenPwned. The password may be identified as weak even if you have never used that password before.

GitHub only inspects the password at the time you type it, and never stores the password you entered in plaintext. For more information, see [HaveIBeenPwned](https://haveibeenpwned.com/).



1. Sign in to GitHub.
1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Password and authentication**.

1. Under "Change password", type your old password, a strong new password, and confirm your new password. For help creating a strong password, see [Creating A Strong Password](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-strong-password).
1. Click **Update password**.

> [!TIP]
> For greater security, enable two-factor authentication in addition to changing your password. See [About two-factor authentication](/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication) for more details.

## Updating your access tokens

See [Reviewing And Revoking Authorization Of GitHub Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps) for instructions on reviewing and deleting access tokens. To generate new access tokens, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

If you have reset your account password and would also like to trigger a sign-out from the GitHub Mobile app, you can revoke your authorization of the "GitHub iOS" or "GitHub Android" OAuth app. This will sign out all instances of the GitHub Mobile app associated with your account. For additional information, see [Reviewing And Revoking Authorization Of GitHub Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps).

## Updating your SSH keys

See [Reviewing Your SSH Keys](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/reviewing-your-ssh-keys) for instructions on reviewing and deleting SSH keys. To generate and add new SSH keys, see [Connecting To GitHub With SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

## Resetting API tokens

If you have any applications registered with GitHub, you'll want to reset their OAuth tokens. For more information, see the `PATCH /applications/{client_id}/token` endpoint in [OAUTH Applications](https://docs.github.com/en/rest/apps/oauth-applications#reset-a-token).

## Preventing unauthorized access

For more tips on securing your account and preventing unauthorized access, see [Preventing Unauthorized Access](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/preventing-unauthorized-access).
