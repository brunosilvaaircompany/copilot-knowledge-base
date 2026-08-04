# Using self-hosted runners in a workflow

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.






## Viewing available runners for a repository

If you have `repo: write` access to a repository, you can view a list of the runners available to the repository.


1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**.

   ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](/assets/images/help/repository/actions-tab-global-nav-update.png)

1. In the left sidebar, under the "Management" section, click **{% octicon "server" aria-hidden="true" aria-label="server" %} Runners**.

1. Click the **Self hosted** tab at the top of the list of runners.
1. Review the list of available self-hosted runners for the repository. This list includes both self-hosted runners and runner scale sets created with Actions Runner Controller. For more information, see [Actions Runner Controller](https://docs.github.com/en/actions/concepts/runners/actions-runner-controller).
1. Optionally, to copy a runner's label to use it in a workflow, click {% octicon "kebab-horizontal" aria-label="More options" %} to the right of the runner, then click **Copy label**.


> [!NOTE]
> Enterprise and organization owners and users with the "Manage organization runners and runner groups" permission can create runners from this page. To create a new runner, click **New runner** at the top right of the list of runners to add runners to the repository.
>
> For more information, see [Manage Larger Runners](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/manage-larger-runners) and [Add Runners](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/add-runners).

> For more information about custom organization roles, see [Permissions Of Custom Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles).





## Using default labels to route jobs

A self-hosted runner automatically receives certain labels when it is added to GitHub Actions. These are used to indicate its operating system and hardware platform:

* `self-hosted`: Default label applied to self-hosted runners.
* `linux`, `windows`, or `macOS`: Applied depending on operating system.
* `x64`, `ARM`, or `ARM64`: Applied depending on hardware architecture.

You can use your workflow's YAML to send jobs to a combination of these labels. In this example, a self-hosted runner that matches all three labels will be eligible to run the job:

```yaml
runs-on: [self-hosted, linux, ARM64]
```

* `self-hosted` - Run this job on a self-hosted runner.
* `linux` - Only use a Linux-based runner.
* `ARM64` - Only use a runner based on ARM64 hardware.

To create individual self-hosted runners without the default labels, pass the `--no-default-labels` flag when you create the runner.

## Using custom labels to route jobs

You can create custom labels and assign them to your self-hosted runners at any time. Custom labels let you send jobs to particular types of self-hosted runners, based on how they're labeled.

For example, if you have a job that requires a specific type of graphics hardware, you can create a custom label called `gpu` and assign it to the runners that have the hardware installed. A self-hosted runner that matches all the assigned labels will then be eligible to run the job.

This example shows a job that combines default and custom labels:

```yaml
runs-on: [self-hosted, linux, x64, gpu]
```

* `self-hosted` - Run this job on a self-hosted runner.
* `linux` - Only use a Linux-based runner.
* `x64` - Only use a runner based on x64 hardware.
* `gpu` - This custom label has been manually assigned to self-hosted runners with the GPU hardware installed.

These labels operate cumulatively, so a self-hosted runner must have all four labels to be eligible to process the job.

## Using groups to route jobs

In this example, runners have been added to a group called `build-runners`. The `runs-on` key sends the job to any available runner in the `build-runners` group:

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on: 
      group: build-runners
    steps:
      - uses: actions/checkout@v6

      - uses: actions/setup-node@v7

        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```


## Using labels and groups to route jobs

When you combine groups and labels, the runner must meet both requirements to be eligible to run the job.

In this example, the `runs-on` key combines `group` and `labels` so that the job is routed to any available runner within the group that also has a matching label:

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on:
      group: ubuntu-runners
      labels: ubuntu-24.04-16core
    steps:
      - uses: actions/checkout@v6

      - uses: actions/setup-node@v7

        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```
