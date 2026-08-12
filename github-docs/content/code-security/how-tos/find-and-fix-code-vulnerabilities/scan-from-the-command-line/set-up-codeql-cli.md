# Setting up the CodeQL CLI

## Setting up the CodeQL CLI



> [!NOTE]
> This article describes the features available with the CodeQL CLI 2.20.7{% elsif ghes < 3.19 %}2.21.4{% elsif ghes < 3.20 %}2.22.4{% elsif ghes < 3.21 %}2.23.9{% elsif ghes < 3.22 %}2.24.3{% elsif ghes < 3.23 %}2.25.6 bundle included in the initial release of GitHub Enterprise Server {{ allVersions[currentVersion].currentRelease }}.
>
> If your site administrator has updated your CodeQL CLI version to a newer release, please see the [GitHub Enterprise Cloud version](/enterprise-cloud@latest/{{ currentArticle }}) of this article for information on the latest features.




To run CodeQL commands, you need to set up the CodeQL CLI so that it can access the tools, queries, and libraries required to create and analyze databases.

The CodeQL CLI supports a range of use cases and directory structures. This article walks through a simple setup that works for most users and environments.

If you plan to use the CodeQL CLI for security research or to test or contribute queries, you may need a more advanced setup. For more information, see [Codeql CLI](https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-cli#getting-started).

### Before you begin

If you are using macOS on Apple Silicon (for example, Apple M1), ensure that the [Xcode command-line developer
tools](https://developer.apple.com/library/archive/technotes/tn2339/_index.html) and [Rosetta 2](https://support.apple.com/en-us/HT211861) are installed.

> [!NOTE]
> The CodeQL CLI is currently not compatible with non-glibc Linux distributions such as (muslc-based) Alpine Linux.

### 1. Download the CodeQL CLI tar archive

The CodeQL CLI download package is a tar archive containing tools, scripts, and
various CodeQL-specific files. If you don’t have a GitHub Enterprise license then, by
downloading this archive, you are agreeing to the [GitHub CodeQL Terms and
Conditions](https://securitylab.github.com/tools/codeql/license).

You should download the CodeQL bundle from https://github.com/github/codeql-action/releases. The bundle contains:

* CodeQL CLI product
* A compatible version of the queries and libraries from https://github.com/github/codeql
* Precompiled versions of all the queries included in the bundle



> [!NOTE]
> For GitHub Enterprise Server {{ allVersions[currentVersion].currentRelease }}, we recommend CodeQL CLI version 2.20.7{% elsif ghes < 3.19 %}2.21.4{% elsif ghes < 3.20 %}2.22.4{% elsif ghes < 3.21 %}2.23.9{% elsif ghes < 3.22 %}2.24.3{% elsif ghes < 3.23 %}2.25.6.



You should always use the CodeQL bundle. This ensures compatibility and gives much better performance than a separate download of the CodeQL CLI and checkout of the CodeQL queries. If you will only be running the CLI on one specific platform, download the appropriate `codeql-bundle-PLATFORM.tar.zst` file. Alternatively, you can download `codeql-bundle.tar.zst`, which contains the CLI for all supported platforms.

There are also `tar.gz` variants of the bundle, which are identical to the `tar.zst` variants except compressed using the less efficient gzip algorithm. The only reason to download the `tar.gz` variants is if you are using older decompression tools that do not support the Zstandard compression algorithm.


### 2. Extract the CodeQL CLI tar archive

Extract the CodeQL CLI tar archive to a directory of your choosing.

### Optional: Make the CodeQL CLI available in your CI system

If you plan to run CodeQL code scanning analysis in a CI system, ensure that the full contents of the CodeQL CLI bundle are available to every CI server that will run analysis.

For example, you can:

* Copy the bundle from a central internal location and extract it on each server, or
* Use the REST API to download the bundle directly from GitHub, ensuring that you receive the latest improvements to queries. For more information, see [Releases](https://docs.github.com/en/rest/releases).

### 3. Launch `codeql`

Once extracted, you can run CodeQL processes by running the `codeql` executable in a couple of ways:

* By executing `<extraction-root>/codeql/codeql`, where `<extraction-root>` is the folder where you extracted the CodeQL CLI
package.
* By adding `<extraction-root>/codeql` to your `PATH`, so that you
can run the executable as just `codeql`.

At this point, you can execute CodeQL commands. For a full list of the CodeQL CLI commands, see [Codeql CLI Manual](https://docs.github.com/en/code-security/reference/code-scanning/codeql/codeql-cli-manual).


> [!NOTE]
> If you add `codeql` to your `PATH`, it can be accessed by CodeQL for Visual Studio Code to compile and run queries. For more information about configuring VS Code to access the CodeQL CLI, see [Manage Codeql CLI](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-vs-code/manage-codeql-cli).

## Testing the CodeQL CLI configuration

After you extract the CodeQL CLI bundle, you can run the following command to verify that the CLI is correctly configured to create and analyze databases:

* `codeql resolve packs` if `/<extraction root>/codeql` is on the `PATH`.
* `/<extraction root>/codeql/codeql resolve packs` otherwise.

If successful, you should see output similar to the extract below:

```shell
Searching directories specified by `--additional-packs`. All directories have equal priority.
  Searching in:
    No packs were found at this location.
Searching directories specified by `--search-path`. Directories are searched in order.
Searching the root of the CodeQL distribution.
  Searching in:
      <extraction root>
    The following packs were found:
      codeql/java-all@<version>: (library) <extraction root>/qlpacks/codeql/javat-all/<version>/qlpack.yml
      codeql/java-queries@<version>: (query) <extraction root>/qlpacks/codeql/java-queries/<version>/qlpack.yml
      codeql/javascript-all@<version>: (library) <extraction root>/qlpacks/codeql/javascript-all/<version>/qlpack.yml
      codeql/javascript-queries@<version>: (query) <extraction root>/qlpacks/codeql/javascript-queries/<version>/qlpack.yml
      codeql/swift-all@<version>: (library) <extraction root>/qlpacks/codeql/swift-all/<version>/qlpack.yml
      codeql/swift-queries@<version>: (query) <extraction root>/qlpacks/codeql/swift-queries/<version>/qlpack.yml
...
```

The results have been truncated for brevity. The actual results will be longer and more detailed.

You should check that the output contains the expected languages and also that the directory location for the qlpack files is correct. The location should be within the extracted CodeQL CLI bundle, shown in the earlier example as `<extraction root>`. If the CodeQL CLI is unable to locate the qlpacks for the expected languages, check that you downloaded the CodeQL bundle and not a standalone copy of the CodeQL CLI.

You can also run `codeql resolve languages` to show which languages are available for database creation. This will list the languages supported by default in your CodeQL CLI package.

Optionally, you can download some CodeQL packs containing pre-compiled queries you would like to run. For more information, see [Customize Analysis](https://docs.github.com/en/code-security/tutorials/customize-code-scanning/customize-analysis).

The `codeql resolve packs` command is useful for diagnosing problems when the CodeQL CLI is unable to locate query packs that you expect to be available for analysis.

>[!NOTE] The `codeql resolve packs` command is available in the CodeQL CLI versions 2.19.0 and later. For earlier versions of the CLI, you should run the `codeql resolve qlpacks` command, which produces similar, but less detailed output.

## Next steps

To learn how to prepare your code to be analyzed by the CodeQL CLI, see [Prepare Code For Analysis](https://docs.github.com/en/code-security/tutorials/customize-code-scanning/prepare-code-for-analysis).
