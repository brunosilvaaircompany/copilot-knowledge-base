# Managing the push policy for your repository

## About the push policy

> [!NOTE]
> The push policy is currently in public preview and subject to change.

By default, there is no limit to the number of branches and tags that can be updated in a single push.

You can limit the number of branches and tags that can be updated in a single push to block potentially destructive pushes. This can prevent or limit the loss of data.

The push policy also blocks the Git command: `git push --mirror`. This is a potentially destructive command for making the remote exactly match the local clone. When run by accident, it can cause many force-pushes and branch deletions on the remote without any warning.

## Limiting how many branches and tags can be updated in a single push

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the **General** settings, which is the default tab, find **Pushes**, then select **Limit how many branches and tags can be updated in a single push**.
1. After **Up to**, type the number of branches and tags you want to limit in a single push. Lower numbers are more restrictive of which pushes are allowed, and higher numbers are less restrictive but have more potential for being destructive.

   We recommend the default maximum of `5` branch or tag updates allowed in one push. The minimum value is `2`, because Git requires two branch updates to rename a branch in a single push: _delete branch_ and _create branch_.
