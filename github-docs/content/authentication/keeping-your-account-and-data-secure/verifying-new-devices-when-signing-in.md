# Verifying new devices when signing in

## About device verification

To keep your account secure when two-factor authentication (2FA) is not enabled, GitHub may ask you to verify your sign-in attempt when you access your account from an unrecognized device for the first time. This is called device verification. An unrecognized device requiring verification may include a new computer or phone, a new browser, or new browser profile.

You will only need to verify a new device once. If you clear your cookies, or use a different browser on the same device, GitHub may ask you to verify your device again.

GitHub will not ask you to perform device verification when you have 2FA enabled, or when you sign in using a passkey. See [Signing In With A Passkey](https://docs.github.com/en/authentication/authenticating-with-a-passkey/signing-in-with-a-passkey).

## Verifying your sign-in attempt

1. Sign in to GitHub, using your username and password.
1. If you are signing in from an unrecognized device, GitHub may ask to you pass a "Device verification" prompt. The verification code is sent to all primary and backup email addresses associated with your account. The code is valid for one hour.
    * If you have the GitHub Mobile application installed, GitHub sends a verification request to your mobile device, instead of sending an email. Enter the code displayed in your browser into the GitHub Mobile app to verify your sign-in. You can request an email code if your mobile device is unavailable.
1. Enter the verification code into your browser to verify your sign-in.

## Troubleshooting device verification

If you do not receive the verification code, make sure that you are checking the right email address. We only send the verification code to the primary and backup email addresses associated with your account. GitHub will provide you with a hint of the email(s) that the verification code was sent to. If you are certain that you are accessing the correct address, ensure your email account can receive emails from GitHub, or try waiting a few minutes in case there are temporary deliverability delays.

If you cannot provide the verification code because you don’t have access to your email address, you will not be able to verify your new device. You can access your GitHub account by using a device you’ve used before and, from there, you should add an email address that you can access to your account. See [Verifying Your Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/verifying-your-email-address).

If you cannot provide the verification code and do not have another active session on a device you’ve used before, you may be able to contact the provider of your email address account to determine your account recovery options. If your email address is completely inaccessible, you can create a new GitHub account with a different username and email address. See [Creating An Account On GitHub](https://docs.github.com/en/account-and-profile/how-tos/account-management/creating-an-account-on-github).

## Receiving an unexpected device verification email

If you receive a verification code from GitHub that you did not request, your GitHub password may have been compromised. You should immediately change your password and take steps to make sure that your account is secure. See [Preventing Unauthorized Access](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/preventing-unauthorized-access).

## Disabling device verification

You can disable the requirement to verify new devices via email by enabling 2FA. It is not possible to opt-out of device verification entirely without enabling 2FA. See [Configuring Two Factor Authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication).

You can sign in using a passkey to skip the device verification prompt. See [Signing In With A Passkey](https://docs.github.com/en/authentication/authenticating-with-a-passkey/signing-in-with-a-passkey).
