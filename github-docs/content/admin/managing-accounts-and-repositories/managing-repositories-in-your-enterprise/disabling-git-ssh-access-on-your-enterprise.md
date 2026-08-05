# Disabling Git SSH access on your enterprise

## Disabling Git SSH access to a specific repository

> [!NOTE]
> Each repository automatically inherits default settings from the organization or user that owns it. You cannot override the default setting if the repository's owner has enforced the setting on all of their repositories.


1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. Under "Search users, organizations, teams, repositories, gists, and applications", type the name of the repository in the text field. Then to the right of the field, click **Search**.
![Screenshot of the "Search" page of the "Site admin" settings. The button to search repositories, labeled "Search," is outlined.](/assets/images/enterprise/site-admin-settings/search-for-things.png)

1. Under "Search results – Repositories", click the name of the repository.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the upper-right corner of the page, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Admin**.
![Screenshot of the header of the "Site admin" page for a user or repository. The "Admin" tab is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/user/user-admin-tab-top.png)

1. Under "Git SSH access", select the drop-down menu, and click **Disabled**.

## Disabling Git SSH access to all repositories owned by a user or organization

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. Under "Search users, organizations, teams, repositories, gists, and applications", type the name of the user or organization in the text field. Then to the right of the field, click **Search**.
![Screenshot of the "Search" page of the "Site admin" settings. The button to search users and organizations, labeled "Search," is outlined.](/assets/images/enterprise/site-admin-settings/search-for-things.png)

1. In the search results, click the name of the user or organization.
![Screenshot of the "Accounts" search results. In the list of matches, "user1" is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/click-user.png)

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the upper-right corner of the page, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Admin**.
![Screenshot of the header of the "Site admin" page for a user or repository. The "Admin" tab is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/user/user-admin-tab-top.png)

1. Under "Git SSH access", select the drop-down menu, and click **Disabled**.
1. Select **Enforce on all repositories**.

   ![Screenshot of the "Git SSH access" section of the site admin page for an organization. The "Enforce on all repositories" checkbox is outlined.](/assets/images/enterprise/site-admin-settings/git-ssh-access-organization-setting.png)

## Disabling Git SSH access to all repositories in your enterprise


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under  **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**, click **Options**.

1. Under "Git SSH access", select the drop-down menu, and click **Disabled**.
1. Select **Enforce on all repositories**.

   ![Screenshot of the "Git SSH access" section on the enterprise's policies page. The "Enforce on all repositories" checkbox is outlined.](/assets/images/enterprise/site-admin-settings/git-ssh-access-appliance-setting.png)
