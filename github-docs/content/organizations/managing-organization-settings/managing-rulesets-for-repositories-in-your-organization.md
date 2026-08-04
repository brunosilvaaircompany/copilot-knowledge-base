# Managing rulesets for repositories in your organization

## About managing rulesets for an organization

After creating a ruleset at the organization level, you can make changes to the ruleset to alter how people can interact with the targeted repositories. For example, you can add rules to better protect the branches or tags in those repositories, or you can switch your ruleset from "Evaluate" mode to "Active" after testing its effects on the contributor experience for your repositories.



For information about how organizational rulesets affect branch renaming, see [Allowing Repository Admins To Rename Branches With Organization Rulesets](https://docs.github.com/en/organizations/managing-organization-settings/allowing-repository-admins-to-rename-branches-with-organization-rulesets).





Delegated bypass for push rulesets lets you control who can bypass push protection and which blocked pushes should be allowed.

 With delegated bypass, contributors to a repository must request "bypass privileges" when pushing commits that contain restricted content. The request is sent to a designated group of reviewers, who either approve or deny the request to bypass push rules.

If the request to bypass push rules is approved, the contributor can push the commit containing restricted content. If the request is denied, the contributor must remove the content from the commit (or commits) containing the restricted content before pushing again.

To configure delegated bypass, organization owners or repository administrators first create a "bypass list". The bypass list includes specific roles and teams, such as team or repository administrators, who oversee requests to bypass push protection. For more information, see [Managing Rulesets For Repositories In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization) and [About Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).




You can use the REST and GraphQL APIs to manage rulesets. For more information, see [Rules](https://docs.github.com/en/rest/orgs/rules) and [Repos](https://docs.github.com/en/graphql/reference/repos#mutation-createrepositoryruleset).

> [!NOTE]
> Anyone with read access to a repository can view the active rulesets operating on that repository.


## Editing a ruleset

You can edit a ruleset to change parts of the ruleset, such as the name, bypass permissions, or rules. You can also edit a ruleset to change its status, such as if you want to enable or temporarily disable a ruleset.


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "repo" aria-hidden="true" aria-label="repo" %} Repository**, then click **Rulesets**.

   ![Screenshot of an organization's settings page. In the sidebar, a link labeled "Rulesets" is outlined in orange.](/assets/images/help/organizations/sidebar-repository-rulesets.png)

1. On the "Rulesets" page, click the name of the ruleset you want to edit.
1. Change the ruleset as required. For information on the available rules, see [Available Rules For Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets).
1. At the bottom of the page, click **Save changes**.


## Deleting a ruleset

> [!TIP]
> If you want to temporarily disable a ruleset but do not want to delete it, you can set the ruleset's status to "Disabled." For more information, see [Editing a ruleset](#editing-a-ruleset).


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "repo" aria-hidden="true" aria-label="repo" %} Repository**, then click **Rulesets**.

   ![Screenshot of an organization's settings page. In the sidebar, a link labeled "Rulesets" is outlined in orange.](/assets/images/help/organizations/sidebar-repository-rulesets.png)

1. Click the name of the ruleset you want to delete.
1. To the right of the ruleset's name, select {% octicon "kebab-horizontal" aria-label="Open additional options" %}, then click **{% octicon "trash" aria-hidden="true" aria-label="trash" %} Delete ruleset**.

   ![Screenshot of the page for editing a ruleset. Below a button labeled with three dots, an option labeled "Delete ruleset" is outlined in orange.](/assets/images/help/repository/delete-ruleset.png)




## Using ruleset history

> [!NOTE]
> Only changes made to a ruleset after you have upgraded to GitHub Enterprise Server 3.17.0, or a later version, are included in the ruleset history.


Ruleset history lists events triggered by changes that affect your rulesets within the last 180 days.

You can view all the changes to a ruleset and revert back to a specific iteration. You can also download a JSON file containing the ruleset's configuration at a specific iteration. The bypass list of a ruleset is excluded from the exported JSON file.


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "repo" aria-hidden="true" aria-label="repo" %} Repository**, then click **Rulesets**.

   ![Screenshot of an organization's settings page. In the sidebar, a link labeled "Rulesets" is outlined in orange.](/assets/images/help/organizations/sidebar-repository-rulesets.png)

1. To view the history of changes to the ruleset, select {% octicon "kebab-horizontal" aria-label="Open additional options" %} to the right of the ruleset's name, then click **{% octicon "history" aria-hidden="true" aria-label="history" %} History**.

   ![Screenshot of the page for repository rulesets. Below a button labeled with three dots, an option labeled "History" is outlined in orange.](/assets/images/help/repository/ruleset-history.png)

1. To the right of the specific iteration, select {% octicon "kebab-horizontal" aria-label="Open additional options" %}, then click **Compare changes**, **Restore**, or **Download**.

   ![Screenshot of the page for repository rulesets history. A dropdown menu labeled with three dots is expanded and highlighted with an orange outline.](/assets/images/help/repository/ruleset-history-options.png)






## Importing a ruleset

You can import a ruleset from another repository or organization using the exported JSON file from the previous section. This can be useful if you want to apply the same ruleset to multiple repositories or organizations.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "repo" aria-hidden="true" aria-label="repo" %} Repository**, then click **Rulesets**.

   ![Screenshot of an organization's settings page. In the sidebar, a link labeled "Rulesets" is outlined in orange.](/assets/images/help/organizations/sidebar-repository-rulesets.png)

1. Select the **New ruleset** dropdown, then click **Import a ruleset**.

   ![Screenshot of the page for repository rulesets. The "New ruleset" dropdown menu is expanded and the "Import a ruleset" option is outlined in orange.](/assets/images/help/repository/import-a-ruleset.png)

1. Open the exported JSON file.
1. Review the imported ruleset and click **Create**.





## Viewing insights for rulesets

You can view insights for rulesets to see how rulesets are affecting the repositories in your organization. On the "Rule Insights" page, you will see a timeline of the following user actions. You can use filters to find what you're looking for.

* Actions that have been checked against one or more rulesets and passed.
* Actions that have been checked against one or more rulesets and failed.
* Actions where someone has bypassed one or more rulesets.

If a ruleset is running in "Evaluate" mode, you can see actions that would have passed or failed if the ruleset had been active.

Additionally, these insights are available via the rule suites [REST API](/rest/repos/rule-suites).

![Screenshot of the "Rule Insights" page. Three actions are listed marked: "Pass," "Bypass," and "Fail". The failed action has with an "evaluate" label.](/assets/images/help/repository/rule-insights.png)


1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 click **{% octicon "repo" aria-hidden="true" aria-label="repo" %} Repository**, then click **Rule insights**.

   ![Screenshot of an organization's settings page. In the sidebar, a link labeled "Rule insights" is outlined in orange.](/assets/images/help/organizations/sidebar-repository-rule-insights.png)

1. On the "Rule insights" page, use the dropdown menus at the top of the page to filter the actions by ruleset, repository, actor, and time period.
1. To see which specific rules failed or required a bypass, click {% octicon "kebab-horizontal" aria-label="View rule runs" %}, then expand the name of the ruleset.

   ![Screenshot of the "Rule Insights" page. To the right of an event labeled "not-allowed," an icon of three horizontal dots is outlined in orange.](/assets/images/help/repository/view-rule-runs.png)


{% ifversion push-rule-delegated-bypass %}

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



{% endif %}
