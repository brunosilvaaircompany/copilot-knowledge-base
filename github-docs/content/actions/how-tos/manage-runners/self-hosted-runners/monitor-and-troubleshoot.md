# Monitoring and troubleshooting self-hosted runners

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




## Checking access levels

You may not be able to create a self-hosted runner for an organization-owned repository.

Enterprise owners and organization {% elsif fpt %}Organization owners can choose which repositories are allowed to create repository-level self-hosted runners. Users with the “Manage organization runners and runner groups” permission can only choose which repositories are allowed to create repository-level self-hosted runners for repositories in your organization.

For more information about custom organization roles, see [Permissions Of Custom Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles).

For more information, see [Enforcing Policies For GitHub Actions In Your Enterprise](https://docs.github.com/en/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#runners) and [Disabling Or Limiting GitHub Actions For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#limiting-the-use-of-self-hosted-runners).


## Checking the status of a self-hosted runner

A self-hosted runner can be located in either your repository, organization, or enterprise account settings on GitHub{% elsif ghes %} enterprise settings on GitHub Enterprise Server. To manage a self-hosted runner, you must have the following permissions, depending on where the self-hosted runner was added:
* **User repository:** You must be the repository owner.
* **Organization:** You must be an organization owner.
* **Organization repository:** You must be an organization owner, or have admin access to the repository.

* **Enterprise account:** You must be an enterprise owner.
{% elsif ghes %}
* **Enterprise:** You must be a GitHub Enterprise site administrator.



1. In your organization or repository, navigate to the main page and click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.

1. In the left sidebar, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **Runners**.



1. Under "Runners", you can view a list of registered runners, including the runner's name, labels, and status.

    The status can be one of the following:

    * **Idle:** The runner is connected to GitHub and is ready to execute jobs.
    * **Active:** The runner is currently executing a job.
    * **Offline:** The runner is not connected to GitHub. This could be because the machine is offline, the self-hosted runner application is not running on the machine, or the self-hosted runner application cannot communicate with GitHub.

## Troubleshooting network connectivity

### Checking self-hosted runner network connectivity

You can use the self-hosted runner application's `config` script with the `--check` parameter to check that a self-hosted runner can access all required network services on GitHub.

In addition to `--check`, you must provide two arguments to the script:

* `--url` with the URL to your GitHub repository, organization, or enterprise. For example, `--url https://github.com/octo-org/octo-repo`.
* `--pat` with the value of a personal access token (classic), which must have the `workflow` scope, or a fine-grained personal access token with workflows read and write access. For example, `--pat ghp_abcd1234`. For more information, see [Managing Your Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

For example:

{% mac %}

```shell
./config.sh --check --url URL --pat ghp_abcd1234
```


{% endmac %}
{% linux %}

```shell
./config.sh --check --url URL --pat ghp_abcd1234
```


{% endlinux %}
{% windows %}

```powershell
config.cmd --check --url https://github.com/YOUR-ORG/YOUR-REPO --pat GHP_ABCD1234
```

{% endwindows %}

The script tests each service, and outputs either a `PASS` or `FAIL` for each one. If you have any failing checks, you can see more details on the problem in the log file for the check. The log files are located in the `_diag` directory where you installed the runner application, and the path of the log file for each check is shown in the console output of the script.

If you have any failing checks, you should also verify that your self-hosted runner machine meets all the communication requirements. For more information, see [Self Hosted Runners](https://docs.github.com/en/actions/reference/runners/self-hosted-runners).

### Disabling TLS certificate verification


By default, the self-hosted runner application verifies the TLS certificate for GitHub. If your GitHub Enterprise Server instance has a self-signed or internally-issued certificate, you may wish to disable TLS certificate verification for testing purposes.


To disable TLS certification verification in the self-hosted runner application, set the `GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY` environment variable to `1` before configuring and running the self-hosted runner application.

{% linux %}

```shell
export GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY=1
./config.sh --url https://github.com/YOUR-ORG/YOUR-REPO --token
./run.sh
```

{% endlinux %}
{% mac %}

```shell
export GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY=1
./config.sh --url https://github.com/YOUR-ORG/YOUR-REPO --token
./run.sh
```

{% endmac %}
{% windows %}

```powershell
[Environment]::SetEnvironmentVariable('GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY', '1')
./config.cmd --url https://github.com/YOUR-ORG/YOUR-REPO --token
./run.cmd
```

{% endwindows %}

> [!WARNING]
> Disabling TLS verification is not recommended since TLS provides privacy and data integrity between the self-hosted runner application and GitHub. We recommend that you install the GitHub certificate in the operating system certificate store for your self-hosted runner. For guidance on how to install the GitHub certificate, check with your operating system vendor.


> [!NOTE]
> For GitHub-hosted larger runners using Azure private networking, see the TLS interception requirements in [Configuring Private Networking For GitHub Hosted Runners In Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/configuring-private-networking-for-github-hosted-runners-in-your-organization#prerequisites).


## Reviewing the self-hosted runner application log files

You can monitor the status of the self-hosted runner application and its activities. Log files are kept in the `_diag` directory where you installed the runner application, and a new log is generated each time the application is started. The filename begins with `Runner_`, and is followed by a UTC timestamp of when the application was started.

> [!WARNING]
> Runner application log files for ephemeral runners must be forwarded and preserved externally for troubleshooting and diagnostic purposes. For more information about ephemeral runners and autoscaling self-hosted runners, see [Self Hosted Runners](https://docs.github.com/en/actions/reference/runners/self-hosted-runners#ephemeral-runners-for-autoscaling).

For detailed logs on workflow job executions, see the next section describing the `Worker_` files.

## Reviewing a job's log file

The self-hosted runner application creates a detailed log file for each job that it processes. These files are stored in the `_diag` directory where you installed the runner application, and the filename begins with `Worker_`.

{% linux %}

## Using journalctl to check the self-hosted runner application service

For Linux-based self-hosted runners running the application using a service, you can use `journalctl` to monitor their real-time activity. The default systemd-based service uses the following naming convention: `actions.runner.<org>-<repo>.<runnerName>.service`. This name is truncated if it exceeds 80 characters, so the preferred way of finding the service's name is by checking the _.service_ file. For example:

```shell
$ cat ~/actions-runner/.service
actions.runner.octo-org-octo-repo.runner01.service
```

If this fails due to the service being installed elsewhere, you can find the service name in the list of running services. For example, on most Linux systems you can use the `systemctl` command:

```shell
$ systemctl --type=service | grep actions.runner
actions.runner.octo-org-octo-repo.hostname.service loaded active running GitHub Actions Runner (octo-org-octo-repo.hostname)
```

You can use `journalctl` to monitor the real-time activity of the self-hosted runner:

```shell
sudo journalctl -u actions.runner.octo-org-octo-repo.runner01.service -f
```

In this example output, you can see `runner01` start, receive a job named `testAction`, and then display the resulting status:

```shell
Feb 11 14:57:07 runner01 runsvc.sh[962]: Starting Runner listener with startup type: service
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started listener process
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started running service
Feb 11 14:57:16 runner01 runsvc.sh[962]: √ Connected to GitHub
Feb 11 14:57:17 runner01 runsvc.sh[962]: 2020-02-11 14:57:17Z: Listening for Jobs
Feb 11 16:06:54 runner01 runsvc.sh[962]: 2020-02-11 16:06:54Z: Running job: testAction
Feb 11 16:07:10 runner01 runsvc.sh[962]: 2020-02-11 16:07:10Z: Job testAction completed with result: Succeeded
```

To view the `systemd` configuration, you can locate the service file here: `/etc/systemd/system/actions.runner.<org>-<repo>.<runnerName>.service`.
If you want to customize the self-hosted runner application service, do not directly modify this file. Follow the instructions described in [Configure The Application](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/configure-the-application#customizing-the-self-hosted-runner-service).

{% endlinux %}

{% mac %}

## Using `launchd` to check the self-hosted runner application service

For macOS-based self-hosted runners running the application as a service, you can use `launchctl` to monitor their real-time activity. The default launchd-based service uses the following naming convention: `actions.runner.<org>-<repo>.<runnerName>`. This name is truncated if it exceeds 80 characters, so the preferred way of finding the service's name is by checking the _.service_ file in the runner directory:

```shell
% cat ~/actions-runner/.service
/Users/exampleUsername/Library/LaunchAgents/actions.runner.octo-org-octo-repo.runner01.plist
```

The `svc.sh` script uses `launchctl` to check whether the application is running. For example:

```shell
$ ./svc.sh status
status actions.runner.example.runner01:
/Users/exampleUsername/Library/LaunchAgents/actions.runner.example.runner01.plist
Started:
379 0 actions.runner.example.runner01
```

The resulting output includes the process ID and the name of the application’s `launchd` service.

To view the `launchd` configuration, you can locate the service file here: `/Users/exampleUsername/Library/LaunchAgents/actions.runner.<repoName>.<runnerName>.service`.
If you want to customize the self-hosted runner application service, do not directly modify this file. Follow the instructions described in [Configure The Application](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/configure-the-application#customizing-the-self-hosted-runner-service).

{% endmac %}

{% windows %}

## Using PowerShell to check the self-hosted runner application service

For Windows-based self-hosted runners running the application as a service, you can use PowerShell to monitor their real-time activity. The service uses the naming convention `GitHub Actions Runner (<org>-<repo>.<runnerName>)`. You can also find the service's name by checking the _.service_ file in the runner directory:

```powershell
PS C:\actions-runner> Get-Content .service
actions.runner.octo-org-octo-repo.runner01.service
```

You can view the status of the runner in the Windows _Services_ application (`services.msc`). You can also use PowerShell to check whether the service is running:

```powershell
PS C:\actions-runner> Get-Service "actions.runner.octo-org-octo-repo.runner01.service" | Select-Object Name, Status
Name                                                  Status
----                                                  ------
actions.runner.octo-org-octo-repo.runner01.service    Running
```

You can use PowerShell to check the recent activity of the self-hosted runner. In this example output, you can see the application start, receive a job named `testAction`, and then display the resulting status:

```powershell
PS C:\actions-runner> Get-EventLog -LogName Application -Source ActionsRunnerService

   Index Time          EntryType   Source                 InstanceID Message
   ----- ----          ---------   ------                 ---------- -------
     136 Mar 17 13:45  Information ActionsRunnerService          100 2020-03-17 13:45:48Z: Job Greeting completed with result: Succeeded
     135 Mar 17 13:45  Information ActionsRunnerService          100 2020-03-17 13:45:34Z: Running job: testAction
     134 Mar 17 13:41  Information ActionsRunnerService          100 2020-03-17 13:41:54Z: Listening for Jobs
     133 Mar 17 13:41  Information ActionsRunnerService          100 û Connected to GitHub
     132 Mar 17 13:41  Information ActionsRunnerService            0 Service started successfully.
     131 Mar 17 13:41  Information ActionsRunnerService          100 Starting Actions Runner listener
     130 Mar 17 13:41  Information ActionsRunnerService          100 Starting Actions Runner Service
     129 Mar 17 13:41  Information ActionsRunnerService          100 create event log trace source for actions-runner service
```

{% endwindows %}

## Monitoring the automatic update process

We recommend that you regularly check the automatic update process, as the self-hosted runner will not be able to process jobs if it falls below a certain version threshold. The self-hosted runner application automatically updates itself, but note that this process does not include any updates to the operating system or other software; you will need to separately manage these updates.

You can view the update activities in the `Runner_` log files. For example:

```shell
[Feb 12 12:37:07 INFO SelfUpdater] An update is available.
```

In addition, you can find more information in the _SelfUpdate_ log files located in the `_diag` directory where you installed the runner application.

{% linux %}

## Troubleshooting containers in self-hosted runners

### Checking that Docker is installed

If your jobs require containers, then the self-hosted runner must be Linux-based and needs to have Docker installed. Check that your self-hosted runner has Docker installed and that the service is running.

You can use `systemctl` to check the service status:

```shell
$ sudo systemctl is-active docker.service
active
```

If Docker is not installed, then dependent actions will fail with the following errors:

```shell
[2020-02-13 16:56:10Z INFO DockerCommandManager] Which: 'docker'
[2020-02-13 16:56:10Z INFO DockerCommandManager] Not found.
[2020-02-13 16:56:10Z ERR  StepsRunner] Caught exception from step: System.IO.FileNotFoundException: File not found: 'docker'
```

### Checking the Docker permissions

If your job fails with the following error:

```shell
dial unix /var/run/docker.sock: connect: permission denied
```

Check that the self-hosted runner's service account has permission to use the Docker service. You can identify this account by checking the configuration of the self-hosted runner in `systemd`. For example:

```shell
$ sudo systemctl show -p User actions.runner.octo-org-octo-repo.runner01.service
User=runner-user
```

{% endlinux %}



## Resolving runners that are offline after an upgrade of GitHub Enterprise Server

If you use ephemeral runners and have disabled automatic updates, before you upgrade GitHub Enterprise Server, you should first upgrade your self-hosted runners to the version of the runner application that your upgraded instance will run. Upgrading GitHub Enterprise Server before you upgrade ephemeral runners may result in your runners going offline. For more information, see [Overview Of The Upgrade Process](https://docs.github.com/en/admin/upgrading-your-instance/preparing-to-upgrade/overview-of-the-upgrade-process).


If your runners are offline for this reason, manually update the runners. For more information, see the installation instructions for [the latest release](https://github.com/actions/runner/releases/latest) in the actions/runner repository.


### Checking which Docker engine is installed on the runner

If your build fails with the following error:

```shell
Error: Input required and not supplied: java-version
```

Check which Docker engine is installed on your self-hosted runner. To pass the inputs of an action into the Docker container, the runner uses environment variables that might contain dashes as part of their names. The action may not be able to get the inputs if the Docker engine is not a binary executable, but is instead a shell wrapper or a link (for example, a Docker engine installed on Linux using `snap`). To address this error, configure your self-hosted runner to use a different Docker engine.

To check if your Docker engine was installed using `snap`, use the `which` command. In the following example, the Docker engine was installed using `snap`:

```shell
$ which docker
/snap/bin/docker
```
