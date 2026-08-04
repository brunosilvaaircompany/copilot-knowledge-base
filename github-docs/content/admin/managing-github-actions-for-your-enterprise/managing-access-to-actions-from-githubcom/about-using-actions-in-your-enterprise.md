# About using actions in your enterprise

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




## About actions on GitHub Enterprise Server

GitHub Actions workflows can use _actions_, which are individual tasks that you can combine to create jobs and customize your workflow. You can create your own actions, or use and customize actions shared by the GitHub community.

GitHub Actions on GitHub Enterprise Server is designed to work in environments without full internet access. By default, workflows cannot use actions from GitHub.com and [GitHub Marketplace](https://github.com/marketplace?type=actions).
 You can restrict your developers to using actions that are stored on your GitHub Enterprise Server instance, which includes most official GitHub-authored actions, as well as any actions your developers create. Alternatively, to allow your developers to benefit from the full ecosystem of actions built by industry leaders and the open source community, you can configure access to other actions from GitHub.com.

We recommend allowing automatic access to all actions from GitHub.com. However, this does require GitHub Enterprise Server to make outbound connections to GitHub.com. If you don't want to allow these connections, or you want to have greater control over which actions are used on your enterprise, you can manually sync specific actions from GitHub.com.

## Official actions bundled with your enterprise instance

Most official GitHub-authored actions are automatically bundled with GitHub Enterprise Server, and are captured at a point in time from GitHub Marketplace.


The bundled official actions include the following, among others.
* `actions/checkout`
* `actions/upload-artifact`
* `actions/download-artifact`
* `actions/labeler`
* Various `actions/setup-` actions

To see all the official actions included on your enterprise instance, browse to the `actions` organization on your instance: <code>https://<em>HOSTNAME</em>/actions</code>.

There is no connection required between your GitHub Enterprise Server instance and GitHub.com to use these actions.

Each action is a repository in the `actions` organization, and each action repository includes the necessary tags, branches, and commit SHAs that your workflows can use to reference the action. For information on how to update the bundled official actions, see [Using The Latest Version Of The Official Bundled Actions](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/using-the-latest-version-of-the-official-bundled-actions).

> [!NOTE]
> * When using setup actions (such as `actions/setup-LANGUAGE`) on GitHub Enterprise Server with self-hosted runners, you might need to set up the tools cache on runners that do not have internet access. For more information, see [Setting Up The Tool Cache On Self Hosted Runners Without Internet Access](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access).
> * All `actions/setup-LANGUAGE` action repositories currently support three platforms: macOS, Windows, and Ubuntu.
> * When GitHub Enterprise Server is updated, bundled actions are automatically replaced with default versions in the upgrade package.
> * Being bundled with GitHub Enterprise Server means the action is available within that environment, but it doesn’t automatically guarantee compatibility with all platforms or self-hosted runners.

## Configuring access to actions on GitHub.com

If users in your enterprise need access to other actions from GitHub.com or GitHub Marketplace, there are a few configuration options.


The recommended approach is to enable automatic access to all actions from GitHub.com. You can do this by using GitHub Connect to integrate GitHub Enterprise Server with GitHub Enterprise Cloud. For more information, see [Enabling Automatic Access To Githubcom Actions Using GitHub Connect](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect).

> [!NOTE]
> Before you can configure access to actions on GitHub.com, you must configure your GitHub Enterprise Server instance to use GitHub Actions. For more information, see [Getting Started With GitHub Actions For GitHub Enterprise Server](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server).

To use actions from GitHub.com, both GitHub Enterprise Server and your self-hosted runners must be able to make outbound connections to GitHub.com. No inbound connections from GitHub.com are required. For more information, see [Self Hosted Runners](https://docs.github.com/en/actions/reference/runners/self-hosted-runners#communication-between-self-hosted-runners-and-githubcom).


After you enable GitHub Connect, you can use policies to restrict which public actions can be used in repositories in your enterprise. For more information, see [Enforcing Policies For GitHub Actions In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise).


Alternatively, if you want stricter control over which actions are allowed in your enterprise, or you do not want to allow outbound connections to GitHub.com, you can manually download and sync actions onto your enterprise instance using the `actions-sync` tool. For more information, see [Manually Syncing Actions From Githubcom](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom).
