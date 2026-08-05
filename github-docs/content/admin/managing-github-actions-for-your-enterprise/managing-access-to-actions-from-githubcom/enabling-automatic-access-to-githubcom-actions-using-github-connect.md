# Enabling automatic access to GitHub.com actions using GitHub Connect

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




## About automatic access to GitHub.com actions

By default, GitHub Actions workflows on GitHub Enterprise Server cannot use actions directly from GitHub.com or [GitHub Marketplace](https://github.com/marketplace?type=actions). To make public actions from GitHub.com available on your enterprise instance, you can use GitHub Connect to integrate GitHub Enterprise Server with GitHub Enterprise Cloud.

To use actions from GitHub.com, both GitHub Enterprise Server and your self-hosted runners must be able to make outbound connections to GitHub.com. No inbound connections from GitHub.com are required. For more information, see [Self Hosted Runners](https://docs.github.com/en/actions/reference/runners/self-hosted-runners#communication-between-self-hosted-runners-and-githubcom).


Alternatively, if you want stricter control over which actions are allowed in your enterprise, you can manually download and sync public actions onto your enterprise instance using the `actions-sync` tool. For more information, see [Manually Syncing Actions From Githubcom](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom).

## About resolution for actions using GitHub Connect

When a workflow uses an action by referencing the repository where the action is stored, GitHub Actions will first try to find the repository on your GitHub Enterprise Server instance. If the repository does not exist on your GitHub Enterprise Server instance, and if you have automatic access to GitHub.com enabled, GitHub Actions will try to find the repository on GitHub.com.


If a user has already created an organization and repository in your enterprise that matches an organization and repository name on GitHub.com, the repository on your enterprise will be used instead of the GitHub.com repository. For more information, see [Automatic retirement of namespaces for actions accessed on GitHub.com](#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom).

## Enabling automatic access to public GitHub.com actions

Before enabling access to public actions from GitHub.com for your enterprise, you must:
* Configure your GitHub Enterprise Server instance to use GitHub Actions. For more information, see [Getting Started With GitHub Actions For GitHub Enterprise Server](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server).
* Enable GitHub Connect. For more information, see [Enabling GitHub Connect For Githubcom](https://docs.github.com/en/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-githubcom).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "plug" aria-hidden="true" aria-label="plug" %} GitHub Connect**.

1. Under "Users can utilize actions from GitHub.com in workflow runs", use the drop-down menu and select **Enabled**.
1. After you enable GitHub Connect, you can use policies to restrict which public actions can be used in repositories in your enterprise. For more information, see [Enforcing Policies For GitHub Actions In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise).


## Automatic retirement of namespaces for actions accessed on GitHub.com

When you enable GitHub Connect, users see no change in behavior for existing workflows because GitHub Actions searches your GitHub Enterprise Server instance for each action before falling back to GitHub.com. This ensures that any custom versions of actions your enterprise has created are used in preference to their counterparts on GitHub.com.

To ensure workflows use their intended actions and to block the potential for abuse, once an action on GitHub.com is used for the first time, the namespace associated with that action is retired in your enterprise. This blocks users from creating an organization and repository in your enterprise that match the action's namespace on GitHub.com.


After using an action from GitHub.com, if you want to create an action in your GitHub Enterprise Server instance with the same name, first you need to make the namespace for that organization and repository available.

1. From an administrative account on GitHub Enterprise Server, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.

1. In the left sidebar, under **Site admin** click **Retired namespaces**.
1. To the right of the namespace that you want use in your GitHub Enterprise Server instance, click **Unretire**.
1. Go to the relevant organization and create a new repository.

   > [!TIP]
   > When you unretire a namespace, always create the new repository with that name as soon as possible. If a workflow calls the associated action on GitHub.com before you create the local repository, the namespace will be retired again. For actions used in workflows that run frequently, you may find that a namespace is retired again before you have time to create the local repository. In this case, you can temporarily disable the relevant workflows until you have created the new repository.
