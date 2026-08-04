# Adding organizations to your enterprise

There are three ways to add organizations to your enterprise.

* **Create** a new organization in your enterprise.
* **Invite** an existing organization to join your enterprise.
* **Transfer** an existing organization between enterprise accounts on GitHub.com.





If you currently use GitHub Enterprise Cloud with a single organization, we encourage you to create an enterprise account.


 See [Creating An Enterprise Account](https://docs.github.com/en/admin/managing-your-enterprise-account/creating-an-enterprise-account).

## Limitations

If you use GitHub Enterprise Cloud with data residency, you cannot transfer organizations between GitHub.com and your enterprise on GHE.com. Instead, you must migrate organizations with the GitHub Enterprise Importer. See [About Migrations Between GitHub Products](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-between-github-products/about-migrations-between-github-products).

If you use Enterprise Managed Users, the following limitations apply:

* Adding existing organizations to your enterprise is not possible.
* Existing organizations from an enterprise with managed users cannot be added to a different enterprise.

## Changes when adding an existing organization

After you add an existing organization to your enterprise, the organization's resources remain accessible to members at the same URLs, and the following changes will apply.

* **Two-factor authentication (2FA):** If required by the enterprise, members without 2FA, or with insecure 2FA, will be unable to access organization resources until they configure 2FA that meets the enterprise's 2FA security requirements.
* **Enterprise licenses:** Members become part of the enterprise, and usage is billed to the enterprise account. You must ensure that the enterprise account has enough licenses to accommodate any new members. See [Billing For Enterprises](https://docs.github.com/en/billing/concepts/enterprise-billing/billing-for-enterprises).
* **Enterprise role management:** Enterprise owners can manage their roles within the organization. See [Managing Your Role In An Organization Owned By Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise).
* **Enterprise policies:** Any policies applied to the enterprise will apply to the organization. If the organization has write permissions for GitHub Actions, you must manually set write permissions for the enterprise. For more information, see [Managing GitHub Actions Settings For A Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-github-actions-permissions-for-your-repository). For more information about managing organization-level permissions for GitHub Actions, see [Disabling Or Limiting GitHub Actions For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization).


* **SAML SSO Configuration:**

  * If SAML SSO is configured **for the destination enterprise**, the enterprise's SAML configuration will apply to the organization.
    * If SAML is currently configured on the organization, the enterprise account's SAML configuration will override the organization's configuration. SCIM is not available at the enterprise level for enterprises that use personal accounts, so SCIM will be disabled for the organization. The new inherited enterprise SAML settings will be displayed on the organization's SAML settings page.
    * If SAML is ever disabled for the enterprise, the organization SAML settings will revert back to their original configuration.
  * If SAML is **not** configured for the destination enterprise, the organization will retain any existing SAML and SCIM settings.
  * If organization members have existing SAML authorizations for personal access tokens or SSH keys to access the organization, these authorizations will remain active.
    * To see these authorizations, SAML must be configured for either the organization or enterprise, and the user must have a linked SAML identity.
    * To access additional organizations owned by the enterprise, members must authorize the personal access token or key. See [Authorizing A Personal Access Token For Use With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/authorizing-a-personal-access-token-for-use-with-single-sign-on) and [Authorizing An SSH Key For Use With Single Sign On](https://docs.github.com/en/authentication/authenticating-with-single-sign-on/authorizing-an-ssh-key-for-use-with-single-sign-on).

* **Trial enterprise:** Certain features may be disabled if added to a trial enterprise. See [Setting Up A Trial Of GitHub Enterprise Cloud](https://docs.github.com/en/admin/overview/setting-up-a-trial-of-github-enterprise-cloud#features-not-included-in-the-trial).
* **GitHub Connect:** If the organization was connected to GitHub Enterprise Server using GitHub Connect, adding the organization to an enterprise will not update the connection. GitHub Connect features will no longer function for the organization. To continue using GitHub Connect, you must disable and re-enable the feature. See [Enabling GitHub Connect For Githubcom](https://docs.github.com/en/enterprise-server@latest/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-githubcom) in the GitHub Enterprise Server documentation.
* **GitHub Marketplace apps:** If you add a standalone organization that uses billed GitHub Marketplace apps, the organization can continue to use the apps, but usage will be billable to the enterprise.
  * If your enterprise is billed via invoice, contact the app vendor and pay directly.
  * If your enterprise is billed via credit card or PayPal, billing continues automatically.
  To transfer an existing organization with billed apps between enterprise accounts, first remove the billed apps and then re-add the apps after the transfer is complete.
* **Sponsorships:** Any sponsorships by the organization will be canceled. Additionally, if your enterprise uses Azure metered billing, you will need to create a separate "shell" organization to continue using GitHub Sponsors. See [About Sponsorships Fees And Taxes](https://docs.github.com/en/sponsors/sponsoring-open-source-contributors/about-sponsorships-fees-and-taxes#github-sponsors-when-adding-an-organization-to-an-enterprise).
* **Coupons:** Any coupons will be removed from the organization. To reapply the coupon, [contact our sales team](https://github.com/enterprise/contact).

## Creating a new organization

New organizations you create within your enterprise account settings are included in your enterprise account's GitHub Enterprise Cloud subscription.

Enterprise owners who create an organization owned by the enterprise account automatically become organization owners. See [Roles In An Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).

During a trial of GitHub Enterprise Cloud, you can create up to three new organizations in your enterprise.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. Under the enterprise name, click the {% octicon "organization" aria-hidden="true" aria-label="organization" %} **Organizations** tab.

     ![Screenshot of an enterprise. The "Organizations" tab is highlighted with an orange outline.](/assets/images/help/enterprises/organizations-tab.png)

1. Above the list of organizations, click **New organization**.
1. Under "Organization name," type a name for your organization.
1. Click **Create organization**.
1. Optionally, under "Invite owners," type the username of a person you'd like to invite to become an organization owner, then click **Invite**.
1. Click **Finish**.

## Inviting an existing organization

Enterprise owners can invite existing organizations to join their enterprise account.

During a trial of GitHub Enterprise Cloud, you can invite organizations to join your trial enterprise. You can invite organizations that are not currently owned by another enterprise. If an organization you want to invite is already owned by another enterprise, you cannot invite it to your trial enterprise.

After you invite the organization, and before an owner approves the invitation, you can cancel or resend the invitation at any time.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. Under the enterprise name, click the {% octicon "organization" aria-hidden="true" aria-label="organization" %} **Organizations** tab.

     ![Screenshot of an enterprise. The "Organizations" tab is highlighted with an orange outline.](/assets/images/help/enterprises/organizations-tab.png)

1. Above the list of organizations, click **Invite organization**.
1. Under "Organization name," start typing the name of the organization you want to invite and select it when it appears in the dropdown list.
1. Click **Invite organization**. The organization owners will receive an email inviting them to join the enterprise.
1. After an organization owner has approved the invitation, navigate back to the **Organizations** tab of the enterprise settings.
1. Under "Organizations," click **X pending**.
1. To complete the transfer, next to the organization name, click **Approve**.

## Transferring an existing organization

Enterprise owners can transfer existing organizations between enterprise accounts. You must be an enterprise owner of both enterprise accounts.

You cannot transfer an existing organization to or from an enterprise with managed users or an enterprise account that is currently enrolled in a trial of GitHub Enterprise Cloud.

If the existing organization uses billed apps, make sure to remove the billed apps before transferring. After the transfer is complete, re-add the apps.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. Under the enterprise name, click the {% octicon "organization" aria-hidden="true" aria-label="organization" %} **Organizations** tab.

     ![Screenshot of an enterprise. The "Organizations" tab is highlighted with an orange outline.](/assets/images/help/enterprises/organizations-tab.png)

1. Next to the organization you want to transfer, select the {% octicon "kebab-horizontal" width="16" aria-label="Organization settings" %} dropdown menu, then click **Transfer organization**.

   ![Screenshot of the expanded dropdown menu labeled with the kebab icon, for an organization. The "Transfer organization" option is outlined.](/assets/images/help/business-accounts/transfer-organization.png)

1. Select the **Select enterprise** dropdown menu, start typing the name of the destination enterprise, and click the enterprise you want to transfer the organization to.
1. Click **Review transfer**.
1. To confirm the transfer, click **Transfer organization**.
