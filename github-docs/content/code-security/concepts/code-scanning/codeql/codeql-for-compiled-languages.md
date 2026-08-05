# CodeQL code scanning for compiled languages

## About the CodeQL analysis workflow and compiled languages

Code scanning works by running queries against one or more CodeQL databases. Each database contains a representation of the code in a single language in your repository. For the compiled languages C/C++, C#, Go, Java, Kotlin, Rust, {% else ifversion codeql-rust-public-preview %}Rust (public preview), and Swift, the process of populating this database often involves building the code and extracting data.

When you enable code scanning, both default and advanced setup generate a CodeQL database for analysis using the simplest method available. For C/C++, C#, Java and Rust, the CodeQL database is generated directly from the codebase without requiring a build (`none` build mode). For other compiled languages, CodeQL builds the codebase using the `autobuild` build mode. Alternatively, you can use the `manual` build mode to specify explicit build commands to analyze only the files that are built by these custom commands.

You can use dependency caching with CodeQL to store dependencies as a GitHub Actions cache instead of downloading them from registries. See [About dependency caching for CodeQL](#about-dependency-caching-for-codeql) later in this article.

## CodeQL build modes

The CodeQL action supports three different build modes for compiled languages:

* `none` - the CodeQL database is created directly from the codebase without building the codebase (supported for all interpreted languages, and additionally supported for C/C++, C#, Java and Rust).
* `autobuild` - CodeQL detects the most likely build method and uses this to attempt to build the codebase and create a database for analysis (supported for C/C++, C#, Go, Java, Kotlin, and Swift).
* `manual` - you define the build steps to use for the codebase in the workflow (supported for C/C++, C#, Go, Java, Kotlin, and Swift).

For language-specific `autobuild` behavior, runner requirements, and guidance for manual builds, see [Build Options For Compiled Languages](https://docs.github.com/en/code-security/reference/code-scanning/codeql/build-options-for-compiled-languages).

## About dependency caching for CodeQL

You can use dependency caching with CodeQL to store dependencies as a GitHub Actions cache instead of downloading them from registries. This reduces the risk of losing alerts when third party registries don't work well, and may result in a performance improvement for projects that have a large number of dependencies or work with slow registries. To read more about how caching dependencies can speed up workflows, see [Dependency Caching](https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching).

Dependency caching works with all build modes, and is supported by Java, Go, and C#.

> [!NOTE]
> Using dependency caching will store CodeQL-specific caches that will be subject to cache quotas for a repository. See [Dependency Caching](https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching#usage-limits-and-eviction-policy).
