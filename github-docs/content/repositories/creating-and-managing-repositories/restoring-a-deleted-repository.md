# Restoring a deleted repository

Usually, deleted repositories can be restored within 90 days by an enterprise owner on {% ifversion ghes %}your GitHub Enterprise Server instance. For more information, see [Restoring A Deleted Repository](https://docs.github.com/en/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/restoring-a-deleted-repository).

{% else %}

## About repository restoration

A deleted repository can be restored within 90 days, unless the repository was part of a fork network that is not currently empty. A fork network consists of a parent repository, the repository's forks, and forks of the repository's forks. If your repository was part of a fork network, it cannot be restored unless every other repository in the network is deleted or has been detached from the network. For more information about forks, see [About Forks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks).

If you want to restore a repository that was part of a fork network that is not currently empty, you can contact us through the [GitHub Support portal](https://support.github.com){% elsif ghes %}your site administrator.



> [!IMPORTANT]
> You can only contact GitHub Support to restore a repository if you are on a paid GitHub plan. For more information about the different plans, see [Githubs Plans](https://docs.github.com/en/get-started/learning-about-github/githubs-plans).



It can take up to an hour after a repository is deleted before that repository is available for restoration.

Restoring a repository will not restore team permissions.

## Restoring a deleted repository that was owned by a personal account

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the "Code planning, and automation" section of the sidebar, click **{% octicon "repo" aria-hidden="true" aria-label="repo" %} Repositories**.

1. Under "Repositories", click **Deleted repositories**.

   ![Screenshot of the "Repositories" settings page. Above a list of repositories, a gray "Deleted repositories" link is outlined in orange.](/assets/images/help/settings/deleted-repos.png)

1. Next to the repository you want to restore, click **Restore**.

   ![Screenshot of a list entry for the "octocat/hello-world" repository. To the right of a repository's name, the "Restore" button is outlined in orange.](/assets/images/help/settings/restore-button.png)

1. Read the warning, then click **I understand, restore this repository**.


## Restoring a deleted repository that was owned by an organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the left sidebar, click **Deleted repositories**.

1. Next to the repository you want to restore, click **Restore**.

   ![Screenshot of a list entry for the "octocat/hello-world" repository. To the right of a repository's name, the "Restore" button is outlined in orange.](/assets/images/help/settings/restore-button.png)

1. Read the warning, then click **I understand, restore this repository**.


## Further reading

* [Deleting A Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/deleting-a-repository)

{% endif %}
