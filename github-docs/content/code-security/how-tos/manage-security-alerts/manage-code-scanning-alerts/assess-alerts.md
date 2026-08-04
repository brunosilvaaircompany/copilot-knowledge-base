# Assessing code scanning alerts for your repository

Anyone with read permission for a repository can see code scanning annotations on pull requests. For more information, see [Triage Alerts In Pull Requests](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/triage-alerts-in-pull-requests).

## Viewing the alerts for a repository

You need write permission to view a summary of all the alerts for a repository on the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab.

By default, the code scanning alerts page is filtered to show alerts for the default branch of the repository only.

1. On GitHub, navigate to the main page of the repository.

1. Under the repository name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab. If you cannot see the "{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality" tab, select the **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="kebab-horizontal" %}** dropdown menu, and then click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**.

1. In the left sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Code scanning**.

1. Optionally, use the free text search box or the dropdown menus to filter alerts. For example, you can filter by the tool that was used to identify alerts. Linked GitHub issues appear alongside their corresponding alerts in the list view.

   ![Screenshot of code scanning alerts page. The search box and filter dropdown menus are outlined in dark orange.](/assets/images/help/repository/filter-code-scanning-alerts.png)

1. Under "Code scanning," click the alert you'd like to explore to display the detailed alert page.

   The status and details on the alert page only reflect the state of the alert on the default branch of the repository, even if the alert exists in other branches. You can see the status of the alert on non-default branches in the **Affected branches** section on the right-hand side of the alert page. If an alert doesn't exist in the default branch, the status of the alert will display as "in pull request" or "in branch" and will be colored grey. The **Development** section shows linked branches and pull requests that will fix the alert.

1. Optionally, if the alert highlights a problem with data flow, click **Show paths** to display the path from the data source to the sink where it's used. The path view shows each step in the data flow as a numbered list, from the point where user-provided data enters the code (the source) to the point where it's used in a potentially unsafe operation (the sink).

   ![Screenshot of a code scanning alert. The "Show paths" and "Show more" links are outlined in dark orange.](/assets/images/help/repository/code-scanning-alert-details.png)

   Some alerts identify multiple paths through the code that could trigger the same vulnerability. When an alert has multiple paths, a dropdown appears above the path view showing the number of paths available. You can select each path from the dropdown to review it individually.

   ![Screenshot of a code scanning alert detail page showing the paths dropdown with "3 paths available".](/assets/images/help/repository/multiple-paths-available.png)

1. Alerts from CodeQL analysis include a description of the problem. Click **Show more** for guidance on how to fix your code.


1. Optionally, assign the alert to someone to fix using the **Assignees** control shown on the right, see [Assigning alerts](/code-security/concepts/security-at-scale/about-security-campaigns#about-assigning-alerts-to-users-and-copilot-cloud-agent).




For more information, see [Code Scanning Alerts](https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts).

> [!NOTE]
> You can see information about when code scanning analysis last ran on the tool status page. For more information, see [Use The Tools Status Page For Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/use-the-tools-status-page-for-code-scanning).



## Asking GitHub Copilot Chat about code scanning alerts

With a GitHub Copilot Enterprise license, you can ask Copilot Chat for help to better understand security alerts, including code scanning alerts, in repositories in your organization. For more information, see [Chat In GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github#asking-questions-about-alerts-from-github-advanced-security-features).



## Viewing metrics for CodeQL pull request alerts for an organization

For code scanning alerts from CodeQL analysis, you can use security overview to see how CodeQL is performing in pull requests in repositories where you have write access across your organization, and to identify repositories where you may need to take action. For more information, see [Pull Request Alert Metrics](https://docs.github.com/en/code-security/concepts/code-scanning/pull-request-alert-metrics).

## Filtering code scanning alerts

You can filter the alerts shown in the code scanning alerts view. This is useful if there are many alerts as you can focus on a particular type of alert. There are some predefined filters and a range of keywords that you can use to refine the list of alerts displayed.

When you select a keyword from either a drop-down list, or as you enter a keyword in the search field, only values with results are shown. This makes it easier to avoid setting filters that find no results.

![Screenshot of search field in alerts view. The field has "branch:dependabot" and all valid branches with a matching name are shown.](/assets/images/help/repository/code-scanning-filter-keywords.png)

If you enter multiple filters, the view will show alerts matching _all_ these filters. For example, `is:closed severity:high branch:main` will only display closed high-severity alerts that are present on the `main` branch. The exception is filters relating to refs (`ref`, `branch` and `pr`): `is:open branch:main branch:next` will show you open alerts from both the `main` branch and the `next` branch.

Please note that if you have filtered for alerts on a non-default branch, but the same alerts exist on the default branch, the alert page for any given alert will still only reflect the alert's status on the default branch, even if that status conflicts with the status on a non-default branch. For example, an alert that appears in the "Open" list in the summary of alerts for `branch-x` could show a status of "Fixed" on the alert page, if the alert is already fixed on the default branch. You can view the status of the alert for the branch you filtered on in the **Affected branches** section on the right side of the alert page.


You can prefix the `tag` filter with `-` to exclude results with that tag. For example, `-tag:style` only shows alerts that do not have the `style` tag.

### Restricting results to application code only

You can use the "Only alerts in application code" filter or `autofilter:true` keyword and value to restrict results to alerts in application code. For more information about the types of code that are automatically labeled as not application code, see [Code Scanning Alerts](https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts#about-labels-for-alerts-that-are-not-found-in-application-code).

## Searching code scanning alerts

You can search the list of alerts. This is useful if there is a large number of alerts in your repository, or if you don't know the exact name for an alert for example. GitHub performs the free text search across:
* The name of the alert
* The alert details (this also includes the information hidden from view by default in the **Show more** collapsible section)

| Supported search | Syntax example | Results |
| ---- | ---- | ---- |
| Single word search | `injection` | Returns all the alerts containing the word `injection` |
| Multiple word search | `sql injection` | Returns all the alerts containing `sql` or `injection` |
| Exact match search</br>(use double quotes) |  `"sql injection"` | Returns all the alerts containing the exact phrase `sql injection` |
| OR search | `sql OR injection` | Returns all the alerts containing `sql` or `injection` |
| AND search | `sql AND injection` | Returns all the alerts containing both words `sql` and `injection` |

> [!TIP]
> * The multiple word search is equivalent to an OR search.
> * The AND search will return results where the search terms are found _anywhere_, in any order in the alert name or details.

1. On GitHub, navigate to the main page of the repository.

1. Under the repository name, click the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality** tab. If you cannot see the "{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality" tab, select the **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="kebab-horizontal" %}** dropdown menu, and then click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security and quality**.

1. In the left sidebar, click **{% octicon "codescan" aria-hidden="true" aria-label="codescan" %} Code scanning**.

1. To the right of the **Filters** drop-down menus, type the keywords to search for in the free text search box.
   ![Screenshot of search field in alerts view. The field has pre-defined filters "is: open branch:main" and free text of "sql or injection" highlighted.](/assets/images/help/repository/code-scanning-search-alerts.png)
1. Press <kbd>return</kbd>. The alert listing will contain the open code scanning alerts matching your search criteria.

## Auditing responses to code scanning alerts

You can audit the actions taken in response to code scanning alerts using GitHub tools. For more information, see [Audit Security Alerts](https://docs.github.com/en/code-security/concepts/security-at-scale/audit-security-alerts).


## Further reading

* [Resolve Alerts](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts)
* [Triage Alerts In Pull Requests](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/triage-alerts-in-pull-requests)
* [Configure Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning)
* [Integration With Code Scanning](https://docs.github.com/en/code-security/concepts/code-scanning/integration-with-code-scanning)
