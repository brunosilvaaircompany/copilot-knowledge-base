# Enabling GitHub Code Quality

You can enable Code Quality for a single repository, or for every repository in an organization at once. Enabling at the organization level gives all your teams a consistent quality baseline with a single change, while enabling per repository lets you target specific projects or roll out gradually.

## Prerequisites

* An enterprise owner must have allowed Code Quality in your enterprise. See [Allow GitHub Code Quality In Enterprise](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/allow-github-code-quality-in-enterprise).
* GitHub Actions must be enabled because Code Quality uses actions to run each CodeQL analysis.
* To get the full benefit of the feature, your repository should include one of the languages supported for quality analysis by CodeQL. See [Supported languages](/code-security/concepts/code-quality/code-quality#supported-languages).

## Enabling Code Quality for your repository

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the sidebar, under "Security", click **{% octicon "code-square" aria-hidden="true" aria-label="code review" %} Code quality** to display the "Code quality" page.
1. Click **Enable code quality**.
1. Review the information on the Code quality page:

   * **Languages:** If you want to disable CodeQL analysis for any of the languages, clear the associated check box.
   * **Runner type:** If you want to use a different runner, choose **Labeled runner** and define the **Runner label**. See [Use GitHub Hosted Runners](https://docs.github.com/en/actions/how-tos/manage-runners/github-hosted-runners/use-github-hosted-runners) and [Apply Labels](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/apply-labels).

1. Click **Save changes** to save your configuration for Code Quality.

If your organization has configured caching of private registries, these will be available for code quality analysis to use to resolve dependencies. See [Giving Org Access Private Registries](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/manage-usage-and-access/giving-org-access-private-registries#code-quality-access-to-private-registries).

## Enabling Code Quality for your organization

At the organization level, you control Code Quality with a single **Repository access** setting. This gives you granular options, from enabling every repository to targeting a specific list or a dynamic filter, so you can pilot Code Quality intentionally and roll it out at your own pace. Repositories within your selection are enabled, and repositories outside your selection are disabled.

For the available access options, and how filtering and enforcement work, see [Enablement At Scale](https://docs.github.com/en/code-security/concepts/code-quality/enablement-at-scale#organization-level-repository-access).

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the sidebar, under "Security", click **{% octicon "code-square" aria-hidden="true" aria-label="code review" %} Code quality**.
1. Under "Repository access", select an option from the dropdown menu.
   * If you selected **Selected repositories...**, choose the repositories you want to enable.
   * If you selected **Matching a filter...**, define your filter.
1. Optionally, to prevent repository administrators from changing these settings, enable **Enforce access**.
1. If your change enables or disables Code Quality on any repositories, a "Review enablement and billing changes" dialog appears, showing the total number of enabled and disabled repositories and the associated costs. Review the details, then click **Confirm**.

Your changes are saved automatically and begin to propagate immediately. In large organizations, it can take several minutes for the changes to apply across all repositories.

If you're rolling out the feature across many teams, we recommend you pilot on a small group and tune your quality thresholds before you enable everywhere. See [Roll Out At Scale](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/roll-out-at-scale).
