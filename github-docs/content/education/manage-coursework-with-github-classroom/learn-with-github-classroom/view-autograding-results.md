# View autograding results

> [!WARNING]
> **Closing down:** The GitHub Classroom application is closing down and will be retired on August 28, 2026.
> For more information, see the [GitHub Classroom closing down notice](https://gh.io/classroom-sunset).

## About autograding

Your teacher can configure tests that automatically check your work when you push to an assignment repository on your GitHub Enterprise Server instance.

If you're a student and your instructor has configured autograding for your assignment in GitHub Classroom, you'll find autograding test results throughout your assignment repository. If all tests succeed for a commit, you'll see a green checkmark. If any tests fail for a commit, you'll see a red X. You can see detailed logs by clicking the green checkmark or red X.

## Viewing autograding results for an assignment repository

GitHub Classroom uses GitHub Actions to run autograding tests. For more information about viewing the logs for an autograding test, see [Use Workflow Run Logs](https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs#viewing-logs-to-diagnose-failures).

The **Actions** tab shows the full history of test runs.

![Screenshot of the "Actions" tab with "All workflows" option in the left sidebar selected.](/assets/images/help/classroom/autograding-actions-tab.png)

You can click a specific test run to review log output, like compilation errors and test failures.

## Further reading

* [About Status Checks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)
