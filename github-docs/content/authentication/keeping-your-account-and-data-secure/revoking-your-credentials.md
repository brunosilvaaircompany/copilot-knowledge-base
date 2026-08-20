# Revoking your credentials

If you believe your account may be compromised, your hardware was lost or stolen, or you otherwise need to immediately revoke all access associated with your account, you can take action on all of your credentials at once to quickly reduce risk.

Depending on your account type, the following actions are available:

* **Revoke all SSO authorizations**: Remove your credentials' access to SSO-protected resources in an enterprise. This action removes SSO authorizations but does not delete the credentials themselves.
* **Delete all keys and tokens**: Permanently delete all your tokens and SSH keys. This option is available for members of an enterprise with managed users.

> [!WARNING] These actions are irreversible. Once you revoke authorizations or delete credentials, you cannot restore them. You will need to create new credentials and re-authorize them for any organizations or processes that require access.

These actions are recorded in the audit log for any enterprise you belong to, and you will receive an email notification confirming the action.

## Understanding the impact

Before taking action, consider the following:

* **Automations will break**: Any scripts, CI/CD pipelines, or automated processes that use your tokens will stop working.
* **Re-authorization required**: After revoking SSO authorizations, you will need to create new credentials and authorize them with each organization.
* **SSH access**: If you delete your SSH keys, you will need to generate new keys and add them to your account to continue using SSH.

## Revoking all SSO authorizations

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **Credentials**.
1. Under "Danger zone", click **Revoke all**.
1. From the **Enterprise** dropdown, select the enterprise where you want to revoke your authorizations.
1. To confirm, type `USERNAME credentials` (replacing `USERNAME` with your username).
1. Click **Revoke authorizations**.

## Deleting all keys and tokens

You can bulk-delete your credentials if you are a member of an enterprise with managed users.

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **Credentials**.
1. Under "Danger zone", click **Delete all**.
1. To confirm, type `USERNAME credentials` (replacing `USERNAME` with your username).
1. Click **Delete keys and tokens**.

## After revoking or deleting credentials

After taking action on your credentials:

1. **Create new credentials**: Generate new personal access tokens and SSH keys as needed. See [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) and [Adding A New SSH Key To Your GitHub Account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).
1. **Re-authorize for SSO**: If your organizations require SSO, authorize your new credentials. See [Authorizing A Personal Access Token For Use With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/authorizing-a-personal-access-token-for-use-with-single-sign-on) and [Authorizing An SSH Key For Use With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/authorizing-an-ssh-key-for-use-with-single-sign-on).
1. **Update automations**: Update any scripts, CI/CD pipelines, or other automated processes with your new credentials.
1. **Review your security**: Consider enabling two-factor authentication and reviewing your authorized applications. See [Preventing Unauthorized Access](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/preventing-unauthorized-access).

## Further reading

* [Token Expiration And Revocation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation)
* [Reviewing Your SSH Keys](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/reviewing-your-ssh-keys)
* [Reviewing And Revoking Authorization Of GitHub Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps)
* [GitHub Credential Types](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/github-credential-types)
