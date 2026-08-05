# Using conditions to control job execution

You can use the `jobs.<job_id>.if` conditional to prevent a job from running unless a condition is met. You can use any supported context and expression to create a conditional. For more information on which contexts are supported in this key, see [Contexts](https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#context-availability).


### Example: Only run job for a specific repository

This example uses `if` to control when the `production-deploy` job can run. It will only run if the repository is named `octo-repo-prod` and is within the `octo-org` organization. Otherwise, the job will be marked as _skipped_.

```yaml copy
name: example-workflow
on: [push]
jobs:
  production-deploy:
    if: {% raw %}${{ github.repository == 'octo-org/octo-repo-prod' }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6

      - uses: actions/setup-node@v7

        with:
          node-version: '14'
      - run: npm install -g bats
```

Skipped jobs display the message "This check was skipped."

> [!NOTE]
> A job that is skipped will report its status as "Success". It will not prevent a pull request from merging, even if it is a required check.



To debug why a job was skipped or ran unexpectedly, you can view job condition expression logs. For more information, see [View Job Condition Logs](https://docs.github.com/en/actions/how-tos/monitor-workflows/view-job-condition-logs).
