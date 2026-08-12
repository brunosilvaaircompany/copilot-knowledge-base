# Choosing the runner for a job

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




## Overview

Use `jobs.<job_id>.runs-on` to define the type of machine to run the job on.

* The destination machine can be either a [GitHub-hosted runner](#choosing-github-hosted-runners), [larger runner](#choosing-runners-in-a-group), or a [self-hosted runner](#choosing-self-hosted-runners).
* You can target runners based on the labels assigned to them, or their group membership, or a combination of these.
* You can provide `runs-on` as:
  * A single string
  * A single variable containing a string
  * An array of strings, variables containing strings, or a combination of both
  * A `key: value` pair using the `group` or `labels` keys
* If you specify an array of strings or variables, your workflow will execute on any runner that matches all of the specified `runs-on` values. For example, here the job will only run on a self-hosted runner that has the labels `linux`, `x64`, and `gpu`:

  ```yaml
  runs-on: [self-hosted, linux, x64, gpu]
  ```

  For more information, see [Choosing self-hosted runners](#choosing-self-hosted-runners).
* You can mix strings and variables in an array. For example:

  {% raw %}

  ```yaml
  on:
    workflow_dispatch:
      inputs:
        chosen-os:
          required: true
          type: choice
          options:
          - Ubuntu
          - macOS

  jobs:
    test:
      runs-on: [self-hosted, "${{ inputs.chosen-os }}"]
      steps:
      - run: echo Hello world!
  ```

  {% endraw %}

* If you would like to run your workflow on multiple machines, use [`jobs.<job_id>.strategy`](/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idstrategy).

> [!NOTE]
> Quotation marks are not required around simple strings like `self-hosted`, but they are required for expressions like {% raw %} `"${{ inputs.chosen-os }}"`{% endraw %}.


## Choosing GitHub-hosted runners



> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.






If you use a GitHub-hosted runner, each job runs in a fresh instance of a runner image specified by `runs-on`.

The value for runs-on, when you are using a GitHub-hosted runner, is a workflow label or the name of a runner group. The labels for the standard GitHub-hosted runners are shown in the following tables.

For more information, see [GitHub Hosted Runners](https://docs.github.com/en/actions/concepts/runners/github-hosted-runners).

### Standard GitHub-hosted runners for public repositories

For public repositories, jobs using the workflow labels shown in the table below will run with the associated specifications. With the exception of single-CPU runners, each GitHub-hosted runner is a new virtual machine (VM) hosted by GitHub. Single-CPU runners are hosted in a container on a shared VM—see [GitHub Hosted Runners](https://docs.github.com/en/actions/reference/runners/github-hosted-runners#single-cpu-runners).
 Use of the standard GitHub-hosted runners is free and unlimited on public repositories.

<table style="width:100%">
  <thead>
    <tr>
      <th scope="col"><b>Virtual machine / container</b></th>
      <th scope="col"><b>Processor (CPU)</b></th>
      <th scope="col"><b>Memory (RAM)</b></th>
      <th scope="col"><b>Storage (SSD)</b></th>
      <th scope="col"><b>Architecture</b></th>
      <th scope="col"><b>Workflow label</b></th>
    </tr>
  </thead>
  <tbody>
        <tr>
      <td>Linux</td>
      <td>1</td>
      <td>5 GB</td>
      <td>14 GB</td>
      <td> x64 </td>
      <td>
        <code><a href="https://github.com/actions/runner-images/blob/main/images/ubuntu-slim/ubuntu-slim-Readme.md">ubuntu-slim</a></code>
      </td>
    </tr>

    <tr>
      <td>Linux</td>
      <td>4</td>
      <td>16 GB</td>
      <td>14 GB</td>
      <td> x64 </td>
      <td>
        <code><a href="https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2404-Readme.md">ubuntu-latest</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2404-Readme.md">ubuntu-24.04</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2204-Readme.md">ubuntu-22.04</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2604-Readme.md">ubuntu-26.04</a></code> (Public preview)
      </td>
    </tr>
    <tr>
      <td>Windows</td>
      <td>4</td>
      <td>16 GB</td>
      <td>14 GB</td>
      <td> x64 </td>
      <td>
        <code><a href="https://github.com/actions/runner-images/blob/main/images/windows/Windows2025-Readme.md">windows-latest</a></code>,
         <code><a href="https://github.com/actions/runner-images/blob/main/images/windows/Windows2025-Readme.md">windows-2025</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/windows/Windows2025-VS2026-Readme.md">windows-2025-vs2026</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/windows/Windows2022-Readme.md">windows-2022</a></code>
      </td>
    </tr>
    <tr>
      <td>Linux</td>
      <td>4</td>
      <td>16 GB</td>
      <td>14 GB</td>
      <td> arm64 </td>
      <td>
        <code><a href="https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2404-Arm64-Readme.md">ubuntu-24.04-arm</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2204-Arm64-Readme.md">ubuntu-22.04-arm</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2604-Arm64-Readme.md">ubuntu-26.04-arm</a></code> (Public preview)
      </td>
    </tr>
    <tr>
      <td>Windows</td>
      <td>4</td>
      <td>16 GB</td>
      <td>14 GB</td>
      <td>arm64</td>
      <td>
        <code><a href="https://github.com/actions/runner-images/blob/main/images/windows/Windows11-Arm64-Readme.md">windows-11-arm</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/windows/Windows11-VS2026-Arm64-Readme.md">windows-11-vs2026-arm</a></code> (Public preview)
      </td>
    </tr>
    <tr>
      <td>macOS</td>
      <td>4</td>
      <td>14 GB</td>
      <td>14 GB</td>
      <td> Intel </td>
      <td>
        <code><a href="https://github.com/actions/runner-images/blob/main/images/macos/macos-15-Readme.md">macos-15-intel</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/macos/macos-26-Readme.md">macos-26-intel</a></code>
      </td>
    </tr>
    <tr>
      <td>macOS</td>
      <td>3 (M1)</td>
      <td>7 GB</td>
      <td>14 GB</td>
      <td> arm64 </td>
      <td>
        <code><a href="https://github.com/actions/runner-images/blob/main/images/macos/macos-15-arm64-Readme.md">macos-latest</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/macos/macos-14-arm64-Readme.md">macos-14</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/macos/macos-15-arm64-Readme.md">macos-15</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/macos/macos-26-arm64-Readme.md">macos-26</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/macos/xcode-27-arm64-Readme.md">xcode-27</a></code> (Public preview)
      </td>
    </tr>
  </tbody>

</table>

### Standard GitHub-hosted runners for internal and private repositories

For internal and private repositories, jobs using the workflow labels shown in the table below will run on virtual machines with the associated specifications. These runners use your GitHub account's allotment of free minutes, and are then charged at the per minute rates. See [Actions Runner Pricing](https://docs.github.com/en/billing/reference/actions-runner-pricing).

<table style="width:100%">
  <thead>
    <tr>
      <th scope="col"><b>Virtual Machine</b></th>
      <th scope="col"><b>Processor (CPU)</b></th>
      <th scope="col"><b>Memory (RAM)</b></th>
      <th scope="col"><b>Storage (SSD)</b></th>
      <th scope="col"><b>Architecture</b></th>
      <th scope="col"><b>Workflow label</b></th>
    </tr>
  </thead>
  <tbody>
        <tr>
      <td>Linux</td>
      <td>1</td>
      <td>5 GB</td>
      <td>14 GB</td>
      <td> x64 </td>
      <td>
        <code><a href="https://github.com/actions/runner-images/blob/main/images/ubuntu-slim/ubuntu-slim-Readme.md">ubuntu-slim</a></code>
      </td>
    </tr>

    <tr>
      <td>Linux</td>
      <td>2</td>
      <td>8 GB</td>
      <td>14 GB</td>
      <td> x64 </td>
      <td>
        <code><a href="https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2404-Readme.md">ubuntu-latest</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2404-Readme.md">ubuntu-24.04</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2204-Readme.md">ubuntu-22.04</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2604-Readme.md">ubuntu-26.04</a></code> (Public preview)
      </td>
    </tr>
    <tr>
      <td>Windows</td>
      <td>2</td>
      <td>8 GB</td>
      <td>14 GB</td>
      <td> x64 </td>
      <td>
        <code><a href="https://github.com/actions/runner-images/blob/main/images/windows/Windows2025-Readme.md">windows-latest</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/windows/Windows2025-Readme.md">windows-2025</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/windows/Windows2022-Readme.md">windows-2022</a></code>
      </td>
    </tr>
    <tr>
      <td>Linux</td>
      <td>2</td>
      <td>8 GB</td>
      <td>14 GB</td>
      <td> arm64 </td>
      <td>
        <code><a href="https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2404-Arm64-Readme.md">ubuntu-24.04-arm</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2204-Arm64-Readme.md">ubuntu-22.04-arm</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2604-Arm64-Readme.md">ubuntu-26.04-arm</a></code> (Public preview)
      </td>
    </tr>
    <tr>
      <td>Windows</td>
      <td>2</td>
      <td>8 GB</td>
      <td>14 GB</td>
      <td> arm64 </td>
      <td>
        <code><a href="https://github.com/actions/runner-images/blob/main/images/windows/Windows11-Arm64-Readme.md">windows-11-arm</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/windows/Windows11-Arm64-VS2026-Readme.md">windows-11-vs2026-arm</a></code> (Public preview)
      </td>
    </tr>
    <tr>
      <td>macOS</td>
      <td>4</td>
      <td>14 GB</td>
      <td>14 GB</td>
      <td> Intel </td>
      <td>
        <code><a href="https://github.com/actions/runner-images/blob/main/images/macos/macos-15-Readme.md">macos-15-intel</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/macos/macos-26-Readme.md">macos-26-intel</a></code>
      </td>
    </tr>
    <tr>
      <td>macOS</td>
      <td>3 (M1)</td>
      <td>7 GB</td>
      <td>14 GB</td>
      <td> arm64 </td>
      <td>
        <code><a href="https://github.com/actions/runner-images/blob/main/images/macos/macos-15-arm64-Readme.md">macos-latest</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/macos/macos-14-arm64-Readme.md">macos-14</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/macos/macos-15-arm64-Readme.md">macos-15</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/macos/macos-26-arm64-Readme.md">macos-26</a></code>,
        <code><a href="https://github.com/actions/runner-images/blob/main/images/macos/xcode-27-arm64-Readme.md">xcode-27</a></code> (Public preview)
      </td>
    </tr>
  </tbody>
</table>



> [!NOTE] macOS runners are not available on subdomains of GHE.com, such as `octocorp.ghe.com`.





In addition to the standard GitHub-hosted runners, GitHub offers customers on GitHub Team and GitHub Enterprise Cloud plans a range of managed virtual machines with advanced features - for example, more cores and disk space, GPU-powered machines, and ARM-powered machines. For more information, see [Larger Runners](https://docs.github.com/en/actions/concepts/runners/larger-runners).

> [!NOTE]
> The `-latest` runner images are the latest stable images that GitHub provides, and might not be the most recent version of the operating system available from the operating system vendor.

> [!WARNING]
> Beta and Deprecated Images are provided "as-is", "with all faults" and "as available" and are excluded from the service level agreement and warranty. Beta Images may not be covered by customer support.

#### Example: Specifying an operating system

```yaml
runs-on: ubuntu-latest
```

For more information, see [GitHub Hosted Runners](https://docs.github.com/en/actions/concepts/runners/github-hosted-runners).




## Choosing self-hosted runners

To specify a self-hosted runner for your job, configure `runs-on` in your workflow file with self-hosted runner labels.

Self-hosted runners may have the `self-hosted` label. When setting up a self-hosted runner, by default we will include the label `self-hosted`. You may pass in the `--no-default-labels` flag to prevent the self-hosted label from being applied. Labels can be used to create targeting options for runners, such as operating system or architecture, we recommend providing an array of labels that begins with `self-hosted` (this must be listed first) and then includes additional labels as needed. When you specify an array of labels, jobs will be queued on runners that have all the labels that you specify.

>[!NOTE] Actions Runner Controller does not support the `self-hosted` label.


#### Example: Using labels for runner selection

```yaml
runs-on: [self-hosted, linux]
```

For more information, see [Self Hosted Runners](https://docs.github.com/en/actions/concepts/runners/self-hosted-runners) and [Use In A Workflow](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/use-in-a-workflow).


## Choosing runners in a group

You can use `runs-on` to target runner groups, so that the job will execute on any runner that is a member of that group. For more granular control, you can also combine runner groups with labels.



Runner groups can only have [larger runners](/actions/concepts/runners/larger-runners) or [self-hosted runners](/actions/how-tos/manage-runners/self-hosted-runners) as members.



#### Example: Using groups to control where jobs are run

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


#### Example: Combining groups and labels

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




#### Example: using prefixes to differentiate runner groups

For example, if you have a runner group named `my-group` in the organization and another named `my-group` in the enterprise, you can update your workflow file to use `org/my-group` or `ent/my-group` to differentiate between the two.

Using `org/`:

```yaml
runs-on:
  group: org/my-group
  labels: [ self-hosted, label-1 ]
```

Using `ent/`:

```yaml
runs-on:
  group: ent/my-group
  labels: [ self-hosted, label-1 ]
```
