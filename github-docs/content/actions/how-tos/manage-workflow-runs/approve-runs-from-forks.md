# Approving workflow runs from forks

Workflow runs triggered by a contributor's pull request from a fork may require manual approval from a maintainer with write access. You can configure workflow approval requirements for a [repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-forks-of-private-repositories), [organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks), or [enterprise](/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#fork-pull-request-workflows-from-outside-collaborators).

Workflow runs that have been awaiting approval for more than 30 days are automatically deleted.

## Approving workflow runs on a pull request from a public fork

Maintainers with write access to a repository can use the following procedure to review and run workflows on pull requests from contributors that require approval.

1. Under your repository name, click **{% octicon "git-pull-request" aria-hidden="true" aria-label="git-pull-request" %} Pull requests**.

1. In the list of pull requests, click the pull request you'd like to review.

1. On the pull request, click **{% octicon "file-diff" aria-hidden="true" aria-label="file-diff" %} Files changed**.

   ![Screenshot of the tabs for a pull request. The "Files changed" tab is outlined in dark orange.](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)

1. Inspect the proposed changes in the pull request and ensure that you are comfortable running your workflows on the pull request branch. You should be especially alert to any proposed changes in the `.github/workflows/` directory that affect workflow files.

1. If you are comfortable with running workflows on the pull request branch, click the button in the upper right corner labeled **Awaiting approval**, which will open the **Merge status** panel.
1. Find and click **Approve workflows to run**.
