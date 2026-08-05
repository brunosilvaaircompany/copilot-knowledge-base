# Troubleshooting adding an email

## Email already in use

If you see the error message `Error adding EMAIL: email is already in use`, it means the email address is already linked to another GitHub account. An email address can only be associated with one GitHub account at a time.

To use this email with a different account, follow these steps:

1. Sign in to the account currently linked to the email address and remove it from that account.
1. If you don’t have access to the account, request a password reset email to recover it. See [Updating Your GitHub Access Credentials](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/updating-your-github-access-credentials).

## Email linked to a managed user account

If the email address that you are trying to add is provided to you by your organization, you may see the `Error adding EMAIL: email is already in use` error when your organization has created a managed user account for you in their enterprise with managed users.

Reach out to your site administrator or internal IT helpdesk to learn about their deployment of GitHub Enterprise Cloud and how to access the account. You may be able to sign into the GitHub Enterprise Cloud application via the organization's identity provider (IdP).

If you want to use your email address with a personal account, you must sign in to your managed user account and unverify the email in your account settings. The email will remain linked to your managed user account, allowing you to access the account through your organization's IdP.

However, some third-party apps or services may not function properly with a managed user account that has an unverified email address.

## Next steps

* For reference information, see [Email Addresses Reference](https://docs.github.com/en/account-and-profile/reference/email-addresses-reference).
