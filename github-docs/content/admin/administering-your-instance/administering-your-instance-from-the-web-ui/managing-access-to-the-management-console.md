# Managing access to the Management Console

## About access to the Management Console

From the Management Console, you can initialize, configure, and monitor your GitHub Enterprise Server instance.
 For more information, see [About The Management Console](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-web-ui/about-the-management-console).

You can access the Management Console as the root site administrator or a Management Console user. An administrator created the root site administrator password during the initial setup process for your GitHub Enterprise Server instance.
 For more information about Management Console access, see [Administering Your Instance From The Web UI](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-web-ui).

You can also use the `gh es` GitHub CLI extension to manage the root site administrator password, which controls access to the Management Console. For more information, see the [GH ES CLI usage documentation](https://github.com/github/gh-es/blob/main/USAGE.md#gh-es-access-set-password) and [Administering Your Instance Using The GitHub CLI](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/administering-your-instance-using-the-github-cli).

## Types of Management Console accounts

There are two types of user accounts for the Management Console on a GitHub Enterprise Server instance. The root site administrator account authenticates with a password established during the initial setup of your GitHub Enterprise Server instance.

The root site administrator can create additional accounts.

### Root site administrator

Root site administrators have complete control over the Management Console. They can take every action in the Management Console, including creating and deleting Management Console user accounts.

Only the root site administrator can create and delete Management Console user accounts.

### Management Console user

Management Console users can perform most administrative tasks for your GitHub Enterprise Server instance. For heightened security, Management Console users cannot create or delete Management Console user accounts.

Management Console users, sometimes called operators, can perform basic administrative tasks for your GitHub Enterprise Server instance in the Management Console and can add SSH keys to the Management Console to grant administrative access to the instance via SSH.

## Creating or deleting a user account for the Management Console

While signed into the Management Console as the root site administrator, you can create new Management Console user accounts.

1. In the top navigation bar, click **User Management**.

1. Click **Create user**.
1. Fill in the user's name, username, and email address.
1. To finish creating the user account, click **Create**. If email notifications are configured for the instance, the user will automatically receive an invitation email with access instructions for the Management Console. For more information, see [Inviting new Management Console users](#inviting-new-management-console-users).
1. Optionally, to delete a Management Console user account, click {% octicon "trash" aria-label="The trash symbol" %} to the right of any user account you wish to delete. Then confirm deletion.

## Inviting new Management Console users

If you have configured email for notifications for your GitHub Enterprise Server instance, new Management Console users will automatically receive an invitation to complete creation of the Management Console user account. For more information, see [Configuring Email For Notifications](https://docs.github.com/en/admin/configuring-settings/configuring-user-applications-for-your-enterprise/configuring-email-for-notifications).

If you have not configured email notifications for your GitHub Enterprise Server instance, you must manually copy the Management Console invitation link and send it to the user. The user must set a password using the link before the user can access the Management Console.

1. Sign into the Management Console as the root site administrator. For more information, see [Accessing The Management Console](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-web-ui/accessing-the-management-console).

1. In the top navigation bar, click **User Management**.

1. To copy the invitation link, click {% octicon "link" aria-label="Copy invitation link" %} on any Management Console user account.
1. Send the invitation link to the Management Console user. The invitation link will lead the user through the final account setup steps.

## Configuring rate limits for authentication to the Management Console

You can configure the lockout time and login attempt limits for the Management Console.

After you configure rate limits and a Management Console user exceeds the limit, the Management Console will remain locked for the duration set by the lockout time. If the root site administrator's Management Console login is locked, someone with administrative SSH access must unlock the login. To immediately unlock access to the Management Console by the root site administrator, use the `ghe-reactivate-admin-login` command via the administrative shell. For more information, see [Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-reactivate-admin-login) and [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

If you forgot the root site administrator's password to access the Management Console, you can set a new password with the `ghe-set-password` command via the administrative shell. For more information, see [Command Line Utilities](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-set-password) and [Accessing The Administrative Shell SSH](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).


1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the "{% octicon "rocket" aria-hidden="true" aria-label="rocket" %} Site admin" sidebar, click **Management Console**.

1. Optionally, under "Lockout time for Management Console users", type a number of minutes to lock the Management Console after too many failed login attempts. When locked out, the root site administrator must be manually unlocked.
1. Optionally, under "Login attempt limit for all users", type a maximum number of failed login attempts to allow before the Management Console is locked.
1. Under the "Settings" sidebar, click **Save settings**.

   > [!NOTE]
   > Saving settings in the Management Console restarts system services, which could result in user-visible downtime.

1. Wait for the configuration run to complete.
