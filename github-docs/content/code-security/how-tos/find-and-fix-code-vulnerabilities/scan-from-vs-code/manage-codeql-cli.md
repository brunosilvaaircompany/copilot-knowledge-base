# Managing the CodeQL CLI in the VS Code extension

The CodeQL extension automatically installs a compatible version of the CodeQL CLI. This instance of the CodeQL CLI is not accessible from the terminal.

If you already have the CodeQL CLI installed and added to your `PATH`, the extension will use that version.

## Installing version updates

The extension checks for updates to the CodeQL CLI automatically and prompts you to accept the updated version.

You can check for updates manually with the **CodeQL: Check for CLI Updates** command from the VS Code Command Palette.

## Using a different CodeQL CLI installation

To override the default behavior and use a specific version of the CodeQL CLI, you can specify the CodeQL CLI **Executable Path** in the extension settings. See [Customize Settings](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-vs-code/customize-settings).

## Troubleshooting

You can check the CodeQL Extension log for error messages or to see the location of the CodeQL CLI being used. See [Accessing Logs](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/scan-from-vs-code/accessing-logs).
