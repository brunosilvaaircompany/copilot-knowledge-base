# CodeQL code scanning for compiled languages

> [!NOTE]
> Your site administrator must enable code scanning before you can use this feature. If you want to use GitHub Actions to scan your code, the site administrator must also enable GitHub Actions and set up the infrastructure required. For more information, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance).




## Compare build modes

{% rowheaders %}

| Build mode characteristic | None | Autobuild | Manual |
|---------------------------|-------------|-----------|--------|
| Used by default setup and for organization-level enablement | Yes (C/C++, C#, Java and Rust) | Yes, where `none` is not supported | No |
| Analysis succeeds without user configuration | Yes | Variable | No |
| Completeness of analysis | Generated code not analyzed | Variable | User controlled |
| Accuracy of analysis | Good | Good | Best |

{% endrowheaders %}

## Choose a build mode

When you are setting up code scanning for the first time, or across multiple repositories, it's best to use default setup. Default setup uses the simplest method available to generate a CodeQL database and analyze your code, so that you can start fixing alerts as soon as possible. Once you have resolved the initial alerts, you may want to switch to advanced setup with a manual build process for high risk repositories.

For language-specific `autobuild` behavior, runner requirements, and build-mode details for compiled languages, see [Build Options For Compiled Languages](https://docs.github.com/en/code-security/reference/code-scanning/codeql/build-options-for-compiled-languages).

## Use multiple build modes in a multi-language repository

For repositories with multiple compiled languages, you can use different build modes for different languages. For example, if your repository contains C/C++, C# and Java, you might want to provide manual build steps for one language (here C/C++). This workflow specifies a different build mode for each language.

```yaml
strategy:
  matrix:
    include:
      # Analyzes C and C++ code using the commands in `Build C and C++ code`
      - language: c-cpp
        build-mode: manual
      # Analyzes C# code by automatically detecting a build
      - language: csharp
        build-mode: autobuild
      # Analyzes Java code directly from the codebase without a build
      - language: java-kotlin
        build-mode: none # analyzes Java only
steps:
- name: Checkout repository
  uses: actions/checkout@v6


# Initializes CodeQL tools and creates a codebase for analysis.
- name: Initialize CodeQL
  uses: github/codeql-action/init@v4

  with:
    languages: {% raw %}${{ matrix.language }}{% endraw %}
- if: {% raw %}${{ matrix.build-mode == 'manual' }}{% endraw %}
  name: Build C and C++ code
  run: |
    echo 'If you are using a "manual" build mode for one or more of the' \
      'languages you are analyzing, replace this with the commands to build' \
      'your code, for example:'
    echo ' make bootstrap'
    echo ' make release'
    exit 1
```

For information about the languages, libraries, and frameworks that are supported in the latest version of CodeQL, see [Supported languages and frameworks](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks) in the CodeQL documentation. For information about the system requirements for running the latest version of CodeQL, see [System requirements](https://codeql.github.com/docs/codeql-overview/system-requirements/#additional-software-requirements) in the CodeQL documentation.

## Enable dependency caching for CodeQL

For default setup workflows, dependency caching is enabled only for GitHub-hosted runners in public and private repositories.

For advanced setup workflows, dependency caching is disabled by default. To enable dependency caching for CodeQL, use the `dependency-caching` setting for the CodeQL action in your advanced setup workflow. This setting accepts the following values:

* `false`/`none`/`off`: Dependency caching is disabled (default)
* `restore`: Only restore existing caches, do not store new caches
* `store`: Only store new caches, do not restore existing caches
* `true`/`full`/`on`: Restore existing caches, and store new caches

For example, the following settings would enable dependency caching for the CodeQL action:

```yaml
    # Initializes CodeQL with dependency caching enabled
    - name: Initialize CodeQL
      uses: github/codeql-action/init@v4

      with:
        languages: java
        dependency-caching: true
```

## Use `none` build mode for CodeQL

For C/C++, C#, Java and Rust, CodeQL creates a database without requiring a build when you enable default setup for code scanning unless the repository also includes Kotlin code. If a repository contains Kotlin code in addition to Java code, default setup is enabled with the autobuild process because Kotlin analysis requires a build.

Creating a CodeQL database without a build may produce less accurate results than using `autobuild` or manual build steps if:

* The build scripts cannot be queried for dependency information, and dependency guesses are inaccurate.
* The repository normally generates code during the build process.

To use `autobuild` or manual build steps, you can use advanced setup.

> [!NOTE] For Java analysis, if `build-mode` is set to `none` and Kotlin code is found in the repository, the Kotlin code will not be analyzed and a warning will be produced. See [Build Options For Compiled Languages](https://docs.github.com/en/code-security/reference/code-scanning/codeql/build-options-for-compiled-languages#building-java-and-kotlin).

## Use `autobuild` for CodeQL

The CodeQL action uses `autobuild` to analyze compiled languages in the following cases.

* Default setup is enabled and the language does not support `none` build (supported for C/C++, C#, Java and Rust).
* Advanced setup is enabled and the workflow specifies `build-mode: autobuild`.
* Advanced setup is enabled and the workflow has an Autobuild step for the language using the `autobuild` action (`github/codeql-action/autobuild@v4
`).

### Use the `build-mode` option

```yaml
# Initializes the CodeQL tools for scanning.
name: Analyze
strategy:
  matrix:
    include:
      # Analyze C and C++ code
      - language: c-cpp
        build-mode: autobuild
      # Analyze Go code
      - language: go
        build-mode: autobuild

steps:
  - uses: github/codeql-action/init@v4

    with:
      languages: {% raw %}${{ matrix.language }}{% endraw %}
      build-mode: {% raw %}${{ matrix.build-mode }}{% endraw %}
```

### Use the Autobuild step

```yaml
    # Initializes the CodeQL tools for scanning.
    - name: Initialize CodeQL
      uses: github/codeql-action/init@v4

      with:
        languages: {% raw %}${{ matrix.language }}{% endraw %}

    - name: Autobuild
      uses: github/codeql-action/autobuild@v4

```

## Specify build steps manually

You can only specify manual build steps if you have enabled advanced setup, see [Configuring Advanced Setup For Code Scanning](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-advanced-setup-for-code-scanning-with-codeql).

If `autobuild` fails, or you want to analyze a different set of source files from those built by the `autobuild` process, you'll need to do the following:

* If your workflow specifies a build mode for the language, change the build mode to `manual`.
* If your workflow contains an `autobuild` step, remove or comment out the `autobuild` step in the workflow.

 Then uncomment the `run` step and manually specify the build process to use. For C/C++, C#, Go, Java, Kotlin, and Swift, CodeQL will analyze whatever source code is built by your specified build steps.


Update your workflow to define the `build-mode` as `manual`.

```yaml
# Initializes the CodeQL tools for scanning.
- name: Initialize CodeQL
- uses: github/codeql-action/init@v4

  with:
    languages: {% raw %}${{ matrix.language }}{% endraw %}
    build-mode: manual
- uses: github/codeql-action/analyze@v4

  with:
    category: {% raw %}"/language:${{ matrix.language }}"{% endraw %}
```

Alternatively, update your workflow to comment out the "Autobuild" step.

```yaml
    # Autobuild attempts to build any compiled languages.
    # - name: Autobuild
    #  uses: github/codeql-action/autobuild@v4

```

### Add build commands

When manual building is enabled, uncomment the `run` step in the workflow and add build commands that are suitable for your repository. The `run` step runs command-line programs using the operating system's shell. You can modify these commands and add more commands to customize the build process.

``` yaml
- run: |
    make bootstrap
    make release
```

For more information about the `run` keyword, see [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idstepsrun).



If you added manual build steps for compiled languages and code scanning is still not working on your repository, contact us through the [GitHub Support portal](https://support.github.com){% elsif ghes %}your site administrator.
