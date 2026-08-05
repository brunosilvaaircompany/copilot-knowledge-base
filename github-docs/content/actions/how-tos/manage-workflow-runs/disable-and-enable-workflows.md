# Disabling and enabling a workflow

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




Disabling a workflow allows you to stop a workflow from being triggered without having to delete the file from the repo. You can easily re-enable the workflow again on GitHub.

Temporarily disabling a workflow can be useful in many scenarios. These are a few examples where disabling a workflow might be helpful:

* A workflow error that produces too many or wrong requests, impacting external services negatively.
* A workflow that is not critical and is consuming too many minutes on your account.
* A workflow that sends requests to a service that is down.
* Workflows on a forked repository that aren't needed (for example, scheduled workflows).

> [!WARNING]
> To prevent unnecessary workflow runs, scheduled workflows may be disabled automatically. When a public repository is forked, scheduled workflows are disabled by default. In a public repository, scheduled workflows are automatically disabled when no repository activity has occurred in 60 days.


You can also disable and enable a workflow using the REST API. For more information, see [Workflows](https://docs.github.com/en/rest/actions/workflows).

## Disabling a workflow

{% webui %}

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**.

   ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](/assets/images/help/repository/actions-tab-global-nav-update.png)

1. In the left sidebar, click the workflow you want to disable.
1. Click {% octicon "kebab-horizontal" aria-label="Show workflow options" %} to display a dropdown menu and click **Disable workflow**.

   ![Screenshot of a workflow. The "Show workflow options" button, shown with a kebab icon, and the "Disable workflow" menu item are outlined in orange.](/assets/images/help/repository/actions-disable-workflow-2022.png)

{% endwebui %}

{% cli %}

> [!NOTE]
> To learn more about GitHub CLI, see [About GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli).


To disable a workflow, use the `workflow disable` subcommand. Replace `workflow` with either the name, ID, or file name of the workflow you want to disable. For example, `"Link Checker"`, `1234567`, or `"link-check-test.yml"`. If you don't specify a workflow, GitHub CLI returns an interactive menu for you to choose a workflow.

```shell
gh workflow disable WORKFLOW
```

{% endcli %}

## Enabling a workflow

{% webui %}

You can re-enable a workflow that was previously disabled.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**.

   ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](/assets/images/help/repository/actions-tab-global-nav-update.png)

1. In the left sidebar, click the workflow you want to enable.

   ![Screenshot of the "Actions" page. In the left sidebar, a workflow name is highlighted with an outline in dark orange.](/assets/images/help/repository/actions-select-disabled-workflow-2022.png)

1. Click **Enable workflow**.

{% endwebui %}

{% cli %}

To enable a workflow, use the `workflow enable` subcommand. Replace `workflow` with either the name, ID, or file name of the workflow you want to enable. For example, `"Link Checker"`, `1234567`, or `"link-check-test.yml"`. If you don't specify a workflow, GitHub CLI returns an interactive menu for you to choose a workflow.

```shell
gh workflow enable WORKFLOW
```

{% endcli %}
