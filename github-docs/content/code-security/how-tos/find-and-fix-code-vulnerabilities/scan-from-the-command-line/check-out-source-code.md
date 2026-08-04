# Checking out the CodeQL CLI source code

Some users prefer working with CodeQL query sources directly in order to work on or contribute to open source shared queries.

## 1. Download the CodeQL CLI tar archive

The CodeQL CLI download package is a tar archive containing tools, scripts, and
various CodeQL-specific files. If you don’t have a GitHub Enterprise license then, by
downloading this archive, you are agreeing to the [GitHub CodeQL Terms and
Conditions](https://securitylab.github.com/tools/codeql/license).

You should download the CodeQL bundle from https://github.com/github/codeql-action/releases. The bundle contains:

* CodeQL CLI product
* A compatible version of the queries and libraries from https://github.com/github/codeql
* Precompiled versions of all the queries included in the bundle



> [!NOTE]
> For GitHub Enterprise Server {{ allVersions[currentVersion].currentRelease }}, we recommend CodeQL CLI version 2.20.7{% elsif ghes < 3.19 %}2.21.4{% elsif ghes < 3.20 %}2.22.4{% elsif ghes < 3.21 %}2.23.9{% elsif ghes < 3.22 %}2.24.3.



You should always use the CodeQL bundle. This ensures compatibility and gives much better performance than a separate download of the CodeQL CLI and checkout of the CodeQL queries. If you will only be running the CLI on one specific platform, download the appropriate `codeql-bundle-PLATFORM.tar.zst` file. Alternatively, you can download `codeql-bundle.tar.zst`, which contains the CLI for all supported platforms.

There are also `tar.gz` variants of the bundle, which are identical to the `tar.zst` variants except compressed using the less efficient gzip algorithm. The only reason to download the `tar.gz` variants is if you are using older decompression tools that do not support the Zstandard compression algorithm.


## 2. Create a new CodeQL directory

Create a new directory where you can place the CLI and any queries and libraries
you want to use. For example, `$HOME/codeql-home`.

The CLI’s built-in search operations automatically look in all of its sibling
directories for the files used in database creation and analysis. Keeping these
components in their own directory prevents the CLI searching unrelated sibling
directories while ensuring all files are available without specifying any
further options on the command line.

## 3. Obtain a local copy of the CodeQL queries

The [CodeQL repository](https://github.com/github/codeql?ref_product=code-scanning&ref_type=engagement&ref_style=text) contains
the queries and libraries required for CodeQL analysis of all supported languages.
Clone a copy of this repository into `codeql-home`.

By default, the root of the cloned repository will be called `codeql`.
Rename this folder `codeql-repo` to avoid conflicting with the CodeQL CLI that you will extract in step 1. If you use git on the command line, you can
clone and rename the repository in a single step by running
`git clone git@github.com:github/codeql.git codeql-repo` in the `codeql-home` folder.

Within this repository, the queries and libraries are organized into CodeQL
packs. Along with the queries themselves, CodeQL packs contain important metadata
that tells the CodeQL CLI how to process the query files. For more information,
see [Create And Work With Codeql Packs](https://docs.github.com/en/code-security/tutorials/customize-code-scanning/create-and-work-with-codeql-packs).

> [!NOTE]
> There are different versions of the CodeQL queries available for different users. Check out the correct version for your use case:
>
> * For the queries that are intended to be used with the latest CodeQL CLI release, check out the branch tagged `codeql-cli/latest`. You should use this branch for databases you’ve built using the CodeQL CLI or recently downloaded from GitHub.
> * For the most up to date CodeQL queries, check out the `main` branch. This branch represents the very latest version of CodeQL’s analysis.

## 4. Extract the CodeQL CLI tar archive

Extract the tar archive into the directory you created in step 2.

For example, if the path to your copy of the CodeQL repository is `$HOME/codeql-home/codeql-repo`, then extract the CLI into
`$HOME/codeql-home/`.

## 5. Launch `codeql`

Once extracted, you can run CodeQL processes by running the `codeql` executable in a couple of ways:

* By executing `<extraction-root>/codeql/codeql`, where `<extraction-root>` is the folder where you extracted the CodeQL CLI
package.
* By adding `<extraction-root>/codeql` to your `PATH`, so that you
can run the executable as just `codeql`.

At this point, you can execute CodeQL commands. For a full list of the CodeQL CLI commands, see [Codeql CLI Manual](https://docs.github.com/en/code-security/reference/code-scanning/codeql/codeql-cli-manual).


## 6. Verify your CodeQL CLI setup

CodeQL CLI has subcommands you can execute to verify that you are correctly set up to create and analyze databases:

* Run `codeql resolve languages` to show which languages are available for database creation. This will list the languages supported by default in your CodeQL CLI package.
* Run `codeql resolve qlpacks` to show which CodeQL packs the CLI can find. This will display the names of all the CodeQL packs directly available to the CodeQL CLI. This should include:
  * Query packs for each supported language, for example, `codeql/{language}-queries`. These packs contain the standard queries that will be run for each analysis.
  * Library packs for each supported language, for example, `codeql/{language}-all`. These packs contain query libraries, such as control flow and data flow libraries, that may be useful to query writers.
  * Example packs for each supported language, for example, `codeql/{language}-examples`. These packs contain useful snippets of CodeQL that query writers may find useful.
  * Legacy packs that ensure custom queries and libraries created using older products are compatible with your version of CodeQL.
