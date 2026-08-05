# Managing pull request reviews in your organization

## About code review limits

By default, in public repositories, any user can submit reviews that approve or request changes to a pull request.

You can limit who is able to approve or request changes to pull requests in public repositories owned by your organization. After you enable code review limits, anyone can comment on pull requests in your public repositories, but only people with explicit access to a repository can approve a pull request or request changes.

You can also enable code review limits for individual repositories. If you enable or limits for your organization, you will override any limits for individual repositories owned by the organization. For more information, see [Managing Pull Request Reviews In Your Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-pull-request-reviews-in-your-repository).

## Managing code review limits

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Access" section of the sidebar, click **{% octicon "report" aria-hidden="true" aria-label="report" %} Moderation**.
1. Under "{% octicon "report" aria-hidden="true" aria-label="report" %} Moderation", click **Code review limits**.
1. Review the information on screen.
1. Manage code review limits.
   * To limit reviews to those with explicit access, click **Limit review on all repositories**.
   * To remove the limits from every public repository in your organization, click **Remove review limits from all repositories**.
