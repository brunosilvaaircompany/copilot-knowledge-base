# About cloud and local sandboxes for GitHub Copilot

> [!NOTE]
> Cloud and local sandboxes for GitHub Copilot are in public preview and subject to change.


## Introduction

Copilot cloud and local sandboxes are the execution platform powering secure sandboxed experiences for GitHub Copilot CLI, both locally and in the cloud. As Copilot takes more actions on your behalf—running tools, executing commands, and modifying files—sandboxing provides the isolation, portability, and policy controls needed to adopt agentic workflows safely.

Sandboxing currently applies to Copilot CLI sessions. You can also choose to use cloud sandboxing when you start a new session in the GitHub Copilot app. For more information, see [Agent Sessions](https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions#starting-a-session).

With sandboxing, you can choose where Copilot runs:

* **Local sandboxing**: Run Copilot securely on your own machine. The commands that Copilot runs have restricted access to your filesystem, network, and system capabilities. You can use local sandboxing at no extra charge.
* **Cloud sandboxing**: Run the entire Copilot CLI session remotely, inside a fully isolated, ephemeral Linux environment hosted by GitHub. Cloud sandboxing is billed based on usage.

## Local sandboxing

> [!NOTE]
> Local sandboxing is currently an experimental feature. To use it, start Copilot CLI with the `‑‑experimental` command line option, or enter `/experimental on` during a session.

Local sandboxing lets Copilot run in a sandboxed environment directly on your machine, with restricted access to your filesystem, network connectivity, and system capabilities.

Local sandboxing is turned off by default. Until you enable it, the shell commands that Copilot runs execute directly on your machine with the same access as your user account: they can read, write, and delete wherever you can, reach any network your machine can reach, and use your credentials without restriction. Enabling local sandboxing constrains this access to a policy that you control.

### How local sandboxing works

Local sandboxing is powered by Microsoft eXecution Container (MXC), a cross-platform technology that provides a common interface to the isolation mechanisms available on each operating system. Copilot CLI declares the sandbox policy it wants to enforce—which paths are readable or writable, whether network access is allowed, and so on—and MXC applies that policy using the appropriate isolation backend for your operating system.

Isolation technologies exist on a spectrum, from strong isolation such as full hypervisors or containers, to lighter-weight isolation such as OS-level process and filesystem containment. Local sandboxing currently sits at the lighter-weight end of this spectrum: it restricts what a process can read, write, and reach on the network, but it does not run your commands inside a separate virtual machine or container. If you want to evaluate whether this level of isolation meets your security requirements, see the [microsoft/mxc repository](https://github.com/microsoft/mxc) for implementation details.

### Enabling local sandboxing

To enable local sandboxing inside a Copilot CLI session, run:

```shell copy
/sandbox enable
```

After you enable local sandboxing, the commands and tools that an agent runs on your behalf—shell commands, file search, and, by default, the MCP and language (LSP) servers the CLI starts—run inside an operating-system-level sandbox, limiting their access to your system. The CLI continues to use local sandboxing whenever you use the CLI in future—for programmatic as well as interactive use—until you run `/sandbox disable` to disable it. If enterprise managed settings require sandboxing, you cannot disable it.

The CLI's built-in file tools—first-party commands that are part of the CLI, rather than shell commands like `sed`—run in-process in the CLI. Because the CLI itself is not sandboxed, the operating-system sandbox never sees the file operations these tools perform and cannot constrain them. Instead, the built-in tools are coded to check the sandbox policy themselves and honor your configured settings on a best-effort basis.

For more information, see [Using Local Sandboxing](https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing).

### Configuring local sandboxing

You can use the default local sandboxing behavior, or you can modify what Copilot can access. When you configure local sandboxing, you can control several dimensions of access:

* **Filesystem**: Grant read-only or read/write access to specific paths, or deny paths.
* **Network**: Allow or block outbound internet access and local network access independently.
* **Credentials**: Choose whether your Git and GitHub CLI (`gh`) credentials are made available inside the sandbox.
* **Subprocesses**: Choose whether local MCP servers and language servers also run inside the sandbox. Remote MCP servers are never sandboxed.
* **Keychain (macOS)**: Choose whether the system keychain is reachable from inside the sandbox.
* **Per-command exceptions**: Allow or prevent individual commands from running outside the sandbox when they need broader access.

For more information, see [Configuring Local Sandbox Settings](https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings).

### Cross-platform support

Local sandboxing is available on macOS and Linux, and on Windows Insiders builds. Support and isolation behavior vary by platform because each operating system uses a different isolation backend:

* **macOS** uses the Seatbelt backend (`sandbox-exec`).
* **Linux** uses the bubblewrap backend, which requires the `bwrap` command to be installed and available on your `PATH`. If `/sandbox` reports that sandboxing isn't supported on Linux, install bubblewrap.
* **Windows** uses the ProcessContainer backend.

### Enterprise policy enforcement

Enterprises can require local sandboxing and enforce its configuration through server-managed, MDM-managed, or file-based managed settings. See [Configure Enterprise Managed Settings](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings).

## Cloud sandboxing

Cloud sandboxing lets you run Copilot CLI sessions inside fully isolated, ephemeral Linux environments hosted by GitHub. Each cloud sandbox session is isolated from your local environment and from other sessions.

Cloud sandboxing is built on Azure Container Apps Sandboxes, with GitHub providing the identity, policy, and billing layer.

> [!NOTE]
> If you get Copilot through an organization, access to cloud sandboxing depends on it being enabled in the organization or enterprise settings, where it is disabled by default. For more information, see [Enabling Or Disabling Cloud Sandboxes For Your Organization](https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-sandboxes-for-your-organization).

### Starting a cloud sandbox session

To start a cloud-backed session, run the following command:

```shell copy
copilot ‑‑cloud ‑‑experimental
```

> [!NOTE]
> Cloud sandboxing is currently an experimental feature. To use it, you must have experimental features enabled for Copilot CLI—for example, by using the `‑‑experimental` command line option when starting a CLI session, as shown above.

The `‑‑cloud` command line option launches an interactive Copilot CLI session inside a cloud sandbox. You can prompt Copilot to perform tasks, run shell commands, and iterate on code, the same way you would in a local session. The commands that Copilot runs execute in the cloud environment, not on your local machine.

Running `copilot ‑‑cloud` starts a single Copilot CLI session in a cloud sandbox. It does not affect future Copilot sessions. Each time you want to run a new session in a cloud sandbox, you must start the CLI with the `‑‑cloud` option.

> [!NOTE]
> Cloud sandboxing is only available for interactive Copilot CLI sessions. You can't run the CLI programmatically in a cloud sandbox—that is, you can't combine the `‑‑cloud` option with the `-p` or `-i` options.

### Continue sessions across devices

Because cloud sandbox sessions run in GitHub-hosted infrastructure, you can pick up a Copilot session on any device, regardless of where the session was originally started. This enables more flexible workflows without needing to copy files or reinstall dependencies.

### Offload compute-intensive workflows

You can run multiple Copilot tasks in parallel in the cloud without consuming local resources. This keeps your local environment lightweight and responsive while scaling agent-driven work.

### Unified governance

Cloud sandbox policies share the same configuration as Copilot cloud agent policies, extending existing security controls to cloud sandboxed execution without additional setup.

### Session lifecycle

A cloud sandbox session has three main states:

* **Active**: The session is running, and you are interacting with it from Copilot CLI.
* **Stopped**: The session is not currently running, but its state is saved. When you resume it, your files, environment variables, and in-progress work are restored.
* **Deleted**: The session and its saved state are removed and cannot be recovered.

When you stop a session, the cloud sandbox creates a snapshot of its state so you can pick up where you left off later. When you delete a session, both the running environment and the snapshot are removed.

## Authentication and access

Sandboxing uses your existing Copilot CLI authentication. If you can sign in to Copilot CLI and have access to Copilot, you can use sandboxing. You don't need to configure a separate cloud provider, manage API keys, or set up infrastructure.

An organization or enterprise owner must enable the **Cloud Sandbox access** policy in the organization or enterprise settings before members can use cloud sandboxes.

For information about enabling or disabling cloud sandboxes for members of your organization, see [Enabling Or Disabling Cloud Sandboxes For Your Organization](https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-sandboxes-for-your-organization).

## Billing

Local sandboxing is included in the standard GitHub Copilot seat at no additional cost.

Cloud sandboxing is billed based on usage. GitHub measures cloud sandbox usage across three meters:

| Meter | Description | Unit | Price (USD) |
| --- | --- | --- |------------|
| Compute | Time that a cloud sandbox session is running. | Compute second | $0.000024 |
| Memory | Memory allocated to a cloud sandbox session while it is running. | GiB second | $0.000003 |
| Storage | Snapshot storage for stopped sessions. | GiB month | $0.005  |

For more information about how cloud sandbox usage is measured and billed, see [Cloud And Local Sandboxes](https://docs.github.com/en/billing/concepts/product-billing/cloud-and-local-sandboxes).

## Further reading

* [About Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli)
* [Using Local Sandboxing](https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing)
* [Configuring Local Sandbox Settings](https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings)
