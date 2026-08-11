# Limiting interactions in your repository

## About temporary interaction limits

Enabling an interaction limit for a repository restricts certain users from commenting, opening issues, creating pull requests, reacting with emojis, editing existing comments, and editing titles of issues and pull requests.


When you enable an interaction limit, you can choose a duration for the limit: 24 hours, 3 days, 1 week, 1 month, or 6 months.
 After the duration of your limit passes, users can resume normal activity in your repository.

There are three types of interaction limits.
* **Limit to existing users:** Limits activity for users with accounts that are less than 24 hours old who do not have prior contributions and are not collaborators.
* **Limit to prior contributors:** Limits activity for users who have not previously contributed to the default branch of the repository and are not collaborators.
* **Limit to repository collaborators:** Limits activity for users who do not have write access to the repository.


You can also enable activity limitations on all repositories owned by your personal account or an organization. If a user-wide or organization-wide limit is enabled, you can't limit activity for individual repositories owned by the account. For more information, see [Limiting Interactions For Your Personal Account](https://docs.github.com/en/communities/moderating-comments-and-conversations/limiting-interactions-for-your-personal-account) and [Limiting Interactions In Your Organization](https://docs.github.com/en/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization).

## Limiting interactions in your repository

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the sidebar, select **{% octicon "comment-discussion" aria-hidden="true" aria-label="comment-discussion" %} Moderation options**, then click **Interaction limits**.
1. Under "Temporary interaction limits", to the right of the type of interaction limit you want to set, select the **Enable** dropdown menu, then click the duration you want for your interaction limit.




## Limiting concurrent open pull requests for users without write access

In a public repository, you can set a maximum number of pull requests that a user without write access can have open at the same time. When a user without write access reaches the limit, they can close or merge an existing pull request before they can open a new one.

This setting helps maintainers manage contribution volume by preventing users from opening an excessive number of pull requests, which can overwhelm review queues and trigger unnecessary CI runs. The limit only applies to users without write access — users with write access or higher are not affected.

Draft pull requests do not count toward a user's limit. Only open, non-draft pull requests are counted when determining whether a user has reached the maximum.

### Adding trusted contributors to the bypass list

Rather than granting full collaborator access, you can add trusted contributors to a bypass list, allowing them to exceed the pull request limit while keeping their permissions otherwise unchanged. This bypass is ideal for regular external contributors who routinely open multiple pull requests but do not need the additional permissions that come with collaborator access.

You can manage the bypass list through either the UI or the API. The bypass list supports up to 100 users.

### Configuring the pull request limit

To configure the pull request limit, navigate to the **Interaction limits** settings page following the same steps described in [Limiting Interactions In Your Repository](https://docs.github.com/en/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository), then:

1. Under **Pull request limits**, select the maximum number of concurrent open pull requests allowed for users without write access.
1. Optionally, under **Bypass list**, search for and select the users you want to allow to bypass the pull request limit.



## Further reading

* [Reporting Abuse Or Spam](https://docs.github.com/en/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
* [Managing An Individuals Access To An Organization Repository](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-an-individuals-access-to-an-organization-repository)
* [Permission Levels For A Personal Account Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/permission-levels-for-a-personal-account-repository)
* [Repository Roles For An Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)
* [Managing Moderators In Your Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)
