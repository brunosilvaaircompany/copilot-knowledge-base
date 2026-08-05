# Promoting or demoting a site administrator

> [!NOTE] For information about promoting a user to an organization owner, see the `ghe-org-admin-promote` section of [Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-org-admin-promote).

## Considerations with external authentication

If you use certain external authentication features, you may not be able to manage promotion and demotion from the enterprise settings or command line:

* If you use SAML authentication, and have _not_ selected **Disable administrator demotion/promotion** in the SAML settings in the site admin dashboard, administrator rights will be determined by your SAML provider.
* If you have enabled SCIM provisioning, for SCIM-provisioned users, you must manage roles from your identity provider.
* If LDAP Sync is enabled, and the `Administrators group` attribute is set when configuring LDAP access for users, those users will automatically have site administrator access to your instance. To promote users, you must add them to the LDAP `Administrators group`.

## Promoting a user from the enterprise settings


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

1. Under "{% octicon "person" aria-hidden="true" aria-label="person" %} People", click **Administrators**.

1. In the upper-right corner of the page, click **Add owner**.
1. In the search field, type the name of the user, then click **Add**.

## Demoting a site administrator from the enterprise settings


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "person" aria-hidden="true" aria-label="person" %} People**.

1. Under "{% octicon "person" aria-hidden="true" aria-label="person" %} People", click **Administrators**.

1. In the upper-left corner of the page, in the "Find an administrator" search field, type the username of the person you want to demote.
1. In the search results, find the username of the person you want to demote, then select the {% octicon "kebab-horizontal" aria-label="Administrator settings" %} dropdown menu and click **Convert to member**.

   ![Screenshot of a user in the enterprise administrators list. A dropdown menu, labeled with a kebab icon, is highlighted with an orange outline.](/assets/images/help/business-accounts/administrator-settings.png)

## Promoting a user from the command line

1. [SSH](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh) into your appliance.
1. Run [ghe-user-promote](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-user-promote) with the username to promote.

   ```shell
   ghe-user-promote USERNAME
   ```

## Demoting a site administrator from the command line

1. [SSH](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh) into your appliance.
1. Run [ghe-user-demote](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-user-demote) with the username to demote.

   ```shell
   ghe-user-demote USERNAME
   ```
