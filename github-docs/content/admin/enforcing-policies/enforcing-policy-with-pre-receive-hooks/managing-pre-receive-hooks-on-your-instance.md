# Managing pre-receive hooks on your instance

## Creating pre-receive hooks


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings", click **Hooks**.

1. Click **Add pre-receive hook**.
1. In the "Hook name" field, enter the name of the hook that you want to create.
1. Select the **Environment** dropdown menu, then click the environment on which you want the hook to run.
1. Under "Script," select the **Select hook repository** dropdown menu, then click the repository that contains your pre-receive hook script.
1. Select the **Select file** drop-down menu, then click the filename of the pre-receive hook script.
1. To enforce your script, select **Use the exit-status to accept or reject pushes**. Deselecting this option allows you to test the script while the exit-status value is ignored. In this mode, the output of the script will be visible to the user in the command-line but not on the web interface.
1. If you want the pre-receive hook to run on all repositories, select **Enable this pre-receive hook on all repositories by default**.
1. To allow organization members with admin or owner permissions to select whether they wish to enable or disable this pre-receive hook, select **Administrators can enable and disable this hook**.

## Editing pre-receive hooks


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings", click **Hooks**.

1. Next to the pre-receive hook that you want to edit, click **Edit**.

## Deleting pre-receive hooks


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings", click **Hooks**.

1. Next to the pre-receive hook that you want to delete, click **Delete**.

## Configure pre-receive hooks for an organization

An organization owner can only configure hook permissions for an organization if the site administrator selected the **Administrators can enable or disable this hook** option when they created the pre-receive hook. To configure pre-receive hooks for a repository, you must be an organization owner.

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the left sidebar, click **Hooks**.
1. Next to the pre-receive hook that you want to configure, select the **Hook permissions** dropdown menu, then click an option.

## Configure pre-receive hooks for a repository

A repository owner can only configure a hook if the site administrator selected the **Administrators can enable or disable this hook** option when they created the pre-receive hook. In an organization, the organization owner must also have selected the **Configurable** hook permission. To configure pre-receive hooks for a repository, you must be a repository owner.

1. In the top right corner of GitHub Enterprise Server, click your profile picture, then click **Your profile**.

1. Navigate to the repository that you want to configure pre-receive hooks for.
1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the left sidebar, click **{% octicon "webhook" aria-hidden="true" aria-label="webhook" %} Hooks**.
1. Next to the pre-receive hook that you want to configure, select the **Hook permissions** dropdown menu, then click whether to enable or disable the pre-receive hook.
