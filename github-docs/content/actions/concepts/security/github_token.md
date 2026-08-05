# GITHUB_TOKEN

## About the `GITHUB_TOKEN`

At the start of each workflow job, GitHub automatically creates a unique `GITHUB_TOKEN` secret to use in your workflow. You can use the `GITHUB_TOKEN` to authenticate in the workflow job.

When you enable GitHub Actions, GitHub installs a GitHub App on your repository. The `GITHUB_TOKEN` secret is a GitHub App installation access token. You can use the installation access token to authenticate on behalf of the GitHub App installed on your repository. The token's permissions are limited to the repository that contains your workflow. For more information, see [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#permissions).

Before each job begins, GitHub fetches an installation access token for the job. The `GITHUB_TOKEN` expires when the job finishes or after its effective maximum lifetime.

The effective maximum lifetime of the token depends on the type of runner:

* **GitHub-hosted runners** The maximum job execution time is 6 hours, so the `GITHUB_TOKEN` can live for a maximum of 6 hours.
* **Self-hosted runners** The maximum job execution time is 5 days. However, because the `GITHUB_TOKEN` is an installation access token, it can only be refreshed for up to 24 hours. If your job runs longer than 24 hours, use a personal access token or other authentication method instead.

The token is also available in the `github.token` context. For more information, see [Contexts](https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context).

## When `GITHUB_TOKEN` triggers workflow runs

When you use the repository's `GITHUB_TOKEN` to perform tasks, events triggered by the `GITHUB_TOKEN` will not create a new workflow run, with the following exceptions:

* `workflow_dispatch` and `repository_dispatch` events always create workflow runs.
* `pull_request` events with the `opened`, `synchronize`, or `reopened` activity types: when a workflow using `GITHUB_TOKEN` creates or updates a pull request, the resulting `pull_request` event creates workflow runs in an **approval-required** state. The pull request displays a banner in the merge box, and a user with write access to the repository can start the runs by selecting **Approve workflows to run**. Other `pull_request` activity types (such as `labeled`, `edited`, or `closed`) do not create workflow runs. This prevents recursive workflow runs while still allowing CI workflows to run on pull requests created by automation. For more information about approving workflow runs, see [Approve Runs From Forks](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/approve-runs-from-forks).

For all other events, this behavior prevents you from accidentally creating recursive workflow runs. For example, if a workflow run pushes code using the repository's `GITHUB_TOKEN`, a new workflow will not run even when the repository contains a workflow configured to run when `push` events occur.



> [!NOTE]
> If you need workflow runs from workflow-created pull requests to execute without requiring approval, use a GitHub App installation access token or a personal access token instead of `GITHUB_TOKEN` when creating or updating the pull request.


Commits pushed by a GitHub Actions workflow that uses the `GITHUB_TOKEN` do not trigger a GitHub Pages build.


## Next steps

* [Authenticate With Github_Token](https://docs.github.com/en/actions/tutorials/authenticate-with-github_token)
* [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#permissions)
