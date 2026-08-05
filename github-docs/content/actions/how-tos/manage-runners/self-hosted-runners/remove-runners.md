# Removing self-hosted runners

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




## Removing a runner from a repository

> [!NOTE]
> * This procedure permanently removes the self-hosted runner. If you only want to temporarily stop a runner from being assigned jobs, you can either shut down the machine or stop the `run` application. The runner will remain assigned in an "Offline" state, and won't execute any jobs until you restart the runner using the `run` application.

> * A self-hosted runner is automatically removed from GitHub if it has not connected to GitHub Actions for more than 14 days. An ephemeral self-hosted runner is automatically removed from GitHub if it has not connected to GitHub Actions for more than 1 day.

> * Just-in-time (JIT) runners can only run a single job. If JIT runners never run a job, they will automatically be removed. To remove a JIT runner before automatic removal, you must remove the JIT runner on GitHub.


To remove a self-hosted runner from a user repository you must be the repository owner. Organization owners and users with the "Manage organization runners and runner groups" permission can remove a runner from a repository in the organization. For more information about custom organization roles, see [Permissions Of Custom Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles).

We recommend that you also have access to the self-hosted runner machine.

For information about how to remove a self-hosted runner with the REST API, see [Self Hosted Runners](https://docs.github.com/en/rest/actions/self-hosted-runners).

Alternatively, if you don't have access to the repository or organization{% elsif ghes or ghec %}, organization, or enterprise on GitHub to remove a runner, but you would like to re-use the runner machine, then you can delete the `.runner` file inside the self-hosted runner application directory (that is, the directory into which you downloaded and unpacked the runner software). This allows the runner to be registered without having to re-download the self-hosted runner application.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runners**.


1. In the list of runners, click on the name of the runner you'd like to configure.

1. Click **Remove**.
1. You will see instructions for removing the self-hosted runner. Complete either of the following steps to remove the runner, depending on whether it is still accessible:

    * **If you have access to the runner machine:** Follow the on-screen instructions for your machine's operating system to run the removal command. The instructions include the required URL and an automatically-generated, time-limited token.

        The removal command does the following tasks:

        * Removes the runner from GitHub.
        * Removes any self-hosted runner application configuration files on the machine.
        * Removes any services configured if not running in interactive mode.

    * **If you don't have access to the machine:** Click **Force remove this runner** to force GitHub to remove the runner.


## Removing a runner from an organization

> [!NOTE]
> * This procedure permanently removes the self-hosted runner. If you only want to temporarily stop a runner from being assigned jobs, you can either shut down the machine or stop the `run` application. The runner will remain assigned in an "Offline" state, and won't execute any jobs until you restart the runner using the `run` application.

> * A self-hosted runner is automatically removed from GitHub if it has not connected to GitHub Actions for more than 14 days. An ephemeral self-hosted runner is automatically removed from GitHub if it has not connected to GitHub Actions for more than 1 day.

> * Just-in-time (JIT) runners can only run a single job. If JIT runners never run a job, they will automatically be removed. To remove a JIT runner before automatic removal, you must remove the JIT runner on GitHub.


To remove a self-hosted runner from an organization, you must be an organization owner or have the "Manage organization runners and runner groups" permission. We recommend that you also have access to the self-hosted runner machine. For information about how to remove a self-hosted runner with the REST API, see [Self Hosted Runners](https://docs.github.com/en/rest/actions/self-hosted-runners).

For more information about custom organization roles, see [Permissions Of Custom Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles).

Alternatively, if you don't have access to the repository or organization{% elsif ghes or ghec %}, organization, or enterprise on GitHub to remove a runner, but you would like to re-use the runner machine, then you can delete the `.runner` file inside the self-hosted runner application directory (that is, the directory into which you downloaded and unpacked the runner software). This allows the runner to be registered without having to re-download the self-hosted runner application.

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runners**.


1. In the list of runners, click on the name of the runner you'd like to configure.

1. Click **Remove**.
1. You will see instructions for removing the self-hosted runner. Complete either of the following steps to remove the runner, depending on whether it is still accessible:

    * **If you have access to the runner machine:** Follow the on-screen instructions for your machine's operating system to run the removal command. The instructions include the required URL and an automatically-generated, time-limited token.

        The removal command does the following tasks:

        * Removes the runner from GitHub.
        * Removes any self-hosted runner application configuration files on the machine.
        * Removes any services configured if not running in interactive mode.

    * **If you don't have access to the machine:** Click **Force remove this runner** to force GitHub to remove the runner.


## Removing a runner from an enterprise


If you use GitHub Enterprise Cloud, you can also remove runners from an enterprise. For more information, see the [GitHub Enterprise Cloud documentation](/enterprise-cloud@latest/actions/how-tos/manage-runners/self-hosted-runners/remove-runners#removing-a-runner-from-an-enterprise).



> [!NOTE]
> * This procedure permanently removes the self-hosted runner. If you only want to temporarily stop a runner from being assigned jobs, you can either shut down the machine or stop the `run` application. The runner will remain assigned in an "Offline" state, and won't execute any jobs until you restart the runner using the `run` application.

> * A self-hosted runner is automatically removed from GitHub if it has not connected to GitHub Actions for more than 14 days. An ephemeral self-hosted runner is automatically removed from GitHub if it has not connected to GitHub Actions for more than 1 day.

> * Just-in-time (JIT) runners can only run a single job. If JIT runners never run a job, they will automatically be removed. To remove a JIT runner before automatic removal, you must remove the JIT runner on GitHub.


To remove a self-hosted runner from an enterprise, you must be an enterprise owner. We recommend that you also have access to the self-hosted runner machine. For information about how to remove a self-hosted runner with the REST API, see the enterprise endpoints in the [GitHub Actions REST API](/rest/actions/self-hosted-runners).

Alternatively, if you don't have access to the repository or organization{% elsif ghes or ghec %}, organization, or enterprise on GitHub to remove a runner, but you would like to re-use the runner machine, then you can delete the `.runner` file inside the self-hosted runner application directory (that is, the directory into which you downloaded and unpacked the runner software). This allows the runner to be registered without having to re-download the self-hosted runner application.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Actions**.

1. Click the **Runners** tab.

1. In the list of runners, click on the name of the runner you'd like to configure.

1. Click **Remove**.
1. You will see instructions for removing the self-hosted runner. Complete either of the following steps to remove the runner, depending on whether it is still accessible:

    * **If you have access to the runner machine:** Follow the on-screen instructions for your machine's operating system to run the removal command. The instructions include the required URL and an automatically-generated, time-limited token.

        The removal command does the following tasks:

        * Removes the runner from GitHub.
        * Removes any self-hosted runner application configuration files on the machine.
        * Removes any services configured if not running in interactive mode.

    * **If you don't have access to the machine:** Click **Force remove this runner** to force GitHub to remove the runner.
