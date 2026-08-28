# Set up and use GitHub Copilot CLI

> [!NOTE]
> This feature is in technical preview and subject to change.

You can configure Copilot CLI to work with GitHub Enterprise Server in disconnected or air-gapped environments without connectivity to GitHub Cloud. An administrator configures a model provider for the instance, and users connect Copilot CLI with their GitHub Enterprise Server credentials.

Setting up this feature involves two roles:

* **Administrator**: Configures the model provider on the GitHub Enterprise Server instance using `ghe-config`. This is a one-time setup that requires administrative SSH access.
* **End user**: Sets environment variables on a local machine to connect Copilot CLI to the instance.

## Prerequisites

* You have administrative SSH access to the GitHub Enterprise Server instance.
* You have an API key from a supported LLM provider.
* Copilot CLI is installed on client machines. See [Install Copilot CLI](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli).
* GitHub CLI (`gh`) is installed on client machines. See [GitHub CLI manual](https://cli.github.com/manual/) in the GitHub CLI documentation.

For information about supported providers and model requirements, see [Use Byok Models](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-cli/customize-copilot/use-byok-models).

## Configuring your GitHub Enterprise Server instance

This step is for the operator or administrator of the GitHub Enterprise Server instance.

With administrative SSH access to the GitHub Enterprise Server instance, configure the model provider using the following `ghe-config` values. After configuring, run `ghe-config-apply` to apply the changes.

| Variable name | Required | Options | Description |
|---|---|---|---|
| `app.copilot-proxy.enabled` | Yes | `true`, `false` | Enables or disables the feature. |
| `app.copilot-proxy.endpoint-url` | Yes | URI | The full upstream base URL including any version prefix (for example, `https://api.openai.com/v1`). |
| `secrets.copilot-proxy.endpoint-key` | Yes | String | The API key for the upstream provider. |
| `app.copilot-proxy.provider-model-id` | Yes | String | The provider model ID that Copilot CLI uses to look up the model internally. |
| `app.copilot-proxy.provider-type` | Yes | `openai`, `azure`, `anthropic` | The provider type. OpenAI includes OpenAI, Ollama, vLLM, Foundry Local, and any other OpenAI Chat Completions API-compatible endpoint. |
| `app.copilot-proxy.upstream-timeout` | No | Integer, in seconds | Read/send timeout in seconds for upstream requests. If not set, falls back to the default timeout. |
| `app.copilot-proxy.provider-wire-api` | No | `completions`, `responses` | The wire API format for the provider. |
| `app.copilot-proxy.provider-wire-model` | No | String | Overrides the model identifier sent to the upstream provider if it differs from the internal model ID. |
| `app.copilot-proxy.enable-upstream-probe` | No | `true`, `false` | Enables or disables the startup upstream probe. Defaults to enabled. When disabled, the startup probe is skipped. |

For example, the following commands configure an OpenAI provider.

```shell
ghe-config app.copilot-proxy.enabled true
ghe-config app.copilot-proxy.endpoint-url 'https://api.openai.com/v1'
ghe-config secrets.copilot-proxy.endpoint-key 'YOUR-API-KEY'
ghe-config app.copilot-proxy.provider-model-id 'gpt-5.5'
ghe-config app.copilot-proxy.provider-wire-model 'gpt-5.5'
ghe-config app.copilot-proxy.provider-type openai
ghe-config app.copilot-proxy.upstream-timeout 300
ghe-config app.copilot-proxy.enable-upstream-probe false
ghe-config-apply
```

Replace `YOUR-API-KEY` with the real API key before applying the configuration.

## Configuring your Copilot CLI client (end user)

Configure Copilot CLI to connect to your GitHub Enterprise Server instance by setting the following environment variables before starting Copilot CLI.

| Environment variable | Required | Description |
|---|---|---|
| `COPILOT_PROVIDER_GHES_HOST` | Yes | The hostname of your GitHub Enterprise Server instance. |
| `COPILOT_PROVIDER_GHES_TOKEN` | Yes | A personal access token for the GitHub Enterprise Server instance. This token authenticates requests to the instance. |
| `COPILOT_OFFLINE` | Yes | Enables offline mode. The GitHub Enterprise Server provider is only active when offline mode is enabled. |

## Understanding client (end user) tokens

Copilot CLI needs access to LLM inference, so `COPILOT_PROVIDER_GHES_TOKEN` is always required. You will also very likely want Copilot CLI to perform GitHub operations such as create issues, pull requests, and search repositories. Such operations can be done via the GitHub CLI.

It is recommended and preferred that you run `gh auth login --hostname YOUR-GHES-HOSTNAME`. After it succeeds, next step is to set `COPILOT_PROVIDER_GHES_TOKEN` to the token generated in `gh auth login --hostname YOUR-GHES-HOSTNAME`. It is more secure to retrieve the token dynamically rather than copying it from `~/.config/gh/hosts.yml`. You can do so by using `COPILOT_PROVIDER_GHES_TOKEN="$(gh auth token --hostname YOUR-GHES-HOSTNAME)"`. 

Alternatively, you can generate a personal access token on your GitHub Enterprise Server instance, set that token as `COPILOT_PROVIDER_GHES_TOKEN`, and use the same token when running `gh auth login --hostname YOUR-GHES-HOSTNAME`.

The above approach works when you are using Copilot CLI interactively. For automation, you need to do a few things differently:
* Set `GH_ENTERPRISE_TOKEN` (or `GITHUB_ENTERPRISE_TOKEN`) to the personal access token.
* Set `GH_HOST` to your server's hostname.
* When both `GH_ENTERPRISE_TOKEN` and `gh auth login` credentials exist for the same host, the environment variable takes precedence.

## Recommended end user setup

1. Authenticate GitHub CLI.

   ```shell
   gh auth login --hostname YOUR-GHES-HOSTNAME
   ```

1. Set the environment variables required by Copilot CLI.

   ```shell
   export COPILOT_PROVIDER_GHES_HOST=YOUR-GHES-HOSTNAME
   export COPILOT_PROVIDER_GHES_TOKEN="$(gh auth token --hostname YOUR-GHES-HOSTNAME)"
   export COPILOT_OFFLINE=true
   ```

   If you are authenticated with `gh auth login` to multiple accounts, you can set `GH_HOST` to your server's hostname and set `GH_ENTERPRISE_TOKEN` (or `GITHUB_ENTERPRISE_TOKEN`) to `"$(gh auth token --hostname YOUR-GHES-HOSTNAME)"`. This ensures GitHub CLI targets your GitHub Enterprise Server instance.
   
   ```shell
   export GH_HOST=YOUR-GHES-HOSTNAME
   export GH_ENTERPRISE_TOKEN="$(gh auth token --hostname YOUR-GHES-HOSTNAME)"
   ```

1. Start Copilot CLI.

```bash
copilot
```


You can run this entire set-up as a script.

## Examples

If both GitHub Enterprise Server and your Copilot CLI configurations are correct, then you should see responses like the following in your Copilot CLI session.

```shell
     • fabric-core-mcp — disabled
     • powerbi-mcp — disabled
     • slack — connected

 ● Current model: gpt-5.5

 ❯ Hello                                                                   13:31

 ● Hello!

 ❯ what is going on in github/codeql-action repo?                          13:33

 ● I’ll check recent repository activity on the GHES host: repo metadata, open 
   PRs/issues, and latest commits.

 $ Shell Fetch repo metadata 2 lines…                                         5s
   gh api --hostname "$GH_HOST" repos/github/codeql-action --jq '{name_with_own…
```

## Supported capabilities on GitHub Enterprise Server

For the most up-to-date information on Copilot CLI features, refer to [Copilot CLI](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-cli) as the primary source of truth. In general, any capability that relies on connectivity to GitHub cloud services is not available in the GitHub Enterprise Server offline configuration.

The following table provides a directional overview of what is available in GitHub Enterprise Server offering.

| Capability | GitHub / GitHub Enterprise Cloud | GitHub Enterprise Server |
|:---|:---:|:---:|
| AI-assisted coding (prompts, code generation, debugging) | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} |
| Shell commands and file operations | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} |
| GitHub operations (issues, PRs, repos) via `gh` CLI | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} (requires `gh` CLI authenticated to the instance) |
| GitHub MCP server tools | {% octicon "check" aria-label="Available" %} | {% octicon "x" aria-label="Not available" %} |
| Web search and web fetch | {% octicon "check" aria-label="Available" %} | {% octicon "x" aria-label="Not available" %} |
| Copilot model selection (GitHub-hosted models) | {% octicon "check" aria-label="Available" %} | {% octicon "x" aria-label="Not available" %} |
| Telemetry and usage reporting | {% octicon "check" aria-label="Available" %} | {% octicon "x" aria-label="Not available" %} |
| Auto-update | {% octicon "check" aria-label="Available" %} | {% octicon "x" aria-label="Not available" %} |
