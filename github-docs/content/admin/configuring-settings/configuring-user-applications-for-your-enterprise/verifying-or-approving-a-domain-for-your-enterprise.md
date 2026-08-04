# Verifying or approving a domain for your enterprise

## About verification of domains

You can confirm that the websites and email addresses listed on the profiles of any organization owned by your enterprise account are controlled by your enterprise by verifying the domains. Verified domains for an enterprise account apply to every organization owned by the enterprise account.

After you verify ownership of your enterprise account's domains, a "Verified" badge will display on the profile of each organization that has the domain listed on its profile. To display a "Verified" badge, the website and email information shown on an organization's profile must match the verified domain or domains. If the website and email address shown on your organization's profile are hosted on different domains, you must verify both domains. If the website and email address use variants of the same domain, you must verify both variants. For example, if the profile shows the website `www.example.com` and the email address `info@example.com`, you would need to verify both `www.example.com` and `example.com`.


For domains configured at the enterprise level, enterprise owners can verify the identity of organization members by viewing each member's email address within the verified domain. Enterprise owners can also view a list of enterprise members who don't have an email address from a verified domain associated with their user account on GitHub. See [Viewing People In Your Enterprise](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain).

After you verify domains for your enterprise account, you can restrict email notifications to verified domains for all the organizations owned by your enterprise account. See [Restricting Email Notifications For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise).

Even if you don't restrict email notifications for the enterprise account, if an organization owner has restricted email notifications for the organization, organization members will be able to receive notifications at any domains verified or approved for the enterprise account, in addition to any domains verified or approved for the organization. For more information about restricting notifications for an organization, see [Restricting Email Notifications For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization).

Organization owners can also verify additional domains for their organizations. See [Verifying Or Approving A Domain For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization).

## About approval of domains

> [!NOTE]
> The ability to approve a domain not owned by your organization or enterprise is currently in public preview and subject to change.


If you want to allow members to receive email notifications at a domain you don't own, you can approve the domain, then allow GitHub to send email notifications to addresses within the domain. For example, you can allow a contractor who doesn't have an email address within your own domain to receive email notifications at a domain you feel comfortable with.


After you approve domains for your enterprise account, you can restrict email notifications for activity within your enterprise account to users with verified email addresses within verified or approved domains. See [Restricting Email Notifications For Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise).

To receive email notifications, the owner of the user account must verify the email address. See [Verifying Your Email Address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/verifying-your-email-address).

Organization owners can also approve additional domains for their organizations. See [Verifying Or Approving A Domain For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization).

## Verifying a domain for your enterprise account

To verify your enterprise account's domain, you must have access to modify domain records with your domain hosting service.

For successful domain verification, make sure that the TXT record needed for the verification can be checked directly from your domain's main name servers. You can verify this by running the command: `dig DOMAIN +nostats +nocomments +nocmd TXT @AUTHORITATIVE-NAMESERVER`. This helps avoid problems from CNAME records that might point somewhere else.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Verified & approved domains**.


1. Next to "Verified & approved domains for your enterprise account", click **Add a domain**.

1. Under "What domain would you like to add?", type the domain you'd like to verify, then click **Add domain**.

1. Follow the instructions under "Add a DNS TXT record" to create a DNS TXT record with your domain hosting service.

1. Wait for your DNS configuration to change, which may take up to 72 hours. You can confirm your DNS configuration has changed by running the `dig` command on the command line, replacing `TXT-RECORD-NAME` with the name of the TXT record created in your DNS configuration. You should see your new TXT record listed in the command output.

   ```shell
   dig TXT-RECORD-NAME +nostats +nocomments +nocmd TXT
   ```

1. To make sure that the TXT record can be checked directly from your domain's main name servers, run the following command.

    ```shell
    dig DOMAIN +nostats +nocomments +nocmd TXT @AUTHORITATIVE-NAMESERVER
    ```

1. After confirming your TXT record is added to your DNS, follow steps one through four above to navigate to your enterprise account's approved and verified domains.
1. To the right of the domain that's pending verification, click {% octicon "kebab-horizontal" aria-label="Show more options" %}, then click **Continue verifying**.

   ![Screenshot of a dropdown menu with the kebab icon, used to manage a domain. The expanded menu and option to "Continue verifying domain" are outlined.](/assets/images/help/enterprises/continue-verifying-domain-enterprise.png)
1. Click **Verify**.

1. Optionally, after the "Verified" badge is visible on your organizations' profiles, delete the TXT entry from the DNS record at your domain hosting service.

## Approving a domain for your enterprise account

> [!NOTE]
> The ability to approve a domain not owned by your organization or enterprise is currently in public preview and subject to change.



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Verified & approved domains**.


1. Next to "Verified & approved domains for your enterprise account", click **Add a domain**.

1. Under "What domain would you like to add?", type the domain you'd like to verify, then click **Add domain**.

1. To the right of "Can't verify this domain?", click **Approve it instead**.

   ![Screenshot of the "Verify domain" page. To the right of the "Verify" button, a link, labeled "Approve it instead," is outlined in dark orange.](/assets/images/help/organizations/domains-approve-it-instead.png)

1. Read the information about domain approval, then click **Approve DOMAIN**.


## Removing an approved or verified domain


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Verified & approved domains**.

1. To the right of the domain to remove, select the {% octicon "kebab-horizontal" aria-label="Show more options" %} dropdown menu, then click **Delete**.

   ![Screenshot of the "Verified & approved domains" page. To the right of a domain, a kebab icon is outlined in dark orange.](/assets/images/help/organizations/continue-verifying-domain.png)
