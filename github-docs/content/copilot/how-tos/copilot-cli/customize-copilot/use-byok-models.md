# Using your own LLM models in GitHub Copilot CLI

You can configure Copilot CLI to use your own LLM provider, also called BYOK (Bring Your Own Key), instead of GitHub-hosted models. This lets you connect to OpenAI-compatible endpoints, Azure OpenAI, or Anthropic, including locally running models such as Ollama.

> [!NOTE]
> This article is for users who want to configure their own LLM provider API key on their local machine. To set up custom models for users in an enterprise, see [Use Your Own API Keys](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-your-own-api-keys).
> 
> This article is also for administrators who want to configure their own LLM provider API key in GHES and for users who want to use those models in Copilot CLI.

## Prerequisites

* Copilot CLI is installed. See [Install Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli).
* You have an API key from a supported LLM provider, or you have a local model running (such as Ollama).

## Supported providers

Copilot CLI supports three provider types:

| Provider type | Compatible services |
|---|---|
| `openai` | OpenAI, Ollama, vLLM, Foundry Local, and any other OpenAI Chat Completions API-compatible endpoint. This is the default provider type. |
| `azure` | Azure OpenAI Service. |
| `anthropic` | Anthropic (Claude models). |

For additional examples, run `copilot help providers` in your terminal.

## Model requirements

Models must support **tool calling** (also called function calling) and **streaming**. If a model does not support either capability, Copilot CLI returns an error. For best results, use a model with a context window of at least 128k tokens.

## Configuring your provider

You configure your model provider by setting environment variables before starting Copilot CLI.

| Environment variable | Required | Description |
|---|---|---|
| `COPILOT_PROVIDER_BASE_URL` | Yes | The base URL of your model provider's API endpoint. |
| `COPILOT_PROVIDER_TYPE` | No | The provider type: `openai` (default), `azure`, or `anthropic`. |
| `COPILOT_PROVIDER_API_KEY` | No | Your API key for the provider. Not required for providers that do not use authentication, such as a local Ollama instance. |
| `COPILOT_MODEL` | Yes | The model identifier to use. You can also set this with the `--model` command-line flag. |

## Connecting to an OpenAI-compatible endpoint

Use the following steps if you are connecting to OpenAI, Ollama, vLLM, Foundry Local, or any other endpoint that is compatible with the OpenAI Chat Completions API.

1. Set environment variables for your provider. For example, for a local Ollama instance:

   ```shell
   export COPILOT_PROVIDER_BASE_URL=http://localhost:11434
   export COPILOT_MODEL=YOUR-MODEL-NAME
   ```

   Replace `YOUR-MODEL-NAME` with the name of the model you have pulled in Ollama (for example, `llama3.2`).

1. For a remote OpenAI endpoint, also set your API key.

   ```shell
   export COPILOT_PROVIDER_BASE_URL=https://api.openai.com/v1
   export COPILOT_PROVIDER_API_KEY=YOUR-OPENAI-API-KEY
   export COPILOT_MODEL=YOUR-MODEL-NAME
   ```

   Replace `YOUR-OPENAI-API-KEY` with your OpenAI API key and `YOUR-MODEL-NAME` with the model you want to use (for example, `gpt-4o`).

1. Start Copilot CLI.

```bash
copilot
```


## Connecting to Azure OpenAI

1. Set the environment variables for Azure OpenAI.

   ```shell
   export COPILOT_PROVIDER_BASE_URL=https://YOUR-RESOURCE-NAME.openai.azure.com/openai/deployments/YOUR-DEPLOYMENT-NAME
   export COPILOT_PROVIDER_TYPE=azure
   export COPILOT_PROVIDER_API_KEY=YOUR-AZURE-API-KEY
   export COPILOT_MODEL=YOUR-DEPLOYMENT-NAME
   ```

   Replace the following placeholders:

     * `YOUR-RESOURCE-NAME`: your Azure OpenAI resource name
     * `YOUR-DEPLOYMENT-NAME`: the name of your model deployment
     * `YOUR-AZURE-API-KEY`: your Azure OpenAI API key

1. Start Copilot CLI.

```bash
copilot
```


## Connecting to Anthropic

1. Set the environment variables for Anthropic:

   ```shell
   export COPILOT_PROVIDER_TYPE=anthropic
   export COPILOT_PROVIDER_BASE_URL=https://api.anthropic.com
   export COPILOT_PROVIDER_API_KEY=YOUR-ANTHROPIC-API-KEY
   export COPILOT_MODEL=YOUR-MODEL-NAME
   ```

   Replace `YOUR-ANTHROPIC-API-KEY` with your Anthropic API key and YOUR-MODEL-NAME with the Claude model you want to use (for example, `claude-opus-4-5`).

1. Start Copilot CLI.

```bash
copilot
```


## Running in offline mode

You can run Copilot CLI in offline mode to prevent it from contacting GitHub's servers. This is designed for isolated environments where the CLI should communicate only with your local or on-premises model provider.

> [!IMPORTANT]
> Offline mode only guarantees full network isolation if your provider is also local or within the same isolated environment. If `COPILOT_PROVIDER_BASE_URL` points to a remote endpoint, your prompts and code context are still sent over the network to that provider.

1. Configure your provider environment variables as described in Configuring your provider.

1. Set the offline mode environment variable:

   ```shell
   export COPILOT_OFFLINE=true
   ```
   
1. 1. Start Copilot CLI.

```bash
copilot
```




## Using Copilot CLI with GitHub Enterprise Server

> [!NOTE]
> This feature is in technical preview and subject to change. Additionally, GHES 3.22, the first version to support this functionality, is in the release candidate phase. We recommend waiting until GHES 3.22 reaches GA before validating and using this capability. We are publishing these docs early to provide visibility into what is coming.

Copilot CLI can be configured to work with GitHub Enterprise Server for enterprises that operate in disconnected or air-gapped environments without connectivity to GitHub Cloud. Your GitHub Enterprise Server administrator configures a model provider once, and users across the enterprise can use Copilot CLI with their GitHub Enterprise Server credentials.

Setting up this feature involves two roles:

* **Administrator**: Configures the model provider on the GitHub Enterprise Server instance using `ghe-config`. This is a one-time setup that requires administrative SSH access.
* **End user**: Sets environment variables on their local machine to connect Copilot CLI to the instance.

### Prerequisites

* Your GitHub Enterprise Server administrator has configured a model provider on the instance. See [Configuring your GitHub Enterprise Server instance](#configuring-your-github-enterprise-server-instance).
* Copilot CLI is installed on client machines. See [Install Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli).
* GitHub CLI (`gh`) is installed on client machines. See [Installing gh](https://cli.github.com/manual/installation).

The same [supported providers](#supported-providers) and [model requirements](#model-requirements) apply.

### Configuring your GitHub Enterprise Server instance

This step is for the operator or administrator of the GitHub Enterprise Server instance.

With administrative SSH access to the GitHub Enterprise Server instance, configure the model provider using the following `ghe-config` values. After configuring, run `ghe-config-apply` to apply the changes.

| Variable name | Required | Options | Description |
|---|---|---|---|
| `app.copilot-proxy.enabled` | Yes | `true`, `false` | Enables or disables the feature. |
| `app.copilot-proxy.endpoint-url` | Yes | URI | The full upstream base URL including any version prefix (for example, `https://api.openai.com/v1`). |
| `secrets.copilot-proxy.endpoint-key` | Yes | String | The API key for the upstream provider. |
| `app.copilot-proxy.provider-model-id` | Yes | String | The provider model ID that Copilot CLI uses to look up the model internally. |
| `app.copilot-proxy.provider-type` | Yes | `openai`, `azure`, `anthropic` | The provider type. OpenAI includes OpenAI, Ollama, vLLM, Foundry Local, and any other OpenAI Chat Completions API-compatible endpoint. |
| `app.copilot-proxy.upstream-timeout` | No | Integer (seconds) | Read/send timeout in seconds for upstream requests. If not set, falls back to the default timeout. |
| `app.copilot-proxy.provider-wire-api` | No | `completions`, `responses` | The wire API format for the provider. |
| `app.copilot-proxy.provider-wire-model` | No | String | Overrides the model identifier sent to the upstream provider if it differs from the internal model ID. |
| `app.copilot-proxy.enable-upstream-probe` | No | `true`, `false` | Enables or disables the startup upstream probe. Defaults to enabled. When disabled, the startup probe is skipped. |

### Examples

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

Replace `YOUR-API-KEY` with the real API key before applying.

### Configuring your Copilot CLI client (end user)

Configure Copilot CLI to connect to your GitHub Enterprise Server instance by setting the following environment variables before starting Copilot CLI.

| Environment variable | Required | Description |
|---|---|---|
| `COPILOT_PROVIDER_GHES_HOST` | Yes | The hostname of your GitHub Enterprise Server instance. |
| `COPILOT_PROVIDER_GHES_TOKEN` | Yes | A personal access token for the GitHub Enterprise Server instance. This token authenticates requests to the instance. |
| `COPILOT_OFFLINE=true` | Yes | Enables offline mode. The GitHub Enterprise Server provider is only active when offline mode is enabled. |

### Understanding client (end user) tokens 

Copilot CLI needs access to LLM inference, so `COPILOT_PROVIDER_GHES_TOKEN` is always required. You will also very likely want Copilot CLI to perform GitHub operations such as create issues, pull requests, and search repositories. Such operations can be done via the GitHub CLI.

It is recommended and preferred that you run `gh auth login --hostname YOUR-GHES-HOSTNAME`. After it succeeds, next step is to set COPILOT_PROVIDER_GHES_TOKEN to the token generated in `gh auth login --hostname YOUR-GHES-HOSTNAME`. It is more secure to retrieve the token dynamically rather than copying it from `~/.config/gh/hosts.yml`. You can do so by using `COPILOT_PROVIDER_GHES_TOKEN="$(gh auth token --hostname YOUR-GHES-HOSTNAME)"`. 

Alternatively, you can generate a personal access token on your GitHub Enterprise Server instance, set that token as `COPILOT_PROVIDER_GHES_TOKEN`, and use the same token when running `gh auth login --hostname YOUR-GHES-HOSTNAME`.

The above approach works when you are using Copilot CLI interactively. For automation, you need to do a few things differently:
* Set `GH_ENTERPRISE_TOKEN` (or `GITHUB_ENTERPRISE_TOKEN`) to the personal access token.
* Set `GH_HOST` to your server's hostname.
* When both `GH_ENTERPRISE_TOKEN` and `gh auth login` credentials exist for the same host, the environment variable takes precedence.

### Recommended end user setup

1. Authenticate the GitHub CLI.

   ```shell
   gh auth login --hostname YOUR-GHES-HOSTNAME
   ```

1. Set the following environment variables:

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

1. 1. Start Copilot CLI.

```bash
copilot
```


You can run this entire set-up as a script.

### Examples

If both GitHub Enterprise Server and your Copilot CLI configurations are correct, then you should see responses like the following in your 1. Start Copilot CLI.

```bash
copilot
```
 session.

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

### Supported capabilities on GitHub Enterprise Server

For the most up-to-date information on Copilot CLI features, refer to the [Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli) as the primary source of truth. In general, any capability that relies on connectivity to GitHub cloud services is not available in the GitHub Enterprise Server offline configuration.

The following table provides a directional overview of what is available in GitHub Enterprise Server offering.

| Capability | GitHub / GitHub Enterprise Cloud | GitHub Enterprise Server |
|---|---|---|
| AI-assisted coding (prompts, code generation, debugging) | {% octicon "check-circle" aria-label="Available" %} | {% octicon "check-circle" aria-label="Available" %} |
| Shell commands and file operations | {% octicon "check-circle" aria-label="Available" %} | {% octicon "check-circle" aria-label="Available" %} |
| GitHub operations (issues, PRs, repos) via `gh` CLI | {% octicon "check-circle" aria-label="Available" %} | {% octicon "check-circle" aria-label="Available" %} (requires `gh` CLI authenticated to the instance) |
| GitHub MCP server tools | {% octicon "check-circle" aria-label="Available" %} | {% octicon "x-circle" aria-label="Not available" %} |
| Web search and web fetch | {% octicon "check-circle" aria-label="Available" %} | {% octicon "x-circle" aria-label="Not available" %} |
| Copilot model selection (GitHub-hosted models) | {% octicon "check-circle" aria-label="Available" %} | {% octicon "x-circle" aria-label="Not available" %} |
| Telemetry and usage reporting | {% octicon "check-circle" aria-label="Available" %} | {% octicon "x-circle" aria-label="Not available" %} |
| Auto-update | {% octicon "check-circle" aria-label="Available" %} | {% octicon "x-circle" aria-label="Not available" %} |
