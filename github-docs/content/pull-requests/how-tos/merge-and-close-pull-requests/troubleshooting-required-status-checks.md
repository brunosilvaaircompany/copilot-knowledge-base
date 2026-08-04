# Troubleshooting required status checks

Use these checks when a required status check blocks merging or pushing to a protected branch. See [Status Checks](https://docs.github.com/en/pull-requests/reference/status-checks).

* A required status check must have completed successfully in the chosen repository during the past seven days.
* If a check and a commit status have the same name, both must pass when that name is required. See [Checks](https://docs.github.com/en/rest/checks).
* If branch protection requires your branch to be up-to-date, merge or rebase the base branch into your branch. See [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-status-checks-before-merging) and [About Git Rebase](https://docs.github.com/en/get-started/using-git/about-git-rebase).

If required status checks have not passed, pushing to a protected branch returns an error similar to this.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```

> [!NOTE]
> Pull requests that are up-to-date and pass required status checks can be merged locally and pushed to the protected branch. You can do this without running status checks on the merge commit itself.

## Required check needs to succeed against the latest commit SHA

Check the following if a required check is still blocking a pull request.

* Required checks must pass on the latest commit SHA. Checks from earlier commits don't satisfy the requirement.
* Successful check statuses are `success`, `skipped`, and `neutral`. See [Status Checks](https://docs.github.com/en/pull-requests/reference/status-checks).

## Conflicts between head commit and test merge commit

Use the pull request status checks box to identify which commit must pass.

| Status check source | What must pass | What you may see |
| --- | --- | --- |
| Test merge commit has a status | The test merge commit | `Showing checks for the merge commit` |
| Test merge commit has no status | The head commit | Checks for the latest head commit |

See [Pulls](https://docs.github.com/en/rest/pulls/pulls#get-a-pull-request).

## Handling skipped but required checks

| Cause | Result | How to fix or check |
| --- | --- | --- |
| A workflow is skipped by [path filtering](/actions/reference/workflows-and-actions/workflow-syntax#onpushpull_requestpull_request_targetpathspaths-ignore), [branch filtering](/actions/reference/workflows-and-actions/workflow-syntax#onpull_requestpull_request_targetbranchesbranches-ignore), or a [commit message](/actions/how-tos/manage-workflow-runs/skip-workflow-runs) | Associated checks stay in a "Pending" state and block merging | Avoid requiring workflows that can be skipped. |
| A job is skipped by a conditional | The job reports "Success" | See [Control Jobs With Conditions](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-jobs-with-conditions). |
| A job depends on a failed job | The dependent job is skipped and may not block merging | Use `always()` with `needs` for required checks that depend on other jobs. See [Use Jobs](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-jobs#defining-prerequisite-jobs). |




You should not use path or branch filtering to skip workflow runs if the workflow is required to pass before merging. For more information, see [Skip Workflow Runs](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/skip-workflow-runs) and [Available Rules For Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#require-workflows-to-pass-before-merging).




### Example

This workflow requires a successful `build` job, but runs only when a pull request changes files in `scripts`.

```yaml
name: ci
on:
  pull_request:
    paths:
      - 'scripts/**'
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
    steps:
    - uses: actions/checkout@v6

    - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
      uses: actions/setup-node@v7

      with:
        node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

A pull request that only changes a file in the repository root will not trigger this workflow. If `build` is required, the pull request is blocked with "Waiting for status to be reported."

### Status checks with GitHub Actions and a Merge queue

If a merge queue requires a GitHub Actions check, trigger the workflow with the `merge_group` event.

> [!NOTE]
> If your repository uses GitHub Actions to perform required checks or if you require workflows via organization rulesets on pull requests in your repository, you need to update the workflows to include the `merge_group` event as an additional trigger. Otherwise, status checks will not be triggered when you add a pull request to a merge queue. The merge will fail as the required status check will not be reported. The `merge_group` event is separate from the `pull_request` and `push` events.


Example trigger configuration:

```yaml
on:
  pull_request:
  merge_group:
```

See [Events That Trigger Workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#merge_group).

## Required status checks from unexpected sources

A protected branch can also require a status check from a specific GitHub App. If you see a message similar to the following, verify that the check listed in the merge box was set by the expected app.

```text
Required status check "build" was not set by the expected GitHub App.
```
