# Allowing and denying tool use

## Introduction

Copilot CLI uses a variety of tools to complete tasks for you. It can execute shell commands, read and write files, search your codebase, fetch web content, and delegate tasks to specialized sub-agents.

While read-only operations like searching, reading files, and running read-only shell commands are allowed automatically, tools that can modify your system—such as running destructive shell commands, editing files, or accessing URLs—require your explicit approval before Copilot can use them. This helps avoid your use of the CLI resulting in changes you didn't intend because, for example, a shell command can do anything your user account can do: install packages, delete files, push code, or make network requests.

You can allow or deny permissions for tools either when you start the CLI or during your interactive session. If you haven't granted permission prior to starting a session, Copilot CLI will prompt you for permission each time it needs to perform a potentially destructive action. You can choose to allow the tool this one time, or for the remainder of the session.

## Persisted permissions

Some prompt options save your consent so you aren't asked again. Where your approval is stored depends on what you approved.

When you approve a tool for the current location, the approval is saved to `permissions-config.json` in your configuration directory. By default, this file is `~/.copilot/permissions-config.json`. For example, you might choose "don't ask again in this repo" (or "in this directory") for a shell command, file write, MCP tool, or memory update. The approval is scoped to the current location: either the Git repository root, or the working directory if you aren't in a repository. Any directories you grant access to are saved to the same file.

URL approvals work differently. When you approve a URL permanently, its domain is added to the `allowedUrls` list in your `settings.json`. By default, this file is `~/.copilot/settings.json`. This approval applies across all your sessions, rather than being tied to a single location.

Command-line options such as `--allow-tool` and `--deny-tool` apply only to the current session and aren't written to `permissions-config.json`. Deny rules still take precedence over saved approvals.

For details about where saved approvals are stored, how locations are matched, and the full `permissions-config.json` schema, see [CLI Config Dir Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-config-dir-reference#permissions-configjson).

## Layers of tool controls

There are two layers of control you can use when specifying tool permissions in command-line options. You can:

* Restrict the choice of tools available to the AI model.
* Allow or deny permission for specific tools.

## Restricting the choice of tools available to the AI model

The `--available-tools` and `--excluded-tools` options restrict the set of tools that the AI model is aware of, and can therefore choose from, when it determines how to complete a task.

* `--available-tools` disables all tools other than those you specify.
* `--excluded-tools` disables only the specified tools.

If you use both options together, the CLI will apply the allowlist specified by `--available-tools` and ignore the denylist specified by `--excluded-tools`.

If a tool is not in the available set, the AI model won't be able to use it at all, even if you specify it with the `--allow-tool` option. In an interactive session where you do not specify an available tool set, the AI model may try to use a tool, only to be denied. The `--available-tools` and `--excluded-tools` options prevent you wasting interactions with the model in this way.

### Example use case

You are starting a CLI session to run benchmarking on your project and you want to avoid the AI model from even attempting to use web search.

```bash
copilot --excluded-tools='web_fetch, web_search'
```

> [!NOTE]
> For full details of the syntax for these and other command-line options mentioned in this article, see [CLI Command Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference#command-line-options).

## Allowing or denying permission for specific tools

The `--allow-tool` and `--deny-tool` options allow or deny permission for specific tools, or tool subcommands.

The value for each of these options is a comma-separated list of tool kinds, which can optionally specify exact tools and subcommand patterns.

If you specify a tool with `--allow-tool`, the AI model can choose to use that tool without prompting you for permission. If you specify a tool with `--deny-tool`, the AI model cannot use that tool at all, even if it would be the best choice for completing a task.

Deny rules always take precedence over allow rules, even when `--allow-all` is set or a matching approval has been saved in `permissions-config.json`.

### Examples

| Option | Effect |
| ------ | ------ |
| `--allow-tool=shell` | Allow all shell commands. |
| `--allow-tool='shell(git commit)'` | Allow the `git commit` command. |
| `--allow-tool='shell(git:*)' --deny-tool='shell(git push)'` | Allow all `git` commands except `git push`. |
| `--deny-tool=write` | Deny all file writing operations. |
| `--allow-tool='read, write(.github/copilot-instructions.md)'` | Allow all read operations, and allow write operations for a specific file. |
| `--allow-tool='MyMCP(create_issue), MyMCP(delete_issue)'` | Allow the `create_issue` and `delete_issue` tools from the `MyMCP` MCP server. |
| `--available-tools='bash,edit,view,grep,glob' --allow-tool='shell(git:*)' --deny-tool='shell(git push)'` | Combine both layers of control for a restricted CLI session. Copilot can explore the code, make edits, and commit changes, but can't reach the internet, run arbitrary subagents, or push to Git history. |

For details of the supported tool kinds, see [CLI Command Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference#tool-permission-patterns).

## Permissive options

The following command-line options give Copilot CLI permission to use all available tools.

If you have a Copilot Business or Copilot Enterprise license, these commands may be blocked by an enterprise administrator.


Before you grant Copilot wide-ranging permissions with an allow-all option, consider using local sandboxing, or running the session in a cloud sandbox, to limit what Copilot can access. For more information, see [About Cloud And Local Sandboxes](https://docs.github.com/en/copilot/concepts/about-cloud-and-local-sandboxes).

* `--allow-all-tools` — Full access to the available tools.

* `--allow-all`  or `--yolo` — Equivalent to using all of the `--allow-all-tools`, `--allow-all-paths`, and `--allow-all-urls` options when starting the CLI.

  Within an interactive session, you can use the `/allow-all` or `/yolo` slash commands to allow all tools without needing to restart the session.

> [!CAUTION]
> It is strongly recommended that you only use these options in an isolated environment. You should never use an alias to apply one of these options every time you start Copilot CLI, as doing so would allow Copilot to use any tool without your explicit permission every time you use the CLI, which could lead to unintended consequences.

## Resetting permissions

The `/reset-allowed-tools` slash command revokes all permissions you granted during the current interactive session. This applies equally to permissions you gave by responding to prompts, and to the use of the `/allow-all` or `/yolo` slash commands.

Using `/reset-allowed-tools` resets the permissions to the default, or to the state defined by any command-line options you used when you started Copilot CLI. It also clears saved tool approvals for the current location from `permissions-config.json`. For example, if you start a Copilot CLI interactive session with the option `--allow-tool='shell(git:*)'`, and then you allow and deny further permissions during the session by responding to prompts, when you then use the `/reset-allowed-tools` command, the CLI's permissions return to the original `--allow-tool='shell(git:*)'` state, with no other permissions allowed or denied. As you continue to work in the session, you will be prompted again if Copilot needs additional permissions.

To remove saved approvals for a different location, edit or delete the relevant location entry in `permissions-config.json`. For more information, see [CLI Config Dir Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-config-dir-reference#permissions-configjson).

## Further reading

* [CLI Best Practices](https://docs.github.com/en/copilot/how-tos/copilot-cli/cli-best-practices#configure-allowed-tools)
* [CLI Command Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)
* [CLI Config Dir Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-config-dir-reference#permissions-configjson)
