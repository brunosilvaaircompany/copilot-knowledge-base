# Inviting people to use your instance

## About invitations for new users

When you use built-in authentication for your GitHub Enterprise Server instance, each person creates a personal account from an invitation or by signing up.
 By default, people who can access your instance while unauthenticated can create a new personal account on your instance.


You can disable unauthenticated sign-ups and require an invitation to create a new user account on your instance. For more information, see [Disabling Unauthenticated Sign Ups](https://docs.github.com/en/admin/managing-iam/using-built-in-authentication/disabling-unauthenticated-sign-ups).

Alternatively, you can configure external authentication for your GitHub Enterprise Server instance. If you use external authentication, you must invite people to use your instance through your authentication provider. For more information, see [Identity And Access Management Fundamentals](https://docs.github.com/en/admin/concepts/identity-and-access-management/identity-and-access-management-fundamentals#external-authentication).


## Inviting people to create a user account

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the left sidebar, click **Invite user**.

1. Type the username and email address for each of the user accounts that you'd like to create, then click **Generate a password reset link**.


If you've configured email for notifications on your GitHub Enterprise Server instance, your instance will send the invitation to the provided email address. For more information, see [Configuring Email For Notifications](https://docs.github.com/en/admin/configuring-settings/configuring-user-applications-for-your-enterprise/configuring-email-for-notifications).
