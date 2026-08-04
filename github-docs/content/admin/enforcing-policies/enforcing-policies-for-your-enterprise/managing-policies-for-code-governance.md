# Managing code rulesets for repositories in your enterprise

After creating a ruleset at the enterprise level, you can make changes to the ruleset to alter how people can interact with the targeted repositories. For example, you can:

* Add rules to better protect the branches or tags in those repositories
* Switch your ruleset from "Evaluate" mode to "Active" after testing its effects on the contributor experience

> [!NOTE]
> Anyone with read access to a repository can view the active rulesets operating on that repository.




## About delegated bypass

Delegated bypass for push rulesets lets you control who can bypass push protection and which blocked pushes should be allowed.

 With delegated bypass, contributors to a repository must request "bypass privileges" when pushing commits that contain restricted content. The request is sent to a designated group of reviewers, who either approve or deny the request to bypass push rules.

If the request to bypass push rules is approved, the contributor can push the commit containing restricted content. If the request is denied, the contributor must remove the content from the commit (or commits) containing the restricted content before pushing again.

To configure delegated bypass, organization owners or repository administrators first create a "bypass list". The bypass list includes specific roles and teams, such as team or repository administrators, who oversee requests to bypass push protection. For more information, see [Managing Rulesets For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization) and [About Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).




## Editing a ruleset

You can edit a ruleset to change parts of the ruleset, such as the name, bypass permissions, or rules. You can also edit a ruleset to change its status, such as if you want to enable or temporarily disable a ruleset.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. In the left sidebar, in the "Policies" section, click  **Code**, then click **Rulesets**.
1. On the "Rulesets" page, click the name of the ruleset you want to edit.
1. Change the ruleset as required.

   For information on the available rules, see [Available Rules For Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets)

1. At the bottom of the page, click **Save changes**.

## Deleting a ruleset

> [!NOTE]
> Anyone with read access to a repository can view the active rulesets operating on that repository.



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. In the left sidebar, in the "Policies" section, click **Code**, then click **Rulesets**.
1. To the right of the ruleset's name, select {% octicon "kebab-horizontal" aria-label="Open additional options" %}, then click **{% octicon "trash" aria-hidden="true" aria-label="trash" %} Delete ruleset**.



## Using ruleset history

> [!NOTE]
> Only changes made to a ruleset after you have upgraded to GitHub Enterprise Server 3.17.0, or a later version, are included in the ruleset history.


Ruleset history lists events triggered by changes that affect your rulesets within the last 180 days.

You can view all the changes to a ruleset and revert back to a specific iteration. You can also download a JSON file containing the ruleset's configuration at a specific iteration. The bypass list of a ruleset is excluded from the exported JSON file.



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. In the left sidebar, in the "Policies" section, click **Code**, then click **Rulesets**.
1. To view the history of changes to the ruleset, select {% octicon "kebab-horizontal" aria-label="Open additional options" %} to the right of the ruleset's name, then click **{% octicon "history" aria-hidden="true" aria-label="history" %} History**.
1. To the right of the specific iteration, select {% octicon "kebab-horizontal" aria-label="Open additional options" %}, then click **Compare changes**, **Restore**, or **Download**.





## Importing a ruleset

You can import a ruleset from another repository, organization or enterprise using the exported JSON file from the previous section. This can be useful if you want to apply the same ruleset to multiple repositories, organizations or enterprises.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. In the left sidebar, in the "Policies" section, click **Code**, then click **Rulesets**.
1. Select the **New ruleset** dropdown, then click **Import a ruleset**.
1. Open the exported JSON file.
1. Review the imported ruleset and click **Create**.



## Viewing insights for rulesets

You can view insights for rulesets to see how rulesets are affecting the repositories in your enterprise. On the "Rule Insights" page, you will see a timeline of the following user actions. You can use filters to find what you're looking for.

* Actions that have been checked against one or more rulesets and passed.
* Actions that have been checked against one or more rulesets and failed.
* Actions where someone has bypassed one or more rulesets.

If a ruleset is running in "Evaluate" mode, you can see actions that would have passed or failed if the ruleset had been active.

Additionally, these insights are available via the rule suites [REST API](/rest/repos/rule-suites).

![Screenshot of the "Rule Insights" page. Three actions are listed marked: "Pass," "Bypass," and "Fail". The failed action has with an "evaluate" label.](/assets/images/help/repository/rule-insights.png)


If a ruleset is running in "Evaluate" mode, you can see actions that would have passed or failed if the ruleset had been active.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. In the left sidebar, in the "Policies" section, click **Code**, then click **Rulesets**.
1. On the "Rule insights" page, use the dropdown menus at the top of the page to filter the actions by ruleset, repository, actor, and time period.
1. To see which specific rules failed or required a bypass, click {% octicon "kebab-horizontal" aria-label="View rule runs" %}, then expand the name of the ruleset.



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
