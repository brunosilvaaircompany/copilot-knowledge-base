# Viewing job execution time

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




Billable job execution minutes are only shown for jobs run on private repositories that use GitHub-hosted runners and are rounded up to the next minute. There are no billable minutes when using GitHub Actions in public repositories or for jobs run on self-hosted runners.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**.

   ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](/assets/images/help/repository/actions-tab-global-nav-update.png)

1. In the left sidebar, click the workflow you want to see.

   ![Screenshot of the left sidebar of the "Actions" tab. A workflow, "CodeQL," is outlined in dark orange.](/assets/images/help/actions/superlinter-workflow-sidebar.png)

1. From the list of workflow runs, click the name of the run to see the workflow run summary.

1. Under the job summary, you can view the job's execution time.
1. To view details about the billable job execution time, in the left sidebar under "Run details", click **{% octicon "stopwatch" aria-hidden="true" aria-label="stopwatch" %} Usage**.

   > [!NOTE]
   > The billable time shown does not include any minute multipliers. To view your total GitHub Actions usage, including minute multipliers, see [View Productlicense Use](https://docs.github.com/en/billing/how-tos/products/view-productlicense-use).
