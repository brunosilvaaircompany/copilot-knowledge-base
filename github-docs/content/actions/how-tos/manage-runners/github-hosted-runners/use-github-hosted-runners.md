# Using GitHub-hosted runners

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.






When the job begins, GitHub automatically provisions a new VM for that job. All steps in the job execute on the VM, allowing the steps in that job to share information using the runner's filesystem. You can run workflows directly on the VM or in a Docker container. When the job has finished, the VM is automatically decommissioned.

The following diagram demonstrates how two jobs in a workflow are executed on two different GitHub-hosted runners.

![Diagram of a workflow that consists of two jobs. One job runs on Ubuntu and the other runs on Windows.](/assets/images/help/actions/overview-github-hosted-runner.png)

The following example workflow has two jobs, named `Run-npm-on-Ubuntu` and `Run-PSScriptAnalyzer-on-Windows`. When this workflow is triggered, GitHub provisions a new virtual machine for each job.

* The job named `Run-npm-on-Ubuntu` is executed on a Linux VM, because the job's `runs-on:` specifies `ubuntu-latest`.
* The job named `Run-PSScriptAnalyzer-on-Windows` is executed on a Windows VM, because the job's `runs-on:` specifies `windows-latest`.

```yaml copy
name: Run commands on different operating systems
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  Run-npm-on-Ubuntu:
    name: Run npm on Ubuntu
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6

      - uses: actions/setup-node@v7

        with:
          node-version: '14'
      - run: npm help

  Run-PSScriptAnalyzer-on-Windows:
    name: Run PSScriptAnalyzer on Windows
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v6

      - name: Install PSScriptAnalyzer module
        shell: pwsh
        run: |
          Set-PSRepository PSGallery -InstallationPolicy Trusted
          Install-Module PSScriptAnalyzer -ErrorAction Stop
      - name: Get list of rules
        shell: pwsh
        run: |
          Get-ScriptAnalyzerRule
```

While the job runs, the logs and output can be viewed in the GitHub UI:

![Screenshot of a workflow run. The steps for the "Run PSScriptAnalyzer on Windows" job are displayed.](/assets/images/help/repository/actions-runner-output.png)

The GitHub Actions runner application is open source. You can contribute and file issues in the [runner](https://github.com/actions/runner) repository.




## Viewing available runners for a repository

If you have `repo: write` access to a repository, you can view a list of the runners available to the repository.


1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**.

   ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](/assets/images/help/repository/actions-tab-global-nav-update.png)

1. In the left sidebar, under the "Management" section, click **{% octicon "server" aria-hidden="true" aria-label="server" %} Runners**.

1. Review the list of available GitHub-hosted runners for the repository.
1. Optionally, to copy a runner's label to use it in a workflow, click {% octicon "kebab-horizontal" aria-label="More options" %} to the right of the runner, then click **Copy label**.


> [!NOTE]
> Enterprise and organization owners and users with the "Manage organization runners and runner groups" permission can create runners from this page. To create a new runner, click **New runner** at the top right of the list of runners to add runners to the repository.
>
> For more information, see [Manage Larger Runners](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/manage-larger-runners) and [Add Runners](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/add-runners).

> For more information about custom organization roles, see [Permissions Of Custom Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles).




{% endif %}
