# Viewing repository insights

When deciding how to improve your team's review process, use Repository insights to see where Copilot code review coverage is missing and which feedback developers act on. It brings review outcomes together with pull request activity, so you can consider them alongside throughput and merge times.

Use this overview to choose where to investigate unaddressed feedback, expand review coverage, or adjust review practices. These signals support those decisions, but do not prove that code is defect-free or that Copilot caused an improvement.

## Prerequisites



Repository insights is available for organization-owned repositories. You need read access to the repository.

The Copilot code review section appears only when the organization has enabled both the Copilot usage metrics policy and the Copilot code review policy. The **Pull requests** section is visible to anyone who can view the page.

For information about enabling these policies, see [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).

## Accessing Repository insights



1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "graph" aria-hidden="true" aria-label="graph" %} Insights**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled with a graph icon and "Insights," is outlined in orange.](/assets/images/help/repository/repo-nav-insights-tab.png)

1. On the **Repository insights** page, review the **Pull requests** section for activity and merge-time context, then the **Copilot code review** section for feedback outcomes.

The weekly reporting period covers seven calendar days ending on the latest fully published day. Check the dates displayed on the page. If the latest data is older than expected, the page will indicate that data is delayed.

If you see "Waiting on your data", allow a few days for data to become available. This state does not mean the repository had no activity. Monthly address-rate trends have a separate reporting period and can have less history.

For metric definitions, reporting limits, and guidance on choosing follow-up actions, see [Repository Insights Metrics](https://docs.github.com/en/copilot/reference/copilot-usage-metrics/repository-insights-metrics).
