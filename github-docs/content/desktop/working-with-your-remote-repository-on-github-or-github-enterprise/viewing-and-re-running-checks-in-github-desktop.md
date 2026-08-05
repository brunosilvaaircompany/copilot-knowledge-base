# Viewing and re-running checks in GitHub Desktop

## About checks in GitHub Desktop

GitHub Desktop displays the status of checks that have run in your pull request branches. The checks badge next to the branch name will display the _pending, passing,_ or _failing_ state of the checks. You can also re-run all, failed, or individual checks when viewing the status of the checks in GitHub Desktop. For more information on setting up checks in your repository, see [About Status Checks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks).

GitHub Desktop will also show a system notification when checks fail. For more information on enabling notifications, see [Configuring Notifications In GitHub Desktop](https://docs.github.com/en/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/configuring-notifications-in-github-desktop).

## Viewing and re-running checks

1. In GitHub Desktop, click **{% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} Current Branch**.

   ![Screenshot of the repository bar. A button, labeled "Current Branch" with a downward arrow indicating a dropdown menu, is outlined in orange.](/assets/images/help/desktop/current-branch-menu.png)

1. At the top of the drop-down menu, click **Pull Requests**.

   ![Screenshot of the "Current Branch" dropdown menu. A tab, labeled "Pull Requests", is highlighted with an orange outline.](/assets/images/help/desktop/branch-drop-down-pull-request-tab.png)

1. In the list of pull requests, click the pull request you want to view.

1. Click on the pull request number, to the right of the pull request branch name.

   ![Screenshot of the repository bar. Next to the "Current Branch" button, a numbered label, with a red cross for failing checks, is outlined in orange.](/assets/images/help/desktop/checks-dialog.png)
1. To re-run failed checks, click **{% octicon "sync" aria-hidden="true" aria-label="sync" %} Re-run** and select **Re-run Failed Checks**.

   ![Screenshot of a dropdown view from a pull request label. Next to "Some checks were not successful", a button labeled "Re-run" is outlined in orange.](/assets/images/help/desktop/re-run-failed-checks.png)
1. To re-run individual checks, hover over the individual check you want to re-run and select the {% octicon "sync" aria-label="The sync icon" %} icon to re-run the check.

   ![Screenshot of a dropdown view from a pull request label. The cursor hovers over a check. An icon of two arrows forming a circle is outlined in orange.](/assets/images/help/desktop/re-run-individual-checks.png)
1. You will see a confirmation dialog with the summary of the checks that will be re-run. Click **Re-run Checks** to confirm that you want to perform the re-run.
