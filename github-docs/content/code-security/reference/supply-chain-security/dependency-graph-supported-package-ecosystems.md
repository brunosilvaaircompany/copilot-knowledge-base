# Dependency graph supported package ecosystems

## Understanding the table

The dependency graph supports different methods of submitting data for direct and indirect (transitive) dependencies. See [Dependency Graph Data](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph-data).

In the table below:

* The **Static transitive dependencies**, **Dependabot graph jobs** (currently not available for GitHub Enterprise Server), and **Automatic dependency submission** columns show you supported methods for submitting data.
* The **Static transitive dependencies** column also indicates whether static analysis will add `direct` and `transitive` labels for dependent packages in that ecosystem.
* The **Dependabot graph jobs** column indicates whether Dependabot can generate dependency graphs using its own job infrastructure. Where supported, this method takes precedence over automatic dependency submission. See [Dependency Graph Data](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph-data#dependabot-graph-jobs).
* The **Recommended files** column suggests formats that explicitly define which versions are used for all direct and all indirect dependencies. These files lock the package versions to those included in the build and enable Dependabot to find vulnerable versions in both direct and indirect dependencies.

## Supported package ecosystems

| Package manager | Languages | Static transitive dependencies | Dependabot graph jobs | Automatic dependency submission | Recommended files | Additional files |
| --- | --- | --- | --- | --- | --- | --- |
|  |
| Bazel | Starlark | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `MODULE.bazel`, `WORKSPACE` | `MODULE.bazel.lock`, `maven_install.json`, `*.MODULE.bazel` |
|  |
| Cargo | Rust | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `Cargo.lock` | `Cargo.toml` |
| Composer             | PHP           | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `composer.lock` | `composer.json` |
|  |
| Deno | TypeScript, JavaScript | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `deno.lock` | `deno.json`, `deno.jsonc` |
|  |
| NuGet | .NET languages (C#, F#, VB), C++  | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` | `packages.config` |
| GitHub Actions workflows | YAML | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `.yml`, `.yaml` | {% octicon "x" aria-label="None" %} |
| Go modules | Go | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |  `go.mod`| {% octicon "x" aria-label="None" %} |
| Gradle | Java  | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |  {% octicon "x" aria-label="None" %} | {% octicon "x" aria-label="None" %} |
|  |
| Julia | Julia | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `Manifest.toml` | `Project.toml` |
|  |
| Maven | Java, Scala | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | `pom.xml`  | {% octicon "x" aria-label="None" %}  |
| npm | JavaScript | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `package-lock.json` | `package.json`|
|  |
| OpenTofu | HCL | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `.terraform.lock.hcl` | `.tf`, `.tofu` |
|  |
| pip             | Python                    | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | `requirements.txt`, `pipfile.lock` | `pipfile`, `setup.py` |
| pnpm             | JavaScript                    | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `pnpm-lock.yaml` | `package.json` |
| pub             | Dart                    | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `pubspec.lock` | `pubspec.yaml` |
| Poetry | Python                    | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | `poetry.lock` | `pyproject.toml` |
| RubyGems             | Ruby           | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `Gemfile.lock` | `Gemfile`, `*.gemspec` |
| Swift Package Manager | Swift | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `Package.resolved` | {% octicon "x" aria-label="None" %} |
| Yarn | JavaScript | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `yarn.lock` | `package.json` |

> [!NOTE]
> * If you list your Python dependencies within a `setup.py` file, we may not be able to parse and list every dependency in your project.
> * GitHub Actions workflows must be located in the `.github/workflows/` directory of a repository to be recognized as manifests. Any actions or workflows referenced using the syntax `jobs[*].steps[*].uses` or `jobs.<job_id>.uses` will be parsed as dependencies. For more information, see [Workflow Syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax).
> * For GitHub Actions, alerts are only generated for actions that use semantic versioning, not SHA versioning.
 For more information, see [Dependabot Alerts](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts) and [Dependabot Version Updates](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-version-updates).



### Community-maintained ecosystems

The following ecosystems are maintained by their upstream community maintainers. GitHub integrates Dependabot with these ecosystems but does not maintain them directly.


| Ecosystem | Maintained by |
| --- | --- |
| {% ifversion dependabot-julia-support %} |
| Julia | Julia community |
|  |
|  |
| OpenTofu | OpenTofu community |
|  |
| pub | Dart community |

{% endif %}
