# Creating and working with CodeQL packs

## About CodeQL packs and the CodeQL CLI



> [!NOTE]
> This article describes the features available with the CodeQL CLI 2.20.7{% elsif ghes < 3.19 %}2.21.4{% elsif ghes < 3.20 %}2.22.4{% elsif ghes < 3.21 %}2.23.9{% elsif ghes < 3.22 %}2.24.3 bundle included in the initial release of GitHub Enterprise Server {{ allVersions[currentVersion].currentRelease }}.
>
> If your site administrator has updated your CodeQL CLI version to a newer release, please see the [GitHub Enterprise Cloud version](/enterprise-cloud@latest/{{ currentArticle }}) of this article for information on the latest features.




CodeQL packs are used to create, share, depend on, and run CodeQL queries and libraries.

You can use the `pack` command in the CodeQL CLI to create CodeQL packs, add dependencies to packs, and install or update dependencies. You can also publish and download CodeQL packs using the `pack` command.

## Creating a CodeQL pack

You can create a CodeQL pack by running the following command from the checkout root of your project:

```shell
codeql pack init <scope>/<pack>
```

You must specify:

* `<scope>`: the name of the GitHub organization or user account that you will publish to.

* `<pack>`: the name for the pack that you are creating.

The `codeql pack init` command creates the directory structure and configuration files for a CodeQL pack. By default, the command creates a query pack. If you want to create a library pack, you must edit the `qlpack.yml` file to explicitly declare the file as a library pack by including the `library:true` property.

## Creating a CodeQL model pack


> [!NOTE]
> CodeQL model packs are currently in public preview and subject to change. Model packs are supported for C/C++, C#, Java/Kotlin, Python, Ruby, and Rust analysis.
>
> The CodeQL model editor in the CodeQL extension for Visual Studio Code supports modeling dependencies for C#, Java/Kotlin, Python, and Ruby.


Model packs can be used to expand code scanning analysis to recognize libraries and frameworks that are not supported by default. Model packs use data extensions, which are implemented as YAML and describe how to add data for new dependencies. When a model pack is specified, the data extensions in that pack will be added to the code scanning analysis automatically. For more information about CodeQL model packs and data extensions, see [Use The Model Editor](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-vs-code/use-the-model-editor).

A model pack is a CodeQL pack with the following characteristics in the `qlpack.yml` file:

* It defines `library: true`.
* It has no dependencies.
* It has one or more `extensionTargets`.
* It has a `dataExtensions` property that points to one or more data extension files.

A model pack will inject its specified data extensions into each query pack that is named in `extensionTargets`, if it falls within the specified version range. For example:

```yaml
name: my-repo/my-java-model-pack
version: 1.2.3
extensionTargets:
  codeql/java-all: ~1.2.3
  codeql/util: ~4.5.6
dataExtensions:
  - models/**/*.yml
```

In this example, the model pack will inject all the data extensions in `models/**/` into a `codeql/java-all` query pack that is at a version from `1.2.3` up to and including `1.3.0`, and a `codeql/util` query pack that is at a version from `4.5.6` up to and including `4.6.0`. For more information, see [Using semantic versioning](https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept) in the npm documentation and the [Semantic versioning specification](https://semver.org/).

Once you've created a model pack, you can publish it in the same way as other CodeQL packs. For more information, see [Publish And Use Packs](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-the-command-line/publish-and-use-packs). You can then use published model packs in a code scanning analysis with the `--model-packs` option. For more information, see [Customize Analysis](https://docs.github.com/en/code-security/tutorials/customize-code-scanning/customize-analysis#using-model-packs-to-analyze-calls-to-custom-dependencies).

## Adding and installing dependencies on a CodeQL pack

> [!NOTE]
> This is only supported for CodeQL query and library packs.

You can add dependencies on CodeQL packs using the command `codeql pack add`. You must specify the scope, name, and (optionally) a compatible version range.

```shell
codeql pack add <scope>/<name>@x.x.x <scope>/<other-name>
```

If you don’t specify a version range, the latest version will be added. Otherwise, the latest version that satisfies the requested range will be added.

This command updates the `qlpack.yml` file with the requested dependencies and downloads them into the package cache. Please note that this command will reformat the file and remove all comments.

You can also manually edit the `qlpack.yml` file to include dependencies and install the dependencies with the command:

```shell
codeql pack install
```

This command downloads all dependencies to the shared cache on the local disk.

> [!NOTE]
> * Running the `codeql pack add` and `codeql pack install` commands will generate or update the `codeql-pack.lock.yml` file. This file should be checked-in to version control. The `codeql-pack.lock.yml` file contains the precise version numbers used by the pack. For more information, see [About codeql-pack.lock.yml files](/code-security/reference/code-scanning/codeql/codeql-cli/codeql-query-packs#codeql-packlockyml-files).
> * By default `codeql pack install` will install dependencies from the Container registry on GitHub.com. You can install dependencies from a GitHub Enterprise Server Container registry by creating a `qlconfig.yml` file. For more information, see [Publish And Use Packs](https://docs.github.com/en/enterprise-server@latest/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-the-command-line/publish-and-use-packs) in the GitHub Enterprise Server documentation.

## Organizing a CodeQL pack's directory structure

A CodeQL pack must contain a file called `qlpack.yml` in its root directory. In the `qlpack.yml` file, the `name:` field must have a value that follows the format of `<scope>/<pack>`, where `<scope>` is the GitHub organization or user account that the pack will be published to and `<pack>` is the name of the pack.

Additionally, query packs and library packs with CodeQL tests contain a `codeql-pack.lock.yml` file that contains the resolved dependencies of the pack. This file is generated during a call to the `codeql pack install` command, is not meant to be edited by hand, and should be added to your version control system.

The other files and directories within the pack should be logically organized. For example, typically:

* Queries are organized into directories for specific categories.
* Queries for specific products, libraries, and frameworks are organized into
their own top-level directories.

## Customizing a downloaded CodeQL pack

The recommended way to experiment with changes to a pack is to clone the repository containing its source code.

If no source repository is available and you need to base modifications on a pack downloaded from the Container registry, be aware that these packs are not intended to be modified or customized after downloading, and their format may change in the future without much notice. We recommend taking the following steps after downloading a pack if you need to modify the content:

* Change the pack _name_ in `qlpack.yml` so you avoid confusion with results from the unmodified pack.

* Remove all files named `*.qlx` anywhere in the unpacked directory structure. These files contain precompiled versions of the queries, and in some situations CodeQL will use them in preference to the QL source you have modified.
