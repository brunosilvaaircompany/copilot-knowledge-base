# Configuring two-factor authentication

> [!NOTE]
> As of March 2023, GitHub required all users who contribute code on GitHub.com to enable one or more forms of two-factor authentication (2FA). If you were in an eligible group, you would have received a notification email when that group was selected for enrollment, marking the beginning of a 45-day 2FA enrollment period, and you would have seen banners asking you to enroll in 2FA on GitHub.com. If you didn't receive a notification, then you were not part of a group required to enable 2FA, though we strongly recommend it.

>
> For more information about the 2FA enrollment rollout, see [this blog post](https://github.blog/2023-03-09-raising-the-bar-for-software-security-github-2fa-begins-march-13).



You can configure two-factor authentication (2FA) using a TOTP app on mobile or desktop or via text message. After you have configured 2FA using a TOTP app or via text message, you can then also add security keys as alternate 2FA methods.

We strongly recommend using a time-based one-time password (TOTP) application to configure 2FA, and security keys as backup methods instead of SMS. TOTP applications are more reliable than SMS, especially for locations outside the United States. Many TOTP apps support the secure backup of your authentication codes in the cloud and can be restored if you lose access to your device.



After you configure 2FA, your account will enter a 28-day check up period. You can leave the check up period by successfully performing 2FA in those 28 days. Otherwise, you will be prompted to perform 2FA in an existing GitHub session on the 28th day. If you cannot perform 2FA to pass the checkup, you must use the provided shortcut to reconfigure your 2FA settings and retain access to GitHub.

{% ifversion fpt or ghec %}

If you're a member of an enterprise with managed users, you cannot configure 2FA for your managed user account account unless you're signed in as the setup user. For users other than the setup user, an administrator must configure 2FA on your identity provider (IdP).


{% endif %}

> [!WARNING]
> * If you're an outside collaborator to a private repository of an organization that requires 2FA, you must leave the organization before you can disable 2FA.
> * If you're a member or billing manager of an organization that requires 2FA, you will be unable to access that organization's resources while you have 2FA disabled.
> * If you disable 2FA, you will automatically lose access to the organization. To regain access to the organization, if you're a member or billing manager, you must re-enable 2FA. If you're an outside collaborator, you will also lose access to any private forks you have of the organization's private repositories after disabling 2FA, and must re-enable 2FA and contact an organization owner to have access restored.

> [!NOTE]
> You can reconfigure your 2FA settings without disabling 2FA entirely, allowing you to keep both your recovery codes and your membership in organizations that require 2FA. See [Changing Your Two Factor Authentication Method](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/changing-your-two-factor-authentication-method).

## Configuring two-factor authentication using a TOTP app

A time-based one-time password (TOTP) application automatically generates an authentication code that changes after a certain period of time. These apps can be downloaded to your phone or desktop. We recommend using cloud-based TOTP apps. GitHub is app-agnostic when it comes to TOTP apps, so you have the freedom to choose any TOTP app you prefer. Just search for `TOTP app` in your browser to find various options. You can also refine your search by adding keywords like `free` or `open source` to match your preferences.

> [!TIP]
> To configure authentication via TOTP on multiple devices, during setup, scan the QR code using each device at the same time or save the "setup key," which is the TOTP secret. If 2FA is already enabled and you want to add another device, you must re-configure your TOTP app from your security settings.

1. Download a TOTP app of your choice to your phone or desktop.
1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Password and authentication**.

1. In the "Two-factor authentication" section of the page, click **Enable two-factor authentication**.

1. Under "Scan the QR code", do one of the following:

    * Scan the QR code with your mobile device's app. After scanning, the app displays a six-digit code that you can enter on GitHub.
    * If you can't scan the QR code, click **setup key** to see a code, the TOTP secret, that you can manually enter in your TOTP app instead.

   ![Screenshot of the "Setup authenticator app" section of the 2FA settings. A link, labeled "setup key", is highlighted in orange.](/assets/images/help/2fa/ghes-3.8-and-higher-2fa-wizard-app-click-code.png)

1. The TOTP application saves your account on your GitHub Enterprise Server instance and generates a new authentication code every few seconds. On GitHub, type the code into the field under "Verify the code from the app."

1. Under "Save your recovery codes", click **Download** to download your recovery codes to your device. Save them to a secure location because your recovery codes can help you get back into your account if you lose access.
1. After saving your two-factor recovery codes, click **I have saved my recovery codes** to enable two-factor authentication for your account.

1. Optionally, you can configure additional 2FA methods to reduce your risk of account lockout. For more details on how to configure each additional method, see [Configuring two-factor authentication using a security key](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key) and [Configuring two-factor authentication using GitHub Mobile](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile).


### Manually configuring a TOTP app

If you are unable to scan the setup QR code or wish to setup a TOTP app manually and require the parameters encoded in the QR code, they are:

* Type: `TOTP`
* Label: `GitHub:<username>` where `<username>` is your handle on GitHub, for example `monalisa`
* Secret: This is the encoded setup key, shown if you click "Setup key" during configuration
* Issuer: `GitHub`
* Algorithm: The default of SHA1 is used
* Digits: The default of 6 is used
* Period: The default of 30 (seconds) is used




## Configuring two-factor authentication using text messages

If you're unable to configure a TOTP app, you can also register your phone number to receive SMS messages.

Before using this method, be sure that you can receive text messages. Carrier rates may apply.

> [!WARNING]
> We **strongly recommend** using a TOTP application for two-factor authentication instead of SMS, and using security keys as backup methods instead of SMS. SMS is susceptible to interception, does not provide resistance against phishing attacks, has unreliable deliverability, and is not supported in all countries. Before configuring authentication via text message, review the list of countries where GitHub supports authentication via SMS. For more information, see [Countries Where Sms Authentication Is Supported](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/countries-where-sms-authentication-is-supported).

> [!NOTE]
> Organizations and enterprises have the ability to prevent content access to members who have SMS 2FA configured. If you are a member of any organization or enterprise that has made this decision, you should enable TOTP application-configured 2FA instead. Outside collaborators may not enable SMS 2FA if their organization or enterprise has disallowed it. To continue working on content within an organization, enable 2FA with a TOTP application and disable SMS 2FA.


1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Password and authentication**.

1. In the "Two-factor authentication" section of the page, click **Enable two-factor authentication**.

1. Complete the CAPTCHA challenge, which helps protect against spam and abuse.
1. Under "Verify account", select your country code and type your mobile phone number, including the area code. When your information is correct, click **Send authentication code**.
1. You'll receive a text message with a security code. On GitHub, type the code into the field under "Verify the code sent to your phone" and click **Continue**.

   * If you need to edit the phone number you entered, you'll need to complete another CAPTCHA challenge.

1. Under "Save your recovery codes", click **Download** to download your recovery codes to your device. Save them to a secure location because your recovery codes can help you get back into your account if you lose access.
1. After saving your two-factor recovery codes, click **I have saved my recovery codes** to enable two-factor authentication for your account.

1. Optionally, you can configure additional 2FA methods to reduce your risk of account lockout. For more details on how to configure each additional method, see [Configuring two-factor authentication using a security key](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key) and [Configuring two-factor authentication using GitHub Mobile](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile).




## Configuring two-factor authentication using a passkey

Passkeys allow you to sign in securely to GitHub in your browser, without having to input your password.

If you use two-factor authentication (2FA), passkeys satisfy both password and 2FA requirements, so you can complete your sign in with a single step. If you don't use 2FA, using a passkey will skip the requirement to verify a new device via email. You can also use passkeys for sudo mode and resetting your password.
 See [About Passkeys](https://docs.github.com/en/authentication/authenticating-with-a-passkey/about-passkeys).

> [!NOTE]
> Platform authenticators like Windows Hello, Face ID, or Touch ID can be registered as a passkey instead.

1. You must have already configured 2FA via a TOTP mobile app or via SMS.
1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Password and authentication**.

1. Under “Passkeys”, click **Add a passkey**.

1. If prompted, authenticate with your password, or use another existing authentication method.
1. Under “Configure passwordless authentication”, review the prompt, then click **Add passkey**.
1. At the prompt, follow the steps outlined by the passkey provider.
1. On the next page, review the information confirming that a passkey was successfully registered, then click **Done**.



## Configuring two-factor authentication using a security key

Not all FIDO authenticators can be used as passkeys, but you can still register those authenticators as security keys. Security keys are also WebAuthn credentials, but unlike passkeys they don't require user validation. Since security keys only need to verify user presence, they only count as a second factor and must be used in conjunction with your password.

Registering a security key for your account is available after enabling 2FA with a TOTP application or a text message. If you lose your security key, you'll still be able to use your phone's code to sign in.

1. You must have already configured 2FA via a TOTP mobile app or via SMS.
1. Ensure that you have a WebAuthn compatible security key inserted into your device.
1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Password and authentication**.

1. Next to "Security keys," click **Add**.

   ![Screenshot of the "two-factor methods" section of the 2FA settings. A gray button labeled "Add" is outlined in orange.](/assets/images/help/2fa/add-security-keys-option.png)

1. Under "Security keys," click **Register new security key**.
1. Type a nickname for the security key, then click **Add**.
1. Following your security key's documentation, activate your security key.
1. Confirm that you've downloaded and can access your recovery codes. If you haven't already, or if you'd like to generate another set of codes, download your codes and save them in a safe place. For more information, see [Configuring Two Factor Authentication Recovery Methods](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes).



## Configuring two-factor authentication using GitHub Mobile

You can use GitHub Mobile for 2FA when signing into your GitHub account in a web browser. 2FA with GitHub Mobile does not rely on TOTP, and instead uses public-key cryptography to secure your account.

Once you have configured a TOTP application, or SMS, you can also use GitHub Mobile to authenticate. If, in the future, you no longer have access to GitHub Mobile, you will still be able to use security keys or TOTP applications to sign in.

1. You must have already configured 2FA via a TOTP mobile app or via SMS.
1. Install [GitHub Mobile](https://github.com/mobile).
1. Sign in to your GitHub account from GitHub Mobile.
1. Ensure GitHub Mobile can send push notifications. If you have not opted in to push notifications, you can turn them on within notification settings in GitHub Mobile.

After signing in and turning on push notifications, you can now use your device for 2FA.


## Further reading

* [About Two Factor Authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)
* [Configuring Two Factor Authentication Recovery Methods](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)
* [Accessing GitHub Using Two Factor Authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication)
* [Troubleshooting Two Factor Authentication Issues](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/troubleshooting-two-factor-authentication-issues)
* [Recovering Your Account If You Lose Your 2Fa Credentials](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials)
* [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
