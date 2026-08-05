# GitHub Mobile

## About GitHub Mobile

GitHub Mobile is available as an Android and iOS app.


GitHub Mobile gives you a way to do high-impact work on GitHub quickly and from anywhere. GitHub Mobile is a safe and secure way to access your data through a trusted, first-party client application.

With GitHub Mobile you can:

* Manage, triage, and clear notifications
* Read, review, and collaborate on issues and pull requests
* Edit files in pull requests
* Search for, browse, and interact with users, repositories, and organizations
* Receive a push notification when someone mentions your username
* Search through code in a specific repository
* Secure your GitHub.com account with two-factor authentication
* Verify your sign in attempts on unrecognized devices
* Use GitHub Copilot Chat to ask and receive answers to coding-related questions

The following documentation contains more information about using GitHub features on GitHub Mobile.

* Notifications for GitHub Mobile, see [Configuring Notifications](https://docs.github.com/en/subscriptions-and-notifications/get-started/configuring-notifications#managing-your-notification-settings-with-github-mobile).
* Using GitHub code search on GitHub Mobile, see [Using GitHub Code Search](https://docs.github.com/en/search-github/github-code-search/using-github-code-search#using-github-code-search-on-github-mobile).
* Two-factor authentication using GitHub Mobile, see [Configuring Two Factor Authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile) and [Authenticating using GitHub Mobile](/authentication/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication#verifying-with-github-mobile). 
* Using GitHub Copilot Chat in GitHub Mobile, see [Chat In Mobile](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-mobile).
* Assigning issues to Copilot from GitHub Mobile, see [Start Copilot Sessions](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/start-copilot-sessions).

## Installing GitHub Mobile

To install GitHub Mobile for Android or iOS, see [GitHub Mobile](https://github.com/mobile).

## Managing accounts

You can be simultaneously signed into mobile with multiple accounts on GitHub.com, on GHE.com, and on GitHub Enterprise Server. For more information about our different products, see [Githubs Plans](https://docs.github.com/en/get-started/learning-about-github/githubs-plans).

GitHub Enterprise Server uses background fetch to support push notifications, so you may experience a delay in receiving push notifications.


GitHub Mobile may not work with your enterprise if you're required to access your enterprise over VPN.

### Signing in with social login

> [!NOTE]
> Social login is only available for GitHub Free and GitHub Enterprise Cloud users

You can sign in to GitHub Mobile using a supported social login provider. Currently, both Google and Apple are supported for social login on the GitHub Mobile for Android and iOS users. To use this option, make sure you originally created your GitHub account using the respective social login provider - Google or Apple.

### Prerequisites for GHE.com accounts

To access accounts on GitHub Enterprise Cloud with data residency using GitHub Mobile, you need to install GitHub Mobile with at least version iOS 1.182.0 or Android 1.178.0.

### Prerequisites for GitHub Enterprise Server accounts

You must install GitHub Mobile 1.4 or later on your device to use GitHub Mobile with GitHub Enterprise Server.

To use GitHub Mobile with GitHub Enterprise Server, GitHub must be version 3.0 or greater, and your enterprise owner must enable mobile support for your enterprise. For more information, see [Release Notes](https://docs.github.com/en/admin/release-notes) and [Managing GitHub Mobile for your enterprise](/enterprise-server@latest/admin/configuring-settings/configuring-user-applications-for-your-enterprise/managing-github-mobile-for-your-enterprise) in the GitHub Enterprise Server documentation.

During the public preview for GitHub Mobile with GitHub Enterprise Server, you must be signed in with a personal account on GitHub.com.

### Adding, switching, or signing out of accounts

You can sign into mobile with any GitHub account, on GitHub.com, on SUBDOMAIN.ghe.com, or on GitHub Enterprise Server. At the bottom of the app, long-press **{% octicon "person" aria-hidden="true" aria-label="person" %} Profile**, then tap **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add Enterprise Account**. Follow the prompts to sign in.

After signing in with a second account, you can switch between the accounts you're currently logged into within the app. At the bottom of the app, long-press **{% octicon "person" aria-hidden="true" aria-label="person" %} Profile**, then tap the account you want to switch to.

If you no longer need to access an account using GitHub Mobile, you can sign out of that account. At the bottom of the app, long-press **{% octicon "person" aria-hidden="true" aria-label="person" %} Profile**, swipe left on the account to sign out of, then tap **Sign out**.

Alternatively, once logged into one account, access the account switcher to log into other accounts or log out of an existing account by navigating to the **{% octicon "person" aria-hidden="true" aria-label="person" %} Profile** tab, then tapping {% octicon "gear" aria-hidden="true" aria-label="gear" %}, and then tapping **Manage Accounts**.

## Supported languages for GitHub Mobile

GitHub Mobile is available in the following languages.

* English
* Spanish
* Japanese
* Brazilian Portuguese
* Simplified Chinese
* Korean
* German

If you configure the language on your device to a supported language, GitHub Mobile will default to the language. You can change the language for GitHub Mobile in GitHub Mobile's **Settings** menu.

## Managing Universal Links for GitHub Mobile on iOS

GitHub Mobile automatically enables Universal Links for iOS. When you tap any GitHub link, the destination URL will open in GitHub Mobile instead of Safari. For more information, see [Universal Links](https://developer.apple.com/ios/universal-links/) on the Apple Developer site.

To disable Universal Links, long-press any GitHub link, then tap **Open**. Every time you tap a GitHub link in the future for the same GitHub instance, the destination URL will open in Safari instead of GitHub Mobile.

To re-enable Universal Links, long-press any GitHub link, then tap **Open in GitHub**.

## Sharing feedback

You can submit feature requests or other feedback for GitHub Mobile on [GitHub Community](https://github.com/orgs/community/discussions/categories/mobile).

## Opting out of public preview releases for iOS

If you're testing a public preview release of GitHub Mobile for iOS using TestFlight, you can leave the public preview at any time.

1. On your iOS device, open the TestFlight app.
1. Under "Apps," tap **GitHub**.
1. At the bottom of the page, tap **Stop Testing**.
