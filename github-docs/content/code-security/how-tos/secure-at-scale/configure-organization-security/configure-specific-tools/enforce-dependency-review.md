# Enforcing dependency review across an organization

You can enforce the use of the dependency review action in your organization by setting up a repository ruleset that will require a workflow that runs dependency review to pass before pull requests can be merged. For more information about the action, see [Dependency Review](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review#about-the-dependency-review-action).

## Prerequisites

You need to add the dependency review action to one of the repositories in your organization, and configure the action. For more information, see [Configuring the dependency review action](/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-dependency-review-action).

## Enforcing dependency review for your organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "repo" aria-hidden="true" aria-label="repo" %} Repository**, then click **Rulesets**.

   ![Screenshot of an organization's settings page. In the sidebar, a link labeled "Rulesets" is outlined in orange.](/assets/images/help/organizations/sidebar-repository-rulesets.png)

1. Click the **New ruleset** dropdown menu, and select **New branch ruleset**.
1. To help identify your ruleset and clarify its purpose, give the ruleset a name in **Ruleset Name**.
1. Set **Enforcement status** to **{% octicon "play" aria-hidden="true" aria-label="play" %} Active**.
1. Optionally, you can target specific repositories in your organization. For more information, see [Choosing which repositories to target in your organization](/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization#choosing-which-repositories-to-target-in-your-organization).
1. In the "Rules" section, select the "Require workflows to pass before merging" option.
1. In "Workflow configurations", click **Add workflow**.
1. In the dialog, select the repository that you added the dependency review action to. For more information, see [Prerequisites](#prerequisites).
1. Select a branch and the workflow file for dependency review in the enhanced dialog.

   ![Screenshot of the Add required workflow dialog. You need to specify a repository, branch, and workflow.](/assets/images/help/repository/add-required-workflow-dialog.png)

1. Click **Create**.
