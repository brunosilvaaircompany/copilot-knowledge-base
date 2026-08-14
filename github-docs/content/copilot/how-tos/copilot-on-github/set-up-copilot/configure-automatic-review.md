# Configuring automatic code review by GitHub Copilot

## Introduction

You can configure Copilot code review to review pull requests automatically. For an overview of automatic pull request reviews, see [Code Review](https://docs.github.com/en/copilot/concepts/agents/code-review#about-automatic-pull-request-reviews).

## Configuring automatic code review for your own pull requests

> [!NOTE]
> This is only available if you are on the Copilot Pro, Copilot Pro+, or Copilot Max plans.

1. In the upper-right corner of any page, click your profile picture, then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot settings**.

1. Locate the **Automatic Copilot code review** option and click the dropdown button.

   ![Screenshot of the "Automatic Copilot code review" setting with the dropdown menu displayed.](/assets/images/help/copilot/code-review/automatic-code-review-personal.png)

1. In the dropdown menu, select **Enabled**.

## Configuring automatic code review for a single repository

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the left sidebar, under "Code and automation," click **Rules**, then click **Rulesets**.

   ![Screenshot of the sidebar of the "Settings" page for a repository. The "Rules" sub-menu is expanded, and the "Rulesets" option is outlined in orange.](/assets/images/help/repository/rulesets-settings.png)

1. Click **New ruleset**.
1. Click **New branch ruleset**.
1. Under "Ruleset name," type a name for the ruleset.
1. To activate the ruleset, under "Enforcement Status", select **Active**.

1. Under "Target branches," click **Add target** and choose one of the options—for example, **Include default branch** or **Include all branches**.
1. Under "Target branches," click **Add target** and choose one of the target options.
1. Under "Branch rules," select **Automatically request Copilot code review**.

   This expands a set of subsidiary options.

   ![Screenshot of the "Automatically request Copilot code review" branch ruleset option.](/assets/images/help/copilot/code-review/automatic-code-review.png)

1. Optionally, if you want Copilot to review all new pushes to the pull request, select **Review new pushes**.

   If this option is not selected, Copilot will only review the pull request once.

1. Optionally, if you want Copilot to review pull requests while they are still drafts, select the **Review draft pull requests**.

   This can be a useful option for catching errors early, before requesting a human review.

1. At the bottom of the page, click **Create**.


## Configuring automatic code review for repositories in an organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "repo" aria-hidden="true" aria-label="repo" %} Repository**, then click **Rulesets**.

   ![Screenshot of an organization's settings page. In the sidebar, a link labeled "Rulesets" is outlined in orange.](/assets/images/help/organizations/sidebar-repository-rulesets.png)

1. Click **New ruleset**.
1. Click **New branch ruleset**.
1. Under "Ruleset name," type a name for the ruleset.
1. To activate the ruleset, under "Enforcement Status", select **Active**.

1. Under "Target repositories," click **Add target** and choose either **Include by pattern** or **Exclude by pattern**.
1. Type a pattern that matches the repository names you want to target—for example, `*feature` to match all repositories with names ending in `feature`.

   For pattern-matching syntax, see [Creating Rulesets For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization#using-fnmatch-syntax).

1. Click **Add inclusion pattern** or **Add exclusion pattern**.
1. Repeat for any additional patterns.

   > [!NOTE]
   > You can add multiple targeting criteria to the same ruleset. Exclusion patterns are applied after inclusion patterns. For example, you could include any repositories matching the pattern `*cat*`, and specifically exclude a repository matching the pattern `not-a-cat`.

1. Under "Target branches," click **Add target** and choose one of the target options.
1. Under "Branch rules," select **Automatically request Copilot code review**.

   This expands a set of subsidiary options.

   ![Screenshot of the "Automatically request Copilot code review" branch ruleset option.](/assets/images/help/copilot/code-review/automatic-code-review.png)

1. Optionally, if you want Copilot to review all new pushes to the pull request, select **Review new pushes**.

   If this option is not selected, Copilot will only review the pull request once.

1. Optionally, if you want Copilot to review pull requests while they are still drafts, select the **Review draft pull requests**.

   This can be a useful option for catching errors early, before requesting a human review.

1. At the bottom of the page, click **Create**.


## Configuring review effort level for an organization

You can set the default review effort level that Copilot code review uses for automatic reviews at both the organization and repository levels. Repository settings override organization defaults. For an overview of review effort levels, see [Code Review](https://docs.github.com/en/copilot/concepts/agents/code-review#review-effort-level).

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, then **Code review**.
1. Next to "Review effort level," select the default effort level for automatic reviews in repositories in your organization.
   * **Lite**: Standard review.
   * **Balanced**: Deeper analysis of complex logic, security-sensitive code, and cross-service changes.

Balanced reviews use more AI credits, and may consume marginally more GitHub Actions minutes. For more information on the cost of review effort levels, see [Code Review](https://docs.github.com/en/copilot/concepts/agents/code-review#estimated-consumption).

## Configuring review effort level for a repository

You can override the organization default and set a different default review effort level for automatic reviews in a repository.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, then **Code review**.
1. Next to "Review effort level," select the effort level for automatic reviews in this repository.
   * **Lite**: Standard review.
   * **Balanced**: Deeper analysis of complex logic, security-sensitive code, and cross-service changes.

Balanced reviews use more AI credits, and may consume marginally more GitHub Actions minutes. For more information on the cost of review effort levels, see [Code Review](https://docs.github.com/en/copilot/concepts/agents/code-review#estimated-consumption).
