# Email addresses

## Adding an email address to your GitHub account

GitHub allows you to add as many email addresses to your account as you like. For more information, see [Adding An Email Address To Your GitHub Account](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/adding-an-email-address-to-your-github-account).

If you set an email address in your local Git configuration, you will need to add it to your account settings in order to connect your commits to your account. For more information about your email address and commits, see [Commit email addresses](#commit-email-addresses) below.

## Changing your primary email address

You can change the email address associated with your personal account at any time. You cannot change your primary email address to an email that is already set to be your backup email address. For more information, see [Changing Your Primary Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/changing-your-primary-email-address).

## Email verification for personal accounts

You can verify your email address after signing up for a new account, or when you add a new email address. If an email address is undeliverable or bouncing, it will be unverified.

Having an unverified email address does not affect most actions you can take on GitHub. However, we **recommend email verification** to prevent potential exploitation of third-party GitHub Apps and OAuth apps which may not have followed our best practices around secure authentication methods for apps.

For more information, see [Verifying Your Email Address](https://docs.github.com/en/free-pro-team@latest/account-and-profile/how-tos/email-preferences/verifying-your-email-address).

## Email verification for managed user accounts

For Enterprise Managed Users (EMUs), email addresses are no longer automatically verified. This prevents unauthorized access and potential data leaks from third-party GitHub Apps and OAuth applications that rely on email addresses as a primary identifier.

Until you verify your email address, your account will use a placeholder email address with your enterprise's shortcode appended for certain operations. For example, the [Users](https://docs.github.com/en/rest/users/users) and [Emails](https://docs.github.com/en/rest/users/emails) will return `email+shortcode@domain.com`. In rare cases, you may find that your company's email provider does not handle the placeholder email correctly, or that the placeholder prevents you from accessing some third-party GitHub Apps and OAuth apps.

Once you verify an email with a managed user account, you won't be able to use the email to sign up for a personal account on GitHub.com.

>[!NOTE] If you need to use the same email address for both your managed user account and another GitHub account (for example, for innersource, open source, or other valid use cases), you must sign in to your managed user account and unverify the email in your account settings.
>
> The email will still be linked to your managed user account, so you can continue signing in through your organization's or enterprise's identity provider (IdP). However, because the email is unverified, it may affect your access to third-party applications that identify users based solely on email address.

## Commit email addresses

GitHub uses your commit email address to associate commits with your account on GitHub. You can choose the email address that will be associated with the commits you push from the command line as well as web-based Git operations you make.

For web-based Git operations, you can set your commit email address on GitHub. For commits you push from the command line, you can set your commit email address in Git.

Any commits you made prior to changing your commit email address are still associated with your previous email address.

To use your `noreply` email address for commits you push from the command line, use that email address when you set your commit email address in Git. To use your `noreply` address for web-based Git operations, set your commit email address on GitHub and choose to **Keep my email address private**.

You can also choose to block commits you push from the command line that expose your personal email address. For more information, see [Blocking Command Line Pushes That Expose Your Personal Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/blocking-command-line-pushes-that-expose-your-personal-email-address).

To ensure that commits are attributed to you and appear in your contributions graph, use an email address that is connected to your account on GitHub, or the `noreply` email address provided to you in your email settings.

For more information, see [Setting Your Commit Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).

## Next steps

* For how-to procedures on managing your email preferences, see [Email Preferences](https://docs.github.com/en/account-and-profile/how-tos/email-preferences).
* For email address reference information, see [Email Addresses Reference](https://docs.github.com/en/account-and-profile/reference/email-addresses-reference).
