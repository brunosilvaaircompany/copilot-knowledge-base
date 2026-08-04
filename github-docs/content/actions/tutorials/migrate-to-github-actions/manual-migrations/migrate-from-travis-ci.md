# Migrating from Travis CI to GitHub Actions

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




## Introduction

This guide helps you migrate from Travis CI to GitHub Actions. It compares their concepts and syntax, describes the similarities, and demonstrates their different approaches to common tasks.

## Before you start

Before starting your migration to GitHub Actions, it would be useful to become familiar with how it works:

* For a quick example that demonstrates a GitHub Actions job, see [Quickstart](https://docs.github.com/en/actions/get-started/quickstart).
* To learn the essential GitHub Actions concepts, see [Store And Share Data](https://docs.github.com/en/actions/tutorials/store-and-share-data#passing-data-between-jobs-in-a-workflow).

## Comparing job execution

To give you control over when CI tasks are executed, a GitHub Actions _workflow_ uses _jobs_ that run in parallel by default. Each job contains _steps_ that are executed in a sequence that you define. If you need to run setup and cleanup actions for a job, you can define steps in each job to perform these.

## Key similarities

GitHub Actions and Travis CI share certain similarities, and understanding these ahead of time can help smooth the migration process.

### Using YAML syntax

Travis CI and GitHub Actions both use YAML to create jobs and workflows, and these files are stored in the code's repository. For more information on how GitHub Actions uses YAML, see [Create An Example Workflow](https://docs.github.com/en/actions/tutorials/create-an-example-workflow).

### Custom variables

Travis CI lets you set variables and share them between stages. Similarly, GitHub Actions lets you define variables for a workflow. For more information, see [Use Variables](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables).

### Default variables

Travis CI and GitHub Actions both include default environment variables that you can use in your YAML files. For GitHub Actions, you can see these listed in [Variables](https://docs.github.com/en/actions/reference/workflows-and-actions/variables#default-environment-variables).

### Parallel job processing

Travis CI can use `stages` to run jobs in parallel. Similarly, GitHub Actions runs `jobs` in parallel. For more information, see [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idneeds).

### Status badges

Travis CI and GitHub Actions both support status badges, which let you indicate whether a build is passing or failing.
For more information, see [Add A Status Badge](https://docs.github.com/en/actions/how-tos/monitor-workflows/add-a-status-badge).

### Using a matrix

Travis CI and GitHub Actions both support a matrix, allowing you to perform testing using combinations of operating systems and software packages. For more information, see [Run Job Variations](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/run-job-variations).

Below is an example comparing the syntax for each system.

#### Travis CI syntax for a matrix

{% raw %}

```yaml
matrix:
  include:
    - rvm: '2.5'
    - rvm: '2.6.3'
```

{% endraw %}

#### GitHub Actions syntax for a matrix

{% raw %}

```yaml
jobs:
  build:
    strategy:
      matrix:
        ruby: ['2.5', '2.6.3']
```

{% endraw %}

### Targeting specific branches

Travis CI and GitHub Actions both allow you to target your CI to a specific branch. For more information, see [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#onpushbranchestagsbranches-ignoretags-ignore).

Below is an example of the syntax for each system.

#### Travis CI syntax for targeting specific branches

{% raw %}

```yaml
branches:
  only:
    - main
    - 'mona/octocat'
```

{% endraw %}

#### GitHub Actions syntax for targeting specific branches

{% raw %}

```yaml
on:
  push:
    branches:
      - main
      - 'mona/octocat'
```

{% endraw %}

### Checking out submodules

Travis CI and GitHub Actions both allow you to control whether submodules are included in the repository clone.

Below is an example of the syntax for each system.

#### Travis CI syntax for checking out submodules

{% raw %}

```yaml
git:
  submodules: false
```

{% endraw %}

#### GitHub Actions syntax for checking out submodules

```yaml
- uses: actions/checkout@v6

  with:
    submodules: false
```

### Using environment variables in a matrix

Travis CI and GitHub Actions can both add custom variables to a test matrix, which allows you to refer to the variable in a later step.

In GitHub Actions, you can use the `include` key to add custom environment variables to a matrix. In this example, the matrix entries for `node-version` are each configured to use different values for the `site` and `datacenter` environment variables. The `Echo site details` step then uses {% raw %}`env: ${{ matrix.env }}`{% endraw %} to refer to the custom variables:

```yaml
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
       include:
         - node-version: '14.x'
           site: "prod"
           datacenter: "site-a"
         - node-version: '16.x'
           site: "dev"
           datacenter: "site-b"
    steps:
      - name: Echo site details
        env:
          SITE: {% raw %}${{ matrix.site }}{% endraw %}
          DATACENTER: {% raw %}${{ matrix.datacenter }}{% endraw %}
        run: echo $SITE $DATACENTER
```


## Key features in GitHub Actions

When migrating from Travis CI, consider the following key features in GitHub Actions:

### Storing secrets

GitHub Actions allows you to store secrets and reference them in your jobs. GitHub Actions organizations can limit which repositories can access organization secrets. Deployment protection rules can require manual approval for a workflow to access environment secrets. For more information, see [Secrets](https://docs.github.com/en/actions/concepts/security/secrets).

### Sharing files between jobs and workflows

GitHub Actions includes integrated support for artifact storage, allowing you to share files between jobs in a workflow. You can also save the resulting files and share them with other workflows. For more information, see [Understand GitHub Actions](https://docs.github.com/en/actions/get-started/understand-github-actions).

### Hosting your own runners

If your jobs require specific hardware or software, GitHub Actions allows you to host your own runners and send your jobs to them for processing. GitHub Actions also lets you use policies to control how these runners are accessed, granting access at the organization or repository level. For more information, see [Self Hosted Runners](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners).



### Concurrent jobs and execution time

The concurrent jobs and workflow execution times in GitHub Actions can vary depending on your GitHub plan. For more information, see [Billing And Usage](https://docs.github.com/en/actions/concepts/billing-and-usage).



### Using different languages in GitHub Actions

When working with different languages in GitHub Actions, you can create a step in your job to set up your language dependencies. For more information about working with a particular language, see [Build And Test Code](https://docs.github.com/en/actions/tutorials/build-and-test-code).

## Executing scripts

GitHub Actions can use `run` steps to run scripts or shell commands. To use a particular shell, you can specify the `shell` type when providing the path to the script. For more information, see [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idstepsrun).

For example:

```yaml
steps:
  - name: Run build script
    run: ./.github/scripts/build.sh
    shell: bash
```

## Error handling in GitHub Actions

When migrating to GitHub Actions, there are different approaches to error handling that you might need to be aware of.

### Script error handling

GitHub Actions stops a job immediately if one of the steps returns an error code. For more information, see [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#exit-codes-and-error-action-preference).

### Job error handling

GitHub Actions uses `if` conditionals to execute jobs or steps in certain situations. For example, you can run a step when another step results in a `failure()`. For more information, see [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#example-using-status-check-functions). You can also use [`continue-on-error`](/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idcontinue-on-error) to prevent a workflow run from stopping when a job fails.

## Migrating syntax for conditionals and expressions

To run jobs under conditional expressions, Travis CI and GitHub Actions share a similar `if` condition syntax. GitHub Actions lets you use the `if` conditional to prevent a job or step from running unless a condition is met. For more information, see [Expressions](https://docs.github.com/en/actions/reference/workflows-and-actions/expressions).

This example demonstrates how an `if` conditional can control whether a step is executed:

```yaml
jobs:
  conditional:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This step runs with str equals 'ABC' and num equals 123"
        if: env.str == 'ABC' && env.num == 123
```

## Migrating phases to steps

Where Travis CI uses _phases_ to run _steps_, GitHub Actions has _steps_ which execute _actions_. You can find prebuilt actions in the [GitHub Marketplace](https://github.com/marketplace?type=actions), or you can create your own actions. For more information, see [Reuse Automations](https://docs.github.com/en/actions/how-tos/reuse-automations).

Below is an example of the syntax for each system.

### Travis CI syntax for phases and steps

{% raw %}

```yaml
language: python
python:
  - "3.7"

script:
  - python script.py
```

{% endraw %}

### GitHub Actions syntax for steps and actions

```yaml
jobs:
  run_python:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/setup-python@v5

        with:
          python-version: '3.7'
          architecture: 'x64'
      - run: python script.py
```

## Caching dependencies

Travis CI and GitHub Actions let you manually cache dependencies for later reuse.

These examples demonstrate the cache syntax for each system.

### Travis CI syntax for caching

{% raw %}

```yaml
language: node_js
cache: npm
```

{% endraw %}

### GitHub Actions syntax for caching

```yaml
- name: Cache node modules
  uses: actions/cache@v4

  with:
    path: ~/.npm
    key: {% raw %}v1-npm-deps-${{ hashFiles('**/package-lock.json') }}{% endraw %}
    restore-keys: v1-npm-deps-
```

## Examples of common tasks

This section compares how GitHub Actions and Travis CI perform common tasks.

### Configuring environment variables

You can create custom environment variables in a GitHub Actions job.

#### Travis CI syntax for an environment variable

```yaml
env:
  - MAVEN_PATH="/usr/local/maven"
```

#### GitHub Actions workflow with an environment variable

```yaml
jobs:
  maven-build:
    env:
      MAVEN_PATH: '/usr/local/maven'
```

### Building with Node.js

#### Travis CI for building with Node.js

{% raw %}

```yaml
install:
  - npm install
script:
  - npm run build
  - npm test
```

{% endraw %}

#### GitHub Actions workflow for building with Node.js

```yaml
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6

      - name: Use Node.js
        uses: actions/setup-node@v7

        with:
          node-version: '16.x'
      - run: npm install
      - run: npm run build
      - run: npm test
```

## Next steps

To continue learning about the main features of GitHub Actions, see [Write Workflows](https://docs.github.com/en/actions/how-tos/write-workflows).
