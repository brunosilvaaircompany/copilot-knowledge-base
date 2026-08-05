# Enforcing SAML single sign-on for your organization

## About enforcement of SAML SSO for your organization

When you enable SAML SSO, GitHub will prompt members who visit the organization's resources on GitHub to authenticate on your IdP, which links the member's personal account to an identity on the IdP. Members can still access the organization's resources before authentication with your IdP.

You can also enforce SAML SSO for your organization. When you enforce SAML SSO, all members of the organization must authenticate through your IdP to access the organization's resources.
 Enforcement removes any members and administrators who have not authenticated via your IdP from the organization. GitHub sends an email notification to each removed user.



> [!NOTE]
> To use SAML single sign-on, your organization must use GitHub Enterprise Cloud. For more information about how you can try GitHub Enterprise Cloud for free, see [Setting up a trial of GitHub Enterprise Cloud](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).





Any users removed due to SAML SSO enforcement can rejoin your organization by authenticating via SAML single sign-on.
 If a user rejoins the organization within three months, the user's access privileges and settings will be restored. For more information, see [Reinstating A Former Member Of Your Organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization).

Bots and service accounts that do not have external identities set up in your organization's IdP will also be removed when you enforce SAML SSO. For more information about bots and service accounts, see [Managing Bots And Service Accounts With Saml Single Sign On](https://docs.github.com/en/organizations/granting-access-to-your-organization-with-saml-single-sign-on/managing-bots-and-service-accounts-with-saml-single-sign-on).

If your organization is owned by an enterprise account, requiring SAML for the enterprise account will override your organization-level SAML configuration and enforce SAML SSO for every organization in the enterprise. For more information, see [Configuring Saml Single Sign On For Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise).

> [!TIP]
> When setting up SAML SSO in your organization, you can test your implementation without affecting your organization members by leaving **Require SAML SSO authentication for all members of the _organization name_ organization** unchecked.


## Enforcing SAML SSO for your organization

1. Enable and test SAML SSO for your organization, then authenticate with your IdP at least once. For more information, see [Enabling And Testing Saml Single Sign On For Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization).
1. Prepare to enforce SAML SSO for your organization. For more information, see [Preparing To Enforce Saml Single Sign On In Your Organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/preparing-to-enforce-saml-single-sign-on-in-your-organization).
1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Authentication security**.

1. Under "SAML single sign-on", select **Require SAML SSO authentication for all members of the ORGANIZATION organization**.
1. If any organization members have not authenticated via your IdP, GitHub displays the members. If you enforce SAML SSO, GitHub will remove the members from the organization.

   Review the warning and click **Remove members and require SAML single sign-on**.
1. Under "Single sign-on recovery codes", review your recovery codes. Store the recovery codes in a safe location like a password manager.

## Further reading

* [Viewing And Managing A Members Saml Access To Your Organization](https://docs.github.com/en/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)
