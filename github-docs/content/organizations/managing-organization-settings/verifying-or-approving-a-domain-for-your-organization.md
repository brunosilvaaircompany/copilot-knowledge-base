# Verifying or approving a domain for your organization

## About domain verification

After verifying ownership of your organization's domains, a "Verified" badge will display on the organization's profile. If your organization has agreed to the GitHub Customer Agreement, organization owners will be able to verify the identity of organization members by viewing each member's email address within the verified domain. For more information, see [Organization Profile](https://docs.github.com/en/account-and-profile/concepts/organization-profile) and [Upgrading To The GitHub Customer Agreement](https://docs.github.com/en/organizations/managing-organization-settings/upgrading-to-the-github-customer-agreement).


{% ifversion ghec %}If your organization is owned by an enterprise account, a "Verified" badge will display on your organization's profile for any domains verified for the enterprise account, in addition to any domains verified for the organization. Organization owners can view any domains that an enterprise owner has verified or approved, and edit the domains if the organization owner is also an enterprise owner. For more information, see [Verifying Or Approving A Domain For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-user-applications-for-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).
{% endif %}

To display a "Verified" badge, the website and email information shown on an organization's profile must match the verified domain or domains. If the website and email address shown on your organization's profile are hosted on different domains, you must verify both domains. If the website and email address use variants of the same domain, you must verify both variants. For example, if the profile shows the website `www.example.com` and the email address `info@example.com`, you would need to verify both `www.example.com` and `example.com`.



After verifying ownership of your organization's domain, you can restrict email notifications for the organization to that domain. For more information, see [Restricting Email Notifications For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization).




> [!NOTE]
> To restrict email notifications to a verified domain, your organization must use GitHub Enterprise Cloud. For more information about how you can try GitHub Enterprise Cloud for free, see [Setting up a trial of GitHub Enterprise Cloud](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).




You can also verify custom domains used for GitHub Pages to prevent domain takeovers when a custom domain remains configured but your GitHub Pages site is either disabled or no longer uses the domain. For more information, see [Verifying Your Custom Domain For GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).

If you confirm your organization’s identity by verifying your domain and restricting email notifications to only verified email domains, you can help prevent sensitive information from being exposed. For more information see [Prevent Data Leaks](https://docs.github.com/en/code-security/tutorials/secure-your-organization/prevent-data-leaks).



## About domain approval

> [!NOTE]
> The ability to approve a domain not owned by your organization or enterprise is currently in public preview and subject to change.


If you want to allow members to receive email notifications at a domain you don't own, you can approve the domain, then allow GitHub to send email notifications to addresses within the domain. For example, you can allow a contractor who doesn't have an email address within your own domain to receive email notifications at a domain you feel comfortable with.


After you approve domains for your organization, you can restrict email notifications for activity within the organization to users with verified email addresses within verified or approved domains. For more information, see [Restricting Email Notifications For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization).

Enterprise owners cannot see which organization members or email addresses receive notifications within approved domains.

Enterprise owners can also approve additional domains for organizations owned by the enterprise. {% ifversion ghec %}For more information, see [Verifying Or Approving A Domain For Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/configuring-settings/configuring-user-applications-for-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).For more information, see [Verifying Or Approving A Domain For Your Enterprise](https://docs.github.com/en/admin/configuring-settings/configuring-user-applications-for-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).
{% endif %}

## Verifying a domain for your organization

To verify a domain, you must have access to modify domain records with your domain hosting service.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "verified" aria-hidden="true" aria-label="verified" %} Verified and approved domains**.

1. Next to "Verified & approved domains for your enterprise account", click **Add a domain**.

1. Under "What domain would you like to add?", type the domain you'd like to verify, then click **Add domain**.

1. Follow the instructions under "Add a DNS TXT record" to create a DNS TXT record with your domain hosting service.

1. Wait for your DNS configuration to change, which may take up to 72 hours. You can confirm your DNS configuration has changed by running the `dig` command on the command line, replacing `TXT-RECORD-NAME` with the name of the TXT record created in your DNS configuration. You should see your new TXT record listed in the command output.

   ```shell
   dig TXT-RECORD-NAME +nostats +nocomments +nocmd TXT
   ```

1. After confirming your TXT record is added to your DNS, follow steps one through three above to navigate to your organization's approved and verified domains.
1. To the right of the domain that's pending verification, select the {% octicon "kebab-horizontal" aria-label="Show more options" %} dropdown menu, then click **Continue verifying**.

   ![Screenshot of the "Verified & approved domains" page. To the right of a domain that is pending verification, a kebab icon is outlined in dark orange.](/assets/images/help/organizations/continue-verifying-domain.png)
1. Click **Verify**.

1. Optionally, once the "Verified" badge is visible on your organization's profile page, you can delete the TXT entry from the DNS record at your domain hosting service.

## Approving a domain for your organization

> [!NOTE]
> The ability to approve a domain not owned by your organization or enterprise is currently in public preview and subject to change.


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "verified" aria-hidden="true" aria-label="verified" %} Verified and approved domains**.

1. Next to "Verified & approved domains for your enterprise account", click **Add a domain**.

1. Under "What domain would you like to add?", type the domain you'd like to verify, then click **Add domain**.

1. To the right of "Can't verify this domain?", click **Approve it instead**.

   ![Screenshot of the "Verify domain" page. To the right of the "Verify" button, a link, labeled "Approve it instead," is outlined in dark orange.](/assets/images/help/organizations/domains-approve-it-instead.png)

1. Read the information about domain approval, then click **Approve DOMAIN**.


## Removing an approved or verified domain

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Security" section of the sidebar, click **{% octicon "verified" aria-hidden="true" aria-label="verified" %} Verified and approved domains**.

1. To the right of the domain to remove, select the {% octicon "kebab-horizontal" aria-label="Show more options" %} dropdown menu, then click **Delete**.

   ![Screenshot of the "Verified & approved domains" page. To the right of a domain, a kebab icon is outlined in dark orange.](/assets/images/help/organizations/continue-verifying-domain.png)
