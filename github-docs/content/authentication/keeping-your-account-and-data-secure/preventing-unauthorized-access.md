# Preventing unauthorized access

GitHub requires a password to perform sensitive actions, such as adding new SSH keys, authorizing applications, or modifying team members.

After changing your password, you should perform these actions to make sure that your account is secure:

* Enable two-factor authentication on your account so that access requires more than just a password. For more information, see [About Two Factor Authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication).
* Add a passkey to your account to enable a secure, passwordless login. Passkeys are phishing-resistant, and they don't require memorization or active management. See [About Passkeys](https://docs.github.com/en/authentication/authenticating-with-a-passkey/about-passkeys).
* Review your SSH keys, deploy keys, and authorized OAuth apps and GitHub Apps and revoke unauthorized or unfamiliar access in your SSH and Applications settings. For more information, see [Reviewing Your SSH Keys](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/reviewing-your-ssh-keys), [Reviewing Your Deploy Keys](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/reviewing-your-deploy-keys), [Reviewing Your Authorized OAUTH Apps](https://docs.github.com/en/apps/oauth-apps/using-oauth-apps/reviewing-your-authorized-oauth-apps), and [Reviewing And Revoking Authorization Of GitHub Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps).
* If you believe your account may be compromised, you can revoke all your authorizations or delete all your credentials at once. See [Revoking Your Credentials](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/revoking-your-credentials).

* Verify all your email addresses. If an attacker added their email address to your account, it could allow them to force an unintended password reset. For more information, see [Verifying Your Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/verifying-your-email-address).

* Review your account's security log. This provides an overview on various configurations made to your repositories. For example, you can ensure that no private repositories were turned public, or that no repositories were transferred. For more information, see [Reviewing Your Security Log](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log).
* Review the webhooks on your repositories. Webhooks could allow an attacker to intercept pushes made to your repository. For more information, see [About Webhooks](https://docs.github.com/en/webhooks/about-webhooks).
* Make sure that no new deploy keys were created. This could enable outside servers access to your projects. For more information, see [Managing Deploy Keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys#deploy-keys).
* Review recent commits made to your repositories.
* Review the list of collaborators for each repository.


## Troubleshooting

### Account is restricted after suspected compromise

If GitHub detects suspicious activity, your personal account may be temporarily restricted while you can still sign in. During this time, your profile URL, contribution graph, search visibility, or sensitive account actions may be unavailable. Alternatively, we may suspend the account for security reasons. If you’re unable to access your account at all, please contact GitHub Support.

If you see restrictions on your account, complete the following steps to secure your account:

1. Change your GitHub password. For more information, see [Updating Your GitHub Access Credentials](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/updating-your-github-access-credentials#changing-an-existing-password).
1. Review your security settings and remove unfamiliar apps, keys, and other credentials.
1. Secure the email account associated with GitHub and make sure you can access it.
1. Check your inbox (and spam folder) for security emails from GitHub and follow any instructions.

If restrictions remain after you secure your account, contact GitHub Support.
