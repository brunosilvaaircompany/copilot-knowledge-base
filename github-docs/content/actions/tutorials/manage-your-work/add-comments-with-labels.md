# Commenting on an issue when a label is added

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




## Introduction

This tutorial demonstrates how to use the GitHub CLI to comment on an issue when a specific label is applied. For example, when the `help wanted` label is added to an issue, you can add a comment to encourage contributors to work on the issue. For more information about GitHub CLI, see [Use GitHub CLI](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-github-cli).

In the tutorial, you will first make a workflow file that uses the `gh issue comment` command to comment on an issue. Then, you will customize the workflow to suit your needs.

## Creating the workflow

1. Choose a repository where you want to apply this project management workflow. You can use an existing repository that you have write access to, or you can create a new repository. For more information about creating a repository, see [Creating A New Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).

1. In your repository, create a file called `.github/workflows/YOUR_WORKFLOW.yml`, replacing `YOUR_WORKFLOW` with a name of your choice. This is a workflow file. For more information about creating new files on GitHub, see [Creating New Files](https://docs.github.com/en/repositories/working-with-files/managing-files/creating-new-files).

1. Copy the following YAML contents into your workflow file.

    ```yaml copy
    name: Add comment
    on:
      issues:
        types:
          - labeled
    jobs:
      add-comment:
        if: github.event.label.name == 'help wanted'
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - name: Add comment
            run: gh issue comment "$NUMBER" --body "$BODY"
            env:
              GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
              GH_REPO: {% raw %}${{ github.repository }}{% endraw %}
              NUMBER: {% raw %}${{ github.event.issue.number }}{% endraw %}
              BODY: >
                This issue is available for anyone to work on.
                **Make sure to reference this issue in your pull request.**
                :sparkles: Thank you for your contribution! :sparkles:
    ```

1. Customize the parameters in your workflow file:
   * Replace `help wanted` in `if: github.event.label.name == 'help wanted'` with the label that you want to act on. If you want to act on more than one label, separate the conditions with `||`. For example, `if: github.event.label.name == 'bug' || github.event.label.name == 'fix me'` will comment whenever the `bug` or `fix me` labels are added to an issue.
   * Change the value for `BODY` to the comment that you want to add. GitHub flavored markdown is supported. For more information about markdown, see [Basic Writing And Formatting Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).
1. Commit your workflow file to the default branch of your repository. For more information, see [Creating New Files](https://docs.github.com/en/repositories/working-with-files/managing-files/creating-new-files).


## Testing the workflow

Every time an issue in your repository is labeled, this workflow will run. If the label that was added is one of the labels that you specified in your workflow file, the `gh issue comment` command will add the comment that you specified to the issue.

Test your workflow by applying your specified label to an issue.

1. Open an issue in your repository. For more information, see [Creating An Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue).
1. Label the issue with the specified label in your workflow file. For more information, see [Managing Labels](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels#applying-a-label).
1. To see the workflow run triggered by labeling the issue, view the history of your workflow runs. For more information, see [View Workflow Run History](https://docs.github.com/en/actions/how-tos/monitor-workflows/view-workflow-run-history).
1. When the workflow completes, the issue that you labeled should have a comment added.

## Next steps

* To learn more about additional things you can do with the GitHub CLI, like editing existing comments, visit the [GitHub CLI Manual](https://cli.github.com/manual/).
