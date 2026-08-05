# Configuring SAML single sign-on for your enterprise using Okta

> [!NOTE]
> If your enterprise uses Enterprise Managed Users, you must follow a different process to configure SAML single sign-on. For more information, see [Configuring Saml Single Sign On For Enterprise Managed Users](https://docs.github.com/en/admin/managing-iam/configuring-authentication-for-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users).




## About SAML with Okta

You can control access to your enterprise account in GitHub and other web applications from one central interface by configuring the enterprise account to use SAML SSO with Okta, an Identity Provider (IdP).

SAML SSO controls and secures access to enterprise account resources like organizations, repositories, issues, and pull requests. For more information, see [Configuring Saml Single Sign On For Your Enterprise](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise).



> [!NOTE]
> You cannot configure SCIM for your enterprise account unless your account was created for Enterprise Managed Users. For more information, see [Enterprise Managed Users](https://docs.github.com/en/admin/concepts/identity-and-access-management/enterprise-managed-users).
>
> If you do not use Enterprise Managed Users, and you want to use SCIM provisioning, you must configure SAML SSO at the organization level, not the enterprise level. For more information, see [About Identity And Access Management With Saml Single Sign On](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on).




There are special considerations when enabling SAML SSO for your enterprise account if any of the organizations owned by the enterprise account are already configured to use SAML SSO.
 For more information, see [Switching Your Saml Configuration From An Organization To An Enterprise Account](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account).

Alternatively, you can also configure SAML SSO using Okta for an organization that uses GitHub Enterprise Cloud. For more information, see [Configuring Saml Single Sign On And Scim Using Okta](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta).

## Adding the GitHub Enterprise Cloud application in Okta

1. Sign into your [Okta account](https://login.okta.com/).

1. Navigate to the [GitHub Enterprise Cloud - Enterprise Accounts](https://www.okta.com/integrations/github-enterprise-cloud-enterprise-accounts) application in the Okta Integration Network and click **Add Integration**.
1. In the left sidebar, use the **Applications** dropdown and click **Applications**.

1. Optionally, to the right of "Application label", type a descriptive name for the application.
1. To the right of "GitHub Enterprises", type the name of your enterprise account. For example, if your enterprise account's URL is `https://github.com/enterprises/octo-corp`, type `octo-corp`.
1. Click **Done**.

## Enabling and testing SAML SSO

1. Sign into your [Okta account](https://login.okta.com/).

1. In the left sidebar, use the **Applications** dropdown and click **Applications**.

1. Click the label for the application you created for your enterprise account.

1. Assign the application to your user in Okta. For more information, see [Assign applications to users](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-assign-apps.htm) in the Okta documentation.

1. Under the name of the application, click **Sign on**.

1. To the right of Settings, click **Edit**.
1. Under "Configured SAML Attributes", to the right of "groups", use the drop-down menu and select **Matches regex**.
1. To the right of the drop-down menu, type `.*.*`.
1. Click **Save**.
1. Under "SIGN ON METHODS", click **View Setup Instructions**.

1. Enable SAML for your enterprise account using the information in the setup instructions. For more information, see [Configuring Saml Single Sign On For Your Enterprise](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise).
