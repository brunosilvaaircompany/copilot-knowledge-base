# Adding labels to issues

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




## Introduction

This tutorial demonstrates how to use the GitHub CLI in a workflow to label newly opened or reopened issues. For example, you can add the `triage` label every time an issue is opened or reopened. Then, you can see all issues that need to be triaged by filtering for issues with the `triage` label.

The GitHub CLI allows you to easily use the GitHub API in a workflow.

In the tutorial, you will first make a workflow file that uses the GitHub CLI. Then, you will customize the workflow to suit your needs.

## Creating the workflow

1. Choose a repository where you want to apply this project management workflow. You can use an existing repository that you have write access to, or you can create a new repository. For more information about creating a repository, see [Creating A New Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).

1. In your repository, create a file called `.github/workflows/YOUR_WORKFLOW.yml`, replacing `YOUR_WORKFLOW` with a name of your choice. This is a workflow file. For more information about creating new files on GitHub, see [Creating New Files](https://docs.github.com/en/repositories/working-with-files/managing-files/creating-new-files).

1. Copy the following YAML contents into your workflow file.

    ```yaml copy
    name: Label issues
    on:
      issues:
        types:
          - reopened
          - opened
    jobs:
      label_issues:
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - run: gh issue edit "$NUMBER" --add-label "$LABELS"
            env:
              GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
              GH_REPO: {% raw %}${{ github.repository }}{% endraw %}
              NUMBER: {% raw %}${{ github.event.issue.number }}{% endraw %}
              LABELS: triage
    ```

1. Customize the `env` values in your workflow file:
   * The `GH_TOKEN`, `GH_REPO`, and `NUMBER` values are automatically set using the `github` and `secrets` contexts. You do not need to change these.
   * Change the value for `LABELS` to the list of labels that you want to add to the issue. The label(s) must exist for your repository. Separate multiple labels with commas. For example, `help wanted,good first issue`. For more information about labels, see [Managing Labels](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels).
1. Commit your workflow file to the default branch of your repository. For more information, see [Creating New Files](https://docs.github.com/en/repositories/working-with-files/managing-files/creating-new-files).


## Testing the workflow

Every time an issue in your repository is opened or reopened, this workflow will add the labels that you specified to the issue.

Test out your workflow by creating an issue in your repository.

1. Create an issue in your repository. For more information, see [Creating An Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue).
1. To see the workflow run that was triggered by creating the issue, view the history of your workflow runs. For more information, see [View Workflow Run History](https://docs.github.com/en/actions/how-tos/monitor-workflows/view-workflow-run-history).
1. When the workflow completes, the issue that you created should have the specified labels added.

## Next steps

* To learn more about additional things you can do with the GitHub CLI, see the [GitHub CLI manual](https://cli.github.com/manual/).
* To learn more about different events that can trigger your workflow, see [Events That Trigger Workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#issues).
* [Search GitHub](https://github.com/search?q=path%3A.github%2Fworkflows+gh+issue+edit&type=code) for examples of workflows using `gh issue edit`.
