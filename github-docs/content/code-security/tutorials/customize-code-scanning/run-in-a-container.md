# Running CodeQL code scanning in a container

## About code scanning with a containerized build

If you're configuring code scanning for a compiled language, and you're building the code in a containerized environment, the analysis may fail with the error message "No source code was seen during the build." This indicates that CodeQL was unable to monitor your code as it was compiled.

You must run CodeQL inside the container in which you build your code. This applies whether you are using the CodeQL CLI or GitHub Actions. For the CodeQL CLI, see [Use With Existing Ci System](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/use-with-existing-ci-system) for more information. If you're using GitHub Actions, configure your workflow to run all the actions in the same container. For more information, see [Example workflow](#example-workflow).

> [!NOTE]
> The CodeQL CLI is currently not compatible with non-glibc Linux distributions such as (musl-based) Alpine Linux.


## Dependencies for CodeQL code scanning

You may have difficulty running code scanning if the container you're using is missing certain dependencies (for example, Git must be installed and added to the PATH variable). If you encounter dependency issues, review the list of software typically included on GitHub's runner images. For more information, see the version-specific `readme` files in these locations:

* Linux: https://github.com/actions/runner-images/tree/main/images/ubuntu
* macOS: https://github.com/actions/runner-images/tree/main/images/macos
* Windows: https://github.com/actions/runner-images/tree/main/images/windows

## Example workflow



> [!NOTE]
> This article describes the features available with the version of the CodeQL action and associated CodeQL CLI bundle included in the initial release of this version of GitHub Enterprise Server. If your enterprise uses a more recent version of the CodeQL action, see the [GitHub Enterprise Cloud version](/enterprise-cloud@latest/{{ currentArticle }}) of this article for information on the latest features.
For information on using the latest version, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access).




This sample workflow uses GitHub Actions to run CodeQL analysis in a containerized environment. The value of `container.image` identifies the container to use. In this example the image is named `codeql-container`, with a tag of `f0f91db`. For more information, see [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idcontainer).

```yaml
name: "CodeQL"

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: '15 5 * * 3'

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      actions: read

    strategy:
      fail-fast: false
      matrix:
        language: [java-kotlin]

    # Specify the container in which actions will run
    container:
      image: codeql-container:f0f91db

    steps:
      - name: Checkout repository
        uses: actions/checkout@v6

      - name: Initialize CodeQL
        uses: github/codeql-action/init@v4

        with:
          languages: {% raw %}${{ matrix.language }}{% endraw %}
      - name: Build
        run: |
          ./configure
          make
      - name: Perform CodeQL Analysis
        uses: github/codeql-action/analyze@v4

```
