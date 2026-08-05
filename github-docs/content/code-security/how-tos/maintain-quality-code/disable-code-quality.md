# Disabling GitHub Code Quality

## Disabling Code Quality for your repository

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the sidebar, under **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**, click **{% octicon "code-square" aria-hidden="true" aria-label="code review" %} Code quality** to display the "Code quality" page.
1. Under **Code Quality analysis**, toggle from **On** to **Off**.

This stops all future Code Quality scans, and the billing they generate, for that repository.

## Disabling Code Quality for an organization

Disabling at the organization level turns Code Quality off across your organization in a single change.

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the sidebar, under "Security", click **{% octicon "code-square" aria-hidden="true" aria-label="code review" %} Code quality**.
1. Under "Repository access", select **No repositories** from the dropdown menu. This sets your organization's default to off, disabling Code Quality in every repository that follows the organization default, for both current and future repositories.
1. To also disable Code Quality in repositories where an administrator has deliberately enabled it, and to prevent administrators from re-enabling it, turn on **Enforce access**. Without enforcement, those repositories keep Code Quality enabled.
1. Unless you select **Let repositories decide**, a "Review enablement and billing changes" dialog appears, showing the total number of affected repositories. Review the details, then click **Confirm**.

For the full list of access options and how enforcement works, see [Enablement At Scale](https://docs.github.com/en/code-security/concepts/code-quality/enablement-at-scale#organization-level-repository-access).

## What happens to your existing data

Disabling Code Quality:

* Turns off future scanning. It doesn't remove your repository's code or commit history.
* Retains your existing Code Quality data. Findings, quality scores, and history from previous scans aren't deleted when you disable Code Quality, so there's no data loss, and this data is available again if you re-enable it.

## When billing stops

Disabling stops new scans right away, so no further GitHub Actions minutes or AI credits are consumed.

Usage you've already accrued this cycle still bills as normal. All metered usage adds up over the course of the month and bills on your next billing cycle date, so your next bill will show the AI credits usage and licenses consumed before you disabled the feature. You won't see new charges accrue after the disable date.

## Confirming Code Quality is off

What confirms the change depends on the level you disabled it at.

**At the organization level**, open the organization's "Code quality" settings page and check that **Repository access** shows your selection (for example, **No repositories**) and that **Enforce access** is on if you enforced it. The organization-level Code Quality dashboard also stops showing data for the affected repositories. See [Explore Code Quality](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/explore-code-quality).

**At the repository level**, the repository's "Code quality" settings page shows that Code Quality analysis is disabled. If organization or enterprise enforcement applies, the page also shows a message that a policy prevents changing the Code Quality setting. No new Code Quality runs start on later pull requests or pushes; on the **Actions** tab, these runs are labeled by trigger, for example "Code Quality: push on main".

> [!NOTE]
> These runs use the workflow name CodeQL, the same name code scanning uses, so you can't reliably tell Code Quality and code scanning runs apart by workflow name. Identify Code Quality runs by their GitHub Actions label instead, for example "Code Quality: push on main".
