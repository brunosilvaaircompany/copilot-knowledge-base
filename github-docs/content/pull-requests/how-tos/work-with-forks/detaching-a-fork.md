# Detaching a fork

## Converting a fork into a standalone repository

To turn your fork into a standalone repository, you can leave the fork network. The new repository will no longer automatically sync with changes from the original repository. This is useful when you want to take your work in a different direction or maintain distinct versions.

> [!WARNING]
> * The new repository will not retain any of its issues, pull requests, wikis, stars, watchers, comments, child forks, or other metadata that may currently be associated with your current fork.
> * All git commit metadata will be preserved. Commits may become eligible to be counted as contributions if they meet certain criteria. See [Troubleshooting Missing Contributions](https://docs.github.com/en/account-and-profile/how-tos/contribution-settings/troubleshooting-missing-contributions#your-local-git-commit-email-isnt-connected-to-your-account).
> * Leaving the fork network is **permanent** and the new repository **cannot** be reconnected to the fork network.



> [!NOTE]
> If you are unable to detach a fork, contact your site administrator.



## Leaving the fork network

You can only detach forks with the leave network option when:
* The fork is public
* The fork is less than 1GB
* The fork does not have any child forks attached

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. On the "General" settings page (which is selected by default), scroll down to the "Danger Zone" section, and click **Leave fork network**.
1. Read the warnings and click **I have read and understand these effects**.
1. To verify that you're detaching the correct repository, in the text box, type the name of the fork.
1. Click **Leave fork network**.

While the fork is being detached, some operations will be briefly unavailable. They will become available again after the fork becomes a standalone repository.

## Manually leaving the fork network

To turn your fork into a standalone repository, you can clone the fork and use the clone to create a new repository. Then, delete the fork to remove the connection to the original network.

1. Open your terminal or Git Bash.
1. Create a bare clone of the fork.

   ```shell
   git clone --bare https://github.com/EXAMPLE-USER/FORK.git
   ```

1. Delete the forked repository. See [Deleting A Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/deleting-a-repository).<br><br>

   > [!WARNING]
   > Deleting a fork will **permanently** delete any associated pull requests and configurations. This action **cannot** be undone.

1. Create a new repository with the same name in the same location. See [Creating A New Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).
1. Mirror-push the repository back to the same remote URL.

   ```shell
   git --git-dir FORK.git push --mirror https://github.com/EXAMPLE-USER/FORK.git
   ```

1. Remove the temporary local clone you created earlier.

   ```shell
   rm -rf FORK.git
   ```

See [our support page](https://support.github.com/request/fork) on forks.
