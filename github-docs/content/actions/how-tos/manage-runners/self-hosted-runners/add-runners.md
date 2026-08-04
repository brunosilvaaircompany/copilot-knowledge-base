# Adding self-hosted runners

> [!WARNING]
> We recommend that you only use self-hosted runners with private repositories. This is because forks of your public repository can potentially run dangerous code on your self-hosted runner machine by creating a pull request that executes the code in a workflow.

>
> For more information, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use).



> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




## Prerequisites

Before you add a self-hosted runner, you should understand what they are and how they work. See [Self Hosted Runners](https://docs.github.com/en/actions/concepts/runners/self-hosted-runners).

Additionally, you must meet the following requirements:

* GitHub Actions must be enabled for GitHub Enterprise Server. A site administrator can enable and configure GitHub Actions for your instance. For more information, see [Getting Started With GitHub Actions For GitHub Enterprise Server](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server).


* You must have access to the machine you will use as a self-hosted runner in your environment.

- The connection between self-hosted runners and GitHub is over HTTP (port 80) or HTTPS (port 443). To ensure connectivity over HTTPS, configure TLS for GitHub Enterprise Server. For more information, see [Configuring Tls](https://docs.github.com/en/admin/configuring-settings/hardening-security-for-your-enterprise/configuring-tls).



## Adding a self-hosted runner to a repository

You can add self-hosted runners to a single repository. To add a self-hosted runner to a user repository, you must be the repository owner. For an organization repository, you must be an organization owner, have admin access to the repository, or have the “Manage organization runners and runner groups” permission.

For more information about custom organization roles, see [Permissions Of Custom Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles).

For information about how to add a self-hosted runner with the REST API, see [Self Hosted Runners](https://docs.github.com/en/rest/actions/self-hosted-runners).

> [!NOTE]
> Enterprise owners and organization {% elsif fpt %}Organization owners can choose which repositories are allowed to create repository-level self-hosted runners. Users with the “Manage organization runners and runner groups” permission can only choose which repositories are allowed to create repository-level self-hosted runners for repositories in your organization.

For more information about custom organization roles, see [Permissions Of Custom Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles).

For more information, see [Enforcing Policies For GitHub Actions In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#runners) and [Disabling Or Limiting GitHub Actions For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#limiting-the-use-of-self-hosted-runners).


1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/images/help/repository/repo-actions-settings.png)

1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runners**.


1. Click **New self-hosted runner**.
1. Select the operating system image and architecture of your self-hosted runner machine.

   ![Screenshot of the choice of operating system and architecture. These options are highlighted with a dark orange outline.](/assets/images/help/actions/creating-selfhosted-runner.png)

1. You will see instructions showing you how to download the runner application and install it on your self-hosted runner machine.

   Open a shell on your self-hosted runner machine and run each shell command in the order shown.

   > [!NOTE]
   > On Windows, if you want to install the self-hosted runner application as a service, you must open a shell with administrator privileges. We also recommend that you use `C:\actions-runner` as the directory for the self-hosted runner application so that Windows system accounts can access the runner directory.

   The instructions walk you through completing these tasks:
   * Downloading and extracting the self-hosted runner application.
   * Running the `config` script to configure the self-hosted runner application and register it with GitHub Actions. The `config` script requires the destination URL and an automatically-generated time-limited token to authenticate the request. The token expires after one hour.
     * On Windows, the `config` script also asks if you would like to install the self-hosted runner application as a service. For Linux and macOS, you can install a service after you finish adding the runner. For more information, see [Configure The Application](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/configure-the-application).
   * Running the self-hosted runner application to connect the machine to GitHub Actions.


### Checking that your self-hosted runner was successfully added

After completing the steps to add a self-hosted runner, the runner and its status are now listed under "Runners"{% elsif ghes %}"Self-hosted runners".

The self-hosted runner application must be active for the runner to accept jobs. When the runner application is connected to GitHub and ready to receive jobs, you will see the following message on the machine's terminal.

```shell
√ Connected to GitHub

2019-10-24 05:45:56Z: Listening for Jobs
```



For more information, see [Monitor And Troubleshoot](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot).

## Adding a self-hosted runner to an organization

You can add self-hosted runners at the organization level, where they can be used to process jobs for multiple repositories in an organization. To add a self-hosted runner to an organization, you must be an organization owner or have the "Manage organization runners and runner groups" permission. For information about how to add a self-hosted runner with the REST API, see [Self Hosted Runners](https://docs.github.com/en/rest/actions/self-hosted-runners).

For more information about custom organization roles, see [Permissions Of Custom Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles).

1. On GitHub, navigate to the main page of the organization.

1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)

1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runners**.


1. Click **New runner**, then click **New self-hosted runner**.
1. Select the operating system image and architecture of your self-hosted runner machine.

   ![Screenshot of the choice of operating system and architecture. These options are highlighted with a dark orange outline.](/assets/images/help/actions/creating-selfhosted-runner.png)

1. You will see instructions showing you how to download the runner application and install it on your self-hosted runner machine.

   Open a shell on your self-hosted runner machine and run each shell command in the order shown.

   > [!NOTE]
   > On Windows, if you want to install the self-hosted runner application as a service, you must open a shell with administrator privileges. We also recommend that you use `C:\actions-runner` as the directory for the self-hosted runner application so that Windows system accounts can access the runner directory.

   The instructions walk you through completing these tasks:
   * Downloading and extracting the self-hosted runner application.
   * Running the `config` script to configure the self-hosted runner application and register it with GitHub Actions. The `config` script requires the destination URL and an automatically-generated time-limited token to authenticate the request. The token expires after one hour.
     * On Windows, the `config` script also asks if you would like to install the self-hosted runner application as a service. For Linux and macOS, you can install a service after you finish adding the runner. For more information, see [Configure The Application](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/configure-the-application).
   * Running the self-hosted runner application to connect the machine to GitHub Actions.


### Checking that your self-hosted runner was successfully added

After completing the steps to add a self-hosted runner, the runner and its status are now listed under "Runners"{% elsif ghes %}"Self-hosted runners".

The self-hosted runner application must be active for the runner to accept jobs. When the runner application is connected to GitHub and ready to receive jobs, you will see the following message on the machine's terminal.

```shell
√ Connected to GitHub

2019-10-24 05:45:56Z: Listening for Jobs
```



For more information, see [Monitor And Troubleshoot](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot).

> [!NOTE]
> For security reasons, public repositories can't use runners in a runner group by default, but you can override this in the runner group's settings. For more information, see [Manage Access](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access#changing-which-repositories-can-access-a-runner-group).


## Adding a self-hosted runner to an enterprise

If you use GitHub Enterprise Cloud, you{% elsif ghec or ghes %}You can add self-hosted runners to an enterprise, where they can be assigned to multiple organizations. The organization owner can control which repositories can use it. For more information, see the [GitHub Enterprise Cloud documentation](/enterprise-cloud@latest/actions/how-tos/manage-runners/self-hosted-runners/add-runners#adding-a-self-hosted-runner-to-an-enterprise).


New runners are assigned to the default group. You can modify the runner's group after you've registered the runner. For more information, see [Manage Access](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access#moving-a-self-hosted-runner-to-a-group).

To add a self-hosted runner to an enterprise, you must be an enterprise owner. For information about how to add a self-hosted runner with the REST API, see the enterprise endpoints in the [GitHub Actions REST API](/rest/actions/self-hosted-runners).


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies**.

1. Under "{% octicon "law" aria-hidden="true" aria-label="law" %} Policies", click **Actions**.

1. Click the **Runners** tab.

1. Click **New runner**, then click **New self-hosted runner**.
1. Select the operating system image and architecture of your self-hosted runner machine.

   ![Screenshot of the choice of operating system and architecture. These options are highlighted with a dark orange outline.](/assets/images/help/actions/creating-selfhosted-runner.png)

1. You will see instructions showing you how to download the runner application and install it on your self-hosted runner machine.

   Open a shell on your self-hosted runner machine and run each shell command in the order shown.

   > [!NOTE]
   > On Windows, if you want to install the self-hosted runner application as a service, you must open a shell with administrator privileges. We also recommend that you use `C:\actions-runner` as the directory for the self-hosted runner application so that Windows system accounts can access the runner directory.

   The instructions walk you through completing these tasks:
   * Downloading and extracting the self-hosted runner application.
   * Running the `config` script to configure the self-hosted runner application and register it with GitHub Actions. The `config` script requires the destination URL and an automatically-generated time-limited token to authenticate the request. The token expires after one hour.
     * On Windows, the `config` script also asks if you would like to install the self-hosted runner application as a service. For Linux and macOS, you can install a service after you finish adding the runner. For more information, see [Configure The Application](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/configure-the-application).
   * Running the self-hosted runner application to connect the machine to GitHub Actions.




### Checking that your self-hosted runner was successfully added

After completing the steps to add a self-hosted runner, the runner and its status are now listed under "Runners"{% elsif ghes %}"Self-hosted runners".

The self-hosted runner application must be active for the runner to accept jobs. When the runner application is connected to GitHub and ready to receive jobs, you will see the following message on the machine's terminal.

```shell
√ Connected to GitHub

2019-10-24 05:45:56Z: Listening for Jobs
```



For more information, see [Monitor And Troubleshoot](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot).

> [!NOTE]
> For security reasons, public repositories can't use runners in a runner group by default, but you can override this in the runner group's settings. For more information, see [Manage Access](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access#changing-which-repositories-can-access-a-runner-group).


### Making enterprise runners available to repositories

By default, runners in an enterprise's "Default" self-hosted runner group are available to all organizations in the enterprise, but are not available to all repositories in each organization.

To make an enterprise-level self-hosted runner group available to an organization repository, you might need to change the organization's inherited settings for the runner group to make the runner available to repositories in the organization.

For more information on changing runner group access settings, see [Manage Access](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access#changing-which-repositories-can-access-a-runner-group).


## Next steps

You can set up automation to scale the number of self-hosted runners. For more information, see [Self Hosted Runners](https://docs.github.com/en/actions/reference/runners/self-hosted-runners#autoscaling).
