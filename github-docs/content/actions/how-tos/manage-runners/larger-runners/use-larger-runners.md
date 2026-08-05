# Running jobs on larger runners

## Identifying available runners for a repository

If you have `repo: write` access to a repository, you can view a list of the runners available to the repository.


1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**.

   ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](/assets/images/help/repository/actions-tab-global-nav-update.png)

1. In the left sidebar, under the "Management" section, click **{% octicon "server" aria-hidden="true" aria-label="server" %} Runners**.

1. Review the list of available runners for the repository.
1. Optionally, to copy a runner's label to use it in a workflow, click {% octicon "kebab-horizontal" aria-label="More options" %} to the right of the runner, then click **Copy label**.


> [!NOTE]
> Enterprise and organization owners and users with the "Manage organization runners and runner groups" permission can create runners from this page. To create a new runner, click **New runner** at the top right of the list of runners to add runners to the repository.
>
> For more information, see [Manage Larger Runners](https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/manage-larger-runners) and [Add Runners](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/add-runners).

> For more information about custom organization roles, see [Permissions Of Custom Organization Roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles).





## Targeting larger runners in a workflow

After you identify the larger runners you want to use, you can target them in your workflow with runner groups, workflow labels, or both. Use runner groups to route jobs to a set of runners, workflow labels to target runners with a specific label, or both when a job must match both conditions.

If an administrator has disabled standard GitHub-hosted runners, you can only use runner groups.

### Targeting by runner group

Reference the runner group name in your workflow. Use this when you want to route a job to any available runner in a specific group.

{% linux %}

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


{% endlinux %}

{% windows %}

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


{% endwindows %}

{% mac %}

In this example, the `runs-on` key sends the job to any available runner in the `macos-build-runners` group:

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-swift-version:
    runs-on:
      group: macos-build-runners
    steps:
      - uses: actions/checkout@v6

      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

{% endmac %}

### Targeting by workflow label

Reference a workflow label in your workflow when you want to route a job to runners that share a specific label.

Larger runners are automatically assigned a workflow label that matches the runner name.


{% linux %}

In this example, the `runs-on` key sends the job to any available runner that has been assigned the `ubuntu-24.04-16core` label:

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on:
      labels: ubuntu-24.04-16core
    steps:
      - uses: actions/checkout@v6

      - uses: actions/setup-node@v7

        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```

{% endlinux %}

{% windows %}

In this example, the `runs-on` key sends the job to any available runner that has been assigned the `windows-2022-16core` label:

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on:
      labels: windows-2022-16core
    steps:
      - uses: actions/checkout@v6

      - uses: actions/setup-node@v7

        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```

{% endwindows %}

{% mac %}

For macOS larger runners, you can use either GitHub-defined workflow labels or the workflow label that is automatically assigned from the larger runner name you set when you create it. For a list of available macOS workflow labels, see [Larger Runners](https://docs.github.com/en/actions/reference/runners/larger-runners#available-macos-larger-runners-and-labels).

In this example, the `runs-on` key sends the job to any available runner that has been assigned the `macos-26-xlarge` label.

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-swift-version:
    runs-on: macos-26-xlarge
    steps:
      - uses: actions/checkout@v6

      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

{% endmac %}

### Using labels and groups to control where jobs are run

Use both labels and groups when a job must run only on runners in a specific group that also have a specific label. The runner must meet both requirements to be eligible to run the job.

{% linux %}

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


{% endlinux %}

{% windows %}

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


{% endwindows %}

{% mac %}

In this example, the `runs-on` key combines `group` and `labels` so that the job is routed to any available runner within the group that also has a matching label:

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-swift-version:
    runs-on:
      group: macos-runners
      labels: macos-26-xlarge
    steps:
      - uses: actions/checkout@v6

      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

{% endmac %}

## Further reading

For syntax details for the `runs-on` key, see [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idruns-on).

For specifications, labels, limitations, and troubleshooting information, see [Larger Runners](https://docs.github.com/en/actions/reference/runners/larger-runners).
