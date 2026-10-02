> [!NOTE]
> Computer use is in public preview and subject to change.


## About computer use

Copilot can interact with desktop applications on your behalf by reading accessible application content and visual context, clicking controls, entering and editing text, pressing keys, scrolling, dragging, and navigating workflows across applications.

This capability is useful for workflows in legacy and GUI-only software that do not provide an API, command-line interface, or MCP integration. It is available for local sessions on macOS and Windows.

For information about its capabilities, controls, and limitations, see [Computer Use](https://docs.github.com/en/copilot/concepts/agents/computer-use).

## Checking computer use status

In an interactive Copilot CLI session, enter:

```text copy
/computer show
```

Copilot CLI reports whether the computer-use plugin, MCP server, and associated skills are enabled.

## Enabling computer use

In an interactive session, enter:

```text copy
/computer on
```

Copilot CLI saves your preference and enables the bundled computer-use plugin. If your organization has disabled computer use, the CLI reports that it is blocked by managed settings. Your local preference cannot override the policy.

On macOS, computer use guides you through granting Accessibility and Screen Recording permissions.

## Using computer use

Computer use works best when you describe the outcome you want, the applications involved, and any important constraints.

For example:

```text copy
Open APP_NAME and summarize the status information shown in the
main window. Do not change any values or submit any forms.
```

Replace `APP_NAME` with the name of an application installed on your computer.

Computer use follows the active Copilot CLI permission mode. This mode determines whether Copilot asks for approval before controlling an application. Enter `/permissions show` to review the active mode. When approval is required, choose **Allow** to grant access for the current computer-use session, **Always allow** to save the approval for future sessions, or decline or cancel the request.

If you choose **Always allow** for an application, the saved approval also applies when you use computer use in GitHub Copilot app on the same computer. When a prompt appears, confirm that the application and action match your request. Configured deny rules still take precedence.

To interrupt an active operation, press <kbd>Esc</kbd> twice.

For information about configuring tool permissions, see [Allowing Tools](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools).

## Disabling computer use

In an interactive session, enter:

```text copy
/computer off
```

To confirm that the plugin and MCP server are disabled, use `/computer show`.

## Troubleshooting computer use

* If `/computer show` reports that computer use is unavailable, confirm that the feature is available for your account and that you are using a local session on a supported operating system.
* If computer use is enabled but does not work, use `/plugin` to check that the bundled `computer-use` plugin is enabled and `/mcp list` to check that its MCP server is connected.
* On macOS, confirm that the computer-use helper has both Accessibility and Screen Recording permissions.
