# Making retired namespaces available on GHE.com

## Overview

If you use GitHub Enterprise Cloud with data residency, members of your enterprise can create GitHub Actions workflows that use actions directly from GitHub.com or [GitHub Marketplace](https://github.com/marketplace?type=actions).

GitHub Actions searches your enterprise on GHE.com for each action before falling back to GitHub.com. This ensures that custom versions of actions in your enterprise are used in preference to their counterparts on GitHub.com.

To ensure workflows use their intended actions and to block the potential for abuse, once an action on GitHub.com is used for the first time, the namespace associated with that action is retired in your enterprise. This blocks users from creating an organization and repository in your enterprise that match the action's namespace on GitHub.com.

## Making a retired namespace available

After using an action from GitHub.com, if you want to create an action in your enterprise with the same name, you need to make the namespace for that organization and repository available.

1. In the top-right corner of GitHub, click your profile picture, then click **Enterprise**.

1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Retired namespaces**.
1. To the right of the namespace that you want use in your enterprise, click **Unretire**.
1. Go to the relevant organization and create a new repository.

### Tips for ensuring you can create a new repository

* When you unretire a namespace, always create the new repository with that name as soon as possible. If a workflow calls the associated action on GitHub.com before you create the local repository, the namespace will be retired again.
* For actions used in workflows that run frequently, you may find that a namespace is retired again before you have time to create the local repository. In this case, you can temporarily disable the relevant workflows until you have created the new repository.
