# Setting an AI credit session limit in GitHub Copilot CLI

> [!NOTE]
> AI credit session limits are currently in public preview and subject to change.

An AI credit session limit caps the amount of GitHub AI Credits that Copilot can spend in a session.

AI credits are the unit Copilot uses to track the cost of AI model interactions: each credit equals $0.01 USD, and usage depends on the model and the number of tokens consumed.

When you set an AI credit session limit for Copilot, instead of running until the task is done or until you intervene, Copilot stops when it hits the limit and gives you the option to reset or adjust it.

These session limits are **soft limits**. If a response is in progress when the limit is reached, that response completes before the session stops, so actual usage may slightly exceed the configured number.

## Setting an AI credit session limit

How the limit is set and applied depends on whether you are in an interactive session or running the CLI programmatically.

> [!TIP]
> AI credit session limits work best when set to > 30 AI credits as most model calls will cost more than 20 AI credits.

### Setting a limit within an interactive session

In an interactive CLI session, the limit applies for the entire session and depletes as each message is processed, independent of how many messages you send. When the limit is reached, you are prompted to reset it.

To set your session limit, use `/limits set`.

```copilot copy
/limits set max-ai-credits NUMBER
```

To remove the limit, enter:

```copilot copy
/limits unset
```

### Setting a limit in non-interactive mode

When you run Copilot CLI programmatically from the command line, the limit applies for the duration of Copilot's work on the task and remains active until Copilot finishes responding.

To set a limit, pass `--max-ai-credits=NUMBER`.

```bash copy
copilot -p "YOUR PROMPT" --max-ai-credits NUMBER
```

## What happens when the limit is reached

When the limit is hit, the agent stops cleanly and lets you know.

* **In interactive mode**, you are prompted to reset the limit. You can use `/limits set` to raise the limit and continue your session from where the agent stopped.
* **In non-interactive mode**, the run ends when the limit is reached.

## Further reading

* [Optimize Ai Usage](https://docs.github.com/en/copilot/tutorials/optimize-ai-usage)
* [What are GitHub AI Credits](/copilot/concepts/billing/usage-based-billing-for-individuals#what-are-github-ai-credits)
