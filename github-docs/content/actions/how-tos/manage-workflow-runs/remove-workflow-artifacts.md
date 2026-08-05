# Removing workflow artifacts

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




## Deleting an artifact

> [!WARNING]
> Once you delete an artifact, it cannot be restored.

Write access to the repository is required to perform these steps.


By default, GitHub stores build logs and artifacts for 90 days, and this retention period can be customized. For more information, see [Managing GitHub Actions Settings For A Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository).


1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**.

   ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](/assets/images/help/repository/actions-tab-global-nav-update.png)

1. In the left sidebar, click the workflow you want to see.

   ![Screenshot of the left sidebar of the "Actions" tab. A workflow, "CodeQL," is outlined in dark orange.](/assets/images/help/actions/superlinter-workflow-sidebar.png)

1. From the list of workflow runs, click the name of the run to see the workflow run summary.

1. Under **Artifacts**, click {% octicon "trash" aria-label="Remove artifact ARTIFACT-NAME" %} next to the artifact you want to remove.

    ![Screenshot showing artifacts created during a workflow run. A trash can icon, used to remove an artifact, is outlined in dark orange.](/assets/images/help/repository/actions-delete-artifact-updated.png)

## Setting the retention period for an artifact

Retention periods for artifacts and logs can be configured at the repository, organization, and enterprise level. For more information, see [Managing GitHub Actions Settings For A Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-artifact-and-log-retention-period-for-a-repository) and [Configuring The Retention Period For GitHub Actions Artifacts And Logs In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization).

You can also define a custom retention period for individual artifacts using the `actions/upload-artifact` action in a workflow. For more information, see [Store And Share Data](https://docs.github.com/en/actions/tutorials/store-and-share-data#configuring-a-custom-artifact-retention-period).

## Finding the expiration date of an artifact

You can use the API to confirm the date that an artifact is scheduled to be deleted. For more information, see the `expires_at` value returned by the REST API. For more information, see [Artifacts](https://docs.github.com/en/rest/actions/artifacts).

## Artifacts from deleted workflow runs

When a workflow run is deleted all artifacts associated with the run are also deleted from storage. You can delete a workflow run using the GitHub Actions UI, the REST API, or using the GitHub CLI, see: [Delete A Workflow Run](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/delete-a-workflow-run), [Delete a workflow run](/rest/actions/workflow-runs?apiVersion=2022-11-28#delete-a-workflow-run), or [gh run delete](https://cli.github.com/manual/gh_run_delete).
