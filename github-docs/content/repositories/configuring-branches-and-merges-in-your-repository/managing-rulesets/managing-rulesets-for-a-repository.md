After creating a ruleset, you can still make changes to it. For example, you can add rules to better protect your branches or tags, or you can switch your ruleset from "Evaluate" mode to "Active" after testing its effects on the contributor experience for your repository.

You can use the REST and GraphQL APIs to manage rulesets. For more information, see [Rules](https://docs.github.com/en/rest/repos/rules) and [Repos](https://docs.github.com/en/graphql/reference/repos#mutation-createrepositoryruleset).



> [!TIP]
> If you're the owner of an organization, you can create rulesets at the organization level. You can apply these rulesets to specific repositories in your organization, and to specific branches in those repositories. For more information, see [Creating Rulesets For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization).



## Viewing rulesets for a repository

On the "Rulesets" page, anyone with read access to the repository can view the active rulesets targeting a certain branch, tag, or push restriction. You will also see rulesets running in "Evaluate" mode, which are not enforced.

For push rulesets for forked repositories, the "Rulesets" page will indicate that the ruleset is managed by the source repository where the rule is applied.

1. On GitHub, navigate to the main page of the repository.

1. From the file tree view on the left, select the {% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} branch dropdown menu, then click **View all branches**. You can also find the branch dropdown menu at the top of the integrated file editor.

   ![Screenshot of the file tree view for a repository. A dropdown menu for branches is expanded and outlined in dark orange.](/assets/images/help/repository/file-tree-view-branch-dropdown-expanded.png)

1. To the left of the branch name, click {% octicon "shield-lock" aria-label="view rules" %}.

   > [!TIP] Only branches that have a ruleset have a {% octicon "shield" aria-label="The shield icon" %} icon adjacent to their name.

1. Optionally, to filter the results click the tabs or use the "Search branches" search bar.
1. Click the name of the ruleset you want to view.

You can also view active ruselets:

* By adding the `/rules` slug to the repository's URL. For example, to view the rules of the open source documentation repository at GitHub,  you would go to https://github.com/github/docs/rules.

* In the merge box if there are rules blocking the merging of a pull request.

## Editing a ruleset



> [!NOTE]
> If a ruleset was created at the organization level, you cannot edit the ruleset from the repository's settings. If you have permission to edit the ruleset, you can do so in your organization's settings. For more information, see [Managing Rulesets For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization#editing-a-ruleset).



You can edit a ruleset to change parts of the ruleset, such as the name, bypass permissions, or rules. You can also edit a ruleset to change its status, such as if you want to enable or temporarily disable a ruleset.


1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the left sidebar, under "Code and automation," click **Rules**, then click **Rulesets**.

   ![Screenshot of the sidebar of the "Settings" page for a repository. The "Rules" sub-menu is expanded, and the "Rulesets" option is outlined in orange.](/assets/images/help/repository/rulesets-settings.png)

1. On the "Rulesets" page, click the name of the ruleset you want to edit.
1. Change the ruleset as required. For information on the available rules, see [Available Rules For Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets).
1. At the bottom of the page, click **Save changes**.


## Deleting a ruleset

> [!TIP]
> If you want to temporarily disable a ruleset but do not want to delete it, you can set the ruleset's status to "Disabled." For more information, see [Editing a ruleset](#editing-a-ruleset).


1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the left sidebar, under "Code and automation," click **Rules**, then click **Rulesets**.

   ![Screenshot of the sidebar of the "Settings" page for a repository. The "Rules" sub-menu is expanded, and the "Rulesets" option is outlined in orange.](/assets/images/help/repository/rulesets-settings.png)

1. Click the name of the ruleset you want to delete.
1. To the right of the ruleset's name, select {% octicon "kebab-horizontal" aria-label="Open additional options" %}, then click **{% octicon "trash" aria-hidden="true" aria-label="trash" %} Delete ruleset**.

   ![Screenshot of the page for editing a ruleset. Below a button labeled with three dots, an option labeled "Delete ruleset" is outlined in orange.](/assets/images/help/repository/delete-ruleset.png)




## Using ruleset history

> [!NOTE]
> Only changes made to a ruleset after you have upgraded to GitHub Enterprise Server 3.17.0, or a later version, are included in the ruleset history.


Ruleset history lists events triggered by changes that affect your rulesets within the last 180 days.

You can view all the changes to a ruleset and revert back to a specific iteration. You can also download a JSON file containing the ruleset's configuration at a specific iteration. The bypass list of a ruleset is excluded from the exported JSON file.


1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the left sidebar, under "Code and automation," click **Rules**, then click **Rulesets**.

   ![Screenshot of the sidebar of the "Settings" page for a repository. The "Rules" sub-menu is expanded, and the "Rulesets" option is outlined in orange.](/assets/images/help/repository/rulesets-settings.png)

1. To view the history of changes to the ruleset, select {% octicon "kebab-horizontal" aria-label="Open additional options" %} to the right of the ruleset's name, then click **{% octicon "history" aria-hidden="true" aria-label="history" %} History**.

   ![Screenshot of the page for repository rulesets. Below a button labeled with three dots, an option labeled "History" is outlined in orange.](/assets/images/help/repository/ruleset-history.png)

1. To the right of the specific iteration, select {% octicon "kebab-horizontal" aria-label="Open additional options" %}, then click **Compare changes**, **Restore**, or **Download**.

   ![Screenshot of the page for repository rulesets history. A dropdown menu labeled with three dots is expanded and highlighted with an orange outline.](/assets/images/help/repository/ruleset-history-options.png)






## Importing a ruleset

You can import an existing ruleset using a JSON file. This can be useful if you want to apply the same ruleset to multiple repositories or organizations.


1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the left sidebar, under "Code and automation," click **Rules**, then click **Rulesets**.

   ![Screenshot of the sidebar of the "Settings" page for a repository. The "Rules" sub-menu is expanded, and the "Rulesets" option is outlined in orange.](/assets/images/help/repository/rulesets-settings.png)

1. Select the **New ruleset** dropdown, then click **Import a ruleset**.

   ![Screenshot of the page for repository rulesets. The "New ruleset" dropdown menu is expanded and the "Import a ruleset" option is outlined in orange.](/assets/images/help/repository/import-a-ruleset.png)

1. Open the exported JSON file.
1. Review the imported ruleset and click **Create**.


## Viewing insights for rulesets

You can view insights for rulesets to see how rulesets are affecting a repository. On the "Rule Insights" page, you will see a timeline of the following user actions. You can use filters to find what you're looking for.

* Actions that have been checked against one or more rulesets and passed.
* Actions that have been checked against one or more rulesets and failed.
* Actions where someone has bypassed one or more rulesets.

If a ruleset is running in "Evaluate" mode, you can see actions that would have passed or failed if the ruleset had been active.

Additionally, these insights are available via the rule suites [REST API](/rest/repos/rule-suites).

![Screenshot of the "Rule Insights" page. Three actions are listed marked: "Pass," "Bypass," and "Fail". The failed action has with an "evaluate" label.](/assets/images/help/repository/rule-insights.png)


1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the left sidebar, under "Code and automation," click **Rules**, then click **Insights**.

   ![Screenshot of the sidebar of the "Settings" page for a repository. The "Rules" sub-menu is expanded, and the "Insights" option is outlined in orange.](/assets/images/help/repository/ruleset-insights.png)
1. On the "Rule Insights" page, use the dropdown menus at the top of the page to filter the actions by ruleset, branch, actor, and time period.
1. To see which specific rules failed or required a bypass, click {% octicon "kebab-horizontal" aria-label="View rule runs" %}, then expand the name of the ruleset.

   ![Screenshot of the "Rule Insights" page. To the right of an event labeled "not-allowed," an icon of three horizontal dots is outlined in orange.](/assets/images/help/repository/view-rule-runs.png)

{%- ifversion repo-rules-merge-queue %}
1. Optionally, review merge queue details for corresponding pull requests in the same merge group.





### Rule insights dashboard

> [!NOTE]
> The rule insights dashboard is in public preview and subject to change. It is available for GitHub Team and GitHub Enterprise Cloud plans.

The rule insights dashboard gives you a visual, high-level summary of rule evaluation activity for your repository, including:

- **Successes, failures, and bypasses over time**: A chart showing trends in rule evaluation results, helping you spot spikes in blocked pushes or unusual patterns.
- **Top bypassers**: A list of the most active bypassers for your rulesets.

Each chart links back to the rule insights page with filters prefilled, so you can quickly drill into specific statuses, bypassers, or time ranges.

To view the dashboard:

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the left sidebar, under "Code and automation," click **Rules**, then click **Insights**.
1. At the top of the "Rule Insights" page, view the dashboard charts for an overview of rule evaluation activity.



{% endif %}



## Managing requests to bypass push rules

You can view and manage all requests for bypass privileges on the “Bypass Requests" page, located under the **Rules** settings of the repository.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. Click **Bypass Requests**.

You can filter requests by approver (member of the bypass list), requester (contributor making the request), timeframe, and status. The following statuses are assigned to a request:

|Status|Description|
|---------|-----------|
|`Cancelled`| The request has been cancelled by the contributor.|
|`Completed`|The request has been approved and the commit(s) have been pushed to the repository.|
|`Denied`|The request has been reviewed and denied.|
|`Expired`| The request has expired. Requests are valid for 7 days. |
|`Open`| The request has either not yet been reviewed, or has been approved but the commit(s) have not been pushed to the repository.  |

When a contributor requests bypass privileges to push a commit containing restricted content, members of the bypass list all receive an email notification containing a link to the request. Members of the bypass list then have 7 days to review and either approve or deny the request before the request expires.

The contributor is notified of the decision by email and must take the required action. If the request is approved, the contributor can push the commit containing the restricted content to the repository. If the request is denied, the contributor must remove the restricted content from the commit in order to successfully push the commit to the repository.
