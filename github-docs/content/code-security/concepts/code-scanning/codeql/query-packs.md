# CodeQL query packs

> [!NOTE]
> This article describes the features available with the CodeQL CLI 2.20.7{% elsif ghes < 3.19 %}2.21.4{% elsif ghes < 3.20 %}2.22.4{% elsif ghes < 3.21 %}2.23.9{% elsif ghes < 3.22 %}2.24.3{% elsif ghes < 3.23 %}2.25.6 bundle included in the initial release of GitHub Enterprise Server {{ allVersions[currentVersion].currentRelease }}.
>
> If your site administrator has updated your CodeQL CLI version to a newer release, please see the [GitHub Enterprise Cloud version](/enterprise-cloud@latest/{{ currentArticle }}) of this article for information on the latest features.




## About CodeQL packs

CodeQL packs are used to create, share, depend on, and run CodeQL queries and libraries. You can customize your CodeQL analysis by downloading packs created by others and running them on your codebase.

Each CodeQL pack requires a `qlpack.yml` file in its root directory that specifies:

* How to compile the queries
* Dependencies on other CodeQL packs and libraries
* Query suite definitions

For more information about `qlpack.yml` properties, see [Customize Analysis](https://docs.github.com/en/code-security/tutorials/customize-code-scanning/customize-analysis).

Additionally, a CodeQL pack can contain:

* Custom queries (`.ql` files)
* Library files
* Query suites
* Metadata

The CodeQL CLI bundle includes queries that are maintained by GitHub experts, security researchers, and community contributors. If you want to run queries developed by other organizations, CodeQL query packs provide an efficient and reliable way to download and run queries, while model packs (public preview) can be used to expand code scanning analysis to recognize libraries and frameworks that are not supported by default.

## Types of CodeQL packs

There are three types of CodeQL packs: query packs, library packs, and model packs.

* Query packs contain a set of pre-compiled queries that can be evaluated on a CodeQL database. Query packs are designed to be run. When a query pack is published, the bundle includes all the transitive dependencies and pre-compiled representations of each query, in addition to the query sources. This ensures consistent and efficient execution of the queries in the pack.

* Library packs are designed to be used by query packs (or other library packs) and do not contain queries themselves. The libraries are not compiled separately.

* Model packs can be used to expand code scanning analysis to recognize libraries and frameworks that are not supported by default. Model packs are currently in public preview and subject to change. During the public preview, model packs are available for C/C++, C#, Java/Kotlin, Python, Ruby, and Rust analysis. For more information about creating your own model packs, see [Create And Work With Codeql Packs](https://docs.github.com/en/code-security/tutorials/customize-code-scanning/create-and-work-with-codeql-packs#creating-a-codeql-model-pack).

## Where to find query packs

The standard CodeQL packs for all supported languages are published in the [Container registry](https://github.com/orgs/codeql/packages). If you installed the CodeQL CLI in the standard way, using the CodeQL CLI bundle, the core query packs are already downloaded and available to you. They are:

  * `codeql/cpp-queries`
  * `codeql/csharp-queries`
  * `codeql/go-queries`
  * `codeql/java-queries`
  * `codeql/javascript-queries`
  * `codeql/python-queries`
  * `codeql/ruby-queries`
  * `codeql/swift-queries`

For more information about compatibility between published query packs and different CodeQL releases, see [Codeql Query Packs](https://docs.github.com/en/code-security/reference/code-scanning/codeql/codeql-cli/codeql-query-packs#codeql-pack-compatibility).

You can also use the CodeQL CLI to create your own CodeQL packs, add dependencies to packs, and install or update dependencies.

## Publishing and sharing CodeQL packs

You can share custom queries with the broader CodeQL community by:

* Publishing to GitHub Packages: Make your pack publicly available for other users to discover and use.
* Contributing to the CodeQL repository: Submit queries that would benefit the wider community by opening a pull request to the official repository.

For more information about publishing and downloading CodeQL packs, see [Publish And Use Packs](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-the-command-line/publish-and-use-packs).

For information about contributing to CodeQL, see [Contributing to CodeQL](https://github.com/github/codeql/blob/main/CONTRIBUTING.md).
