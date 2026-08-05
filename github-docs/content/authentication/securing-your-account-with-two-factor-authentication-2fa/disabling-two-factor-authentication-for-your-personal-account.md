# Disabling two-factor authentication for your personal account

> [!NOTE]
> As of March 2023, GitHub required all users who contribute code on GitHub.com to enable one or more forms of two-factor authentication (2FA). If you were in an eligible group, you would have received a notification email when that group was selected for enrollment, marking the beginning of a 45-day 2FA enrollment period, and you would have seen banners asking you to enroll in 2FA on GitHub.com. If you didn't receive a notification, then you were not part of a group required to enable 2FA, though we strongly recommend it.

>
> For more information about the 2FA enrollment rollout, see [this blog post](https://github.blog/2023-03-09-raising-the-bar-for-software-security-github-2fa-begins-march-13).



> [!WARNING]
> If you're a member or billing manager to a repository of an organization that requires two-factor authentication and you disable 2FA, you'll lose your access to their repositories. To regain access to the organization, re-enable 2FA.

We strongly recommend using two-factor authentication (2FA) to secure your account. If you need to disable 2FA, we recommend re-enabling it as soon as possible.


If you are part of the group that GitHub is requiring to enroll in 2FA in 2023, you cannot disable 2FA. A banner will display in your authentication settings to remind you that you are not allowed to disable 2FA. For more information about our 2023 2FA enrollment rollout for contributors to GitHub, see [this blog post](https://github.blog/2023-03-09-raising-the-bar-for-software-security-github-2fa-begins-march-13).

You can modify your existing 2FA configuration instead of disabling it entirely. For more information, see [Changing Your Two Factor Authentication Method](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/changing-your-two-factor-authentication-method).


If your organization requires two-factor authentication and you're an outside collaborator on a repository of your organization, you must first leave the organization before you can disable 2FA. To remove yourself from your organization, visit your Organizations settings page and select "Leave", or ask an organization owner or repository administrator to remove you from the organization's repositories. For more information, see [Viewing Peoples Roles In An Organization](https://docs.github.com/en/account-and-profile/how-tos/organization-membership/viewing-peoples-roles-in-an-organization) and [Removing An Outside Collaborator From An Organization Repository](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/removing-an-outside-collaborator-from-an-organization-repository).

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Password and authentication**.


1. Click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then select **Disable two-factor authentication**.

   ![Screenshot of an account's 2FA settings. The ellipsis button (three dots) is highlighted with a dark orange outline.](/assets/images/help/2fa/disable-two-factor-authentication.png)

1. If necessary, enter your password or perform 2FA once more to disable 2FA for your GitHub account.

## Further reading

* [About Two Factor Authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)
* [Configuring Two Factor Authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)
* [Configuring Two Factor Authentication Recovery Methods](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)
