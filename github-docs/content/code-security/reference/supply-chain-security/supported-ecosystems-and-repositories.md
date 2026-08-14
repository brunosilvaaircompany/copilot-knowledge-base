# Dependabot supported ecosystems and repositories

This article provides reference information about the package ecosystems and repository types that Dependabot supports.

Dependabot is a GitHub tool that helps keep your dependencies secure and up to date. It automatically detects vulnerable or outdated dependencies in your repositories and creates pull requests to update them, making it easier to maintain your software supply chain security. For more information, see [Dependabot Quickstart](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/dependabot-quickstart).

## Supported ecosystems maintained by GitHub


You can configure updates for repositories that contain a dependency manifest or lock file for one of the supported package managers. For some package managers, you can also configure vendoring for dependencies. For more information, see [`vendor`](/code-security/reference/supply-chain-security/dependabot-options-reference#vendor--).
Dependabot also supports dependencies in private registries. For more information, see [Configure Access To Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries).


> [!NOTE]
> To ensure that GitHub Enterprise Server supports Dependabot updates for the latest supported ecosystem versions, your enterprise owner must download the most recent version of the [Dependabot action](https://github.com/github/dependabot-action). For more information about the action, and for instructions about how to download the most recent version, see [Using The Latest Version Of The Official Bundled Actions](https://docs.github.com/en/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/using-the-latest-version-of-the-official-bundled-actions).




> [!NOTE]
> * When running security or version updates, some ecosystems must be able to resolve all dependencies from their source to verify that updates have been successful. If your manifest or lock files contain any private dependencies, Dependabot must be able to access the location at which those dependencies are hosted. Organization owners can grant Dependabot access to private repositories containing dependencies for a project within the same organization. For more information, see [Managing Security And Analysis Settings For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-or-internal-dependencies). You can configure access to private registries in a repository's `dependabot.yml` configuration file. For more information, see [Configure Access To Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries).

> * Dependabot doesn't support private GitHub dependencies for all package managers. See the details in the table below.

If your repository already uses an integration for dependency management, you will need to disable this before enabling Dependabot. For more information, see [About Integrations](https://docs.github.com/en/integrations/concepts/about-integrations).



Package manager | YAML value      | Supported versions | Version updates | Security updates | Private repositories | Private registries | Vendoring |
---------------|------------------|------------------|:---:|:---:|:---:|:---:|:---:|
|  |
Bazel | `bazel`         | v7, v8, v9              | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
|  |
[Bun](#bun) | `bun`         | >=v1.1.39               | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
Bundler | `bundler` | v2 | {% octicon "check" aria-label="Supported" %}| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
[Cargo](#cargo)          | `cargo`          | v1               | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
Composer       | `composer`       | v2         | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
|  |
[Conda](#conda) | `conda` | Not applicable | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
|  |
|  |
[Deno](#deno) | `deno` | >=v2 | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
|  |
[Dev containers](#dev-containers) | `devcontainers`         | Not applicable               | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
[Docker](#docker)    | `docker`         | v1               | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | Not applicable |
[Docker Compose](#docker-compose)    | `docker-compose`         | v2, v3              | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | Not applicable |
.NET SDK       | `dotnet-sdk`         | >=.NET Core 3.1           | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | Not applicable | Not applicable | Not applicable |
[Helm Charts](#helm-charts)    | `helm`         | v3 | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | Not applicable |
Hex            | `mix`            | v1               | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
|  |
[Julia](#julia) | `julia`         | >=v1.10              | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
|  |
elm-package    | `elm`            | v0.19            | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
git submodule  | `gitsubmodule`   | Not applicable | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | Not applicable |
[GitHub Actions](#github-actions)   | `github-actions` | Not applicable | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | Not applicable |
Go modules     | `gomod`          | v1               | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |
[Gradle](#gradle)         | `gradle`         | Not applicable   | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
[Maven](#maven)       | `maven`          | Not applicable   | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
|  |
[Nix](#nix)    | `nix`         | Not applicable               | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | Not applicable | Not applicable |
|  |
npm            | `npm`            | v7, v8, v9, v10, v11   | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
[NuGet](#nuget-cli)          | `nuget`          | <=6.12.0 | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
|  |
[OpenTofu](#opentofu)    | `opentofu`      | Not applicable  | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | Not applicable |
|  |
[pip](#pip-and-pip-compile) | `pip` | 26.1.1        | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
pipenv                      | `pip` | 2024.4.1 | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
[pip-compile](#pip-and-pip-compile) | `pip`            | 7.5.3            | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| pnpm   | `npm`            | v7, v8, v9, v10      | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
[poetry](#poetry)           | `pip` | v2       | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
|  |
[pre-commit](#pre-commit) | `pre-commit` | Not applicable | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
|  |
[pub](#pub)           | `pub`            | v2  | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
|  |
[Rust toolchain](#rust-toolchain) | `rust-toolchain` | Not applicable | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | Not applicable   | Not applicable   |
|  |
|  |
[sbt](#sbt) | `sbt` | Not applicable | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
|  |
[Swift](#swift)      | `swift`      | v5, v6  | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} (git only) | {% octicon "x" aria-label="Not supported" %} |
[Terraform](#terraform)      | `terraform`      | >= 0.13, <= 1.15.x  | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | Not applicable |
|  |
uv        | `uv`            | v0               | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | Not applicable |
| {% elsif dependabot-uv-support %} |
uv        | `uv`            | v0               | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | Not applicable |
|  |
|  |
[vcpkg](#vcpkg) | `vcpkg`          | Not applicable   | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | Not applicable |
|  |
[yarn](#yarn)           | `npm`            | v1, v2, v3, v4       | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %}|

> [!TIP]
> For package managers such as `pipenv` and `poetry`, you need to use the `pip` YAML value. For example, if you use `poetry` to manage your Python dependencies and want Dependabot to monitor your dependency manifest file for new versions, use `package-ecosystem: "pip"` in your `dependabot.yml` file.

For further information about ecosystem support for Dependabot security updates, see also [Dependency Graph Supported Package Ecosystems](https://docs.github.com/en/code-security/reference/supply-chain-security/dependency-graph-supported-package-ecosystems).

### Bun

Dependabot supports the current default text-based `bun.lock` file, but not the legacy binary `bun.lockb` file. The `bun.lock` file is supported in version 1.1.39 and above. For more information, see [Lockfile](https://bun.sh/docs/install/lockfile) in the Bun documentation.

### Cargo

Private registry support includes cargo registries, so you can use Dependabot to keep your Rust dependencies up-to-date. For more information, see [Configure Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-private-registries#cargo).



### Conda

Dependabot support for Conda does **not include private registries, vendoring, or lock file updates**.





### Deno

Dependabot can update dependencies in `deno.json` and `deno.jsonc` configuration files. Deno projects can use dependencies from [JSR](https://jsr.io/) (the JavaScript Registry) or from the npm registry.

Dependabot support for Deno does **not include private registries or vendoring**.



### Dev containers

You can use `devcontainers` as a `package-ecosystem` in your `dependabot.yml` file to update Features in your `devcontainer.json` configuration files. For more information about this support, and for configuration file examples, see [General Availability of Dependabot Integration](https://containers.dev/guide/dependabot) in the Development Containers documentation.

Dev containers are used in several tools and services, including Codespaces. For more information about Features and the supported services, see [Features](https://containers.dev/implementors/features/) and [Supporting tools and services](https://containers.dev/supporting) in the Development Containers documentation, respectively.

This updater ensures Features are pinned to the latest `major` version in the associated `devcontainer.json` file. If a dev container has a lockfile, that file will also be updated. For more information about lockfile specifications, see [Lockfiles](https://github.com/devcontainers/spec/blob/main/docs/specs/devcontainer-lockfile.md) in the `devcontainers/spec` repository.

Features in any valid dev container location will be updated in a single pull request. For more information about the dev container specification, see [Specification](https://containers.dev/implementors/spec/#devcontainerjson) in the Development Containers documentation.

### Docker

Dependabot can add metadata from Docker images to pull requests for version updates. The metadata includes release notes, changelogs and the commit history. Repository administrators can use the metadata to quickly evaluate the stability risk of the dependency update.

In order for Dependabot to fetch Docker metadata, maintainers of Docker images must add the `org.opencontainers.image.source` label to their Dockerfile, and include the URL of the source repository. Additionally, maintainers must tag the repository with the same tags as the published Docker images. For an example, see the [`dependabot-fixtures/docker-with-source`](https://github.com/dependabot-fixtures/docker-with-source) repository. For more information on Docker labels, see [Extension image labels](https://docs.docker.com/desktop/extensions-sdk/extensions/labels/) and [BUILDX_GIT_LABELS](https://docs.docker.com/build/building/env-vars/#buildx_git_labels) in the Docker documentation.

Dependabot can update Docker image tags in Kubernetes manifests. Add an entry to the Docker `package-ecosystem` element of your `dependabot.yml` file for each directory containing a Kubernetes manifest which references Docker image tags. Kubernetes manifests can be Kubernetes Deployment YAML files or Helm charts. For information about configuring your `dependabot.yml` file for `docker`, see "`package-ecosystem`" in [Dependabot Options Reference](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference#package-ecosystem-).

Dependabot supports both public and private Docker registries. For a list of the supported registries, see "`docker-registry`" in [Configure Access To Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries#docker-registry).

Dependabot parses Docker image tags for Semantic Versioning ([SemVer](https://semver.org/)). If Dependabot detects a tag with a pre-release, then it will only suggest an update to the latest version with a matching pre-release, and it will not suggest a newer version that use a different pre-release label. For more information, see the `dependabot-docker` [README.md](https://github.com/dependabot/dependabot-core/blob/main/docker/README.md) file in the `dependabot/dependabot-core` repository.

### Docker Compose

Dependabot supports Docker Compose in a similar way to Docker. For more information, see [Docker](#docker).

### GitHub Actions

Dependabot supports version updates for GitHub Actions with the following caveats.

* Dependabot only supports updates to GitHub Actions using the GitHub repository syntax, such as `actions/checkout@v6
` or `actions/checkout@<commit>` . Dependabot will ignore actions or reusable workflows referenced locally (for example, `./.github/actions/foo.yml`).
* Dependabot updates the version documentation of GitHub Actions when the comment is on the same line, such as `actions/checkout@<commit> #<tag or link>` or `actions/checkout@<tag> #<tag or link>`.
* If the commit you use is not associated with any tag, Dependabot will update the GitHub Actions to the latest commit (which might differ from the latest release).
* Docker Hub and GitHub Packages Container registry URLs are currently not supported. For example, references to Docker container actions using `docker://` syntax aren't supported.
* Dependabot supports both public and private repositories for GitHub Actions. For private registry configuration options, see "`git`" in [Configure Access To Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries#git).


For more information about using Dependabot version updates with GitHub Actions, see [Secure Use](https://docs.github.com/en/actions/reference/security/secure-use#keeping-the-actions-in-your-workflows-secure-and-up-to-date).

### Gradle

Dependabot supports updates to the following files without needing to run Gradle:

* `build.gradle`, `build.gradle.kts` (for Kotlin projects)
* `gradle/libs.versions.toml` (for projects using a standard Gradle version catalog)
* `gradle.lockfile` (for projects using Gradle dependency locking)
* Files included via the `apply` declaration that have `dependencies` in the filename. Note that `apply` does not support `apply to`, recursion, or advanced syntaxes (for example, Kotlin's `apply` with `mapOf`, filenames defined by property).

To update the Gradle Wrapper, Dependabot runs Gradle and updates:

* `gradle/wrapper/gradle-wrapper.properties`
* `gradlew`
* `gradlew.bat`
* `gradle/wrapper/gradle-wrapper.jar`

Dependabot uses information from the `pom.xml` file of dependencies to add links to release information in update pull requests. If the information is omitted from the `pom.xml` file, then it cannot be included in Dependabot pull requests, see [Java Package Metadata Dependabot](https://docs.github.com/en/code-security/reference/supply-chain-security/java-package-metadata-dependabot).

For Dependabot security updates, Gradle support is limited to manual uploads of the dependency graph data using the dependency submission API. For more information about the dependency submission API, see [Use Dependency Submission API](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/use-dependency-submission-api).

> [!NOTE]
>
> * When you upload Gradle dependencies to the dependency graph using the dependency submission API, all project dependencies are uploaded, even transitive dependencies that aren't explicitly mentioned in any dependency file. When an alert is detected in a transitive dependency, Dependabot isn't able to find the vulnerable dependency in the repository, and therefore won't create a security update for that alert.
> * Dependabot version updates will, however, create pull requests when the parent dependency is explicitly declared as a direct dependency in the project's manifest file.

### Helm Charts

Dependabot supports using a username and password for registries. For more information, see [Configure Access To Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries#helm-registry).

The `helm-registry` type only supports HTTP Basic Auth and does not support OCI-compliant registries. If you need to access an OCI-compliant registry for Helm charts, configure a `docker-registry` instead. For more information, see [Configure Access To Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries#docker-registry).

When configuring Dependabot for Helm charts, it will also automatically update the Docker images referenced within those charts, ensuring that both the chart versions and their contained images stay up to date.

### Maven

Dependabot doesn't run Maven but supports updates to `pom.xml` files.

Dependabot uses information from the `pom.xml` file of dependencies to add links to release information in update pull requests. If the information is omitted from the `pom.xml` file, then it cannot be included in Dependabot pull requests, see [Java Package Metadata Dependabot](https://docs.github.com/en/code-security/reference/supply-chain-security/java-package-metadata-dependabot).



### Nix

Dependabot monitors your `flake.lock` file and opens pull requests when newer commits are available upstream for your flake inputs. GitHub, GitLab, SourceHut, and plain Git inputs are all supported. Updating pinned refs inside `flake.nix` itself (for example, changing `github:cachix/devenv/v0.5` to a newer tag) is not supported.

Dependabot does not currently support private repositories for the `nix` ecosystem.



### NuGet CLI

Dependabot doesn't run the NuGet CLI but does support most features up until version 6.8.0.

### pip and pip-compile

Dependabot supports updates to any `.txt` file.

In addition, Dependabot supports updates to `pyproject.toml` files if they follow the PEP 621 standard.

### poetry

Dependabot supports Poetry v2.



### pre-commit

Dependabot can update hook revisions in `.pre-commit-config.yaml` files. When a hook pins a specific commit SHA, Dependabot resolves the latest matching tag and updates the `rev` value accordingly.

You can use a `# frozen:` comment after the `rev` value to pin a hook to a particular version or version prefix. Dependabot uses this comment to determine whether an update is needed and which tag to resolve.

| Scenario | Behavior |
|---|---|
| `rev: <sha>  # frozen: 7.3.0` and 7.3.0 is the latest version | No update. The dependency is already current. |
| `rev: <sha>  # frozen: 7.3.0` and 8.0.0 has been released | Updated to the SHA for the `8.0.0` tag. The comment is updated to `# frozen: 8.0.0`. |
| `rev: <sha>  # frozen: v1` and `v1.43.5` is the latest `v1.x` release | Updated to the SHA for the `v1.43.5` tag. The comment is updated to `# frozen: v1.43.5`. |
| `rev: <sha>` with no `# frozen:` comment | Updated to the HEAD SHA of the default branch. |

In addition to updating hook revisions, Dependabot can update `additional_dependencies` for hooks that use the following languages: Python, Node, Go, Rust, Ruby and Dart.

Private registry support uses git registries. You can configure access for private git repositories by specifying a git registry in your `dependabot.yml` file. For more information, see [Configure Access To Private Registries](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries#git).

> [!NOTE]
> Private registries are not supported for `additional_dependencies`.





### Rust toolchain

Dependabot supports automatic updates for Rust toolchain versions defined in `rust-toolchain.toml` and `rust-toolchain` files.

Supported update patterns Dependabot can update:

* Versioned toolchains such as `channel = "1.xx.yy"` and `channel = "1.xx"`.
* Dated toolchains such as `channel = "nightly-YYYY-MM-DD"` and `channel = "beta-YYYY-MM-DD"`.





### sbt

Dependabot supports updates to sbt dependency files. sbt resolves artifacts from Maven repositories and uses the same version ordering as Maven.

The following manifest files are supported:

* `build.sbt` (root): fetched as a required file.
* `project/plugins.sbt`: fetched if present.
* `project/build.properties`: fetched if present.
* `project/*.scala`: all `.scala` files in the `project/` directory.
* `{subdir}/build.sbt`: scans root-level subdirectories (excluding `project/`, `target/`, `.git`, `.github`).



### Swift

Private registry support applies to git registries only. Swift registries are not supported. Non-declarative manifests are not supported. For more information on non-declarative manifests, see [Editing Non-Declarative Manifests](https://github.com/apple/swift-evolution/blob/7003da1439ad60896ec14657dfce829f04b0632c/proposals/0301-package-editing-commands.md#editing-non-declarative-manifests) in the Swift Evolution documentation.

### Terraform

Terraform support includes:

* Modules hosted on Terraform Registry or a publicly reachable Git repository.
* Terraform providers.
* Private Terraform Registry. You can configure access for private git repositories by specifying a git registry in your `dependabot.yml` file. For more information, see [`git`](/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries#git).



### vcpkg

vcpkg support includes updating the `builtin-baseline` commit SHA from the vcpkg ports repository in your `vcpkg.json` manifest file. For more information visit the [`microsoft/vcpkg` repository](https://github.com/microsoft/vcpkg) on  GitHub.com and see [What is manifest mode?](https://learn.microsoft.com/vcpkg/concepts/manifest-mode) in the Microsoft documentation.



### yarn

Dependabot supports vendored dependencies for v2 onwards.



## Supported community-maintained ecosystems

The following ecosystems are maintained by their upstream community maintainers. GitHub integrates Dependabot with these ecosystems but does not maintain them directly.
 

* [Julia](#julia) - Maintained by the Julia community
* [OpenTofu](#opentofu) - Maintained by the OpenTofu community
* [Pub](#pub) - Maintained by The Dart Community



### Julia

Dependabot supports Julia projects that include `Project.toml`/`Manifest.toml` files. Dependabot uses Julia's package manager to resolve and update dependencies.





### OpenTofu

Dependabot supports updating OpenTofu modules and providers in `.tf` and `.tofu` configuration files, including `terragrunt.hcl` files. If the `.terraform.lock.hcl` lockfile for provider checksums is present, Dependabot will also update it.





### Pub

Dependabot won't perform an update for `pub` when the version that it tries to update to is ignored, even if an earlier version is available.

You can use Dependabot to keep Dart dependencies up-to-date if you use private hosted pub repositories. For information about allowing Dependabot to access private GitHub dependencies, see [Allowing Dependabot to access private dependencies](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-or-internal-dependencies).
