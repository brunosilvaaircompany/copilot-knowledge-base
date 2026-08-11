# Limiting interactions in your organization

## About temporary interaction limits

Limiting interactions in your organization enables temporary interaction limits for all public repositories owned by the organization. Enabling an interaction limit for a repository restricts certain users from commenting, opening issues, creating pull requests, reacting with emojis, editing existing comments, and editing titles of issues and pull requests.


When you enable an interaction limit, you can choose a duration for the limit: 24 hours, 3 days, 1 week, 1 month, or 6 months.
 After the duration of your limit passes, users can resume normal activity in your organization's public repositories.

There are three types of interaction limits.
* **Limit to existing users:** Limits activity for users with accounts that are less than 24 hours old who do not have prior contributions and are not collaborators.
* **Limit to prior contributors:** Limits activity for users who have not previously contributed to the default branch of the repository and are not collaborators.
* **Limit to repository collaborators:** Limits activity for users who do not have write access to the repository.


Members of the organization are not affected by any of the limit types.

When you enable organization-wide activity limitations, you can't enable or disable interaction limits on individual repositories. For more information on limiting activity for an individual repository, see [Limiting Interactions In Your Repository](https://docs.github.com/en/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository).

Organization owners and moderators can also block users for a specific amount of time. After the block expires, the user is automatically unblocked. For more information, see [Blocking A User From Your Organization](https://docs.github.com/en/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization).

## Limiting interactions in your organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. _For organization owners:_ In the "Access" section of the sidebar, select **{% octicon "report" aria-hidden="true" aria-label="report" %} Moderation**, then click **Interaction limits**.

   _For organization moderators:_ In the sidebar, click **Interaction limits**.

1. Under "Temporary interaction limits", to the right of the type of interaction limit you want to set, select the **Enable** dropdown menu, then click the duration you want for your interaction limit.




## Limiting concurrent open pull requests for users without write access

Across all public repositories owned by your organization, you can set a maximum number of pull requests that a user without write access can have open at the same time. This limit applies separately to each repository, so a user without write access can have up to the configured maximum number of open pull requests in _each_ public repository owned by the organization, not across the organization as a whole. When a user without write access reaches the limit in a repository, they must close an existing pull request or wait for someone with write access to merge one before they can open a new one.

This setting helps maintainers manage contribution volume by preventing users from opening an excessive number of pull requests, which can overwhelm review queues and trigger unnecessary CI runs. The limit only applies to users without write access—users with write access or higher are not affected.

Draft pull requests do not count toward a user's limit. Only open, non-draft pull requests are counted when determining whether a user has reached the maximum.

The organization-level limit takes precedence, but if a repository owned by your organization has its own pull request limit configured after the organization-level limit, the repository-level limit overrides the organization-level limit. See [Limiting Interactions In Your Repository](https://docs.github.com/en/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository#limiting-concurrent-open-pull-requests-for-users-without-write-access).

### Configuring the pull request limit

To configure the pull request limit, navigate to the **Interaction limits** settings page following the same steps described in [Limiting interactions in your organization](#limiting-interactions-in-your-organization), then under **Pull request limits**, select the maximum number of concurrent open pull requests allowed for users without write access. You can also use the REST API to configure the pull request limit. See [Orgs](https://docs.github.com/en/rest/interactions/orgs#update-pull-request-creation-cap-for-an-org).



## Further reading

* [Reporting Abuse Or Spam](https://docs.github.com/en/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
* [Managing An Individuals Access To An Organization Repository](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-an-individuals-access-to-an-organization-repository)
* [Permission Levels For A Personal Account Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/permission-levels-for-a-personal-account-repository)
* [Repository Roles For An Organization](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)
* [Managing Moderators In Your Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)
