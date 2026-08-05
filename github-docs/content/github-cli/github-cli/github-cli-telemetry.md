# GitHub CLI telemetry

## Why GitHub CLI collects telemetry

As agentic adoption of GitHub CLI grows, visibility into how features are used in practice helps GitHub improve the product. Telemetry data helps us prioritize development work and evaluate whether features meet real user needs.

For example, when a new subcommand is shipped, telemetry reveals whether anyone is using it and how. If adoption is low, that signals a need to revisit the feature's discoverability or design. If a subcommand sees high usage with certain flags, that shows where to invest in a better experience.

> [!IMPORTANT]
> Telemetry data is not collected when the target is GitHub Enterprise Server or the user has authenticated GitHub CLI with a GitHub Enterprise Server host.

## Reviewing telemetry

GitHub CLI is open source. You can review the telemetry implementation in the [cli/cli](https://github.com/cli/cli) repository. If you want to see exactly what would be sent without actually sending it, you can enable logging mode using either an environment variable or a configuration option.

**Environment variable:**

```shell
export GH_TELEMETRY=log
```

**CLI configuration:**

```shell
gh config set telemetry log
```

In logging mode, the JSON payload that would normally be sent is printed to stderr instead. This lets you inspect every field before deciding whether to keep telemetry enabled. For example:

```shell
GH_TELEMETRY=log gh skill install github/awesome-copilot git-commit --agent github-copilot --scope project
```

This prints something like:

```text
Telemetry payload:
{
  "events": [
    {
      "type": "skill_install",
      "dimensions": {
        "agent": "",
        "agent_hosts": "github-copilot",
        "architecture": "arm64",
        "ci": "false",
        "device_id": "1e9a73a6-c8bd-4e1e-be02-78f4b11de4e1",
        "github_actions": "false",
        "invocation_id": "96d4862f-26c9-4385-961d-d749ae519c81",
        "is_tty": "true",
        "os": "darwin",
        "repo_visibility": "public",
        "skill_host_type": "github.com",
        "skill_names": "git-commit",
        "skill_owner": "github",
        "skill_repo": "awesome-copilot",
        "timestamp": "2026-04-24T11:54:51.057Z",
        "upstream_source": "none",
        "version": "2.91.0"
      }
    },
    {
      "type": "command_invocation",
      "dimensions": {
        "agent": "",
        "architecture": "arm64",
        "ci": "false",
        "command": "gh skill install",
        "device_id": "1e9a73a6-c8bd-4e1e-be02-78f4b11de4e1",
        "flags": "agent,scope",
        "github_actions": "false",
        "invocation_id": "96d4862f-26c9-4385-961d-d749ae519c81",
        "is_tty": "true",
        "os": "darwin",
        "timestamp": "2026-04-24T11:54:51.057Z",
        "version": "2.91.0"
      }
    }
  ]
}
```

Some commands may include additional telemetry dimensions based on the context. In this example, the `skill_` fields are included because the `repo_visibility` is `public`.

> [!NOTE]
> This command can only log telemetry for the exact command and context in which it ran. Changing environment variables or authenticated accounts may change the events and event dimensions included in the payload.

## How to opt out

You can opt out of the telemetry you see in the `log` mode described above using either an environment variable or a configuration option.

**Environment variables:**

```shell
export GH_TELEMETRY=false
```

Any falsy value works: `0`, `false`, `disabled`, or an empty string. You can also use the `DO_NOT_TRACK` convention:

```shell
export DO_NOT_TRACK=true
```

**CLI configuration:**

```shell
gh config set telemetry disabled
```

> [!NOTE]
> The environment variables take precedence over the configuration value.

## Where data is sent

Telemetry events are sent to GitHub's internal analytics infrastructure. For more information about how GitHub handles your data, see [GitHub General Privacy Statement](https://docs.github.com/en/free-pro-team@latest/site-policy/privacy-policies/github-general-privacy-statement).

## Additional information

GitHub CLI allows you to add features to the product by installing GitHub-authored and third-party extensions, including agents. These extensions may collect their own usage data and are not controlled by opting out. Consult the specific extension's documentation to learn about its telemetry reporting and whether it can be disabled.

This page describes client-side data collection for GitHub CLI (`gh`). It does not apply to GitHub Copilot or GitHub Copilot CLI, which handle data collection separately. For information on the GitHub Copilot CLI, see [About Copilot CLI](https://docs.github.com/en/free-pro-team@latest/copilot/concepts/agents/copilot-cli/about-copilot-cli) and [Agents](https://docs.github.com/en/free-pro-team@latest/copilot/responsible-use/agents).
