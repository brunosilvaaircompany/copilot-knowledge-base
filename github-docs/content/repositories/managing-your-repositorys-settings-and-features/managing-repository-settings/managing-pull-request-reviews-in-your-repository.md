# Managing pull request reviews in your repository

## About code review limits

By default, in public repositories, any user can submit reviews that approve or request changes to a pull request.

You can limit which users are able to submit reviews that approve or request changes to pull requests in your public repository. When you enable code review limits, anyone can comment on pull requests in your public repository, but only people with read access or higher can approve pull requests or request changes.

You can also enable code review limits for an organization. If you enable limits for an organization, you will override any limits for individual repositories owned by the organization. For more information, see [Managing Pull Request Reviews In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization).

## Enabling code review limits

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. Under **Access**, click **{% octicon "comment-discussion" aria-hidden="true" aria-label="comment-discussion" %} Moderation options**.
1. Under **Moderation options**, click **Code review limits**.
1. Select or deselect **Limit to users explicitly granted read or higher access**.
