# Deleting users from your instance

## What happens when I delete a user account?

Deleting a user account removes all repositories, forks of private repositories, wikis, issues, pull requests, pages, and packages and container images owned by the user account. By deleting a user account, **you may break software projects and workflows that depend on these things.**

Issues and pull requests the user has created and comments they've made in repositories owned by other users or organizations will not be deleted and will instead be associated with a `ghost` user account.

Once a user account has been deleted, the username will be available for use with a different account on your GitHub Enterprise Server instance.

## When can I delete a user account?

You cannot delete a user that is currently an **organization owner**.

* **If the user is the only owner:** Transfer ownership to another person, or delete the organization. See [Transferring Organization Ownership](https://docs.github.com/en/organizations/managing-organization-settings/transferring-organization-ownership) and [Deleting An Organization Account](https://docs.github.com/en/organizations/managing-organization-settings/deleting-an-organization-account).
* **If there are other owners:** Remove the user from the organization. See [Removing Yourself From An Organization](https://docs.github.com/en/account-and-profile/how-tos/organization-membership/removing-yourself-from-an-organization).

You cannot delete **your own user account**. If you need to delete your own user account, ask another site administrator to delete your account for you.

If you have enabled SCIM provisioning on your instance, you cannot delete **users who have been provisioned by SCIM**.

## Should I delete or suspend a user account?

GitHub recommends suspending users where possible, rather than deleting their accounts. Suspending user accounts on GitHub Enterprise Server preserves the history of resources owned by the user account, such as repositories and pull requests, and releases the license previously consumed by the user. See [Suspending And Unsuspending Users](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/suspending-and-unsuspending-users).

As an alternative to deleting or suspending a user account, to stop a user's repositories being permanently removed from your enterprise you can place a legal hold on the user account. See [Placing a legal hold on a user or organization](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/placing-a-legal-hold-on-a-user-or-organization).

## Deleting a user from the site admin dashboard

Before deleting a user account, you should consider if a backup or copy of the repositories, private forks, wikis, issues, and pull requests owned by the user account is required. See [About The Backup Service For GitHub Enterprise Server](https://docs.github.com/en/admin/backing-up-and-restoring-your-instance/about-the-backup-service-for-github-enterprise-server) and [Backing Up A Repository](https://docs.github.com/en/repositories/archiving-a-github-repository/backing-up-a-repository).

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

1. Under "Delete account," in the "Danger Zone" section, click **Delete this account**.
1. In the "Delete account" dialog box, under "Make sure you want to do this", review the changes. To confirm, enter the username of the account to be deleted.
1. Click **Delete this account**.

## Further reading

* [Users](https://docs.github.com/en/rest/enterprise-admin/users#delete-a-user)
