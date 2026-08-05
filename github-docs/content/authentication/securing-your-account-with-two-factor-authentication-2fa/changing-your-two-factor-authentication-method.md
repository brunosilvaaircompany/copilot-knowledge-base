# Changing your two-factor authentication method

You can reconfigure your two-factor authentication (2FA) settings or add new 2FA methods without disabling 2FA entirely, allowing you to keep both your recovery codes and your membership in organizations that require 2FA.

## Changing an existing two-factor authentication method


You can configure a different authenticator app or change your phone number, without disabling 2FA or creating a new set of recovery codes.

### Changing the TOTP app



You can change the time-based one-time password (TOTP) application you use to generate authentication codes.

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Password and authentication**.

1. In "Two-factor methods", find the method you want to modify. Next to that method, click **Edit**. If you have multiple methods configured, select {% octicon "kebab-horizontal" aria-label="Manage METHOD" %}, then click **Edit**.

    ![Screenshot of the "Two-factor methods" settings. To the right of "Authenticator app," the kebab icon, is expanded and outlined in orange.](/assets/images/help/2fa/edit-2fa-method-dropdown.png)

1. Under "Scan the QR code", do one of the following:

    * Scan the QR code with your mobile device's app. After scanning, the app displays a six-digit code that you can enter on GitHub.
    * If you can't scan the QR code, click **setup key** to see a code, the TOTP secret, that you can manually enter in your TOTP app instead.

   ![Screenshot of the "Setup authenticator app" section of the 2FA settings. A link, labeled "setup key", is highlighted in orange.](/assets/images/help/2fa/ghes-3.8-and-higher-2fa-wizard-app-click-code.png)

1. The TOTP application saves your account on your GitHub Enterprise Server instance and generates a new authentication code every few seconds. On GitHub, type the code into the field under "Verify the code from the app."

1. Click **Save** to save the method to your GitHub account.


> [!WARNING]
> Changes to an existing 2FA method will only take effect after you have provided a valid code from the new method and clicked **Save**. Only replace the existing 2FA method on your device (e.g. the GitHub entry in your TOTP app) after your new method is saved to your GitHub account completely.

If you are unable to scan the setup QR code or wish to setup a TOTP app manually and require the parameters encoded in the QR code, they are:

* Type: `TOTP`
* Label: `GitHub:<username>` where `<username>` is your handle on GitHub, for example `monalisa`
* Secret: This is the encoded setup key, shown if you click "Setup key" during configuration
* Issuer: `GitHub`
* Algorithm: The default of SHA1 is used
* Digits: The default of 6 is used
* Period: The default of 30 (seconds) is used




### Changing the SMS number

You can change the phone number you use to receive authentication codes via SMS.

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Password and authentication**.

1. In "Two-factor methods", find the method you want to modify. Next to that method, click **Edit**. If you have multiple methods configured, select {% octicon "kebab-horizontal" aria-label="Manage METHOD" %}, then click **Edit**.

    ![Screenshot of the "Two-factor methods" settings. To the right of "Authenticator app," the kebab icon, is expanded and outlined in orange.](/assets/images/help/2fa/edit-2fa-method-dropdown.png)

1. Complete the CAPTCHA challenge, which helps protect against spam and abuse.
1. Under "Verify account", select your country code and type your mobile phone number, including the area code. When your information is correct, click **Send authentication code**.
1. You'll receive a text message with a security code. On GitHub, type the code into the field under "Verify the code sent to your phone" and click **Continue**.

   * If you need to edit the phone number you entered, you'll need to complete another CAPTCHA challenge.

1. Click **Save** to save the method to your GitHub account.




## Adding additional two-factor authentication methods

We recommend adding more than one 2FA method to your account. This ensures that you can still sign in to your account, even if you lose one of your methods.

In addition to adding multiple 2FA methods, we strongly recommend setting up multiple recovery methods to avoid losing access to your account. For more information, see [Configuring Two Factor Authentication Recovery Methods](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods).



### Adding a TOTP app

You can add a time-based one-time password (TOTP) application to generate authentication codes.


1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Password and authentication**.

1. In "Two-factor methods", find the method you want to add. Next to that method, click **Add**.

   ![Screenshot of the "Two-factor methods" settings. To the right of "SMS/Text message," a button labeled "Add" is outlined in orange.](/assets/images/help/2fa/add-sms-number-option.png)

1. Under "Scan the QR code", do one of the following:

    * Scan the QR code with your mobile device's app. After scanning, the app displays a six-digit code that you can enter on GitHub.
    * If you can't scan the QR code, click **setup key** to see a code, the TOTP secret, that you can manually enter in your TOTP app instead.

   ![Screenshot of the "Setup authenticator app" section of the 2FA settings. A link, labeled "setup key", is highlighted in orange.](/assets/images/help/2fa/ghes-3.8-and-higher-2fa-wizard-app-click-code.png)

1. The TOTP application saves your account on your GitHub Enterprise Server instance and generates a new authentication code every few seconds. On GitHub, type the code into the field under "Verify the code from the app."

1. Click **Save** to save the method to your GitHub account.

If you are unable to scan the setup QR code or wish to setup a TOTP app manually and require the parameters encoded in the QR code, they are:

* Type: `TOTP`
* Label: `GitHub:<username>` where `<username>` is your handle on GitHub, for example `monalisa`
* Secret: This is the encoded setup key, shown if you click "Setup key" during configuration
* Issuer: `GitHub`
* Algorithm: The default of SHA1 is used
* Digits: The default of 6 is used
* Period: The default of 30 (seconds) is used




### Adding an SMS number

Before using this method, be sure that you can receive text messages. Carrier rates may apply.

> [!WARNING]
> We **strongly recommend** using a TOTP application for two-factor authentication instead of SMS, and using security keys as backup methods instead of SMS. SMS is susceptible to interception, does not provide resistance against phishing attacks, has unreliable deliverability, and is not supported in all countries. Before configuring authentication via text message, review the list of countries where GitHub supports authentication via SMS. For more information, see [Countries Where Sms Authentication Is Supported](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/countries-where-sms-authentication-is-supported).


1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Password and authentication**.

1. In "Two-factor methods", find the method you want to add. Next to that method, click **Add**.

   ![Screenshot of the "Two-factor methods" settings. To the right of "SMS/Text message," a button labeled "Add" is outlined in orange.](/assets/images/help/2fa/add-sms-number-option.png)

1. Complete the CAPTCHA challenge, which helps protect against spam and abuse.
1. Under "Verify account", select your country code and type your mobile phone number, including the area code. When your information is correct, click **Send authentication code**.
1. You'll receive a text message with a security code. On GitHub, type the code into the field under "Verify the code sent to your phone" and click **Continue**.

   * If you need to edit the phone number you entered, you'll need to complete another CAPTCHA challenge.

1. Click **Save** to save the method to your GitHub account.




## Setting a preferred two-factor authentication method

If you have multiple 2FA methods, you can choose a preferred method that will be shown first when you are asked to authenticate with 2FA.

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Password and authentication**.

1. Under "Two-factor authentication" in "Preferred 2FA method", select your preferred 2FA method from the dropdown.

## Further reading

* [Configuring Two Factor Authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)
* [Configuring Two Factor Authentication Recovery Methods](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)
