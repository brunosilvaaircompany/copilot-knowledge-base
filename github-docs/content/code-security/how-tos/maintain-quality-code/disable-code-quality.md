# Disabling GitHub Code Quality

## Disabling Code Quality for your repository

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the sidebar, under **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**, click **{% octicon "code-square" aria-hidden="true" aria-label="code review" %} Code quality** to display the "Code quality" page.
1. Under **Code Quality analysis**, toggle from **On** to **Off**.

This stops all future Code Quality scans for that repository, along with the GitHub Actions minutes and AI credits those scans use. License charges continue for a period after you disable Code Quality. See [When billing stops](#when-billing-stops).

## Disabling Code Quality for an organization

Disabling at the organization level turns Code Quality off across your organization in a single change.

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the sidebar, under "Security", click **{% octicon "code-square" aria-hidden="true" aria-label="code review" %} Code quality**.
1. Under "Repository access", select **No repositories** from the dropdown menu. This sets your organization's default to off, disabling Code Quality in every repository that follows the organization default, for both current and future repositories.
1. To also disable Code Quality in repositories where an administrator has deliberately enabled it, and to prevent administrators from re-enabling it, turn on **Enforce access**. Without enforcement, those repositories keep Code Quality enabled.
1. Unless you select **Let repositories decide**, a "Review enablement and billing changes" dialog appears, showing the total number of affected repositories. Review the details, then click **Confirm**.

For repositories affected by the organization-level change, disabling stops future scans and the metered usage they generate. Repositories that are explicitly enabled continue scanning unless you turn on **Enforce access**. License charges continue for a period after the change. See [When billing stops](#when-billing-stops).

For the full list of access options and how enforcement works, see [Enablement At Scale](https://docs.github.com/en/code-security/concepts/code-quality/enablement-at-scale#organization-level-repository-access).

## What happens to your existing data

Disabling Code Quality:

* Turns off future scanning. It doesn't remove your repository's code or commit history.
* Retains your existing Code Quality data. Findings, quality scores, and history from previous scans aren't deleted when you disable Code Quality, so there's no data loss, and this data is available again if you re-enable it.

## When billing stops

Disabling Code Quality stops metered usage immediately, but license charges continue for a period afterwards. For an overview of what Code Quality bills for, see [GitHub Code Quality](https://docs.github.com/en/billing/concepts/product-billing/github-code-quality).

### Metered usage stops immediately

Disabling stops new scans right away, so you use no further GitHub Actions minutes or AI credits.

Usage from before you disabled still bills as normal. Metered usage adds up over the course of the month and appears on your next bill.

### License charges can continue

Disabling Code Quality can reduce the number of licenses you use:

* A committer who contributed only to repositories where you disable Code Quality no longer counts towards your license usage.
* A committer who also contributed to another repository where Code Quality remains enabled continues to count. They stop counting 90 days after their most recent commit to an enabled repository.

For each billing period, you're charged for the highest number of licenses used at any point during that period, not the number in use at the end. Disabling Code Quality can free licenses for the next period, but it doesn't reduce the charge for the current period.

Code Quality uses the same licensing model as GitHub Advanced Security. To see how the active committer count changes as people stop committing and as repositories are enabled and disabled, see [GitHub Advanced Security](https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security#example-showing-how-the-active-committer-count-changes-over-time).

## Confirming Code Quality is off

What confirms the change depends on the level you disabled it at.

**At the organization level**, open the organization's "Code quality" settings page and check that **Repository access** shows your selection (for example, **No repositories**) and that **Enforce access** is on if you enforced it. The organization-level Code Quality dashboard also stops showing data for the affected repositories. See [Explore Code Quality](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/explore-code-quality).

**At the repository level**, the repository's "Code quality" settings page shows that Code Quality analysis is disabled. If organization or enterprise enforcement applies, the page also shows a message that a policy prevents changing the setting. No new runs start on later pull requests or pushes. On the **Actions** tab, identify existing Code Quality runs by the actor `github-code-quality` or by a run name such as "Code Quality: push on main."
