# Customize agent workflows with hooks

Hooks allow you to extend and customize the behavior of GitHub Copilot agents by executing custom shell commands at key points during agent execution. For a conceptual overview of hooks—including details of the available hook triggers—see [Hooks](https://docs.github.com/en/copilot/concepts/agents/hooks).


## Creating a hook in a repository on GitHub

1. Create a new `NAME.json` file (where `NAME` describes the purpose of the file) in the `.github/hooks/` folder of your repository.

   > [!IMPORTANT]
   > The hooks configuration file **must be present** on your repository's default branch to be used by Copilot cloud agent.

1. In your text editor, copy and paste the following hook template. Remove any hooks you don't plan on using from the `hooks` array.

   ```json copy
   {
     "version": 1,
     "hooks": {
       "sessionStart": [...],
       "sessionEnd": [...],
       "userPromptSubmitted": [...],
       "preToolUse": [...],
       "postToolUse": [...],
       "errorOccurred": [...]
     }
   }
   ```

1. Configure your hook syntax under the `bash` and `powershell` keys, or directly reference script files you have created.

   > [!NOTE]
   > Include both a `bash` key (with a script for Linux and macOS) and a `powershell` key (for a script for Windows) to allow the hooks to run on all three operating systems. Copilot uses the appropriate key based on the user's operating system.

   * This example runs a script that outputs the start date of the session to a log file using the `sessionStart` hook:

     ```json copy
     "sessionStart": [
       {
         "type": "command",
         "bash": "echo \"Session started: $(date)\" >> logs/session.log",
         "powershell": "Add-Content -Path logs/session.log -Value \"Session started: $(Get-Date)\"",
         "cwd": ".",
         "timeoutSec": 10
       }
     ],
     ```

   * This example calls out to an external `log-prompt` script:

     ```json copy
     "userPromptSubmitted": [
       {
         "type": "command",
         "bash": "./scripts/log-prompt.sh",
         "powershell": "./scripts/log-prompt.ps1",
         "cwd": "scripts",
         "env": {
           "LOG_LEVEL": "INFO"
         }
       }
     ],
     ```

     For a full reference on the input JSON from agent sessions along with sample scripts, see [Hooks Reference](https://docs.github.com/en/copilot/reference/hooks-reference).

1. Commit the file to the repository and merge it into the default branch. Your hooks will now run during agent sessions.


## Troubleshooting

If you run into problems using hooks, use the following table to troubleshoot.

| Issue | Action |
| --- | --- |
| Hooks are not executing | <ul><li>Verify the JSON file is in the `.github/hooks/` directory.</li><li>Check for valid JSON syntax (for example, `jq .  hooks.json`).</li><li>Ensure `version: 1` is specified in your `hooks.json` file.</li><li>Verify the script you are calling from your hook is executable (`chmod +x script.sh`)</li><li>Check that the script has a proper shebang (for example, `#!/bin/bash`)</li></ul> |
| Hooks are timing out | <ul><li>The default timeout is 30 seconds. Increase `timeoutSec` in the configuration if needed.</li><li>Optimize script performance by avoiding unnecessary operations.</li></ul> |
| Invalid JSON output | <ul><li>Ensure the output is on a single line.</li><li>On Unix, use `jq -c` to compact and validate the JSON output.</li><li>On Windows, use the `ConvertTo-Json -Compress` command in PowerShell to do the same.</li></ul> |

## Debugging

You can debug hooks using the following methods:

* **Enable verbose logging** in the script to inspect the input data and trace script execution.

  ```shell copy
  #!/bin/bash
  set -x  # Enable bash debug mode
  INPUT=$(cat)
  echo "DEBUG: Received input" >&2
  echo "$INPUT" >&2
  # ... rest of script
  ```

* **Test hooks locally** by piping test input into your hook to validate its behavior:

  ```shell copy
  # Create test input
  echo '{"timestamp":1704614400000,"cwd":"/tmp","toolName":"bash","toolArgs":"{\"command\":\"ls\"}"}' | ./my-hook.sh

  # Check exit code
  echo $?

  # Validate output is valid JSON
  ./my-hook.sh | jq .
  ```

## Further reading

* [Hooks Reference](https://docs.github.com/en/copilot/reference/hooks-reference)
* [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent)
* [About Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli)
* [Customize The Agent Environment](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment)
