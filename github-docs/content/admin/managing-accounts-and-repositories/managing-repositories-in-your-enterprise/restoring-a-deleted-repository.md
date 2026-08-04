# Restoring a deleted repository

## About repository restoration

Usually, if someone deletes a repository, it will be available on disk for 90 days and can be restored via the site admin dashboard. For more information, see [Administering Your Instance From The Web UI](https://docs.github.com/en/admin/administering-your-instance/administering-your-instance-from-the-web-ui).

Unless a legal hold is in effect on a user or organization, after 90 days the repository is purged and deleted forever.

If a repository was part of a fork network when it was deleted, the restored repository will be detached from the original fork network.

It can take up to an hour after a repository is deleted before that repository is available for restoration.

Restoring a repository will not restore release attachments or team permissions.

## Restoring a deleted repository

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. Under "Search users, organizations, teams, repositories, gists, and applications", type the name of the user or organization in the text field. Then to the right of the field, click **Search**.
![Screenshot of the "Search" page of the "Site admin" settings. The button to search users and organizations, labeled "Search," is outlined.](/assets/images/enterprise/site-admin-settings/search-for-things.png)

1. In the search results, click the name of the user or organization.
![Screenshot of the "Accounts" search results. In the list of matches, "user1" is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/click-user.png)

1. In the **{% octicon "repo" aria-hidden="true" aria-label="repo" %} Repositories** section, click the **{% octicon "trash" aria-hidden="true" aria-label="trash" %} Deleted repositories** link.
1. Find the repository you want to restore in the deleted repositories list, then to the right of the repository name click **Restore**.
1. To confirm you would like to restore the named repository, click **Restore**.

## Further reading

* [Placing A Legal Hold On A User Or Organization](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/placing-a-legal-hold-on-a-user-or-organization)
