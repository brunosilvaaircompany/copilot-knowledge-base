# Viewing your current jobs

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




## Viewing active jobs in your organization or enterprise

You can get a list of all jobs currently running on GitHub-hosted runners in your organization or enterprise.


1. Navigate to the main page of the organization or repository.
1. Click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
1. In the left sidebar, click **Actions**, then click **Runners**.
{% elsif ghec %}
1. Navigate to your runner settings:
   * **In an organization or repository:** Navigate to the main page, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
   * **If using an enterprise account:** Navigate to your enterprise account by clicking your profile picture in the top-right corner of GitHub, then clicking **Your enterprises**, then clicking the enterprise.
1. Navigate to the GitHub Actions settings:
   * **In an organization or repository:** Click **Actions** in the left sidebar, then click **Runners**.
   * **If using an enterprise account:** In the left sidebar, click **"{% octicon "law" aria-hidden="true" aria-label="law" %} Policies"**, then click **Actions**, then click the **Runners** tab.


1. In the "Runners" table, click the entry for **GitHub-hosted runners**. This entry will only be present if you're using GitHub-hosted runners.

1. Review the "Active jobs" section, which contains a list of all jobs currently running on GitHub-hosted runners.

## Viewing queued jobs in your organization or enterprise

GitHub-hosted runners allow you to run jobs concurrently, and the maximum number of concurrent jobs will vary depending on your plan. If you reach the maximum number of concurrent jobs, any new jobs will start to enter a queue. To find out more about the number of concurrent jobs available to your plan, see [Billing And Usage](https://docs.github.com/en/actions/concepts/billing-and-usage).

The following procedure demonstrates how to check the maximum number of concurrent jobs you can run.


1. Navigate to the main page of the organization or repository.
1. Click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
1. In the left sidebar, click **Actions**, then click **Runners**.
{% elsif ghec %}
1. Navigate to your runner settings:
   * **In an organization or repository:** Navigate to the main page, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
   * **If using an enterprise account:** Navigate to your enterprise account by clicking your profile picture in the top-right corner of GitHub, then clicking **Your enterprises**, then clicking the enterprise.
1. Navigate to the GitHub Actions settings:
   * **In an organization or repository:** Click **Actions** in the left sidebar, then click **Runners**.
   * **If using an enterprise account:** In the left sidebar, click **"{% octicon "law" aria-hidden="true" aria-label="law" %} Policies"**, then click **Actions**, then click the **Runners** tab.


1. In the "Runners" table, click the entry for **GitHub-hosted runners**. This entry will only be present if you're using GitHub-hosted runners.

1. Review the "All jobs usage" section, which lists the number of active jobs and the maximum number of jobs you can run.
