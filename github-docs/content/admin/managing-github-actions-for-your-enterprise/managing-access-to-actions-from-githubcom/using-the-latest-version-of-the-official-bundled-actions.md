# Using the latest version of the official bundled actions

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




Your enterprise instance includes a number of built-in actions that you can use in your workflows. For more information about the bundled actions, see [About Using Actions In Your Enterprise](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise#official-actions-bundled-with-your-enterprise-instance).

These bundled actions are a point-in-time snapshot of the official actions found at https://github.com/actions, so there may be newer versions of these actions available. You can use the `actions-sync` tool to update these actions, or you can configure GitHub Connect to allow access to the latest actions on GitHub.com. These options are described in the following sections.

## Using `actions-sync` to update the bundled actions

To update the bundled actions, you can use the `actions-sync` tool to update the snapshot. For more information on using `actions-sync`, see [Manually Syncing Actions From Githubcom](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom).

## Using GitHub Connect to access the latest actions

You can use GitHub Connect to allow GitHub Enterprise Server to use actions from GitHub.com. For more information, see [Enabling Automatic Access To Githubcom Actions Using GitHub Connect](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect).

Once GitHub Connect is configured, you can use the latest version of an action by deleting its local repository in the `actions` organization on your instance. For example, if your enterprise instance is using `v1` of the `actions/checkout` action, and you need to use `actions/checkout@v6
` which isn't available on your enterprise instance, perform the following steps to be able to use the latest `checkout` action from GitHub.com:

1. From an enterprise owner account on GitHub Enterprise Server, navigate to the repository you want to delete from the _actions_ organization (in this example `checkout`).
1. By default, site administrators are not owners of the bundled _actions_ organization. To get the access required to delete the `checkout` repository, you must use the site admin tools. Click {% octicon "rocket" aria-label="Site admin" %} in the upper-right corner of any page in that repository.
1. Click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Security** to see an overview of the security for the repository.

   ![Screenshot of the site admin details for a repository. The "Security" link is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/access-repo-security-info.png)
1. Under "Privileged access", click **Unlock**.
1. Under **Reason**, type a reason for unlocking the repository, then click **Unlock**.
1. Now that the repository is unlocked, you can leave the site admin pages and delete the repository within the `actions` organization. At the top of the page, click the repository name, in this example **checkout**, to return to the summary page.

   ![Screenshot of the site admin details for the actions/checkout repository. The name of the repository, "checkout", is a link and is outlined.](/assets/images/enterprise/site-admin-settings/display-repository-admin-summary.png)
1. Under "Repository info", click **View code** to leave the site admin pages and display the `checkout` repository.

   ![Screenshot of the site admin details for a repository. The "View code" link is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/exit-admin-page-for-repository.png)
1. Delete the `checkout` repository within the `actions` organization. For information on how to delete a repository, see [Deleting A Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/deleting-a-repository).
1. Configure your workflow's YAML to use `actions/checkout@v6
`.
1. Each time your workflow runs, the runner will use the specified version of `actions/checkout` from GitHub.com.

   > [!NOTE]
   > The first time the `checkout` action is used from GitHub.com, the `actions/checkout` namespace is automatically retired on your GitHub Enterprise Server instance. If you ever want to revert to using a local copy of the action, you first need to remove the namespace from retirement. For more information, see [Enabling Automatic Access To Githubcom Actions Using GitHub Connect](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom).
