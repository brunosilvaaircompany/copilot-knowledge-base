# Disabling authentication for Enterprise Managed Users

## About disabled authentication for Enterprise Managed Users

After you disable SAML or OIDC authentication for your enterprise, the following effects apply:

* All external identities for the enterprise, and associated email addresses for managed user accounts, will be removed. For more information, see [Viewing And Managing A Users Saml Access To Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise).
* All managed user accounts will be suspended. The suspended accounts will not be renamed. For more information, see [Viewing People In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-suspended-members).
* Personal access tokens (classic), SSH keys, OAuth app authorizations, and GitHub App user-to-server tokens associated with managed user accounts will be deleted.
* Fine-grained personal access tokens are not deleted, but they stop working while the accounts are suspended.
* All of the external groups provisioned by SCIM will be deleted. For more information, see [Managing Team Memberships With Identity Provider Groups](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups).

Resources owned by an organization are not affected. GitHub Actions secrets and GitHub App installations remain in place, so automation that authenticates as an installed GitHub App—rather than as a managed user—keeps working.

If you later reconfigure authentication for the enterprise, external groups must be reprovisioned via SCIM, and managed user accounts must be reprovisioned before users can sign in.

> [!NOTE]
>
> * The authentication disabling process can require substantial time to complete for enterprises with a large number of members.
> * Avatar data for managed user accounts is permanently removed upon suspension. Reprovisioned users will need to reupload their avatar.

If you want to migrate to a new identity provider (IdP) or tenant rather than disabling authentication entirely, see [Migrating Your Enterprise To A New Identity Provider Or Tenant](https://docs.github.com/en/admin/managing-iam/reconfiguring-iam-for-enterprise-managed-users/migrating-your-enterprise-to-a-new-identity-provider-or-tenant).

## Disabling authentication

> [!WARNING]
> Disabling authentication and provisioning will prevent your enterprise's managed user accounts from signing in to access your enterprise on GitHub.

1. Sign in as the setup user for your enterprise with the username **SHORTCODE_admin**, replacing SHORTCODE with your enterprise's shortcode.


1. Attempt to access your enterprise account, and use a recovery code to bypass SAML SSO or OIDC. For more information, see [Accessing Your Enterprise Account If Your Identity Provider Is Unavailable](https://docs.github.com/en/admin/managing-iam/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable).

1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **Identity provider**.

1. Under **Identity Provider**, click **Single sign-on configuration**.

1. Next to "SAML single sign-on" or "OIDC single sign-on", click to deselect **SAML single sign-on** or **OIDC single sign-on**.
1. To confirm, click **Disable SAML single sign-on** or **Disable OIDC single sign-on**.
