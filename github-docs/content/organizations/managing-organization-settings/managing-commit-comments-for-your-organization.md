# Managing commit comments for your organization

## About commit comments

Commit comments are comments people add directly to a commit outside of a pull request. Disallowing commit comments can help organizations reduce noise and maintain cleaner commit histories, especially if commit comments are not part of your development workflow.

It is possible to allow or disallow commit comments at a repository level. Organization owners can configure the default setting for commit comments for all repositories in an organization.

## What happens when commit comments are disabled?

When you disable commit comments for your organization:

* People cannot create new commit comments.
* Existing commit comments remain visible.
* Repository administrators can override the setting in their repository's settings.

## Managing the default setting for commit comments in your organization's repositories

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the sidebar, under "Code, planning, and automation",
 select **{% octicon "repo" aria-hidden="true" aria-label="repo" %} Repository**, then click **General**.
1. Under "Commits", select or deselect **Allow comments on individual commits**.


## Further reading

* [Managing Disruptive Comments](https://docs.github.com/en/communities/moderating-comments-and-conversations/managing-disruptive-comments)
