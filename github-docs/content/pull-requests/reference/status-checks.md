# Status checks

Status checks show whether commits meet the conditions set for a repository. They are usually created by external systems, such as continuous integration builds, tests, code scanning, or deployment checks.

Status checks help reviewers and maintainers understand whether a pull request is ready to merge. A check can show that work is still running, that changes passed validation, or that something needs attention.

![Screenshot of a list of commits and statuses.](/assets/images/help/pull_requests/commit-list-statuses.png)

Anyone with write permissions to a repository can set the state for any status check in the repository.

If status checks are required for a protected branch, they must pass before the pull request can be merged. See [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-status-checks-before-merging).

> [!NOTE]
> A job that is skipped will report its status as "Success". It will not prevent a pull request from merging, even if it is a required check.


## Types of status checks on GitHub

There are two types of status checks on GitHub:

| Type | Detail level | Created by |
| --- | --- | --- |
| Checks | Detailed output, annotations, and messages. | GitHub Apps, including GitHub Actions. |
| Commit statuses | A simpler status for a commit. | External services and integrations. |

> [!NOTE]
> GitHub Actions generates checks, not commit statuses, when workflows are run.

Organization owners and users with push access to a repository can create checks and commit statuses with GitHub's API. See [Checks](https://docs.github.com/en/rest/checks) and [Statuses](https://docs.github.com/en/rest/commits/statuses).

## Checks

Checks can include build logs, test results, annotations, and links to more detail. In a pull request, the **Checks** tab helps you understand which validations ran and why a check passed or failed.

![Screenshot of the "Checks" tab of a pull request. The "Checks" tab and the dropdown menu to select a commit are both outlined in dark orange.](/assets/images/help/pull_requests/checks-summary-for-various-commits.png)

> [!NOTE]
> The **Checks** tab is populated for pull requests only if you set up _checks_, not _commit statuses_, for the repository.

When a check points to a specific line, details can also appear in the **Files** tab of the pull request. This helps reviewers connect automated feedback to the code being changed.

## Skipping and requesting checks for individual commits

Some repositories allow checks to be skipped or requested for individual commits. This can be useful when a check is not relevant to a specific change, or when checks are not requested automatically.

For GitHub Actions workflows, you can skip workflow runs triggered by the `push` and `pull_request` events by including a skip instruction in your commit message. See [Skip Workflow Runs](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/skip-workflow-runs).

Alternatively, to skip or request _all_ checks for your commit, add one of the following trailer lines to the end of your commit message:

* To _skip checks_ for a commit, type your commit message and a short, meaningful description of your changes. After your commit description, before the closing quotation, add two empty lines followed by `skip-checks: true`:

  ```shell
  $ git commit -m "Update README
  >
  >
  skip-checks: true"
  ```

* To _request_ checks for a commit, type your commit message and a short, meaningful description of your changes. After your commit description, before the closing quotation, add two empty lines followed by `request-checks: true`:

  ```shell
  $ git commit -m "Refactor usability tests
  >
  >
  request-checks: true"
  ```

By default, Git automatically removes consecutive newlines. To leave the commit message exactly as you entered it, use the `--cleanup=verbatim` option on your commit. For more information, see [`--cleanup=<mode>`](https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---cleanupltmodegt) in the Git documentation.


## Check statuses and conclusions

Checks move through statuses as they run, then receive a conclusion when they finish. Some statuses cannot be set manually and are reserved for GitHub Actions.

| Status | Description | GitHub Actions only? |
| --- | --- | --- |
| `completed` | The check run completed and has a conclusion (see below). | No |
| `expected` | The check run is waiting for a status to be reported. | Yes |
| `failure` | The check run failed. | No |
| `in_progress` | The check run is in progress. | No |
| `pending` | The check run is at the front of the queue but the [group-based concurrency](/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency) limit has been reached. | Yes |
| `queued` | The check run has been queued. | No |
| `requested` | The check run has been created but has not been queued. | Yes |
| `startup_failure` | The check suite failed during startup. This status is not applicable to check runs. | Yes |
| `waiting` | The check run is waiting for a [deployment protection rule](/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments) to be satisfied. | Yes |

When a check has a status of `completed`, it has a conclusion. A successful conclusion usually means the check does not block merging. A failure, timeout, or action-required conclusion usually means someone must review the details before the pull request can merge.

| Conclusion | Description |
| --- | --- |
| `action_required` | The check run provided required actions upon its completion.  For more information, see [Using The Rest API To Interact With Checks](https://docs.github.com/en/rest/guides/using-the-rest-api-to-interact-with-checks#check-runs-and-requested-actions). |
| `cancelled` | The check run was cancelled before it completed. |
| `failure` | The check run failed. |
| `neutral` | The check run completed with a neutral result. This is treated as a success for dependent checks in GitHub Actions. |
| `skipped` | The check run was skipped. This is treated as a success for dependent checks in GitHub Actions. |
| `stale` | The check run was marked stale by GitHub because it took too long. |
| `success` | The check run completed successfully. |
| `timed_out` | The check run timed out. |

## Retention of checks



GitHub retains checks data for 400 days. After 400 days, the data is archived. 10 days after archival, the data is permanently deleted.

{% elsif ghes %}

Site administrators can control the retention policy for checks data on your GitHub Enterprise Server instance. For more information, see [Configuring Applications](https://docs.github.com/en/admin/configuring-settings/configuring-user-applications-for-your-enterprise/configuring-applications#enabling-retention-policy-for-checks).



To merge a pull request with checks that are both required and archived, you must rerun the checks.
