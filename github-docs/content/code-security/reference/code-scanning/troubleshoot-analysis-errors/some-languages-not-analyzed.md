# Some languages were not analyzed with CodeQL advanced setup

> [!NOTE]
> This article describes the features available with the version of the CodeQL action and associated CodeQL CLI bundle included in the initial release of this version of GitHub Enterprise Server. If your enterprise uses a more recent version of the CodeQL action, see the [GitHub Enterprise Cloud version](/enterprise-cloud@latest/{{ currentArticle }}) of this article for information on the latest features.
For information on using the latest version, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access).




If you're using advanced setup and your workflow doesn't explicitly specify the languages to analyze, CodeQL implicitly detects the supported languages in your code base. In this configuration, out of the compiled languages C/C++, C#, Go, Java, Kotlin, Rust, {% else ifversion codeql-rust-public-preview %}Rust (public preview), and Swift, CodeQL only analyzes the language with the most source files. Edit the workflow and add a matrix specifying the languages you want to analyze. The default CodeQL analysis workflow uses such a matrix.

  The following extracts from a workflow show how you can use a matrix within the job strategy to specify languages, and then reference each language within the "Initialize CodeQL" step:

  ```yaml
  jobs:
    analyze:
      permissions:
        security-events: write
        actions: read
      # ...
      strategy:
        fail-fast: false
        matrix:
          language: ['csharp', 'c-cpp', 'javascript-typescript']

      steps:
      # ...
        - name: Initialize CodeQL
          uses: github/codeql-action/init@v4

          with:
            languages: {% raw %}${{ matrix.language }}{% endraw %}
  ```

  For more information about editing the workflow, see [Workflow Configuration Options](https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options).
