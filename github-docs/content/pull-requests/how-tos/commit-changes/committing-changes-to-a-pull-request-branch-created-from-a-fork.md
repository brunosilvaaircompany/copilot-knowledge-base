# Committing changes to a pull request branch created from a fork

To commit to a pull request branch created from a fork, you need push access to the base repository, permission from the pull request creator, and a user-owned fork without branch restrictions that prevent your push. Only the pull request creator can allow edits to their fork. See [Allowing Changes To A Pull Request Branch Created From A Fork](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).

1. On GitHub, navigate to the fork where the pull request branch was created.
1. Above the list of files, click **{% octicon "code" aria-hidden="true" aria-label="code" %} Code**.

   ![Screenshot of the list of files on the landing page of a repository. The "Code" button is highlighted with a dark orange outline.](/assets/images/help/repository/code-button.png)

1. Copy the URL for the repository.

   * To clone the repository using HTTPS, under "HTTPS", click {% octicon "copy" aria-label="Copy to clipboard" %}.
   * To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click **SSH**, then click {% octicon "copy" aria-label="Copy to clipboard" %}.
   * To clone a repository using GitHub CLI, click **GitHub CLI**, then click {% octicon "copy" aria-label="Copy to clipboard" %}.
  
     ![Screenshot of the "Code" dropdown menu. To the right of the HTTPS URL for the repository, a copy icon is outlined in dark orange.](/assets/images/help/repository/https-url-clone-cli.png)

1. Open your terminal or Git Bash.
1. Change the current working directory to the location where you want to clone the fork.

   ```shell
   cd open-source-projects
   ```

1. Clone the fork, then navigate into the cloned repository.

   ```shell
   git clone https://github.com/USERNAME/FORK-OF-THE-REPOSITORY
   cd FORK-OF-THE-REPOSITORY
   ```

1. Check out the pull request's compare branch. To find the compare branch, open the pull request and check the branch shown at the top of the page.

   ```shell
   git checkout TEST-BRANCH
   ```

1. Make your changes, then stage and commit them.

   ```shell
   git add .
   git commit -m "YOUR-COMMIT-MESSAGE"
   ```

1. Push your commit to the pull request branch.

   ```shell
   git push origin TEST-BRANCH
   ```

Your new commits appear on the original pull request on your GitHub Enterprise Server instance.

## Further reading

* [Forks](https://docs.github.com/en/pull-requests/reference/forks)
