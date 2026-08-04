# CodeQL workspaces

## About CodeQL workspaces



> [!NOTE]
> This article describes the features available with the version of the CodeQL action and associated CodeQL CLI bundle included in the initial release of this version of GitHub Enterprise Server. If your enterprise uses a more recent version of the CodeQL action, see the [GitHub Enterprise Cloud version](/enterprise-cloud@latest/{{ currentArticle }}) of this article for information on the latest features.
For information on using the latest version, see [Configuring Code Scanning For Your Appliance](https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access).




A CodeQL workspace is typically used to develop a set of library and query packs that depend on each other. When you use a CodeQL workspace, all the CodeQL packs in the workspace are available as _source dependencies_ for each other when you run a CodeQL command that resolves queries. This makes it easier to develop, maintain, and publish multiple, related CodeQL packs. For more information on CodeQL packs, see [Customize Analysis](https://docs.github.com/en/code-security/tutorials/customize-code-scanning/customize-analysis).

Workspaces are commonly stored in a single Git repository so that related packs can be developed and published together.

## Source dependencies

In a CodeQL workspace, all packs included in the workspace are treated as **source dependencies** of each other. This means they are resolved directly from the local file system rather than from the CodeQL package cache.

Because workspace packs resolve from source:

* Local changes in one pack are immediately visible to other packs in the workspace.
* Dependencies found in the workspace override versions in the package cache.
* Version constraints in `qlpack.yml` files are ignored for workspace dependencies, since the version is determined by the workspace content.

This behavior is particularly useful when developing multiple related packs at the same time. For example:

* A dependency has not yet been published and exists only locally.
* You are making coordinated changes across several packs and need them to resolve against each other during testing.

Outside of a workspace, dependencies are resolved from the package cache and must match the version constraints defined in `qlpack.yml`. Inside a workspace, resolution prioritizes local source content instead.

## CodeQL workspaces and query resolution

The workspace dependency model affects how packs are installed and published.

* During installation, dependencies found in the workspace are not downloaded into the package cache and are not written to the `codeql-pack.lock.yml` file.
* During publishing, dependencies provided by the workspace are bundled using their local source content rather than versions from the package cache.

For example, running `codeql pack install` in a pack directory within a workspace uses any dependencies found in the workspace instead of downloading them into the package cache or recording them in the `codeql-pack.lock.yml` file. See [Create And Work With Codeql Packs](https://docs.github.com/en/code-security/tutorials/customize-code-scanning/create-and-work-with-codeql-packs#adding-and-installing-dependencies-on-a-codeql-pack).

### Example

A CodeQL workspace is defined by a YAML file named `codeql-workspace.yml`. Consider the following `codeql-workspace.yml` file:

```yaml
provide:
  - "**/qlpack.yml"
```

And the following CodeQL library pack `qlpack.yml` file in the workspace:

```yaml
name: my-company/my-library
library: true
version: 1.0.0
```

And the following CodeQL query pack `qlpack.yml` file in the workspace:

```yaml
name: my-company/my-queries
version: 1.0.0
dependencies:
  my-company/my-library: "*"
  codeql/cpp-all: ~0.2.0
```

Notice that the `dependencies` block for the CodeQL query pack, `my-company/my-queries`, specifies `"*"` as the version of the library pack. Since the library pack is already defined as a source dependency in `codeql-workspace.yml`, the library pack’s content is always resolved from inside the workspace. Any version constraint you define will be ignored in this case. Using `"*"` for source dependencies makes it explicit that the version is inherited from the workspace.

When you execute `codeql pack install` from the query pack directory, an appropriate version of `codeql/cpp-all` is downloaded to the local package cache. Also, a `codeql-pack.lock.yml` file is created that contains the resolved version of `codeql/cpp-all`. The lock file won’t contain an entry for `my-company/my-library` since it is resolved from source dependencies. The `codeql-pack.lock.yml` file will look something like this:

```yaml
dependencies:
  codeql/cpp-all:
    version: 0.2.2
```

When you execute `codeql pack publish` from the query pack directory, the `codeql/cpp-all` dependency from the package cache and the `my-company/my-library` from the workspace are bundled with `my-company/my-queries` and published to the GitHub container registry.

## Example of a `codeql-workspace.yml` file

A CodeQL workspace is defined by a YAML file named `codeql-workspace.yml`. This file contains a `provide` block, and optionally `ignore` and `registries` blocks.

* The `provide` block contains a list of glob patterns that define the CodeQL packs that are available in the workspace.

* The `ignore` block contains a list of glob patterns that define CodeQL packs that are not available in the workspace.

* The `registries` block contains a list of GHES URLs and package patterns that control which container registry is used for publishing CodeQL packs. See [Publish And Use Packs](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-the-command-line/publish-and-use-packs).

Each entry in the `provide` or `ignore` section must map to the location of a `qlpack.yml` file. All glob patterns are defined relative to the directory that contains the workspace file. For a list of patterns accepted in this file, see [@actions/glob](https://github.com/actions/toolkit/tree/main/packages/glob#patterns).

For example, the following `codeql-workspace.yml` file defines a workspace that contains all the CodeQL packs recursively found in the `codeql-packs` directory, except for the packs in the `experimental` directory. The `registries` block specifies that `codeql/\*` packs should be downloaded from `https://ghcr.io/v2/`, which is GitHub’s default container registry. All other packs should be downloaded from and published to the registry at `GHE_HOSTNAME`.

```yaml
provide:
  - "*/codeql-packs/**/qlpack.yml"
ignore:
  - "*/codeql-packs/**/experimental/**/qlpack.yml"

registries:
 - packages: 'codeql/*'
   url: https://ghcr.io/v2/

 - packages: '*'
   url: https://containers.GHE_HOSTNAME/v2/
```

You can list the packs included in a workspace by running `codeql pack ls` in the workspace directory.

## Using `${workspace}` as a version range in `qlpack.yml` files

CodeQL packs in a workspace can use the special `${workspace}`, `~${workspace}`, and `^${workspace}` version range placeholders. These placeholders indicate that this pack depends on the version of the specified pack that is currently in the workspace. This placeholder is typically used for dependencies inside of library packs to ensure that when they are published, the dependencies in their `qlpack.yml` file reflect the state of the workspace when they were published.

### Example

Consider the following two library packs in the same workspace:

```yaml
name: my-company/my-library
library: true
version: 1.2.3
dependencies:
  my-company/my-library2: ${workspace}
```

```yaml
name: my-company/my-library2
library: true
version: 4.5.6
```

When `my-company/my-library` is published to the GitHub container registry, the version of the `my-company/my-library2` dependency in the published `qlpack.yml` file will be written as `4.5.6`.

Similarly, if the dependency is `my-company/my-library2: ^${workspace}` in the source pack, and then the pack is published, the version of the `my-company/my-library2` dependency in the published `qlpack.yml` file will be written as `^4.5.6`, indicating that versions `>= 4.5.6` and `< 5.0.0` are all compatible with this library pack.

If the dependency is `my-company/my-library2: ~${workspace}` in the source pack, and then the pack is published, the version of the `my-company/my-library2` dependency in the published `qlpack.yml` file will be written as `~4.5.6`, indicating that versions `>= 4.5.6` and `< 4.6.0` are all compatible with this library pack.
