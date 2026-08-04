# Setting code coverage thresholds for pull requests

> [!NOTE]
> This feature is in public preview and subject to change.

## Prerequisites

* GitHub Code Quality is enabled on the repository.
* Code coverage data is uploaded to GitHub for the pull request branch. See [Set Up Code Coverage](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/set-up-code-coverage).

## Creating a coverage threshold rule

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the left sidebar, under "Code and automation," click **Rules**, then click **Rulesets**.

   ![Screenshot of the sidebar of the "Settings" page for a repository. The "Rules" sub-menu is expanded, and the "Rulesets" option is outlined in orange.](/assets/images/help/repository/rulesets-settings.png)

1. Create a new branch ruleset or click an existing one to edit it.
1. Under "Branch rules", select **Restrict code coverage**.
1. Expand **Additional settings** to configure thresholds. A value of 0 means that the threshold is disabled.

   * **Minimum coverage percentage**: enter a value to block pull requests where aggregated coverage falls below this percentage.
   * **Maximum coverage drop**: enter a value to block pull requests where coverage drops by more than this many percentage points relative to the default branch.

1. Click **Create** or **Save changes**.



> [!TIP]
> Consider setting your ruleset to **Evaluate** mode before switching to **Active**. This lets you observe which pull requests would have been blocked without enforcing the rule, giving you a chance to calibrate your thresholds.
