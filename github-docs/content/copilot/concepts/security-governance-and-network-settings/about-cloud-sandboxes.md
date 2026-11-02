# About cloud sandboxes for GitHub Copilot

## About cloud sandboxes

A cloud sandbox is an isolated Linux environment that GitHub creates for a Copilot session. When you work in one or more repositories, Copilot clones each one into the sandbox, then runs commands and tests and makes changes there. Because the session doesn't run on your machine, you can run several sessions in parallel without using local resources, and you don't need to stay connected while Copilot works.

You don't create or manage cloud sandboxes yourself. GitHub creates one when you start a session that runs in the cloud.

### Continue sessions across clients

Because cloud sandbox sessions run in GitHub-hosted infrastructure, you can pick up a Copilot session on any client, regardless of where the session was originally started. This enables more flexible workflows without needing to copy files or reinstall dependencies.

### Offload compute-intensive workflows

You can run multiple Copilot sessions in parallel in the cloud without consuming local resources. This keeps your local environment lightweight and responsive while scaling agent-driven work.

## Cloud sandboxes and local sandboxing

Cloud sandboxes and local sandboxing solve different problems. A cloud sandbox moves the whole session off your machine. Local sandboxing keeps the session on your machine, but limits which resources Copilot can reach.

> [!NOTE]
> Cloud sandboxes and local sandboxing are separate technologies. A cloud sandbox is a GitHub-hosted environment that runs the whole session. Local sandboxing is a set of operating system restrictions on your own machine. Settings, policies, and commands for one don't apply to the other.


| | Cloud sandboxes | Local sandboxing |
| --- | --- | --- |
| Where Copilot runs | In an isolated Linux environment that GitHub hosts | On your machine |
| What it's for | Running sessions without using your machine | Limiting which resources Copilot's commands can access on your machine |
| Where you use it | Cloud sessions that you start with Copilot on the GitHub website, GitHub Mobile, Slack, Microsoft Teams, the GitHub Copilot app, Visual Studio Code, and the Copilot SDK | Copilot CLI and the GitHub Copilot app |
| How you start using it | No separate setup. It's available when you use the Copilot features that run in it. | Turn it on in Copilot CLI or the GitHub Copilot app, or your enterprise can require it. |

For more information about local sandboxing, see [About Cloud And Local Sandboxes](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes).

## Where Copilot uses cloud sandboxes

By default, Copilot runs a cloud session in a cloud sandbox when you start it from any of these places:

* The chat interface on the GitHub website
* GitHub Mobile
* Slack and Microsoft Teams
* The GitHub Copilot app
* Visual Studio Code
* Cloud sessions in the Copilot SDK

In Copilot CLI, sessions run on your machine by default. You can also start a session in a cloud sandbox. See [Starting a cloud session from Copilot CLI](#starting-a-cloud-session-from-copilot-cli).

## Choosing where Copilot runs

Copilot can run a session in one of these environments:

* **Cloud**: Copilot runs the session in a cloud sandbox that GitHub hosts.
* **Actions**: Copilot cloud agent runs the session in a GitHub Actions job, on a GitHub-hosted runner or a runner that you configure.



Sessions can also run on your own machine, for example in Copilot CLI or the GitHub Copilot app. Those sessions don't use a cloud sandbox.

Where you can choose between **Cloud** and **Actions**, **Cloud** is the default. You choose the environment when the session starts, and you can't change it afterward. To use a different environment, start a new session.

How you choose, and which environments you can choose from, depends on the client that you start the session from. For the steps in each client, see [Start Copilot Sessions](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/start-copilot-sessions).

Choose **Actions** if your repository depends on customizations that only work on GitHub Actions, such as setup steps, larger or self-hosted runners, or a Windows development environment. Otherwise, use **Cloud**. For details, see [Customizing a cloud sandbox session](#customizing-a-cloud-sandbox-session).

## Starting a cloud session from Copilot CLI

To start a Copilot CLI session in a cloud sandbox, run:

```shell copy
copilot --cloud
```

The `--cloud` command line option launches an interactive Copilot CLI session inside a cloud sandbox. You can prompt Copilot to perform tasks, run shell commands, and iterate on code, the same way you would in a local session. The commands that Copilot runs execute in the cloud sandbox, not on your local machine.

The `--cloud` option applies only to the session that you start with it. To run another session in a cloud sandbox, start the CLI with `--cloud` again. You can only use `--cloud` for interactive sessions, so you can't combine it with the `-p` or `-i` options.

## Session lifecycle

When you come back to a session, it resumes with your files and in-progress work intact. While a session is stopped, the cloud sandbox keeps a snapshot of its state so you can pick up where you left off.

## Isolation and network access

Each cloud sandbox is isolated from your machine and from other sessions. Because the session doesn't run on your computer, the commands that Copilot runs in a cloud sandbox can't read or change the files on your computer.

Network access from a cloud sandbox follows the same firewall settings as Copilot cloud agent, including the recommended allowlist and any custom allowlist rules that organization or repository owners add. For more information, see [Customize The Firewall](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-the-firewall).

If Copilot needs to reach a host that isn't on the allowlist, add the host to the allowlist, then start a new session. Allowlist changes don't apply to sessions that are already running.

## Customizing a cloud sandbox session

You can customize your cloud sandbox settings at [github.com/copilot/customize](https://github.com/copilot/customize?utm_source=cloud-sandboxes-docs-customize&utm_medium=docs&utm_campaign=universe-2026). You can also bring your personal instructions, skills, and custom agents to cloud sandbox sessions using a dotfiles repository with a root `.copilot` directory. Dotfiles are copied when a sandbox is created or resumed, without running installation scripts. This personalization is not available in GitHub Actions-based sessions. For setup guidance, see [Personalize Cloud Sessions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/personalize-cloud-sessions).

Other customizations use GitHub Actions, so they apply only to sessions that run on **Actions**: These include:

* Setup steps in a `copilot-setup-steps.yml` file, including steps that sign in to cloud providers with OpenID Connect (OIDC)
* Larger and self-hosted runners
* Windows development environments

If your repository depends on any of these, choose **Actions** when you delegate the task. For details, see [Customize The Agent Environment](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment).

If you a higher level of customization, you can register a Linux machine or codespace as a custom environment and select it in a client that supports custom environments. Unlike a cloud sandbox, you manage the host, its tools and dependencies, and its lifecycle. See [Create A Custom Environment](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-a-custom-environment).

## Access

Cloud sandboxes use your existing Copilot authentication. You don't need to configure a separate cloud provider, manage API keys, or set up infrastructure.

Cloud sandboxes don't have a separate access policy. If you get Copilot through an organization or enterprise, the **Copilot in the cloud** policy controls whether you can start sessions that run in a cloud sandbox. The policy is enabled by default. For information for administrators, see [Enabling Or Disabling Cloud Sandboxes For Your Organization](https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-sandboxes-for-your-organization).

## Billing

Cloud sandboxing is billed based on usage. GitHub measures cloud sandbox usage across three meters:

| Meter | Description | Unit | Price (USD) |
| --- | --- | --- |------------|
| Compute | Time that a cloud sandbox session is running. | vCPU second | $0.000024 |
| Memory | Memory allocated to a cloud sandbox session while it is running. | GiB second | $0.000003 |
| Storage | Snapshot storage for stopped sessions. | GiB month | $0.005  |

For more information about how cloud sandbox usage is measured and billed, see [Cloud And Local Sandboxes](https://docs.github.com/en/billing/concepts/product-billing/cloud-and-local-sandboxes).

## Further reading

* [About Cloud And Local Sandboxes](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes)
* [Enabling Or Disabling Cloud Sandboxes For Your Organization](https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-sandboxes-for-your-organization)
* [Cloud And Local Sandboxes](https://docs.github.com/en/billing/concepts/product-billing/cloud-and-local-sandboxes)
* [Customize The Agent Environment](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment)
