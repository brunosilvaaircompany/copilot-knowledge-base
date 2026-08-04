# Set code scanning merge protection

## Creating a merge protection ruleset for a repository

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the left sidebar, under "Code and automation," click **Rules**, then click **Rulesets**.

   ![Screenshot of the sidebar of the "Settings" page for a repository. The "Rules" sub-menu is expanded, and the "Rulesets" option is outlined in orange.](/assets/images/help/repository/rulesets-settings.png)

1. Click **New ruleset**.
1. To create a ruleset targeting branches, click **New branch ruleset**.
1. Under "Ruleset name," type a name for the ruleset.
1. Optionally, to change the default enforcement status, click **{% octicon "skip" aria-hidden="true" aria-label="skip" %} Disabled** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} and select an enforcement status.

1. Under "Branch protections", select **Require code scanning results**.
1. Under "Required tools and alert thresholds", click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add tool** and select a code scanning tool with the dropdown. For example, "CodeQL".
1. Next to the name of a code scanning tool:
    * Click **Alerts** and select one of: **None**, **Errors**, **Errors and Warnings** or **All**.
    * Click **Security alerts** and select one of: **None**, **Critical**, **High or higher**, **Medium or higher**, or **All**.

    ![Screenshot of the "Required tools and alert thresholds" section of "Rulesets" settings.](/assets/images/help/repository/rulesets-require-code-scanning.png)

For more information about alert severity and security severity levels, see [Code Scanning Alerts](https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts#about-alert-severity-and-security-severity-levels).


For more information about managing rulesets in a repository, see [Managing Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets).



## Creating a merge protection ruleset for all repositories in an organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "repo" aria-hidden="true" aria-label="repo" %} Repository**, then click **Rulesets**.

   ![Screenshot of an organization's settings page. In the sidebar, a link labeled "Rulesets" is outlined in orange.](/assets/images/help/organizations/sidebar-repository-rulesets.png)

1. Click **New ruleset**.
1. To create a ruleset targeting branches, click **New branch ruleset**.
1. Under "Ruleset name," type a name for the ruleset.
1. Optionally, to change the default enforcement status, click **{% octicon "skip" aria-hidden="true" aria-label="skip" %} Disabled** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} and select an enforcement status.

1. Under "Branch protections", select **Require code scanning results**.
1. Under "Required tools and alert thresholds", click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add tool** and select a code scanning tool with the dropdown. For example, "CodeQL".
1. Next to the name of a code scanning tool:
    * Click **Alerts** and select one of: **None**, **Errors**, **Errors and Warnings** or **All**.
    * Click **Security alerts** and select one of: **None**, **Critical**, **High or higher**, **Medium or higher**, or **All**.

    ![Screenshot of the "Required tools and alert thresholds" section of "Rulesets" settings.](/assets/images/help/repository/rulesets-require-code-scanning.png)

For more information about alert severity and security severity levels, see [Code Scanning Alerts](https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts#about-alert-severity-and-security-severity-levels).


For more information about managing rulesets for repositories in an organization, see [Managing Rulesets For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization).



## Creating a merge protection ruleset with the REST API

You can use the REST API to create a ruleset with the `code_scanning` rule, which allows you to define specific tools and set alert thresholds. For more information, see [Rules?Apiversion=2022 11 28](https://docs.github.com/en/rest/repos/rules?apiVersion=2022-11-28#create-a-repository-ruleset).
