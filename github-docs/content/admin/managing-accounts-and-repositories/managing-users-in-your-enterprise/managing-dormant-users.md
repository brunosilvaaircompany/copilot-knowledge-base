# Managing dormant users

## About dormant users

A user is considered active if the user has performed any of the following activities on your GitHub Enterprise Server instance{% elsif ghec %}your enterprise.

* Authenticating to access your enterprise's resources via SAML SSO {% endif %}
* Creating a repository
* Pushing to an internal repository via HTTPS
* Pushing to an internal repository via SSH
* Being added to a repository
* Changing the visibility of a repository
* Creating a pull request
* Commenting on a pull request
* Closing or reopening an issue or pull request
* Applying a label to an issue or pull request, or removing a label
* Assigning or unassigning an issue or pull request
* Requesting a review of a pull request, or removing a review request
* Creating or editing a comment in a pull request review
* Dismissing a comment in a pull request
* Synchronizing a pull request
* Commenting on a commit
* Publishing a release
* Pushing to a wiki
* Watching a repository
* Starring a repository
* Deleting a repository
* Joining an organization

GitHub **does not consider the following activities as active**:

* Accessing resources by using a personal access token, SSH key, or GitHub App.
* Git operations (such as pushes, pulls, repository cloning) on private repositories.
* Creating or commenting on an issue.


A user will also be considered active if their account has been updated by LDAP.



> [!NOTE] You cannot mark a dormant user as active. To become active, a user must perform one of the activities listed above.


When assessing user dormancy, we only consider organizations, repositories, or sign-on events that are associated with the enterprise. For example, a user who has recently commented on an issue in a public repository outside of the enterprise may be considered dormant, while a user who has commented on an issue in a public repository within the enterprise will not be considered dormant.


A user account is considered to be dormant if the user  hasn't performed any of the previous activities in the past 30 days.{% elsif ghes %} meets the following criteria:

* The user's account has existed for longer than the dormancy threshold {% ifversion ghes %}your GitHub Enterprise Server instance.
* The user hasn't performed any of the previous activities within the dormancy threshold.
* The user is not a site administrator for the instance.

You can customize the dormancy threshold for your GitHub Enterprise Server instance.{% endif %}

Dormancy applies to both enterprise members and outside collaborators.



Dormant users are not automatically suspended. Consider suspending dormant users to release {% ifversion enterprise-licensing-language %}licenses. See [Suspending And Unsuspending Users](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/suspending-and-unsuspending-users).

## Viewing dormant users

You can view a list of all dormant users who have not been suspended and who are not site administrators.


1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the left sidebar, click **Dormant users**.
1. To suspend all the dormant users in this list, at the top of the page, click **Suspend all**.

## Determining whether a user account is dormant

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. Under "Search users, organizations, teams, repositories, gists, and applications", type the name of the user in the text field.
1. To the right of text field, click **Search**.
   ![Screenshot of the "Search" page of the "Site admin" settings. The button to search users, labeled "Search," is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/search-for-things.png)
   * If an exact account name match isn't found, under "Search results – Accounts", in the "Fuzzy matches" section, click the name of the user you want to manage.
   ![Screenshot of search results in the "Site admin" settings. In the "Fuzzy matches" section, an example user name is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/click-user.png)

1. Review the user details in the site admin page to confirm you have identified the correct user.
   ![Screenshot of the Site admin account overview page.](/assets/images/enterprise/site-admin-settings/site-admin-account-overview.png)

1. In the **User info** section, view the status of the user's account. Any users labeled with "{% octicon "hourglass" aria-hidden="true" aria-label="hourglass" %} Dormant" are dormant, and users labeled with "{% octicon "hourglass" aria-hidden="true" aria-label="hourglass" %} "Active" are not.

   ![Screenshot of the "User info" section for a user. The "User info" heading is outlined. Under the heading, the user is marked as active.](/assets/images/enterprise/stafftools/active-user.png)

## Configuring the dormancy threshold

The dormancy threshold is the length of time a user must be inactive to be considered dormant. The default dormancy threshold is 30 days, however you can customize the dormancy threshold for your GitHub Enterprise Server instance.



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under  **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**, click **Options**.

1. Under "Dormancy threshold", select the dropdown menu, and click the desired dormancy threshold.

{% endif %}



## Downloading the dormant users report from your enterprise account


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "checklist" aria-hidden="true" aria-label="checklist" %} Compliance**.

1. Scroll to "Reports".
1. Optionally, to generate a new report, next to "Dormant Users", click **New report**.
1. Under "Recent reports", next to the report you want to download, click **{% octicon "download" aria-hidden="true" aria-label="download" %} Download**.
