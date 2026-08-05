# Suspending and unsuspending users

## About suspended users

If employees leave the company, you can suspend their GitHub Enterprise Server accounts to open up user licenses in your GitHub Enterprise license while preserving the issues, comments, repositories, gists, and other data they created. Suspended users cannot sign into your instance, nor can they push or pull code.

When you suspend a user, the change takes effect immediately with no notification to the user. If the user attempts to pull or push to a repository, they'll receive this error:

```shell
$ git clone git@[hostname]:john-doe/test-repo.git
Cloning into 'test-repo'...
ERROR: Your account is suspended. Please check with
your installation administrator.
fatal: The remote end hung up unexpectedly
```

> [!TIP] GitHub recommends suspending users where possible, rather than deleting their accounts.

## Scenarios where you cannot suspend users

Before suspending site administrators, you must demote them to regular users. See [Promoting Or Demoting A Site Administrator](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator).

If you use certain external authentication features, you cannot manage user suspension from the site admin dashboard or command line:

* If LDAP Sync is enabled for your GitHub Enterprise Server instance, users are automatically suspended based on the scenarios that are described in [Using Ldap](https://docs.github.com/en/admin/managing-iam/using-ldap-for-enterprise-iam/using-ldap#enabling-ldap-sync).
* If SCIM provisioning is enabled, SCIM-provisioned users must be suspended or unsuspended through your identity provider. See [Provisioning Users And Groups With Scim Using The Rest API](https://docs.github.com/en/admin/managing-iam/provisioning-user-accounts-with-scim/provisioning-users-and-groups-with-scim-using-the-rest-api#provisioning-users-with-the-rest-api).

## Viewing suspended users in the site admin dashboard

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the left sidebar, click **Suspended users**.
1. A list of suspended users displays.

## Suspending a user from the site admin dashboard

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. Under "Search users, organizations, teams, repositories, gists, and applications", type the name of the user in the text field.
1. To the right of text field, click **Search**.
   ![Screenshot of the "Search" page of the "Site admin" settings. The button to search users, labeled "Search," is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/search-for-things.png)
   * If an exact account name match isn't found, under "Search results – Accounts", in the "Fuzzy matches" section, click the name of the user you want to manage.
   ![Screenshot of search results in the "Site admin" settings. In the "Fuzzy matches" section, an example user name is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/click-user.png)

1. Review the user details in the site admin page to confirm you have identified the correct user.
   ![Screenshot of the Site admin account overview page.](/assets/images/enterprise/site-admin-settings/site-admin-account-overview.png)

1. In the upper-right corner of the page, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Admin**.
![Screenshot of the header of the "Site admin" page for a user or repository. The "Admin" tab is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/user/user-admin-tab-top.png)

1. Under "Account suspension," in the "Danger Zone" section, click **Suspend**.
1. In the "Log reason" field, type a reason to suspend the user.
1. Click **Suspend**.

## Unsuspending a user from the site admin dashboard

As when suspending a user, unsuspending a user takes effect immediately. The user will not be notified.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the left sidebar, click **Suspended users**.
1. Click the name of the user account that you would like to unsuspend.
1. In the upper-right corner of the page, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Admin**.
![Screenshot of the header of the "Site admin" page for a user or repository. The "Admin" tab is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/user/user-admin-tab-top.png)

1. Under "Account suspension," in the "Danger Zone" section, click **Unsuspend**.
1. In the "Log reason" field, type a reason to unsuspend the user.
1. Click **Unsuspend.**

## Suspending a user from the command line

1. SSH into your GitHub Enterprise Server instance. If your instance comprises multiple nodes, for example if high availability or geo-replication are configured, SSH into the primary node. If you use a cluster, you can SSH into any node. Replace HOSTNAME with the hostname for your instance, or the hostname or IP address of a node. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

   ```shell copy
   ssh -p 122 admin@HOSTNAME
   ```

1. Run [ghe-user-suspend](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-user-suspend) with the username to suspend.

   ```shell
   ghe-user-suspend USERNAME
   ```

## Creating a custom message for suspended users

You can create a custom message that suspended users will see when attempting to sign in.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Messages{% elsif ghec %}Announcement**.

1. To the right of "Suspended user page," click **Add message**.

   ![Screenshot of the "Suspend user page" section of the "Messages" settings. A button, labeled with a plus icon and "Add message," is outlined.](/assets/images/enterprise/site-admin-settings/add-message.png)
1. In the "Suspend user message" field, type your message. You can type Markdown, or use the Markdown toolbar to style your message.
1. To see the rendered message, click **Preview**.
1. At the bottom of the page, click **Save changes**.


## Unsuspending a user from the command line

1. SSH into your GitHub Enterprise Server instance. If your instance comprises multiple nodes, for example if high availability or geo-replication are configured, SSH into the primary node. If you use a cluster, you can SSH into any node. Replace HOSTNAME with the hostname for your instance, or the hostname or IP address of a node. For more information, see [Accessing The Administrative Shell SSH](https://docs.github.com/en/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

   ```shell copy
   ssh -p 122 admin@HOSTNAME
   ```

1. Run [ghe-user-unsuspend](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-user-unsuspend) with the username to unsuspend.

   ```shell
   ghe-user-unsuspend USERNAME
   ```

## Further reading

* [Users](https://docs.github.com/en/rest/enterprise-admin/users#suspend-a-user)
