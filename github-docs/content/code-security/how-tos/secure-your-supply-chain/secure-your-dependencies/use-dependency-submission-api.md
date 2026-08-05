# Using the dependency submission API

The dependency submission API is a method of submitting data to the dependency graph. It allows you to submit dependencies that are not captured by static analysis. For more information, see [Dependency Graph Data](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph-data).

## Submitting dependencies at build-time

You can use the dependency submission API in a GitHub Actions workflow to submit dependencies for your project when your project is built.

### Using pre-made actions

The simplest way to use the dependency submission API is by adding a pre-made action to your repository that will gather and convert the list of dependencies to the required snapshot format and submit the list to the API.


Ecosystem | Action |
--- | --- |
Go | [Go Dependency Submission](https://github.com/marketplace/actions/go-dependency-submission) | {% octicon "check" aria-label="Maintained by GitHub |
Gradle | [Gradle Dependency Submission](https://github.com/marketplace/actions/build-with-gradle#the-dependency-submission-action) |
Maven | [Maven Dependency Tree Dependency Submission](https://github.com/marketplace/actions/maven-dependency-tree-dependency-submission) |
Mill | [Mill Dependency Submission](https://github.com/marketplace/actions/mill-dependency-submission) |
Mix (Elixir) | [Mix Dependency Submission](https://github.com/marketplace/actions/mix-dependency-submission) |
Scala | [Sbt Dependency Submission](https://github.com/marketplace/actions/sbt-dependency-submission) |
NuGet and others | [Component Detection dependency submission action](https://github.com/marketplace/actions/component-detection-dependency-submission-action) |

> [!NOTE]
> For the Component Detection dependency submission action, other supported ecosystems include Vcpkg, Conan, Conda, Crates, as well as NuGet.

For example, the following [Go Dependency Submission](https://github.com/actions/go-dependency-submission) workflow calculates the dependencies for a Go build-target (a Go file with a `main` function) and submits the list to the dependency submission API.

```yaml
name: Go Dependency Submission
on:
  push:
    branches:
      - main

# The API requires write permission on the repository to submit dependencies
permissions:
  contents: write

# Environment variables to configure Go and Go modules. Customize as necessary
env:
  GOPROXY: '' # A Go Proxy server to be used
  GOPRIVATE: '' # A list of modules are considered private and not requested from GOPROXY
jobs:
  go-action-detection:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout Repository'
        uses: actions/checkout@v6


      - uses: actions/setup-go@v5

        with:
          go-version: ">=1.18.0"

      - name: Run snapshot action
        uses: actions/go-dependency-submission@v2
        with:
            # Required: Define the repo path to the go.mod file used by the
            # build target
            go-mod-path: go-example/go.mod
            #
            # Optional. Define the repo path of a build target,
            # a file with a `main()` function.
            # If undefined, this action will collect all dependencies
            # used by all build targets for the module. This may
            # include Go dependencies used by tests and tooling.
            go-build-target: go-example/cmd/octocat.go
```


For more information about these actions, see [Dependency Graph Supported Package Ecosystems](https://docs.github.com/en/code-security/reference/supply-chain-security/dependency-graph-supported-package-ecosystems#supported-package-ecosystems).

### Creating your own action

Alternatively, you can write your own action to submit dependencies for your project at build-time. Your workflow should:

  1. Generate a list of dependencies for your project.
  1. Translate the list of dependencies into the snapshot format accepted by the dependency submission API. For more information about the format, see the body parameters for the "Create a repository snapshot" API endpoint in [Dependency Submission](https://docs.github.com/en/rest/dependency-graph/dependency-submission).
  1. Submit the formatted list of dependencies to the dependency submission API.

GitHub maintains the [Dependency Submission Toolkit](https://github.com/github/dependency-submission-toolkit), a TypeScript library to help you build your own GitHub Action for submitting dependencies to the dependency submission API. For more information about writing an action, see [Create Actions](https://docs.github.com/en/actions/tutorials/create-actions).

## Submitting SBOMs as snapshots

If you have external tools which create or manage Software Bills of Materials (SBOMs), you can also submit those SBOMs to the dependency submission API. The snapshot data format is very similar to the standard SPDX and CycloneDX SBOM formats, and there are several tools which can generate or translate formats for use as snapshots.

>[!TIP] The [SPDX Dependency Submission Action](https://github.com/marketplace/actions/spdx-dependency-submission-action) and the [Anchore SBOM Action](https://github.com/marketplace/actions/anchore-sbom-action) can be used to both generate a SBOM and submit it to the dependency submission API.

For example, the following [SPDX Dependency Submission Action](https://github.com/marketplace/actions/spdx-dependency-submission-action) workflow calculates the dependencies for a repository, generates an exportable SBOM in SPDX 2.2 format, and submits it to the dependency submission API.

```yaml
# This workflow uses actions that are not certified by GitHub.
# They are provided by a third-party and are governed by
# separate terms of service, privacy policy, and support
# documentation.

name: SBOM upload

on:
  workflow_dispatch:
  push:
    branches: ["main"]

jobs:
  SBOM-upload:

    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: write

    steps:
    - uses: actions/checkout@v6

    - name: Generate SBOM
      # generation command documentation: https://github.com/microsoft/sbom-tool#sbom-generation
      run: |
        curl -Lo $RUNNER_TEMP/sbom-tool https://github.com/microsoft/sbom-tool/releases/latest/download/sbom-tool-linux-x64
        chmod +x $RUNNER_TEMP/sbom-tool
        $RUNNER_TEMP/sbom-tool generate -b . -bc . -pn ${{ github.repository }} -pv 1.0.0 -ps OwnerName -nsb https://sbom.mycompany.com -V Verbose
    - uses: actions/upload-artifact@v4

      with:
        name: sbom
        path: _manifest/spdx_2.2
    - name: SBOM upload
      uses: advanced-security/spdx-dependency-submission-action@5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e
      with:
        filePath: "_manifest/spdx_2.2/"
```
