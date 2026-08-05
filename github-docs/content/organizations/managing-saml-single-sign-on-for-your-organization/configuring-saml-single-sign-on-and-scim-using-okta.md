# Configuring SAML single sign-on and SCIM using Okta

## About SAML and SCIM with Okta

You can control access to your organization on GitHub and other web applications from one central interface by configuring the organization to use SAML SSO and SCIM with Okta, an Identity Provider (IdP).



> [!NOTE]
> To use SAML single sign-on, your organization must use GitHub Enterprise Cloud. For more information about how you can try GitHub Enterprise Cloud for free, see [Setting up a trial of GitHub Enterprise Cloud](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).





SAML SSO controls and secures access to organization resources like repositories, issues, and pull requests. SCIM automatically adds, manages, and removes members' access to your organization on GitHub when you make changes in Okta. For more information, see [About Identity And Access Management With Saml Single Sign On](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on) and [About Scim For Organizations](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).

After you enable SCIM, the following provisioning features are available for any users that you assign your GitHub Enterprise Cloud application to in Okta.

| Feature | Description |
| --- | --- |
| Push New Users | When you create a new user in Okta, the user will receive an email to join your organization on GitHub. |
| Push User Deactivation | When you deactivate a user in Okta, Okta will remove the user from your organization on GitHub. |
| Push Profile Updates | When you update a user's profile in Okta, Okta will update the metadata for the user's membership in your organization on GitHub. |
| Reactivate Users | When you reactivate a user in Okta, Okta will send an email invitation for the user to rejoin your organization on GitHub. |

Alternatively, you can configure SAML SSO for an enterprise using Okta. SCIM for enterprise accounts is only available with Enterprise Managed Users. For more information, see [Configuring Saml Single Sign On For Your Enterprise Using Okta](https://docs.github.com/en/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise-using-okta) and [Configuring Scim Provisioning With Okta](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-with-okta).

## Configuring SAML in Okta

1. In the Okta Dashboard, expand the **Applications** menu, then click **Applications**.

1. Click **Browse App Catalog**.

1. Search for the application named "GitHub Enterprise Cloud - Organization."
1. Click **Add Integration**.

1. Fill out the form, providing the name of your organization on GitHub and a unique name in the "Application Label" field.
1. Assign the application to your user in Okta. For more information, see [Assign applications to users](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-assign-apps.htm) in the Okta documentation.

1. Under the name of the application, click **Sign on**.

1. Under "SIGN ON METHODS", click **View Setup Instructions**.

1. Enable and test SAML SSO on GitHub using the sign on URL, issuer URL, and public certificates from the "How to Configure SAML 2.0" guide. For more information, see [Enabling And Testing Saml Single Sign On For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization).

## Configuring access provisioning with SCIM in Okta

To use SCIM with your organization, you must use a third-party-owned OAuth app. The OAuth app must be authorized by, and subsequently acts on behalf of, a specific GitHub user. If the user who last authorized this OAuth app leaves or is removed from the organization, SCIM will stop working. To avoid this issue, we recommend creating a dedicated user account to configure SCIM. This user account must be an organization owner and will consume a license.


1. Sign into GitHub using an account that is an organization owner and is ideally used only for SCIM configuration.
1. To create an active SAML session for your organization, navigate to `https://github.com/orgs/ORGANIZATION-NAME/sso`. For more information, see [About Authentication With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/about-authentication-with-single-sign-on#about-oauth-apps-github-apps-and-saml-sso).
1. Navigate to Okta.
1. In the left sidebar, use the **Applications** dropdown and click **Applications**.

1. In the list of applications, click the label for the application you created for the organization that uses GitHub Enterprise Cloud.

1. Under the name of the application, click **Provisioning**.

1. Click **Configure API Integration**.

1. Select **Enable API integration**.

   >[!NOTE] "Import Groups" is **not** supported by GitHub. Selecting or deselecting the checkbox has no impact on your configuration.


1. Click **Authenticate with GitHub Enterprise Cloud - Organization**.
1. To the right of your organization's name, click **Grant**.

   > [!NOTE]
   > If you cannot see your organization, this may be because OAuth app access restrictions are enabled for the organization. To continue, you will need to approve the "OKTA SCIM Integration" app for the organization. For more information, see [Approving OAUTH Apps For Your Organization](https://docs.github.com/en/organizations/managing-oauth-access-to-your-organizations-data/approving-oauth-apps-for-your-organization).

1. Click **Authorize OktaOAN**.
1. Click **Save**.

1. To avoid syncing errors and confirm that your users have SAML enabled and SCIM linked identities, we recommend you audit your organization's users. For more information, see [Troubleshooting Identity And Access Management For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization).

1. To the right of "Provisioning to App", click **Edit**.
1. To the right of "Create Users," select **Enable**.
1. To the right of "Update User Attributes," select **Enable**.
1. To the right of "Deactivate Users," select **Enable**.
1. Click **Save**.


## Further reading

* [Configuring Saml Single Sign On For Your Enterprise Using Okta](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise-using-okta)
* [Understanding SAML](https://developer.okta.com/docs/concepts/saml/) in the Okta documentation
* [Understanding SCIM](https://developer.okta.com/docs/concepts/scim/) in the Okta documentation
