# Setup user

## How should I use the setup user?

The setup user is an administrative account. It is **only** intended to be used for:

* Configuring authentication and provisioning
* SCIM provisioning via its personal access token
* Regaining access to your enterprise in the event of an issue with your identity provider

For other enterprise administration tasks, such as creating organizations, use a **provisioned managed user account** with the appropriate administrative role.

## What is the setup user's username?

If you use **GitHub.com**, the username is your enterprise's shortcode, suffixed with `_admin`. For example: `fabrikam_admin`. 

If you use **GHE.com**, the username is a randomly generated shortcode, suffixed with `_admin`.

## How do I sign in as the setup user?

After we create your enterprise, you will receive an **email** inviting you to choose a password for the setup user. 

When you create the password, we strongly recommend that you **enable two-factor authentication (2FA)** for the account and **save your recovery codes**. 

Unlike provisioned managed users, the setup user cannot sign in via SSO. 

If you need to access enterprise recovery codes:
1. Navigate to github.com/login.
1. Enter the setup user's username (for example, shortcode_admin) and password.
1. Complete your 2FA challenge, or enter an enterprise recovery code if prompted. 

Enterprise recovery codes are not the same as personal two-factor authentication recovery codes. For more information, see [Downloading Your Enterprise Accounts Single Sign On Recovery Codes](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes).

- **Without 2FA enabled**, you must provide an enterprise recovery code **every** time you sign in.
- If **2FA is enabled**, you must sign in with a successful 2FA challenge response. You only need to enter an enterprise recovery code to access enterprise settings.

If you need to reset the password for your setup user, contact GitHub Support through the [GitHub Support portal](https://support.github.com). The usual password reset option by providing your email address will not work.


## Can I change the email address for the setup user?

You can change the email address at any time while signed in to the setup user account. This is useful if the original recipient has left your organization or if you need to route notifications to a different address.

> [!WARNING]
> Ensure you have access to the new email address before making this change. You'll need to verify the new address via email.

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Access" section of the sidebar, click **{% octicon "mail" aria-hidden="true" aria-label="mail" %} Emails**.

1. Under "Update email address *", type a new email address and click **Update**.
1. GitHub will send you an email with a link in it. After you click that link, you'll be taken to your GitHub dashboard and see a confirmation banner.

## Can I delete the setup user?

The setup user **cannot** be deleted, because it is essential for maintaining authentication and provisioning. The only way to remove the setup user is to delete your enterprise account. See [Deleting An Enterprise Account](https://docs.github.com/en/admin/managing-your-enterprise-account/deleting-an-enterprise-account).

## Further reading

- [Downloading Your Enterprise Accounts Single Sign On Recovery Codes](https://docs.github.com/en/admin/managing-iam/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes#downloading-codes-for-an-enterprise-with-enterprise-managed-users)
