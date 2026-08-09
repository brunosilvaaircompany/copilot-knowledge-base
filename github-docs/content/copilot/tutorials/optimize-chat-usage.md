# Optimize GitHub Copilot Chat context to reduce AI credit usage

## Continue a conversation when the context is still relevant

Continue the same conversation when your next prompt depends on earlier messages. For example:

* You're refining code that Copilot already generated.
* You're debugging the same error across multiple prompts.
* You're iterating on one design, test plan, or implementation approach.

Keeping related prompts together helps Copilot keep the right context and reduces repetition.

## Start a new conversation when you switch tasks

Start a new conversation when your next prompt is about a different problem. For example:

* You finished one feature and are starting another.
* You're moving from coding work to documentation or release work.
* The existing thread contains context that no longer applies.

Starting fresh helps Copilot focus on your new goal.

## Understand how conversation length affects AI credits usage

Each prompt in Copilot Chat is processed with your new message and relevant context, such as conversation history, selected files, and tool results.

Longer threads can require more context to be processed for each new prompt. More processed context can increase token usage, which can increase AI credits usage.


## Further reading

* [Optimize Ai Usage](https://docs.github.com/en/copilot/tutorials/optimize-ai-usage)
* [Best Practices](https://docs.github.com/en/copilot/get-started/best-practices)
