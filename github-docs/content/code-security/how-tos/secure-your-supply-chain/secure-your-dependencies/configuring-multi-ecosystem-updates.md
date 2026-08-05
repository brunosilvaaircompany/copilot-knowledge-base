# Configuring multi-ecosystem updates for Dependabot

Multi-ecosystem updates allow you to consolidate Dependabot pull requests across different package ecosystems into a single PR per group. See [Multi Ecosystem Updates](https://docs.github.com/en/code-security/concepts/supply-chain-security/multi-ecosystem-updates).

## Prerequisites
* A repository with dependencies in multiple package ecosystems
* An existing `.github/dependabot.yml` file. See [Configure Version Updates](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-version-updates).

## 1. Define your multi-ecosystem group in your `.github/dependabot.yml` file

Start by defining a group with a schedule in the top-level `multi-ecosystem-groups` section:

```yaml copy
version: 2

multi-ecosystem-groups:
  infrastructure:
    schedule:
      interval: "weekly"

updates:
  # Your existing package ecosystems will go here
```

## 2. Assign ecosystems to the group

Add the `multi-ecosystem-groups` key and patterns to your package ecosystem configurations.

```yaml copy
version: 2

multi-ecosystem-groups:
  infrastructure:
    schedule:
      interval: "weekly"

updates:
  - package-ecosystem: "docker"
    directory: "/"
    patterns: ["nginx", "redis", "postgres"]
    multi-ecosystem-group: "infrastructure"

  - package-ecosystem: "terraform"
    directory: "/"
    patterns: ["aws", "terraform-*"]
    multi-ecosystem-group: "infrastructure"
```

> [!NOTE]
> Use `["*"]` to include all dependencies.

## 3. Commit your changes

Commit the changes to your `dependabot.yml` file.

## 4. Customize with additional keys (optional)

You can add assignees, labels, or other configuration options to your multi-ecosystem groups. See [`assignees`](/code-security/reference/supply-chain-security/dependabot-options-reference#assignees--) and [`labels`](/code-security/reference/supply-chain-security/dependabot-options-reference#labels--).

```yaml copy
multi-ecosystem-groups:
  infrastructure:
    schedule:
      interval: "weekly"
    assignees: ["@platform-team"]
    labels: ["infrastructure", "dependencies"]

updates:
  - package-ecosystem: "docker"
    directory: "/"
    patterns: ["nginx", "redis", "postgres"]
    multi-ecosystem-group: "infrastructure"

  - package-ecosystem: "terraform"
    directory: "/"
    patterns: ["aws", "terraform-*"]
    multi-ecosystem-group: "infrastructure"
```

For a complete list of available options, see [Dependabot Options Reference](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference#multi-ecosystem-groups-).

## 5. Verify your configuration

After committing your changes, you can verify the configuration:

1. Navigate to your repository's **Insights** tab.
1. Select **Dependency graph**, then **Dependabot**.
1. Confirm your multi-ecosystem group appears in the list.

The next time the scheduled update runs, you'll receive a single pull request with updates from all ecosystems in the group.

## Troubleshooting

If you're not seeing consolidated pull requests, ensure that:
* The `patterns` key is defined for each ecosystem (required when using `multi-ecosystem-group`).
* All ecosystems use the same group name in the `multi-ecosystem-group` field.

## Further reading

* [Dependabot Options Reference](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference)
