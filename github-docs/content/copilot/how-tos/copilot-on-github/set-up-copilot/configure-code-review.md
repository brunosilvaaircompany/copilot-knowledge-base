# Configuring code review by GitHub Copilot

## Introduction

You can configure Copilot code review to review pull requests automatically. For an overview of automatic pull request reviews, see [Code Review](https://docs.github.com/en/copilot/concepts/agents/code-review#automatic-pull-request-reviews).

## Configuring automatic code review for your own pull requests

> [!NOTE]
> This is only available if you are on the Copilot Pro, Copilot Pro+, or Copilot Max plans.

1. In the upper-right corner of any page, click your profile picture, then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot settings**.

1. Locate the **Automatic Copilot code review** option and click the dropdown button.

   ![Screenshot of the "Automatic Copilot code review" setting with the dropdown menu displayed.](/assets/images/help/copilot/code-review/automatic-code-review-personal.png)

1. In the dropdown menu, select **Enabled**.

## Configuring automatic code review for a repository

You can enable automatic code reviews for a repository and customize how code reviews are performed.

### Enabling automatic reviews

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the left sidebar, under "Code and automation," click **Rulesets**, then click **Rulesets**.

1. Click **New ruleset**.
1. Click **New branch ruleset**.
1. Under "Ruleset name," type a name for the ruleset.
1. To activate the ruleset, under "Enforcement Status", select **Active**.

1. Under "Target branches," click **Add target** and choose one of the options—for example, **Include default branch** or **Include all branches**.
1. Under "Target branches," click **Add target** and choose one of the target options.
1. Under "Branch rules," select **Automatically request Copilot code review**.

1. Optionally, if you want Copilot to review all new pushes to the pull request, select **Review new pushes**.

   If this option is not selected, Copilot will only review the pull request once.

1. Optionally, if you want Copilot to review pull requests while they are still drafts, select the **Review draft pull requests**.

   This can be a useful option for catching errors early, before requesting a human review.

1. At the bottom of the page, click **Create**.


### Customizing Copilot code review

You can configure how Copilot code review completes code reviews in your repository.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, then **Code review**.
1. To choose the depth of Copilot code reviews, next to "Review effort level," select the effort level for automatic reviews in this repository.
   * **Lite**: Standard review.
   * **Balanced**: Deeper analysis of complex logic, security-sensitive code, and cross-service changes.

   Balanced reviews use more AI credits, and may consume marginally more GitHub Actions minutes. See [Code Review](https://docs.github.com/en/copilot/concepts/agents/code-review#estimated-consumption).
1. To choose whether Copilot can approve pull requests in your repository, configure the settings under "Auto-approval."
   * **Allow Copilot to approve pull requests**: Toggle on to let Copilot submit approving reviews.
   * **Allow Copilot approvals to count toward merge requirements**: Toggle on so Copilot approvals can satisfy pull request approval requirements.
   * **File paths**: Optionally, limit which pull requests count toward merge requirements. Enter one file glob per line to count approvals only on pull requests where every changed file matches one of the globs. Leave blank to count approvals for all files. Up to 15 globs are supported.

   > [!NOTE]
   > Copilot approvals are in public preview and subject to change.


## Configuring automatic code review for repositories in an organization

You can enable automatic code reviews for repositories in your organization and customize how code reviews are performed.

### Enabling automatic reviews

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "repo" aria-hidden="true" aria-label="repo" %} Repository**, then click **Rulesets**.

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

1. Optionally, if you want Copilot to review all new pushes to the pull request, select **Review new pushes**.

   If this option is not selected, Copilot will only review the pull request once.

1. Optionally, if you want Copilot to review pull requests while they are still drafts, select the **Review draft pull requests**.

   This can be a useful option for catching errors early, before requesting a human review.

1. At the bottom of the page, click **Create**.


### Customizing Copilot code review

You can configure how Copilot code review completes code reviews in repositories in your organization.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Copilot**, then **Code review**.
1. To choose the depth of Copilot code reviews, next to "Review effort level," select the default effort level for automatic reviews in repositories in your organization.
   * **Lite**: Standard review.
   * **Balanced**: Deeper analysis of complex logic, security-sensitive code, and cross-service changes.

    Balanced reviews use more AI credits, and may consume marginally more GitHub Actions minutes. See [Code Review](https://docs.github.com/en/copilot/concepts/agents/code-review#estimated-consumption).
1. To choose whether Copilot can approve pull requests in your repositories, select an option under "Approvals," next to "Count Copilot approvals toward merge requirements."
   * **Enabled everywhere**: Copilot approvals can count toward merge requirements in every repository in the organization.
   * **Let repositories decide**: Repository admins can decide this in repository settings.
   * **Enable for selected repositories**: Copilot approvals can count toward merge requirements only in the repositories you select. If you choose this option, also assign the repositories you want to enable this for.
   * **Disabled everywhere**: Copilot approvals cannot count toward merge requirements in any repository in the organization.
   
   > [!NOTE]
   > Copilot approvals are in public preview and subject to change.


## Configuring automatic code review for an enterprise

You can enable automatic code reviews for your enterprise and customize how code reviews are performed.

### Enabling automatic reviews

1. Create an enterprise-level branch ruleset. See [Enforcing Policies For Code Governance](https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-governance).
1. Target the organizations and repositories where Copilot code review should run automatically.
1. Enable the **Automatically request Copilot code review** policy.
1. Optionally, enable automatic reviews for draft pull requests and after each push to a pull request.
1. Click **Create**.

### Customizing Copilot code review

You can configure how Copilot code review completes code reviews for your enterprise.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} AI controls**.

1. Scroll down to "Available Agents", then click **Copilot code review**.
1. Next to "Copilot code review", select a policy.
1. Then choose which Copilot code review features to enable for your enterprise.
1. To choose whether Copilot can approve pull requests in your organizations, next to "Allow Copilot to approve pull requests," select a policy.
   * **Let organizations decide**: Organization owners can choose whether to enable Copilot approvals.
   * **Enable for selected organizations**: Copilot approvals are enabled only for the organizations you select.
   * **Disabled everywhere**: Organizations cannot enable Copilot approvals. This is the default.

   > [!NOTE]
   > Copilot approvals are in public preview and subject to change.
