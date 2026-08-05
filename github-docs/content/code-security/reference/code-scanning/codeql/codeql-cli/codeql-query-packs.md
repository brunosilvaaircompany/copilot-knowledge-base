# CodeQL query packs reference

## CodeQL pack compatibility

When a query pack is published, it includes pre-compiled representations of all the queries in it to increase analysis speed. However, if the version of CodeQL that performs the analysis is over 6 months newer than the the version that ran `codeql pack publish`, it may be necessary to compile the queries from source during analysis, slowing the process significantly.

A pack published by the _latest_ public release of CodeQL will be useable by the version of CodeQL that is used by code scanning and GitHub Actions, even though that is often a slightly older release.

If your analysis contains lines like the following, then CodeQL is successfully using precompiled queries:

```shell
[42/108] Loaded /long/path/to/query/Filename.qlx.
```

If your analysis instead contains lines that look like the following, then CodeQL manually recompiled the queries from source:

```shell
Compiling query plan for /long/path/to/query/Filename.ql.
[42/108 comp 25s] Compiled /long/path/to/query/Filename.ql.
```

To help users of your query pack benefit from pre-compiled queries, we recommend using a recent release of CodeQL to publish your packs. Additionally, you should publish a fresh version of your pack with an updated CodeQL version every 6 months.

If you publish query packs with the intention of using them on a GitHub Enterprise Server installation that uses its bundled CodeQL binaries, use the same CodeQL version to run `codeql pack publish`.

## `qlpack.yml` files

When executing query-related commands, CodeQL first looks in siblings of the installation directory (and their subdirectories) for `qlpack.yml` files, then checks the package cache for downloaded CodeQL packs. This means that when your local packages in the installation directory override packages of the same name in the package cache, so you can test your local changes.

The metadata in each `qlpack.yml` file tells CodeQL how to compile any queries in the pack, what libraries the pack depends on, and where to
find query suite definitions.

The contents of the CodeQL pack (queries or libraries used in CodeQL analysis) is included in the same directory as `qlpack.yml`, or its subdirectories.

The directory containing the `qlpack.yml` file serves as the root directory for the content of the CodeQL pack. That is, for all `.ql` and `.qll` files in the pack, CodeQL will resolve all import statements relative to the directory containing the `qlpack.yml` file at the pack’s root.

### `qlpack.yml` properties

The following properties are supported in `qlpack.yml` files.

#### `name`

* Required by all packs.
* Defines the scope of the pack, where the CodeQL pack is published, and the name of the pack defined using alphanumeric characters and hyphens. It must be unique as CodeQL cannot differentiate between CodeQL packs with identical names. Use the pack name to specify queries to run using `database analyze` and to define dependencies between CodeQL packs (see examples below). For example:

  ```yaml
  name: octo-org/security-queries
  ```

#### `version`

* Required by all packs that are published.
* Defines a semantic version for this CodeQL pack that must adhere to the [SemVer v2.0.0 specification](https://semver.org/spec/v2.0.0.html). For example:

  ```yaml
  version: 0.0.0
  ```

#### `dataExtensions`

* Required by model packs.
* Takes a list of glob patterns that specify where data extension files are located relative to the root of the query pack or library pack.

#### `dependencies`

* Required by query and library packs that define CodeQL package dependencies on other packs. Model packs cannot define any dependencies and use `extensionTargets` instead.
* Defines a map from pack references to the semantic version range that is compatible with this pack. Supported for CodeQL CLI versions v2.6.0 and later. For example:

  ```yaml
  dependencies:
    codeql/cpp-all: ^0.0.2
  ```

  If you are unsure or it does not matter which version should be used, then you can use `"*"`, which indicates that any version of this dependency is compatible with this pack. In practice, this will usually resolve to the highest published version of the dependency.

  There is a special version placeholder, `${workspace}`, which indicates that this CodeQL pack depends on whatever version of the dependency is in the same workspace. For more information, see [Codeql Workspaces](https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-workspaces#using-workspace-as-a-version-range-in-qlpackyml-files).

#### `defaultSuiteFile`

* Required by packs that export a set of default queries to run.
* Defines the path to a query suite file relative to the package root, containing all of the queries that are run by default when this pack is passed to the `codeql database analyze` command. Supported from CLI version v2.6.0 and onwards. Only one of `defaultSuiteFile` or `defaultSuite` can be defined. For example:

  ```yaml
  defaultSuiteFile: cpp-code-scanning.qls
  ```

#### `defaultSuite`

* Required by packs that export a set of default queries to run.
* Defines an inlined query suite containing all of the queries that are run by default when this pack is passed to the `codeql database analyze` command. Supported from CLI version v2.6.0 and onwards. Only one of `defaultSuiteFile` or `defaultSuite` can be defined. For example:

  ```yaml
  defaultSuite:
    queries: .
    exclude:
      precision: medium
  ```

#### `extensionTargets`

* Required by model packs.
* Declares which query packs the extensions in the model pack apply to. The extension pack will inject its data extensions into each pack that is named in the `extensionTargets` dictionary, if the pack falls within the specified version range and it is used in the evaluation.

#### `groups`

* Optional.
* Defines logical groupings of packs in a CodeQL workspace. Using groups is a way to apply pack operations to subsets of packs in a workspace. For example, the following pack is defined to be a part of the `java` and the `experimental` groups:

  ```yaml
  groups:
    - java
    - experimental
  ```

  Running `codeql pack publish --groups java,-experimental` will publish all of the packs in the `java` group, _except_ the `experimental` packs. You can run the `codeql pack ls --groups [-]<group>[,[-]<group>...]` command to list the packs in a workspace that match the specified set of groups.

  A CodeQL pack in the given workspace is included in the list if:

  * It is in at least one of the groups listed without a minus sign (this condition is automatically satisfied if there are no groups listed without a minus sign), and
  * It is not in any group listed with a minus sign.

#### `library`

* Required by library packs.
* Defines a boolean value that indicates whether or not this pack is a library pack. Library packs do not contain queries and are not compiled. Query packs can ignore this field or explicitly set it to `false`. For example:

  ```yaml
  library: true
  ```

#### `suites`

* Optional for packs that define query suites. This allows users to run query suites stored in the specified directory by specifying the pack name, without providing the full path.
* Currently supported only for the standard query packs included in CodeQL CLI bundle.
* This option is not supported for CodeQL packs downloaded from the GitHub container registry.

#### `tests`

* Optional for packs containing CodeQL tests. Ignored for packs without tests.
* Defines the path to a directory within the pack that contains tests, defined relative to the pack directory. Use `.` to specify the whole pack. Any queries in this directory are run as tests when `test run` is run with the `--strict-test-discovery` option. These queries are ignored by query suite definitions that use `queries` or `qlpack` instructions to ask for all queries in a particular pack. If this property is missing, then `.` is assumed. For example:

  ```yaml
  tests: .
  ```

#### `extractor`

* Required by all packs containing CodeQL tests.
* Defines the CodeQL language extractor to use when running the CodeQL tests in the pack. For more information about testing queries, see [Test Custom Queries](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-the-command-line/test-custom-queries). For example:

  ```yaml
  extractor: javascript-typescript
  ```

#### `authors`

* Optional.
* Defines metadata that will be displayed on the packaging search page in the packages section of the account that the CodeQL pack is published to. For example:

  ```yaml
  authors: author1@github.com,author2@github.com
  ```

#### `license`

* Optional.
* Defines metadata that will be displayed on the packaging search page in the packages section of the account that the CodeQL pack is published to. For a list of allowed licenses, see [SPDX License List](https://spdx.org/licenses/) in the SPDX Specification. For example:

  ```yaml
  license: MIT
  ```

#### `description`

* Optional.
* Defines metadata that will be displayed on the packaging search page in the packages section of the account that the CodeQL pack is published to. For example:

  ```yaml
  description: Human-readable description of the contents of the CodeQL pack.
  ```

#### `libraryPathDependencies`

* Optional, closing down. Use the `dependencies` property instead.
* Previously used to define the names of any CodeQL packs that this CodeQL pack depends on, as an array. This gives the pack access to any libraries, database schema, and query suites defined in the dependency. For example:

  ```yaml
  libraryPathDependencies: codeql/javascript-all
  ```

#### `dbscheme`

* Required by core language packs only.
* Defines the path to the [database schema](https://codeql.github.com/docs/codeql-overview/codeql-glossary/#codeql-database-schema) for all libraries and queries written for this CodeQL language (see example below). For example:

  ```yaml
  dbscheme: semmlecode.python.dbscheme
  ```

#### `upgrades`

* Required by core language packs only.
* Defines the path to a directory within the pack that contains database upgrade scripts, defined relative to the pack directory. Database upgrades are used internally to ensure that a database created with a different version of the CodeQL CLI is compatible with the current version of the CLI. For example:

  ```yaml
  upgrades: .
  ```

#### `warnOnImplicitThis`

* Optional. Defaults to `false` if the `warnOnImplicitThis` property is not defined.
* Defines a boolean that specifies whether or not the compiler should emit warnings about member predicate calls with implicit `this` call receivers, that is, without an explicit receiver. Available since CodeQL CLI v2.13.2. For example:

  ```yaml
  warnOnImplicitThis: true
  ```

## `codeql-pack.lock.yml` files

`codeql-pack.lock.yml` files store the versions of the resolved transitive dependencies of a CodeQL pack. This file is created by the `codeql pack install` command if it does not already exist and should be added to your version control system. The `dependencies` section of the `qlpack.yml` file contains version ranges that are compatible with the pack. The `codeql-pack.lock.yml` file locks the versions to precise dependencies. This ensures that running `codeql pack install` on this the pack will always retrieve the same versions of dependencies even if newer compatible versions exist.

For example, if a `qlpack.yml` file contains the following dependencies:

```yaml
dependencies:
  codeql/cpp-all: ^0.1.2
  my-user/my-lib: ^0.2.3
  other-dependency/from-source: "*"
```

The `codeql-pack.lock.yml` file will contain something like the following:

```yaml
dependencies:
  codeql/cpp-all:
    version: 0.1.4
  my-user/my-lib:
    version: 0.2.4
  my-user/transitive-dependency:
    version: 1.2.4
```

The `codeql/cpp-all` dependency is locked to version 0.1.4. The `my-user/my-lib` dependency is locked to version 0.2.4. The `my-user/transitive-dependency`, which is a transitive dependency and is not specified in the `qlpack.yml` file, is locked to version 1.2.4. The `other-dependency/from-source` is absent from the lock file since it is resolved from source. This dependency must be available in the same CodeQL workspace as the pack. For more information about CodeQL workspaces and resolving dependencies from source, see [Codeql Workspaces](https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-workspaces).

In most cases, the `codeql-pack.lock.yml` file is only relevant for query packs since library packs are non-executable and usually do not need their transitive dependencies to be fixed. The exception to this is for library packs that contain tests. In this case, the `codeql-pack.lock.yml` file is used to ensure that the tests are always run with the same versions of dependencies to avoid spurious failures when there are mismatched dependencies.

## Example custom CodeQL packs

You should save files for custom queries and tests in separate packs, and organize custom packs into specific folders for each target language.

### CodeQL packs for custom libraries

A custom CodeQL pack containing custom C++ libraries, with no queries or tests, may have a `qlpack.yml` file containing:

```yaml
name: my-github-user/my-custom-libraries
version: 1.2.3
library: true
dependencies:
  codeql/cpp-all: ^0.1.2
```

where `codeql/cpp-all` is the name of the CodeQL pack for C/C++ analysis included in the CodeQL repository. The version range `^0.1.2` indicates that this pack is compatible with all versions of `codeql/cpp-all` that are greater than or equal to `0.1.2` and less than `0.2.0`. Any CodeQL library file (a file with a `.qll` extension) defined in this pack will be available to queries defined in any query pack that includes this pack in its dependencies block.

The `library` property indicates that this pack is a library pack and does not contain any queries.

### CodeQL packs for custom queries

A custom CodeQL pack containing custom C++ queries and libraries may have a `qlpack.yml` file containing:

```yaml
name: my-github-user/my-custom-queries
version: 1.2.3
dependencies:
  codeql/cpp-all: ^0.1.2
  my-github-user/my-custom-libraries: ^1.2.3
```

where `codeql/cpp-all` is the name of the CodeQL pack for C/C++ analysis included in the CodeQL repository. The version range `^0.1.2` indicates that this pack is compatible with all versions of `codeql/cpp-all` that are greater than or equal to `0.1.2` and less than `0.2.0`. `my-github-user/my-custom-libraries` is the name of a CodeQL pack containing custom CodeQL libraries for C++. Any CodeQL library file (a file with a `.qll` extension) defined in this pack will be available to queries in the `my-github-user/my-custom-queries` pack.

### CodeQL packs for custom tests

For custom CodeQL packs containing test files, you also need to include an
`extractor` property so that the `test run` command knows how to create test
databases. You may also wish to specify the `tests` property.

The following `qlpack.yml` file states that `my-github-user/my-query-tests` depends on `my-github-user/my-custom-queries` at a version greater than or equal to 1.2.3 and less than 2.0.0. It also declares that the CLI should use the Java `extractor` when creating test databases. The `tests: .` line declares that all `.ql` files in the pack should be run as tests when `codeql test run` is run with the `--strict-test-discovery` option. Typically, test packs do not contain a `version` property. This prevents you from accidentally publishing them.

```yaml
name: my-github-user/my-query-tests
dependencies:
  my-github-user/my-custom-queries: ^1.2.3
extractor: java-kotlin
tests: .
```


For more information about running tests, see [Test Custom Queries](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-the-command-line/test-custom-queries).

## Example CodeQL packs in the CodeQL repository

Each of the languages in the CodeQL repository has four main CodeQL packs:

* Core library pack for the language, with the database schema
used by the language, and CodeQL libraries, and queries at `<language>/ql/lib`

* Core query pack for the language that includes the default queries for the language, along
with their query suites at `<language>/ql/src`

* Tests for the core language libraries and queries at `<language>/ql/test`

* Example queries for the language at `<language>/ql/examples`

### Core library pack

Here is an example `qlpack.yml` file for the [C/C++ analysis libraries](https://github.com/github/codeql/blob/main/cpp/ql/lib/qlpack.yml)
core language pack:

```yaml
name: codeql/cpp-all
version: x.y.z-dev
dbscheme: semmlecode.cpp.dbscheme
library: true
upgrades: upgrades
```

Some extra notes on the following properties:

* `library`: Indicates that this is a library pack with no executable queries. It is only meant to be used as a dependency for other packs.

* `dbscheme` and `upgrades`: These properties are internal to the CodeQL CLI and should only be defined in the core CodeQL query pack for a language.

### Core query pack

Here is an example `qlpack.yml` file for [C/C++ analysis queries](https://github.com/github/codeql/blob/main/cpp/ql/src/qlpack.yml)
core query pack:

```yaml
name: codeql/cpp-queries
version: x.y.z-dev
dependencies:
    codeql/cpp-all: "*"
    codeql/suite-helpers: "*"
suites: codeql-suites
defaultSuiteFile: codeql-suites/cpp-code-scanning.qls
```

Some extra notes on the following properties:

* `dependencies`: This query pack depends on `codeql/cpp-all` and `codeql/suite-helpers`. Since these dependencies are resolved from source, it does not matter what version of the CodeQL pack they are compatible with. For more information about resolving dependencies from source, see [Source Dependencies](/code-security/concepts/code-scanning/codeql/codeql-workspaces#source-dependencies).

* `suites`: Indicates the directory containing "well-known" query suites.

* `defaultSuiteFile`: The name of the default query suite file that is used when no query suite is specified.

### Tests for the core CodeQL pack

Here is an example `qlpack.yml` file for [C/C++ analysis tests](https://github.com/github/codeql/blob/main/cpp/ql/src/qlpack.yml)
core test pack:

```yaml
name: codeql/cpp-tests
dependencies:
  codeql/cpp-all: "*"
  codeql/cpp-queries: "*"
extractor: cpp
tests: .
```

Some extra notes on the following properties:

* `dependencies`: This pack depends on the core CodeQL query and library packs for C++.

* `extractor`: This specifies that all the tests will use the same C++ extractor to create the database for the tests.

* `tests`: This specifies the location of the tests. In this case, the tests are in the root folder (and all sub-folders) of the pack.

* `version`: There is no `version` property for the tests pack. This prevents test packs from accidentally being published.
