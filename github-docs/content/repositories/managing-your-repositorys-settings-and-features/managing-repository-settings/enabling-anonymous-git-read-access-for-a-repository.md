# Enabling anonymous Git read access for a repository

Repository administrators can change the anonymous Git read access setting for a specific repository if:
* A site administrator has enabled private mode and anonymous Git read access.
* The repository is public on the enterprise and is not a fork.
* A site administrator has not disabled anonymous Git read access for the repository.

> [!NOTE]
> * You cannot change the Git read access settings for forked repositories since they inherit their access settings from the root repository by default.
> * If a public repository becomes private, then anonymous Git read access will automatically be disabled for that repository and it forks.
> * If a repository with anonymous authentication contains Git LFS assets, it will fail to download the Git LFS assets since they still require authentication. We strongly recommend not enabling anonymous Git read access for a repository with Git LFS assets.


1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the "Danger zone" section, next to "Enable anonymous Git read access", click **Enable**.
1. Review the changes. To confirm, type in the name of the repository and click **I understand, enable anonymous Git read access.**
