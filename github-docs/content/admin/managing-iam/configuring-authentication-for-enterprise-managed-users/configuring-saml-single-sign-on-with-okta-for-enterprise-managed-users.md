# Configuring SAML single sign-on with Okta for Enterprise Managed Users

>[!WARNING]
>Enabling SAML affects all members of your enterprise.
>
>Enterprise Managed Users doesn't provide a backup sign in URL where members of your enterprise can sign in using their regular username and password.
>If you are unable to sign in, contact GitHub Enterprise Support via the [GitHub Support portal](https://support.github.com) for assistance.

## Supported features

The GitHub Enterprise Managed User application on Okta supports **SP-initiated SSO** and **IdP-initiated SSO**.

## Configuring Okta

1. Install the Okta application for your environment.

   * For **GitHub.com**, install the [GitHub Enterprise Managed User application](https://www.okta.com/integrations/github-enterprise-managed-user).
   * For **GHE.com**, install the [GitHub Enterprise Managed User - GHE.com application](https://www.okta.com/integrations/github-enterprise-managed-user-ghe-com/).

1. In the application on Okta, click the **Assignments** tab and assign the application to your Okta account.
1. Click the **Sign on** tab.
1. Next to "Enterprise Name," type the name of your enterprise with managed users.

   >[!NOTE]
   >For example, if you sign in to `github.com/enterprises/octocorp` or `octocorp.ghe.com`, your enterprise name is `octocorp`.

1. On the "Sign on" tab, under "SAML 2.0," click **More details**.
1. In order to configure your enterprise on GitHub later, note down the following items:

   * "Sign on URL"
   * "Issuer"
   * "Signing certificate"

## Configuring your enterprise

1. Sign in to your enterprise with managed users.
1. Using the details you noted from Okta, follow the steps in [Configuring Saml Single Sign On For Enterprise Managed Users](https://docs.github.com/en/admin/managing-iam/configuring-authentication-for-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users#configure-your-enterprise).

## Enabling provisioning

After you enable SAML SSO, enable provisioning. For more information, see [Configuring Scim Provisioning With Okta](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-with-okta).
