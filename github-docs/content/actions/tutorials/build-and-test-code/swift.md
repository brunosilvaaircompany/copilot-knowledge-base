# Building and testing Swift

> [!NOTE]
> GitHub Enterprise Server users should use self-hosted runners. GitHub-hosted runners are **not** supported.




## Introduction

This guide shows you how to build and test a Swift package.

GitHub-hosted runners have a tools cache with preinstalled software, and the Ubuntu and macOS runners include the dependencies for building Swift packages. For a full list of up-to-date software and the preinstalled versions of Swift and Xcode, see [GitHub Hosted Runners](https://docs.github.com/en/actions/concepts/runners/github-hosted-runners#preinstalled-software-for-github-owned-images).

## Prerequisites

You should already be familiar with YAML syntax and how it's used with GitHub Actions. For more information, see [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax).

We recommend that you have a basic understanding of Swift packages. For more information, see [Swift Packages](https://developer.apple.com/documentation/xcode/swift-packages) in the Apple developer documentation.

## Using a Swift workflow template

To get started quickly, add a workflow template to the `.github/workflows` directory of your repository.


GitHub provides a workflow template for Swift that should work for most Swift projects. The subsequent sections of this guide give examples of how you can customize this workflow template.

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**.

   ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](/assets/images/help/repository/actions-tab-global-nav-update.png)

1. If you already have a workflow in your repository, click **New workflow**.

1. The "Choose a workflow" page shows a selection of recommended workflow templates. Search for "swift".
1. Filter the selection of workflows by clicking **Continuous integration**.
1. On the "Swift" workflow, click **Configure**.



   If you don't find the "Swift" workflow template, copy the following workflow code to a new file called `swift.yml` in the `.github/workflows` directory of your repository.

   ```yaml copy
   name: Swift

   on:
     push:
       branches: [ "main" ]
     pull_request:
       branches: [ "main" ]

   jobs:
     build:
       runs-on: macos-latest

       steps:
       - uses: actions/checkout@v6

       - name: Build
         run: swift build -v
       - name: Run tests
         run: swift test -v
   ```



1. Edit the workflow as required. For example, change the branch on which the workflow will run.
1. Click **Commit changes**.


   The `swift.yml` workflow file is added to the `.github/workflows` directory of your repository.


## Specifying a Swift version

To use a specific preinstalled version of Swift on a GitHub-hosted runner, use the `swift-actions/setup-swift` action. This action finds a specific version of Swift from the tools cache on the runner and adds the necessary binaries to `PATH`. These changes will persist for the remainder of a job. For more information, see the [`swift-actions/setup-swift`](https://github.com/marketplace/actions/setup-swift) action.

If you are using a self-hosted runner, you must install your desired Swift versions and add them to `PATH`.

The examples below demonstrate using the `swift-actions/setup-swift` action.

### Using multiple Swift versions

You can configure your job to use multiple versions of Swift in a matrix.

```yaml copy

# This workflow uses actions that are not certified by GitHub.
# They are provided by a third-party and are governed by
# separate terms of service, privacy policy, and support
# documentation.


# GitHub recommends pinning actions to a commit SHA.
# To get a newer version, you will need to update the SHA.
# You can also reference a tag or branch, but the action may change without warning.


name: Swift

on: [push]

jobs:
  build:
    name: {% raw %}Swift ${{ matrix.swift }} on ${{ matrix.os }}{% endraw %}
    strategy:
      matrix:
        os: [ubuntu-latest, macos-latest]
        swift: ["5.2", "5.3"]
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    steps:
      - uses: swift-actions/setup-swift@65540b95f51493d65f5e59e97dcef9629ddf11bf
        with:
          swift-version: {% raw %}${{ matrix.swift }}{% endraw %}
      - uses: actions/checkout@v6

      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

### Using a single specific Swift version

You can configure your job to use a single specific version of Swift, such as `5.3.3`.

```yaml copy
# This workflow uses actions that are not certified by GitHub.
# They are provided by a third-party and are governed by
# separate terms of service, privacy policy, and support
# documentation.

steps:
  - uses: swift-actions/setup-swift@65540b95f51493d65f5e59e97dcef9629ddf11bf
    with:
      swift-version: "5.3.3"
  - name: Get swift version
    run: swift --version # Swift 5.3.3
```

## Building and testing your code

You can use the same commands that you use locally to build and test your code using Swift. This example demonstrates how to use `swift build` and `swift test` in a job:

```yaml copy
# This workflow uses actions that are not certified by GitHub.
# They are provided by a third-party and are governed by
# separate terms of service, privacy policy, and support
# documentation.

steps:
  - uses: actions/checkout@v6

  - uses: swift-actions/setup-swift@65540b95f51493d65f5e59e97dcef9629ddf11bf
    with:
      swift-version: "5.3.3"
  - name: Build
    run: swift build
  - name: Run tests
    run: swift test
```
